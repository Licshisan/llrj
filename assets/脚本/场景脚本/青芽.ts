import { _decorator, Component, Label, Node, Button, director, UITransform, Color } from 'cc';
import { 播放文本, 淡入 } from '../方法函数/动画效果';
import { 保存存档, 存档 } from '../管理器/存档管理器';
import { 计算数值 } from '../方法函数/属性计算';
const { ccclass, property } = _decorator;

@ccclass('青芽')
export class 青芽 extends Component {
  @property(Node) 标签: Node = null;
  @property(Node) 文本容器: Node = null;
  @property(Node) 属性: Node = null;
  @property(Node) 按钮容器: Node = null;

  @property(Node) 切换1: Node = null;
  @property(Node) 切换2: Node = null;
  @property(Node) 切换3: Node = null;
  @property(Node) 退出按钮: Node = null;

  onLoad(): void {
    // 如果没有青芽，跳转到其他伙伴
    if (!存档.伙伴.青芽关系) {
      if (存档.伙伴.晓月关系) {
        director.loadScene('伙伴');
      } else if (存档.伙伴.碧瑶关系) {
        globalThis.伙伴特性伙伴名称 = '碧瑶';
        director.loadScene('伙伴特性');
      } else if (存档.伙伴.小兰关系) {
        director.loadScene('小兰');
      } else if (存档.伙伴.林溪关系) {
        director.loadScene('林溪');
      }
    }
  }

  start() {
    this.更新显示();
    this.标签.getComponent(Label).string = '';
    this.文本容器.removeAllChildren();

    // 按钮绑定
    this.按钮容器.getChildByName('选择按钮1').on(Button.EventType.CLICK, this.聊天, this);
    this.按钮容器.getChildByName('选择按钮2').on(Button.EventType.CLICK, this.喂食, this);
    this.按钮容器.getChildByName('选择按钮3').on(Button.EventType.CLICK, this.喂药, this);
    this.按钮容器.getChildByName('选择按钮4').on(
      Button.EventType.CLICK,
      () => {
        globalThis.伙伴特性伙伴名称 = '青芽';
        director.loadScene('伙伴特性');
      },
      this,
    );

    // 切换按钮
    this.切换1.active = !!存档.伙伴.晓月关系;
    this.切换1.on(
      Button.EventType.CLICK,
      () => {
        director.loadScene('伙伴');
      },
      this,
    );

    this.切换2.active = !!存档.伙伴.青芽关系;
    this.切换2.on(
      Button.EventType.CLICK,
      () => {
        globalThis.伙伴特性伙伴名称 = '青芽';
        director.loadScene('伙伴特性');
      },
      this,
    );

    this.切换3.active = !!(存档.伙伴.碧瑶关系 || 存档.伙伴.小兰关系 || 存档.伙伴.林溪关系);
    this.切换3.on(
      Button.EventType.CLICK,
      () => {
        if (存档.伙伴.小兰关系) {
          director.loadScene('小兰');
        } else if (存档.伙伴.林溪关系) {
          director.loadScene('林溪');
        } else if (存档.伙伴.碧瑶关系) {
          globalThis.伙伴特性伙伴名称 = '碧瑶';
          director.loadScene('伙伴特性');
        }
      },
      this,
    );

    this.退出按钮.on(Button.EventType.CLICK, () => director.loadScene('主页'), this);
  }

  更新显示() {
    this.属性.getComponent(Label).string = `青芽好感：${存档.伙伴.青芽好感}`;
  }

  // 聊天
  聊天() {
    const 聊天消耗精力 = 计算数值('聊天消耗精力', 10);
    if (存档.精力 < 聊天消耗精力) {
      播放文本(this.标签, '精力不足！');
      return;
    }
    存档.精力 -= 聊天消耗精力;

    const 固定对话 = [
      '“我...我叫青芽，从小在村里长大”',
      '“我爹爱喝酒，喝完就打人，我妈走得早...”',
      '“村里人都说我是个赔钱货，没人愿意和我玩”',
      '“后来我就自己上山采药，至少不用看人脸色”',
      '“前些天，隔壁村的王屠户来提亲，给了不少彩礼...”',
      '“我爹一口就答应了，可我连那人长啥样都没看清”',
      '“我一害怕，就跑了，也不知道能去哪”',
      '“你...你不会也嫌弃我吧？”',
      '“我会采药，会做饭，还会缝补衣裳”',
      '“虽然做得不太好，但我可以学...”',
      '“谢谢你愿意带着我”',
      '“我第一次觉得，活着也没那么难”',
      '“其实我很羡慕城里人，能读书，能穿漂亮衣服”',
      '“但我这辈子可能都去不了城里了...”',
      '“跟着你走了这么远，我已经很满足了”',
    ];

    const 随机对话 = [
      '“今天采到好多草药，运气真好呢”',
      '“你饿了吗？我去煮点粥”',
      '“这片林子我熟，小时候常来玩”',
      '“别碰那朵蘑菇，有毒的！”',
      '“你要是不开心，可以跟我说说...”',
      '“我以前养过一条狗，后来被村里人打死了”',
      '“你觉得城里是什么样的？我从来没去过”',
      '“我其实...有点害怕天黑”',
      '“你的衣服破了，我帮你补补吧”',
      '“这只兔子好可爱，我们别吃它了好不好”',
      '“下雨了，我们去那边躲躲”',
      '“你今天好像不太开心，发生什么事了？”',
      '“我以前也想过跑，但不知道跑去哪”',
      '“遇见你之前，我已经三天没吃东西了”',
    ];

    let dialog: string;
    if (存档.伙伴.青芽聊天次数 < 固定对话.length) {
      dialog = 固定对话[存档.伙伴.青芽聊天次数];
    } else {
      const index = Math.floor(Math.random() * 随机对话.length);
      dialog = 随机对话[index];
    }

    if (存档.伙伴.青芽聊天次数 % 3 === 0) {
      this.文本容器.removeAllChildren();
    }
    this.creatText(存档.伙伴.青芽聊天次数 % 3, dialog);

    存档.伙伴.青芽聊天次数 += 1;
    存档.伙伴.青芽好感 += 1;
    this.更新显示();
    保存存档();
  }

  // 喂食
  喂食() {
    if (存档.物品.果子 <= 0 && 存档.物品.草药 <= 0 && 存档.物品.熟肉 <= 0) {
      播放文本(this.标签, '没什么可吃的了');
      return;
    }

    if (存档.物品.熟肉 > 0) {
      存档.伙伴.连续不喂食青芽天数 = 0;
      存档.伙伴.今日喂食青芽 = 1;
      存档.物品.熟肉 -= 1;
      存档.伙伴.青芽好感 += 3;
      this.更新显示();
      播放文本(
        this.标签,
        '“哇...是肉！”\n青芽眼睛亮了起来，小心翼翼地接过熟肉。\n熟肉-1，青芽好感+3',
      );
      保存存档();
      return;
    }

    if (存档.物品.果子 > 0) {
      存档.伙伴.连续不喂食青芽天数 = 0;
      存档.伙伴.今日喂食青芽 = 1;
      存档.物品.果子 -= 1;
      存档.伙伴.青芽好感 += 1;
      this.更新显示();
      播放文本(this.标签, '“谢谢你...”\n青芽接过果子，小口小口地吃着。\n果子-1，青芽好感+1');
      保存存档();
      return;
    }

    if (存档.物品.草药 > 0) {
      存档.伙伴.连续不喂食青芽天数 = 0;
      存档.伙伴.今日喂食青芽 = 1;
      存档.物品.草药 -= 1;
      存档.伙伴.青芽好感 += 2;
      this.更新显示();
      播放文本(
        this.标签,
        '“这是...给我的？”\n青芽疑惑地看着草药，但还是收下了。\n草药-1，青芽好感+2',
      );
      保存存档();
      return;
    }
  }

  // 喂药
  喂药() {
    if (存档.物品.伤药 <= 0) {
      播放文本(this.标签, '没药啦~！');
      return;
    }
    存档.伙伴.青芽好感 += 2;
    存档.物品.伤药 -= 1;
    this.更新显示();
    播放文本(
      this.标签,
      '“你受伤了？别动...”\n青芽熟练地帮你处理伤口。\n“以前在村里也常帮人包扎呢”\n青芽好感+2',
    );
    保存存档();
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
