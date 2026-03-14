import { _decorator, Component, Node, director, tween, Button } from "cc";
import { 设置 } from "../管理器/设置管理器";
import { 创建动画文字, 淡入 } from "../方法函数/动画效果";
import { 天赋项目类型, 获取天赋表 } from "../内容加载/天赋";
import { 保存存档, 存档 } from "../管理器/存档管理器";
import { 执行钩子 } from "../管理器/钩子管理器";
const { ccclass, property } = _decorator;

@ccclass("开场")
export class 开场 extends Component {
	@property(Node)
	文本容器: Node = null;
	@property(Node)
	返回按钮: Node = null;

	开场文本: string[] = ["昨天，", "和父亲大吵一架后，", "我双手空空的逃了出来。", "我决定离开这个家，", "再也不回去了..."]

	start() {
		this.激活天赋()

		this.返回按钮.active = false
		this.返回按钮.on(Button.EventType.CLICK, () => director.loadScene("主页"), this);
		const sequence = tween(this.node).delay(0.5);
		for (let i = 0; i < this.开场文本.length; i++) {
			sequence.call(() => 创建动画文字(this.文本容器, this.开场文本[i], i)).delay(1.5 / 设置.播放速度);
		}
		// sequence.call(() => 淡出(this.文本容器)).delay(2.5 / 设置.播放速度);
		sequence.call(() => 淡入(this.返回按钮)).delay(3);
		// sequence.call(() => director.loadScene("主页"));
		sequence.start();
	}

	激活天赋() {
		const 天赋列表 = 获取天赋表()

		const 正面天赋列表 = 天赋列表.filter(天赋 => !天赋.负面);
		const 负面天赋列表 = 天赋列表.filter(天赋 => 天赋.负面);

		const 随机抽取 = (列表: 天赋项目类型[], 抽取数量: number): 天赋项目类型[] => {
			const 打乱后的列表 = [...列表].sort(() => Math.random() - 0.5);
			return 打乱后的列表.slice(0, 抽取数量);
		};

		const [正面天赋1, 正面天赋2] = 随机抽取(正面天赋列表, 2);
		const [负面天赋1] = 随机抽取(负面天赋列表, 1);

		存档.天赋[正面天赋1?.名称] = true
		执行钩子("激活天赋", [正面天赋1?.名称])

		存档.天赋[正面天赋2?.名称] = true
		执行钩子("激活天赋", [正面天赋2?.名称])

		存档.天赋[负面天赋1?.名称] = true
		执行钩子("激活天赋", [负面天赋1?.名称])

		this.开场文本.push(`【天赋系统激活成功...】`)
		this.开场文本.push(`你天生拥有天赋「${正面天赋1.名称}」\n效果：${正面天赋1?.说明}`)
		this.开场文本.push(`你同时拥有天赋「${正面天赋2.名称}」\n效果：${正面天赋2?.说明}`)
		this.开场文本.push(`你得到负面天赋「${负面天赋1.名称}」\n效果：${负面天赋1.说明}`)
		保存存档()
	}
}
