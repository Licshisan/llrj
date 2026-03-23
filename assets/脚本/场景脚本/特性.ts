import { _decorator, Component, Node, Button, director, Color } from "cc";
import { 保存存档 } from "../管理器/存档管理器";
import { 创建普通文字 } from "../方法函数/动画效果";
import { 默认特性表 } from "../默认内容/特性表";
const { ccclass, property } = _decorator;

@ccclass("特性")
export class 特性 extends Component {
	@property(Node) 内容: Node = null;
	@property(Node) 按钮容器: Node = null;

	start() {
		默认特性表.forEach((特性, index) => {
			创建普通文字(this.内容, `【${特性.名称}】${特性.描述}`, index, 特性.条件 ? Color.GREEN : Color.WHITE);
		})

		this.按钮容器.getChildByName("退出").on(Button.EventType.CLICK, () => this.点击退出(), this)
		this.按钮容器.getChildByName("返回").on(Button.EventType.CLICK, () => director.loadScene("主页"), this);
		this.按钮容器.getChildByName("面板").on(Button.EventType.CLICK, () => director.loadScene("面板"), this);
	}

	点击退出() {
		保存存档();
		director.loadScene("首页");
	}
}
