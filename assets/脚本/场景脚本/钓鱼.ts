import { _decorator, Button, Component, Label, Node, UITransform, Sprite, Color } from 'cc';
const { ccclass, property } = _decorator;
import { 主页 } from './主页';
import { 放大出现, 缩小消失 } from '../方法函数/动画效果';
import { 保存存档, 存档 } from '../管理器/存档管理器';
import { 设置 } from '../管理器/设置管理器';
import { 随机生成鱼 } from '../公共方法/钓鱼';

@ccclass('钓鱼')
export class 钓鱼 extends Component {
  @property(Node) 钓鱼: Node = null!;
  @property(Node) 钓鱼条: Node = null!;
  @property(Node) 滑块: Node = null!;
  @property(Node) 色块: Node = null!;
  @property(Node) 按钮: Node = null!;

  色块宽度 = 100;
  滑块速度 = 600;
  移动方向 = 1;
  游戏状态 = 1;

  鱼 = null;
  触发钓鱼() {
    this.初始化();
    this.按钮.active = true;
    this.按钮.targetOff(this);
    this.按钮.on(Button.EventType.CLICK, () => this.判定是否命中(), this);
  }

  初始化() {
    this.移动方向 = 1;
    const 主页脚本 = this.node.getComponent(主页)!;
    主页脚本.更新();
    缩小消失(主页脚本.按钮容器);
    放大出现(this.钓鱼);
    主页脚本.播放文本('点击开始开始钓鱼！');

    const 基础色块宽度 = 100;
    const 基础滑块速度 = 600;
    const 鱼 = 存档.临时数据.当前钓鱼鱼类 || 随机生成鱼();
    存档.临时数据.当前钓鱼鱼类 = 鱼;
    this.色块宽度 = 基础色块宽度 * 鱼.色块宽度;
    this.滑块速度 = 基础滑块速度 * 鱼.滑块速度;
    this.鱼 = 鱼;

    const barUi = this.钓鱼条.getComponent(UITransform)!;
    const halfBar = barUi.width / 2;
    this.滑块.setPosition(-halfBar, 0);

    const blockUi = this.色块.getComponent(UITransform)!;
    blockUi.width = this.色块宽度;
    const halfBlock = this.色块宽度 / 2;
    const minX = Math.round(-halfBar + halfBlock);
    const maxX = Math.round(halfBar - halfBlock);
    const randomX = Math.round(minX + Math.random() * (maxX - minX));
    this.色块.setPosition(randomX, 0);
    this.色块.getComponent(Sprite).color = new Color(鱼.颜色);

    this.开始钓鱼();
  }

  开始钓鱼() {
    this.游戏状态 = 1;
    this.按钮.getChildByName('标签').getComponent(Label).string = '停 止！';
    this.node.getComponent(主页)?.播放文本('看准时机，让滑块落在颜色区域中！');
  }

  update(deltaTime: number) {
    if (this.游戏状态 !== 1) return;
    const barUi = this.钓鱼条.getComponent(UITransform)!;
    const halfBar = barUi.width / 2;
    const step = this.滑块速度 * this.移动方向 * deltaTime;

    let sliderX = this.滑块.position.x + step;
    if (sliderX >= halfBar) {
      sliderX = halfBar;
      this.移动方向 = -1;
    } else if (sliderX <= -halfBar) {
      sliderX = -halfBar;
      this.移动方向 = 1;
    }
    this.滑块.setPosition(sliderX, 0);
  }

  判定是否命中() {
    this.游戏状态 = 2;
    const blockX = this.色块.position.x;
    const sliderX = this.滑块.position.x;
    const halfBlock = this.色块宽度 / 2;
    const 命中 = sliderX >= blockX - halfBlock && sliderX <= blockX + halfBlock;

    const 主页脚本 = this.node.getComponent(主页);
    if (命中) {
      主页脚本?.播放文本('上钩啦！');
      // 生成随机鱼信息
      this.scheduleOnce(() => {
        存档.当前事件 = '';
        存档.临时数据.当前钓鱼鱼类 = null;
        if (!存档.临时数据.鱼篓) {
          存档.临时数据.鱼篓 = [];
        }
        存档.临时数据.鱼篓.push(this.鱼);
        存档.其他.钓鱼最大重量 = Math.max(this.鱼.重量, 存档.其他.钓鱼最大重量);
        保存存档();
        const 结果文本 = `钓到一条【${this.鱼.名称}】「${this.鱼.品质}${'★'.repeat(this.鱼.星阶)}」，重量：${this.鱼.重量}kg，请前往面板查看！`;
        主页脚本?.播放文本(结果文本);
        this.钓鱼.active = false;
        放大出现(主页脚本?.按钮容器!);
      }, 2.5 / 设置.播放速度);
    } else {
      主页脚本?.播放文本('什么也没掉到');
      this.scheduleOnce(() => {
        存档.当前事件 = '';
        存档.临时数据.当前钓鱼鱼类 = null;
        保存存档();
        this.钓鱼.active = false;
        放大出现(主页脚本?.按钮容器!);
      }, 2.5 / 设置.播放速度);
    }

    this.按钮.active = false;
  }
}
