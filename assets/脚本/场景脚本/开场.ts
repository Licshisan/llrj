import {
  _decorator,
  Component,
  Node,
  director,
  tween,
  Button,
  Color,
  log,
  UIOpacity,
  Label,
} from 'cc';
import { 保存设置, 设置 } from '../管理器/设置管理器';
import { 创建动画文字, 播放文本, 淡入, 淡出 } from '../方法函数/动画效果';
import { 保存存档, 存档 } from '../管理器/存档管理器';
import { 执行钩子 } from '../管理器/钩子管理器';
import { 默认天赋表 } from '../默认内容/天赋表';
import { 计算数值, 计算最大生命, 计算最大精力, 计算最大饥饿 } from '../方法函数/属性计算';
import { 计算天赋等级 } from '../方法函数/等级计算';
const { ccclass, property } = _decorator;

@ccclass('开场')
export class 开场 extends Component {
  @property(Node) 标签: Node = null;
  @property(Node) 文本容器: Node = null;
  @property(Node) 继续按钮: Node = null;
  @property(Node) 刷新按钮: Node = null;
  刷新次数 = 0;
  刷新机会 = 计算数值('刷新机会', 12);
  当前天赋: string[] = [];
  锁定次数 = 3;
  已锁定天赋: string[] = [];
  锁定上限 = 计算数值('锁定天赋数量');
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
      序列.call(() => 创建动画文字(this.文本容器, 开场文本[i], i)).delay(1.6 / 设置.播放速度);
    }
    序列.delay(2.6 / 设置.播放速度);
    序列.call(() => {
      播放文本(this.标签, `你最多可以锁定${this.锁定上限}个天赋`);
      this.点击刷新();
    }).delay(2.6 / 设置.播放速度);
    序列.start();

    this.继续按钮.active = false;
    this.刷新按钮.active = false;
    this.继续按钮.on(Button.EventType.CLICK, () => this.点击确定(), this);
    this.刷新按钮.on(Button.EventType.CLICK, () => this.点击刷新(), this);
  }

  点击刷新() {
    this.刷新次数++;
    this.继续按钮.active = false;
    this.刷新按钮.active = false;
    this.刷新按钮.getComponent(Label).string = `<刷新${this.刷新次数}/${this.刷新机会}>`;

    this.当前天赋 = [];
    const 临时选中的天赋 = [];

    let 天赋数量 = 计算数值('天赋数量', Math.random() * 100 < 80 ? 2 : 1);
    if (Math.random() * 100 < 计算数值('额外天赋概率', 20)) {
      天赋数量++;
    }

    let 正面天赋数量 = 天赋数量;
    const 负面天赋数量 = Math.min(天赋数量, 3);

    const 保留天赋 = 默认天赋表.find((x) => x.名称 === 设置.保留天赋);
    if (保留天赋 && 天赋数量 > 0) {
      this.当前天赋.push(设置.保留天赋);
      临时选中的天赋.push({
        ...保留天赋,
        已锁定: false,
        已固定: true,
      });
      正面天赋数量--;
    }

    const 锁定天赋列表 = 默认天赋表.filter((item) => this.已锁定天赋.includes(item.名称));
    锁定天赋列表.forEach((天赋, index) => {
      if (天赋数量 > 0) {
        this.当前天赋.push(天赋.名称);
        临时选中的天赋.push({
          ...天赋,
          已锁定: true,
          已固定: false,
        });
        正面天赋数量--;
      }
    });

    const 抽取的正面天赋 = this.随机抽取(
      默认天赋表.filter((i) => {
        const 等级 = 计算天赋等级(i.名称, i.隐藏 ? 0 : 1);
        return !i.负面 && 等级 > 0 && i.名称 !== 设置.保留天赋 && !this.已锁定天赋.includes(i.名称);
      }),
      正面天赋数量,
    );
    this.当前天赋.push(...抽取的正面天赋.map((x) => x.名称));
    抽取的正面天赋.forEach((天赋) => {
      临时选中的天赋.push({
        ...天赋,
        已锁定: false,
        已固定: false,
      });
    });

    const 抽取的负面天赋 = this.随机抽取(
      默认天赋表.filter((i) => {
        const 等级 = 计算天赋等级(i.名称, i.隐藏 ? 0 : 1);
        return i.负面 && 等级 > 0;
      }),
      负面天赋数量,
    );
    this.当前天赋.push(...抽取的负面天赋.map((x) => x.名称));
    抽取的负面天赋.forEach((天赋) => {
      临时选中的天赋.push({
        ...天赋,
        已锁定: false,
        已固定: false,
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
        if (天赋.已固定) {
          文本 += '【已固定】';
        }
        if (天赋.已锁定) {
          文本 += '【已固定】';
        }
        文本 += `\n效果：${天赋?.说明}`;

        创建动画文字(this.文本容器, 文本, i, 天赋.颜色, (文字节点) => {
          this.切换天赋锁定(天赋, 文字节点);
        });
      }).delay(1.5 / 设置.播放速度);
    }
    序列.delay(1.5 / 设置.播放速度);
    序列.call(() => {
      淡入(this.继续按钮);
      if (this.刷新次数 < this.刷新机会) {
        淡入(this.刷新按钮);
      }
    });
    序列.start();
  }

  切换天赋锁定(
    item: {
      名称: string;
      说明: string;
      颜色: string;
      已锁定: boolean;
      已固定: boolean;
      负面: boolean;
    },
    node: Node,
  ) {
    if (!item.名称) return;
    if (item.已固定) return;
    if (item.负面) return;

    const 已锁定数量 = this.已锁定天赋.length;

    // 场景1：当前已锁定，点击解锁
    if (item.已锁定) {
      item.已锁定 = false;
      this.已锁定天赋 = this.已锁定天赋.filter((name) => name !== item.名称);
      播放文本(this.标签, `已取消锁定：${item.名称}`);

      let 文本 = `你拥有天赋「${item.名称}」`;
      if (item.已固定) {
        文本 += '【已固定】';
      }
      if (item.已锁定) {
        文本 += '【已锁定】';
      }
      文本 += `\n效果：${item?.说明}`;

      node.getComponent(Label).string = 文本;
      return;
    }

    // 场景2：未锁定，判断是否达到锁定上限
    if (已锁定数量 >= this.锁定上限) {
      播放文本(this.标签, `最多只能锁定${this.锁定上限}个天赋！`);
      return;
    }

    // 场景3：正常锁定
    item.已锁定 = true;
    this.已锁定天赋.push(item.名称);
    播放文本(this.标签, `成功锁定天赋：${item.名称}`);

    let 文本 = `你拥有天赋「${item.名称}」`;
    if (item.已固定) {
      文本 += '【已固定】';
    }
    if (item.已锁定) {
      文本 += '【已锁定】';
    }
    文本 += `\n${item?.说明}`;

    node.getComponent(Label).string = 文本;
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
    this.当前天赋.forEach((天赋) => {
      const t = 默认天赋表.find((x) => x.名称 === 天赋);
      if (!t) return;
      执行钩子('激活天赋', [天赋]);
      存档.天赋[天赋] = 计算天赋等级(t.名称, t.隐藏 ? 0 : 1);
    });

    存档.精力 = 计算最大精力();
    存档.饥饿 = 计算最大饥饿();
    存档.生命 = 计算最大生命();
    设置.保留天赋 = '';
    保存设置();
    保存存档();
    log(this.当前天赋);
    director.loadScene('主页');
  }
}
