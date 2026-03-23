import { _decorator, Button, Component, director, EditBox, Node, tween } from "cc";
import { 删除存档, 存档 } from "../管理器/存档管理器";
import { 计算最大攻击, 计算最大生命, 计算最大防御 } from "../方法函数/属性计算";
import { 创建动画文字, 播放文本, 淡入 } from "../方法函数/动画效果";
import { 设置 } from "../管理器/设置管理器";
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

		let 剧情得分 =
			Number(存档.剧情.打扫老爷爷房间) * 300 +
			Number(存档.剧情.堂主捐钱) * 200 +
			Number(存档.剧情.帮助胖女人) * 200 +
			Number(存档.剧情.再次帮助胖女人) * 300 +
			Number(存档.剧情.归还礼物) * 200 +
			Number(存档.剧情.帮助小兰) * 200 +
			Number(存档.剧情.住在桥洞) * 200 +
			Number(存档.剧情.借钱给中年大叔) * 100 +
			Number(存档.剧情.面试交钱) * 50 +
			Number(存档.剧情.愿意回家) * 50 +
			Number(存档.剧情.地质队吃饭) * 50 +
			(存档.伙伴.碧瑶分成 - 5) * 150 +
			Math.floor(存档.伙伴.晓月好感 / 5) +
			Math.floor(存档.伙伴.碧瑶好感 * 1.2) -
			存档.罪恶 * 20;
		if (剧情得分 < 0) {
			剧情得分 = 0
		}

		let 战斗得分 = 计算最大攻击() / 3 + (计算最大防御()) * 2 + 计算最大生命() / 20
		战斗得分 = Math.floor(战斗得分)

		let 资历得分 = 存档.健康 * 5 +
			存档.声望 * 2 +
			存档.阅历 * 2 +
			存档.面经 * 2
		资历得分 = Math.floor(资历得分)

		const 总得分 = 剧情得分 + 战斗得分 + 资历得分
		const texts = [
			`剧情评分为：${剧情得分}（与你在游戏中的选择有关！占总分约40%）。这部分是考察你游戏的策略性和你的性格（游戏性格，不必较真）`,
			`战斗得分为：${战斗得分}（攻防血属性越高分数越高！占总分约60%）`,
			`资历得分为：${资历得分}（和游戏中物品和其他属性有关！占总分约10%）`,
			`总得分为：${总得分}`,
		]

		this.选项容器.getChildByName('选择按钮1').on(Button.EventType.CLICK, () => {
			if (存档.套餐名称 === '测试模式') {
				播放文本(this.标签, '测试模式不可上传分数。')
				return
			}
			const name = this.输入框.getComponent(EditBox).string
			if (!name.trim()) {
				播放文本(this.标签, '请留下你的名字')
				return
			}
			if (name.length >= 10) {
				播放文本(this.标签, '你的名字太长了！')
				return
			}
			if (this.加载中) {
				播放文本(this.标签, '请等待上传。。。')
				return
			}
			const mode = 存档.套餐名称

			this.提交分数(name, mode, 总得分)
		}, this)

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

	private 提交分数(玩家名称, 游戏模式, 分数) {
	}
}