import { 默认特性表 } from '../默认内容/特性表';

interface 特性定义类型 {
	名称: string,
	条件: boolean,
	描述: string,
	显示?: boolean,
}
export function 获取特性表(): 特性定义类型[] {
	const 返回值 = []
	默认特性表.forEach((特性项) => {
		const { 名称, 条件, 描述, 展示 } = 特性项;
		if (展示) {
			返回值.push({
				名称,
				条件: typeof 条件 === "function" ? 条件() : 条件,
				描述: typeof 描述 === "function" ? 描述() : 描述,
			})
		}
	});
	return 返回值
}

// 用于判断特性
export function 获取特性(特性名: string) {
	const 特性 = 默认特性表.find(item => item.名称 === 特性名);
	if (!特性) {
		console.warn(`特性名${特性名}不存在`);
		return false;
	}
	return typeof 特性.条件 === "function" ? 特性.条件() : 特性.条件
}