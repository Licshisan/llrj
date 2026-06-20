import { _decorator, Color, Component, Node, Button, director, Label } from 'cc';
import { 创建普通文字, 播放文本 } from '../方法函数/动画效果';
import { 默认特质表 } from '../默认内容/特质表';
import { 默认天赋表 } from '../默认内容/天赋表';
import { 默认藏品表 } from '../默认内容/藏品表';
import { 默认技能表 } from '../默认内容/技能表';
import { 计算天赋等级, 计算技能等级, 计算特质等级 } from '../方法函数/等级计算';
import { 玩家 } from '../管理器/玩家管理器';
import { 计算数值 } from '../方法函数/属性计算';
import { 保存设置, 设置 } from '../管理器/设置管理器';
const { ccclass, property } = _decorator;

@ccclass('图鉴')
export class 图鉴 extends Component {
  @property(Node) 分类节点: Node = null;
  @property(Node) 内容: Node = null;
  @property(Node) 标签: Node = null;
  @property(Node) 返回按钮: Node = null;

  当前分类 = '天赋';
  分类列表 = ['天赋', '特质', '技能', '藏品'];

  start() {
    this.返回按钮.on(
      Button.EventType.CLICK,
      () => {
        director.loadScene('成就');
      },
      this,
    );

    this.初始化分类标签();
    this.刷新内容列表();
  }

  初始化分类标签() {
    this.分类列表.forEach((分类名) => {
      const 标签节点 = this.分类节点.getChildByName(分类名);
      if (标签节点) {
        标签节点.on(
          Node.EventType.TOUCH_END,
          () => {
            if (this.当前分类 !== 分类名) {
              this.当前分类 = 分类名;
              this.刷新内容列表();
              this.更新分类标签状态();
            }
          },
          this,
        );
      } else {
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

  刷新内容列表() {
    switch (this.当前分类) {
      case '天赋':
        this.渲染天赋列表();
        break;
      case '特质':
        this.渲染特质列表();
        break;
      case '技能':
        this.渲染技能列表();
        break;
      case '藏品':
        this.渲染藏品列表();
        break;
    }
  }

  渲染天赋列表() {
    this.内容.removeAllChildren();
    默认天赋表.forEach((天赋, index) => {
      const 等级 = 计算天赋等级(天赋.名称, 天赋.隐藏 ? 0 : 1);
      if (!天赋.隐藏 || (天赋.隐藏 && 等级 > 0)) {
        let title = '';
        if (天赋.隐藏) {
          title += '隐藏·';
        }
        title += 天赋.品质;
        创建普通文字(
          this.内容,
          `【${天赋.名称}(${title})】LV${等级}\n${天赋.说明}`,
          index,
          等级 > 0 ? 天赋.颜色 : null,
        );
      }
    });
  }

  渲染特质列表() {
    this.内容.removeAllChildren();
    const 开局特质数量 = 计算数值('开局特质数量', 1);
    创建普通文字(
      this.内容,
      `点击可以选择下局生效的特质(你已选择${设置.生效特质.length}/${开局特质数量})`,
      -1,
    );
    默认特质表.forEach((特质, index) => {
      const 等级 = 计算特质等级(特质.名称);
      const 已选择 = 设置.生效特质.includes(特质.名称);
      创建普通文字(
        this.内容,
        `【${特质.名称}】LV${等级}${已选择 ? '【已选择】' : ''}\n${特质.说明}`,
        index,
        等级 > 0 ? Color.YELLOW : null,
        () => {
          if (等级 == 0) return;
          if (!设置.生效特质.includes(特质.名称)) {
            const 开局特质数量 = 计算数值('开局特质数量', 1);
            if (设置.生效特质.length + 1 > 开局特质数量) return;

            设置.生效特质.push(特质.名称);
            播放文本(this.标签, `已选择【${特质.名称}】将再下局游戏生效！`);
          } else {
            设置.生效特质 = 设置.生效特质.filter((i) => i !== 特质.名称);
            播放文本(this.标签, `已取消选择【${特质.名称}】将再下局游戏生效！`);
          }
          保存设置();
          this.渲染特质列表();
        },
      );
    });
  }

  渲染技能列表() {
    this.内容.removeAllChildren();
    默认技能表.forEach((技能, index) => {
      const 等级 = 计算技能等级(技能.名称);
      创建普通文字(
        this.内容,
        `【${技能.名称}】LV${等级}\n${技能.描述}`,
        index,
        等级 > 0 ? Color.BLUE : null,
      );
    });
  }

  渲染藏品列表() {
    this.内容.removeAllChildren();
    默认藏品表.forEach((藏品, index) => {
      const 数量 = 玩家.client_info?.collections?.[藏品.名称] || 0;
      创建普通文字(
        this.内容,
        `【${藏品.名称}】已拥有${数量}\n${藏品.描述}`,
        index,
        数量 > 0 ? Color.GREEN : null,
      );
    });
  }
}
