import { _decorator, Component, Node, Label, Color, UITransform, Button, director, tween } from "cc";
import { 保存存档, 备份存档, 存档 } from "../管理器/存档管理器";
import { 淡入 } from "../方法函数/动画效果";
import { 设置 } from "../管理器/设置管理器";
import { 计算数值, 计算最大生命, 计算最大精力, 计算最大饥饿 } from "../方法函数/属性计算";
import { 上传存档, 自动进食 } from "../方法函数/公共函数";
import { 执行钩子 } from "../管理器/钩子管理器";
import { 获取地区名称 } from "../默认内容/地区表";
import { 默认剧情表 } from "../默认内容/剧情表";
const { ccclass, property } = _decorator;

@ccclass("睡觉")
export class 睡觉 extends Component {
    @property(Node) 标签: Node = null!;
    @property(Node) 属性容器: Node = null!;
    @property(Node) 文本容器: Node = null!;
    @property(Node) 继续按钮: Node = null!;

    start(): void {
        上传存档()
        this.标签.active = false;
        this.属性容器.active = false;
        this.文本容器.active = false;
        this.继续按钮.active = false;
        this.标签.getComponent(Label).string = `第${存档.天数 + 1}天`;
        const sequence = tween(this.node);
        sequence.call(() => 淡入(this.标签)).delay(2 / 设置.播放速度);
        sequence.call(() => 淡入(this.属性容器)).delay(2 / 设置.播放速度);
        sequence.call(() => 淡入(this.文本容器))
        sequence.call(() => 淡入(this.继续按钮)).start();
        this.恢复()
        this.结算();

        this.继续按钮.on(Button.EventType.CLICK, () => this.点击继续(), this,);
    }

    点击继续() {
        const 剧情 = 默认剧情表.find(剧情 => 剧情.地区 === 获取地区名称() && 剧情.条件)
        if (剧情) {
            存档.当前剧情 = 剧情.名称
            保存存档()
            director.loadScene("剧情");
        } else {
            director.loadScene("主页");
        }
    }

    恢复() {
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
        for (let 名称 in 存档.当日加成) {
            if (名称 in 存档) {
                存档[名称] -= 存档.当日加成[名称]
                存档.当日加成[名称] = 0
            } else if (名称 in 存档.物品) {
                存档.物品[名称] -= 存档.当日加成[名称]
                存档.当日加成[名称] = 0
            }
        }

        // 遇敌
        if (Math.random() * 100 < 15) {
            if (Math.random() * 100 < 70 || 获取地区名称() === "省城") {
                const 贼系列 = ["女贼(小学生)", "女贼她姐", "女贼她小姨", "女贼她妈", "女贼她奶奶", "女贼集团总裁（精英）", "贼女王（精英）"];
                if (贼系列[存档.其他.贼系列击杀数]) {
                    存档.当前敌人 = 贼系列[存档.其他.贼系列击杀数]
                }else{
                    const 吸毒男系列 = [ "吸毒男（BOSS）", "吸毒男2阶（BOSS）", "吸毒男3阶（BOSS）", "吸毒男4阶（BOSS）", "吸毒男5阶（BOSS）","吸毒男终阶（BOSS）"];
                    if (吸毒男系列[存档.其他.毒男系列击杀数]) {
                        存档.当前敌人 = 吸毒男系列[存档.其他.毒男系列击杀数]
                    }
                }
            } else {
                const 蚊子系列 = ["蚊小满", "大毛蚊", "密斯特蚊", "阿蚊", "徐蚊强", "莫斯奇托蚊" ,"蚊女王"];
                if (蚊子系列[存档.其他.蚊子系列消灭数]) {
                    存档.当前敌人 = 蚊子系列[存档.其他.蚊子系列消灭数]
                }
            }

            if (存档.天数 >= 21 && 获取地区名称() == "荒野") {
                存档.当前敌人 = "蒙面人2";
            }
            if (存档.天数 >= 83 && 获取地区名称() == "山脉") {
                存档.当前敌人 = "蒙面人";
            }
            if (Math.random() * 100 < (存档.物品.枪 - 1) * 10 + 1) {
                存档.当前敌人 = "陈晓（大大）2";
            }
            if (存档.天数 >= 178) {
                存档.当前敌人 = "";
            }
        }

        // 其他
        if (存档.停留天数.山脉 === 8 && 获取地区名称() === "山脉") {
            备份存档("晓月")
        }
        if (存档.当前地点) {
            存档.当前地点 = ''
        }
        const 结果文本 = [];
        执行钩子("睡觉结算", [结果文本])
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
}
