// 使用发布订阅模式 绑定游戏中关键时机
export let 钩子函数对象: Record<string, Function[]> = {};

export function 注册钩子(时机: string, 函数: Function) {
	if (!钩子函数对象[时机]) {
		钩子函数对象[时机] = [];
	}
	const 目标数组 = 钩子函数对象[时机];

	if (目标数组.includes(函数)) {
		console.warn(`执行钩子[${时机}]已注册`);
		return () => { };
	}

	目标数组.push(函数);
	const 函数索引 = 目标数组.length - 1;
	const 消除函数 = () => {
		if (!钩子函数对象[时机] || !目标数组.length) return;
		if (函数索引 < 0 || 函数索引 >= 目标数组.length) return;
		if (目标数组[函数索引] !== 函数) return;
		目标数组.splice(函数索引, 1);
		if (目标数组.length === 0) {
			delete 钩子函数对象[时机];
		}
	};

	return 消除函数;
}

export function 执行钩子(时机: string, 参数列表: any[] = []) {
	const 结果: any[] = [];
	const 钩子数组 = 钩子函数对象[时机];

	if (钩子数组 && 钩子数组.length > 0) {
		钩子数组.forEach((钩子函数, 索引) => {
			try {
				const 执行结果 = 钩子函数(...参数列表);
				if (执行结果 !== undefined) {
					结果.push(执行结果);
				}
			} catch (e) {
				console.error(`执行钩子[${时机}]第${索引 + 1}个函数出错:`, e);
				console.warn(钩子函数)
			}
		});
	}
	return 结果;
}
