import { _decorator, Button, Color, Component, director, instantiate, Label, Node, Prefab, tween, Vec3 } from 'cc';
import { 主页 } from './主页';
import { 保存存档, 存档 } from '../管理器/存档管理器';
import { 创建动画文字, 放大出现, 缩小消失 } from '../方法函数/动画效果';
import { 战斗 } from './战斗';
import { 设置 } from '../管理器/设置管理器';
import { 执行钩子 } from '../管理器/钩子管理器';
import { 事件项目类型, 默认事件表 } from '../默认内容/事件表';
import { 深克隆 } from '../方法函数/公共函数';
const { ccclass, property } = _decorator;

export interface 事件上下文 {
    更改选项: (text: string) => void;
    进入事件: (string: string) => void;
    进入战斗: (name: string) => void;
    结束事件: (name: string) => void;
    跳转场景: (name: string) => void;
}

@ccclass('事件')
export class 事件 extends Component {
    @property(Node) 事件: Node = null;
    @property(Node) 文本容器: Node = null;
    @property(Node) 按钮容器: Node = null;
    @property(Prefab) 选项按钮预制体: Prefab = null;

    当前事件: 事件项目类型 = null;
    触发事件(事件名称: string): void {
        if(!事件名称){
            this.结束事件(`未知的事件名【${事件名称}】（请反馈开发者）`)
            return
        }
        this.当前事件 = 深克隆(默认事件表.find(事件 => 事件.名称 === 事件名称))
        if (!this.当前事件) {
            this.结束事件(`未知的事件名【${事件名称}】（请反馈开发者）`)
            return
        }
        存档.当前事件 = 事件名称
        存档.事件次数[事件名称]++

        执行钩子("触发事件", [this.当前事件])
        this.初始化()

        const 选项一 = instantiate(this.选项按钮预制体)
        const 选项二 = instantiate(this.选项按钮预制体)
        const 选项三 = instantiate(this.选项按钮预制体)

        选项一.name = "选项一"
        选项二.name = "选项二"
        选项三.name = "选项三"

        选项一.active = !!this.当前事件.选项一
        选项二.active = !!this.当前事件.选项二
        选项三.active = !!this.当前事件.选项三

        选项一.getChildByName("标签").getComponent(Label).string = this.当前事件.选项一 || "";
        选项二.getChildByName("标签").getComponent(Label).string = this.当前事件.选项二 || "";
        选项三.getChildByName("标签").getComponent(Label).string = this.当前事件.选项三 || "";

        const 上下文1: 事件上下文 = {
            进入战斗: (名称) => this.进入战斗(名称),
            进入事件: (名称) => this.触发事件(名称),
            更改选项: (文本) => 选项一.getChildByName("标签").getComponent(Label).string = 文本,
            结束事件: (名称) => this.结束事件(名称),
            跳转场景: (名称) => {
                this.结束事件()
                director.loadScene(名称)
            },
        }

        const 上下文2: 事件上下文 = {
            进入战斗: (名称) => this.进入战斗(名称),
            进入事件: (名称) => this.触发事件(名称),
            更改选项: (文本) => 选项二.getChildByName("标签").getComponent(Label).string = 文本,
            结束事件: (名称) => this.结束事件(名称),
            跳转场景: (名称) => {
                this.结束事件()
                director.loadScene(名称)
            },
        }

        const 上下文3: 事件上下文 = {
            进入战斗: (名称) => this.进入战斗(名称),
            进入事件: (名称) => this.触发事件(名称),
            更改选项: (文本) => 选项三.getChildByName("标签").getComponent(Label).string = 文本,
            结束事件: (名称) => this.结束事件(名称),
            跳转场景: (名称) => {
                this.结束事件()
                director.loadScene(名称)
            },
        }

        选项一.on(Button.EventType.CLICK, () => this.当前事件.结果一(上下文1), this)
        选项二.on(Button.EventType.CLICK, () => this.当前事件.结果二(上下文2), this)
        选项三.on(Button.EventType.CLICK, () => this.当前事件.结果三(上下文3), this)

        选项一.setParent(this.按钮容器)
        选项二.setParent(this.按钮容器)
        选项三.setParent(this.按钮容器)

        const 序列 = tween(this.node)
        for (let i = 0; i < this.当前事件.文本.length; i++) {
            序列.call(() => 创建动画文字(this.文本容器, this.当前事件.文本[i], i, 设置.暗夜模式 ? Color.WHITE : Color.BLACK)).delay(1.2 / 设置.播放速度);
        }
        序列.call(() => 放大出现(this.按钮容器)).start()
    }

    初始化() {
        this.node.getComponent(主页).更新()
        缩小消失(this.node.getComponent(主页).按钮容器)
        this.node.getComponent(主页).播放文本("")

        this.事件.active = true
        this.文本容器.removeAllChildren()
        this.按钮容器.removeAllChildren()
        this.按钮容器.scale = new Vec3(0, 0, 0)
    }

    进入战斗(敌人) {
        存档.当前事件 = ''
        this.事件.active = false
        this.node.getComponent(战斗).进入战斗(敌人)
        保存存档()
    }

    结束事件(描述: string = ""): void {
        执行钩子("事件结束", [this.当前事件])
        this.当前事件 = null
        存档.当前事件 = ''
        this.node.getComponent(主页).更新()
        this.事件.active = false

        放大出现(this.node.getComponent(主页).按钮容器)
        this.node.getComponent(主页).播放文本(描述)
        保存存档()
    }
}
