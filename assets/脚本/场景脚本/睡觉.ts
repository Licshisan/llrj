import { _decorator, Component, Node, Label, Color, UITransform, Button, director, tween, error } from "cc";
import { 保存存档, 备份存档, 存档 } from "../管理器/存档管理器";
import { 淡入 } from "../方法函数/动画效果";
import { 设置 } from "../管理器/设置管理器";
import { 计算数值, 计算最大生命, 计算最大精力, 计算最大饥饿 } from "../方法函数/属性计算";
import { 自动进食 } from "../方法函数/公共函数";
import { 执行钩子 } from "../管理器/钩子管理器";
import { 获取地区名称 } from "../默认内容/地区表";
import { 默认剧情表 } from "../默认内容/剧情表";
import { 获取随机存档请求, 上传存档请求 } from "../方法函数/网络请求";
const { ccclass, property } = _decorator;

@ccclass("睡觉")
export class 睡觉 extends Component {
    @property(Node) 标签: Node = null!;
    @property(Node) 属性容器: Node = null!;
    @property(Node) 文本容器: Node = null!;
    @property(Node) 继续按钮: Node = null!;

    start(): void {
        上传存档请求()
        this.标签.active = false;
        this.属性容器.active = false;
        this.文本容器.active = false;
        this.继续按钮.active = false;
        this.标签.getComponent(Label).string = `第${存档.天数 + 1}天`;
        const sequence = tween(this.node);
        sequence.delay(1)
        sequence.call(() => 淡入(this.标签)).delay(2.5 / 设置.播放速度);
        sequence.call(() => 淡入(this.属性容器)).delay(2.5 / 设置.播放速度);
        sequence.call(() => 淡入(this.文本容器)).delay(2.5 / 设置.播放速度);
        sequence.call(() => 淡入(this.继续按钮)).start();
        this.恢复()
        this.结算();

        this.继续按钮.on(Button.EventType.CLICK, () => this.点击继续(), this,);
    }

    恢复() {
        // 睡觉恢复 - 重置每日数据
        存档.其他.当日比赛次数 = 0
        存档.其他.当日触发比武大会 = 0
        存档.其他.当日看少妇次数 = 0;
        存档.其他.时空流浪者待抢夺天赋天数 = 0;
        存档.其他.锻炼成功率 = Math.floor(Math.random() * 50);
        存档.其他.最大单日县城探索次数 = Math.max(存档.其他.最大单日县城探索次数, 存档.其他.单日县城探索次数);
        存档.其他.单日县城探索次数 = 0;
        if(存档.其他.电疗店开店){
            存档.其他.电疗店资产 -= Math.floor(15 * Math.random() + 5);
        }
        存档.当前文本 = ""

        const 精力恢复 = 计算数值("睡觉恢复精力", 计算最大精力() - 存档.精力)
        const 饥饿消耗 = 计算数值("睡觉消耗饥饿", 20)
        const 生命恢复 = 计算数值("睡觉恢复生命", 0)

        存档.精力 += 精力恢复;
        存档.饥饿 -= 饥饿消耗;
        存档.生命 += 生命恢复;
        自动进食();

        const 最大精力 = 计算最大精力()
        const 最大饥饿 = 计算最大饥饿()
        const 最大生命 = 计算最大生命();

        this.属性容器.getChildByName("精力").active = 精力恢复 > 0
        this.属性容器.getChildByName("饥饿").active = 饥饿消耗 > 0
        this.属性容器.getChildByName("生命").active = 生命恢复 > 0
        this.属性容器.getChildByName("精力").getChildByName("标签").getComponent(Label).string = `精力 +${精力恢复}（${存档.精力}/${最大精力}）`;
        this.属性容器.getChildByName("饥饿").getChildByName("标签").getComponent(Label).string = `饥饿 -${饥饿消耗}（${存档.饥饿}/${最大饥饿}）`;
        this.属性容器.getChildByName("生命").getChildByName("标签").getComponent(Label).string = `生命 +${生命恢复}（${存档.生命}/${最大生命}）`;
    }

    结算() {
        // 增加天数
        存档.天数 += 1;
        const 地区名 = 获取地区名称()
        存档.停留天数[地区名] += 1;
        // 重置每日数据
        const 当日加成键列表 = Object.keys(存档.当日加成);
        for (const 名称 of 当日加成键列表) {
            if (名称 in 存档) {
                (存档 as any)[名称] -= 存档.当日加成[名称];
                存档.当日加成[名称] = 0;
            } else if (名称 in 存档.物品) {
                存档.物品[名称] -= 存档.当日加成[名称];
                存档.当日加成[名称] = 0;
            }
        }

        // 遇敌
        if (Math.random() * 100 < 17) {
            if (Math.random() * 100 < 70 || 获取地区名称() === "省城") {
                const 贼系列 = ["女贼(小学生)", "女贼她姐", "女贼她小姨", "女贼她妈", "女贼她奶奶", "女贼集团总裁（精英）", "贼女王（精英）"];
                if (贼系列[存档.其他.贼系列击杀数]) {
                    存档.当前敌人 = 贼系列[存档.其他.贼系列击杀数]
                }else{
                    const 吸毒男系列 = [ "吸毒男（BOSS）", "吸毒男2阶（BOSS）", "吸毒男3阶（BOSS）", "吸毒男4阶（BOSS）", "吸毒男5阶（BOSS）"];
                    if (吸毒男系列[存档.其他.毒男系列击杀数]) {
                        存档.当前敌人 = 吸毒男系列[存档.其他.毒男系列击杀数]
                    }
                }
            } else {
                const 蚊子系列 = ["蚊小满", "大毛蚊", "密斯特蚊", "阿蚊", "徐蚊强", "蚊女王", "蚊.媛"];
                if (蚊子系列[存档.其他.蚊子系列击杀次数]) {
                    存档.当前敌人 = 蚊子系列[存档.其他.蚊子系列击杀次数]
                }
            }

            if (存档.天数 >= 21 && 获取地区名称() === "荒野") {
                存档.当前敌人 = "蒙面人2";
            }
            if (存档.天数 >= 83 && 获取地区名称() === "山脉") {
                存档.当前敌人 = "蒙面人";
            }
            if (Math.random() * 100 < (存档.物品.枪 - 1) * 10 + 1 && 存档.物品.枪 > 0) {
                存档.当前敌人 = "陈晓（大大）2";
            }

            if(Math.random() * 100 < (计算最大精力() - 800) / 50){
                存档.当前敌人 = "游戏GM";
            }
            if (存档.天数 >= 178) {
                存档.当前敌人 = "";
            }
        }

        // 30%概率遇到其他玩家（PVP）
        if (存档.当前敌人 == "" && 存档.天数 > 1 && 存档.天数 < 178 && Math.random() * 100 < 24) {
            获取随机存档请求(存档.天数 - 1).then(result => {
                console.log("随机匹配到的存档数据", result);
                存档.临时数据.时空流浪者 = result.data
            }).catch((e) => {
                error(e)
            });
        }

        // 其他
        备份存档(`day${存档.天数}`)
        if (存档.停留天数.山脉 === 8 && 获取地区名称() === "山脉") {
            备份存档("晓月")
        }
        if (存档.当前地点) {
            存档.当前地点 = ''
        }

        const 结果文本 = [];

        // 睡觉结算 - 失眠判定
        if (Math.random() * 100 < 存档.罪恶 / 3) {
            存档.精力 -= Math.floor(存档.精力 * 0.5)
            结果文本.push("【失眠】精力-50%！");
        }

        // 剧情条件判定
        if (存档.距离 === 100 && 存档.停留天数.县城 > 22) {
            存档.按钮.前进 = 1
        }

        // 回到城中村
        if (获取地区名称() === '省城' && 存档.剧情.住在桥洞) {
            存档.当前地点 = '城中村'
        }

        // 兴奋消退
        if (存档.其他.全属性加成 > 0) {
            const e = Math.floor(存档.其他.全属性加成 * 0.2 + 1);
            存档.其他.全属性加成 -= e;
            if (存档.其他.全属性加成 < 0) {
                存档.其他.全属性加成 = 0;
            }
            结果文本.push(`【兴奋消退】玩游戏获得的属性加成效果消退${e}%，还剩下${存档.其他.全属性加成}%`);
        }

        // 住房
        if(存档.临时数据.房源){
            if(存档.其他.住房已居住天数 < 存档.其他.住房天数){
                const 房源 = 存档.临时数据.房源 || {}
                if(房源.中介名称 === '刘老头' && Math.random() * 100 < 25){
                    结果文本.push("【租房被坑】你租的房子来源于假冒的房东，你被真正的房东赶了出来")
                    存档.其他.住房已居住天数 = 0
                    存档.其他.住房天数 = 0
                    存档.临时数据.房源 = 0
                    return
                }

                存档.其他.住房已居住天数 ++

                const 恢复精力 = Math.floor(计算最大精力() * 房源.恢复精力)
                存档.精力 += 恢复精力
                const 恢复健康 = Math.floor(房源.恢复健康)
                存档.健康 += 恢复健康

                结果文本.push( `【${房源.名称}】充分的休息让你额外恢复${恢复精力}精力（${(房源.恢复精力 * 100).toFixed(2)}%），${恢复健康}点健康，已居住${存档.其他.住房已居住天数}/${存档.其他.住房天数}天`);
            }else{
                结果文本.push(`【房租已到期】已居住${存档.其他.住房已居住天数}/${存档.其他.住房天数}天，你回到了桥洞休息`);
                存档.其他.住房已居住天数 = 0
                存档.其他.住房天数 = 0
                存档.临时数据.房源 = 0
            }
        }

        执行钩子("睡觉结算", [结果文本])

        if (存档.天数 >= 178) {
            存档.当前敌人 = "";
        }
        this.创建文本(结果文本);
    }

    创建文本(内容列表: string[]) {
        for (let index = 0; index < 内容列表.length; index++) {
            const feature = new Node(`label_${index}`);
            const label = feature.addComponent(Label);

            label.string = 内容列表[index];
            label.fontSize = 42;
            label.lineHeight = 50;
            label.overflow = Label.Overflow.RESIZE_HEIGHT;
            label.horizontalAlign = Label.HorizontalAlign.LEFT;
            label.color = Color.WHITE;

            feature.setParent(this.文本容器);
            feature.setPosition(0, 0);
            feature.getComponent(UITransform).setContentSize(650, 50);
        }
    }

    点击继续() {
        const 剧情 = 默认剧情表.find(剧情 => 剧情.地区 === 获取地区名称() && 剧情.条件)
        if (剧情) {
            存档.临时数据.时空流浪者 = null
            存档.当前剧情 = 剧情.名称
            保存存档()
            director.loadScene("剧情");
        } else {
            if(存档.临时数据.时空流浪者){
                存档.当前剧情 = "遇见同行"
                保存存档()
                director.loadScene("剧情");
            } else{
                director.loadScene("主页");
            }
        }
    }
}
