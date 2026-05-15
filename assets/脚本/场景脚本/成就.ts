import { _decorator, Color, Component, director, Label, Node } from 'cc';
import { 创建普通文字 } from '../方法函数/动画效果';
import { 格式化日期字符串 } from '../方法函数/公共函数';
import { 成就分类, 默认成就表 } from '../默认内容/成就表';
import { 玩家 } from '../管理器/玩家管理器';
const { ccclass, property } = _decorator;

@ccclass("成就")
export class 成就 extends Component {
  @property(Node) 内容节点: Node;
  @property(Node) 返回按钮: Node;
  @property(Node) 分类节点: Node;

  当前分类 = "原版";
  分类列表: 成就分类[] = ["原版", "排行", "藏品", "收集", "成就", "网吧", "普通", "试炼", "真实", "残酷", "焚天", "特殊"]

  start() {
    this.初始化分类标签();
    this.刷新成就列表();
    this.返回按钮.on(Node.EventType.TOUCH_END, () => {
      if (globalThis.页面来源 === "面板") {
        director.loadScene("面板");
      } else {
        director.loadScene("首页");
      }
    }, this);
  }

  初始化分类标签() {
    this.分类列表.forEach((分类名) => {
      const 标签节点 = this.分类节点.getChildByName(分类名);
      if (标签节点) {
        标签节点.on(Node.EventType.TOUCH_END, () => {
          if(this.当前分类 !== 分类名){
            this.当前分类 = 分类名;
            this.刷新成就列表();
            this.更新分类标签状态();
          }
        }, this);
      }
    });
    this.更新分类标签状态();
  }

  更新分类标签状态() {
    this.分类列表.forEach((分类名) => {
      const 标签节点 = this.分类节点.getChildByName(分类名);
      if (标签节点) {
        标签节点.getComponent(Label).color = 分类名 === this.当前分类 ? Color.WHITE : Color.GRAY;
      }
    });
  }

  刷新成就列表() {
    this.内容节点.removeAllChildren();

    const 筛选后的成就 = 默认成就表.filter(成就 => 成就.分类 === this.当前分类);

    筛选后的成就.forEach((成就, 序号) => {
      const 完成成就 = 玩家.ext_info.成就.find(c => c.名称 === 成就.名称)

      let 文本 = `【${成就.名称}】`;
      if(完成成就){
        文本 += 完成成就.描述;
        文本 += `\n完成时间：${格式化日期字符串(完成成就.达成时间)}`;
      } else {
        文本 += 成就.描述;
      }

      if (成就.奖励) {
        文本 += `\n奖励：${成就.奖励}`;
      }

      const 颜色 = 完成成就 ? Color.GREEN : Color.GRAY;
      创建普通文字(this.内容节点, 文本, 序号, 颜色);
    });
  }
}
