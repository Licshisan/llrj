import * as 存档管理器 from "../管理器/存档管理器"
import * as 设置管理器 from "../管理器/设置管理器"
import * as 钩子管理器 from "../管理器/钩子管理器"

import { 默认套餐表 } from "./套餐表";
import { 注册钩子 } from "../管理器/钩子管理器";
import { 默认效果表 } from "./效果表";
import { 默认制作表 } from "./制作表";
import { 默认伙伴特性表 } from "./伙伴特性表";
import { 默认特性表 } from "./特性表";
import { 默认天赋表 } from "./天赋表";
import { error, log } from "cc";
import { 默认难度表 } from "./难度表";
import { 默认特质表 } from "./特质表";
import { 默认藏品表 } from "./藏品表";

interface WindowWithErrorHandler extends Window {
	__errorHandler?: (name: string, line: number, msg: string, stack: string) => void;
}

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

	for (const 伙伴特性 in 默认伙伴特性表) {
		默认伙伴特性表[伙伴特性].forEach((伙伴特性项) => {
			const 效果 = 伙伴特性项.效果
			for (const 时机 in 效果) {
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

	默认藏品表.forEach((藏品项) => {
		const 效果 = 藏品项.效果
		if (效果) {
			for (let 时机 in 效果) {
				注册钩子(时机, 效果[时机])
			}
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

	const SERVER_URL = 'http://47.93.223.212:3000';
	// 提交异常
	(window as WindowWithErrorHandler).__errorHandler = function (name, line, msg, stack) {
		error(`Error Name: ${name}`);
		error(`Line: ${line}`);
		error(`Message: ${msg}`);
		error(`Stack: ${stack}`);

		fetch(`${SERVER_URL}/error`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name, line, msg, stack, setting: 设置管理器.设置, save: 存档管理器.存档 })
		}).then(() => {
			log("错误上报成功");
		}).catch((e) => {
			error('错误上报失败:', e);
		});
	};
	// 玩家登录
	try {
		const controller = new AbortController();
		const timeoutId = setTimeout(() => controller.abort(), 5000);

		const response = await fetch(`${SERVER_URL}/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ uid: 设置管理器.设置.唯一标识 }),
			signal: controller.signal
		});
		clearTimeout(timeoutId);

		if (!response.ok) {
			return
		}

		const result = await response.json();
		设置管理器.设置.账号 = result
		设置管理器.保存设置()
	}
	catch (e) {
		const errorMessage = e instanceof Error ? e.message : String(e);
		error("玩家初始化失败：", errorMessage);
	}
}
