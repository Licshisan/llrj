import { error, sys, warn } from "cc";
import { 创建默认值代理 } from "../方法函数/公共函数";

const 默认设置 = {
	通关次数: 0,
	安装时间: Date.now(),
	唯一标识:  Math.random().toString(36).slice(2, 8),
	播放速度: 1,
	播放音乐: false,
	暗夜模式: false,
	游戏版本: "0.6.0",

	按钮: { 普通: true } as Record<string, boolean>,
	成就: { 打开成就: true} as Record<string, boolean>,
	藏品: {} as Record<string, number>,
    其他: {} as Record<string, number>,
	账号: {} as Record<string, number>,
	特质: {} as Record<string, number>,
};

export let 设置: typeof 默认设置 = 创建默认值代理(JSON.parse(JSON.stringify(默认设置)))

export function 加载设置() {
	try{
		const 设置字符串 = sys.localStorage.getItem("设置");
		if (!设置字符串) {
			error("本地无设置数据，使用默认设置");
			return;
		}
	
		const 设置对象 = JSON.parse(设置字符串);
		if (typeof 设置对象 !== "object" || 设置对象 === null) {
			warn("设置对象格式异常，使用默认设置");
			return;
		}
	
		for (const 键 in 默认设置) {
			if (!设置对象.hasOwnProperty(键) || typeof 设置对象[键] !== typeof 默认设置[键]) {
				设置对象[键] = 默认设置[键];
				error(`设置项【${键}】异常，已重置为默认值: ${默认设置[键]}`);
			}
		}
	
		设置 = 创建默认值代理(JSON.parse(JSON.stringify(设置对象)))
	} catch (e) {
        error("加载设置失败", e);
    }
}

export function 保存设置() {
	try{
		const 存档字符串 = JSON.stringify(设置)
		sys.localStorage.setItem("设置", 存档字符串)
	} catch (e) {
		error("保存设置失败", e);
	}
}
