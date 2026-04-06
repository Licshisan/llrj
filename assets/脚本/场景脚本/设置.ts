import { _decorator, Button, Component, director, Label, Node } from "cc";
import { 播放文本 } from "../方法函数/动画效果";
import * as 设置管理器 from '../管理器/设置管理器'
const { ccclass, property } = _decorator;

@ccclass("设置")
export class 设置 extends Component {
  @property(Node) 标签: Node;
  @property(Node) 按钮容器: Node;
  @property(Node) 返回按钮: Node;
  @property(Node) 账号信息: Node;

  速度表 = { 1: "一般", 2: "快速", 6: "极速" }
  start() {
    this.标签.getComponent(Label).string = `当前速度为${this.速度表[设置管理器.设置.播放速度]}`;
    this.按钮容器.getChildByName("速度").on(Button.EventType.CLICK, this.点击速度, this);
    this.按钮容器.getChildByName("暗夜").on(Button.EventType.CLICK, this.点击暗夜, this);
    this.按钮容器.getChildByName("公告").on(Button.EventType.CLICK, () => director.loadScene("公告"), this);
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
      播放文本(this.标签, `已${设置管理器.设置.自动买果子 ? '开启' : '关闭'}自动买果子，在县城如果果子数量低于5自动买5个。`)
    }, this);

    this.账号信息.getComponent(Label).string = `昵称：${设置管理器.设置.账号.nickname || '暂无'}\nid:${设置管理器.设置.账号.id || '暂无'}`
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
}
