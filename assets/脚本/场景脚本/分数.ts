import { _decorator, Button, Component, director, Node, tween } from "cc";
import { 删除存档, 存档 } from "../管理器/存档管理器";
import { 创建动画文字, 播放文本, 淡入 } from "../方法函数/动画效果";
import { 设置 } from "../管理器/设置管理器";
import { 获取并完成成就, 获取已完成成就详情 } from "../默认内容/成就表";
const { ccclass, property } = _decorator;

@ccclass('分数')
export class 分数 extends Component {
	@property(Node) 标签: Node = null
	@property(Node) 文本容器: Node = null
	@property(Node) 输入框: Node = null
	@property(Node) 选项容器: Node = null
	加载中 = false

	start() {
		播放文本(this.标签, '')
		this.文本容器.removeAllChildren()
		this.输入框.active = false
		this.选项容器.active = false

		// 自动计算所有剧情为true的值
		let 剧情得分 = 0
		for (const key in 存档.剧情) {
			if (存档.剧情[key] === true) {
				剧情得分++
			}
		}
		let 得分 = 剧情得分 + 存档.物品.好人卡 + 存档.物品.眼泪 + (存档.伙伴.碧瑶分成 - 5) - Math.floor(存档.罪恶 * 0.1);

		// 获取已完成的成就
		const 已完成成就列表 = 获取并完成成就();
		const 已完成成就详情 = 获取已完成成就详情();

		const texts = [
			`你的评分为：${得分}（与你在游戏中的选择有关！占总分约40%）。这部分是考察你游戏的策略性和你的性格（游戏性格，不必较真）`,
			`成就结算：共完成 ${已完成成就列表.length} 项成就`,
		]

		// 添加已完成的成就名称
		if (已完成成就列表.length > 0) {
			const 成就文本 = 已完成成就详情.map(成就 => `「${成就.名称}」`).join('、');
			texts.push(`已完成成就：${成就文本}`);
		} else {
			texts.push('本次游戏没有完成任何成就，再接再厉！');
		}

		this.选项容器.getChildByName('选择按钮2').on(Button.EventType.CLICK, () => {
			删除存档(存档.存档名称)
			director.loadScene('首页')
		}, this)

		const 序列 = tween(this.node).delay(1)
		for (let 索引 = 0; 索引 < texts.length; 索引++) {
			序列.call(() => 创建动画文字(this.文本容器, texts[索引], 索引)).delay(2.2 / 设置.播放速度);
		}
		序列.call(() => 淡入(this.输入框)).delay(1);
		序列.call(() => 淡入(this.选项容器)).delay(1);
		序列.start();
	}
}