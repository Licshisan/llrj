import { 存档 } from "../管理器/存档管理器";
import { 获取食物项目 } from "../内容加载/食物"
import { 计算恢复量, 计算最大生命 } from "./属性计算"
import { director } from "cc";

export type 概率类型 = {
	名称: string,
	概率: number,
	数量?: number,
}

export function 钳制(number: number, min: number, max: number): number {
	return Math.min(Math.max(number, min), max);
}

export function 格式化日期字符串(date: number): string {
	const d = new Date(date);
	const year = d.getFullYear();
	const month = String(d.getMonth() + 1).padStart(2, "0");
	const day = String(d.getDate()).padStart(2, "0");
	const hours = String(d.getHours()).padStart(2, "0");
	const minutes = String(d.getMinutes()).padStart(2, "0");
	const seconds = String(d.getSeconds()).padStart(2, "0");
	return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
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

/* 仅仅抽取第一个物品 */
export function 按权重抽取(weights: 概率类型[]): string {
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

/* 抽取物品 */
export function 按概率抽取(物品表: 概率类型[], 必中 = false): string {
	const drops = [] as Array<{ 名称: string; 数量: number }>;

	// 按概率抽取物品，如果force且没有掉落就重抽
	do {
		drops.length = 0; // 清空之前的掉落
		for (const item of 物品表) {
			if (Math.random() * 100 < item.概率) {
				drops.push({ 名称: item.名称, 数量: item.数量 });
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
		if (obj.hasOwnProperty(key) && typeof obj[key] === 'number' && !isNaN(obj[key])) {
			sum += obj[key];
		}
	}
	return sum;
}

export function 自动进食(进食列表 = ['果子', '熟肉', '干脆面']): boolean {
	if (存档.饥饿 <= 0) {
		let 初始饥饿 = 存档.饥饿
		for (let i = 0; i <= 进食列表.length; i++) {
			获取食物项目(进食列表[i])?.使用()
			if (初始饥饿 !== 存档.饥饿) {
				return true
			}
		}
		return false
	}
	return false
}

export function 自然恢复生命() {
	const 回复量 = 计算恢复量();
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
		if (target.hasOwnProperty(key)) {
			cloneObj[key] = 深克隆((target as any)[key]);
		}
	}
	return cloneObj;
}

// 创建对象代理 用于访问对象不存在的属性时 返回默认的安全值
export function 创建默认值代理<T extends Record<string, any>>(obj: T): T {
    return new Proxy(obj, {
        get(target, key: string) {
            const value = target[key];
            if (typeof value !== 'object' || value === null) {
                return value;
            }
            if (Array.isArray(value)) {
                return value;
            }
            const isBooleanMap = Object.values(value).some(v => typeof v === 'boolean');
            return new Proxy(value, {
                get(innerTarget, innerKey: string) {
                    const innerValue = innerTarget[innerKey];

                    if (innerValue !== undefined) {
                        return innerValue;
                    }

                    return isBooleanMap ? false : 0;
                }
            });
        }
    });
}