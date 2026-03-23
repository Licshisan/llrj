import { _decorator, Component, Node, director, tween, Button, Color } from "cc";
import { 设置 } from "../管理器/设置管理器";
import { 创建动画文字, 淡入, 淡出 } from "../方法函数/动画效果";
import { 保存存档, 存档 } from "../管理器/存档管理器";
import { 执行钩子 } from "../管理器/钩子管理器";
import { 天赋项目类型, 默认天赋表 } from "../默认内容/天赋表";
const { ccclass, property } = _decorator;

@ccclass("开场")
export class 开场 extends Component {
	@property(Node) 文本容器: Node = null;
	@property(Node) 继续按钮: Node = null;
	@property(Node) 刷新按钮: Node = null;
	开场文本: string[] = ["昨天，", "和父亲大吵一架后，", "我双手空空的逃了出来。", "我决定离开这个家，", "再也不回去了..."]
	
	当前天赋: string[] = []
	start() {
		const 序列 = tween(this.node).delay(0.5);
		for (let i = 0; i < this.开场文本.length; i++) {
			序列.call(() => 创建动画文字(this.文本容器, this.开场文本[i], i)).delay(1.5 / 设置.播放速度);
		}
		序列.call(() =>淡出(this.文本容器)).delay(2.5 / 设置.播放速度);
		序列.call(() =>this.点击刷新()).delay(2.5 / 设置.播放速度);
		序列.start();

		this.继续按钮.active = false
		this.刷新按钮.active = false
		this.继续按钮.on(Button.EventType.CLICK, () => director.loadScene("主页"), this);
		this.刷新按钮.on(Button.EventType.CLICK, () => this.点击刷新(), this);
	}

	点击刷新() {
		this.继续按钮.active = false
		this.刷新按钮.active = false
		const 特质数量 = 1
		const 正面天赋数量 = 2
		const 负面天赋数量 = 1
		this.当前天赋 = []
		const 特质天赋 = 默认天赋表.filter(天赋 => 天赋.类型 === '特质');
		const 正面天赋 = 默认天赋表.filter(天赋 => 天赋.类型 === '正面');
		const 负面天赋 = 默认天赋表.filter(天赋 => 天赋.类型 === '负面');

		const 随机抽取 = (列表: 天赋项目类型[], 抽取数量: number): 天赋项目类型[] => {
			const 打乱后的列表 = [...列表].sort(() => Math.random() - 0.5);
			return 打乱后的列表.slice(0, 抽取数量);
		};
		const [特质天赋1] = 随机抽取(特质天赋, 特质数量);
		const [正面天赋1, 正面天赋2] = 随机抽取(正面天赋, 正面天赋数量);
		const [负面天赋1] = 随机抽取(负面天赋, 负面天赋数量);
		this.当前天赋.push(特质天赋1?.名称 || "")
		this.当前天赋.push(正面天赋1?.名称 || "")
		this.当前天赋.push(正面天赋2?.名称 || "")
		this.当前天赋.push(负面天赋1?.名称 || "")


		const 天赋文本 = [
		 `你天生拥有特质「${特质天赋1?.名称 || ""}」\n效果：${特质天赋1?.说明 || ""}`, 
		 `你同时拥有天赋「${正面天赋1?.名称 || ""}」\n效果：${正面天赋1?.说明 || ""}`, 
		 `你同时拥有天赋「${正面天赋2?.名称 || ""}」\n效果：${正面天赋2?.说明 || ""}`, 
		 `你得到负面天赋「${负面天赋1?.名称 || ""}」\n效果：${负面天赋1?.说明 || ""}`
		]
		const 文本颜色 = [
			new Color(特质天赋1?.颜色 || "#000000"),
			new Color(正面天赋1?.颜色 || "#000000"),
			new Color(正面天赋2?.颜色 || "#000000"),
			new Color(负面天赋1?.颜色 || "#000000"),
		]

		const 序列 = tween(this.node).delay(0.5);
		for (let i = 0; i < 天赋文本.length; i++) {
			序列.call(() => 创建动画文字(this.文本容器, 天赋文本[i], i, 文本颜色[i])).delay(1.5 / 设置.播放速度);
		}
		序列.call(() => 淡出(this.文本容器)).delay(2.5 / 设置.播放速度);
		序列.call(() =>{
			淡入(this.继续按钮)
			淡入(this.刷新按钮)
		}).delay(2.5 / 设置.播放速度);
		序列.start();
	}

	点击确定() {
		this.当前天赋.forEach(天赋 => {
			执行钩子(天赋)
			存档.天赋[天赋] = true
		})
		保存存档()
		director.loadScene("主页")
	}
}
