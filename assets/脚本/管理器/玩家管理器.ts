import { error, sys, warn } from "cc";
import { 排行榜结果, 服务器信息 } from "../方法函数/网络请求";

export const 默认玩家 = {
	编号: 0,
	用户标识: Math.random().toString(36).slice(2, 8),
	名称: "",
	扩展信息: {
		战胜语: "",
		战败语: "",
		积分: 0,
		成就: [] as { 名称: string, 描述: string, 完成时间: number }[],
		藏品: {} as Record<string, number>,
	} as any,
	服务器信息: {} as 服务器信息,
	创建时间: "",
	更新时间: "",
	上次登录时间: "",

	排行榜: {
		玩家列表: [],
		自身: null,
	} as 排行榜结果,

	藏品排行榜: {
		玩家列表: [],
		自身: null,
	} as 排行榜结果,
};

export let 玩家: typeof 默认玩家 = JSON.parse(JSON.stringify(默认玩家))

export function 加载玩家() {
	try{
		const 玩家字符串 = sys.localStorage.getItem("玩家");
		if (!玩家字符串) {
			error("本地无玩家数据，使用默认玩家");
			return;
		}
	
		const 玩家对象 = JSON.parse(玩家字符串);
		if (typeof 玩家对象 !== "object" || 玩家对象 === null) {
			warn("玩家对象格式异常，使用默认玩家");
			return;
		}
	
		for (const 键 in 默认玩家) {
			if (键 === "游戏版本") {
				玩家对象[键] = 默认玩家[键];
				continue;
			}
			if (!Object.prototype.hasOwnProperty.call(玩家对象, 键) || typeof 玩家对象[键] !== typeof 默认玩家[键]) {
				玩家对象[键] = 默认玩家[键];
				error(`玩家项【${键}】异常，已重置为默认值: ${默认玩家[键]}`);
			}
		}
	
		玩家 = JSON.parse(JSON.stringify(玩家对象))
	} catch (e) {
		error("加载玩家失败", e);
	}
}

export function 保存玩家() {
	try{
		玩家.扩展信息.更新时间 = Date.now()
		const 玩家字符串 = JSON.stringify(玩家)
		sys.localStorage.setItem("玩家", 玩家字符串)
	} catch (e) {
		error("保存玩家失败", e);
	}
}
