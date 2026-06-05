import { 存档 } from "../管理器/存档管理器";
import { director, Color } from "cc";
import { 计算数值, 计算最大生命 } from "./属性计算";
import { 默认食物表 } from "../默认内容/食物表";

export type 概率类型 = {
	名称: string,
	概率: number,
	数量?: number,
}

export function 格式化日期字符串(date: number): string {
	if(!date) return "暂无"
	const d = new Date(date);
	const year = d.getFullYear();
	const month = String(d.getMonth() + 1).padStart(2, "0");
	const day = String(d.getDate()).padStart(2, "0");
	const hours = String(d.getHours()).padStart(2, "0");
	const minutes = String(d.getMinutes()).padStart(2, "0");
	return `${year}-${month}-${day} ${hours}:${minutes}`;
}

export function 格式化金钱(num: number): string {
	return `${(num / 10).toFixed(1)}元`;
}

export function 格式化数字(num: number): string {
	if (Math.abs(num) >= 100000000) {
		// 亿单位
		return (num / 100000000).toFixed(1) + "亿";
	} else if (Math.abs(num) >= 10000) {
		// 万单位
		return (num / 10000).toFixed(1) + "万";
	} else {
		// 小于1万的直接显示，去掉小数部分
		return Math.round(num).toString();
	}
}

export function 抽取项目(weights: 概率类型[]): string {
	let total = 0;
	for (const item of weights) {
		total += item.概率;
	}

	let r = Math.random() * total;

	for (const { 名称, 概率 } of weights) {
		if ((r -= 概率) <= 0) return 名称;
	}

	return weights[0].名称;
}

export function 抽取物品(物品表: 概率类型[], 必中 = false): string {
	const drops = [] as Array<{ 名称: string; 数量: number }>;

	// 抽取物品物品，如果force且没有掉落就重抽
	do {
		drops.length = 0; // 清空之前的掉落
		for (const item of 物品表) {
			if (Math.random() * 100 < item.概率) {
				drops.push({ 名称: item.名称, 数量: item.数量 || 1 });
			}
		}
	} while (必中 && drops.length === 0 && 物品表.length > 0); // 强制模式下重抽直到有掉落

	// 处理获得的物品
	let res = "";
	for (const drop of drops) {
		if (drop.名称 === "金钱") {
			存档.金钱 += drop.数量;
			res += `【金钱】*${(drop.数量 / 10).toFixed(1)}`;
		} else {
			// 确保物品存在
			if (!存档.物品[drop.名称]) {
				存档.物品[drop.名称] = 0;
			}
			存档.物品[drop.名称] += drop.数量;
			res += `【${drop.名称}】*${drop.数量}`;
		}
	}
	return res;
}

export function 对象求和(obj: Record<string, number>) {
	// 初始化总和为 0
	let sum = 0;
	// 遍历对象所有属性
	for (const key in obj) {
		// 只处理自身属性 + 数字类型值
		if (Object.prototype.hasOwnProperty.call(obj, key) && typeof obj[key] === 'number' && !isNaN(obj[key])) {
			sum += obj[key];
		}
	}
	return sum;
}

export function 自动进食(进食列表 = ['果子', '熟肉', '干脆面']): boolean {
	if (存档.饥饿 <= 0) {
		let 初始饥饿 = 存档.饥饿
		for (let i = 0; i < 进食列表.length; i++) {
			const 食物 = 默认食物表.find(f => f.名称 === 进食列表[i]);
			if(食物?.使用){
				食物.使用({
					提示: (x) => {},
					食用成功: (x) => {},
				})
			}
			if (初始饥饿 !== 存档.饥饿) {
				return true
			}
		}
		return false
	}
	return false
}

export function 自然恢复生命() {
	const 回复量 = 计算数值("恢复量", 4);
	存档.生命 += 回复量;
	if (存档.生命 > 计算最大生命()) {
		存档.生命 = 计算最大生命();
	}
	return 回复量;
}

export function 跳转场景(name: string) {
	director.loadScene(name)
}

export function 深克隆<T>(target: T): T {
	if (typeof target !== 'object' || target === null) {
		return target;
	}

	if (Array.isArray(target)) {
		return target.map(item => 深克隆(item)) as T;
	}

	// 3. 处理普通对象（如天赋项）
	const cloneObj = {} as T;
	for (const key in target) {
		if (Object.prototype.hasOwnProperty.call(target, key)) {
			cloneObj[key] = 深克隆((target as any)[key]);
		}
	}
	return cloneObj;
}

export function 解析颜色(颜色字符串: string): Color {
	if (!颜色字符串) return Color.WHITE;
	const 十六进制 = 颜色字符串.replace('#', '');
	const r = parseInt(十六进制.substring(0, 2), 16);
	const g = parseInt(十六进制.substring(2, 4), 16);
	const b = parseInt(十六进制.substring(4, 6), 16);
	return new Color(r, g, b, 255);
}