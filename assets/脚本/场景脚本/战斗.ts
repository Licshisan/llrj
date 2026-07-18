import { _decorator, Component, Node, Label, Button, ProgressBar } from 'cc';
import { 保存存档, 存档 } from '../管理器/存档管理器';
import { 从0放大缩小, 放大出现, 缩小消失, 震动 } from '../方法函数/动画效果';
import { 主页 } from './主页';
import { 执行钩子 } from '../管理器/钩子管理器';
import {
  计算最大压制,
  计算最大攻击,
  计算最大生命,
  计算最大防御,
  计算最大逃跑,
  计算数值,
} from '../方法函数/属性计算';
import { 设置 } from '../管理器/设置管理器';
import { 抽取物品 } from '../方法函数/公共函数';
import type { 概率类型 } from '../方法函数/公共函数';
import { 默认敌人表 } from '../默认内容/敌人表';
import { 音频管理器 } from './音频';
import { 玩家 } from '../管理器/玩家管理器';
const { ccclass, property } = _decorator;

export interface 战斗角色 {
  名称: string;
  显示名称: string;
  等级: number;
  生命: number;
  攻击: number;
  防御: number;
  最大生命: number;
  逃跑: number;
  压制: number;
  增加声望: number;
  增加属性: number;
  损失健康: number;
  出场语: string;
  方法: string;
  掉落物: 概率类型[];
  下一个敌人?: string;
  战斗初始化: (对局) => void;
  攻击前?: (对局) => void;
  被攻击前?: (对局) => void;
  攻击时?: (对局) => void;
  被攻击时?: (对局) => void;
  攻击后?: (对局) => void;
  被攻击后?: (对局) => void;
  胜利效果?: (对局) => void;
  失败效果?: (对局) => void;
  // 敌人和特性会在这里写入任意战斗临时字段，例如层数、开关和计数。
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  其他: Record<string, any>;

  基础攻击: number,
  基础防御: number,
  基础生命: number,
}

export interface 对局类型 {
  回合数: number;
  是否PVP: boolean;
  PVP敌人存档?: typeof 存档;

  主角: 战斗角色;
  敌人: 战斗角色;

  攻击: {
    初始值: number;
    基础加成: number;
    加法乘率: number;
    独立乘区: number;
    最终修正: number;
    计算结果: number;
  };
  防御: {
    初始值: number;
    基础加成: number;
    加法乘率: number;
    独立乘区: number;
    最终修正: number;
    计算结果: number;
  };
  伤害: {
    初始值: number;
    基础加成: number;
    加法乘率: number;
    独立乘区: number;
    最终修正: number;
    计算结果: number;
  };
  结果文本: string[];
}

@ccclass('战斗')
export class 战斗 extends Component {
  @property(Node) 战斗: Node;
  @property(Node) 敌人标签: Node;
  @property(Node) 血量条: Node;
  @property(Node) 文本容器: Node;
  @property(Node) 标签容器: Node;
  @property(Node) 按钮容器: Node;

  对局: 对局类型;

  进入战斗(敌人名称: string) {
    if (存档.临时数据.大退前敌人 === 敌人名称) {
      存档.其他.战斗重进次数 += 1;
    } else {
      存档.其他.战斗重进次数 = 0;
    }
    存档.临时数据.大退前敌人 = 敌人名称
    保存存档()

    const 敌人配置 = 默认敌人表.find((e) => e.名称 === 敌人名称);

    if (!敌人配置) {
      this.结束战斗(`未知的敌人：【${敌人名称}】（请反馈开发者）`);
      return;
    }

    let 敌人 = null;
    try {
      敌人 = 敌人配置?.创建敌人 ? 敌人配置.创建敌人() : 敌人配置;
    } catch (e) {
      this.结束战斗(`敌人加载失败:${e}（请反馈开发者）`);
      return;
    }

    if (!敌人) {
      this.结束战斗(`未知的敌人：【${敌人名称}】（请反馈开发者）`);
      return;
    }
    存档.当前敌人 = 敌人名称;
    存档.遇敌次数[敌人名称]++;
    存档.其他.战斗总次数++;

    const 战斗主角: 战斗角色 = {
      名称: '你',
      显示名称: 玩家.client_info.name ?? '你',
      等级: Math.floor(存档.经验 / 100),
      方法: '普攻',
      生命: 存档.生命,
      攻击: 计算最大攻击(),
      基础攻击: 计算最大攻击(),
      防御: 计算最大防御(),
      基础防御: 计算最大防御(),
      最大生命: 计算最大生命(),
      基础生命: 计算最大生命(),
      逃跑: 计算最大逃跑(),
      压制: 计算最大压制(),
      增加声望: 1,
      增加属性: 5,
      损失健康: 1,
      出场语: '我是要成为海贼王的男人！',
      掉落物: [] as 概率类型[],
      战斗初始化: (对局) => {
        执行钩子('战斗初始化', [对局]);
      },
      攻击前: (对局) => {
        执行钩子('攻击前', [对局]);
      },
      攻击时: (对局) => {
        执行钩子('攻击时', [对局]);
      },
      攻击后: (对局) => {
        执行钩子('攻击后', [对局]);
      },

      被攻击前: (对局) => {
        执行钩子('被攻击前', [对局]);
      },
      被攻击时: (对局) => {
        执行钩子('被攻击时', [对局]);
      },
      被攻击后: (对局) => {
        执行钩子('被攻击后', [对局]);
      },

      胜利效果: (对局) => {
        执行钩子('战斗胜利', [对局]);
      },
      失败效果: (对局) => {
        执行钩子('战斗失败', [对局]);
      },
      其他: {
        技能点数: 0,
        枪开关: false,
        架势使用次数: {},
      },
    };

    const 战斗敌人: 战斗角色 = {
      名称: 敌人.名称,
      显示名称: 敌人.显示名称 || 敌人.名称,
      等级: 敌人.等级 || 0,
      生命: 敌人.生命,
      方法: 敌人.方法 || '',
      攻击: 敌人.攻击 || 0,
      基础攻击: 敌人.攻击 || 0,
      防御: 敌人.防御 || 0,
      基础防御: 敌人.防御 || 0,
      最大生命: 敌人.最大生命 || 敌人.生命,
      基础生命: 敌人.最大生命 || 敌人.生命,
      逃跑: 敌人.逃跑 || 0,
      压制: 敌人.压制 || 0,
      增加声望: 敌人.增加声望 || 0,
      增加属性: 敌人.增加属性 || 1,
      损失健康: 敌人.损失健康 || 0,
      出场语: 敌人.出场语 || '遭到怪物袭击！',
      掉落物: 敌人.掉落物 || [],
      下一个敌人: 敌人.下一个敌人,
      战斗初始化: (对局) => {
        if (敌人.战斗初始化) {
          敌人.战斗初始化(对局);
        }
      },

      攻击前: (对局) => {
        if (敌人.攻击前) {
          const 攻击前 = 敌人.攻击前(对局);
          if (攻击前) {
            对局.结果文本.push(攻击前);
          }
        }
      },
      攻击时: (对局) => {
        if (敌人.攻击时) {
          const 攻击时 = 敌人.攻击时(对局);
          if (攻击时) {
            对局.结果文本.push(攻击时);
          }
        }
      },
      攻击后: (对局) => {
        if (敌人.攻击后) {
          const 攻击后 = 敌人.攻击后(对局);
          if (攻击后) {
            对局.结果文本.push(攻击后);
          }
        }
      },

      被攻击前: (对局) => {
        if (敌人.被攻击前) {
          const 被攻击前 = 敌人.被攻击前(对局);
          if (被攻击前) {
            对局.结果文本.push(被攻击前);
          }
        }
      },
      被攻击时: (对局) => {
        if (敌人.被攻击时) {
          const 被攻击时 = 敌人.被攻击时(对局);
          if (被攻击时) {
            对局.结果文本.push(被攻击时);
          }
        }
      },
      被攻击后: (对局) => {
        if (敌人.被攻击后) {
          const 被攻击后 = 敌人.被攻击后(对局);
          if (被攻击后) {
            对局.结果文本.push(被攻击后);
          }
        }
      },

      失败效果: (对局) => {
        if (敌人.失败效果) {
          const 失败效果 = 敌人.失败效果(对局);
          if (失败效果) {
            对局.结果文本.push(失败效果);
          }
        }
      },
      胜利效果: (对局) => {
        if (敌人.胜利效果) {
          const 胜利效果 = 敌人.胜利效果(对局);
          if (胜利效果) {
            对局.结果文本.push(胜利效果);
          }
        }
      },
      其他: {
        技能点数: 0,
        ...(敌人.其他 || {}),
      },
    };

    // 重置变量
    this.对局 = {
      回合数: 1,
      是否PVP: !!敌人.是否PVP,
      PVP敌人存档: 敌人.PVP敌人存档,

      主角: 战斗主角,
      敌人: 战斗敌人,

      攻击: {
        初始值: 0,
        基础加成: 0,
        加法乘率: 0,
        独立乘区: 1,
        最终修正: 0,
        计算结果: 0,
      },
      防御: {
        初始值: 0,
        基础加成: 0,
        加法乘率: 0,
        独立乘区: 1,
        最终修正: 0,
        计算结果: 0,
      },
      伤害: {
        初始值: 0,
        基础加成: 0,
        加法乘率: 0,
        独立乘区: 1,
        最终修正: 0,
        计算结果: 0,
      },
      结果文本: [],
    };
    战斗主角.战斗初始化(this.对局);
    执行钩子('战斗敌人属性增强', [this.对局]);
    战斗敌人.战斗初始化(this.对局);
    this.对局.敌人.基础攻击 = this.对局.敌人.攻击
    this.对局.敌人.基础防御 = this.对局.敌人.防御
    this.对局.敌人.基础生命 = this.对局.敌人.生命

    this.界面初始化();
    let res = this.对局.敌人.出场语
    if(存档.其他.战斗重进次数){
      res += `\n已大退（${存档.其他.战斗重进次数}/8）次，大退8次将直接判负`
      if(存档.其他.战斗重进次数 >= 8){
        this.node.getComponent(主页).播放文本(res);
        this.失败结算();
        return
      }
    }
    this.node.getComponent(主页).播放文本(res);
    音频管理器.instance.playByName('show');
  }

  界面初始化() {
    this.node.getComponent(主页).更新();
    this.更新();
    缩小消失(this.node.getComponent(主页).按钮容器);
    放大出现(this.战斗);

    this.文本容器.getChildByName('标签1').getComponent(Label).string = '';
    this.文本容器.getChildByName('标签2').getComponent(Label).string = '';

    // 按钮初始化
    this.按钮容器.getChildByName('架势').active = !!存档.当前架势;
    this.按钮容器.getChildByName('架势').getChildByName('标签').getComponent(Label).string =
      存档.当前架势 ? 存档.当前架势[0] + '  ' + 存档.当前架势[1] : '';
    this.按钮容器.getChildByName('枪').active = !!存档.物品?.枪;
    this.按钮容器.active = true;

    // 绑定事件
    const 攻击按钮 = this.按钮容器.getChildByName('攻击');
    攻击按钮.targetOff(this);
    攻击按钮.on(Button.EventType.CLICK, this.点击攻击, this);

    const 逃跑按钮 = this.按钮容器.getChildByName('逃跑');
    逃跑按钮.targetOff(this);
    逃跑按钮.on(Button.EventType.CLICK, this.点击逃跑, this);

    const 架势按钮 = this.按钮容器.getChildByName('架势');
    架势按钮.targetOff(this);
    架势按钮.on(Button.EventType.CLICK, this.点击架势, this);

    const 枪械按钮 = this.按钮容器.getChildByName('枪');
    枪械按钮.targetOff(this);
    枪械按钮.on(Node.EventType.TOUCH_END, this.点击枪, this);

    // 新增
    this.按钮容器.getChildByName('双枪').active = 存档.天赋.枪弹专家 > 0 && 存档.物品.枪 >= 2;
    const 双枪按钮 = this.按钮容器.getChildByName('双枪');
    双枪按钮.targetOff(this);
    双枪按钮.on(Node.EventType.TOUCH_END, this.点击双枪, this);

    this.按钮容器.getChildByName('居合').active = 存档.天赋.黑刀传人 > 0 && 存档.物品.黑刀 >= 5;
    const 居合按钮 = this.按钮容器.getChildByName('居合');
    居合按钮.targetOff(this);
    居合按钮.on(Node.EventType.TOUCH_END, this.点击居合, this);
  }

  点击攻击() {
    this.node.getComponent(主页).播放文本('');
    this.对局.主角.方法 = this.对局.主角.方法 || '普攻';
    this.对局.攻击 = {
      初始值: this.对局.主角.攻击,
      基础加成: 0,
      加法乘率: 0,
      独立乘区: 1,
      最终修正: 0,
      计算结果: 0,
    };
    this.对局.防御 = {
      初始值: this.对局.敌人.防御,
      基础加成: 0,
      加法乘率: 0,
      独立乘区: 1,
      最终修正: 0,
      计算结果: 0,
    };
    this.对局.伤害 = { 初始值: 0, 基础加成: 0, 加法乘率: 0, 独立乘区: 1, 最终修正: 0, 计算结果: 0 };
    this.对局.结果文本 = [];
    this.对局.主角.攻击前(this.对局);
    this.对局.敌人.被攻击前(this.对局);
    存档.生命 = this.对局.主角.生命;
    this.对局.攻击.计算结果 =
      Math.max(
        (this.对局.攻击.初始值 + this.对局.攻击.基础加成) *
          (1 + this.对局.攻击.加法乘率) *
          this.对局.攻击.独立乘区,
        0,
      ) + this.对局.攻击.最终修正;
    this.对局.防御.计算结果 =
      Math.max(
        (this.对局.防御.初始值 + this.对局.防御.基础加成) *
          (1 + this.对局.防御.加法乘率) *
          this.对局.防御.独立乘区,
        0,
      ) + this.对局.防御.最终修正;
    this.对局.伤害.初始值 = Math.max(this.对局.攻击.计算结果 - this.对局.防御.计算结果, 0);
    this.对局.主角.攻击时(this.对局);
    this.对局.敌人.被攻击时(this.对局);
    存档.生命 = this.对局.主角.生命;
    this.对局.伤害.计算结果 =
      Math.max(
        (this.对局.伤害.初始值 + this.对局.伤害.基础加成) *
          (1 + this.对局.伤害.加法乘率) *
          this.对局.伤害.独立乘区,
        0,
      ) + this.对局.伤害.最终修正;

    if(存档.状态.醉酒){
      this.对局.结果文本.push("【「醉拳」你迷迷糊糊一拳打到了自己身上！】")
      this.对局.主角.生命 -= Math.floor(this.对局.伤害.计算结果);
    }else{
      this.对局.敌人.生命 -= Math.floor(this.对局.伤害.计算结果);
    }

    存档.生命 = this.对局.主角.生命;
    this.对局.主角.攻击后(this.对局);
    this.对局.敌人.被攻击后(this.对局);
    存档.生命 = this.对局.主角.生命;
    //更新渲染
    if (this.对局.主角.方法) {
      this.对局.结果文本.unshift(`${this.对局.主角.名称}使用「${this.对局.主角.方法}」`);
    }
    this.对局.结果文本.push(
      `${this.对局.敌人.名称}受到${Math.floor(this.对局.伤害.计算结果)}点伤害。`,
    );
    this.显示主角文本(this.对局.结果文本.join('\n'));
    this.更新();
    this.node.getComponent(主页).更新();
    从0放大缩小(this.敌人标签);
    this.文本容器.getChildByName('标签2').getComponent(Label).string = '';
    this.按钮容器.active = false;
    if (存档.当前架势) {
      this.对局.主角.其他.架势使用次数[存档.当前架势] =
        (this.对局.主角.其他.架势使用次数[存档.当前架势] || 0) + 1;
    }

    // 特殊
    if (this.对局.主角.其他.已触发居合) {
      this.按钮容器.getChildByName('居合').active = false;
    }

    if (this.对局.主角.方法 === '爆头' || this.对局.主角.方法 === '枪击') {
      音频管理器.instance.playByName('fire');
    } else {
      音频管理器.instance.playByName('attack');
    }

    // 结算
    if (this.对局.敌人.生命 <= 0) {
      this.胜利结算();
      return;
    }
    if (this.对局.主角.生命 <= 0) {
      this.失败结算();
      return;
    }

    if (this.对局.主角.其他.触发连击) {
      this.对局.主角.其他.触发连击 = false;
      this.scheduleOnce(() => this.点击攻击(), 2 / 设置.播放速度);
      return;
    }
    if (this.对局.主角.生命 > 0 && 存档.生命 > 0) {
      this.scheduleOnce(() => this.敌人攻击(), 1.5 / 设置.播放速度);
    }
  }

  敌人攻击() {
    //逃跑判定
    if (Math.random() * 100 < this.计算敌人逃跑成功率()) {
      执行钩子('敌人逃跑成功', [this.对局]);
      this.结束战斗(`${this.对局.敌人.名称}逃跑啦！`);
      return;
    }

    // 攻击准备
    this.对局.敌人.方法 = this.对局.敌人.方法 || '';
    this.对局.攻击 = {
      初始值: this.对局.敌人.攻击,
      基础加成: 0,
      加法乘率: 0,
      独立乘区: 1,
      最终修正: 0,
      计算结果: 0,
    };
    this.对局.防御 = {
      初始值: this.对局.主角.防御,
      基础加成: 0,
      加法乘率: 0,
      独立乘区: 1,
      最终修正: 0,
      计算结果: 0,
    };
    this.对局.伤害 = { 初始值: 0, 基础加成: 0, 加法乘率: 0, 独立乘区: 1, 最终修正: 0, 计算结果: 0 };
    this.对局.结果文本 = [];

    // 振刀
    if(this.对局.主角.其他?.触发振刀){
      this.对局.主角.其他.触发振刀 = false;
      this.对局.结果文本.push(`【「居合·振刀」${this.对局.敌人.显示名称}此次的攻击被完美克制！】`)
    } else {
      this.对局.敌人.攻击前(this.对局);
      this.对局.主角.被攻击前(this.对局);
      存档.生命 = this.对局.主角.生命;
      this.对局.攻击.计算结果 =
        Math.max(
          (this.对局.攻击.初始值 + this.对局.攻击.基础加成) *
            (1 + this.对局.攻击.加法乘率) *
            this.对局.攻击.独立乘区,
          0,
        ) + this.对局.攻击.最终修正;
      this.对局.防御.计算结果 =
        Math.max(
          (this.对局.防御.初始值 + this.对局.防御.基础加成) *
            (1 + this.对局.防御.加法乘率) *
            this.对局.防御.独立乘区,
          0,
        ) + this.对局.防御.最终修正;
      this.对局.伤害.初始值 = Math.max(this.对局.攻击.计算结果 - this.对局.防御.计算结果, 0);
      this.对局.敌人.攻击时(this.对局);
      this.对局.主角.被攻击时(this.对局);
      存档.生命 = this.对局.主角.生命;
      this.对局.伤害.计算结果 =
        Math.max(
          (this.对局.伤害.初始值 + this.对局.伤害.基础加成) *
            (1 + this.对局.伤害.加法乘率) *
            this.对局.伤害.独立乘区,
          0,
        ) + this.对局.伤害.最终修正;
      this.对局.主角.生命 -= Math.floor(this.对局.伤害.计算结果);
      存档.生命 = this.对局.主角.生命;
      this.对局.敌人.攻击后(this.对局);
      this.对局.主角.被攻击后(this.对局);
      存档.生命 = this.对局.主角.生命;
      //更新渲染
      if (this.对局.敌人.方法) {
        this.对局.结果文本.unshift(`${this.对局.敌人.名称}使用「${this.对局.敌人.方法}」`);
      }
      this.对局.结果文本.push(
        `${this.对局.主角.名称}受到${Math.floor(this.对局.伤害.计算结果)}点伤害。`,
      );
    }


    // 钢铁意志
    if (存档.特质.钢铁意志) {
      if (
        存档.其他.当日钢铁意志次数 < 存档.特质.钢铁意志 &&
        !this.对局.主角.其他.已触发钢铁意志 &&
        this.对局.主角.生命 <= 0
      ) {
        存档.其他.当日钢铁意志次数++;
        this.对局.主角.其他.已触发钢铁意志 = true;
        this.对局.主角.生命 = 1;
        this.对局.结果文本.push(
          `【「钢铁意志」锁定1点生命（今日已触发${存档.其他.当日钢铁意志次数}/${存档.特质.钢铁意志}次）】`,
        );
      }
    }



    this.显示敌人文本(this.对局.结果文本.join('\n'));
    this.更新();
    this.node.getComponent(主页).更新();
    // 从0放大缩小(this.标签容器.getChildByName('生命'));
    // 从0放大缩小(this.标签容器.getChildByName('逃跑率'));
    this.node.getComponent(主页).标签.getComponent(Label).string = '';
    震动(this.node.getChildByName('相机'));
    this.对局.回合数++;

    if (this.对局.敌人.生命 <= 0) {
      this.胜利结算();
      return;
    }
    if (this.对局.主角.生命 <= 0) {
      this.失败结算();
      return;
    }
    this.按钮容器.active = true;
  }

  胜利结算() {
    this.对局.结果文本 = ['战斗胜利！'];

    // 连续战
    if (this.对局.敌人.下一个敌人) {
      //敌人失败
      this.对局.敌人.失败效果(this.对局);

      if (存档.生命 <= 0) {
        存档.生命 = 1;
      }

      存档.其他.胜利次数 += 1;
      存档.击败次数[this.对局.敌人.名称] = (存档.击败次数[this.对局.敌人.名称] || 0) + 1;
      this.scheduleOnce(
        () => this.下一个敌人(this.对局.结果文本.join('\n'), this.对局.敌人.下一个敌人),
        2.2 / 设置.播放速度,
      );
      return;
    }

    //主角胜利
    执行钩子('战斗胜利', [this.对局]);

    let res = ''
    // 基本掉落
    const 掉落物文本 = 抽取物品(this.对局.敌人.掉落物);
    if (掉落物文本) {
      res += `获得${掉落物文本}。`;
    }

    // 属性提升
    if (this.对局.敌人.增加属性) {
      const 随机数 = Math.random() * 100;
      if (随机数 < 20) {
        存档.防御 += this.对局.敌人.增加属性;
        res += `防御提高${this.对局.敌人.增加属性}点！`
      } else if (随机数 < 60) {
        存档.攻击 += this.对局.敌人.增加属性;
        res += `攻击提高${this.对局.敌人.增加属性}点！`
      } else {
        存档.最大生命 += this.对局.敌人.增加属性 * 5;
        res += `最大生命值提高${this.对局.敌人.增加属性 * 5}点！`
      }
    }

    // 声望奖励
    if (this.对局.敌人.增加声望) {
      存档.声望 += this.对局.敌人.增加声望;
      res += `声望+${this.对局.敌人.增加声望}！`
    }

    // 经验提升
    if (this.对局.敌人.等级) {
      if (!存档.经验) {
        存档.经验 = 0;
      }

      const 获取经验 = 计算数值('获取经验', this.对局.敌人.等级);
      存档.经验 += 获取经验;
      res += `经验+${获取经验}！`
    }

    if (this.对局.主角.其他?.架势使用次数) {
      const 架势使用次数 = this.对局.主角.其他.架势使用次数 as Record<string, number>;
      const maxKey = Object.entries(架势使用次数).reduce(
        (max, [key, value]) => {
          return value > max.value ? { key, value } : max;
        },
        { key: '', value: 0 },
      ).key;
      if (maxKey) {
        if (存档.架势经验[maxKey] < 150) {
          存档.架势经验[maxKey] += 1;
          res += `${maxKey}架势熟练度+1！`
        } else {
          res += `${maxKey}架势熟练度已达最大值！`
        }
      }
    }
    this.对局.结果文本.push(res);

    //敌人失败
    this.对局.敌人.失败效果(this.对局);

    if (存档.生命 <= 0) {
      存档.生命 = 1;
    }

    存档.其他.胜利次数 += 1;
    存档.击败次数[this.对局.敌人.名称] = (存档.击败次数[this.对局.敌人.名称] || 0) + 1;

    this.scheduleOnce(() => {
      音频管理器.instance.playByName('win');
      this.结束战斗(this.对局.结果文本.join('\n'));
    }, 1.8 / 设置.播放速度);
  }

  失败结算() {
    this.对局.结果文本 = ['战斗失败！'];
    // 角色失败
    执行钩子('战斗失败', [this.对局]);

    let res = ''
    // 损失健康
    if (this.对局.敌人.损失健康 > 0) {
      存档.健康 -= this.对局.敌人.损失健康;
      let 提示 = `健康-${this.对局.敌人.损失健康}！`;
      if (存档.天数 < 20) {
        提示 += `（健康为0时游戏结束）`;
      }
      res += 提示
    }

    // 作者的守护
    if (存档.天数 <= 3) {
      存档.生命 = 计算最大生命();
      存档.健康 += this.对局.敌人.损失健康;
      res += '【作者的守护：游戏前3天战斗失败不会受到惩罚，并且帮你补满血，请开心点玩游戏吧~】'
    }
    this.对局.结果文本.push(res);

    // 敌人胜利
    this.对局.敌人.胜利效果(this.对局);

    if (存档.生命 <= 0) {
      存档.生命 = 1;
    }
    存档.其他.战败次数++;
    if (!存档.战败次数) {
      存档.战败次数 = {};
    }
    存档.战败次数[this.对局.敌人.名称] = (存档.战败次数[this.对局.敌人.名称] || 0) + 1;
    this.scheduleOnce(() => {
      音频管理器.instance.playByName('fail');
      this.结束战斗(this.对局.结果文本.join('\n'));
    }, 1.8);
  }

  点击逃跑() {
    if (存档.架势.猥琐) {
      存档.当前架势 = '猥琐';
    }

    this.按钮容器.active = false;
    this.更新();
    this.node.getComponent(主页).更新();
    存档.其他.逃跑次数++;

    if (Math.random() * 100 > this.计算主角逃跑成功率()) {
      // 逃跑失败
      if (存档.生命 <= 0) {
        this.失败结算();
        return;
      }
      if (this.对局.敌人.生命 <= 0) {
        this.胜利结算();
        return;
      }

      存档.其他.逃跑失败次数++;
      this.对局.结果文本 = ['逃跑失败！'];
      执行钩子('逃跑失败', [this.对局]);
      this.文本容器.getChildByName('标签1').getComponent(Label).string = '';
      this.文本容器.getChildByName('标签2').getComponent(Label).string = '';
      this.node.getComponent(主页).播放文本(this.对局.结果文本.join('\n'));

      this.scheduleOnce(() => this.敌人攻击(), 0.8);
      return;
    }
    // 逃跑成功
    this.对局.结果文本 = ['逃跑成功！'];
    执行钩子('逃跑成功', [this.对局]);
    存档.其他.逃跑成功次数++;
    存档.逃跑++;

    this.结束战斗(this.对局.结果文本.join('\n'));
  }

  点击架势() {
    const 架势列表 = Object.keys(存档.架势).filter((key) => 存档.架势[key]);
    const 当前架势序号 = 架势列表.findIndex((架势) => 架势 === 存档.当前架势);
    let 下一架势序号 = 0;

    if (当前架势序号 !== -1) {
      下一架势序号 = (当前架势序号 + 1) % 架势列表.length;
    }

    存档.当前架势 = 架势列表[下一架势序号];

    this.按钮容器.getChildByName('架势').getChildByName('标签').getComponent(Label).string =
      存档.当前架势 ? `${存档.当前架势[0]}  ${存档.当前架势[1]}` : '';
  }

  点击枪() {
    this.对局.主角.其他.枪开关 = !this.对局.主角.其他.枪开关;
    const 枪械按钮 = this.按钮容器.getChildByName('枪');
    枪械按钮.getComponent(Label).string =
      `（${存档.物品?.子弹 || 0}）\n【${['关', '开'][Number(this.对局.主角.其他.枪开关)]}】`;
  }

  点击双枪() {
    this.对局.主角.其他.开启双枪 = !this.对局.主角.其他.开启双枪;
    const 双枪按钮 = this.按钮容器.getChildByName('双枪');
    双枪按钮.getComponent(Label).string =
      `双枪\n【${['关', '开'][Number(this.对局.主角.其他.开启双枪)]}】`;
  }

  点击居合() {
    this.对局.主角.其他.开启居合 = !this.对局.主角.其他.开启居合;
    const 居合按钮 = this.按钮容器.getChildByName('居合');
    居合按钮.getComponent(Label).string =
      `居合\n【${['关', '开'][Number(this.对局.主角.其他.开启居合)]}】`;
  }

  计算主角逃跑成功率() {
    const e = Math.round(100 * (1 - this.对局.主角.生命 / this.对局.主角.最大生命));
    const 逃跑率 = 50 + this.对局.主角.逃跑 - this.对局.敌人.压制 + e;
    return Math.min(Math.max(逃跑率, 0), 100);
  }

  计算敌人逃跑成功率() {
    const 敌人逃跑成功率 = this.对局.敌人.逃跑 - this.对局.主角.压制;
    return Math.min(Math.max(敌人逃跑成功率, 0), 100);
  }

  结束战斗(text: string) {
    存档.当前敌人 = '';
    存档.临时数据.大退前敌人 = ''
    存档.其他.战斗重进次数 = 0;
    this.战斗.active = false;
    this.对局 = null;

    this.node.getComponent(主页).更新();
    放大出现(this.node.getComponent(主页).按钮容器);
    this.node.getComponent(主页).播放文本(text);
    保存存档();
  }

  下一个敌人(text: string, next: string) {
    this.node.getComponent(主页).更新();
    this.node.getComponent(主页).播放文本(text);
    存档.当前敌人 = next;
    保存存档();
    存档.其他.战斗重进次数 = 0;
    this.进入战斗(next);
  }

  更新() {
    let 名称 = this.对局.敌人.显示名称 || this.对局.敌人.名称;
    if (this.对局.敌人.等级) {
      名称 += ` LV${this.对局.敌人.等级}`;
    }
    名称 += `\nHP${this.对局.敌人.生命}/${this.对局.敌人.最大生命}`;
    if (this.对局.敌人.攻击 !== 0) {
      名称 += `  ATT${this.对局.敌人.攻击}`;
    }
    if (this.对局.敌人.防御 !== 0) {
      名称 += `  DEF${this.对局.敌人.防御}`;
    }

    this.敌人标签.getComponent(Label).string = 名称;
    this.血量条.getComponent(ProgressBar).progress = this.对局.敌人.生命 / this.对局.敌人.最大生命;

    this.标签容器.getChildByName('生命').getComponent(Label).string =
      `HP${存档.生命}/${计算最大生命()}`;
    this.标签容器.getChildByName('逃跑率').getComponent(Label).string =
      `${this.计算主角逃跑成功率()}%第${this.对局.回合数}回合`;

    if (存档.物品?.枪 > 0) {
      this.按钮容器.getChildByName('枪').getComponent(Label).string =
        `（${存档.物品?.子弹 || 0}）\n【${['关', '开'][Number(this.对局.主角.其他.枪开关)]}】`;
    }
    this.按钮容器.getChildByName('架势').getChildByName('标签').getComponent(Label).string =
      存档.当前架势 ? 存档.当前架势[0] + '  ' + 存档.当前架势[1] : '';
  }
  显示主角文本(text: string) {
    const t = this.文本容器.getChildByName('标签1');
    t.getComponent(Label).string = text;
    从0放大缩小(t);
  }
  显示敌人文本(text: string) {
    const t = this.文本容器.getChildByName('标签2');
    t.getComponent(Label).string = text;
    从0放大缩小(t);
  }
}
