import { _decorator, Color, Component, Node, Button, director, Label } from 'cc';
import { 存档 } from '../管理器/存档管理器';
import { 创建普通文字 } from '../方法函数/动画效果';
import { 默认特质表 } from '../默认内容/特质表';
import { 默认天赋表 } from '../默认内容/天赋表';
import { 默认特性表 } from '../默认内容/特性表';
import { 默认难度表 } from '../默认内容/难度表';
import { 默认套餐表 } from '../默认内容/套餐表';
import { 计算数值, 计算最大逃跑 } from '../方法函数/属性计算';
import { 默认藏品表 } from '../默认内容/藏品表';
import { 默认技能表 } from '../默认内容/技能表';
const { ccclass, property } = _decorator;

@ccclass('面板')
export class 面板 extends Component {
  @property(Node) 标签: Node = null;
  @property(Node) 分类节点: Node = null;
  @property(Node) 内容: Node = null;
  @property(Node) 返回按钮: Node = null;
  @property(Node) 退出按钮: Node = null;

  当前分类 = '面板';
  分类列表 = ['面板', '统计', '技能', '战斗'];

  start() {
    this.返回按钮.on(
      Button.EventType.CLICK,
      () => {
        if (globalThis.页面来源 === '特性') {
          director.loadScene('特性');
        } else {
          director.loadScene('主页');
        }
      },
      this,
    );
    this.退出按钮.on(Button.EventType.CLICK, () => director.loadScene('首页'), this);

    this.初始化分类标签();
    this.刷新内容列表();
  }

  初始化分类标签() {
    this.分类列表.forEach((分类名) => {
      const 标签节点 = this.分类节点.getChildByName(分类名);
        console.log(标签节点)

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
    this.内容.removeAllChildren();

    switch (this.当前分类) {
      case '面板':
        this.渲染面板列表();
        break;
      case '统计':
        this.渲染统计列表();
        break;
      case '技能':
        this.渲染技能列表()
        break;
      case '战斗':
        this.渲染战斗列表()
        break;
    }
  }

  // todo 显示赌博信息 网吧信息 营养信息 住房信息 击杀记录
  渲染面板列表() {
    let index = 0;

    const 难度说明 = 默认难度表.find((x) => x.名称 === 存档.游戏难度)?.说明 || '';
    创建普通文字(this.内容, `难度【${存档.游戏难度}】${难度说明}`, index);
    index++;
    const 套餐说明 = 默认套餐表.find((x) => x.名称 === 存档.套餐名称)?.说明 || '';
    创建普通文字(this.内容, `套餐【${存档.套餐名称}】${套餐说明}`, index);
    index++;

    for (let 特质名 in 存档.特质) {
      if (存档.特质[特质名]) {
        const 特质 = 默认特质表.find((x) => x.名称 === 特质名);
        if (特质) {
          const 文字 = `【${特质.名称}LV${存档.特质[特质.名称]}】${特质.说明}`;
          创建普通文字(this.内容, 文字, index, Color.YELLOW);
          index++;
        }
      }
    }

    for (let 天赋名 in 存档.天赋) {
      if (存档.天赋[天赋名]) {
        const 天赋 = 默认天赋表.find((x) => x.名称 === 天赋名);
        if (天赋) {
          const 文字 = `【${天赋名}LV${存档.天赋[天赋.名称]}】${天赋.说明}`;
          创建普通文字(this.内容, 文字, index, 天赋.颜色);
          index++;
        }
      }
    }

    for (let 藏品名 in 存档.藏品) {
      if (存档.藏品[藏品名]) {
        const 藏品 = 默认藏品表.find((x) => x.名称 === 藏品名);
        if (藏品) {
          const 文字 = `【${藏品名}】${藏品.说明}（当前生效${存档.藏品[藏品名]}个）`;
          创建普通文字(this.内容, 文字, index, 藏品.颜色);
          index++;
        }
      }
    }

    for (let 新藏品名 in 存档.新藏品) {
      if (存档.新藏品[新藏品名]) {
        const 新藏品 = 默认藏品表.find((x) => x.名称 === 新藏品名);
        if (新藏品) {
          const 文字 = `新获得藏品【${新藏品名}】*${存档.新藏品[新藏品名]}（下局游戏生效）`;
          创建普通文字(this.内容, 文字, index, 新藏品.颜色);
          index++;
        }
      }
    }
  }

  渲染技能列表() {
    默认技能表.forEach((技能, index) => {
      const 等级 = 存档.技能[技能.名称]
      if(等级 > 0){
        创建普通文字(
          this.内容,
          `【${技能.名称}LV${等级}】${技能.描述}`,
          index,
        );
      }
    });
  }

  渲染统计列表() {
    const 属性表 = [
      {
        名称: '逃跑技术',
        数值: 计算最大逃跑(),
      },
      {
        名称: '罪恶',
        数值: 存档.罪恶,
      },
      {
        名称: '阅历',
        数值: 存档.阅历,
      },
      {
        名称: '烟瘾',
        数值: 存档.烟瘾率,
      },
      {
        名称: '胜利次数',
        数值: 存档.其他.胜利次数,
      },
      {
        名称: '声望',
        数值: 存档.声望,
      },
      {
        名称: '面试经验',
        数值: 存档.面经,
      },
      {
        名称: '战斗经验',
        数值: 存档.经验,
      },
      {
        名称: '战败次数',
        数值: 存档.其他.战败次数,
      },
      {
        名称: '网吧进度',
        数值: 存档.其他.网吧进度,
      },
      {
        名称: '吃果子次数',
        数值: 存档.使用次数.果子,
      },
      {
        名称: '吃熟肉次数',
        数值: 存档.使用次数.熟肉,
      },
      {
        名称: '吃干脆面次数',
        数值: 存档.使用次数.干脆面,
      },
      {
        名称: '使用伤药次数',
        数值: 存档.使用次数.伤药,
      },
      {
        名称: '打出子弹次数',
        数值: 存档.使用次数.子弹,
      },
      {
        名称: '前进探索次数',
        数值: 存档.其他.前进探索次数,
      },
      {
        名称: '战斗次数',
        数值: 存档.其他.战斗总次数,
      },
      {
        名称: '事件次数',
        数值: 存档.其他.随机事件次数,
      },
      {
        名称: '打工成功次数',
        数值: 存档.其他.打工成功次数,
      },
      {
        名称: '消灭蚊子数',
        数值: 存档.其他.消灭蚊子数,
      },
      {
        名称: '暴击率',
        数值: 计算数值('暴击率'),
      },
      {
        名称: '格挡率',
        数值: 计算数值('格挡率'),
      },
      {
        名称: '闪避率',
        数值: 计算数值('闪避率'),
      },
    ];

    属性表.forEach((属性, 序号) => {
      const 文本 = `${属性.名称}: ${属性.数值}`;
      创建普通文字(this.内容, 文本, 序号);
    });
  }

  渲染战斗列表(){
    // todo 显示 【敌人名称】 战斗胜利次数：/战斗失败次数：
  }
}
