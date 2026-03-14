import { 深克隆 } from "../方法函数/公共函数";
import { 默认商品表 } from "../默认内容/商品表";

export interface 商品项目类型 {
	名称: string,
	拥有?: number,
	等级?: number,
	描述: string,
	条件: boolean,
	选项一文本: string,
	选项二文本: string,
	选项一效果?: () => string | void,
	选项二效果?: () => string | void,
	显示: boolean
}
function ensureFunction(value: any): () => string | void {
	if (typeof value === 'string') {
		return () => value;
	}
	return typeof value === 'function' ? value : undefined
}
export function 获取商品列表(): 商品项目类型[] {
	const 结果: 商品项目类型[] = []
	默认商品表.forEach(商品 => {
		if (typeof 商品.显示 === 'function' ? 商品.显示() : 商品.显示) {
			结果.push({
				名称: 商品.名称,
				拥有: typeof 商品.拥有 === 'function' ? 商品.拥有() : 商品.拥有,
				等级: typeof 商品.等级 === 'function' ? 商品.等级() : 商品.等级,
				描述: typeof 商品.描述 === 'function' ? 商品.描述() : 商品.描述,
				条件: typeof 商品.条件 === 'function' ? 商品.条件() : 商品.条件,
				选项一文本: typeof 商品.选项一文本 === 'function' ? 商品.选项一文本() : 商品.选项一文本,
				选项二文本: typeof 商品.选项二文本 === 'function' ? 商品.选项二文本() : 商品.选项二文本,
				选项一效果: ensureFunction(商品.选项一效果),
				选项二效果: ensureFunction(商品.选项二效果),
				显示: typeof 商品.显示 === 'function' ? 商品.显示() : 商品.显示,
			})
		}
	});
	return 深克隆(结果)
}

export function 获取商品项目(商品名称: string): 商品项目类型 {
	const 商品 = 默认商品表.find((商品) => 商品.名称 === 商品名称)
	if (!商品) {
		return
	}
	return 深克隆({
		名称: 商品.名称,
		拥有: typeof 商品.拥有 === 'function' ? 商品.拥有() : 商品.拥有,
		描述: typeof 商品.描述 === 'function' ? 商品.描述() : 商品.描述,
		等级: typeof 商品.等级 === 'function' ? 商品.等级() : 商品.等级,
		条件: typeof 商品.条件 === 'function' ? 商品.条件() : 商品.条件,
		选项一文本: typeof 商品.选项一文本 === 'function' ? 商品.选项一文本() : 商品.选项一文本,
		选项二文本: typeof 商品.选项二文本 === 'function' ? 商品.选项二文本() : 商品.选项二文本,
		选项一效果: ensureFunction(商品.选项一效果),
		选项二效果: ensureFunction(商品.选项二效果),
		显示: typeof 商品.显示 === 'function' ? 商品.显示() : 商品.显示,
	})
}