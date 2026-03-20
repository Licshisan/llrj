import { 概率类型, 深克隆 } from "../方法函数/公共函数";
import { 默认敌人表 } from "../默认内容/敌人表";
import { 战斗上下文 } from "../场景脚本/战斗"

export interface 敌人项目类型 {
	名称: string,
	显示名称: string,
	等级: number,
	生命: number,
	攻击: number,
	防御: number,
	最大生命: number,
	逃跑: number,
	压制: number,
	增加声望: number,
	增加属性: number,
	损失健康: number,
	出场语: string,
	掉落物: 概率类型[],
	攻击前: (上下文: 战斗上下文) => string | void,
	攻击时: (上下文: 战斗上下文) => string | void,
	攻击后: (上下文: 战斗上下文) => string | void,
	胜利效果: (上下文: 战斗上下文) => string | void,
	失败效果: (上下文: 战斗上下文) => string | void,
	其他: number
}

function ensureFunction(value: any): (上下文: 战斗上下文) => string | void {
	if (typeof value === 'string') {
		return () => value;
	}
	return typeof value === 'function' ? value : () => { };
}

export function 获取敌人(名称: string): 敌人项目类型 {
	const 敌人 = 默认敌人表.find((敌人) => 敌人.名称 === 名称);

	if (!敌人) {
		return
	}

	const 显示名称 = typeof 敌人.显示名称 === 'function' ? 敌人.显示名称() : 敌人.显示名称 || 敌人.名称;
	const 等级 = typeof 敌人.等级 === 'function' ? 敌人.等级() : 敌人.等级 || 1;
	const 生命 = typeof 敌人.生命 === 'function' ? 敌人.生命() : 敌人.生命 || 10;
	const 攻击 = typeof 敌人.攻击 === 'function' ? 敌人.攻击() : 敌人.攻击 || 0;
	const 防御 = typeof 敌人.防御 === 'function' ? 敌人.防御() : 敌人.防御 || 0;
	const 最大生命 = typeof 敌人.最大生命 === 'function' ? 敌人.最大生命() : 敌人.最大生命 || 生命;
	const 逃跑 = typeof 敌人.逃跑 === 'function' ? 敌人.逃跑() : 敌人.逃跑 || 0;
	const 压制 = typeof 敌人.压制 === 'function' ? 敌人.压制() : 敌人.压制 || 0;
	const 增加声望 = typeof 敌人.增加声望 === 'function' ? 敌人.增加声望() : 敌人.增加声望 || 0;
	const 增加属性 = typeof 敌人.增加属性 === 'function' ? 敌人.增加属性() : 敌人.增加属性 || 1;
	const 损失健康 = typeof 敌人.损失健康 === 'function' ? 敌人.损失健康() : 敌人.损失健康 || 0;
	const 出场语 = typeof 敌人.出场语 === 'function' ? 敌人.出场语() : 敌人.出场语 || "遭到怪物袭击！";
	const 掉落物 = Array.isArray(敌人.掉落物) ? 敌人.掉落物 : [];

	const 攻击前 = ensureFunction(敌人.攻击前);
	const 攻击时 = ensureFunction(敌人.攻击时);
	const 攻击后 = ensureFunction(敌人.攻击后);
	const 被攻击前 = ensureFunction(敌人.被攻击前);
	const 被攻击时 = ensureFunction(敌人.被攻击时);
	const 被攻击后 = ensureFunction(敌人.被攻击后);
	const 胜利效果 = ensureFunction(敌人.胜利效果);
	const 失败效果 = ensureFunction(敌人.失败效果);
	const 特殊 = typeof 敌人.特殊 === 'function' ? 敌人.特殊() : 敌人.特殊 || false;

	return 深克隆({
		名称,
		显示名称,
		等级,
		生命,
		攻击,
		防御,
		最大生命,
		逃跑,
		压制,
		增加声望,
		增加属性,
		损失健康,
		出场语,
		掉落物,
		攻击前,
		攻击时,
		攻击后,
		被攻击前,
		被攻击时,
		被攻击后,
		特殊,
		胜利效果,
		失败效果,
		技能点数: 0
	});
}