import {
  _decorator,
  Component,
  Node,
  instantiate,
  Prefab,
  Color,
  director,
  PageView,
  Button,
  Label,
  UITransform,
  Layout,
  error,
} from 'cc';
import { 播放文本 } from '../方法函数/动画效果';
import { 保存存档, 存档 } from '../管理器/存档管理器';
import { 执行钩子 } from '../管理器/钩子管理器';
import { 默认商品表 } from '../默认内容/商品表';
import { 深克隆 } from '../方法函数/公共函数';
import { 设置 } from '../管理器/设置管理器';
const { ccclass, property } = _decorator;

@ccclass('商店')
export class 商店 extends Component {
  @property(Node) 标签: Node;
  @property(Node) 属性一: Node;
  @property(Node) 属性二: Node;
  @property(PageView) 分页视图: PageView;
  @property(Prefab) 项目预制体: Prefab;
  @property(Node) 返回按钮: Node;
  @property(Node) 黑市按钮: Node;

  页大小 = 4;
  所有项目节点: Node[] = [];

  start() {
    this.黑市按钮.active = 存档.天赋.市井通衢 > 0
    this.返回按钮.on(Button.EventType.CLICK, () => {
      globalThis.商贩名称 = '商贩';
      director.loadScene('商贩')
    }, this);

    this.更新标签();
    this.创建分页();
    this.返回按钮.on(Button.EventType.CLICK, () => director.loadScene('主页'), this);
  }

  创建分页() {
    const 所有商品 = 默认商品表.filter((i) => i.显示);
    const 总页数 = Math.ceil(所有商品.length / this.页大小);
    const 分页组件 = this.分页视图.getComponent(PageView);
    if (!分页组件) {
      error('分页视图未挂载PageView组件');
      return;
    }
    分页组件.removeAllPages();
    this.所有项目节点 = [];

    for (let 页码 = 0; 页码 < 总页数; 页码++) {
      this.创建单页(页码, 分页组件);
    }
  }

  创建单页(页码: number, 分页组件: PageView) {
    let 单页 = this.分页视图.node
      .getChildByName('视图')
      .getChildByName('内容')
      .getChildByName(`页_${页码 + 1}`);
    if (单页) {
      单页.removeAllChildren();
    } else {
      单页 = new Node(`页_${页码 + 1}`);
      const 页面视图大小 = this.分页视图.getComponent(UITransform);
      单页.addComponent(UITransform).setContentSize(页面视图大小.width, 页面视图大小.height);

      const 布局 = 单页.addComponent(Layout);
      布局.type = Layout.Type.VERTICAL;

      分页组件.addPage(单页);
    }

    for (let i = 0; i < this.页大小; i++) {
      const 商品序号 = 页码 * this.页大小 + i;
      const 所有商品 = 默认商品表.filter((item) => item.显示);
      if (商品序号 >= 所有商品.length) break;
      const 商品 = 深克隆(所有商品[商品序号]);

      const 项目组件 = instantiate(this.项目预制体);
      项目组件.setParent(单页);

      项目组件.name = `商品_${商品.名称}`;
      this.所有项目节点.push(项目组件);

      this.更新项目UI(项目组件, 商品);

      // 购买按钮
      项目组件
        .getChildByName('按钮容器')
        .getChildByName('黑色按钮1')
        .on(
          Button.EventType.CLICK,
          () => {
            if (设置.批量购买) {
              const 批量次数 = 10;

              let 购买中断 = 0;
              let 成功购买数 = 0;
              let 最后提示文本 = '';
              for (let i = 0; i < 批量次数; i++) {
                商品.选项一效果({
                  提示: (文本) => {
                    最后提示文本 = 文本;
                    购买中断 = 1;
                  },
                  购买成功: (文本) => {
                    最后提示文本 = 文本;
                    成功购买数++;
                  },
                });
                if (购买中断) {
                  break;
                }
              }

              播放文本(this.标签, `已批量购买${成功购买数}次（${最后提示文本}）`);
              保存存档();
              this.更新标签();
              this.刷新所有项目状态();
            } else {
              商品.选项一效果({
                提示: (文本) => 播放文本(this.标签, 文本),
                购买成功: (文本) => {
                  执行钩子('购买后', [商品]);
                  播放文本(this.标签, 文本);
                  保存存档();
                  this.更新标签();
                  this.刷新所有项目状态();
                },
              });
            }
          },
          this,
        );

      // 出售按钮
      项目组件
        .getChildByName('按钮容器')
        .getChildByName('黑色按钮2')
        .on(
          Button.EventType.CLICK,
          () => {
            商品.选项二效果({
              提示: (文本) => 播放文本(this.标签, 文本),
              购买成功: (文本) => {
                执行钩子('出售后', [商品]);
                播放文本(this.标签, 文本);
                保存存档();
                this.更新标签();
                this.刷新所有项目状态();
              },
            });
          },
          this,
        );
    }
  }

  更新标签() {
    this.属性一.getComponent(Label).string = `金钱：${(存档.金钱 / 10).toFixed(1)}元`;
    this.属性二.getComponent(Label).string = `积分：${存档.积分}`;
  }

  更新项目UI(项目组件: Node, 商品: any) {
    const 名称 = 商品.显示名称 || 商品.名称;
    const 标签组件 = 项目组件.getChildByName('选择按钮').getChildByName('标签').getComponent(Label);
    标签组件.string = 名称;

    if (商品.条件) {
      标签组件.color = new Color(0, 255, 0);
    } else {
      标签组件.color = Color.WHITE;
    }

    项目组件.getChildByName('标签').getComponent(Label).string = 商品.描述;

    项目组件.getChildByName('按钮容器').getChildByName('黑色按钮1').active = !!商品.选项一文本;
    项目组件.getChildByName('按钮容器').getChildByName('黑色按钮2').active = !!商品.选项二文本;

    项目组件
      .getChildByName('按钮容器')
      .getChildByName('黑色按钮1')
      .getChildByName('标签')
      .getComponent(Label).string = 商品.选项一文本 || '';
    项目组件
      .getChildByName('按钮容器')
      .getChildByName('黑色按钮2')
      .getChildByName('标签')
      .getComponent(Label).string = 商品.选项二文本 || '';
  }

  刷新所有项目状态() {
    for (let i = 0; i < this.所有项目节点.length; i++) {
      const 节点 = this.所有项目节点[i];
      const 所有商品 = 默认商品表.filter((i) => i.显示);
      if (i < 所有商品.length) {
        const 商品数据 = 所有商品[i];
        this.更新项目UI(节点, 商品数据);
      }
    }
  }
}
