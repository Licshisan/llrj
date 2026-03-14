import { 默认日记表 } from '../默认内容/日记表'
import { 获取地区名称 } from './地区'

interface 日记项目类型 {
	地区: string,
	文本: string[],
	条件: boolean
}

export function 获取当前日记(): string[] {
	const 日记 = 默认日记表.find((日记) => 日记.地区 === 获取地区名称() && 日记.条件())
	if (日记) {
		return 日记.文本
	}
}