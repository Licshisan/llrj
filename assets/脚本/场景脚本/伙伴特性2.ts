import { _decorator, Button, Color, Component, director, Label, Node, UITransform } from 'cc';
import { 存档 } from '../管理器/存档管理器';
import { 获取伙伴特性表 } from '../内容加载/伙伴特性';
const { ccclass, property } = _decorator;

@ccclass('伙伴特性2')
export class 伙伴特性2 extends Component {
    @property(Node)
    特性容器: Node = null
    @property(Node)
    返回: Node = null
    @property(Node)
    好感: Node = null
    start() {
        const 碧瑶特性描述列表 = 获取伙伴特性表("碧瑶")


        碧瑶特性描述列表.forEach((特性, index) => {
            this.创建文本(index, `【${特性.名称}】${特性.描述}`, 特性.条件)
        })

        this.好感.getComponent(Label).string = `当前好感：${存档.伙伴.碧瑶好感}`
        this.返回.on(Button.EventType.CLICK, () => director.loadScene("主页"), this)
    }

    创建文本(索引, 内容, 状态) {
        const 特性 = new Node(`特性_${索引}`);
        const 文本 = 特性.addComponent(Label)

        文本.string = 内容
        文本.fontSize = 32;
        文本.lineHeight = 40;
        文本.overflow = Label.Overflow.RESIZE_HEIGHT
        文本.horizontalAlign = Label.HorizontalAlign.LEFT
        文本.color = 状态 ? new Color(0, 255, 0) : new Color(115, 115, 115)

        特性.setParent(this.特性容器)
        特性.setPosition(0, 0);
        const 页面视图大小 = this.特性容器.getComponent(UITransform)
        特性.addComponent(UITransform).setContentSize(页面视图大小.width, 页面视图大小.height);
    }
}