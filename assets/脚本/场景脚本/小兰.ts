import { _decorator, Component, Node, Button, director, Label } from 'cc';
import { 保存存档, 存档 } from '../管理器/存档管理器';
import { 播放文本 } from '../方法函数/动画效果';
import { 计算数值 } from '../方法函数/属性计算';
const { ccclass, property } = _decorator;

@ccclass('小兰')
export class 小兰 extends Component {
  @property(Node) 标签: Node = null;
  @property(Node) 属性: Node = null;
  @property(Node) 选择容器: Node = null;
  @property(Node) 切换1: Node = null;
  @property(Node) 切换2: Node = null;
  @property(Node) 切换3: Node = null;
  @property(Node) 切换4: Node = null;
  @property(Node) 退出按钮: Node = null;

  start() {
    this.更新();
    播放文本(this.标签, '');

    this.选择容器.getChildByName('选择按钮1').on(Button.EventType.CLICK, this.talk, this);
    this.选择容器.getChildByName('选择按钮2').on(Button.EventType.CLICK, this.send, this);
    this.选择容器.getChildByName('选择按钮3').on(Button.EventType.CLICK, this.action, this);

    this.切换1.active = 存档.伙伴.晓月关系 > 0;
    this.切换1.on(Button.EventType.CLICK, () => director.loadScene('伙伴'), this);

    this.切换2.active = 存档.伙伴.碧瑶关系 > 0;
    this.切换2.on(
      Button.EventType.CLICK,
      () => {
        globalThis.伙伴特性伙伴名称 = '碧瑶';
        director.loadScene('伙伴特性');
      },
      this,
    );

    this.切换3.active = 存档.伙伴.青芽关系 > 0;
    this.切换3.on(
      Button.EventType.CLICK,
      () => {
        director.loadScene('青芽');
      },
      this,
    );

    this.切换4.active = 存档.伙伴.小樱关系 > 0;
    this.切换4.on(
      Button.EventType.CLICK,
      () => {
        director.loadScene('小樱');
      },
      this,
    );

    this.退出按钮.on(
      Button.EventType.CLICK,
      () => {
        director.loadScene('主页');
      },
      this,
    );
  }

  更新() {
    this.属性.getComponent(Label).string = `小兰好感：${存档.伙伴.小兰好感}`;
  }

  talk() {
    const 聊天消耗精力 = 计算数值('聊天消耗精力', 10);
    if (存档.精力 < 聊天消耗精力) {
      播放文本(this.标签, '精力不足！');
      return;
    }
    存档.精力 -= 聊天消耗精力;
    存档.其他.当天聊天次数 ++

    const 小兰聊天内容 = [
      '这么晚来找我...不怕被人看见？',
      '我最近学会按摩了，要不要试试？',
      '你身上好凉...靠过来暖和一点...',
      '隔壁总是半夜有奇怪的声音...你听到没？',
      '这件衣服好像有点小...你觉得呢？',
      '一个人住有时候挺害怕的...',
      '你最好别和我走得太近，被那个人看到会连累你的...',
      '你知道哪里能办假身份证吗？我原来的被扣下了...',
      '等这一切都结束了，我想回学校读书，虽然可能有点晚了...',
      '那个护身符你带着吗？虽然不值钱，但是开过光的...',
      '你说要是去南方工厂打工，会不会比在这里强？',
      '我妹今年该高考了，不知道她复习得怎么样...家里也没个电话。',
      '我攒了点钱，想租个正经房子，你有听说哪里便宜吗？',
      '你打算去城中村化妆品店做销售，就是钱给的很少...',
    ];

    const 随机索引 = Math.floor(Math.random() * 小兰聊天内容.length);
    播放文本(this.标签, 小兰聊天内容[随机索引]);
    const 伙伴互动增加好感 = 计算数值('伙伴互动增加好感', 1);
    存档.伙伴.小兰好感 += 伙伴互动增加好感;
    this.更新();
    保存存档();
  }

  send() {
    if (存档.物品.漂亮石头 > 0) {
      存档.物品.漂亮石头 -= 1;
      const 伙伴互动增加好感 = 计算数值('伙伴互动增加好感', 3);
      存档.伙伴.小兰好感 += 伙伴互动增加好感;
      this.更新();
      播放文本(this.标签, `漂亮石头-1，小兰好感+${伙伴互动增加好感}`);
      保存存档();
    } else {
      播放文本(this.标签, '没有漂亮石头了');
    }
  }

  action() {
    globalThis.伙伴特性伙伴名称 = '小兰';
    director.loadScene('伙伴特性');
  }
}
