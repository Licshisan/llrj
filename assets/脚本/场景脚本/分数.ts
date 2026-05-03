import { _decorator, Button, Component, director, Node, tween, EditBox } from "cc";
import { 保存存档, 删除存档, 存档 } from "../管理器/存档管理器";
import { 创建动画文字, 播放文本, 淡入 } from "../方法函数/动画效果";
import { 设置 } from "../管理器/设置管理器";
import { 计算最大攻击, 计算最大生命, 计算最大防御 } from "../方法函数/属性计算";
import { 更新成就 } from "../默认内容/成就表";
import { 默认套餐表 } from "../默认内容/套餐表";
import { 上传存档 } from "../方法函数/公共函数";
import { 修改昵称请求 } from "../方法函数/网络请求";
const { ccclass, property } = _decorator;

@ccclass('分数')
export class 分数 extends Component {
	@property(Node) 标签: Node = null
	@property(Node) 文本容器: Node = null
	@property(Node) 选项容器: Node = null
	@property(Node) 输入框: Node = null

	start() {
		播放文本(this.标签, '')
		this.文本容器.removeAllChildren()
		this.选项容器.active = false

		if(存档.游戏难度 === '炼狱'){
			存档.游戏难度 = '地狱'
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

		let 属性得分 = Math.floor(21 - 6 * 计算最大生命() / 10000 - 6 * 计算最大攻击() / 2000 - 6 * 计算最大防御() / 1000);
		属性得分 = Math.min(Math.max(属性得分, 0), 18); // 18

		let 得分 = 剧情得分 + 属性得分;
		存档.其他.最终得分 = 得分;

		const texts = [`你的评分为：${得分}（剧情得分:${剧情得分}，属性得分:${属性得分}。满分约60分）`]
		
		const 套餐 = 默认套餐表.find(套餐 => 套餐.名称 === 存档.套餐名称)
		if(套餐 && 套餐.娱乐){
			texts.push(`娱乐套餐【${套餐.名称}】，无法完成成就`)
		}else{
			const 完成成就 = 更新成就()
			if(完成成就.length > 0){
				完成成就.forEach(成就 => {
					let 成就文本 = `新成就【${成就.名称}】：${成就.描述}`
					if(成就.奖励){
						成就文本 += `「奖励：${成就.奖励}」`
					}
					texts.push(成就文本)
				});
			} else{
				texts.push('你本次没有新完成的成就哦')
			}
		}
		texts.push('感谢你的游玩，我们下次再见~')

		const 序列 = tween(this.node).delay(1)
		for (let 索引 = 0; 索引 < texts.length; 索引++) {
			序列.call(() => 创建动画文字(this.文本容器, texts[索引], 索引)).delay(2.2 / 设置.播放速度);
		}
		序列.call(() => 淡入(this.选项容器)).delay(1);
		序列.start();
		淡入(this.输入框)
		this.选项容器.getChildByName('选择按钮2').on(Button.EventType.CLICK, async () => {
			const 新昵称 = this.输入框.getComponent(EditBox).string?.trim()?.substring(0, 50);
			if (新昵称) {
				try {
					await 修改昵称请求(设置.唯一标识, 新昵称);
					设置.账号.nickname = 新昵称;
				} catch (e) {}
			}
			删除存档(存档.存档名称)
			director.loadScene('首页')
		}, this)
	}
}
