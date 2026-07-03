import { 玩家 } from '../管理器/玩家管理器';
import { 默认天赋表 } from '../默认内容/天赋表';
import { 计算数值 } from './属性计算';

const 难度额外花费表: Record<string, number> = {
  普通: 0,
  试炼: 1,
  真实: 2,
  残酷: 3,
  绝境: 4,
};

function 计算天赋基础花费(天赋: { 负面?: boolean; 品质?: string }): number {
  if (天赋.负面 || 天赋.品质 === '普通') return 1;
  if (天赋.品质 === '稀有') return 2;
  if (天赋.品质 === '史诗') return 3;
  if (天赋.品质 === '传说') return 4;
  return 1;
}

function 计算自选天赋消耗(天赋名称列表: string[], 难度: string): number {
  const 难度额外花费 = 难度额外花费表[难度] || 0;
  return 天赋名称列表.reduce((sum, name) => {
    const 天赋 = 默认天赋表.find((t) => t.名称 === name);
    if (!天赋) return sum;
    return sum + 计算天赋基础花费(天赋) + 难度额外花费;
  }, 0);
}

export function 计算自选天赋点状态(天赋名称列表: string[], 难度: string) {
  const 基础天赋点 = 计算数值('基础天赋点');
  const 额外天赋点 = 玩家.client_info.extra_talent_points || 0;
  const 锁定上限 = 计算数值('天赋锁定上限', 3);
  const 消耗 = 计算自选天赋消耗(天赋名称列表, 难度);
  const 额外消耗 = Math.max(0, 消耗 - 基础天赋点);

  return {
    基础天赋点: 基础天赋点,
    额外天赋点: 额外天赋点,
    锁定上限: 锁定上限,
    消耗,
    剩余: 基础天赋点 + 额外天赋点 - 消耗,
    额外消耗,
    可以进入: 消耗 <= 基础天赋点 + 额外天赋点,
  };
}
