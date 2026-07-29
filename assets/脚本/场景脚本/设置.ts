import { _decorator, Button, Component, director, Label, Node, EditBox } from 'cc';
import { 播放文本 } from '../方法函数/动画效果';
import * as 设置管理器 from '../管理器/设置管理器';
import { 上传客户端数据 } from '../方法函数/网络请求';
import { 玩家 } from '../管理器/玩家管理器';
const { ccclass, property } = _decorator;

@ccclass('设置')
export class 设置 extends Component {
  @property(Node) 标签: Node;
  @property(Node) 按钮容器: Node;
  @property(Node) 返回按钮: Node;
  @property(Node) 账号信息: Node;

  @property(Node) 出场语输入框: Node;
  @property(Node) 战胜语输入框: Node;
  @property(Node) 战败语输入框: Node;
  @property(Node) 确认按钮: Node;

  速度表 = { 1: '慢', 2: '快', 5: '极' };
  start() {
    this.出场语输入框.getComponent(EditBox).string = 玩家.client_info?.show_text || '';
    this.战胜语输入框.getComponent(EditBox).string = 玩家.client_info?.win_text || '';
    this.战败语输入框.getComponent(EditBox).string = 玩家.client_info?.fail_text || '';
    this.更新设置按钮文本();
    this.账号信息.getComponent(Label).string =
      `昵称：${玩家.client_info.name || '暂无'}\nid:${玩家.id || '暂无'}`;

    this.按钮容器.getChildByName('速度').on(Button.EventType.CLICK, this.点击速度, this);
    this.按钮容器.getChildByName('暗夜').on(Button.EventType.CLICK, this.点击暗夜, this);

    this.按钮容器.getChildByName('自动买果子').active = true;
    this.按钮容器.getChildByName('自动买果子').on(
      Button.EventType.CLICK,
      () => {
        设置管理器.设置.自动买果子 = !设置管理器.设置.自动买果子;
        设置管理器.保存设置();
        this.更新设置按钮文本();
        播放文本(this.标签, `已${设置管理器.设置.自动买果子 ? '开启' : '关闭'}自动买果子`);
      },
      this,
    );

    this.按钮容器.getChildByName('批量购买').active = true;
    this.按钮容器.getChildByName('批量购买').on(
      Button.EventType.CLICK,
      () => {
        设置管理器.设置.批量购买 = !设置管理器.设置.批量购买;
        设置管理器.保存设置();
        this.更新设置按钮文本();
        播放文本(this.标签, `已${设置管理器.设置.批量购买 ? '开启' : '关闭'}批量购买`);
      },
      this,
    );

    this.按钮容器.getChildByName('防误触').on(
      Button.EventType.CLICK,
      () => {
        设置管理器.设置.防误触 = !设置管理器.设置.防误触;
        设置管理器.保存设置();
        this.更新设置按钮文本();
        播放文本(this.标签, `已${设置管理器.设置.防误触 ? '开启' : '关闭'}防误触`);
      },
      this,
    );
    this.按钮容器.getChildByName('经典比例').on(
      Button.EventType.CLICK,
      () => {
        设置管理器.设置.经典比例 = !设置管理器.设置.经典比例;
        设置管理器.保存设置();
        this.更新设置按钮文本();
        播放文本(this.标签, `已${设置管理器.设置.经典比例 ? '开启' : '关闭'}经典比例`);
      },
      this,
    );

    this.按钮容器.getChildByName('音效').on(
      Button.EventType.CLICK,
      () => {
        设置管理器.设置.音效开关 = !设置管理器.设置.音效开关;
        设置管理器.保存设置();
        this.更新设置按钮文本();
        播放文本(this.标签, `已${设置管理器.设置.音效开关 ? '开启' : '关闭'}音效`);
      },
      this,
    );
    this.按钮容器.getChildByName('扫荡').on(
      Button.EventType.CLICK,
      () => {
        设置管理器.设置.扫荡开关 = !设置管理器.设置.扫荡开关;
        设置管理器.保存设置();
        this.更新设置按钮文本();
        播放文本(this.标签, `已${设置管理器.设置.扫荡开关 ? '开启' : '关闭'}扫荡`);
      },
      this,
    );


    this.确认按钮.on(Button.EventType.CLICK, this.点击确认, this);
    // this.按钮容器.getChildByName("公告").on(Button.EventType.CLICK, () => director.loadScene("公告"), this);
    this.返回按钮.on(
      Button.EventType.CLICK,
      () => {
        if (globalThis.页面来源 === '特性') {
          director.loadScene('特性');
        } else {
          director.loadScene('首页');
        }
      },
      this,
    );
  }

  点击速度() {
    const 速度挡位 = Object.keys(this.速度表).map(Number);
    const 当前速度 = 速度挡位.findIndex((速度) => 速度 === 设置管理器.设置.播放速度);

    if (当前速度 === -1) {
      设置管理器.设置.播放速度 = 速度挡位[0];
    } else {
      const 下一个速度 = (当前速度 + 1) % 速度挡位.length;
      设置管理器.设置.播放速度 = 速度挡位[下一个速度];
    }

    设置管理器.保存设置();
    this.更新设置按钮文本();
    播放文本(this.标签, `当前速度为${this.速度表[设置管理器.设置.播放速度]}`);
  }

  点击暗夜() {
    设置管理器.设置.暗夜模式 = !设置管理器.设置.暗夜模式;
    设置管理器.保存设置();
    this.更新设置按钮文本();
    播放文本(this.标签, `护眼模式已${设置管理器.设置.暗夜模式 ? '开启' : '关闭'}`);
  }

  更新设置按钮文本() {
    const 开关文本 = (开启: boolean) => (开启 ? '开' : '关');
    const 按钮文本: Record<string, string> = {
      速度: `播放速度:${this.速度表[设置管理器.设置.播放速度]}`,
      暗夜: `护眼模式:${开关文本(设置管理器.设置.暗夜模式)}`,
      自动买果子: `自动果子:${开关文本(设置管理器.设置.自动买果子)}`,
      批量购买: `批量购买:${开关文本(设置管理器.设置.批量购买)}`,
      防误触: `防止误触:${开关文本(设置管理器.设置.防误触)}`,
      经典比例: `经典比例:${开关文本(设置管理器.设置.经典比例)}`,
      音效: `音效开关:${开关文本(设置管理器.设置.音效开关)}`,
      扫荡: `一键扫荡:${开关文本(设置管理器.设置.扫荡开关)}`,
    };

    for (const [按钮名称, 文本] of Object.entries(按钮文本)) {
      const 按钮 = this.按钮容器.getChildByName(按钮名称);
      const 标签 = 按钮?.getChildByName('标签')?.getComponent(Label);
      if (标签) 标签.string = 文本;
    }
  }

  点击确认() {
    玩家.client_info.show_text = this.出场语输入框.getComponent(EditBox).string || '';
    玩家.client_info.win_text = this.战胜语输入框.getComponent(EditBox).string || '';
    玩家.client_info.fail_text = this.战败语输入框.getComponent(EditBox).string || '';

    try {
      上传客户端数据()
        .then((data) => {
          设置管理器.保存设置();
          播放文本(this.标签, `设置上传成功`);
        })
        .catch((error) => {
          播放文本(this.标签, `设置上传失败：${error.message || '未知错误'}`);
        });
    } catch (e) {
      播放文本(this.标签, `服务器上传失败`);
      console.error(e);
    }
  }
}
