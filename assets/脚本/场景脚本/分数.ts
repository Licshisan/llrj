import { _decorator, Button, Component, director, Node, tween, EditBox } from 'cc';
import { 删除存档, 存档 } from '../管理器/存档管理器';
import { 创建动画文字, 播放文本, 淡入 } from '../方法函数/动画效果';
import { 设置 } from '../管理器/设置管理器';
import { 计算排行榜积分总和, 默认成就表 } from '../默认内容/成就表';
import type { 成就项目类型 } from '../默认内容/成就表';
import { 默认套餐表 } from '../默认内容/套餐表';
import { 上传客户端数据, 获取先驱者请求 } from '../方法函数/网络请求';
import { 保存玩家, 玩家 } from '../管理器/玩家管理器';
import { 对象求和 } from '../方法函数/公共函数';
import { 计算得分 } from '../公共方法/最终得分';
const { ccclass, property } = _decorator;

@ccclass('分数')
export class 分数 extends Component {
  @property(Node) 标签: Node = null;
  @property(Node) 文本容器: Node = null;
  @property(Node) 选项容器: Node = null;
  @property(Node) 输入框: Node = null;

  async start() {
    播放文本(this.标签, '');
    this.文本容器.removeAllChildren();
    this.选项容器.active = false;
    this.输入框.active = false;

    // 得分
    const 得分 = 计算得分();
    const texts = [
      `你的得分为：${得分.最终得分}（答题得分：30，剧情得分:${得分.剧情得分}，属性得分:${得分.属性得分}。满分约100分）`,
    ];
    // 成就
    const 套餐 = 默认套餐表.find((套餐) => 套餐.名称 === 存档.套餐名称);
    if (套餐 && 套餐.娱乐) {
      texts.push(`娱乐套餐【${套餐.名称}】，无法完成成就`);
    } else {
      this.结算藏品();
      const 新完成成就 = this.结算成就();


      // 结档奖励
      const 接档天赋点奖励 = this.结算接档天赋点奖励(得分.最终得分);
      if (接档天赋点奖励 > 0) {
        texts.push(
          `根据【${存档.游戏难度}】难度和最终得分，获得额外天赋点+${接档天赋点奖励}。当前额外天赋点：${玩家.client_info.extra_talent_points}`,
        );
      }


      let 先驱者成就: 成就项目类型[] = [];
      try {
        await 上传客户端数据();
        玩家.pioneers = (await 获取先驱者请求()) || [];
        先驱者成就 = this.结算成就();
      } catch (e) {
        玩家.pioneers = 玩家.pioneers || [];
      }
      const 完成成就 = [...新完成成就, ...先驱者成就];

      保存玩家();
      删除存档(存档.存档名称);

      if (完成成就.length > 0) {
        完成成就.forEach((成就) => {
          let 成就文本 = `新成就【${成就.名称}】：${成就.描述}`;
          if (成就.奖励) {
            成就文本 += `\n「奖励：${成就.奖励}」`;
          }
          texts.push(成就文本);
        });
      } else {
        texts.push('你本次没有新完成的成就哦');
      }
    }

    // 藏品
    if (对象求和(存档.新藏品) > 0) {
      const str = Object.entries(存档.新藏品)
        .map(([k, v]) => `「${k}」*${v}`)
        .join('，');
      texts.push(`本次获得藏品${str}`);
    }
    texts.push('感谢你的游玩，我们下次再见~');

    // 播放
    const 序列 = tween(this.node).delay(1);
    for (let 索引 = 0; 索引 < texts.length; 索引++) {
      序列.call(() => 创建动画文字(this.文本容器, texts[索引])).delay(2.2 / 设置.播放速度);
    }
    序列.call(() => 淡入(this.选项容器)).delay(1);
    序列.start();
    淡入(this.输入框);

    // 点击结束
    this.选项容器.getChildByName('选择按钮2').on(
      Button.EventType.CLICK,
      async () => {
        const 新昵称 = this.输入框.getComponent(EditBox).string?.trim()?.substring(0, 50);
        if (新昵称) {
          玩家.client_info.name = 新昵称;
          await 上传客户端数据();
        }
        director.loadScene('首页');
      },
      this,
    );
  }

  结算藏品() {
    const old = 玩家.client_info.collections ?? {};
    const add = 存档.新藏品 ?? {};
    const res: Record<string, number> = {};
    Object.entries({ ...old, ...add }).forEach(
      ([k, v]) => (res[k] = (old[k] || 0) + (add[k] || 0)),
    );
    玩家.client_info.collections = res;
    存档.新藏品 = {};
    保存玩家();
  }

  结算成就() {
    const 完成成就: 成就项目类型[] = [];
    if (!Array.isArray(玩家.client_info.achievements)) {
      玩家.client_info.achievements = [];
    }
    for (const 成就 of 默认成就表) {
      if (!成就.条件 || 玩家.client_info.achievements.find((c) => c.name === 成就.名称)) continue;
      if (成就.排行类) continue;
      const 新成就 = {
        name: 成就.名称,
        description: 成就.描述,
        achieve_at: Date.now(),
      };

      玩家.client_info.achievements.push(新成就);
      成就.效果?.完成成就?.(成就.名称);
      完成成就.push({
        名称: 成就.名称,
        描述: 成就.描述,
        完成时间: Date.now(),
        条件: true,
        奖励: 成就.奖励,
      });
    }
    玩家.client_info.scores = 计算排行榜积分总和();
    return 完成成就;
  }

  结算接档天赋点奖励(最终得分: number) {
    const 难度奖励表: Record<string, number[]> = {
      普通: [1, 1, 2],
      试炼: [1, 2, 3],
      真实: [2, 3, 4],
      残酷: [2, 3, 5],
      绝境: [3, 4, 6],
    };
    const 奖励列表 = 难度奖励表[存档.游戏难度] || 难度奖励表.普通;
    let 奖励点数 = 0;
    if (最终得分 >= 90) {
      奖励点数 = 奖励列表[2];
    } else if (最终得分 >= 80) {
      奖励点数 = 奖励列表[1];
    } else if (最终得分 >= 70) {
      奖励点数 = 奖励列表[0];
    }

    if (奖励点数 > 0) {
      玩家.client_info.extra_talent_points =
        (玩家.client_info.extra_talent_points || 0) + 奖励点数;
    }

    return 奖励点数;
  }
}
