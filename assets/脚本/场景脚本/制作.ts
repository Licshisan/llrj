import { _decorator, Component, Node, Label, instantiate, Prefab, Button, Color, director, UITransform, Layout, PageView } from "cc";
import { 保存存档, 存档 } from "../管理器/存档管理器";
import { 计算最大生命, 计算最大精力, 计算最大饥饿 } from "../方法函数/属性计算";
import { 播放文本 } from "../方法函数/动画效果";
import { 执行钩子 } from "../管理器/钩子管理器";
import { 默认制作表 } from "../默认内容/制作表";
const { ccclass, property } = _decorator;

@ccclass("制作")
export class 制作 extends Component {
    @property(Node) 标签: Node;
    @property(Node) 属性一: Node;
    @property(Node) 属性二: Node;
    @property(Prefab) 项目预制体: Prefab;
    @property(PageView) 分页视图: PageView;
    @property(Node) 返回按钮: Node;

    页大小 = 4
    start() {
        this.更新属性();
        this.创建分页();
        this.返回按钮.on(Button.EventType.CLICK, () => director.loadScene("主页"), this);
    }
    创建分页() {
        const 总页数 = Math.ceil(默认制作表.length / this.页大小);
        const 分页组件 = this.分页视图.getComponent(PageView);
        分页组件.removeAllPages();

        for (let 页码 = 0; 页码 < 总页数; 页码++) {
            this.创建单页(页码, 分页组件)
        }
    }

    创建单页(页码: number, 分页组件: PageView) {
        let 单页 = this.分页视图.node.getChildByName('视图').getChildByName('内容').getChildByName(`页_${页码 + 1}`)
        if (单页) {
            单页.removeAllChildren()
        } else {
            单页 = new Node(`页_${页码 + 1}`);
            const 页面视图大小 = this.分页视图.getComponent(UITransform)
            单页.addComponent(UITransform).setContentSize(页面视图大小.width, 页面视图大小.height);

            const 布局 = 单页.addComponent(Layout);
            布局.type = Layout.Type.VERTICAL;

            分页组件.addPage(单页);
        }

        // if (页码 >= 2 && 存档.距离 < 100) {
        //     this.创建文字(单页, `※第${页码 + 1}页内容，将在到达县城后解锁！`);
        //     return;
        // }

        for (let i = 0; i < this.页大小; i++) {
            const 制作序号 = 页码 * this.页大小 + i;
            if (制作序号 >= 默认制作表.length) break;
            const 制作 = 默认制作表[制作序号];

            const 项目组件 = instantiate(this.项目预制体);
            项目组件.setParent(单页);

            项目组件.name = `制作_${制作.名称}`;

            项目组件.getChildByName("选择按钮").getChildByName("标签").getComponent(Label).string = 制作.显示名称 || 制作.名称;
            if (制作.条件) {
                项目组件.getChildByName("选择按钮").getChildByName("标签").getComponent(Label).color = new Color(0, 255, 0);
            }

            项目组件.getChildByName("标签一").getComponent(Label).string = 制作.描述;
            项目组件.getChildByName("标签二").getComponent(Label).string = 制作.说明;
            项目组件.getChildByName("选择按钮").on(Button.EventType.CLICK, () => {
                制作.制作({
                    提示: (文本) => {
                        执行钩子('制作后', [制作])
                        播放文本(this.标签, 文本)
                    },
                    制作成功: (文本) => {
                        播放文本(this.标签, 文本)
                    },
                })
                保存存档()
                this.创建单页(页码, 分页组件);
                this.更新属性();
            }, this);
        }
    }

    更新属性() {
        this.属性一.getComponent(Label).string = `饥饿：${存档.饥饿}/${计算最大饥饿()}  精力：${存档.精力}/${计算最大精力()}  `;
        this.属性二.getComponent(Label).string = `生命：${存档.生命}/${计算最大生命()}`
    }

    创建文字(page: Node, content: string) {
        const node = new Node(`notify`);
        const label = node.addComponent(Label);

        label.string = content;
        label.fontSize = 38;
        label.lineHeight = 60;
        label.overflow = Label.Overflow.RESIZE_HEIGHT;
        label.horizontalAlign = Label.HorizontalAlign.LEFT;
        label.color = new Color(0, 255, 0);

        node.setParent(page);
        node.setPosition(0, -300);

        const 宽度 = page.getComponent(UITransform).width || 650
        label.getComponent(UITransform).setContentSize(宽度, 50);
    }
}


