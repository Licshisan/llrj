import { _decorator, Color, Component, director, Label, Node, sys, warn } from 'cc';
import { 创建普通文字 } from '../方法函数/动画效果';
import { 默认天赋表 } from '../默认内容/天赋表';
import { 默认特质表 } from '../默认内容/特质表';
import { 默认藏品表 } from '../默认内容/藏品表';
import { 设置 } from '../管理器/设置管理器';
const { ccclass, property } = _decorator;

@ccclass("图鉴")
export class 图鉴 extends Component {
  @property(Node) 内容节点: Node;
  @property(Node) 返回按钮: Node;
  @property(Node) 分类节点: Node;

  当前分类 = "负面";
  分类列表 = ["负面", "普通", "稀有", "传说", "特质", "藏品"];

  start() {
    this.初始化分类标签();
    this.刷新图鉴列表();
    this.返回按钮.on(Node.EventType.TOUCH_END, () => director.loadScene("首页"), this);
  }

  初始化分类标签() {
    this.分类列表.forEach((分类名) => {
      const 标签节点 = this.分类节点.getChildByName(分类名);
      if (标签节点) {
        标签节点.on(Node.EventType.TOUCH_END, () => {
          if (this.当前分类 !== 分类名) {
            this.当前分类 = 分类名;
            this.刷新图鉴列表();
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

  刷新图鉴列表() {
    this.内容节点.removeAllChildren();

    switch (this.当前分类) {
      case "负面":
        this.渲染天赋列表("负面");
        break;
      case "普通":
        this.渲染天赋列表("普通");
        break;
      case "稀有":
        this.渲染天赋列表("稀有");
        break;
      case "传说":
        this.渲染天赋列表("传说");
        break;
      case "特质":
        this.渲染特质列表();
        break;
      case "藏品":
        this.渲染藏品列表();
        break;
    }
  }

  渲染天赋列表(品质: string) {
    let 筛选后的天赋 = 默认天赋表.filter(天赋 => 天赋.品质 === 品质 && !天赋.负面);
    if(品质 == '负面'){
      筛选后的天赋 = 默认天赋表.filter(天赋 => 天赋.负面);
    }

    筛选后的天赋.forEach((天赋, 序号) => {
      const 文本 = `【${天赋.名称}】${天赋.说明}`;
      const 颜色 =  天赋.条件 ? 天赋.颜色 : Color.GRAY;
      创建普通文字(this.内容节点, 文本, 序号, 颜色);
    });
  }

  渲染特质列表() {
    默认特质表.forEach((特质, 序号) => {
      const 已解锁 = 设置.特质[特质.名称] > 0;
      const 文本 = `【${特质.显示名称}】${特质.说明}`;
      const 颜色 = 已解锁 ? 特质.颜色 : Color.GRAY;
      创建普通文字(this.内容节点, 文本, 序号, 颜色);
    });
  }

  渲染藏品列表() {
    默认藏品表.forEach((藏品, 序号) => {
      const 已获得 = 设置.藏品[藏品.名称];
      let 文本 = `【${藏品.名称}】${藏品.描述}`;
      if(已获得){
        文本 += `（拥有${ 设置.藏品[藏品.名称]}个）`
      }
      const 颜色 = 已获得 ? Color.YELLOW : Color.GRAY;
      创建普通文字(this.内容节点, 文本, 序号, 颜色);
    });
  }
}
