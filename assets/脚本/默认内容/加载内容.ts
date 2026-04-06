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

	let lastErrorKey = '';
	let lastReportTime = 0;
	const ERROR_REPORT_COOLDOWN = 3000;

	(window as any).__errorHandler = function (name, line, msg, stack) {
		const now = Date.now();
		const currentKey = `${name}|${line}|${msg}`;

		if (currentKey === lastErrorKey || now - lastReportTime < ERROR_REPORT_COOLDOWN) {
			return;
		}

		lastErrorKey = currentKey;
		lastReportTime = now;

		error(`Error Name: ${name}`);
		error(`Line: ${line}`);
		error(`Message: ${msg}`);
		error(`Stack: ${stack}`);

		fetch(`${SERVER_URL}/error`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name, line, msg, stack, setting: 设置管理器.设置 })
		}).then(() => {
			log("错误上报成功");
		}).catch((e) => {
			error('错误上报失败:', e);
		});
	};

	// 玩家登录 & 云同步
	try {
		const xhr = new XMLHttpRequest();
		xhr.open("POST", `${SERVER_URL}/login`, true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.timeout = 5000;
		xhr.onload = () => {
			if (xhr.status >= 200 && xhr.status < 300) {
				try {
					const result = JSON.parse(xhr.responseText);

					设置管理器.设置.账号 = {
						id: result.id,
						uid: result.uid,
						nickname: result.nickname,
						donation: result.donation || 0,
					};

					const 云端设置 = result.setting;
					if (云端设置) {
						if (云端设置.成就) {
							for (const key in 云端设置.成就) {
								设置管理器.设置.成就[key] = 设置管理器.设置.成就[key] || 云端设置.成就[key];
							}
						}
						if (云端设置.特质) {
							for (const key in 云端设置.特质) {
								设置管理器.设置.特质[key] = Math.max(设置管理器.设置.特质[key] || 0, 云端设置.特质[key] || 0);
							}
						}
						if (云端设置.藏品) {
							for (const key in 云端设置.藏品) {
								设置管理器.设置.藏品[key] = Math.max(设置管理器.设置.藏品[key] || 0, 云端设置.藏品[key] || 0);
							}
						}
						log('✅ 云同步完成：成就、特质、藏品已更新');
					}
					设置管理器.保存设置();
				} catch (e) {
					error("解析返回数据失败", e);
				}
			} else {
				error("请求失败，状态码：" + xhr.status);
			}
		};
		xhr.ontimeout = () => {
			error("请求超时（5秒） - 跳过云同步，使用本地数据");
		};
		xhr.onerror = () => {
			error("网络请求失败 - 跳过云同步，使用本地数据");
		};
		xhr.send(JSON.stringify({
			uid: 设置管理器.设置.唯一标识
		}));
	} catch (e) {
		const errorMessage = e instanceof Error ? e.message : String(e);
		error("玩家初始化失败：", errorMessage);
	}
}
