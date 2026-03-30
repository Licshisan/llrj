import { _decorator, Button, Component, director, error, Label, log, Node, sys } from 'cc';
import { 加载游戏内容 } from '../默认内容/加载内容';
import { 设置 } from '../管理器/设置管理器';
import { 存档 } from '../管理器/存档管理器';
const { ccclass, property } = _decorator;

@ccclass('首页')
export class 首页 extends Component {
    @property(Node) 按钮容器: Node = null;
    @property(Node) 游戏信息: Node = null;

    start() {
        const SERVER_URL = 'http://47.93.223.212:3000';

        if(sys.isNative){
            jsb.onError = (location: string, message: string, stack: string) => {
                console.log(`Error Location: ${location}`);
                console.log(`Message: ${message}`);
                console.log(`Stack: ${stack}`);
                fetch(`${SERVER_URL}/error`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name: "NativeError", line: location, msg: message, stack, setting: 设置, save: 存档 })
                }).then(() => {
                    log("错误上报成功");
                }
                ).catch((e) => {
                    error('错误上报失败:', e);
                });
                return true;
            };
        } else{
            (window as any).__errorHandler = function (name, line, msg, stack) {
                error(`Error Name: ${name}`);
                error(`Line: ${line}`);
                error(`Message: ${msg}`);
                error(`Stack: ${stack}`);
    
                fetch(`${SERVER_URL}/error`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, line, msg, stack, setting: 设置, save: 存档 })
                }).then(() => {
                    log("错误上报成功");
                }).catch((e) => {
                    error('错误上报失败:', e);
                });
            };
        }

        this.按钮容器.getChildByName("开始").on(Button.EventType.CLICK, () => director.loadScene("存档"), this);
        this.按钮容器.getChildByName("成就").on(Button.EventType.CLICK, () => director.loadScene("成就"), this);
        this.按钮容器.getChildByName("设置").on(Button.EventType.CLICK, () => director.loadScene("设置"), this);

        this.游戏信息.getComponent(Label).string = `游戏引擎：Cocos Creator\n版本：${设置.游戏版本}\n原作者：晓风`
        加载游戏内容()
    }
}

