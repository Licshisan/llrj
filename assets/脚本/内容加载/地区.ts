import { 概率类型, 深克隆 } from "../方法函数/公共函数"
import { 默认地区表 } from "../默认内容/地区表"

interface 地区定义类型 {
	名称: string,
	条件: boolean,
	物品: 概率类型[],
	事件: 概率类型[],
	敌人: 概率类型[],
}

export function 获取地区名称() {
	const 地区 = 默认地区表.find((地区) => typeof 地区.条件 == 'function' ? 地区.条件() : 地区.条件)
	return 地区?.名称 || "未知地区"
}
export function 获取地区(): 地区定义类型 {
	const 地区 = 默认地区表.find((地区) => typeof 地区.条件 == 'function' ? 地区.条件() : 地区.条件)
	if (!地区) {
		return null
	}
	return 深克隆({
		名称: 地区?.名称 || "未知地区",
		条件: typeof 地区.条件 == 'function' ? 地区.条件() : 地区.条件,
		物品: typeof 地区.物品 == 'function' ? 地区.物品() : 地区.物品,
		事件: typeof 地区.事件 == 'function' ? 地区.事件() : 地区.事件,
		敌人: typeof 地区.敌人 == 'function' ? 地区.敌人() : 地区.敌人,
	})
}

export function 获取地区物品() {
	return 深克隆(获取地区().物品)
}

export function 获取地区事件() {
	return 深克隆(获取地区().事件)
}

export function 获取地区敌人() {
	return 深克隆(获取地区().敌人)
}
