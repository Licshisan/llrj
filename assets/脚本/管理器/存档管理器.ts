import { error, sys } from "cc";
import { 创建默认值代理 } from "../方法函数/公共函数";

const 默认存档 = {
    // 世界
    存档名称: "默认存档",
    游戏难度: "普通",
    套餐名称: '新手模式',
    创建时间: Date.now(),

    天数: 1,
    距离: 1,
    停留天数: { 荒野: 0 } as Record<string, number>,
    按钮: { 前进: true } as Record<string, boolean>,
    特殊敌人: {} as Record<string, any>,
    // 玩家
    健康: 30,

    生命: 50,
    最大生命: 50,
    
    攻击: 10,
    防御: 0,

    逃跑: 0,
    压制: 0,

    精力: 50,
    最大精力: 50,

    饥饿: 100,
    最大饥饿: 100,

    经验: 0,
    声望: 0,

    罪恶: 0,
    烟瘾率: 0,

    金钱: 5,
    积分: 0,

    阅历: 0,
    面经: 0,

    物品: { 木材: 0 } as Record<string, number>,
    当日加成: { } as Record<string, number>,
    
    架势: { 平衡: false } as Record<string, boolean>,
    架势经验: { 平衡: 0 } as Record<string, number>,
    
    天赋: { 饥饿: false } as Record<string, boolean>,
    特质: { 饥饿: false } as Record<string, boolean>,
    状态: { 饥饿: false } as Record<string, boolean>,
    剧情: { 剧情: false } as Record<string, boolean>,
    伙伴: {} as Record<string, any>,
    其他: {} as Record<string, any>,
    // 计数器
    事件次数: {} as Record<string, number>,
    遇敌次数: {} as Record<string, number>,
    收集次数: {} as Record<string, number>,
    使用次数: {} as Record<string, number>,
    击败次数: {} as Record<string, number>,
    战败次数: {} as Record<string, number>,
    其他次数: {} as Record<string, number>,

    // 运行时
    临时变量: {} as any,
    当前事件: "",
    当前剧情: "",
    当前敌人: "",
    当前架势: "",
    当前文本: "",
    当前地点: "",
};

export let 存档: typeof 默认存档 = 创建默认值代理(JSON.parse(JSON.stringify(默认存档)))

export function 获取存档列表(): (typeof 存档)[] {
    const 存档名称列表字符串 = sys.localStorage.getItem("存档名称列表")
    const 存档名称列表 = 存档名称列表字符串 ? JSON.parse(存档名称列表字符串) : []

    return 存档名称列表.filter(Boolean).map((存档名称: string) => {
        try {
            const 存档字符串 = sys.localStorage.getItem(存档名称)
            const 存档对象 = 存档字符串 ? JSON.parse(存档字符串) : {};

            for (const 键 in 默认存档) {
                if (!存档对象.hasOwnProperty(键) || typeof 存档对象[键] !== typeof 默认存档[键]) {
                    存档对象[键] = 默认存档[键];
                    error(`存档项【${键}】异常，已重置为默认值: ${默认存档[键]}`);
                }
            }

            return 创建默认值代理(存档对象);
        } catch (e) {
            error(`存档【${存档名称}】损坏，已跳过`, e);
            return null;
        }
    }).filter(Boolean);
}

export function 创建存档() {
    const 存档名称 = "存档_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

    const 存档名称列表字符串 = sys.localStorage.getItem("存档名称列表")
    const 存档名称列表 = 存档名称列表字符串 ? JSON.parse(存档名称列表字符串) : []

    const 新存档 = JSON.parse(JSON.stringify(默认存档))
    新存档.存档名称 = 存档名称;

    try {
        sys.localStorage.setItem(存档名称, JSON.stringify(新存档))

        存档名称列表.push(存档名称)
        sys.localStorage.setItem("存档名称列表", JSON.stringify(存档名称列表))

        存档 = 创建默认值代理(JSON.parse(JSON.stringify(新存档)))
    } catch (e) {
        error("创建存档失败", e);
        存档名称列表.pop();
        sys.localStorage.setItem("存档名称列表", JSON.stringify(存档名称列表))
    }
}

export function 删除存档(存档名称: string) {
    try {
        const 存档名称列表字符串 = sys.localStorage.getItem("存档名称列表")
        const 存档名称列表 = 存档名称列表字符串 ? JSON.parse(存档名称列表字符串) : []

        const 新存档名称列表 = 存档名称列表.filter((名称: string) => 名称 !== 存档名称)
        sys.localStorage.setItem("存档名称列表", JSON.stringify(新存档名称列表))
        sys.localStorage.removeItem(存档名称)

        存档 = 创建默认值代理(JSON.parse(JSON.stringify(默认存档)))
    } catch (e) {
        error("删除存档失败", e);
    }
}

export function 加载存档(存档名称: string) {
    try {
        const 存档字符串 = sys.localStorage.getItem(存档名称)
        const 存档对象 = 存档字符串 ? JSON.parse(存档字符串) : {}

        for (const 键 in 默认存档) {
            if (!存档对象.hasOwnProperty(键) || typeof 存档对象[键] !== typeof 默认存档[键]) {
                存档对象[键] = 默认存档[键];
                error(`存档项【${键}】异常，已重置为默认值: ${默认存档[键]}`);
            }
        }

        存档 = 创建默认值代理(存档对象)
    } catch (e) {
        error("加载存档失败", e);
    }
}

export function 保存存档() {
    try {
        const 存档字符串 = JSON.stringify(存档)
        sys.localStorage.setItem(存档.存档名称, 存档字符串)
    } catch (e) {
        error("保存存档失败", e);
    }
}

export function 备份存档(备份名称: string) {
    try {
        const 备份字段 = 存档.存档名称 + "_备份" + 备份名称
        const 存档字符串 = JSON.stringify(存档)
        sys.localStorage.setItem(备份字段, 存档字符串)
    } catch (e) {
        error("备份存档失败", e);
    }
}

export function 加载备份(备份名称: string) {
    try {
        const 备份字段 = 存档.存档名称 + "_备份" + 备份名称
        const 存档字符串 = sys.localStorage.getItem(备份字段)
        const 存档对象 = 存档字符串 ? JSON.parse(存档字符串) : {}

        for (const 键 in 默认存档) {
            if (!存档对象.hasOwnProperty(键) || typeof 存档对象[键] !== typeof 默认存档[键]) {
                存档对象[键] = 默认存档[键];
                error(`存档项【${键}】异常，已重置为默认值: ${默认存档[键]}`);
            }
        }

        存档 = 创建默认值代理(存档对象)
    } catch (e) {
        error("加载备份失败", e);
    }
}

export function 新建外部存档(data: string | object) {
    let 存档对象: any;

    try {
        存档对象 = typeof data === "string" ? JSON.parse(data) : data;
    } catch (e) {
        error("外部存档解析失败", e);
        return;
    }

    if(!存档对象.存档名称){
        error("外部存档数据错误: 缺少存档名称");
        return;
    }
    
    for (const 键 in 默认存档) {
        if (!存档对象.hasOwnProperty(键) || typeof 存档对象[键] !== typeof 默认存档[键]) {
            存档对象[键] = 默认存档[键];
            error(`存档项【${键}】异常，已重置为默认值: ${默认存档[键]}`);
        }
    }

    const 存档名称列表字符串 = sys.localStorage.getItem('存档名称列表');
    const 存档名称列表: string[] = 存档名称列表字符串 ? JSON.parse(存档名称列表字符串) : [];

    try {
        sys.localStorage.setItem(存档对象.存档名称, JSON.stringify(存档对象));

        存档名称列表.push(存档对象.存档名称);
        sys.localStorage.setItem("存档名称列表", JSON.stringify(存档名称列表));

        存档 = 创建默认值代理(JSON.parse(JSON.stringify(存档对象)));
    } catch (e) {
        error("外部存档创建失败（可能容量不足）", e);
    }
}