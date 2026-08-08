import { _decorator, Component, Node, Button, director, Label } from 'cc';
import { 保存存档, 存档 } from '../管理器/存档管理器';
import { 播放文本, 放大出现, 缩小消失 } from '../方法函数/动画效果';
import { 自动进食 } from '../方法函数/公共函数';
import { 计算数值, 计算最大生命, 计算最大精力, 计算最大饥饿 } from '../方法函数/属性计算';
import { 执行钩子 } from '../管理器/钩子管理器';
import { 获取当前日记 } from '../默认内容/日记表';
import { 获取地区名称 } from '../默认内容/地区表';
const { ccclass, property } = _decorator;

@ccclass('桥洞')
export class 桥洞 extends Component {
  @property(Node) 属性标签: Node;
  @property(Node) 标签: Node;
  @property(Node) 桥洞: Node;
  @property(Node) 锻炼: Node;
  @property(Node) 升级: Node;
  @property(Node) 读书: Node;
  @property(Node) 外出: Node;

  完成读书(文本: string) {
    const 结果文本 = [文本];
    执行钩子('读书', [结果文本]);
    播放文本(this.标签, 结果文本.join('\n'));
    保存存档();
    this.更新读书();
  }

  start() {
    this.更新桥洞();

    this.桥洞
      .getChildByName('返回按钮')
      .on(Button.EventType.CLICK, () => director.loadScene('主页'), this);

    // 外出
    this.桥洞
      .getChildByName('按钮容器')
      .getChildByName('选择按钮1')
      .on(
        Button.EventType.CLICK,
        () => {
          if (存档.停留天数.省城 < 12 && !存档.其他.解锁地下竞技场) {
            播放文本(this.标签, '暂未满足开启条件！加油吧~');
            return;
          }
          this.标签.getComponent(Label).string = '';
          缩小消失(this.桥洞);
          放大出现(this.外出);
          this.更新外出();
        },
        this,
      );

    //找碧瑶聊天
    this.桥洞
      .getChildByName('按钮容器')
      .getChildByName('选择按钮2')
      .on(
        Button.EventType.CLICK,
        () => {
          if (!存档.伙伴.碧瑶住在桥洞) {
            播放文本(this.标签, '暂未满足开启条件！加油吧~');
            return;
          }

          const 聊天消耗精力 = 计算数值('聊天消耗精力', 10);
          if (存档.精力 < 聊天消耗精力) {
            播放文本(this.标签, '精力不足！');
            return;
          }
          存档.精力 -= 聊天消耗精力;
          存档.其他.当天聊天次数 ++


          const e = Math.floor(存档.伙伴.碧瑶聊天成功率 + 存档.其他.流浪猫篷等级 * 2);
          if (Math.random() * 100 < e) {
            const c = [
              'liao ♂ 得不错',
              '“瑶酱~今天也要元气满满喔~”',
              '“嘿~嘿嘿~”',
              '“(｡･∀･)ﾉﾞ嗨！~上午好呀！”',
              '一波调戏',
              '一波求教',
              '“早上好呀！”',
              '“卡哇咿滴斯勒” “？”',
            ];
            const i = Math.floor(Math.random() * c.length);
            const 伙伴互动增加好感 = 计算数值('伙伴互动增加好感', 1);
            存档.伙伴.碧瑶好感 += 伙伴互动增加好感;
            存档.伙伴.碧瑶聊天成功率 += Math.floor(Math.random() * 3 + 1);
            播放文本(
              this.标签,
              `${c[i]}，好感+${伙伴互动增加好感}\n（当前好感：${存档.伙伴.碧瑶好感}）\n（下次成功率为${存档.伙伴.碧瑶聊天成功率}%+${存档.其他.流浪猫篷等级 * 2}）`,
            );
          } else {
            const c = [
              '寒暄',
              '吹逼',
              '赞美',
              '沉默',
              '鸡汤',
              '分析',
              '吐槽',
              '倾听',
              '安慰',
              '调侃',
              '共情',
              '八卦',
            ];
            const i = Math.floor(Math.random() * c.length);
            存档.伙伴.碧瑶聊天成功率 -= Math.floor(Math.random() * 3 + 1);
            播放文本(
              this.标签,
              `一顿${c[i]}，好感+0\n（下次聊天成功率${存档.伙伴.碧瑶聊天成功率}%+${存档.其他.流浪猫篷等级 * 2}%）`,
            );
          }

          if (
            存档.伙伴.碧瑶住在桥洞 &&
            存档.伙伴.碧瑶好感 > 0 &&
            !存档.伙伴.碧瑶关系 &&
            !存档.伙伴.拒绝碧瑶
          ) {
            存档.当前剧情 = '邀请碧瑶';
            this.更新桥洞();
            保存存档();
            director.loadScene('剧情');
          }

          this.更新桥洞();
          保存存档();
        },
        this,
      );

    //训练
    this.桥洞
      .getChildByName('按钮容器')
      .getChildByName('选择按钮3')
      .on(
        Button.EventType.CLICK,
        () => {
          this.标签.getComponent(Label).string = '';
          缩小消失(this.桥洞);
          放大出现(this.锻炼);
          this.更新锻炼();
        },
        this,
      );

    // 升级
    this.桥洞
      .getChildByName('按钮容器')
      .getChildByName('选择按钮4')
      .on(
        Button.EventType.CLICK,
        () => {
          if (获取地区名称() !== '省城' && 存档.天赋.市井通途 < 3) {
            播放文本(this.标签, '暂未满足开启条件！');
            return;
          }
          this.标签.getComponent(Label).string = '';
          缩小消失(this.桥洞);
          放大出现(this.升级);
          this.更新升级();
        },
        this,
      );

    //读书
    this.桥洞
      .getChildByName('按钮容器')
      .getChildByName('选择按钮5')
      .on(
        Button.EventType.CLICK,
        () => {
          const h =
            存档.其他.搬砖从入门到放弃 +
            存档.其他.伯恩斯情绪疗法 +
            存档.其他.儿童手工DIY +
            存档.其他.中国居民膳食指南1997版 +
            存档.其他.坎贝尔骨科手术学 +
            存档.其他.如来神掌 +
            存档.其他.少妇白洁;
          if (h <= 0) {
            播放文本(this.标签, '暂未满足开启条件！加油吧~');
            return;
          }

          this.标签.getComponent(Label).string = '';
          缩小消失(this.桥洞);
          放大出现(this.读书);
          this.更新读书();
        },
        this,
      );

    //睡觉
    this.桥洞
      .getChildByName('按钮容器')
      .getChildByName('选择按钮6')
      .on(
        Button.EventType.CLICK,
        () => {
          if (存档.精力 > 0) {
            globalThis.确认参数 = {
              文本: '系统检测到你还有剩余的精力，是否要睡觉？',
              按钮: {
                确认睡觉: () => {
                  if (获取当前日记()) {
                    director.loadScene('日记');
                  } else {
                    director.loadScene('睡觉');
                  }
                },
                返回: () => director.loadScene('主页'),
              },
            };
            director.loadScene('确认');
            return;
          }
          if (获取当前日记()) {
            director.loadScene('日记');
          } else {
            director.loadScene('睡觉');
          }
        },
        this,
      );

    //返回
    this.外出.getChildByName('返回按钮').on(
      Button.EventType.CLICK,
      () => {
        this.标签.getComponent(Label).string = '';
        缩小消失(this.外出);
        放大出现(this.桥洞);
        this.更新桥洞();
      },
      this,
    );

    //城中村
    this.外出
      .getChildByName('按钮容器')
      .getChildByName('选择按钮1')
      .on(
        Button.EventType.CLICK,
        () => {
          if (
            存档.天数 <= 140 &&
            (!存档.当前地点 || 存档.当前地点 === '城中村') &&
            存档.其他.解锁地下竞技场
          ) {
            if (存档.精力 < 20) {
              播放文本(this.标签, '精力不足！');
              return;
            }
            存档.当前地点 = '地下竞技场';
            存档.精力 -= 50;
            存档.当前文本 = '你已到达地下竞技场，可以开始探索啦~（地下竞技场将在第140天后关闭~）';
            保存存档();
            director.loadScene('主页');
          } else {
            存档.当前地点 = '城中村';
            存档.当前文本 = '你已到达城中村，可以开始探索啦~';
            保存存档();
            director.loadScene('主页');
          }
        },
        this,
      );

    //郊外
    this.外出
      .getChildByName('按钮容器')
      .getChildByName('选择按钮2')
      .on(
        Button.EventType.CLICK,
        () => {
          if (存档.停留天数.省城 < 12) {
            播放文本(this.标签, '暂未满足开启条件！加油吧~');
            return;
          }
          if (存档.精力 < 10) {
            播放文本(this.标签, '精力不足！');
            return;
          }
          存档.当前地点 = '郊外';
          存档.精力 -= 10;
          存档.当前文本 = '你已到达郊外，可以开始探索啦~';
          保存存档();
          director.loadScene('主页');
        },
        this,
      );

    //市中心
    this.外出
      .getChildByName('按钮容器')
      .getChildByName('选择按钮3')
      .on(
        Button.EventType.CLICK,
        () => {
          if (存档.天数 < 12) {
            播放文本(this.标签, '暂未满足开启条件！加油吧~');
            return;
          }
          if (存档.停留天数.省城 < 30) {
            播放文本(this.标签, '暂未满足开启条件！加油吧~');
            return;
          }
          if (存档.精力 < 20) {
            播放文本(this.标签, '精力不足！');
            return;
          }
          存档.当前地点 = '市中心';
          存档.精力 -= 20;
          存档.当前文本 = '你已到达市中心，可以开始探索啦~';
          保存存档();
          director.loadScene('主页');
        },
        this,
      );

    //山洞
    this.外出
      .getChildByName('按钮容器')
      .getChildByName('选择按钮4')
      .on(
        Button.EventType.CLICK,
        () => {
          if (!存档.伙伴.碧瑶分成) {
            播放文本(this.标签, '暂未满足开启条件！加油吧~');
            return;
          }
          if (存档.精力 < 30) {
            播放文本(this.标签, '精力不足！');
            return;
          }
          存档.当前地点 = '山洞';
          存档.精力 -= 30;

          存档.当前文本 = '你已到达山洞，可以开始探索啦~';
          保存存档();
          director.loadScene('主页');
        },
        this,
      );

    //晓月家
    this.外出
      .getChildByName('按钮容器')
      .getChildByName('选择按钮5')
      .on(
        Button.EventType.CLICK,
        () => {
          if (!存档.伙伴.前往晓月家) {
            播放文本(this.标签, '暂未满足开启条件！加油吧~');
            return;
          }
          if (存档.伙伴.晓月关系) {
            播放文本(this.标签, '晓月已成为伙伴！');
            return;
          }

          if (存档.精力 < 10) {
            播放文本(this.标签, '精力不足！');
            return;
          }

          存档.精力 -= 10;
          const 晓月家 = ['晓月家大狼狗', '晓月后援1群', '晓月管家', '晓月哥', '晓月妈', '晓月爸'];
          const 晓月家敌人 = 晓月家[存档.其他.晓月家进度 || 0];
          if (晓月家敌人) {
            存档.当前敌人 = 晓月家敌人;
            保存存档();
            director.loadScene('主页');
            return;
          }

          存档.当前剧情 = '邀请晓月';
          保存存档();
          director.loadScene('剧情');
        },
        this,
      );

    //返回
    this.锻炼.getChildByName('返回按钮').on(
      Button.EventType.CLICK,
      () => {
        this.标签.getComponent(Label).string = '';
        缩小消失(this.锻炼);
        放大出现(this.桥洞);
        this.更新桥洞();
      },
      this,
    );

    // 修仙
    this.锻炼
      .getChildByName('按钮容器')
      .getChildByName('选择按钮1')
      .on(
        Button.EventType.CLICK,
        () => {
          if (存档.精力 < 10) {
            播放文本(this.标签, '精力不足！');
            return;
          }

          自动进食();
          if (存档.饥饿 < 0) {
            播放文本(this.标签, '饥饿值不足！');
            return;
          }
          存档.饥饿 -= 20;
          自动进食();

          const e = Math.min(Math.max(存档.其他.锻炼成功率 + 存档.其他.运动区等级, 0), 100);
          const 锻炼成功率 = 计算数值("锻炼成功率", e)
          if (Math.random() * 100 < 锻炼成功率) {
            存档.其他.锻炼生命加成 += 2;
            播放文本(this.标签, '训练成功！最大生命值+2%！你感觉气血通畅，神清气爽！');
          } else {
            播放文本(this.标签, '训练失败！你感觉头晕眼花，四肢无力！怕是要升天喽~');
          }
          存档.精力 -= 10;
          存档.其他.锻炼成功率 -= 5;
          保存存档();
          this.更新锻炼();
        },
        this,
      );

    // 体操
    this.锻炼
      .getChildByName('按钮容器')
      .getChildByName('选择按钮2')
      .on(
        Button.EventType.CLICK,
        () => {
          if (存档.精力 < 10) {
            播放文本(this.标签, '精力不足！');
            return;
          }

          自动进食();
          if (存档.饥饿 < 0) {
            播放文本(this.标签, '饥饿值不足！');
            return;
          }
          存档.饥饿 -= 20;
          自动进食();

          const e = Math.min(Math.max(存档.其他.锻炼成功率 + 存档.其他.运动区等级, 0), 100);
          const 锻炼成功率 = 计算数值("锻炼成功率", e)
          if (Math.random() * 100 < 锻炼成功率) {
            存档.其他.锻炼防御加成 += 2;
            播放文本(
              this.标签,
              '训练成功！防御提高2%！你感觉气身体变得更加柔软了呢(ಡωಡ)！再也不怕挨揍啦！',
            );
          } else {
            播放文本(this.标签, '训练失败！“哎呀！扭到腰了~(´థ౪థ)σ”。');
          }
          存档.精力 -= 10;
          存档.其他.锻炼成功率 -= 5;
          保存存档();
          this.更新锻炼();
        },
        this,
      );

    // 轮胎
    this.锻炼
      .getChildByName('按钮容器')
      .getChildByName('选择按钮3')
      .on(
        Button.EventType.CLICK,
        () => {
          if (存档.精力 < 10) {
            播放文本(this.标签, '精力不足！');
            return;
          }

          自动进食();
          if (存档.饥饿 < 0) {
            播放文本(this.标签, '饥饿值不足！');
            return;
          }
          存档.饥饿 -= 20;
          自动进食();

          const e = 存档.其他.锻炼成功率 + 存档.其他.运动区等级;
          const 锻炼成功率 = 计算数值("锻炼成功率", e)
          if (Math.random() * 100 < 锻炼成功率) {
            存档.其他.锻炼攻击加成 += 1;
            播放文本(this.标签, '训练成功！攻击提高1%！“哇！~乌拉————！”。');
          } else {
            播放文本(this.标签, '训练失败！“哎呦~砸到了脚啦！”。');
          }
          存档.精力 -= 10;
          存档.其他.锻炼成功率 -= 5;
          保存存档();
          this.更新锻炼();
        },
        this,
      );

    //返回
    this.升级.getChildByName('返回按钮').on(
      Button.EventType.CLICK,
      () => {
        this.标签.getComponent(Label).string = '';
        缩小消失(this.升级);
        放大出现(this.桥洞);
        this.更新桥洞();
      },
      this,
    );

    //居住区
    this.升级
      .getChildByName('按钮容器')
      .getChildByName('选择按钮1')
      .on(
        Button.EventType.CLICK,
        () => {
          // 应用精力曲线
          let 升级金钱 = 存档.其他.居住区等级 * 3 + 40;
          if (存档.游戏难度 === '残酷' || 存档.游戏难度 === '绝境') {
            if (存档.其他.居住区等级 > 60) {
              升级金钱 += 存档.其他.居住区等级 - 60;
            }
          }

          if (存档.金钱 < 升级金钱) {
            播放文本(this.标签, '没钱！');
            return;
          }
          存档.其他.居住区等级 += 1;
          存档.金钱 -= 升级金钱;
          播放文本(this.标签, `升级成功！最大精力+10（累计增加${存档.其他.居住区等级 * 10}）`);
          保存存档();
          this.更新升级();
        },
        this,
      );

    //运动区
    this.升级
      .getChildByName('按钮容器')
      .getChildByName('选择按钮2')
      .on(
        Button.EventType.CLICK,
        () => {
          const e = 存档.其他.运动区等级 * 2 + 2;
          if (存档.金钱 < e) {
            播放文本(this.标签, '没钱！');
            return;
          }
          存档.其他.运动区等级 += 1;
          存档.金钱 -= e;
          播放文本(this.标签, `升级成功！锻炼成功率永久增加1%（累计增加${存档.其他.运动区等级}%）`);
          保存存档();
          this.更新升级();
        },
        this,
      );

    //流浪猫篷
    this.升级
      .getChildByName('按钮容器')
      .getChildByName('选择按钮3')
      .on(
        Button.EventType.CLICK,
        () => {
          if (!存档.伙伴.碧瑶住在桥洞) {
            播放文本(this.标签, '暂未满足开启条件！加油吧~');
            return;
          }
          const e = 存档.其他.流浪猫篷等级 * 1 + 1;
          if (存档.金钱 < e) {
            播放文本(this.标签, '没钱！');
            return;
          }
          存档.其他.流浪猫篷等级 += 1;
          存档.金钱 -= e;
          播放文本(
            this.标签,
            `升级成功！碧瑶对话成功率永久增加2%（累计增加${存档.其他.流浪猫篷等级 * 2}%）`,
          );
          保存存档();
          this.更新升级();
        },
        this,
      );

    //返回
    this.读书.getChildByName('返回按钮').on(
      Button.EventType.CLICK,
      () => {
        this.标签.getComponent(Label).string = '';
        缩小消失(this.读书);
        放大出现(this.桥洞);
        this.更新桥洞();
      },
      this,
    );

    //搬砖从入门到放弃
    this.读书
      .getChildByName('按钮容器')
      .getChildByName('选择按钮1')
      .on(
        Button.EventType.CLICK,
        () => {
          if (存档.其他.搬砖从入门到放弃 === 0) {
            播放文本(this.标签, '你还没有获得本书！');
            return;
          }
          if (存档.其他.搬砖从入门到放弃 >= 101) {
            播放文本(this.标签, '本书已看完！');
            return;
          }

          const 读书消耗精力 = 计算数值('读书消耗精力', 10);
          const 读书消耗饥饿 = 计算数值('读书消耗饥饿', 20);

          自动进食();
          if (存档.精力 < 读书消耗精力 || 存档.饥饿 < 0) {
            播放文本(
              this.标签,
              `状态不好，学不进去！（需${读书消耗精力}点精力，${读书消耗饥饿}点饥饿）`,
            );
            return;
          }

          const 每日读书最大次数 = 计算数值("每日读书最大次数", -1)
          if (每日读书最大次数 > 0 && 存档.其他.今日读书次数 >= 每日读书最大次数) {
            播放文本(
              this.标签,
              `读书是不可能读书的，今天已经读过${每日读书最大次数}次了`,
            );
            return;
          }
          存档.其他.今日读书次数 ++;


          存档.精力 -= 读书消耗精力;
          存档.饥饿 -= 读书消耗饥饿;
          自动进食();

          存档.其他.搬砖从入门到放弃 += 1;
          存档.阅历 += 1;
          this.完成读书('“搜嘎~搜嘎~”。阅历+1！\n（阅历用于提高基础工资）');
        },
        this,
      );

    //伯恩斯情绪疗法
    this.读书
      .getChildByName('按钮容器')
      .getChildByName('选择按钮2')
      .on(
        Button.EventType.CLICK,
        () => {
          if (存档.其他.伯恩斯情绪疗法 === 0) {
            播放文本(this.标签, '你还没有获得本书！');
            return;
          }
          if (存档.其他.伯恩斯情绪疗法 >= 101) {
            播放文本(this.标签, '本书已看完！');
            return;
          }
          自动进食();
          const 读书消耗饥饿 = 计算数值('读书消耗饥饿', 20);
          if (存档.饥饿 < 0) {
            播放文本(this.标签, `肚子饿了，不想看！（需${读书消耗饥饿}点饥饿）`);
            return;
          }

          const 每日读书最大次数 = 计算数值("每日读书最大次数", -1)
          if (每日读书最大次数 > 0 && 存档.其他.今日读书次数 >= 每日读书最大次数) {
            播放文本(
              this.标签,
              `读书是不可能读书的，今天已经读过${每日读书最大次数}次了`,
            );
            return;
          }
          存档.其他.今日读书次数 ++;

          存档.饥饿 -= 读书消耗饥饿;
          自动进食();

          const contents = [
            '【长期负性情绪会导致大脑功能或结构改变】',
            '【睡眠是一个极为复杂的大脑活动，任何一个环节出现问题，都会导致睡眠障碍】',
            '【抑郁症发病原因，1/3为自身性格，1/3为客观环境，1/3为遗传】',
            '【慢性失眠的本质是大脑功能或者结构出现紊乱】',
            '【户外活动可能能够缓解负性情绪，并帮助大脑功能的缓慢修复】',
            '【抑郁症终身患病率为8%（中国），女性患病几率为男性两倍】',
            '【失眠/早醒、食欲下降/体重减轻、头晕头痛/便秘/腰肩酸痛、思想迟缓/易疲劳，可能是抑郁的危险信号】',
            '【大量随机对照试验证实、认知行为疗法对多种心理疾病有效】',
            '【接受思想——无条件接受自身缺陷——可能是一种快速治疗的方法】',
            '【外貌、身高、性取向是父母给的，既不用自卑也无需炫耀】',
            '【无论你多么「垃圾」，总会存在适合自己的目标，只是极为隐蔽】',
            '【获得成就感（哪怕只是打扫卫生、起床走走），可能是行为疗法的核心】',
            '【旅游、美食、打游戏，不能治疗心理问题（即便是用来分散注意，也有限，并且可能导致新的问题）】',
            '【任何让你感到痛苦的事，都可以找到对应的不合理认知————认知疗法】',
          ];
          const index = Math.floor(Math.random() * contents.length);
          const o = Math.floor(计算最大精力() / 20) * 10;
          存档.其他.伯恩斯情绪疗法 += 10;
          存档.精力 += o;
          this.完成读书(`精力 + ${o}！${contents[index]}`);
        },
        this,
      );

    //儿童手工DIY
    this.读书
      .getChildByName('按钮容器')
      .getChildByName('选择按钮3')
      .on(
        Button.EventType.CLICK,
        () => {
          if (存档.其他.儿童手工DIY === 0) {
            播放文本(this.标签, '你还没有获得本书！');
            return;
          }
          if (存档.其他.儿童手工DIY >= 101) {
            播放文本(this.标签, '本书已看完！');
            return;
          }

          const 读书消耗精力 = 计算数值('读书消耗精力', 10);
          if (存档.精力 < 读书消耗精力) {
            播放文本(this.标签, `精力不足（需${读书消耗精力}点）！`);
            return;
          }

          const 每日读书最大次数 = 计算数值("每日读书最大次数", -1)
          if (每日读书最大次数 > 0 && 存档.其他.今日读书次数 >= 每日读书最大次数) {
            播放文本(
              this.标签,
              `读书是不可能读书的，今天已经读过${每日读书最大次数}次了`,
            );
            return;
          }
          存档.其他.今日读书次数 ++;


          存档.精力 -= 读书消耗精力;

          存档.其他.儿童手工DIY += 1;

          let 读书结果文本 = '';
          switch (存档.其他.儿童手工DIY) {
            case 3:
              存档.伙伴.碧瑶好感 += 6;
              读书结果文本 = '研发出「辣激蘑菇汤」。碧瑶：“咕噜噜~咕噜噜~”。碧瑶好感+6！';
              break;
            case 7:
              存档.生命 += 计算最大生命();
              存档.饥饿 += 计算最大饥饿();
              读书结果文本 = '研发出「急支糖浆拌饭」。“美滋滋~美滋滋~”。饥饿/生命爆满！';
              break;
            case 17:
              存档.最大饥饿 += 30;
              读书结果文本 = '研发出「晓风牌健胃片」。“嘎吱~嘎吱~”。饥饿值上限提高30点！';
              break;
            case 33:
              存档.最大精力 += 10;
              读书结果文本 = '研发出「兴奋剂」。“哇~乌拉——！”。精力上限提高10点！';
              break;
            case 55:
              存档.物品.白色粉末 += 4;
              读书结果文本 = '研发出「白色粉末」。获得【白色粉末】*4！';
              break;
            case 101:
              存档.攻击 += 30;
              存档.防御 += 15;
              存档.最大生命 += 150;
              读书结果文本 = '研发出「生长激素」！攻击+40，防御+20，生命+200！（以上属性为永久性增加）';
              break;
            default:
              读书结果文本 = '一脸懵逼，啥也没学会！';
          }
          this.完成读书(读书结果文本);
        },
        this,
      );

    //中国居民膳食指南1997版
    this.读书
      .getChildByName('按钮容器')
      .getChildByName('选择按钮4')
      .on(
        Button.EventType.CLICK,
        () => {
          if (存档.其他.中国居民膳食指南1997版 === 0) {
            播放文本(this.标签, '你还没有获得本书！');
            return;
          }
          if (存档.其他.中国居民膳食指南1997版 >= 101) {
            播放文本(this.标签, '本书已看完！');
            return;
          }

          const 读书消耗精力 = 计算数值('读书消耗精力', 10);
          const 读书消耗饥饿 = 计算数值('读书消耗饥饿', 20);
          自动进食();
          if (存档.精力 < 读书消耗精力 || 存档.饥饿 < 0) {
            播放文本(
              this.标签,
              `状态不好，学不进去！（需${读书消耗精力}点精力，${读书消耗饥饿}点饥饿）`,
            );
            return;
          }

          const 每日读书最大次数 = 计算数值("每日读书最大次数", -1)
          if (每日读书最大次数 > 0 && 存档.其他.今日读书次数 >= 每日读书最大次数) {
            播放文本(
              this.标签,
              `读书是不可能读书的，今天已经读过${每日读书最大次数}次了`,
            );
            return;
          }
          存档.其他.今日读书次数 ++;


          存档.精力 -= 读书消耗精力;
          存档.饥饿 -= 读书消耗饥饿;
          自动进食();

          const content = [
            '【每日限制红肉摄入（不高于100g）】',
            '【每日推荐主食摄入量250~400g】',
            '【每日推荐蔬果摄入量500~850g】',
            '【每日推荐鱼禽蛋奶摄入量150~250g】',
            '【每日食盐摄入不超过6g】',
            '【每日推荐6000步，或等量活动】',
            '【每周推荐150分钟以上运动】',
            '【每日饮水不低于1500ml（7杯）】',
            '【一瓶可乐215大卡（相当于一碗饭或两斤蔬菜的能量）】',
            '【在各年龄阶段都应避免超重】',
            '【肥胖，是隐藏在心血管疾病、癌症背后的真凶】',
            '【中国44%死于心脑血管疾病，22%死于癌症】',
            '【90%心脑血管疾病可以通过改变生活习惯预防】',
            '【70%癌症可以通过改变生活习惯预防】',
            '【对于超重的人，哪怕丢失少量体重，也可使健康获益】',
            '【在日常生活中额外做些活动，不管强度如何，都将获益】',
            '【选择全谷类食物而不是精加工食物】',
            '【学会阅读食品标签】',
            '【减肥必须运动+饮食，单独一项很难成功（容易反弹）】',
            '【100g薯片能量相当于两大碗饭，或者跑步一小时】',
            '【蔬果的健康获益机制主要在于、可以帮助我们减少能量摄入...】',
            '【健康人补充复合维生素片，并不能使健康获益】',
            '【没有证据证明补充抗氧化剂可以预防癌症】',
            '【终身维持健康体重极为重要】',
          ];

          const index = Math.floor(Math.random() * content.length);
          const e = Math.floor((Math.random() * 2.99 + 1) * 5);
          存档.其他.中国居民膳食指南1997版 += 2;
          存档.最大生命 += e;
          this.完成读书(`最大生命值提高${e}！${content[index]}`);
        },
        this,
      );

    //坎贝尔骨科手术学
    this.读书
      .getChildByName('按钮容器')
      .getChildByName('选择按钮5')
      .on(
        Button.EventType.CLICK,
        () => {
          if (存档.其他.坎贝尔骨科手术学 === 0) {
            播放文本(this.标签, '你还没有获得本书！');
            return;
          }
          if (存档.其他.坎贝尔骨科手术学 >= 101) {
            播放文本(this.标签, '本书已看完！');
            return;
          }

          const 读书消耗精力 = 计算数值('读书消耗精力', 10);
          const 读书消耗饥饿 = 计算数值('读书消耗饥饿', 20);

          自动进食();
          if (存档.精力 < 读书消耗精力 || 存档.饥饿 < 0) {
            播放文本(
              this.标签,
              `状态不好，学不进去！（需${读书消耗精力}点精力，${读书消耗饥饿}点饥饿）`,
            );
            return;
          }

          const 每日读书最大次数 = 计算数值("每日读书最大次数", -1)
          if (每日读书最大次数 > 0 && 存档.其他.今日读书次数 >= 每日读书最大次数) {
            播放文本(
              this.标签,
              `读书是不可能读书的，今天已经读过${每日读书最大次数}次了`,
            );
            return;
          }
          存档.其他.今日读书次数 ++;


          存档.精力 -= 读书消耗精力;
          存档.饥饿 -= 读书消耗饥饿;
          自动进食();

          const e = Math.floor(Math.random() * 2.99 + 1);
          存档.其他.坎贝尔骨科手术学 += 2;
          存档.防御 += e;
          this.完成读书(`防御提高！${e}！`);
        },
        this,
      );

    //如来神掌
    this.读书
      .getChildByName('按钮容器')
      .getChildByName('选择按钮6')
      .on(
        Button.EventType.CLICK,
        () => {
          if (存档.其他.如来神掌 === 0) {
            播放文本(this.标签, '你还没有获得本书！');
            return;
          }
          if (存档.其他.如来神掌 >= 101) {
            播放文本(this.标签, '本书已看完！');
            return;
          }

          const 读书消耗精力 = 计算数值('读书消耗精力', 10);
          const 读书消耗饥饿 = 计算数值('读书消耗饥饿', 20);

          自动进食();
          if (存档.精力 < 读书消耗精力 || 存档.饥饿 < 0) {
            播放文本(
              this.标签,
              `状态不好，学不进去！（需${读书消耗精力}点精力，${读书消耗饥饿}点饥饿）`,
            );
            return;
          }


          const 每日读书最大次数 = 计算数值("每日读书最大次数", -1)
          if (每日读书最大次数 > 0 && 存档.其他.今日读书次数 >= 每日读书最大次数) {
            播放文本(
              this.标签,
              `读书是不可能读书的，今天已经读过${每日读书最大次数}次了`,
            );
            return;
          }
          存档.其他.今日读书次数 ++;


          存档.精力 -= 读书消耗精力;
          存档.饥饿 -= 读书消耗饥饿;
          自动进食();

          const e = Math.floor(Math.random() * 2.99 + 1);
          存档.其他.如来神掌 += 2;
          存档.攻击 += e;
          this.完成读书(`攻击提高！${e}！`);
        },
        this,
      );

    //少妇白洁
    this.读书
      .getChildByName('按钮容器')
      .getChildByName('选择按钮7')
      .on(
        Button.EventType.CLICK,
        () => {
          if (存档.其他.少妇白洁 === 0) {
            播放文本(this.标签, '你还没有获得本书！');
            return;
          }
          if (存档.其他.少妇白洁 >= 101) {
            播放文本(this.标签, '本书已看完！');
            return;
          }
          if (存档.其他.当日看少妇次数 >= 3) {
            播放文本(this.标签, '适当怡情，沉迷伤身呐~');
            return;
          }
          const 每日读书最大次数 = 计算数值("每日读书最大次数", -1)
          if (每日读书最大次数 > 0 && 存档.其他.今日读书次数 >= 每日读书最大次数) {
            播放文本(
              this.标签,
              `读书是不可能读书的，今天已经读过${每日读书最大次数}次了`,
            );
            return;
          }
          存档.其他.今日读书次数 ++;



          存档.其他.少妇白洁 += 5;
          存档.当日加成.攻击 += 100;
          存档.攻击 += 100;
          存档.其他.当日看少妇次数 += 1;
          存档.生命 = 计算最大生命();
          this.完成读书('脸红耳燥，血脉膨胀。生命值全恢复！攻击+100！（睡觉后加攻状态消失）');
        },
        this,
      );
  }

  更新桥洞() {
    this.属性标签.getComponent(Label).string = `精力 ${存档.精力}`;

    if (存档.停留天数.省城 < 12 && !存档.其他.解锁地下竞技场) {
      this.桥洞
        .getChildByName('按钮容器')
        .getChildByName('选择按钮1')
        .getChildByName('标签')
        .getComponent(Label).string = '？？？？';
    } else {
      this.桥洞
        .getChildByName('按钮容器')
        .getChildByName('选择按钮1')
        .getChildByName('标签')
        .getComponent(Label).string = '外出';
    }

    if (存档.伙伴.碧瑶住在桥洞) {
      this.桥洞
        .getChildByName('按钮容器')
        .getChildByName('选择按钮2')
        .getChildByName('标签')
        .getComponent(Label).string =
        `找碧瑶唠嗑（成功率${存档.伙伴.碧瑶聊天成功率 + 存档.其他.流浪猫篷等级 * 2} %）`;
    } else {
      this.桥洞
        .getChildByName('按钮容器')
        .getChildByName('选择按钮2')
        .getChildByName('标签')
        .getComponent(Label).string = '？？？？';
    }

    const e = Math.min(Math.max(存档.其他.锻炼成功率 + 存档.其他.运动区等级, 0), 100);
    const 锻炼成功率 = 计算数值("锻炼成功率", e)
    this.桥洞
      .getChildByName('按钮容器')
      .getChildByName('选择按钮3')
      .getChildByName('标签')
      .getComponent(Label).string = `锻炼（成功率${锻炼成功率} %）`;

    const h =
      存档.其他.搬砖从入门到放弃 +
      存档.其他.伯恩斯情绪疗法 +
      存档.其他.儿童手工DIY +
      存档.其他.中国居民膳食指南1997版 +
      存档.其他.坎贝尔骨科手术学 +
      存档.其他.如来神掌 +
      存档.其他.少妇白洁;
    if (h <= 0) {
      this.桥洞
        .getChildByName('按钮容器')
        .getChildByName('选择按钮5')
        .getChildByName('标签')
        .getComponent(Label).string = '？？？？';
    } else {
      this.桥洞
        .getChildByName('按钮容器')
        .getChildByName('选择按钮5')
        .getChildByName('标签')
        .getComponent(Label).string = '读书';
    }

    this.桥洞
      .getChildByName('按钮容器')
      .getChildByName('选择按钮4')
      .getChildByName('标签')
      .getComponent(Label).string =
      获取地区名称() === '省城' || 存档.天赋.市井通途 >= 3 ? '升级' : '？？？？';
  }

  更新外出() {
    this.属性标签.getComponent(Label).string = `精力 ${存档.精力}`;

    if (
      存档.天数 <= 140 &&
      (!存档.当前地点 || 存档.当前地点 === '城中村') &&
      存档.其他.解锁地下竞技场
    ) {
      this.外出
        .getChildByName('按钮容器')
        .getChildByName('选择按钮1')
        .getChildByName('标签')
        .getComponent(Label).string = '地下竞技场（需50精力）';
    } else {
      this.外出
        .getChildByName('按钮容器')
        .getChildByName('选择按钮1')
        .getChildByName('标签')
        .getComponent(Label).string = '城中村（无消耗）';
    }

    if (存档.停留天数.省城 < 12) {
      this.外出
        .getChildByName('按钮容器')
        .getChildByName('选择按钮2')
        .getChildByName('标签')
        .getComponent(Label).string = `？？？？`;
    } else {
      this.外出
        .getChildByName('按钮容器')
        .getChildByName('选择按钮2')
        .getChildByName('标签')
        .getComponent(Label).string = '郊外（需10精力）';
    }

    if (存档.停留天数.省城 < 30) {
      this.外出
        .getChildByName('按钮容器')
        .getChildByName('选择按钮3')
        .getChildByName('标签')
        .getComponent(Label).string = '？？？？';
    } else {
      this.外出
        .getChildByName('按钮容器')
        .getChildByName('选择按钮3')
        .getChildByName('标签')
        .getComponent(Label).string = '市中心（需20精力）';
    }
    if (!存档.伙伴.碧瑶分成) {
      this.外出
        .getChildByName('按钮容器')
        .getChildByName('选择按钮4')
        .getChildByName('标签')
        .getComponent(Label).string = '？？？？';
    } else {
      this.外出
        .getChildByName('按钮容器')
        .getChildByName('选择按钮4')
        .getChildByName('标签')
        .getComponent(Label).string = '山洞（需30精力）';
    }
    if (!存档.伙伴.前往晓月家) {
      this.外出
        .getChildByName('按钮容器')
        .getChildByName('选择按钮5')
        .getChildByName('标签')
        .getComponent(Label).string = '？？？？';
    } else {
      this.外出
        .getChildByName('按钮容器')
        .getChildByName('选择按钮5')
        .getChildByName('标签')
        .getComponent(Label).string = '晓月家（需10精力）';
    }
  }

  更新锻炼() {
    const e = Math.min(Math.max(存档.其他.锻炼成功率 + 存档.其他.运动区等级, 0), 100);
    const 锻炼成功率 = 计算数值("锻炼成功率", e)
    this.属性标签.getComponent(Label).string =
      `精力 ${存档.精力}\n饥饿 ${存档.饥饿}\n成功率 ${锻炼成功率} %（${存档.其他.锻炼成功率} % +${存档.其他.运动区等级} %）`;

    this.锻炼
      .getChildByName('按钮容器')
      .getChildByName('选择按钮1')
      .getChildByName('标签')
      .getComponent(Label).string = `修仙（生命上限 + ${存档.其他.锻炼生命加成} %）`;
    this.锻炼
      .getChildByName('按钮容器')
      .getChildByName('选择按钮2')
      .getChildByName('标签')
      .getComponent(Label).string = `第八套广播体操（防御 + ${存档.其他.锻炼防御加成} %）`;
    this.锻炼
      .getChildByName('按钮容器')
      .getChildByName('选择按钮3')
      .getChildByName('标签')
      .getComponent(Label).string = `举轮胎（攻击 + ${存档.其他.锻炼攻击加成} %）`;
  }

  更新升级() {
    this.属性标签.getComponent(Label).string =
      `精力 ${存档.精力}\n金钱 ${(存档.金钱 / 10).toFixed(1)} `;

    // 应用精力曲线
    let 升级金钱 = 存档.其他.居住区等级 * 3 + 40;
    if (存档.游戏难度 === '残酷' || 存档.游戏难度 === '绝境') {
      if (存档.其他.居住区等级 > 60) {
        升级金钱 += 存档.其他.居住区等级 - 60;
      }
    }
    this.升级
      .getChildByName('按钮容器')
      .getChildByName('选择按钮1')
      .getChildByName('标签')
      .getComponent(Label).string =
      `居住区（LV${存档.其他.居住区等级} 提升需${(升级金钱 / 10).toFixed(1)} 元）`;
    this.升级
      .getChildByName('按钮容器')
      .getChildByName('选择按钮2')
      .getChildByName('标签')
      .getComponent(Label).string =
      `运动区（LV${存档.其他.运动区等级} 提升需${((存档.其他.运动区等级 * 2 + 2) / 10).toFixed(1)} 元）`;

    if (!存档.伙伴.碧瑶住在桥洞) {
      this.升级
        .getChildByName('按钮容器')
        .getChildByName('选择按钮3')
        .getChildByName('标签')
        .getComponent(Label).string = '？？？？';
    } else {
      this.升级
        .getChildByName('按钮容器')
        .getChildByName('选择按钮3')
        .getChildByName('标签')
        .getComponent(Label).string =
        `流浪猫篷（LV${存档.其他.流浪猫篷等级} 提升需${((存档.其他.流浪猫篷等级 * 1 + 1) / 10).toFixed(1)} 元）`;
    }
  }

  更新读书() {
    this.属性标签.getComponent(Label).string = `精力 ${存档.精力} \n饥饿 ${存档.饥饿} \n`;

    if (存档.其他.搬砖从入门到放弃 === 0) {
      this.读书
        .getChildByName('按钮容器')
        .getChildByName('选择按钮1')
        .getChildByName('标签')
        .getComponent(Label).string = '？？？？';
    } else {
      this.读书
        .getChildByName('按钮容器')
        .getChildByName('选择按钮1')
        .getChildByName('标签')
        .getComponent(Label).string =
        `《搬砖，从入门到放弃》（已看${Math.max(存档.其他.搬砖从入门到放弃 - 1)}%，阅历${存档.阅历}）`;
    }
    if (存档.其他.伯恩斯情绪疗法 === 0) {
      this.读书
        .getChildByName('按钮容器')
        .getChildByName('选择按钮2')
        .getChildByName('标签')
        .getComponent(Label).string = '？？？？';
    } else {
      this.读书
        .getChildByName('按钮容器')
        .getChildByName('选择按钮2')
        .getChildByName('标签')
        .getComponent(Label).string =
        `《伯恩斯情绪疗法》（已看${Math.max(存档.其他.伯恩斯情绪疗法 - 1)}%）`;
    }
    if (存档.其他.儿童手工DIY === 0) {
      this.读书
        .getChildByName('按钮容器')
        .getChildByName('选择按钮3')
        .getChildByName('标签')
        .getComponent(Label).string = '？？？？';
    } else {
      this.读书
        .getChildByName('按钮容器')
        .getChildByName('选择按钮3')
        .getChildByName('标签')
        .getComponent(Label).string =
        `《儿童手工DIY》（已看${Math.max(存档.其他.儿童手工DIY - 1)}%）`;
    }
    if (存档.其他.中国居民膳食指南1997版 === 0) {
      this.读书
        .getChildByName('按钮容器')
        .getChildByName('选择按钮4')
        .getChildByName('标签')
        .getComponent(Label).string = '？？？？';
    } else {
      this.读书
        .getChildByName('按钮容器')
        .getChildByName('选择按钮4')
        .getChildByName('标签')
        .getComponent(Label).string =
        `《中国居民膳食指南1997版》（已看${Math.max(存档.其他.中国居民膳食指南1997版 - 1)}%）`;
    }
    if (存档.其他.坎贝尔骨科手术学 === 0) {
      this.读书
        .getChildByName('按钮容器')
        .getChildByName('选择按钮5')
        .getChildByName('标签')
        .getComponent(Label).string = '？？？？';
    } else {
      this.读书
        .getChildByName('按钮容器')
        .getChildByName('选择按钮5')
        .getChildByName('标签')
        .getComponent(Label).string =
        `《坎贝尔骨科手术学》（已看${Math.max(存档.其他.坎贝尔骨科手术学 - 1)}%）`;
    }
    if (存档.其他.如来神掌 === 0) {
      this.读书
        .getChildByName('按钮容器')
        .getChildByName('选择按钮6')
        .getChildByName('标签')
        .getComponent(Label).string = '？？？？';
    } else {
      this.读书
        .getChildByName('按钮容器')
        .getChildByName('选择按钮6')
        .getChildByName('标签')
        .getComponent(Label).string = `《如来神掌》（已看${Math.max(存档.其他.如来神掌 - 1)}%）`;
    }
    if (存档.其他.少妇白洁 === 0) {
      this.读书
        .getChildByName('按钮容器')
        .getChildByName('选择按钮7')
        .getChildByName('标签')
        .getComponent(Label).string = '？？？？';
    } else {
      this.读书
        .getChildByName('按钮容器')
        .getChildByName('选择按钮7')
        .getChildByName('标签')
        .getComponent(Label).string = `《少妇白洁》（已看${Math.max(存档.其他.少妇白洁 - 1)}%）`;
    }
  }
}

