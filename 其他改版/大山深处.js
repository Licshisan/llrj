require = function t(e, c, n) {
function a(o, r) {
if (!c[o]) {
if (!e[o]) {
var s = "function" == typeof require && require;
if (!r && s) return s(o, !0);
if (i) return i(o, !0);
var l = new Error("Cannot find module '" + o + "'");
throw l.code = "MODULE_NOT_FOUND", l;
}
var u = c[o] = {
exports: {}
};
e[o][0].call(u.exports, function(t) {
var c = e[o][1][t];
return a(c || t);
}, u, u.exports, t, e, c, n);
}
return c[o].exports;
}
for (var i = "function" == typeof require && require, o = 0; o < n.length; o++) a(n[o]);
return a;
}({
scr_BGM: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "8d8c2z+e3xAIqUkxCqE4NZW", "scr_BGM");
cc.Class({
extends: cc.Component,
properties: {
BGM1: {
url: cc.AudioClip,
default: null
},
BGM2: {
url: cc.AudioClip,
default: null
},
BGM3: {
url: cc.AudioClip,
default: null
},
BGM4: {
url: cc.AudioClip,
default: null
}
},
onLoad: function() {}
});
cc._RF.pop();
}, {} ],
scr_QQpay: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "fc884/pvDpG6bLBf547DI5C", "scr_QQpay");
cc.Class({
extends: cc.Component,
properties: {},
callBack: function() {
cc.director.loadScene("support3");
},
onLoad: function() {
this.node.on("touchstart", this.callBack, this);
}
});
cc._RF.pop();
}, {} ],
scr_adoptData: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "77dc9QHo3RF5IGfGNhXskkd", "scr_adoptData");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var t = {
gameData: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
};
JSON.parse(cc.sys.localStorage.getItem("adoptData")) && (t = JSON.parse(cc.sys.localStorage.getItem("adoptData")));
e.exports = t;
}
});
cc._RF.pop();
}, {} ],
scr_backMainUI: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "3e3ebJJTbNAf4EOh0d4HMO1", "scr_backMainUI");
cc.Class({
extends: cc.Component,
properties: {},
callBack: function() {
t("scr_public").save();
cc.game.startPlay && window.clearTimeout(cc.game.startPlay);
cc.director.loadScene("main");
},
onLoad: function() {
this.node.on("touchstart", this.callBack, this);
}
});
cc._RF.pop();
}, {
scr_public: "scr_public"
} ],
scr_backStartUI: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "d5fa6dHVPtCmIx1Z7ZMSeDh", "scr_backStartUI");
cc.Class({
extends: cc.Component,
properties: {},
callBack: function() {
cc.director.loadScene("start");
},
onLoad: function() {
this.node.on("touchstart", this.callBack, this);
}
});
cc._RF.pop();
}, {} ],
scr_backSupport: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "210d2Bb6a1Dho5//c333ltz", "scr_backSupport");
cc.Class({
extends: cc.Component,
properties: {},
callBack: function() {
cc.director.loadScene("support");
},
onLoad: function() {
this.node.on("touchstart", this.callBack, this);
}
});
cc._RF.pop();
}, {} ],
scr_bag: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "c266fjR839Es4w9V7mXBZpu", "scr_bag");
cc.Class({
extends: cc.Component,
properties: {},
creatText: function(t, e, c, n, a, i) {
var o = new cc.Node(e), r = (o.addComponent(cc.Label), new cc.color(255, 255, 255, 255));
o.parent = t;
o.setPosition(0, 0);
o.color = new cc.Color(255, 255, 255);
o.setContentSize(600, 300);
o.getComponent(cc.Label).string = c;
o.color = i || r;
o.getComponent(cc.Label).lineHeight = this.lineHeight || a || 60;
o.getComponent(cc.Label).fontSize = this.fontSize || n || 32;
},
onLoad: function() {
var e = t("scr_data"), c = t("scr_public"), n = this, a = cc.find("Canvas/UI1"), i = cc.find("Canvas/UI2"), o = cc.find("Canvas/UI3"), r = i.getChildByName("choice"), s = r.getChildByName("choice6");
e.startUI;
(function() {
l();
a.active = !0;
i.active = !1;
})();
(function() {
cc.find("Canvas/UI1/food").getComponent(cc.Label).string = "食物：" + e.itemNum[0] + "    金钱：" + e.money;
i.acive = !0;
i.scale = 0;
o.acive = !0;
o.scale = 0;
})();
f();
(function() {
cc.find("Canvas/UI3/state").getComponent(cc.Label).string = "口碑:" + (e.publicVar3[14] / 10).toFixed(1) + "%    热度:" + (e.publicVar3[15] / 10).toFixed(1) + "%    需求:" + (e.publicVar3[13] / 10).toFixed(1) + "%";
y();
})();
(function() {
a.getChildByName("useButton").on("touchstart", function() {
p(a);
u(i);
}, this);
a.getChildByName("handmade").on("touchstart", function() {
p(a);
u(o);
}, this);
a.getChildByName("backButton").on("touchstart", function() {
c.save();
c.backMain();
}, this);
a.getChildByName("makeButton").on("touchstart", function() {
cc.director.loadScene("make");
}, this);
i.getChildByName("backButton").on("touchstart", function() {
p(i);
u(a);
l();
}, this);
o.getChildByName("backButton").on("touchstart", function() {
p(o);
u(a);
}, this);
o.getChildByName("discardButton").on("touchstart", C, this);
r.getChildByName("choice2").on("touchstart", h, this);
r.getChildByName("choice3").on("touchstart", m, this);
r.getChildByName("choice4").on("touchstart", d, this);
r.getChildByName("choice5").on("touchstart", v, this);
r.getChildByName("choice6").on("touchstart", g, this);
(function() {
0 != e.startUI && e.day >= 1 || (a.getChildByName("makeButton").active = !1);
e.day < 5 && (a.getChildByName("handmade").active = !1);
e.itemNum[28] < 1 && (r.getChildByName("choice4").active = !1);
e.itemNum[2] <= 0 && (r.getChildByName("choice5").active = !1);
0 === e.charaLv[0][8] && (r.getChildByName("choice6").active = !1);
})();
})();
function l() {
var t = cc.find("Canvas/UI1/bag2"), a = e.itemNum.slice(0), i = c.itemName.slice(0), o = [ 10, 8, 9, 27, 17, 28, 6, 11, 14, 12, 16, 3, 2, 32, 26, 24, 5, 1, 22 ], r = o.length;
t.removeAllChildren();
for (var s = 0; s < r; s++) {
var l = o[s], u = i[l], p = a[l];
p > 0 && n.creatText(t, "item" + l, u + "*" + p, 32, 50);
}
}
function u(t) {
t.active = !0;
t.runAction(cc.scaleTo(.3, 1));
}
function p(t) {
t.runAction(cc.scaleTo(.3, 0));
}
function f() {
!1 === e.publicVar6[18] ? s.getChildByName("text").getComponent("cc.Label").string = "捡钱技能（已开启）" : s.getChildByName("text").getComponent("cc.Label").string = "捡钱技能（已关闭）";
r.getChildByName("choice2").getChildByName("text").getComponent("cc.Label").string = "生命+" + (30 + 20 * e.charaLv[0][2]) + "（需伤药" + e.itemNum[7] + "/1）";
r.getChildByName("choice3").getChildByName("text").getComponent("cc.Label").string = "精力+10（需蜂蜜" + e.itemNum[17] + "/2）";
r.getChildByName("choice4").getChildByName("text").getComponent("cc.Label").string = "健康+1（需人参" + e.itemNum[28] + "/1）";
r.getChildByName("choice5").getChildByName("text").getComponent("cc.Label").string = "喝酒（需散酒" + e.itemNum[2] + "/2）";
i.getChildByName("state").getComponent("cc.Label").string = "精力：" + e.energy + "/" + c.maxEnergy() + "  健康：" + e.health + "  生命：" + e.role.hp + "/" + c.role.maxHp();
i.getChildByName("state2").getComponent("cc.Label").string = "";
(function() {
var t = r.getChildByName("choice2").getChildByName("text"), c = r.getChildByName("choice3").getChildByName("text"), n = r.getChildByName("choice4").getChildByName("text"), a = r.getChildByName("choice5").getChildByName("text"), i = s.getChildByName("text");
e.itemNum[7] >= 1 ? t.color = new cc.color(0, 255, 0) : t.color = new cc.color(255, 255, 255);
e.itemNum[17] >= 2 ? c.color = new cc.color(0, 255, 0) : c.color = new cc.color(255, 255, 255);
e.itemNum[28] >= 1 ? n.color = new cc.color(0, 255, 0) : n.color = new cc.color(255, 255, 255);
e.itemNum[2] >= 2 ? a.color = new cc.color(0, 255, 0) : a.color = new cc.color(255, 255, 255);
!0 === e.publicVar6[18] ? i.color = new cc.color(255, 255, 255) : i.color = new cc.color(0, 255, 0);
})();
}
function h() {
var t = c.role.maxHp();
if (e.role.hp >= t) c.playText("Canvas/UI2/notify", "已达生命上限！", 80); else if (e.itemNum[7] >= 1) {
var n = c.herbRe(), a = n[0];
e.itemNum[7] -= 1;
e.role.hp += a;
e.role.hp >= t && (e.role.hp = t);
f();
c.playText("Canvas/UI2/notify", n[1] + "生命恢复" + a, 80);
} else c.playText("Canvas/UI2/notify", "伤药不足", 80);
}
function m() {
if (e.energy >= c.maxEnergy()) c.playText("Canvas/UI2/notify", "已达精力上限！", 80); else if (e.itemNum[17] >= 2) {
e.itemNum[17] -= 2;
e.energy += 10;
f();
c.playText("Canvas/UI2/notify", "精力+10！", 80);
} else c.playText("Canvas/UI2/notify", "素材不足", 80);
}
function d() {
if (e.itemNum[28] > 0) {
e.itemNum[28] -= 1;
e.health += 1;
f();
c.playText("Canvas/UI2/notify", "健康提高1点~", 80);
} else c.playText("Canvas/UI2/notify", "人参不足", 80);
}
function v() {
if (e.publicVar3[24] >= 5) c.playText("Canvas/UI2/notify", "实在喝不下啦~", 80); else if (e.itemNum[2] >= 2) {
var t = 30 + 2 * e.charaLv[0][3], n = "";
e.role.hp = c.role.maxHp();
e.itemNum[2] -= 2;
e.publicVar3[22] += t;
e.publicVar3[23] += t;
e.publicVar3[24] += 1;
e.publicVar3[25] += 1;
e.itemNum[3] += 3;
e.energy += 10;
if (e.publicVar4[0] > 0) {
if (100 * Math.random() < 50) {
e.publicVar4[0] -= 1;
n = "。「钱瘾」降低一层！";
}
}
f();
c.playText("Canvas/UI2/notify", "生命全恢复，精力提高10点，获得「废品」*2，获得「酒鬼(" + e.publicVar3[24] + ")」BUFF" + n, 80);
} else c.playText("Canvas/UI2/notify", "没酒啦~", 80);
}
function g() {
if (!1 === e.publicVar6[18]) {
e.publicVar6[18] = !0;
c.playText("Canvas/UI2/notify", "捡钱技能关闭！（关闭后，攻击人型敌人不再有概率获得金钱）", 80);
} else {
e.publicVar6[18] = !1;
c.playText("Canvas/UI2/notify", "捡钱技能开启！（开启后，攻击人型敌人有概率获得金钱）", 80);
}
f();
}
function y() {
var t = e.itemNum3.slice(0), c = cc.find("Canvas/UI3/bag3"), a = "", i = 0, o = new cc.color(105, 105, 105, 255), r = new cc.color(255, 255, 255, 255), s = new cc.color(173, 255, 47, 255), l = new cc.color(255, 20, 147, 255);
t.sort(function(t, e) {
return e - t;
});
t.forEach(function(t, e, u) {
if (t > 0) if (t < 100) {
a = "劣质木器";
i = t;
n.creatText(c, "item" + e, a + ".lv" + i, 36, 60, o);
} else if (t < 200) {
a = "普通木器";
i = t - 100;
n.creatText(c, "item" + e, a + ".lv" + i, 36, 60, r);
} else if (t < 300) {
a = "优质木器";
i = t - 200;
n.creatText(c, "item" + e, a + ".lv" + i, 36, 60, s);
} else if (t < 400) {
a = "极品木器";
i = t - 300;
n.creatText(c, "item" + e, a + ".lv" + i, 36, 60, l);
}
});
}
function C() {
e.itemNum3.every(function(t) {
return 0 === t;
}) ? c.playText("Canvas/UI3/notify", "没有可丢弃的木器~", 80) : function() {
var t = function() {
var t = e.itemNum3.slice(0);
t.forEach(function(t, e, c) {
0 === t && (c[e] = 999999);
});
return t.indexOf(Math.min.apply(Math, t));
}();
e.itemNum3[t] = 0;
(function() {
cc.find("Canvas/UI3/bag3").removeAllChildren();
y();
})();
}();
}
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_public: "scr_public"
} ],
scr_build: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "a357esql0REUJfGcuMy2byY", "scr_build");
cc.Class({
extends: cc.Component,
properties: {
itemUI: {
default: null,
type: cc.Prefab
}
},
creatText: function(t, e, c) {
var n = new cc.Node(e);
n.addComponent(cc.Label);
n.parent = t;
n.setPosition(0, -300);
n.color = new cc.Color(0, 255, 0);
n.getComponent(cc.Label).overflow = 3;
n.setContentSize(530, 300);
n.getComponent(cc.Label).string = c;
n.getComponent(cc.Label).lineHeight = 80;
n.getComponent(cc.Label).fontSize = 40;
},
itemContent: function() {
var e = t("scr_data"), c = t("scr_public"), n = this, a = {
0: {
itemName: "木屋LV" + e.build[0],
needDes: "※需【松木】" + e.itemNum[11] + "/" + parseInt((6 + 6 * e.build[0]) * (1 - .2 * e.charaLv[0][7] - .4 * e.charaLv[0][15])),
des: "※休息时额外恢复" + 50 * e.build[0] + "点生命，增加晓月" + 2 * e.build[0] + "点心情。附加【木屋的守护】效果：休息后，如果被怪物袭击，则本次战斗中每回获得" + 20 * e.build[0] + "点治疗效果。",
ifEnough: function(t) {
e.itemNum[11] >= parseInt((6 + 6 * e.build[0]) * (1 - .2 * e.charaLv[0][7] - .4 * e.charaLv[0][15])) && (cc.find("Canvas/Page/view/content/page_1/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function() {
var t = parseInt((6 + 6 * e.build[0]) * (1 - .2 * e.charaLv[0][7] - .4 * e.charaLv[0][15]));
if (e.itemNum[11] >= t) {
e.itemNum[11] -= t;
e.build[0] += 1;
c.playText("Canvas/notify", "木屋等级+1！", 100);
n.delayCreatItemUI();
} else c.playText("Canvas/notify", "材料不足！", 100);
}
},
2: {
itemName: "菜园（成长" + e.publicVar3[11] * (1 + .2 * e.charaLv[1][4] + .4 * e.charaLv[1][9]) + "）",
needDes: "※需【肥料】" + e.itemNum[2] + "/8 木屋LV" + e.build[7] + "/1",
des: "※可在【主角】—>【强化】界面使用【采摘】指令，升级可提高菜园食物成长值。",
ifEnough: function(t) {
e.itemNum[2] >= 8 && (cc.find("Canvas/Page/view/content/page_1/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function() {
if (e.build[0] >= 1) {
if (e.itemNum[2] >= 8) {
e.itemNum[2] -= 8;
e.publicVar3[11] += 1;
c.playText("Canvas/notify", "菜园食物成长+1", 100);
n.delayCreatItemUI();
} else c.playText("Canvas/notify", "肥料不够！", 100);
} else c.playText("Canvas/notify", "木屋等级不够~", 100);
}
}
};
return a;
},
creatPrefab: function(t, e) {
var c = cc.instantiate(this.itemUI), n = this.itemContent()[t], a = n.button, i = "item" + t;
c.name = i;
c.getChildByName("button").getChildByName("name").getComponent("cc.Label").string = n.itemName;
c.getChildByName("need").getComponent("cc.Label").string = n.needDes;
c.getChildByName("des").getComponent("cc.Label").string = n.des;
c.getChildByName("button").getChildByName("name").getComponent("cc.Button").scheduleOnce(function() {
c.getChildByName("button").getChildByName("name").on("touchstart", a, this);
}, .4);
cc.find("Canvas/Page/view/content").getChildByName(e).addChild(c);
"undefined" != typeof n.ifEnough && n.ifEnough(i);
},
creatItemUI1: function() {
cc.find("Canvas/Page/view/content/page_1").removeAllChildren();
for (var t = 0; t <= 3; t++) this.creatPrefab(t, "page_1");
},
creatItemUI2: function() {
if (t("scr_data").day < 9999) this.creatText(cc.find("Canvas/Page/view/content/page_2"), "notify", "※开发中~"); else {
cc.find("Canvas/Page/view/content/page_2").removeAllChildren();
for (var e = 4; e <= 7; e++) this.creatPrefab(e, "page_2");
}
},
creatItemUI3: function() {
if (t("scr_data").day < 9999) this.creatText(cc.find("Canvas/Page/view/content/page_3"), "notify", "※开发中~"); else {
cc.find("Canvas/Page/view/content/page_3").removeAllChildren();
for (var e = 8; e <= 11; e++) this.creatPrefab(e, "page_3");
}
},
delayCreatItemUI: function() {
var t = this;
this.scheduleOnce(function() {
t.creatItemUI1();
t.creatItemUI2();
}, .2);
},
delayCreatItemUI1: function() {
this.scheduleOnce(this.creatItemUI1, .2);
},
delayCreatItemUI2: function() {
this.scheduleOnce(this.creatItemUI2, .2);
},
delayCreatItemUI3: function() {
this.scheduleOnce(this.creatItemUI3, .2);
},
onLoad: function() {
this.creatItemUI1();
this.creatItemUI2();
this.creatItemUI3();
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_public: "scr_public"
} ],
scr_continueButton: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "4ffa5hmUdNEyJa2jWF2c0nr", "scr_continueButton");
cc.Class({
extends: cc.Component,
properties: {},
callBack: function() {
JSON.parse(cc.sys.localStorage.getItem("userData")) && cc.director.loadScene("main");
},
onLoad: function() {
this.node.on("touchstart", this.callBack, this);
}
});
cc._RF.pop();
}, {} ],
scr_data2: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "d8d8cLNPrxKrK2Q9m0tZRP9", "scr_data2");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var t = {
gameData: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
};
JSON.parse(cc.sys.localStorage.getItem("adoptData")) && (t = JSON.parse(cc.sys.localStorage.getItem("adoptData")));
e.exports = t;
}
});
cc._RF.pop();
}, {} ],
scr_data: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "cc6a6czpoJOeJjLRi9RcHDb", "scr_data");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var t = {
role: {
hp: 100,
maxHp: 100,
att: 10,
def: 0
},
money: 0,
day: 0,
energy: 100,
maxEnergy: 100,
health: 20,
enemyId: 0,
publicVar: [ 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
publicVar2: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
publicVar3: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
publicVar4: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
publicVar5: [ !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1 ],
publicVar6: [ !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1 ],
publicVar7: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
p: [],
itemNum: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
itemNum2: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
itemNum3: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
ifFollow: [ 0, 0, 0 ],
att: [ [ 8, 0, 0, 0, 0 ], [ 100, 200, 20, 20, 0 ], [ 6, 10, 20, 0, 0 ] ],
ifNotify: !1,
plotId: 0,
startUI: 0,
shabi: 0,
charaLv: [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ] ],
specialEnemy: {
100001: {
lv: 5,
hp: 251,
maxHp: 251,
att: 0,
def: 0
},
100002: {
lv: 1,
hp: 60,
maxHp: 60,
att: 10,
def: 0
},
200001: {
lv: 15,
hp: 360,
maxHp: 360,
att: 48,
def: 12
},
200002: {
lv: 8,
hp: 310,
maxHp: 310,
att: 20,
def: 0
},
300003: {
lv: 15,
hp: 600,
maxHp: 600,
att: 22,
def: 0
},
400001: {
lv: 1,
hp: 60,
maxHp: 60,
att: 1,
def: 0
}
}
};
JSON.parse(cc.sys.localStorage.getItem("userData")) && (t = JSON.parse(cc.sys.localStorage.getItem("userData")));
e.exports = t;
}
});
cc._RF.pop();
}, {} ],
scr_effect: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "25c8dKmEHlHoYjQ6qvBKaef", "scr_effect");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var t = this, c = {
playText: function(t, e, c) {
var n = 0;
cc.game.startPlay && window.clearTimeout(cc.game.startPlay);
(function a() {
if (null != cc.find(t)) if (n <= e.length) {
var i = e.slice(0, n++);
cc.find(t).getComponent("cc.Label").string = i;
cc.game.startPlay = window.setTimeout(a, c);
} else cc.game.startPlay && window.clearTimeout(cc.game.startPlay);
})();
},
textZoon: function(t) {
var e = cc.sequence(cc.scaleTo(.2, 1.2), cc.scaleTo(.2, 1));
cc.find(t).runAction(e);
},
blink2: function(t) {
var e = cc.sequence(cc.tintBy(.1, 0, -200, -200), cc.tintBy(.1, 0, 200, 200));
cc.find(t).runAction(e);
},
blink: function(e) {
var c = 0;
t.schedule(function() {
var t = c % 2;
cc.find(e).color = new cc.Color(255, 255 - 200 * t, 255 - 200 * t);
c++;
}, .06, 4);
},
textZoon2: function(t) {
cc.find(t).setScale(0, 0);
var e = cc.sequence(cc.scaleTo(.2, 1.3), cc.scaleTo(.1, 1));
cc.find(t).runAction(e);
},
attackEfect1: function() {
var t = cc.find("Canvas/Text").children, e = cc.find("Canvas/Fight").children;
for (var c in t) {
var n = 500 * Math.random() - 300, a = 1e3 * Math.random() - 500;
t[c].x = n;
t[c].y = a;
}
for (var i in e) {
var o = 500 * Math.random() - 300, r = 1e3 * Math.random() - 500;
e[i].x = o;
e[i].y = r;
}
}
};
e.exports = c;
}
});
cc._RF.pop();
}, {} ],
scr_end: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "0fdab+YcARFVIOBpUAMxsNQ", "scr_end");
cc.Class({
extends: cc.Component,
properties: {},
creatText: function(t, e, c) {
var n = new cc.Node(e);
n.addComponent(cc.Label);
n.parent = t;
n.setPosition(0, 0);
n.opacity = 0;
n.runAction(cc.fadeIn(.03));
n.color = new cc.Color(255, 255, 255);
n.getComponent(cc.Label).overflow = 3;
n.getComponent(cc.Label).horizontalAlign = 0;
n.setContentSize(640, 300);
n.getComponent(cc.Label).string = c;
n.getComponent(cc.Label).lineHeight = 50;
n.getComponent(cc.Label).fontSize = 34;
},
onLoad: function() {
var e = [ "我知道，将剧情停在这里，非常的残忍；", "但是，就这么几千个剧情文字，却已花去我一年的时间。", "我绝不是一个运用文字的好手，只能花费别人几倍的时间，来琢磨每一个文字、句子和场景；", "然而，即便如此，文中依然有不少问题；", "如果您发现一些问题——尤其是标点错误和病句——请在我的公众号留言，我会一一查看。", "下一次剧情大幅更新，可能需要等待很久很久——真的、真的很抱歉；", "但是，无论多久，我一定会完成这部作品。请，耐心等待——2019.4.1 晓风" ], c = (e.length, 
this), n = (t("scr_adoptData"), t("scr_data"), 0), a = cc.find("Canvas/Show"), i = cc.find("Canvas/choice"), o = i.getChildByName("determine1"), r = i.getChildByName("determine2"), s = t("scr_public");
t("scr_public").save2();
function l() {
c.creatText(a, "plot" + n, e[n]);
n++;
}
(function() {
window.setInterval(function() {
var e = {
1000: function() {
l();
},
4000: function() {
l();
},
7000: function() {
l();
},
10000: function() {
l();
},
13000: function() {
l();
},
16000: function() {
l();
},
19000: function() {
l();
},
23000: function() {
(function() {
i.active = !0;
i.runAction(cc.fadeIn(.02));
o.on("touchstart", u, this);
r.on("touchstart", p, this);
})();
}
};
"undefined" != typeof e[t += 1e3] && e[t]();
}, 1e3);
var t = 0;
})();
function u() {
cc.director.loadScene("start");
}
function p() {
s.save2();
JSON.parse(cc.sys.localStorage.getItem("userData")) && cc.sys.localStorage.removeItem("userData");
cc.director.loadScene("start");
}
}
});
cc._RF.pop();
}, {
scr_adoptData: "scr_adoptData",
scr_data: "scr_data",
scr_public: "scr_public"
} ],
scr_enemy: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "9ca7eoc05dELIgnx18JSNGI", "scr_enemy");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var c = t("scr_public"), n = t("scr_data"), a = {
maxHp: c.role.maxHp(),
att: c.role.att(),
def: c.role.def()
}, i = {
0: {
name: [ "女贼" ],
lv: 1,
hp: 10,
maxHp: 10,
att: 0,
def: 0,
escapeRate: 10,
poisonRes: 10,
lostHealth: 30,
type: 0,
enemyEscapeRate: 0,
mapId: 0,
publicVar: 0,
publicVar2: 0,
drop: [ [ 5, 0, 1, 1 ] ],
des: "遭到怪物袭击！",
skill: function() {
n.money -= 1;
n.role.hp -= 1;
return "【你被偷走0.1元,hp-1】！";
},
defSkill: void 0,
winEvent: function() {
var t = cc.find("Canvas/notify"), e = t.getComponent("cc.Label");
t.y = 70;
e.fontSize = 30;
e.lineHeight = 40;
return "习得技能「爆发」。\n“我出身在一个富裕的干部家庭，爸爸从小对我十分宠爱，正是这种宠爱，使我养成了骄横、自我的性格，读书时拉帮结派、到处惹事；高中过后我开始混迹社会，也就在这时，爸爸的宠爱逐渐转变成怨恨，常常骂我是个废物；我难以接受，想做出一番事业，不依靠任何人、从最底层开始；但可能我天生就不善于做生意，脸皮薄、意气用事，不愿跟人讲价，进货成本极高，卖的东西又贵——几乎没什么顾客；于是我想找中年城管帮个忙，给我找个好位置，但是他拒绝了，最后我只能亏本清货——这个我不怪他，是我自己太傻；但是，他却将这些情况告诉了我爸。我去找他理论，在拉扯中，他的手抓破了我的脸；我不知道当时是怎么想的，可能是想到了自己的努力换来的却这种结果，可能是习惯性的把错误推给别人——我掏出了刀子；等我回过神来，他已经倒在了血泊中；自从杀害中年城管后，我没有那一时刻不在后悔，我即毁了别人的家庭，也毁了自己...”\n随后你将纹身男押到警察局。获得50元悬赏金。";
},
lostEvent: function() {
t("scr_data").money -= 1;
return "被抢1元！";
}
},
1: {
name: [ "松鼠" ],
lv: 1,
hp: 50,
maxHp: 50,
att: 10,
def: 0,
escapeRate: 60,
poisonRes: -20,
lostHealth: 100,
type: 1,
enemyEscapeRate: 0,
mapId: 1,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 0, 1, 1 ], [ 40, 16, 1, 1 ], [ 3, 16, 3, 1 ] ],
des: "咯~咯~",
skill: function() {
if (100 * Math.random() < 50) {
return [ parseInt(2 * this.att), "松鼠朝你扔了一个刺球，正好砸头上！" ];
}
if (100 * Math.random() < 30 && 0 === this.publicVar) {
this.publicVar = 1;
return [ 0, "松鼠朝你扔了一个刺球，但是砸歪了！你用脚尖剥开刺球，发现一颗板栗！你获得「食物」*1" ];
}
this.publicVar2 += 1;
return 1 === this.publicVar && this.publicVar2 > 10 ? [ 0, "松鼠朝你扔了一个刺球，但是砸歪了！你用脚尖剥开刺球，并没有发现板栗，实在可惜（别再刷啦，不可能有的~）。" ] : [ 0, "松鼠朝你扔了一个刺球，但是砸歪了！你用脚尖剥开刺球，并没有发现板栗，实在可惜。" ];
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
2: {
name: [ "土公蛇" ],
lv: 5,
hp: 125,
maxHp: 125,
att: 20,
def: 5,
escapeRate: 60,
poisonRes: 80,
lostHealth: 100,
type: 1,
enemyEscapeRate: 0,
mapId: 1,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 27, 1, 1 ], [ 80, 6, 1, 1 ], [ 3, 6, 6, 1 ] ],
des: "嘶~嘶~",
skill: function() {
if (100 * Math.random() < 50) {
var t = parseInt(.5 * this.att);
cc.find("Event/scr_fight").getComponent("scr_fight").buff[4] += t;
return [ 1, "土公蛇亲了你一下，附加" + t + "点毒素！" ];
}
return [ 0, "土公蛇想亲你，但是被你推开了！" ];
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
3: {
name: [ "偷瓜獾（刺团）", "刺团" ],
lv: 10,
hp: 199,
maxHp: 199,
att: 34,
def: 20,
escapeRate: 100,
poisonRes: -10,
lostHealth: 100,
type: 1,
enemyEscapeRate: 0,
mapId: 1,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 0, 1, 1 ], [ 80, 1, 1, 1 ], [ 50, 17, 1, 1 ], [ 5, 0, 6, 1 ] ],
des: "嘤~嘤~",
skill: function() {
if (cc.find("Event/scr_fight").getComponent("scr_fight").haveFigth > 0) {
var t = Math.ceil(.1 * this.def);
this.def += t;
return [ 0, "刺团身子缩得更紧了，防御提高" + t + "点。" ];
}
this.enemyEscapeRate += 4;
return [ 0, "刺团见你停止了进攻，于是准备找准时机开溜了——刺团逃跑率提高4%！" ];
},
defSkill: function() {
if (100 * Math.random() < 50) {
var t = Math.min(this.def, 2 * this.att);
n.role.hp -= t;
return "你受到" + t + "点反伤！";
}
return "";
},
winEvent: void 0,
lostEvent: void 0
},
4: {
name: [ "黄皮子" ],
lv: 15,
hp: 288,
maxHp: 288,
att: 40,
def: 0,
escapeRate: 60,
poisonRes: 50,
lostHealth: 100,
type: 1,
enemyEscapeRate: 0,
mapId: 1,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 0, 1, 1 ], [ 80, 27, 1, 1 ], [ 70, 16, 1, 1 ], [ 50, 14, 1, 1 ], [ 3, 14, 6, 1 ] ],
des: "嗷~嗷~",
skill: function() {
if (0 === this.publicVar) {
if (100 * Math.random() < 20) {
var t = Math.ceil(.05 * this.att);
this.publicVar = 1;
this.att += t;
return [ 0, "黄皮子全身毛发竖立——攻击提高" + t + "点，且下次攻击必定暴击！" ];
}
return [ this.att, "黄皮子发起攻击，" ];
}
var e = parseInt(1.5 * this.att);
this.publicVar = 0;
cc.find("Event/scr_fight").getComponent("scr_fight").buff[3] += 1;
return [ e, "黄皮子发起攻击，触发【暴击】，附加1层流血！", "黄皮子的毛发恢复了原样。" ];
},
defSkill: function() {
if (100 * Math.random() < 30) {
var t = Math.ceil(.1 * this.att);
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= t;
return "黄皮子释放出难闻的气味，你的防御下降" + t + "。";
}
return "";
},
winEvent: void 0,
lostEvent: void 0
},
1001: {
name: [ "盐老鼠（第1波）", "盐老鼠" ],
lv: 5,
hp: 125,
maxHp: 125,
att: 15,
def: 0,
escapeRate: 100,
poisonRes: 10,
lostHealth: 100,
type: 1,
enemyEscapeRate: 0,
mapId: 0,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 0, 2, 1 ], [ 100, 6, 1, 1 ] ],
des: "遭到怪物袭击！",
skill: function() {
var e = Math.max(this.att - a.def, 5);
t("scr_data").role.hp -= e;
this.hp += e;
return [ 0, "盐老鼠吸取你" + e + "点生命！" ];
},
defSkill: void 0,
winEvent: function() {
n.energy += 20;
n.publicVar[3] += 1;
return "获得「击退袭击」专属奖励：精力+20！";
},
lostEvent: void 0
},
1002: {
name: [ "捣乱的山鼠（第2波）", "山鼠" ],
lv: 10,
hp: 207,
maxHp: 207,
att: 34,
def: 10,
escapeRate: 90,
poisonRes: 10,
lostHealth: 100,
type: 1,
enemyEscapeRate: 0,
mapId: 0,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 27, 2, 1 ], [ 100, 1, 1, 1 ] ],
des: "遭到怪物袭击！",
skill: function() {
if (100 * Math.random() < 30) {
return [ parseInt(1.5 * this.att), "山鼠发起攻击，触发【暴击】！" ];
}
return [ this.att, "山鼠发起攻击，" ];
},
defSkill: void 0,
winEvent: function() {
n.energy += 20;
n.publicVar[3] += 1;
return "获得「击退袭击」专属奖励：精力+20！";
},
lostEvent: void 0
},
1003: {
name: [ "偷食物的山狸子（第3波）", "山狸子" ],
lv: 15,
hp: 328,
maxHp: 328,
att: 44,
def: 14,
escapeRate: 80,
poisonRes: -10,
lostHealth: 100,
type: 1,
enemyEscapeRate: 0,
mapId: 0,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 0, 3, 1 ], [ 100, 16, 1, 1 ] ],
des: "遭到怪物袭击！",
skill: function() {
var t = 100 * Math.random();
if (this.publicVar >= 3) {
this.enemyEscapeRate += 100;
return [ 0, "山狸子觉得已经吃饱了，准备开开心心地回家啦——山狸子逃跑率提高100%..." ];
}
if (t < 60) {
if (n.itemNum[0] < 1) {
this.enemyEscapeRate += 100;
return [ 0, "山狸子钻进你的背包，发现没有食物，大失所望，伤心地准备离开啦——山狸子逃跑率提高100%。" ];
}
n.itemNum[0] -= 1;
this.hp += 40;
this.publicVar += 1;
return [ 0, "山狸子钻进你的背包，偷到「食物」*1，并且迅速按到了嘴里，吃掉！山狸子回复40生命，非常开心，准备再偷点~" ];
}
this.hp -= 10;
return [ 0, "山狸子不要命的往你背包中钻，但是被你一把摔了出去！山狸子受到10点伤害！" ];
},
defSkill: void 0,
winEvent: function() {
n.energy += 20;
n.publicVar[3] += 1;
return "获得「击退袭击」专属奖励：精力+20！";
},
lostEvent: void 0,
enemyEscapeEvent: function() {
n.itemNum[32] += 2;
return "山狸子逃跑后，你打开背包检查，一股刺鼻的气味扑面而来。你获得「肥料」*2";
}
},
1004: {
name: [ "复仇的山狸子（第4波）", "山狸子" ],
lv: 20,
hp: 370,
maxHp: 370,
att: 52,
def: 10,
escapeRate: 70,
poisonRes: -10,
lostHealth: 100,
type: 1,
enemyEscapeRate: 0,
mapId: 0,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 27, 2, 1 ], [ 100, 16, 1, 1 ], [ 100, 1, 1, 1 ] ],
des: "遭到怪物袭击！",
skill: function() {
if (0 === this.publicVar) {
if (100 * Math.random() < 30) return [ this.att, "山狸子攻击。" ];
this.publicVar = 1;
return [ 0, "山狸子炸毛啦——下次攻击必定触发「暴击」「吸血」！" ];
}
var t = parseInt(1.8 * this.att), e = parseInt(.3 * (t - a.def));
!1 === cc.find("Event/scr_fight").getComponent("scr_fight").haveDefend && (e *= 2);
this.hp += e;
this.publicVar = 0;
return [ t, "山狸子攻击，触发「暴击」！", "山狸子触发「吸血」，恢复" + e + "点生命。" ];
},
defSkill: void 0,
winEvent: function() {
n.energy += 20;
n.publicVar[3] += 1;
return "获得「击退袭击」专属奖励：精力+20！";
},
lostEvent: void 0
},
1005: {
name: [ "爱抢东西的皮皮猴（第5波）", "皮皮猴" ],
lv: 25,
hp: 452,
maxHp: 452,
att: 25,
def: 20,
escapeRate: 60,
poisonRes: 20,
lostHealth: 100,
type: 1,
enemyEscapeRate: 0,
mapId: 0,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 0, 4, 1 ], [ 100, 16, 2, 1 ], [ 100, 14, 2, 1 ] ],
des: "遭到怪物袭击！",
skill: function() {
var t = 100 * Math.random(), e = parseInt(a.att);
if (0 === this.publicVar2) {
this.publicVar2 = 1;
return [ 0, "皮皮猴在地上丢了一块西瓜皮..." ];
}
if (0 === this.publicVar) {
if (t < 50) {
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= e;
this.att += e;
this.publicVar = 1;
return [ 0, "你一脚踩到西瓜皮，滑倒在地，皮皮猴乘势抢走了你的武器；你的攻击降低" + e + "，皮皮猴攻击增加" + e + "！" ];
}
return [ this.att, "皮皮猴发起攻击。" ];
}
if (t < 30) {
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] += e;
this.att -= e;
this.publicVar = 0;
return [ 0, "皮皮猴一脚踩到西瓜皮，四肢不稳，武器掉到地上，你乘机捡回了武器；你的攻击增加" + e + "，皮皮猴攻击减少" + e + "！" ];
}
return [ this.att, "皮皮猴闭着眼睛、胡乱挥舞着武器。" ];
},
defSkill: void 0,
winEvent: function() {
n.energy += 20;
n.publicVar[3] += 1;
return "";
},
lostEvent: void 0
},
1006: {
name: [ "路过的强盗（第6波）", "强盗" ],
lv: 30,
hp: 533,
maxHp: 533,
att: 86,
def: 22,
escapeRate: 50,
poisonRes: 10,
lostHealth: 200,
type: 2,
enemyEscapeRate: 0,
mapId: 0,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 99, 12, 3 ], [ 100, 7, 2, 1 ], [ 100, 10, 1, 1 ] ],
des: "遭到怪物袭击！",
skill: function() {
if (n.money >= 1) {
this.enemyEscapeRate += 4;
n.money -= 1;
this.publicVar += 1;
return [ 0, "你被偷走1元！强盗逃跑率提高4%" ];
}
this.enemyEscapeRate += 100;
return [ 3 * this.att, "“你这种穷鬼，死了也没人知道的~”，强盗刺了你一刀。强盗逃跑率提高100%" ];
},
defSkill: void 0,
winEvent: function() {
n.energy += 20;
n.publicVar[3] += 1;
n.money += this.publicVar;
return "获得「击退袭击」专属奖励：精力+20！你抢回被偷的钱。";
},
lostEvent: void 0
},
1007: {
name: [ "火狐（最终波）", "火狐" ],
lv: 35,
hp: 615,
maxHp: 615,
att: 102,
def: 26,
escapeRate: 100,
poisonRes: 40,
lostHealth: 100,
type: 1,
enemyEscapeRate: 0,
mapId: 0,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 16, 2, 1 ], [ 100, 14, 4, 1 ], [ 100, 5, 10, 1 ], [ 100, 1, 2, 1 ], [ 100, 9, 1, 1 ] ],
des: "遭到怪物袭击！",
skill: function() {
t("scr_data");
if (100 * Math.random() < 30) {
var e = parseInt(.05 * a.att);
this.att += e;
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= e;
return [ 0, "火狐使用迷惑，你被偷取5%的攻击。" ];
}
return [ this.att, "火狐攻击，" ];
},
defSkill: function() {
t("scr_data");
if (100 * Math.random() < 30) {
var e = parseInt(.2 * (this.maxHp - this.hp));
this.hp += e;
return "火狐使用「自愈」，恢复自身20%已损失的生命！";
}
return "";
},
winEvent: function() {
n.energy += 20;
n.publicVar[3] += 1;
n.maxEnergy += 10;
c.save();
return "获得「击退袭击」专属奖励：精力+20！你已击败本章全部袭击怪，触发【成就体验】，精力上限提高10点！";
},
lostEvent: void 0
},
2001: {
name: [ "劈砖大师", "大师" ],
lv: 10,
hp: 207,
maxHp: 207,
att: 34,
def: 9,
escapeRate: -9999,
poisonRes: 10,
lostHealth: 0,
type: 2,
enemyEscapeRate: 0,
mapId: 0,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 7, 2, 1 ] ],
des: "",
skill: function() {
var t = 100 * Math.random(), e = 30 + 10 * this.publicVar;
this.publicVar += 1;
if (t < e) {
this.hp -= 30;
return [ 2 * this.att, "大师使用劈砖掌，自损30点生命，" ];
}
return [ this.att, "大师发起攻击，" ];
},
defSkill: void 0,
winEvent: function() {
n.publicVar2[9] += 1;
n.money += 4;
return "比武胜利，获得奖金4元！";
},
lostEvent: void 0
},
2002: {
name: [ "太极爷爷" ],
lv: 15,
hp: 307,
maxHp: 307,
att: 45,
def: 11,
escapeRate: -9999,
poisonRes: 20,
lostHealth: 0,
type: 2,
enemyEscapeRate: 0,
mapId: 0,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 2, 2, 1 ] ],
des: "",
skill: function() {
var t = cc.find("Event/scr_fight").getComponent("scr_fight"), e = this.publicVar % 3;
this.publicVar += 1;
if (0 == e) {
t.correct[0] -= parseInt(.03 * a.def);
return [ this.att, "太极爷爷使用太极掌，", "你的攻击降低3%。" ];
}
if (1 == e) {
t.correct[1] -= parseInt(.06 * a.def);
return [ this.att, "太极爷爷使用太极拳，", "你的防御降低6%。" ];
}
return [ parseInt(1.5 * this.att), "太极爷爷使用太极铁头！" ];
},
defSkill: void 0,
winEvent: function() {
n.publicVar2[9] += 1;
n.money += 6;
return "比武胜利，获得奖金6元！";
},
lostEvent: void 0
},
2003: {
name: [ "耍猴人" ],
lv: 18,
hp: 394,
maxHp: 394,
att: 46,
def: 30,
escapeRate: -9999,
poisonRes: 10,
lostHealth: 0,
type: 2,
enemyEscapeRate: 0,
mapId: 0,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 10, 1, 1 ] ],
des: "",
skill: function() {
var t = cc.find("Event/scr_fight").getComponent("scr_fight");
if (t.poisonDem > 0) {
var e = c.herbRe()[0];
this.hp += e;
t.poisonDem = 0;
return [ 0, "耍猴人使用「伤药」，恢复" + e + "点生命，清除自身毒素。" ];
}
if (t.haveFigth > 0) {
this.att += 3;
this.def -= 3;
return [ this.att, "耍猴人学着你，发起攻击。", "耍猴人攻击提升3点，但防御下降3点。" ];
}
if (t.haveEat > 0) {
t.buff[4] += 30;
return [ 0, "耍猴人在你张嘴吃药的瞬间，朝你吐了一口唾沫，你中毒啦..." ];
}
if (t.haveEscape > 0) {
if (this.publicVar2 < 3) {
this.hp -= 1;
this.def -= 10;
this.att += 10;
return [ 0, "耍猴人学着你逃跑，却不小心踩到自己的鞋带，摔了一跤。耍猴人损失1点生命，暴跳如雷，防御-10，攻击+10。" ];
}
return [ parseInt(1.5 * this.att), "“？”，耍猴人发起攻击，触发【暴击】！" ];
}
if (t.haveDefend > 0) {
this.def += 6;
return [ 0, "耍猴人看见你在防御，便乘机加了一件衣服，防御提高6点！" ];
}
return [ 0, "耍猴人在发呆" ];
},
defSkill: void 0,
winEvent: function() {
n.publicVar2[9] += 1;
n.money += 8;
return "比武胜利，获得奖金8元！";
},
lostEvent: void 0
},
2004: {
name: [ "薛郎中" ],
lv: 22,
hp: 488,
maxHp: 488,
att: 67,
def: 17,
escapeRate: -9999,
poisonRes: 50,
lostHealth: 0,
type: 2,
enemyEscapeRate: 0,
mapId: 0,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 28, 1, 1 ], [ 100, 27, 4, 1 ] ],
des: "",
skill: function() {
this.publicVar2 += 1;
if (this.publicVar2 % 2 == 1) {
this.publicVar += 6;
return [ 0, "薛郎中倒吸一口，发出绵长又刺耳的哈痰声。" ];
}
var t = 30 + this.publicVar;
cc.find("Event/scr_fight").getComponent("scr_fight").buff[4] += t;
return [ 0, "薛郎中朝你吐了一口老痰，你中毒啦，毒素+" + t + "！" ];
},
defSkill: function() {
var t = cc.find("Event/scr_fight").getComponent("scr_fight"), e = 6 * t.poisonDem;
if (e > 0) {
this.hp += e;
t.poisonDem = 0;
return "薛郎中吸收了体内的毒素，并恢复" + e + "点生命！";
}
},
winEvent: function() {
n.publicVar2[9] += 1;
n.money += 10;
return "比武胜利，获得奖金10元！";
},
lostEvent: void 0
},
2005: {
name: [ "赵屠夫" ],
lv: 26,
hp: 585,
maxHp: 585,
att: 70,
def: 28,
escapeRate: -9999,
poisonRes: -10,
lostHealth: 0,
type: 2,
enemyEscapeRate: 0,
mapId: 0,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 0, 10, 1 ], [ 100, 10, 1, 1 ] ],
des: "",
skill: function() {
var t = this.publicVar, e = parseInt(this.att * (1 + t / 300));
if (t >= 100) {
var c = parseInt(.4 * e), n = parseInt(1.4 * e);
!1 === cc.find("Event/scr_fight").getComponent("scr_fight").haveDefend && (c *= 2);
this.hp += c;
this.publicVar = 0;
return [ n, "赵屠夫释放全部怒气，全力一击，", "赵屠夫感到心情舒畅，并恢复" + c + "点生命。" ];
}
return [ e, "赵屠夫发起攻击，" ];
},
defSkill: function() {
if (1 === cc.find("Event/scr_fight").getComponent("scr_fight").haveCrit) {
this.publicVar += 40;
return "赵屠夫暴跳如雷，获得40点怒气（累计" + this.publicVar + "）";
}
this.publicVar += 20;
return "赵屠夫获得20点怒气（累计" + this.publicVar + "）";
},
winEvent: function() {
n.publicVar2[9] += 1;
n.money += 12;
return "比武胜利，获得奖金12元！";
},
lostEvent: void 0
},
2006: {
name: [ "皮影师" ],
lv: 30,
hp: 688,
maxHp: 688,
att: 89,
def: 32,
escapeRate: -9999,
poisonRes: 20,
lostHealth: 0,
type: 2,
enemyEscapeRate: 0,
mapId: 0,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 1, 4, 1 ], [ 100, 26, 1, 1 ] ],
des: "",
skill: function() {
if (1 === this.publicVar) {
var t = parseInt(1.5 * a.att);
this.publicVar = 0;
cc.find("Event/scr_fight").getComponent("scr_fight").addBlock -= 999;
return [ t, "皮影师用力扯动绳子，啪地一声，你强壮的右手、重重地抽在自己脸上！" ];
}
var e = 100 * Math.random();
if (e < 30 && n.itemNum[7] > 0) {
var i = c.herbRe()[0];
n.itemNum[7] -= 1;
this.hp += i;
return [ 0, "皮影师掏出一个鱼竿，唰地一声，勾走你一个「伤药」，并迅速按进口里——皮影师恢复" + i + "点生命！你失去「伤药」*1。" ];
}
if (e < 50 || this.publicVar2 > 4) {
this.publicVar2 += 1;
if (4 === this.publicVar2) {
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= parseInt(.55 * a.def);
return [ 0, "皮影师甩出勾绳，勾住你的衣角，用力一扯，你一个琅跄，原地转三圈——衣服被勾个精光，防御清零！" ];
}
if (this.publicVar2 < 4) {
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= parseInt(a.def * (.05 * this.publicVar2 + .05));
return [ 0, "皮影师甩出勾绳，哗地扯开了你衣服上的第" + this.publicVar2 + "颗扣子——你防御降低" + (5 * this.publicVar2 + 5) + "%！" ];
}
return [ this.att, "皮影师抖了抖手中的绳子，啪地一声，狠狠抽在你娇嫩的肉上。" ];
}
this.publicVar = 1;
return [ 0, "皮影师嗖地甩出一个套绳，麻利地套在你的右手上！" ];
},
defSkill: void 0,
winEvent: function() {
n.publicVar2[9] += 1;
n.maxEnergy += 10;
n.money += 14;
return "恭喜！你在老年人活动中心，击败了全部的挑战者！一位百岁老人亲自给你戴上大红花！触发【成就体验】，精力上限+10！获得奖金14元。";
},
lostEvent: void 0
},
5001: {
name: [ "不娘少女(第1关)", "少女" ],
lv: 15,
hp: 328,
maxHp: 328,
att: 48,
def: 12,
escapeRate: 40,
poisonRes: 10,
lostHealth: 100,
type: 2,
enemyEscapeRate: 0,
mapId: 7,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 7, 2, 1 ], [ 100, 17, 2, 1 ] ],
des: "少女：“走路不长眼睛啊！非撞我怀里？”",
skill: function() {
var t = this.publicVar % 2, e = cc.find("Event/scr_fight").getComponent("scr_fight");
this.publicVar += 1;
if (0 === t) {
e.correct[1] -= parseInt(.25 * a.def);
return [ 0, "不娘少女捉住你的头，在她肥硕的苹果肚揉了揉，你的防御降低25%。" ];
}
var c = parseInt(1.5 * this.att);
e.correct[1] -= parseInt(.1 * a.def);
return [ c, "不娘少女抓你你的头，“砰”地摔到墙上，", "你觉得头晕眼花，防御降低10%！" ];
},
defSkill: void 0,
winEvent: function() {
n.publicVar3[20] += 1;
cc.find("Canvas/UI/map/school/explore/text").getComponent("cc.Label").string = "探索(" + Math.min(2 * n.publicVar3[20], 100) + "%)";
return "少女：“真是倒霉！撩的第一个小伙，就是一个愣头青。”";
},
lostEvent: function() {
return "少女：“唉——别跑哇！还没玩够呢~”【提示：三中怪必须打败才能继续前进】";
}
},
5002: {
name: [ "来学校放牛的老乡(第2关)", "老乡" ],
lv: 20,
hp: 440,
maxHp: 440,
att: 55,
def: 15,
escapeRate: 35,
poisonRes: 10,
lostHealth: 100,
type: 2,
enemyEscapeRate: 0,
mapId: 7,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 11, 2, 1 ], [ 100, 14, 2, 1 ] ],
des: "老乡：“小伙子——让一下！你挡着我的牛啦~”",
skill: function() {
if (100 * Math.random() < 35 + this.publicVar) {
cc.find("Event/scr_fight").getComponent("scr_fight").buff[3] += 1;
return [ 2 * this.att, "老乡骑着水牛向你冲了过来，你被狠狠地顶了一下！", "附加1层流血" ];
}
var t = this.att - this.def;
this.hp -= t;
this.att += parseInt(.05 * this.att);
this.publicVar += 5;
return [ 0, "老乡骑着水牛向你冲了过来，但是撞到了树上，牛损失" + t + "点生命；老乡觉得很没面子，狠狠抽了牛一鞭子，牛的攻击提高5%，且下次命中提升5%。" ];
},
defSkill: void 0,
winEvent: function() {
n.publicVar3[20] += 1;
cc.find("Canvas/UI/map/school/explore/text").getComponent("cc.Label").string = "探索(" + Math.min(2 * n.publicVar3[20], 100) + "%)";
return "老乡：“行行行，我让开！好了吧？”";
},
lostEvent: function() {
return "老乡：“叫你让开，你非不让，这下好了吧？”【提示：三中怪必须打败才能继续前进】";
}
},
5003: {
name: [ "放弃升学的三少爷(第3关)", "三少爷" ],
lv: 25,
hp: 560,
maxHp: 560,
att: 65,
def: 35,
escapeRate: 45,
poisonRes: 0,
lostHealth: 100,
type: 2,
enemyEscapeRate: 0,
mapId: 7,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 7, 3, 1 ], [ 100, 10, 1, 1 ] ],
des: "三少爷：“这位同学，要不要，下海（去沿海一带打工）？工资高，美女多哟~”",
skill: function() {
var t = cc.find("Event/scr_fight").getComponent("scr_fight"), e = this.publicVar, c = parseInt(.4 * this.att), n = function() {
if (t.poisonDem > 0) {
var e = t.poisonDem;
t.buff[4] += e;
t.poisonDem = 0;
return "三少爷「呕吐」，将脏物吐到你的身上！（三少爷毒素清零，你的毒素增加" + e + "）";
}
return "";
};
this.publicVar += 1;
if (0 === e) {
this.escapeRate -= 9999;
return [ 0, "三少爷拦住去路，将你逼到了墙角，你的逃跑率降为0。" ];
}
if (1 === e) {
t.buff[4] += c;
return [ 0, "三少爷突然扑过来，抱住你，舔了你一下，附加" + c + "点毒素。" + n() ];
}
t.buff[4] += c;
return [ 0, "三少爷舔了你一下，附加" + c + "点毒素。" + n() ];
},
defSkill: void 0,
winEvent: function() {
n.publicVar3[20] += 1;
cc.find("Canvas/UI/map/school/explore/text").getComponent("cc.Label").string = "探索(" + Math.min(2 * n.publicVar3[20], 100) + "%)";
return "“哎呀~不去就不去嘛~哼！等我当上老板、你考上大学，我把你招过来——专门给我舔脚！”";
},
lostEvent: function() {
n.itemNum[7] += 1;
return "“哎呀！不好意思啊，没啥事吧？怎么就晕倒了呢？”三少爷不知所措，掏出一瓶伤药，塞到你手里，挠挠头，离开了。获得「伤药」*1。【提示：三中怪必须打败才能继续前进】";
}
},
5004: {
name: [ "纪律委员会(光杆)老师(第4关)", "纪律老师" ],
lv: 30,
hp: 688,
maxHp: 688,
att: 65,
def: 40,
escapeRate: 25,
poisonRes: 20,
lostHealth: 100,
type: 2,
enemyEscapeRate: 0,
mapId: 7,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 7, 2, 1 ], [ 100, 1, 2, 1 ], [ 100, 26, 1, 1 ] ],
des: "纪律老师：“快去上课！听见没！”",
skill: function() {
var t = this.publicVar;
this.publicVar += 1;
if (0 === t) return [ this.att, "纪律老师走过来，一把揪住你的耳朵。" ];
if (1 === t) return [ 0, "“几年级、哪个班啊？”纪律老师揪着你的耳朵问道。" ];
if (2 === t) return [ 0, "“眼睛瞪那么大干嘛，老师问你话呢？”" ];
if (3 === t) return [ 0, "“不服气是吧，我有一百种方法叫你服气。”" ];
var e = parseInt(this.att);
if (100 * Math.random() < 50) {
cc.find("Event/scr_fight").getComponent("scr_fight").buff[3] += 1;
return [ e, "纪律老师飞起来就是一脚，锃亮的皮鞋踢在你脸上", "附加1层流血。" ];
}
return [ e, "纪律老师飞起来就是一脚，" ];
},
defSkill: function() {
if (cc.find("Event/scr_fight").getComponent("scr_fight").haveFigth > 0) {
this.att += 2;
return "“嘿——还敢还手？！”纪律老师攻击提高2点。";
}
},
winEvent: function() {
n.publicVar3[20] += 1;
cc.find("Canvas/UI/map/school/explore/text").getComponent("cc.Label").string = "探索(" + Math.min(2 * n.publicVar3[20], 100) + "%)";
return "“哈？你不是学生？为什么不早说——耽误半天！”";
},
lostEvent: function() {
return "“服不服？”【提示：三中怪必须打败才能继续前进】";
}
},
5005: {
name: [ "自暴自弃的女孩(第5关)", "自爆女孩" ],
lv: 35,
hp: 824,
maxHp: 824,
att: 102,
def: 26,
escapeRate: 30,
poisonRes: 10,
lostHealth: 100,
type: 2,
enemyEscapeRate: 0,
mapId: 7,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 12, 4, 1 ], [ 100, 2, 2, 1 ], [ 100, 17, 6, 1 ] ],
des: "“看什么看！没见过女孩抽烟啊！”",
skill: function() {
var t = this.publicVar % 2;
this.publicVar += 1;
if (0 === t) {
var e = parseInt(.25 * (this.maxHp - this.hp));
this.hp += e;
return [ 0, "自爆女孩放声大笑，生命恢复" + e + "。" ];
}
var c = parseInt(1 * this.att), n = parseInt(.1 * this.hp);
this.hp -= n;
return [ c, "自爆女孩歇斯底里，放声大哭，损失" + n + "点生命。" ];
},
defSkill: function() {
var t = parseInt(10 * Math.random() + 5), e = 100 * Math.random();
if (e < 20) {
this.att += t;
this.def -= t;
return "自爆女孩变得暴躁，攻击+" + t + "，防御-" + t + "。";
}
if (e < 40) {
this.att -= t;
this.def += t;
return "自爆女孩变得阴郁，攻击-" + t + "，防御+" + t + "。";
}
},
winEvent: function() {
n.publicVar3[20] += 1;
cc.find("Canvas/UI/map/school/explore/text").getComponent("cc.Label").string = "探索(" + Math.min(2 * n.publicVar3[20], 100) + "%)";
return "“我果然是个垃圾呢~”";
},
lostEvent: function() {
return "“没想到这个世界上有比我还废的人，哈哈哈，心情突然变好了呢~”【提示：三中怪必须打败才能继续前进】";
}
},
5006: {
name: [ "卖甘蔗的李大婶(最终关)", "李大婶" ],
lv: 40,
hp: 967,
maxHp: 967,
att: 82,
def: 30,
escapeRate: 20,
poisonRes: 10,
lostHealth: 100,
type: 2,
enemyEscapeRate: 0,
mapId: 7,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 0, 10, 1 ], [ 100, 27, 6, 1 ], [ 100, 10, 1, 1 ] ],
des: "“谁先到，那块地方就是谁哒！嘻嘻~”",
skill: function() {
cc.find("Event/scr_fight").getComponent("scr_fight");
var t = this.publicVar % 5, e = parseInt(this.att * (1 + .1 * t));
this.publicVar += 1;
if (0 == t) {
this.att = parseInt(1.2 * this.att);
return [ 0, "李大婶撸起袖子，一声怒吼，甩着膀子拼命奔跑。大婶攻击提高20%。" ];
}
return 1 == t ? [ e, "李大婶一不小心从背后撞了你一下，你像皮球一样飞了出去。" ] : 2 == t ? [ e, "你刚想爬起来。李大婶从后边跑来，一个不小心、一脚踩到你脸上。" ] : 3 == t ? [ 0, "李大婶脚底一滑，四肢乱舞。" ] : 4 == t ? [ e, "李大婶一屁股坐下，正好坐在你脸上。" ] : void 0;
},
defSkill: void 0,
winEvent: function() {
n.publicVar3[20] += 1;
n.role.hp = 1;
n.role.maxHp += 20;
cc.find("Canvas/UI/map/school/explore/text").getComponent("cc.Label").string = "探索(" + Math.min(2 * n.publicVar3[20], 100) + "%)";
return "“知道，我，为什么，拼命，跑吗？”大婶喘着气，“因为我是一个单亲妈妈”。生命值减为1点，但最大生命值提高20点！";
},
lostEvent: function() {
return "大婶：“身体不舒服，就别出来摆摊嘛，这可不是闹着玩呐~”【提示：三中怪必须打败才能继续前进】";
}
},
5011: {
name: [ "恶狗" ],
lv: 20,
hp: 440,
maxHp: 440,
att: 62,
def: 15,
escapeRate: 30,
poisonRes: -5,
lostHealth: 100,
type: 1,
enemyEscapeRate: 0,
mapId: 7,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 0, 6, 1 ], [ 100, 16, 2, 1 ] ],
des: "“不找活，来工地干嘛？工地上丢的铁，是不是你偷的？嗯？！”包工头放出了一只恶狗，恶狗朝你扑了过来！",
skill: function() {
if (100 * Math.random() < 30) {
var t = cc.find("Event/scr_fight").getComponent("scr_fight"), e = parseInt(1.2 * this.att), c = Math.ceil(.05 * a.att);
this.att += c;
t.correct[0] -= c;
t.buff[3] += 1;
return [ e, "恶狗一口咬到了你的小腿，附加1层流血，你的攻击-" + c + "！恶狗嗅到血味，有点兴奋，攻击+" + c + "。" ];
}
return [ this.att, "恶狗发起进攻。" ];
},
defSkill: void 0,
winEvent: function() {
n.publicVar4[6] = 1;
return "“哈？不是你偷的？早说嘛！这狗听得懂话的~”";
},
lostEvent: function() {
return "“哎呀~这狗非要咬你，拉都拉不住，我也冒得整呐~”";
}
},
5012: {
name: [ "包工头", "包工头" ],
lv: 35,
hp: 824,
maxHp: 824,
att: 102,
def: 26,
escapeRate: 100,
poisonRes: -5,
lostHealth: 0,
type: 2,
enemyEscapeRate: 0,
mapId: 7,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 3, 7, 1 ], [ 100, 5, 1, 2 ] ],
des: "“嘿嘿~我可是在红砖厂练过好几年的人”",
skill: function() {
if (100 * Math.random() < 50 && this.publicVar <= 4) {
this.publicVar += 1;
return [ 0, "包工头摆开双腿，绷紧肌肉，大吼一声！（下次进攻攻击提高" + 50 * this.publicVar + "%，下次受击格挡反伤提高" + 10 * this.publicVar + "%）" ];
}
if (this.publicVar > 0) {
var t = parseInt(this.att * (1 + .5 * this.publicVar));
this.publicVar = 0;
return [ t, "包工头绷着肌肉，用力一击！", "包工头肌肉放松了。" ];
}
return [ this.att, "包工头发起攻击！" ];
},
defSkill: function() {
var t = cc.find("Event/scr_fight").getComponent("scr_fight");
if (100 * Math.random() < 20 + 10 * this.publicVar) {
var e = parseInt(.5 * a.att);
n.role.hp -= e;
t.publicVar -= 999999;
return "你一脚踢到了包工头悄悄藏在裤裆里的砖头上，你受到" + e + "点反弹伤害！";
}
},
winEvent: function() {
n.publicVar4[6] = 2;
return "“哎呀！差点忘了，今天得去验货，先走了哈，拜~”";
},
lostEvent: function() {
return "“小伙子，要不要来我们工地磨练磨练？哈哈哈~”";
}
},
101: {
name: [ "？？？？", "？" ],
lv: 20,
hp: 612,
maxHp: 612,
att: 50,
def: 13,
escapeRate: -9999,
poisonRes: 100,
lostHealth: 100,
type: 0,
enemyEscapeRate: 0,
mapId: 0,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 6, 4, 1 ], [ 100, 1, 2, 1 ], [ 100, 2, 2, 1 ], [ 10, 26, 1, 1 ], [ 100, 5, 10, 1 ] ],
des: "",
skill: function() {
var t = 10 + 4 * this.publicVar, e = cc.find("Event/scr_fight").getComponent("scr_fight");
this.publicVar += 1;
e.buff[4] += t;
return [ 0, "？舔了你一下，附加" + t + "点毒素" ];
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
107: {
name: [ "纹身男", "纹身男" ],
lv: 10,
hp: 414,
maxHp: 414,
att: 24,
def: 10,
escapeRate: 30,
poisonRes: 20,
lostHealth: 100,
type: 2,
enemyEscapeRate: 0,
mapId: 0,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 7, 3, 1 ], [ 100, 2, 3, 1 ], [ 100, 10, 1, 1 ] ],
des: "",
skill: function() {
if (100 * Math.random() < 30) {
var t = parseInt(1.2 * this.att);
cc.find("Event/scr_fight").getComponent("scr_fight").buff[3] += 1;
return [ t, "纹身男攻击，触发【刺杀Ⅰ】，附加1层流血。" ];
}
return [ this.att, "纹身男攻击，" ];
},
defSkill: function() {
if (100 * Math.random() < 15) {
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 999999;
return "纹身男挡住了你的攻击（格挡Ⅰ）";
}
return "";
},
winEvent: function() {
n.publicVar6[13] = !0;
cc.find("Canvas/UI/map/city").getChildByName("sell2").getChildByName("text").getComponent("cc.Label").string = "摆摊";
return "纹身男：“你给我等着！老子弄死你！”";
},
lostEvent: function() {
return "纹身男：“别人看你年纪小，让着你，我可不会。”";
}
},
108: {
name: [ "疯狂的纹身男", "纹身男" ],
lv: 45,
hp: 999,
maxHp: 999,
att: 88,
def: 20,
escapeRate: -9999,
poisonRes: 20,
lostHealth: 200,
type: 2,
enemyEscapeRate: 0,
mapId: 0,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 7, 4, 1 ], [ 100, 10, 2, 1 ], [ 100, 5, 10, 1 ] ],
des: "“我现在可是一无所有的人！”",
skill: function() {
var t = 100 * Math.random(), e = 100 * Math.random(), c = 15, n = this.att, a = "纹身男攻击，";
if (this.publicVar < 2) {
c = 100;
this.publicVar += 1;
}
if (e < c) {
n = parseInt(1.4 * n);
a += "触发【暴击】，";
}
if (t < 30) {
n = parseInt(1.1 * n);
cc.find("Event/scr_fight").getComponent("scr_fight").buff[3] += 2;
a += "触发【刺杀Ⅱ】，附加2层流血。";
}
return [ n, a ];
},
defSkill: function() {
if (100 * Math.random() < 40) {
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 999999;
return "纹身男挡住了你的攻击（格挡Ⅱ）";
}
return "";
},
winEvent: function() {
var t = cc.find("Canvas/notify"), e = t.getComponent("cc.Label");
t.y = 70;
e.fontSize = 30;
e.lineHeight = 40;
n.publicVar4[7] = 3;
n.money += 50;
n.charaLv[0][7] += 1;
c.save();
return "习得技能「爆发」。\n“我出身在一个富裕的干部家庭，爸爸从小对我十分宠爱，正是这种宠爱，使我养成了骄横、自我的性格，读书时拉帮结派、到处惹事；高中过后我开始混迹社会，也就在这时，爸爸的宠爱逐渐转变成怨恨，常常骂我是个废物；我难以接受，想做出一番事业，不依靠任何人、从最底层开始；但可能我天生就不善于做生意，脸皮薄、意气用事，不愿跟人讲价，进货成本极高，卖的东西又贵——几乎没什么顾客；于是我想找中年城管帮个忙，给我找个好位置，但是他拒绝了，最后我只能亏本清货——这个我不怪他，是我自己太傻；但是，他却将这些情况告诉了我爸。我去找他理论，在拉扯中，他的手抓破了我的脸；我不知道当时是怎么想的，可能是想到了自己的努力换来的却这种结果，可能是习惯性的把错误推给别人——我掏出了刀子；等我回过神来，他已经倒在了血泊中；自从杀害中年城管后，我没有那一时刻不在后悔，我即毁了别人的家庭，也毁了自己...”\n随后你将纹身男押到警察局。获得50元悬赏金。";
},
lostEvent: function() {
n.publicVar4[7] = 2;
c.save();
return "你受重伤！纹身男逃走了！";
}
},
110: {
name: [ "黑瘦女孩和其部下", "黑瘦女孩" ],
lv: 5,
hp: 225,
maxHp: 225,
att: 1,
def: 20,
escapeRate: -9999,
poisonRes: 10,
lostHealth: 100,
type: 2,
enemyEscapeRate: 0,
mapId: 7,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 99, 10, 3 ], [ 100, 12, 4, 1 ] ],
des: "“CNM！”",
skill: function() {
return [ this.att, "黑瘦女孩抓了你一下，" ];
},
defSkill: void 0,
winEvent: function() {
return "女孩：“你给老子等着！”";
},
lostEvent: void 0
},
111: {
name: [ "黑瘦女孩与花城四少（BOSS）", "花城四少" ],
lv: 50,
hp: 999,
maxHp: 999,
att: 89,
def: 30,
escapeRate: -9999,
poisonRes: 30,
lostHealth: 0,
type: 2,
enemyEscapeRate: 0,
mapId: 7,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 99, 30, 3 ], [ 100, 12, 12, 1 ], [ 100, 2, 6, 1 ], [ 100, 10, 2, 1 ], [ 100, 26, 1, 1 ] ],
des: "花城四少高声齐呼：“我们是——南赌、北丐，东嫖、西毒！”",
skill: function() {
this.publicVar += 1;
var t = this.publicVar % 4, e = this.att, c = cc.find("Event/scr_fight").getComponent("scr_fight");
if (2 == t) {
c.addBlock2[0] = -999;
return [ e, "东炮翻上厕所从飞驰的摩的上，一跃而起，悬空半秒，一头撞到你脸上（无视格挡）！" ];
}
if (3 == t) {
c.buff[3] += 2;
c.correct[1] -= 6;
return [ e = parseInt(.5 * e), "你被撞得头晕眼花，全然不知南鸭已悄咪咪摸到你的背后，他掏出一根竹竿，用力一戳。", "附加2层流血！" ];
}
if (4 == t) {
c.buff[4] += parseInt(.5 * e);
return [ 0, "黑瘦女孩抽出注射器，一针扎进西毒的大腿——西毒疯了般的冲过来，不要命的咬了你一口！" ];
}
return [ 0, "北丐趁你们打得火热，悄咪咪偷走你一瓶伤药，并交给黑瘦女孩；你失去「伤药」*1，黑瘦女孩获得「伤药」*1（已拥有${}）。" ];
},
defSkill: void 0,
winEvent: function() {
n.publicVar6[8] = !0;
return "你制服了花城四少，黑瘦女孩见势不妙，拔腿就跑，估计再也不敢找你麻烦了。";
},
lostEvent: function() {
var t = cc.find("Canvas/UI/map"), e = t.getChildByName("city"), a = t.getChildByName("school");
n.ifFollow[1] = 0;
n.startUI = 5;
a.stopAllActions();
a.scale = 0;
e.scale = 1;
a.getChildByName("friend").active = !1;
c.save();
return "小胖在战斗中严重受伤，随后你将小胖送了回县城。小胖离开队伍。";
}
},
112: {
name: [ "蜂窝小弟*3", "蜂窝小弟" ],
lv: 15,
hp: 370,
maxHp: 370,
att: 62,
def: 15,
escapeRate: 30,
poisonRes: 10,
lostHealth: 100,
type: 1,
enemyEscapeRate: 0,
mapId: 7,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 14, 1, 1 ], [ 100, 17, 1, 1 ] ],
des: "“要你管闲事啊！”",
skill: function() {
var t = Math.ceil(3 * Math.random());
return [ parseInt(.5 * this.att * t), "蜂窝小弟朝你扔石头！" ];
},
defSkill: void 0,
winEvent: function() {
n.publicVar6[4] = !0;
n.itemNum[9] += 1;
return "蜂窝小弟四散而逃，你抢到「蜂窝」*1（蜂窝：每篇日记有概率生产蜂蜜，多个效果可叠加）！";
},
lostEvent: void 0
},
116: {
name: [ "骗钱买烟抽的小伙", "小伙" ],
lv: 20,
hp: 328,
maxHp: 328,
att: 24,
def: 15,
escapeRate: 40,
poisonRes: 10,
lostHealth: 100,
type: 2,
enemyEscapeRate: 0,
mapId: 7,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 27, 1, 1 ], [ 100, 28, 1, 1 ] ],
des: "“老子就是负责人！”",
skill: function() {
if (100 * Math.random() < 30) {
var t = parseInt(.5 * this.att), e = parseInt(1.5 * this.att);
this.hp += t;
return [ e, "小伙发起进攻，触发【暴击】，并恢复" + t + "点生命！" ];
}
return [ this.att, "小伙发起进攻。" ];
},
defSkill: void 0,
winEvent: function() {
return "“还以为你是个老实人！谁知道下手这么狠！”";
},
lostEvent: function() {
n.money -= parseInt(.2 * n.money);
return "你被抢走20%的金钱！";
}
},
117: {
name: [ "三中老师", "老师" ],
lv: 5,
hp: 110,
maxHp: 110,
att: 21,
def: 40,
escapeRate: 30,
poisonRes: 10,
lostHealth: 0,
type: 2,
enemyEscapeRate: 0,
mapId: 7,
publicVar: 0,
publicVar2: 0,
drop: [ [] ],
des: "“请把钱还给我！”",
skill: function() {
return [ this.att, "老师朝你扔石头。" ];
},
defSkill: void 0,
winEvent: function() {
n.publicVar7[6] = 1;
return "。老师捶胸顿足地哭了起来...";
},
lostEvent: function() {
var t = 100 - 10 * n.publicVar7[5];
n.money -= t;
n.money < 0 && (n.money = 0);
return "。老师拿走了属于自己的那部分钱";
}
},
118: {
name: [ "蜂窝小弟的大哥", "大哥" ],
lv: 35,
hp: 824,
maxHp: 824,
att: 99,
def: 26,
escapeRate: 10,
poisonRes: 20,
lostHealth: 100,
type: 2,
enemyEscapeRate: 0,
mapId: 7,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 17, 2, 1 ], [ 100, 10, 1, 1 ] ],
des: "“你就是那个抢了我小弟蜂窝的人？不想活了？！”",
skill: function() {
var t = cc.find("Event/scr_fight").getComponent("scr_fight");
if (t.buff[4] > 0) {
var e = parseInt(.2 * this.hp), c = parseInt(.5 * t.buff[4]);
this.hp += e;
t.buff[4] = 0;
return [ 0, "大哥中毒后感觉嗓子干干的、痒痒的，于是掏出一瓶伤药，咕噜一声喝下，然后对着你的脸打了一个饱嗝——大哥恢复" + e + "点生命，毒素清除，你获得" + c + "点毒素..." ];
}
var n = this.publicVar, a = parseInt(.5 * this.def);
this.publicVar += 1;
if (0 === n) return [ this.att, "大哥扑过来，抱住你，你们扭打在一起！" ];
if (1 === n) return [ this.att, "你们在地上滚来滚去！" ];
if (2 === n) {
t.correct[1] -= a;
return [ 0, "突然，大哥一把扯掉你的衣服！你的防御降低" + a + "！" ];
}
if (3 === n) {
this.def += a;
return [ 0, "大哥穿上了你的衣服！大哥防御提高" + a + "！" ];
}
return [ this.att, "大哥骑在你的身上，对着你的脸，狠狠地挥了一拳！" ];
},
defSkill: void 0,
winEvent: function() {
n.publicVar6[4] = !1;
return "大哥：“大哥！你缺坐骑嘛，我给你当马！”";
},
lostEvent: function() {
n.itemNum[9] -= 1;
n.publicVar6[4] = !1;
return "你失去「蜂窝」*1。大哥：“哎~~~我就是个流氓！怎么地！”";
}
},
120: {
name: [ "东嫖（花城四少BOSS第一关）", "东嫖" ],
lv: 35,
hp: 824,
maxHp: 824,
att: 84,
def: 35,
escapeRate: -9999,
poisonRes: 20,
lostHealth: 100,
type: 2,
enemyEscapeRate: 0,
mapId: 7,
publicVar: 0,
publicVar2: 0,
nextFight: 121,
drop: [ [] ],
des: "“偷偷告诉你，别看她穿得寒碜，其实开放得很呢~”",
skill: function() {
var t = 100 * Math.random(), e = cc.find("Event/scr_fight").getComponent("scr_fight");
if (1 === this.publicVar) {
this.publicVar = 0;
if (e.haveFigth) {
var c = parseInt(.5 * this.att);
this.att += c;
return [ 0, "由于你赶走了东嫖的瞌睡虫，东嫖变得狂躁（攻击提升" + c + "）。" ];
}
var n = Math.ceil(.4 * (this.maxHp - this.hp));
this.hp += n;
return [ 0, "东嫖乘你停止进攻时，悄悄地打了个盹，并回复" + n + "点生命（已损失生命的40%）。" ];
}
if (t < 25 || 3 === e.round) {
this.publicVar = 1;
return [ 0, "东嫖长长地打了个哈欠（如果东嫖下回合受到攻击，则会加攻；如果未受击，则会回血）。" ];
}
var a = Math.ceil(.02 * this.att);
e.correct[0] -= a;
return [ this.att, "东嫖甩着屁股朝你冲过来，并顶了你一下。", "你的攻击下降" + a + "点。" ];
},
defSkill: void 0,
winEvent: void 0,
lostEvent: function() {
var t = cc.find("Canvas/UI/map"), e = t.getChildByName("city"), a = t.getChildByName("school");
n.ifFollow[1] = 0;
n.startUI = 5;
a.stopAllActions();
a.scale = 0;
e.scale = 1;
a.getChildByName("friend").active = !1;
c.save();
return "小胖在战斗中严重受伤，随后你将小胖送了回县城。小胖离开队伍。";
}
},
121: {
name: [ "西赌（花城四少BOSS第二关）", "西赌" ],
lv: 40,
hp: 967,
maxHp: 967,
att: 110,
def: 30,
escapeRate: -9999,
poisonRes: 50,
lostHealth: 100,
type: 2,
enemyEscapeRate: 0,
mapId: 7,
publicVar: 0,
publicVar2: 0,
nextFight: 122,
drop: [ [ 100, 99, 10, 3 ], [ 100, 12, 4, 1 ] ],
des: "“谁给我钱，谁就是我爹！”",
skill: function() {
var t = cc.find("Event/scr_fight").getComponent("scr_fight");
if (t.haveEat) {
this.publicVar2 += 1;
this.hp += 99;
return [ 0, "西赌看见你在吃药，于是掏出一枚洋葱，一口吞了下去（西赌恢复99点生命，且放屁成功率提升10%）。" ];
}
var e = 100 * Math.random(), c = 50 + 10 * this.publicVar2, n = 50 + this.publicVar;
if (e < c) {
t.buff[4] += n;
return [ 0, "西赌一声怒吼，放了个屁；你感觉头晕目眩，毒素+" + n + "。" ];
}
this.hp -= 10;
return [ 0, "西赌一声怒吼，却什么也没发生；西赌感觉无地自容，生命-10。" ];
},
defSkill: function() {
var t = cc.find("Event/scr_fight").getComponent("scr_fight"), e = t.poisonDem;
if (e > 0) {
var c = e;
this.publicVar += c;
t.poisonDem = 0;
return "西赌吸收了毒素，屁功威力提升" + c + "！";
}
},
winEvent: void 0,
lostEvent: function() {
var t = cc.find("Canvas/UI/map"), e = t.getChildByName("city"), a = t.getChildByName("school");
n.ifFollow[1] = 0;
n.startUI = 5;
a.stopAllActions();
a.scale = 0;
e.scale = 1;
a.getChildByName("friend").active = !1;
c.save();
return "小胖在战斗中严重受伤，随后你将小胖送了回县城。小胖离开队伍。";
}
},
122: {
name: [ "南盗（花城四少BOSS第三关）", "南盗" ],
lv: 45,
hp: 1120,
maxHp: 1120,
att: 120,
def: 32,
escapeRate: -9999,
poisonRes: 5,
lostHealth: 100,
type: 2,
enemyEscapeRate: 0,
mapId: 7,
publicVar: 0,
publicVar2: 0,
nextFight: 123,
drop: [ [ 100, 99, 10, 3 ], [ 100, 12, 4, 1 ] ],
des: "“兄弟，内裤要不要？不要我就拿走了哈~”",
skill: function() {
var t = 100 * Math.random(), e = 100, i = cc.find("Event/scr_fight").getComponent("scr_fight");
i.haveDefend && (e *= .1);
if (t < e) {
var o = this, r = this.publicVar, s = "", l = Math.ceil(.1 * a.def * (2 + this.publicVar)), u = 0, p = function() {
o.def += l;
o.publicVar += 1;
i.correct[1] -= l;
return "南盗防御+" + l + "，你的防御-" + l + "（使用防御指令可以降低90%的被偷概率）。";
};
if (0 === r) s = "南盗偷走了你的毛皮裤，并穿着了自己身上！" + p(); else if (1 === r) s = "南盗偷走了你的秋裤，并套在自己手上！" + p(); else if (2 === r) s = "南盗偷走了你的内裤，并套在自己头上！" + p(); else if (n.itemNum[7] > 0) {
var f = parseInt(.5 * c.herbRe()[0]);
this.hp += f;
n.itemNum[7] -= 1;
s = "南盗偷走了你的伤药！并按到了嘴里！南盗恢复" + f + "点生命，你失去「伤药」*1（使用防御指令可以减少一半的被偷概率）。";
} else {
u = this.att;
i.buff[3] += 1;
s = "南盗用刀片划了你一刀！";
}
return [ u, s ];
}
return [ 0, "南盗试图偷你的东西，但是被你紧紧地护住。南盗偷窃失败。" ];
},
defSkill: void 0,
winEvent: void 0,
lostEvent: function() {
var t = cc.find("Canvas/UI/map"), e = t.getChildByName("city"), a = t.getChildByName("school");
n.ifFollow[1] = 0;
n.startUI = 5;
a.stopAllActions();
a.scale = 0;
e.scale = 1;
a.getChildByName("friend").active = !1;
c.save();
return "小胖在战斗中严重受伤，随后你将小胖送了回县城。小胖离开队伍。";
}
},
123: {
name: [ "北猖（花城四少BOSS最终关）", "北猖" ],
lv: 50,
hp: 1280,
maxHp: 1280,
att: 80,
def: 40,
escapeRate: -9999,
poisonRes: 15,
lostHealth: 100,
type: 2,
enemyEscapeRate: 0,
mapId: 7,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 7, 10, 1 ], [ 100, 2, 6, 1 ], [ 100, 10, 2, 1 ], [ 100, 26, 1, 1 ] ],
des: "“你知道为什么我们听她的话吗？因为她知道我们想要什么~”",
skill: function() {
var t = this.hp / this.maxHp;
if (t < .4 && 0 === this.publicVar) {
this.publicVar = 10;
return [ 0, "北猖突然倒地，不断翻滚，表情痛苦；黑瘦女孩立马掏出一直注射器，一针扎进北猖的胳膊；北猖恢复平静，从地上弹起，并露出自信的微笑。" ];
}
var e = Math.ceil(this.att * (1.5 - .5 * t));
if (this.publicVar > 0) {
var c = Math.ceil(.3 * e);
cc.find("Event/scr_fight").getComponent("scr_fight").haveDefend && (c = Math.ceil(.5 * c));
this.hp += c;
return [ e, "北猖发起进攻。", "北猖吸取" + c + "点生命。" ];
}
return [ e, "北猖发起进攻。" ];
},
defSkill: function() {
if (100 * Math.random() < 20) {
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 999999;
if (0 === this.publicVar) return "北猖格挡你的攻击。";
var t = parseInt(.3 * this.att);
this.hp += t;
return "北猖格挡你的攻击，并恢复" + t + "点生命。";
}
return "";
},
winEvent: function() {
n.publicVar6[8] = !0;
c.save();
return "黑瘦女孩见势不妙，大声呼救，几名老乡赶来，黑瘦女孩乘乱溜走了。";
},
lostEvent: function() {
var t = cc.find("Canvas/UI/map"), e = t.getChildByName("city"), a = t.getChildByName("school");
n.ifFollow[1] = 0;
n.startUI = 5;
a.stopAllActions();
a.scale = 0;
e.scale = 1;
a.getChildByName("friend").active = !1;
c.save();
return "小胖在战斗中严重受伤，随后你将小胖送了回县城。小胖离开队伍。";
}
},
901: {
name: [ "女王蜂" ],
lv: 15,
hp: 288,
maxHp: 288,
att: 48,
def: 12,
escapeRate: 50,
poisonRes: 30,
lostHealth: 100,
type: 1,
enemyEscapeRate: 0,
mapId: 0,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 6, 4, 1 ], [ 100, 27, 4, 1 ], [ 100, 17, 2, 1 ], [ 5, 9, 1, 1 ] ],
des: "嘤嘤嘤~",
skill: function() {
if (100 * Math.random() < 30) {
var t = parseInt(.5 * this.att);
cc.find("Event/scr_fight").getComponent("scr_fight").buff[4] += t;
return [ 0, "女王蜂给你打了一针，你体内毒素增加" + t ];
}
return [ 0, "女王蜂想给你打针，但是戳歪啦~" ];
},
defSkill: function() {
var t = 100 * Math.random(), e = 60 - 10 * this.publicVar;
if (t < e) {
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 999999;
return "女王蜂躲过了你的攻击（" + e + "%闪避！）";
}
this.publicVar += 1;
return "女王蜂翅膀受损，闪避降低10%";
},
winEvent: function() {
t("scr_data").publicVar3[21] = 0;
cc.find("Canvas/UI/map/valley").getChildByName("rareEnemy").active = !1;
return "";
},
lostEvent: void 0
},
902: {
name: [ "刺团王" ],
lv: 20,
hp: 600,
maxHp: 600,
att: 62,
def: 15,
escapeRate: 50,
poisonRes: -20,
lostHealth: 100,
type: 1,
enemyEscapeRate: 0,
mapId: 0,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 32, 5, 1 ], [ 100, 14, 3, 1 ], [ 100, 23, 5, 1 ], [ 100, 1, 2, 1 ], [ 100, 28, 1, 1 ], [ 5, 8, 1, 1 ] ],
des: "提示：刺团王非常怕毒哦~",
skill: function() {
this.publicVar <= 0 || this.publicVar > 128 ? this.publicVar = 1 : this.publicVar = 2 * this.publicVar;
return [ this.publicVar, "刺团王释放" + this.publicVar + "本针！" ];
},
defSkill: function() {
var t = Math.max(a.att - a.def, 0);
n.role.hp -= t;
return "你受到" + t + "点反弹伤害";
},
winEvent: function() {
t("scr_data").publicVar3[21] = 0;
cc.find("Canvas/UI/map/valley").getChildByName("rareEnemy").active = !1;
return "";
},
lostEvent: void 0
},
100001: {
name: [ "大灰兔", "灰兔" ],
lv: 5,
hp: 251,
maxHp: 251,
att: 0,
def: 0,
escapeRate: 100,
poisonRes: -20,
lostHealth: 100,
type: 1,
enemyEscapeRate: 0,
mapId: 0,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 0, 2, 1 ], [ 100, 1, 1, 1 ], [ 100, 16, 1, 1 ] ],
des: "",
skill: function() {
this.enemyEscapeRate += 5;
return [ 0, "灰兔在原地弹弹跳！（逃跑率+5%）！" ];
},
defSkill: void 0,
winEvent: function() {
var e = t("scr_data");
e.specialEnemy[100001].lv += 5;
e.specialEnemy[100001].hp += 250;
e.specialEnemy[100001].maxHp += 250;
e.specialEnemy[100001].def += 5;
return "";
},
escapeEvent: function() {
n.publicVar4[5] += 1;
if (n.publicVar4[5] >= 3 && !1 === n.publicVar6[15]) {
n.publicVar6[15] = !0;
n.itemNum[8] += 1;
n.role.hp = 1;
return "看着远去的兔子，你叹了口气，一泡鸟屎刚好掉到颈里；你怒火万丈，冲过去追鸟，却被绊倒在地，吃了一嘴泥巴；你生无可恋的坐了起来，突然发现脚上夹着一个东西！你获得「兽夹」(特殊效果)，生命全损失...";
}
return "";
},
lostEvent: void 0
},
100002: {
name: [ "毛毛虫*" + (8 * t("scr_data").publicVar4[4] + 4), "毛毛虫" ],
lv: 1,
hp: 60,
maxHp: 60,
att: 10,
def: 3,
escapeRate: 100,
poisonRes: 100,
lostHealth: 100,
type: 1,
enemyEscapeRate: 0,
mapId: 0,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 6, 2, 1 ] ],
des: "",
skill: function() {
return [ 0, "毛毛虫，爬呀爬~" ];
},
defSkill: function() {
if (100 * Math.random() < 30) {
var t = parseInt(.5 * this.att);
cc.find("Event/scr_fight").getComponent("scr_fight").buff[4] += t;
return "毛毛虫的体液混合着棕色的细毛、喷溅到你的手上，火辣辣地疼！毒素+" + t + "！";
}
},
winEvent: function() {
var e = t("scr_data"), c = Math.min(parseInt(1 + e.publicVar4[4] / 4), 2);
e.publicVar4[4] += 1;
e.specialEnemy[100002].lv += 4;
e.specialEnemy[100002].hp += 120;
e.specialEnemy[100002].maxHp += 120;
e.specialEnemy[100002].att += 20;
e.specialEnemy[100002].def += 6;
e.itemNum[11] += c;
return e.publicVar4[4] <= 1 ? "一位大伯从树上溜了下来，不好意思地说，“不要见怪，从小就怕这玩意儿。虽然知道山里毛毛虫最多，但是最近老伴的腰疾发作，只能我上山砍柴啦。实在没啥东西，只有这个，请务必收下！”\n【获得「松木」*" + c + "】" : "。你救下了大伯，获得报酬「松木」*" + c;
},
lostEvent: void 0
},
200001: {
name: [ "飞车党预备队员", "飞车党" ],
lv: 15,
hp: 360,
maxHp: 360,
att: 48,
def: 12,
escapeRate: 30,
poisonRes: 10,
lostHealth: 100,
type: 2,
enemyEscapeRate: 0,
mapId: 7,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 99, 2, 3 ], [ 100, 27, 2, 1 ], [ 100, 14, 1, 1 ], [ 8, 10, 1, 1 ] ],
des: "“拔剑吧，少侠。你将是第" + (1 + n.publicVar7[7]) + "个，给我磕头的人！”",
skill: function() {
var t = cc.find("Event/scr_fight").getComponent("scr_fight");
if (1 === this.publicVar) {
if (100 * Math.random() < 20) {
var e = parseInt(.5 * a.att);
this.att -= e;
t.correct[0] += e;
this.publicVar = 0;
return [ this.att, "飞车党发动摩托，大声奸笑，挥舞着武器飞奔而来，却不慎翻车，你捡回自己的武器！飞车党攻击减少" + e + "，的你攻击增加" + e + "！" ];
}
t.buff[3] += 1;
t.correct[1] -= this.def;
return [ this.att, "飞车党发动摩托，大声奸笑，挥舞着武器飞奔而来；嗖地一声，你的大腿被割了一刀，你的防御降低" + this.def + "。" ];
}
if (100 * Math.random() < 35) {
var c = parseInt(.5 * a.att);
this.att += c;
t.correct[0] -= c;
this.publicVar = 1;
return [ 0, "飞车党发动摩托，呼啸而来，一把抢走了你的武器！飞车党攻击增加" + c + "，的你攻击减少" + c + "。" ];
}
var n = parseInt(.5 * this.att);
this.hp -= n;
return [ 0, "飞车党发动摩托，呼啸而来，却不慎翻车；飞车党损失" + n + "点生命！" ];
},
defSkill: function() {
if (100 * Math.random() < 20 && 1 === this.publicVar) {
var t = parseInt(.5 * a.att);
this.att -= t;
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] += t;
this.publicVar = 0;
return "你夺回了自己的武器！飞车党攻击减少" + t + "，的你攻击增加" + t + "！";
}
},
winEvent: function() {
var e = t("scr_data");
e.specialEnemy[200001].lv += 4;
e.specialEnemy[200001].hp += 100;
e.specialEnemy[200001].maxHp += 100;
e.specialEnemy[200001].att += 10;
e.specialEnemy[200001].def += 3;
return "飞车党：“哎呀！奶奶，爷爷！饶命呐，开个玩笑嘛~”";
},
lostEvent: function() {
n.publicVar7[7] += 1;
n.energy >= 10 && (n.energy -= 10);
return "你真的——给飞车党磕了一个头——精力-10";
}
},
200002: {
name: [ "民警*" + (t("scr_data").publicVar7[8] + 1), "民警" ],
lv: 60,
hp: 999,
maxHp: 999,
att: 110,
def: 70,
escapeRate: 100,
poisonRes: 10,
lostHealth: 0,
type: 2,
enemyEscapeRate: 0,
mapId: 0,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 99, 20, 3 ] ],
des: "“再不走，我可要不客气了。”",
skill: function() {
this.publicVar += 1;
if (this.publicVar < 3) return [ 0, "“再不走，我真的要发飙喽~”" ];
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= parseInt(.2 * a.def);
return [ this.att, "民警抽出电棍，一棍打在你身上，防御降低20%。" ];
},
defSkill: void 0,
winEvent: function() {
var e = t("scr_data");
e.publicVar7[8] += 1;
e.specialEnemy[200002].lv += 20;
e.specialEnemy[200002].hp += 300;
e.specialEnemy[200002].maxHp += 300;
e.specialEnemy[200002].att += 30;
e.specialEnemy[200002].def += 10;
return "“你就是杀了我，也没用。”";
},
lostEvent: function() {
var e = t("scr_data");
e.ifFollow[0] = 0;
}
},
300003: {
name: [ "大蛇（特殊）", "大蛇" ],
lv: 15,
hp: 999,
maxHp: 999,
att: 22,
def: 0,
escapeRate: 50,
poisonRes: 20,
lostHealth: 100,
type: 1,
enemyEscapeRate: 0,
mapId: 0,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 0, 6, 1 ], [ 100, 6, 3, 1 ], [ 100, 1, 1, 1 ] ],
des: "",
skill: function() {
var t = 100 * Math.random(), e = cc.find("Event/scr_fight").getComponent("scr_fight");
if (t < 60) {
var c = parseInt(.4 * this.att);
e.buff[4] += c;
return [ 1, "大蛇使用「毒雾」，附加" + c + "点毒素！" ];
}
e.buff[3] += 1;
return [ this.att, "大蛇使用「撕咬」，附加1回合流血！" ];
},
defSkill: function() {
n.specialEnemy[300003].hp = this.hp;
return "";
},
winEvent: function() {
n.publicVar6[11] = !0;
n.maxEnergy += 10;
cc.find("Canvas/UI/map/valley").getChildByName("fixedEvent").active = !1;
return "挑战成功！触发【成就体验】精力上限提高10点！";
},
lostEvent: function() {
return "提示：挑战失败后，大蛇不会立即回满血，请抓紧时间挑战吧~";
}
},
400001: {
name: [ "采药汉子", "汉子" ],
lv: 1,
hp: 60,
maxHp: 60,
att: 10,
def: 1,
escapeRate: 15,
poisonRes: 10,
lostHealth: 100,
type: 2,
enemyEscapeRate: 0,
mapId: 0,
publicVar: 0,
publicVar2: 0,
drop: [ [ 100, 12, 1, 1 ], [ 100, 27, 2, 1 ], [ 7, 10, 1, 1 ] ],
des: "“没钱！你出来晃荡个啥子？”",
skill: function() {
if (100 * Math.random() < 30) {
Math.random();
if (0 === this.publicVar) {
this.publicVar += 1;
n.itemNum[11] += 1;
return [ 0, "汉子挥舞着镰刀，向你冲了过了，却不慎滑倒，箩筐里的草药掉了出来。你捡到「草药」*1！" ];
}
return [ 0, "汉子挥舞着镰刀，向你冲了过了，却不慎滑倒！" ];
}
return [ 2 * this.att, "大汉使用「镰刀飞舞」，" ];
},
defSkill: void 0,
winEvent: function() {
var e = t("scr_data");
e.specialEnemy[400001].lv += 5;
e.specialEnemy[400001].att += 12;
e.specialEnemy[400001].hp += 60;
e.specialEnemy[400001].maxHp += 60;
e.specialEnemy[400001].def += 4;
return "。汉子：“等会儿！我回去喝口水再来哈~”";
},
lostEvent: function() {
if (n.money > 2) {
n.money -= 2;
c.save();
return "“改天请你喝茶哈~”汉子欢快地跑开了。你损失两毛钱！";
}
return "“下次，记得出门带钱哈~”汉子拍拍你的肩膀、嘱咐着。";
}
}
};
e.exports = i;
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_public: "scr_public"
} ],
scr_event: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "00b3c6RjfdHPbEfl8GaNNla", "scr_event");
cc.Class({
extends: cc.Component,
properties: {},
event: function() {
var e = this, c = t("scr_data"), n = t("scr_public"), a = (t("scr_effect"), {
1: {
text: [ "", "一个月前，我和晓月逃到这座大山。", "南方温和的气候、险峻的山势给“隐居”提供了独特的环境。", "晓月如同一个闯进魔法世界的孩子，常常兴奋不已。", "然而，", "越是如此，我越感到不安...", "", "确  定" ],
choice1: void 0,
choice2: function() {
cc.director.loadScene("main");
}
},
2: {
text: [ "", "“阿飞（晓月对我的昵称...）！救命呀~救命呀！”，晓月突然惊慌的跑进来。", "我淡定的看着她。", "“屋檐有一只肉呼呼、红扑扑的大虫！全身一根毛也没有呐！~”晓月边说边比划。", "我把手中剥开的野板栗递给她，她吃了起来；边嚼边问，“今天吃啥？”", "“清蒸鼻涕虫~”", "...", "", "确  定" ],
choice1: void 0,
choice2: function() {
cc.director.loadScene("main");
}
},
3: {
text: [ "", "两年前，我从老家流浪到一座南方省城，靠着一点手艺活了下来。", "在摆摊出售手艺品时，我认识了晓月——她在不远的地方给人画肖像。", "晓月，温柔、活泼而善良，父亲是省城一家钢铁厂领导，母亲早年因病过世。", "我在山沟长大，幼时母亲离家出走，从小与父亲关系不和，时常心事重重。", "我们的感情遭到晓月爸的强烈反对。倔强而冲动的我，经常和晓月爸爆发冲突。", "最后，我和晓月逃了出来，来到这里——这座废弃在山腰的护林屋里。", "", "确  定" ],
action: function() {
t("scr_data").ifFollow[0] = 1;
n.save();
},
choice1: void 0,
choice2: function() {
i("【晓月】系统开启！请在主界面查看。");
}
},
4: {
text: [ "", "我一直认为自己是个没有情感的人。", "无论是父亲随手砸过来的酒瓶，还是同学求饶的眼泪，都不曾激起我内心一丝的波澜——在记忆中，我似乎从来没有哭过。", "然而，在晓月面前，我有时却如孩子般幼稚。", "为什么会这样，我自己也不知道。", "", "确  定" ],
choice1: void 0,
choice2: function() {
cc.director.loadScene("main");
}
},
5: {
text: [ "", "“这个地方，应该这么削，懂吗？”", "“不懂。”", "“当心我捏你哦~”", "“来呀！”晓月笑着跑开了。", "我没有追出去。", "晓月又跑了回来，拉起我的手，温柔地看着我。我避开了她的眼睛。", "“走吧，咱们去爬山吧~”", "我就这样，被她牵了出去。", "", "下篇继续" ],
choice1: void 0,
choice2: function() {
cc.director.loadScene("main");
}
},
6: {
text: [ "", "我们在一片悄然无声的松林缓缓攀爬，山腰卧倒的松树上开着紫色的小花，脚下松软的青苔发出窸窣的声响。", "来到山顶，我们找了一个位置坐下。", "看着山下如丝带般缥缈的山路，我终于问出那个缠绕我很久的问题——", "“你想家吗？”", "在问这个问题时，我故意看着远方，示意她不用急着回答。", "", "继  续" ],
choice1: void 0,
choice2: function() {
o(601);
}
},
601: {
text: [ "", "她迟疑了很久，然后抓住我的手臂，将脸慢慢地靠在我的肩膀上，“我觉得，现在很好，我不需要更多了。”", "我长长地呼了口气，这正是我担心的回答。", "在快乐的表象下，掩埋着一颗厌倦的种子，它迟早会发芽、开花、结果，而我却无力阻止。", "我能做的，现在唯一能做的，就是快些攥够钱，实现那个计划。", "", "确  定" ],
choice1: void 0,
choice2: function() {
cc.director.loadScene("main");
}
},
7: {
text: [ "", "此时正值初秋，清晨的山谷飘起袅袅薄雾。", "我准备今天去一趟县城，卖掉囤积多日的货物。", "“要不我也跟着去？”晓月说道，“我可以帮你拿点。”", "我有些犹豫。事实上，自从我们出逃后，晓月爸一直在找她；但是，在完成那个计划之前，我们还不想被找到，更不愿分开。", "“我可以戴帽子！”晓月期待的看着我。", "“好吧——”事实上，我也期待有她的陪伴。", "", "继  续" ],
action: function() {
var e = t("scr_data");
e.startUI = 5;
e.enemyId = 107;
n.save();
},
choice1: void 0,
choice2: function() {
o(701);
}
},
701: {
text: [ "", "来到县城的古玩街，我发现自己的摆摊点上铺着一块红布，上边摆着首饰，一个小伙正蹲在摊前抽烟。", "我丢下货物，走了过去，“兄弟，不好意思，这位置是我的”。摆摊行当中，每块位置都有默认的归属，大家一般互不相犯。", "小伙将我打量一番，站起来，双手抱臂，露出手臂上的纹身，不屑地说道：“这上边写着你名字的？你能在这里摆，我就不能？”", "这时晓月也跟了过来，慌忙将我往拉向一边——", "【你要怎么做？】", "算了，让给他，再去找别的位置", "不行，不能让，争执到底！" ],
choice1: function() {
t("scr_data").enemyId = 0;
n.save();
cc.director.loadScene("main", function() {
t("scr_public").playText2("摆摊点1已被占领");
});
},
choice2: function() {
c.enemyId = 107;
n.save();
cc.director.loadScene("main");
}
},
8: {
text: [ "", "傍晚，收拾好卖剩的货物，我们走在回家的路上。", "晓月走在前边，她摘下帽子，背在背后，时而回过身来说着她的新发现，夕阳把她的身影拉得很长。", "迎面走来一个卖糖的小贩。", "“要不要来点？”，我跟上前，盯着晓月的眼睛问道。", "晓月瞪大了眼睛，又迅速垂了下去：“哎呀，算了吧~小孩子吃的玩意~”", "“没关系~偶尔吃下也可以~”我拉着她的手，喊下了小贩。", "【准备花掉多少钱给晓月买吃的呢？（如果不想花钱，可以点击跳过）】", "一半的钱~", "全部的钱！" ],
choice1: function() {
var t = parseInt(.5 * c.money), e = 10 * Math.ceil(t), n = Math.ceil(.2 * e);
c.money -= t;
c.att[1][0] += e;
c.publicVar[25] += n;
i("你花费" + t + "元给晓月买了麦芽糖，晓月精力提高" + e + "，祝福提高" + n + "！");
},
choice2: function() {
var t = c.money, e = 10 * parseInt(t), n = Math.ceil(.2 * e);
c.money -= t;
c.att[1][0] += e;
c.publicVar[25] += n;
i("你花费" + t + "元给晓月买了麦芽糖，晓月精力提高" + e + "，祝福提高" + n + "！");
}
},
9: {
text: [ "", "事实上，对于钱，我本无多大兴趣。", "对我而言，这个世界上既没有难吃的食物，也没有好吃的食物——我似乎从小就缺乏欣赏生活的能力。", "然而现在，我不再是一个人，伴随而来的是——欲望也开始变多。", "我不知道这是一种正常的转变，还是一个坏的开始。", "", "确  定" ],
choice1: void 0,
choice2: function() {
cc.director.loadScene("main");
}
},
10: {
text: [ "", "在摆摊的几个月中，有两个人引起过我的注意。", "一个是一位中年城管。他从不强行驱赶违规小贩，每次都是耐心劝说；然而，这些被劝走的小贩——包括我——准会在他离开后，回来原来的位置照常叫卖。他的同事似乎有点嫌弃他，从不跟他一起执勤。", "另一位是一个卖旧书、带着眼镜的胖小伙（小胖），他只卖古典名著和百家经典，从不吆喝，只顾埋头看书。我曾以为他是来体验生活的，但是有一次看到他在翻垃圾箱时，就打消了这种猜测。", "有时我会想，我会注意到这两人，可能是因为我们拥有某种共同的东西", "——弱者。", "", "确  定" ],
choice1: void 0,
choice2: function() {
cc.director.loadScene("main");
}
},
11: {
text: [ "", "大概在半个月前的一天下午，中年城管来到我的摊前，他没有赶我走的意思，而是掏出一根烟，蹲在我边上，抽了起来，然后转过脸说：“你老是一个人坐发呆，一句话也不说，不闷吗？”", "“习惯了。”我并没有看他，但绝不是出于蔑视，而是我不知道，在和不熟悉的人说话时，应该把目光放到哪儿。", "“多跟周围的摊友聊聊天吧，一个人会憋坏的，我一天不说话就难受得要命”", "“卖的又不是同一个东西，没啥可以聊的。”", "“你还年轻，有些事不明白；‘出门在外靠朋友’，太孤僻的话...”", "“不用你管！怎么做，是我自己的事。”我突然恼怒起来。", "他不说话了，不停的抽烟，手微微颤抖。抽完烟就离开了。", "", "继  续" ],
action: function() {
var t = cc.find("Canvas").getComponent("scr_event");
cc.find("Canvas/EventText").getComponent("cc.Layout").paddingTop = 0;
t.lineHeight = 50;
t.fontSize = 34;
},
choice1: void 0,
choice2: function() {
o(1101);
}
},
1101: {
text: [ "", "中年城管走后，我有些后悔刚才说的话。", "我知道他并无恶意，但是我也不知道自己为什么会这样。", "我曾试图分析自己为什么会生气，但是并没有找到答案，似乎在内心深处、我排斥着外界的援助；但我总觉得，还有更深的原因。", "", "确  定" ],
choice1: void 0,
choice2: function() {
cc.director.loadScene("main");
}
},
12: {
text: [ "", "一天早晨，我上县城买米；路前方，出现一个熟悉的背影，正是中年城管。我立马放慢了脚步。中年城管似乎发觉身后有人，回身一看，向我挥了挥手，大声喊道，“上街呐——”", "“嗯。”我只好迎了过去。说完这句话我俩就没什么可说的了，只是并排走着。", "“你认不认识那个卖玉器的小伙？”中年城管突然问道。", "“不认识。”我知道他说的是纹身小伙，就多问了一句，“有什么事吗？”", "", "继  续" ],
action: void 0,
choice1: void 0,
choice2: function() {
o(1201);
}
},
1201: {
text: [ "", "“前些天，这小伙带着礼物来我家，让我照顾一下他的生意；我没同意，还说了他两句；第二天，这小伙在上学的路上拦住我儿子，狠狠的打了两嘴巴，还扬言‘这只是一个开始’；我儿子现在都不敢去学校了。”", "我沉默了一会儿，问道，“那你接下来打算怎么办？”", "“找他父母去，跟他父母反映反映；这小伙，不知事，稀里糊涂的；要是有人扶一把，还是能纠正过来的。”", "我不知道该说什么，不过中年城管似乎心情舒坦了不少，脸上挂着笑容，“对了，三天后有领导来县里视察，不让摆摊，最好不要出来”。我又嗯了一声。", "临近县城时，我俩就分开了。我没想到，这次分开，竟成了永别。", "", "确  定" ],
choice1: void 0,
choice2: function() {
cc.director.loadScene("main");
}
},
13: {
text: [ "", "那天上午，我买完大米从商店出来，走在回家的路上，远处一大群人围着个什么。", "我走了过去，人群中间是个人，一个男人，倒在血泊中的男人；他胸口插着刀，双手握着刀柄，眼睛睁着；他正是中年城管。", "我的嘴唇开始颤抖，大口喘气，一股莫名的悲痛从脚底涌起，米袋掉到了地上。", "这是我第一次感受到死亡。我曾无数次幻想自己浴血奋战，但是，当真真感受死亡时——只有恐惧和悲伤。", "周围的人议论纷纷，警察在维持秩序。几个目击者声称是那个卖玉器、手臂上绣着纹身的小伙杀死了城管，原因不明。不一会儿，救护车赶来，抬走了中年城管，人群渐渐散去...", "", "确  定" ],
action: function() {
var e = t("scr_data");
e.role.hp = parseInt(.1 * n.role.maxHp());
e.publicVar[4] -= parseInt(.9 * n.role.att());
e.startUI = 5;
e.publicVar6[13] = !0;
n.save();
},
choice1: void 0,
choice2: function() {
cc.director.loadScene("main");
}
},
14: {
text: [ "", "中年城管出事后，政府给他家人送去了抚恤金，县里开始禁止摆摊；纹身小伙消失得无影无踪，城里贴满他的悬赏通告。", "我偶尔还会去下县城，但没有以前那么频繁。", "由于失去经济来源，如果独自上县城，我会带上一个塑料袋，随手捡起路边的塑料瓶，然后拿到废品站卖掉——当然，这个是对晓月保密的。", "", "确  定" ],
choice1: void 0,
choice2: function() {
cc.director.loadScene("main");
}
},
15: {
text: [ "", "山里的夜晚通常都很热闹，有虫鸣声、小溪流水声、树叶哗啦声，偶尔还有动物的叫声；但是这个夜晚却非常安静。", "木材的火焰在晓月清澈的眼中晃动；我将下巴耷拉在木桌上，轻声说道：“我总觉得，自己心里住在一个魔鬼；明明不想发怒，但是又控制不住。”", "晓月眯上眼睛，轻轻地笑了，“每个人都有这种感觉吧~”", "“这个‘魔鬼’到底是什么？”我皱了皱眉头。", "晓月眼珠滴流转了一圈，“可能是，习惯？我也不知道。”", "...", "", "确  定" ],
choice1: void 0,
choice2: function() {
cc.director.loadScene("main");
}
},
16: {
text: [ "", "九月末一天，我从废品收购站出来，看见一个胖小伙蹲在地上捡书——此人正是卖旧书的小胖，他装书的编织袋穿底了，旧书散落一地。", "如果是以前，我会径直走过去，假装没看见；但是这次，我停下了脚步，但又不好意思直接上去帮忙；于是我故意把塑料袋拿在手上，等他收拾好书。", "小胖摞好书，才发现以前的袋子没法用了，垂头丧气的坐在地上。终于，他看到我手中的袋子，“嘿！兄弟~”他指了指地上的书，“袋子可以借我用用吗？我家就在附近，马上还你”。", "我把袋子递了过去。", "", "继  续" ],
action: function() {
t("scr_data").energy += 20;
n.save();
},
choice1: void 0,
choice2: function() {
o(1601);
}
},
1601: {
text: [ "", "我抱着一摞实在没法装进袋子的旧书，跟着小胖来到他的住处。", "这是一间只有一层的红砖房，墙角堆着废纸和塑料瓶，床上的被褥油腻发亮；我放下书，收回袋子，刚转身，小胖喊住了我，", "“等一下！我...我发现了一个摆摊的好地方，看到你以前也卖东西，有没有兴趣去看看？”", "“哪儿？”", "“县三中。”", "三中是县城郊外的一所中学，位置偏僻，周围几乎没有商店，学校没有围墙，是县里出了名的混乱学校——那里不少孩子，几乎是被附近山民“丢”在学校。", "我欣然答应。", "", "确  定" ],
choice1: void 0,
choice2: function() {
t("scr_data").energy += 10;
i("触发【(轻微)价值体验】，获得精力10点");
}
},
17: {
text: [ "", "第二天一早，我和小胖一起来到三中。", "这是一座建在山腰的初级中学，中间是一栋三层的白色楼房，周围环绕着几间高低不平、大小不一的瓦房。", "几个学生正在一间破旧的瓦房边打稀饭，这是一个寝室——为仅有的几个、离家太远的学生提供简单的住宿和饭菜。", "屋檐下蹲着一个男生，他看见我们走过，抬起眼皮看了一下，又继续喝着粥，似乎对陌生的面孔毫无兴趣。", "我们在一棵大树下摆好摊。小胖如同被碰开的话匣，跟我讲起他的过去。", "", "下篇继续讲述" ],
action: function() {
var e = t("scr_data");
e.startUI = 7;
e.ifFollow[1] = 1;
n.save();
},
choice1: void 0,
choice2: function() {
cc.director.loadScene("main");
}
},
18: {
text: [ "", "小胖，25岁。", "四年前，从专科中医学毕业后，先去了一家药企。", "“其实就是做销售”——小胖解释，“每天就是不停地打电话，打几百个也难谈成一笔生意”“做了半年，被辞退了”。", "“为什么当时没去医院，当医生呢？”我问道。", "“进不去呀！”他的语气既带着愤怒，又充满着无奈，“这么跟你说吧，我的同学，最后做什么的都有——帮人卖东西的、替人开车的、给人按摩的——就是没有做医生的。”", "", "继  续" ],
action: function() {
var e = t("scr_data"), c = cc.find("Canvas").getComponent("scr_event");
e.startUI = 7;
c.fontSize = 34;
n.save();
},
choice1: void 0,
choice2: function() {
o(1801);
}
},
1801: {
text: [ "", "被药企辞退后，小胖进入了一家电子厂。", "“每天8小时重复一个动作，还得倒夜班！”“大热天，10平米房间挤12个人！”“干了一年就没干了~”。", "辞职后，小胖徘徊了一个月，最后去了一家烧烤店。", "“其实这段工作还是挺让人怀念的，每天工作结束后都有宵夜，我就是那时长胖的”“可惜，一年半后倒闭了”“因为当时临近春节，就回了老家。”", "“回家待了三个月，虽然我爸没说什么，但最后一个月、几乎每天都要被我妈说教，然后又跑了出来。”", "", "继  续" ],
choice1: void 0,
choice2: function() {
o(1802);
}
},
1802: {
text: [ "", "“那时候很迷茫，不知道该干啥；后来钱花光了，因为想到县城租房便宜，就来到县城，中间还捡过几次瓶子。”", "“最后怎么买上了旧书呢？”，这是我的第二次打断。", "“其实也算巧合。来到县城后我开始潜心研究百家经典，尤其是《道德经》，让我受益匪浅，现在心态开朗很多。原本我只是去废品站给自己找书，后来转念一想，这么好的东西，为什么不推广呢？有时候一本好书真的可以改变人的一生，尤其对于那些正在念书，又买不起书的孩子。于是，我就干起了买旧书的生意。我做不了大事，那就从最小的开始。”", "我没有说话，也不知道该怎么接话；我唯一清楚的一点就是，每个人都有选择自己人生的权利。", "", "确  定" ],
choice1: void 0,
choice2: function() {
cc.director.loadScene("main");
}
},
19: {
text: [ "", "在三中边上，有一颗巨大的樟树。", "大树下方，面向学校的一边，是一个水泥糊的乒乓球台和生锈的单杠——这里是学生玩耍的地方；而在另一边，背对学校的一边，地上散落着烟头和酒瓶，树皮上随处可见被火机烧过的痕迹和用尖刀刻下的“爱慕”——这里是学生放纵的地方。", "大树上方，有一根腐烂的树枝，上边覆盖着青苔和树菇；秋天的阳光透过层层树叶，在青苔上轻轻晃动，似乎是想唤醒死去的树枝。", "我和小胖的摆摊位置，正是在这颗大樟树下。事实上，这里不光有学生，路过的老乡也经常在此停留歇息；因此，虽然远不如县城好卖，但总归还有收入。", "", "确  定" ],
choice1: void 0,
choice2: function() {
cc.director.loadScene("main");
}
},
20: {
text: [ "", "一天中午，大樟树后边传来一阵争吵。", "“城里来的就了不起啊，看你这打扮，就像个婊子，知道吗！”这是一个尖锐、且透露着稚气的女声。", "“我从小就这样穿...”一个微弱、且带着哭腔的声音。", "“这里不准这么穿，听见没！还有，给同学发零食是几个意思？收买人心？”", "“我妈妈让我这么做的~”", "“你妈让你不穿衣服，是不是你就不穿？你妈咋不叫你回去玩泥巴？”", "“噗——！”小胖忍不住笑出声，还拍了两下大腿。", "", "继  续" ],
action: function() {
var e = t("scr_data");
e.startUI = 7;
e.enemyId = 110;
n.save();
},
choice1: void 0,
choice2: function() {
o(2001);
}
},
2001: {
text: [ "", "几个女生迅速围了过来。", "前边是几个穿着布衣和汗衫的女生，最后一个穿着漂亮的裙子——显然是那个被围攻的女孩。", "“谁笑得！”一个又黑又瘦、目光凶恶的女生吼道。", "“我！”小胖举起一只手。", "“笑啥？”“看书看到好笑的地方。”“再笑一个？”“笑过了，笑不出来。”", "黑瘦女孩一脚将小胖摊前的书踢得四处横飞。我猛的从摊位上窜起，一脚将黑瘦女孩踹倒。", "", "战  斗！" ],
choice1: void 0,
choice2: function() {
cc.director.loadScene("main");
}
},
21: {
text: [ "", "在赶走黑瘦女孩的那天下午，天空突然下了雨。", "我们把货物藏在了离学校不远的一个土庙中，然后一起跑去我家避雨，路上刚好碰到给我送雨衣的晓月，于是三人一起跑向木屋。", "在木屋里，我们升起碳火，烘烤着衣服；谈论白天发生的事、未来的计划，甚至说到将来一起去租个门面。雨停后，小胖就回自己家里去了。", "相同的目标，一起经历、完成一些事情，这大概就是友谊；但是，我总觉得，这种友谊，似乎缺点什么。", "", "确  定" ],
choice1: void 0,
choice2: function() {
cc.director.loadScene("main");
}
},
22: {
text: [ "", "那场雨后，晓月小腿上起了一些疹子，虽然用过一些涂抹的药膏，但是仍不见好转；我有些不安，决定去问问小胖。", "来到小胖家时，他正坐在门口看书。“你怎么来啦？！”小胖有些惊讶。", "“啊，是这样的...”我在他旁边坐下，不好意思地说，“最近我大腿上起了一些疹子，一到晚上就痒，睡不踏实，你有没有什么法子？”", "“哪儿？给我瞧瞧”，小胖笑着说。", "“不用、不用，不严重，就一些红点”，说完我向小胖详细描述了“自己的”症状，并表示只要能止住痒就行。", "“止痒是吧，我查查看...”小胖开始严肃起来。他将我领进屋，从床底下翻出一本落满灰尘的书，自言自语地查了很久，最后抽出一支随身携带的圆珠笔，将一个方子摘抄在一张书纸上说，“你先按这个方子试试，不行再说...”", "", "继  续" ],
action: function() {
var e = t("scr_data"), c = cc.find("Canvas").getComponent("scr_event"), a = cc.find("Canvas/EventText").getComponent("cc.Layout");
a.paddingTop = 0;
a.spacingY = 30;
c.fontSize = 34;
e.publicVar3[27] = 4;
n.save();
},
choice1: void 0,
choice2: function() {
o(2201);
}
},
2201: {
text: [ "", "我拿着方子，想要离开。", "“等一下！我...给你看个东西”，小胖突然喊住我，他的眼睛有些闪烁，我有一种不详的预感。", "不一会儿，他就从屋里拿出一张折叠很多次的报纸，报纸的一角，一个不起眼的地方写着——\n“寻人启事：晓月，女，20岁，身高163cm，短发；2003年4月10日离家后至今未归，如有发现者请联系晓先生：158...，或拨打110报警电话；凡提供有用信息者，将给予2000元奖励。”旁边还贴着晓月的照片。", "我倒吸一口凉气，竭力维持着表情的平静。", "“这是我无意间看到的，感觉这个照片上的女孩，很像你的女朋友...”小胖屏住了呼吸。", "“不是她。不过还真的挺像的”，我笑了。", "“那就好~”小胖也笑了，似乎松了一口气。", "", "继  续" ],
action: function() {
var t = cc.find("Canvas").getComponent("scr_event"), e = cc.find("Canvas/EventText").getComponent("cc.Layout");
e.paddingTop = 0;
e.spacingY = 20;
t.lineHeight = 45;
t.fontSize = 34;
},
choice1: void 0,
choice2: function() {
o(2202);
}
},
2202: {
text: [ "", "在回家的路上，我感觉双腿有些发软，于是干脆坐在路边回忆刚才的那一幕。", "虽然在冷静之后，我相信小胖只是处于好奇或者关心，才会当面问我；但是在那时，在没有时间思考的情况下、我的第一反应，竟然是选择隐瞒。", "我自己都不清楚，为什么会这么选择，可能那个多疑、胆小的自己才是更真实的自己。", "", "确  定" ],
action: function() {
var t = cc.find("Canvas").getComponent("scr_event"), e = cc.find("Canvas/EventText").getComponent("cc.Layout");
e.paddingTop = 0;
e.spacingY = 40;
t.lineHeight = 50;
t.fontSize = 36;
},
choice1: void 0,
choice2: function() {
i("晓月生病后，精力恢复会大幅降低；你可以在「晓月」->「使用」中使用「搽拭」治疗晓月。");
}
},
23: {
text: [ "", "那天回到家后，按照小胖给的方子捣好药，在自己脚上抹了点，没发现不适，这才开始喊来晓月。", "“怎么样？感觉好点没？”我慢慢放下晓月的裤脚，还乘机捏了下她的脚。", "“嗯~感觉冰冰凉凉的”，晓月捂着嘴，咯咯笑了起来。", "“山里是这样的，潮湿、温差大；要真不行，咱们就去镇上租个房子”。", "“咦？话说，你在山里住这么久，咋啥事也没有？”她成功地转移了话题。", "“我上辈子是一只小强，不管把我丢到哪儿——照样活...”", "...", "", "确  定" ],
choice1: void 0,
choice2: function() {
cc.director.loadScene("main");
}
},
24: {
text: [ "", "时间来到十月末，天空湛蓝，充满了晴朗的阳光。自从晓月生病后，我就没再去过三中。这天，小胖拎着编制袋，突然来访。", "“怎么样？药方有没有效果？”", "“啊...好多了。”", "“哈哈，我还是有点用呀”，小胖很开心，似乎上次的事情他根本就没在意，“听说现在三中在搞运动会，人很多，要不要一起出摊？”", "“好...好呀。”我进到屋里，背上货物，跟晓月报告情况；临行时，晓月还特意追出屋外，向我们道别、挥手。", "", "继  续" ],
choice1: void 0,
choice2: function() {
o(2401);
}
},
2401: {
text: [ "", "一路上，小胖不再说话，似乎有什么心事，我等待着他开口。", "“我刚才...仔细估算了一下你女友两眼间的距离、眼睛到嘴的距离...这些特征是不会随年龄改变的...你知道，我在说什么...”", "我停下脚步。“对不起！”我的胸口剧烈跳动，“我欺骗了你。”", "“你在害怕什么？怕我举报还是威胁？！”小胖的脸变得异常狰狞，那是一张我从未见过的脸。", "我从没遇过这种情况，或者说我从来就没有过伙伴，我真的有些不知所措。解释？怎么解释，我确实是怕他举报；道歉？我已经道过歉；沉默？不行，误会会更深。", "我低着头，没有说话，示意他给我一点时间。小胖脸上的红色稍稍褪去，他转过脸去，加快脚步向三中走去，我跟了过去。", "", "下篇继续" ],
choice1: void 0,
choice2: function() {
cc.director.loadScene("main");
}
},
25: {
text: [ "", "可想而知，那天的出摊该有多么尴尬。", "学校涌来不少看比赛的村民。几个老太太，拧着篮子，逢人便问：“要水吗？甘蔗呢？刚削地！”", "我坐在摊位前一边思考一边观察小胖的时候，肩膀被轻轻地拍了一下；我一回头，正是那天的黑瘦女孩，她的身边簇拥着四个“奇形怪状”的小伙，看打扮，不像是在校的学生。", "“诶，还记得我吗？”黑瘦女孩有些得意地问。", "“记得。”", "", "继  续" ],
action: function() {
var e = t("scr_data");
e.startUI = 7;
e.enemyId = 120;
n.save();
},
choice1: void 0,
choice2: function() {
o(2501);
}
},
2501: {
text: [ "", "“咱们去厕所聊聊吧。”黑瘦女孩朝四个小伙点头示意。", "“不用麻烦，我自己会走。”我大声说，然后开始收拾地上的货物，小胖也跟着把自己的旧书收到编织袋里。", "我们跟着黑瘦女孩来到学校最偏僻的一处厕所。厕所里，一群男生正在抽烟，看到我们进来后，便一哄而散，躲在厕所门口偷偷悄悄观察。", "刚进厕所，还没来得急开口，黑瘦女孩一脚踢在我胯下——“你TM今天，准备死在这里吧！”", "", "战  斗！" ],
choice1: void 0,
choice2: function() {
cc.director.loadScene("main");
}
},
26: {
text: [ "", "那天，我和小胖被四个小伙按在厕所的墙上，两人头对头，撞了七八下，撞得眼冒金星。", "“你们谁从我胯下钻三圈，我就绕了谁。”黑瘦女孩说。", "我沉默了一会儿，乖乖地从她胯下钻了过去；黑瘦女孩哈哈大笑，还拍了两下我的屁股。", "小胖死活不肯。一个小伙摘掉他的眼镜，按下他的头，另一个小伙用膝盖顶他的脸。", "我不知道他被顶了多少下，总之，最后他躺在地上，瞪着眼，喘着气，满脸流血。", "", "继  续" ],
action: function() {
t("scr_data").ifFollow[1] = 0;
n.save();
},
choice1: void 0,
choice2: function() {
o(2601);
}
},
2601: {
text: [ "", "我搀扶着小胖，走在回家的路上，他一言不发、表情呆滞——是冷漠？绝望？还是愤怒，我不知道。", "回到他的的屋里，我把他扶上床，打来一盆凉水，搭上毛巾，然后坐在他床边说，“我帮你擦一下吧。”", "他转过脸，没有看我。", "我拿起毛巾，他一挥手，打飞在地上；我捡起了毛巾，放到盆里，然后朝门口走去。", "“我就想问一个问题”，背后传来小胖微微颤抖的声音——我停下脚步——“你觉得自己，是个自私的人吗？”", "我走出了房间，没有回答。", "——是的，我就是个自私的人——我根本就不需要朋友。", "", "确  定" ],
choice1: void 0,
choice2: function() {
cc.director.loadScene("main");
}
},
2611: {
text: [ "", "赶走黑瘦女孩后，并没有多么高兴，我知道她们不会就此罢休；于是，我和小胖匆匆离开了三中。", "不知道为什么，我没有回到自己的家，而是默默跟着小胖一起来到他的住处；我希望他能说点什么，或者说，给我一些提示。", "“我想知道，你到底是怎么想的。”他终于开口了。", "“说实话”，我努力让自己镇静，“我自己也不知道，为什么会这么做。”", "小胖冷笑一声，“那就没什么可说的了，你是个很聪明的人，我曾今对你很崇拜；但是随着接触的深入，我越来越觉得，你世界中只有你自己；你始终在基于自己的感受，不停的计算，斤斤计较！或许，我和你是两个不同世界的人。”", "我愣住了，轻轻地向小胖鞠了一个躬——不知道这么做是否合适，但当时有这么做的强烈愿望——然后，转身走出小胖的家。", "", "确  定" ],
choice1: void 0,
choice2: function() {
cc.director.loadScene("main");
}
},
27: {
text: [ "", "在老家，有些人宁愿饿着肚子，也不愿在关乎面子的事情上少一分钱，我时常对这些人嗤之以鼻。", "形式上的屈辱，对我来说，什么也不是——我将很快忘记；如果只需做个样子，就可以避免肉体上的痛苦，我会欣然同意。", "然而，对于小胖而言，当众受辱，可能会让他铭记、痛苦、自卑很长很长的时间，而肉体上的痛苦反而会在几天后消失或缓解。", "同样的事件，不同的影响，不同的选择。到底是什么在左右着我们的选择，我至今也没想明白——把原因仅仅归结于我们不同的过往经历，我认为，是不够的。", "", "继  续" ],
choice1: void 0,
choice2: function() {
o(2701);
}
},
2701: {
text: [ "", "相比受辱事件，我思考得更多的是，我和小胖是如何一步步走向今天的。", "似乎在与人交往时，我始终难以敞开心扉，像是在害怕什么，但是又不知道到底在害怕什么。这是一种非常奇怪的感觉，一方面我希望得到关爱，但身体却像不听使唤一样，说出冷漠的话、做出无情的事。", "难道我的体内真的躲着一只魔鬼，在不经意间操控着我？", "——不知道，真的不知道。", "", "确  定" ],
choice1: void 0,
choice2: function() {
cc.director.loadScene("main");
}
},
2711: {
text: [ "", "有时我会想，我和小胖是如何一步步走向今天的。", "似乎在与人交往时，我始终难以敞开心扉，像是在害怕什么，但是又不知道到底在害怕什么。这是一种非常奇怪的感觉，一方面我希望得到关爱，但身体却像不听使唤一样，说出冷漠的话、做出无情的事。", "难道我的体内真的躲着一只魔鬼，在不经意间操控着我？", "——不知道，真的不知道。", "", "确  定" ],
choice1: void 0,
choice2: function() {
cc.director.loadScene("main");
}
},
28: {
text: [ "", "大概在受辱事件四天后，我和晓月回到木屋，门口站起来两个男人，他们迎面走来，掏出民警证件——", "“别紧张，查下身份，有身份证吗？”", "“没有。搁在老家了。”", "“那就请跟我们走一趟吧。”", "", "继  续" ],
action: function() {
var e = t("scr_data");
e.ifFollow[0] = 1;
e.energy = 10;
e.startUI = 5;
n.save();
},
choice1: function() {
i("男子一边登记身份证一边叮嘱，“如果发现什么异常，可以提供给我们，有赏金，我们就在镇上的派出所。不过，我还是建议你们避一避，这个逃犯可是个危险主。”。说完，两面男子离开了。");
},
choice2: function() {
o(2801);
}
},
2801: {
text: [ "", "被强制带到警局后，我就和晓月就分开了，我被带到一个单独的房间。", "“名字”，民警问。\n“陈飞”", "“年龄。”\n“19”", "“工作。”\n“木工、打猎。”", "“为什么住山上？”\n“方便工作。”", "“你跟那个女孩的关系是？”\n“男女朋友。”", "......", "", "确  定" ],
choice1: void 0,
choice2: function() {
cc.director.loadScene("main");
}
},
29: {
text: [ "", "我在警局旁边坐了一晚。第二天，我急冲冲找到带我们过来的民警。表明来意后，他只是冷冷的说，“哦，那姑娘已经被送回家了。”", "“哪个家？我怎么没见她出来。”", "“老家啊。”", "“为什么要送回老家？”", "“是她自己要求的。有什么问题，你自己去问她”，民警显得极不耐烦。", "...", "", "直到晓月在门外笑出声被他发现" ],
choice1: void 0,
choice2: function() {
e.enemyId = 200002;
}
},
2901: {
text: [ "", "拖着疲惫的身子，我回到木屋；本想稍微休息一下，却怎么也睡不着。", "为什么她要主动提出回家？是放弃了那个计划，还是发生了什么？", "我越想越不对，干脆起身，简单地收拾了一下行李，匆匆赶往县城，踏上了去往省城的大巴。", "", "确  定" ],
choice1: void 0,
choice2: function() {
cc.director.loadScene("main");
}
}
});
function i(e) {
cc.find("Canvas/Determine");
t("scr_public").save();
cc.find("Canvas/Choice").active = !1;
cc.find("Canvas/EventText").active = !1;
cc.find("Canvas/Notify2").active = !1;
cc.find("Canvas/Determine").active = !0;
cc.find("Canvas/Determine").runAction(cc.fadeIn(4));
cc.find("Canvas/Notify2").getComponent("cc.Label").string = "";
t("scr_public").playText("Canvas/Notify", e, 80);
}
function o(t) {
c = t, e.eventId = c;
var c;
e.ifTriggerEvent();
}
return a;
},
creatText: function(t, e, c) {
var n = new cc.Node(e);
n.addComponent(cc.Label);
n.parent = t;
n.setPosition(0, 0);
n.opacity = 0;
n.runAction(cc.fadeIn(.02));
n.color = new cc.Color(255, 255, 255);
n.getComponent(cc.Label).overflow = 3;
n.getComponent(cc.Label).horizontalAlign = 0;
n.setContentSize(600, 300);
n.getComponent(cc.Label).string = c;
n.getComponent(cc.Label).lineHeight = this.lineHeight || 50;
n.getComponent(cc.Label).fontSize = this.fontSize || 36;
},
calculateEventId: function() {
var e = t("scr_data"), c = e.plotId;
26 === c && !0 === e.publicVar6[8] && (c = 2611);
27 === c && !0 === e.publicVar6[8] && (c = 2711);
return c;
},
ifTrigger: function() {
var t = this.eventData();
return "undefined" == typeof t.require || t.require[0] >= t.require[1];
},
eventData: function() {
var t = this.eventId || this.calculateEventId(), e = this.event()[t];
return e;
},
triggerEvent: function() {
t("scr_data");
var e = this.eventData(), c = e.text, n = c.shift(), a = c.pop(), i = c.pop(), o = c.length, r = 1, s = 0, l = cc.find("Canvas/EventText"), u = this;
this.initUI();
(function() {
if ("" != n) {
var t = cc.find("Canvas/title"), e = new RegExp("回忆");
e.test(n) && (t.color = new cc.Color(255, 51, 153));
s = 2;
t.getComponent("cc.Label").string = n;
t.runAction(cc.sequence(cc.delayTime(.5 * s), cc.fadeIn(s), cc.fadeOut(s)));
}
})();
window.setTimeout(function() {
u.creatText(l, "plot0", c[0]);
}, 1e3 + 1e3 * s * .03);
(function() {
if ("undefined" == typeof e.ifNoSkip) {
var t = cc.find("Canvas/skip");
t.on("touchstart", function() {
cc.director.loadScene("main");
}, this);
t.runAction(cc.sequence(cc.delayTime(.6 * s + 1), cc.fadeTo(4 + 2 * s, 120)));
}
})();
this.schedule(function() {
this.creatText(l, "plot" + r, c[r]);
r++;
}, .02, o - 2, .03 * s + .02 + .01);
this.scheduleOnce(function() {
var t = e.choice1, c = e.choice2, n = cc.find("Canvas/Choice/Choice1"), o = cc.find("Canvas/Choice/Choice2");
n.getChildByName("choiceText").getComponent("cc.Label").string = i;
o.getChildByName("choiceText").getComponent("cc.Label").string = a;
if ("" == i) {
n.active = !1;
cc.find("Canvas/Choice/label").active = !1;
} else n.active = !0;
if ("继  续" == a || "确  定" == a) {
var r = new cc.SpriteFrame();
r.setTexture(cc.url.raw("resources/button2.png"));
o.getComponent(cc.Sprite).spriteFrame = r;
} else {
var s = new cc.SpriteFrame();
s.setTexture(cc.url.raw("resources/button3.png"));
o.getComponent(cc.Sprite).spriteFrame = s;
}
cc.find("Canvas/Choice").runAction(cc.fadeIn(.02));
"undefined" != typeof t && n.on("touchstart", t, this);
o.on("touchstart", c, this);
}, .02 * o + .03 * s + .01);
},
initUI: function() {
var t = cc.find("Canvas/Choice");
t.stopAllActions();
t.opacity = 0;
cc.find("Canvas/EventText").removeAllChildren();
t.getChildByName("Choice1").targetOff(this);
t.getChildByName("Choice2").targetOff(this);
},
ifTriggerEvent: function() {
var t = this.eventData();
if ("undefined" == typeof t) cc.director.loadScene("main"); else if (this.ifTrigger()) {
"undefined" != typeof t.action && t.action();
this.triggerEvent();
} else cc.director.loadScene("main");
},
start: function() {
this.ifTriggerEvent();
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_effect: "scr_effect",
scr_public: "scr_public"
} ],
scr_fightState: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "c4f80DG6eFB/bvHazsL2je9", "scr_fightState");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var e = [ "正  常", "防  御", "战  斗" ], c = t("scr_data"), n = this, a = this.node.getChildByName("text").getComponent("cc.Label");
i();
0 == c.charaLv[0][3] ? n.node.active = !1 : n.node.active = !0;
this.node.on("touchstart", function() {
if (1 == c.charaLv[0][3]) {
c.figthState += 1;
c.figthState > 1 && (c.figthState = 0);
i();
}
}, this);
function i() {
var t = e[c.figthState];
a.string = t;
}
}
});
cc._RF.pop();
}, {
scr_data: "scr_data"
} ],
scr_fight: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "e0873SPr91PW4GARejADMmt", "scr_fight");
cc.Class({
extends: cc.Component,
properties: {},
creatText: function(t, e, c) {
var n = new cc.Node(e), a = (n.addComponent(cc.Label), cc.sequence(cc.scaleTo(.2, 1.3), cc.scaleTo(.1, 1)));
n.parent = t;
n.color = new cc.Color(0, 0, 0);
n.getComponent(cc.Label).overflow = 3;
n.getComponent(cc.Label).horizontalAlign = 1;
n.setContentSize(650, 200);
n.getComponent(cc.Label).string = c;
n.getComponent(cc.Label).lineHeight = 60;
n.getComponent(cc.Label).fontSize = 36;
n.setScale(0, 0);
n.runAction(a);
},
getItem: function(e) {
for (var c = "", n = e.length, a = t("scr_public"), i = t("scr_data"), o = 0; o < n; o++) {
if (100 * Math.random() < e[o][0]) {
var r = e[o][1], s = e[o][2], l = e[o][3];
if (1 == l) {
var u = a.itemName;
i.itemNum[r] += s;
c = c + "「" + u[r] + "」*" + s;
} else if (2 == l) {
var p = a.itemName2;
i.itemNum2[r] += s;
c = c + "「" + p[r] + "」*" + s;
} else if (3 == l) {
i.money += s;
c = c + "「金钱」*" + s;
}
}
}
"" == c && (c = "没发现道具");
a.save();
return c;
},
fight: function(e) {
var c = t("scr_data"), n = t("scr_public"), a = t("scr_effect"), i = this, o = t("scr_enemy")[e], r = {}, s = cc.find("Canvas/Fight"), l = s.getChildByName("fight"), u = s.getChildByName("escape"), p = s.getChildByName("defend"), f = s.getChildByName("eat"), h = s.getChildByName("notify2"), m = s.getChildByName("roleHp"), d = s.getChildByName("enemyHp"), v = s.getChildByName("escapeRate"), g = s.getChildByName("notify"), y = 0, C = c.startUI, b = null, _ = !1, N = !1, x = !1;
this.poisonDem = 0;
this.knife1 = 0;
this.knife2 = 0;
this.buff = [ 0, 0, 0, 0, 0, 0, 0 ];
this.correct = [ 0, 0 ];
this.publicVar = 0;
this.escapeAdd = 0;
this.ifBurst = 0;
this.round = 1;
this.haveFigth = 0;
this.haveEscape = 0;
this.haveEat = 0;
this.haveCrit = 0;
this.haveBlock = 0;
this.haveDefend = !1;
this.addCrit = 0;
this.addBlock = 0;
this.addBlock2 = 0;
for (var V in o) r[V] = o[V];
var I = {
maxHp: n.role.maxHp(),
att: n.role.att(),
def: n.role.def()
};
(function() {
var t = 0;
1 === r.mapId && (t = c.publicVar[18]);
if (t > 0) {
var e = [ 1, 1.4, 2, 2.8, 3.8, 5 ][t] || 5;
r.hp = parseInt(r.hp * e);
r.maxHp = parseInt(r.maxHp * e);
r.att = parseInt(r.att * e);
r.skillAtt = parseInt(r.skillAtt * e);
r.def = parseInt(r.def * e);
r.escapeRate = parseInt(r.escapeRate * (1 - .2 * t));
}
})();
0 === C ? b = cc.find("Canvas/Button") : 1 === C ? b = cc.find("Canvas/UI/map/valley") : 5 === C ? b = cc.find("Canvas/UI/map/city") : 7 === C && (b = cc.find("Canvas/UI/map/school"));
(function() {
if (6 == e.toString().length) {
c.specialEnemy[e].hp <= 0 && (c.specialEnemy[e].hp = c.specialEnemy[e].maxHp);
var t = c.specialEnemy[e];
r.lv = t.lv;
r.hp = t.hp;
r.maxHp = t.maxHp;
r.att = t.att;
r.def = t.def;
}
})();
(function() {
if (1 == c.publicVar[14]) {
r.hp = parseInt(.5 * r.hp);
r.maxHp = parseInt(.5 * r.maxHp);
} else if (2 == c.publicVar[14]) {
var t = c.day, n = t / 40 + 1, a = parseInt(Math.pow(t, 1.5) / 6);
if (6 == e.toString().length) {
var i = c.specialEnemy[e];
r.hp == r.maxHp && (r.hp = parseInt(i.hp * n));
r.maxHp = parseInt(i.maxHp * n);
r.att += 2 * a;
r.skillAtt += 2 * a;
r.def += a;
} else {
r.hp = parseInt(r.hp * n);
r.maxHp = parseInt(r.maxHp * n);
r.att += 2 * a;
r.skillAtt += 2 * a;
r.def += a;
}
}
})();
I.def;
var B = r.des;
l.targetOff(l);
u.targetOff(u);
f.targetOff(f);
p.targetOff(p);
l.on("touchstart", function wocao() {
r.hp > 0 && c.role.hp > 0 && function() {
var t = "你发起攻击", e = "", n = "", zp = "", a = (4 + c.itemNum2[7]) * c.publicVar3[1], o = r.name[1] || r.name[0];
E();
var s = function () {
var t = 2 * c.itemNum2[1] + c.publicVar2[7] + i.addCrit + c.publicVar3[23] / 10, e = 100 * Math.random();
c.charaLv[0][7] > 0 && 1 === i.round && (t += 100);
{
if (e < t || 1 == y) {
i.haveCrit = 1;
return !0;
}
return !1;
}
}();
i.haveFigth = 1;
i.haveEscape = 0;
i.haveEat = 0;
"undefined" != typeof r.defSkill && (n = r.defSkill() || "");
var l = parseInt(Math.max(I.att + i.correct[0] + i.publicVar - r.def, 1));
if (s && -999999 != i.publicVar) {
l = parseInt((1.5 + 0.1 * c.itemNum2[10]) * l);
i.knife1 = c.itemNum2[10];
t += "，触发【暴击】";
y = 0;
a = parseInt(a * (1 + .2 * c.publicVar3[3]));
O();
}
if ((u = 100 * Math.random(), p = 4 * c.itemNum2[4], u < p) && -999999 != i.publicVar) {
l += r.def;
/触发/.test(t) ? t += "【穿刺】" : t += "，触发【穿刺】";
}
var u, p;
if ((ui = 100 * Math.random(), pi = 4 * c.itemNum2[7], ui < pi) && -999999 != i.publicVar) {
l += r.def;
i.poisonDem +=  a;
/触发/.test(zp) ? zp += "【穿透】" : zp += "，触发【穿透】，附加" + (0 * c.itemNum2[7] + a) + "毒素";
}
var ui, pi;
if ((f = 100 * Math.random(), c.publicVar3[1] > 0 && f < 20) && -999999 != i.publicVar) {
i.poisonDem += a;
e += "，附加" + a + "毒素";
}
var f;
if (!1 === c.publicVar6[18] && c.charaLv[0][8] > 0 && 2 === r.type) {
var m = c.charaLv[0][8], d = 100 * Math.random(), v = 5 + 2 * m;
if (!1 === _ && d < v && c.publicVar2[25] < 20) {
var C = 2 * m + Math.min(Math.ceil(r.lv / 15), 99);
c.money += C;
_ = !0;
c.publicVar2[25] += 1;
c.publicVar4[1] += 1;
c.publicVar4[0] > 0 && (c.publicVar4[0] -= 1);
e += "，捡得" + C + "元（捡钱）";
}
}
e += T();
if (-999999 === i.publicVar) {
l = 0;
t = t + "，" + n + e + zp;
} else t = t + "，" + o + "受到" + l * (1 + 0.05 * i.knife1) + "点伤害" + e + "。" + n + zp;
r.hp -= l * (1 + 0.05 * i.knife1);
z();
i.creatText(g, "roleNotify", t);
(function() {
k();
(function() {
cc.game.startPlay && window.clearTimeout(cc.game.startPlay);
h.getComponent("cc.Label").string = "";
})();
})();
J();
L();
U();
P();
D();
F();
}();
if (100 * Math.random() <= c.itemNum2[36] * 20) {
r.hp > 0 && c.role.hp > 0 && l.getComponent("cc.Button").scheduleOnce(wocao, .2);
} else r.hp > 0 && c.role.hp > 0 && l.getComponent("cc.Button").scheduleOnce(S, 1); 
}, l);
u.on("touchstart", function() {
var t = "", e = R(), a = 100 * Math.random();
i.haveFigth = 0;
i.haveEscape = 1;
i.haveEat = 0;
J();
if (a > e) {
r.hp > 0 && c.role.hp > 0 ? l.getComponent("cc.Button").scheduleOnce(S, 1) : P();
t += "逃跑失败" + T() + "！";
z();
E();
i.creatText(g, "escapeNotify", t);
} else {
var o = 100 * Math.random(), s = 5 * c.charaLv[0][1] + 2 * c.itemNum[24];
if (o < s) {
c.energy += 10;
t += "秒跑！返还10精力！";
} else t += "成功逃跑！";
"undefined" != typeof r.escapeEvent && (t += r.escapeEvent());
n.playText2(t);
c.publicVar[1] += 1;
n.init();
A();
H();
}
}, u);
f.on("touchstart", function() {
if (c.itemNum[7] >= 1) {
var t = "你使用伤药，", e = n.herbRe(), a = e[0];
i.haveFigth = 0;
i.haveEscape = 0;
i.haveEat = 1;
if (c.charaLv[0][5] > 0 && !1 === N && c.role.hp / I.maxHp >= .3) {
a = parseInt(1.5 * a);
t += "【急救】";
N = !0;
}
t += e[1];
E();
if (i.buff[3] > 0) {
a = parseInt(.5 * a);
t += "恢复" + a + "点生命（流血恢复减半）";
} else t += "恢复" + a + "点生命";
if (i.buff[4] > 0) {
i.buff[4] = parseInt(.5 * i.buff[4]);
t += "，体内毒素减半（伤药效果）";
}
if (c.itemNum2[38] > 0) {
i.poisonDem += parseInt(a * c.itemNum2[38] * 0.2);
t += "「见血封喉」附加" + parseInt(a * c.itemNum2[38] * 0.2) + "毒素，回复"+ 0.1 * c.itemNum2[38] * i.poisonDem +"点生命";
}
t += T();
c.itemNum[7] -= 1;
c.role.hp += a;
w();
l.getComponent("cc.Button").scheduleOnce(S, 1);
z();
i.creatText(g, "eatNotify", t + "！");
k();
L();
M();
U();
J();
F();
} else n.playText("Canvas/Fight/notify2", "伤药不足", 60);
h.getComponent("cc.Label").string = "";
}, f);
p.on("touchstart", function() {
var t = Math.min(50 + c.charaLv[0][6], 100);
i.haveDefend = !0;
i.haveFigth = 0;
i.haveEscape = 0;
i.haveEat = 0;
l.getComponent("cc.Button").scheduleOnce(S, 1);
z();
i.creatText(g, "defendNotify", "你使用防御（受到的伤害减少" + t + "%）" + T());
U();
J();
}, p);
k();
(function() {
b.stopAllActions();
b.setScale(0, 0);
s.active = !0;
s.scale = 0;
s.runAction(cc.scaleTo(.5, 1));
cc.find("Canvas/notify").opacity = 0;
G();
m.scale = 1;
v.scale = 1;
M();
k();
L();
})();
n.playText("Canvas/Fight/notify2", B, 80);
function E() {
i.publicVar = 0;
i.haveCrit = 0;
i.haveBlock = 0;
i.addBlock2 = 0;
}
function T() {
var t = "";
if (i.buff[4] > 0 && r.hp > 0) {
var e = i.buff[4], n = Math.ceil(.2 * e);
c.role.hp -= e;
i.buff[4] -= n;
t += "，你损失" + e + "点生命（中毒）";
}
if (i.buff[3] > 0 && r.hp > 0) {
Math.random();
var a = parseInt(.1 * I.maxHp);
c.role.hp -= a;
i.buff[3] -= 1;
t += "，你损失" + a + "点生命（流血）";
}
return t;
}
function L() {
var t = "";
i.buff[3] > 0 && (t += "「流血(" + i.buff[3] + "层)」\n");
i.buff[4] > 0 && (t += "「中毒(" + i.buff[4] + "点)」\n");
s.getChildByName("txt_state").getComponent("cc.Label").string = "";
s.getChildByName("txt_state2").getComponent("cc.Label").string = t;
return "";
}
function S() {
r.hp > 0 && function() {
var t = r.enemyEscapeRate, e = r.name[1] || r.name[0];
if (0 != t) {
var o = 100 * Math.random();
if (o < t) {
(function() {
var t = (r.name[1] || r.name[0]) + "逃跑啦！";
"undefined" != typeof r.enemyEscapeEvent && (t += r.enemyEscapeEvent());
J();
n.playText2(t);
H();
})();
return;
}
}
var s = "";
1 === i.ifBurst && (i.ifBurst = 2);
var l = r.skill() || [ 0, "" ], u = l[0], p = l[1], f = "", m = "", mi = "", d = parseInt(Math.max(u - i.correct[1] - I.def - i.knife2, 1));
"undefined" != typeof l[2] && (m += l[2]);
if ((v = Math.min(2 * c.itemNum2[5] + c.publicVar2[19] + i.addBlock, 60), 100 * Math.random() < v) && u > 0 && !1 === i.haveDefend) {
d = 0;
i.knife2 += 3 * c.itemNum2[11];
r.hp -= Math.min(c.itemNum2[11], 1) * I.def + i.knife2;
p += "触发【格挡】，防御提高"+ 3 * c.itemNum2[11] +"点。对对手造成"+ (Math.min(c.itemNum2[11], 1) * I.def + i.knife2) + "点伤害";
}
var v;
if (i.haveDefend) {
c.charaLv[0][6] < 25 && d >= parseInt(.4 * I.maxHp) && (x = !0);
d = Math.max(parseInt(d * (.5 - .01 * c.charaLv[0][6])), 1);
i.haveDefend = !1;
}
if (u > 0) {
c.role.hp -= d;
f = "你受到" + d + "点伤害。";
}
if (i.poisonDem > 0) {
var y = 0;
y = r.poisonRes >= 0 ? Math.ceil(i.poisonDem * r.poisonRes / 100) : Math.floor(i.poisonDem * r.poisonRes / 100);
r.hp -= i.poisonDem;
m += e + "受到" + i.poisonDem + "点毒素伤害。";
i.poisonDem -= y;
c.role.hp += 0.1 * c.itemNum2[38] * i.poisonDem;
}
if (i.knife1 > 0) {
var y = 0;
y = r.poisonRes >= 0 ? Math.ceil(i.poisonDem * r.poisonRes / 100) : Math.floor(i.poisonDem * r.poisonRes / 100);
r.hp -= 0.05 * r.hp;
mi += e + "流血:损失" + 0.05 * r.hp + "点生命。";
i.poisonDem -= 0;
}
s = p + f + m + mi;
i.round += 1;
i.creatText(g, "enemyNotify", s);
G();
(function() {
k();
O();
h.getComponent("cc.Label").string = "";
a.textZoon2("Canvas/Fight/roleHp");
a.textZoon2("Canvas/Fight/escapeRate");
})();
L();
M();
P();
D();
F();
}();
}
function U() {
if (1 === c.ifFollow[1] && 7 === r.mapId) {
if (100 * Math.random() < c.publicVar2[4] + 5) {
var t = "";
if (100 * Math.random() < 50) {
c.role.hp += 99;
w();
t = "小胖治疗，你恢复99点生命。";
} else {
var e = Math.max(99 - r.def, 1), n = r.name[1] || r.name[0];
r.hp -= e;
t = "小胖攻击，" + n + "受到" + e + "点伤害。";
}
k();
D();
i.creatText(g, "friendNotify", t);
}
}
}
function w() {
var t = I.maxHp;
c.role.hp > t && (c.role.hp = t);
}
function R() {
var t = Math.round(50 * (1 - r.hp / r.maxHp)), e = (r.escapeRate + t + i.escapeAdd + c.publicVar[11] + c.publicVar[30] + 2 * c.itemNum[24]).toFixed(1);
e < 0 && (e = 0);
return e = Math.min(e, 100);
}
function k() {
m.getComponent("cc.Label").string = "HP" + c.role.hp + "/" + I.maxHp;
d.getComponent("cc.Label").string = r.name[0] + "LV" + r.lv + "\nHP" + r.hp;
v.getComponent("cc.Label").string = R() + "%";
}
function M() {
f.getChildByName("text").getComponent("cc.Label").string = "治疗(" + c.itemNum[7] + ")";
}
function F() {
n.save();
n.init();
}
function H() {
var t = b, e = cc.find("Canvas/notify");
if (c.role.hp <= 0) {
c.role.hp = 1;
if (c.day <= 1) {
c.role.hp = I.maxHp;
c.health += parseInt(r.lostHealth / 100);
n.playText2("【新手保护】游戏前两篇日记，战斗失败不会受到惩罚！");
}
}
cc.find("Canvas/Fight").runAction(cc.scaleTo(.3, 0));
t.active = !0;
t.runAction(cc.scaleTo(.3, 1));
e.opacity = 255;
c.enemyId = 0;
z();
F();
}
function A() {
c.enemyId = 0;
F();
}
function D() {
if (r.hp <= 0) {
J();
var t = r.drop, e = "战斗胜利！\n获得";
if (i.buff[2] > 0) {
t.forEach(function(t, e) {
t[2] = 2 * t[2];
});
e += "【双倍】";
}
var a = i.getItem(t), o = function(t) {
var e = 0, n = "", a = 100 * Math.random(), o = c.publicVar[29] + c.publicVar[12];
for (;a < o && e < 2; ) {
n += i.getItem(t);
o -= 100;
e += 1;
}
e > 0 && (n = [ "", "【两次掉落】", "【三次掉落】" ][e] + n);
return n;
}(t);
if (x) {
c.charaLv[0][6] += 1;
e = e.replace("战斗胜利！", "战斗胜利！\n触发【防御心得】，防御技能减伤效果永久+1%！");
x = !1;
}
1 === i.ifBurst && (e += function() {
c.itemNum[6] += 10;
return "【爆裂：额外掉落「黏液」*10】";
}());
if (c.publicVar2[27] > 0 && 1 === r.type) {
var s = 2 * c.publicVar2[27];
c.itemNum[3] += s;
e += "【屠宰：获得「食物」*" + s + "！】";
}
c.winTimes += 1;
"没发现道具" == a && (e = e.replace("获得", ""));
e = e + o + a;
if ("undefined" != typeof r.winEvent) {
var l = r.winEvent() || "";
e = e + "！\n" + l;
}
A();
"undefined" != typeof r.nextFight ? i.scheduleOnce(function() {
c.role.hp <= 0 && (c.role.hp = 1);
k();
z();
i.fight(r.nextFight);
}, 1) : i.scheduleOnce(function() {
n.playText2(e);
H();
}, 1.2);
}
}
function P() {
if (c.role.hp <= 0 && r.hp > 0 || i.round > 199) {
var t = "战斗失败！";
i.round > 199 && (t += "（回合数超过199）");
J();
m.stopAllActions();
v.stopAllActions();
var e = r.lostHealth, a = 0;
if (e >= 100) a = parseInt(e / 100); else {
100 * Math.random() < e && (a = 1);
}
if (a > 0) {
c.health -= a;
c.day < 20 ? t += "\n健康-" + a + "（健康为0时游戏结束）" : t += "健康-" + a;
}
"undefined" != typeof r.lostEvent && (t = t + "！\n" + r.lostEvent() || "");
c.publicVar3[12] += 1;
A();
i.scheduleOnce(function() {
n.playText2(t);
H();
}, 2);
}
}
function O() {
var t = [ [ 4, 0 ], [ 0, 0 ], [ -4, 0 ], [ 0, 0 ], [ 4, 0 ], [ 0, 0 ] ], e = 0;
i.schedule(function() {
cc.find("Canvas").parent.setPosition(t[e][0], t[e][1]);
e++;
}, .05, 5);
}
function z() {
g.removeAllChildren(!0);
}
function J() {
m.scale = 0;
v.scale = 0;
l.scale = 0;
u.scale = 0;
p.scale = 0;
f.scale = 0;
}
function G() {
l.scale = 1;
u.scale = 1;
p.scale = 1;
f.scale = 1;
}
},
ifBeAttacked: function() {
var e = t("scr_data").enemyId;
e && this.fight(e);
},
onLoad: function() {
this.ifBeAttacked();
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_effect: "scr_effect",
scr_enemy: "scr_enemy",
scr_public: "scr_public"
} ],
scr_friend1: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "85deaiBkeVJ3pqcSJGj/wuU", "scr_friend1");
cc.Class({
extends: cc.Component,
properties: {},
creatText: function(t, e, c) {
var n = new cc.Node(e);
n.addComponent(cc.Label);
n.parent = t;
n.setPosition(0, 0);
n.color = new cc.Color(115, 115, 115);
n.getComponent(cc.Label).overflow = 3;
n.setContentSize(630, 300);
n.getComponent(cc.Label).string = c;
n.getComponent(cc.Label).lineHeight = 50;
n.getComponent(cc.Label).fontSize = 32;
},
onLoad: function() {
var e = t("scr_data"), c = t("scr_public"), n = cc.find("Canvas/inf"), a = cc.find("Canvas/UI1"), i = cc.find("Canvas/UI2");
(function() {
i.getChildByName("back").on("touchstart", function() {
c.save();
cc.director.loadScene("main");
}, this);
i.getChildByName("choice1").on("touchstart", s, this);
})();
(function() {
a.active = !1;
i.active = !0;
a.scale = 0;
i.scale = 1;
r();
o();
(function() {
var t = "说明：\n1）在三中摆摊和战斗时，小几率获得小胖协助，友好越高几率也越高。";
t += "\n2）小胖友好达到40时，会传授主角「急救」技能。";
t += "\n3）在摆摊时，主角获得小胖6次协助时，将触发\n<color=#00FFFF>【第一个好友】</color>（主角精力+10，精力上限+10）！已协助摆摊" + e.publicVar2[3] + "/6次";
i.getChildByName("helpText").getComponent("cc.RichText").string = t;
})();
})();
function o() {
n.getChildByName("str").getComponent("cc.Label").string = "友好：" + (e.publicVar2[4] + 5) + "    协助几率：" + Math.min(e.publicVar2[4] + 5, 100) + "%";
}
function r() {
i.getChildByName("choice1").getChildByName("text").getComponent("cc.Label").string = "友好+1（需食物" + e.itemNum[0] + "/3）";
}
function s() {
if (e.itemNum[0] >= 3) {
var t = "";
e.publicVar2[4] += 1;
e.itemNum[0] -= 3;
if (35 === e.publicVar2[4]) {
e.charaLv[0][5] += 1;
t += "习得「急救」！";
}
t += "小胖友好提高1点。";
c.playText2(t);
r();
o();
} else c.playText2("食物不足");
}
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_public: "scr_public"
} ],
scr_friendUI1: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "871fc61bpBNRLPJHo54vOLw", "scr_friendUI1");
cc.Class({
extends: cc.Component,
properties: {},
dialog: function() {
return [ "“我叫晓月，今年17，在省城三中读书”", "“暑假开头的、三天母女保温期一过，我妈就成天说我懒，还贪吃。\n(ಥ_ಥ)”", "“骗我，不让我吃太多肉，说对身体不好，合着我就是捡来的。\n╮(╯﹏╰）╭”", "“如果不能吃肉，只吃草，那活着有啥意思呢？对吧。”", "“如是，我打算出来闯闯，做一个持酒闯江湖的女侠，哈~哈——哈！\nヽ(ﾟДﾟ)ﾉ”", "“我偷偷爬上一辆货车，一觉醒来，就在山里。\n(*´・ｖ・)”", "“趁着老司机方便，我溜下车，准备去路边的村子弄点吃的。\n︿(￣︶￣)︿”", "“结果碰到一只巨丑无比的大黑狗，我一路狂奔，啥也不管了。\n(;´༎ຶД༎ຶ`)”", "“猿后，我也不知道到了那里。\n(ಥ_ಥ)”", "“我想随便采几个蘑菇充充饥，结果发现没带火（幸好没带...）。\n(｡･ω･｡)”", "“不过呢，我聪明啊，我沿着货车路，捡到几罐喝剩的啤酒。\n︿(￣︶￣)︿”", "“我躲在路边，暗中观察那些、光着膀子开车的老司机，准备拦一个可靠点的。\n( • ̀ω•́ )✧”", "“结果，选中了你，你说我选得对吗？\n(*/ω＼*)”", "“其实哇，你打招呼后，我已经跟踪你一天了，嘿嘿~\n(｡･ω･｡)”" ];
},
randomDialog: function() {
return [ "“(ಡωಡ)hiahiahia....嗝~”", "“跟你讲我可是很厉害的哦ｸﾞｯ!\n(๑•̀ㅂ•́)و✧”", "“游戏里都是骗人的，哪有什么果子、野兔，全是荆棘和虫子\n(╥╯^╰╥)”", "“偷偷告诉你...这个游戏作者没有女朋友\n(ಡωಡ)hiahiahia”", "“偷偷告诉你...长得漂亮的女孩子大多都平胸，但是反过来，就不好说啦╮(╯﹏╰）╭”", "“我跟你讲哈！那些一个人、背着双肩包旅游的女孩子，最好别去搭讪=￣ω￣=”", "“啊嘞嘞~这样真让人头疼呢╮(￣▽￣)╭”", "“人家天生就不怎么会撒娇呢\n(ಡωಡ)hiahiahia”", "“嘿嘿(º﹃º )，放心放心姐姐不是什么好人~”", "“听说这个游戏的最终BOSS是个变态╮(￣▽￣)╭”" ];
},
initUI: function() {
var e = t("scr_data");
cc.find("Canvas/inf/good").getComponent("cc.Label").string = "晓月好感：" + e.choice[5];
},
initUI2: function() {
var e = t("scr_data");
cc.find("Canvas/inf/good").getComponent("cc.Label").string = "碧瑶好感：" + e.publicVar[7];
},
eat: function() {
var e = t("scr_data"), c = t("scr_effect"), n = t("scr_public");
if (e.itemNum[0] > 0 || e.itemNum2[0] > 0) {
if (e.itemNum[0] > 0) {
e.publicVar2[10] = 0;
e.publicVar[2] = 1;
e.itemNum[0] -= 1;
e.choice[5] += 1;
this.initUI();
cc.find("Canvas/Show").removeAllChildren();
c.playText("Canvas/notify", "果子-1，晓月好感+1", 80);
} else if (e.itemNum2[0] > 0) {
e.publicVar2[10] = 0;
e.publicVar[2] = 1;
e.itemNum2[0] -= 1;
e.choice[5] += 3;
this.initUI();
cc.find("Canvas/Show").removeAllChildren();
c.playText("Canvas/notify", "熟肉-1，晓月好感+3", 80);
}
n.save();
} else {
cc.find("Canvas/Show").removeAllChildren();
c.playText("Canvas/notify", "吃光光啦！", 80);
}
},
takePill: function() {
var e = t("scr_data"), c = t("scr_effect"), n = t("scr_public");
if (e.itemNum2[1] > 0) {
e.choice[5] += 2;
e.itemNum2[1] -= 1;
this.initUI();
n.save();
cc.find("Canvas/Show").removeAllChildren();
c.playText("Canvas/notify", "“张嘴，吃药~”\n“啊~~~~emmmmm~”\n晓月好感+2", 80);
} else {
cc.find("Canvas/Show").removeAllChildren();
c.playText("Canvas/notify", "没药啦~！", 80);
}
},
talk: function() {
var e = t("scr_data"), c = t("scr_effect");
if (e.energy >= 10) {
var n = this.dialog(), a = t("scr_public"), i = e.talkTimes[0], o = cc.find("Canvas/Show"), r = n[i];
if ("undefined" == typeof r) {
var s = this.randomDialog(), l = s.length;
r = s[parseInt(Math.max(Math.random() * l - .1))];
}
i % 3 == 0 && o.removeAllChildren();
a.showText(o, "plot" + i, r, 60);
e.talkTimes[0] += 1;
e.energy -= 10;
e.choice[5] += 1;
this.initUI();
a.save();
} else {
cc.find("Canvas/Show").removeAllChildren();
c.playText("Canvas/notify", "精力不足！", 80);
}
},
onLoad: function() {
t("scr_data"), t("scr_public");
var e = cc.find("Canvas/button");
cc.find("Canvas/close").on("touchstart", function() {
t("scr_public").save();
cc.director.loadScene("main");
}, this);
this.initUI();
e.getChildByName("button1").on("touchstart", this.talk, this);
e.getChildByName("button2").on("touchstart", this.eat, this);
e.getChildByName("button4").on("touchstart", this.takePill, this);
e.getChildByName("button3").on("touchstart", function() {
cc.director.loadScene("friendSkill1");
}, this);
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_effect: "scr_effect",
scr_public: "scr_public"
} ],
scr_initData: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "c335afOsddDPoVdzNq+7r/A", "scr_initData");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
t("scr_data"), t("scr_adoptData");
}
});
cc._RF.pop();
}, {
scr_adoptData: "scr_adoptData",
scr_data: "scr_data"
} ],
scr_initGame: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "6ef62YkKgVEPbATA/Rgpij9", "scr_initGame");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var e = t("scr_data"), c = t("scr_adoptData"), n = t("scr_public");
e.publicVar[24] = 6;
e.publicVar[25] = 60;
e.publicVar2[20] = 6;
e.publicVar3[16] = 20;
if (c.gameData[2] > 0) {
var a = Math.min(4 * c.gameData[1] + 6, 18);
e.itemNum[27] += a;
e.itemNum[0] += a;
c.gameData[2] = 0;
}
n.save();
n.save2();
}
});
cc._RF.pop();
}, {
scr_adoptData: "scr_adoptData",
scr_data: "scr_data",
scr_public: "scr_public"
} ],
scr_learn: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "58bd3xkMdVBgK8DLJeL1ZyR", "scr_learn");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var e = t("scr_data"), c = t("scr_public"), n = cc.find("Canvas/UI1"), a = n.getChildByName("choice1"), i = n.getChildByName("choice2"), o = n.getChildByName("choice3");
r();
(function() {
a.on("touchstart", s, this);
i.on("touchstart", l, this);
o.on("touchstart", u, this);
})();
function r() {
var t = "防御姿态（习得需100元）";
e.charaLv[0][3] > 0 && (t = "防御姿态（已习得）");
cc.find("Canvas/back").on("touchstart", function() {
cc.game.startPlay = 5;
c.backMain();
}, this);
cc.find("Canvas/money").getComponent("cc.Label").string = "金钱：" + e.money + "元";
cc.find("Canvas/UI1/choice1/text").getComponent("cc.Label").string = "格斗（" + (3 + e.publicVar2[2]) + "元，每次攻击+5，累计+" + 5 * e.publicVar2[2] + "）";
cc.find("Canvas/UI1/choice2/text").getComponent("cc.Label").string = t;
}
function s() {
var t = 3 + e.publicVar2[3];
if (e.money >= t) {
e.role.def += 5;
e.publicVar2[3] += 1;
c.save();
c.playText("Canvas/notify", "防御永久+5！", 60);
r();
} else c.playText("Canvas/notify", "钱不够~", 60);
}
function l() {
if (e.charaLv[0][3] > 0) c.playText("Canvas/notify", "你已学会此技能", 60); else if (e.money >= 100) {
e.charaLv[0][3] = 1;
c.save();
c.playText("Canvas/notify", "恭喜，习得【防御姿态】！", 60);
r();
} else c.playText("Canvas/notify", "钱不够~", 60);
}
function u() {
var t = 3 + e.publicVar2[4];
if (e.money >= t) {
e.role.maxHp += 25;
e.publicVar2[4] += 1;
c.save();
c.playText("Canvas/notify", "最大生命永久+25！", 60);
r();
} else c.playText("Canvas/notify", "钱不够~", 60);
}
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_public: "scr_public"
} ],
scr_mainUIEvent: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "449f7/pnslKIp1sHAfscrPC", "scr_mainUIEvent");
cc.Class({
extends: cc.Component,
properties: {},
creatText: function(t, e, c) {
var n = new cc.Node(e);
n.addComponent(cc.Label);
n.parent = t;
n.setPosition(0, 0);
n.opacity = 0;
n.runAction(cc.fadeIn(1));
n.color = new cc.Color(0, 0, 0);
n.getComponent(cc.Label).overflow = 3;
n.getComponent(cc.Label).horizontalAlign = 0;
n.setContentSize(600, 300);
n.getComponent(cc.Label).string = c;
n.getComponent(cc.Label).lineHeight = this.lineHeight || 50;
n.getComponent(cc.Label).fontSize = this.fontSize || 36;
},
event: function() {
var e = this, c = t("scr_data"), n = t("scr_public"), a = (parseInt(4 * Math.random() + 2), 
parseInt(3 * Math.random())), i = parseInt(5 * Math.random() + 1), o = [ [ "砍柴", "松木", i, 3 * i, 11 ], [ "采药", "草药", 2 * i, 4 * i, 27 ], [ "采药", "草药", 2 * i, 4 * i, 27 ], [ "打猎", "毛皮", i, 3 * i, 16 ] ], r = [ [ "砍柴", "松木", 2, 6, 11 ], [ "砍柴", "松木", 3, 9, 11 ], [ "采药", "草药", 3, 6, 27 ], [ "采药", "草药", 4, 8, 27 ] ], s = Math.min(Math.max(c.publicVar4[8], 1), 4), l = [ [ "松木", 4, 12, 11 ], [ "松木", 4, 12, 11 ], [ "蜂蜜", 4, 16, 17 ], [ "神秘结晶", 4, 12, 1 ], [ "黏液", 8, 16, 6 ] ], u = {
1: {
text: [ "远处，一个年轻的猎人正从山上走来，是否过去瞅瞅有啥货色？", "去", "不去（返还10点精力）" ],
choice1: function() {
cc.director.loadScene("shop", function() {
cc.find("Canvas").getComponent("scr_shop").array = [ 0, 0, 100, 0, 0, 100, 60, 30 ];
c.startUI = 1;
});
},
choice2: function() {
c.energy += 10;
e.closeUI("返还10精力~");
}
},
2: {
text: [ "发现一个幽黑的洞窟，是否进去看看？", "去（可能有危险）", "算啦，安全第一（返还10点精力）" ],
choice1: function() {
var t = 100 * Math.random();
if (t < 3) {
c.itemNum2[7] += 1;
e.closeUI("你在洞中找到【大喷菇(】*1（提升【淬毒】效果25%，其余效果和原版一样）*1（提升【淬毒】效果，其余效果和原版一样）");
} else if (t < 70) {
var a = parseInt(2 * Math.random() + 1);
c.itemNum[1] += a;
e.closeUI("你在洞中找到【神秘结晶】*" + a);
} else {
c.startUI = 1;
c.enemyId = 101;
n.save();
e.closeUI("");
cc.find("Event/scr_fight").getComponent("scr_fight").fight(101);
}
},
choice2: function() {
c.energy += 10;
e.closeUI("返还10精力~");
}
},
3: {
text: [ "发现一木牌，上边写着——“此地无银三百两”！", "要挖吗？", "挖！", "算啦~（返还10点精力）" ],
choice1: function() {
Math.random();
c.publicVar2[5] += 1;
if (c.publicVar2[5] < 4) {
var t = "、真的".repeat(c.publicVar2[5] - 1);
e.closeUI("“真的" + t + "，什么也没有呢...”");
} else if (4 == c.publicVar2[5]) {
c.money += 1;
e.closeUI("挖到一个宝箱，打开一看，是一个极品的木盒，然后打开木盒，找到1块钱！获得「金钱」*1，" + n.getCraft(301 + c.kao));
} else {
var a = parseInt(100 + 30 * Math.random());
c.money += 1;
e.closeUI("挖到一个木盒。获得1元钱，" + n.getCraft(a));
}
},
choice2: function() {
c.energy += 10;
e.closeUI("返还10精力~");
}
},
4: {
text: [ "“天啦噜，来活人啦”，刚入树林，一大汉从树后跳出，“兄弟！借俺两块钱，急用！”", "说完，大汉挥了挥手中的镰刀。", "不借！", "借（需2元）~" ],
choice1: function() {
c.startUI = 1;
e.closeUI("");
cc.find("Event/scr_fight").getComponent("scr_fight").fight(400001);
},
choice2: function() {
if (c.money >= 2) {
c.money -= 2;
e.closeUI("“嘻嘻！不好意思啦~赢了钱就还你哈~”");
} else n.playText("Canvas/Event/notify", "钱不够...", 60);
}
},
5: {
text: [ "“嘿！小兄弟”，一棵树上传来一个声音，“看见了地上的几只毛毛虫吗？”", "声音稍微停顿了一下，“帮我赶跑它。我从树上下来后，会报答你的。”", "怎么样，要帮这个忙吗？", "帮（脚踩毛毛虫）", "不帮（返还10点精力）" ],
choice1: function() {
c.startUI = 1;
c.enemyId = 100002;
n.save();
e.closeUI("");
cc.find("Event/scr_fight").getComponent("scr_fight").fight(100002);
},
choice2: function() {
c.energy += 10;
e.closeUI("返还10精力~");
}
},
6: {
text: [ "砍树砍得正起劲，一只大灰兔从脚边滑过，追不追？", "追（一只灵活的兔子...）", "不追（获得1个松木）" ],
choice1: function() {
e.closeUI("");
cc.find("Event/scr_fight").getComponent("scr_fight").fight(100001);
},
choice2: function() {
parseInt(1.9 * Math.random() + 1);
c.itemNum[11] += 1;
e.closeUI("获得「松木」*1");
}
},
7: {
text: [ "你路过一个小小的土地庙，佛龛上摆着几个果子，要不要拿走呢？", "拿走，拿走（获得" + (4 + c.publicVar7[4]) + "个食物）", "还是算了吧（返还10点精力~）" ],
choice1: function() {
var t = 4 + c.publicVar7[4];
c.itemNum[0] += t;
c.publicVar7[4] = 0;
e.closeUI("获得「食物」*" + t + "！");
},
choice2: function() {
c.energy += 10;
c.publicVar7[4] < 8 && (c.publicVar7[4] += 2);
e.closeUI("返还10精力");
}
},
8: {
text: [ "一位云游道士拉住你，说要传你绝世武学，可是他现在肚子有点饿，需要先吃点东西", "怎么办，给不给？", "给（需2个食物）", "不给（返还10点精力）" ],
choice1: function() {
if (c.itemNum[0] >= 2) {
c.itemNum[0] -= 2;
c.publicVar2[0] += 3;
t("scr_roleSkillJugge")[8]();
e.closeUI("获得3点「捡钱」经验！\n【捡钱：攻击人形敌人时，一定几率获得金钱。你当前捡钱等级：" + c.charaLv[0][9] + "级（" + c.publicVar2[0] + "/" + (10 + 10 * c.charaLv[0][8]) + "）】");
} else n.playText("Canvas/Event/notify", "食物不够~", 60);
},
choice2: function() {
c.energy += 10;
c.money > 0 ? c.money -= 1 : c.itemNum[0] > 0 && (c.itemNum[0] -= 1);
e.closeUI("“总有一天，你会来找我滴”，说完，道士跳进河里，游走了。你身上似乎少了点什么。");
}
},
9: {
text: [ "遇到一个披发跣行，眉目清秀的姑娘，抱着一个装满蘑菇的篮子，“帮我试试毒?”她面颊泛红捉摸不透地笑着", "来来来", "何小姐早日躺板（柳某人祝）" ],
choice1: function() {
var t = c.shabi;
if (t > 6) {
c.itemNum2[7] += 1;
e.closeUI("获得【大喷菇(】*1（提升【淬毒】效果25%，其余效果和原版一样）* 1");
} else if (3 === t) {
c.itemNum2[7] += 1;
c.shabi += 1;
e.closeUI("喲，手气不错小傻逼~，获得【大喷菇(】*1（提升【淬毒】效果25%，其余效果和原版一样）* 1");
c.publicVar[23] += 1;
cc.find("Event/scr_fight").getComponent("scr_fight").fight(113);
} else if (-1 === t) {
c.publicVar[24] += 1;
e.closeUI("你搬起一块石头，发现底下有一宝箱！打开一看，竟然是空的...");
} else if (-5 === t) {
c.shabi += 1;
c.itemNum[1] += 20;
e.closeUI("你搬起一块石头，发现底下有一宝箱！打开一看，发现【神秘结晶】*20！");
} else {
c.role.maxHp -= 10;
c.shabi += 1;
c.itemNum2[1] += 1;
e.closeUI("最大生命值-10...“笑死我了哈哈哈...傻逼...”她拿出了一个伤药给你作为补偿");
}
},
choice2: function() {
c.energy += 10;
e.closeUI("返还10精力~");
}
},
10: {
text: [ "红色的蜻蜓、在荷尖上打着呼噜，一只蟾蜍正缓缓靠近。", "要不要扔块石头？", "扔！", "算啦~（返还10点精力）" ],
choice1: function() {
var t = c.publicVar[23];
if (t > 7) {
c.itemNum[6] += 3;
e.closeUI("你一手熟练的飞石、砸死了蟾蜍，获得「黏液」*3...");
} else if (3 === t) {
c.itemNum[6] += 3;
c.publicVar[23] += 1;
e.closeUI("歪打正着，砸中了~获得【黏液】* 3");
cc.find("Event/scr_fight").getComponent("scr_fight").fight(113);
} else if (5 === t) {
c.publicVar[23] += 1;
e.closeUI("你搬起一块石头，发现底下有一宝箱！打开一看，竟然是空的...");
} else if (7 === t) {
c.publicVar[23] += 1;
c.itemNum[1] += 20;
e.closeUI("你搬起一块石头，发现底下有一宝箱！打开一看，发现【神秘结晶】*20！");
} else {
c.publicVar[23] += 1;
e.closeUI("蜻蜓飞走了...");
}
},
choice2: function() {
c.energy += 10;
e.closeUI("你蹑手蹑脚的离开了，精力+10（返还~）");
}
},
11: {
text: [ "发现两只野猪，公的往东边跑，母的的往西边跑，到底追那只？", "公猪", "母猪" ],
choice1: function() {
c.startUI = 1;
c.enemyId = 112;
n.save();
e.closeUI("");
cc.find("Event/scr_fight").getComponent("scr_fight").fight(112);
},
choice2: function() {
c.startUI = 1;
c.enemyId = 113;
n.save();
e.closeUI("");
cc.find("Event/scr_fight").getComponent("scr_fight").fight(113);
}
},
12: {
text: [ "树梢发现一个土蜂窝，要用那种姿势戳呢？", "轻轻地戳~", "用力地戳！" ],
choice1: function() {
var t = Math.min(parseInt(2 + c.publicVar2[6]), 40);
c.itemNum[17] += 2;
e.closeUI("你轻轻一戳，" + t + "个蜂蜜到手~");
},
choice2: function() {
var t = c.publicVar2[6];
c.publicVar2[6] += 1;
if (t < 4) {
c.role.hp = 1;
e.closeUI("你惊动了蜂群，被蜂子追赶！生命全损失！不过，蜂窝似乎松动了一些~");
} else if (4 === t) {
c.itemNum[17] += 6;
c.itemNum[9] += 1;
e.closeUI("蜂窝掉了下来啦！获得【蜂蜜】*6、【蜂窝】*1");
} else {
c.role.hp = 1;
e.closeUI("你惊动了蜂群，被蜂子追赶！生命全损失！不过蜂窝变得更容易掉落蜂蜜了~");
}
}
},
1001: {
text: [ "你和张大婶几乎同时发现前方草地有一堆废品，你俩对视一秒后，大婶突然拔腿、朝前冲去——怎么办？", "快追呀！愣着干嘛！（抢废品）", "算了，让给大婶（返还10精力）" ],
action: function() {
e.schedule(function() {
"undefined" == typeof this.intervalTime && (this.intervalTime = 0);
this.intervalTime += 1;
var t = this.intervalTime;
1 === t ? n.playText("Canvas/Event/notify", "你正在犹豫...", 100) : 6 === t ? n.playText("Canvas/Event/notify", "你还在犹豫...", 100) : 14 === t ? n.playText("Canvas/Event/notify", "你犹豫了很久、很久...", 100) : 22 === t && n.playText("Canvas/Event/notify", "大婶已经捡完垃圾回家了...", 100);
}, 1, 160, 2);
},
choice1: function() {
var t = e.intervalTime || 0;
e.unscheduleAllCallbacks(this);
if (0 === t) e.closeUI("你根本就没犹豫，直接冲过去，却发现地上什么也没有——大婶已捡得干干净净，一个不留（放弃吧，少年，你不可能拼得过身经百战的大婶）！"); else if (t < 14) e.closeUI("你犹豫了一小会儿，一口气冲过去，却发现地上什么也没有——大婶已捡得干干净净，一个不留..."); else if (t < 22) {
var n = 2 * (t - 14) + 8;
c.itemNum[3] += n;
e.closeUI("你犹豫了很久，最后还是追了过去，却发现地上什么也没剩下；你垂头丧气，转身离开，却被人从背后撞了一下——大婶头也不回地从你眼前越过；你刚想理论，却发现地上有几个闪闪发光的废品！大婶臃肿的背影，在夕阳的渲染下，弥漫着金黄色的微光，显得宽广而高大！获得「废品」*" + n + "！");
} else e.closeUI("你冲了过去，大婶早已不见，只剩空荡荡的荒草地...");
},
choice2: function() {
e.unscheduleAllCallbacks(this);
c.energy += 10;
e.closeUI("看着大婶欢呼雀跃的背影，你长叹一声，继续——前进。");
}
},
1002: {
text: [ "一群男孩在你摊前挑选木器。", "其中一个男孩穿着一双老式军鞋，鞋顶有个破洞，从破洞可以看见卷着的脚趾——似乎是害怕被人看见。", "你刚把目光从这个男孩身上移开，却惊讶地瞥见他偷偷将一个木器藏到了袖子里。", "【要不要夺回木器呢？】", "要！", "算了（失去一个木器）" ],
choice1: function() {
e.closeUI("男孩藏好木器，刚想离开，你拉住了他，翻开袖子，取出木器。整个过程中，你没有一个多余的动作，没说一句话，脸上也没有任何表情，像是在处理一件稀松平常的事；男孩一直红着脸，低着头，没做反抗，随后钻出了人群，留下一片惊讶的目光。");
},
choice2: function() {
var t = c.itemNum3, n = t.length;
c.publicVar4[15] = 1;
for (var a = 0; a < n; a++) if (0 === t[a]) {
c.itemNum3[a] = 0;
break;
}
e.closeUI("男孩藏好木器后，便迅速离开了摊位。你失去一个木器。");
}
},
1011: {
text: [ "你再次见到那位军鞋男孩，是在一个云淡风轻的上午，学生们正在教室上课。", "男孩抱着书，穿着一双崭新的球鞋，朝校外走去，身后跟着一位扛着大木箱子、穿着旧衬衣的中年男子。", "“真的不读了吗？”中年男子提高嗓门问。", "男孩嗯了一声。", "“也好，回家以后，要多帮妈妈干活，照顾好弟弟妹妹，过两年才能出去打工，明白吗？”", "男孩没再说话，两人踩着秋天的落叶，缓缓走远...", "", "确  定" ],
ifExtend: !0,
choice1: void 0,
choice2: function() {
e.closeUI("军鞋男孩结局（四）——辍学的男孩");
}
},
1012: {
text: [ "你再次看见那位军鞋男孩，是在一个晨曦初露的清晨；你早早地来到学校，想乘着大婶没来前捡些废品。", "当你走到学校工地附近时，发现一棵树后有个人影；你慢慢靠近，瞧见一只探出头来的军鞋，依旧有个破洞，依旧卷着脚趾；脚趾旁边还有一个根伸出来的旧电线，随着呼吸上下浮动。", "空气似乎凝固，你轻轻地退了回来，然后快速离开了。", "", "确  定" ],
choice1: void 0,
choice2: function() {
e.closeUI("军鞋男孩结局（三）——偷电线的男孩");
}
},
1021: {
text: [ "由于提前卖完了木器，你打算天黑前，在三中捡些废品。", "当你捡到学校“食堂”后侧时，发现一个男孩，正全神贯注地在垃圾桶中翻找，他穿着一双破旧的军鞋，嘴里还叼着半截馒头；忽然，他意识到有人接近，瞬间抽回手，吐掉馒头，装成正在丢垃圾的样子...", "【那么接下来，你准备以什么样的表情或者姿势路过呢？】", "装着什么也没看见", "也从垃圾桶中找食物，并且吃掉\n（需10精力和全生命）" ],
choice1: function() {
c.publicVar4[15] = 2;
e.closeUI("你俩都直直地看着前方，面无表情地擦肩而过，就像什么也没发生...");
},
choice2: function() {
if (c.energy >= 10) {
c.publicVar4[15] = 3;
c.energy -= 10;
c.role.hp = 1;
e.closeUI("你走向垃圾桶，翻出一小块脏兮兮的馒头，塞进嘴里，大口咀嚼，呜咽一声吞下，然后转过脸对男孩说：“还挺甜的。”男孩先是愣在原地，随后会心地笑了，你也不能自已地笑了起来。");
} else n.playText("Canvas/Event/notify", "本姿势需10点精力...", 100);
}
},
1022: {
text: [ "一个残阳如血的傍晚，男孩最后一个从学校出来。", "一只黑色的蝴蝶轻轻地落在花瓣上，远处的夕阳在它扇动的翅膀后、若影若现。", "男孩停下脚步，脱下外套，慢慢靠近，啪地一声拍向蝴蝶，然后将死去的蝴蝶装在一个玻璃瓶中。", "那只玻璃瓶中，装满了五颜六色、已经死去的蝴蝶。", "", "确  定" ],
choice1: void 0,
choice2: function() {
e.closeUI("军鞋男孩结局（二）——斜阳独影");
}
},
1023: {
text: [ "你再次看见那位军鞋男孩，是在一颗树上。", "他依然穿着那双破旧的军鞋，正在一颗树上掏鸟窝，树的下方是一群围观的学生；男孩神情专注，慢慢朝着鸟窝爬去，似乎完全忘记脚下穿着的是一双随时可能伸出趾头的破鞋。", "在你离开不久，背后就传来一阵欢呼，你知道、他成功取到了鸟窝。", "", "确  定" ],
choice1: void 0,
choice2: function() {
e.closeUI("军鞋男孩结局（一）——滚蛋吧！自卑");
}
},
1003: {
text: [ "学校的一位老师想托你帮他卖一些旧书；老师说家里孩子生病了，想贴点家用，但是自己作为老师在学校卖东西又怕影响不好，卖给废品站有不划算，所以只能斗胆拜托你——看上去又面善、又文静的你——帮忙买一下，能卖多少是多少；当然，不会让你白帮忙的。", "要帮帮这个老师吗？", "帮", "算了（返还10精力）" ],
choice1: function() {
c.publicVar7[6] = 6;
c.publicVar7[5] = 10;
e.closeUI("说明：旧书分10次卖完，摆摊时随机售出，所得金钱暂时由你保管（买旧书所得金钱不会算入累计任务），三篇日记后老师会来结算");
},
choice2: function() {
c.energy += 10;
e.closeUI("返还10精力~");
}
},
1004: {
text: [ "几个男生头上套着塑料袋，朝正在跳房子的女生扔了一个蜂窝，女生被吓得哇哇大哭，男生却在一边幸灾乐祸。", "“这些男生真坏啊”，你心里这么想着，“哎？要是我把蜂窝抢过来，他们不就没法再去吓人了吗？顺带也可以给这些人一点教训，岂不是美哉！”", "【那么，要不要抢蜂窝呢？】", "抢！反正这是做好事！", "算了，你这是醉翁之意不在酒啊。" ],
choice1: function() {
c.startUI = 7;
c.enemyId = 112;
n.save();
e.closeUI("");
cc.find("Event/scr_fight").getComponent("scr_fight").fight(112);
},
choice2: function() {
c.energy += 10;
e.closeUI("“呵！我刚才怎么会有这种可怕的想法？”你摇摇头，离开了");
}
},
1005: {
text: [ "一个西装革履的男人将你拉到一边，神秘地说：“跟你商量事。你知道的，这所学校没有商铺、没有围墙，阿猫阿狗都能进来卖东西。有些商人，昧着良心，骗小孩的钱，尤其是那些推销近视眼睛治疗仪的，就应该下十八层地狱！那种东西又贵、又没用，还不如买点吃的呢，至少可以填肚子，你说对吧？”", "他从怀里掏出一个包装精美的盒子，压低了声音，“知道这是啥吗？吃了让人变聪明的东西！我儿子，是的，我儿子，模拟考6门加起来268分！吃了俩月，中考直接542！上市二中！现在中考结束，家里还剩两盒，扔了可惜，亲戚家也没你这么大的孩子，所以才想着卖掉，绝对是正品，不信你到药店去问，如果是水货，你找我！我就在小卖部旁边的诊所里。怎么样，半价给你。”", "【买不买？】", "别人说了这么久，不买都不好意思，买吧（需20元）", "总觉得哪里不对，还是算了吧" ],
action: function() {
e.lineHeight = 43;
e.fontSize = 34;
},
ifExtend: !0,
choice1: function() {
if (c.money >= 20) {
for (var t = c.itemNum3, a = t.length, i = 0; i < a; i++) if (0 === t[i]) {
c.itemNum3[i] = 220;
break;
}
c.money -= 20;
c.itemNum[17] += 8;
c.itemNum[126] += 1;
e.closeUI("...付完钱后，你打开手提袋，里边是一个包装精美的纸盒，上边写着“脑白鑫”；纸盒里边是几个小瓶子，打开瓶子，尝一尝，一股熟悉的味道——这不就是蜂蜜兑的水吗！你刚想发火，却发现手提袋最里边还有一个木盒，嚯！还有赠品？打开木盒一看，一颗「蓝晶石」！还有一张纸条，上边写着：亲爱的图图，爸爸常年在外，疲于奔命，无法伴你左右，深感愧疚；希望你在逆境中，依然能像这颗石头一样，保持保持纯净、清澈的内心；生日快乐——爱你的爸爸。获得「蜂蜜」*8，「蓝晶石」*1，「优质木器.lv20」。哎？怎么感觉超赚啊？什么情况！");
} else n.playText("Canvas/Event/notify", "钱不够...", 60);
},
choice2: function() {
c.energy += 10;
e.closeUI("返还10精力~");
}
},
2001: {
text: [ "确定要挑战大蛇吗？", "【特别说明】：\n大蛇具有超高血量，属于特殊怪：在战斗结束后不会回满血，且可以反复挑战。【关于状态】：\n「中毒」：每回合损失生命，使用伤药可使体内毒素减半。\n「流血」：每回合会损失10%生命，且使用伤药只能恢复一半的生命。", "挑战！（需10精力）", "算啦，再等等~" ],
choice1: function() {
if (c.publicVar6[11]) n.playText("Canvas/Event/notify", "你已击败大蛇~", 60); else if (c.energy >= 10) {
c.startUI = 1;
c.enemyId = 300003;
c.energy -= 10;
n.save();
e.closeUI("");
cc.find("Event/scr_fight").getComponent("scr_fight").fight(300003);
} else n.playText("Canvas/Event/notify", "精力不足~", 60);
},
choice2: function() {
e.closeUI("");
}
},
2002: {
text: [ "一位云游道士拉住你，说要传你绝世武学，可是他刚刚打麻将输了钱，现在没心情，想借点钱去兜本——怎么办，借不借？", "【捡钱技能说明】：\n习得捡钱技能后，每次攻击人型敌人时，有「捡钱等级*5」%几率捡取「捡钱等级*2+敌人等级*0.1」的金钱，每场战斗最多触发1次。随着捡钱次数的增多，主角休息时有低概率获得「捡钱上隐」状态（下文简称「钱瘾」）；「钱瘾」发作后，只能通过再次触发「捡钱」或者喝酒(有几率)来消除，如果「钱瘾」未能消除，则在休息时、每层（最多10层）将降低5%的精力恢复！习得「捡钱」技能后，捡钱效果可在背包界面中关闭或开启", "借（需" + (8 + 8 * c.charaLv[0][8]) + "元，捡钱技能提升）", "不借" ],
ifExtend: !0,
choice1: function() {
var t = 8 + 8 * c.charaLv[0][8];
if (c.charaLv[0][8] >= 3) e.closeUI("“哎呀~小兄弟，为师已经教不了你啦，你还是另请高人吧~”说完，道士惭愧地跳进县城的河里，游走了。", 60); else if (c.money >= t) {
c.money -= t;
c.charaLv[0][8] += 1;
e.closeUI("「捡钱」技能等级+1！");
} else n.playText("Canvas/Event/notify", "钱不够~", 60);
},
choice2: function() {
if (c.money > 0) {
c.money -= 1;
e.closeUI("你离开后，道士在你背后挥了挥拳头，并吐了口吐沫；你一转身，道士已经溜了；你赶紧摸摸口袋，好像有什么东西不见了~");
} else e.closeUI("你离开后，道士在你背后挥了挥拳头，并吐了口吐沫；你一转身，道士已经溜了；你赶紧摸了摸口袋，好像没丢什么东西~");
}
},
2003: {
text: [ "那姑娘还在审讯中，有什么问题等明天再说吧~", "借（需5元）", "不借" ],
choice1: function() {
if (c.money >= 5) {
c.money -= 5;
c.publicVar2[0] += 5;
t("scr_roleSkillJugge")[8]();
e.closeUI("获得5点「捡钱」经验【捡钱：攻击人形敌人时，一定几率获得金钱。你当前捡钱等级：" + c.charaLv[0][9] + "级（" + c.publicVar2[0] + "/" + (5 + 5 * c.charaLv[0]) + "）】");
} else n.playText("Canvas/Event/notify", "钱不够~", 60);
},
choice2: function() {
e.closeUI("你离开后，道士在你背后挥了挥拳头，并吐了口吐沫；你一转身，道士已经溜了；你赶紧摸了摸口袋，好像没丢什么东西~");
}
},
2004: {
text: [ "一对年轻夫妻领着一个男孩来到摊前，这个男孩就是那天卖项链的男孩。", "“那条项链是这孩子从我家车里偷出来的，我不知道他是怎么打开车门的”，年轻的女人向前推了男孩一把，小孩低着头，女人声音突然尖锐起来，“请把项链还给我，至于你付过的钱，请找这个小孩要，那是你和他的事。”", "【怎么办，还不还？如果还回项链，付过的钱多半是要不回来了...】", "还（失去项链）", "不还（触发战斗）" ],
choice1: function() {
c.itemNum2[13] -= 1;
e.closeUI("你归还了项链，也没再对男孩说什么；男孩低着头、在你摊位边站了半个钟头，然后离开了。");
},
choice2: function() {
c.startUI = 7;
c.enemyId = 118;
n.save();
e.closeUI("");
cc.find("Event/scr_fight").getComponent("scr_fight").fight(118);
}
},
2005: {
text: [ "遇到一位" + o[a][0] + "归来的老乡，要买点什么吗？", "买（花费" + o[a][3] + "元购买" + o[a][2] + "个" + o[a][1] + "）", "算了（返还10精力）" ],
choice1: function() {
var t = o[a][3], r = o[a][4], s = o[a][2], l = o[a][1];
if (c.money >= t) {
c.money -= t;
c.itemNum[r] += s;
a = parseInt(3 * Math.random());
i = parseInt(5 * Math.random() + 1);
e.closeUI("获得「" + l + "」*" + s);
} else n.playText("Canvas/Event/notify", "钱不够~", 60);
},
choice2: function() {
c.energy += 10;
a = parseInt(3 * Math.random());
i = parseInt(5 * Math.random() + 1);
e.closeUI("返还10精力~");
}
},
2006: {
text: [ "那位委托你卖旧书的老师来到摊前：“小兄弟，怎么样，生意还好吧~”", "【很明显，老师是来收款的，要把卖旧书的钱给老师吗？】", "给（需" + (30 - 3 * c.publicVar7[5]) + "元）", "不给（老师会强制要钱）" ],
choice1: function() {
var t = 30 - 3 * c.publicVar7[5];
if (c.money >= t) {
var a = Math.ceil(t / 3);
c.itemNum[0] += a;
c.energy += 20;
c.money -= t;
c.publicVar7[6] = 2;
c.publicVar7[5] = 0;
e.closeUI("“真的，非常感谢。这是我炸旧书时顺便炸的绿豆丸子，你带点回家吧”老师眼中充满感激。你获得「食物」*" + a + "，触发【价值体验】精力+20。");
} else n.playText("Canvas/Event/notify", "钱不够~", 60);
},
choice2: function() {
c.publicVar7[5] = 0;
c.startUI = 7;
c.enemyId = 117;
n.save();
e.closeUI("");
cc.find("Event/scr_fight").getComponent("scr_fight").fight(117);
}
},
2007: {
text: [ "飞车党向你发出挑战，是否接受？", "接受（需10精力）", "算啦" ],
choice1: function() {
if (c.energy >= 10) {
c.startUI = 7;
c.enemyId = 200001;
c.energy -= 10;
n.save();
e.closeUI("");
cc.find("Event/scr_fight").getComponent("scr_fight").fight(200001);
} else n.playText("Canvas/Event/notify", "精力不足", 60);
},
choice2: function() {
e.closeUI("飞车党向你竖起了中指！");
}
},
2008: {
text: [ "“那姑娘，还在审讯中”，一位知情的民警显出一副事不关己的表情，“请你明天再来吧。”", "怎么办？", "等明天再来吧", "硬闯警局（需10精力）" ],
choice1: function() {
e.closeUI("");
},
choice2: function() {
if (c.energy >= 10) {
c.startUI = 5;
c.enemyId = 200002;
c.energy -= 10;
n.save();
e.closeUI("");
cc.find("Event/scr_fight").getComponent("scr_fight").fight(200002);
} else n.playText("Canvas/Event/notify", "精力不足", 60);
}
},
2009: {
text: [ "要去给中年城管报仇吗？", "要（需10精力）", "算了" ],
choice1: function() {
if (c.energy >= 10) {
c.startUI = 7;
c.enemyId = 108;
c.energy -= 10;
n.save();
e.closeUI("");
cc.find("Event/scr_fight").getComponent("scr_fight").fight(108);
} else n.playText("Canvas/Event/notify", "精力不足", 60);
},
choice2: function() {
e.closeUI("");
}
},
2010: {
text: [ "" + [ [ "第一位挑战者40来岁，光着膀子，皮肤黝黑，肌肉健硕；听说常年在砖厂搬砖。" ], [ "第二位挑战者60多岁，虽然身材矮小、骨瘦粼粼，但却神情自若、胸有成竹；听说他最大的爱好是溜鸟和太极。" ], [ "第三位挑战者50上下，贼眉鼠眼，走起路来东倒西歪；听说早年，他靠着一只猴子浪迹天涯，但是几年前这只猴子却先他而去。" ], [ "第四位挑战者看不出年龄。你说年轻吧，却留着长长的白胡子；你说岁数大吧，他的手却像的女人手。听说他常年在街上卖祖传秘方，也顺带给人看看手相。" ], [ "第五位挑战者是最年轻的，30多岁，身体肥硕，满身酒气；原本在镇上有家肉店，但是自从他的妻子无法忍受长期虐待、带着8岁的儿子离家出走后，他就卖掉了肉铺，整天打麻将、喝酒。" ], [ "第六位挑战者70多啦，虽说从小双目失明，但却靠着敏锐的听觉和乐观的心态，成为一代皮影大师。" ] ][c.publicVar2[9]], "确定要挑战吗？", "挑战！", "算了~" ],
choice1: function() {
if (c.energy >= 10) {
var t = 2001 + c.publicVar2[9];
c.energy -= 10;
n.save();
e.closeUI("");
cc.find("Event/scr_fight").getComponent("scr_fight").fight(t);
} else n.playText("Canvas/Event/notify", "比武需10精力~", 60);
},
choice2: function() {
e.closeUI("");
}
},
2011: {
text: [ "“嘿！小伙~我们在给学校建围墙，现在正缺人手，要不要打会儿小工，帮我们搬搬砖呀？”", "“好呀，好呀”（搬砖，需10精力）", "“对不起，打扰了”（开溜）" ],
choice1: function() {
c.energy -= 10;
c.publicVar7[3] += 1;
c.money += 2;
if (c.publicVar7[3] >= 10) {
c.itemNum[0] += 10;
c.itemNum[10] += 1;
e.closeUI("围墙的一个角落，终于完成！工地不再需要临时工。散伙时，包工头请临时工吃了一顿饭，将剩下的食物打包给你，并给了你一块藏在枕头下的铁！获得「食物」*10，「铁」*1，「金钱」*2！");
} else if (5 === c.publicVar7[3]) {
c.itemNum[11] += 1;
e.closeUI("由于你搬砖搬得实在漂亮——从来没摔坏过一块砖，包工头奖励你一块藏在油布下的木材，获得「松木」*1，获得获得2元报酬。学校围墙完成度+0.1%（当前为" + (c.publicVar7[3] / 10).toFixed(1) + "%）");
} else if (2 === c.publicVar7[3]) {
c.itemNum[3] += 2;
e.closeUI("由于你搬砖卖力，包工头额外奖励你两块丢在工地门口的废品，获得「废品」*2，获得获得2元报酬。学校围墙完成度+0.1%（当前为" + (c.publicVar7[3] / 10).toFixed(1) + "%）");
} else e.closeUI("搬了一个小时砖，获得2元报酬。学校围墙完成度+0.1%（当前为" + (c.publicVar7[3] / 10).toFixed(1) + "%）");
},
choice2: function() {
if (c.publicVar4[6] >= 1) e.closeUI("“哎~慢走啊~”"); else if (c.energy >= 10) {
c.startUI = 7;
c.enemyId = 5011;
c.energy -= 10;
n.save();
e.closeUI("");
cc.find("Event/scr_fight").getComponent("scr_fight").fight(5011);
} else n.playText("Canvas/Event/notify", "精力不足", 60);
}
},
2012: {
text: [ "“嘿！小伙子~要不要来一杯呀？”", "“好呀，好呀”", "“不要，我是来找你切磋的”" ],
choice1: function() {
if (10 === c.publicVar7[3]) {
c.publicVar7[3] = 11;
c.role.hp = parseInt(n.role.maxHp());
c.itemNum[0] += 2;
e.closeUI("生命全恢复！包工头还贴心地给你打包了剩菜，获得「食物」*2！");
} else e.closeUI("包工头：“才吃完，碗都没洗，拿头吃？”");
},
choice2: function() {
if (c.publicVar4[6] >= 2) e.closeUI("“哎呀！忙得很，没空啊~”"); else if (c.energy >= 10) {
c.startUI = 7;
c.enemyId = 5012;
c.energy -= 10;
n.save();
e.closeUI("");
cc.find("Event/scr_fight").getComponent("scr_fight").fight(5012);
} else n.playText("Canvas/Event/notify", "精力不足", 60);
}
},
2013: {
text: [ "纹身杀害中年城管后，就逃到了山里，不跟任何人联系，饿了就去附近的菜地、村庄找吃的；他浑身脏兮兮，头发长了不少，乱做一团；与世隔绝的生活使他的脾气变得极其暴躁，也更为凶残！", "你只有一次抓捕机会，如果失败，纹身男会逃走；如果先不惊动他，则日后依旧有概率碰到他；如果报警，则必定获得金钱奖励，但不能亲手将他抓获，也无法得知他为什么要杀害中年城管。", "纹身男属性：攻99/防30/血999\n技能：刺杀Ⅱ/格挡Ⅱ/暴击Ⅰ/爆发Ⅱ（前两回合必爆）。确定要现在抓捕吗？", "现在抓捕（需10精力）", "回去报警" ],
ifExtend: !0,
choice1: function() {
if (c.energy >= 10) {
c.startUI = 1;
c.enemyId = 108;
c.energy -= 10;
c.publicVar6[20] = !1;
cc.find("Canvas/UI/map/valley/bossEvent").active = !1;
n.save();
e.closeUI("");
cc.find("Event/scr_fight").getComponent("scr_fight").fight(108);
} else {
e.initEventUI();
n.playText2("精力不足");
}
},
choice2: function() {
c.publicVar6[20] = !1;
c.money += 50;
c.publicVar4[7] = 1;
cc.find("Canvas/UI/map/valley/bossEvent").active = !1;
e.initEventUI();
e.closeUI("你回到县城，在警局报了警，几天后刑警在一个山洞中将纹身男抓获。由于你提供了有用信息，县公安局奖励了你50元。获得「金钱」*50");
},
choice3: [ "先不惊动他", function() {
e.closeUI("");
} ]
},
2014: {
text: [ "“哎呀！小伙，怎么有点眼熟哇？要不要试试手气，套个圈圈呀，大奖等你哟~”", "试试（1元，中奖率" + (30 + c.publicVar2[11]) + "%）", "溜了溜了~" ],
choice1: function() {
if (c.publicVar4[9] >= 5) n.playText("Canvas/Event/notify", "“小伙~能不能，给我留口饭吃？”", 100); else if (c.money >= 1) {
var t = 100 * Math.random(), e = 30 + c.publicVar2[11], a = 100 * Math.random(), i = cc.find("Canvas/Event"), o = i.getChildByName("EventText"), r = i.getChildByName("Choice").getChildByName("Choice1"), s = "";
s = t < e ? "套得" + function() {
var t = 100 * Math.random(), e = "";
if (t < 3) {
c.itemNum[24] += 1;
e = "「抹油鞋」*1（收集品！逃跑概率永久提高2%，触发「秒跑」概率永久提高2%！）";
} else if (t < 10) {
c.itemNum[28] += 1;
e = "「人参」*1";
} else if (t < 30) {
c.itemNum[17] += 1;
e = "「蜂蜜」*1";
} else if (t < 60) {
c.itemNum[1] += 1;
e = "「神秘结晶」*1";
} else {
c.itemNum[17] += 1;
e = "「草药」*1";
}
c.publicVar4[9] += 1;
return e;
}() + "！" : "什么也没套到...";
if (a < 15) {
c.publicVar2[11] += 1;
s += "套圈技术提升，下次套圈成功率提高1%！";
}
c.money -= 1;
o.removeAllChildren();
r.getChildByName("choiceText").getComponent("cc.Label").string = "试试（1元，中奖率" + (30 + c.publicVar2[11]) + "%）";
n.init();
n.save();
n.playText2(s);
} else n.playText("Canvas/Event/notify", "钱不够", 60);
},
choice2: function() {
e.closeUI("");
}
},
2015: {
text: [ "“麻辣卤鸡蛋——味道好滴很~”一位大婶正扯着嗓子喊，见你路过，突然抓住你，“哎呀！小伙~没吃饭吧，要不要来点？现在正在搞活动呢，有没有兴趣参加呀？”", "【‘买卤蛋赢奖品’活动说明】\n1）每天购买指定的卤蛋即可获得签到奖品，一天只能领一次\n2）连续签到次数越多，奖品越丰富，最多连续签到7次，中断后重新开始。", "不参加，仅仅来买食物（3元购买3个食物）", "告辞~" ],
ifExtend: !0,
choice1: function() {
if (c.money >= 3) {
c.money -= 3;
c.itemNum[0] += 3;
e.initEventUI();
n.playText2("获得「食物」*3");
} else e.eventNotify("钱不够");
},
choice2: function() {
c.publicVar6[7] ? e.closeUI("大婶：“慢走哈~”") : e.closeUI("大婶：“告辞！”");
},
choice3: [ c.publicVar6[7] ? "今天已签到" : "参加活动（第" + (c.publicVar4[10] + 1) + "次签到，需" + (3 * c.publicVar4[10] + 3) + "元购买）", function() {
var t = 3 * c.publicVar4[10] + 3;
if (c.publicVar6[7]) e.eventNotify("今天已签到"); else if (c.money >= t) {
var a = "";
c.money -= t;
c.itemNum[0] += t;
c.publicVar6[7] = !0;
c.publicVar4[10] += 1;
if (c.publicVar4[10] >= 7) {
c.publicVar4[10] = 7;
c.energy += 10;
a = "\n你已达成最高签到，额外获得10点精力！（兽夹：每篇日记50%概率收获2个食物，多个效果可叠加）";
} else a = "\n你已连续签到" + c.publicVar4[10] + "次，请再接再厉！";
cc.find("Canvas/Event/Choice/Choice3/choiceText").getComponent("cc.Label").string = "今天已签到！";
n.playText2("获得「食物」*" + t + "，签到礼品" + function() {
var t = [ [ "草药", 27, 2 ], [ "草药", 27, 1 ], [ "神秘结晶", 1, 1 ], [ "蜂蜜", 17, 2 ], [ "毛皮", 16, 2 ], [ "铁", 10, 1 ], [ "蓝晶石", 26, 1 ], [ "兽夹", 8, 1 ] ][c.publicVar4[10]] || [ "神秘结晶", 1, 1 ], e = t[2];
c.itemNum[t[1]] += e;
return "「" + t[0] + "」*" + e;
}() + "！" + a);
e.initEventUI();
} else e.eventNotify("钱不够");
} ]
},
2016: {
text: [ "“卖" + l[s][0] + "啦~最后一点了呀~~不买收摊了啊~~~”小范如此喊着。", "买，不买？", "买！（花费" + l[s][2] + "元购买" + l[s][1] + "个" + l[s][0] + "）", "不买~" ],
choice1: function() {
var t = l[s][2], a = l[s][3], i = l[s][1];
if (c.money >= t) {
c.money -= t;
c.itemNum[a] += i;
e.closeUI("获得「" + l[s][0] + "」*" + i);
} else n.playText("Canvas/Event/notify", "钱不够~", 60);
},
choice2: function() {
e.closeUI("小范：“切！~”");
}
}
};
return u;
},
getEventId: function(t) {
for (var e = 100 * Math.random(), c = t.length, n = 0; n <= c - 2; n++) if (e > t[n][0] && e <= t[n + 1][0]) return t[n + 1][1];
},
startEvent: function(e, c) {
var n = this.event()[this.getEventId(e)], a = n.text, i = a.pop(), o = a.pop(), r = a.length, s = cc.find("Canvas/Event/Choice"), l = cc.find("Canvas/Button"), u = cc.find("Canvas/Event/EventText");
"undefined" != typeof n.ifExtend && (u.height = 1050);
0 === (c = c || t("scr_data").startUI) ? l = cc.find("Canvas/Button") : 1 === c ? l = cc.find("Canvas/UI/map/valley") : 5 === c ? l = cc.find("Canvas/UI/map/city") : 7 === c && (l = cc.find("Canvas/UI/map/school"));
this.buttonUI = l;
u.removeAllChildren();
"undefined" != typeof n.action && n.action();
this.showUI();
this.printEventDes(a);
this.scheduleOnce(function() {
s.runAction(cc.scaleTo(.5, 1));
}, .07 * r);
(function() {
var t = n.choice1, e = n.choice2, c = n.choice3, a = s.getChildByName("Choice1"), r = s.getChildByName("Choice2");
a.getChildByName("choiceText").getComponent("cc.Label").string = o;
r.getChildByName("choiceText").getComponent("cc.Label").string = i;
"undefined" == typeof t && (a.active = !1);
if ("undefined" != typeof c) {
var l = s.getChildByName("Choice3");
a.y = 160;
l.active = !0;
l.getChildByName("choiceText").getComponent("cc.Label").string = c[0] || "";
l.on("touchstart", c[1], l);
cc.find("Canvas/Event/notify").y = -190;
}
a.on("touchstart", t, a);
r.on("touchstart", e, r);
})();
},
printEventDes: function(t) {
var e = t.length, c = 1, n = this, a = cc.find("Canvas/Event/EventText");
this.creatText(a, "plot0", t[0]);
this.schedule(function() {
n.creatText(a, "plot" + c, t[c]);
c++;
}, .07, e - 2);
},
showUI: function() {
var t = this.buttonUI;
cc.game.startPlay && window.clearTimeout(cc.game.startPlay);
cc.find("Canvas/notify").getComponent("cc.Label").string = "";
cc.find("Canvas/Event").scale = 1;
cc.find("Canvas/Event/Choice").scale = 0;
t.runAction(cc.scaleTo(.3, 0));
},
closeUI: function() {
var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", c = this.buttonUI, n = t("scr_public"), a = cc.find("Canvas/Event/Choice"), i = a.getChildByName("Choice1"), o = a.getChildByName("Choice2"), r = a.getChildByName("Choice3"), s = cc.find("Canvas/Event/EventText"), l = cc.find("Canvas/Event/notify");
s.removeAllChildren();
i.targetOff(i);
o.targetOff(o);
r.targetOff(r);
l.getComponent("cc.Label").string = "";
l.y = -285;
i.active = !0;
r.active = !1;
i.y = 193;
s.height = 650;
this.lineHeight = 50;
this.fontSize = 36;
cc.find("Canvas/Event").scale = 0;
c.runAction(cc.scaleTo(.3, 1));
n.playText2(e);
n.save();
n.init();
},
initEventUI: function() {
var e = t("scr_public"), c = cc.find("Canvas/Event"), n = c.getChildByName("EventText");
c.getChildByName("Choice").getChildByName("Choice1");
n.removeAllChildren();
e.init();
e.save();
},
eventNotify: function(e) {
t("scr_public").playText("Canvas/Event/notify", e, 80);
},
onLoad: function() {}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_public: "scr_public",
scr_roleSkillJugge: "scr_roleSkillJugge"
} ],
scr_mainUIinit2: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "8265bVConpAF6CpGsJL7R0m", "scr_mainUIinit2");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var e = t("scr_data"), c = t("scr_public"), n = {
0: [ "去野外找点吃的吧~" ],
1: [ "在【主角】->【训练】界面的可以提升最大生命值哦~" ],
2: [ "主角界面出现了一些新技能！（这些技能将逐渐显示，修炼它们会让主角变得更厉害哦）" ],
4: [ "山谷出现一条大蛇！（大蛇会一直呆在山谷，且可反复挑战，击败它将获得特殊奖励！）" ],
6: [ "现在可以在【主角】->【木工】界面制作木器，在【背包】->【木器】查看木器啦~\n下篇日记将开放县城「摆摊」功能，请做好准备吧~" ],
13: [ "触发【恐惧体验】【悲伤体验】：生命降低90%，攻击下降90%（持续一篇日记）！" ],
14: [ "提示：从现在开始，每次去县城，随机获得废品（每篇日记只能触发一次）" ],
28: [ "最后，我被放了出来；但是一直等到中午，也不见晓月出来。很明显我们被举报了。\n触发【焦虑体验】，精力降为10点。" ]
}[e.day];
if (0 === e.publicVar[8] && "undefined" != typeof n && 0 === e.enemyId) {
c.playText("Canvas/notify", n[0], 80);
e.publicVar[8] = 1;
c.save();
}
var a = [ "晓月：“这是啥？像红色的珍珠耶！可以吃吗？”", "晓月：“看这里，这里，手尖上，有根刺。帮我吸吸呗~嘻嘻~”", "晓月：“是真的——真的很大啦！比我胳膊还粗呐~”" ];
"undefined" != typeof cc.game.wSpeek && window.clearTimeout(cc.game.wSpeek);
cc.game.wSpeek = window.setInterval(function() {
var t = 100 * Math.random(), e = cc.find("Canvas/Button");
"undefined" != typeof e && null != e && t < 2 && 1 === e.scaleX && (n = parseInt(Math.random() * a.length), 
i = a[n] || "", c.playText("Canvas/notify", i, 100));
var n, i;
}, 1e4);
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_public: "scr_public"
} ],
scr_mainUIinit: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "63b63kuwo9N7JpekGEK/q7S", "scr_mainUIinit");
var n = function() {
function t(t, e) {
for (var c = 0; c < e.length; c++) {
var n = e[c];
n.enumerable = n.enumerable || !1;
n.configurable = !0;
"value" in n && (n.writable = !0);
Object.defineProperty(t, n.key, n);
}
}
return function(e, c, n) {
c && t(e.prototype, c);
n && t(e, n);
return e;
};
}();
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var e = t("scr_public"), c = t("scr_data"), a = t("scr_effect"), i = cc.find("Canvas/Button"), o = cc.find("Canvas/UI/outChoice"), r = cc.find("Canvas/UI/map"), s = r.getChildByName("valley"), l = r.getChildByName("city"), u = r.getChildByName("school"), p = c.publicVar[26], f = [ 20 + p, 25 + p, p ], h = function() {
function e() {
var c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [ 0, 0, 0, [ 0, 0 ] ];
(function(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
})(this, e);
this.data = t("scr_data");
this.action = t("scr_public");
this.baseRate = c;
this.getArr = n;
this.hadSellOut = 0;
}
n(e, [ {
key: "startSell",
value: function() {
if (this.ifSellOut()) this.action.playText2("已经没货啦~"); else if (this.energyConsume()) {
var t = this.sellTimes();
this.action.init();
this.action.playText2(t);
} else this.action.playText2("精力不足~");
}
}, {
key: "sellTimes",
value: function() {
for (var t = "", e = (Math.random(), this.calRate()), c = 0; e > 0 && c < 3; ) {
t += this.ifSell(e);
e -= 100;
c += 1;
}
this.hadSellOut > 1 ? t = "【" + this.hadSellOut + "连售！】" + t : 0 === this.hadSellOut && (t += this.sellCompensate());
return t += this.sellTask() || "";
}
}, {
key: "sellTask",
value: function() {
var t = [ 15, 40, 75, 120, 175, 240 ][this.data.publicVar4[16]], e = this.data.publicVar4[16];
if ("undefined" != typeof t) {
var c = "";
if (this.data.publicVar3[26] >= t) {
var n = 15 * (e + 1);
this.data.energy += n;
c += "恭喜！完成任务【累计" + t + "元】，精力+" + n + "！";
if ((e + 1) % 3 == 0) {
this.data.maxEnergy += 10;
c += "触发【成就体验】，精力上限提高10点！";
}
this.data.publicVar4[16] += 1;
this.action.save();
} else 0 != this.hadSellOut && (c += "【累计" + t + "元】任务进度" + this.data.publicVar3[26] + "/" + t);
return c;
}
}
}, {
key: "ifSell",
value: function(t) {
var e = "";
100 * Math.random() < t && (e += this.sellHandicraft());
return e;
}
}, {
key: "calRate",
value: function() {
return Math.min((this.data.publicVar3[13] / 10 + this.data.publicVar3[14] / 10 + this.data.publicVar3[15] / 10 + this.baseRate).toFixed(1), 100);
}
}, {
key: "energyConsume",
value: function() {
if (this.data.energy >= 5) {
this.data.energy -= 5;
return !0;
}
return !1;
}
}, {
key: "ifSellOut",
value: function() {
return this.data.itemNum3.every(function(t, e, c) {
return 0 === t;
});
}
}, {
key: "sellHandicraft",
value: function() {
var t, e = this, n = "", a = this.data.itemNum3, i = (a.length, 0), o = 0, r = function() {
var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
e.data.money += t;
e.data.publicVar3[14] += c;
e.data.publicVar3[15] += n;
e.data.publicVar3[13] -= parseInt(.5 * e.data.publicVar3[13]);
};
a.forEach(function(t, e, c) {
t > 0 && (i += 1);
});
t = parseInt(Math.random() * i + 1);
a.forEach(function(a, i, s) {
if (a > 0 && t === (o += 1)) {
var l = 0;
if (a < 100) {
var u = a, p = e.getArr[0];
l = parseInt(1 * (1 + .1 * u));
r(l, 0, p);
p < 0 ? n = "热度降低" + (Math.abs(p) / 10).toFixed(1) + "%..." : p > 0 && (n = "热度提高" + (p / 10).toFixed(1) + "%");
n = "卖出【劣质木器.lv" + u + "】，获得" + l + "元。" + n + "\n";
} else if (a < 200) {
var f = a - 100, h = e.getArr[1];
l = parseInt(2 * (1 + .1 * f));
r(l, 0, h);
n = "卖出【普通木器.lv" + f + "】，\n获得" + l + "元。热度提高" + (h / 10).toFixed(1) + "%\n";
} else if (a < 300) {
var m = a - 200, d = e.getArr[2];
l = parseInt(4 * (1 + .1 * m));
r(l, d, 0);
n = "卖出【优质木器.lv" + m + "】！\n获得" + l + "元。口碑提高" + (d / 10).toFixed(1) + "%\n";
} else if (a < 400) {
var v = a - 300, g = e.getArr[3][0], y = e.getArr[3][1];
l = parseInt(8 * (1 + .1 * v));
r(l, g, y);
n = "卖出【极品木器.lv" + v + "】！！\n获得" + l + "元。口碑提高" + (g / 10).toFixed(1) + "%点，热度提高" + (y / 10).toFixed(1) + "%\n";
}
e.data.itemNum3[i] = 0;
e.hadSellOut += 1;
c.publicVar3[26] += l;
e.action.save();
}
});
return n;
}
}, {
key: "sellCompensate",
value: function() {
if (this.data.itemNum[34] > 0) {
if (100 * Math.random() < 30) {
this.data.itemNum[34] -= 1;
this.data.money += 4;
this.data.publicVar3[15] += 10;
this.data.publicVar3[14] -= 1;
return "虽然一个木器也没卖掉，但是卖出一个神仙帖，获得4元，热度+10，口碑-1";
}
return "一个也没卖掉...";
}
return "一个也没卖掉...";
}
} ]);
return e;
}();
(function() {
i.active = !0;
i.scale = 0;
o.scale = 0;
o.active = !1;
s.scale = 0;
s.active = !1;
u.scale = 0;
u.active = !1;
l.scale = 0;
l.active = !1;
(function() {
i.getChildByName("rest").on("touchstart", function() {
c.energy > 10 ? cc.director.loadScene("notice2") : cc.director.loadScene("rest");
}, this);
i.getChildByName("make").on("touchstart", function() {
S();
c.startUI = 0;
cc.director.loadScene("make");
}, this);
i.getChildByName("role").on("touchstart", function() {
S();
cc.director.loadScene("role");
}, this);
i.getChildByName("wife").on("touchstart", function() {
S();
cc.director.loadScene("wife");
}, this);
i.getChildByName("bag").on("touchstart", function() {
S();
c.startUI = 0;
cc.director.loadScene("bag");
}, this);
o.getChildByName("back").on("touchstart", function() {
V(i);
I(o);
}, this);
i.getChildByName("out").on("touchstart", function() {
I(i);
V(o);
}, this);
o.getChildByName("valley").on("touchstart", function() {
m(1, 10);
}, this);
o.getChildByName("city").on("touchstart", function() {
m(5, 10);
}, this);
o.getChildByName("school").on("touchstart", function() {
m(7, 10);
}, this);
(function() {
s.getChildByName("collection1").on("touchstart", d, this);
s.getChildByName("randomEvent").on("touchstart", w, this);
s.getChildByName("fixedEvent").on("touchstart", R, this);
s.getChildByName("rareEnemy").on("touchstart", function() {
(function(t, n) {
if (c.energy >= 10) {
y(10, 0);
c.enemyId = n;
c.startUI = t;
e.save();
cc.find("Event/scr_fight").getComponent("scr_fight").fight(n);
} else e.playText("Canvas/notify", "精力不足！", 60);
})(1, c.publicVar3[21]);
}, this);
s.getChildByName("lvUp").on("touchstart", function() {
cc.director.loadScene("mapUp");
}, this);
s.getChildByName("eat").on("touchstart", function() {
U(1);
}, this);
s.getChildByName("back").on("touchstart", function() {
var t = s.getChildByName("bossEvent");
x();
!0 === t.active && (t.active = !1);
}, this);
s.getChildByName("bossEvent").on("touchstart", j, this);
l.getChildByName("shop").on("touchstart", G, this);
l.getChildByName("challenge").on("touchstart", g, this);
l.getChildByName("randomEvent").on("touchstart", k, this);
l.getChildByName("sell1").on("touchstart", D, this);
l.getChildByName("sell2").on("touchstart", P, this);
l.getChildByName("police").on("touchstart", M, this);
l.getChildByName("help").on("touchstart", J, this);
l.getChildByName("eat").on("touchstart", function() {
U(5);
}, this);
l.getChildByName("back").on("touchstart", x, this);
u.getChildByName("explore").on("touchstart", Z, this);
u.getChildByName("friend").on("touchstart", function() {
c.startUI = 7;
cc.director.loadScene("friend1");
}, this);
u.getChildByName("eat").on("touchstart", function() {
U(7);
}, this);
u.getChildByName("sell").on("touchstart", K, this);
u.getChildByName("help").on("touchstart", q, this);
u.getChildByName("randomEvent").on("touchstart", F, this);
u.getChildByName("fixedEvent").on("touchstart", H, this);
u.getChildByName("fixedEvent2").on("touchstart", A, this);
u.getChildByName("back").on("touchstart", x, this);
})();
})();
(function() {
var t = c.startUI;
if (0 === t) i.scale = 1; else if (1 === t) {
s.active = !0;
s.scale = 1;
} else if (5 === t) {
l.active = !0;
l.scale = 1;
} else if (7 === t) {
u.active = !0;
u.scale = 1;
}
})();
0 != c.enemyId && (i.scale = 0);
cc.find("Canvas/Fight").active = !1;
s.getChildByName("rareEnemy").active = !1;
O();
Y();
Q();
(function() {
if (0 == c.day && c.energy > e.maxEnergy() - 20) {
i.getChildByName("rest").active = !1;
i.getChildByName("bag").active = !1;
i.getChildByName("make").active = !1;
s.getChildByName("eat").active = !1;
}
c.day < 1 && (i.getChildByName("role").active = !1);
0 === c.ifFollow[0] && (i.getChildByName("wife").active = !1);
(c.day < 4 || c.publicVar6[11]) && (s.getChildByName("fixedEvent").active = !1);
c.day < 7 && (o.getChildByName("city").active = !1);
c.day < 13 && (s.getChildByName("lvUp").active = !1);
if (c.day <= 13) {
l.getChildByName("sell1").active = !0;
l.getChildByName("sell2").active = !0;
}
c.day < 17 && (o.getChildByName("school").active = !1);
c.day < 18 && (u.getChildByName("fixedEvent2").active = !1);
c.day < 21 && (u.getChildByName("fixedEvent").active = !1);
0 === c.ifFollow[1] && (u.getChildByName("friend").active = !1);
})();
T();
e.init();
c.health <= 0 && cc.director.loadScene("over");
c.day >= 2900000000000 * c.ifFollow[0] + 7 && cc.director.loadScene("transfer");
})();
function m() {
var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
if (c.publicVar6[12] && 5 === t) {
n = 0;
c.publicVar6[12] = !1;
e.init();
}
if (c.energy >= n) {
c.energy -= n;
a.textZoon("Canvas/Text/txt_energy");
I(o);
c.startUI = t;
if (1 == t) {
B(s);
c.publicVar6[20] && e.playText2("发现纹身男！！！");
} else if (5 == t) {
(function() {
if (c.day >= 14 && 0 === c.publicVar3[17]) {
var t = parseInt(4 * Math.random() + 1);
c.itemNum[3] += t;
c.publicVar3[17] = 1;
e.save();
e.playText2("去县城的路上，捡到一些废品，获得「废品」*" + t);
}
})();
B(l);
} else if (7 == t) {
B(u);
(function() {
if (3 === c.publicVar7[6]) b([ [ 0, 0 ], [ 100, 2006 ] ], 7); else if (!0 === c.publicVar6[4]) {
var t = 100 * Math.random();
if (t < 100) {
u.stopAllActions();
c.enemyId = 118;
cc.find("Event/scr_fight").getComponent("scr_fight").fight(118);
e.save();
}
}
})();
}
(function() {
e.save();
e.init();
})();
} else e.playText("Canvas/notify", "精力不够，需" + n + "点精力~", 60);
}
function d() {
if (c.energy < 10) e.playText("Canvas/notify", "精力不足！", 60); else {
var t = 100 * Math.random();
E();
v();
y(10, 1);
if (t < 20) {
var n = c.day;
C(n >= 29 ? [ [ 0, 0 ], [ 12, 200002 ], [ 30, 1 ], [ 60, 2 ], [ 80, 3 ], [ 100, 4 ] ] : n >= 8 ? [ [ 0, 0 ], [ 30, 1 ], [ 60, 2 ], [ 80, 3 ], [ 100, 4 ] ] : n >= 5 ? [ [ 0, 0 ], [ 33, 1 ], [ 66, 2 ], [ 100, 3 ] ] : n >= 2 ? [ [ 0, 0 ], [ 50, 1 ], [ 100, 2 ] ] : [ [ 0, 0 ], [ 100, 1 ] ], 1);
} else t < 40 ? c.day < 3 ? b([ [ 0, 0 ], [ 20, 3 ], [ 30, 4 ], [ 45, 5 ], [ 65, 6 ], [ 75, 7 ], [ 76, 8 ], [ 85, 12 ], [ 95, 10 ], [ 100, 9 ] ], 1) : b([ [ 0, 0 ], [ 20, 2 ], [ 30, 3 ], [ 45, 4 ], [ 55, 5 ], [ 70, 6 ], [ 75, 7 ], [ 76, 8 ], [ 85, 12 ], [ 95, 10 ], [ 100, 9 ] ], 1) : function() {
var t = [ [ [ 30, 11, 1, 1 ], [ 35, 27, 1, 1 ], [ 20, 14, 1, 1 ], [ 6, 17, 1, 1 ], [ 35, 0, 1, 1 ], [ 2, 23, 1, 1 ] ], [ [ 30, 11, 1, 1 ], [ 35, 27, 1, 1 ], [ 20, 14, 1, 1 ], [ 6, 17, 1, 1 ], [ 35, 0, 2, 1 ], [ 2, 23, 1, 1 ] ], [ [ 30, 11, 1, 1 ], [ 35, 27, 2, 1 ], [ 20, 14, 1, 1 ], [ 6, 17, 1, 1 ], [ 35, 0, 2, 1 ], [ 2, 23, 1, 1 ] ], [ [ 30, 11, 2, 1 ], [ 35, 27, 2, 1 ], [ 20, 14, 1, 1 ], [ 6, 17, 1, 1 ], [ 35, 0, 2, 1 ], [ 2, 23, 1, 1 ] ], [ [ 30, 11, 2, 1 ], [ 35, 27, 2, 1 ], [ 20, 14, 2, 1 ], [ 6, 17, 1, 1 ], [ 35, 0, 3, 1 ], [ 6, 28, 1, 1 ], [ 2, 23, 1, 1 ] ], [ [ 30, 11, 3, 1 ], [ 35, 27, 3, 1 ], [ 20, 14, 2, 1 ], [ 12, 17, 1, 1 ], [ 35, 0, 4, 1 ], [ 6, 28, 1, 1 ], [ 2, 28, 1, 1 ], [ 2, 23, 1, 1 ] ] ][c.publicVar[18]];
c.day < 1 && (t[0][0] += 10);
_(t);
}();
}
}
function v() {
var t = 4 * c.itemNum2[2] + c.publicVar2[12], n = e.role.maxHp();
c.role.hp += t;
c.role.hp > n && (c.role.hp = n);
}
function g() {
if (c.day < 9) {
var t = 9 - c.day;
e.playText("Canvas/notify", "比武将在" + t + "篇日记后开放，参赛的都是县里的“高手”！胜利后可获得奖金，失败也不会扣健康！请做好准备吧~", 80);
} else c.publicVar2[9] > 5 ? e.playText("Canvas/notify", "已经没有哪位老人不服气了~", 80) : b([ [ 0, 0 ], [ 100, 2010 ] ], 5);
}
function y() {
var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
c.energy -= t;
a.textZoon("Canvas/Text/txt_energy");
e.init();
e.save();
}
function C(t, e) {
var n = function(t) {
for (var e = 100 * Math.random(), c = t.length, n = 0; n <= c - 2; n++) if (e > t[n][0] && e <= t[n + 1][0]) return t[n + 1][1];
}(t);
1 != n && (c.enemyId = n);
c.startUI = e;
cc.find("Event/scr_fight").getComponent("scr_fight").fight(n);
}
function b(t, e) {
cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent").startEvent(t, e);
}
function _(t) {
var n = "", a = function(t) {
var e = 3 * c.itemNum2[3] + c.publicVar[27] + c.publicVar[13], n = 100 * Math.random(), a = "", i = 0;
for (;n < e && i < 2; ) {
t.forEach(function(t, e, c) {
t[2] += t[2];
});
a = [ "【双倍】", "【三倍】" ][i];
e -= 100;
i += 1;
}
return [ t, a ];
}(t);
t = a[0];
n += a[1];
var i = cc.find("Event/scr_fight").getComponent("scr_fight").getItem(t);
if ("没发现道具" != i) n += "获得" + i; else {
n = "什么也没发现";
var o = 0, r = 5 * c.charaLv[0][0];
c.publicVar[0] += 1;
for (;r > 0 && o < 3; ) {
n += N(r);
r -= 100;
o += 1;
}
}
e.save();
e.playText2(n);
}
function N(t) {
if (100 * Math.random() < t) {
var e = "", n = 100 * Math.random(), a = 6 * Math.random(), i = 0;
if (n < 15) {
i = Math.ceil(a / 3);
c.itemNum[17] += i;
e = "「蜂蜜」*" + i;
} else if (n < 30) {
i = Math.ceil(a / 3);
c.itemNum[1] += i;
e = "「神秘结晶」*" + i;
} else if (n < 60) {
i = Math.ceil(a / 2);
c.itemNum[27] += i;
e = "「草药」*" + i;
} else {
i = Math.ceil(a);
c.itemNum[0] += i;
e = "「食物」*" + i;
}
return "\n！【捡漏】触发，获得" + e;
}
return "";
}
function x() {
var t = r.children;
for (var n in t) 0 != t[n].scale && t[n].runAction(cc.scaleTo(.3, 0));
V(i);
c.startUI = 0;
E();
T();
e.save();
}
function V(t) {
t.active = !0;
t.runAction(cc.scaleTo(.3, 1));
}
function I(t) {
t.runAction(cc.scaleTo(.3, 0));
}
function B(t) {
t.active = !0;
t.runAction(cc.scaleTo(.3, 1));
}
function E() {
if (0 == c.day && c.energy <= e.maxEnergy() - 20) {
i.getChildByName("rest").active = !0;
i.getChildByName("bag").active = !0;
i.getChildByName("make").active = !0;
}
}
function T() {
var t = o.getChildByName("valley"), e = o.getChildByName("city"), n = o.getChildByName("school"), a = c.publicVar4[8];
a <= 4 ? l.getChildByName("randomEvent").getChildByName("text").getComponent("cc.Label").string = "！小范" : a <= 6 && (l.getChildByName("randomEvent").getChildByName("text").getComponent("cc.Label").string = "！云游道士");
c.publicVar6[12] ? e.getChildByName("text").getComponent("cc.Label").string = "县城(骑行)" : e.getChildByName("text").getComponent("cc.Label").string = "县  城";
s.getChildByName("lvUp").getChildByName("text").getComponent("cc.Label").string = "升级.lv" + c.publicVar[18];
L(s, t, c.publicVar6[16]);
L(l, e, c.publicVar4[8]);
L(u, n, c.publicVar6[19]);
(function() {
var t = c.publicVar3[21];
if (t > 0) {
var e = s.getChildByName("rareEnemy"), n = e.getChildByName("text");
o.getChildByName("valley").getComponent("cc.Button").normalColor = new cc.color(255, 0, 255, 255);
e.active = !0;
n.getComponent("cc.Label").string = 901 === t ? "！女王蜂" : "！刺团王";
}
})();
(function() {
if (c.publicVar6[20]) {
o.getChildByName("valley").getComponent("cc.Button").normalColor = new cc.color(255, 0, 0, 255);
s.getChildByName("bossEvent").active = !0;
}
})();
}
function L(t, e, c) {
if (c) {
e.getComponent("cc.Button").normalColor = new cc.color(51, 255, 0, 255);
t.getChildByName("randomEvent").active = !0;
} else {
e.getComponent("cc.Button").normalColor = new cc.color(255, 255, 255, 255);
t.getChildByName("randomEvent").active = !1;
}
}
function S() {
cc.game.startPlay && window.clearTimeout(cc.game.startPlay);
}
function U(t) {
c.startUI = t;
cc.director.loadScene("bag");
}
function w() {
var t = 100 * Math.random();
if (t < 50) {
var n = parseInt(1 + 2 * Math.random());
c.itemNum[12] += n;
e.playText2("发现一个麻袋！打开一看，是些碎布！获得「碎布」*" + n);
} else if (t < 100) {
c.itemNum[16] += 1;
e.playText2("发现一个麻袋！打开一看，是一块毛皮！获得「毛皮」*1");
}
c.publicVar6[16] = !1;
e.save();
s.getChildByName("randomEvent").active = !1;
}
function R() {
b([ [ 0, 0 ], [ 100, 2001 ] ], 1);
}
function k() {
var t = c.publicVar4[8];
if (t <= 4) b([ [ 0, 0 ], [ 100, 2016 ] ], 5); else if (t <= 6) b([ [ 0, 0 ], [ 100, 2002 ] ], 5); else if (7 === t) {
c.energy += 10;
e.init();
e.playText2("一位中年城管不仅不赶你走，还非要和你聊天！情绪提升，精力+10");
}
c.publicVar4[8] = 0;
l.getChildByName("randomEvent").active = !1;
e.save();
}
function M() {
b([ [ 0, 0 ], [ 100, 2008 ] ], 5);
}
function F() {
c.publicVar6[19] = !1;
u.getChildByName("randomEvent").active = !1;
b([ [ 0, 0 ], [ 100, 2007 ] ], 7);
e.save();
}
function H() {
c.energy >= 10 ? c.publicVar7[3] >= 10 ? b([ [ 0, 0 ], [ 100, 2012 ] ], 7) : b([ [ 0, 0 ], [ 100, 2011 ] ], 7) : e.playText2("至少需要10精力");
}
function A() {
b([ [ 0, 0 ], [ 100, 2015 ] ], 7);
}
function D() {
new h(f[0], [ 0, 80, 4, [ 8, 80 ] ]).startSell();
O();
}
function P() {
if (c.publicVar6[13]) {
new h(f[1], [ -4, 40, 10, [ 20, 40 ] ]).startSell();
O();
} else e.playText2("该摊位已经有人啦~");
}
function O() {
l.getChildByName("sell1").getChildByName("text").getComponent("cc.Label").string = "摆摊(" + z(f[0]) + "%)";
c.publicVar6[13] ? l.getChildByName("sell2").getChildByName("text").getComponent("cc.Label").string = "摆摊(" + z(f[1]) + "%)" : l.getChildByName("sell2").getChildByName("text").getComponent("cc.Label").string = "摆摊(有人)";
}
function z(t) {
return new h(t, [ 0, 0, 0, [ 0, 0 ] ]).calRate();
}
function J() {
var t = l.getChildByName("helpText");
cc.find("Canvas/notify").getComponent("cc.Label").string = "";
if (!1 === t.active) {
t.active = !0;
l.getChildByName("help").getComponent("cc.Label").string = "<关闭帮助>";
l.getChildByName("helpText").getComponent("cc.RichText").string = "摆摊说明：\n1）摆摊规则有点复杂，没看明白不要慌，只需要知道<color=#FF0000>按钮上的数字为摆摊成功率</color>就行^_^，学霸请继续\n2）摆摊成功率由四部分相加，具体为：\n摆摊成功率 = 热度 + 口碑 + 需求 + 基础值\n3）「口碑」通过出售优质木器增加；「热度」通过出售普通木器获得，每过一篇日记减少一半；「需求」每过一篇日记自动获得12%，每次成功售出木器后会减少；基础值和摆摊地点有关\n4）如果售出成功率超过100%，则超出部分另外计算（一次摆摊可售出多件）\n5）每累计出售一定金额的木器后，将会完成累计任务，并获得精力奖励；<color=#FF0000>每完成3次累计任务，提高10点精力上限！</color>";
} else {
t.active = !1;
l.getChildByName("help").getComponent("cc.Label").string = "<帮助>";
l.getChildByName("helpText").getComponent("cc.RichText").string = "";
}
}
function G() {
c.startUI = 5;
cc.director.loadScene("shop", function() {
var t = cc.find("Canvas").getComponent("scr_shop"), e = [ 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100 ];
100 === c.publicVar4[2] && (e = [ 100, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100 ]);
t.array = e;
cc.game.startPlay && window.clearTimeout(cc.game.startPlay);
});
}
function q() {
e.playText2("探索按钮上数字为探索进度，只有战胜敌人才能继续前进！");
}
function Z() {
var t = c.publicVar3[20], n = Math.min(parseInt(t / 8), 6);
if (t >= 50) e.playText("Canvas/notify", "已完成全部探索！（破烂已经被你捡光啦~）", 80); else if (c.energy < 10) e.playText("Canvas/notify", "精力不足！", 60); else {
var a = function() {
if (100 * Math.random() < 10) b([ [ 0, 0 ], [ 100, 2005 ] ], 7); else {
var t = [ [ [ 25, 12, 1, 1 ], [ 15, 2, 1, 1 ], [ 40, 3, 1, 1 ], [ 30, 32, 1, 1 ], [ 15, 14, 1, 1 ] ], [ [ 25, 12, 1, 1 ], [ 15, 2, 1, 1 ], [ 40, 3, 1, 1 ], [ 30, 32, 2, 1 ], [ 15, 14, 1, 1 ] ], [ [ 25, 12, 1, 1 ], [ 15, 2, 1, 1 ], [ 40, 3, 2, 1 ], [ 30, 32, 2, 1 ], [ 15, 14, 1, 1 ] ], [ [ 25, 12, 1, 1 ], [ 15, 2, 1, 1 ], [ 40, 3, 2, 1 ], [ 30, 32, 2, 1 ], [ 15, 14, 2, 1 ] ], [ [ 25, 12, 2, 1 ], [ 15, 2, 1, 1 ], [ 40, 3, 2, 1 ], [ 30, 32, 2, 1 ], [ 15, 14, 2, 1 ] ], [ [ 25, 12, 2, 1 ], [ 15, 2, 2, 1 ], [ 40, 3, 2, 1 ], [ 30, 32, 2, 1 ], [ 15, 14, 2, 1 ] ], [ [ 25, 12, 2, 1 ], [ 15, 2, 2, 1 ], [ 40, 3, 3, 1 ], [ 30, 32, 3, 1 ], [ 15, 14, 2, 1 ] ] ], e = t[n] || t[6];
c.publicVar3[20] += 1;
_(e);
}
};
v();
y(10, 0);
if (49 === t) {
c.maxEnergy += 10;
c.publicVar3[20] += 1;
e.init();
e.playText2("恭喜完成三中全部探索！校领导问讯赶来，特意给你颁发奖状，以表彰你捡光了学校所有破烂、却不求回报的高尚品德！触发【成就体验】，精力上限+10！");
} else if (0 === t) a(); else if (t % 8 == 0) {
var i;
i = [ 5001, 5001, 5002, 5003, 5004, 5005, 5006 ][n] || 5011;
c.enemyId = i;
c.startUI = 7;
e.save();
cc.find("Event/scr_fight").getComponent("scr_fight").fight(i);
} else if (t % 4 == 0) {
var o = n, r = [ [ [ 0, 0 ], [ 100, 1001 ] ], [ [ 0, 0 ], [ 100, 1002 ] ], [ [ 0, 0 ], [ 100, 1003 ] ], [ [ 0, 0 ], [ 100, 1004 ] ], [ [ 0, 0 ], [ 100, 1005 ] ], [ [ 0, 0 ], [ 100, 1011 ] ] ];
e.inspectBag("isEmpty") && (r[1][1][1] = 1021);
1 === c.publicVar4[15] ? r[5][1][1] = 1012 : 2 === c.publicVar4[15] ? r[5][1][1] = 1022 : 3 === c.publicVar4[15] && (r[5][1][1] = 1023);
c.publicVar3[20] += 1;
b(r[o], 7);
} else if (10 === c.publicVar3[20]) {
c.publicVar3[20] += 1;
e.playText2("意外发现几个被扔掉的劣质木器！获得" + e.getCraft(parseInt(1 + 50 * Math.random())) + e.getCraft(parseInt(1 + 50 * Math.random())) + e.getCraft(parseInt(1 + 50 * Math.random())));
} else a();
Y();
}
}
function K() {
var t = new h(f[0], [ 30, 100, 4, [ 8, 100 ] ]);
t.sellTimes = function() {
var t = "", e = (Math.random(), this.calRate(this.baseRate)), n = 0;
if (1 === c.ifFollow[1]) {
var a = c.publicVar2[4] + 5;
if (100 * Math.random() < a) {
c.publicVar2[3] += 1;
if (6 === c.publicVar2[3]) {
c.maxEnergy += 10;
c.energy += 10;
t += "！触发【第一个好友】，主角精力+10，精力上限提高10点！";
}
t += "【小胖的协助】" + this.sellHandicraft();
}
}
for (;e > 0 && n < 3; ) {
t += this.ifSell(e);
e -= 100;
n += 1;
}
this.hadSellOut > 1 ? t = "【" + this.hadSellOut + "连售！】" + t : 0 === this.hadSellOut && (t += this.sellCompensate());
return t += this.sellTask() || "";
};
t.ifSell = function(t) {
var e = "", c = 100 * Math.random(), n = this, a = function() {
n.data.publicVar7[5] -= 1;
n.data.money += 3;
n.hadSellOut += 1;
return "卖出1份旧书（还剩" + n.data.publicVar7[5] + "份！），获得3元\n";
};
if (c < t) if (this.data.publicVar7[5] > 0) if (this.ifSellOut()) e += a(); else {
e += 100 * Math.random() < 50 ? a() : this.sellHandicraft();
} else e += this.sellHandicraft();
return e;
};
t.startSell = function() {
if (this.ifSellOut() && this.data.publicVar7[5] <= 0) this.action.playText2("已经没货啦~"); else if (this.energyConsume()) {
var t = this.sellTimes();
this.action.init();
this.action.playText2(t);
} else this.action.playText2("精力不足~");
};
t.startSell();
Q();
}
function Y() {
u.getChildByName("explore").getChildByName("text").getComponent("cc.Label").string = "探索(" + Math.min(2 * c.publicVar3[20], 100) + "%)";
}
function Q() {
u.getChildByName("sell").getChildByName("text").getComponent("cc.Label").string = "摆摊(" + z(f[2]) + "%)";
}
function j() {
c.publicVar6[20] = !1;
s.getChildByName("bossEvent").active = !0;
b([ [ 0, 0 ], [ 100, 2013 ] ], 1);
}
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_effect: "scr_effect",
scr_public: "scr_public"
} ],
scr_makeUI: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "65413JSLq1B/LWVXwKnjL2L", "scr_makeUI");
cc.Class({
extends: cc.Component,
properties: {
itemUI: {
default: null,
type: cc.Prefab
}
},
creatText: function(t, e, c) {
var n = new cc.Node(e);
n.addComponent(cc.Label);
n.parent = t;
n.setPosition(0, -300);
n.color = new cc.Color(0, 255, 0);
n.getComponent(cc.Label).overflow = 3;
n.setContentSize(530, 300);
n.getComponent(cc.Label).string = c;
n.getComponent(cc.Label).lineHeight = 80;
n.getComponent(cc.Label).fontSize = 40;
},
itemContent: function() {
var e = t("scr_data"), c = this, n = t("scr_public"), a = {
0: {
itemName: "猎弓LV" + e.itemNum2[1],
needDes: "需松木" + e.itemNum[11] + "/" + (4 + 2 * e.itemNum2[1]),
des: "※增加" + 10 * e.itemNum2[1] + "点攻击，且攻击时，" + 2 * e.itemNum2[1] + "%几率触发【暴击】（1.5倍伤害）。",
ifEnough: function(t) {
e.itemNum[11] >= 4 + 2 * e.itemNum2[1] && (cc.find("Canvas/Page/view/content/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function() {
var t = 4 + 2 * e.itemNum2[1];
if (e.itemNum[11] >= t) {
e.itemNum[11] -= t;
e.itemNum2[1] += 1;
n.playText("Canvas/notify", "猎弓等级提升！", 100);
c.delayCreatItemUI();
} else n.playText("Canvas/notify", "材料不足！", 100);
}
},
1: {
itemName: "皮衣LV" + e.itemNum2[2],
needDes: "需毛皮" + e.itemNum[16] + "/" + (2 + 1 * e.itemNum2[2]),
des: "※增加" + 5 * e.itemNum2[2] + "点防御，且每次探索时，恢复" + 4 * e.itemNum2[2] + "点生命。",
ifEnough: function(t) {
e.itemNum[16] >= 2 + 1 * e.itemNum2[2] && (cc.find("Canvas/Page/view/content/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function() {
var t = 2 + 1 * e.itemNum2[2];
if (e.itemNum[16] >= t) {
e.itemNum[16] -= t;
e.itemNum2[2] += 1;
n.playText("Canvas/notify", "皮衣等级提升！", 100);
c.delayCreatItemUI();
} else n.playText("Canvas/notify", "材料不足！", 100);
}
},
2: {
itemName: "制造伤药",
needDes: "需草药" + e.itemNum[27] + "/2 ",
des: "※获得一个【伤药】（已拥有" + e.itemNum[7] + "个）\n※战斗中使用伤药可恢复" + (30 + 20 * e.charaLv[0][2]) + "点生命，且清除体内50%的毒素。",
ifEnough: function(t) {
e.itemNum[27] >= 2 && (cc.find("Canvas/Page/view/content/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function() {
if (e.itemNum[27] >= 2) {
var a = t("scr_roleSkillJugge")[2]();
e.itemNum[27] -= 2;
e.itemNum[7] += 1;
e.publicVar[5] += 1;
if (a) {
e = t("scr_data");
n.playText2("获得伤药*1，制药等级提升！");
} else n.playText2("获得伤药*1");
c.delayCreatItemUI();
} else n.playText2("草药不足");
}
},
3: {
itemName: "淬毒LV" + e.publicVar3[1],
needDes: "需黏液" + e.itemNum[6] + "/" + parseInt(4 + 2 * e.publicVar3[1]) + " ",
des: "※攻击时，20%几率给敌人附加" + 4 * e.publicVar3[1] + "点毒素，毒素可无限累加（每回合，毒素会扣除敌人生命，但是敌人的毒抗也会按百分比清除体内毒素）。",
ifEnough: function(t) {
e.itemNum[6] >= parseInt(4 + 2 * e.publicVar3[1]) && (cc.find("Canvas/Page/view/content/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function() {
var t = parseInt(4 + 2 * e.publicVar3[1]);
if (e.itemNum[6] >= t) {
e.itemNum[6] -= t;
e.publicVar3[1] += 1;
n.playText("Canvas/notify", "淬毒等级提高！", 100);
c.delayCreatItemUI();
} else n.playText("Canvas/notify", "材料不足！", 100);
}
},
4: {
itemName: "幸运护符LV" + e.itemNum2[3],
needDes: "需神秘结晶" + e.itemNum[1] + "/" + parseInt(4 + 2 * e.itemNum2[3]) + " ",
des: "※探索时，" + 3 * e.itemNum2[3] + "%几率获得【双倍】奖励（如果触发概率超过100%则可能触发多倍奖励）。",
ifEnough: function(t) {
e.itemNum[1] >= parseInt(4 + 2 * e.itemNum2[3]) && (cc.find("Canvas/Page/view/content/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function() {
var t = 4 + 2 * e.itemNum2[3];
if (e.itemNum[1] >= t) {
e.itemNum[1] -= t;
e.itemNum2[3] += 1;
n.playText("Canvas/notify", "幸运护符等级提高！", 100);
c.delayCreatItemUI();
} else n.playText("Canvas/notify", "材料不足！", 100);
}
},
5: {
itemName: "爱心护符LV" + e.itemNum2[8],
needDes: "需神秘结晶" + e.itemNum[1] + "/" + parseInt(4 + 2 * e.itemNum2[8]) + " ",
des: "※使用伤药时，" + 5 * e.itemNum2[8] + "%几率触发【暴击】（如果触发概率超过100%，则超出部分直接提升基础恢复量！）。",
ifEnough: function(t) {
e.itemNum[1] >= parseInt(4 + 2 * e.itemNum2[8]) && (cc.find("Canvas/Page/view/content/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function() {
var t = 4 + 2 * e.itemNum2[8];
if (e.itemNum[1] >= t) {
e.itemNum[1] -= t;
e.itemNum2[8] += 1;
n.playText("Canvas/notify", "爱心护符等级提高！", 100);
c.delayCreatItemUI();
} else n.playText("Canvas/notify", "材料不足！", 100);
}
},
6: {
itemName: "木匠腰带LV" + e.itemNum2[0],
needDes: "需碎布" + e.itemNum[12] + "/" + (4 + 4 * e.itemNum2[0]),
des: "※每篇日记，获得" + (40 + 10 * e.itemNum2[0]) + "点专注；且专注最低不会低于" + (1 + 5 * e.itemNum2[0]) + "。升木匠腰带可以获得更多的专注值！",
ifEnough: function(t) {
e.itemNum[12] >= 4 + 4 * e.itemNum2[0] && (cc.find("Canvas/Page/view/content/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function() {
var t = 4 + 4 * e.itemNum2[0];
if (e.itemNum[12] >= t) {
e.itemNum[12] -= t;
e.itemNum2[0] += 1;
n.playText("Canvas/notify", "木匠腰带等级提升！", 100);
c.delayCreatItemUI();
} else n.playText("Canvas/notify", "材料不足！", 100);
}
},
7: {
itemName: "训练腰带LV" + e.publicVar3[5],
needDes: "需碎布" + e.itemNum[12] + "/" + (4 + 4 * e.publicVar3[5]),
des: "※每篇日记，获得" + (5 + e.publicVar3[5]) + "点训练收益；且训练收益最低不会低于" + (1 + e.publicVar3[5]) + "点。升级训练腰带可以获得更多的训练收益！",
ifEnough: function(t) {
e.itemNum[12] >= 4 + 4 * e.publicVar3[5] && (cc.find("Canvas/Page/view/content/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function() {
var t = 4 + 4 * e.publicVar3[5];
if (e.itemNum[12] >= t) {
e.itemNum[12] -= t;
e.publicVar3[5] += 1;
n.playText("Canvas/notify", "训练腰带等级提升！", 100);
c.delayCreatItemUI();
} else n.playText("Canvas/notify", "材料不足！", 100);
}
},
8: {
itemName: "穿刺匕首LV" + e.itemNum2[4],
needDes: "需铁" + e.itemNum[10] + "/" + (6 + 2 * e.itemNum2[4]),
des: "※增加" + 20 * e.itemNum2[4] + "点攻击。攻击时，" + 4 * e.itemNum2[4] + "%几率触发【穿刺】（无视对方护甲）。",
ifEnough: function(t) {
e.itemNum[10] >= 6 + 2 * e.itemNum2[4] && (cc.find("Canvas/Page/view/content/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function() {
var t = 6 + 2 * e.itemNum2[4];
if (e.itemNum[10] >= t) {
e.itemNum[10] -= t;
e.itemNum2[4] += 1;
n.playText("Canvas/notify", "匕首等级提升！", 100);
c.delayCreatItemUI();
} else n.playText("Canvas/notify", "材料不足！", 100);
}
},
9: {
itemName: "皮甲LV" + e.itemNum2[5],
needDes: "",
des: "※收集类道具。增加" + 10 * e.itemNum2[5] + "点防御。受击时，" + 2 * e.itemNum2[5] + "%几率触发【格挡】。",
ifEnough: void 0,
button: function() {
n.playText2("不要乱摸了啦~");
}
},
10: {
itemName: "晓月项链LV" + e.itemNum2[13],
needDes: "需蓝晶石" + e.itemNum[26] + "/" + (4 + 2 * e.itemNum2[13]),
des: "※每篇日记开始时，40%概率额外获得" + 10 * e.itemNum2[13] + "%精力，" + 3 * e.itemNum2[13] + "%概率获得「祝福」状态（怪物两次掉落+50%），持续一篇日记",
ifEnough: function(t) {
e.itemNum[26] >= 4 + 2 * e.itemNum2[13] && (cc.find("Canvas/Page/view/content/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function() {
if (e.itemNum2[13] >= 10) n.playText("Canvas/notify", "已达最大等级！", 100); else {
var t = 4 + 2 * e.itemNum2[13];
if (e.itemNum[26] >= t) {
e.itemNum[26] -= t;
e.itemNum2[13] += 1;
n.playText("Canvas/notify", "晓月项链等级提升！", 100);
c.delayCreatItemUI();
} else n.playText("Canvas/notify", "材料不足！", 100);
}
}
},
11: {
itemName: "毒爆LV" + e.publicVar3[3],
needDes: "需黏液" + e.itemNum[6] + "/" + parseInt(2 + 4 * e.publicVar3[3]),
des: "※如果【淬毒】的同时触发【暴击】，则淬毒效果提高" + 20 * e.publicVar3[3] + "%。最高10级。",
ifEnough: function(t) {
e.itemNum[6] >= parseInt(2 + 4 * e.publicVar3[3]) && (cc.find("Canvas/Page/view/content/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function() {
if (e.publicVar3[3] >= 10) n.playText("Canvas/notify", "已达最大等级！", 100); else {
var t = parseInt(2 + 4 * e.publicVar3[3]);
if (e.itemNum[6] >= t) {
e.itemNum[6] -= t;
e.publicVar3[3] += 1;
n.playText("Canvas/notify", "毒爆等级提升！", 100);
c.delayCreatItemUI();
} else n.playText("Canvas/notify", "材料不足！", 100);
}
}
},
12: {
itemName: "血刃LV" + e.itemNum2[10],
needDes: "需血晶石" + e.itemNum[5] + "/" + (8 + 2 * e.itemNum2[10]),
des: "※攻击增加" + 30 * e.itemNum2[10] + "，暴击伤害增加" + 10 * e.itemNum2[10] + "%。攻击暴击时，给敌人附加一层【流血】（每回合损失5%生命，且受到的伤害提高" + 5 * e.itemNum2[10] + "%）",
ifEnough: function(t) {
e.itemNum[5] >= 80000000000 && (cc.find("Canvas/Page/view/content/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function() {
var t = 8 + 2 * e.itemNum2[10];
if (e.itemNum[5] >= t) {
e.itemNum[5] -= t;
e.itemNum2[10] += 1;
n.playText("Canvas/notify", "血刃等级提升！", 100);
c.delayCreatItemUI();
} else n.playText("Canvas/notify", "材料不足！", 100);
}
},
13: {
itemName: "血刃LV" + e.itemNum2[10],
needDes: "需血晶石" + e.itemNum[5] + "/" + (8 + 2 * e.itemNum2[10]),
des: "※攻击增加" + 30 * e.itemNum2[10] + "，暴击伤害增加" + 10 * e.itemNum2[10] + "%。攻击暴击时，给敌人附加一层【流血】（每回合损失5%生命，且受到的伤害提高" + 5 * e.itemNum2[10] + "%）",
ifEnough: function (t) {
e.itemNum[5] >= 80000000000 && (cc.find("Canvas/Page/view/content/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function () {
var t = 8 + 2 * e.itemNum2[10];
if (e.itemNum[5] >= t) {
e.itemNum[5] -= t;
e.itemNum2[10] += 1;
n.playText("Canvas/notify", "血刃等级提升！", 100);
c.delayCreatItemUI();
} else n.playText("Canvas/notify", "材料不足！", 100);
}
},
14: {
itemName: "血刃LV" + e.itemNum2[10],
needDes: "需血晶石" + e.itemNum[5] + "/" + (8 + 2 * e.itemNum2[10]),
des: "※攻击增加" + 30 * e.itemNum2[10] + "，暴击伤害增加" + 10 * e.itemNum2[10] + "%。攻击暴击时，给敌人附加一层【流血】（每回合损失5%生命，且受到的伤害提高" + 5 * e.itemNum2[10] + "%）",
ifEnough: function (t) {
e.itemNum[5] >= 80000000000 && (cc.find("Canvas/Page/view/content/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function () {
var t = 8 + 2 * e.itemNum2[10];
if (e.itemNum[5] >= t) {
e.itemNum[5] -= t;
e.itemNum2[10] += 1;
n.playText("Canvas/notify", "血刃等级提升！", 100);
c.delayCreatItemUI();
} else n.playText("Canvas/notify", "材料不足！", 100);
}
},
15: {
itemName: "血刃LV" + e.itemNum2[10],
needDes: "需血晶石" + e.itemNum[5] + "/" + (8 + 2 * e.itemNum2[10]),
des: "※攻击增加" + 30 * e.itemNum2[10] + "，暴击伤害增加" + 10 * e.itemNum2[10] + "%。攻击暴击时，给敌人附加一层【流血】（每回合损失5%生命，且受到的伤害提高" + 5 * e.itemNum2[10] + "%）",
ifEnough: function (t) {
e.itemNum[5] >= 80000000000 && (cc.find("Canvas/Page/view/content/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function () {
var t = 8 + 2 * e.itemNum2[10];
if (e.itemNum[5] >= t) {
e.itemNum[5] -= t;
e.itemNum2[10] += 1;
n.playText("Canvas/notify", "血刃等级提升！", 100);
c.delayCreatItemUI();
} else n.playText("Canvas/notify", "材料不足！", 100);
}
},
16: {
itemName: "血刃LV" + e.itemNum2[10],
needDes: "需血晶石" + e.itemNum[5] + "/" + (8 + 2 * e.itemNum2[10]),
des: "※攻击增加" + 30 * e.itemNum2[10] + "，暴击伤害增加" + 10 * e.itemNum2[10] + "%。攻击暴击时，给敌人附加一层【流血】（每回合损失5%生命，且受到的伤害提高" + 5 * e.itemNum2[10] + "%）",
ifEnough: function (t) {
e.itemNum[5] >= 80000000000 && (cc.find("Canvas/Page/view/content/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function () {
var t = 8 + 2 * e.itemNum2[10];
if (e.itemNum[5] >= t) {
e.itemNum[5] -= t;
e.itemNum2[10] += 1;
n.playText("Canvas/notify", "血刃等级提升！", 100);
c.delayCreatItemUI();
} else n.playText("Canvas/notify", "材料不足！", 100);
}
},
17: {
itemName: "血刃LV" + e.itemNum2[10],
needDes: "需血晶石" + e.itemNum[5] + "/" + (8 + 2 * e.itemNum2[10]),
des: "※攻击增加" + 30 * e.itemNum2[10] + "，暴击伤害增加" + 10 * e.itemNum2[10] + "%。攻击暴击时，给敌人附加一层【流血】（每回合损失5%生命，且受到的伤害提高" + 5 * e.itemNum2[10] + "%）",
ifEnough: function (t) {
e.itemNum[5] >= 80000000000 && (cc.find("Canvas/Page/view/content/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function () {
var t = 8 + 2 * e.itemNum2[10];
if (e.itemNum[5] >= t) {
e.itemNum[5] -= t;
e.itemNum2[10] += 1;
n.playText("Canvas/notify", "血刃等级提升！", 100);
c.delayCreatItemUI();
} else n.playText("Canvas/notify", "材料不足！", 100);
}
},
18: {
itemName: "血刃LV" + e.itemNum2[10],
needDes: "需血晶石" + e.itemNum[5] + "/" + (8 + 2 * e.itemNum2[10]),
des: "※攻击增加" + 30 * e.itemNum2[10] + "，暴击伤害增加" + 10 * e.itemNum2[10] + "%。攻击暴击时，给敌人附加一层【流血】（每回合损失5%生命，且受到的伤害提高" + 5 * e.itemNum2[10] + "%）",
ifEnough: function (t) {
e.itemNum[5] >= 80000000000 && (cc.find("Canvas/Page/view/content/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function () {
var t = 8 + 2 * e.itemNum2[10];
if (e.itemNum[5] >= t) {
e.itemNum[5] -= t;
e.itemNum2[10] += 1;
n.playText("Canvas/notify", "血刃等级提升！", 100);
c.delayCreatItemUI();
} else n.playText("Canvas/notify", "材料不足！", 100);
}
},
19: {
itemName: "血刃LV" + e.itemNum2[10],
needDes: "需血晶石" + e.itemNum[5] + "/" + (8 + 2 * e.itemNum2[10]),
des: "※攻击增加" + 30 * e.itemNum2[10] + "，暴击伤害增加" + 10 * e.itemNum2[10] + "%。攻击暴击时，给敌人附加一层【流血】（每回合损失5%生命，且受到的伤害提高" + 5 * e.itemNum2[10] + "%）",
ifEnough: function (t) {
e.itemNum[5] >= 80000000000 && (cc.find("Canvas/Page/view/content/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function () {
var t = 8 + 2 * e.itemNum2[10];
if (e.itemNum[5] >= t) {
e.itemNum[5] -= t;
e.itemNum2[10] += 1;
n.playText("Canvas/notify", "血刃等级提升！", 100);
c.delayCreatItemUI();
} else n.playText("Canvas/notify", "材料不足！", 100);
}
},
20: {
itemName: "血刃LV" + e.itemNum2[10],
needDes: "需血晶石" + e.itemNum[5] + "/" + (8 + 2 * e.itemNum2[10]),
des: "※攻击增加" + 30 * e.itemNum2[10] + "，暴击伤害增加" + 10 * e.itemNum2[10] + "%。攻击暴击时，给敌人附加一层【流血】（每回合损失5%生命，且受到的伤害提高" + 5 * e.itemNum2[10] + "%）",
ifEnough: function (t) {
e.itemNum[5] >= 80000000000 && (cc.find("Canvas/Page/view/content/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function () {
var t = 8 + 2 * e.itemNum2[10];
if (e.itemNum[5] >= t) {
e.itemNum[5] -= t;
e.itemNum2[10] += 1;
n.playText("Canvas/notify", "血刃等级提升！", 100);
c.delayCreatItemUI();
} else n.playText("Canvas/notify", "材料不足！", 100);
}
},
21: {
itemName: "刺骨盾LV" + e.itemNum2[11],
needDes: "需巨兽刺骨" + e.itemNum[23] + "/" + (4 + 1 * e.itemNum2[11]),
des: "※增加" + 15 * e.itemNum2[11] + "点防御。战斗中，如果格挡，则提高" + 3 * e.itemNum2[11] + "点防御（最多叠加10层），且对方受到「你当前的防御*100%」点反伤。",
ifEnough: function(t) {
e.itemNum[23] >= 400000000 + 1 * e.itemNum2[11] && (cc.find("Canvas/Page/view/content/page_6/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function() {
var t = 4 + 1 * e.itemNum2[11];
if (e.itemNum[23] >= t) {
e.itemNum[23] -= t;
e.itemNum2[11] += 1;
n.playText("Canvas/notify", "刺骨盾等级提升！", 100);
c.delayCreatItemUI();
} else n.playText("Canvas/notify", "材料不足！", 100);
}
}
};
return a;
},
creatPrefab: function(t, e) {
var c = cc.instantiate(this.itemUI), n = this.itemContent()[t], a = n.button, i = "item" + t, o = n.needDes;
/需/.test(o) && (o = "（" + o + "）");
c.name = i;
c.getChildByName("button").getChildByName("name").getComponent("cc.Label").string = n.itemName + o;
c.getChildByName("des").getComponent("cc.Label").string = n.des;
c.getChildByName("button").getChildByName("name").getComponent("cc.Button").scheduleOnce(function() {
c.getChildByName("button").getChildByName("name").on("touchstart", a, this);
}, .2);
cc.find("Canvas/Page/view/content").getChildByName(e).addChild(c);
if ("undefined" != typeof n.ifEnough) {
var r = e + "/" + i;
n.ifEnough(r);
}
},
creatItemUI1: function() {
cc.find("Canvas/Page/view/content/page_1").removeAllChildren();
for (var t = 0; t <= 3; t++) this.creatPrefab(t, "page_1");
},
creatItemUI2: function() {
cc.find("Canvas/Page/view/content/page_2").removeAllChildren();
if (t("scr_data").day < 2) this.creatText(cc.find("Canvas/Page/view/content/page_2"), "notify", "※再看" + (2 - t("scr_data").day) + "篇日记后自动解锁本页内容~"); else for (var e = 4; e <= 7; e++) this.creatPrefab(e, "page_2");
},
creatItemUI3: function() {
cc.find("Canvas/Page/view/content/page_3").removeAllChildren();
if (t("scr_data").day < 4) this.creatText(cc.find("Canvas/Page/view/content/page_3"), "notify", "※再看" + (4 - t("scr_data").day) + "篇日记后自动解锁本页内容~"); else for (var e = 8; e <= 11; e++) this.creatPrefab(e, "page_3");
},
creatItemUI4: function() {
cc.find("Canvas/Page/view/content/page_4").removeAllChildren();
if (t("scr_data").day < 6) this.creatText(cc.find("Canvas/Page/view/content/page_4"), "notify", "※再看" + (6 - t("scr_data").day) + "篇日记后自动解锁本页内容~（最后3页为扩充内容，下个版本更新）"); else for (var e = 12; e <= 15; e++) this.creatPrefab(e, "page_4");
},
creatItemUI5: function() {
cc.find("Canvas/Page/view/content/page_5").removeAllChildren();
if (t("scr_data").day < 8) this.creatText(cc.find("Canvas/Page/view/content/page_5"), "notify", "※再看" + (8 - t("scr_data").day) + "篇日记后自动解锁本页内容~"); else for (var e = 15; e <= 18; e++) this.creatPrefab(e, "page_5");
},
creatItemUI6: function() {
cc.find("Canvas/Page/view/content/page_6").removeAllChildren();
if (t("scr_data").day < 10) this.creatText(cc.find("Canvas/Page/view/content/page_6"), "notify", "※再看" + (10 - t("scr_data").day) + "篇日记后自动解锁本页内容~"); else for (var e = 18; e <= 21; e++) this.creatPrefab(e, "page_6");
},
delayCreatItemUI: function() {
var t = this;
this.scheduleOnce(function() {
t.creatItemUI1();
t.creatItemUI2();
t.creatItemUI3();
t.creatItemUI4();
t.creatItemUI5();
t.creatItemUI6();
}, .2);
},
delayCreatItemUI1: function() {
this.scheduleOnce(this.creatItemUI1, .2);
},
delayCreatItemUI2: function() {
this.scheduleOnce(this.creatItemUI2, .2);
},
delayCreatItemUI3: function() {
this.scheduleOnce(this.creatItemUI3, .2);
},
delayCreatItemUI4: function() {
this.scheduleOnce(this.creatItemUI4, .2);
},
delayCreatItemUI5: function() {
this.scheduleOnce(this.creatItemUI5, .2);
},
delayCreatItemUI6: function() {
this.scheduleOnce(this.creatItemUI6, .2);
},
onLoad: function() {
t("scr_data"), t("scr_public");
this.creatItemUI1();
this.creatItemUI2();
this.creatItemUI3();
this.creatItemUI4();
this.creatItemUI5();
this.creatItemUI6();
cc.find("Canvas/Button_backMainUI").on("touchstart", function() {
t("scr_public").save();
0 != t("scr_data").startUI ? cc.director.loadScene("bag") : cc.director.loadScene("main");
}, this);
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_public: "scr_public",
scr_roleSkillJugge: "scr_roleSkillJugge"
} ],
scr_mapUp2: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "0272catU6FEbZT4zWqiU/Ta", "scr_mapUp2");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
var e = t("scr_data"), c = t("scr_public"), n = cc.find("Canvas"), a = n.getChildByName("mainUI"), i = function() {
return 10 * e.publicVar[18] + 10;
};
(function() {
a.getChildByName("choice1").on("touchstart", o, this);
n.getChildByName("help1").on("touchstart", s, this);
n.getChildByName("back").on("touchstart", function() {
c.save();
c.backMain();
}, this);
})();
r();
function o() {
var t = i();
if (e.publicVar[18] >= 5) c.playText2("已达最大等级！"); else if (e.itemNum[32] >= t) {
e.itemNum[32] -= t;
e.publicVar[18] += 1;
r();
c.playText2("山谷地图等级提升！");
} else c.playText2("肥料不足！（可去县城购买）");
}
function r() {
var t = Math.min(e.publicVar[18], 5);
n.getChildByName("mapLv").getComponent("cc.Label").string = "地图等级：" + t + "级";
n.getChildByName("enemyStr").getComponent("cc.Label").string = "怪物强度：" + [ 100, 140, 200, 280, 380, 500 ][t] + "%";
a.getChildByName("choice1").getChildByName("text").getComponent("cc.Label").string = "山谷升级（需肥料" + e.itemNum[32] + "/" + i() + "）";
}
function s() {
var t = n.getChildByName("helpText1");
if (!1 === t.active) {
n.getChildByName("help1").getComponent("cc.Label").string = "<关闭帮助>";
t.active = !0;
} else {
n.getChildByName("help1").getComponent("cc.Label").string = "<帮助>";
t.active = !1;
}
n.getChildByName("notify").getComponent("cc.Label").string = "";
}
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_public: "scr_public"
} ],
scr_newGame: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "116b0dQK4RNd6tA1hozVnWG", "scr_newGame");
cc.Class({
extends: cc.Component,
properties: {},
callBack: function() {
JSON.parse(cc.sys.localStorage.getItem("userData")) ? cc.director.loadScene("notice") : cc.director.loadScene("choice");
},
onLoad: function() {
this.node.on("touchstart", this.callBack, this);
}
});
cc._RF.pop();
}, {} ],
scr_notice2: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "5d6b1w/rEpC5bWSm2L4xLZt", "scr_notice2");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var e = t("scr_public"), c = cc.find("Canvas/button");
cc.find("Canvas/button/button1").on("touchstart", function() {
cc.director.loadScene("main");
}, this);
cc.find("Canvas/button/button2").on("touchstart", function() {
cc.director.loadScene("rest");
}, this);
e.playText("Canvas/text", "你即将进入下一篇日记，系统检测到你剩余精力超过10点（超出部分将会损失），确定要进入下一篇吗？", 80);
c.opacity = 0;
this.scheduleOnce(function() {
c.runAction(cc.fadeIn(2));
}, 1);
}
});
cc._RF.pop();
}, {
scr_public: "scr_public"
} ],
scr_notice: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "8a8f3K8uShD74FI50VPMkWg", "scr_notice");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var e = cc.find("Canvas/button");
cc.find("Canvas/button/button1").on("touchstart", function() {
cc.sys.localStorage.removeItem("userData");
cc.director.loadScene("choice");
}, this);
cc.find("Canvas/button/button2").on("touchstart", function() {
cc.director.loadScene("start");
}, this);
t("scr_effect").playText("Canvas/text", "新开会删除旧存档，你确定要新开吗？", 80);
e.opacity = 0;
this.scheduleOnce(function() {
e.runAction(cc.fadeIn(2));
}, 2);
}
});
cc._RF.pop();
}, {
scr_effect: "scr_effect"
} ],
scr_open: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "72e60aF4atJaJ3b2ZL0hIlb", "scr_open");
cc.Class({
extends: cc.Component,
properties: {},
creatText: function(t, e, c) {
var n = new cc.Node(e);
n.addComponent(cc.Label);
n.parent = t;
n.setPosition(0, 0);
n.opacity = 0;
n.runAction(cc.fadeIn(3));
n.color = new cc.Color(255, 255, 255);
n.getComponent(cc.Label).overflow = 3;
n.getComponent(cc.Label).horizontalAlign = 1;
n.setContentSize(630, 300);
n.getComponent(cc.Label).string = c;
n.getComponent(cc.Label).lineHeight = 60;
n.getComponent(cc.Label).fontSize = 36;
},
onLoad: function() {
var t = [ "清晨的阳光落在山间的小屋；", "拥抱过刚刚睡醒的晓月，", "我背起木弓，开始了一天的狩猎。" ], e = (t.length, this), c = 0, n = cc.find("Canvas/Layout"), a = cc.find("Canvas/skip");
function i() {
e.creatText(n, "plot" + c, t[c]);
c++;
}
var o = window.setInterval(function() {
var t = {
500: function() {
i();
},
2500: function() {
i();
},
5000: function() {
i();
},
10000: function() {
var t = n.children;
for (var e in t) t[e].runAction(cc.fadeOut(2));
},
13000: function() {
window.clearInterval(o);
cc.director.loadScene("main");
}
};
"undefined" != typeof t[r += 500] && t[r]();
}, 500), r = 0;
a.on("touchstart", function() {
o && window.clearTimeout(o);
cc.director.loadScene("main");
}, this);
this.scheduleOnce(function() {
a.active = !0;
a.runAction(cc.fadeTo(3, 60));
}, 0);
}
});
cc._RF.pop();
}, {} ],
scr_over2_1: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "62e498iaclK8KXOlDUYWsAs", "scr_over2_1");
cc.Class({
extends: cc.Component,
properties: {},
creatText: function(t, e, c) {
var n = new cc.Node(e);
n.addComponent(cc.Label);
n.parent = t;
n.setPosition(0, 0);
n.opacity = 0;
n.runAction(cc.fadeIn(3));
n.color = new cc.Color(255, 255, 255);
n.getComponent(cc.Label).overflow = 3;
n.getComponent(cc.Label).horizontalAlign = 1;
n.setContentSize(600, 300);
n.getComponent(cc.Label).string = c;
n.getComponent(cc.Label).lineHeight = 70;
n.getComponent(cc.Label).fontSize = 40;
},
onLoad: function() {
t("scr_data");
var e = t("scr_adoptData"), c = t("scr_public"), n = [ "很好，", "你可能有点轻微的强迫症，", "但是我还是决定给你一点补偿,", "虽然我认为你接受的可能性只有\n20%，", "但是，你也没办法寄刀片给我\n(｀・ω・´)", "因为我是一个虚拟现实角色！" ], a = n.length, i = 0, o = cc.find("Canvas/Show"), r = cc.find("Canvas/Determine"), s = this, l = Math.min(20 + 10 * e.dieChoice[3], 40);
cc.find("Canvas/Determine/choice1/text").getComponent("cc.Label").string = "带着作者给的" + parseInt(l) + "元钱，重新开始";
r.active = !1;
r.opacity = 0;
this.schedule(function() {
s.creatText(o, "plot" + i, n[i]);
i++;
}, 3, a - 1);
this.scheduleOnce(function() {
r.active = !0;
r.runAction(cc.fadeIn(2));
}, 3 * (a + 1));
r.getChildByName("choice1").on("touchstart", function() {
e.initMoney = l;
e.dieChoice[3] += 0;
c.save2();
(function() {
JSON.parse(cc.sys.localStorage.getItem("userData")) && cc.sys.localStorage.removeItem("userData");
cc.director.loadScene("start");
})();
}, this);
r.getChildByName("choice2").on("touchstart", function() {
e.dieChoice[3] += 1;
c.save2();
cc.director.loadScene("over");
}, this);
}
});
cc._RF.pop();
}, {
scr_adoptData: "scr_adoptData",
scr_data: "scr_data",
scr_public: "scr_public"
} ],
scr_over2: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "aca905dFBlPoYq+iajnsZIA", "scr_over2");
cc.Class({
extends: cc.Component,
properties: {},
creatText: function(t, e, c) {
var n = new cc.Node(e);
n.addComponent(cc.Label);
n.parent = t;
n.setPosition(0, 0);
n.opacity = 0;
n.runAction(cc.fadeIn(3));
n.color = new cc.Color(255, 255, 255);
n.getComponent(cc.Label).overflow = 3;
n.getComponent(cc.Label).horizontalAlign = 1;
n.setContentSize(600, 300);
n.getComponent(cc.Label).string = c;
n.getComponent(cc.Label).lineHeight = 60;
n.getComponent(cc.Label).fontSize = 40;
},
onLoad: function() {
var e = t("scr_data"), c = (t("scr_public"), [ [ "晓月生命垂危（健康值" + e.att[1][1] + "），", "你可以选择复活她，但是会永久损失20%心情值，", "你如何选择呢？" ] ]), n = c.length, a = 0, i = cc.find("Canvas/Show"), o = cc.find("Canvas/Determine"), r = this;
o.active = !1;
o.opacity = 0;
this.schedule(function() {
r.creatText(i, "plot" + a, c[a]);
a++;
}, 2.5, n - 1);
this.scheduleOnce(function() {
o.active = !0;
o.runAction(cc.fadeIn(2));
}, 2.5 * (n + 1));
o.getChildByName("choice1").on("touchstart", function() {
e.att[1][1] += 10;
e.att[1][0] -= parseInt(.2 * e.att[1][0]);
t("scr_public").save();
cc.director.loadScene("main");
}, this);
o.getChildByName("choice2").on("touchstart", function() {
JSON.parse(cc.sys.localStorage.getItem("userData")) && cc.sys.localStorage.removeItem("userData");
cc.director.loadScene("start");
}, this);
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_public: "scr_public"
} ],
scr_over: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "6d161adbZhGOIo8GmNaz6i6", "scr_over");
cc.Class({
extends: cc.Component,
properties: {},
creatText: function(t, e, c) {
var n = new cc.Node(e);
n.addComponent(cc.Label);
n.parent = t;
n.setPosition(0, 0);
n.opacity = 0;
n.runAction(cc.fadeIn(3));
n.color = new cc.Color(255, 255, 255);
n.getComponent(cc.Label).overflow = 3;
n.getComponent(cc.Label).horizontalAlign = 1;
n.setContentSize(600, 300);
n.getComponent(cc.Label).string = c;
n.getComponent(cc.Label).lineHeight = 60;
n.getComponent(cc.Label).fontSize = 32;
},
onLoad: function() {
var e = t("scr_data"), c = t("scr_adoptData"), n = t("scr_public"), a = Math.min(4 * c.gameData[1] + 6, 18), i = [ "你已死亡（健康值" + e.health + "）。", "选择复活，将恢复20健康，但是会失去背包中全部素材。", "选择重开，游戏将从头开始，在游戏开始后、你可以额外获得" + a + "个草药和食物。", "请做出你的选择吧。" ], o = i.length, r = 0, s = cc.find("Canvas/Show"), l = cc.find("Canvas/Determine"), u = this;
l.active = !1;
l.opacity = 0;
this.schedule(function() {
u.creatText(s, "plot" + r, i[r]);
r++;
}, 2, o - 1);
this.scheduleOnce(function() {
l.active = !0;
l.runAction(cc.fadeIn(2));
}, 2 * (o + 1));
l.getChildByName("choice1").on("touchstart", function() {
e.health += 20;
for (var c in e.itemNum) e.itemNum[c] = 0;
e.money = 0;
t("scr_public").save();
cc.director.loadScene("main");
}, this);
l.getChildByName("choice2").on("touchstart", function() {
JSON.parse(cc.sys.localStorage.getItem("userData")) && cc.sys.localStorage.removeItem("userData");
c.gameData[1] += 1;
c.gameData[2] = 1;
n.save2();
cc.director.loadScene("start");
}, this);
cc.find("Canvas/Determine/choice2/text").getComponent("cc.Label").string = "重开，获得" + a + "个草药和食物";
}
});
cc._RF.pop();
}, {
scr_adoptData: "scr_adoptData",
scr_data: "scr_data",
scr_public: "scr_public"
} ],
scr_pet: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "c11bason/tEIJww7lJaznrn", "scr_pet");
cc.Class({
extends: cc.Component,
properties: {},
creatText: function(t, e, c) {
var n = new cc.Node(e);
n.addComponent(cc.Label);
n.parent = t;
n.setPosition(0, 0);
n.color = new cc.Color(115, 115, 115);
n.getComponent(cc.Label).overflow = 3;
n.setContentSize(630, 300);
n.getComponent(cc.Label).string = c;
n.getComponent(cc.Label).lineHeight = 50;
n.getComponent(cc.Label).fontSize = 32;
},
onLoad: function() {
var e = t("scr_data"), c = t("scr_public"), n = e.att[2][0], a = e.charaLv[2], i = {
0: function() {
0 == a[0] && n >= 10 && (a[0] = 1);
},
1: function() {
0 == a[1] && n >= 14 && (a[1] = 1);
},
2: function() {
0 == a[2] && n >= 19 && (a[2] = 1);
},
3: function() {
0 == a[3] && n >= 25 && (a[3] = 1);
},
4: function() {
0 == a[4] && n >= 32 && (a[4] = 1);
},
5: function() {
0 == a[5] && n >= 40 && (a[5] = 1);
},
6: function() {
0 == a[6] && n >= 49 && (a[6] = 1);
},
7: function() {
0 == a[7] && n >= 59 && (a[7] = 1);
},
8: function() {
0 == a[8] && n >= 70 && (a[8] = 1);
},
9: function() {
0 == a[9] && n >= 82 && (a[9] = 1);
},
10: function() {
0 == a[10] && n >= 95 && (a[10] = 1);
},
11: function() {
0 == a[11] && n >= 109 && (a[11] = 1);
},
12: function() {
0 == a[12] && n >= 124 && (a[12] = 1);
},
13: function() {
0 == a[13] && n >= 140 && (a[13] = 1);
},
14: function() {
0 == a[14] && n >= 157 && (a[14] = 1);
},
15: function() {
0 == a[15] && n >= 175 && (a[15] = 1);
},
16: function() {
0 == a[16] && n >= 194 && (a[16] = 1);
},
17: function() {
0 == a[17] && n >= 214 && (a[17] = 1);
},
18: function() {
0 == a[18] && n >= 235 && (a[18] = 1);
},
19: function() {
0 == a[19] && n >= 257 && (a[19] = 1);
},
20: function() {
0 == a[20] && n >= 280 && (a[20] = 1);
}
}, o = {
0: "【攻击1】主角攻击+15。体重11kg激活。",
1: "【暴击1】主角暴击率+3%。11.5kg激活。",
2: "【防御1】主角防御+20。12.1kg激活。",
3: "【逃跑1】主角逃跑率+10%。12.8kg激活。",
4: "【嗅觉1】尖牙掉落数永久+1。13.6kg激活。",
5: "【生命1】主角生命上限+120。14.5kg激活。",
6: "【嗅觉2】生肉掉落数永久+1。15.5kg激活。",
7: "【感知1】休息后，全地图出现稀有怪几率额外+5%。16.6kg激活。",
8: "【逃跑2】主角逃跑率+20%。17.8kg激活。",
9: "【转化】增加主角" + parseInt(2 * n) + "点生命（与宠物体重有关）。19.1kg激活。",
10: "【狂暴1】主角暴击伤害由150%提高到170%。20.5kg激活。",
11: "【暴击2】主角暴击率+6%。。22kg激活。",
12: "【嗅觉3】战斗胜利后，获得额外掉落概率+12%。23.6kg激活。",
13: "【保护】增加主角" + parseInt(.4 * n) + "点防御（与宠物体重有关）。25.3kg激活。",
14: "【机智】如果逃跑失败，则下次逃跑概率+20%（可无限叠加）。27.1kg激活。",
15: "【暴击3】主角暴击率+10%。29kg激活。",
16: "【嗜血】主角如果暴击，则恢复伤害15%生命。31kg激活。",
17: "【感知2】休息后，全地图出现稀有怪几率额外再加+10%。33.1kg激活。",
18: "【助战】增加主角" + parseInt(.4 * n) + "点攻击（与宠物体重有关）。35.3kg激活。",
19: "【奋战】主角如果暴击，则伤害提高5%（可无限叠加）。37.6kg激活。",
20: "【狂暴2】主角暴击伤害由170%提高到200%。40kg激活。"
}, r = cc.find("Canvas/UI1/Scroll/view/content");
for (var s in i) i[s]();
for (var l in o) {
this.creatText(r, "skill" + l, o[l]);
a[l] > 0 && (r.getChildByName("skill" + l).color = new cc.Color(0, 255, 0));
}
(function() {
var t = [ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];
if (e.day < 8) for (var c in t) r.getChildByName("skill" + t[c]).destroy();
})();
t("scr_effect");
var u = cc.find("Canvas/inf"), p = cc.find("Canvas/UI1"), f = cc.find("Canvas/UI2"), h = cc.find("Canvas/UI3");
(function() {
p.getChildByName("backButton").on("touchstart", function() {
c.save();
cc.director.loadScene("main");
}, this);
p.getChildByName("eatButton").on("touchstart", function() {
g(p);
y(f);
}, this);
p.getChildByName("helpButton").on("touchstart", function() {
cc.director.loadScene("roleHelp");
}, this);
p.getChildByName("orderButton").on("touchstart", function() {
g(p);
y(h);
}, this);
f.getChildByName("back").on("touchstart", function() {
g(f);
y(p);
}, this);
f.getChildByName("choice1").on("touchstart", function() {
(function() {
if (e.itemNum[3] >= 1) {
var t = v();
e.itemNum[3] -= 1;
e.att[2][0] += t;
m();
d();
c.playText("Canvas/notify", "馒头体重增加0." + t + "kg！", 80);
} else c.playText("Canvas/notify", "素材不足", 80);
})();
}, this);
f.getChildByName("choice2").on("touchstart", function() {
(function() {
if (e.itemNum[18] >= 1) {
var t = v();
e.itemNum[18] -= 1;
e.att[2][0] += t;
m();
d();
c.playText("Canvas/notify", "馒头体重增加0." + t + "kg！", 80);
} else c.playText("Canvas/notify", "素材不足", 80);
})();
}, this);
f.getChildByName("choice3").on("touchstart", function() {
(function() {
if (e.itemNum[10] >= 1) {
var t = v();
e.itemNum[10] -= 1;
e.att[2][0] += t;
m();
d();
c.playText("Canvas/notify", "馒头体重增加0." + t + "kg！", 80);
} else c.playText("Canvas/notify", "素材不足", 80);
})();
}, this);
f.getChildByName("choice4").on("touchstart", function() {
(function() {
if (e.itemNum[9] >= 1) {
var t = 2 * v();
e.itemNum[9] -= 1;
e.att[2][0] += t;
m();
d();
c.playText("Canvas/notify", "馒头体重增加0." + t + "kg！", 80);
} else c.playText("Canvas/notify", "素材不足", 80);
})();
}, this);
f.getChildByName("choice5").on("touchstart", function() {
(function() {
if (e.att[2][0] < 50) c.playText("Canvas/notify", "此功能需体重15kg解锁！召唤：消耗10点精力，随机在一个地图中召唤出稀有怪，每天最多使用一次", 80); else if (1 == e.publicVar[24]) c.playText("Canvas/notify", "今天已召唤过啦！", 80); else if (e.energy >= 10) {
var t = Math.min(e.publicVar[25] + 30, 100), n = 100 * Math.random();
e.publicVar[25] += 1;
e.energy -= 10;
e.publicVar[24] = 1;
if (n < t) {
var a = 100 * Math.random();
if (a < 25) {
e.rareEnemyId[0] = c.getFigthId([ [ 0, 0 ], [ 50, 901 ], [ 100, 100001 ] ]);
c.playText("Canvas/notify", "一只上当的稀有怪出现在「山谷」！", 80);
} else if (a < 50) {
e.rareEnemyId[1] = c.getFigthId([ [ 0, 0 ], [ 100, 902 ] ]);
c.playText("Canvas/notify", "一只上当的稀有怪出现在「密林」！", 80);
} else if (a < 75) {
e.rareEnemyId[2] = c.getFigthId([ [ 0, 0 ], [ 100, 902 ] ]);
c.playText("Canvas/notify", "一只上当的稀有怪出现在「沼泽」！", 80);
} else {
e.rareEnemyId[3] = c.getFigthId([ [ 0, 0 ], [ 100, 902 ] ]);
c.playText("Canvas/notify", "一只上当的稀有怪出现在「森林」！", 80);
}
} else c.playText("Canvas/notify", "“嗷嗷嗷~”，「召唤」失败...", 80);
m();
} else c.playText("Canvas/notify", "精力不足", 80);
})();
}, this);
f.getChildByName("choice6").on("touchstart", function() {
(function() {
if (e.att[2][0] < 120) c.playText("Canvas/notify", "此功能需体重20kg解锁！外出：宠物外出，寻找稀有素材，归期不定（外出时间越长奖励越好！）；宠物外出期间，将失去宠物的加成效果", 80); else {
e.ifFollow[1] = 0;
e.publicVar[26] += 1;
}
})();
}, this);
})();
(function() {
p.active = !0;
f.active = !0;
h.active = !0;
p.scale = 1;
f.scale = 0;
h.scale = 0;
d();
m();
})();
function m() {
u.getChildByName("str").getComponent("cc.Label").string = "体重 " + (10 + e.att[2][0] / 10).toFixed(1) + "kg";
u.getChildByName("con").getComponent("cc.Label").string = "健康 " + e.att[2][1];
u.getChildByName("per").getComponent("cc.Label").string = "饥饿 " + e.att[2][2];
f.getChildByName("energy").getComponent("cc.Label").string = "精力 " + e.energy;
}
function d() {
f.getChildByName("choice1").getChildByName("text").getComponent("cc.Label").string = "体重+0.2（需生肉" + e.itemNum[28] + "/1）";
f.getChildByName("choice2").getChildByName("text").getComponent("cc.Label").string = "体重+0.2（需鱼" + e.itemNum[28] + "/1）";
f.getChildByName("choice3").getChildByName("text").getComponent("cc.Label").string = "体重+0.2（需蛋" + e.itemNum[28] + "/1）";
f.getChildByName("choice4").getChildByName("text").getComponent("cc.Label").string = "体重+0.4（需奶 " + e.itemNum[28] + "/1）";
f.getChildByName("choice5").getChildByName("text").getComponent("cc.Label").string = "召唤（" + Math.min(e.publicVar[25] + 30, 100) + "%成功率）";
f.getChildByName("choice6").getChildByName("text").getComponent("cc.Label").string = "外出（随机奖励）";
}
function v() {
if (e.charaLv[1][8] > 0) {
return 100 * Math.random() < 40 ? 4 : 2;
}
return 2;
}
function g(t) {
t.runAction(cc.scaleTo(.3, 0));
}
function y(t) {
cc.find("Canvas/notify").getComponent("cc.Label").string = "";
t.runAction(cc.scaleTo(.3, 1));
}
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_effect: "scr_effect",
scr_public: "scr_public"
} ],
scr_plot: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "22594SzhLdDFIhFu3G4ZURs", "scr_plot");
cc.Class({
extends: cc.Component,
properties: {},
creatText: function(t, e, c) {
var n = new cc.Node(e);
n.addComponent(cc.Label);
n.parent = t;
n.setPosition(0, 0);
n.opacity = 0;
n.runAction(cc.fadeIn(2));
n.color = new cc.Color(255, 255, 255);
n.getComponent(cc.Label).overflow = 3;
n.getComponent(cc.Label).horizontalAlign = 1;
n.setContentSize(600, 300);
n.getComponent(cc.Label).string = c;
n.getComponent(cc.Label).lineHeight = 60;
n.getComponent(cc.Label).fontSize = 40;
},
plotData: function() {
var e = t("scr_data"), c = t("scr_public");
t("scr_effect");
return {
0: {
text: [ "你好，我是本游戏作者，", "你可能现在一脸懵逼。", "我现在要给你两个选项，", "因为我想知道你接下来会怎么处理。", "回到认识晓月之前", "不管她，把我复活，继续赶路" ],
BGM: "",
choice1: function() {},
choice2: function() {
e.enemyId = 108;
c.save();
cc.director.loadScene("main");
}
},
1: {
text: [ "安静的午后，", "一阵剧烈的尖叫声划破天际，", "我慌忙赶到，", "一个光膀子大汉正将晓月按在身下！", "", "我要杀了他！" ],
BGM: "",
choice1: function() {},
choice2: function() {
if (0 == t("scr_adoptData").gameData[4]) {
e.enemyId = 108;
e.role.hp = c.role.maxHp();
c.save();
cc.director.loadScene("main");
} else cc.director.loadScene("main", function() {
t("scr_data").itemNum2[10] += 1;
t("scr_public").save();
t("scr_effect").playText("Canvas/notify", "“美女没摔到吧~”，大汉担心的说道，“这荒郊野外的，走路也不当心点！摔伤倒是小事，你这么漂亮，要是碰到流氓可咋整？这样，我送你一把小刀，留着防身用哈~”。获得【黑刀】*1", 60);
});
}
},
2: {
text: [ "你好，欢迎来到小黑屋，", "虽然你可能现在是一脸懵逼", "但是事实就是这么不讲道理——", "如果你无法通过挑战，你就不能拥有晓月", "我要回到认识晓月的前一天，我再试试", "我选择放弃晓月" ],
BGM: "",
choice1: function() {
var e = t("scr_data");
t("scr_adoptData").gameData[0] += 1;
e = JSON.parse(cc.sys.localStorage.getItem("dataCopy"));
cc.sys.localStorage.setItem("userData", JSON.stringify(e));
c.save2();
cc.director.loadScene("main");
},
choice2: function() {
e.health += 999;
e.distance += 1;
e.enemyId = 0;
e.role.hp = c.role.maxHp();
c.save();
cc.director.loadScene("main", function() {
t("scr_data").itemNum[12] += 1;
t("scr_public").save();
t("scr_effect").playText("Canvas/notify", "晓月在你背后，流下了一滴眼泪，获得【眼泪】*1", 60);
});
}
},
3: {
text: [ "“如果你不能给她呵护和未来，", "那么，请放手。”", "“也许，从一开始就选择不认识，才是对她真正的保护”", "回到认识晓月之前", "好吧，我放弃" ],
BGM: "",
choice1: function() {
var e = t("scr_data");
t("scr_adoptData").gameData[0] += 1;
e = JSON.parse(cc.sys.localStorage.getItem("dataCopy"));
cc.sys.localStorage.setItem("userData", JSON.stringify(e));
c.save2();
cc.director.loadScene("main", function() {
t("scr_data").itemNum[12] += 1;
t("scr_public").save();
t("scr_effect").playText("Canvas/notify", "晓月在你背后，流下了一滴眼泪，获得【眼泪】*1", 60);
});
},
choice2: function() {
e.health += 999;
e.distance += 1;
e.enemyId = 0;
e.role.hp = c.role.maxHp();
c.save();
cc.director.loadScene("main", function() {
t("scr_data").itemNum[12] += 1;
t("scr_public").save();
t("scr_effect").playText("Canvas/notify", "晓月在你背后，流下了一滴眼泪，获得【眼泪】*1", 60);
});
}
},
4: {
text: [ "“不是你喜欢，", "所以就应该得到。”", "“你太过偏执，才容易遍体鳞伤”", "作者，我要杀了你", "把我复活" ],
BGM: "",
choice1: function() {
e.enemyId = 998;
e.health += 999;
e.role.hp = c.role.maxHp();
c.save();
cc.director.loadScene("main");
},
choice2: function() {
e.health += 999;
e.distance += 1;
e.enemyId = 0;
e.role.hp = c.role.maxHp();
c.save();
cc.director.loadScene("main", function() {
t("scr_data").itemNum[12] += 1;
t("scr_public").save();
t("scr_effect").playText("Canvas/notify", "晓月在你背后，流下了一滴眼泪，获得【眼泪】*1", 60);
});
}
},
5: {
text: [ "虽然很不舍，", "但是晓月也需要回家报告平安了...", "摸摸头，道别", "拍拍肩膀，道别" ],
BGM: "",
choice1: function() {
e.distance += 1;
e.ifFollow[0] = 0;
c.save();
cc.director.loadScene("main", function() {
t("scr_effect").playText("Canvas/notify", "晓月依依不舍的离开了", 60);
});
},
choice2: function() {
e.distance += 1;
e.choice[5] += 10;
e.ifFollow[0] = 0;
c.save();
cc.director.loadScene("main", function() {
t("scr_effect").playText("Canvas/notify", "“我还会来找你玩的！( • ̀ω•́ )✧”", 60);
});
}
},
98: {
text: [ "陈碧瑶好感已满足要求，是否邀请碧瑶成为伙伴？（如果碧瑶成为伙伴，其它伙伴将会被顶掉，且无法再邀请其它伙伴；如果你拒绝邀请，以后则不会再有机会邀请碧瑶，请考虑清楚！）", "是", "算了" ],
BGM: "",
choice1: function() {
e.ifFollow[0] = 0;
e.ifFollow[1] = 1;
e.publicVar[8] = 1;
c.save();
cc.director.loadScene("home", function() {
t("scr_effect").playText("Canvas/notify", "陈碧瑶成为伙伴！请好好珍惜吧~", 60);
});
},
choice2: function() {
e.publicVar[8] = 1;
cc.director.loadScene("home");
}
},
99: {
text: [ "是否邀请晓月成为伙伴？（如果晓月成为伙伴，其它伙伴将会被顶掉，且无法再邀请其它伙伴，请考虑清楚）", "是", "算了" ],
BGM: "",
choice1: function() {
e.ifFollow[0] = 1;
e.ifFollow[1] = 0;
c.save();
cc.director.loadScene("home", function() {
t("scr_effect").playText("Canvas/notify", "晓月成为伙伴！请好好珍惜吧~", 60);
});
},
choice2: function() {
cc.director.loadScene("home");
}
},
1001: {
text: [ "五十年后，在城中村、一间充满恶臭的破旧出租屋内，几名带着消毒面具的消防人员正在清理地上的垃圾。", "房间很小，阴暗而潮湿，墙角堆满了酒瓶和没来得及处理的烟头。", "一位中年消防员拍了拍一个年轻消防员的肩膀责备道，“别看啦，该干活了”。“知道啦。没想到这位奇怪的老人还有这么一段往事啊~”，说完，年轻人把手中发黄的日记本\n丢进了焚烧箱...", "", "...全剧终..." ],
BGM: "",
choice1: function() {},
choice2: function() {
cc.director.loadScene("end");
}
}
};
},
startPlot: function() {
var e = t("scr_data"), c = (t("scr_public"), this.plotId || e.plotId), n = this.plotData()[c], a = n.text, i = a.pop(), o = a.pop(), r = a.length, s = 0, l = cc.find("Canvas/EventText");
(function() {
var t = cc.find("Canvas/Choice");
t.stopAllActions();
t.opacity = 0;
cc.find("Canvas/EventText").removeAllChildren();
t.getChildByName("Choice1").targetOff(this);
t.getChildByName("Choice2").targetOff(this);
})();
this.schedule(function() {
this.creatText(l, "plot" + s, a[s]);
s++;
}, 2.5, r - 1);
this.scheduleOnce(function() {
var t = n.choice1, e = n.choice2, c = cc.find("Canvas/Choice/Choice1"), a = cc.find("Canvas/Choice/Choice2");
c.getChildByName("choiceText").getComponent("cc.Label").string = o;
a.getChildByName("choiceText").getComponent("cc.Label").string = i;
if ("" == o) {
c.active = !1;
cc.find("Canvas/Choice/label").active = !1;
}
cc.find("Canvas/Choice").runAction(cc.fadeIn(2));
c.on("touchstart", t, this);
a.on("touchstart", e, this);
}, 2.5 * (r + 1));
},
onLoad: function() {
this.startPlot();
}
});
cc._RF.pop();
}, {
scr_adoptData: "scr_adoptData",
scr_data: "scr_data",
scr_effect: "scr_effect",
scr_public: "scr_public"
} ],
scr_pond: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "d868dGgjvlOqZ15MTspeH6i", "scr_pond");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
t("scr_data"), t("scr_public"), cc.find("Canvas/text"), cc.find("Canvas/button");
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_public: "scr_public"
} ],
scr_public: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "4bdd0LrXWhLypzYw/KwkeQ9", "scr_public");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
t("scr_data");
var c = {
itemName: [ "食物", "神秘结晶", "散酒", "废品", "兽骨", "血晶石", "黏液", "伤药", "兽夹", "蜂窝", "铁", "松木", "碎布", "黑木", "香樟", "石头", "毛皮", "蜂蜜", "小麦", "易拉罐", "槟榔", "红木", "生肉", "巨兽刺骨", "抹油鞋", "果子", "蓝晶石", "草药", "人参", "当归", "茯苓", "石斛", "肥料", "青菜", "萝卜", "虫肉", "脏水", "晓月碎片", "晓月线索", "黑曜石", "火狐皮", "铜", "金", "钻石", "煤", "毒牙", "牙齿", "兽皮", "白色粉末", "亚麻", "树皮" ],
itemName2: [ "木匠腰带", "猎弓", "皮衣", "幸运护符", "穿刺匕首", "皮甲", "晓月手链", "大喷菇", "爱心护符", "晓月脚链", "血刃", "刺骨盾", "酒", "晓月项链", "蜂蜜酒", "熟肉", "皮夹克", "红夹克", "麻布衣", "木棍", "帐篷", "陷阱", "匕首", "万能药", "板砖", "小裤裤", "女装", "招财猫", "晓月行踪", "碧瑶手环", "碧瑶顶帽" ],
ifNotify: !1,
init: function() {
var e = cc.find("Canvas/Text"), c = t("scr_data");
e.getChildByName("txt_energy").getComponent("cc.Label").string = c.energy + "/" + this.maxEnergy();
e.getChildByName("txt_money").getComponent("cc.Label").string = c.money;
e.getChildByName("txt_health").getComponent("cc.Label").string = c.health;
e.getChildByName("txt_hp").getComponent("cc.Label").string = c.role.hp + "(" + parseInt(100 * c.role.hp / this.role.maxHp()) + "%)";
this.mainUITextColor();
},
mainUITextColor: function() {
var e = t("scr_data"), c = cc.find("Canvas/Text"), n = "";
e.publicVar6[14] > 0 && (n += "「祝福」\n");
e.publicVar3[24] > 0 && (n = n + "「酒鬼(" + e.publicVar3[24] + ")」\n");
e.publicVar4[0] > 0 && (n = n + "「钱瘾(" + e.publicVar4[0] + ")」\n");
c.getChildByName("txt_state").getComponent("cc.Label").string = n;
},
save: function() {
var e = t("scr_data");
cc.sys.localStorage.setItem("userData", JSON.stringify(e));
},
save2: function() {
var e = t("scr_adoptData");
cc.sys.localStorage.setItem("adoptData", JSON.stringify(e));
},
creatText: function(t, e, c, n, a, i) {
var o = new cc.Node(e);
o.addComponent(cc.Label);
o.parent = t;
o.setPosition(c, n);
o.setContentSize(600, 300);
o.setAnchorPoint(.5, .5);
o.getComponent(cc.Label).overflow = 3;
o.getComponent(cc.Label).string = a;
o.getComponent(cc.Label).lineHeight = 60;
o.getComponent(cc.Label).fontSize = 40;
},
role: {
maxHp: function() {
var e = t("scr_data"), c = e.role.maxHp + 20 * e.publicVar2[23];
return c;
},
att: function() {
var e = t("scr_data"), c = e.role.att + 10 * e.itemNum2[1] + 20 * e.itemNum2[4] + 30 * e.itemNum2[10] + e.publicVar[4];
c = Math.round(c * (1 + e.publicVar3[22] / 1e3));
return c;
},
def: function() {
var e = t("scr_data"), c = e.role.def + 5 * e.itemNum2[2] + 10 * e.itemNum2[5] + 15 * e.itemNum2[11] + e.publicVar[28];
return c;
}
},
ifMaxHp: function() {
var e = t("scr_data"), c = this.role.maxHp();
e.role.hp > c && (e.role.hp = c);
},
creatNode: function() {
var t = this;
cc.loader.loadRes("button1", cc.SpriteFrame, function(e, c) {
var n = new cc.Node("NewSprite");
n.addComponent(cc.Sprite).spriteFrame = c;
n.parent = t.node;
});
},
maxEnergy: function() {
var e = t("scr_data");
return e.maxEnergy + 10 * e.publicVar[21];
},
herbRe: function() {
var e = t("scr_data"), c = 30 + 20 * e.charaLv[0][2], n = 100 * Math.random(), a = 5 * e.itemNum2[8], i = Math.max(e.itemNum2[8] / 10, 1);
c = parseInt(c * i);
return n < a ? [ c = parseInt(1.5 * c), "【暴击】" ] : [ c, "" ];
},
addictionRate: function() {
var e = t("scr_data");
return Math.min(e.publicVar4[1] / 2, 30);
},
inspectBag: function() {
var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "isEmpty", c = t("scr_data").itemNum3;
c.length;
return "isEmpty" === e ? c.every(function(t) {
return 0 === t;
}) : c.every(function(t) {
return t > 0;
});
},
getCraftName: function(t) {
var e = "", c = 0;
if (t < 100) {
e = "劣质木器";
c = t;
} else if (t < 200) {
e = "普通木器";
c = t - 100;
} else if (t < 300) {
e = "优质木器";
c = t - 200;
} else if (t < 400) {
e = "极品木器";
c = t - 300;
}
return e + ".lv" + c;
},
getCraft: function(e) {
var c = "";
if (this.inspectBag("isFull")) c = "木器背包已满，无法获得木器。"; else {
for (var n = t("scr_data"), a = n.itemNum3, i = a.length, o = this.getCraftName(e), r = 0; r < i; r++) if (0 === a[r]) {
n.itemNum3[r] = e;
break;
}
c = "获得「" + o + "」。";
}
return c;
},
playText: function(t, e, c) {
var n = 0;
cc.game.startPlay && window.clearTimeout(cc.game.startPlay);
(function a() {
if (null != cc.find(t)) if (n <= e.length) {
var i = e.slice(0, n++);
cc.find(t).getComponent("cc.Label").string = i;
cc.game.startPlay = window.setTimeout(a, c);
} else "undefined" != typeof cc.game.startPlay && window.clearTimeout(cc.game.startPlay);
})();
},
playText2: function(t, e) {
var c = 0, n = t.length, a = cc.find("Canvas/notify"), i = a.getComponent("cc.Label");
n > 125 && (a.anchorY = .5);
e = e || 80;
cc.game.startPlay && window.clearTimeout(cc.game.startPlay);
(function a() {
if (c <= n) {
var o = t.slice(0, c++);
i.string = o;
cc.game.startPlay = window.setTimeout(a, e);
} else "undefined" != typeof cc.game.startPlay && window.clearTimeout(cc.game.startPlay);
})();
},
backMain: function() {
cc.game.startPlay && window.clearTimeout(cc.game.startPlay);
cc.director.loadScene("main", function() {
var e = [ 0, "valley", "woods", "wetland", "forest", "city", "cave", "school" ][t("scr_data").startUI || 0];
if ("undefined" != typeof e && 0 != e) {
var c = "Canvas/UI/map/" + e;
cc.find("Canvas/Button").scale = 0;
cc.find(c).active = !0;
cc.find(c).scale = 1;
}
});
}
};
e.exports = c;
}
});
cc._RF.pop();
}, {
scr_adoptData: "scr_adoptData",
scr_data: "scr_data"
} ],
scr_quitGame: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "b8981TVaLZEQZriw0Ikoosd", "scr_quitGame");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
cc.systemEvent.on(cc.EventListener.KEYBOARD.KEY_DOWN, function(t) {
t.keyCode === cc.KEY.back && cc.director.end();
}, this.node);
}
});
cc._RF.pop();
}, {} ],
scr_readConfession: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "edbeey5ue9CDZU2M2ziBjld", "scr_readConfession");
cc.Class({
extends: cc.Component,
properties: {},
read: function() {
var e = [ "1111111", "我是个失败的人", "aaa", "bbb", "ccc" ], c = t("scr_effect"), n = t("scr_data").achieve, a = Math.random(), i = e.length, o = parseInt(n / 100);
o > i - 5 && (o = i - 5);
var r = Math.round(4 * Math.random() + o);
a > .5 ? c.playText("Canvas/Text/txt_confession", "我该做点什么呢？", 120) : c.playText("Canvas/Text/txt_confession", e[r], 120);
},
onLoad: function() {
this.schedule(this.read, 30);
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_effect: "scr_effect"
} ],
scr_rest: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "6fbc4dkoxJCWoP/GvoxW/9l", "scr_rest");
cc.Class({
extends: cc.Component,
properties: {},
creatText: function(t, e) {
var c = new cc.Node(t);
c.addComponent(cc.Label);
c.parent = cc.find("Canvas/SkillShow");
c.setPosition(0, 0);
c.color = new cc.Color(255, 255, 255);
c.getComponent(cc.Label).overflow = 3;
c.getComponent(cc.Label).horizontalAlign = 0;
c.setContentSize(600, 300);
c.getComponent(cc.Label).string = e;
c.getComponent(cc.Label).lineHeight = 50;
c.getComponent(cc.Label).fontSize = 36;
},
restMain: function() {
var e = t("scr_data"), c = t("scr_public"), n = (e.skillLv, this);
(function() {
if (e.day < 29) {
var t = parseInt(2 * Math.random() + 1);
e.publicVar4[9] = 0;
e.publicVar[8] = 0;
e.publicVar7[6] > 3 && (e.publicVar7[6] -= 1);
(!1 === e.publicVar6[7] || e.publicVar4[10] >= 7) && (e.publicVar4[10] = 0);
e.publicVar6[7] = !1;
e.publicVar4[11] += t;
e.day % 3 == 0 && (e.publicVar4[12] += 1);
if (e.day % 4 == 0) {
e.publicVar4[13] += 1;
e.publicVar4[14] += 1;
}
11 === e.publicVar7[3] && (e.publicVar7[3] = 10);
}
e.publicVar[4] = 0;
e.publicVar[26] = 0;
e.publicVar[27] = 0;
e.publicVar[28] = 0;
e.publicVar[29] = 0;
e.publicVar[30] = 0;
e.publicVar2[1] = 0;
e.publicVar3[17] = 0;
e.publicVar3[15] = parseInt(.5 * e.publicVar3[15]);
e.publicVar3[13] += 120;
e.publicVar3[22] = 0;
e.publicVar3[23] = 0;
e.publicVar2[25] = 0;
})();
(function() {
e.day += 1;
e.plotId += 1;
cc.find("Canvas/Day").getComponent("cc.Label").string = "第" + e.day + "天";
})();
(function() {
cc.find("Canvas/energy/text");
var t = c.maxEnergy();
e.energy += t;
e.energy > t + 10 && (e.energy = t + 10);
cc.find("Canvas/AttrShow/energy/text").getComponent("cc.Label").string = "精力 +" + (t + 0) + "（" + e.energy + "/" + t + "）";
})();
(function() {
var t = c.role.maxHp();
e.role.hp = t;
cc.find("Canvas/AttrShow/hp/text").getComponent("cc.Label").string = "生命 +" + t + "（" + e.role.hp + "/" + c.role.maxHp() + "）";
})();
(function() {
for (var t = e.day, c = [ 3, 5, 9, 12, 15, 17, 19, 21, 23 ], n = c.length, i = 0; i < n; i++) if (e.day === t) {
e.enemyId = a();
break;
}
})();
(function() {
if (e.day < 12333654129) {
var t = 100 * Math.random();
e.publicVar3[21] = 0;
if (t <= 100 && e.day > 3) {
var c = function(t) {
for (var e = 100 * Math.random(), c = t.length, n = 0; n <= c - 2; n++) if (e > t[n][0] && e <= t[n + 1][0]) return t[n + 1][1];
}([ [ 0, 0 ], [ 50, 901 ], [ 100, 902 ] ]);
e.publicVar3[21] = c;
}
}
})();
(function() {
var t = 100 * Math.random(), c = 100 * Math.random(), n = 100 * Math.random(), a = 100 * Math.random(), i = 40;
e.publicVar6[16] = !1;
e.publicVar4[8] = 0;
e.publicVar6[19] = !1;
e.publicVar6[20] = !1;
t < 30 && (e.publicVar6[16] = !0);
e.day < 13 && (i = 60);
c < i && (e.day < 13 ? e.publicVar4[8] = 7 : e.publicVar4[8] = parseInt(6 * Math.random() + 1));
e.day >= 20 && n < 30 && (e.publicVar6[19] = !0);
e.day >= 20 && 0 === e.publicVar4[7] && a < 10 && (e.publicVar6[20] = !0);
27 === e.day && (e.publicVar6[20] = !0);
})();
(function() {
(function() {
if (e.publicVar3[24] > 0) {
var t = (10 + e.charaLv[0][3]) * e.publicVar3[24];
e.energy -= t;
n.creatText("drink", "【酒鬼(" + e.publicVar3[24] + ")】精力-" + t + "！");
e.publicVar3[24] = 0;
}
})();
(function() {
if (e.ifFollow[0] > 0) {
var t = 50, c = 20 + 10 * e.charaLv[1][1], a = "", i = e.publicVar3[27];
if (i > 0) {
var o = 1 - .2 * i;
t = Math.ceil(50 * o);
a = "(生病中)";
}
e.att[1][0] += t;
e.publicVar[24] += 4;
e.publicVar[25] += c;
e.att[1][0] > 200 && (e.att[1][0] = 200);
n.creatText("wife", "【晓月" + a + "】精力" + e.att[1][0] + "(+" + t + ")，可采资源" + e.publicVar[24] + "(+4)，祈祷值" + e.publicVar[25] + "(+" + c + ")");
e.publicVar3[27] > 0 && (cc.find("Canvas/SkillShow").getChildByName("wife").color = new cc.color(255, 0, 255, 255));
}
})();
(function() {
if (e.itemNum[8] > 0) {
var t = 100 * Math.random();
if (t < 50) {
var c = 2 * e.itemNum[8];
e.itemNum[0] += c;
n.creatText("trap", "【兽夹】收获「食物」*" + c);
}
}
})();
(function() {
var t = 0, c = 10 * e.itemNum[9];
for (;c > 0 && t < 3; ) {
i(c);
c -= 100;
t += 1;
}
})();
(function() {
if (e.itemNum2[13] > 0) {
var t = 100 * Math.random();
if (t < 40) {
var a = parseInt(.1 * c.maxEnergy() * e.itemNum2[13]);
e.energy += a;
n.creatText("energyNecklace", "【晓月项链】精力额外恢复" + a + "！");
}
}
})();
(function() {
if (e.day > 1) {
var t = "", c = 6 + 2 * e.publicVar3[5], a = 40 + 10 * e.itemNum2[0];
e.publicVar2[20] += c;
e.publicVar[20] += a;
t = "【主角】训练收益" + e.publicVar2[20] + "(+" + c + ")";
e.day > 5 && (t = t + "，专注" + e.publicVar[20] + "(+" + a + ")");
n.creatText("role", t);
}
})();
(function() {
if (e.day > 7 && e.day <= 28 && 1 != e.publicVar6[12]) {
var t = 100 * Math.random(), c = 10 * e.publicVar3[29];
if (t < c) {
e.publicVar6[12] = !0;
n.creatText("getRide", "【骑行】天啦噜！你的十八手自行车又活过来啦！（去县城无消耗）");
}
}
})();
(function() {
var t = 100 * Math.random(), a = c.addictionRate();
if (t < a) {
var i = parseInt(.05 * c.maxEnergy() * e.publicVar4[0]);
e.energy -= i;
n.creatText("getRide", "【辗转难眠】由于「钱瘾」不能满足，你辗转难眠，精力-" + i + "！");
}
if (t < a) {
var o = Math.ceil(Math.random() * e.publicVar4[1] / 30);
e.publicVar4[0] += o;
n.creatText("getRide", "【捡钱上瘾】你的麒麟臂蠢蠢欲动！必须要找人「捡钱」，才能安静！（获得" + o + "层「钱瘾」）");
}
})();
(function() {
var t = 100 * Math.random(), c = 3 * e.itemNum2[13];
if (t < c) {
e.publicVar6[14] = 1;
e.publicVar[29] += 50;
n.creatText("lucky", "【祈祷】怪物两次掉落+50%！持续一篇日记");
} else e.publicVar6[14] = 0;
})();
(function() {
if (100 != e.publicVar4[2] && e.day > 7) {
var t = 100 * Math.random(), c = Math.min(20 * e.publicVar4[3] - 20, 60);
e.publicVar4[3] += 1;
if (t < c && e.publicVar4[2] < 80) {
e.publicVar4[2] += 10;
e.publicVar4[2] > 80 && (e.publicVar4[2] = 80);
n.creatText("discount", "【促销】由于皮甲滞销，老板决定\n——皮甲降价10%！（现价" + parseInt(96 * (1 - e.publicVar4[2] / 100)) + "！）");
}
}
})();
})();
c.save();
function a() {
var t = [ 1001, 1002, 1003, 1004, 1005, 1006, 1007, 108 ][e.publicVar[3]];
"undefined" == typeof t && (t = 0);
return t;
}
function i(t) {
if (100 * Math.random() < t) {
var c = parseInt(4 * Math.random() + 1);
e.itemNum[17] += c;
n.creatText("trap", "【蜂窝】收获「蜂蜜」*" + c);
}
}
},
onLoad: function() {
var e = 0, c = t("scr_data"), n = 1, a = cc.find("Canvas/Day");
(function() {
cc.find("Canvas/Day").opacity = 0;
cc.find("Canvas/AttrShow").opacity = 0;
cc.find("Canvas/SkillShow").opacity = 0;
})();
c.health <= 0 ? cc.director.loadScene("over") : this.restMain();
(function() {
a.getComponent("cc.Label").string = "日记（" + c.day + "）";
a.runAction(cc.fadeIn(1));
})();
this.schedule(function() {
var t = [ "Canvas/AttrShow", "Canvas/SkillShow", "Canvas/Determine" ];
if ("Canvas/Determine" == t[e]) {
var c = cc.find("Canvas/Determine");
c.active = !0;
c.on("touchstart", function() {
cc.director.loadScene("event");
}, this);
}
cc.find(t[e]).runAction(cc.fadeIn(n));
e++;
}, n, 2);
t("scr_public").save();
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_public: "scr_public"
} ],
scr_roleAtt: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "1972bVnEXZCIooU03r218Id", "scr_roleAtt");
cc.Class({
extends: cc.Component,
properties: {},
creatText: function(t, e, c) {
var n = new cc.Node(e);
n.addComponent(cc.Label);
n.parent = t;
n.setPosition(0, 0);
n.color = new cc.Color(115, 115, 115);
n.getComponent(cc.Label).overflow = 3;
n.setContentSize(630, 300);
n.getComponent(cc.Label).string = c;
n.getComponent(cc.Label).lineHeight = 40;
n.getComponent(cc.Label).fontSize = 32;
},
onLoad: function() {
var e = t("scr_data"), c = t("scr_public"), n = this, a = (t("scr_effect"), cc.find("Canvas/UI1")), i = cc.find("Canvas/UI2"), o = cc.find("Canvas/UI3"), r = (cc.find("Canvas/UI4"), 
cc.find("Canvas/UI1/Scroll/view/content"));
(function() {
a.getChildByName("backButton").on("touchstart", function() {
c.save();
cc.director.loadScene("main");
}, this);
a.getChildByName("eatButton").on("touchstart", function() {
V(a);
I(i);
}, this);
a.getChildByName("weaveButton").on("touchstart", function() {
V(a);
I(o);
}, this);
i.getChildByName("back").on("touchstart", function() {
V(i);
I(a);
c.save();
}, this);
i.getChildByName("choice1").on("touchstart", _, this);
i.getChildByName("helpButton").on("touchstart", function() {
x(i);
}, this);
o.getChildByName("back").on("touchstart", function() {
V(o);
I(a);
c.save();
}, this);
o.getChildByName("choice1").on("touchstart", p, this);
o.getChildByName("choice2").on("touchstart", h, this);
o.getChildByName("helpButton").on("touchstart", function() {
x(o);
}, this);
})();
s();
(function() {
a.active = !0;
i.active = !0;
o.active = !0;
a.scale = 1;
i.scale = 0;
o.scale = 0;
l();
u();
e.day < 6 && (a.getChildByName("weaveButton").active = !1);
(function() {
var a = t("scr_data").charaLv[0], i = {
0: "【捡漏】等级：" + a[0] + "级（" + e.publicVar[0] + "/" + (5 + 5 * a[0]) + "）。效果：探索时，如果没发现道具，则" + 5 * a[0] + "%几率获得一次补偿奖励。提升方法：探索时，没发现道具，则增加1点进度。",
1: "【逃跑】等级：" + a[1] + "级（" + e.publicVar[1] + "/" + (5 + 5 * a[1]) + "）。效果：增加" + 5 * a[1] + "%逃跑率，且在逃跑成功后，" + 10 * a[1] + "%几率触发【秒跑】（返还10点精力）！提升方法：每次逃跑成功后增加1点进度，最高10级。",
2: "【制药】等级：" + a[2] + "级（" + e.publicVar[5] + "/" + (6 + 10 * a[2]) + "）。效果：伤药恢复量提高" + 20 * a[2] + "。提升方法：每制作一次伤药增加1点进度。",
3: "【酒鬼】等级：" + a[3] + "级（" + e.publicVar3[25] + "/" + (5 + 5 * a[3]) + "）。效果：每次饮酒，立即获得10点精力，且获得一层「酒鬼」（攻击提高" + (3 + .2 * a[3]).toFixed(1) + "%，暴击提高" + (3 + .2 * a[3]).toFixed(1) + "%，但休息时减少" + (10 + a[3]) + "点精力恢复，持续一篇日记，最多叠加5层）。提升方法：每次饮酒增加1点进度，本技能有负面作用，最高10级。",
4: "【木工】等级：" + a[4] + "级（" + e.publicVar[19] + "/" + (5 + 5 * a[4]) + "）。效果：做木器时，产出劣质品概率降低" + 5 * a[4] + "%，产出极品概率增加" + 3 * a[4] + "%。提升方法：每做一次木器增加1点进度，最高10级。",
5: "【急救】等级：" + a[5] + "级。效果：战斗中，如果生命值低于30%，则伤药回复量提高50%（一场战斗只触发一次）。习得方法：小胖传授。",
6: "【防御心得】说明：在战斗中，防御一次高额伤害（超过最大生命值40%的伤害，减伤前计算），并且战斗胜利后，永久提高防御技能1%的减伤效果（最多提高25%，当前提高" + a[6] + "%）。",
7: "【爆发】等级：" + a[7] + "级。效果：每场战斗的第一次攻击必定暴击。习得方法：未知。"
};
r.removeAllChildren();
var o = parseInt(e.day / 3);
[ 2, 0, 1, 4, 3, 5, 6, 7 ].forEach(function(t, e) {
if (e <= o) {
n.creatText(r, "skill" + t, i[t]);
a[t] > 0 && (r.getChildByName("skill" + t).color = new cc.Color(0, 255, 0));
}
});
if (a[8] > 0) {
n.creatText(r, "steal", "【捡钱】等级：" + a[8] + "级。效果：每次攻击人型敌人时，" + 5 * a[8] + "%几率获取金钱。你当前「捡钱」次数为" + e.publicVar4[1] + "次，触发「钱瘾」的概率为" + c.addictionRate().toFixed(1) + "%（最高30%）。");
r.getChildByName("steal").color = new cc.Color(0, 255, 0);
}
e.day < 2 && r.removeAllChildren();
})();
})();
function s() {
var t = cc.find("Canvas/inf");
t.getChildByName("day").getComponent("cc.Label").string = "日记 " + e.day;
t.getChildByName("per").getComponent("cc.Label").string = "健康 " + e.health;
t.getChildByName("int").getComponent("cc.Label").string = "精力 " + e.energy + "/" + c.maxEnergy();
t.getChildByName("att").getComponent("cc.Label").string = "攻击 " + c.role.att();
t.getChildByName("def").getComponent("cc.Label").string = "防御 " + c.role.def();
t.getChildByName("hp").getComponent("cc.Label").string = "生命 " + e.role.hp + "/" + c.role.maxHp();
}
function l() {
i.getChildByName("choice1").getChildByName("text").getComponent("cc.Label").string = "体质训练（获得" + e.publicVar2[20] + "点经验）";
i.getChildByName("lv").getComponent("cc.Label").string = "体质等级：" + e.publicVar2[23] + "级（" + e.publicVar2[24] + "/" + N() + "）";
i.getChildByName("food").getComponent("cc.Label").string = "剩余食物：" + e.itemNum[0];
}
function u() {
o.getChildByName("choice1").getChildByName("text").getComponent("cc.Label").string = "普通制作（" + g() + "%产出劣质，需香樟" + e.itemNum[14] + "/1）";
o.getChildByName("choice2").getChildByName("text").getComponent("cc.Label").string = "中级制作（" + y() + "%产出极品，需香樟" + e.itemNum[14] + "/3）";
o.getChildByName("attention").getComponent("cc.Label").string = "专注 " + e.publicVar[20];
}
function p() {
if (!0 === v()) c.playText2("手工品最多拥有20个哦~"); else if (!1 === e.publicVar6[0]) {
var t = f() + "（第一次无需消耗！）";
e.publicVar6[0] = !0;
c.playText2(t);
} else if (e.energy < 5) c.playText2("需5点精力！"); else if (e.itemNum[14] >= 1) {
var n = f() + b(5, 10);
e.itemNum[14] -= 1;
u();
s();
c.playText2(n);
} else c.playText2("香樟不足~");
}
function f() {
var t = 0, c = C(e.publicVar[20], 1), n = 100 * Math.random(), a = "";
e.publicVar[19] += 1;
if (n < g()) {
d(t + c);
a = "获得【劣质木器.lv" + c + "】";
} else {
d((t = 100) + c);
a = "获得【普通木器.lv" + c + "】";
}
return a;
}
function h() {
if (!0 === v()) c.playText2("手工品最多拥有20个哦~"); else if (!1 === e.publicVar6[1]) {
var t = m() + "（第一次无需消耗！）";
e.publicVar6[1] = !0;
c.playText2(t);
} else if (e.energy < 15) c.playText2("需15点精力！"); else if (e.itemNum[14] >= 3) {
var n = m() + b(15, 30);
e.itemNum[14] -= 3;
u();
s();
c.playText2(n);
} else c.playText2("香樟不足~");
}
function m() {
var t = C(e.publicVar[20], .5), c = 100 * Math.random(), n = "";
e.publicVar[19] += 1;
if (c < y()) {
d(300 + t);
n = "获得【极品木器.lv" + t + "】";
} else {
d(200 + t);
n = "获得【优质木器.lv" + t + "】";
}
return n;
}
function d(t) {
for (var n = e.itemNum3, a = n.length, i = 0; i < a; i++) if (0 === n[i]) {
e.itemNum3[i] = t;
c.save();
break;
}
}
function v() {
return e.itemNum3.every(function(t, e, c) {
return t > 0;
});
}
function g() {
return Math.max(40 - 4 * e.charaLv[0][4], 0);
}
function y() {
return 3 * e.charaLv[0][4];
}
function C(t, e) {
var c = Math.ceil(t * e / 15);
return c = Math.min(Math.max(c, 1), 99);
}
function b(t, c) {
var n = "", a = e.publicVar[20], i = Math.ceil(a * c / 100);
e.publicVar[20] -= i;
n = "，专注-" + i;
if (e.publicVar[20] < 1) {
e.publicVar[20] = 1;
n = "";
}
e.energy -= t;
return n = "，精力-" + t + n;
}
function _() {
if (e.itemNum[0] >= 3 || e.publicVar2[23] < 1) {
var t = "", n = e.publicVar2[20];
l();
if (e.publicVar2[23] < 1) t += "（新手福利，无消耗！）"; else {
e.itemNum[0] -= 3;
t += "，食物-3";
}
e.publicVar2[24] += n;
e.publicVar2[20] = Math.max(parseInt(.9 * e.publicVar2[20]), 1 + e.publicVar3[5]);
t = "获得" + n + "点训练经验" + (t += function() {
var t = e.publicVar2[24], c = N();
{
if (t >= c) {
e.publicVar2[23] += 1;
e.publicVar2[24] -= c;
e.role.hp += 20;
return "\n体质等级提升至" + e.publicVar2[23] + "级，最大生命值+20！";
}
return "";
}
}());
c.playText("Canvas/notify", t, 80);
s();
l();
} else c.playText2("食物不足~");
}
function N() {
return 20 + 15 * e.publicVar2[23];
}
function x(t) {
var e = t.getChildByName("helpText");
if (!1 === e.active) {
e.active = !0;
t.getChildByName("helpButton").getComponent("cc.Label").string = "<关闭帮助>";
} else {
e.active = !1;
t.getChildByName("helpButton").getComponent("cc.Label").string = "<帮助>";
}
cc.find("Canvas").getChildByName("notify").getComponent("cc.Label").string = "";
}
function V(t) {
t.runAction(cc.scaleTo(.3, 0));
}
function I(t) {
cc.find("Canvas/notify").getComponent("cc.Label").string = "";
t.runAction(cc.scaleTo(.3, 1));
}
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_effect: "scr_effect",
scr_public: "scr_public"
} ],
scr_roleSkillJugge: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "62272Y3RXlCI6D3q83hkl4k", "scr_roleSkillJugge");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var c = t("scr_data"), n = t("scr_public"), a = c.charaLv[0], i = {
0: function() {
var t = c.publicVar[0], e = 5 + 5 * a[0];
a[0] >= 10 && (c.publicVar[0] = 0);
if (t >= e) {
a[0] += 1;
c.publicVar[0] -= e;
}
},
1: function() {
var t = c.publicVar[1], e = 5 + 5 * a[1];
if (a[1] >= 10) c.publicVar[1] = 0; else if (t >= e) {
a[1] += 1;
c.publicVar[1] -= e;
}
},
2: function() {
var e = t("scr_data"), c = e.charaLv[0], n = e.publicVar[5], a = 6 + 10 * c[2];
if (n >= a) {
c[2] += 1;
e.publicVar[5] -= a;
return !0;
}
return !1;
},
3: function() {
var t = c.publicVar3[25], e = 5 + 5 * a[3];
if (t >= e) {
a[3] += 1;
c.publicVar3[25] -= e;
}
},
4: function() {
var t = c.publicVar[19], e = 5 + 5 * a[4];
if (a[4] >= 10) c.publicVar[19] = 0; else if (t >= e) {
a[4] += 1;
c.publicVar[19] -= e;
}
},
8: function() {
var t = c.publicVar2[0], e = 10 + 10 * a[8];
if (t >= e) {
a[8] += 1;
c.publicVar2[0] -= e;
}
}
};
for (var o in i) i[o]();
n.save();
e.exports = i;
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_public: "scr_public"
} ],
scr_sell: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "9b04b1Lmn5LZJ6PPHZkcW5C", "scr_sell");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {}
});
cc._RF.pop();
}, {} ],
scr_shop: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "cbeb9YQt6ZK7aYTe+uGmqU4", "scr_shop");
cc.Class({
extends: cc.Component,
properties: {
itemUI: {
default: null,
type: cc.Prefab
}
},
itemContent: function(e, c) {
var n = t("scr_data"), a = t("scr_public"), i = [ [ " 食物*6（拥有" + n.itemNum[0] + ")", "购买/出售：6元/3元", function(e) {
t("scr_data").money >= 6 && (cc.find("Canvas/Page/view/content/page_" + c + "/" + e + "/name").color = new cc.color(0, 255, 0));
}, function() {
var e = t("scr_data");
if (e.money >= 6) {
e.money -= 6;
e.itemNum[0] += 6;
a.save();
a.playText("Canvas/notify", "获得【食物】*6！", 100);
} else a.playText("Canvas/notify", "钱不够！", 100);
}, function() {
var e = t("scr_data");
if (e.itemNum[0] >= 6) {
e.money += 3;
e.itemNum[0] -= 6;
a.save();
a.playText("Canvas/notify", "失去【食物】*6，获得3元！", 100);
} else a.playText("Canvas/notify", "道具不足！", 100);
} ], [ " 皮甲（库存" + Math.ceil(1 - n.publicVar4[2] / 100) + "）", "购买：需" + parseInt(96 * (1 - n.publicVar4[2] / 100)) + "元（降价" + n.publicVar4[2] + "%）。", function(e) {
var n = t("scr_data");
n.money >= parseInt(96 * (1 - n.publicVar4[2] / 100)) && 100 != n.publicVar4[2] && (cc.find("Canvas/Page/view/content/page_" + c + "/" + e + "/name").color = new cc.color(0, 255, 0));
}, function() {
var e = t("scr_data");
if (100 === e.publicVar4[2]) a.playText("Canvas/notify", "老板：“再也不卖皮甲了！以后改卖毛皮了哈~”", 100); else {
var c = parseInt(96 * (1 - e.publicVar4[2] / 100));
if (e.money >= c) {
e.money -= c;
e.itemNum2[5] += 1;
e.publicVar4[2] = 100;
e.publicVar4[3] = 0;
a.save();
a.playText("Canvas/notify", "获得「皮甲」*1！", 100);
} else a.playText("Canvas/notify", "钱不够！", 100);
}
}, void 0 ], [ " 升级十八手自行车.LV" + n.publicVar3[29] + " ", "效果：每篇日记" + 10 * n.publicVar3[29] + "%几率获得一次「骑行」（去县城不消耗精力）。升级需" + (2 * n.publicVar3[29] + 2) + "元！", function(e) {
var n = t("scr_data"), a = cc.find("Canvas/Page/view/content/page_" + c + "/" + e);
n.money >= 2 * n.publicVar3[29] + 2 && (a.getChildByName("name").color = new cc.color(0, 255, 0));
a.getChildByName("button1").getChildByName("text").getComponent("cc.Label").string = "升 级";
}, function() {
var e = t("scr_data"), c = 2 * e.publicVar3[29] + 2;
if (e.publicVar3[29] >= 9) a.playText2("已达最大等级~"); else if (e.money >= c) {
e.money -= c;
e.publicVar3[29] += 1;
a.save();
a.playText("Canvas/notify", "十八手自行车升级！失去" + c + "元", 100);
} else a.playText("Canvas/notify", "钱不够！", 100);
}, void 0 ], [ " 草药*1（库存" + n.publicVar4[11] + ")", "购买/出售：2元/1元", function(e) {
var n = t("scr_data");
n.money >= 2 && n.publicVar4[11] > 0 && (cc.find("Canvas/Page/view/content/page_" + c + "/" + e + "/name").color = new cc.color(0, 255, 0));
}, function() {
var e = t("scr_data");
if (0 === e.publicVar4[11]) a.playText2("已经卖完啦，过段时间再来吧~"); else if (e.money >= 2) {
e.money -= 2;
e.itemNum[27] += 1;
e.publicVar4[11] -= 1;
a.save();
a.playText("Canvas/notify", "获得【草药】*1！", 100);
} else a.playText("Canvas/notify", "钱不够！", 100);
}, function() {
var e = t("scr_data");
if (e.itemNum[27] >= 1) {
e.money += 1;
e.itemNum[27] -= 1;
e.publicVar4[11] += 1;
a.save();
a.playText("Canvas/notify", "失去【草药】*1，获得1元！", 100);
} else a.playText("Canvas/notify", "道具不足！", 100);
} ], [ " 神秘结晶*1（库存" + n.publicVar4[12] + ")", "购买/出售：3元/2元", function(e) {
var n = t("scr_data");
n.money >= 3 && n.publicVar4[12] > 0 && (cc.find("Canvas/Page/view/content/page_" + c + "/" + e + "/name").color = new cc.color(0, 255, 0));
}, function() {
var e = t("scr_data");
if (0 === e.publicVar4[12]) a.playText2("已经卖完啦，过段时间再来吧~"); else if (e.money >= 3) {
e.money -= 3;
e.itemNum[1] += 1;
e.publicVar4[12] -= 1;
a.save();
a.playText("Canvas/notify", "获得【神秘结晶】*1！", 100);
} else a.playText("Canvas/notify", "钱不够！", 100);
}, function() {
var e = t("scr_data");
if (e.itemNum[1] >= 1) {
e.money += 2;
e.itemNum[1] -= 1;
e.publicVar4[12] += 1;
a.save();
a.playText("Canvas/notify", "失去【神秘晶体】*1，获得2元！", 100);
} else a.playText("Canvas/notify", "道具不足！", 100);
} ], [ " 肥料*4（拥有" + n.itemNum[32] + ")", "购买/出售：4元/2元", function(e) {
t("scr_data").money >= 5 && (cc.find("Canvas/Page/view/content/page_" + c + "/" + e + "/name").color = new cc.color(0, 255, 0));
}, function() {
var e = t("scr_data"), c = t("scr_public");
if (e.money >= 4) {
e.money -= 4;
e.itemNum[32] += 4;
c.save();
c.playText("Canvas/notify", "获得【肥料】*4！", 100);
} else c.playText("Canvas/notify", "钱不够！", 100);
}, function() {
var e = t("scr_data"), c = t("scr_public");
if (e.itemNum[32] >= 4) {
e.money += 2;
e.itemNum[32] -= 4;
c.save();
c.playText("Canvas/notify", "失去【肥料】*4，获得2元！", 100);
} else c.playText("Canvas/notify", "道具不足！", 100);
} ], [ " 出售全部废品（已拥有" + n.itemNum[3] + "）", "说明：每出售1个废品获得1元，且每次出售有概率从奖次中获取金钱（奖池：" + n.publicVar3[16] + "元）", function(e) {
t("scr_data").itemNum[3] >= 1 && (cc.find("Canvas/Page/view/content/page_" + c + "/" + e + "/name").color = new cc.color(0, 255, 0));
}, void 0, function() {
var e = t("scr_data"), c = e.itemNum[3];
if (e.itemNum[3] > 0) {
var n = "", i = 100 * Math.random();
e.itemNum[3] -= c;
if (i < 15) {
var o = .8 * Math.random() + .2, r = Math.ceil(e.publicVar3[16] * o);
e.publicVar3[16] -= r;
e.money += r;
n = "恭喜中奖！获得" + (r + 3) + "元！奖池奖金-" + r;
} else {
e.publicVar3[16] += 3;
n = "获得" + c + "元，奖池奖金+" + c;
}
e.money += c;
a.save();
a.playText("Canvas/notify", n, 100);
} else a.playText("Canvas/notify", "道具不足！", 100);
} ], [ " 人参*1（库存" + n.publicVar4[14] + ")", "购买/出售：10元/5元。\n人参作用：恢复1点健康值。", function(e) {
var n = t("scr_data");
n.money >= 10 && n.publicVar4[14] > 0 && (cc.find("Canvas/Page/view/content/page_" + c + "/" + e + "/name").color = new cc.color(0, 255, 0));
}, function() {
var e = t("scr_data");
if (0 === e.publicVar4[14]) a.playText2("已经卖完啦，过段时间再来吧~"); else if (e.money >= 10) {
e.money -= 10;
e.itemNum[28] += 1;
e.publicVar4[14] -= 1;
a.save();
a.playText("Canvas/notify", "获得【人参】*1！", 100);
} else a.playText("Canvas/notify", "钱不够！", 100);
}, function() {
var e = t("scr_data");
if (e.itemNum[28] >= 1) {
e.money += 5;
e.itemNum[28] -= 1;
e.publicVar4[14] += 1;
a.save();
a.playText("Canvas/notify", "失去【人参】*1，获得5元！", 100);
} else a.playText("Canvas/notify", "道具不足！", 100);
} ], [ " 毛皮*1（库存" + n.publicVar4[13] + ")", "购买/出售：3元/2元", function(e) {
var n = t("scr_data");
n.money >= 3 && n.publicVar4[13] > 0 && (cc.find("Canvas/Page/view/content/page_" + c + "/" + e + "/name").color = new cc.color(0, 255, 0));
}, function() {
var e = t("scr_data");
if (0 === e.publicVar4[13]) a.playText2("已经卖完啦，过段时间再来吧~"); else if (e.money >= 3) {
e.money -= 3;
e.itemNum[16] += 1;
e.publicVar4[13] -= 1;
a.save();
a.playText("Canvas/notify", "获得【毛皮】*1！", 100);
} else a.playText("Canvas/notify", "钱不够！", 100);
}, function() {
var e = t("scr_data");
if (e.itemNum[16] >= 1) {
e.money += 2;
e.itemNum[16] -= 1;
e.publicVar4[13] += 1;
a.save();
a.playText("Canvas/notify", "失去【毛皮】*1，获得2元！", 100);
} else a.playText("Canvas/notify", "道具不足！", 100);
} ], [ " 弩（库存" + (4 - n.itemNum2[36]) + "）", "购买：需" + 60 + "元。每级增加20%连击", function(e) {
var n = t("scr_data");
n.money >= parseInt(60 * 1 ) && 100 != 36 && (cc.find("Canvas/Page/view/content/page_" + c + "/" + e + "/name").color = new cc.color(0, 255, 0));
}, function() {
var e = t("scr_data");
if (4 === e.itemNum2[36]) a.playText("Canvas/notify", "老板：“再也不卖皮甲了！以后改卖毛皮了哈~”", 100); else {
var c = parseInt(60 * 1);
if (e.money >= c) {
e.money -= c;
e.itemNum2[36] += 1;
e.itemNum2[37] = 100;
e.publicVar4[3] = 0;
a.save();
a.playText("Canvas/notify", "获得「弩」*1！", 100);
} else a.playText("Canvas/notify", "钱不够！", 100);
}
}, void 0 ], [ " 见血封喉（拥有" + n.itemNum2[38] + ")", "购买30元，使用伤药时，每级为对手提供20%回复量的毒素，回复10%等同于毒素的生命", function(e) {
t("scr_data").money >= 30 && (cc.find("Canvas/Page/view/content/page_" + c + "/" + e + "/name").color = new cc.color(0, 255, 0));
}, function() {
var e = t("scr_data");
if (e.money >= 30) {
e.money -= 30;
e.itemNum2[38] += 1;
a.save();
a.playText("Canvas/notify", "获得【食物】*6！", 100);
} else a.playText("Canvas/notify", "钱不够！", 100);
}, function() {
var e = t("scr_data");
if (e.itemNum[0] >= 6) {
e.money += 6;
e.itemNum[0] -= 6;
a.save();
a.playText("Canvas/notify", "失去【食物】*6，获得0.6元！", 100);
} else a.playText("Canvas/notify", "道具不足！", 100);
} ] ];
return i;
},
creatPrefab: function(t, e) {
var c = this, n = cc.instantiate(this.itemUI), a = "item" + t, i = parseInt(e / 3 + 1), o = this.itemContent(a, i)[t], r = o[3], s = o[4];
n.name = a;
n.getChildByName("name").getComponent("cc.Label").string = o[0];
n.getChildByName("need").getComponent("cc.Label").string = o[1];
"undefined" != typeof r ? n.getChildByName("button1").getComponent("cc.Button").scheduleOnce(function() {
var t = n.getChildByName("button1");
t.on("touchstart", r, this);
t.on("touchstart", c.initUI, this);
}, .4) : n.getChildByName("button1").active = !1;
"undefined" != typeof s ? n.getChildByName("button2").getComponent("cc.Button").scheduleOnce(function() {
var t = n.getChildByName("button2");
t.on("touchstart", s, this);
t.on("touchstart", c.initUI, this);
}, .4) : n.getChildByName("button2").active = !1;
cc.find("Canvas/Page/view/content").getChildByName("page_" + i).addChild(n);
"undefined" != typeof o[2] && o[2](a);
},
initText: function() {
var e = t("scr_data");
cc.find("Canvas/money").getComponent("cc.Label").string = "金钱：" + e.money + "元";
},
initUI: function() {
cc.find("Canvas").getComponent("scr_shop").initText();
cc.find("Canvas/Page/view/content").children.forEach(function(t) {
t.removeAllChildren();
});
cc.find("Canvas").getComponent("scr_shop").creatUI();
},
creatUI: function() {
var t = this;
this.finalArray.forEach(function(e, c) {
t.creatPrefab(e, c);
});
},
start: function() {
var e = [], c = this.array || [ ,  ], n = t("scr_public");
this.backSceneId;
c.forEach(function(t, c) {
100 * Math.random() < (t = t || 0) && e.push(c);
});
this.finalArray = e;
this.initText();
this.creatUI();
cc.find("Canvas/backButton").on("touchstart", function() {
n.backMain();
}, this);
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_public: "scr_public"
} ],
scr_skillJudge2: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "fbb08mI2F9N/4eaXqX0Gf87", "scr_skillJudge2");
cc.Class({
extends: cc.Component,
properties: {},
skillJugge: function() {
var e = t("scr_data"), c = t("scr_public"), n = e.friendSkill, a = {
1: function() {
0 == n[1] && e.publicVar[7] >= 30 && (n[1] = 1);
},
2: function() {
0 == n[2] && e.publicVar[7] >= 60 && (n[2] = 1);
},
3: function() {
0 == n[3] && e.publicVar[7] >= 100 && (n[3] = 1);
},
4: function() {
0 == n[4] && e.publicVar[7] >= 160 && (n[4] = 1);
},
5: function() {
0 == n[5] && e.publicVar[7] >= 240 && (n[5] = 1);
},
6: function() {
0 == n[6] && e.publicVar[7] >= 340 && (n[6] = 1);
},
7: function() {
0 == n[7] && e.publicVar[7] >= 460 && (n[7] = 1);
},
8: function() {
0 == n[8] && e.publicVar[7] >= 600 && (n[8] = 1);
}
};
for (var i in a) a[i]();
c.save();
},
onLoad: function() {
this.skillJugge();
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_public: "scr_public"
} ],
scr_startChoice: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "abb1fsZ7zZIh7RCgg95JM2L", "scr_startChoice");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var e = cc.find("Canvas/Determine"), c = cc.find("Canvas/text2"), n = this, a = t("scr_data"), i = (t("scr_adoptData"), 
t("scr_public")), o = t("scr_effect"), r = 0;
e.getChildByName("choice1").on("touchstart", function() {
a.itemNum2[10] += 1;
a.kao = 0;
l();
}, this);
e.getChildByName("choice2").on("touchstart", function() {
a.itemNum2[3] += 100;
a.kao = 0;
l();
}, this);
e.getChildByName("choice3").on("touchstart", function() {
a.itemNum2[13] += 10;
a.itemNum2[10] += 0;
a.kao = 0;
l();
}, this);
e.getChildByName("choice4").on("touchstart", function() {
a.publicVar[23] += 7;
a.kao = 0;
l();
}, this);
e.getChildByName("choice5").on("touchstart", function () {
a.publicVar2[5] += 3;
a.kao = 50;
l();
}, this);
e.getChildByName("choice6").on("touchstart", function () {
a.role.att += 0;
a.publicVar2[6] += 4;
a.role.maxHp += 0;
a.kao = 0;
l();
}, this);
e.getChildByName("choice7").on("touchstart", function () {
a.shabi += 100;
a.kao = 0;
l();
}, this);
(function() {
e.opacity = 0;
c.opacity = 0;
})();
(function() {
o.playText("Canvas/text1", "请选择一个初始天赋", 80);
n.schedule(s, 1.5, 1);
})();
function s() {
cc.find([ "Canvas/Determine", "Canvas/text2" ][r]).runAction(cc.fadeIn(2));
r++;
}
function l() {
cc.find("Canvas/Determine").active = !1;
cc.find("Canvas/text1").active = !1;
cc.find("Canvas/text2").active = !1;
i.save();
i.save2();
cc.director.loadScene("open");
}
}
});
cc._RF.pop();
}, {
scr_adoptData: "scr_adoptData",
scr_data: "scr_data",
scr_effect: "scr_effect",
scr_public: "scr_public"
} ],
scr_startUI: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "cea75di7zpJiqfvO6EeKLF9", "scr_startUI");
cc.Class({
extends: cc.Component,
properties: {},
supportButton: function() {
cc.director.loadScene("support");
},
messageButton: function() {
cc.director.loadScene("message");
},
controlButton: function() {
JSON.parse(cc.sys.localStorage.getItem("userData")) || (cc.find("Canvas/button/button_continue").active = !1);
},
onLoad: function() {
cc.find("Canvas/button/button_support").on("touchstart", this.supportButton, this);
cc.find("Canvas/button/button_message").on("touchstart", this.messageButton, this);
this.controlButton();
}
});
cc._RF.pop();
}, {} ],
scr_system: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "00817ZNI7hJb4XVsFxczkla", "scr_system");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var e = [ "一般", "快", "一般" ], c = cc.find("Canvas/button/speed"), n = t("scr_data"), a = t("scr_effect");
cc.find("Canvas/text/speed").getComponent("cc.Label").string = "你目前剧情（部分）播放速度为" + e[n.publicVar[6] || 3];
c.on("touchstart", function() {
n.publicVar[6] += 1;
n.publicVar[6] > 3 && (n.publicVar[6] = 1);
a.playText("Canvas/text/speed", "你目前剧情播放速度为" + e[n.publicVar[6]], 60);
}, c);
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_effect: "scr_effect"
} ],
scr_talk2: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "49401MCfLxET5dl1a/j8YWd", "scr_talk2");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var e = t("scr_data"), c = t("scr_public"), n = cc.find("Canvas/mainUI"), a = cc.find("Canvas/NPC"), i = a.getChildByName("npc1"), o = a.getChildByName("npc2");
(function() {
n.getChildByName("choice1").on("touchstart", function() {
y(n);
C(i);
}, this);
n.getChildByName("choice2").on("touchstart", function() {
y(n);
C(o);
}, this);
cc.find("Canvas/back").on("touchstart", function() {
cc.game.startPlay = 5;
c.backMain();
}, this);
i.getChildByName("back").on("touchstart", function() {
y(i);
C(n);
}, this);
o.getChildByName("back").on("touchstart", function() {
y(o);
C(n);
}, this);
i.getChildByName("choice1").on("touchstart", s, this);
i.getChildByName("choice2").on("touchstart", l, this);
i.getChildByName("choice3").on("touchstart", u, this);
o.getChildByName("choice1").on("touchstart", h, this);
o.getChildByName("choice2").on("touchstart", m, this);
o.getChildByName("choice3").on("touchstart", d, this);
})();
(function() {
(function() {
n.active = !0;
i.active = ture;
i.scale = 0;
o.active = ture;
o.scale = 0;
e.publicVar2[25] < 1 && (n.getChildByName("choice1").active = !1);
r();
})();
p();
v();
})();
function r() {
cc.find("Canvas/energy").getComponent("cc.Label").string = "精力 " + e.energy;
}
function s() {
if (e.publicVar2[27] >= 5) c.playText2("屠宰已达最大等级！"); else if (e.energy > 0) {
var t = parseInt(10 * e.publicVar2[29]);
e.energy -= 10;
e.publicVar2[28] += t;
e.publicVar2[29] >= 30 && (e.publicVar2[29] -= 10);
(function() {
var t = e.publicVar2[28], c = f();
if (t >= neddExp) {
e.publicVar2[27] += 1;
t -= c;
}
})();
c.playText2("屠宰知识提高" + t + "！");
p();
} else c.playText2("精力不足~");
}
function l() {
if (e.itemNum[3] >= 1) {
e.itemNum[3] -= 1;
if (e.publicVar2[29] >= 200) {
var t = parseInt(4 * Math.random() + 4);
c.playText2("“小美！对不起哇~~~”。【老吴给你发了个红包，你获得" + t + "元！】");
} else {
e.publicVar2[29] += 30;
e.publicVar2[29] >= 100 ? c.playText2("“我就是个杀猪的？！别拉我，就想笑，哈哈哈哈哈。。。。”") : c.playText2("老吴：“来~来~喝——喝——喝！”");
}
p();
} else c.playText2("没肉啦~");
}
function u() {
if (e.energy <= 0) c.playText2("精力不足~"); else if (e.data.publicVar2[29] >= 100) {
e.energy -= 10;
c.save();
cc.director.loadScene("main", function() {
t("scr_data").startUI = 5;
t("scr_public").save();
cc.find("Canvas/Button").runAction(cc.scaleTo(.3, 0));
cc.find("Event/scr_fight").getComponent("scr_fight").fight(900002);
});
} else c.playText2("“我可是个老实人呐！从不打架~”");
}
function p() {
i.getChildByName("choice1").getChildByName("text").getComponent("cc.Label").string = "学习（需10精力）";
i.getChildByName("choice2").getChildByName("text").getComponent("cc.Label").string = "请教（需10精力，收益" + e.publicVar2[29] + "）";
i.getChildByName("skill").getComponent("cc.Label").string = "【屠宰.lv" + e.publicVar2[27] + "（" + e.publicVar2[28] + "/" + f() + "）】对野兽系敌人伤害提高" + 5 * e.publicVar2[27] + "%；战胜野兽系敌人后，30%几率额外获得「生肉」*" + e.publicVar2[27];
r();
}
function f() {
return 20 * e.publicVar2[27] + 20;
}
function h() {
if (e.energy > 0) {
var t = 100 * Math.random(), n = e.publicVar2[26];
e.energy -= 10;
if (t < n) {
e.publicVar2[26] = 0;
e.publicVar2[25] += 1;
c.playText2("“你也知道，我可是个大忙人；不过，看你那么想学，我就破例教教你吧~”【「借钱」等级提升！】");
} else {
e.publicVar2[26] = parseInt(.5 * e.publicVar2[26]);
c.playText2("“哎呀呀，你也知道的，打麻将时我半天就抽 一 包 红塔山呢~”");
}
r();
} else c.playText2("精力不足~");
}
function m() {
var t = g();
if (e.money > t) {
e.money -= t;
e.publicVar2[26] += 20;
c.playText("Canvas/notify", "“哎呀呀，使不得！使不得！”。金钱-" + t, 80);
v();
} else c.playText("Canvas/notify", "“哎呀呀，最近玩麻将输了不少钱呢~”", 80);
}
function d() {
if (e.publicVar3[14] > 0) c.playText2("“爷爷！饶命呀~”"); else if (e.money <= 20) c.playText2("“哎呀呀，没空呐~”【携带金钱需大于20元】"); else if (e.energy <= 0) c.playText2("精力不足"); else {
e.energy -= 10;
c.save();
cc.director.loadScene("main", function() {
t("scr_data").startUI = 5;
t("scr_public").save();
cc.find("Canvas/Button").runAction(cc.scaleTo(.3, 0));
cc.find("Event/scr_fight").getComponent("scr_fight").fight(106);
});
}
}
function v() {
o.getChildByName("choice1").getChildByName("text").getComponent("cc.Label").string = "请教（需10精力，成功率" + e.publicVar2[26] + "）";
o.getChildByName("choice2").getChildByName("text").getComponent("cc.Label").string = "给钱（需" + g() + "元）";
o.getChildByName("money").getComponent("cc.Label").string = "金钱 " + e.money;
o.getChildByName("skill").getComponent("cc.Label").string = "【借钱.lv" + e.publicVar2[25] + "】与人型敌人战斗时，逃跑率额外增加" + 10 * e.publicVar2[25] + "%；且攻击时有" + (5 + 2 * e.publicVar2[25]) + "%几率获得" + 2 * e.publicVar2[25] + "元（每场最多触发1次）";
r();
}
function g() {
return parseInt((1 + e.publicVar2[25]) * (1 + e.publicVar2[26] / 50));
}
function y(t) {
t.runAction(cc.scaleTo(.3, 0));
}
function C(t) {
t.runAction(cc.scaleTo(.3, 1));
}
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_public: "scr_public"
} ],
scr_talk: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "5ad6dAf6StJa5sP5pRCQ4vO", "scr_talk");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var e = t("scr_data"), c = t("scr_public"), n = cc.find("Canvas/mainUI"), a = cc.find("Canvas/NPC"), i = a.getChildByName("npc1"), o = a.getChildByName("npc2");
(function() {
n.getChildByName("choice1").on("touchstart", function() {
y(n);
C(i);
}, this);
n.getChildByName("choice2").on("touchstart", function() {
y(n);
C(o);
}, this);
cc.find("Canvas/back").on("touchstart", function() {
cc.game.startPlay = 5;
c.backMain();
}, this);
i.getChildByName("back").on("touchstart", function() {
y(i);
C(n);
}, this);
o.getChildByName("back").on("touchstart", function() {
y(o);
C(n);
}, this);
i.getChildByName("choice1").on("touchstart", s, this);
i.getChildByName("choice2").on("touchstart", l, this);
i.getChildByName("choice3").on("touchstart", u, this);
o.getChildByName("choice1").on("touchstart", h, this);
o.getChildByName("choice2").on("touchstart", m, this);
o.getChildByName("choice3").on("touchstart", d, this);
})();
(function() {
(function() {
n.active = !0;
i.active = ture;
i.scale = 0;
o.active = ture;
o.scale = 0;
r();
})();
p();
v();
})();
function r() {
cc.find("Canvas/energy").getComponent("cc.Label").string = "精力 " + e.energy;
}
function s() {
if (e.publicVar2[27] >= 5) c.playText2("屠宰已达最大等级！"); else if (e.energy > 0) {
var t = parseInt(10 * e.publicVar2[29]);
e.energy -= 10;
e.publicVar2[28] += t;
e.publicVar2[29] >= 30 && (e.publicVar2[29] -= 10);
(function() {
var t = e.publicVar2[28], c = f();
if (t >= neddExp) {
e.publicVar2[27] += 1;
t -= c;
}
})();
c.playText2("屠宰知识提高" + t + "！");
p();
} else c.playText2("精力不足~");
}
function l() {
if (e.itemNum[0] >= 2 && e.money >= 1) {
e.itemNum[0] -= 2;
e.money -= 1;
if (e.publicVar2[29] >= 200) {
var t = parseInt(4 * Math.random() + 4);
c.playText2("“小美！对不起哇~~~”。【老吴给你发了个红包，你获得" + t + "元！】");
} else {
e.publicVar2[29] += 30;
e.publicVar2[29] >= 100 ? c.playText2("“我就是个杀猪的？！别拉我，就想笑，哈哈哈哈哈。。。。”") : c.playText2("老吴：“来~来~喝——喝——喝！”");
}
p();
} else c.playText2("请不起~");
}
function u() {
if (e.energy <= 0) c.playText2("精力不足~"); else if (e.data.publicVar2[29] >= 100) {
e.energy -= 10;
c.save();
cc.director.loadScene("main", function() {
t("scr_data").startUI = 5;
t("scr_public").save();
cc.find("Canvas/Button").runAction(cc.scaleTo(.3, 0));
cc.find("Event/scr_fight").getComponent("scr_fight").fight(900002);
});
} else c.playText2("“我可是个老实人呐！从不打架~”");
}
function p() {
i.getChildByName("choice1").getChildByName("text").getComponent("cc.Label").string = "学习屠宰（需1精力，收益" + e.publicVar2[29] + "）";
i.getChildByName("choice2").getChildByName("text").getComponent("cc.Label").string = "请喝酒（需食物" + e.publicVar2[29] + "/2 金钱" + e.money + "/1）";
i.getChildByName("skill").getComponent("cc.Label").string = "【屠宰.lv" + e.publicVar2[27] + "（" + e.publicVar2[28] + "/" + f() + "）】对野兽系敌人伤害提高" + 5 * e.publicVar2[27] + "%；且战胜野兽系敌人后，必定额外获得「食物」*" + 2 * e.publicVar2[27];
r();
}
function f() {
return 20 * e.publicVar2[27] + 20;
}
function h() {
if (e.energy > 0) {
var t = 100 * Math.random(), n = e.publicVar2[26];
e.energy -= 10;
if (t < n) {
e.publicVar2[26] = 0;
e.publicVar2[25] += 1;
c.playText2("“你也知道，我可是个大忙人；不过，看你那么想学，我就破例教教你吧~”【「借钱」等级提升！】");
} else {
e.publicVar2[26] = parseInt(.5 * e.publicVar2[26]);
c.playText2("“哎呀呀，你也知道的，最近烧酒又涨价了呢~”");
}
r();
} else c.playText2("精力不足~");
}
function m() {
var t = g();
if (e.money > t) {
e.money -= t;
e.publicVar2[26] += 20;
c.playText("Canvas/notify", "“哎呀呀，使不得！使不得！”。金钱-" + t, 80);
v();
} else c.playText("Canvas/notify", "“哎呀呀，最近玩麻将输了不少钱呢~”", 80);
}
function d() {
if (e.publicVar3[14] > 0) c.playText2("“爷爷！饶命呀~”"); else if (e.money <= 20) c.playText2("“哎呀呀，没空呐~”【携带金钱需大于20元】"); else if (e.energy <= 0) c.playText2("精力不足"); else {
e.energy -= 10;
c.save();
cc.director.loadScene("main", function() {
t("scr_data").startUI = 5;
t("scr_public").save();
cc.find("Canvas/Button").runAction(cc.scaleTo(.3, 0));
cc.find("Event/scr_fight").getComponent("scr_fight").fight(106);
});
}
}
function v() {
o.getChildByName("choice1").getChildByName("text").getComponent("cc.Label").string = "请教（需10精力，成功率" + e.publicVar2[26] + "）";
o.getChildByName("choice2").getChildByName("text").getComponent("cc.Label").string = "给钱（需" + g() + "元）";
o.getChildByName("money").getComponent("cc.Label").string = "金钱 " + e.money;
o.getChildByName("skill").getComponent("cc.Label").string = "【借钱.lv" + e.publicVar2[25] + "】与人型敌人战斗时，逃跑率额外增加" + 10 * e.publicVar2[25] + "%；且攻击时有" + (5 + 2 * e.publicVar2[25]) + "%几率获得" + 2 * e.publicVar2[25] + "元（每场最多触发1次）";
r();
}
function g() {
return parseInt((1 + e.publicVar2[25]) * (1 + e.publicVar2[26] / 50));
}
function y(t) {
t.runAction(cc.scaleTo(.3, 0));
}
function C(t) {
t.runAction(cc.scaleTo(.3, 1));
}
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_public: "scr_public"
} ],
scr_transfer: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "341d2Kk8bBLOJ/7iF5+CPdf", "scr_transfer");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var e = t("scr_public"), c = 0, n = this, a = [ "车外的树影在车窗上快速划过，", "车里嘈杂的人声突然变得很小、很小", "——这是我在极度的疲惫与不安时才会出现的反应，", "上次出现是在四年前，我十五岁的时候。", "车停了下来。时隔一年，我再次踏上这片熟悉的土地。", "不同以往，看着行色匆匆的人群，我内心充满着迷茫与恐惧；", "我知道，平静的生活已经被撕开；或许，再也回不去..." ];
cc.find("Canvas/forward").on("touchstart", function() {
c < a.length ? function() {
var t = a[c];
c += 1;
e.playText2(t, 100);
}() : function() {
cc.find("Canvas").runAction(cc.fadeOut(4));
n.scheduleOnce(function() {
cc.director.loadScene("end");
}, 4);
}();
}, this);
this.node.opacity = 0;
this.node.runAction(cc.fadeIn(2));
}
});
cc._RF.pop();
}, {
scr_public: "scr_public"
} ],
scr_weixin: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "30448HDiXRBAKQpqrA00msY", "scr_weixin");
cc.Class({
extends: cc.Component,
properties: {},
callBack: function() {
cc.director.loadScene("support2");
},
onLoad: function() {
this.node.on("touchstart", this.callBack, this);
}
});
cc._RF.pop();
}, {} ],
scr_wifeSkillCal: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "2b641jMEzxF/Icc8EnMEIgl", "scr_wifeSkillCal");
cc.Class({
extends: cc.Component,
properties: {},
creatText: function(t, e, c) {
var n = new cc.Node(e);
n.addComponent(cc.Label);
n.parent = t;
n.setPosition(0, 0);
n.color = new cc.Color(115, 115, 115);
n.getComponent(cc.Label).overflow = 3;
n.setContentSize(630, 300);
n.getComponent(cc.Label).string = c;
n.getComponent(cc.Label).lineHeight = 50;
n.getComponent(cc.Label).fontSize = 32;
},
onLoad: function() {
var e = t("scr_data"), c = t("scr_public").att.mood(), n = e.charaLv[1], a = {
0: function() {
n[0] = c >= 10 ? 1 : 0;
},
1: function() {
n[1] = c >= 14 ? 1 : 0;
},
2: function() {
n[2] = c >= 19 ? 1 : 0;
},
3: function() {
n[3] = c >= 25 ? 1 : 0;
},
4: function() {
n[4] = c >= 32 ? 1 : 0;
},
5: function() {
n[5] = c >= 40 ? 1 : 0;
},
6: function() {
n[6] = c >= 49 ? 1 : 0;
},
7: function() {
n[7] = c >= 59 ? 1 : 0;
},
8: function() {
n[8] = c >= 70 ? 1 : 0;
},
9: function() {
n[9] = c >= 82 ? 1 : 0;
},
10: function() {
n[10] = c >= 95 ? 1 : 0;
},
11: function() {
n[11] = c >= 109 ? 1 : 0;
},
12: function() {
n[12] = c >= 124 ? 1 : 0;
},
13: function() {
n[13] = c >= 140 ? 1 : 0;
},
14: function() {
n[14] = c >= 157 ? 1 : 0;
},
15: function() {
n[15] = c >= 175 ? 1 : 0;
},
16: function() {
n[16] = c >= 194 ? 1 : 0;
},
17: function() {
n[17] = c >= 214 ? 1 : 0;
},
18: function() {
n[18] = c >= 235 ? 1 : 0;
},
19: function() {
n[19] = c >= 257 ? 1 : 0;
},
20: function() {
n[20] = c >= 280 ? 1 : 0;
}
};
for (var i in a) a[i]();
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_public: "scr_public"
} ],
scr_wife: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "fa37cAcNXhK8rvkaQuGaF1z", "scr_wife");
cc.Class({
extends: cc.Component,
properties: {},
creatText: function(t, e, c) {
var n = new cc.Node(e);
n.addComponent(cc.Label);
n.parent = t;
n.setPosition(0, 0);
n.color = new cc.Color(115, 115, 115);
n.getComponent(cc.Label).overflow = 3;
n.setContentSize(630, 300);
n.getComponent(cc.Label).string = c;
n.getComponent(cc.Label).lineHeight = 50;
n.getComponent(cc.Label).fontSize = 32;
},
onLoad: function() {
var e = t("scr_data"), c = t("scr_public"), n = this, a = cc.find("Canvas/inf"), i = cc.find("Canvas/UI1"), o = cc.find("Canvas/UI2"), r = cc.find("Canvas/UI3");
(function() {
i.getChildByName("backButton").on("touchstart", function() {
c.save();
cc.director.loadScene("main");
}, this);
i.getChildByName("skillButton").on("touchstart", function() {
g(i);
y(o);
}, this);
i.getChildByName("eatButton").on("touchstart", function() {
g(i);
y(r);
}, this);
o.getChildByName("back").on("touchstart", function() {
s();
g(o);
y(i);
}, this);
o.getChildByName("helpButton").on("touchstart", m, this);
o.getChildByName("choice1").on("touchstart", p, this);
o.getChildByName("choice2").on("touchstart", f, this);
o.getChildByName("choice3").on("touchstart", h, this);
r.getChildByName("back").on("touchstart", function() {
g(r);
y(i);
}, this);
r.getChildByName("choice1").on("touchstart", d, this);
r.getChildByName("choice2").on("touchstart", v, this);
})();
(function() {
i.active = !0;
o.active = !0;
r.active = !0;
i.scale = 1;
o.scale = 0;
r.scale = 0;
l();
u();
})();
s();
function s() {
e = t("scr_data");
var c = cc.find("Canvas/UI1/Scroll/view/content"), a = e.charaLv[1], i = {
0: function() {
var t = e.publicVar[7], c = 3 + 3 * a[0];
if (t >= c) {
a[0] += 1;
e.publicVar[7] -= c;
}
},
1: function() {
var t = e.publicVar[10], c = 6 + 6 * a[1];
if (t >= c) {
a[1] += 1;
e.publicVar[10] -= c;
}
},
2: function() {
var t = e.publicVar[9], c = 10 + 10 * a[2];
if (t >= c) {
a[2] += 1;
e.publicVar[9] -= c;
}
}
};
e = t("scr_data");
var o = {
0: "【采集】等级：" + a[0] + "级（" + e.publicVar[7] + "/" + (3 + 3 * a[0]) + "）。效果：晓月使用采集指令时，" + 5 * a[0] + "%几率触发【大丰收】（一次采集获得50%的可采资源）。升级方法：每次使用采集指令获得1点进度。",
1: "【祈祷】等级：" + a[1] + "级（" + e.publicVar[10] + "/" + (6 + 6 * a[1]) + "）。效果：晓月祈祷值恢复速度提高" + 10 * a[1] + "点，且" + 5 * a[1] + "%几率触发【双倍】。升级方法：每次使用鼓励指令获得1点进度。",
2: "【装饰】等级：" + a[2] + "级（" + e.publicVar[9] + "/" + (10 + 10 * a[2]) + "）。效果：晓月使用装饰指令时，" + 5 * a[2] + "%几率触发【无消耗】（不消耗精力）。升级方法：每次使用装饰指令获得1点进度。"
};
c.removeAllChildren();
for (var r in i) i[r]();
for (var s in o) {
n.creatText(c, "skill" + s, o[s]);
a[s] > 0 && (c.getChildByName("skill" + s).color = new cc.Color(0, 255, 0));
}
}
function l() {
var t = "", c = a.getChildByName("str");
if (e.publicVar3[27] > 0) {
t = "（生病中...精力恢复下降" + 20 * e.publicVar3[27] + "%）";
c.color = new cc.color(255, 0, 255, 255);
}
c.getComponent("cc.Label").string = "精力 " + e.att[1][0] + "/" + e.att[1][1] + t;
e.publicVar3[27] > 0 && (r.getChildByName("choice2").active = !0);
}
function u() {
var t = r.getChildByName("choice1").getChildByName("text"), c = r.getChildByName("choice2").getChildByName("text");
o.getChildByName("choice1").getChildByName("text").getComponent("cc.Label").string = "采集（可采资源数量：" + e.publicVar[24] + "）";
o.getChildByName("choice2").getChildByName("text").getComponent("cc.Label").string = "祈祷（祈祷值" + e.publicVar[25] + "）";
o.getChildByName("choice3").getChildByName("text").getComponent("cc.Label").string = "装饰";
o.getChildByName("buff").getComponent("cc.Label").string = "两次掉落+" + e.publicVar[29] + " %";
t.getComponent("cc.Label").string = "精力+20（需蜂蜜" + e.itemNum[17] + "/1，食物" + e.itemNum[0] + "/1）";
c.getComponent("cc.Label").string = "搽药（需草药" + e.itemNum[27] + "/3）";
e.itemNum[0] >= 1 && e.itemNum[17] >= 1 ? t.color = new cc.color(0, 255, 0) : t.color = new cc.color(255, 255, 255);
e.itemNum[27] >= 3 ? c.color = new cc.color(0, 255, 0) : c.color = new cc.color(255, 255, 255);
}
function p() {
if (e.publicVar[24] <= 0) c.playText2("没有可采资源"); else if (e.att[1][0] < 10) c.playText2("晓月精力不足"); else {
var t = 0, n = "", a = 5 * e.charaLv[1][0], i = 100 * Math.random(), o = 100 * Math.random();
e.publicVar[7] += 1;
e.att[1][0] -= 10;
if (i < a) {
t = Math.ceil(.5 * e.publicVar[24]);
n += "【大丰收！】";
} else t = Math.ceil(.1 * e.publicVar[24]);
if (o < 50) {
e.itemNum[0] += t;
e.publicVar[24] -= t;
n += "采得「食物」*" + t + "，可采资源降低" + t + "点。";
} else {
e.itemNum[27] += t;
e.publicVar[24] -= 2 * t;
n += "采得「草药」*" + t + "，可采资源降低" + 2 * t + "点。";
}
e.publicVar[24] < 0 && (e.publicVar[24] = 0);
c.playText2(n);
}
l();
u();
}
function f() {
if (e.att[1][0] < 10) c.playText2("晓月精力不足"); else {
var t = parseInt(.3 * e.publicVar[25]), n = function() {
var t = "", c = 100 * Math.random(), n = Math.ceil(e.publicVar[25] / 10), a = 5 * e.charaLv[1][1];
if (c < a) {
n *= 2;
t += "【双倍】！";
}
e.publicVar[29] += n;
return t += "怪物两次掉落概率+" + n + "%！";
}();
e.publicVar[25] -= t;
e.att[1][0] -= 10;
e.publicVar[10] += 1;
c.playText2(n);
}
l();
u();
}
function h() {
if (e.itemNum3.every(function(t) {
return 0 === t || t.toString().indexOf("99") >= 0;
})) c.playText2("没有可装饰的木器~"); else if (e.att[1][0] < 30) c.playText2("装饰至少需要30点精力~"); else {
e.publicVar[9] += 1;
(function() {
for (var t = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ].sort(function() {
return Math.random() - .5;
}), n = e.itemNum3, a = 0; a < 20; a++) {
var i = t[a], o = n[i];
if (o > 0) {
var r = 100 * Math.random(), s = 5 * e.charaLv[1][2], l = "", u = "", p = "", f = 0, h = 0, m = 0;
if (o < 100) {
l = "劣质木器";
m = 5;
f = o;
h = Math.ceil(6 * Math.random());
} else if (o < 200) {
l = "普通木器";
m = 10;
f = o - 100;
h = Math.ceil(4 * Math.random());
} else if (o < 300) {
l = "优质木器";
m = 20;
f = o - 200;
h = Math.ceil(2 * Math.random());
} else if (o < 400) {
l = "极品木器";
m = 30;
f = o - 300;
h = Math.ceil(1 * Math.random());
}
if (r < s) {
m = 0;
u = "【无消耗！】";
} else {
e.att[1][0] -= m;
p = "。精力-" + m;
}
f + h > 99 && (h = 99 - f);
e.itemNum3[i] += h;
c.playText("Canvas/notify", u + "「" + l + ".lv" + f + "」等级+" + h + "！变为「" + l + ".lv" + (f + h) + "」" + p, 60);
break;
}
}
})();
}
l();
u();
}
function m() {
var t = o.getChildByName("helpText");
if (!1 === t.active) {
t.active = !0;
o.getChildByName("helpButton").getComponent("cc.Label").string = "<关闭帮助>";
} else {
t.active = !1;
o.getChildByName("helpButton").getComponent("cc.Label").string = "<帮助>";
}
cc.find("Canvas").getChildByName("notify").getComponent("cc.Label").string = "";
}
function d() {
if (e.att[1][0] >= e.att[1][1]) c.playText2("已达精力上限"); else if (e.itemNum[0] > 0 && e.itemNum[17] > 0) {
e.itemNum[0] -= 1;
e.itemNum[17] -= 1;
e.att[1][0] += 20;
l();
u();
c.playText2("晓月恢复20点精力");
} else c.playText2("食材不足");
}
function v() {
if (e.publicVar3[27] <= 0) c.playText2("晓月已痊愈！"); else {
if (e.itemNum[27] >= 3) {
e.itemNum[27] -= 3;
e.publicVar3[27] -= 1;
if (e.publicVar3[27] > 0) c.playText2("晓月精力恢复提高20%！（还差" + e.publicVar3[27] + "个疗程痊愈，加油吧~）"); else {
e.role.hp = c.role.maxHp();
e.energy += 20;
e.att[1][0] += 20;
c.playText2("晓月已痊愈！触发【分担体验】；主角生命值全恢复，精力+20；晓月精力+20");
}
l();
u();
} else c.playText2("草药不足");
}
}
function g(t) {
t.runAction(cc.scaleTo(.3, 0));
}
function y(t) {
cc.find("Canvas/notify").getComponent("cc.Label").string = "";
t.runAction(cc.scaleTo(.3, 1));
}
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_public: "scr_public"
} ],
testAll: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "90bfc8sWA1FKba1y8235I0Y", "testAll");
cc.Class({
extends: cc.Component,
properties: {},
creatText: function(t, e, c) {
var n = new cc.Node(e);
n.addComponent(cc.Label);
n.parent = t;
n.setPosition(0, 0);
n.opacity = 0;
n.runAction(cc.fadeIn(1));
n.color = new cc.Color(0, 0, 0);
n.getComponent(cc.Label).overflow = 3;
n.getComponent(cc.Label).horizontalAlign = 0;
n.setContentSize(600, 300);
n.getComponent(cc.Label).string = c;
n.getComponent(cc.Label).lineHeight = this.lineHeight || 50;
n.getComponent(cc.Label).fontSize = this.fontSize || 36;
},
callBack: function() {
this.changeData();
var e = [ 1007, 5001, 5002, 5003, 5004, 5005, 1006 ];
t("scr_data").publicVar7[30];
cc.find("Event/scr_fight").getComponent("scr_fight").fight(108);
},
changeData: function() {
var e = t("scr_data"), c = t("scr_public");
t("scr_adoptData");
e.startUI = 1;
e.ifFollow[1] = 1;
e.role.hp = c.role.maxHp();
e.itemNum[7] = 20;
c.save();
c.init();
},
onLoad: function() {
this.node.on("touchstart", this.callBack, this);
}
});
cc._RF.pop();
}, {
scr_adoptData: "scr_adoptData",
scr_data: "scr_data",
scr_public: "scr_public"
} ]
}, {}, [ "scr_QQpay", "scr_backStartUI", "scr_backSupport", "scr_continueButton", "scr_newGame", "scr_notice", "scr_notice2", "scr_open", "scr_startChoice", "scr_startUI", "scr_weixin", "scr_initGame", "scr_makeUI", "scr_adoptData", "scr_data", "scr_data2", "scr_event", "scr_mainUIEvent", "scr_plot", "scr_rest", "scr_enemy", "scr_fight", "scr_fightState", "scr_friendUI1", "scr_skillJudge2", "scr_effect", "scr_public", "scr_backMainUI", "scr_mainUIinit", "scr_readConfession", "scr_end", "scr_initData", "scr_over", "scr_over2", "scr_over2_1", "scr_system", "scr_BGM", "scr_learn", "scr_quitGame", "testAll", "scr_transfer", "scr_bag", "scr_build", "scr_friend1", "scr_mainUIinit2", "scr_mapUp2", "scr_pet", "scr_pond", "scr_roleAtt", "scr_roleSkillJugge", "scr_sell", "scr_shop", "scr_talk", "scr_talk2", "scr_wife", "scr_wifeSkillCal" ]);