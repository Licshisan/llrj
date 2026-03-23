import { _decorator, Component, Node, Button, director, Label, UITransform, Color } from 'cc';
import { 默认伙伴特性表 } from '../默认内容/伙伴特性表';
const { ccclass, property } = _decorator;

@ccclass('伙伴特性')
export class 伙伴特性 extends Component {
	@property(Node) 文本容器: Node = null
	@property(Node) 返回按钮: Node = null

	start() {
		默认伙伴特性表.小兰.forEach((特性, index) => {
			this.creatText(index, `【${特性.名称}】${特性.描述} `, 特性.条件)
		})
		this.返回按钮.on(Button.EventType.CLICK, () => director.loadScene("主页"), this)
	}

	creatText(index: number, content: string, activated: boolean) {
		const feature = new Node(`feature${index}`);
		const label = feature.addComponent(Label)

		label.string = content
		label.fontSize = 32;
		label.lineHeight = 40;
		label.overflow = Label.Overflow.RESIZE_HEIGHT
		label.horizontalAlign = Label.HorizontalAlign.LEFT
		label.color = activated ? new Color(0, 255, 0) : new Color(115, 115, 115)

		feature.setParent(this.文本容器)
		feature.setPosition(0, 0);
		const 页面视图大小 = this.文本容器.getComponent(UITransform)
		label.addComponent(UITransform).setContentSize(页面视图大小.width, 页面视图大小.height);
	}
}
