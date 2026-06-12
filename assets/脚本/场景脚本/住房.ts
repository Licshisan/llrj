import { _decorator, Component, director, Node, Button, Label } from 'cc';
import { 播放文本 } from '../方法函数/动画效果';
import { 保存存档, 存档 } from '../管理器/存档管理器';
import { 计算最大精力, 计算最大饥饿 } from '../方法函数/属性计算';
import { 格式化金钱 } from '../方法函数/公共函数';
import { 生成住房数据 } from '../公共方法/住房';
const { ccclass, property } = _decorator;

@ccclass('住房')
export class 住房 extends Component {
  @property(Node) 属性一: Node = null;
  @property(Node) 属性二: Node = null;
  @property(Node) 选项容器: Node = null;
  @property(Node) 返回按钮: Node = null;
  @property(Node) 标签: Node = null;
  @property(Node) 上一个: Node = null;
  @property(Node) 下一个: Node = null;

  中介: any;
  房源: any[];
  当前序号 = 0;
  start() {
    const { 中介, 房源 } = 生成住房数据();
    if(!存档.临时数据.住房中介 || !存档.临时数据.临时房源){
      存档.临时数据.住房中介  = 中介
      存档.临时数据.临时房源  = 房源
      保存存档()
    }
    this.中介 = 存档.临时数据.住房中介
    this.房源 = 存档.临时数据.临时房源


    this.显示首页();

    this.上一个.on(
      Button.EventType.CLICK,
      () => {
        if (this.当前序号 <= 1) {
          播放文本(this.标签, '没有上一个了~');
          return;
        }
        this.当前序号--;
        this.显示房源();
      },
      this,
    );

    this.下一个.on(
      Button.EventType.CLICK,
      () => {
        if (this.当前序号 >= this.房源.length) {
          播放文本(this.标签, '没有下一个了~');
          return;
        }
        this.当前序号++;
        this.显示房源();
      },
      this,
    );

    this.刷新属性();
    this.返回按钮.on(
      Button.EventType.CLICK,
      () => {
        if (!this.当前序号) {
          存档.临时数据.中介 = null
          保存存档()
          director.loadScene('主页');
        } else {
          this.显示首页();
        }
      },
      this,
    );
  }

  显示首页() {
    this.当前序号 = 0;
    this.上一个.active = false;
    this.下一个.active = false;
    const 选项3 = this.选项容器.getChildByName('ChoiceButton3');
    const 选项2 = this.选项容器.getChildByName('ChoiceButton2');
    const 选项1 = this.选项容器.getChildByName('ChoiceButton1');

    选项3.getChildByName('标签').getComponent(Label).string = `业务介绍`;
    选项2.getChildByName('标签').getComponent(Label).string = `看看房`;
    选项1.getChildByName('标签').getComponent(Label).string = `买房子`;

    选项3.targetOff(this);
    选项2.targetOff(this);
    选项1.targetOff(this);

    选项3.on(
      Button.EventType.CLICK,
      () => 播放文本(this.标签, `${this.中介.名称}：${this.中介.介绍}`),
      this,
    );
    选项2.on(Button.EventType.CLICK, () => this.显示房源(), this);
    选项1.on(Button.EventType.CLICK, () => 播放文本(this.标签, '功能暂未开启...'), this);
    播放文本(this.标签, `${this.中介.名称}：${this.中介.介绍}`);
  }


  刷新属性() {
    this.属性一.getComponent(Label).string =
      `金钱：${(存档.金钱 / 10).toFixed(1)}元\n精力：${存档.精力}/${计算最大精力()}\n饥饿：${存档.饥饿}/${计算最大饥饿()}`;

    let 信息 = `当前住房信息`;
    const 房源 = 存档.临时数据.房源;
    if (!房源) {
      信息 += '\n暂无';
    } else {
      信息 += `\n${房源.品质}「${房源.名称}」\n已居住${存档.其他.住房已居住天数}/${存档.其他.住房天数}天`;
    }
    this.属性二.getComponent(Label).string = 信息;
  }

  显示房源() {
    if (!this.当前序号) {
      this.当前序号 = 1;
    }
    this.上一个.active = true;
    this.下一个.active = true;
    const 选项3 = this.选项容器.getChildByName('ChoiceButton3');
    const 选项2 = this.选项容器.getChildByName('ChoiceButton2');
    const 选项1 = this.选项容器.getChildByName('ChoiceButton1');

    const 房源 = this.房源[this.当前序号 - 1];
    let 介绍 = `【第${房源.房源编号}/${this.房源.length}套】这是一套${房源.品质}「${房源.名称}」\n每天额外恢复${(房源.恢复精力 * 100).toFixed(2)}%精力\n每天额外恢复${房源.恢复健康}点健康，日租金：${格式化金钱(房源.日租)}`;
    if (房源.折扣 && 房源.折扣 < 1) {
      介绍 += `（已打${房源.折扣}折扣）`;
    }
    if (房源.地点) {
      介绍 += `\n地点：${房源.地点}`;
    }
    播放文本(this.标签, 介绍);

    选项3.getChildByName('标签').getComponent(Label).string =
      `短租3天（${格式化金钱(房源.日租 * 3)}）`;
    选项2.getChildByName('标签').getComponent(Label).string =
      `短租7天（${格式化金钱(房源.日租 * 7)}）`;
    选项1.getChildByName('标签').getComponent(Label).string =
      `长租30天（9折，${格式化金钱(房源.日租 * 30 * 0.9)}）`;

    选项3.targetOff(this);
    选项2.targetOff(this);
    选项1.targetOff(this);
    选项3.on(Button.EventType.CLICK, () => this.点击购买(3), this);
    选项2.on(Button.EventType.CLICK, () => this.点击购买(7), this);
    选项1.on(Button.EventType.CLICK, () => this.点击购买(30), this);
  }

  点击购买(day: number) {
    const 房源 = this.房源[this.当前序号 - 1];
    let 价格 = 房源.日租 * day;
    if (day == 30) {
      价格 *= 0.9;
    }

    if (存档.金钱 < 价格) {
      播放文本(this.标签, '钱不够！');
      return;
    }
    if (存档.其他.住房已居住天数 < 存档.其他.住房天数) {
      播放文本(this.标签, '之前租的房还没有到期，还是不多花钱了~');
      return;
    }

    存档.金钱 -= 价格;
    存档.其他.住房已居住天数 = 0;
    存档.其他.住房天数 = day;
    存档.其他.最高住房等级 = Math.max(存档.其他.最高住房等级 || 0, 房源.住房等级 || 0);
    存档.其他.最高住房品质等级 = Math.max(存档.其他.最高住房品质等级 || 0, 房源.品质等级 || 0);
    存档.临时数据.房源 = 房源;
    保存存档();
    播放文本(
      this.标签,
      `租房成功！花费${格式化金钱(价格)}，租赁${房源.品质}「${房源.名称}」${day}天`,
    );
    this.刷新属性();
  }
}
