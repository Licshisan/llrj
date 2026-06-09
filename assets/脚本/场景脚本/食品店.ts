import { _decorator, Component, Node, Label, director, Button } from 'cc';
import { 播放文本, 放大出现, 缩小消失 } from '../方法函数/动画效果';
import { 保存存档, 存档 } from '../管理器/存档管理器';
import { 计算最大饥饿 } from '../方法函数/属性计算';
const { ccclass, property } = _decorator;

const 健康小贴士 = [
  '每天喝足够的水，保持身体水分平衡...',
  '早餐要吃好，为一天提供充足能量...',
  '多吃深绿色叶菜，补充维生素和矿物质...',
  '用全谷物代替精制谷物，增加膳食纤维...',
  '控制添加糖摄入，减少含糖饮料和甜食...',
  '选择健康脂肪，如坚果、牛油果和橄榄油...',
  '每餐搭配优质蛋白质，如鱼、豆类或瘦肉...',
  '细嚼慢咽，有助于消化和控制食量...',
  '少食多餐，避免暴饮暴食...',
  '减少加工肉类摄入，如香肠、培根等...',
  '吃彩虹色蔬果，不同颜色提供不同营养素...',
  '用天然香料代替盐，降低钠摄入...',
  '每周吃两次鱼，特别是富含Omega-3的鱼类...',
  '避免空腹吃高糖食物，防止血糖剧烈波动...',
  '餐前喝汤或水，增加饱腹感...',
  '选择低脂或脱脂乳制品...',
  '吃新鲜水果代替果汁，保留更多纤维...',
  '注意食物分量，使用小盘子控制食量...',
  '烹饪多用蒸、煮、烤，少用煎、炸...',
  '每天吃一小把原味坚果，有益心脏健康...',
  '饭后散步15分钟，帮助消化和稳定血糖...',
  '阅读食品标签，了解成分和营养信息...',
  '将蔬菜作为每餐的主角而不是配菜...',
  '规律进餐，避免长时间饥饿导致过度进食...',
  '用豆类部分替代肉类，减少饱和脂肪...',
  '限制高热量酱料，选择柠檬汁或醋调味...',
  '每天摄入足量膳食纤维，促进肠道健康...',
  '吃发酵食品如酸奶、泡菜，改善肠道菌群...',
  '避免深夜进食，给消化系统休息时间...',
  '选择小份包装或分享大份餐点...',
  '多喝水或花草茶，代替含糖和人工甜味剂饮料...',
  '慢慢吃，大脑需要20分钟接收饱腹信号...',
  '自己做饭，更好控制食材和调味品...',
  '餐盘一半放蔬菜，四分之一蛋白质，四分之一全谷物...',
  '减少快餐频率，它们通常高热量低营养...',
  '吃当季本地食材，更新鲜营养保留更好...',
  '避免情绪化进食，寻找其他缓解压力的方式...',
  '睡前2-3小时不进食，防止消化不良和影响睡眠...',
  '选择低GI食物，帮助稳定血糖和能量水平...',
  '每周尝试一种新蔬菜，丰富营养来源...',
  '用水果代替甜点，满足甜味需求同时补充营养...',
  '运动后及时补充水分和适量蛋白质...',
  '少喝酒，酒精空热量且影响营养吸收...',
  '注意隐形盐分，如面包、酱料和加工食品...',
  '将零食换成小份健康选择，如水果、酸奶或坚果...',
  '保持饮食多样化，不长期吃单一食物...',
  '不跳过任何一餐，尤其是早餐...',
  '用餐时专心进食，不看手机或电视...',
  '外出就餐选择清蒸、白灼等烹饪方式的菜品...',
  '听从身体信号，饿了再吃，饱了就停...',
];

@ccclass('食品店')
export class 食品店 extends Component {
  @property(Node) 属性: Node = null;
  @property(Node) 标签: Node = null;
  @property(Node) 主页: Node = null;
  @property(Node) 子页: Node = null;

  start() {
    const 按钮1 = this.主页.getChildByName('按钮容器').getChildByName('选择按钮1');
    按钮1.on(
      Button.EventType.CLICK,
      () => 播放文本(this.标签, 健康小贴士[Math.floor(Math.random() * 健康小贴士.length)]),
      this,
    );

    const 按钮2 = this.主页.getChildByName('按钮容器').getChildByName('选择按钮2');
    按钮2.on(Button.EventType.CLICK, this.查看已加工食品, this);

    const 按钮3 = this.主页.getChildByName('按钮容器').getChildByName('选择按钮3');
    按钮3.on(Button.EventType.CLICK, this.查看已采购食材, this);

    const 按钮4 = this.主页.getChildByName('按钮容器').getChildByName('选择按钮4');
    按钮4.on(Button.EventType.CLICK, this.点击食材加工, this);

    const 按钮5 = this.主页.getChildByName('按钮容器').getChildByName('选择按钮5');
    按钮5.on(Button.EventType.CLICK, this.点击采购食材, this);

    const 按钮6 = this.主页.getChildByName('按钮容器').getChildByName('选择按钮6');
    按钮6.on(
      Button.EventType.CLICK,
      () => 播放文本(this.标签, '当前模式正在开发中，请下一个版本再来体验吧~'),
      this,
    );

    播放文本(this.标签, '店面正在装修中，店内空空如也~');
    this.主页
      .getChildByName('返回按钮')
      .on(Button.EventType.CLICK, () => director.loadScene('主页'), this);
    this.子页.getChildByName('返回按钮').on(
      Button.EventType.CLICK,
      () => {
        缩小消失(this.子页);
        放大出现(this.主页);
      },
      this,
    );
    this.更新();
  }

  切换前() {
    this.标签.getComponent(Label).string = '';
    this.子页.getChildByName('按钮容器').removeAllChildren();
    缩小消失(this.主页);
    放大出现(this.子页);
    this.更新();
  }

  查看已加工食品() {
    this.切换前();
  }

  查看已采购食材() {
    this.切换前();
  }

  点击食材加工() {
    this.切换前();
    播放文本(
      this.标签,
      '我们这里也提供特殊补品的加工服务,因为每天值班的厨师不同,所以每天能加工的补品种类也会变化~',
    );
  }

  点击采购食材() {
    this.切换前();
    播放文本(this.标签, '我们这边只售卖最新鲜的食材,售完即止,欲购从速呦~');
  }

  更新() {
    this.属性.getComponent(Label).string =
      `金钱 ${(存档.金钱 / 10).toFixed(1)}\n饥饿 ${存档.饥饿}/${计算最大饥饿()}`;
    保存存档();
  }
}
