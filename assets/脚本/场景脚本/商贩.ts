import { _decorator, Component, Label, Node, Button, director, Prefab, instantiate } from "cc";
import { 存档, 保存存档 } from "../管理器/存档管理器";
import { 播放文本 } from "../方法函数/动画效果";
const { ccclass, property } = _decorator;

export type 商贩项目类型 = {
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

		if (globalThis.商贩名称 === '商贩') {
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
				播放文本(this.标签, "看看有什么你需要的")
				选项按钮.setParent(this.按钮容器);
			})
		} else if (globalThis.商贩名称 === '黑市') {
			黑市列表.forEach((黑市项目) => {
				const 名称 = typeof 黑市项目.名称 === 'function' ? 黑市项目.名称(this) : 黑市项目.名称;

				const 选项按钮 = instantiate(this.选择按钮预制体);
				选项按钮.getChildByName('标签').getComponent(Label).string = 名称;
				选项按钮.on(Button.EventType.CLICK, () => {
					const text = 黑市项目.购买(this);
					播放文本(this.标签, text);
					const newName = typeof 黑市项目.名称 === 'function' ? 黑市项目.名称(this) : 黑市项目.名称;
					选项按钮.getChildByName('标签').getComponent(Label).string = newName;
					this.更新();
					保存存档();
				}, this);
				选项按钮.setParent(this.按钮容器);
			})
		}
		this.返回按钮.on(Button.EventType.CLICK, () => director.loadScene("主页"), this);
	}

	重置() {
		this.sellOut = false

		const list: [string, number, number][] = [
			["放大镜", 1, 50],
			["熟肉", 3, 12],
			["晓月手链", 1, 50],
			["幸运石", 1, 50],
			["啤酒", 1, 30],
			["伤药", 4, 12],
			["滑稽裤", 1, 60],
		];
		const index = Math.floor(Math.random() * list.length);
		// const index = Math.floor((存档.天数 || 0)) % list.length;
		const item = list[index];
		const discount = Math.random();

		this.itemName = item[0];
		this.itemNum = item[1];
		this.itemPrice = Math.floor(item[2] * Math.max(0.6, Math.min(1.3, discount)));
	}

	更新() {
		if(globalThis.商贩名称 === '商贩'){
			this.属性一.getComponent(Label).string = ""
		} else{
			this.属性一.getComponent(Label).string = `白色粉末：${存档.物品.白色粉末}`
		}
		this.属性二.getComponent(Label).string = `金钱：${(存档.金钱 / 10).toFixed(1)}元`;
	}
}

const 商贩列表: 商贩项目类型[] = [
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

const 黑市列表: 商贩项目类型[] = [
	{
		名称: "白色粉末换1元",
		购买: (self) => {
			if (存档.物品.白色粉末 < 1) {
				return "白色粉末不足！";
			}
			存档.物品.白色粉末 -= 1;
			存档.金钱 += 10;
			return "获得10元！";
		}
	},
	{
		名称: "《少妇白洁》（需4白色粉末）",
		购买: (self) => {
			if (存档.其他.少妇白洁) {
				return "你已拥有此书！";
			}
			if (存档.物品.白色粉末 < 4) {
				return "白色粉末不足！";
			}
			存档.物品.白色粉末 -= 4;
			存档.其他.少妇白洁 = 1;
			return "获得《少妇白洁》！请到看书界面使用。";
		}
	},
	{
		名称: "《搬砖，从入门到放弃》（需6元）",
		购买: (self) => {
			if (存档.其他.搬砖从入门到放弃) {
				return "你已拥有此书！";
			}
			if (存档.金钱 < 60) {
				return "金钱不足！";
			}
			存档.金钱 -= 60;
			存档.其他.搬砖从入门到放弃 = 1;
			return "获得《搬砖，从入门到放弃》！请到看书界面使用。";
		}
	},

	{
		名称: "《中国居民膳食指南1997版》（需6元）",
		购买: (self) => {
			if (存档.其他.中国居民膳食指南1997版) {
				return "你已拥有此书！";
			}
			if (存档.金钱 < 60) {
				return "金钱不足！";
			}
			存档.金钱 -= 60;
			存档.其他.中国居民膳食指南1997版 = 1;
			return "获得《中国居民膳食指南1997版》！请到看书界面使用。";
		}
	},
	{
		名称: (self) => `枪（需${存档.物品.枪 * 10 + 10}个白色粉末）`,
		购买: (self) => {
			const need = 存档.物品.枪 * 10 + 10;
			if (存档.物品.白色粉末 < need) {
				return "白色粉末不足！";
			}
			存档.物品.白色粉末 -= need;
			存档.物品.枪 = (存档.物品.枪 || 0) + 1;
			self.按钮容器.getChildByName("选择按钮5").getChildByName("标签").getComponent(Label).string = `枪（需${存档.物品.枪 * 10 + 10}个白色粉末）`;
			return "获得「枪」！";
		}
	},
	{
		名称: "购买子弹（0.5元/个）",
		购买: (self) => {
			if (存档.金钱 < 5) {
				return "钱不够！";
			}
			存档.金钱 -= 5;
			存档.物品.子弹 = (存档.物品.子弹 || 0) + 1;
			return "获得「子弹」*1";
		}
	},
	{
		名称: (self) => `出售所有漂亮石头（每个1毛，已有${存档.物品.漂亮石头}个）`,
		购买: (self) => {
			const count = 存档.物品.漂亮石头;
			if (count <= 0) {
				return "你身上没有漂亮石头~";
			}
			const money = count;
			存档.金钱 += money;
			存档.物品.漂亮石头 = 0;
			self.按钮容器.getChildByName("选择按钮7").getChildByName("标签").getComponent(Label).string = `出售所有漂亮石头（每个1毛，已有${存档.物品.漂亮石头}个）`;
			return `${count}个漂亮石头出售成功，获得${(count / 10).toFixed(1)}元！`;
		}
	}
]

const 回收站项目: 商贩项目类型[] = [
	{
		名称: () => `出售易拉罐（每个1.2毛，已拥有${存档.物品.易拉罐 || 0}）`,
		购买: () => {
			if (!存档.物品.易拉罐 || 存档.物品.易拉罐 <= 0) {
				return `你没有易拉罐可以卖！`;
			}
			const 数量 = 存档.物品.易拉罐;
			存档.金钱 += 数量;
			存档.物品.易拉罐 = 0;
			return `出售【易拉罐】*${数量}，获得${(数量/10).toFixed(1)}元`;
		},
	},
	{
		名称: () => `出售蚊子（每个2.2毛，已拥有${存档.物品.易拉罐 || 0}）`,
		购买: () => {
			if (存档.金钱 < 2) {
				return `钱不够，至少需要1毛2！`;
			}
		},
	},
];