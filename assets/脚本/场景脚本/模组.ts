import { Component, Prefab, Button, director, UITransform, Layout, PageView, instantiate, Label, _decorator, Node, native, sys } from "cc";
import { 播放文本, 淡入 } from "../方法函数/动画效果";
const { ccclass, property } = _decorator;
export function 加载模组列表() {
	try {

		if (sys.os === sys.OS.ANDROID) {
			native.reflection.callStaticMethod(
				"com/cocos/game/AppActivity",
				"requestAllFilesPermission",
				"()V"
			);
		}

		// const 模组文件夹 = native.fileUtils.getWritablePath() + "mods/";

		const 模组文件夹 = "/storage/emulated/0/LLRJ/mods/"
		log(模组文件夹)
		if (!native.fileUtils.isDirectoryExist(模组文件夹)) {
			warn("mods 文件夹不存在！");
			native.fileUtils.createDirectory(模组文件夹);
			native.fileUtils.createDirectory(native.fileUtils.getWritablePath() + "测试/");
			return [];
		}

		const 模组列表 = (native.fileUtils.listFiles(模组文件夹) || []) // 兜底空数组，防止null报错
			.filter(f => f && native.fileUtils.isDirectoryExist(f))
			.map(f => {
				const 纯路径 = f.replace(/\/+$/, ""); // 去掉末尾所有/，兼容xxx/mod1 和 xxx/mod1/两种情况
				return 纯路径.split("/").pop() || ""; // 兜底空字符串
			})
			.filter(名称 => 名称);

		log("检测到模组列表:", 模组列表);
		return 模组列表;
	} catch {
		return []
	}
}
export function 加载模组(模组名称: string) {
	// const 模组文件夹 = native.fileUtils.getWritablePath() + "mods/";

	const 模组文件夹 = "/storage/emulated/0/LLRJ/mods/"

	const 模组路径 = 模组文件夹 + 模组名称 + "/";

	if (!native.fileUtils.isDirectoryExist(模组路径)) {
		warn("模组不存在:", 模组名称);
		return;
	}

	const 模组文件路径 = native.fileUtils.listFiles(模组路径)
		.filter(f => f.endsWith(".js"));


	模组文件路径.forEach(文件路径 => {
		const 表达式脚本 = native.fileUtils.getStringFromFile(文件路径); // 读取文件内容
		try {
			const 对象 = new Function('return ' + 表达式脚本)();
			const 对象名 = 文件路径.split("/").pop().replace(".js", "");
			globalThis.模组[对象名] = 对象
			log("加载模组文件:", 对象名, 对象);
		} catch (e) {
			error("加载模组文件失败:", 文件路径, e);
		}
	});
}

@ccclass("模组")
export class 模组 extends Component {
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
		const 模组文件夹 = "/storage/emulated/0/LLRJ/mods/"
		播放文本(this.标签, native.fileUtils.listFiles(模组文件夹).join(";"));

		this.分页视图.active = false;
		this.scheduleOnce(() => 淡入(this.分页视图));
		this.创建分页()

		this.返回按钮.on(Button.EventType.CLICK, () => director.loadScene("首页"), this);
		淡入(this.返回按钮);
	}


	创建分页() {
		const 模组表 = 加载模组列表()
		if (!模组表 || 模组表.length === 0) {
			warn("模组列表为空，无法创建分页");
			return;
		}
		const 总页数 = Math.ceil(模组表.length / this.页大小);
		const 分页组件 = this.分页视图.getComponent(PageView);
		if (!分页组件) {
			error("分页视图未挂载PageView组件");
			return;
		}
		分页组件.removeAllPages();

		for (let 页码 = 0; 页码 < 总页数; 页码++) {
			this.scheduleOnce(() => this.创建单页(页码, 模组表, 分页组件), 页码 * 0.1);
		}
	}

	创建单页(页码: number, 模组表: string[], 分页组件: PageView) {
		const 分页视图 = new Node(`页_${页码 + 1}`);

		分页视图.addComponent(UITransform).setContentSize(600, 1040);

		const 布局 = 分页视图.addComponent(Layout);
		布局.type = Layout.Type.VERTICAL;
		布局.spacingY = 40;

		分页组件.addPage(分页视图);

		for (let i = 0; i < this.页大小; i++) {
			const 模组序号 = 页码 * this.页大小 + i;
			if (模组序号 >= 模组表.length) break;

			const 选项按钮 = instantiate(this.选项按钮预制体);
			选项按钮.setParent(分页视图);
			选项按钮.getChildByName("标签").getComponent(Label).string = `${模组表[模组序号]}`;

			选项按钮.on(Button.EventType.CLICK, () => {
				加载模组(模组表[模组序号])
				播放文本(this.标签, "加载模组");
			}, this);
		}
	}
}
