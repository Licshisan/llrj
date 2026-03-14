import { 剧情上下文 } from "../场景脚本/剧情";
import { 深克隆 } from "../方法函数/公共函数";
import { 剧情定义类型, 默认剧情表 } from "../默认内容/剧情表";
import { 获取地区名称 } from "./地区";

export interface 剧情项目类型 {
	名称: string;
	文本: string[];
	条件?: boolean;
	选项一?: string;
	选项二?: string;
	结果一?: (上下文: 剧情上下文) => void;
	结果二?: (上下文: 剧情上下文) => void;
}

function ensureFunction(value: any): (上下文: 剧情上下文) => void {
	if (typeof value === 'string') {
		return ({ 结束剧情 }) => 结束剧情(value);
	}
	return typeof value === 'function' ? value : ({ 结束剧情 }) => 结束剧情();
}
export function 获取剧情(剧情名称?: string): 剧情项目类型 {
	let 剧情: 剧情定义类型

	if (!剧情名称) {
		剧情 = 默认剧情表.find(item => {
			const 条件值 = typeof item?.条件 === 'function' ? item.条件() : item?.条件;
			if (item.地区) {
				return 获取地区名称() === item.地区 && 条件值
			} else {
				return 条件值
			}
		});
	} else {
		剧情 = 默认剧情表.find(item => item.名称 === 剧情名称);
	}

	if (!剧情) {
		return null;
	}

	const 文本 = typeof 剧情?.文本 === 'function' ? 剧情.文本() : 剧情?.文本;
	const 最终文本 = Array.isArray(文本) ? 文本 : [];

	const 条件 = typeof 剧情?.条件 === 'function' ? 剧情.条件() : 剧情?.条件;
	const 最终条件 = typeof 条件 === 'boolean' ? 条件 : undefined;

	return 深克隆({
		名称: 剧情.名称,
		文本: 最终文本,
		条件: 最终条件,
		选项一: typeof 剧情?.选项一 === 'function' ? 剧情.选项一() : 剧情?.选项一,
		选项二: typeof 剧情?.选项二 === 'function' ? 剧情.选项二() : 剧情?.选项二,
		结果一: ensureFunction(剧情?.结果一),
		结果二: ensureFunction(剧情?.结果二),
	});
}