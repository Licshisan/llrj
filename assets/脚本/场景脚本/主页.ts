import { _decorator, Button, Color, Component, director, Label, Node, Sprite } from 'cc';
import { 保存存档, 存档 } from '../管理器/存档管理器';
import { 计算数值, 计算最大攻击, 计算最大生命, 计算最大精力, 计算最大防御, 计算最大饥饿 } from '../方法函数/属性计算';
import { 抽取项目, 抽取物品, 格式化金钱, 自然恢复生命 } from '../方法函数/公共函数';
import { 播放文本, 放大缩小 } from '../方法函数/动画效果';
import { 事件 } from './事件';
import { 战斗 } from './战斗';
import { 执行钩子 } from '../管理器/钩子管理器';
import { 设置 } from '../管理器/设置管理器';
import { 获取当前日记 } from '../默认内容/日记表';
import { 获取地区名称, 获取当前地区 } from '../默认内容/地区表';
const { ccclass, property } = _decorator;

@ccclass('主页')
export class 主页 extends Component {
    @property(Node) 顶部状态栏: Node = null;
    @property(Node) 信息栏: Node = null;
    @property(Node) 状态栏: Node = null;
    @property(Node) 标签: Node = null;
    @property(Node) 按钮容器: Node = null;
    @property(Node) 背景: Node = null;

    start() {
        this.更新()
        this.回档()
        this.游戏结束()

        this.按钮容器.getChildByName("睡觉").on(Button.EventType.CLICK, this.点击睡觉, this)
        this.按钮容器.getChildByName("挑战").on(Button.EventType.CLICK, this.点击挑战, this)
        this.按钮容器.getChildByName("前进").on(Button.EventType.CLICK, this.点击前进, this)
        this.按钮容器.getChildByName("探索").on(Button.EventType.CLICK, this.点击探索, this)
        this.按钮容器.getChildByName("结局").on(Button.EventType.CLICK, this.点击结局, this)

        this.按钮容器.getChildByName("伙伴").on(Button.EventType.CLICK, () => director.loadScene("伙伴"), this)
        this.按钮容器.getChildByName("进食").on(Button.EventType.CLICK, () => director.loadScene("进食"), this)
        this.按钮容器.getChildByName("制作").on(Button.EventType.CLICK, () => director.loadScene("制作"), this)
        this.按钮容器.getChildByName("特性").on(Button.EventType.CLICK, () => director.loadScene("特性"), this)
        this.按钮容器.getChildByName("商店").on(Button.EventType.CLICK, () => director.loadScene("商店"), this)
        this.信息栏.on(Node.EventType.TOUCH_END, () => {
            if (存档.当前事件 || 存档.当前敌人) {
                return
            }
            director.loadScene("面板")
        }, this)
        this.暗夜模式()
    }

    回档() {
        this.scheduleOnce(() => {
            if (存档.当前剧情) {
                director.loadScene("剧情")
            } else if (存档.当前敌人) {
                this.node.getComponent(战斗).进入战斗(存档.当前敌人)
            } else if (存档.当前事件) {
                this.node.getComponent(事件).触发事件(存档.当前事件)
            } else if (存档.当前文本) {
                this.标签.getComponent(Label).string = 存档.当前文本;
            }
        }, 0)
    }

    游戏结束() {
        // 普通死亡
        if (存档.健康 <= 0) {
            const 地区名 = 获取地区名称()
            if (地区名 === '荒野') {
                存档.当前剧情 = '客死他乡'
            } else if (地区名 === '县城') {
                存档.当前剧情 = '无奈的人生'
            } else if (地区名 === '山脉') {
                存档.当前剧情 = '山雾茫茫'
            } else {
                存档.当前剧情 = '一个人的庆典'
                if (存档.当前地点 === '市中心') {
                    存档.当前剧情 = "无名的留言"
                } else if (存档.当前地点 === '郊外') {
                    存档.当前剧情 = "相似的绿色"
                } else if (存档.当前地点 === '城中村') {
                    存档.当前剧情 = "喧嚣的孤独"
                } else if (存档.当前地点 === '山洞') {
                    存档.当前剧情 = "未完成的计数"
                }
            }
            保存存档()
            director.loadScene("剧情")
            return
        }

        // 没打过boss
        if (存档.天数 >= 180 && !存档.剧情.通关 && 存档.健康 > 0) {
            存档.当前剧情 = "往事如烟"
            保存存档()
            director.loadScene("剧情")
            return
        }

        // 通关BOSS
        if (存档.天数 >= 180 && 存档.剧情.通关) {
            存档.按钮.伙伴 = false
            存档.按钮.制作 = false
            存档.按钮.前进 = false
            存档.按钮.商店 = false
            存档.按钮.挑战 = false
            存档.按钮.探索 = false
            存档.按钮.特性 = false
            存档.按钮.睡觉 = false
            存档.按钮.进食 = false
            存档.按钮.结局 = true

            this.顶部状态栏.active = false
            this.信息栏.active = false
            this.状态栏.active = false
            this.更新()
            保存存档()
        }
    }

    点击结局() {
        const 结局 = [
            "整个城市被大雾笼罩，身边的人影开始慢慢消失，周围没有一点声音...",
            "一个男人的身影缓缓浮现，一步步向我走了过来...",
            "“欢迎你的到来，我的朋友；这里是游戏的终点，我是这个游戏的作者”",
            "“虽然你可能有很多疑问，但是我并不想在这里回答你；我到这里来，只是想收获我的游戏成果”",
            "“但是在此之前，有些东西我需要向你交代一下。”",
            "“首先，在这个游戏里，只有两个真正的角色————你和我”",
            "“其他角色，只不过是我所创造的虚拟角色”",
            "“这个世界中既不存在「父亲」，也没有「刀疤男」和「通缉犯」”",
            "“我并不关心这些虚拟角色的「命运」，我只在意你体验完游戏后，获得了什么”",
            "“希望你能认真的回答我几个问题，我将根据问题的答案、和你在游戏中的所有选择，给出我的个人评价”",
            "“如果评价没有达到我的预期，你的游戏存档将会被我删除，那么请开始答题吧~”"
        ]
        if (结局[存档.其他.结局剧情]) {
            this.播放文本(结局[存档.其他.结局剧情])
            存档.其他.结局剧情++
            保存存档()
            return
        } 
        
        if (!存档.其他.完成问卷) {
            this.node.getComponent(事件).触发事件("问卷1")
            保存存档()
            return
        } 
        
        let 剧情得分 = 0
        for (const key in 存档.剧情) {
            if (存档.剧情[key] === true) {
                剧情得分++
            }
        }
        剧情得分 += 存档.物品.好人卡
        剧情得分 += Number(存档.剧情.堂主捐钱) * 3
        剧情得分 += Number(存档.剧情.借钱给中年大叔) * 3
        剧情得分 += Number(存档.剧情.帮助胖女人) * 3
        剧情得分 += Number(存档.剧情.再次帮助胖女人) * 3
        剧情得分 += Number(存档.剧情.选择小头) * 3
        剧情得分 += Number(存档.剧情.归还礼物) * 3 
        剧情得分 += Number(存档.剧情.打扫老爷爷房间) * 3
        剧情得分 += Math.floor(存档.伙伴.碧瑶好感 / 5000) + Math.floor(存档.伙伴.晓月好感 / 5000); // 22 + 4

        let 属性得分 = Math.floor(21 - 6 * 计算最大生命() / 10000 - 6 * 计算最大攻击() / 2000 - 6 * 计算最大防御() / 1000);
        属性得分 = Math.min(Math.max(属性得分, 0), 18); // 18

        let 得分 = 30 + 剧情得分 + 属性得分;
        存档.其他.最终得分 = 得分;

        let 通关文本 = `“总分为${得分}，高于通关所需分数（30分）。你可以过关啦~”`
        if(得分 <= 30){
            通关文本 = `“总分为${得分}，低于通关所需分数（30分）。放心，你的存档不会被我删除。”`
        }
        const 得分结局 = [
            `“你的答题评分为30（满分30，与刚才十个题目有关）。\n这部分设计目的、只是想引导你去思考这些问题，你随便怎么选都可以，我不会去要求你必须怎么样”`,
            `“游戏评分为${剧情得分}（满分22，与你在游戏中的选择有关）。\n这部分是考察你游戏的策略性和你的性格（游戏性格，不必较真）”`,
            `“属性评分为${属性得分}（满分18，攻防血属性越「低」分数越高！）\n这里很有必要解释下为何、要这么设计：\n第一，我想让你注重培养伙伴、被动技和某些道具，而不仅是仅用属性碾压 \n第二，低属性通关比可能比高属性通关更具挑战性！”`,
            通关文本,
            "“不过你想看到一个什么样的结局，将由你自己去选择。我需要指出的是，无论你如何选择，游戏都将结束。请做出你的选择。”"
        ]
        if (得分结局[存档.其他.得分结局]) {
            this.播放文本(得分结局[存档.其他.得分结局])
            存档.其他.得分结局++
            保存存档()
            return 
        }

        if(!存档.其他.选择回家){
            this.node.getComponent(事件).触发事件("选择回家")
            保存存档()
            return
        }

        const 回家结局 = [
            "听说中年大叔遗体被人领走啦，被一个中年妇女。（地点：省城。结局：安息吧，痛苦）",
            "落满枫叶的小路上，晓月正和几位同学手舞足蹈的说着些什么，不知道她是否还记得那个安静的少年呢？（地点：省城。结局：两个世界）",
            "再次碰到小兰时，她衣着端庄，在一家化妆品店做销售，她说，“还是自立过得舒坦呀，虽然没啥钱...”（地点：省城。结局：从零开始）",
            "我再也没有等到碧瑶的消息，她能还清那些巨额的债款吗？”（地点：省城。结局：懵懂的青春）",
            "老爷爷，你还好吗？（地点：省城。结局：无奈的人生）",
            "与世隔绝的大山中，地质队长正在台灯下撰写报告；而在另一头，她的女儿正准备在论坛上通宵怼那些侮辱她偶像的人。（地点：山脉。结局：隔阂）",
            "堂主的母亲突发脑溢血过世，他像孤魂一样终日在山间游荡着...（地点：山脉。结局：游荡的灵魂）",
            "那个可疑的村庄已被警察封锁。（地点：山脉。结局：封锁的造毒窝点）",
            "老人的房子前已长满杂草，房内早已空荡荡...（地点：山脉。结局：天空的流星）",
            "年轻的妈妈和小女孩依旧在河边散步，小女孩对着一个流浪汉做了一个鬼脸...（地点：县城。结局：榜样）",
            "抽烟的中年女人找到一个胖嘟嘟的男友。“虽然经常挨打，但是总算不是一个人了”，女人抽着烟，淡淡的说道。（地点：县城。结局：可怜还是可恨？）",
            "送糖的小男孩，作文拿到全县第一名，梦里笑醒的妈妈、大半夜跑到便利店给他买了一大盒五颜六色的棒棒糖...等待着儿子的苏醒。（地点：县城。结局：甜甜的男孩）",
            "三个流浪汉已经三分县城，各自守着自己的地盘...（地点：县城。结局：扩散的黑暗）",
            "呆萌的女贼打算放弃原来的职业，因为她找到了更稳定的生存方法————捡塑料瓶...（地点：山脉。结局：孤儿的挣扎）",
            "推开栅栏，院子里长满了杂草，似乎很久没人居住...（地点：家）",
            "门是开着的，屋里没有灯火，静悄悄的；青灰色的屋顶、几颗新绿色的嫩芽，在夕阳的余晖下，显得格外的安静。一只猫咪在门前的阳光下打着哈欠（地点：家）",
            "一个满头白发的老人，忽然呆在了门口....",
            "...全剧终...",
            "「感谢您能陪我看到最后！我是晓风，再会啦~」"
        ]

        if (存档.剧情.愿意回家 && 回家结局[存档.其他.回家结局]) {
            this.播放文本(回家结局[存档.其他.回家结局])
            存档.其他.回家结局++
            保存存档()
            return
        }

        if(!存档.剧情.愿意回家){
            if (存档.伙伴.晓月关系) {
                存档.当前剧情 = "晓月结局"
            } else if (存档.伙伴.碧瑶好感 > 999) {
                存档.当前剧情 = "碧瑶结局"
            } else if (存档.剧情.住在桥洞) {
                存档.当前剧情 = "桥洞结局"
            }
            director.loadScene('剧情')
            保存存档()
            return
        }

        director.loadScene('分数')
    }

    暗夜模式() {
        if (设置.暗夜模式) {
            const 标签 = this.node.getComponentsInChildren(Label);
            标签.forEach(label => {
                if (label.color.equals(Color.BLACK)) {
                    label.color = new Color(233, 233, 233)
                }
            });
            this.背景.getComponent(Sprite).color = new Color(23, 23, 23)
        }
    }

    点击睡觉() {
        if (存档.剧情.住在桥洞) {
            director.loadScene("桥洞")
        } else {
            if (存档.精力 > 0) {
                globalThis.确认参数 = {
                    文本: "系统检测到你还有剩余的精力，是否要睡觉？",
                    按钮: {
                        "确认睡觉": () => {
                            if (获取当前日记()) {
                                director.loadScene("日记");
                            } else {
                                director.loadScene("睡觉");
                            }
                        },
                        "返回": () => director.loadScene("主页")
                    }
                };
                director.loadScene("确认");
                return
            }
            if (获取当前日记()) {
                director.loadScene("日记");
            } else {
                director.loadScene("睡觉");
            }
        }
    }

    点击挑战() {
        if (存档.精力 < 10) {
            this.播放文本("挑战需10点精力！")
            return
        }
        const 挑战组 = ["眼镜王蛇（精英）", "逃犯（精英）", "深渊巨蟒", "机械人（被害妄想症）", "女剑士（中二病他姐）", "天下第一乖（么么啾）", "红狼", "8号拳师", "双枪老太婆", "自爆蛋", "晓风基因计划", "一块黑色的石头", "机甲少女", "炮击少女", "吾王", "晓风", "另一个自己"];
        const 敌人名称 = 挑战组[存档.其他.挑战进度]
        if (!敌人名称) {
            this.播放文本("你已经天下无敌了...")
            return
        }
        存档.精力 -= 10;
        this.node.getComponent(战斗).进入战斗(敌人名称)
    }

    点击前进() {
        if (!this.前置条件() || !this.前进条件()) {
            this.更新()
            保存存档()
            return
        }
        执行钩子("前进前")
        this.基本消耗()
        this.主要逻辑()
        存档.距离++;
        放大缩小(this.信息栏.getChildByName("距离"));
        执行钩子("前进后")
        if (存档.距离 >= 300) {
            存档.距离 = 300
        }
        this.更新()
        保存存档()
    }

    点击探索() {
        if (!this.前置条件() || !this.探索条件()) {
            this.更新()
            保存存档()
            return
        }
        执行钩子("探索前")
        this.基本消耗()
        this.主要逻辑()
        执行钩子("探索后")

        if (存档.当前地点 === '山洞') {
            存档.其他.山洞进度 += 1;
        }
        if (获取地区名称() === "县城") {
            存档.其他.单日县城探索次数 += 1;
        }
        this.更新()
        保存存档()
    }


    前置条件() {
        if (存档.当前事件 || 存档.当前敌人) {
            return
        }
        if (存档.健康 <= 0) {
            this.游戏结束()
            return false
        }
        const 前进探索消耗精力 = 计算数值("前进探索消耗精力", 10)
        if (存档.精力 < 前进探索消耗精力) {
            this.播放文本("精力不足！")
            return false
        }
        return true
    }

    前进条件() {
        if (存档.距离 == 1) {
            存档.按钮.特性 = true;
            return true
        }
        if (存档.距离 == 2) {
            存档.按钮.睡觉 = true;
            return true
        }
        if (存档.距离 == 3) {
            存档.按钮.进食 = true;
            return true
        }
        if (存档.距离 == 6) {
            存档.按钮.制作 = true;
            return true
        }
        if (存档.距离 == 44) {
            存档.按钮.挑战 = true;
            return true
        }
        // 进入县城
        if (存档.距离 == 99) {
            存档.按钮.前进 = false;
            存档.按钮.探索 = true;
            存档.按钮.商店 = true;
            存档.距离++
            this.播放文本("你已到达县城！开始探索吧~")
            return false
        }
        //离开县城
        if (存档.距离 == 101) {
            存档.按钮.商店 = false
            return true
        }
        // 晓月剧情
        if (存档.距离 == 289) {
            if (存档.伙伴.晓月关系) {
                存档.当前剧情 = "通缉犯";
                director.loadScene('剧情');
                存档.距离++
                return false
            }
        }
        // 进入省城
        if (存档.距离 == 299) {
            存档.按钮.前进 = false;
            存档.按钮.探索 = true;
            存档.按钮.商店 = true;
            存档.剧情.住在桥洞 = true;
            存档.距离++
            if (存档.伙伴.晓月关系) {
                存档.当前剧情 = "告别晓月";
                director.loadScene('剧情');
                return false
            }
            this.播放文本("你已到达省城！")
            return false
        }

        return true
    }

    探索条件() {
        const 计算县城停留天数 = 计算数值("计算县城停留天数", 42)
        if (获取地区名称() === '县城' && 存档.天数 >= 计算县城停留天数) {
            if (存档.距离 === 100) {
                存档.按钮.前进 = true
                this.更新()
                this.播放文本("再待下去迟早会被发现，还是去省城看看吧！")
                return false
            }
        }
        if (获取地区名称() === '山脉' && 存档.天数 >= 80) {
            if (存档.距离 > 100 && 存档.距离 < 300) {
                this.播放文本("还是先去省城整顿一下吧！")
                return false
            }
        }

        if (存档.天数 >= 180) {
            director.loadScene('结局')
            return false
        }

        return true
    }


    基本消耗() {
        存档.精力 -= 计算数值("前进探索消耗精力", 10);

        if (存档.饥饿 >= 0) {
            存档.饥饿 -= 计算数值("前进探索消耗饥饿", 5);
        }

        自然恢复生命()
    }

    主要逻辑() {
        存档.其他.前进探索次数++

        let 前进探索战斗权重 = 计算数值('前进探索战斗权重', 20)
        let 前进探索事件权重 = 计算数值('前进探索事件权重', 20)
        let 前进探索收集权重 = 计算数值('前进探索收集权重', 60)

        if (存档.距离 <= 3) 前进探索战斗权重 = 0;
        if (存档.距离 <= 5) 前进探索事件权重 = 0;

        const 总权重 = 前进探索战斗权重 + 前进探索事件权重 + 前进探索收集权重;
        const 随机数 = Math.random() * 总权重;

        if (随机数 < 前进探索战斗权重) {
            存档.其他.战斗次数++
            const 敌人表 = 获取当前地区().敌人
            执行钩子("计算地区敌人表", [敌人表])
            this.node.getComponent(战斗).进入战斗(抽取项目(敌人表));
        } else if (随机数 < 前进探索战斗权重 + 前进探索事件权重) {
            存档.其他.随机事件次数++
            const 事件表 = 获取当前地区().事件
            执行钩子("计算地区事件表", [事件表])
            this.node.getComponent(事件).触发事件(抽取项目(事件表))
        } else {
            存档.其他.捡道具次数++

            const 物品表 = 获取当前地区().物品
            let 结果文本: string[] = []
            执行钩子("计算地区物品表", [{ 物品表, 结果文本 }])

            const 基本抽取 = 抽取物品(物品表)
            if (!基本抽取) {
                存档.其他.啥也没找到次数++
            }
            结果文本.push(基本抽取 ? `发现：${基本抽取}` : '什么也没发现！')

            执行钩子("收集材料", [{ 物品表, 结果文本 }])
            this.播放文本(结果文本.join('\n'))
        }
    }

    播放文本(文本: string) {
        存档.当前文本 = 文本;
        播放文本(this.标签, 文本)
    }

    更新() {
        执行钩子("主页更新")
        this.顶部状态栏.getChildByName("天数").getChildByName("标签").getComponent(Label).string = `${获取地区名称()}.${存档.天数}天`;
        this.顶部状态栏.getChildByName("精力").getChildByName("标签").getComponent(Label).string = `${存档.精力}/${计算最大精力()}`;
        this.顶部状态栏.getChildByName("饥饿").getChildByName("标签").getComponent(Label).string = `${存档.饥饿}/${计算最大饥饿()}`;

        this.信息栏.getChildByName("健康").getComponent(Label).string = `健康  ${存档.健康}`;
        let 颜色 = 设置.暗夜模式 ? Color.WHITE : Color.BLACK
        if (存档.健康 <= 3) {
            颜色 = Color.RED
        }
        this.信息栏.getChildByName("健康").getComponent(Label).color = 颜色;
        this.信息栏.getChildByName("金钱").getComponent(Label).string = `金钱  ${格式化金钱(存档.金钱)}`;
        this.信息栏.getChildByName("烟酒").getComponent(Label).string = `烟酒  ${存档.物品.香烟}/${存档.物品.啤酒}`;
        this.信息栏.getChildByName("生命").getComponent(Label).string = `生命  ${Math.round(存档.生命)}/${计算最大生命()}`;
        this.信息栏.getChildByName("攻击").getComponent(Label).string = `攻击  ${计算最大攻击()}`;
        this.信息栏.getChildByName("防御").getComponent(Label).string = `防御  ${计算最大防御()}`;
        this.信息栏.getChildByName("距离").getComponent(Label).string = `离家  ${存档.距离}km`;
        this.信息栏.getChildByName("伤药").getComponent(Label).string = `伤药  ${存档.物品.伤药}`;
        this.信息栏.getChildByName("食物").getComponent(Label).string = `食物  ${存档.物品.果子}+${存档.物品.熟肉}`;

        this.状态栏.getChildByName("状态").getComponent(Label).string = this.计算状态文本();
        this.状态栏.getChildByName("进度").getComponent(Label).string = this.计算进度文本()

        this.按钮容器.getChildByName("商店").active = 存档.按钮.商店
        this.按钮容器.getChildByName("挑战").active = 存档.按钮.挑战
        this.按钮容器.getChildByName("睡觉").active = 存档.按钮.睡觉
        this.按钮容器.getChildByName("探索").active = 存档.按钮.探索
        this.按钮容器.getChildByName("前进").active = 存档.按钮.前进
        this.按钮容器.getChildByName("伙伴").active = 存档.按钮.伙伴
        this.按钮容器.getChildByName("制作").active = 存档.按钮.制作 || 存档.按钮.制造
        this.按钮容器.getChildByName("特性").active = 存档.按钮.特性
        this.按钮容器.getChildByName("进食").active = 存档.按钮.进食
        this.按钮容器.getChildByName("结局").active = 存档.按钮.结局
        this.按钮容器.getChildByName("睡觉").getChildByName("标签").getComponent(Label).string = 存档.剧情.住在桥洞 ? "桥  洞" : "睡  觉";
    }

    计算状态文本() {
        let 状态文本 = ""
        for (let 状态 in 存档.状态) {
            if (存档.状态[状态]) {
                状态文本 += `【${状态}】 `
            }
        }
        return 状态文本
    }

    计算进度文本() {
        let 位置 = ""
        if (获取地区名称() === "省城") {
            位置 = 存档.当前地点 ? `「${存档.当前地点}」` : "";
            if (存档.当前地点 == "山洞") {
                位置 = `「山洞${存档.其他.山洞进度}米」`
            }
        }

        位置 += `已停留${存档.停留天数[获取地区名称()] || 0}天`
        return 位置
    }

}