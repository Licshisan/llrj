import { 深克隆 } from "../方法函数/公共函数";
import { 默认制作表 } from "../默认内容/制作表";

export interface 制作项目类型 {
	名称: string,
	等级?: number;
	拥有?: number;
	描述: string;
	说明: string;
	条件?: boolean;
	制作: () => string | void;
}

function ensureFunction(value: any): () => string | void {
	if (typeof value === 'string') {
		return () => value;
	}
	return typeof value === 'function' ? value : () => { };
}

export function 获取制作列表(): 制作项目类型[] {
	const 结果: 制作项目类型[] = []
	默认制作表.forEach(制作项目 => {
		if (typeof 制作项目.显示 === 'function' ? 制作项目.显示() : 制作项目.显示) {
			结果.push({
				名称: 制作项目.名称,
				等级: typeof 制作项目.等级 === 'function' ? 制作项目.等级() : 制作项目.等级,
				拥有: typeof 制作项目.拥有 === 'function' ? 制作项目.拥有() : 制作项目.拥有,
				描述: typeof 制作项目.描述 === 'function' ? 制作项目.描述() : 制作项目.描述,
				说明: typeof 制作项目.说明 === 'function' ? 制作项目.说明() : 制作项目.说明,
				条件: typeof 制作项目.条件 === 'function' ? 制作项目.条件() : 制作项目.条件,
				制作: ensureFunction(制作项目.制作),
			})
		}
	});
	return 深克隆(结果)
}