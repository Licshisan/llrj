import { 玩家 } from "../管理器/玩家管理器";

export const 服务器地址 = "http://localhost:3000";

export interface 接口响应<T = any> {
    code: number;
    msg: string;
    data?: T;
}

export interface 玩家信息 {
    id: number;
    uid: string;
    name: string;
    ext_info?: Record<string, any>;
    created_at?: string;
    updated_at?: string;
    last_login_at?: string;
}

export interface 存档记录 {
    id: number;
    player_id: number;
    day: number;
    save_name: string;
    save: any;
    created_at: string;
    player?: {
        id: number;
        name: string;
    };
}

export interface 排行榜玩家 {
    id: number;
    name: string;
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
    const id = Number(玩家?.id || 0);
    return Number.isFinite(id) && id > 0 ? id : 0;
}

function 获取玩家校验信息() {
    return {
        player_id: 获取玩家ID(),
        uid: 玩家.uid,
    };
}

function 提取存档天数(save: any): number {
    const day = Number(save?.day ?? save?.天数 ?? 0);
    return Number.isFinite(day) ? day : 0;
}

function 提取存档名称(save: any): string {
    return String(save?.save_name || save?.存档名称 || "default");
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

export async function 登录请求(uid: string): Promise<玩家信息> {
    const result = await 请求JSON<玩家信息>("/login", {
        method: "POST",
        body: { uid },
        timeout: 5000,
    });
    return result.data;
}

export async function 上报错误(data: any) {
    const player_id = 获取玩家ID();
    return 请求JSON<{ id: number }>("/log", {
        method: "POST",
        body: {
            ...(player_id > 0 ? 获取玩家校验信息() : {}),
            level: "error",
            log: data,
        },
    });
}

export async function 上传消息请求(data: any) {
    const player_id = 获取玩家ID();
    return 请求JSON<{ id: number }>("/log", {
        method: "POST",
        body: {
            ...(player_id > 0 ? 获取玩家校验信息() : {}),
            level: "info",
            log: data,
        },
    });
}

export async function 上传存档请求(save: any, setting?: any) {
    return 请求JSON<存档记录>("/save", {
        method: "POST",
        body: {
            ...获取玩家校验信息(),
            day: 提取存档天数(save),
            save_name: 提取存档名称(save),
            save,
        },
    });
}

export async function 上传ExtInfo请求(ext_info: any) {
    const result = await 请求JSON<玩家信息>("/ext-info", {
        method: "POST",
        body: {
            ...获取玩家校验信息(),
            ext_info,
        },
    });
    return result.data
}

export async function 修改昵称请求(uid: string, name: string) {
    return 请求JSON<玩家信息>("/rename", {
        method: "POST",
        body: {
            player_id: 获取玩家ID(),
            uid,
            name,
        },
    });
}

export async function 获取随机存档请求(day: number) {
    const { player_id, uid } = 获取玩家校验信息();
    const query = [
        `player_id=${encodeURIComponent(player_id)}`,
        `uid=${encodeURIComponent(uid)}`,
        `day=${encodeURIComponent(day)}`,
    ].join("&");

    return 请求JSON<存档记录>(`/random-save?${query}`);
}

export async function 获取排行榜请求() {
    const { player_id, uid } = 获取玩家校验信息();
    const query = [
        `player_id=${encodeURIComponent(player_id)}`,
        `uid=${encodeURIComponent(uid)}`,
    ].join("&");

    const result = await 请求JSON<排行榜结果>(`/ranking?${query}`);
    return result.data;
}

export function 清理存档请求() {
    return 请求JSON<{ deleted: number }>("/save/cleanup", {
        method: "POST",
        body: 获取玩家校验信息(),
    });
}
