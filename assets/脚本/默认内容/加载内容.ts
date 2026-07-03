import * as 设置管理器 from '../管理器/设置管理器';
import * as 钩子管理器 from '../管理器/钩子管理器';
import * as 玩家管理器 from '../管理器/玩家管理器';

import { 默认套餐表 } from './套餐表';
import { 注册钩子 } from '../管理器/钩子管理器';
import { 默认效果表 } from './效果表';
import { 默认制作表 } from './制作表';
import { 默认伙伴特性表 } from './伙伴特性表';
import { 默认特性表 } from './特性表';
import { 默认天赋表 } from './天赋表';
import { error, game, log } from 'cc';
import { 默认难度表 } from './难度表';
import { 默认特质表 } from './特质表';
import { 默认藏品表 } from './藏品表';
import { 默认成就表 } from './成就表';
import { 默认技能表 } from './技能表';
import {
  上报错误,
  登录请求,
  上传客户端数据,
  获取先驱者请求,
  获取藏品排行榜请求,
  获取排行榜请求,
  确认领取补偿请求,
} from '../方法函数/网络请求';

let 加载完成 = false;

export function 注册钩子函数() {
  默认难度表.forEach((难度项) => {
    const 效果 = 难度项.效果;
    for (const 时机 in 效果) {
      注册钩子(时机 as 钩子管理器.时机名称类型, 效果[时机]);
    }
  });

  默认套餐表.forEach((天赋项) => {
    const 效果 = 天赋项.效果;
    for (const 时机 in 效果) {
      注册钩子(时机 as 钩子管理器.时机名称类型, 效果[时机]);
    }
  });

  默认制作表.forEach((制作项) => {
    const 效果 = 制作项.效果;
    for (const 时机 in 效果) {
      注册钩子(时机 as 钩子管理器.时机名称类型, 效果[时机]);
    }
  });

  默认效果表.forEach((效果) => {
    注册钩子(效果.时机 as 钩子管理器.时机名称类型, 效果.函数);
  });

  默认特性表.forEach((特性项) => {
    const 效果 = 特性项.效果;
    for (const 时机 in 效果) {
      注册钩子(时机 as 钩子管理器.时机名称类型, 效果[时机]);
    }
  });

  默认伙伴特性表.forEach((伙伴特性项) => {
    const 效果 = 伙伴特性项.效果;
    for (const 时机 in 效果) {
      注册钩子(时机 as 钩子管理器.时机名称类型, 效果[时机]);
    }
  });

  默认特质表.forEach((特质项) => {
    const 效果 = 特质项.效果;
    for (const 时机 in 效果) {
      注册钩子(时机 as 钩子管理器.时机名称类型, 效果[时机]);
    }
  });

  默认天赋表.forEach((天赋项) => {
    const 效果 = 天赋项.效果;
    for (const 时机 in 效果) {
      注册钩子(时机 as 钩子管理器.时机名称类型, 效果[时机]);
    }
  });

  默认藏品表.forEach((藏品项) => {
    const 效果 = 藏品项.效果;
    if (效果) {
      for (const 时机 in 效果) {
        注册钩子(时机 as 钩子管理器.时机名称类型, 效果[时机]);
      }
    }
  });

  默认成就表.forEach((成就项) => {
    const 效果 = 成就项.效果;
    if (效果) {
      for (const 时机 in 效果) {
        注册钩子(时机 as 钩子管理器.时机名称类型, 效果[时机]);
      }
    }
  });

  默认技能表.forEach((技能项) => {
    const 效果 = 技能项.效果;
    if (效果) {
      for (const 时机 in 效果) {
        注册钩子(时机 as 钩子管理器.时机名称类型, 效果[时机]);
      }
    }
  });
}

// 解析 server_info
async function 领取藏品奖励() {
  const player = 玩家管理器.玩家;
  const 藏品奖励 = player?.server_info?.collections;
  if (!藏品奖励) return;

  try {
    await 确认领取补偿请求('collections');
    const coll = player.client_info.collections;
    for (const c in 藏品奖励) {
      coll[c] = (coll[c] || 0) + (Number(藏品奖励[c]) || 0);
      player.server_info.collections[c] = 0;
    }
  } catch (e) {
    throw new Error(`领取藏品失败: ${(e as Error).message}`);
  }
}

async function 领取成就奖励() {
  const 成就奖励 = 玩家管理器.玩家?.server_info?.achievements;
  if (!成就奖励) return;
  try {
    await 确认领取补偿请求('achievements');
    let 本地成就列表 = [...(玩家管理器.玩家?.client_info?.achievements ?? [])];
    const keys = Object.keys(成就奖励);

    for (const 奖励名称 of keys) {
      const 对应成就 = 默认成就表?.find((item) => item.名称 === 奖励名称);
      if (!对应成就) continue;

      if (成就奖励[奖励名称]) {
        const 已存在 = 本地成就列表.some((item) => item.name === 奖励名称);
        if (!已存在) {
          const 新成就 = {
            name: 奖励名称,
            description: 对应成就.描述 ?? '',
            achieve_at: Date.now(),
          };
          本地成就列表.push(新成就);
          对应成就.效果?.完成成就?.(对应成就.名称);
        }
      } else {
        本地成就列表 = 本地成就列表.filter((item) => item.name !== 奖励名称);
      }
    }

    if (玩家管理器.玩家.client_info) {
      玩家管理器.玩家.client_info.achievements = 本地成就列表;
    }
    玩家管理器.玩家.server_info.achievements = {};
  } catch (e) {
    throw new Error(`领取成就失败: ${(e as Error).message}`);
  }
}

async function 领取玩家名称() {
  const player = 玩家管理器.玩家;
  const serverInfo = player?.server_info as any;
  const 玩家名称 = String(serverInfo?.player_name).trim();
  if (!玩家名称) return;

  try {
    await 确认领取补偿请求('player_name');
    player.client_info.name = 玩家名称;
    serverInfo.player_name = '';
  } catch (e) {
    throw new Error(`领取玩家名称失败: ${(e as Error).message}`);
  }
}

function compareVersion(v1: string, v2: string): number {
  const arr1 = v1.split('.').map(Number);
  const arr2 = v2.split('.').map(Number);
  const len = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < len; i++) {
    const n1 = arr1[i] ?? 0;
    const n2 = arr2[i] ?? 0;
    if (n1 > n2) return 1;
    if (n1 < n2) return -1;
  }
  return 0;
}

async function 版本校验() {
  try {
    const serverVersion = 玩家管理器.玩家?.server_info?.version;
    const localVersion = 玩家管理器.玩家?.version;
    if (!serverVersion) return;

    const res = compareVersion(localVersion, serverVersion);
    if (res < 0) {
      game.end();
    }
  } catch (e) {
    throw new Error(`版本校验失败: ${(e as Error).message}`);
  }
}

function 全局异常捕获() {
  let lastErrorKey = '';
  let lastReportTime = 0;
  const ERROR_REPORT_COOLDOWN = 3000;
  (window as any).__errorHandler = function (name, line, msg, stack) {
    const now = Date.now();
    const currentKey = `${name}|${line}|${msg}`;

    if (currentKey === lastErrorKey || now - lastReportTime < ERROR_REPORT_COOLDOWN) {
      return;
    }

    lastErrorKey = currentKey;
    lastReportTime = now;

    error(`Error Name: ${name}`);
    error(`Line: ${line}`);
    error(`Message: ${msg}`);
    error(`Stack: ${stack}`);

    上报错误({ name, line, msg, stack })
      .then(() => {
        log('错误上报成功');
      })
      .catch((e) => {
        error('错误上报失败:', e);
      });
  };
}

export async function 加载游戏内容() {
  if (加载完成) return;
  设置管理器.加载设置();
  玩家管理器.加载玩家();
  注册钩子函数();
  全局异常捕获();
  log(钩子管理器.钩子函数对象);
  加载完成 = true;

  try {
    // 尝试登录
    let player = await 登录请求();
    if (!player) {
      throw new Error('登录接口无返回');
    }

    // 断线重传 并且不是 转移玩家
    if (
      (玩家管理器.玩家.client_info?.updated_at || 0) > (player.client_info?.updated_at || 0) &&
      player.id === 玩家管理器.玩家.id
    ) {
      player = await 上传客户端数据();
      if (!player) {
        throw new Error('上传客户端数据无返回');
      }
    }

    if (player.id) 玩家管理器.玩家.id = player.id;
    if (player.uid) 玩家管理器.玩家.uid = player.uid;
    if (player.client_info) 玩家管理器.玩家.client_info = player.client_info;
    if (player.server_info) 玩家管理器.玩家.server_info = player.server_info;
    if (player.created_at) 玩家管理器.玩家.created_at = player.created_at;

    await 领取藏品奖励();
    await 领取成就奖励();
    await 领取玩家名称();
    await 版本校验();
    玩家管理器.保存玩家();
  } catch (e) {
    error('登录失败' + e);
  }

  try {
    玩家管理器.玩家.pioneers = (await 获取先驱者请求()) || [];
    玩家管理器.玩家.leaderboard = (await 获取排行榜请求()) || { list: [], self: 0 };
    玩家管理器.玩家.collection_leaderboard = (await 获取藏品排行榜请求()) || { list: [], self: 0 };
  } catch (e) {
    error('登录失败' + e);
  }
}
