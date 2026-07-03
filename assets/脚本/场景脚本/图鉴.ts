import { _decorator, Color, Component, Node, Button, director, Label } from 'cc';
import { 创建普通文字, 播放文本 } from '../方法函数/动画效果';
import { 默认特质表 } from '../默认内容/特质表';
import { 默认天赋表 } from '../默认内容/天赋表';
import { 默认藏品表 } from '../默认内容/藏品表';
import { 默认技能表 } from '../默认内容/技能表';
import { 计算天赋等级, 计算技能等级, 计算特质等级 } from '../方法函数/等级计算';
import { 玩家 } from '../管理器/玩家管理器';
import { 计算数值 } from '../方法函数/属性计算';
import { 保存设置, 设置 } from '../管理器/设置管理器';
const { ccclass, property } = _decorator;

@ccclass('图鉴')
export class 图鉴 extends Component {
  @property(Node) 分类节点: Node = null;
  @property(Node) 内容: Node = null;
  @property(Node) 标签: Node = null;
  @property(Node) 返回按钮: Node = null;

  当前分类 = '天赋';
  分类列表 = ['天赋', '特质', '技能', '藏品'];

  start() {
    this.返回按钮.on(
      Button.EventType.CLICK,
      () => {
        director.loadScene('成就');
      },
      this,
    );

    this.初始化分类标签();
    this.刷新内容列表();
  }

  初始化分类标签() {
    this.分类列表.forEach((分类名) => {
      const 标签节点 = this.分类节点.getChildByName(分类名);
      if (标签节点) {
        标签节点.on(
          Node.EventType.TOUCH_END,
          () => {
            if (this.当前分类 !== 分类名) {
              this.当前分类 = 分类名;
              this.刷新内容列表();
              this.更新分类标签状态();
            }
          },
          this,
        );
      } else {
      }
    });
    this.更新分类标签状态();
  }

  更新分类标签状态() {
    this.分类列表.forEach((分类名) => {
      const 标签节点 = this.分类节点.getChildByName(分类名);
      if (标签节点) {
        标签节点.getComponent(Label).color = 分类名 === this.当前分类 ? Color.WHITE : Color.GRAY;
      }
    });
  }

  刷新内容列表() {
    switch (this.当前分类) {
      case '天赋':
        this.渲染天赋列表();
        break;
      case '特质':
        this.渲染特质列表();
        break;
      case '技能':
        this.渲染技能列表();
        break;
      case '藏品':
        this.渲染藏品列表();
        break;
    }
  }

  渲染天赋列表() {
    this.内容.removeAllChildren();
    const 基础天赋点 = 10;
    const 额外天赋点 = 3;
    const 锁定上限 = 3;
    const 总天赋点 = 基础天赋点 + 额外天赋点;
    const 已选天赋列表 = 设置.锁定天赋
      .map((name) => 默认天赋表.find((t) => t.名称 === name))
      .filter(Boolean);
    const 难度列表 = [
      { 名称: '普通', 额外花费: 0 },
      { 名称: '试炼', 额外花费: 1 },
      { 名称: '真实', 额外花费: 2 },
      { 名称: '残酷', 额外花费: 3 },
      { 名称: '绝境', 额外花费: 4 },
    ];
    const 已选天赋文本 =
      已选天赋列表
        .map((天赋) => `- ${天赋.名称}(${天赋.隐藏 ? '隐藏·' : ''}${天赋.品质})`)
        .join('\n') || '- 暂未选择';
    const 难度消耗文本 = 难度列表
      .map((难度) => {
        const 消耗 = 已选天赋列表.reduce((sum, 天赋) => {
          const 基础花费 =
            天赋.负面 || 天赋.品质 === '普通'
              ? 1
              : 天赋.品质 === '稀有'
                ? 2
                : 天赋.品质 === '史诗'
                  ? 3
                  : 天赋.品质 === '传说'
                    ? 4
                    : 1;
          return sum + 基础花费 + 难度.额外花费;
        }, 0);
        const 剩余 = 总天赋点 - 消耗;
        return `- ${难度.名称}：消耗${消耗}点，剩余${剩余}点，${剩余 >= 0 ? '可以进入' : '不可进入'}`;
      })
      .join('\n');

    创建普通文字(
      this.内容,
      `======天赋自选======
天赋点：基础${基础天赋点}点 + 额外${额外天赋点}点 = 共${总天赋点}点
已选择：${设置.锁定天赋.length}/${锁定上限}

当前已选天赋：
${已选天赋文本}

按难度预估消耗：
${难度消耗文本}
==================`,
      Color.GRAY,
      [
        { 匹配: '可以进入', 颜色: Color.GREEN },
        { 匹配: '不可进入', 颜色: Color.RED },
      ],
    );

    创建普通文字(this.内容, `<点击清空已选择的天赋>\n`, Color.GRAY, () => {
      设置.锁定天赋 = [];
      保存设置();
      this.渲染天赋列表();
    });

    默认天赋表.forEach((天赋) => {
      const 等级 = 计算天赋等级(天赋.名称, 天赋.隐藏 ? 0 : 1);
      const 已锁定 = 设置.锁定天赋.includes(天赋.名称);
      if (!天赋.隐藏 || (天赋.隐藏 && 等级 > 0)) {
        let title = '';
        if (天赋.隐藏) {
          title += '隐藏·';
        }
        title += 天赋.品质;
        创建普通文字(
          this.内容,
          `【${天赋.名称}(${title})】${已锁定 ? '【已选择】' : ''}\n${天赋.说明}`,
          等级 > 0 ? 天赋.颜色 : null,
          () => {
            if (等级 == 0) return;
            if (!设置.锁定天赋.includes(天赋.名称)) {
              if (设置.锁定天赋.length + 1 > 锁定上限) return;

              设置.锁定天赋.push(天赋.名称);
            } else {
              设置.锁定天赋 = 设置.锁定天赋.filter((i) => i !== 天赋.名称);
            }
            保存设置();
            this.渲染天赋列表();
          },
          [
            {
              匹配: '【已选择】',
              颜色: Color.GREEN,
              加粗: true,
            },
          ],
        );
      }
    });

    创建普通文字(
      this.内容,
      `======规则说明======
一、点数怎么扣
- 负面/普通：1点；稀有：2点；史诗：3点；传说：4点。
- 难度额外花费：试炼+1，真实+2，残酷+3，绝境+4。
- 进入新游戏时，所选天赋会按当前难度计算总消耗。

二、点数怎么来
- 基础天赋点每次开局都可用，不会被消耗。
- 消耗超过基础天赋点时，会使用额外天赋点。
- 完成成就可获得基础天赋点；通关可累计额外天赋点。
==================`,
      Color.GRAY,
    );
  }

  渲染特质列表() {
    this.内容.removeAllChildren();
    const 开局特质数量 = 计算数值('开局特质数量', 1);
    const 已选特质文本 =
      设置.生效特质
        .map((name) => {
          const 特质 = 默认特质表.find((t) => t.名称 === name);
          return 特质 ? `- ${特质.名称}` : '';
        })
        .filter(Boolean)
        .join('\n') || '- 暂未选择';

    创建普通文字(
      this.内容,
      `======特质选择======
已选择：${设置.生效特质.length}/${开局特质数量}

当前已选特质：
${已选特质文本}
==================`,
      Color.GRAY,
      [{ 匹配: '暂未选择', 颜色: Color.GRAY }],
    );

    默认特质表.forEach((特质) => {
      const 等级 = 计算特质等级(特质.名称);
      const 已选择 = 设置.生效特质.includes(特质.名称);
      创建普通文字(
        this.内容,
        `【${特质.名称}】LV${等级}${已选择 ? '【已选择】' : ''}\n${特质.说明}`,
        等级 > 0 ? Color.YELLOW : null,
        () => {
          if (等级 == 0) return;
          if (!设置.生效特质.includes(特质.名称)) {
            const 开局特质数量 = 计算数值('开局特质数量', 1);
            if (设置.生效特质.length + 1 > 开局特质数量) return;

            设置.生效特质.push(特质.名称);
            // 播放文本(this.标签, `已选择【${特质.名称}】将再下局游戏生效！`);
          } else {
            设置.生效特质 = 设置.生效特质.filter((i) => i !== 特质.名称);
            // 播放文本(this.标签, `已取消选择【${特质.名称}】将再下局游戏生效！`);
          }
          保存设置();
          this.渲染特质列表();
        },
        [
          {
            匹配: '【已选择】',
            颜色: Color.GREEN,
            加粗: true,
          },
        ],
      );
    });

    创建普通文字(
      this.内容,
      `======规则说明======
- 新开一局时，已选择特质会作为开局特质生效。
- 当前存档里的临时状态不会因为这里的选择立刻改变。
==================`,
      Color.GRAY,
    );
  }

  渲染技能列表() {
    this.内容.removeAllChildren();
    const 已激活技能数量 = 默认技能表.filter((技能) => 计算技能等级(技能.名称) > 0).length;

    创建普通文字(
      this.内容,
      `======技能图鉴======
已激活：${已激活技能数量}/${默认技能表.length}
==================`,
      Color.GRAY,
    );

    默认技能表.forEach((技能) => {
      const 等级 = 计算技能等级(技能.名称);
      创建普通文字(
        this.内容,
        `【${技能.名称}】LV${等级}\n${技能.描述}`,
        等级 > 0 ? Color.BLUE : null,
      );
    });

    创建普通文字(
      this.内容,
      `======规则说明======
- LV0 表示未激活，只展示可获得的后续效果。
- LV1 及以上表示已激活，当前等级对应的效果会自动生效。
==================`,
      Color.GRAY,
    );
  }

  渲染藏品列表() {
    this.内容.removeAllChildren();
    const 已拥有藏品数量 = 默认藏品表.filter(
      (藏品) => (玩家.client_info?.collections?.[藏品.名称] || 0) > 0,
    ).length;
    const 藏品总数量 = 默认藏品表.reduce(
      (sum, 藏品) => sum + (玩家.client_info?.collections?.[藏品.名称] || 0),
      0,
    );

    创建普通文字(
      this.内容,
      `======藏品图鉴======
已拥有种类：${已拥有藏品数量}/${默认藏品表.length}
藏品总数：${藏品总数量}
==================`,
      Color.GRAY,
      [
        { 匹配: '已经拥有', 颜色: Color.GREEN, 加粗: true },
        { 匹配: '尚未获得', 颜色: Color.GRAY },
      ],
    );

    默认藏品表.forEach((藏品) => {
      const 数量 = 玩家.client_info?.collections?.[藏品.名称] || 0;
      创建普通文字(
        this.内容,
        `【${藏品.名称}${藏品.类型 ? `(${藏品.类型})` : ''}】${数量 > 0 ? `【已拥有${数量}】` : ''}\n${藏品.描述}`,
        数量 > 0 ? 藏品.颜色 || new Color(190, 96, 80) : Color.GRAY
      );
    });

    创建普通文字(
      this.内容,
      `======规则说明======
- 部分藏品效果按数量叠加，具体以描述为准
==================`,
      Color.GRAY,
    );
  }
}
