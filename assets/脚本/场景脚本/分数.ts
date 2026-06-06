import { _decorator, Button, Component, director, Node, tween, EditBox } from 'cc';
import { 删除存档, 存档 } from '../管理器/存档管理器';
import { 创建动画文字, 播放文本, 淡入 } from '../方法函数/动画效果';
import { 设置 } from '../管理器/设置管理器';
import {  计算最大攻击, 计算最大生命, 计算最大防御 } from '../方法函数/属性计算';
import { 默认成就表 } from '../默认内容/成就表';
import type { 成就项目类型 } from '../默认内容/成就表';
import { 默认套餐表 } from '../默认内容/套餐表';
import { 上传ExtInfo请求, 修改昵称请求 } from '../方法函数/网络请求';
import { 保存玩家, 玩家 } from '../管理器/玩家管理器';
import { 对象求和 } from '../方法函数/公共函数';
const { ccclass, property } = _decorator;

@ccclass('分数')
export class 分数 extends Component {
  @property(Node) 标签: Node = null;
  @property(Node) 文本容器: Node = null;
  @property(Node) 选项容器: Node = null;
  @property(Node) 输入框: Node = null;

  start() {
    播放文本(this.标签, '');
    this.文本容器.removeAllChildren();
    this.选项容器.active = false;

    // 得分
    const 得分 = this.计算得分()
    const texts = [
      `你的得分为：${得分.最终得分}（答题得分：30，剧情得分:${得分.剧情得分}，属性得分:${得分.属性得分}。满分约100分）`,
    ];

    // 成就
    const 套餐 = 默认套餐表.find((套餐) => 套餐.名称 === 存档.套餐名称);
    if (套餐 && 套餐.娱乐) {
      texts.push(`娱乐套餐【${套餐.名称}】，无法完成成就`);
    } else {
      const 完成成就 = this.结算成就();
      if (完成成就.length > 0) {
        完成成就.forEach((成就) => {
          let 成就文本 = `新成就【${成就.名称}】：${成就.描述}`;
          if (成就.奖励) {
            成就文本 += `「奖励：${成就.奖励}」`;
          }
          texts.push(成就文本);
        });
      } else {
        texts.push('你本次没有新完成的成就哦');
      }
    }
    
    // 藏品
    if(对象求和(存档.新藏品) > 0){
      const str = Object.entries(存档.新藏品).map(([k,v])=>`「${k}」*${v}`).join('，')
      texts.push(`本次获得藏品${str}`)
    }
    texts.push('感谢你的游玩，我们下次再见~');

    // 播放
    const 序列 = tween(this.node).delay(1);
    for (let 索引 = 0; 索引 < texts.length; 索引++) {
      序列.call(() => 创建动画文字(this.文本容器, texts[索引], 索引)).delay(2.2 / 设置.播放速度);
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
          await 修改昵称请求(新昵称);
        }
        this.结算成就(true)
        this.结算藏品();
        保存玩家();
        await 上传ExtInfo请求();
        删除存档(存档.存档名称);
        director.loadScene('首页');
      },
      this,
    );
  }

  计算得分() {
    let 剧情得分 = 0;
    for (const key in 存档.剧情) {
      剧情得分 += 存档.剧情[key];
    }
    剧情得分 += 存档.物品.好人卡;
    剧情得分 += Number(存档.剧情.堂主捐钱) * 3;
    剧情得分 += Number(存档.剧情.借钱给中年大叔) * 3;
    剧情得分 += Number(存档.剧情.帮助胖女人) * 3;
    剧情得分 += Number(存档.剧情.再次帮助胖女人) * 3;
    剧情得分 += Number(存档.剧情.选择小头) * 3;
    剧情得分 += Number(存档.剧情.归还礼物) * 3;
    剧情得分 += Number(存档.剧情.打扫老爷爷房间) * 3;
    剧情得分 += Number(存档.剧情.拒绝施舍) * 2;
    剧情得分 += Number(存档.剧情.拒绝偷吃贡品) * 2;
    剧情得分 += Math.floor(存档.伙伴.碧瑶好感 / 5000);
    剧情得分 += Math.floor(存档.伙伴.晓月好感 / 5000);

    let 属性得分 = Math.floor(
      21 - (6 * 计算最大生命()) / 10000 - (6 * 计算最大攻击()) / 2000 - (6 * 计算最大防御()) / 1000,
    );
    属性得分 = Math.min(Math.max(属性得分, 0), 18);

    const 得分 = 剧情得分 + 属性得分 + 30;
    存档.其他.最终得分 = 得分;
    return { 剧情得分, 属性得分, 最终得分: 得分}
  }

  结算藏品() {
    const old = 玩家.扩展信息.藏品 ?? {};
    const add = 存档.新藏品 ?? {};
    const res: Record<string, number> = {};
    Object.entries({...old, ...add}).forEach(([k, v]) => res[k] = (old[k]||0)+(add[k]||0));
    玩家.扩展信息.藏品 = res;
  }

  结算成就(w: boolean = false) {
    const 完成成就: 成就项目类型[] = [];
    for (const 成就 of 默认成就表) {
      if (!成就.条件 || 玩家.扩展信息.成就.find((c) => c.名称 === 成就.名称)) continue;

      const 新成就 = {
        名称: 成就.名称,
        描述: 成就.描述,
        完成时间: Date.now(),
      };

      if(w) {
        玩家.扩展信息.成就.push(新成就);
        成就.效果?.完成成就?.(成就.名称);
      }
      完成成就.push(成就);
    }
    return 完成成就;
  }
}
