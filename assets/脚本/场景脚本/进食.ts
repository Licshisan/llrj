import { _decorator, Component, Node, Label, instantiate, Prefab, Button, Color, director, UITransform, Layout, PageView, error } from "cc";
import { 保存存档, 存档 } from "../管理器/存档管理器";
import { 计算最大生命, 计算最大精力, 计算最大饥饿 } from "../方法函数/属性计算";
import { 播放文本 } from "../方法函数/动画效果";
import { 执行钩子 } from "../管理器/钩子管理器";
import { 默认食物表 } from "../默认内容/食物表";
const { ccclass, property } = _decorator;

@ccclass("进食")
export class 进食 extends Component {
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
		const 总页数 = Math.ceil(默认食物表.length / this.页大小);
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

		for (let i = 0; i < this.页大小; i++) {
			const 食物序号 = 页码 * this.页大小 + i;
			if (食物序号 >= 默认食物表.length) break;
			const 食物 = 默认食物表[食物序号];

			const 项目组件 = instantiate(this.项目预制体);
			项目组件.setParent(单页);

			项目组件.name = `食物_${食物.名称}`;

			let 名称 = 食物.名称
			if (食物.拥有) {
				名称 += `（已拥有：${食物.拥有}）`
			}

			项目组件.getChildByName("选择按钮").getChildByName("标签").getComponent(Label).string = 名称
			if (食物.条件) {
				项目组件.getChildByName("选择按钮").getChildByName("标签").getComponent(Label).color = new Color(0, 255, 0);
			}

			项目组件.getChildByName("标签一").getComponent(Label).string = 食物.描述;
			项目组件.getChildByName("标签二").getComponent(Label).string = 食物.说明;
			项目组件.getChildByName("选择按钮").on(Button.EventType.CLICK, () => {
				try {
					const 进食前存档 = JSON.parse(JSON.stringify(存档))
					const 文本 = 食物.使用()
					执行钩子('进食时', [食物, 进食前存档])
					保存存档()
					if (文本) {
						播放文本(this.标签, 文本)
					}
					this.创建单页(页码, 分页组件);
					this.更新属性();
				} catch (e) {
					error("使用食物失败：", e);
					播放文本(this.标签, "使用食物时发生错误，请反馈开发者！");
				}
			},this);
		}
	}

	更新属性() {
		this.属性一.getComponent(Label).string = `饥饿：${存档.饥饿}/${计算最大饥饿()}  精力：${存档.精力}/${计算最大精力()}  `;
		this.属性二.getComponent(Label).string = `生命：${存档.生命}/${计算最大生命()}`
	}
}


