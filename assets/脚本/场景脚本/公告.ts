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
        const 默认内容 = '<color=#FFFFFF>各位流浪者：</color>\n\n' +
            '<color=#CCCCCC>感谢大家对《流浪日记》的支持！本次更新内容如下：</color>\n\n' +
            '<color=#90EE90>【新增内容】</color>\n' +
            '• 新增多种挑战难度\n' +
            '• 新增多种初始套餐\n' +
            '• 新增特质系统\n\n' +
            '• 新增成就系统\n\n' +
            '• 新增账号系统\n\n' +
            '• ...\n\n' +
            '<color=#87CEEB>【优化调整】</color>\n' +
            '• 优化战斗系统\n' +
            '• 优化分页显示\n' +
            '• 优化场景UI\n\n' +
            '• ...\n\n' +
            '<color=#FFA07A>【活动预告】</color>\n' +
            '限时活动"春日探险"即将开启，敬请期待！\n\n' +
            '<color=#888888>——流浪日记制作组</color>\n' +
            '<color=#888888>2026年3月29日</color>'

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

