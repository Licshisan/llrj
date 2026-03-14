import { 深克隆 } from '../方法函数/公共函数';
import { 默认天赋表 } from '../默认内容/天赋表';

export interface 天赋项目类型 {
	名称: string,
	说明: string,
	负面: boolean
}

export function 获取天赋表(): 天赋项目类型[] {
	const 返回值 = []
	默认天赋表.forEach((天赋项) => {
		返回值.push({
			名称: 天赋项.名称,
			说明: typeof 天赋项.说明 === "function" ? 天赋项.说明() : 天赋项.说明,
			负面: typeof 天赋项.负面 === "function" ? 天赋项.负面() : 天赋项.负面,
		})
	});
	return 深克隆(返回值)
}
