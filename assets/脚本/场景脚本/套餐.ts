import { Component, Prefab, Button, director, UITransform, Layout, PageView, instantiate, Label, _decorator, Node, Color, Widget } from "cc";
import { 播放文本, 淡入 } from "../方法函数/动画效果";
import { 获取套餐列表, 套餐项目类型 } from "../内容加载/套餐";
import { 执行钩子 } from "../管理器/钩子管理器";
import { 保存存档, 创建存档, 存档 } from "../管理器/存档管理器";
const { ccclass, property } = _decorator;

@ccclass("套餐")
export class 套餐 extends Component {
	@property(Node)
	标签: Node = null;
	@property(Node)
	分页视图: Node = null;
	@property(Prefab)
	选项按钮预制体: Prefab = null;
	@property(Node)
	返回按钮: Node = null;

	页大小 = 8;

	start() {
		播放文本(this.标签, "请选择一种初始道具套餐...");

		this.分页视图.active = false;
		this.创建分页()

		this.返回按钮.on(Button.EventType.CLICK, () => director.loadScene("存档"), this);
		淡入(this.分页视图)
		淡入(this.返回按钮);
	}

	创建分页() {
		const 套餐表 = 获取套餐列表()
		if (!套餐表 || 套餐表.length === 0) {
			warn("套餐列表为空，无法创建分页");
			return;
		}
		const 总页数 = Math.ceil(套餐表.length / this.页大小);
		const 分页组件 = this.分页视图.getComponent(PageView);
		if (!分页组件) {
			error("分页视图未挂载PageView组件");
			return;
		}
		分页组件.removeAllPages();

		for (let 页码 = 0; 页码 < 总页数; 页码++) {
			this.scheduleOnce(() => this.创建单页(页码, 分页组件, 套餐表), 页码 * 0.01);
		}
	}

	创建单页(页码: number, 分页组件: PageView, 套餐表: 套餐项目类型[]) {
		const 单页 = new Node(`页_${页码 + 1}`);
		const 页面视图大小 = this.分页视图.getComponent(UITransform)
		单页.addComponent(UITransform).setContentSize(页面视图大小.width, 页面视图大小.height);

		const 布局 = 单页.addComponent(Layout);
		布局.type = Layout.Type.VERTICAL;
		布局.spacingY = 40;

		分页组件.addPage(单页);

		for (let i = 0; i < this.页大小; i++) {
			const 套餐序号 = 页码 * this.页大小 + i;
			if (套餐序号 >= 套餐表.length) break;
			const 套餐 = 套餐表[套餐序号];

			const 选项按钮 = instantiate(this.选项按钮预制体);
			选项按钮.setParent(单页);

			const 套餐名称 = 套餐.名称 || `套餐${套餐序号 + 1}`;
			const 套餐描述 = 套餐.描述 || `套餐${套餐序号 + 1}`;
			选项按钮.getChildByName("标签").getComponent(Label).string = `【${套餐名称}】${套餐描述}`;

			选项按钮.on(Button.EventType.CLICK, () => {
				创建存档()
				存档.创建时间 = Date.now();
				存档.套餐名称 = 套餐名称
				执行钩子("新建游戏")
				保存存档()
				director.loadScene("开场");
			}, this);
		}
	}
}
