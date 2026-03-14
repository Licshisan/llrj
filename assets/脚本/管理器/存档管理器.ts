// 创建对象代理 用于访问对象不存在的属性时 返回默认的安全值
function 创建对象代理<T extends object>(目标对象: T = {} as T, 默认属性值: any = 0): T & Record<string, any> {
    return new Proxy(目标对象, {
        get(obj, key: string) {
            return key in obj ? obj[key as keyof T] : 默认属性值;
        }
    }) as T & Record<string, any>;
}

// 游戏默认存档数据
const 默认存档 = {
    天数: 1,
    距离: 1,
    健康: 30,

    生命: 50,
    最大生命: 50,

    精力: 50,
    最大精力: 50,

    饥饿: 100,
    最大饥饿: 100,

    攻击: 10,
    防御: 0,

    逃跑: 50,
    压制: 0, // 减少对方逃跑率

    罪恶: 0,
    声望: 0,

    阅历: 0,
    面经: 0, // 面试经验

    金钱: 5,
    积分: 0,

    经验: 0,
    烟瘾率: 0,

    物品: 创建对象代理(),
    当日加成: 创建对象代理(),

    收集次数: 创建对象代理(),
    事件次数: 创建对象代理(),
    遇敌次数: 创建对象代理(),

    使用次数: 创建对象代理(),
    击败次数: 创建对象代理(),
    战败次数: 创建对象代理(),
    架势经验: 创建对象代理(),
    停留天数: 创建对象代理(),
    其他: 创建对象代理(),

    架势: 创建对象代理({ 平衡: false }, false),
    剧情: 创建对象代理({ 剧情: false }, false),
    状态: 创建对象代理({ 饥饿: false }, false),
    按钮: 创建对象代理({ 前进: true }, false),
    天赋: 创建对象代理({ 天赋: false }, false),

    伙伴: 创建对象代理({}, 0),
    特殊敌人: 创建对象代理({}, {}),

    当前事件: "",
    当前剧情: "",
    当前敌人: "",
    当前地点: "",
    当前架势: "",
    当前文本: "",

    存档名称: "默认存档",
    套餐名称: '新手模式',
    创建时间: Date.now(),
};

export let 存档: typeof 默认存档 = 创建存档代理(JSON.parse(JSON.stringify(默认存档)))

function 创建存档代理(存档) {
    for (let 字段 in 存档) {
        if (typeof 存档[字段] === 'object') {
            const 对象值 = 存档[字段];
            const 是否全是数字 = Object.values(对象值).every(value => typeof value === 'number');
            const 是否全是布尔 = Object.values(对象值).every(value => typeof value === 'boolean');

            if (字段 == '特殊敌人') {
                存档[字段] = 创建对象代理(对象值, {});
            } else if (是否全是数字) {
                存档[字段] = 创建对象代理(对象值, 0); // 默认值为 0
            } else if (是否全是布尔) {
                存档[字段] = 创建对象代理(对象值, false); // 默认值为 false
            } else {
                存档[字段] = 创建对象代理(对象值, 0);
            }
        }
    }
    return 存档
}


export function 获取存档列表(): (typeof 存档)[] {
    const 存档名称列表字符串 = localStorage.getItem("存档名称列表")
    const 存档名称列表 = 存档名称列表字符串 ? JSON.parse(存档名称列表字符串) : []
    return 存档名称列表.filter(Boolean).map((存档名称: string) => {
        try {
            const 存档字符串 = localStorage.getItem(存档名称)
            return 存档字符串 ? JSON.parse(存档字符串) : null
        } catch (e) {
            console.warn(`存档【${存档名称}】损坏，已跳过`, e);
            return null;
        }
    }).filter(Boolean);
}

export function 创建存档() {
    const 存档名称 = "存档_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    const 存档名称列表字符串 = localStorage.getItem("存档名称列表")
    const 存档名称列表 = 存档名称列表字符串 ? JSON.parse(存档名称列表字符串) : []
    存档名称列表.push(存档名称)
    localStorage.setItem("存档名称列表", JSON.stringify(存档名称列表))

    const 新建存档 = { ...默认存档, 存档名称 }
    try {
        localStorage.setItem(存档名称, JSON.stringify(新建存档))
        localStorage.setItem("存档名称列表", JSON.stringify(存档名称列表))

        存档 = 创建存档代理(JSON.parse(JSON.stringify(新建存档)))
    } catch (e) {
        console.error("创建存档失败（容量不足）：", e);
        存档名称列表.pop();
        localStorage.setItem("存档名称列表", JSON.stringify(存档名称列表))
    }
}

export function 删除存档(存档名称: string) {
    const 存档名称列表字符串 = localStorage.getItem("存档名称列表")
    const 存档名称列表 = 存档名称列表字符串 ? JSON.parse(存档名称列表字符串) : []
    const 新存档名称列表 = 存档名称列表.filter((名称: string) => 名称 !== 存档名称)
    localStorage.setItem("存档名称列表", JSON.stringify(新存档名称列表))
    localStorage.removeItem(存档名称)
    存档 = 默认存档
}

export function 加载存档(存档名称: string) {
    const 存档字符串 = localStorage.getItem(存档名称)
    const 存档对象 = 存档字符串 ? JSON.parse(存档字符串) : {}
    存档 = 创建存档代理(存档对象)
}

export function 保存存档() {
    localStorage.setItem(存档.存档名称, JSON.stringify(存档))
}

export function 备份存档(备份名称: string) {
    if (!存档.存档名称) {
        console.error("请先加载存档再进行备份！");
        return;
    }
    localStorage.setItem(存档.存档名称 + "_备份" + 备份名称, JSON.stringify(存档))
}

export function 加载备份(备份名称: string) {
    if (!存档.存档名称) {
        console.error("请先加载原存档再加载备份！");
        return;
    }
    const 存档字符串 = localStorage.getItem(存档.存档名称 + "_备份" + 备份名称)
    const 存档对象 = 存档字符串 ? JSON.parse(存档字符串) : {}
    存档 = 创建存档代理(存档对象)
}