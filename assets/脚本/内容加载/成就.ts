import { 默认成就表 } from "../默认内容/成就表";

interface 成就项目类型 {
	名称: string,
	描述: string,
	条件: boolean,
	达成时间?: number
}

export function 更新成就(): 成就项目类型[] {
	try {
		const 成就字符串 = localStorage.getItem("成就");
		let 本地成就表: 成就项目类型[] = [];
		if (成就字符串) {
			try {
				本地成就表 = JSON.parse(成就字符串) as 成就项目类型[];
				if (!Array.isArray(本地成就表)) 本地成就表 = [];
			} catch (e) {
				console.warn("【成就系统】本地成就数据解析失败，重置为空数组：", e);
				本地成就表 = [];
			}
		}
		const 新成就表: 成就项目类型[] = [];

		默认成就表.forEach((全局成就项) => {
			if (!全局成就项?.名称) {
				console.warn("【成就系统】全局成就项缺失唯一名称，跳过处理");
				return;
			}
			const { 名称: 成就名称, 描述, 条件 } = 全局成就项;

			const 达成成就 = typeof 条件 === "function" ? 条件() : !!条件;
			const 最终描述 = typeof 描述 === "function" ? 描述() : (描述 || "无描述");

			const 本地成就项 = 本地成就表.find(item => item?.名称 === 成就名称);

			if (本地成就项) {
				新成就表.push({
					...本地成就项,
					描述: 最终描述,
					条件: 达成成就,
					...(达成成就 && !本地成就项.达成时间 && { 达成时间: Date.now() }) // 仅首次达成时记录时间
				});
			} else {
				// 4. 新增成就（按全局顺序添加）
				新成就表.push({
					名称: 成就名称,
					描述: 最终描述,
					条件: 达成成就,
					达成时间: 达成成就 ? Date.now() : undefined
				});
			}
		});

		// 5. 过滤有效成就并保存
		const 有效成就表 = 新成就表.filter(item => item?.名称);
		localStorage.setItem("成就", JSON.stringify(有效成就表));

		console.log(`【成就系统】更新完成，当前共${有效成就表.length}项成就`);
		return 有效成就表;

	} catch (e) {
		console.error("【成就系统】更新失败：", e);
		return [];
	}
}