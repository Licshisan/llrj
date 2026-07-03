import type { Vec3 } from 'cc';
import {
  Node,
  Label,
  Color,
  tween,
  v3,
  UIOpacity,
  Sprite,
  UITransform,
  find,
  Tween,
  RichText,
} from 'cc';
import { 设置 } from '../管理器/设置管理器';

export type 普通文字样式替换 = {
  匹配: string | RegExp;
  颜色?: Color | string;
  加粗?: boolean;
  斜体?: boolean;
  下划线?: boolean;
  大小?: number;
};

// 逐字播放文本效果
export function 播放文本(目标节点: Node, 文本内容: string, 间隔时间 = 120): void {
  目标节点.active = true;

  const 标签组件 = 目标节点.getComponent(Label);
  if (!标签组件) return;

  // 清除之前的定时器
  标签组件.unscheduleAllCallbacks();

  let 当前索引 = 0;
  标签组件.string = '';

  // 使用节点的 schedule
  标签组件.schedule(
    () => {
      if (文本内容?.length && 当前索引 <= 文本内容.length) {
        const 显示文本 = 文本内容.slice(0, 当前索引++);
        标签组件.string = 显示文本;
      } else {
        // 播放完成，自动停止
        标签组件.unscheduleAllCallbacks();
      }
    },
    间隔时间 / 1000 / 设置.播放速度,
  );
}

// 淡入效果
export function 淡入(目标节点: Node, 持续时长 = 2.4): void {
  if (!目标节点) return;
  Tween.stopAllByTarget(目标节点.getComponent(UIOpacity));
  // 确保有UIOpacity组件
  const 透明组件 = 目标节点.getComponent(UIOpacity) || 目标节点.addComponent(UIOpacity);
  目标节点.active = true;
  透明组件.opacity = 0;

  tween(透明组件)
    .to(持续时长 / 设置.播放速度, { opacity: 255 })
    .start();
}

// 淡出效果
export function 淡出(目标节点: Node, 持续时长 = 2.4): void {
  if (!目标节点) return;
  const 透明组件 = 目标节点.getComponent(UIOpacity) || 目标节点.addComponent(UIOpacity);

  tween(透明组件)
    .to(持续时长 / 设置.播放速度, { opacity: 0 })
    .call(() => (目标节点.active = false))
    .start();
}

// 变色效果
export function 变色(目标节点: Node, 目标颜色: Color): void {
  if (!目标节点) return;
  const 精灵组件 = 目标节点.getComponent(Sprite);
  if (!精灵组件) return;
  tween(精灵组件).to(0.3, { color: 目标颜色 }).start();
}

// 放大缩小效果
export function 放大缩小(目标节点: Node): void {
  if (!目标节点) return;
  tween(目标节点)
    .to(0.2, { scale: v3(1.3, 1.3, 1) })
    .to(0.2, { scale: v3(1, 1, 1) })
    .start();
}

// 从0放大缩小效果
export function 从0放大缩小(目标节点: Node): void {
  if (!目标节点) return;
  目标节点.setScale(v3(0, 0, 0));
  tween(目标节点)
    .to(0.2, { scale: v3(1.3, 1.3, 1) })
    .to(0.1, { scale: v3(1, 1, 1) })
    .start();
}

// 多次闪烁
export function 多次闪烁(目标节点: Node): void {
  if (!目标节点) return;
  const labelComp = 目标节点.getComponent(Label);
  if (!labelComp) return;
  const originalColor = labelComp.color.clone();
  let blinkCount = 0;

  const blinkAction = () => {
    const isBlinkPhase = blinkCount % 2;
    labelComp.color = new Color(255, 255 - 200 * isBlinkPhase, 255 - 200 * isBlinkPhase);
    blinkCount++;

    if (blinkCount < 8) {
      labelComp.scheduleOnce(blinkAction, 60);
    } else {
      labelComp.color = originalColor;
    }
  };

  blinkAction();
}

// 闪烁一次
export function 闪烁一次(目标节点: Node): void {
  if (!目标节点) return;
  const 标签组件 = 目标节点.getComponent(Label);
  if (!标签组件) return;
  const 原始颜色 = 标签组件.color.clone();
  tween(标签组件)
    .call(() => {
      标签组件.color = new Color(255, 55, 55);
    })
    .delay(0.1)
    .call(() => {
      标签组件.color = 原始颜色;
    })
    .start();
}

// 自定义缩放效果
export function 自定义缩放(目标节点: Node, 目标缩放: Vec3, 持续时长 = 0.3): void {
  if (!目标节点) return;
  tween(目标节点).to(持续时长, { scale: 目标缩放 }).start();
}

// 震动效果
export function 震动(目标节点: Node, 间隔时间 = 0.05, 震动强度 = 5): void {
  if (!目标节点 || !目标节点.isValid) return;

  const 原始位置 = 目标节点.position.clone();
  tween(目标节点)
    .call(() => 目标节点.setPosition(原始位置.x + 震动强度, 原始位置.y)) // 位置1
    .delay(间隔时间)
    .call(() => 目标节点.setPosition(原始位置)) // 位置2
    .delay(间隔时间)
    .call(() => 目标节点.setPosition(原始位置.x - 震动强度, 原始位置.y)) // 位置3
    .delay(间隔时间)
    .call(() => 目标节点.setPosition(原始位置)) // 位置4
    .delay(间隔时间)
    .call(() => 目标节点.setPosition(原始位置.x + 震动强度, 原始位置.y)) // 位置5
    .delay(间隔时间)
    .call(() => 目标节点.setPosition(原始位置)) // 位置6
    .start();
}

// 攻击特效 - 随机分散文本和战斗元素
export function 随机分散文本和战斗元素(): void {
  const textElements = find('画布/信息栏')?.children || [];
  const fightElements = find('画布/战斗')?.children || [];

  // 随机分散文本元素
  for (let i = 0; i < textElements.length; i++) {
    const randomX = 500 * Math.random() - 300;
    const randomY = 1000 * Math.random() - 500;
    textElements[i].setPosition(randomX, randomY);
  }

  // 随机分散战斗元素
  for (let j = 0; j < fightElements.length; j++) {
    const randomX = 500 * Math.random() - 300;
    const randomY = 1000 * Math.random() - 500;
    fightElements[j].setPosition(randomX, randomY);
  }
}

// 放大出现
export function 放大出现(目标节点: Node, 持续时长 = 0.4): void {
  if (!目标节点) return;
  目标节点.setScale(v3(0, 0, 0));
  目标节点.active = true;
  tween(目标节点)
    .to(持续时长, { scale: v3(1, 1, 1) })
    .start();
}

// 缩小消失
export function 缩小消失(目标节点: Node, 持续时长 = 0.4): void {
  if (!目标节点) return;
  tween(目标节点)
    .to(持续时长, { scale: v3(0, 0, 0) })
    .start();
}

// 创建动画文字
export function 创建动画文字(
  布局节点: Node,
  文本内容: string,
  颜色: Color = Color.WHITE,
  点击的回调?: Function,
) {
  const 文字节点 = new Node(`label_${布局节点.children.length}`);
  const 标签组件 = 文字节点.addComponent(Label);

  文字节点.setParent(布局节点);
  标签组件.overflow = Label.Overflow.RESIZE_HEIGHT;
  标签组件.horizontalAlign = Label.HorizontalAlign.CENTER;
  标签组件.verticalAlign = Label.VerticalAlign.CENTER;
  标签组件.fontSize = 38;
  标签组件.lineHeight = 50;
  标签组件.string = 文本内容;
  标签组件.color = 颜色 || Color.WHITE;

  const 宽度 = 布局节点.getComponent(UITransform).width || 650;
  文字节点.getComponent(UITransform).setContentSize(宽度, 0);
  标签组件.updateRenderData(true);

  if (点击的回调) {
    文字节点.on(Node.EventType.TOUCH_END, (evt) => {
      点击的回调(文字节点, evt);
    });
  }

  淡入(文字节点);
}

// 创建普通文字
export function 创建普通文字(
  布局节点: Node,
  文本内容: string,
  颜色: Color | 普通文字样式替换[] = Color.WHITE,
  点击的回调?: Function | 普通文字样式替换[],
  样式替换: 普通文字样式替换[] = [],
) {
  const 文字节点 = new Node(`label_${布局节点.children.length}`);
  const 默认颜色 = Array.isArray(颜色) ? Color.WHITE : 颜色 || Color.WHITE;
  const 实际点击回调 = typeof 点击的回调 === 'function' ? 点击的回调 : undefined;
  const 实际样式替换 = Array.isArray(颜色)
    ? 颜色
    : Array.isArray(点击的回调)
      ? 点击的回调
      : 样式替换;
  const 是否使用富文本 = 实际样式替换.length > 0;
  const 宽度 = 布局节点.getComponent(UITransform).width || 650;
  const 文字变换 = 文字节点.getComponent(UITransform) || 文字节点.addComponent(UITransform);

  文字节点.setParent(布局节点);
  文字节点.setPosition(0, 0);
  文字变换.setContentSize(宽度, 0);

  if (是否使用富文本) {
    const 转富文本颜色 = (目标颜色: Color | string): string => {
      if (typeof 目标颜色 === 'string') return 目标颜色.startsWith('#') ? 目标颜色 : `#${目标颜色}`;

      const 转十六进制 = (值: number) =>
        Math.max(0, Math.min(255, Math.round(值)))
          .toString(16)
          .padStart(2, '0');
      return `#${转十六进制(目标颜色.r)}${转十六进制(目标颜色.g)}${转十六进制(目标颜色.b)}`;
    };
    const 转义富文本 = (文本: string): string =>
      文本.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const 转义正则文本 = (文本: string): string => 文本.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const 包裹样式 = (文本: string, 样式?: 普通文字样式替换): string => {
      let 结果 = 转义富文本(文本);
      if (!样式) return 结果;

      if (样式.颜色) 结果 = `<color=${转富文本颜色(样式.颜色)}>${结果}</color>`;
      if (样式.大小) 结果 = `<size=${样式.大小}>${结果}</size>`;
      if (样式.加粗) 结果 = `<b>${结果}</b>`;
      if (样式.斜体) 结果 = `<i>${结果}</i>`;
      if (样式.下划线) 结果 = `<u>${结果}</u>`;
      return 结果;
    };

    type 文本片段 = { 文本: string; 样式?: 普通文字样式替换 };
    let 片段列表: 文本片段[] = [{ 文本: 文本内容 }];

    for (const 样式 of 实际样式替换) {
      if (!样式?.匹配) continue;

      const 正则 =
        typeof 样式.匹配 === 'string'
          ? new RegExp(转义正则文本(样式.匹配), 'g')
          : new RegExp(
              样式.匹配.source,
              样式.匹配.flags.includes('g') ? 样式.匹配.flags : `${样式.匹配.flags}g`,
            );
      const 新片段列表: 文本片段[] = [];

      for (const 片段 of 片段列表) {
        if (片段.样式) {
          新片段列表.push(片段);
          continue;
        }

        let 起点 = 0;
        正则.lastIndex = 0;

        for (let 匹配结果 = 正则.exec(片段.文本); 匹配结果; 匹配结果 = 正则.exec(片段.文本)) {
          const 匹配文本 = 匹配结果[0];
          if (!匹配文本) {
            正则.lastIndex++;
            continue;
          }

          if (匹配结果.index > 起点)
            新片段列表.push({ 文本: 片段.文本.slice(起点, 匹配结果.index) });
          新片段列表.push({ 文本: 匹配文本, 样式 });
          起点 = 匹配结果.index + 匹配文本.length;
        }

        if (起点 < 片段.文本.length) 新片段列表.push({ 文本: 片段.文本.slice(起点) });
      }

      片段列表 = 新片段列表;
    }

    const 富文本组件 = 文字节点.addComponent(RichText);
    富文本组件.fontSize = 32;
    富文本组件.lineHeight = 40;
    富文本组件.horizontalAlign = RichText.HorizontalAlign.LEFT;
    富文本组件.fontColor = 默认颜色;
    富文本组件.maxWidth = 宽度;
    富文本组件.string = 片段列表.map((片段) => 包裹样式(片段.文本, 片段.样式)).join('');
  } else {
    const 标签组件 = 文字节点.addComponent(Label);
    标签组件.string = 文本内容;
    标签组件.fontSize = 32;
    标签组件.lineHeight = 40;
    标签组件.overflow = Label.Overflow.RESIZE_HEIGHT;
    标签组件.horizontalAlign = Label.HorizontalAlign.LEFT;
    标签组件.color = 默认颜色;
  }

  if (实际点击回调) {
    文字节点.on(Node.EventType.TOUCH_END, (evt) => {
      实际点击回调(文字节点, evt);
    });
  }
  if (!是否使用富文本) {
    文字节点.getComponent(Label).updateRenderData(true);
  }
}
