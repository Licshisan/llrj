import { 存档 } from "../管理器/存档管理器";
import { 玩家 } from "../管理器/玩家管理器";

export const 服务器地址 = "http://localhost:3000";

export interface 接口响应<T = any> {
    code: number;
    msg: string;
    data?: T;
}

export interface 先驱者信息 {
    完成人名称: string;
    完成人id: number;
    完成时间: any;
}

export interface 服务器信息 {
    先驱者?: Record<string, 先驱者信息>;
    [key: string]: any;
}

export interface 玩家信息 {
    编号: number;
    用户标识: string;
    名称: string;
    扩展信息?: Record<string, any>;
    服务器信息?: 服务器信息;
    创建时间?: string;
    更新时间?: string;
    上次登录时间?: string;
}

export interface 存档记录 {
    id: number;
    玩家编号: number;
    day: number;
    save_name: string;
    save: any;
    created_at: string;
    player?: {
        编号: number;
        名称: string;
    };
}

export interface 排行榜玩家 {
    编号: number;
    名称: string;
}

export interface 排行榜条目 {
    rank: number;
    score: number;
    player: 排行榜玩家;
}

export interface 排行榜结果 {
    players: 排行榜条目[];
    self: 排行榜条目;
}

function 获取玩家ID(): number {
    const id = Number(玩家?.编号 || 0);
    return Number.isFinite(id) && id > 0 ? id : 0;
}

function 获取玩家校验信息() {
    return {
        玩家编号: 获取玩家ID(),
        用户标识: 玩家.用户标识,
    };
}

export async function 请求JSON<T = any>(path: string, options:  {
    method?: "GET" | "POST";
    body?: any;
    timeout?: number;
} = {}): Promise<接口响应<T>> {
    const method = options.method || "GET";
    const headers: Record<string, string> = {};
    const requestOptions: RequestInit = { method, headers };

    if (options.body !== undefined) {
        headers["Content-Type"] = "application/json";
        requestOptions.body = JSON.stringify(options.body);
    }

    const 请求 = fetch(`${服务器地址}${path}`, requestOptions).then(async (response) => {
        let data: 接口响应<T> | null = null;
        try {
            data = await response.json();
        } catch (e) {
            data = null;
        }

        if (!response.ok || !data) {
            throw new Error(data?.msg || `网络请求失败：${response.status}`);
        }

        if (data.code !== 200) {
            throw new Error(data.msg || "服务器返回失败");
        }

        return data;
    });

    if (!options.timeout) {
        return 请求;
    }

    const 超时 = new Promise<接口响应<T>>((_, reject) => {
        setTimeout(() => reject(new Error(`请求超时（${Math.floor(options.timeout / 1000)}秒）`)), options.timeout);
    });

    return Promise.race([请求, 超时]);
}

export async function 登录请求(): Promise<玩家信息> {
    const result = await 请求JSON<玩家信息>("/login", {
        method: "POST",
        body: { 用户标识: 玩家.用户标识 },
        timeout: 5000,
    });
    return result.data;
}

export async function 上报错误(data: any) {
    const 玩家编号 = 获取玩家ID();
    const result = await 请求JSON<{ id: number }>("/log", {
        method: "POST",
        body: {
            ...(玩家编号 > 0 ? 获取玩家校验信息() : {}),
            level: "error",
            log: data,
        },
    });
    return result.data
}

export async function 上传消息请求(data: any) {
    const 玩家编号 = 获取玩家ID();
    const result = await 请求JSON<{ id: number }>("/log", {
        method: "POST",
        body: {
            ...(玩家编号 > 0 ? 获取玩家校验信息() : {}),
            level: "info",
            log: data,
        },
    });
    return result.data
}

export async function 上传存档请求() {
    const result = await  请求JSON<存档记录>("/save", {
        method: "POST",
        body: {
            ...获取玩家校验信息(),
            day: 存档.天数,
            save_name: 存档.存档名称,
            save: 存档,
        },
    });
    return result.data
}

export async function 上传ExtInfo请求() {
    const result = await 请求JSON<玩家信息>("/ext-info", {
        method: "POST",
        body: {
            ...获取玩家校验信息(),
            扩展信息: 玩家.扩展信息,
        },
    });
    return result.data
}

export async function 修改昵称请求(名称: string) {
    const result = await 请求JSON<玩家信息>("/rename", {
        method: "POST",
        body: {
            ...获取玩家校验信息(),
            名称,
        },
    });
    return result.data
}

export async function 获取随机存档请求(day: number) {
    const { 玩家编号, 用户标识 } = 获取玩家校验信息();
    const query = [
        `玩家编号=${encodeURIComponent(玩家编号)}`,
        `用户标识=${encodeURIComponent(用户标识)}`,
        `day=${encodeURIComponent(day)}`,
    ].join("&");

    const result = await 请求JSON<存档记录>(`/random-save?${query}`);
    return result.data
}

export async function 获取排行榜请求() {
    const { 玩家编号, 用户标识 } = 获取玩家校验信息();
    const query = [
        `玩家编号=${encodeURIComponent(玩家编号)}`,
        `用户标识=${encodeURIComponent(用户标识)}`,
    ].join("&");

    const result = await 请求JSON<排行榜结果>(`/ranking?${query}`);
    return result.data;
}

export async function 获取藏品排行榜请求() {
    const { 玩家编号, 用户标识 } = 获取玩家校验信息();
    const query = [
        `玩家编号=${encodeURIComponent(玩家编号)}`,
        `用户标识=${encodeURIComponent(用户标识)}`,
    ].join("&");

    const result = await 请求JSON<排行榜结果>(`/collection-ranking?${query}`);
    return result.data;
}
