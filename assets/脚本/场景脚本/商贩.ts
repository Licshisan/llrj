import { _decorator, Component, Label, Node, Button, director, Prefab, instantiate } from "cc";
import { 存档, 保存存档 } from "../管理器/存档管理器";
import { 播放文本 } from "../方法函数/动画效果";
const { ccclass, property } = _decorator;

type PeddlerListType = {
	名称: string | ((peddler: 商贩) => string);
	购买: (peddler: 商贩) => string;
};

@ccclass("商贩")
export class 商贩 extends Component {
	@property(Node) 标签: Node = null;
	@property(Node) 属性一: Node = null;
	@property(Node) 属性二: Node = null;

	@property(Node) 按钮容器: Node = null;
	@property(Node) 返回按钮: Node = null;
	@property(Prefab) 选择按钮预制体: Prefab = null;

	// 商贩相关属性
	sellOut: boolean = false;
	itemName: string = "";
	itemNum: number = 0;
	itemPrice: number = 0;

	onLoad() {
		this.更新();
		this.按钮容器.removeAllChildren()
		this.重置()


		商贩列表.forEach((商贩项目) => {
			const 名称 = typeof 商贩项目.名称 === 'function' ? 商贩项目.名称(this) : 商贩项目.名称;

			const 选项按钮 = instantiate(this.选择按钮预制体);
			选项按钮.getChildByName('标签').getComponent(Label).string = 名称;
			选项按钮.on(Button.EventType.CLICK, () => {
				const text = 商贩项目.购买(this);
				播放文本(this.标签, text);
				const newName = typeof 商贩项目.名称 === 'function' ? 商贩项目.名称(this) : 商贩项目.名称;
				选项按钮.getChildByName('标签').getComponent(Label).string = newName;
				this.更新();
				保存存档();
			}, this);
			选项按钮.setParent(this.按钮容器);
		})



		this.返回按钮.on(Button.EventType.CLICK, () => director.loadScene("主页"), this);
	}

	重置() {
		this.sellOut = false

		const list: [string, number, number][] = [
			["放大镜", 1, 50],
			["晓月手链", 1, 50],
			["幸运石", 1, 50],
			["伤药", 4, 12],
			["熟肉", 3, 12],
			["啤酒", 1, 30],
			["装避裤", 1, 80],
		];
		const index = Math.floor((存档.天数 || 0)) % list.length;
		const item = list[index];
		const discount = Math.random();

		this.itemName = item[0];
		this.itemNum = item[1];
		this.itemPrice = Math.floor(item[2] * Math.max(0.6, Math.min(1.3, discount)));
	}

	更新() {
		this.属性一.getComponent(Label).string = `金钱：${(存档.金钱 / 10).toFixed(1)}`;
		this.属性二.getComponent(Label).string = ``;
	}
}

const 商贩列表: PeddlerListType[] = [
	{
		名称: () => `出售伤药（每个1毛，已拥有${存档.物品.伤药 || 0}）`,
		购买: () => {
			if (!存档.物品.伤药 || 存档.物品.伤药 <= 0) {
				return `道具不足！`;
			}
			const e = Math.floor(Math.min(存档.物品.伤药, (存档.物品.伤药 * 0.5) + 1));
			存档.金钱 += e;
			存档.物品.伤药 -= e;
			return `出售【伤药】*${e}，获得${e}毛`;
		},
	},
	{
		名称: () => `出售烟（每个6毛，已拥有${存档.物品.香烟 || 0}）`,
		购买: () => {
			if (!存档.物品.香烟 || 存档.物品.香烟 <= 0) {
				return `道具不足！`;
			}
			存档.金钱 += 6;
			存档.物品.香烟 -= 1;
			return "出售【烟】*1，获得6毛";
		},
	},
	{
		名称: (peddler) => {
			if (peddler.sellOut) {
				return "已售罄";
			}
			return `${peddler.itemName}*${peddler.itemNum}（活动价${(peddler.itemPrice / 10).toFixed(1)}元，限购！！！）`;
		},
		购买: (peddler) => {
			if (peddler.sellOut) {
				return "本次活动每人只能购买一次哦，下次再来吧~";
			}
			if (存档.金钱 < peddler.itemPrice) {
				return `余额不足...`;
			}
			存档.金钱 -= peddler.itemPrice;
			if (!存档.物品[peddler.itemName]) {
				存档.物品[peddler.itemName] = 0;
			}
			存档.物品[peddler.itemName] += peddler.itemNum;
			peddler.sellOut = true;
			return `获得【${peddler.itemName}*${peddler.itemNum}】！`;
		},
	},
];

