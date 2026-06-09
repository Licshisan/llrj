import { _decorator, Button, Component, instantiate, Label, Node, Prefab } from 'cc';
import { 播放文本, 淡入 } from '../方法函数/动画效果';
const { ccclass, property } = _decorator;

@ccclass('确认')
export class 确认 extends Component {
  @property(Node) 标签: Node = null;
  @property(Node) 按钮容器: Node = null;
  @property(Prefab) 选项按钮预制体: Prefab = null;

  start() {
    const 文本 = globalThis.确认参数?.文本;
    const 按钮 = globalThis.确认参数?.按钮;

    播放文本(this.标签, 文本);
    this.按钮容器.removeAllChildren();
    for (const 按钮名称 in 按钮) {
      const 选项按钮 = instantiate(this.选项按钮预制体);
      选项按钮.name = 按钮名称;
      选项按钮.getChildByName('标签').getComponent(Label).string = 按钮名称;
      选项按钮.on(Button.EventType.CLICK, 按钮[按钮名称], this);
      选项按钮.setParent(this.按钮容器);
    }
    淡入(this.按钮容器);
  }
}
