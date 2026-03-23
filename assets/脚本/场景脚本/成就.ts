import { _decorator, Button, Component, director, Node } from 'cc';
import { 创建普通文字 } from '../方法函数/动画效果';
import { 格式化日期字符串 } from '../方法函数/公共函数';
import { 默认成就表 } from '../默认内容/成就表';
const { ccclass, property } = _decorator;

@ccclass("成就")
export class 成就 extends Component {
  @property(Node) 内容节点: Node;
  @property(Node) 返回按钮: Node;

  start() {
    默认成就表.forEach((成就, 序号) => {
      let 文本 = `【${成就.名称}】${成就.描述}`
      if (成就.条件) {
        文本 += `\n完成时间：${格式化日期字符串(成就.达成时间)}`
      }
      创建普通文字(this.内容节点, 文本, 序号, 成就.条件)
    })
    this.返回按钮.on(Button.EventType.CLICK, () => director.loadScene("首页"), this);
  }
}
