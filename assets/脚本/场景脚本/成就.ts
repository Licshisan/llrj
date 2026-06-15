import { _decorator, Button, Color, Component, director, Label, Node } from 'cc';
import { 创建普通文字 } from '../方法函数/动画效果';
import { 格式化日期字符串 } from '../方法函数/公共函数';
import { 默认成就表 } from '../默认内容/成就表';
import type { 成就分类 } from '../默认内容/成就表';
import { 玩家 } from '../管理器/玩家管理器';
const { ccclass, property } = _decorator;

@ccclass('成就')
export class 成就 extends Component {
  @property(Node) 内容节点: Node;
  @property(Node) 返回按钮: Node;
  @property(Node) 分类节点1: Node;
  @property(Node) 分类节点2: Node;
  @property(Node) 图鉴按钮: Node = null;

  当前分类 = '原版';
  分类列表: 成就分类[] = [
    '原版',
    '排行',
    '藏品',
    '收集',
    '成就',
    '网吧',
    '普通',
    '试炼',
    '真实',
    '残酷',
    '绝境',
    '特殊',
  ];

  start() {
    this.初始化分类标签();
    this.刷新成就列表();
    this.图鉴按钮.on(Button.EventType.CLICK, () => director.loadScene('图鉴'), this);
    this.返回按钮.on(
      Node.EventType.TOUCH_END,
      () => {
        if (globalThis.页面来源 === '特性') {
          director.loadScene('特性');
        } else {
          director.loadScene('首页');
        }
      },
      this,
    );
  }

  初始化分类标签() {
    this.分类列表.forEach((分类名) => {
      const 标签节点1 = this.分类节点1.getChildByName(分类名);
      if (标签节点1) {
        标签节点1.on(
          Node.EventType.TOUCH_END,
          () => {
            if (this.当前分类 !== 分类名) {
              this.当前分类 = 分类名;
              this.刷新成就列表();
              this.更新分类标签状态();
            }
          },
          this,
        );
      }

      const 标签节点2 = this.分类节点2.getChildByName(分类名);
      if (标签节点2) {
        标签节点2.on(
          Node.EventType.TOUCH_END,
          () => {
            if (this.当前分类 !== 分类名) {
              this.当前分类 = 分类名;
              this.刷新成就列表();
              this.更新分类标签状态();
            }
          },
          this,
        );
      }
    });
    this.更新分类标签状态();
  }

  更新分类标签状态() {
    this.分类列表.forEach((分类名) => {
      const 标签节点1 = this.分类节点1.getChildByName(分类名);
      if (标签节点1) {
        标签节点1.getComponent(Label).color = 分类名 === this.当前分类 ? Color.WHITE : Color.GRAY;
      }

      const 标签节点2 = this.分类节点2.getChildByName(分类名);
      if (标签节点2) {
        标签节点2.getComponent(Label).color = 分类名 === this.当前分类 ? Color.WHITE : Color.GRAY;
      }
    });
  }

  刷新成就列表() {
    this.内容节点.removeAllChildren();
    const 筛选后的成就 = 默认成就表.filter((成就) => 成就.分类 === this.当前分类);
    const 已完成成就列表 = Array.isArray(玩家.client_info.achievements)
      ? 玩家.client_info.achievements
      : [];

    筛选后的成就.forEach((成就, 序号) => {
      if (成就.排行类) {
        let 文本 = `【${成就.名称}】${成就.描述}`;
        if (成就.奖励) {
          文本 += `\n奖励：${成就.奖励}`;
        }
        创建普通文字(this.内容节点, 文本, 序号, 成就.条件 ? Color.WHITE : Color.GRAY);
      } else {
        const 完成成就 = 已完成成就列表.find((c) => c.name === 成就.名称);

        if (完成成就) {
          let 文本 = `【${完成成就.name}】`;
          文本 += `${完成成就.description}`;
          文本 += `\n完成时间：${格式化日期字符串(完成成就.achieve_at)}`;
          if (成就.奖励) {
            文本 += `\n奖励：${成就.奖励}`;
          }
          创建普通文字(this.内容节点, 文本, 序号, Color.GREEN);
        } else {
          let 文本 = `【${成就.名称}】`;
          文本 += `${成就.描述}`;
          if (成就.奖励) {
            文本 += `\n奖励：${成就.奖励}`;
          }
          const 颜色 = 成就.条件 ? Color.WHITE : Color.GRAY;
          创建普通文字(this.内容节点, 文本, 序号, 颜色);
        }
      }
    });
  }
}
