import * as 设置管理器 from "../管理器/设置管理器"
import * as 钩子管理器 from "../管理器/钩子管理器"
import * as 玩家管理器 from "../管理器/玩家管理器"

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
import { 上报错误, 登录请求, 上传ExtInfo请求 } from "../方法函数/网络请求";

let 加载完成 = false

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

function 全局异常捕获() {
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

		上报错误({ name, line, msg, stack, setting: 设置管理器.设置 }).then(() => {
			log("错误上报成功");
		}).catch((e) => {
			error('错误上报失败:', e);
		});
	};
}

export async function 加载游戏内容() {
	if (加载完成) return
	设置管理器.加载设置()
	玩家管理器.加载玩家()
	注册钩子函数()
	全局异常捕获()
	log(钩子管理器.钩子函数对象)
	加载完成 = true

	try{
		// 尝试登录
		const player = await 登录请求(玩家管理器.玩家.uid)
		const 本地ExtInfo = JSON.parse(JSON.stringify(玩家管理器.玩家.ext_info || {}))
		const 本地更新时间 = Date.parse(玩家管理器.玩家.updated_at || "") || 0
		const 远程更新时间 = Date.parse(player.updated_at || "") || 0

		if(player.id) 玩家管理器.玩家.id = player.id
		if(player.uid) 玩家管理器.玩家.uid = player.uid
		if(player.name) 玩家管理器.玩家.name = player.name
		if(player.created_at) 玩家管理器.玩家.created_at = player.created_at
		if(player.last_login_at) 玩家管理器.玩家.last_login_at = player.last_login_at

		if (本地更新时间 > 远程更新时间) {
			try {
				const result = await 上传ExtInfo请求(本地ExtInfo)
				if (result.data?.ext_info) 玩家管理器.玩家.ext_info = result.data.ext_info
				if (result.data?.updated_at) 玩家管理器.玩家.updated_at = result.data.updated_at
			} catch (e) {
				玩家管理器.玩家.ext_info = 本地ExtInfo
				玩家管理器.玩家.updated_at = 玩家管理器.格式化玩家更新时间(new Date(本地更新时间))
				error("玩家扩展信息同步失败" + e)
			}
		} else {
			if(player.ext_info) 玩家管理器.玩家.ext_info = player.ext_info
			if(player.updated_at) 玩家管理器.玩家.updated_at = player.updated_at
		}

		玩家管理器.保存玩家(false)
	} catch(e) {
		error("登录失败" + e)
	}
}
