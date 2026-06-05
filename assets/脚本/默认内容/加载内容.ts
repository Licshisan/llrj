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
import { 默认成就表 } from "./成就表";
import { 默认技能表 } from "./技能表";
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

	默认伙伴特性表.forEach((伙伴特性项) => {
		const 效果 = 伙伴特性项.效果
		for (let 时机 in 效果) {
			注册钩子(时机, 效果[时机])
		}
	});

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

	默认成就表.forEach((成就项) => {
		const 效果 = 成就项.效果
		if (效果) {
			for (let 时机 in 效果) {
				注册钩子(时机, 效果[时机])
			}
		}
	});

	默认技能表.forEach((技能项) => {
		const 效果 = 技能项.效果
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
		let player = await 登录请求()

		// 断线重传 并且不是 转移玩家
		if(玩家管理器.玩家.扩展信息.更新时间 > player.扩展信息.更新时间 && player.编号 === 玩家管理器.玩家.编号){
			player = await 上传ExtInfo请求()
		}

		if(player.编号) 玩家管理器.玩家.编号 = player.编号
		if(player.用户标识) 玩家管理器.玩家.用户标识 = player.用户标识
		if(player.名称) 玩家管理器.玩家.名称 = player.名称
		if(player.扩展信息) 玩家管理器.玩家.扩展信息 = player.扩展信息
		if(player.服务器信息) 玩家管理器.玩家.服务器信息 = player.服务器信息
		if(player.创建时间) 玩家管理器.玩家.创建时间 = player.创建时间
		if(player.上次登录时间) 玩家管理器.玩家.上次登录时间 = player.上次登录时间

		玩家管理器.保存玩家()
	} catch(e) {
		error("登录失败" + e)
	}
}
