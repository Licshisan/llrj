import { error, sys, warn } from "cc";

export const 默认玩家 = {
	id: 0,
	uid: Math.random().toString(36).slice(2, 8),
	name: "",
	ext_info: {
		战胜语: "",
		战败语: "",
		成就: {} as Record<string, number>,
		特质: {} as Record<string, number>,
		藏品: {} as Record<string, number>,
		技能: {} as Record<string, number>,
		补偿: {} as Record<string, number>,
	} as any,
	created_at: "",
	updated_at: "",
	last_login_at: "",
};

export let 玩家: typeof 默认玩家 = JSON.parse(JSON.stringify(默认玩家))

function 补零(value: number, length = 2) {
	return String(value).padStart(length, "0");
}

export function 格式化玩家更新时间(date = new Date()) {
	const 东八区时间 = new Date(date.getTime() + 8 * 60 * 60 * 1000);
	return `${东八区时间.getUTCFullYear()}-${补零(东八区时间.getUTCMonth() + 1)}-${补零(东八区时间.getUTCDate())}T${补零(东八区时间.getUTCHours())}:${补零(东八区时间.getUTCMinutes())}:${补零(东八区时间.getUTCSeconds())}.${补零(东八区时间.getUTCMilliseconds(), 3)}+08:00`;
}

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
			if (!玩家对象.hasOwnProperty(键) || typeof 玩家对象[键] !== typeof 默认玩家[键]) {
				玩家对象[键] = 默认玩家[键];
				error(`玩家项【${键}】异常，已重置为默认值: ${默认玩家[键]}`);
			}
		}
	
		玩家 = JSON.parse(JSON.stringify(玩家对象))
	} catch (e) {
		error("加载玩家失败", e);
	}
}

export function 保存玩家(更新时间 = true) {
	try{
		if (更新时间) {
			玩家.updated_at = 格式化玩家更新时间();
		}
		const 玩家字符串 = JSON.stringify(玩家)
		sys.localStorage.setItem("玩家", 玩家字符串)
	} catch (e) {
		error("保存玩家失败", e);
	}
}
