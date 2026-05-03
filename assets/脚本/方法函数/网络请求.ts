export const 服务器地址 = "http://47.93.223.212:3000";

type 请求方法 = "GET" | "POST";

interface 请求选项 {
    method?: 请求方法;
    body?: any;
    timeout?: number;
}

export async function 请求JSON(path: string, options: 请求选项 = {}) {
    const method = options.method || "GET";
    const headers: Record<string, string> = {};
    const requestOptions: RequestInit = { method, headers };

    if (options.body !== undefined) {
        headers["Content-Type"] = "application/json";
        requestOptions.body = JSON.stringify(options.body);
    }

    const 请求 = fetch(`${服务器地址}${path}`, requestOptions).then(async (response) => {
        let data: any = null;
        try {
            data = await response.json();
        } catch (e) {
            data = null;
        }

        if (!response.ok) {
            throw new Error(data?.msg || `网络请求失败：${response.status}`);
        }

        return data;
    });

    if (!options.timeout) {
        return 请求;
    }

    const 超时 = new Promise((_, reject) => {
        setTimeout(() => reject(new Error(`请求超时（${Math.floor(options.timeout / 1000)}秒）`)), options.timeout);
    });

    return Promise.race([请求, 超时]);
}

export function 上报错误(data: any) {
    return 请求JSON("/error", {
        method: "POST",
        body: data,
    });
}

export function 上传存档请求(save: any, setting: any) {
    return 请求JSON("/save", {
        method: "POST",
        body: { save, setting },
    });
}

export function 上传设置请求(setting: any) {
    return 请求JSON("/setting", {
        method: "POST",
        body: { setting },
    });
}

export function 登录请求(uid: string) {
    return 请求JSON("/login", {
        method: "POST",
        body: { uid },
        timeout: 5000,
    });
}

export function 修改昵称请求(uid: string, nickname: string) {
    return 请求JSON("/nickname", {
        method: "POST",
        body: { uid, nickname },
    });
}

export function 获取随机存档请求(day: number) {
    return 请求JSON(`/random-save?day=${encodeURIComponent(day)}`);
}

export function 上传消息请求(data: any) {
    return 请求JSON("/msg", {
        method: "POST",
        body: data,
    });
}
