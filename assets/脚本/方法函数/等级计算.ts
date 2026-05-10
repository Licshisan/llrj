import { 执行钩子 } from "../管理器/钩子管理器";

export interface 等级计算容器类型 {
    是否解锁: boolean,
    基础等级: number,
    额外等级: number,
}

export function 计算等级(计算类型: string, 计算名称: string): number {
    const 等级计算容器: 等级计算容器类型 = {
        是否解锁: false,
        基础等级: 1,
        额外等级: 0,
    };
    执行钩子(`计算${计算类型}等级`, [计算名称, 等级计算容器]);
    return 等级计算容器.是否解锁 ? 等级计算容器.基础等级 + 等级计算容器.额外等级 : 0
}

export const 计算天赋等级 = (计算名称: string) => 计算等级("天赋", 计算名称)
export const 计算技能等级 = (计算名称: string) => 计算等级("技能", 计算名称)
export const 计算特质等级 = (计算名称: string) => 计算等级("特质", 计算名称)
