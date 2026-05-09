import { _decorator, Button, Component, director, Label, Node, EditBox } from "cc";
import { 播放文本 } from "../方法函数/动画效果";
import * as 设置管理器 from '../管理器/设置管理器'
import { 上传设置请求 } from "../方法函数/网络请求";
const { ccclass, property } = _decorator;

@ccclass("设置")
export class 设置 extends Component {
  @property(Node) 标签: Node;
  @property(Node) 按钮容器: Node;
  @property(Node) 返回按钮: Node;
  @property(Node) 账号信息: Node;

  @property(Node) 出场语输入框: Node;
  @property(Node) 战胜语输入框: Node;
  @property(Node) 战败语输入框: Node;
  @property(Node) 确认按钮: Node;

  速度表 = { 1: "一般", 2: "快速", 6: "极速" }
  start() {
    this.出场语输入框.getComponent(EditBox).string = 设置管理器.设置?.其他?.出场语 || ''
    this.战胜语输入框.getComponent(EditBox).string = 设置管理器.设置?.其他?.战胜语 || ''
    this.战败语输入框.getComponent(EditBox).string = 设置管理器.设置?.其他?.战败语 || ''

    this.标签.getComponent(Label).string = `当前速度为${this.速度表[设置管理器.设置.播放速度]}`;
    this.按钮容器.getChildByName("速度").on(Button.EventType.CLICK, this.点击速度, this);
    this.按钮容器.getChildByName("暗夜").on(Button.EventType.CLICK, this.点击暗夜, this);
    // this.按钮容器.getChildByName("公告").on(Button.EventType.CLICK, () => director.loadScene("公告"), this);
    this.返回按钮.on(Button.EventType.CLICK, () => {
      if (globalThis.页面来源 === "面板") {
        director.loadScene("面板");
      } else {
        director.loadScene("首页");
      }
    }, this);

    this.按钮容器.getChildByName("自动买果子").on(Button.EventType.CLICK, () => {
      设置管理器.设置.自动买果子 = !设置管理器.设置.自动买果子
      设置管理器.保存设置();
      播放文本(this.标签, `已${设置管理器.设置.自动买果子 ? '开启' : '关闭'}自动买果子，在县城如果果子数量低于5自动买5个`)
    }, this);

    this.按钮容器.getChildByName("防误触").on(Button.EventType.CLICK, () => {
      设置管理器.设置.防误触 = !设置管理器.设置.防误触
      设置管理器.保存设置();
      播放文本(this.标签, `已${设置管理器.设置.防误触 ? '开启' : '关闭'}防误触，睡觉总是会显示确定`)
    }, this);

    this.按钮容器.getChildByName("批量购买").on(Button.EventType.CLICK, () => {
      设置管理器.设置.批量购买 = !设置管理器.设置.批量购买
      设置管理器.保存设置();
      播放文本(this.标签, `已${设置管理器.设置.批量购买 ? '开启' : '关闭'}批量购买，商店购买数量增加10倍`)
    }, this);

    this.确认按钮.on(Button.EventType.CLICK, this.点击确认, this);

    this.账号信息.getComponent(Label).string = `昵称：${设置管理器.设置.账号.name || 设置管理器.设置.账号.nickname || '暂无'}\nid:${设置管理器.设置.账号.id || '暂无'}`
  }

  点击速度() {
    const 速度挡位 = Object.keys(this.速度表).map(Number)
    const 当前速度 = 速度挡位.findIndex(速度 => 速度 === 设置管理器.设置.播放速度);

    if (当前速度 === -1) {
      设置管理器.设置.播放速度 = 速度挡位[0]
    } else {
      const 下一个速度 = (当前速度 + 1) % 速度挡位.length;
      设置管理器.设置.播放速度 = 速度挡位[下一个速度];
    }

    设置管理器.保存设置();
    播放文本(this.标签, `当前速度为${this.速度表[设置管理器.设置.播放速度]}`)
  }

  点击暗夜() {
    设置管理器.设置.暗夜模式 = !设置管理器.设置.暗夜模式
    设置管理器.保存设置();
    播放文本(this.标签, `护眼模式已${设置管理器.设置.暗夜模式 ? '开启' : '关闭'}`)
  }
  
  点击确认() {
    const 其他 = {
      出场语: this.出场语输入框.getComponent(EditBox).string || '',
      战胜语: this.战胜语输入框.getComponent(EditBox).string || '',
      战败语: this.战败语输入框.getComponent(EditBox).string || '',
    }
    设置管理器.设置.其他 = 其他

    try {
      上传设置请求(设置管理器.设置).then(data => {
        if (data.code === 200) {
          设置管理器.保存设置();
          播放文本(this.标签, `设置上传成功`)
        } else {
          播放文本(this.标签, `设置上传失败：${data.msg || '未知错误'}`)
        }
      }).catch(error => {
        播放文本(this.标签, `设置上传失败：${error.message || '未知错误'}`)
      });
    } catch (e) {
      播放文本(this.标签, `服务器上传失败`)
      console.error(e)
    }
  }
}
