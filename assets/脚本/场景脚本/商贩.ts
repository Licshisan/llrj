import { _decorator, Component, Label, Node, Button, director, Prefab, instantiate } from 'cc';
import { 存档, 保存存档 } from '../管理器/存档管理器';
import { 播放文本 } from '../方法函数/动画效果';
import { 生成旧书店列表 } from '../公共方法/旧书店';
const { ccclass, property } = _decorator;

export interface 商贩项目类型 {
  名称: string | ((peddler: 商贩) => string);
  购买: (peddler: 商贩) => string;
  条件?: (peddler: 商贩) => boolean;
}

@ccclass('商贩')
export class 商贩 extends Component {
  @property(Node) 标签: Node = null;
  @property(Node) 属性一: Node = null;
  @property(Node) 属性二: Node = null;

  @property(Node) 按钮容器: Node = null;
  @property(Node) 返回按钮: Node = null;
  @property(Prefab) 选择按钮预制体: Prefab = null;

  sellOut = false;
  itemName = '';
  itemNum = 0;
  itemPrice = 0;
  江湖物品 = "青竹符"
  江湖物品售罄 = false;
  神秘商人已购列表: Record<string, number> = {};

  private 按钮列表: {
    按钮: Node;
    项目: 商贩项目类型;
  }[] = [];

  onLoad() {
    this.更新();
    this.按钮容器.removeAllChildren();
    this.重置();
    this.初始化按钮();
    this.返回按钮.on(Button.EventType.CLICK, () => director.loadScene('主页'), this);
  }

  private 初始化按钮() {
    this.按钮列表 = [];
    const 列表映射: Record<string, 商贩项目类型[]> = {
      '商贩': 商贩列表,
      '黑市': 黑市列表,
      '江湖商贩': 江湖商贩列表,
      '旧书店': 生成旧书店列表(),
      '神秘商人': 生成神秘商人列表(),
    };

    if (globalThis.商贩名称 === '商贩') {
      播放文本(this.标签, '“来看看有没有你需要的东西~”');
    } else if (globalThis.商贩名称 === '旧书店') {
      播放文本(this.标签, '“欢迎光临，这里有一些奇书...”');
    } else if (globalThis.商贩名称 === '神秘商人') {
      播放文本(this.标签, '“哈哈，这位客官，我这里有些稀罕玩意儿...”');
    }

    const 当前列表 = 列表映射[globalThis.商贩名称] || [];

    const 过滤列表 = 当前列表.filter((项目) => {
      if (项目.条件 && !项目.条件(this)) {
        return false;
      }
      return true;
    });

    过滤列表.forEach((项目) => {
      const 选项按钮 = instantiate(this.选择按钮预制体);
      const 名称 = typeof 项目.名称 === 'function' ? 项目.名称(this) : 项目.名称;
      选项按钮.getChildByName('标签').getComponent(Label).string = 名称;
      选项按钮.on(
        Button.EventType.CLICK,
        () => {
          const text = 项目.购买(this);
          播放文本(this.标签, text);
          this.更新();
          this.刷新所有按钮名称();
          保存存档();
        },
        this,
      );
      选项按钮.setParent(this.按钮容器);
      this.按钮列表.push({ 按钮: 选项按钮, 项目 });
    });
  }

  private 刷新所有按钮名称() {
    this.按钮列表.forEach((映射) => {
      const 名称 = typeof 映射.项目.名称 === 'function' ? 映射.项目.名称(this) : 映射.项目.名称;
      映射.按钮.getChildByName('标签').getComponent(Label).string = 名称;
    });
  }

  重置() {
    this.sellOut = false;

    const list: [string, number, number][] = [
      ['放大镜', 1, 50],
      ['熟肉', 3, 12],
      ['晓月手链', 1, 50],
      ['幸运石', 1, 50],
      ['啤酒', 1, 30],
      ['伤药', 4, 12],
      ['滑稽裤', 1, 60],
    ];
    const index = Math.floor(Math.random() * list.length);
    const item = list[index];
    const discount = Math.random();

    this.itemName = item[0];
    this.itemNum = item[1];
    this.itemPrice = Math.floor(item[2] * Math.max(0.6, Math.min(1.3, discount)));

    const a = ['青竹符', '铁衣鳞', '玄水佩']
    this.江湖物品 = a[Math.floor(Math.random() * a.length)]
  }

  更新() {
    this.属性一.getComponent(Label).string = '';
    if (globalThis.商贩名称 === '商贩') {
      this.属性一.getComponent(Label).string = '';
    } else if (globalThis.商贩名称 == '黑市') {
      this.属性一.getComponent(Label).string = `白色粉末：${存档.物品.白色粉末}`;
    } else if (globalThis.商贩名称 == '旧书店') {
      this.属性一.getComponent(Label).string = '欢迎光临旧书店~';
    } else if (globalThis.商贩名称 == '江湖小贩') {
      this.属性一.getComponent(Label).string = `江湖残页：${存档.物品.江湖残页}`;
    }
    this.属性二.getComponent(Label).string = `金钱：${(存档.金钱 / 10).toFixed(1)}元`;
  }
}

const 商贩列表: 商贩项目类型[] = [
  {
    名称: () => `出售伤药（每个1毛，已拥有${存档.物品.伤药 || 0}）`,
    购买: () => {
      if (!存档.物品.伤药 || 存档.物品.伤药 <= 0) {
        return `道具不足！`;
      }
      const e = Math.floor(Math.min(存档.物品.伤药, 存档.物品.伤药 * 0.5 + 1));
      存档.金钱 += e;
      存档.物品.伤药 -= e;
      return `出售【伤药】*${e}，获得${e}毛`;
    },
  },
  {
    名称: () => {
      if(存档.其他.前进探索次数 % 2 === 0) {
        return  `出售烟（每个6毛，已拥有${存档.物品.香烟 || 0}）`
      }else{
        return  `出售啤酒（每个2毛，已拥有${存档.物品.啤酒 || 0}）`
      }
    },
    购买: () => {
      if(存档.其他.前进探索次数 % 2 === 0){
        if (!存档.物品.香烟 || 存档.物品.香烟 <= 0) {
          return `道具不足！`;
        }
        存档.金钱 += 6;
        存档.物品.香烟 -= 1;
        return '出售【烟】*1，获得6毛';
      } else {
        if (!存档.物品.啤酒 || 存档.物品.啤酒 <= 0) {
          return `道具不足！`;
        }
        存档.金钱 += 2;
        存档.物品.啤酒 -= 1;
        return '出售【啤酒】*1，获得2毛';
      }
    },
  },
  {
    名称: (peddler) => {
      if (peddler.sellOut) {
        return '已售罄';
      }
      return `${peddler.itemName}*${peddler.itemNum}（活动价${(peddler.itemPrice / 10).toFixed(1)}元，限购！！！）`;
    },
    购买: (peddler) => {
      if (peddler.sellOut) {
        return '本次活动每人只能购买一次哦，下次再来吧~';
      }
      if (存档.金钱 < peddler.itemPrice) {
        return `余额不足...`;
      }
      存档.金钱 -= peddler.itemPrice;
      if (!存档.物品[peddler.itemName]) {
        存档.物品[peddler.itemName] = 0;
      }
      存档.物品[peddler.itemName] += peddler.itemNum;
      peddler.sellOut = true;
      return `获得【${peddler.itemName}*${peddler.itemNum}】！`;
    },
  },
];

const 黑市列表: 商贩项目类型[] = [
  {
    名称: '白色粉末换1元',
    购买: () => {
      if (存档.物品.白色粉末 < 1) {
        return '白色粉末不足！';
      }
      存档.物品.白色粉末 -= 1;
      存档.金钱 += 10;
      return '获得10元！';
    },
  },
  {
    名称: '《少妇白洁》（需4白色粉末）',
    购买: () => {
      if (存档.其他.少妇白洁) {
        return '你已拥有此书！';
      }
      if (存档.物品.白色粉末 < 4) {
        return '白色粉末不足！';
      }
      存档.物品.白色粉末 -= 4;
      存档.其他.少妇白洁 = 1;
      return '获得《少妇白洁》！请到看书界面使用。';
    },
  },
  {
    名称: '《搬砖，从入门到放弃》（需6元）',
    购买: () => {
      if (存档.其他.搬砖从入门到放弃) {
        return '你已拥有此书！';
      }
      if (存档.金钱 < 60) {
        return '金钱不足！';
      }
      存档.金钱 -= 60;
      存档.其他.搬砖从入门到放弃 = 1;
      return '获得《搬砖，从入门到放弃》！请到看书界面使用。';
    },
  },
  {
    名称: '《中国居民膳食指南1997版》（需6元）',
    购买: () => {
      if (存档.其他.中国居民膳食指南1997版) {
        return '你已拥有此书！';
      }
      if (存档.金钱 < 60) {
        return '金钱不足！';
      }
      存档.金钱 -= 60;
      存档.其他.中国居民膳食指南1997版 = 1;
      return '获得《中国居民膳食指南1997版》！请到看书界面使用。';
    },
  },
  {
    名称: () => `枪（需${存档.物品.枪 * 10 + 10}个白色粉末）`,
    购买: () => {
      const need = 存档.物品.枪 * 10 + 10;
      if (存档.物品.白色粉末 < need) {
        return '白色粉末不足！';
      }
      存档.物品.白色粉末 -= need;
      存档.物品.枪 = (存档.物品.枪 || 0) + 1;
      return '获得「枪」！';
    },
  },
  {
    名称: '购买子弹（0.5元/个）',
    购买: () => {
      if (存档.金钱 < 5) {
        return '钱不够！';
      }
      存档.金钱 -= 5;
      存档.物品.子弹 = (存档.物品.子弹 || 0) + 1;
      return '获得「子弹」*1';
    },
  },
  {
    名称: () => `出售所有漂亮石头（每个1毛，已有${存档.物品.漂亮石头}个）`,
    购买: () => {
      const count = 存档.物品.漂亮石头;
      if (count <= 0) {
        return '你身上没有漂亮石头~';
      }
      const money = count;
      存档.金钱 += money;
      存档.物品.漂亮石头 = 0;
      return `${count}个漂亮石头出售成功，获得${(count / 10).toFixed(1)}元！`;
    },
  },
];

const 江湖商贩列表: 商贩项目类型[] = [
  {
    名称: '《青竹步功法入门》（需5江湖残页）',
    购买: () => {
      if (存档.其他.青竹步功法入门) {
        return '你已拥有此书！';
      }
      if (存档.物品.江湖残页 < 5) {
        return '残页不足！';
      }
      存档.物品.江湖残页 -= 5;
      存档.其他.青竹步功法入门 += 1;
      return '获得《青竹步功法入门》！请在制作界面使用。';
    },
  },
  {
    名称: '《铁衣功功法入门》（需5江湖残页）',
    购买: () => {
      if (存档.其他.铁衣功功法入门) {
        return '你已拥有此书！';
      }
      if (存档.物品.江湖残页 < 5) {
        return '残页不足！';
      }
      存档.物品.江湖残页 -= 5;
      存档.其他.铁衣功功法入门 += 1;
      return '获得《铁衣功功法入门》！请在制作界面使用。';
    },
  },
  {
    名称: '《玄水诀功法入门》（需5江湖残页）',
    购买: () => {
      if (存档.其他.玄水诀功法入门) {
        return '你已拥有此书！';
      }
      if (存档.物品.江湖残页 < 5) {
        return '残页不足！';
      }
      存档.物品.江湖残页 -= 5;
      存档.其他.玄水诀功法入门 = 1;
      return '获得《玄水诀功法入门》！请在制作界面使用。';
    },
  },
  {
    名称: () => `出售江湖残页（每个5毛，已拥有${存档.物品.江湖残页}）`,
    购买: () => {
      if (存档.物品.江湖残页 <= 0) {
        return '残页不足！';
      }
      存档.物品.江湖残页 -= 1;
      存档.金钱 += 5;
      return '出售【残页】*1，获得5毛';
    },
  },
  {
    名称: (self) => {
      if (self.江湖物品售罄) {
        return '已售罄';
      }
      return `购买「${self.江湖物品}」（需5残页）限购1个！`;
    },
    购买: (self) => {
      if (存档.物品.江湖残页 < 5) {
        return '残页不足！';
      }
      if (self.江湖物品售罄) {
        return '已售罄~下次再来吧！';
      }
      self.江湖物品售罄 = true;
      存档.物品.江湖残页 -= 5;
      存档.物品[self.江湖物品] += 1;
      return `获得【${self.江湖物品}】*1`;
    },
    条件: () => {
      return (
        (存档.击败次数['青竹门长老'] || 0) > 0 ||
        (存档.击败次数['铁衣帮长老'] || 0) > 0 ||
        (存档.击败次数['玄水阁长老'] || 0) > 0
      );
    },
  },
];


function 生成神秘商人列表() {
  const 商品列表 = [];
  const 当前天数 = 存档.天数 ?? 30;
  // 兜底防止存档.物品为undefined

  const 起始天 = 30, 封顶天 = 150;
  const 最低倍率 = 1.3, 最高倍率 = 3.5;
  const 倍率进度 = Math.min(1, Math.max(0, (当前天数 - 起始天) / (封顶天 - 起始天)));
  const 价格倍率 = 最低倍率 + (最高倍率 - 最低倍率) * 倍率进度;

  const 商品池 = [
    { 概率: 0.4, 商品名称: '青纹果实', 基础价格毛: 100, 加物品: '青纹果实', 提示文本: '获得【青纹果实】*1！' },
    { 概率: 0.3, 商品名称: '蓝焰果实', 基础价格毛: 200, 加物品: '蓝焰果实', 提示文本: '获得【蓝焰果实】*1！' },
    { 概率: 0.2, 商品名称: '紫霞果实', 基础价格毛: 300, 加物品: '紫霞果实', 提示文本: '获得【紫霞果实】*1！' },
    { 概率: 0.07, 商品名称: '金麟果实', 基础价格毛: 400, 加物品: '金麟果实', 提示文本: '获得【金麟果实】*1！' },
    { 概率: 0.1, 商品名称: '暗蚀果实', 基础价格毛: 0, 加物品: '暗蚀果实', 提示文本: '获得【暗蚀果实】*1！这颗果实散发着不祥的气息...' },
    { 概率: 1, 商品名称: '天赋碎片', 基础价格毛: 30, 加物品: '天赋碎片', 提示文本: '获得【天赋碎片】*1！' },
  ];

  for (const 配置 of 商品池) {
    if (Math.random() >= 配置.概率) continue;

    const 售价毛 =  Math.floor(配置.基础价格毛 * 价格倍率);

    商品列表.push({
      名称: (商贩实例) => {
        const 已购 = 商贩实例.神秘商人已购列表[配置.商品名称]
        if (已购 >= 1) return '已售罄';
        if (售价毛 === 0) return `${配置.商品名称}（免费）——散发不祥气息的果实`;
        const 展示元 = (售价毛 / 10).toFixed(1).replace('.0', '');
        return `${配置.商品名称}（${展示元}元）`;
      },
      购买: (商贩实例) => {
        const 已购 = 商贩实例.神秘商人已购列表[配置.商品名称]
        if (已购 >= 1) return '本次交易每人限购1个！';

        if (售价毛 > 0 && 存档.金钱 < 售价毛) return '金钱不足！';
        if (售价毛 > 0) 存档.金钱 -= 售价毛;

        存档.物品[配置.加物品] ++
        商贩实例.神秘商人已购列表[配置.商品名称] = 已购 || 0 + 1;
        return 配置.提示文本;
      }
    });
  }

  return 商品列表;
}
