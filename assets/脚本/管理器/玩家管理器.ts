import { error, sys, warn } from 'cc';
import type { LeaderboardResult, PioneerInfo } from '../方法函数/网络请求';

export const 默认玩家 = {
  id: 0,
  uid: Math.random().toString(36).slice(2, 12),
  client_info: {
    name: '',
    show_text: '',
    win_text: '',
    fail_text: '',
    scores: 0,
    achievements: [] as { name: string; description: string; achieve_at: number }[],
    collections: {} as Record<string, number>,
    play_times: {} as Record<string, number>,
    extra_talent_points: 0,
    created_at: Date.now(),
    updated_at: Date.now(),
    pass_count: 0,
  },
  server_info: {
    title: '',
    zz: 0,
    compensations: {},
    collections: {},
    achievements: {},
    version: '',
  },
  created_at: '',

  // 单独的接口
  pioneers: [] as PioneerInfo[],
  leaderboard: { list: [], self: 0 } as LeaderboardResult,
  collection_leaderboard: { list: [], self: 0 } as LeaderboardResult,
  version: '1.0.5',
};

export let 玩家: typeof 默认玩家 = JSON.parse(JSON.stringify(默认玩家));

export function 加载玩家() {
  try {
    const 玩家字符串 = sys.localStorage.getItem('玩家');
    if (!玩家字符串) {
      error('本地无玩家数据，使用默认玩家');
      return;
    }

    const 玩家对象 = JSON.parse(玩家字符串);
    if (typeof 玩家对象 !== 'object' || 玩家对象 === null) {
      warn('玩家对象格式异常，使用默认玩家');
      return;
    }

    for (const 键 in 默认玩家) {
      if (键 === 'version') {
        玩家对象[键] = 默认玩家[键];
        continue;
      }
      if (
        !Object.prototype.hasOwnProperty.call(玩家对象, 键) ||
        typeof 玩家对象[键] !== typeof 默认玩家[键]
      ) {
        玩家对象[键] = 默认玩家[键];
        error(`玩家项【${键}】异常，已重置为默认值: ${默认玩家[键]}`);
      }
    }

    玩家 = JSON.parse(JSON.stringify(玩家对象));
  } catch (e) {
    error('加载玩家失败', e);
  }
}

export function 保存玩家() {
  try {
    玩家.client_info.updated_at = Date.now();
    const 玩家字符串 = JSON.stringify(玩家);
    sys.localStorage.setItem('玩家', 玩家字符串);
  } catch (e) {
    error('保存玩家失败', e);
  }
}
