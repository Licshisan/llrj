import * as 存档管理器 from "../管理器/存档管理器"
import * as 设置管理器 from "../管理器/设置管理器"
import * as 钩子管理器 from "../管理器/钩子管理器"

import { 默认套餐表 } from "./套餐表";
import { 注册钩子 } from "../管理器/钩子管理器";
import { 默认效果表 } from "./效果表";
import { 默认制作表 } from "./制作表";
import { 伙伴特性定义类型, 默认伙伴特性表 } from "./伙伴特性表";
import { 默认特性表 } from "./特性表";
import { 默认天赋表 } from "./天赋表";
import { log } from "cc";
import { 默认难度表 } from "./难度表";
import { 默认特质表 } from "./特质表";

let 加载完成 = false

export function 挂载全局变量() {
	globalThis.存档 = 存档管理器.存档;
	globalThis.存档管理器 = 存档管理器;

	globalThis.设置 = 设置管理器.设置;
	globalThis.设置管理器 = 设置管理器;
}

export function 注册钩子函数() {
	默认难度表.forEach((难度项) => {
		const 效果 = 难度项.效果
		for (let 时机 in 效果) {
			注册钩子(时机, 效果[时机])
		}
	})

	默认套餐表.forEach((天赋项) => {
		const 效果 = 天赋项.效果
		for (let 时机 in 效果) {
			注册钩子(时机, 效果[时机])
		}
	});

	默认制作表.forEach((制作项) => {
		const 效果 = 制作项.效果
		for (let 时机 in 效果) {
			注册钩子(时机, 效果[时机])
		}
	});

	默认效果表.forEach((效果) => {
		注册钩子(效果.时机, 效果.函数)
	});

	默认特性表.forEach((特性项) => {
		const 效果 = 特性项.效果
		for (let 时机 in 效果) {
			注册钩子(时机, 效果[时机])
		}
	});

	for (let 伙伴特性 in 默认伙伴特性表) {
		默认伙伴特性表[伙伴特性].forEach((伙伴特性: 伙伴特性定义类型) => {
			const 效果 = 伙伴特性.效果
			for (let 时机 in 效果) {
				注册钩子(时机, 效果[时机])
			}
		});
	}

	默认特质表.forEach((特质项) => {
		const 效果 = 特质项.效果
		for (let 时机 in 效果) {
			注册钩子(时机, 效果[时机])
		}
	});

	默认天赋表.forEach((天赋项) => {
		const 效果 = 天赋项.效果
		for (let 时机 in 效果) {
			注册钩子(时机, 效果[时机])
		}
	});

}
export async function 加载游戏内容() {
	if (加载完成) return
	设置管理器.加载设置()
	挂载全局变量()
	注册钩子函数()
	log(钩子管理器.钩子函数对象)
	加载完成 = true

	// if (sys.isNative) {
	// 	// 提交异常
	// 	(window as any).__errorHandler = function (name, line, msg, stack) {
	// 		error(`Error Name: ${name}`);
	// 		error(`Line: ${line}`);
	// 		error(`Message: ${msg}`);
	// 		error(`Stack: ${stack}`);

	// 		try {
	// 			fetch(`${设置.后端地址}/error`, {
	// 				method: 'POST',
	// 				headers: {
	// 					'Content-Type': 'application/json'
	// 				},
	// 				body: JSON.stringify({ name, line, msg, stack, version: 设置.游戏版本 })
	// 			});
	// 		} catch (e) {
	// 			error('错误上报失败:', e);
	// 		}
	// 	};

	// 	// 玩家注册
	// 	const player_string = sys.localStorage.getItem("player");
	// 	const player = player_string ? JSON.parse(player_string) : null;

	// 	try {
	// 		if (!player.id) {
	// 			const response = await fetch(`${设置.后端地址}/player/create`, {
	// 				method: 'post',
	// 				headers: {
	// 					'Content-Type': 'application/json'
	// 				},
	// 			});

	// 			if (!response.ok) {
	// 				return
	// 			}

	// 			const result = await response.json();
	// 			if (result.success) {
	// 				sys.localStorage.setItem("player", JSON.stringify(result.data));
	// 			}
	// 		}

	// 		else {
	// 			const response = await fetch(`${设置.后端地址}/player/login`, {
	// 				method: 'post',
	// 				headers: {
	// 					'Content-Type': 'application/json'
	// 				},
	// 				body: JSON.stringify({ id: player.id })
	// 			});

	// 			if (!response.ok) {
	// 				return
	// 			}

	// 			const result = await response.json();
	// 			if (result.success) {
	// 				sys.localStorage.setItem("player", JSON.stringify(result.data));
	// 			}
	// 		}
	// 	}
	// 	catch (error) {
	// 		error("玩家初始化失败：", error.message);
	// 	}
}
