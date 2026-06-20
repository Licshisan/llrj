import {
  _decorator,
  Button,
  Color,
  Component,
  director,
  Label,
  Node,
  SafeArea,
  Sprite,
  Widget,
} from 'cc';
import { 保存存档, 存档 } from '../管理器/存档管理器';
import {
  计算数值,
  计算最大攻击,
  计算最大生命,
  计算最大精力,
  计算最大防御,
  计算最大饥饿,
} from '../方法函数/属性计算';
import { 抽取项目, 抽取物品, 自然恢复生命, 对象求和 } from '../方法函数/公共函数';
import { 播放文本, 放大缩小 } from '../方法函数/动画效果';
import { 事件 } from './事件';
import { 战斗 } from './战斗';
import { 执行钩子 } from '../管理器/钩子管理器';
import { 设置 } from '../管理器/设置管理器';
import { 获取当前日记 } from '../默认内容/日记表';
import { 获取地区名称, 获取当前地区 } from '../默认内容/地区表';
import { 玩家 } from '../管理器/玩家管理器';
import { 计算得分 } from '../公共方法/最终得分';
import { 获取榜一大哥请求, 获取随机存档请求 } from '../方法函数/网络请求';
import { 音频管理器 } from './音频';
const { ccclass, property } = _decorator;

@ccclass('主页')
export class 主页 extends Component {
  @property(Node) 顶部状态栏: Node = null;
  @property(Node) 信息栏: Node = null;
  @property(Node) 状态栏: Node = null;
  @property(Node) 标签: Node = null;
  @property(Node) 按钮容器: Node = null;
  @property(Node) 背景: Node = null;
  // 主动技
  @property(Node) 苦肉按钮: Node = null;

  按钮冷却中 = false;
  冷却时间 = 0.2;

  start() {
    globalThis.页面来源 = '主页';
    音频管理器.instance.stopBGM()

    this.更新();
    this.回档();
    this.游戏结束();
    this.主动技能();

    this.按钮容器.getChildByName('睡觉').on(
      Button.EventType.CLICK,
      () => {
        if (this.按钮冷却中) return;
        音频管理器.instance.playByName("button")
        this.按钮冷却中 = true;
        this.scheduleOnce(() => (this.按钮冷却中 = false), this.冷却时间);
        this.点击睡觉();
      },
      this,
    );
    this.按钮容器.getChildByName('挑战').on(
      Button.EventType.CLICK,
      () => {
        if (this.按钮冷却中) return;
        音频管理器.instance.playByName("button")
        this.按钮冷却中 = true;
        this.scheduleOnce(() => (this.按钮冷却中 = false), this.冷却时间);
        this.点击挑战();
      },
      this,
    );
    this.按钮容器.getChildByName('前进').on(
      Button.EventType.CLICK,
      () => {
        if (this.按钮冷却中) return;
        音频管理器.instance.playByName("walk")
        this.按钮冷却中 = true;
        this.scheduleOnce(() => (this.按钮冷却中 = false), this.冷却时间);
        this.点击前进();
      },
      this,
    );
    this.按钮容器.getChildByName('探索').on(
      Button.EventType.CLICK,
      () => {
        if (this.按钮冷却中) return;
        音频管理器.instance.playByName("walk")
        this.按钮冷却中 = true;
        this.scheduleOnce(() => (this.按钮冷却中 = false), this.冷却时间);
        this.点击探索();
      },
      this,
    );
    this.按钮容器.getChildByName('结局').on(
      Button.EventType.CLICK,
      () => {
        if (this.按钮冷却中) return;
        音频管理器.instance.playByName("walk")
        this.按钮冷却中 = true;
        this.scheduleOnce(() => (this.按钮冷却中 = false), this.冷却时间);
        this.点击结局();
      },
      this,
    );

    this.按钮容器
      .getChildByName('伙伴')
      .on(Button.EventType.CLICK, () => {
        音频管理器.instance.playByName("button")
        director.loadScene('伙伴')
      }, this);
    this.按钮容器
      .getChildByName('进食')
      .on(Button.EventType.CLICK, () => {
        音频管理器.instance.playByName("button")
        director.loadScene('进食')
      }, this);
    this.按钮容器
      .getChildByName('制作')
      .on(Button.EventType.CLICK, () => {
        音频管理器.instance.playByName("button")
        director.loadScene('制作')
      }, this);
    this.按钮容器
      .getChildByName('特性')
      .on(Button.EventType.CLICK, () => {
        音频管理器.instance.playByName("button")
        director.loadScene('特性')
      }, this);
    this.按钮容器
      .getChildByName('商店')
      .on(Button.EventType.CLICK, () => {
        音频管理器.instance.playByName("button")
        director.loadScene('商店')
      }, this);
    this.信息栏.on(
      Node.EventType.TOUCH_END,
      () => {
        if (存档.当前事件 || 存档.当前敌人) return;
        音频管理器.instance.playByName("button")
        director.loadScene('面板');
      },
      this,
    );
    this.暗夜模式();
    this.加载榜一大哥();
  }

  主动技能() {
    this.苦肉按钮.active = 存档.天赋["死侍"] > 0
    this.苦肉按钮.on(Button.EventType.CLICK, () => {
      if(存档.天赋["死侍"]){
        存档.健康 -= 1
        存档.其他.苦肉发动次数 ++
        this.更新()
        this.播放文本(`【苦肉发动，健康-1，当日攻防血属性+5%！今日已触发${存档.其他.苦肉发动次数}次，全属性提升${存档.其他.苦肉发动次数 * 5}%`);
      }
    }, this);
  }

  回档() {
    this.scheduleOnce(() => {
      if (存档.当前剧情) {
        director.loadScene('剧情');
      } else if (存档.当前敌人) {
        this.node.getComponent(战斗).进入战斗(存档.当前敌人);
      } else if (存档.当前事件) {
        this.node.getComponent(事件).触发事件(存档.当前事件);
      } else if (存档.当前文本) {
        this.标签.getComponent(Label).string = 存档.当前文本;
      }
    }, 0);
  }

  游戏结束() {
    // 普通死亡
    if (存档.健康 <= 0) {
      const 地区名 = 获取地区名称();
      if (地区名 === '荒野') {
        存档.当前剧情 = '客死他乡';
      } else if (地区名 === '县城') {
        存档.当前剧情 = '无奈的人生';
      } else if (地区名 === '山脉') {
        存档.当前剧情 = '山雾茫茫';
      } else if (地区名 === '山林') {
        存档.当前剧情 = '山雾茫茫';
      } else {
        存档.当前剧情 = '一个人的庆典';
        if (存档.当前地点 === '市中心') {
          存档.当前剧情 = '无名的留言';
        } else if (存档.当前地点 === '郊外') {
          存档.当前剧情 = '相似的绿色';
        } else if (存档.当前地点 === '城中村') {
          存档.当前剧情 = '喧嚣的孤独';
        } else if (存档.当前地点 === '山洞') {
          存档.当前剧情 = '未完成的计数';
        }
      }

      const 复活机会 = 计算数值('复活机会');
      if (存档.其他.使用复活机会次数 < 复活机会 && !存档.其他.选择死亡) {
        存档.其他.使用复活机会次数++;
        存档.当前剧情 = '复活';
      }

      保存存档();
      director.loadScene('剧情');
      return;
    }

    // 没打过boss
    if (存档.天数 >= 180 && !存档.剧情.通关 && 存档.健康 > 0) {
      存档.当前剧情 = '往事如烟';
      保存存档();
      director.loadScene('剧情');
      return;
    }

    // 通关BOSS
    if (存档.天数 >= 180 && 存档.剧情.通关) {
      存档.按钮.伙伴 = 0;
      存档.按钮.制作 = 0;
      存档.按钮.前进 = 0;
      存档.按钮.商店 = 0;
      存档.按钮.挑战 = 0;
      存档.按钮.探索 = 0;
      存档.按钮.特性 = 0;
      存档.按钮.睡觉 = 0;
      存档.按钮.进食 = 0;
      存档.按钮.结局 = 1;

      this.顶部状态栏.active = false;
      this.信息栏.active = false;
      this.状态栏.active = false;
      this.更新();
      保存存档();
    }
  }

  点击结局() {
    const 结局 = [
      '整个城市被大雾笼罩，身边的人影开始慢慢消失，周围没有一点声音...',
      '一个男人的身影缓缓浮现，一步步向我走了过来...',
      '“欢迎你的到来，我的朋友；这里是游戏的终点，我是这个游戏的作者”',
      '“虽然你可能有很多疑问，但是我并不想在这里回答你；我到这里来，只是想收获我的游戏成果”',
      '“但是在此之前，有些东西我需要向你交代一下。”',
      '“首先，在这个游戏里，只有两个真正的角色————你和我”',
      '“其他角色，只不过是我所创造的虚拟角色”',
      '“这个世界中既不存在「父亲」，也没有「刀疤男」和「通缉犯」”',
      '“我并不关心这些虚拟角色的「命运」，我只在意你体验完游戏后，获得了什么”',
      '“希望你能认真的回答我几个问题，我将根据问题的答案、和你在游戏中的所有选择，给出我的个人评价”',
      '“如果评价没有达到我的预期，你的游戏存档将会被我删除，那么请开始答题吧~”',
    ];
    if (结局[存档.其他.结局剧情]) {
      this.播放文本(结局[存档.其他.结局剧情]);
      存档.其他.结局剧情++;
      保存存档();
      return;
    }

    if (!存档.其他.完成问卷) {
      this.node.getComponent(事件).触发事件('问卷1');
      保存存档();
      return;
    }

    if (!存档.其他.完成选择保留天赋) {
      this.node.getComponent(事件).触发事件('走到最后');
      保存存档();
      return;
    }

    const { 剧情得分, 属性得分, 最终得分 } = 计算得分();
    存档.其他.最终得分 = 最终得分;

    let 通关文本 = `“总分为${最终得分}，高于通关所需分数（30分）。你可以过关啦~”`;
    if (最终得分 <= 30) {
      通关文本 = `“总分为${最终得分}，低于通关所需分数（30分）。不过放心，你的存档不会被我删除~”`;
    }
    const 得分结局 = [
      `“你的答题评分为30（满分30，与刚才十个题目有关）。\n这部分设计目的、只是想引导你去思考这些问题，你随便怎么选都可以，我不会去要求你必须怎么样”`,
      `“游戏评分为${剧情得分}（满分22，与你在游戏中的选择有关）。\n这部分是考察你游戏的策略性和你的性格（游戏性格，不必较真）”`,
      `“属性评分为${属性得分}（满分18，攻防血属性越「低」分数越高！）\n这里很有必要解释下为何、要这么设计：\n第一，我想让你注重培养伙伴、被动技和某些道具，而不仅是仅用属性碾压 \n第二，低属性通关比可能比高属性通关更具挑战性！”`,
      通关文本,
      '“不过你想看到一个什么样的结局，将由你自己去选择。我需要指出的是，无论你如何选择，游戏都将结束。请做出你的选择。”',
    ];
    if (得分结局[存档.其他.得分结局]) {
      this.播放文本(得分结局[存档.其他.得分结局]);
      存档.其他.得分结局++;
      保存存档();
      return;
    }

    if (!存档.其他.选择回家) {
      this.node.getComponent(事件).触发事件('选择回家');
      保存存档();
      return;
    }

    const 回家结局 = [
      '听说中年大叔遗体被人领走啦，被一个中年妇女。（地点：省城。结局：安息吧，痛苦）',
      '落满枫叶的小路上，晓月正和几位同学手舞足蹈的说着些什么，不知道她是否还记得那个安静的少年呢？（地点：省城。结局：两个世界）',
      '再次碰到小兰时，她衣着端庄，在一家化妆品店做销售，她说，“还是自立过得舒坦呀，虽然没啥钱...”（地点：省城。结局：从零开始）',
      '我再也没有等到碧瑶的消息，她能还清那些巨额的债款吗？”（地点：省城。结局：懵懂的青春）',
      '老爷爷，你还好吗？（地点：省城。结局：无奈的人生）',
      '与世隔绝的大山中，地质队长正在台灯下撰写报告；而在另一头，她的女儿正准备在论坛上通宵怼那些侮辱她偶像的人。（地点：山脉。结局：隔阂）',
      '堂主的母亲突发脑溢血过世，他像孤魂一样终日在山间游荡着...（地点：山脉。结局：游荡的灵魂）',
      '那个可疑的村庄已被警察封锁。（地点：山脉。结局：封锁的造毒窝点）',
      '老人的房子前已长满杂草，房内早已空荡荡...（地点：山脉。结局：天空的流星）',
      '年轻的妈妈和小女孩依旧在河边散步，小女孩对着一个流浪汉做了一个鬼脸...（地点：县城。结局：榜样）',
      '抽烟的中年女人找到一个胖嘟嘟的男友。“虽然经常挨打，但是总算不是一个人了”，女人抽着烟，淡淡的说道。（地点：县城。结局：可怜还是可恨？）',
      '送糖的小男孩，作文拿到全县第一名，梦里笑醒的妈妈、大半夜跑到便利店给他买了一大盒五颜六色的棒棒糖...等待着儿子的苏醒。（地点：县城。结局：甜甜的男孩）',
      '三个流浪汉已经三分县城，各自守着自己的地盘...（地点：县城。结局：扩散的黑暗）',
      '呆萌的女贼打算放弃原来的职业，因为她找到了更稳定的生存方法————捡塑料瓶...（地点：山脉。结局：孤儿的挣扎）',
      '推开栅栏，院子里长满了杂草，似乎很久没人居住...（地点：家）',
      '门是开着的，屋里没有灯火，静悄悄的；青灰色的屋顶、几颗新绿色的嫩芽，在夕阳的余晖下，显得格外的安静。一只猫咪在门前的阳光下打着哈欠（地点：家）',
      '一个满头白发的老人，忽然呆在了门口....',
      '...全剧终...',
      '「感谢您能陪我看到最后！我是晓风，再会啦~」',
    ];

    if (存档.剧情.愿意回家 && 回家结局[存档.其他.回家结局]) {
      this.播放文本(回家结局[存档.其他.回家结局]);
      存档.其他.回家结局++;
      保存存档();
      return;
    }

    if (!存档.剧情.愿意回家) {
      if (存档.伙伴.晓月关系) {
        存档.当前剧情 = '晓月结局';
      } else if (
        存档.伙伴.碧瑶关系 &&
        存档.伙伴.碧瑶好感 >= 5000 &&
        存档.剧情.击败阿胜 &&
        存档.剧情.通关 &&
        存档.其他.最终得分 >= 60
      ) {
        存档.当前剧情 = '碧瑶同行';
      } else if (存档.伙伴.碧瑶好感 > 999) {
        存档.当前剧情 = '碧瑶结局';
      } else if (存档.剧情.住在桥洞) {
        存档.当前剧情 = '桥洞结局';
      }
      director.loadScene('剧情');
      保存存档();
      return;
    }

    director.loadScene('分数');
  }

  暗夜模式() {
    if (设置.经典比例) {
      const safeArea = this.node.getComponent(SafeArea);
      if (safeArea) {
        safeArea.enabled = false;
      }
      const widget = this.node.getComponent(Widget);
      if (widget) {
        widget.top = 0;
        widget.bottom = 0;
        widget.left = 0;
        widget.right = 0;
        widget.updateAlignment();
      }
    }

    if (设置.暗夜模式) {
      const 标签 = this.node.getComponentsInChildren(Label);
      标签.forEach((label) => {
        if (label.color.equals(Color.BLACK)) {
          label.color = new Color(220, 220, 220);
        }
      });
      this.背景.getComponent(Sprite).color = new Color(20, 20, 20);
    }
  }

  async 加载榜一大哥() {
    if (!存档.临时数据.榜一大哥 && 存档.其他.挑战进度 >= 16 ) {
      存档.临时数据.榜一大哥 = (await 获取榜一大哥请求()) || null;
    }

    if(!存档.临时数据.时空流浪者){
      存档.临时数据.时空流浪者 = (await 获取随机存档请求(存档.天数 + 1)) || null;
    }
    保存存档()
  }

  点击睡觉() {
    if (存档.剧情.住在桥洞) {
      director.loadScene('桥洞');
    } else {
      if (存档.精力 > 0 || 设置.防误触) {
        const 提示文本 =
          存档.精力 > 0 ? '系统检测到你还有剩余的精力，是否要睡觉？' : '防误触提示：是否要睡觉？';
        globalThis.确认参数 = {
          文本: 提示文本,
          按钮: {
            确认睡觉: () => {
              this.进入睡觉流程();
            },
            返回: () => director.loadScene('主页'),
          },
        };
        director.loadScene('确认');
        return;
      }
      this.进入睡觉流程();
    }
  }

  进入睡觉流程() {
    if (获取当前日记()) {
      director.loadScene('日记');
    } else {
      director.loadScene('睡觉');
    }
  }

  点击挑战() {
    if (存档.精力 < 10) {
      this.播放文本('挑战需10点精力！');
      return;
    }
    const 挑战组 = [
      '眼镜王蛇（精英）',
      '逃犯（精英）',
      '深渊巨蟒',
      '机械人（被害妄想症）',
      '女剑士（中二病他姐）',
      '天下第一乖（么么啾）',
      '红狼',
      '8号拳师',
      '双枪老太婆',
      '自爆蛋',
      '晓风基因计划',
      '一块黑色的石头',
      '机甲少女',
      '炮击少女',
      '吾王',
      '晓风',
      '基因改造人',
      '镜像人',
      '榜一大哥',
      '一拳超人',
      '南天门大将军',
      '统御万天无极大道至真妙有玄穹高上帝'
    ];
    const 敌人名称 = 挑战组[存档.其他.挑战进度];
    if (!敌人名称) {
      this.播放文本('你已经天下无敌了...');
      return;
    }
    存档.精力 -= 10;
    this.node.getComponent(战斗).进入战斗(敌人名称);
  }

  点击前进() {
    if (!this.前置条件() || !this.前进条件()) {
      this.更新();
      保存存档();
      return;
    }
    执行钩子('前进前');
    this.基本消耗();
    this.主要逻辑();
    存档.距离++;
    放大缩小(this.信息栏.getChildByName('距离'));
    执行钩子('前进后');
    if (存档.距离 >= 300) {
      存档.距离 = 300;
    }
    this.更新();
    保存存档();
  }

  点击探索() {
    if (!this.前置条件() || !this.探索条件()) {
      this.更新();
      保存存档();
      return;
    }
    执行钩子('探索前');
    this.基本消耗();
    this.主要逻辑();
    执行钩子('探索后');

    if (存档.当前地点 === '山洞') {
      存档.其他.山洞进度 += 1;
    }
    if (获取地区名称() === '县城') {
      存档.其他.单日县城探索次数 += 1;
    }
    this.更新();
    保存存档();
  }

  前置条件() {
    if (存档.当前事件 || 存档.当前敌人) {
      return false;
    }

    if (存档.健康 <= 0) {
      this.游戏结束();
      return false;
    }

    // 领取补偿
    const 补偿 = (玩家.server_info?.compensations as Record<string, number>) || {};
    if (对象求和(补偿) && !存档.其他.拒绝领取补偿) {
      this.node.getComponent(事件).触发事件('领取补偿');
      return false;
    }

    const 前进探索消耗精力 = 计算数值('前进探索消耗精力', 10);
    if (存档.精力 < 前进探索消耗精力 || 存档.精力 <= 0) {
      this.播放文本('精力不足！');
      return false;
    }

    // 掠夺天赋
    if (存档.其他.待抢夺) {
      存档.其他.待抢夺 = 0;
      this.node.getComponent(事件).触发事件('抢夺天赋');
      return false;
    }

    return true;
  }

  前进条件() {
    if (存档.距离 === 1) {
      存档.按钮.特性 = 1;
      return true;
    }
    if (存档.距离 === 2) {
      存档.按钮.睡觉 = 1;
      return true;
    }
    if (存档.距离 === 3) {
      存档.按钮.进食 = 1;
      return true;
    }
    if (存档.距离 === 6) {
      存档.按钮.制作 = 1;
      return true;
    }
    if (存档.距离 === 44) {
      存档.按钮.挑战 = 1;
      return true;
    }
    // 进入县城
    if (存档.距离 === 99) {
      存档.按钮.前进 = 0;
      存档.按钮.探索 = 1;
      存档.按钮.商店 = 1;
      存档.距离++;
      this.播放文本('你已到达县城！开始探索吧~');
      return false;
    }
    //离开县城
    if (存档.距离 === 100) {
      this.node.getComponent(事件).触发事件('离开县城');
      return false;
    }
    // 晓月剧情
    if (存档.距离 === 289) {
      if (存档.伙伴.晓月关系) {
        存档.当前剧情 = '通缉犯';
        director.loadScene('剧情');
        存档.距离++;
        return false;
      }

      if (存档.伙伴.青芽关系) {
        存档.当前剧情 = '青芽的困境';
        director.loadScene('剧情');
        存档.距离++;
        return false;
      }
    }
    // 进入省城
    if (存档.距离 === 299) {
      存档.按钮.前进 = 0;
      存档.按钮.探索 = 1;
      存档.按钮.商店 = 1;
      存档.剧情.住在桥洞 = 1;
      存档.距离++;
      if (存档.伙伴.晓月关系) {
        存档.当前剧情 = '告别晓月';
        director.loadScene('剧情');
        return false;
      }
      this.播放文本('你已到达省城！');
      return false;
    }

    return true;
  }

  探索条件() {
    // 千元户
    if(获取地区名称() === '省城' && 存档.天数 <= 42){
      存档.其他.进入省城携带金钱 = Math.max(存档.金钱, 存档.其他.进入省城携带金钱);
    }

    // 县城天数限制
    const 计算县城停留天数 = 计算数值('县城停留天数', 42);
    if (获取地区名称() === '县城' && 存档.天数 >= 计算县城停留天数) {
      if (存档.距离 === 100) {
        存档.按钮.前进 = 1;
        this.更新();
        this.播放文本('再待下去迟早会被发现，还是去省城看看吧！');
        return false;
      }
    }

    // 山脉天数限制
    if (获取地区名称() === '山脉' && 存档.天数 >= 80) {
      if (存档.距离 > 100 && 存档.距离 < 300) {
        this.播放文本('还是先去省城整顿一下吧！');
        return false;
      }
    }

    // 森林天数限制
    if (获取地区名称() === '山林' && 存档.天数 >= 80) {
      if (存档.距离 > 100 && 存档.距离 < 300) {
        this.播放文本('还是先去省城整顿一下吧！');
        return false;
      }
    }

    // 比武大会
    if (
      存档.当前地点 === '市中心' &&
      存档.停留天数.省城 >= 30 &&
      存档.停留天数.省城 <= 36 &&
      !存档.其他.比武大会结束
    ) {
      if (存档.其他.比武大会进度 < 3 && !存档.其他.当日触发比武大会) {
        存档.其他.当日触发比武大会 = 1;
        this.基本消耗();
        this.node.getComponent(事件).触发事件('比武大会');
        return false;
      }
      if (存档.其他.比武大会进度 === 3 && !存档.其他.当日触发比武大会) {
        存档.其他.当日触发比武大会 = 1;
        this.基本消耗();
        this.node.getComponent(事件).触发事件('最终比武');
        return false;
      }
      // 可造之才
      if (存档.其他.比武大会进度 === 4 && (存档.游戏难度 === '残酷' || 存档.游戏难度 === '绝境')) {
        存档.其他.当日触发比武大会 = 1;
        this.基本消耗();
        this.node.getComponent(事件).触发事件('可造之才');
        return false;
      }
    }

    // 地下入口
    if (存档.当前地点 === '城中村' && 存档.停留天数.省城 < 14 && !存档.其他.解锁地下竞技场) {
      if (!存档.剧情.待接受竞技场邀请 && Math.random() * 100 < 1) {
        this.基本消耗();
        this.node.getComponent(事件).触发事件('地下入口');
        return false;
      }
      if (存档.剧情.待接受竞技场邀请) {
        存档.剧情.待接受竞技场邀请 = 0;
        this.node.getComponent(事件).触发事件('竞技场邀请');
        return false;
      }
    }
    if (存档.当前地点 === '地下竞技场' && 存档.其他.当日比赛次数 >= 4) {
      this.播放文本('今日赛事已结束，他们再来探索吧！');
      return false;
    }

    // 江湖人士县城篇
    // if (存档.技能.世界感知 >= 2 && (存档.游戏难度 === '真实' || 存档.游戏难度 === '残酷' || 存档.游戏难度 === '绝境') && 获取地区名称() === '县城') {
    if (获取地区名称() === '县城') {
        if (!存档.其他.开启江湖支线 && !存档.其他.拒绝开启江湖支线) {
          this.基本消耗();
          this.node.getComponent(事件).触发事件('选择江湖支线');
          return false;
        }
        if (存档.其他.开启江湖支线 && !存档.剧情.完成县城江湖线) {
          const randPick = (arr) => arr[Math.floor(Math.random() * arr.length)];

          // 普通散兵
          const normal = [];
          let normal_rate = 0
          !存档.物品.青竹信物 && (normal.push("青竹门弟子"), normal_rate += 3);
          !存档.物品.铁衣信物 && (normal.push("铁衣帮弟子"), normal_rate += 3);
          !存档.物品.玄水信物 && (normal.push("玄水阁弟子"), normal_rate += 3);
          if (normal.length && Math.random() * 100 < normal_rate) {
            this.基本消耗();
            this.node.getComponent(战斗).进入战斗(randPick(normal));
            return false;
          }

          // 江湖商贩
          if (Math.random() * 100 < 5) {
            this.基本消耗();
            this.node.getComponent(事件).触发事件('江湖商贩');
            return false;
          }

          // 门派偶遇
          const meet = [];
          let meet_rate = 0;
          存档.其他.青竹步等级 > 0 && (meet.push('路过青竹门派'), meet_rate += 1.5 + 存档.其他.青竹步等级 / 10);
          存档.其他.铁衣功等级 > 0 && (meet.push('路过铁衣门派'), meet_rate += 1.5 + 存档.其他.铁衣功等级 / 10);
          存档.其他.玄水诀等级 > 0 && (meet.push('路过玄水门派'), meet_rate += 1.5 + 存档.其他.玄水诀等级 / 10);
          if (meet.length && Math.random() * 100 < meet_rate) {
            this.基本消耗();
            this.node.getComponent(事件).触发事件(randPick(meet));
            return false;
          }

          // 精英散兵
          const elite = [];
          let elite_rate = 0;
          存档.击败次数.青竹门精英 > 0 && (elite.push("青竹门精英"), elite_rate += 3);
          存档.击败次数.铁衣帮精英 > 0 && (elite.push("铁衣帮精英"), elite_rate += 3);
          存档.击败次数.玄水阁精英 > 0 && (elite.push("玄水阁精英"), elite_rate += 3);
          if (elite.length && Math.random() * 100 < elite_rate) {
            this.基本消耗();
            this.node.getComponent(战斗).进入战斗(randPick(elite));
            return false;
          }

          // 长老
          const elder = [];
          let elder_rate = 0
          存档.其他.青竹门声望 >= 100 && (elder.push('路过江湖青竹长老'), elder_rate += 4);
          存档.其他.铁衣帮声望 >= 100 && (elder.push('路过江湖铁衣长老'), elder_rate += 4);
          存档.其他.玄水阁声望 >= 100 && (elder.push('路过江湖玄水长老'), elder_rate += 4);
          if (elder.length && Math.random() * 100 < elder_rate) {
            this.基本消耗();
            this.node.getComponent(事件).触发事件(randPick(elder));
            return false;
          }

          // 掌门
          const master = [];
          let master_rate = 0;
          (存档.其他.青竹门声望 >= 100 && 存档.物品.青竹信物) && (master.push('路过江湖青竹掌门'), master_rate += 4);
          (存档.其他.铁衣帮声望 >= 100 && 存档.物品.铁衣信物) && (master.push('路过江湖铁衣掌门'), master_rate += 4);
          (存档.其他.玄水阁声望 >= 100 && 存档.物品.玄水信物) && (master.push('路过江湖玄水掌门'), master_rate += 4);
          if (master.length && Math.random() * 100 < master_rate) {
            this.基本消耗();
            this.node.getComponent(事件).触发事件(randPick(master));
            return false;
          }
        }
    }

    // 城中村住房
    if (
      存档.当前地点 === '城中村' &&
      存档.停留天数.省城 > 7 &&
      存档.技能.世界感知 >= 1 &&
      Math.random() * 100 < 1
    ) {
      this.基本消耗();
      this.node.getComponent(事件).触发事件('租房中介');
      return false;
    }

    // 郊外传说
    if (
      存档.当前地点 === '郊外' &&
      存档.天数 >= 142 &&
      存档.技能.世界感知 >= 3 &&
      存档.天数 < 145 &&
      Math.random() * 100 < 50 &&
      存档.精力 < 50
    ) {
      this.基本消耗();
      this.node.getComponent(事件).触发事件('雨夜白影');
      return false;
    }

    // 食品店
    if (存档.套餐名称 === '食补筑基' && 存档.距离 <= 179 && Math.random() * 100 < 5) {
      this.基本消耗();
      this.node.getComponent(事件).触发事件('食品店');
      return false;
    }

    if (存档.天数 >= 180) {
      director.loadScene('结局');
      return false;
    }

    return true;
  }

  基本消耗() {
    存档.精力 -= 计算数值('前进探索消耗精力', 10);

    if (存档.饥饿 >= 0) {
      存档.饥饿 -= 计算数值('前进探索消耗饥饿', 5);
    }

    自然恢复生命();
  }

  主要逻辑() {
    存档.其他.前进探索次数++;

    let 前进探索战斗初始权重 = 20;
    let 前进探索事件初始权重 = 20;
    let 前进探索收集默认权重 = 60;

    if (存档.距离 <= 3) 前进探索战斗初始权重 = 0;
    if (存档.距离 <= 5) 前进探索事件初始权重 = 0;
    // 竞技场安排
    if (存档.当前地点 === '地下竞技场') {
      前进探索战斗初始权重 = 0;
      前进探索事件初始权重 = 80;
      前进探索收集默认权重 = 20;
    }

    const 前进探索战斗权重 = 计算数值('前进探索战斗权重', 前进探索战斗初始权重);
    const 前进探索事件权重 = 计算数值('前进探索事件权重', 前进探索事件初始权重);
    const 前进探索收集权重 = 计算数值('前进探索收集权重', 前进探索收集默认权重);

    const 总权重 = 前进探索战斗权重 + 前进探索事件权重 + 前进探索收集权重;
    const 随机数 = Math.random() * 总权重;
    const 当前地区 = 获取当前地区();

    if (随机数 < 前进探索战斗权重) {
      存档.其他.战斗次数++;
      const 敌人表 = 当前地区.敌人;
      执行钩子('计算地区敌人表', [敌人表]);
      this.node.getComponent(战斗).进入战斗(抽取项目(敌人表));
    } else if (随机数 < 前进探索战斗权重 + 前进探索事件权重) {
      存档.其他.随机事件次数++;
      const 事件表 = 当前地区.事件;
      执行钩子('计算地区事件表', [事件表]);
      this.node.getComponent(事件).触发事件(抽取项目(事件表));
    } else {
      存档.其他.捡道具次数++;

      const 物品表 = 当前地区.物品;
      const 结果文本: string[] = [];
      执行钩子('计算地区物品表', [{ 物品表, 结果文本 }]);

      const 基本抽取 = 抽取物品(物品表);
      if (!基本抽取) {
        存档.其他.啥也没找到次数++;
      }
      结果文本.push(基本抽取 ? `发现：${基本抽取}` : '什么也没发现！');

      执行钩子('收集材料', [{ 物品表, 结果文本 }]);
      this.播放文本(结果文本.join('\n'));
    }
  }

  播放文本(文本: string) {
    存档.当前文本 = 文本;
    播放文本(this.标签, 文本);
  }

  更新() {
    执行钩子('主页更新');
    this.顶部状态栏.getChildByName('天数').getChildByName('标签').getComponent(Label).string =
      `${获取地区名称()}.${存档.天数}天`;
    this.顶部状态栏.getChildByName('精力').getChildByName('标签').getComponent(Label).string =
      `${存档.精力}/${计算最大精力()}`;
    this.顶部状态栏.getChildByName('饥饿').getChildByName('标签').getComponent(Label).string =
      `${存档.饥饿}/${计算最大饥饿()}`;

    this.信息栏.getChildByName('健康').getComponent(Label).string = `健康  ${存档.健康}`;
    let 颜色 = 设置.暗夜模式 ? Color.WHITE : Color.BLACK;
    if (存档.健康 <= 3) {
      颜色 = Color.RED;
    }
    this.信息栏.getChildByName('健康').getComponent(Label).color = 颜色;
    this.信息栏.getChildByName('金钱').getComponent(Label).string =
      `金钱  ${(存档.金钱 / 10).toFixed(1)}`;
    this.信息栏.getChildByName('烟酒').getComponent(Label).string =
      `烟酒  ${存档.物品.香烟}/${存档.物品.啤酒}`;
    this.信息栏.getChildByName('生命').getComponent(Label).string =
      `生命  ${Math.round(存档.生命)}/${计算最大生命()}`;
    this.信息栏.getChildByName('攻击').getComponent(Label).string = `攻击  ${计算最大攻击()}`;
    this.信息栏.getChildByName('防御').getComponent(Label).string = `防御  ${计算最大防御()}`;
    this.信息栏.getChildByName('距离').getComponent(Label).string = `离家  ${存档.距离}km`;
    this.信息栏.getChildByName('伤药').getComponent(Label).string = `伤药  ${存档.物品.伤药}`;
    this.信息栏.getChildByName('食物').getComponent(Label).string =
      `食物  ${存档.物品.果子}+${存档.物品.熟肉}`;

    this.状态栏.getChildByName('状态').getComponent(Label).string = this.计算状态文本();
    this.状态栏.getChildByName('进度').getComponent(Label).string = this.计算进度文本();

    this.按钮容器.getChildByName('商店').active = 存档.按钮.商店 > 0;
    this.按钮容器.getChildByName('挑战').active = 存档.按钮.挑战 > 0;
    this.按钮容器.getChildByName('睡觉').active = 存档.按钮.睡觉 > 0;
    this.按钮容器.getChildByName('探索').active = 存档.按钮.探索 > 0;
    this.按钮容器.getChildByName('前进').active = 存档.按钮.前进 > 0;

    this.按钮容器.getChildByName('伙伴').active = 存档.按钮.伙伴 > 0;
    this.按钮容器.getChildByName('制作').active = 存档.按钮.制作 > 0;
    this.按钮容器.getChildByName('特性').active = 存档.按钮.特性 > 0;
    this.按钮容器.getChildByName('进食').active = 存档.按钮.进食 > 0;
    this.按钮容器.getChildByName('结局').active = 存档.按钮.结局 > 0;
    this.按钮容器.getChildByName('睡觉').getChildByName('标签').getComponent(Label).string = 存档
      .剧情.住在桥洞
      ? '桥  洞'
      : '睡  觉';
  }

  计算状态文本() {
    let 状态文本 = '';
    for (const 状态 in 存档.状态) {
      if (存档.状态[状态]) {
        状态文本 += `【${状态}】 `;
      }
    }
    return 状态文本;
  }

  计算进度文本() {
    let 位置 = '';
    if (获取地区名称() === '省城') {
      位置 = 存档.当前地点 ? `「${存档.当前地点}」` : '';
      if (存档.当前地点 === '山洞') {
        位置 = `「山洞${存档.其他.山洞进度}米」`;
      }
    }

    位置 += `已停留${存档.停留天数[获取地区名称()] || 0}天 `;

    return 位置;
  }
}
