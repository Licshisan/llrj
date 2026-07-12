import { _decorator, Component, Node, director, tween, Button, log, UIOpacity, Label } from 'cc';
import { 保存设置, 设置 } from '../管理器/设置管理器';
import { 创建动画文字, 播放文本, 淡入, 淡出 } from '../方法函数/动画效果';
import { 保存存档, 存档 } from '../管理器/存档管理器';
import { 执行钩子 } from '../管理器/钩子管理器';
import { 默认天赋表 } from '../默认内容/天赋表';
import { 计算数值, 计算最大生命, 计算最大精力, 计算最大饥饿 } from '../方法函数/属性计算';
import { 计算天赋等级 } from '../方法函数/等级计算';
import { 保存玩家, 玩家 } from '../管理器/玩家管理器';
import { 计算自选天赋点状态 } from '../公共方法/天赋计算';
const { ccclass, property } = _decorator;

@ccclass('开场')
export class 开场 extends Component {
  @property(Node) 标签: Node = null;
  @property(Node) 文本容器: Node = null;
  @property(Node) 继续按钮: Node = null;
  @property(Node) 刷新按钮: Node = null;
  当前天赋: string[] = [];

  start() {
    this.标签.getComponent(Label).string = '';
    const 开场文本 = [
      '昨天，',
      '和父亲大吵一架后，',
      '我双手空空的逃了出来。',
      '我决定离开这个家，',
      '再也不回去了...',
    ];
    if (存档.游戏难度 === '残酷') {
      开场文本.push('【残酷】难度已开启...');
    }
    if (存档.游戏难度 === '绝境') {
      开场文本.push('【绝境】难度已开启...');
    }

    const 序列 = tween(this.node).delay(0.6);
    for (let i = 0; i < 开场文本.length; i++) {
      序列.call(() => 创建动画文字(this.文本容器, 开场文本[i])).delay(1.6 / 设置.播放速度);
    }
    序列.delay(2.6 / 设置.播放速度);
    序列.call(() => {
      // 播放文本(this.标签, `已自选${设置.锁定天赋.length}/${this.锁定上限}个天赋，开局时会优先出现`);
      this.点击刷新();
    }).delay(2.6 / 设置.播放速度);
    序列.start();

    this.继续按钮.active = false;
    this.刷新按钮.active = false;
    this.继续按钮.on(Button.EventType.CLICK, () => this.点击确定(), this);
    this.刷新按钮.on(Button.EventType.CLICK, () => this.点击刷新(), this);
  }

  点击刷新() {
    this.继续按钮.active = false;
    this.刷新按钮.active = false;
    this.刷新按钮.getComponent(Label).string = '<刷新>';

    this.当前天赋 = [];
    const 临时选中的天赋 = [];

    const 自选天赋列表 = 默认天赋表.filter((item) => 设置.锁定天赋.includes(item.名称));
    const 自选正面天赋列表 = 自选天赋列表.filter((天赋) => !天赋.负面);
    const 自选负面天赋列表 = 自选天赋列表.filter((天赋) => 天赋.负面);
    const 锁定上限 = 计算数值('天赋锁定上限', 3);
    let 随机正面天赋数量 = Math.max(锁定上限 - 自选正面天赋列表.length, 0)

    if(存档.套餐名称 === '三倍套餐'){
      随机正面天赋数量 += 3
    }
    if (Math.random() * 100 < 计算数值('额外天赋概率', 10)) {
      随机正面天赋数量++;
    }

    自选正面天赋列表.forEach((天赋) => {
      this.当前天赋.push(天赋.名称);
      临时选中的天赋.push({
        ...天赋,
        已自选: true,
      });
    });

    const 抽取的正面天赋 = this.随机抽取(
      默认天赋表.filter((i) => {
        const 等级 = 计算天赋等级(i.名称, i.隐藏 ? 0 : 1);
        return !i.负面 && 等级 > 0 && !设置.锁定天赋.includes(i.名称);
      }),
      随机正面天赋数量,
    );
    this.当前天赋.push(...抽取的正面天赋.map((x) => x.名称));
    抽取的正面天赋.forEach((天赋) => {
      临时选中的天赋.push({
        ...天赋,
        已自选: false,
      });
    });

    自选负面天赋列表.forEach((天赋) => {
      this.当前天赋.push(天赋.名称);
      临时选中的天赋.push({
        ...天赋,
        已自选: true,
      });
    });

    const 正面天赋数量 = 自选正面天赋列表.length + 抽取的正面天赋.length;
    const 负面天赋数量 = Math.max(自选负面天赋列表.length, Math.min(正面天赋数量, 3));
    const 剩余负面天赋数量 = Math.max(0, 负面天赋数量 - 自选负面天赋列表.length);
    const 抽取的负面天赋 = this.随机抽取(
      默认天赋表.filter((i) => {
        const 等级 = 计算天赋等级(i.名称, i.隐藏 ? 0 : 1);
        return i.负面 && 等级 > 0 && !设置.锁定天赋.includes(i.名称);
      }),
      剩余负面天赋数量,
    );
    this.当前天赋.push(...抽取的负面天赋.map((x) => x.名称));
    抽取的负面天赋.forEach((天赋) => {
      临时选中的天赋.push({
        ...天赋,
        已自选: false,
      });
    });

    const 序列 = tween(this.node)
      .call(() => 淡出(this.文本容器))
      .delay(3.5 / 设置.播放速度)
      .call(() => {
        this.文本容器.removeAllChildren();
        this.文本容器.active = true;
        this.文本容器.getComponent(UIOpacity).opacity = 255;
      });

    for (let i = 0; i < 临时选中的天赋.length; i++) {
      序列.call(() => {
        const 天赋 = 临时选中的天赋[i];
        let 文本 = `你拥有天赋「${天赋.名称}」`;
        if (天赋.已自选) {
          文本 += '【已锁定】';
        }
        文本 += `\n${天赋?.说明}`;

        创建动画文字(this.文本容器, 文本, 天赋.颜色);
      }).delay(1.5 / 设置.播放速度);
    }
    序列.delay(1.5 / 设置.播放速度);
    序列.call(() => {
      淡入(this.继续按钮);
      淡入(this.刷新按钮);
    });
    序列.start();
  }

  随机抽取<T extends { 品质?: string }>(list: T[], count: number): T[] {
    if (!list || list.length === 0 || count <= 0) return [];

    const 传说天赋概率 = 计算数值('传说天赋概率', 10);
    const 史诗天赋概率 = 计算数值('史诗天赋概率', 10);
    const weightConfig = { 普通: 50, 稀有: 30, 传说: 传说天赋概率, 史诗: 史诗天赋概率 };
    const candidates = [...list];
    const result: T[] = [];

    while (candidates.length > 0 && result.length < count) {
      const 总权重 = candidates.reduce(
        (sum, item) => sum + (weightConfig[item.品质 || '普通'] || 50),
        0,
      );
      let 随机数 = Math.random() * 总权重;
      const 索引 = candidates.findIndex((item) => {
        随机数 -= weightConfig[item.品质 || '普通'] || 50;
        return 随机数 <= 0;
      });
      result.push(candidates.splice(Math.max(索引, 0), 1)[0]);
    }

    return result;
  }

  点击确定() {
    const 天赋点状态 = 计算自选天赋点状态(设置.锁定天赋, 存档.游戏难度);
    if (!天赋点状态.可以进入) {
      播放文本(
        this.标签,
        `自选天赋需要${天赋点状态.消耗}点天赋点，你只有${天赋点状态.基础天赋点 + 天赋点状态.额外天赋点}点，请返回图鉴调整。`,
      );
      return;
    }

    this.当前天赋.forEach((天赋) => {
      const t = 默认天赋表.find((x) => x.名称 === 天赋);
      if (!t) return;
      执行钩子('激活天赋', [天赋]);
      存档.天赋[天赋] = 计算天赋等级(t.名称, t.隐藏 ? 0 : 1);
    });

    存档.精力 = 计算最大精力();
    存档.饥饿 = 计算最大饥饿();
    存档.生命 = 计算最大生命();
    保存设置();
    if (天赋点状态.额外消耗 > 0) {
      玩家.client_info.extra_talent_points = Math.max(
        0,
        玩家.client_info.extra_talent_points - 天赋点状态.额外消耗,
      );
      保存玩家();
    }
    保存存档();
    log(this.当前天赋);
    if (天赋点状态.额外消耗 > 0) {
      this.scheduleOnce(() => director.loadScene('主页'), 1.2 / 设置.播放速度);
    } else {
      director.loadScene('主页');
    }
  }
}
