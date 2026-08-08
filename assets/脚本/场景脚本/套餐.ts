import {
  Component,
  Prefab,
  Button,
  director,
  UITransform,
  Layout,
  PageView,
  instantiate,
  Label,
  _decorator,
  Node,
  UIOpacity,
  Color,
} from 'cc';
import { 播放文本, 淡入 } from '../方法函数/动画效果';
import { 执行钩子 } from '../管理器/钩子管理器';
import { 创建存档, 存档 } from '../管理器/存档管理器';
import { 默认套餐表 } from '../默认内容/套餐表';
import { 默认难度表 } from '../默认内容/难度表';
import { 默认技能表 } from '../默认内容/技能表';
import { 设置, 保存设置 } from '../管理器/设置管理器';
import { 保存玩家, 玩家 } from '../管理器/玩家管理器';
import { 计算数值 } from '../方法函数/属性计算';
import { 计算套餐等级, 计算技能等级, 计算特质等级 } from '../方法函数/等级计算';
import { 计算自选天赋点状态 } from '../公共方法/天赋计算';
const { ccclass, property } = _decorator;

@ccclass('套餐')
export class 套餐 extends Component {
  @property(Node) 标签: Node = null;
  @property(Node) 分页视图: Node = null;
  @property(Prefab) 选项按钮预制体: Prefab = null;
  @property(Node) 返回按钮: Node = null;
  @property(Node) 难度按钮: Node = null;
  @property(Node) 图鉴按钮: Node = null;

  页大小 = 7;
  显示难度页 = false;
  当前难度 = 设置.上次难度 || '普通';
  start() {
    globalThis.页面来源 = '套餐';
    this.难度按钮.getComponent(Label).string = `当前难度：${this.当前难度}`;

    播放文本(this.标签, '请选择一种初始道具套餐...');

    淡入(this.难度按钮);
    淡入(this.返回按钮);

    this.scheduleOnce(this.创建套餐分页, 1.2 / 设置.播放速度);
    this.返回按钮.on(Button.EventType.CLICK, () => director.loadScene('存档'), this);
    this.难度按钮.on(
      Button.EventType.CLICK,
      () => {
        if (!this.显示难度页) {
          播放文本(this.标签, '请选择一种游戏难度...');
          this.创建难度分页();
        } else {
          播放文本(this.标签, '请选择一种初始道具套餐...');
          this.创建套餐分页();
        }
        this.显示难度页 = !this.显示难度页;
      },
      this,
    );
    this.图鉴按钮.on(Button.EventType.CLICK, () => director.loadScene('图鉴'), this);
  }

  创建套餐分页() {
    this.分页视图.active = false;
    const 总页数 = Math.ceil(默认套餐表.length / this.页大小);
    const 分页组件 = this.分页视图.getComponent(PageView);
    分页组件.removeAllPages();

    for (let 页码 = 0; 页码 < 总页数; 页码++) {
      const 单页 = new Node(`页_${页码 + 1}`);
      const 页面视图大小 = this.分页视图.getComponent(UITransform);
      单页.addComponent(UITransform).setContentSize(600, 页面视图大小.height);

      const 布局 = 单页.addComponent(Layout);
      布局.type = Layout.Type.VERTICAL;
      布局.spacingY = 40;

      分页组件.addPage(单页);

      for (let i = 0; i < this.页大小; i++) {
        const 套餐 = 默认套餐表[页码 * this.页大小 + i];
        if (!套餐) break;
        const 选项按钮 = instantiate(this.选项按钮预制体);
        选项按钮.setParent(单页);

        选项按钮.getChildByName('标签').getComponent(Label).string = `【${套餐.名称}】${套餐.说明}`;
        选项按钮.getChildByName('标签').getComponent(Label).color = 套餐.颜色 || Color.WHITE;
        if (套餐.条件) {
          选项按钮.on(
            Button.EventType.CLICK,
            () => {
              const 天赋点状态 = 计算自选天赋点状态(设置.锁定天赋, this.当前难度);
              if (!天赋点状态.可以进入) {
                播放文本(
                  this.标签,
                  `当前自选天赋在【${this.当前难度}】难度需要${天赋点状态.消耗}点天赋点，你只有${天赋点状态.基础天赋点 + 天赋点状态.额外天赋点}点，请到图鉴调整自选天赋。`,
                );
                return;
              }

              创建存档(false);
              存档.创建时间 = Date.now();
              存档.套餐名称 = 套餐.名称;
              存档.其他.套餐等级 = 计算套餐等级(套餐.名称)
              存档.游戏难度 = this.当前难度;
              const 游玩次数 = 玩家.client_info.play_times || {};
              游玩次数[存档.游戏难度] = (游玩次数[存档.游戏难度] || 0) + 1;
              玩家.client_info.play_times = 游玩次数;
              保存玩家();
              // 注入藏品
              const 已收集藏品 = 玩家.client_info.collections || {};
              for (const 藏品名 in 已收集藏品) {
                const 最大限额 = 计算数值('藏品携带上限', 5);
                const 数量 = Math.min(已收集藏品[藏品名], 最大限额);
                存档.藏品[藏品名] = 数量
              }
              // 计算并写入技能等级
              for (const 技能 of 默认技能表) {
                const 等级 = 计算技能等级(技能.名称);
                if (等级 > 0) {
                  存档.技能[技能.名称] = 等级;
                }
              }
              if(套餐.名称 === "体验套餐"){
                存档.技能["世界感知"] = 4
              }
              
              // 注入特质
              if (设置.生效特质.length > 0) {
                设置.生效特质.forEach((i) => {
                  存档.特质[i] = 计算特质等级(i);
                });
              }

              执行钩子('新建游戏');
              director.loadScene('开场');
            },
            this,
          );
        } else {
          const 标签节点 = 选项按钮.getChildByName('标签');
          let 透明度 = 标签节点.getComponent(UIOpacity);
          if (!透明度) {
            透明度 = 标签节点.addComponent(UIOpacity);
          }
          透明度.opacity = 100;
          选项按钮.on(
            Button.EventType.CLICK,
            () => 播放文本(this.标签, 套餐.提示 || '暂未解锁'),
            this,
          );
        }
      }
    }

    淡入(this.分页视图);
  }

  创建难度分页() {
    this.分页视图.active = false;
    const 总页数 = Math.ceil(默认难度表.length / this.页大小);
    const 分页组件 = this.分页视图.getComponent(PageView);
    分页组件.removeAllPages();

    for (let 页码 = 0; 页码 < 总页数; 页码++) {
      const 单页 = new Node(`页_${页码 + 1}`);
      const 页面视图大小 = this.分页视图.getComponent(UITransform);
      单页.addComponent(UITransform).setContentSize(600, 页面视图大小.height);

      const 布局 = 单页.addComponent(Layout);
      布局.type = Layout.Type.VERTICAL;
      布局.spacingY = 40;

      分页组件.addPage(单页);

      for (let i = 0; i < this.页大小; i++) {
        const 难度 = 默认难度表[页码 * this.页大小 + i]
        if (!难度) break;
        const 选项按钮 = instantiate(this.选项按钮预制体);
        选项按钮.setParent(单页);

        选项按钮.getChildByName('标签').getComponent(Label).string = `${难度.名称}：${难度.说明}`;
        选项按钮.getChildByName('标签').getComponent(Label).color = 难度.颜色 ?? Color.WHITE;
        if (难度.条件) {
          选项按钮.on(
            Button.EventType.CLICK,
            () => {
              this.显示难度页 = false;
              播放文本(this.标签, 难度.说明);
              this.当前难度 = 难度.名称;
              设置.上次难度 = 难度.名称;
              保存设置();
              this.难度按钮.getComponent(Label).string = `当前难度：${难度.名称}`;
              this.创建套餐分页();
            },
            this,
          );
        } else {
          const 标签节点 = 选项按钮.getChildByName('标签');
          let 透明度 = 标签节点.getComponent(UIOpacity);
          if (!透明度) {
            透明度 = 标签节点.addComponent(UIOpacity);
          }
          透明度.opacity = 100;
          选项按钮.on(
            Button.EventType.CLICK,
            () => 播放文本(this.标签, 难度.提示 || '暂未解锁'),
            this,
          );
        }
      }
    }

    淡入(this.分页视图);
  }
}
