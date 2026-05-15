import { _decorator, Component, Node, Prefab, instantiate, Label, Button, director } from "cc";
import { 播放文本 } from "../方法函数/动画效果";
import * as 存档管理器 from '../管理器/存档管理器'
import { 格式化日期字符串 } from "../方法函数/公共函数";
const { ccclass, property } = _decorator;

@ccclass("存档")
export class 存档 extends Component {
    @property(Node) 标签: Node = null;
    @property(Node) 存档容器: Node = null;
    @property(Prefab) 存档项目预制件: Prefab = null;
    @property(Prefab) 选择按钮预制件: Prefab = null;
    @property(Node) 返回按钮: Node = null;

    start() {
        播放文本(this.标签, "选择你要继续的存档...");
        this.加载存档()
        this.返回按钮.on(Button.EventType.CLICK, () => director.loadScene("首页"), this);
    }

    加载存档() {
        this.存档容器.removeAllChildren();
        const 存档名称列表 = 存档管理器.获取存档列表()

        存档名称列表.forEach((存档) => {
            const 存档项目节点 = instantiate(this.存档项目预制件);
            存档项目节点.setParent(this.存档容器);

            存档项目节点.getChildByName("选择按钮").getChildByName("标签").getComponent(Label).string = `${this.计算地区名称(存档)}.${存档.天数}天 【${存档.套餐名称}】 ${存档.距离}km`;
            存档项目节点.getChildByName("标签").getComponent(Label).string = `创建时间：${格式化日期字符串(存档.创建时间)}`;
            存档项目节点.getChildByName("按钮容器").getChildByName("黑色按钮1").getChildByName("标签").getComponent(Label).string = "删  除";
            存档项目节点.getChildByName("按钮容器").getChildByName("黑色按钮2").getChildByName("标签").getComponent(Label).string = "进  入";

            存档项目节点.getChildByName("按钮容器").getChildByName("黑色按钮1").on(Button.EventType.CLICK, () => this.点击删除(存档.存档名称), this);
            存档项目节点.getChildByName("按钮容器").getChildByName("黑色按钮2").on(Button.EventType.CLICK, () => this.点击进入(存档.存档名称), this);
        })

        if (存档名称列表.length < 4) {
            const 选项按钮 = instantiate(this.选择按钮预制件);
            选项按钮.setParent(this.存档容器);
            选项按钮.getChildByName("标签").getComponent(Label).string = "创建新存档";
            选项按钮.on(Button.EventType.CLICK, () => director.loadScene("套餐"), this);
        }
    }

    点击删除(名称: string) {
        globalThis.确认参数 = {
            文本: "你确定要删除这个世界吗？这个存档将会永久消失！（真的很久！）",
            按钮: {
                "确认删除": () => {
                    存档管理器.删除存档(名称)
                    director.loadScene("存档")
                },
                "返回": () => director.loadScene("存档")
            }
        };
        director.loadScene("确认");
    }

    点击进入(名称: string) {
        存档管理器.加载存档(名称)
        director.loadScene("主页");
    }

    计算地区名称(存档) {
        let 地区 = "荒野"
        if(存档.距离 == 100){
            地区 = "县城"
        } else if(存档.距离 > 100 && 存档.距离 < 300){
            地区 = "山脉"
        } else if(存档.距离 == 300){
            地区 = "省城"
        }
        return 地区;
    }
}
