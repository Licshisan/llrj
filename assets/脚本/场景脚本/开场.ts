import { _decorator, Component, Node, director, tween, Button, Color, log, UIOpacity } from "cc";
import { 设置 } from "../管理器/设置管理器";
import { 创建动画文字, 淡入, 淡出 } from "../方法函数/动画效果";
import { 保存存档, 存档 } from "../管理器/存档管理器";
import { 执行钩子 } from "../管理器/钩子管理器";
import { 默认天赋表 } from "../默认内容/天赋表";
import { 默认特质表 } from "../默认内容/特质表";
import { 计算最大生命, 计算最大精力, 计算最大饥饿 } from "../方法函数/属性计算";
const { ccclass, property } = _decorator;

@ccclass("开场")
export class 开场 extends Component {
	@property(Node) 文本容器: Node = null;
	@property(Node) 继续按钮: Node = null;
	@property(Node) 刷新按钮: Node = null;
	开场文本: string[] = ["昨天，", "和父亲大吵一架后，", "我双手空空的逃了出来。", "我决定离开这个家，", "再也不回去了..."];
	
	当前特质: string[] = []
	当前天赋: string[] = []
	start() {
		const 序列 = tween(this.node).delay(0.5);
		for (let i = 0; i < this.开场文本.length; i++) {
			序列.call(() => 创建动画文字(this.文本容器, this.开场文本[i], i)).delay(1.5 / 设置.播放速度);
		}
		序列.delay(2.5 / 设置.播放速度);
		序列.call(() => this.点击刷新()).delay(2.5 / 设置.播放速度);
		序列.start();

		this.继续按钮.active = false;
		this.刷新按钮.active = false;
		this.继续按钮.on(Button.EventType.CLICK, () => this.点击确定(), this);
		this.刷新按钮.on(Button.EventType.CLICK, () => this.点击刷新(), this);
	}

	点击刷新() {
		this.继续按钮.active = false;
		this.刷新按钮.active = false;
		let 天赋数量 = Number(设置.成就["小试牛刀"]) + Number(设置.成就["初试锋芒"]) + Number(设置.成就["一鸣惊人"])
		let 特质数量 = Number(设置.成就["初出茅庐"]) + Number(设置.成就["声名鹊起"]) + Number(设置.成就["所向披靡"])

		if(Math.random() * 100 < 30){
			天赋数量 += 1
		}


		this.当前特质 = []
		this.当前天赋 = []

		const 随机抽取 = <T>(列表: T[], 抽取数量: number): T[] => {
			const 打乱后的列表 = [...列表].sort(() => Math.random() - 0.5);
			return 打乱后的列表.slice(0, 抽取数量);
		};

		const 抽取特质表 = 默认特质表.filter(i => i.条件)
		const 抽取的特质 = 随机抽取(抽取特质表, 特质数量)

		const 抽取的正面天赋 = 随机抽取(默认天赋表.filter(i => !i.负面 && i.条件), 天赋数量)
		const 抽取的负面天赋 = 随机抽取(默认天赋表.filter(i => i.负面 && i.条件), 天赋数量)

		this.当前特质.push(...抽取的特质.map(x => x.名称))
		this.当前天赋.push(...抽取的正面天赋.map(x => x.名称))
		this.当前天赋.push(...抽取的负面天赋.map(x => x.名称))
		const 显示文本 = []
		抽取的特质.forEach(特质 => {
			const 特质名称 = 特质.显示名称 || 特质.名称 || ""
			显示文本.push({
				文本: `你天生拥有特质「${特质名称}」\n效果：${特质?.说明 || ""}`,
				颜色: 特质.颜色
			})
		})
		抽取的正面天赋.forEach(天赋 => {
			显示文本.push({
				文本: `你同时拥有天赋「${天赋?.名称 || ""}」\n效果：${天赋?.说明 || ""}`,
				颜色: 天赋.颜色
			})
		})
		抽取的负面天赋.forEach(天赋 => {
			显示文本.push({
				文本: `你得到负面天赋「${天赋?.名称 || ""}」\n效果：${天赋?.说明 || ""}`,
				颜色: 天赋.颜色
			})
		})
		if(显示文本.length === 0) {
			显示文本.push({
				文本: `你平平无奇`,
				颜色: Color.WHITE
			})	
		}

		const 序列 = tween(this.node)
		.call(() => 淡出(this.文本容器))
		.delay(2.5 / 设置.播放速度)
		.call(() => {
			this.文本容器.removeAllChildren()
			this.文本容器.active = true
			this.文本容器.getComponent(UIOpacity).opacity = 255
		})
		for (let i = 0; i < 显示文本.length; i++) {
			序列.call(() => {
				创建动画文字(this.文本容器, 显示文本[i].文本, i, 显示文本[i].颜色)
			})
			.delay(1.5 / 设置.播放速度);
		}
		序列.delay(1.5 / 设置.播放速度);
		序列.call(() => {
			淡入(this.继续按钮)
			淡入(this.刷新按钮)
		})
		序列.start();
	}

	点击确定() {
		this.当前特质.forEach(特质 => {
			执行钩子("激活特质", [特质])
			存档.特质[特质] = 设置.特质[特质]
		})
		this.当前天赋.forEach(天赋 => {
			执行钩子("激活天赋", [天赋])
			存档.天赋[天赋] = true
		})

		存档.精力 = 计算最大精力()
		存档.饥饿 = 计算最大饥饿()
		存档.生命 = 计算最大生命()
		保存存档()
		log(this.当前天赋)
		director.loadScene("主页");
	}
}
