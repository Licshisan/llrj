import { _decorator, Component, Node, Button, director, Label, UITransform } from "cc";
import { 存档 } from "../管理器/存档管理器";
import { 创建普通文字 } from "../方法函数/动画效果";
import { 计算最大压制, 计算最大逃跑 } from "../方法函数/属性计算";
import { 默认特质表 } from "../默认内容/特质表";
import { 默认天赋表 } from "../默认内容/天赋表";
import { 默认难度表 } from "../默认内容/难度表";
import { 默认套餐表 } from "../默认内容/套餐表";
const { ccclass, property } = _decorator;

@ccclass("面板")
export class 面板 extends Component {
    @property(Node) 标签: Node = null;
    @property(Node) 信息框: Node = null;
    @property(Node) 内容: Node = null;
    @property(Node) 返回按钮: Node = null;

    start() {
        this.返回按钮.on(Button.EventType.CLICK, () => director.loadScene("主页"), this);

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
        
        this.创建标签()
    }

    创建标签() {
        const 属性表 = [
            {
                名称: "逃跑",
                数值: 计算最大逃跑(),
            },
            {
                名称: "罪恶",
                数值: 存档.罪恶,
            },
            {
                名称: "阅历",
                数值: 存档.阅历,
            },
            {
                名称: "烟瘾",
                数值: 存档.烟瘾率,
            },
            {
                名称: "胜次",
                数值: 存档.其他.胜利次数,
            },
            {
                名称: "压制",
                数值: 计算最大压制(),
            },
            {
                名称: "声望",
                数值: 存档.声望,
            },

            {
                名称: "面经",
                数值: 存档.面经,
            },
            {
                名称: "经验",
                数值: 存档.经验,
            },
            {
                名称: "败次",
                数值: 存档.其他.战败次数,
            },
        ]

        if (存档.其他.网吧进度) {
            属性表.push({
                名称: '网吧段位',
                数值: 存档.其他.网吧进度,
            })
        }

        this.信息框.removeAllChildren()
        属性表.forEach((属性) => {
            const 新节点 = new Node(属性.名称)
            const 标签 = 新节点.addComponent(Label)
            标签.string = `${属性.名称}：${属性.数值}`
            标签.fontSize = 30
            标签.horizontalAlign = Label.HorizontalAlign.LEFT
            标签.overflow = Label.Overflow.SHRINK
            标签.getComponent(UITransform).width = 150
            标签.getComponent(UITransform).height = 50
            this.信息框.addChild(新节点)
        })
    }
}