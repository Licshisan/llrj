import { _decorator, Component, Node, Button, director, Color } from 'cc';
import { 创建普通文字 } from '../方法函数/动画效果';
import { 默认特性表 } from '../默认内容/特性表';
import { 保存存档 } from '../管理器/存档管理器';
const { ccclass, property } = _decorator;

@ccclass('特性')
export class 特性 extends Component {
  @property(Node) 内容: Node = null;
  @property(Node) 按钮容器: Node = null;
  @property(Node) 退出按钮: Node = null;

  start() {
    globalThis.页面来源 = '特性';

    默认特性表.forEach((特性) => {
      创建普通文字(
        this.内容,
        `【${特性.名称}】${特性.描述}`,
        特性.条件 ? Color.GREEN : Color.WHITE,
      );
    });

    this.退出按钮.on(Button.EventType.CLICK, () => this.点击退出(), this);
    this.按钮容器
      .getChildByName('设置')
      .on(Button.EventType.CLICK, () => director.loadScene('设置'), this);
    this.按钮容器
      .getChildByName('返回')
      .on(Button.EventType.CLICK, () => director.loadScene('主页'), this);
    this.按钮容器
      .getChildByName('成就')
      .on(Button.EventType.CLICK, () => director.loadScene('成就'), this);
  }

  点击退出() {
    保存存档();
    director.loadScene('首页');
  }
}
