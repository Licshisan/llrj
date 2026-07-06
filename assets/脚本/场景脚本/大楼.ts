import { _decorator, Component, Node, Label, director, Button } from 'cc';
import { 保存存档, 存档 } from '../管理器/存档管理器';
import { 播放文本, 放大出现, 缩小消失 } from '../方法函数/动画效果';
import { 计算数值, 计算最大精力, 计算最大饥饿 } from '../方法函数/属性计算';
const { ccclass, property } = _decorator;

@ccclass('大楼')
export class 大楼 extends Component {
  @property(Node) 属性: Node = null;
  @property(Node) 标签: Node = null;
  @property(Node) 大楼: Node = null;
  @property(Node) 餐厅: Node = null;
  @property(Node) 心理咨询室: Node = null;

  start() {
    if (!存档.其他.电疗店开店) {
      存档.其他.电疗店开店 = 1;
      存档.其他.电疗店资产 = 800;
      存档.其他.游戏时长 = 0;
    }
    this.更新();
    this.大楼
      .getChildByName('返回按钮')
      .on(Button.EventType.CLICK, () => director.loadScene('主页'), this);

    // 一层
    const 一层按钮 = this.大楼.getChildByName('按钮容器').getChildByName('选择按钮1');
    if (Math.random() * 100 < 70) {
      const 投资成功率 = 计算数值('投资成功率', parseFloat((Math.random() * 50 + 25).toFixed(1)));
      存档.其他.金融赢钱率 = 投资成功率;
      一层按钮.getChildByName('标签').getComponent(Label).string =
        `一楼：晓风金融（赢钱概率${存档.其他.金融赢钱率}%）`;
      一层按钮.on(Button.EventType.CLICK, () => this.点击一楼(), this);
    } else {
      一层按钮.getChildByName('标签').getComponent(Label).string = '？？？？（晓风金融放假中...）';
      一层按钮.on(
        Button.EventType.CLICK,
        () => 播放文本(this.标签, '“放假啦！哈哈哈哈哈！”'),
        this,
      );
    }

    // 二层
    const 二层按钮 = this.大楼.getChildByName('按钮容器').getChildByName('选择按钮2');
    if (Math.random() * 100 < 70) {
      const 商品表 = { 晓风披肩: 100, 小裤裤: 20, 晓月手链: 20, 幸运石: 20, 板砖: 20, 滑稽裤: 20 };
      const 商品 = Object.keys(商品表);

      存档.其他.服装商品 = Math.floor(Math.random() * 商品.length);
      存档.其他.服装折扣 = Math.floor(Math.random() * 30 + 60);

      const 服装名 = 商品[存档.其他.服装商品];
      const 服装价格 = Math.floor((商品表[服装名] * 存档.其他.服装折扣) / 100);

      二层按钮.getChildByName('标签').getComponent(Label).string =
        `二楼：晓风服饰（${服装名}，${存档.其他.服装折扣}折，${(服装价格 / 10).toFixed(1)}元）`;
      二层按钮.on(Button.EventType.CLICK, () => this.点击二楼(), this);
    } else {
      二层按钮.getChildByName('标签').getComponent(Label).string = '？？？？（晓风服饰放假中...）';
      二层按钮.on(
        Button.EventType.CLICK,
        () => 播放文本(this.标签, '“放假啦！哈哈哈哈哈！”'),
        this,
      );
    }

    const 三层按钮 = this.大楼.getChildByName('按钮容器').getChildByName('选择按钮3');
    if (Math.random() * 100 < 70) {
      三层按钮.getChildByName('标签').getComponent(Label).string = '三楼：晓风料理';
      三层按钮.on(Button.EventType.CLICK, () => this.点击三楼(), this);
    } else {
      三层按钮.getChildByName('标签').getComponent(Label).string = '？？？？（晓风料理放假中...）';
      三层按钮.on(
        Button.EventType.CLICK,
        () => 播放文本(this.标签, '“放假啦！哈哈哈哈哈！”'),
        this,
      );
    }

    const 四层按钮 = this.大楼.getChildByName('按钮容器').getChildByName('选择按钮4');
    if (Math.random() * 100 < 计算数值('网吧开门概率', 70)) {
      存档.其他.游戏时长 = 0;
      const 胜率 = Math.min(存档.其他.网吧进度 / 10 + 40, 计算数值('网吧胜率上限', 75)).toFixed(1);
      四层按钮.getChildByName('标签').getComponent(Label).string =
        `四楼：晓风网咖（属性+${存档.其他.全属性加成}%，胜率${胜率}%）`;
      四层按钮.on(Button.EventType.CLICK, () => this.点击四楼(), this);
    } else {
      四层按钮.getChildByName('标签').getComponent(Label).string = '？？？？（晓风网咖放假中...）';
      四层按钮.on(
        Button.EventType.CLICK,
        () => 播放文本(this.标签, '“放假啦！哈哈哈哈哈！”'),
        this,
      );
    }

    const 五层按钮 = this.大楼.getChildByName('按钮容器').getChildByName('选择按钮5');
    if (Math.random() * 100 < 50) {
      if (存档.其他.电疗店资产 < 0) {
        五层按钮.getChildByName('标签').getComponent(Label).string = '关门大吉！转行啦~';
        五层按钮.on(
          Button.EventType.CLICK,
          () => 播放文本(this.标签, '由于经济不景气，公司倒闭，老板转行卖土鸡蛋去啦~'),
          this,
        );
      } else {
        const 电疗成功率 = Math.min(存档.停留天数.省城, 95);
        存档.其他.电疗店次数 = 0;
        存档.其他.电疗店资产 += Math.floor(Math.random() * 15 + 5);

        五层按钮.getChildByName('标签').getComponent(Label).string =
          `五楼：晓风电疗（资产${(存档.其他.电疗店资产 / 10).toFixed(1)}元,成功率${电疗成功率}%）`;
        五层按钮.on(Button.EventType.CLICK, () => this.点击五楼(电疗成功率), this);
      }
    } else {
      五层按钮.getChildByName('标签').getComponent(Label).string = '？？？？（晓风电疗放假中...）';
      五层按钮.on(
        Button.EventType.CLICK,
        () => 播放文本(this.标签, '“放假啦！哈哈哈哈哈！”'),
        this,
      );
    }

    const 六层按钮 = this.大楼.getChildByName('按钮容器').getChildByName('选择按钮6');
    if (Math.random() * 100 < 10 && 存档.技能.世界感知 >= 4) {
      存档.其他.心理咨询次数 = 0
      六层按钮.getChildByName('标签').getComponent(Label).string = '六楼：晓风心理咨询室';
      六层按钮.on(Button.EventType.CLICK, () => this.点击六楼(), this);
    } else {
      六层按钮.getChildByName('标签').getComponent(Label).string = '？？？？（晓风心理咨询室放假中...）';
      六层按钮.on(
        Button.EventType.CLICK,
        () => 播放文本(this.标签, '“咨询师外出进修，今日暂停接待~”'),
        this,
      );
    }

    // 餐厅界面
    this.餐厅.getChildByName('返回按钮').on(
      Button.EventType.CLICK,
      () => {
        缩小消失(this.餐厅);
        放大出现(this.大楼);
      },
      this,
    );

    // 巨无霸
    this.餐厅
      .getChildByName('按钮容器')
      .getChildByName('选择按钮1')
      .on(Button.EventType.CLICK, () => this.点击巨无霸(), this);
    // 炒坚果
    this.餐厅
      .getChildByName('按钮容器')
      .getChildByName('选择按钮2')
      .on(Button.EventType.CLICK, () => this.点击炒坚果(), this);


    // 心理咨询室界面
    this.心理咨询室.getChildByName('返回按钮').on(
      Button.EventType.CLICK,
      () => {
        缩小消失(this.心理咨询室);
        放大出现(this.大楼);
      },
      this,
    );

    // 基础疏导
    const 疏导成功率 = Math.min(10 + 存档.停留天数.省城, 70) + 存档.其他.心理咨询次数 * 3;
    this.心理咨询室
      .getChildByName('按钮容器')
      .getChildByName('选择按钮1').getChildByName("标签").getComponent(Label).string = `基础疏导（3元一次，成功率${疏导成功率}%，已咨询${存档.其他.心理咨询次数}/3）`

    this.心理咨询室
      .getChildByName('按钮容器')
      .getChildByName('选择按钮1')
      .on(Button.EventType.CLICK, () => this.点击基础疏导(), this);

    // 深层治疗
    const 治疗成功率 = Math.min(30 + 存档.停留天数.省城, 90) + 存档.其他.心理咨询次数 * 3;
    this.心理咨询室
      .getChildByName('按钮容器')
      .getChildByName('选择按钮2').getChildByName("标签").getComponent(Label).string = `深度治疗（18元一次，成功率${治疗成功率}%，已咨询${存档.其他.心理咨询次数}/3）`
    this.心理咨询室
      .getChildByName('按钮容器')
      .getChildByName('选择按钮2')
      .on(Button.EventType.CLICK, () => this.点击深层治疗(), this);
  }

  点击一楼() {
    if (存档.其他.金融赢钱率 === 0) {
      播放文本(this.标签, '"今日已投资，请明日再来吧~"');
      return;
    }
    if (存档.金钱 === 0) {
      播放文本(this.标签, '"不好意思，请你出去~"');
      return;
    }
    // if (存档.金钱 > 500) {
    //   播放文本(
    //     this.标签,
    //     '"不好意思，你已超过国家监管限定金额，请你去实体银行吧，我们只是网上的小银行~"',
    //   );
    //   return;
    // }
    // 超过50可用于投资
    const 投资金额 = 存档.金钱 > 500 ? 500 : 存档.金钱

    const 赢钱率 = Math.random() * 50;
    const 赢钱数 = Math.floor((投资金额 * 赢钱率) / 100);
    if (Math.random() * 100 < 存档.其他.金融赢钱率) {
      存档.金钱 += 赢钱数;
      存档.其他.投资累计收益 += 赢钱数;
      播放文本(this.标签, `投资成功！投资金额${(投资金额/ 10).toFixed(1)}元/50，金钱增加${赢钱率.toFixed(1)}%(+${(赢钱数 / 10).toFixed(1)}元)`);
    } else {
      const 投资挽回次数 = 计算数值('投资挽回次数');
      if (存档.其他.投资已挽回次数 < 投资挽回次数) {
        存档.其他.投资已挽回次数++;
        播放文本(
          this.标签,
          `投资失败...【投资失败笔记】已挽回一次投资失败金额（${存档.其他.投资已挽回次数}/${投资挽回次数}），本次投资无损失`,
        );
        return;
      }

      存档.金钱 -= 赢钱数;
      if (Math.random() * 100 < 1) {
        存档.新藏品.投资失败笔记 += 1
        播放文本(
          this.标签,
          `投资失败...金钱缩水${赢钱率.toFixed(1)}%(-${(赢钱数 / 10).toFixed(1)})，你汲取了失败的教训，获得藏品【投资失败笔记】*1`,
        );
        return;
      }
      播放文本(this.标签, `投资失败...金钱缩水${赢钱率.toFixed(1)}%(-${(赢钱数 / 10).toFixed(1)})`);
    }

    存档.其他.金融赢钱率 = 0;
    this.大楼
      .getChildByName('按钮容器')
      .getChildByName('选择按钮1')
      .getChildByName('标签')
      .getComponent(Label).string = '一楼：晓风金融（今日已结束）';
    this.更新();
  }
  点击二楼() {
    const 商品表 = { 晓风披肩: 100, 小裤裤: 20, 晓月手链: 20, 幸运石: 20, 板砖: 20, 滑稽裤: 20 };
    const 商品 = Object.keys(商品表);
    const 服装名 = 商品[存档.其他.服装商品];
    const 服装价格 = Math.floor((商品表[服装名] * 存档.其他.服装折扣) / 100);

    if (存档.其他.服装折扣 >= 9999) {
      播放文本(this.标签, '商品已售罄~');
      return;
    }
    if (存档.金钱 < 服装价格) {
      播放文本(this.标签, '金钱不足！');
      return;
    }

    存档.金钱 -= 服装价格;
    存档.物品[服装名] += 1;
    播放文本(this.标签, `获得【${服装名}】*${1}`);

    存档.其他.服装折扣 = 9999;

    this.大楼
      .getChildByName('按钮容器')
      .getChildByName('选择按钮2')
      .getChildByName('标签')
      .getComponent(Label).string = '二楼：晓风服饰（已售罄）';
    this.更新();
  }
  点击三楼() {
    缩小消失(this.大楼);
    放大出现(this.餐厅);
    this.标签.getComponent(Label).string = '';
  }
  点击四楼() {
    if (存档.其他.游戏时长 > 计算数值('网吧游戏时长上限', 30)) {
      播放文本(
        this.标签,
        '"小兄弟，没身份证的人只能临时上机两小时哦，我怕警察来查，请下次再玩吧~"',
      );
      return;
    }
    if (存档.金钱 < 1) {
      播放文本(this.标签, '没钱...');
      return;
    }

    const 特殊奖励表 = {
      20: () => {
        存档.金钱 += 1;
        return '你玩游戏的热情让网吧老板很是感动，老板鼓励你坚持梦想，并奖励你0.1元~';
      },
      50: () => {
        存档.金钱 += 5;
        return '你成功晋级青铜段位，老板流出喜悦的泪水，并奖励你0.5元~';
      },
      90: () => {
        存档.饥饿 = 计算最大饥饿();
        return '你成功晋级白银段位，老板高兴的请你吃了一顿麻辣烫，饥饿全恢复！';
      },
      140: () => {
        存档.金钱 += 20;
        存档.物品.护身符 += 1;
        return '你成功晋级黄金段位，老板奖励你2元钱，和一件个护身符~';
      },
      200: () => {
        存档.物品.小裤裤 += 1;
        存档.物品.女装 += 1;
        return '你成功晋级白金段位，老板赠送你她的贴身衣物，获得【女装】*1和【小裤裤】*1！';
      },
      300: () => {
        存档.精力 = 计算最大精力();
        return '你成功晋级钻石段位，老板兴奋地邀你去她房里睡一觉，精力全恢复！';
      },
      450: () => {
        存档.物品.放大镜 += 1;
        存档.物品.幸运石 += 1;
        存档.物品.晓月手链 += 1;
        return '你成功晋级大师段位，老板赠送你一些收集品，获得【晓月手链】*1【幸运石】*1【放大镜】*1！';
      },
      700: () => {
        存档.攻击 += 50;
        存档.防御 += 25;
        存档.最大生命 += 250;
        return '你成功晋级王者段位，老板授予你「王的男人」称号，攻击永久+50，防御永久+25，生命永久+250！';
      },
    };

    存档.金钱 -= 1;
    存档.其他.游戏时长 += 1;
    存档.其他.网吧进度 += 1;

    const 特殊奖励 = 特殊奖励表[存档.其他.网吧进度];
    if (特殊奖励) {
      播放文本(this.标签, 特殊奖励());
    } else {
      if (
        Math.random() * 100 <
        Math.min(存档.其他.网吧进度 / 10 + 40, 计算数值('网吧胜率上限', 75))
      ) {
        存档.其他.网吧连胜次数++;
        存档.其他.网吧最大连胜次数 = Math.max(存档.其他.网吧连胜次数, 存档.其他.网吧最大连胜次数);
        存档.其他.全属性加成 += 1;
        播放文本(
          this.标签,
          '游戏胜利！炒开森~攻防血提高1%（临时效果，随天数缓慢衰减）。游戏技术+1',
        );
      } else {
        存档.其他.网吧连胜次数 = 0;
        存档.其他.全属性加成 = 0;
        播放文本(this.标签, '游戏失败！不开心~属性加成消失...游戏技术+1');
      }
    }

    const 胜率 = Math.min(存档.其他.网吧进度 / 10 + 40, 计算数值('网吧胜率上限', 75)).toFixed(1);
    this.大楼
      .getChildByName('按钮容器')
      .getChildByName('选择按钮4')
      .getChildByName('标签')
      .getComponent(Label).string =
      `四楼：晓风网咖（属性+${存档.其他.全属性加成}%,胜率${胜率}%,已上网${((存档.其他.游戏时长 * 1) / 15).toFixed(1)}小时）`;
    if (存档.其他.游戏时长 > 计算数值('网吧游戏时长上限', 30)) {
      this.大楼
        .getChildByName('按钮容器')
        .getChildByName('选择按钮4')
        .getChildByName('标签')
        .getComponent(Label).string = '四楼：晓风网咖（已关门）';
    }
    this.更新();
  }
  点击五楼(电疗成功率: number) {
    if (存档.其他.电疗店次数 >= 3) {
      播放文本(this.标签, '"啊哈哈哈哈哈~有些累了...下次再来哈~"');
      return;
    }
    if (存档.金钱 < 10) {
      播放文本(this.标签, '没钱！');
      return;
    }

    存档.金钱 -= 10;
    存档.其他.电疗店资产 += 10;
    存档.其他.电疗店次数 += 1;

    if (Math.random() * 100 < 电疗成功率) {
      存档.烟瘾率 -= 1;
      播放文本(this.标签, '电疗成功！烟瘾减少1%，电疗店总资产+1元');
    } else {
      存档.健康 -= 1;
      播放文本(this.标签, '电疗失败...健康减1点...电疗店总资产+1元');
    }

    this.大楼
      .getChildByName('按钮容器')
      .getChildByName('选择按钮5')
      .getChildByName('标签')
      .getComponent(Label).string =
      `五楼：晓风电疗（资产${(存档.其他.电疗店资产 / 10).toFixed(1)}元,成功率${电疗成功率}%）`;
    this.更新();
  }
  点击六楼() {
    缩小消失(this.大楼);
    放大出现(this.心理咨询室);
    this.标签.getComponent(Label).string = '';
  }

  点击巨无霸() {
    if (存档.饥饿 > 计算最大饥饿()) {
      播放文本(this.标签, '已经吃不下啦...');
      return;
    }

    if (存档.物品.生肉 >= 4 && 存档.物品.果子 >= 5) {
      存档.饥饿 += 350;
      存档.最大饥饿 += 5;
      存档.物品.生肉 -= 4;
      存档.物品.果子 -= 5;
      存档.使用次数.巨无霸 += 1;
      播放文本(this.标签, '饥饿+350，最大饥饿值提高5点！');
    } else {
      播放文本(this.标签, '食材不足~');
    }
    this.更新();
  }
  点击炒坚果() {
    if (存档.饥饿 > 计算最大饥饿()) {
      播放文本(this.标签, '已经吃不下啦...');
      return;
    }

    if (存档.物品.果子 >= 5) {
      存档.饥饿 += 100;
      存档.健康 += 1;
      存档.物品.果子 -= 5;
      存档.使用次数.炒坚果++;
      播放文本(this.标签, '饥饿+100，健康值+1！');
    } else {
      播放文本(this.标签, '食材不足~');
    }
    this.更新();
  }

  点击基础疏导(){
    if (存档.其他.心理咨询次数 >= 3) {
      播放文本(this.标签, '今日咨询次数已满，心事留到明天再来倾诉吧');
      return;
    }
    if (存档.金钱 < 30) {
      播放文本(this.标签, '金钱不足！');
      return;
    }

    存档.金钱 -= 30;
    存档.其他.心理咨询次数 += 1;


    const 疏导成功率 = Math.min(10 + 存档.停留天数.省城, 70) + 存档.其他.心理咨询次数 * 3;
    let 提示文字 = '';

    if (Math.random() * 100 < 疏导成功率) {
      let 回精力 = Math.floor(计算最大精力() * 0.03);
      if(回精力 > 100) 回精力 = 100
      const 加健康 = Math.floor(Math.random() * 5 + 5);
      存档.精力 += 回精力;
      存档.健康 += 加健康;
      提示文字 = `一番开导舒缓压抑，精力+${回精力}，健康+${加健康}`;
    } else {
      const 扣精力 = Math.floor(计算最大精力() * 0.03);
      存档.精力 -= 扣精力;
      提示文字 = `短暂交谈没能解开郁结，内心压力加重，精力-${扣精力}`;
    }
    播放文本(this.标签, 提示文字);

    const 疏导成功率2 = Math.min(10 + 存档.停留天数.省城, 70) + 存档.其他.心理咨询次数 * 3;
    this.心理咨询室
      .getChildByName('按钮容器')
      .getChildByName('选择按钮1').getChildByName("标签").getComponent(Label).string = `基础疏导（3元一次，成功率${疏导成功率2}%，已咨询${存档.其他.心理咨询次数}/3）`
    const 治疗成功率2 = Math.min(30 + 存档.停留天数.省城, 90) + 存档.其他.心理咨询次数 * 3;
    this.心理咨询室
      .getChildByName('按钮容器')
      .getChildByName('选择按钮2').getChildByName("标签").getComponent(Label).string = `深度治疗（18元一次，成功率${治疗成功率2}%，已咨询${存档.其他.心理咨询次数}/3）`
    
      this.更新();
  }

  点击深层治疗(){
    if (存档.其他.心理咨询次数 >= 3) {
      播放文本(this.标签, '今日咨询次数已满，心事留到明天再来倾诉吧');
      return;
    }
    if (存档.金钱 < 180) {
      播放文本(this.标签, '金钱不足！');
      return;
    }

    存档.金钱 -= 180;
    存档.其他.心理咨询次数 += 1;

    const 治疗成功率 = Math.min(30 + 存档.停留天数.省城, 90) + 存档.其他.心理咨询次数 * 3;
    let 提示文字 = '';

    if (Math.random() * 100 < 治疗成功率) {
      let 回精力 = Math.floor(计算最大精力() * 0.15);
      if(回精力 > 500) 回精力 = 500
      const 加健康 = Math.floor(Math.random() * 25 + 25);
      存档.精力 += 回精力;
      存档.健康 += 加健康;
      提示文字 = `深度心理干预完成，精力+${回精力}，健康+${加健康}！`;
    } else {
      const 扣精力 = Math.floor(计算最大精力() * 0.15);
      存档.精力 -= 扣精力;
      提示文字 = `长时间心理拉扯加重内耗，精力-${扣精力}`;
    }
    播放文本(this.标签, 提示文字);

    const 疏导成功率2 = Math.min(10 + 存档.停留天数.省城, 70) + 存档.其他.心理咨询次数 * 3;
    this.心理咨询室
      .getChildByName('按钮容器')
      .getChildByName('选择按钮1').getChildByName("标签").getComponent(Label).string = `基础疏导（3元一次，成功率${疏导成功率2}%，已咨询${存档.其他.心理咨询次数}/3）`
    const 治疗成功率2 = Math.min(30 + 存档.停留天数.省城, 90) + 存档.其他.心理咨询次数 * 3;
    this.心理咨询室
      .getChildByName('按钮容器')
      .getChildByName('选择按钮2').getChildByName("标签").getComponent(Label).string = `深度治疗（18元一次，成功率${治疗成功率2}%，已咨询${存档.其他.心理咨询次数}/3）`

    this.更新();
  };

  更新() {
    this.属性.getComponent(Label).string =
      `金钱 ${(存档.金钱 / 10).toFixed(1)}\n饥饿 ${存档.饥饿}/${计算最大饥饿()}`;
    保存存档();
  }
}
