import { 深克隆 } from "../方法函数/公共函数";
import { 默认食物表 } from "../默认内容/食物表";

export interface 食物项目类型 {
	名称: string,
	拥有: number,
	描述: string,
	说明: string,
	条件: boolean,
	使用: () => string | void,
}
function ensureFunction(value: any): () => string | void {
	if (typeof value === 'string') {
		return () => value;
	}
	return typeof value === 'function' ? value : () => { };
}
export function 获取食物列表(): 食物项目类型[] {
	const 结果: 食物项目类型[] = []
	默认食物表.forEach(食物 => {
		if (typeof 食物.显示 === 'function' ? 食物.显示() : 食物.显示) {
			结果.push({
				名称: 食物.名称,
				拥有: typeof 食物.拥有 === 'function' ? 食物.拥有() : 食物.拥有,
				描述: typeof 食物.描述 === 'function' ? 食物.描述() : 食物.描述,
				说明: typeof 食物.说明 === 'function' ? 食物.说明() : 食物.说明,
				条件: typeof 食物.条件 === 'function' ? 食物.条件() : 食物.条件,
				使用: ensureFunction(食物.使用)
			})
		}
	});
	return 深克隆(结果)
}

export function 获取食物项目(食物名称: string): 食物项目类型 {
	const 食物 = 默认食物表.find((食物) => 食物.名称 === 食物名称)
	if (!食物) {
		return
	}
	return 深克隆({
		名称: 食物.名称,
		拥有: typeof 食物.拥有 === 'function' ? 食物.拥有() : 食物.拥有,
		描述: typeof 食物.描述 === 'function' ? 食物.描述() : 食物.描述,
		说明: typeof 食物.说明 === 'function' ? 食物.说明() : 食物.说明,
		条件: typeof 食物.条件 === 'function' ? 食物.条件() : 食物.条件,
		显示: typeof 食物.显示 === 'function' ? 食物.显示() : 食物.显示,
		使用: ensureFunction(食物.使用)
	})
}