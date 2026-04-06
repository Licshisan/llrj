import { _decorator, Button, Component, director, Label, Node } from 'cc';
import { 加载游戏内容 } from '../默认内容/加载内容';
import { 设置 } from '../管理器/设置管理器';
const { ccclass, property } = _decorator;

@ccclass('首页')
export class 首页 extends Component {
    @property(Node) 按钮容器: Node = null;
    @property(Node) 游戏信息: Node = null;

    start() {
        this.按钮容器.getChildByName("开始").on(Button.EventType.CLICK, () => director.loadScene("存档"), this);
        this.按钮容器.getChildByName("成就").on(Button.EventType.CLICK, () => {
            globalThis.页面来源 = "首页";
            director.loadScene("成就");
        }, this);
        this.按钮容器.getChildByName("设置").on(Button.EventType.CLICK, () => {
            globalThis.页面来源 = "首页";
            director.loadScene("设置");
        }, this);
        this.按钮容器.getChildByName("图鉴").on(Button.EventType.CLICK, () => director.loadScene("图鉴"), this);

        this.游戏信息.getComponent(Label).string = `版本：${设置.游戏版本}\n制作：重置开发组`
        加载游戏内容()
    }
}

