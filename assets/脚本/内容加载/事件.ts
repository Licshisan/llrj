import { _decorator } from 'cc';
import { 默认事件表 } from "../默认内容/事件表";
import { 事件上下文 } from '../场景脚本/事件';
import { 深克隆 } from '../方法函数/公共函数';

export interface 事件项目类型 {
	名称: string,
	文本: string[]
	选项一: string,
	选项二?: string,
	结果一: ((上下文: 事件上下文) => void),
	结果二?: ((上下文: 事件上下文) => void),
}

function ensureFunction(value: any): (上下文: 事件上下文) => string | void {
	if (typeof value === 'string') {
		return ({ 结束事件 }) => 结束事件(value);
	}
	return typeof value === 'function' ? value : () => { };
}

export function 获取事件(事件名: string): 事件项目类型 {
	const 事件 = 默认事件表.find((事件) => 事件名 == 事件.名称)
	if (!事件) {
		return
	}
	return 深克隆({
		名称: 事件名,
		文本: typeof 事件.文本 === 'function' ? 事件.文本() : 事件.文本,
		选项一: typeof 事件.选项一 === 'function' ? 事件.选项一() : 事件.选项一,
		结果一: ensureFunction(事件.结果一),
		选项二: typeof 事件.选项二 === 'function' ? 事件.选项二() : 事件.选项二,
		结果二: ensureFunction(事件.结果二)
	})
}