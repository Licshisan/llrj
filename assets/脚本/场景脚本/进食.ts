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
    食物表 = []
	所有项目节点: Node[] = []

	防误触提示 = true

	start() {
		this.更新属性();
		this.创建分页();
		this.返回按钮.on(Button.EventType.CLICK, () => director.loadScene("主页"), this);
	}

	创建分页() {
		this.食物表 = 默认食物表.filter((食物) => 食物.显示)
		this.所有项目节点 = []

		const 总页数 = Math.ceil(this.食物表.length / this.页大小);
		const 分页组件 = this.分页视图.getComponent(PageView);
		分页组件.removeAllPages();

		for (let 页码 = 0; 页码 < 总页数; 页码++) {
			this.创建单页(页码, 分页组件)
		}
	}

	创建单页(页码: number, 分页组件: PageView) {
		let 单页 = this.分页视图.node.getChildByName('视图')?.getChildByName('内容')?.getChildByName(`页_${页码 + 1}`)
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
			if (食物序号 >= this.食物表.length) break;
			const 食物 = this.食物表[食物序号];

			const 项目组件 = instantiate(this.项目预制体);
			项目组件.setParent(单页);

			项目组件.name = `食物_${食物.名称}`;
			this.所有项目节点.push(项目组件);

			this.更新项目UI(项目组件, 食物);

			项目组件.getChildByName("选择按钮").on(Button.EventType.CLICK, () => {
				try {
					if(食物.名称 === '香烟' || 食物.名称 === '精致香烟'){
						if(this.防误触提示){
							this.防误触提示 = false
							播放文本(this.标签, "系统提示：香烟会损失健康，再次点击确认使用。")
							return
						}
					}

					执行钩子('进食前', [食物])
					食物.使用({
						提示: (文本) => 播放文本(this.标签, 文本),
						食用成功: (文本) => {
							执行钩子('进食后', [食物])
							播放文本(this.标签, 文本)
							保存存档()
							this.更新属性();
							this.刷新所有项目状态();
						},
					})
				} catch (e) {
					播放文本(this.标签, "使用食物时发生错误，请反馈开发者！");
				}
			}, this);
		}
	}

	更新项目UI(项目组件: Node, 食物: any) {
		const 标签组件 = 项目组件.getChildByName("选择按钮").getChildByName("标签").getComponent(Label);
		标签组件.string = 食物.名称;

		if (食物.条件) {
			标签组件.color = new Color(0, 255, 0);
		} else {
			标签组件.color = Color.WHITE;
		}

		项目组件.getChildByName("标签一").getComponent(Label).string = 食物.描述;
		项目组件.getChildByName("标签二").getComponent(Label).string = 食物.说明;
	}

	刷新所有项目状态() {
		const 当前食物表 = 默认食物表.filter((食物) => 食物.显示);
		for (let i = 0; i < this.所有项目节点.length; i++) {
			const 节点 = this.所有项目节点[i];
			if (i < 当前食物表.length) {
				const 食物数据 = 当前食物表[i];
				this.更新项目UI(节点, 食物数据);
			}
		}
	}

	更新属性() {
		this.属性一.getComponent(Label).string = `饥饿：${存档.饥饿}/${计算最大饥饿()}  精力：${存档.精力}/${计算最大精力()}  `;
		this.属性二.getComponent(Label).string = `生命：${存档.生命}/${计算最大生命()}`
	}
}
