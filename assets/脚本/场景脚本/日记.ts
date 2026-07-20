import { _decorator, Component, Node, director, tween, Button } from 'cc';
import { 创建动画文字, 淡入 } from '../方法函数/动画效果';
import { 设置 } from '../管理器/设置管理器';
import { 默认日记表 } from '../默认内容/日记表';
import { 获取当前地区 } from '../默认内容/地区表';
import { 音频管理器 } from './音频';
const { ccclass, property } = _decorator;

@ccclass('日记')
export class 日记 extends Component {
  @property(Node) 文本容器: Node;
  @property(Node) 返回按钮: Node;
  已播放文本2: boolean = false
  已播放文本3: boolean = false
  已播放文本4: boolean = false
  已播放文本5: boolean = false

  onLoad(): void {
    const 当前地区 = 获取当前地区();
    const 日记 = 默认日记表.find((日记) => 日记.条件 && 日记.地区 === 当前地区?.名称);
    if (!日记) {
      director.loadScene('睡觉');
      return;
    }

    音频管理器.instance.playBGM();
    this.播放日记(日记.文本)
    this.返回按钮.on(Button.EventType.CLICK, () => {
      if(日记.文本2 && !this.已播放文本2){
        this.已播放文本2 = true
        this.播放日记(日记.文本2)
        return
      }
      if(日记.文本3 && !this.已播放文本3){
        this.已播放文本3 = true
        this.播放日记(日记.文本3)
        return
      }
      if(日记.文本4 && !this.已播放文本4){
        this.已播放文本4 = true
        this.播放日记(日记.文本4)
        return
      }
      if(日记.文本5 && !this.已播放文本5){
        this.已播放文本5 = true
        this.播放日记(日记.文本5)
        return
      }

      director.loadScene('睡觉')
    }, this);
  }

  播放日记(文本: string[]) {
    this.文本容器.removeAllChildren()
    this.返回按钮.active = false;
    const sequence = tween(this.node).delay(1.2 / 设置.播放速度);
    if (文本.length === 0) {
      sequence.call(() => 淡入(this.返回按钮));
    }
    for (let i = 0; i < 文本.length; i++) {
      if (i === 文本.length - 1) {
        sequence.call(() => 淡入(this.返回按钮));
      }

      sequence.call(() => 创建动画文字(this.文本容器, 文本[i])).delay(2 / 设置.播放速度);
    }
    sequence.start();
  }
}
