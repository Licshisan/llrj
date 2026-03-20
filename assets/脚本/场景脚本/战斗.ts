import { _decorator, Component, Node, Label, Button, ProgressBar } from "cc";
import { 保存存档, 存档 } from "../管理器/存档管理器";
import { 从0放大缩小, 多次闪烁, 播放文本, 放大出现, 缩小消失, 闪烁一次, 震动 } from "../方法函数/动画效果";
import { 主页 } from "./主页";
import { 敌人项目类型, 获取敌人 } from "../内容加载/敌人";
import { 执行钩子 } from "../管理器/钩子管理器";
import { 计算最大压制, 计算最大攻击, 计算最大生命, 计算最大防御, 计算最大逃跑 } from "../方法函数/属性计算";
import { 设置 } from "../管理器/设置管理器";
import { 抽取物品, 概率类型 } from "../方法函数/公共函数";
const { ccclass, property } = _decorator;

type 战斗角色 = {
    名称: string,
    显示名称: string,
    等级: number,
    生命: number,
    攻击: number,
    防御: number,
    最大生命: number,
    逃跑: number,
    压制: number,
    增加声望: number,
    增加属性: number,
    损失健康: number,
    出场语: string,
    掉落物: 概率类型[],
    攻击前?: (对局: 对局类型) => string | void,
    攻击时?: (对局: 对局类型) => string | void,
    攻击后?: (对局: 对局类型) => string | void,
    胜利效果?: (对局: 对局类型) => string | void,
    失败效果?: (对局: 对局类型) => string | void,
    其他: any
}

export interface 对局类型 {
    回合数: number,
    主角回合: boolean,
    敌人回合: boolean,

    攻击方: 战斗角色,
    受击方: 战斗角色,    

    方法: string,
    攻击: {
        基础加成: number,
        加法乘率: number,
        独立乘区: number,
        计算结果: number,
    },
    防御: {
        基础加成: number,
        加法乘率: number,
        独立乘区: number,
        计算结果: number,
    },
    伤害: {
        基础加成: number,
        加法乘率: number,
        独立乘区: number,
        计算结果: number,
    },
    结果文本: string[]
    其他: any,
}

@ccclass("战斗")
export class 战斗 extends Component {
    @property(Node)
    战斗: Node;
    @property(Node)
    敌人标签: Node;
    @property(Node)
    血量条: Node;

    @property(Node)
    文本容器: Node;
    @property(Node)
    标签容器: Node;

    @property(Node)
    按钮容器: Node;

    对局: 对局类型

    进入战斗(敌人名称: string) {
        const 敌人 = 获取敌人(敌人名称)
        if (!敌人) {
            this.结束战斗(`未知的敌人：【${敌人名称}】（请反馈开发者）`)
            return;
        }
        存档.当前敌人 = 敌人名称
        存档.遇敌次数[敌人名称]++

        // 记载角色
        const 主角 = {
            名称: "你",
            显示名称: "你",
            等级: Math.floor(存档.经验 / 100),
            生命: 存档.生命,
            攻击: 计算最大攻击(),
            防御: 计算最大防御(),
            最大生命: 计算最大生命(),
            逃跑: 计算最大逃跑(),
            压制: 计算最大压制(),
            增加声望: 1,
            增加属性: 5,
            损失健康: 1,
            出场语: '我是要成为海贼王的男人！',
            掉落物: [] as 概率类型[],
            // 攻击前: () => string | void,
            // 攻击时: () => string | void,
            // 攻击后: () => string | void,
            // 胜利效果: () => string | void,
            // 失败效果: () => string | void,
            其他: {}
        }

        // 重置变量
        this.对局 = {
            回合数: 0,

            攻击方: 主角,
            受击方: 敌人,    

            方法: '普攻',
            攻击: {
                基础加成: 0,
                加法乘率: 0,
                独立乘区: 1,
                计算结果: 0,
            },
            防御: {
                基础加成: 0,
                加法乘率: 0,
                独立乘区: 1,
                计算结果: 0,
            },
            伤害: {
                基础加成: 0,
                加法乘率: 0,
                独立乘区: 1,
                计算结果: 0,
            },
            结果文本: [],
            其他: {},
        }
        执行钩子("战斗初始化", [this.对局])
        this.界面初始化();
        播放文本(this.node.getComponent(主页).标签, 敌人.出场语)
    }

    界面初始化() {
        this.node.getComponent(主页).更新()
        this.更新();
        缩小消失(this.node.getComponent(主页).按钮容器)
        放大出现(this.战斗)

        this.文本容器.getChildByName("标签1").getComponent(Label).string = "";
        this.文本容器.getChildByName("标签2").getComponent(Label).string = "";
        // 按钮初始化
        this.按钮容器.getChildByName("架势").active = !!存档.当前架势;
        this.按钮容器.getChildByName("架势").getChildByName("标签").getComponent(Label).string = 存档.当前架势[0] + "  " + 存档.当前架势[1];
        this.按钮容器.getChildByName("枪").active = !!存档.物品.枪;
        this.按钮容器.active = true;

        // 绑定事件
        const 攻击按钮 = this.按钮容器.getChildByName("攻击");
        攻击按钮.targetOff(this);
        攻击按钮.on(Button.EventType.CLICK, this.点击攻击, this);

        const 逃跑按钮 = this.按钮容器.getChildByName("逃跑");
        逃跑按钮.targetOff(this);
        逃跑按钮.on(Button.EventType.CLICK, this.点击逃跑, this);

        const 架势按钮 = this.按钮容器.getChildByName("架势");
        架势按钮.targetOff(this);
        架势按钮.on(Button.EventType.CLICK, this.点击架势, this);

        const 枪械按钮 = this.按钮容器.getChildByName("枪");
        枪械按钮.targetOff(this);
        枪械按钮.on(Node.EventType.TOUCH_END, this.点击枪, this);
    }

    点击攻击() {
        this.对局.结果文本 = [];
        this.对局.方法 = "普攻";

        执行钩子("攻击前", [this.对局]) //各种提升！！！
        this.对局.攻击.计算结果 = this.对局.攻击方.攻击 + this.对局.攻击.基础加成 * (1 +  this.对局.攻击.加法乘率) * this.对局.攻击.独立乘区
        this.对局.防御.计算结果 = this.对局.受击方.防御 + this.对局.防御.基础加成 * (1 +  this.对局.防御.加法乘率) * this.对局.防御.独立乘区
        this.对局.伤害.计算结果 = Math.max(this.对局.攻击.计算结果 - this.对局.防御.计算结果, 0);
        执行钩子('攻击时', [this.对局]) //各种防御！！1
        this.对局.受击方.生命 -= this.对局.伤害.计算结果
        this.对局.结果文本.unshift(`${this.对局.攻击方.名称}使用「${this.对局.方法}」`)
        this.对局.结果文本.push(`${this.对局.受击方.名称}受到${this.对局.伤害}点伤害。`)
        this.显示主角文本(this.对局.结果文本.join('\n'));
        执行钩子('攻击后', [this.对局]) // 各种被动!!!

        //更新渲染
        this.更新();
        this.node.getComponent(主页).更新()
        从0放大缩小(this.敌人标签);
        this.文本容器.getChildByName("标签2").getComponent(Label).string = "";
        this.按钮容器.active = false;

        // 结算
        if (this.对局.受击方.生命 <= 0) {
            this.胜利结算()
            return
        }
        if (存档.生命 <= 0) {
            this.失败结算()
            return
        }
        if (this.对局.受击方.生命 > 0 && 存档.生命 > 0) {
            this.scheduleOnce(() => this.点击攻击(), 1.5 / 设置.播放速度);
        }
    }

    // 敌人攻击() {
    //     //逃跑判定
    //     if (Math.random() * 100 < this.计算敌人逃跑成功率()) {
    //         执行钩子("敌人逃跑成功", [this.对局])
    //         this.结束战斗(`${this.敌人.名称}逃跑啦！`);
    //         return;
    //     }

    //     // 攻击准备
    //     this.对局.结果文本 = [];
    //     this.对局.方法 = '普攻'
    //     this.对局.攻击 = this.敌人.攻击
    //     this.对局.防御 = 计算最大防御() + this.对局.防御修正
    //     this.对局.伤害 = 0

    //     // 敌人攻击前
    //     const 敌人攻击前文本 = this.敌人.攻击前(this.对局)
    //     if (敌人攻击前文本) {
    //         this.对局.结果文本.push(敌人攻击前文本)
    //     }
    //     执行钩子("被攻击前", [this.对局])

    //     // 造成攻击
    //     this.对局.伤害 = Math.max(this.对局.攻击 - this.对局.防御, 0);

    //     // 敌人攻击
    //     const 敌人攻击文本 = this.敌人.攻击时(this.对局)
    //     if (敌人攻击文本) {
    //         this.对局.结果文本.push(敌人攻击文本)
    //     }
    //     执行钩子("被攻击时", [this.对局])

    //     // 伤害结算
    //     存档.生命 -= this.对局.伤害;
    //     if (this.对局.攻击) {
    //         this.对局.结果文本.unshift(`${this.敌人.名称}使用「${this.对局.方法}」`)
    //     }
    //     if (this.对局.伤害 > 0) {
    //         this.对局.结果文本.push(`你受到${this.对局.伤害}点伤害。`);
    //     }

    //     const 攻击后文本 = this.敌人.攻击后(this.对局);
    //     if (攻击后文本) {
    //         this.对局.结果文本.push(攻击后文本)
    //     }
    //     执行钩子('被攻击后', [this.对局])


    //     this.显示敌人文本(this.对局.结果文本.join('\n'));

    //     this.更新();
    //     this.node.getComponent(主页).更新()
    //     从0放大缩小(this.标签容器.getChildByName("生命"));
    //     从0放大缩小(this.标签容器.getChildByName("逃跑率"));
    //     this.node.getComponent(主页).标签.getComponent(Label).string = "";
    //     震动(this.node.getChildByName("相机"));
    //     this.对局.回合数++

    //     if (this.敌人.生命 <= 0) {
    //         this.胜利结算()
    //         return
    //     }
    //     if (存档.生命 <= 0) {
    //         this.失败结算()
    //         return
    //     }
    //     this.按钮容器.active = true;
    // }

    胜利结算() {
        this.对局.结果文本 = ['战斗胜利！'];

        //主角胜利
        执行钩子("战斗胜利", [this.对局])

        // 基本掉落
        const 掉落物文本 = 抽取物品(this.敌人.掉落物);
        if (掉落物文本) {
            this.对局.结果文本.push(`获得${掉落物文本}。`)
        }

        // 属性提升
        if (this.敌人.增加属性) {
            const 随机数 = Math.random() * 100;
            if (随机数 < 20) {
                存档.防御 += this.敌人.增加属性;
                this.对局.结果文本.push(`防御提高${this.敌人.增加属性}点！`)
            } else if (随机数 < 60) {
                存档.攻击 += this.敌人.增加属性;
                this.对局.结果文本.push(`攻击提高${this.敌人.增加属性}点！`)
            } else {
                存档.最大生命 += this.敌人.增加属性 * 5;
                this.对局.结果文本
                this.对局.结果文本.push(`最大生命值提高${this.敌人.增加属性 * 5}点！`)
            }
        }

        // 声望奖励
        if (this.敌人.增加声望) {
            存档.声望 += this.敌人.增加声望;
            this.对局.结果文本.push(`声望+${this.敌人.增加声望}！`)
        }

        // 经验提升
        if (this.敌人.等级) {
            if (!存档.经验) {
                存档.经验 = 0
            }
            存档.经验 += this.敌人.等级
            this.对局.结果文本.push(`经验+${this.敌人.等级}！`)
        }

        // 架势熟练度
        let maxKey = "";
        let maxValue = 0;
        for (const [key, value] of Object.entries(this.对局.架势使用次数)) {
            if (value > maxValue) {
                maxValue = value;
                maxKey = key;
            }
        }
        if (maxKey) {
            if (存档.架势经验[maxKey] < 150) {
                存档.架势经验[maxKey] += 1;
                this.对局.结果文本.push(`${maxKey}架势熟练度+1！`)
            } else {
                this.对局.结果文本.push(`${maxKey}架势熟练度已达最大值！`)
            }
        }

        //敌人失败
        const 敌人失败文本 = this.敌人.失败效果(this.对局)
        if (敌人失败文本) {
            this.对局.结果文本.push(敌人失败文本)
        }

        if (存档.生命 <= 0) {
            存档.生命 = 1;
        }

        存档.其他.胜利次数 += 1;
        存档.击败次数[this.敌人.名称]++
        this.scheduleOnce(() => this.结束战斗(this.对局.结果文本.join('\n')), 1.8 / 设置.播放速度);
    }

    失败结算() {
        this.对局.结果文本 = ['战斗失败！'];
        // 角色失败
        执行钩子("战斗失败", [this.对局])

        // 损失健康
        if (this.敌人.损失健康 > 0) {
            存档.健康 -= this.敌人.损失健康;
            let 提示 = `健康-${this.敌人.损失健康}！`
            if (存档.天数 < 20) {
                提示 += `（健康为0时游戏结束）`
            }
            this.对局.结果文本.push(提示)
        }

        // 作者的守护
        if (存档.天数 <= 3) {
            存档.生命 = 计算最大生命();
            存档.健康 += this.敌人.损失健康;
            this.对局.结果文本.push("【作者的守护：游戏前3天战斗失败不会受到惩罚，并且帮你补满血，请开心点玩游戏吧~】")
        }

        // 敌人胜利
        const 敌人胜利文本 = this.敌人.胜利效果(this.对局)
        if (敌人胜利文本) {
            this.对局.结果文本.push(敌人胜利文本)
        }

        if (存档.生命 <= 0) {
            存档.生命 = 1;
        }
        存档.其他.战败次数++
        存档.战败次数[this.敌人.名称]++
        this.scheduleOnce(() => this.结束战斗(this.对局.结果文本.join('\n')), 1.8);
    }

    点击逃跑() {
        if (存档.架势.猥琐) {
            存档.当前架势 = "猥琐";
        }

        this.按钮容器.active = false;
        this.更新();
        this.node.getComponent(主页).更新()

        if (Math.random() * 100 > this.计算主角逃跑成功率()) {
            // 逃跑失败
            if (存档.生命 <= 0) {
                this.失败结算()
                return
            }
            if (this.敌人.生命 <= 0) {
                this.胜利结算()
                return
            }

            存档.其他.逃跑失败次数++;
            this.对局.结果文本 = ["逃跑失败！"]
            执行钩子("逃跑失败", [this.对局])
            this.文本容器.getChildByName("标签1").getComponent(Label).string = "";
            this.文本容器.getChildByName("标签2").getComponent(Label).string = "";
            播放文本(this.node.getComponent(主页).标签, this.对局.结果文本.join('\n'))

            this.scheduleOnce(() => this.敌人攻击(), 0.8);
            return
        }
        // 逃跑成功
        this.对局.结果文本 = ['逃跑成功！']
        执行钩子("逃跑成功", [this.对局])
        存档.其他.逃跑成功次数++
        存档.逃跑++

        this.结束战斗(this.对局.结果文本.join('\n'));
    }

    点击架势() {
        const 架势列表 = Object.keys(存档.架势).filter(key => 存档.架势[key] === true);
        const 当前架势序号 = 架势列表.findIndex(架势 => 架势 === 存档.当前架势);
        let 下一架势序号 = 0;

        if (当前架势序号 !== -1) {
            下一架势序号 = (当前架势序号 + 1) % 架势列表.length;
        }

        存档.当前架势 = 架势列表[下一架势序号];

        this.按钮容器.getChildByName("架势").getChildByName("标签").getComponent(Label).string = `${存档.当前架势?.[0] || ''}  ${存档.当前架势?.[1] || ''}`;
    }

    点击枪() {
        this.对局.枪开关 = !this.对局.枪开关
        const 枪械按钮 = this.按钮容器.getChildByName("枪");
        枪械按钮.getComponent(Label).string = `（${存档.物品.子弹}）\n【${["关", "开"][Number(this.对局.枪开关)]}】`;
        // todo
    }

    计算主角逃跑成功率() {
        const 逃跑率 = 计算最大逃跑() + this.对局.逃跑修正 - this.敌人.压制
        return Math.min(Math.max(逃跑率, 0), 100);
    }

    计算敌人逃跑成功率() {
        const 敌人逃跑成功率 = this.敌人.逃跑 - 计算最大压制() - this.对局.压制修正
        return Math.min(Math.max(敌人逃跑成功率, 0), 100);
    }

    结束战斗(text: string) {
        存档.当前敌人 = "";
        this.战斗.active = false;
        this.敌人 = null
        this.对局 = null

        this.node.getComponent(主页).更新()
        放大出现(this.node.getComponent(主页).按钮容器)
        播放文本(this.node.getComponent(主页).标签, text)
        保存存档();
    }

    更新() {
        this.敌人标签.getComponent(Label).string = `${this.敌人.显示名称 || this.敌人.名称}LV${this.敌人.等级}\nHP${this.敌人.生命} ATT${this.敌人.攻击} DEF${this.敌人.防御}`;
        this.血量条.getComponent(ProgressBar).progress = this.敌人.生命 / this.敌人.最大生命;

        this.标签容器.getChildByName("生命").getComponent(Label).string = `HP${存档.生命}/${计算最大生命()}`;
        this.标签容器.getChildByName("逃跑率").getComponent(Label).string = `${this.计算主角逃跑成功率()}%`;

        if (存档.物品.枪 > 0) {
            this.按钮容器.getChildByName("枪").getComponent(Label).string = `（${存档.物品.子弹}）\n【${["关", "开"][Number(this.对局.枪开关)]}】`;
        }
        this.按钮容器.getChildByName("架势").getChildByName("标签").getComponent(Label).string = 存档.当前架势[0] + "  " + 存档.当前架势[1];
    }
    显示主角文本(text: string) {
        const t = this.文本容器.getChildByName("标签1");
        t.getComponent(Label).string = text;
        从0放大缩小(t)
    }
    显示敌人文本(text: string) {
        const t = this.文本容器.getChildByName("标签2");
        t.getComponent(Label).string = text;
        从0放大缩小(t)
    }
}
