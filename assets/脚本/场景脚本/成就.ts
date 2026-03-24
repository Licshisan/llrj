import { _decorator, Button, Color, Component, director, Node, sys, warn } from 'cc';
import { 创建普通文字 } from '../方法函数/动画效果';
import { 格式化日期字符串 } from '../方法函数/公共函数';
import { 成就项目类型 } from '../默认内容/成就表';
const { ccclass, property } = _decorator;

@ccclass("成就")
export class 成就 extends Component {
  @property(Node) 内容节点: Node;
  @property(Node) 返回按钮: Node;

  start() {
    const 成就字符串 = sys.localStorage.getItem("成就");
    let 本地成就表: 成就项目类型[] = [];
    if (成就字符串) {
      try {
        本地成就表 = JSON.parse(成就字符串) as 成就项目类型[];
        if (!Array.isArray(本地成就表)) 本地成就表 = [];
      } catch (e) {
        warn("【成就系统】本地成就数据解析失败，重置为空数组：", e);
        本地成就表 = [];
      }
    }

    成就字符串.forEach((成就, 序号) => {
      let 文本 = `【${成就.名称}】${成就.描述}`
      if (成就.条件) {
        文本 += `\n完成时间：${格式化日期字符串(成就.达成时间)}`
      }
      const 颜色 = 成就.条件 ? Color.GREEN : Color.GRAY
      创建普通文字(this.内容节点, 文本, 序号, 颜色)
    })
    this.返回按钮.on(Button.EventType.CLICK, () => director.loadScene("首页"), this);
  }
}
