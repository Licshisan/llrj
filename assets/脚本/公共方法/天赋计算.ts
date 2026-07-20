import { 玩家 } from '../管理器/玩家管理器';
import { 天赋项目类型, 默认天赋表 } from '../默认内容/天赋表';
import { 计算数值 } from '../方法函数/属性计算';
import { 存档, 保存存档 } from '../管理器/存档管理器';
import { 执行钩子 } from '../管理器/钩子管理器';

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
  const 基础天赋点 = 计算数值('基础天赋点', 3);
  const 额外天赋点 = 玩家.client_info?.extra_talent_points || 0;
  if(!额外天赋点){
    玩家.client_info.extra_talent_points = 0
  }
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

export function 升级天赋(天赋名称?: string): { 成功: boolean; 消息: string; 天赋?: typeof 默认天赋表[0] } {
  if (!天赋名称) {
    const 可升阶天赋 = 默认天赋表.filter((t) => {
      const 等级 = 存档.天赋[t.名称] || 0;
      return 等级 > 0 && 等级 < 3;
    });

    if (可升阶天赋.length === 0) {
      return { 成功: false, 消息: '没有可升阶的天赋！' };
    }

    天赋名称 = 可升阶天赋[Math.floor(Math.random() * 可升阶天赋.length)].名称;
  }

  const 天赋 = 默认天赋表.find((t) => t.名称 === 天赋名称);
  if (!天赋) {
    return { 成功: false, 消息: '天赋不存在！' };
  }

  const 当前等级 = 存档.天赋[天赋名称] || 0;
  if (当前等级 >= 3) {
    return { 成功: false, 消息: `【${天赋.名称}】已达到最高等级！` };
  }

  if (当前等级 === 0) {
    return { 成功: false, 消息: `【${天赋.名称}】尚未激活！` };
  }

  const 新等级 = 当前等级 + 1;

  存档.天赋[天赋名称] = 新等级;
  保存存档();
  执行钩子('激活天赋', [天赋名称, 新等级]);

  const 等级名称 = ['', '一阶', '二阶', '三阶'];


  const 说明 = 天赋.说明.split("\n")[新等级 - 1].slice(3)

  return {
    成功: true,
    消息: `天赋进阶成功！【${天赋.名称}】${等级名称[当前等级]} → ${等级名称[新等级]}！${说明}`,
    天赋,
  };
}

export function 使用果实(果实名称: string): { 成功: boolean; 消息: string; 天赋?: typeof 默认天赋表[0] } {
  const 果实品质映射: Record<string, string> = {
    混沌果实: '',
    青纹果实: '普通',
    蓝焰果实: '稀有',
    紫霞果实: '史诗',
    金麟果实: '传说',
    暗蚀果实: '负面',
  };

  const 目标品质 = 果实品质映射[果实名称];
  if (!目标品质 && 果实名称 !== '混沌果实') {
    return { 成功: false, 消息: `未知的果实：${果实名称}！` };
  }

  let 可升阶天赋:天赋项目类型[];
  if (果实名称 === '混沌果实') {
    可升阶天赋 = 默认天赋表.filter((t) => {
      const 等级 = 存档.天赋[t.名称] || 0;
      return 等级 > 0 && 等级 < 3;
    });
  } else if (目标品质 === '负面') {
    可升阶天赋 = 默认天赋表.filter((t) => {
      const 等级 = 存档.天赋[t.名称] || 0;
      return t.负面 && 等级 > 0 && 等级 < 3;
    });
  } else {
    可升阶天赋 = 默认天赋表.filter((t) => {
      const 等级 = 存档.天赋[t.名称] || 0;
      return t.品质 === 目标品质 && 等级 > 0 && 等级 < 3;
    });
  }

  if (可升阶天赋.length === 0) {
    const 品质名称 = 目标品质 === '负面' ? '负面' : (目标品质 || '');
    return { 成功: false, 消息: 果实名称 === '混沌果实' ? '没有可升阶的天赋！' : `没有${品质名称}品质的天赋可以升阶！` };
  }

  const 随机天赋 = 可升阶天赋[Math.floor(Math.random() * 可升阶天赋.length)];
  const 结果 = 升级天赋(随机天赋.名称);
  
  if (结果.成功) {
    return {
      成功: true,
      消息: 结果.消息,
      天赋: 结果.天赋,
    };
  }
  
  return 结果;
}
