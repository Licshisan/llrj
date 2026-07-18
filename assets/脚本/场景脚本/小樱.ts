import { _decorator, Component, Label, Node, Button, director, UITransform, Color } from 'cc';
import { 播放文本, 淡入 } from '../方法函数/动画效果';
import { 保存存档, 存档 } from '../管理器/存档管理器';
import { 计算数值 } from '../方法函数/属性计算';
const { ccclass, property } = _decorator;

@ccclass('小樱')
export class 小樱 extends Component {
  @property(Node) 标签: Node = null;
  @property(Node) 文本容器: Node = null;
  @property(Node) 属性: Node = null;
  @property(Node) 按钮容器: Node = null;

  @property(Node) 切换1: Node = null;
  @property(Node) 切换2: Node = null;
  @property(Node) 切换3: Node = null;
  @property(Node) 切换4: Node = null;
  @property(Node) 退出按钮: Node = null;

  start() {
    this.更新显示();
    this.标签.getComponent(Label).string = '';
    this.文本容器.removeAllChildren();

    // 按钮绑定
    this.按钮容器.getChildByName('选择按钮1').on(Button.EventType.CLICK, this.聊天, this);
    this.按钮容器.getChildByName('选择按钮2').on(Button.EventType.CLICK, this.送果子, this);

    // 切换按钮
    this.切换1.active = !!存档.伙伴.晓月关系;
    this.切换1.on(
      Button.EventType.CLICK,
      () => {
        director.loadScene('伙伴');
      },
      this,
    );

    this.切换2.active = !!存档.伙伴.碧瑶关系;
    this.切换2.on(
      Button.EventType.CLICK,
      () => {
        globalThis.伙伴特性伙伴名称 = '碧瑶';
        director.loadScene('伙伴特性');
      },
      this,
    );

    this.切换3.active = !!存档.伙伴.小兰关系;
    this.切换3.on(
      Button.EventType.CLICK,
      () => {
        director.loadScene('小兰');
      },
      this,
    );

    this.切换4.active = !!存档.伙伴.青芽关系;
    this.切换4.on(
      Button.EventType.CLICK,
      () => {
        director.loadScene('青芽');
      },
      this,
    );

    this.退出按钮.on(Button.EventType.CLICK, () => director.loadScene('主页'), this);
  }

  更新显示() {
    this.属性.getComponent(Label).string = `小樱好感：${存档.伙伴.小樱好感}`;
  }

  // 聊天
  聊天() {
    const 聊天消耗精力 = 计算数值('聊天消耗精力', 10);
    if (存档.精力 < 聊天消耗精力) {
      播放文本(this.标签, '精力不足！');
      return;
    }
    存档.精力 -= 聊天消耗精力;
    存档.其他.当天聊天次数 ++

    const 固定对话 = [
      '“你好呀，我叫小樱~我不知道我全名叫什么，爷爷从来没告诉过我，他一直都是叫我小樱”',
      '“我从小就出生在县城，一直跟着爷爷长大的，我爹娘好像在很远的地方，很少来看我和爷爷...”',
      '“我今年15岁了，爷爷身体不好，我不想要他总是这么操劳，所以我没有念书了，一直在帮爷爷照看草药铺”',
      '“虽然有时候也会觉得...别家姑娘都能去学堂念书识字，我心里头也羡慕过一阵子”',
      '“但后来想想，爷爷教我认草药的时候，可比学堂里那些夫子讲得有意思多了！”',
      '“我爹娘啊...其实，我印象都模糊了，只记得小时候每年过年会回来，还给我带一包糖，从我7岁开始便再也没回来过了...”',
      '“爷爷跟我说，大人有大人的难处，让我别记恨他们，可我哪儿有工夫记恨呀，铺子里的事儿都忙不过来呢！”',
      '“不过夜里躺床上的时候，偶尔也会想，要是娘在的话，会不会教我梳好看的发髻...”',
      '“算了算了，不说这些啦！我爷爷说了，人要往前看，往后瞧的都是傻子。”',
    ];

    const 随机对话 = [
      '“我现在最大的心愿，就是把咱们草药铺经营好，多多的攒钱，爷爷就不用那么累啦！”',
      '“对了，你会不会认草药呀？要是不会的话，改天来铺子里，我可以教你认几味最简单的！”',
      '“你说我是不是挺奇怪的？明明是个姑娘家，却总想着干一番大事业，哈哈！”',
      '“我平时最喜欢做的事儿，就是趁着没客人的时候，爬到铺子后头那棵老槐树上看夕阳。”',
      '“唔，好想去老李家再买一个糖葫芦，我可喜欢他们家的糖葫芦了！”',
      '“真可惜，要是我也能像他们一样，能够进入门派修炼就好了，听说门派弟子每月发的钱都很多呢！”',
'你说，省城那边……会不会也有老槐树呀？',
'有点想爷爷了⏑ ㅅ ⏑ 他现在肯定在和老李头下棋！',
`你的衣服有点破了，我给你缝一下吧！我很厉害的 (●'◡'●)`,
'今天晒的艾草可好了，你要是失眠的话，我给你装一包拿去枕着睡',
'我昨天晚上做了一个梦，梦见一条好长好长的路，尽头有人在招手'
    ];

    let dialog: string;
    if (存档.伙伴.小樱聊天次数 < 固定对话.length) {
      dialog = 固定对话[存档.伙伴.小樱聊天次数];
    } else {
      const index = Math.floor(Math.random() * 随机对话.length);
      dialog = 随机对话[index];
    }

    if (存档.伙伴.小樱聊天次数 % 3 === 0) {
      this.文本容器.removeAllChildren();
    }
    this.creatText(存档.伙伴.小樱聊天次数 % 3, dialog);

    存档.伙伴.小樱聊天次数 += 1;
    存档.伙伴.小樱好感 += 1;
    this.更新显示();
    保存存档();
  }

  // 喂食
  送果子() {
    if (存档.物品.果子 <= 0) {
      播放文本(this.标签, '没有果子了');
      return;
    }

    if (存档.物品.果子 > 0) {
      存档.物品.果子 -= 1;

      const 伙伴互动增加好感 = 计算数值('伙伴互动增加好感', 1);
      存档.伙伴.小樱好感 += 伙伴互动增加好感;
      this.更新显示();
      播放文本(
        this.标签,
        `“谢谢你...”\n小樱接过果子，小口小口地吃着。\n果子-1，小樱好感+${伙伴互动增加好感}`,
      );
      保存存档();
      return;
    }
  }

  creatText(index: number, content: string) {
    this.标签.getComponent(Label).string = '';
    const dialog = new Node(`dialog${index}`);
    const label = dialog.addComponent(Label);

    label.string = content;
    label.fontSize = 40;
    label.lineHeight = 50;
    label.overflow = Label.Overflow.RESIZE_HEIGHT;
    label.horizontalAlign = Label.HorizontalAlign.CENTER;
    label.color = Color.WHITE;

    dialog.setParent(this.文本容器);
    dialog.setPosition(0, 0);
    const 页面视图大小 = this.文本容器.getComponent(UITransform);
    if (页面视图大小) {
      label
        .addComponent(UITransform)
        .setContentSize(页面视图大小.contentSize.width, 页面视图大小.contentSize.height);
    }

    淡入(dialog);
  }
}
