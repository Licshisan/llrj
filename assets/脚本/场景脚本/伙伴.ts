import { _decorator, Component, Label, Node, Button, director, UITransform, Color } from "cc";
import { 播放文本, 淡入 } from "../方法函数/动画效果";
import { 保存存档, 存档 } from "../管理器/存档管理器";
import { 计算数值 } from "../方法函数/属性计算";
const { ccclass, property } = _decorator;

@ccclass("伙伴")
export class 伙伴 extends Component {
	@property(Node) 标签: Node = null;
	@property(Node) 文本容器: Node = null;
	@property(Node) 属性: Node = null;
	@property(Node)
	按钮容器: Node = null;

	@property(Node)
	切换1: Node = null;
	@property(Node)
	切换2: Node = null;

	onLoad(): void {
		if (!存档.伙伴.晓月关系) {
			if (存档.伙伴.碧瑶关系) {
				globalThis.伙伴特性伙伴名称 = '碧瑶'
				director.loadScene('伙伴特性')
			} else if (存档.伙伴.小兰特性) {
				director.loadScene('小兰')
			}
		}
	}

	start() {
		this.更新();
		this.标签.getComponent(Label).string = ""
		this.文本容器.removeAllChildren()

		this.按钮容器.getChildByName("选择按钮1").on(Button.EventType.CLICK, this.聊天, this);
		this.按钮容器.getChildByName("选择按钮2").on(Button.EventType.CLICK, this.喂食, this);
		this.按钮容器.getChildByName("选择按钮3").on(Button.EventType.CLICK, this.喂药, this);
		this.按钮容器.getChildByName("选择按钮4").on(Button.EventType.CLICK, () => {
			globalThis.伙伴特性伙伴名称 = '晓月'
			director.loadScene("伙伴特性")
		}, this);
		this.按钮容器.getChildByName("选择按钮5").on(Button.EventType.CLICK, () => director.loadScene("主页"), this);

		// 其他伙伴
		this.切换1.active = 存档.伙伴.碧瑶关系;
		this.切换1.on(Button.EventType.CLICK, () => {
			globalThis.伙伴特性伙伴名称 = '碧瑶'
			director.loadScene("伙伴特性")
		});

		this.切换2.active = 存档.伙伴.小兰关系;
		this.切换2.on(Button.EventType.CLICK, () => director.loadScene("小兰"));
	}

	更新() {
		this.属性.getComponent(Label).string = `晓月好感：${存档.伙伴.晓月好感}`;
	}
	聊天() {
		const 聊天消耗精力 = 计算数值("聊天消耗精力", 10);
		if (存档.精力 < 聊天消耗精力) {
			播放文本(this.标签, "精力不足！")
			return
		}
		存档.精力 -= 聊天消耗精力;

		const 固定对话 = [
			"“我叫晓月，今年17，在省城三中读书”",
			"“暑假开头的、三天母女保温期一过，我妈就成天说我懒，还贪吃。\n(ಥ_ಥ)”",
			"“骗我，不让我吃太多肉，说对身体不好，合着我就是捡来的。\n╮(╯﹏╰）╭”",
			"“如果不能吃肉，只吃草，那活着有啥意思呢？对吧。”",
			"“如是，我打算出来闯闯，做一个持酒闯江湖的女侠，哈~哈——哈！\nヽ(ﾟДﾟ)ﾉ”",
			"“我偷偷爬上一辆货车，一觉醒来，就在山里。\n(*´・ｖ・)”",
			"“趁着老司机方便，我溜下车，准备去路边的村子弄点吃的。\n︿(￣︶￣)︿”",
			"“结果碰到一只巨丑无比的大黑狗，我一路狂奔，啥也不管了。\n(;´༎ຶД༎ຶ`)”",
			"“猿后，我也不知道到了那里。\n(ಥ_ಥ)”",
			"“我想随便采几个蘑菇充充饥，结果发现没带火（幸好没带...）。\n(｡･ω･｡)”",
			"“不过呢，我聪明啊，我沿着货车路，捡到几罐喝剩的啤酒。\n︿(￣︶￣)︿”",
			"“我躲在路边，暗中观察那些、光着膀子开车的老司机，准备拦一个可靠点的。\n( • ̀ω•́ )✧”",
			"“结果，选中了你，你说我选得对吗？\n(*/ω＼*)”",
			"“其实哇，你打招呼后，我已经跟踪你一天了，嘿嘿~\n(｡･ω･｡)”",
		];

		const 随机对话 = [
			"“(ಡωಡ)hiahiahia....嗝~”",
			"“跟你讲我可是很厉害的哦ｸﾞｯ!\n(๑•̀ㅂ•́)و✧”",
			"“游戏里都是骗人的，哪有什么果子、野兔，全是荆棘和虫子\n(╥╯^╰╥)”",
			"“偷偷告诉你...这个游戏作者没有女朋友\n(ಡωಡ)hiahiahia”",
			"“偷偷告诉你...长得漂亮的女孩子大多都平胸，但是反过来，就不好说啦╮(╯﹏╰）╭”",
			"“我跟你讲哈！那些一个人、背着双肩包旅游的女孩子，最好别去搭讪=￣ω￣=”",
			"“啊嘞嘞~这样真让人头疼呢╮(￣▽￣)╭”",
			"“人家天生就不怎么会撒娇呢\n(ಡωಡ)hiahiahia”",
			"“嘿嘿(º﹃º )，放心放心姐姐不是什么好人~”",
			"“听说这个游戏的最终BOSS是个变态╮(￣▽￣)╭”",
		];

		let dialog = 固定对话[存档.伙伴.晓月聊天次数];
		if (!dialog) {
			const index = Math.floor(Math.random() * 随机对话.length);
			dialog = 固定对话[index];
		}

		if (存档.伙伴.晓月聊天次数 % 3 === 0) {
			this.文本容器.removeAllChildren();
		}
		this.creatText(存档.伙伴.晓月聊天次数 % 3, dialog);

		存档.伙伴.晓月聊天次数 += 1;
		存档.伙伴.晓月好感 += 1;
		this.更新();
		保存存档()
	}

	喂食() {
		if (存档.物品.果子 <= 0 && 存档.物品.熟肉 <= 0) {
			播放文本(this.标签, "吃光光啦！")
			return
		}

		if (存档.物品.果子 > 0) {
			存档.伙伴.连续不喂食晓月天数 = 0;
			存档.伙伴.今日喂食晓月 = true;
			存档.物品.果子 -= 1;
			存档.伙伴.晓月好感 += 1;
			this.更新();
			播放文本(this.标签, "果子-1，晓月好感+1")
			保存存档()
			return
		}
		if (存档.物品.熟肉 > 0) {
			存档.伙伴.连续不喂食晓月天数 = 0;
			存档.伙伴.今日喂食晓月 = true;
			存档.物品.熟肉 -= 1;
			存档.伙伴.晓月好感 += 3;
			this.更新();
			播放文本(this.标签, "熟肉-1，晓月好感+3")
			保存存档()
			return
		}
	}

	喂药() {
		if (存档.物品.伤药 <= 0) {
			播放文本(this.标签, "没药啦~！")
			return
		}
		存档.伙伴.晓月好感 += 2;
		存档.物品.伤药 -= 1;
		this.更新();
		播放文本(this.标签, "“张嘴，吃药~”\n“啊~~~~emmmmm~”\n晓月好感+2")
		保存存档()
	}

	creatText(index: number, content: string) {
		this.标签.getComponent(Label).string = "";
		const dialog = new Node(`dialog${index}`);
		const label = dialog.addComponent(Label);

		label.string = content;
		label.fontSize = 40;
		label.lineHeight = 50;
		label.overflow = Label.Overflow.RESIZE_HEIGHT;
		label.horizontalAlign = Label.HorizontalAlign.CENTER;
		label.color = Color.WHITE;

		dialog.setParent(this.文本容器);
		dialog.setPosition(0, 0);
		const 页面视图大小 = this.文本容器.getComponent(UITransform)
		label.addComponent(UITransform).setContentSize(页面视图大小.width, 页面视图大小.height);

		淡入(dialog);
	}
}
