import { _decorator, Component, Node, Button, director, Label } from 'cc';
import { 保存存档, 存档 } from '../管理器/存档管理器';
import { 播放文本 } from '../方法函数/动画效果';
import { 计算数值 } from '../方法函数/属性计算';
const { ccclass, property } = _decorator;

@ccclass('林溪')
export class 林溪 extends Component {
	@property(Node) 标签: Node = null
	@property(Node) 属性: Node = null
	@property(Node) 选择容器: Node = null
	@property(Node) 切换1: Node = null
	@property(Node) 切换2: Node = null
	@property(Node) 退出按钮: Node = null

	start() {
		this.更新()
		播放文本(this.标签, '')

		this.选择容器.getChildByName('选择按钮1').on(Button.EventType.CLICK, this.talk, this)
		this.选择容器.getChildByName('选择按钮2').on(Button.EventType.CLICK, this.send, this)
		this.选择容器.getChildByName('选择按钮3').on(Button.EventType.CLICK, this.action, this)

		this.切换1.active = 存档.伙伴.晓月关系 > 0
		this.切换1.on(Button.EventType.CLICK, () => director.loadScene('伙伴'), this)

		this.切换2.active = 存档.伙伴.小兰关系 > 0
		this.切换2.on(Button.EventType.CLICK, () => director.loadScene('小兰'), this)

		this.退出按钮.on(Button.EventType.CLICK, () => {
			director.loadScene('主页')
		}, this)
	}

	更新() {
		this.属性.getComponent(Label).string = `林溪好感：${存档.伙伴.林溪好感}`
	}

	talk() {
		const 聊天消耗精力 = 计算数值("聊天消耗精力", 10);
		if (存档.精力 < 聊天消耗精力) {
			播放文本(this.标签, "精力不足！")
			return
		}
		存档.精力 -= 聊天消耗精力;

		const 林溪聊天内容 = [
			"“先说好，这个要算钱。”",
			"“你别动，我不想明天还得挖你。”",
			"“这不是迷信，这是经验，经验懂不懂？”",
			"“你要是把命丢林子里，我可不负责背你。”",
			"“省城要是真有活干，我就把账本换成新本子。”",
			"“你走路太响了。不是吵到我，是吵到夹子。”",
		]

		const 随机索引 = Math.floor(Math.random() * 林溪聊天内容.length);
		播放文本(this.标签, 林溪聊天内容[随机索引])
		存档.伙伴.林溪好感 += 1;
		this.更新()
		保存存档()
	}

	send() {
		if (存档.物品.木材 > 0) {
			存档.物品.木材 -= 1;
			存档.伙伴.林溪好感 += 2;
			this.更新();
			播放文本(this.标签, "木材-1，林溪好感+2\n“这截能用，没白捡。”")
			保存存档()
			return
		}
		if (存档.物品.艾草 > 0) {
			存档.物品.艾草 -= 1;
			存档.伙伴.林溪好感 += 3;
			this.更新();
			播放文本(this.标签, "艾草-1，林溪好感+3\n“行，这个比你会认路。”")
			保存存档()
			return
		}
		播放文本(this.标签, "没有木材或艾草了")
	}

	action() {
		globalThis.伙伴特性伙伴名称 = '林溪'
		director.loadScene('伙伴特性')
	}
}

