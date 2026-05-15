import { _decorator, Button, Color, Component, director, error, Label, Node, UITransform } from 'cc';
import { 存档 } from '../管理器/存档管理器';
import { 伙伴特性定义类型, 默认伙伴特性表 } from '../默认内容/伙伴特性表';
const { ccclass, property } = _decorator;

@ccclass('伙伴特性')
export class 伙伴特性 extends Component {
    @property(Node) 文本容器: Node = null
    @property(Node) 返回: Node = null
    @property(Node) 好感: Node = null

    start() {
		const 伙伴名称 = globalThis.伙伴特性伙伴名称
		const 特性列表 = 默认伙伴特性表.filter((特性: 伙伴特性定义类型) => {
			if (伙伴名称 === "晓月") return ["女汉子", "小伙伴", "声援", "捡漏王", "开心果"].includes(特性.名称);
			if (伙伴名称 === "碧瑶") return ["女杀手", "暗杀", "上交", "刺杀", "保护", "冷静", "双飞", "理财", "终结", "合击", "舍身"].includes(特性.名称);
			if (伙伴名称 === "小兰") return ["协助", "崇拜", "熟络"].includes(特性.名称);
			return false;
		});
		if(!伙伴名称 || 特性列表.length === 0){
			error("无效的伙伴名称")
			return
		} else {
			特性列表.forEach((特性: 伙伴特性定义类型, index) => {
				this.创建文本(index, `【${特性.名称}】${特性.描述}`, 特性.条件)
			})
	
			this.好感.getComponent(Label).string = `${伙伴名称}当前好感：${存档.伙伴[伙伴名称+"好感"]}`
		}
        this.返回.on(Button.EventType.CLICK, () => director.loadScene("主页"), this)
    }

	创建文本(index: number, content: string, activated: boolean) {
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
