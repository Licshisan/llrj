export const 默认设置 = {
	通关次数: 0,
	安装时间: Date.now(),
	播放速度: 1,
	播放音乐: false,
	暗夜模式: false,
	游戏版本: "0.5.8",
};

export let 设置 = { ...默认设置 };

export function 加载设置() {
	const 设置字符串 = localStorage.getItem("设置");
	if (!设置字符串) {
		console.log("本地无设置数据，使用默认设置");
		return;
	}

	const 本地设置 = JSON.parse(设置字符串);
	if (typeof 本地设置 !== "object" || 本地设置 === null) {
		console.warn("本地设置格式异常，使用默认设置");
		return;
	}

	for (const 键 in 默认设置) {
		if (
			本地设置.hasOwnProperty(键) &&
			typeof 本地设置[键] === typeof 默认设置[键]
		) {
			设置[键] = 本地设置[键];
		} else {
			设置[键] = 默认设置[键];
			console.log(`设置项【${键}】异常，已重置为默认值: ${默认设置[键]}`);
		}
	}
}

export function 保存设置() {
	localStorage.setItem("设置", JSON.stringify(设置))
}
