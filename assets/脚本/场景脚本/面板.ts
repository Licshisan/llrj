import { _decorator, Component, Node, Button, director } from "cc";
import { 存档 } from "../管理器/存档管理器";
import { 创建普通文字 } from "../方法函数/动画效果";
import { 默认特质表 } from "../默认内容/特质表";
import { 默认天赋表 } from "../默认内容/天赋表";
import { 默认难度表 } from "../默认内容/难度表";
import { 默认套餐表 } from "../默认内容/套餐表";
const { ccclass, property } = _decorator;

@ccclass("面板")
export class 面板 extends Component {
    @property(Node) 标签: Node = null;
    @property(Node) 内容: Node = null;
    @property(Node) 返回按钮: Node = null;
    @property(Node) 设置按钮: Node = null;
    @property(Node) 成就按钮: Node = null;
    @property(Node) 分类节点: Node = null;

    当前分类 = "天赋";
    分类列表 = ["负面", "特性", "统计", "藏品", "数值", "退出"];

    start() {
        this.返回按钮.on(Button.EventType.CLICK, () => director.loadScene("主页"), this);
        this.设置按钮.on(Button.EventType.CLICK, () => {
            globalThis.页面来源 = "面板";
            director.loadScene("设置");
        }, this);
        this.成就按钮.on(Button.EventType.CLICK, () => {
            globalThis.页面来源 = "面板";
            director.loadScene("成就");
        }, this);

        let index = 0

        const 难度说明 = 默认难度表.find(x => x.名称 === 存档.游戏难度)?.说明 || ""
        创建普通文字(this.内容, `难度【${存档.游戏难度}】${难度说明}`, index)
        index ++
        const 套餐说明 = 默认套餐表.find(x => x.名称 === 存档.套餐名称)?.说明 || ""
        创建普通文字(this.内容, `套餐【${存档.套餐名称}】${套餐说明}`, index)
        index ++

        for(let 特质名 in 存档.特质){
            if(存档.特质[特质名]){
                const 特质 = 默认特质表.find(x => x.名称 === 特质名)
                if(特质){
                    const 文字 = `【${特质.显示名称 || 特质.名称 || ""}】${特质.说明}`
                    创建普通文字(this.内容,文字, index, 特质.颜色)
                    index ++
                }
            }
        }

        for(let 天赋名 in 存档.天赋){
            if(存档.天赋[天赋名]){
                const 天赋 = 默认天赋表.find(x => x.名称 === 天赋名)
                if(天赋){
                    const 文字 = `【${天赋名}】${天赋.说明}`
                    创建普通文字(this.内容,文字, index, 天赋.颜色)
                    index ++
                }
            }
        }
    }
}