import { _decorator, Component, Node, Button, director, Label } from 'cc';
import { 存档 } from '../管理器/存档管理器';
import { 播放文本 } from '../方法函数/动画效果';
const { ccclass, property } = _decorator;

@ccclass('黑市')
export class 黑市 extends Component {
	@property(Node) 标签: Node;
	@property(Node) 属性一: Node;
	@property(Node) 属性二: Node;
	@property(Node) 按钮容器: Node;
	@property(Node) 返回按钮: Node
	
	start() {
		this.返回按钮.on(Button.EventType.CLICK, () => director.loadScene('主页'), this)

		this.更新()
		this.按钮容器.getChildByName("选择按钮1").on(Button.EventType.CLICK, this.choice1, this)
		this.按钮容器.getChildByName("选择按钮2").on(Button.EventType.CLICK, this.choice2, this)
		this.按钮容器.getChildByName("选择按钮3").on(Button.EventType.CLICK, this.choice3, this)
		this.按钮容器.getChildByName("选择按钮4").on(Button.EventType.CLICK, this.choice4, this)
		this.按钮容器.getChildByName("选择按钮5").on(Button.EventType.CLICK, this.choice5, this)
		this.按钮容器.getChildByName("选择按钮6").on(Button.EventType.CLICK, this.choice6, this)
		this.按钮容器.getChildByName("选择按钮7").on(Button.EventType.CLICK, this.choice7, this)
	}

	choice1() {
		if (存档.物品.白色粉末 < 1) {
			播放文本(this.标签, "白色粉末不足！")
			return
		}
		存档.物品.白色粉末 -= 1;
		存档.金钱 += 10;
		播放文本(this.标签, "获得1元！")
		this.更新()
	}

	choice2() {
		if (存档.其他.少妇白洁 !== 0) {
			播放文本(this.标签, "你已拥有此书！")
			return
		}
		if (存档.物品.白色粉末 < 4) {
			播放文本(this.标签, "白色粉末不足！")
			return
		}
		存档.物品.白色粉末 -= 4;
		存档.其他.少妇白洁 = 1;
		播放文本(this.标签, "获得《少妇白洁》！请到看书界面使用。")
		this.更新()
	}

	choice3() {
		if (存档.其他.搬砖从入门到放弃 !== 0) {
			播放文本(this.标签, "你已拥有此书！")
			return
		}
		if (存档.金钱 < 60) {
			播放文本(this.标签, "金钱不足！")
			return
		}
		存档.金钱 -= 60;
		存档.其他.搬砖从入门到放弃 = 1;
		播放文本(this.标签, "获得《搬砖，从入门到放弃》！请到看书界面使用。")
		this.更新()
	}

	choice4() {
		if (存档.其他.中国居民膳食指南1997版 !== 0) {
			播放文本(this.标签, "你已拥有此书！")
			return
		}

		if (存档.金钱 < 60) {
			播放文本(this.标签, "金钱不足！")
			return
		}

		存档.金钱 -= 60;
		存档.其他.中国居民膳食指南1997版 = 1;
		播放文本(this.标签, "获得《中国居民膳食指南1997版》！请到看书界面使用。")
		this.更新()
	}

	choice5() {
		const e = 存档.物品.枪 * 10 + 10;
		if (存档.物品.白色粉末 < e) {
			播放文本(this.标签, "白色粉末不足！")
			return
		}
		存档.物品.白色粉末 -= e;
		存档.物品.枪 += 1;
		播放文本(this.标签, "获得「枪」！")
		this.按钮容器.getChildByName("选择按钮5").getComponent(Label).string = `枪（需${存档.物品.枪 * 10 + 10}个白色粉末）`;
		this.更新()
	}

	choice6() {
		if (存档.金钱 < 5) {
			播放文本(this.标签, "钱不够！")
			return
		}
		存档.金钱 -= 5;
		存档.物品.子弹 += 1;
		播放文本(this.标签, "获得「子弹」*1")
		this.更新()
	}

	choice7() {
		if (存档.物品.漂亮石头 <= 0) {
			播放文本(this.标签, "你身上没有漂亮石头~")
			return
		}
		const e = 存档.物品.漂亮石头;
		存档.金钱 += e;
		存档.物品.漂亮石头 -= e;
		播放文本(this.标签, `${e}出售「漂亮石头」*，获得${(e / 10).toFixed(1)}元！`)
		this.按钮容器.getChildByName("选择按钮7").getComponent(Label).string = `出售所有漂亮石头（每个1毛，已有${存档.物品.漂亮石头}个）`;
		this.更新()
	}

	更新() {
		this.属性一.getComponent(Label).string = `白色粉末：${存档.物品.白色粉末}`
		this.属性二.getComponent(Label).string = `金钱：${(存档.金钱 / 10).toFixed(1)}元`;

		this.按钮容器.getChildByName("选择按钮5").getChildByName("标签").getComponent(Label).string = `枪（需${存档.物品.枪 * 10 + 10}个白色粉末）`;
		this.按钮容器.getChildByName("选择按钮7").getChildByName("标签").getComponent(Label).string = `出售所有漂亮石头（每个1毛，已有${存档.物品.漂亮石头}个）`;
	}
}


