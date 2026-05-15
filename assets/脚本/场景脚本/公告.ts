import { _decorator, Button, Component, director, Node, Label, RichText } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('公告')
export class 公告 extends Component {
    @property(Node) 返回按钮: Node
    @property(Label) 标题标签: Label
    @property(RichText) 内容文本: RichText
    start() {
        this.返回按钮.on(Button.EventType.CLICK, () => director.loadScene("设置"), this)
        this.设置公告内容()
    }

    设置公告内容(内容?: string, 标题?: string) {
        const 默认内容 = '暂无'

        const 实际内容 = 内容 || 默认内容
        const 实际标题 = 标题 || '游戏公告'

        if (this.内容文本) {
            this.内容文本.string = 实际内容
        }
        if (this.标题标签) {
            this.标题标签.string = 实际标题
        }
    }
}

