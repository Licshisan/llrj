import { _decorator, Component, director, Node, Label, tween, Button, Vec3 } from 'cc';
import { 保存存档, 存档 } from '../管理器/存档管理器';
import { 创建动画文字, 播放文本, 放大出现, 淡入 } from '../方法函数/动画效果';
import { 设置 } from '../管理器/设置管理器';
import { 默认剧情表 } from '../默认内容/剧情表';
import { 音频管理器 } from './音频';
const { ccclass, property } = _decorator;

export interface 剧情上下文 {
  提示: (text: string) => void;
  结束剧情: (text?: string) => void;
  进入剧情: (name: string) => void;
  进入战斗: (name: string, text?: string) => void;
}

@ccclass('剧情')
export class 剧情 extends Component {
  @property(Node) 文本容器: Node = null;
  @property(Node) 结果标签: Node = null;
  @property(Node) 提示标签: Node = null;
  @property(Node) 按钮容器: Node;
  @property(Node) 继续按钮: Node;

  上下文: 剧情上下文;
  start() {
    if (存档.当前剧情) {
      this.触发剧情(存档.当前剧情);
    }
    this.继续按钮.on(Button.EventType.CLICK, () => this.结束剧情(), this);
  }

  触发剧情(剧情名称: string) {
    const 剧情 = 默认剧情表.find((p) => p.名称 === 剧情名称);

    if (!剧情) {
      this.显示结果(`当前剧情数据不存在:${剧情名称}（请反馈开发者）`);
      return;
    }
    存档.当前剧情 = 剧情名称;
    保存存档();
    音频管理器.instance.playBGM();
    this.文本容器.removeAllChildren();
    this.结果标签.getComponent(Label).string = '';
    this.提示标签.getComponent(Label).string = '';
    this.按钮容器.scale = new Vec3(0, 0, 0);
    this.继续按钮.active = false;

    const 选项一 = this.按钮容器.getChildByName('选项一');
    const 选项二 = this.按钮容器.getChildByName('选项二');
    const 选项三 = this.按钮容器.getChildByName('选项三');
    const 选项四 = this.按钮容器.getChildByName('选项四');

    this.上下文 = {
      提示: (text: string) => (this.提示标签.getComponent(Label).string = text),
      结束剧情: (text?: string) => {
        if (!text) {
          this.结束剧情();
        } else {
          存档.当前剧情 = '';
          保存存档();
          this.显示结果(text);
        }
      },
      进入剧情: (name: string) => this.触发剧情(name),
      进入战斗: (name: string, text?: string) => {
        存档.当前敌人 = name;
        if (!text) {
          this.结束剧情();
        } else {
          存档.当前剧情 = '';
          保存存档();
          this.显示结果(text);
        }
      },
    };

    选项一.getChildByName('标签').getComponent(Label).string = 剧情.选项一;
    选项一.targetOff(this);
    选项一.on(
      Button.EventType.CLICK,
      () => {
        if (剧情.结果一) {
          剧情.结果一(this.上下文);
        } else {
          this.结束剧情();
        }
      },
      this,
    );
    选项一.active = !!剧情.选项一;

    选项二.getChildByName('标签').getComponent(Label).string = 剧情.选项二;
    选项二.targetOff(this);
    选项二.on(
      Button.EventType.CLICK,
      () => {
        if (剧情.结果二) {
          剧情.结果二(this.上下文);
        } else {
          this.结束剧情();
        }
      },
      this,
    );
    选项二.active = !!剧情.选项二;

    选项三.getChildByName('标签').getComponent(Label).string = 剧情.选项三;
    选项三.targetOff(this);
    选项三.on(
      Button.EventType.CLICK,
      () => {
        if (剧情.结果三) {
          剧情.结果三(this.上下文);
        } else {
          this.结束剧情();
        }
      },
      this,
    );
    选项三.active = !!剧情.选项三;

    选项四.getChildByName('标签').getComponent(Label).string = 剧情.选项四;
    选项四.targetOff(this);
    选项四.on(
      Button.EventType.CLICK,
      () => {
        if (剧情.结果四) {
          剧情.结果四(this.上下文);
        } else {
          this.结束剧情();
        }
      },
      this,
    );
    选项四.active = !!剧情.选项四;

    const sequence = tween(this.node).delay(1 / 设置.播放速度);
    for (let i = 0; i < 剧情.文本.length; i++) {
      sequence.call(() => 创建动画文字(this.文本容器, 剧情.文本[i])).delay(2 / 设置.播放速度);
    }
    sequence.call(() => 放大出现(this.按钮容器));
    sequence.start();
  }

  显示结果(message: string) {
    this.文本容器.active = false;
    this.提示标签.active = false;
    this.按钮容器.scale = new Vec3(0, 0, 0);
    播放文本(this.结果标签, message);
    this.scheduleOnce(() => 淡入(this.继续按钮));
  }

  结束剧情() {
    存档.当前剧情 = '';
    保存存档();
    director.loadScene('主页');
  }
}
