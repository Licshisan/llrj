import { 存档 } from '../管理器/存档管理器';
import { 执行钩子 } from '../管理器/钩子管理器';

export interface 计算容器类型 {
  初始值: number;
  固定加成: number;
  百分比加成: number;
  独立乘区: number;
  最后修正: number;
}

export function 计算数值(计算名称: string, 初始值 = 0): number {
  const 计算容器: 计算容器类型 = {
    初始值: 初始值,
    固定加成: 0,
    百分比加成: 0,
    独立乘区: 1,
    最后修正: 0,
  };
  执行钩子(`计算${计算名称}`, [计算容器]);

  const 修正容器: 计算容器类型 = {
    初始值:
      Math.floor(计算容器.初始值 + 计算容器.固定加成) *
        (1 + 计算容器.百分比加成) *
        计算容器.独立乘区 +
      计算容器.最后修正,
    固定加成: 0,
    百分比加成: 0,
    独立乘区: 1,
    最后修正: 0,
  };
  执行钩子(`计算${计算名称}_修正`, [修正容器]);

  return (
    Math.floor(修正容器.初始值 + 修正容器.固定加成) *
      (1 + 修正容器.百分比加成) *
      修正容器.独立乘区 +
    修正容器.最后修正
  );
}

export const 计算最大攻击 = () => Math.floor(计算数值('最大攻击', 存档.攻击));
export const 计算最大防御 = () => Math.floor(计算数值('最大防御', 存档.防御));
export const 计算最大生命 = () => Math.floor(计算数值('最大生命', 存档.最大生命));
export const 计算最大精力 = () => Math.floor(计算数值('最大精力', 存档.最大精力));
export const 计算最大饥饿 = () => Math.floor(计算数值('最大饥饿', 存档.最大饥饿));
export const 计算最大逃跑 = () => Math.floor(计算数值('最大逃跑', 存档.逃跑));
export const 计算最大压制 = () => Math.floor(计算数值('最大压制', 存档.压制));
