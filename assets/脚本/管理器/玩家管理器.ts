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
	},
	created_at: "",
	updated_at: "",
	last_login_at: ""
};

export let 用户: typeof 默认玩家 = JSON.parse(JSON.stringify(默认玩家))
