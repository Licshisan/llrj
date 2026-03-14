import { _decorator, Button, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('公告')
export class 公告 extends Component {
    @property(Node)
    返回按钮: Node
    start() {
        this.返回按钮.on(Button.EventType.CLICK, () => director.loadScene("设置"), this)
    }
}

