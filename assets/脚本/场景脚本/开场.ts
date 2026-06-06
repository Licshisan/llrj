import { _decorator, Component, Node, director, tween, Button, Color, log, UIOpacity } from 'cc';
import { 保存设置, 设置 } from '../管理器/设置管理器';
import { 创建动画文字, 淡入, 淡出 } from '../方法函数/动画效果';
import { 保存存档, 存档 } from '../管理器/存档管理器';
import { 执行钩子 } from '../管理器/钩子管理器';
import { 默认天赋表 } from '../默认内容/天赋表';
import { 计算数值, 计算最大生命, 计算最大精力, 计算最大饥饿 } from '../方法函数/属性计算';
const { ccclass, property } = _decorator;

@ccclass('开场')
export class 开场 extends Component {
  @property(Node) 文本容器: Node = null;
  @property(Node) 继续按钮: Node = null;
  @property(Node) 刷新按钮: Node = null;
  刷新次数 = 0;
  当前天赋: string[] = [];

  start() {
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

    const 序列 = tween(this.node).delay(0.5);
    for (let i = 0; i < 开场文本.length; i++) {
      序列.call(() => 创建动画文字(this.文本容器, 开场文本[i], i)).delay(1.5 / 设置.播放速度);
    }
    序列.delay(2.5 / 设置.播放速度);
    序列.call(() => this.点击刷新()).delay(2.5 / 设置.播放速度);
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

    this.当前天赋 = [];

    let 天赋数量 = 计算数值('天赋数量', Math.random() < 0.5 ? 1 : 0);
    if (Math.random() * 100 < 计算数值('额外天赋概率', 1)) {
      天赋数量++;
    }

    if (设置.保留天赋 && 天赋数量 > 0) {
      this.当前天赋.push(设置.保留天赋);
      天赋数量--;
    }

    const 抽取的正面天赋 = this.随机抽取(
      默认天赋表.filter((i) => !i.负面 && i.等级 > 0 && i.名称 !== 设置.保留天赋),
      天赋数量,
    );
    const 抽取的负面天赋 = this.随机抽取(
      默认天赋表.filter((i) => i.负面 && i.等级 > 0),
      天赋数量,
    );

    this.当前天赋.push(...抽取的正面天赋.map((x) => x.名称));
    this.当前天赋.push(...抽取的负面天赋.map((x) => x.名称));
    const 显示文本 = [];

    if (设置.保留天赋) {
      const 天赋 = 默认天赋表.find((x) => x.名称 === 设置.保留天赋);
      显示文本.push({
        文本: `你保留了天赋「${天赋.名称 || ''}」\n效果：${天赋?.说明 || ''}`,
        颜色: 天赋.颜色,
      });
    }
    抽取的正面天赋.forEach((天赋) => {
      显示文本.push({
        文本: `你同时拥有天赋「${天赋?.名称 || ''}」\n效果：${天赋?.说明 || ''}`,
        颜色: 天赋.颜色,
      });
    });
    抽取的负面天赋.forEach((天赋) => {
      显示文本.push({
        文本: `你得到负面天赋「${天赋?.名称 || ''}」\n效果：${天赋?.说明 || ''}`,
        颜色: 天赋.颜色,
      });
    });
    if (显示文本.length === 0) {
      显示文本.push({
        文本: `你平平无奇`,
        颜色: Color.WHITE,
      });
    }

    const 序列 = tween(this.node)
      .call(() => 淡出(this.文本容器))
      .delay(3.5 / 设置.播放速度)
      .call(() => {
        this.文本容器.removeAllChildren();
        this.文本容器.active = true;
        this.文本容器.getComponent(UIOpacity).opacity = 255;
      });
    for (let i = 0; i < 显示文本.length; i++) {
      序列.call(() => {
        创建动画文字(this.文本容器, 显示文本[i].文本, i, 显示文本[i].颜色);
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
    // 空值判断
    if (!list || list.length === 0) return [];
    // 权重配置：数字越大概率越高
    const weightConfig = { 普通: 50, 稀有: 30, 传说: 10, 史诗: 10 };

    // 1. 生成带权重的候选池
    const weightPool: T[] = [];
    for (const item of list) {
      const weight = weightConfig[item?.品质 || '普通'];
      // 按权重重复放入元素，权重越高出现次数越多，被抽到概率越大
      for (let i = 0; i < weight; i++) {
        weightPool.push(item);
      }
    }

    // 2. 洗牌算法（Fisher-Yates）打乱候选池
    for (let i = weightPool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [weightPool[i], weightPool[j]] = [weightPool[j], weightPool[i]];
    }

    // 3. 使用Set记录已选中的物品索引，确保不重复选取同一物品
    const selectedIndices = new Set<number>();
    const result: T[] = [];

    for (let i = 0; i < weightPool.length && result.length < count; i++) {
      if (!selectedIndices.has(i)) {
        selectedIndices.add(i);
        result.push(weightPool[i]);
      }
    }

    return result;
  }

  点击确定() {
    this.当前天赋.forEach((天赋) => {
      const t = 默认天赋表.find((x) => x.名称 === 天赋);
      执行钩子('激活天赋', [天赋]);
      存档.天赋[天赋] = t.等级;
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
