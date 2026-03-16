import { 深克隆 } from "../方法函数/公共函数"
import { 默认套餐表 } from "../默认内容/套餐表"

export interface 套餐项目类型 {
	名称: string,
	颜色: string,
	描述: string,
}

export function 获取套餐列表(): 套餐项目类型[] {
	const t = 默认套餐表.map((套餐项) => {
		return {
			名称: 套餐项.名称,
			颜色: 套餐项.颜色,
			描述: typeof 套餐项.描述 == 'function' ? 套餐项.描述() : 套餐项.描述
		}
	})
	return 深克隆(t)
}