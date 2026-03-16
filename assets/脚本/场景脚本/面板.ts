import { _decorator, Component, Node, Button, director, Label, UITransform } from "cc";
import { 存档 } from "../管理器/存档管理器";
import { 创建普通文字, 播放文本 } from "../方法函数/动画效果";
import { 获取天赋表 } from "../内容加载/天赋";
import { 计算压制, 计算逃跑 } from "../方法函数/属性计算";
const { ccclass, property } = _decorator;

@ccclass("面板")
export class 面板 extends Component {
    @property(Node)
    标签: Node = null;
    @property(Node)
    信息框: Node = null;
    @property(Node)
    内容: Node = null;
    @property(Node)
    返回按钮: Node = null;

    start() {
        const 天赋表 = 获取天赋表()

        log(天赋表)

        let index = 0
        for (let 天赋名称 in 存档.天赋) {
            if (存档.天赋[天赋名称]) {
                const 天赋项目 = 天赋表.find((天赋) => 天赋.名称 == 天赋名称)
                创建普通文字(this.内容, `【${天赋名称}】${天赋项目.说明}`, index, !天赋项目.负面);
                index++
            }
        }

        this.返回按钮.on(Button.EventType.CLICK, () => director.loadScene("主页"), this);
        this.创建标签()
    }

    创建标签() {
        const 属性表 = [
            {
                名称: "逃跑",
                数值: 计算逃跑(),
                说明: "逃跑基本成功率，初始为50~。",
            },
            {
                名称: "罪恶",
                数值: 存档.罪恶,
                说明: "做坏事时，增加罪恶，过高的罪恶会导致失眠。",
            },
            {
                名称: "阅历",
                数值: 存档.阅历,
                说明: "社会阅历，提高打工报酬。",
            },
            {
                名称: "烟瘾",
                数值: 存档.烟瘾率,
                说明: "吸烟增加烟瘾。",
            },
            {
                名称: "胜次",
                数值: 存档.其他.胜利次数,
                说明: "胜利次数。",
            },


            {
                名称: "压制",
                数值: 计算压制(),
                说明: "降低敌人逃跑率。",
            },
            {
                名称: "声望",
                数值: 存档.声望,
                说明: "声望系统暂未开发。",
            },

            {
                名称: "面经",
                数值: 存档.面经,
                说明: "面试经验，提高打工成功率。",
            },
            {
                名称: "经验",
                数值: 存档.经验,
                说明: "战斗经验。",
            },
            {
                名称: "败次",
                数值: 存档.其他.战败次数,
                说明: "战斗胜利次数。",
            },
        ]

        for (let 架势 in 存档.架势) {
            属性表.push({
                名称: 架势 + '架势',
                数值: 存档.架势经验[架势],
                说明: 架势 + "架势经验，满级150~",
            })
        }

        if (存档.其他.网吧进度) {
            属性表.push({
                名称: '网吧段位',
                数值: 存档.其他.网吧进度,
                说明: "亡者农药进阶之路~",
            })
        }

        属性表.forEach((属性) => {
            const 新节点 = new Node(属性.名称)
            const 标签 = 新节点.addComponent(Label)
            标签.string = `${属性.名称}：${属性.数值}`
            标签.fontSize = 30
            标签.horizontalAlign = Label.HorizontalAlign.LEFT
            标签.overflow = Label.Overflow.SHRINK
            标签.getComponent(UITransform).width = 150
            标签.getComponent(UITransform).height = 50
            新节点.on(Node.EventType.TOUCH_END, () => 播放文本(this.标签, 属性.说明), this)
            this.信息框.addChild(新节点)
        })
    }
}
