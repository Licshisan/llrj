import { _decorator, Component, Node, director, tween, Button } from "cc";
import { 获取当前日记 } from "../内容加载/日记";
import { 创建动画文字, 淡入 } from "../方法函数/动画效果";
import { 设置 } from "../管理器/设置管理器";
const { ccclass, property } = _decorator;

@ccclass("日记")
export class 日记 extends Component {
	@property(Node)
	文本容器: Node;
	@property(Node)
	返回按钮: Node;
	onLoad(): void {
		const 日记 = 获取当前日记()
		if (!日记) {
			director.loadScene("睡觉");
			return;
		}

		this.返回按钮.active = false
		const sequence = tween(this.node);
		for (let i = 0; i < 日记.length; i++) {
			if (i == 日记.length - 1) {
				sequence.call(() => 淡入(this.返回按钮));
			}
			sequence.call(() => 创建动画文字(this.文本容器, 日记[i], i)).delay(2 / 设置.播放速度);
		}
		sequence.call(() => 淡入(this.返回按钮)).start();
		this.返回按钮.on(Button.EventType.CLICK, () => director.loadScene("睡觉"), this);
	}
}
