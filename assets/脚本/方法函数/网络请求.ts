import { 存档 } from '../管理器/存档管理器';
import { 玩家 } from '../管理器/玩家管理器';

export const 服务器地址 = 'http://124.221.159.129:8080';

type 请求方法 = 'GET' | 'POST';

export interface PlayerInfo {
  id: number;
  uid?: string;
  client_info?: any;
  server_info?: any;
  created_at?: string;
  updated_at?: string;
}

export interface ListItem {
  player_id: number;
  player_name: string;
  score: number;
  rank: number;
}

export interface LeaderboardResult {
  list: ListItem[];
  self: number;
}

export interface PioneerInfo {
  id: number;
  name: string;
  description: string;
  player_id: number;
  player_name: string;
  created_at: string;
}

export interface SaveInfo {
  id: number;
  save_name: string;
  save: any;
  player: any;
}

function 获取玩家校验信息() {
  return {
    uid: 玩家.uid,
    id: 玩家.id,
  };
}

function 拼接查询(参数: Record<string, any>) {
  const 查询 = new URLSearchParams();
  for (const 键 in 参数) {
    const 值 = 参数[键];
    if (值 !== undefined && 值 !== null && 值 !== '') {
      查询.set(键, String(值));
    }
  }
  const 字符串 = 查询.toString();
  return 字符串 ? `?${字符串}` : '';
}

export async function 请求JSON<T = any>(
  路径: string,
  配置: { 方法?: 请求方法; 数据?: any; 超时?: number } = {},
): Promise<T | null> {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    const url = `${服务器地址}${路径}`;
    const method = 配置.方法 || 'GET';
    const timeout = 配置.超时 ?? 5000;

    xhr.timeout = timeout;
    xhr.open(method, url, true);

    // POST 传 JSON 才设置请求头
    if (method === 'POST' && 配置.数据) {
      xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    }

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const res = JSON.parse(xhr.responseText);
          resolve(res as T);
        } catch (e) {
          console.warn('JSON解析失败', url, e);
          resolve(null);
        }
      } else {
        console.warn('请求状态码异常', url, xhr.status);
        resolve(null);
      }
    };

    xhr.onerror = () => {
      console.warn('网络请求错误', url);
      resolve(null);
    };

    xhr.ontimeout = () => {
      console.warn('请求超时', url);
      resolve(null);
    };

    // 发送数据
    if (method === 'POST' && 配置.数据) {
      xhr.send(JSON.stringify(配置.数据));
    } else {
      xhr.send();
    }
  });
}

export async function 登录请求(): Promise<PlayerInfo | null> {
  return 请求JSON<PlayerInfo>('/login', {
    方法: 'POST',
    数据: { uid: 玩家.uid },
    超时: 5000,
  });
}

export async function 上传客户端数据(): Promise<PlayerInfo | null> {
  return 请求JSON<PlayerInfo>('/player/upload', {
    方法: 'POST',
    数据: {
      ...获取玩家校验信息(),
      client_info: 玩家.client_info,
    },
  });
}

export async function 上传存档请求(): Promise<any> {
  return 请求JSON('/save/upload', {
    方法: 'POST',
    数据: {
      ...获取玩家校验信息(),
      day: 存档.天数,
      save_name: 存档.存档名称,
      save_difficulty: 存档.游戏难度,
      save: 存档,
    },
  });
}

export async function 获取排行榜请求(): Promise<LeaderboardResult | null> {
  return 请求JSON<LeaderboardResult>(`/leaderboard${拼接查询(获取玩家校验信息())}`);
}

export async function 获取藏品排行榜请求(): Promise<LeaderboardResult | null> {
  return 请求JSON<LeaderboardResult>(`/collection-leaderboard${拼接查询(获取玩家校验信息())}`);
}

export async function 获取先驱者请求(): Promise<PioneerInfo[] | null> {
  return 请求JSON<PioneerInfo[]>(`/pioneers${拼接查询(获取玩家校验信息())}`);
}

export async function 获取随机存档请求(
  day: number,
  save_difficulty?: string,
): Promise<SaveInfo | null> {
  return 请求JSON<SaveInfo>(
    `/random-save${拼接查询({
      ...获取玩家校验信息(),
      day,
      save_difficulty,
    })}`,
  );
}

export async function 获取榜一大哥请求(save_difficulty?: string): Promise<SaveInfo | null> {
  return 请求JSON<SaveInfo>(
    `/top-save${拼接查询({
      ...获取玩家校验信息(),
      save_difficulty,
    })}`,
  );
}

export async function 上传消息请求(data: any, level = 'info') {
  return 请求JSON('/log', {
    方法: 'POST',
    数据: {
      ...获取玩家校验信息(),
      level,
      log: data,
    },
  });
}

export async function 上报错误(data: any) {
  return 上传消息请求(data, 'error');
}

export async function 确认领取补偿请求(): Promise<PlayerInfo | null> {
  return 请求JSON<PlayerInfo>('/compensations/claim', {
    方法: 'POST',
    数据: 获取玩家校验信息(),
  });
}
