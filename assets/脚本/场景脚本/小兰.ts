import { _decorator, Component, Node, Button, director, Label } from 'cc';
import { 保存存档, 存档 } from '../管理器/存档管理器';
import { 播放文本 } from '../方法函数/动画效果';
import { 计算聊天消耗精力 } from '../方法函数/属性计算';
const { ccclass, property } = _decorator;

@ccclass('小兰')
export class 小兰 extends Component {
	@property(Node)
	标签: Node = null
	@property(Node)
	属性: Node = null
	@property(Node)
	选择容器: Node = null
	@property(Node)
	切换1: Node = null
	@property(Node)
	切换2: Node = null
	start() {
		this.更新()
		播放文本(this.标签, '')

		this.选择容器.getChildByName('选择按钮1').on(Button.EventType.CLICK, this.talk, this)
		this.选择容器.getChildByName('选择按钮2').on(Button.EventType.CLICK, this.send, this)
		this.选择容器.getChildByName('选择按钮3').on(Button.EventType.CLICK, this.action, this)
		this.选择容器.getChildByName('选择按钮4').on(Button.EventType.CLICK, () => director.loadScene('主页'), this)

		this.切换1.active = 存档.伙伴.晓月关系
		this.切换1.on(Button.EventType.CLICK, () => director.loadScene('伙伴'))

		this.切换2.active = 存档.伙伴.碧瑶关系
		this.切换2.on(Button.EventType.CLICK, () => director.loadScene('伙伴特性'))
	}

	更新() {
		this.属性.getComponent(Label).string = `小兰好感：${存档.伙伴.小兰好感}`
	}

	talk() {
		const 聊天消耗精力 = 计算聊天消耗精力()
		if (存档.精力 < 聊天消耗精力) {
			播放文本(this.标签, "精力不足！")
			return
		}
		存档.精力 -= 聊天消耗精力;

		const 小兰聊天内容 = [
			"这么晚来找我...不怕被人看见？",
			"我最近学会按摩了，要不要试试？",
			"你身上好凉...靠过来暖和一点...",
			"隔壁总是半夜有奇怪的声音...你听到没？",
			"这件衣服好像有点小...你觉得呢？",
			"一个人住有时候挺害怕的...",
			"你最好别和我走得太近，被那个人看到会连累你的...",
			"你知道哪里能办假身份证吗？我原来的被扣下了...",
			"等这一切都结束了，我想回学校读书，虽然可能有点晚了...",
			"那个护身符你带着吗？虽然不值钱，但是开过光的...",
			"你说要是去南方工厂打工，会不会比在这里强？",
			"我妹今年该高考了，不知道她复习得怎么样...家里也没个电话。",
			"我攒了点钱，想租个正经房子，你有听说哪里便宜吗？",
			"你打算去城中村化妆品店做销售，就是钱给的很少..."
		]

		const 随机索引 = Math.floor(Math.random() * 小兰聊天内容.length);
		播放文本(this.标签, 小兰聊天内容[随机索引])
		存档.伙伴.小兰好感 += 1;
		this.更新()
		保存存档()

	}

	send() {
		if (存档.物品.漂亮石头 > 0) {
			存档.物品.漂亮石头 -= 1;
			存档.伙伴.小兰好感 += 3;
			this.更新();
			播放文本(this.标签, "漂亮石头-1，小兰好感+3")
			保存存档()
		} else {
			播放文本(this.标签, "没有漂亮石头了")
		}
	}

	action() {
		const 特性1 = `【协助】战斗时恢复${存档.伙伴.小兰好感 * 5}点生命（自动解锁，回复量和好感度有关）`
		const 特性2 = `【崇拜】前进探索时，增加${存档.伙伴.小兰好感 * 2}点（${存档.伙伴.小兰好感}/99好感度解锁）`
		const 特性3 = `【熟络】小兰一同出行，探索时获得一次额外收获。（${存档.伙伴.小兰好感}/200好感度解锁）`
		const 特性总文案 = `${特性1}\n${特性2}\n${特性3}`;
		播放文本(this.标签, 特性总文案)
	}
}

