import { _decorator, Component, director, Node, Button, Label } from "cc";
import { 播放文本 } from "../方法函数/动画效果";
import { 保存存档, 存档 } from "../管理器/存档管理器";
import { 计算最大精力, 计算最大饥饿 } from "../方法函数/属性计算";
import { 格式化金钱 } from "../方法函数/公共函数";
const { ccclass, property } = _decorator;

@ccclass("住房")
export class 住房 extends Component {
    @property(Node) 属性一: Node = null;
    @property(Node) 属性二: Node = null;
    @property(Node) 选项容器: Node = null;
    @property(Node) 返回按钮: Node = null;
    @property(Node) 标签: Node = null;
    @property(Node) 上一个: Node = null;
    @property(Node) 下一个: Node = null;

    中介: any
    房源: any[]
    当前序号: number = 0
    start() {
        this.生成数据()
        this.显示首页()

        this.上一个.on(Button.EventType.CLICK, () => {
            if (this.当前序号 <= 1) {
                播放文本(this.标签, "没有上一个了~")
                return
            }
            this.当前序号--
            this.显示房源()
        }, this)

        this.下一个.on(Button.EventType.CLICK, () => {
            if (this.当前序号 >= this.房源.length) {
                播放文本(this.标签, "没有下一个了~")
                return
            }
            this.当前序号++
            this.显示房源()
        }, this)

        this.刷新属性()
        this.返回按钮.on(Button.EventType.CLICK, () => {
            if(!this.当前序号){
                director.loadScene("主页")
            }else{
                this.显示首页()
            }
        }, this)
    }

    显示首页() {
        this.当前序号 = 0
        this.上一个.active = false
        this.下一个.active = false
        const 选项3 = this.选项容器.getChildByName("ChoiceButton3")
        const 选项2 = this.选项容器.getChildByName("ChoiceButton2")
        const 选项1 = this.选项容器.getChildByName("ChoiceButton1")

        选项3.getChildByName("标签").getComponent(Label).string = `业务介绍`
        选项2.getChildByName("标签").getComponent(Label).string = `看看房`
        选项1.getChildByName("标签").getComponent(Label).string = `买房子`

        选项3.targetOff(this)
        选项2.targetOff(this)
        选项1.targetOff(this)

        选项3.on(Button.EventType.CLICK, () => 播放文本(this.标签, `${this.中介.名称}：${this.中介.介绍}`), this)
        选项2.on(Button.EventType.CLICK, () => this.显示房源(), this)
        选项1.on(Button.EventType.CLICK, () => 播放文本(this.标签, "功能暂未开启..."), this)
        播放文本(this.标签, `${this.中介.名称}：${this.中介.介绍}`)
    }

    生成数据() {
        const 中介列表 = [
            { 等级: 0, 名称: "刘老头", 数量: [15, 19], 住房: [0, 3], 品质: [0, 2], 价格倍率: 0.6, 出现概率: 40, 介绍: "我在这片干几十年了，手里都是实惠房源，花钱少就能落脚，赶快购买吧！" },
            { 等级: 1, 名称: "陈哥", 数量: [10, 12], 住房: [0, 5], 品质: [0, 2], 价格倍率: 1.25, 出现概率: 30, 介绍: "认识的熟人多，房源路子广，高中低档都有，价格公道~" },
            { 等级: 2, 名称: "林姐", 数量: [7, 9], 住房: [1, 5], 品质: [0, 2], 价格倍率: 1.4, 出现概率: 30, 介绍: "我只做干净靠谱的正规房源，环境卫生都过关，住着舒心，价格自然不会太便宜哦~" },
            { 等级: 3, 名称: "吴经理", 数量: [9, 11], 住房: [3, 7], 品质: [1, 3], 价格倍率: 1.6, 出现概率: 1, 介绍: "我负责小区优质精装房源，管理规范、配套齐全，只做高品质长租~" }
        ];

        const 住房信息 = [
            { 等级: 0, 名称: "集体宿舍", 地点: "城郊新村", 日租: 200, 恢复精力: 0.05, 恢复健康: 2 },
            { 等级: 1, 名称: "隔板单间", 地点: "城郊新村", 日租: 400, 恢复精力: 0.1, 恢复健康: 5 },

            { 等级: 2, 名称: "简装合租", 地点: "便民公寓", 日租: 600, 恢复精力: 0.15, 恢复健康: 10 },
            { 等级: 3, 名称: "简装单间", 地点: "便民公寓", 日租: 1000, 恢复精力: 0.25, 恢复健康: 15 },

            { 等级: 4, 名称: "精装合租", 地点: "宜居家园", 日租: 2000, 恢复精力: 0.4, 恢复健康: 20 },
            { 等级: 5, 名称: "精装单间", 地点: "宜居家园", 日租: 3000, 恢复精力: 0.5, 恢复健康: 30 },

            { 等级: 6, 名称: "豪华合租套房", 地点: "江山御景高端盘", 日租: 3500, 恢复精力: 0.6, 恢复健康: 40 },
            { 等级: 7, 名称: "豪华套房", 地点: "江山御景高端盘", 日租: 8000, 恢复精力: 0.8, 恢复健康: 60 }
        ]

        const 住房品质 = [
            { 品质等级: 0, 品质名称: "破旧脏乱", 价格倍率: 0.6, 属性倍率: 0.6, 随机浮动: 0.1, 抽取概率权重: 30 },
            { 品质等级: 1, 品质名称: "局促狭小", 价格倍率: 0.75, 属性倍率: 0.75, 随机浮动: 0.1, 抽取概率权重: 30 },
            { 品质等级: 2, 品质名称: "中规中矩", 价格倍率: 0.9, 属性倍率: 0.9, 随机浮动: 0.1, 抽取概率权重: 30 },
            { 品质等级: 3, 品质名称: "通透宽敞", 价格倍率: 1, 属性倍率: 1.1, 随机浮动: 0.15, 抽取概率权重: 2 }
        ]

        function 随机抽取带权重(列表, 权重字段) {
            const 总权重 = 列表.reduce((sum, item) => sum + item[权重字段], 0);
            let 随机值 = Math.random() * 总权重;

            for (const item of 列表) {
                随机值 -= item[权重字段];
                if (随机值 <= 0) return item;
            }
            return 列表[0];
        }

        function 随机数(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function 抽取随机中介() {
            return 随机抽取带权重(中介列表, "出现概率");
        }

        function 生成中介房源(中介) {
            const 房源列表 = [];

            // 中介本次提供的房源数量
            const 本次房源数 = 随机数(中介.数量[0], 中介.数量[1])

            // 中介可提供的住房等级范围
            const [住房最小等级, 住房最大等级] = 中介.住房;

            // 中介可提供的品质等级范围
            const [品质最小等级, 品质最大等级] = 中介.品质;

            // 生成 N 个房源
            for (let i = 0; i < 本次房源数; i++) {
                // 随机住房等级
                const 目标住房等级 = 随机数(住房最小等级, 住房最大等级);
                const 基础住房 = 住房信息.find(h => h.等级 === 目标住房等级);

                // 随机品质（只在中介允许的范围内）
                const 可选品质 = 住房品质.filter(q => q.品质等级 >= 品质最小等级 && q.品质等级 <= 品质最大等级);
                const 选中品质 = 随机抽取带权重(可选品质, "抽取概率权重");

                // 价格浮动
                const 浮动 = 1 + (Math.random() * 选中品质.随机浮动 * 2 - 选中品质.随机浮动);

                // 最终价格
                const 最终日租 = Math.round(基础住房.日租 * 中介.价格倍率 * 选中品质.价格倍率 * 浮动);

                // 最终属性
                const 最终恢复精力 = (基础住房.恢复精力 * 选中品质.属性倍率 * 浮动)
                const 最终恢复健康 = Math.round(基础住房.恢复健康 * 选中品质.属性倍率 * 浮动);

                // 组装最终房源
                房源列表.push({
                    房源编号: i + 1,
                    名称: 基础住房.名称,
                    品质: 选中品质.品质名称,
                    地点: 基础住房.地点,
                    日租: 最终日租,
                    恢复精力: 最终恢复精力,
                    恢复健康: 最终恢复健康,
                    住房等级: 基础住房.等级,
                    品质等级: 选中品质.品质等级,
                    折扣: 中介.价格倍率
                });
            }

            return 房源列表;
        }

        this.中介 = 抽取随机中介()
        this.房源 = 生成中介房源(this.中介)

        console.log(this.中介)
        console.log(this.房源)
    }

    刷新属性() {
        this.属性一.getComponent(Label).string = `金钱：${(存档.金钱 / 10).toFixed(1)}元\n精力：${存档.精力}/${计算最大精力()}\n饥饿：${存档.饥饿}/${计算最大饥饿()}`
        
        let 信息 = `当前住房信息`
        const 房源 = 存档.其他.房源
        if(!房源) {
            信息 += '\n暂无'
        } else {
            信息 += `\n${房源.品质}「${房源.名称}」\n已居住${存档.其他.住房已居住天数}/${存档.其他.住房天数}天`
            
        }
        this.属性二.getComponent(Label).string = 信息
    }

    显示房源() {
        if(!this.当前序号){
            this.当前序号 = 1
        }
        this.上一个.active = true
        this.下一个.active = true
        const 选项3 = this.选项容器.getChildByName("ChoiceButton3")
        const 选项2 = this.选项容器.getChildByName("ChoiceButton2")
        const 选项1 = this.选项容器.getChildByName("ChoiceButton1")

        const 房源 = this.房源[this.当前序号 - 1]
        let 介绍 = `【第${房源.房源编号}/${this.房源.length}套】这是一套${房源.品质}「${房源.名称}」\n每天额外恢复${(房源.恢复精力 * 100).toFixed(2)}%精力\n每天额外恢复${房源.恢复健康}点健康，日租金：${格式化金钱(房源.日租)}`
        if (房源.折扣 && 房源.折扣 < 1) {
            介绍 += `（已打${房源.折扣}折扣）`
        }
        if (房源.地点) {
            介绍 += `\n地点：${房源.地点}`
        }
        播放文本(this.标签, 介绍)

        选项3.getChildByName("标签").getComponent(Label).string = `短租3天（${格式化金钱(房源.日租 * 3)}）`
        选项2.getChildByName("标签").getComponent(Label).string = `短租7天（${格式化金钱(房源.日租 * 7)}）`
        选项1.getChildByName("标签").getComponent(Label).string = `长租30天（9折，${格式化金钱(房源.日租 * 30 * 0.9)}）`

        选项3.targetOff(this)
        选项2.targetOff(this)
        选项1.targetOff(this)
        选项3.on(Button.EventType.CLICK, () => this.点击购买(3), this)
        选项2.on(Button.EventType.CLICK, () => this.点击购买(7), this)
        选项1.on(Button.EventType.CLICK, () => this.点击购买(30), this)
    }

    点击购买(day: number) {
        const 房源 = this.房源[this.当前序号 - 1]
        let 价格 = 房源.日租 * day
        if(day == 30){
            价格 *= 0.9
        }

        if(存档.金钱 < 价格){
            播放文本(this.标签, '钱不够！')
            return
        }
        if(存档.其他.住房已居住天数 < 存档.其他.住房天数){
            播放文本(this.标签, '之前租的房还没有到期，还是不多花钱了~')
            return
        }

        存档.金钱 -= 价格
        存档.其他.住房已居住天数 = 0
        存档.其他.住房天数 = day
        存档.其他.房源 = 房源
        保存存档()
        播放文本(this.标签, `租房成功！花费${格式化金钱(价格)}，租赁${房源.品质}「${房源.名称}」${day}天`)
        this.刷新属性()
    }
}