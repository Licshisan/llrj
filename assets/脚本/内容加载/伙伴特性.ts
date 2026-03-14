import { 深克隆 } from "../方法函数/公共函数";
import { 默认伙伴特性表, 伙伴特性定义类型 } from "../默认内容/伙伴特性表";

export interface 伙伴特性项目类型 {
	名称: string,
	条件: boolean,
	描述: string,
}

export function 获取伙伴特性表(伙伴名: string): 伙伴特性项目类型[] {
	const 特性表 = 默认伙伴特性表[伙伴名]
	const t = 特性表.map((特性项: 伙伴特性定义类型) => {
		return {
			名称: 特性项.名称,
			条件: typeof 特性项.条件 === "function" ? 特性项.条件() : 特性项.条件,
			描述: typeof 特性项.描述 === "function" ? 特性项.描述() : 特性项.描述,
		};
	});
	return 深克隆(t)
}

export function 获取伙伴特性(伙伴名: string, 特性名称: string): boolean {
	const 特性表: 伙伴特性定义类型[] = 默认伙伴特性表[伙伴名]
	if (!特性表) {
		return
	}
	const 特性: 伙伴特性定义类型 = 特性表[特性名称]
	if (!特性) {
		return
	}
	return typeof 特性.条件 === "function" ? 特性.条件() : 特性.条件
}
