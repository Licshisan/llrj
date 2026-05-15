require = function e(t, n, a) {
function i(o, r) {
if (!n[o]) {
if (!t[o]) {
var s = "function" == typeof require && require;
if (!r && s) return s(o, !0);
if (c) return c(o, !0);
var l = new Error("Cannot find module '" + o + "'");
throw l.code = "MODULE_NOT_FOUND", l;
}
var u = n[o] = {
exports: {}
};
t[o][0].call(u.exports, function(e) {
var n = t[o][1][e];
return i(n || e);
}, u, u.exports, e, t, n, a);
}
return n[o].exports;
}
for (var c = "function" == typeof require && require, o = 0; o < a.length; o++) i(a[o]);
return i;
}({
NewScript: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "157ea2hkc9J8KsDAUfgUmue", "NewScript");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {}
});
cc._RF.pop();
}, {} ],
scr_BGM: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "8d8c2z+e3xAIqUkxCqE4NZW", "scr_BGM");
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
scr_QQpay: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "fc884/pvDpG6bLBf547DI5C", "scr_QQpay");
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
scr_achieve: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "141caSLnsJIHJZ46hPGujwi", "scr_achieve");
cc.Class({
extends: cc.Component,
properties: {},
creatText: function(e, t, n) {
var a = new cc.Node(t);
a.addComponent(cc.Label);
a.parent = e;
a.setPosition(0, 0);
a.color = new cc.Color(115, 115, 115);
a.getComponent(cc.Label).overflow = 3;
a.setContentSize(630, 300);
a.getComponent(cc.Label).string = n;
a.getComponent(cc.Label).lineHeight = 50;
a.getComponent(cc.Label).fontSize = 32;
},
day: function() {
var t = new Date(), n = parseInt(t.getTime() / 36e5);
return parseInt(n - e("scr_data2").gameData[2]);
},
onLoad: function() {
var t = e("scr_data"), n = e("scr_data2"), a = e("scr_public"), i = t.publicVar2[2] + t.publicVar2[3] + t.publicVar2[4], c = t.itemNum2[17] + t.itemNum2[18] + t.itemNum2[20] + t.itemNum2[21] + t.itemNum2[22] + t.itemNum2[23] + t.itemNum2[24] + t.itemNum2[25], o = this.day(), r = t.choice[5] + t.publicVar[7], s = {
0: "【初入西行】初入西行降伏玉面狐妖（小童子）",
1: "【大罗】功德达到99（" + t.achieve + "/99，目前版本功德系统暂未开放）",
2: "【劫运缠身灵石矿主】被劫匪抢劫66次！（" + t.publicVar2[0] + "/66，包括66次以上，下同）",
3: "【劫运缠身探路僧】西行探路999次，且啥也没找到比例超过25%！你目前一共西行探路" + i + "次，其中有" + t.publicVar2[1] + "次啥也没找到，占比" + (100 * t.publicVar2[1] / i).toFixed(1) + "%",
4: "【劫运缠身游方僧】化缘被打10次（" + t.randomEvent[0] + "/10），翻宝篓被抢10次（" + t.publicVar2[13] + "/10）",
5: "【一身妖气∠( ᐛ 」∠)＿】西行探路999次，且斗法占比超过24%！你目前一共西行探路" + i + "次，其中斗法" + t.publicVar2[2] + "次（占比" + (100 * t.publicVar2[2] / i).toFixed(1) + "%），拾取法宝" + t.publicVar2[3] + "次（占比" + (100 * t.publicVar2[3] / i).toFixed(1) + "%），事件" + t.publicVar2[4] + "次（占" + (100 * t.publicVar2[4] / i).toFixed(1) + "%）",
6: "【震惊！一小行者被十个阿姨轮流摸】被土地婆摸盘缠10次（" + t.publicVar2[5] + "/10）！",
7: "【搀扶我起来，我还能跑】遁走失败999次（" + t.publicVar2[6] + "/999）",
8: "【一个约定】“10年后，如果你还在，咱们就结伴西行吧！”白骨夫人：“嗯...”碰到白骨夫人49次（" + t.publicVar2[12] + "/49）！",
9: "【黑熊精杀手】降伏黑熊精10只或以上（" + t.kills[3] + "/10）",
10: "【高老庄一霸】降伏黄袍怪",
11: "【破戒行者】触发香瘾36次（" + t.publicVar2[8] + "/36）",
12: "【此心入魔，业障自担】业障值60（" + t.publicVar[0] + "/60）",
13: "【护送月兔仙子】月兔仙子缘分400（" + t.choice[5] + "/400）",
14: "【求斋仙子（月兔仙子）】“道兄，我想要...”“没有！滚~”。连续30天不喂食月兔仙子！（" + t.publicVar2[10] + "/30）",
15: "【真.爱】触发回到认识月兔仙子前一日后，放弃认识月兔仙子，并到达长安城",
16: "【问心】降伏通缉魔王",
17: "【善缘在身】拥有6个人的「善缘牌」（" + t.randomEvent[1] + "/6）",
18: "【珍缘】降伏红孩儿40次（" + t.kills[2] + "/40），并且被降伏20次（" + t.publicVar2[7] + "/20）",
19: "【雷法行者】雷法成功21次（" + t.orderTimes[3] + "/21）",
20: "【法宝癖】拥有99个法宝杂藏（" + c + "/99）",
21: "【纵历八十一难，仍念一缘】求差失败49次（" + t.publicVar2[9] + "/49）",
22: "【身入尘劫，愿修正果】拥有6个人的「慈悲泪」（" + t.itemNum[12] + "/6，最难功德簿 ）",
23: "【斗战行者】拥有9级如意金箍棒和9级大圣披风",
24: "【扇起风来话不多】打出99颗以上定风珠（" + t.publicVar3[14] + "/99）",
25: "【请缘仙子】杏仙缘分600（" + t.publicVar[7] + "/600），且月兔仙子缘分等于0",
26: "【逗弄仙子】还尚未参透hiahiahia(ಡωಡ)",
27: "【闭关弟子】月兔仙子缘分+杏仙达缘分达1999（" + r + "/1999）",
28: "【灵山之下】取得真经九九劫难",
29: "【真缘粉】本次西行取得真经6次以上（" + n.gameData[1] + "/6）",
30: "【说书人护法人】本次西行在你传音符中存活达300小时（" + o + "/300）"
}, l = {
0: function() {
return t.randomEvent[3] > 0;
},
1: function() {
var e = 100 * t.publicVar2[1] / i;
return i >= 999 && e >= 24;
},
2: function() {
return t.publicVar2[0] >= 66;
},
3: function() {
return t.publicVar2[1] >= 999;
},
4: function() {
return t.randomEvent[0] >= 10 && t.publicVar2[13] >= 10;
},
5: function() {
var e = 100 * t.publicVar2[2] / i;
return i >= 999 && e >= 24;
},
6: function() {
return t.publicVar2[5] >= 10;
},
7: function() {
return t.publicVar2[6] >= 999;
},
8: function() {
return t.publicVar2[12] >= 49;
},
9: function() {
return t.kills[3] >= 10;
},
10: function() {
return 1 == t.publicVar[5];
},
11: function() {
return t.publicVar2[8] >= 36;
},
12: function() {
return t.publicVar[0] >= 60;
},
13: function() {
return t.choice[5] >= 400;
},
14: function() {
if (t.publicVar2[10] >= 30 || 1 == t.publicVar2[11]) {
t.publicVar2[11] = 1;
a.save();
return !0;
}
return !1;
},
15: function() {
return 300 == t.distance && n.gameData[0] > 0 && 0 == t.choice[5];
},
16: function() {
return t.publicVar[3] > 0;
},
17: function() {
return t.randomEvent[1] >= 6;
},
18: function() {
return t.kills[2] >= 40 && t.publicVar2[7] >= 20;
},
19: function() {
return t.orderTimes[3] >= 21;
},
20: function() {
return c >= 99;
},
21: function() {
return t.publicVar2[9] >= 49;
},
22: function() {
return t.itemNum[12] >= 6;
},
23: function() {
return t.itemNum2[10] >= 9 && t.itemNum2[11] >= 9;
},
24: function() {
return t.publicVar3[14] >= 99;
},
25: function() {
return t.publicVar[7] >= 600 && t.choice[5] <= 0;
},
26: function() {
return t.publicVar2[9] >= 49;
},
27: function() {
return r >= 1999;
},
28: function() {
return t.choice[6] >= 16;
},
29: function() {
return n.gameData[1] + 1 >= 6;
},
30: function() {
return o >= 300;
}
}, u = cc.find("Canvas/Scroll/view/content");
for (var p in s) {
this.creatText(u, "skill" + p, s[p]);
l[p]() && (u.getChildByName("skill" + p).color = new cc.Color(0, 255, 0));
}
var f = cc.find("Canvas/Button_backMainUI");
f.on("touchstart", function() {
cc.director.loadScene("main");
}, f);
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_data2: "scr_data2",
scr_public: "scr_public"
} ],
scr_backMainUI: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "3e3ebJJTbNAf4EOh0d4HMO1", "scr_backMainUI");
cc.Class({
extends: cc.Component,
properties: {},
callBack: function() {
e("scr_public").save();
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
scr_backStartUI: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "d5fa6dHVPtCmIx1Z7ZMSeDh", "scr_backStartUI");
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
scr_backSupport: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "210d2Bb6a1Dho5//c333ltz", "scr_backSupport");
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
scr_continueButton: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "4ffa5hmUdNEyJa2jWF2c0nr", "scr_continueButton");
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
scr_data2: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "77dc9QHo3RF5IGfGNhXskkd", "scr_data2");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var e = {
initMoney: 0,
dieChoice: [ 0, 0, 0, 0, 0 ],
gameData: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
gameData2: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
};
JSON.parse(cc.sys.localStorage.getItem("data2")) && function(e) {
"undefined" == typeof e.gameData && (e.gameData = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]);
"undefined" == typeof e.gameData2 && (e.gameData2 = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]);
}(e = JSON.parse(cc.sys.localStorage.getItem("data2")));
t.exports = e;
}
});
cc._RF.pop();
}, {} ],
scr_dataCopy: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "44ab5HIdTVLaYk0L5S0uxkB", "scr_dataCopy");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var e = {};
"undefined" == typeof JSON.parse(cc.sys.localStorage.getItem("dataCopy")) && (e = JSON.parse(cc.sys.localStorage.getItem("userData")));
t.exports = e;
}
});
cc._RF.pop();
}, {} ],
scr_data: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "cc6a6czpoJOeJjLRi9RcHDb", "scr_data");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var e = {
distance: 1,
stayDay: [ 1, 1, 1, 1 ],
role: {
hp: 50,
maxHp: 50,
att: 10,
def: 0
},
money: 40,
day: 1,
energy: 50,
maxEnergy: 50,
hunger: 100,
maxHunger: 100,
health: 30,
achieve: 0,
shopPoint: 0,
enemyId: 0,
publicVar: [ 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
publicVar2: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
publicVar3: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
orderTimes: [ 0, 0, 0, 0, 0, 0, 0, 0 ],
randomEvent: [ 0, 0, 0, 0, 0, 0, 0, 99, 588, 0, 0, 0, 0, 0 ],
choice: [ 2, 0, 0, 0, 0, 0, 0, 0, 0 ],
chioce2: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
kills: [ 0, 0, 0, 0 ],
itemNum: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
itemNum2: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
ifFollow: [ 0, 0 ],
plotId: 0,
talkTimes: [ 0, 0 ],
choiceAtt: 0,
button: [ !0, !1, !1 ],
figthState: 0,
figthExp: [ 0, 0, 0 ],
workExp: 0,
wis: 0,
winTimes: 0,
escapeExp: 0,
buffState: [ 0, 0 ],
ifNotify: !1,
skillLv: {
0: 0,
1: 0,
2: 0,
3: 0,
4: 0,
5: 0,
6: 0,
7: 0,
8: 0,
9: 0,
10: 0,
11: 0,
12: 0,
13: 0,
14: 0,
15: 0,
16: 0,
17: 0,
18: 0,
19: 0,
20: 0,
21: 0,
22: 0,
23: 0,
24: 0,
25: 0,
26: 0
},
specialEnemy: {
100001: {
lv: 1,
hp: 20,
maxHp: 20,
att: 1,
def: 0
},
100002: {
lv: 25,
hp: 875,
maxHp: 875,
att: 0,
def: 0
},
200001: {
lv: 8,
hp: 310,
maxHp: 310,
att: 20,
def: 0
},
300001: {
lv: 20,
hp: 510,
maxHp: 510,
att: 0,
def: 0
},
300002: {
lv: 45,
hp: 1550,
maxHp: 1550,
att: 0,
def: 0
},
300003: {
lv: 35,
hp: 3270,
maxHp: 3270,
att: 0,
def: 0
},
400001: {
lv: 100,
hp: 3345,
maxHp: 3345,
att: 0,
def: 234
},
400002: {
lv: 199,
hp: 19999,
maxHp: 19999,
att: 0,
def: 20
},
400003: {
lv: 60,
hp: 2050,
maxHp: 2050,
att: 310,
def: 121
},
900001: {
lv: 15,
hp: 575,
maxHp: 575,
att: 59,
def: 16
},
900002: {
lv: 20,
hp: 998,
maxHp: 998,
att: 50,
def: 36
},
900003: {
lv: 500,
hp: 16500,
maxHp: 16500,
att: 1500,
def: 1150
},
900004: {
lv: 1,
hp: 999999,
maxHp: 999999,
att: 999,
def: 0
},
900005: {
lv: 500,
hp: 599999,
maxHp: 599999,
att: 0,
def: 0
},
900006: {
lv: 200,
hp: 299999,
maxHp: 299999,
att: 0,
def: 0
},
900007: {
lv: 40,
hp: 3900,
maxHp: 3900,
att: 90,
def: 50
}
},
friendSkill1: [ 1, 0, 0, 0, 0 ],
friendSkill2: [ 1, 0, 0, 0, 0 ],
friendSkill: [ 1, 0, 0, 0, 0, 0, 0, 0, 0 ]
};
JSON.parse(cc.sys.localStorage.getItem("userData")) && function(e) {
"undefined" == typeof e.itemNum2[18] && (e.itemNum2[18] = 0);
"undefined" == typeof e.itemNum2[19] && (e.itemNum2[19] = 0);
"undefined" == typeof e.itemNum2[20] && (e.itemNum2[20] = 0);
"undefined" == typeof e.itemNum2[21] && (e.itemNum2[21] = 0);
"undefined" == typeof e.itemNum2[22] && (e.itemNum2[22] = 0);
"undefined" == typeof e.itemNum2[23] && (e.itemNum2[23] = 0);
"undefined" == typeof e.itemNum2[24] && (e.itemNum2[24] = 0);
"undefined" == typeof e.itemNum2[25] && (e.itemNum2[25] = 0);
"undefined" == typeof e.itemNum2[26] && (e.itemNum2[26] = 0);
"undefined" == typeof e.itemNum2[27] && (e.itemNum2[27] = 0);
"undefined" == typeof e.ifFollow && (e.ifFollow = [ 0, 0 ]);
"undefined" == typeof e.talkTimes && (e.talkTimes = [ 0, 0 ]);
"undefined" == typeof e.friendSkill1 && (e.friendSkill1 = [ 1, 0, 0, 0, 0 ]);
"undefined" == typeof e.friendSkill2 && (e.friendSkill2 = [ 1, 0, 0, 0, 0 ]);
"undefined" == typeof e.friendSkill && (e.friendSkill = [ 1, 0, 0, 0, 0, 0, 0, 0 ]);
"undefined" == typeof e.choice[6] && (e.choice[6] = 0);
"undefined" == typeof e.choice[7] && (e.choice[7] = 0);
"undefined" == typeof e.choice[8] && (e.choice[8] = 0);
"undefined" == typeof e.chioce2 && (e.chioce2 = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]);
"undefined" == typeof e.plotId && (e.plotId = 0);
"undefined" == typeof e.escapeExp && (e.escapeExp = 0);
"undefined" == typeof e.randomEvent[11] && (e.randomEvent[11] = 0);
"undefined" == typeof e.randomEvent[12] && (e.randomEvent[12] = 0);
"undefined" == typeof e.randomEvent[13] && (e.randomEvent[13] = 0);
"undefined" == typeof e.publicVar && (e.publicVar = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]);
"undefined" == typeof e.publicVar2 && (e.publicVar2 = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]);
"undefined" == typeof e.publicVar3 && (e.publicVar3 = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]);
"undefined" == typeof e.specialEnemy[300001] && (e.specialEnemy[300001] = {
lv: 35,
hp: 510,
maxHp: 510,
att: 0,
def: 0
});
"undefined" == typeof e.specialEnemy[300002] && (e.specialEnemy[300002] = {
lv: 45,
hp: 1550,
maxHp: 1550,
att: 0,
def: 0
});
"undefined" == typeof e.specialEnemy[300003] && (e.specialEnemy[300003] = {
lv: 35,
hp: 3270,
maxHp: 3270,
att: 0,
def: 0
});
"undefined" == typeof e.specialEnemy[400001] && (e.specialEnemy[400001] = {
lv: 100,
hp: 3345,
maxHp: 3345,
att: 0,
def: 234
});
"undefined" == typeof e.specialEnemy[400002] && (e.specialEnemy[400002] = {
lv: 199,
hp: 19999,
maxHp: 19999,
att: 0,
def: 20
});
"undefined" == typeof e.specialEnemy[400003] && (e.specialEnemy[400003] = {
lv: 60,
hp: 2050,
maxHp: 2050,
att: 310,
def: 121
});
"undefined" == typeof e.specialEnemy[900001] && (e.specialEnemy[900001] = {
lv: 15,
hp: 575,
maxHp: 575,
att: 59,
def: 16
});
"undefined" == typeof e.specialEnemy[900002] && (e.specialEnemy[900002] = {
lv: 20,
hp: 998,
maxHp: 998,
att: 50,
def: 36
});
"undefined" == typeof e.specialEnemy[900003] && (e.specialEnemy[900003] = {
lv: 500,
hp: 16500,
maxHp: 16500,
att: 1500,
def: 1150
});
"undefined" == typeof e.specialEnemy[900004] && (e.specialEnemy[900004] = {
lv: 1,
hp: 999999,
maxHp: 999999,
att: 999,
def: 0
});
"undefined" == typeof e.specialEnemy[900005] && (e.specialEnemy[900005] = {
lv: 500,
hp: 599999,
maxHp: 599999,
att: 0,
def: 0
});
"undefined" == typeof e.specialEnemy[900006] && (e.specialEnemy[900006] = {
lv: 200,
hp: 299999,
maxHp: 299999,
att: 0,
def: 0
});
"undefined" == typeof e.specialEnemy[900007] && (e.specialEnemy[900007] = {
lv: 40,
hp: 3900,
maxHp: 3900,
att: 90,
def: 50
});
}(e = JSON.parse(cc.sys.localStorage.getItem("userData")));
t.exports = e;
}
});
cc._RF.pop();
}, {} ],
scr_diaryDetermine: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "12297Yy5bdDErxPgTf9kaM9", "scr_diaryDetermine");
cc.Class({
extends: cc.Component,
properties: {},
callBack: function() {
cc.director.loadScene("rest");
},
onLoad: function() {
this.node.on("touchstart", this.callBack, this);
}
});
cc._RF.pop();
}, {} ],
scr_diary: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a2b8155a0tO3ILQFxW/6pRv", "scr_diary");
cc.Class({
extends: cc.Component,
properties: {},
creatText: function(e, t, n) {
var a = new cc.Node(t);
a.addComponent(cc.Label);
a.parent = e;
a.setPosition(0, 0);
a.opacity = 0;
a.runAction(cc.fadeIn(3));
a.color = new cc.Color(255, 255, 255);
a.getComponent(cc.Label).overflow = 3;
a.getComponent(cc.Label).horizontalAlign = 1;
a.setContentSize(600, 300);
a.getComponent(cc.Label).string = n;
a.getComponent(cc.Label).lineHeight = 60;
a.getComponent(cc.Label).fontSize = 40;
},
playBGM: function(e) {
if ("undefined" != typeof e && "" != e) {
cc.audioEngine.stopAll();
var t = cc.game._persistRootNodes;
for (var n in t) var a = t[n].getComponent("scr_BGM")[e];
cc.audioEngine.play(a, !1, 1);
}
},
ifEnd: function() {
e("scr_data").day > 80 && cc.director.loadScene("end");
},
onLoad: function() {
var t = cc.find("Canvas/skip"), n = e("scr_public");
t.on("touchstart", function() {
cc.director.loadScene("rest");
}, this);
n.ifGameOver();
t.runAction(cc.fadeTo(3, 150));
var a = e("scr_data"), i = {
1001: [ "“这经，我偏要自己去取！”", "“若天命不肯渡我，我就一路打到灵山去！”", "“师父，今日起我不再躲在山门影子里。”", "BGM1", [ a.distance, 0 ] ],
1003: [ "黑松林入夜落雨，", "妖风卷着泥水往行囊里钻，", "可我宁愿在雨里走到天明，也不愿回头。", "BGM2", [] ],
1005: [ "十六年前，山门外雷火交加，", "一个被妖雾裹住的婴儿被放在石阶上。", "师父说我命里带劫，不可近人，不可恋尘。", "我偏偏记住了另一句话：带劫的人，也能取经。", "BGM1", [] ],
1009: [ "我不善言辞，也不懂人情。", "一卷残经、一根木棍、一只破钵，就是我的全部家当。", "山门钟声渐远，前方是高老庄。", "第一难，便从那里开始吧。", "BGM3", [] ],
2007: [ "我按昨日揭榜的地址来到客栈，", "门上只剩半张黄符，符灰里写着四个字：妖雾已散。", "", [ a.choice[1], 2 ] ],
2021: [ "没有通关文牒，没有护法神通，连化缘都说不利索。", "若我死在路上，", "会不会也只是白骨岭旁一缕无名风？", "BGM3", [] ],
2022: [ "今日高老庄市集喧闹异常。", "我挤进人群，看见师父正与一名降妖人争执，袖中隐隐露出锁妖符。", "他苍老了许多，却还是不肯回头看我。", "我忽然明白，此地不是归处。", "明日启程，过黑松林，往西。", "BGM1", [] ],
3001: [ "五行山下静得像一口古井。", "夜里妖雾贴着地面爬，篝火也照不出十步远。", "我却第一次觉得自在。", "妖怪再凶，也比人心明白。", "BGM2", [] ],
3002: [ "幼年时，师父常说我是灾星。", "山门丢了丹，他怪我；经楼起火，他也怪我。", "后来我才知道，许多人的心魔，最爱披着师恩的袈裟。", "", [] ],
3003: [ "师父年轻时也曾发愿取经，", "可他在第一场妖风里折了胆，从此只会守着山门讲天命。", "我若也信了天命，便永远走不到灵山。", "", [] ],
3004: [ "昨夜梦见师父坐在破蒲团上咳血。", "他手里攥着半截通关文牒，问我为什么不回去。", "我醒来时满身冷汗，远处有狼火如星。", "", [] ],
3018: [ "邻庄有位素衣仙姑，曾在春祭上唱过一段取经曲。", "那声音像清晨的流沙河，亮得让人不敢靠近。", "后来她被妖风卷走，只留下半枚玉簪。", "我把玉簪埋在路边，心里第一次恨自己太弱。", "", [] ],
3027: [ "佛光穿过菩提叶，落在行囊帐上。", "我听见远处有小妖啼哭，也听见自己心里有锁链轻响。", "若要成佛，是否必须先斩断所有牵挂？", "", [] ],
3028: [ "世上有些缘法像紧箍。", "明知疼，却越挣越紧。", "师徒、恩怨、爱憎、执念，究竟哪一个才是真正的妖？", "", [] ],
4001: [ "长安城像一座巨大的八卦阵。", "我把行囊帐安在西坊破庙，庙里已有老行者、土地夫妇和一位被心魔缠住的仙姑。", "香火断了多年，佛像却还望着西方。", "", [] ],
4004: [ "土地夫妇守着病仙姑，日日以香灰煎水。", "她时而沉睡，时而对着空墙发笑，像被梦貘偷走了魂魄。", "土地婆说，只要熬到灵山钟响，一切都会好。", "", [] ],
4008: [ "三更，土地公忽然摔碎药钵。", "“你若再不醒，我们两个老骨头还能守你几年？”", "病仙姑抬头看他，眼里没有怒，只有一片空。", "我站在庙门外，忽然觉得许多劫难并不拿刀。", "", [] ],
4009: [ "老行者夜里咳得像破风箱。", "他年轻时也走过西路，败在黄风岭，回来后便只信猴儿酒和签运符。", "他说自己不是怕死，只是怕临死前发现这一生白走。", "", [] ],
4010: [ "杏仙每日抱着琵琶出门，暮色深了才回破庙。", "她身上常有花香，也有妖雾擦过的冷意。", "她睡得极浅，像一片随时会被风吹走的杏花。", "", [] ],
4018: [ "老行者见庙里多了两个人，竟高兴得像捡到舍利。", "他说当年黄风岭有三十六道怪风，吹得人连自己的名字都忘。", "说到最后，他笑着笑着便沉默了。", "", [] ],
4019: [ "我劝老行者去药王庙求丹。", "他摆摆手：“药能止痛，止不了悔。”", "“那你往后怎么办？”", "“等风把我带走吧。”", [] ],
4022: [ "病仙姑数日不食，土地婆把斋粥端到她唇边。", "“你若真想睡，娘陪你睡；你若想醒，娘也陪你醒。”", "土地公背过身去，肩膀抖得厉害。", "", [] ],
4023: [ "老行者告诉我，病仙姑本是土地夫妇唯一的女儿。", "她少时能看见妖影，旁人都说她疯了。", "两位老人带她来长安求药，只盼有朝一日能把她从梦貘手里唤回来。", "我看着庙外月色，忽然不敢再轻易评判任何人的软弱。", "", [] ],
4025: [ "幼年那年冬天，我偷看了师父藏在经匣里的旧文牒。", "文牒上写着他也曾立誓西行，却在黄风岭弃下同伴。", "我问他为何骗我，他一巴掌打碎油灯。", "那夜以后，我学会了把话咽进肚里。", "", [] ],
4026: [ "我给师父贴过许多标签：懦弱、暴躁、自私、贪杯。", "可西行越久，我越怕自己也会在某一难前停下。", "若有朝一日我也成了守门的人，会不会同样劝后来者别走？", "", [] ],
4028: [ "老行者腹痛难忍，拉我听他讲黄风岭。", "他说那风不是吹眼睛，而是吹心。", "一阵风过，胆小的看见坟，贪财的看见金，执念重的人看见自己最舍不得的人。", "我听完，许久没有说话。", "", [] ],
4033: [ "长安西坊是万相汇聚之地。", "有假道士卖避劫符，有狐女唱取经曲，有小贩把石头说成舍利。", "香烟、妖雾、琵琶声和哭声混在一起，像一场永不散场的水陆道场。", "", [] ],
4036: [ "老行者吃了隔夜斋饭，忽然呕血。", "我背他去药王庙，路上他一直抓着我的袖子，像怕被什么东西拖回黄风岭。", "药师摇头，只给了几粒止痛丹。", "", [] ],
4038: [ "老行者又回到破庙。", "\n“药王庙说我五脏都被旧风蚀空了。”", "他笑了笑，把剩下的丹药推给我。\n“你还要往西，别把命耗在我的旧劫里。”", "我收下丹药，却觉得手心滚烫。", "", [] ],
4043: [ "幼年时，我曾在雪夜向同门吹嘘轻功。", "结果跌进结冰的莲池，被土地公捞起。", "师父骂我不知死活，可替我烘衣时，手一直在抖。", "有些恩情像残灯，微弱，却确实亮过。", "", [] ],
4044: [ "病仙姑忽然发狂，踢翻铁盆，喊着“别把我关回梦里”。", "土地婆抱住她，杏仙轻轻弹起琵琶。", "曲声像一缕细线，慢慢把她从梦貘爪下牵回来。", "那一刻，破庙里所有人都不敢出声。", "", [] ],
4045: [ "老行者劫痛发作越来越频繁。", "我问他是否想回故乡。", "他说：“故乡在我逃下黄风岭那天就塌了。”", "我忽然明白，有些人不是无家可归，而是不敢回到自己的心里。", "", [] ],
4048: [ "师父年轻时不参加春祭，也不点河灯。", "庄里人说他古怪，他便更古怪；旁人躲他，他便拿戒刀追着骂。", "现在想来，他不是不在乎，只是不知道怎么求人留下。", "", [] ],
4051: [ "九月中旬，菩提叶落满庙阶。", "老行者的呻吟、杏仙的琵琶、病仙姑的梦话，一同沉进夜色。", "我原以为西行只需降妖，如今才知人心也是一座座山。", "", [] ],
4052: [ "老行者已吃不下斋饭，只能靠止痛丹熬过夜半。", "他把一枚旧铜铃交给我，说那是他当年同伴留下的。", "“若你过了黄风岭，替我摇一摇。”", "", [] ],
4062: [ "老行者瘦得只剩骨头。", "他唤我过去，断断续续地说：", "“别在一场败仗里过完一生...往西走...走到你不再怕回头为止...”", "我第一次在破庙里哭出声。", "", [] ],
4063: [ "老行者走了。", "土地公请来天兵，天兵把他裹进白布。", "云车离开时，我听见行囊里那枚旧铜铃轻轻一响。", "像有人在很远的黄风岭上，终于等到风停。", "", [] ],
147: [ "幼年时，山里穷，孩子们什么都敢吃。", "夜里打山鸟、烤野薯，是少有的欢喜事。", "师父总躲在门后闻香，嘴硬说不馋。", "有一次烤肉不见了，他说是犬妖叼走；我当时不信，如今却愿意信了。", "", [] ],
148: [ "病仙姑忽然清醒了半日。", "她帮土地婆净钵，还对杏仙笑了笑。", "破庙里像短暂开了一树花，谁也不敢大声说话，怕一惊就谢。", "", [] ],
150: [ "杏仙常去陪病仙姑说话。", "她不问病因，只弹曲子，讲路上听来的妖怪笑话。", "我看着她们，才发现自己所谓独行，不过是不懂如何伸手。", "", [] ],
153: [ "病仙姑又陷进梦里，比从前更深。", "我问杏仙，她会不会永远醒不来。", "杏仙说：“人心有时像流沙河，越急越陷。能做的，只是别让她一个人沉下去。”", "我记住了这句话。", "", [] ],
156: [ "我问杏仙，往后有什么打算。", "她说想去女儿国学医，也想继续弹琵琶。", "“欠下的因果呢？”", "“慢慢还。西行路那么长，总有办法。”", "她笑得很轻，却比许多誓言都坚定。", "", [] ],
159: [ "除了在野外活下去，我几乎一无所有。", "不会说漂亮话，不会求人，不懂怎样把明天安排妥当。", "可我已经上路，路会教我，妖怪也会教我。", "", [] ],
165: [ "天气转冷，土地夫妇带病仙姑回旧山门。", "临走前，土地婆把一包灵草塞给杏仙。", "她说：“醒不醒都随天命，可有人陪着，便不算全输。”", "", [] ],
167: [ "我走出破庙，来到小桥。", "长安夜色繁华，星月却被灯火遮住。", "我忽然想念五行山粗粝的天，那里贫瘠，却离云很近。", "", [] ],
169: [ "连日甘霖，破庙越发阴冷。", "城中张贴朱红告示，说有天官巡游，闲杂人等不得露宿街头。", "游方僧们像被风卷走的落叶，一夜之间少了大半。", "", [] ],
171: [ "长安开始清街。", "破庙外的摊贩、道士、化缘僧都被赶散，连墙角的旧符也被刮掉。", "我不知道他们去了哪里，只觉得城池忽然干净得有些可怕。", "", [] ],
173: [ "很久以前，素娥仙子生在一座临河小村。", "她天生会听风辨妖，能以歌声安魂。", "可村里人怕她，说她是妖星入户。", "（待续）", "", [] ],
174: [ "素娥长大后离村，到高老庄斋铺谋生。", "一名沉默的少年行者常替她挡去闲言。", "斋铺倒闭那日，少年说山中有清静处，可避人言。", "素娥信了他。", "（待续）", "", [] ],
175: [ "山中并不清静。", "少年体内藏着黄袍怪的影子，昼为人，夜为妖。", "素娥数次逃离，都被山民以“命中姻缘”为名送回。", "她的歌声从那时起再也不亮。", "（待续）", "", [] ],
176: [ "后来少年被妖骨反噬，右脚残废，家道败落。", "他父母为求活路，把素娥送给邻山黄袍怪作祭礼。", "黄袍怪没有杀她，只把她困在洞中，要她日日唱安魂曲。", "（待续）", "", [] ],
177: [ "黄袍怪凶名在外，却从不打骂素娥。", "也许因为听过太多孤魂哭声，他竟学会了温柔。", "素娥在洞中种花、挑水、炼药，日子像灰烬里残存的一点火。", "（待续）", "", [] ],
178: [ "黄袍怪在素娥劝说下，偶尔也放过迷路的行人。", "他甚至想过随她去人间，做个普通樵夫。", "可妖终究是妖，旧债终究会追来。", "（待续）", "", [] ],
179: [ "后来，素娥生下一名童子。", "黄袍怪第一次准她独自去高老庄采药。", "她离开后再未回来，只托人送回半枚玉簪和一句话：", "“愿这孩子不要困在我们的旧劫里。”", "那位仙子是我的师娘。", "黄袍怪，是我血脉里最不愿承认的影子。", "（剧终）", "", [] ]
}[function() {
var t = e("scr_public").regionId(), n = a.stayDay, i = 0;
1e3 == t && (i = 1e3 + n[0]);
2e3 == t && (i = 2e3 + n[1]);
3e3 == t && (i = 3e3 + n[2]);
4e3 == t && (i = 4e3 + n[3]);
a.day > 143 && (i = a.day);
return i;
}()];
if ("undefined" == typeof i) cc.director.loadScene("rest"); else {
var c = i.pop();
i.pop();
if (0 == c.length || c[0] >= c[1]) {
var o = i.length, r = this, s = 1, l = cc.find("Canvas/Layout"), u = cc.find("Canvas/Determine");
window.setTimeout(function() {
r.creatText(l, "plot0", i[0]);
}, 500);
this.schedule(function() {
this.creatText(l, "plot" + s, i[s]);
s++;
}, 3, o - 2);
this.scheduleOnce(function() {
u.active = !0;
u.runAction(cc.fadeIn(2));
}, 3 * o);
} else cc.director.loadScene("rest");
}
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_public: "scr_public"
} ],
scr_eatButton: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c5f14lLVmRA6r8LzGX0k1Ik", "scr_eatButton");
cc.Class({
extends: cc.Component,
properties: {},
callBack: function() {
cc.director.loadScene("eat");
},
onLoad: function() {
this.node.on("touchstart", this.callBack, this);
}
});
cc._RF.pop();
}, {} ],
scr_eatUI: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "d3b81KfDgxIVoCTL1xk+Q03", "scr_eatUI");
cc.Class({
extends: cc.Component,
properties: {
itemUI: {
default: null,
type: cc.Prefab
}
},
itemContent: function() {
var t = this;
this.data = e("scr_data");
var n = 3 * this.data.orderTimes[1] - this.data.orderTimes[4];
1 == this.data.publicVar[1] && (n = 1 * this.data.orderTimes[1] - this.data.orderTimes[4]);
var a = {
0: {
itemName: " 蟠桃 ",
needDes: "※拥有：" + this.data.itemNum[0],
des: "※效果：斋粮+20，15%几率恢复1点道心",
ifEnough: function(t) {
e("scr_data").itemNum[0] > 0 && (cc.find("Canvas/Page/view/content/page_1/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = n.itemNum[0], o = i.maxHunger();
if (n.hunger < o) if (c >= 1) {
var r = "斋粮+20", s = 100 * Math.random();
n.itemNum[0] -= 1;
n.hunger += 20;
n.orderTimes[5] += 1;
if (s < 15) {
n.health += 1;
r += "，道心+1";
}
i.save();
a.playText("Canvas/notify", r + "！", 100);
t.delayCreatItemUI1();
} else a.playText("Canvas/notify", "法宝不足！", 100); else a.playText("Canvas/notify", "已经吃不下了！", 100);
}
},
1: {
itemName: " 斋饭 ",
needDes: "※拥有：" + this.data.itemNum2[0],
des: "※效果：斋粮+70",
ifEnough: function(t) {
e("scr_data").itemNum2[0] > 0 && (cc.find("Canvas/Page/view/content/page_1/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = n.itemNum2[0], o = i.maxHunger();
if (n.hunger < o) if (c >= 1) {
n.itemNum2[0] -= 1;
n.hunger += 70;
n.orderTimes[2] += 1;
i.save();
a.playText("Canvas/notify", "斋粮+70！", 60);
t.delayCreatItemUI1();
} else a.playText("Canvas/notify", "法宝不足！", 100); else a.playText("Canvas/notify", "已经吃不下了！", 100);
}
},
2: {
itemName: " 金疮药 ",
needDes: "※拥有：" + this.data.itemNum2[1],
des: "※效果：恢复" + (30 + this.data.orderTimes[0]) + "气血，且每次使用恢复量永久提高1点",
ifEnough: function(t) {
e("scr_data").itemNum2[1] > 0 && (cc.find("Canvas/Page/view/content/page_1/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 30 + n.orderTimes[0], o = n.itemNum2[1], r = n.role.hp, s = i.role.maxHp();
if (r < s) if (o >= 1) {
n.itemNum2[1] -= 1;
n.role.hp += c;
n.role.hp > s && (n.role.hp = s);
n.orderTimes[0] += 1;
i.save();
a.playText("Canvas/notify", "Hp+" + c, 60);
t.delayCreatItemUI1();
} else a.playText("Canvas/notify", "法宝不足！", 100); else a.playText("Canvas/notify", "气血已达最大值！", 100);
}
},
3: {
itemName: " 安神香 ",
needDes: "※拥有：" + this.data.itemNum2[7] + "（你当前香瘾为" + n + "%）",
des: "※效果：减少1点道心。恢复全部的法力、斋粮和气血！解除【香瘾】BUFF！(慎用)",
ifEnough: function(t) {
e("scr_data").itemNum2[7] > 0 && (cc.find("Canvas/Page/view/content/page_1/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = (n.orderTimes[1], 
n.itemNum2[7]);
n.orderTimes[1];
if (c >= 1) {
n.health += 1;
n.itemNum2[7] -= 1;
n.energy = i.maxEnergy();
n.role.hp = i.role.maxHp();
n.hunger = i.maxHunger();
n.orderTimes[1] += 1;
n.skillLv[4] = 0;
n.itemNum[7] += 1;
i.save();
a.playText("Canvas/notify", "道心-1，法力/气血/斋粮恢全恢复！获得残香*1", 100);
t.delayCreatItemUI1();
} else a.playText("Canvas/notify", "法宝不足！", 100);
}
},
4: {
itemName: " 猴儿酒 ",
needDes: "※拥有：" + this.data.itemNum2[12],
des: "※效果：恢复30法力，并获得一个【铜铃】。10%几率，开罐有奖！30%几率获得【暴躁】状态（劫伤增加30%，战后一定几率消失）",
ifEnough: function(t) {
e("scr_data").itemNum2[12] > 0 && (cc.find("Canvas/Page/view/content/page_2/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
for (var z = 0; z <= n.talkTimes[0]; z++) if (n.itemNum2[12] >= 1) {
var c = 100 * Math.random(), o = 100 * Math.random(), r = "法力+30，获得【铜铃】*1";
n.itemNum2[12] -= 1;
n.energy += 30;
n.itemNum[2] += 1;
if (c >= 90 && c < 97) {
n.itemNum2[12] += 1;
r += "，恭喜再来一瓶！";
}
if (c >= 97) {
n.money += 10;
r += "，恭喜获得1两大奖！";
}
if (o < 30) {
n.buffState[0] = 1;
r += "，获得【暴躁】！";
}
i.save();
a.playText("Canvas/notify", r, 100);
t.delayCreatItemUI2();
} else a.playText("Canvas/notify", "法宝不足！", 100);
}
}
};
return a;
},
creatPrefab: function(e, t) {
var n = cc.instantiate(this.itemUI), a = this.itemContent()[e], i = a.button, c = "item" + e;
n.name = c;
n.getChildByName("button").getChildByName("name").getComponent("cc.Label").string = a.itemName;
n.getChildByName("need").getComponent("cc.Label").string = a.needDes;
n.getChildByName("des").getComponent("cc.Label").string = a.des;
n.getChildByName("button").getChildByName("name").getComponent("cc.Button").scheduleOnce(function() {
n.getChildByName("button").getChildByName("name").on("touchstart", i, this);
}, .4);
cc.find("Canvas/Page/view/content").getChildByName(t).addChild(n);
"undefined" != typeof a.ifEnough && a.ifEnough(c);
},
creatItemUI1: function() {
this.initText();
cc.find("Canvas/Page/view/content/page_1").removeAllChildren();
for (var e = 0; e <= 3; e++) this.creatPrefab(e, "page_1");
},
creatItemUI2: function() {
this.initText();
cc.find("Canvas/Page/view/content/page_2").removeAllChildren();
for (var e = 4; e <= 4; e++) this.creatPrefab(e, "page_2");
},
creatItemUI3: function() {
this.initText();
cc.find("Canvas/Page/view/content/page_3").removeAllChildren();
for (var e = 8; e <= 11; e++) this.creatPrefab(e, "page_3");
},
initText: function() {
var t = e("scr_data"), n = e("scr_public");
cc.find("Canvas/hunger").getComponent("cc.Label").string = "斋粮：" + t.hunger + "/" + n.maxHunger() + "  法力：" + t.energy + "/" + n.maxEnergy() + "  气血：" + t.role.hp + "/" + n.role.maxHp();
},
delayCreatItemUI1: function() {
this.scheduleOnce(this.creatItemUI1, .1);
},
delayCreatItemUI2: function() {
this.scheduleOnce(this.creatItemUI2, .1);
},
delayCreatItemUI3: function() {
this.scheduleOnce(this.creatItemUI3, .1);
},
onLoad: function() {
this.creatItemUI1();
this.creatItemUI2();
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_effect: "scr_effect",
scr_public: "scr_public"
} ],
scr_effect: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "25c8dKmEHlHoYjQ6qvBKaef", "scr_effect");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var e = this, n = {
playText: function(e, t, n) {
var a = 0;
cc.game.startPlay && window.clearTimeout(cc.game.startPlay);
(function i() {
if (null != cc.find(e)) if (a <= t.length) {
var c = t.slice(0, a++);
cc.find(e).getComponent("cc.Label").string = c;
cc.game.startPlay = window.setTimeout(i, n);
} else cc.game.startPlay && window.clearTimeout(cc.game.startPlay);
})();
},
textZoon: function(e) {
var t = cc.sequence(cc.scaleTo(.2, 1.3), cc.scaleTo(.2, 1));
cc.find(e).runAction(t);
},
blink2: function(e) {
var t = cc.sequence(cc.tintBy(.1, 0, -200, -200), cc.tintBy(.1, 0, 200, 200));
cc.find(e).runAction(t);
},
blink: function(t) {
var n = 0;
e.schedule(function() {
var e = n % 2;
cc.find(t).color = new cc.Color(255, 255 - 200 * e, 255 - 200 * e);
n++;
}, .06, 4);
},
textZoon2: function(e) {
cc.find(e).setScale(0, 0);
var t = cc.sequence(cc.scaleTo(.2, 1.3), cc.scaleTo(.1, 1));
cc.find(e).runAction(t);
},
attackEfect1: function() {
var e = cc.find("Canvas/Text").children, t = cc.find("Canvas/Fight").children;
for (var n in e) {
var a = 500 * Math.random() - 300, i = 1e3 * Math.random() - 500;
e[n].x = a;
e[n].y = i;
}
for (var c in t) {
var o = 500 * Math.random() - 300, r = 1e3 * Math.random() - 500;
t[c].x = o;
t[c].y = r;
}
}
};
t.exports = n;
}
});
cc._RF.pop();
}, {} ],
scr_end: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "0fdab+YcARFVIOBpUAMxsNQ", "scr_end");
cc.Class({
extends: cc.Component,
properties: {},
creatText: function(e, t, n) {
var a = new cc.Node(t);
a.addComponent(cc.Label);
a.parent = e;
a.setPosition(0, 0);
a.opacity = 0;
a.runAction(cc.fadeIn(3));
a.color = new cc.Color(255, 255, 255);
a.getComponent(cc.Label).overflow = 3;
a.getComponent(cc.Label).horizontalAlign = 0;
a.setContentSize(600, 300);
a.getComponent(cc.Label).string = n;
a.getComponent(cc.Label).lineHeight = 50;
a.getComponent(cc.Label).fontSize = 36;
},
onLoad: function() {
var t = [ "正式闭关制作西行已有大半年，我并不担心自己的生存问题，但是对于能否长期做下去却感到有些焦虑。", "国产独立西行的发展其实上是取决于取经人（或者说市集），而不是制作者或者戏台（有看客才会有戏台，有戏台才会有说书人...）。虽然可能短期内不会有太大问题，但是能否长期、甚至终身坚持，我不是很确定，因为有太多难以控制的因素掺杂。不过，至少目前我会坚持下去——我的目标是打造文字西行精品品牌。", "如果你真的喜欢独立西行，恳求您推荐给周围的人————我真的需要你的帮助。", "我是西行。（2017.10.1）" ], n = (t.length, 
this), a = e("scr_data2"), i = e("scr_data"), c = 0, o = cc.find("Canvas/Show"), r = cc.find("Canvas/choice"), s = r.getChildByName("determine1"), l = r.getChildByName("determine2"), u = e("scr_public");
(function() {
var e = i.choice[5] + i.publicVar[7];
if (0 == a.gameData[3]) {
a.gameData[1] += 1;
a.gameData[3] = 1;
}
e >= 799 && (a.gameData[5] = 1);
u.save2();
})();
e("scr_data2").gameData[4] = 0;
e("scr_public").save2();
function p() {
n.creatText(o, "plot" + c, t[c]);
c++;
}
(function() {
window.setInterval(function() {
var t = {
2000: function() {
p();
},
5000: function() {
p();
},
8000: function() {
p();
},
11000: function() {
p();
},
15000: function() {
(function() {
r.active = !0;
r.runAction(cc.fadeIn(2));
s.on("touchstart", f, this);
l.on("touchstart", d, this);
})();
}
};
"undefined" != typeof t[e += 1e3] && t[e]();
}, 1e3);
var e = 0;
})();
function f() {
u.save2();
cc.director.loadScene("start");
}
function d() {
u.save2();
JSON.parse(cc.sys.localStorage.getItem("userData")) && cc.sys.localStorage.removeItem("userData");
cc.director.loadScene("start");
}
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_data2: "scr_data2",
scr_public: "scr_public"
} ],
scr_enemy: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "9ca7eoc05dELIgnx18JSNGI", "scr_enemy");
function a(e, t, n) {
t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
}) : e[t] = n;
return e;
}
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var n, i = e("scr_public"), c = e("scr_data"), o = {
maxHp: i.role.maxHp(),
att: i.role.att(),
def: i.role.def()
}, r = {
0: {
name: "盘丝洞小狐妖",
lv: 99,
hp: 400,
maxHp: 400,
att: 0,
def: 0,
publicVar: 0,
escapeRate: 10,
enemyEscapeRate: 0,
lostHealth: 30,
achieve: 0,
getAtt: 1,
drop: [ [ 50, 1, 2, 1 ], [ 20, 2, 1, 1 ], [ 5, 3, 1, 1 ], [ 100, 99, 1, 3 ] ],
des: "妖风骤起，草木皆惊！",
skill: function() {
c.money -= 1;
c.role.hp -= 1;
return "【你被偷走0.1两,hp-1】！";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: function() {
e("scr_data").money -= 1;
return "被抢0.1两！";
}
},
1: {
name: "血翅蚊妖",
lv: 1,
hp: 45,
maxHp: 45,
att: 0,
def: 0,
publicVar: 0,
escapeRate: 100,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 50, 0, 1, 1 ], [ 50, 1, 1, 2 ] ],
des: "妖风骤起，草木皆惊！",
skill: function() {
var t = Math.max(5 - o.def, 0);
e("scr_data").role.hp -= t;
this.hp += t;
return "【你被吸取" + t + "点气血！】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.kills[0] += 1;
return "【你已超度" + t.kills[0] + "只蚊妖】";
},
lostEvent: void 0
},
2: {
name: "捣药月兔",
lv: 3,
hp: 255,
maxHp: 255,
att: 0,
def: 5,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 40,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 3, 1, 1 ] ],
des: "妖风骤起，草木皆惊！",
skill: function() {
var t = e("scr_data");
this.publicVar += 1;
t.itemNum[0] += 1;
return "【" + this.name + "向你吐出一个蟠桃！你受到0点劫伤】你获得【蟠桃*1】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
3: {
name: "碧鳞小蛇妖",
lv: 5,
hp: 200,
maxHp: 200,
att: 23,
def: 0,
publicVar: 0,
escapeRate: 50,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 50, 3, 1, 1 ], [ 60, 1, 1, 2 ] ],
des: "妖风骤起，草木皆惊！",
skill: void 0,
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
4: {
name: "青鳞蛇将（精英）",
lv: 8,
hp: 315,
maxHp: 315,
att: 0,
def: 0,
publicVar: 0,
escapeRate: 60,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 1,
getAtt: 2,
drop: [ [ 100, 3, 1, 1 ], [ 100, 1, 1, 2 ], [ 5, 27, 1, 2 ] ],
des: "草丛中碧光一闪，蛇信如针。",
skill: function() {
var t = Math.max(11 - o.def, 0);
this.publicVar += 1;
var n = t * this.publicVar;
e("scr_data").role.hp -= n;
return "【中毒：每回合损失" + n + "点气血（" + this.publicVar + "层）】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
21: {
name: "黄风岭蚊妖阵",
lv: 8,
hp: 315,
maxHp: 315,
att: 0,
def: 0,
publicVar: 0,
escapeRate: 50,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 50, 0, 1, 1 ], [ 100, 1, 1, 2 ] ],
des: "嗡声成阵，像有人在耳边念咒。",
skill: function() {
var t = Math.max(32 - o.def, 0);
e("scr_data").role.hp -= t;
return "【" + this.name + "使用「上下」，你损失" + t + "点气血】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.kills[0] += 2;
return "【你已超度" + t.kills[0] + "只蚊妖】";
},
lostEvent: void 0
},
22: {
name: "黑风岭巡山小妖",
lv: 11,
hp: 410,
maxHp: 410,
att: 43,
def: 0,
publicVar: 0,
escapeRate: 50,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 50, 99, 2, 3 ], [ 100, 1, 1, 2 ] ],
des: "“哪来的行者，敢笑本洞威风？”",
skill: void 0,
defSkill: function() {
if (100 * Math.random() < 25) {
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 9999;
return "【" + this.name + "使用「格挡」！】";
}
return "";
},
winEvent: void 0,
lostEvent: void 0
},
23: {
name: "破钵化缘僧",
lv: 16,
hp: 575,
maxHp: 575,
att: 63,
def: 15,
publicVar: 0,
escapeRate: 60,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 50, 0, 1, 2 ], [ 100, 1, 1, 2 ], [ 5, 23, 1, 2 ] ],
des: "“此路归我化缘，你的钵也得留下。”",
skill: void 0,
defSkill: function() {
var t = e("scr_public"), n = t.role.att() - t.role.def();
if (100 * Math.random() < 25) {
e("scr_data").role.hp -= n;
return "【" + this.name + "使用「反震」，你损失" + n + "点气血！】";
}
return "";
},
winEvent: void 0,
lostEvent: void 0
},
24: {
name: "黑松林山魈王（精英）",
lv: 20,
hp: 750,
maxHp: 750,
att: 0,
def: 20,
publicVar: 0,
escapeRate: 80,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 0, 3, 3 ], [ 100, 1, 1, 2 ], [ 5, 17, 1, 2 ] ],
des: "“没拜山头，也敢开我洞府宝篓？”",
skill: function() {
var t = e("scr_data"), n = parseInt(Math.max(.25 * this.hp - o.def, 0));
t.role.hp -= n;
return "【" + this.name + "使用「咆哮」，你受到" + n + "点劫伤】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
25: {
name: "女儿国红缨卫",
lv: 65,
hp: 2145,
maxHp: 2145,
att: 0,
def: 0,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 0,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 1, 3 ], [ 100, 1, 1, 2 ], [ 15, 21, 1, 2 ] ],
des: "“大胆行者，女儿国关牒可曾验过？”",
skill: function() {
var t = e("scr_data"), n = 100 * Math.random();
t = e("scr_data");
this.publicVar += 1;
if (this.publicVar <= 3) {
if (n < 75) return "【" + this.name + "操起雷杖，向你打来！但是被你躲开啦~】";
t.role.hp -= 999;
return "【你被雷杖击中！损失999点气血！】";
}
this.hp -= 9999;
return "";
},
defSkill: void 0,
winEvent: function() {
return "【" + this.name + "气急败坏！一棍打在自己脑门上，晕了过去\n_8(:з」∠)_】";
},
lostEvent: function() {
var t = e("scr_data");
e("scr_public");
t.role.hp = o.maxHp;
return "【你被带到天庭值房，女施主给你包扎了下劫伤。然后，被放了出来...气血全恢复！】";
}
},
26: {
name: "黑风山守财鬼",
lv: 17,
hp: 545,
maxHp: 545,
att: 0,
def: 40,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 40,
lostHealth: 0,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 10, 3 ] ],
des: "“贫道只有金山一座，真没半文散钱。”",
skill: function() {
e("scr_data").money += 1;
return "【" + this.name + "丢了你0.1两，准备要溜了！】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
27: {
name: "狮驼岭小钻风队",
lv: 45,
hp: 1535,
maxHp: 1535,
att: 99,
def: 0,
publicVar: 0,
escapeRate: 30,
enemyEscapeRate: 0,
lostHealth: 0,
achieve: 3,
getAtt: 1,
drop: [ [ 100, 11, 2, 1 ] ],
des: "“大王有令，此岭不许凡人歇脚！”",
skill: function() {
var t = e("scr_data"), n = parseInt(4.9 * Math.random());
if (0 == n) {
var a = 2 * this.att;
t.role.hp -= a;
return "【巡山小钻风使用「狼皮靴」，踢中了你的屁股，你损失" + a + "点气血！】";
}
if (1 == n) {
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= 30;
return "【巡山小钻风使用「破布靴」，踢中了你的腹部，你降低30点护身力！】";
}
if (2 == n) {
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= 30;
return "【巡山小钻风使用「玄铁靴」，踢中了你的胳膊，你降低30点降妖力！】";
}
if (3 == n) {
this.publicVar += 2;
a = this.att * this.publicVar;
t.role.hp -= a;
return "【巡山小钻风使用「碎骨靴」，踢中了你的脸部，你的脸上开始流血，损失" + a + "点气血！】";
}
if (4 == n) {
a = 5 * this.att;
t.role.hp -= a;
return "【巡山小钻风使用「破风靴」，踢中了你的蛋蛋，你受到" + a + "点劫伤！】";
}
},
defSkill: function() {
var e = parseInt(.3 * (this.maxHp - this.hp)), t = 100 * Math.random(), n = "";
this.hp += e;
if (t < 40) {
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 9999;
n = "【巡山小钻风使用「护法盾」！】";
}
return "【巡山小钻风使用「回春术」，恢复" + e + "点气血】" + n;
},
winEvent: void 0,
lostEvent: function() {
var t = e("scr_data");
t.itemNum[7] > 0 && (t.itemNum[7] -= 1);
return "【你被抢走1个..残香..】";
}
},
31: {
name: "花果山偷桃猴",
lv: 16,
hp: 575,
maxHp: 575,
att: 63,
def: 17,
publicVar: 0,
escapeRate: 50,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 0, 1, 1 ], [ 100, 1, 1, 2 ] ],
des: "妖风骤起，草木皆惊！",
skill: function() {
var t = 100 * Math.random(), n = e("scr_data");
if (t < 15) {
this.enemyEscapeRate += 20;
if (n.itemNum[0] >= 1) {
n.itemNum[0] -= 1;
this.publicVar += 1;
}
return "【你被偷走「蟠桃」*1】！";
}
return "";
},
defSkill: void 0,
winEvent: function() {
e("scr_data").itemNum[0] += this.publicVar;
return "【你抢回被偷的蟠桃】";
},
lostEvent: void 0
},
32: {
name: "高老庄猪刚鬣",
lv: 24,
hp: 1100,
maxHp: 1100,
att: 0,
def: 40,
publicVar: 0,
escapeRate: 50,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 3, 1, 1 ], [ 100, 1, 1, 2 ] ],
des: "妖风骤起，草木皆惊！",
skill: function() {
var t = 100 * Math.random(), n = e("scr_data");
if (t < 20) {
var a = Math.max(3 * (120 - o.def), 0);
n.role.hp -= a;
return "【猪妖刚鬣使用「冲撞」！你被猪妖撞飞啦！你损失" + a + "点气血！】";
}
this.hp -= 120;
return "【猪妖刚鬣使用「冲撞」！撞到树上啦！猪妖刚鬣损失120点气血！】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
33: {
name: "黑市丹童",
lv: 32,
hp: 999,
maxHp: 999,
att: 140,
def: 0,
publicVar: 0,
escapeRate: 60,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 1, 2, 2 ] ],
des: "“紫金葫芦炼剩的丹渣，要不要尝一粒？”",
skill: function() {
var t = 100 * Math.random(), n = e("scr_data");
if (t < 30) {
if (n.itemNum[1] > 0) {
this.publicVar += 1;
n.itemNum[1] -= 1;
this.enemyEscapeRate += 20;
return "【你的金疮药被偷啦！" + this.name + "准备要溜！】";
}
return "";
}
return "";
},
defSkill: function() {
if (30 < 100 * Math.random()) {
var e = parseInt(.1 * this.maxHp);
this.hp += e;
this.def += 20;
return "【" + this.name + "使用「猥琐2」，护身力+20，气血+" + e + "】";
}
return "";
},
winEvent: function() {
e("scr_data").itemNum2[1] += this.publicVar;
return "【你抢回全部金疮药】";
},
lostEvent: void 0
},
34: {
name: "落魄剑修",
lv: 45,
hp: 1535,
maxHp: 1535,
att: 0,
def: 46,
publicVar: 0,
escapeRate: 70,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 50, 4, 2, 1 ], [ 50, 1, 2, 1 ], [ 100, 1, 2, 2 ], [ 5, 26, 1, 2 ] ],
des: "“剑不饮妖血，怎敢称西行？”",
skill: function() {
var t = e("scr_data"), n = parseInt(1.5 * (212 - o.def)), a = parseInt(.15 * this.hp);
this.hp -= a;
t.role.hp -= n;
return "【" + this.name + "使用「拼命2」，你损失" + n + "点气血，" + this.name + "损失" + a + "点气血】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
35: {
name: "黑风山熊罴精（精英）",
lv: 60,
hp: 2025,
maxHp: 2025,
att: 110,
def: 60,
publicVar: 0,
escapeRate: 80,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 3, 2, 1 ], [ 100, 1, 2, 2 ] ],
des: "黑风卷地，熊罴精踏碎山石而来！（「咆哮」：自身当前血量越高，劫伤越高）",
skill: function() {
var t = e("scr_data"), n = parseInt(Math.max(.2 * this.hp - o.def, 0));
t.role.hp -= n;
return "【黑熊妖精使用「咆哮」，你受到" + n + "点劫伤】";
},
defSkill: function() {
this.def += 10;
return "【黑熊妖精使用「霸气护体」，增加10点护身力】";
},
winEvent: void 0,
lostEvent: void 0
},
36: {
name: "五庄观人参果树",
lv: 999,
hp: 99999,
maxHp: 99999,
att: 0,
def: 0,
publicVar: 0,
escapeRate: 100,
enemyEscapeRate: 1,
lostHealth: 0,
achieve: 0,
getAtt: 1,
drop: [],
des: "“莫摇莫打，果儿还没熟呢~”",
skill: function() {
this.publicVar += 1;
if (5 == this.publicVar) {
this.hp -= 999999;
return "【人参果树自杀了！】";
}
return "【人参果树正在哭~】";
},
defSkill: void 0,
winEvent: function() {
var t = this.maxHp - this.hp - 999999, n = Math.max(Math.min(Math.round(t / 500 + 1), 4), 1);
e("scr_data").itemNum[0] += n;
return "【人参果树自杀了！你对人参果树造成" + t + "点劫伤，获得【蟠桃】*" + n + "】";
},
lostEvent: void 0
},
41: {
name: "火云洞童子军",
lv: 28,
hp: 999,
maxHp: 999,
att: 0,
def: 72,
publicVar: 0,
escapeRate: 100,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 0, 1, 1 ] ],
des: "“快报大王！有个取经人闯进来了！”",
skill: function() {
this.publicVar += 1;
var e = Math.pow(this.publicVar, 2), t = 20 * e, n = Math.pow(this.publicVar + 1, 2) - e;
c.role.hp -= t;
this.hp += 50 * n;
return "【" + e + "个红孩儿童子队向你扔山石！你损失" + t + "点气血！（" + n + "个新孩子加入斗法！）】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
42: {
name: "无目夜叉",
lv: 40,
hp: 1370,
maxHp: 1370,
att: 0,
def: 180,
publicVar: 0,
escapeRate: 60,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 80, 0, 1, 1 ] ],
des: "“把我的眼珠还来，我拿阴钱与你换！”",
skill: function() {
var e = 100 * Math.random(), t = 4 * Math.random() + 2;
if (e < 70) {
this.publicVar += 1;
if (this.publicVar < t) {
if (100 * Math.random() < 50) {
c.money += 1;
return "【无目夜叉给了你1文盘缠！】";
}
var n = 599 - o.def;
c.role.hp -= n;
return "【“还我眼睛！”。无目夜叉咬了你一口，你损失" + n + "点气血！】";
}
n = 599 - o.def;
c.role.hp -= n;
return "【“还我眼睛！”。无目夜叉咬了你一口，你损失" + n + "点气血！】";
}
this.hp -= 200;
return "【“啊！~不要杀我！我没偷你们的东西！”。无目夜叉气血-200！】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
43: {
name: "画皮经贩",
lv: 50,
hp: 1700,
maxHp: 1700,
att: 0,
def: 120,
publicVar: 0,
escapeRate: 60,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 60, 99, 2, 3 ], [ 40, 1, 1, 2 ] ],
des: "“新拓的妖皮经卷，要不要翻两页？”",
skill: function() {
var e = 100 * Math.random();
if (e < 20) {
c.money > 0 && (c.money -= 1);
return "【掌柜向你飞出一张《夫妻成长日记》。你损失1文盘缠！】";
}
if (e < 80) {
var t = 399 - o.def;
c.role.hp -= t;
return "【掌柜向你甩出一把「老王飞刀」。你损失" + t + "点气血！】";
}
c.role.hp += 99;
return "【掌柜向你飞出一张《爱拼才会赢》。你恢复99点气血！】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
44: {
name: "黑水河鼍龙",
lv: 70,
hp: 2385,
maxHp: 2385,
att: 0,
def: 167,
publicVar: 0,
escapeRate: 70,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 2, 3 ], [ 5, 27, 1, 2 ] ],
des: "“黑水河三百里，皆归本王翻浪！”",
skill: function() {
c.role.hp -= 382;
return "【阿龙使用「空气拳！」你损失382点气血！】";
},
defSkill: function() {
var e = parseInt(382 - .3 * o.att);
this.hp += e;
return "【阿龙使用「放气治疗！」，恢复" + e + "点气血！】";
},
winEvent: void 0,
lostEvent: void 0
},
45: {
name: "盘丝洞蛛女",
lv: 30,
hp: 1040,
maxHp: 1040,
att: 0,
def: 99,
publicVar: 0,
escapeRate: 60,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 2, 3 ] ],
des: "“小行者，来盘丝洞饮杯花露嘛~”",
skill: function() {
if (c.money >= 1) {
c.money -= 1;
return "【站街妹在你身上蹭了蹭，你被摸走1文盘缠！】！";
}
var e = Math.max(600 - o.def, 0);
c.role.hp -= e;
this.enemyEscapeRate += 100;
return "【“蛤？没盘缠！？...来人呀——！抓小流氓啦——！”你损失" + e + "点气血！】";
},
defSkill: function() {
this.escapeRate -= 10;
return "【站街使用「拖拽！」你遁走几率-10%！】！";
},
winEvent: function() {
return "【“我说没偷你的盘缠就是没偷，你想怎么着？”】！";
},
lostEvent: void 0
},
1001: {
name: "金环蛇使",
lv: 70,
hp: 2385,
maxHp: 2385,
att: 0,
def: 150,
publicVar: 0,
escapeRate: 50,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 80, 3, 1, 1 ] ],
des: "金环贴地游走，毒雾从石缝里渗出。",
skill: function() {
var t = Math.max(220 - o.def, 0) + 30;
this.publicVar += 1;
var n = t * this.publicVar;
e("scr_data").role.hp -= n;
return "【中毒：每回合损失" + n + "点气血（" + this.publicVar + "层）】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
1002: {
name: "摄魂铃女",
lv: 90,
hp: 3075,
maxHp: 3075,
att: 400,
def: 200,
publicVar: 0,
escapeRate: 40,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 2, 3 ] ],
des: "铃声一响，魂魄都慢了半拍。",
skill: function() {
var e = 100 * Math.random();
if (e < 30) {
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= parseInt(.5 * o.att);
return "【铃女使用「挠痒痒」，你笑得像个二愣子，降妖力下降一半！】";
}
if (e < 70) {
if (c.money > 0) {
c.money -= 1;
return "【铃女使用「光速贴近」，你损失0.1两！】";
}
this.enemyEscapeRate += 100;
return "【铃女使用「光溜~(光速溜走)」！】";
}
this.def += 60;
return "【铃女使用「喵盾~」，护身力+60！】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
1003: {
name: "黄风岭旧行者",
lv: 120,
hp: 4035,
maxHp: 4035,
att: 0,
def: 280,
publicVar: 0,
escapeRate: 100,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 50, 0, 1, 2 ], [ 100, 1, 1, 2 ], [ 5, 26, 1, 2 ] ],
des: "“小行者，借你一口旧风暖暖胆。”",
skill: function() {
var e = Math.max(parseInt(650 + 50 * this.publicVar - .5 * o.def), 0);
c.role.hp -= e;
return "【老行者使用「穿心.气合」，你损失" + e + "点气血，老行者降妖力提高！】";
},
defSkill: function() {
var t = e("scr_public").role.att();
if (100 * Math.random() < 30) {
c.role.hp -= t;
return "【老行者使用「反震.碎骨」，你损失" + t + "点气血！】";
}
return "";
},
winEvent: void 0,
lostEvent: void 0
},
2001: {
name: "狸奴小妖",
lv: 105,
hp: 3599,
maxHp: 3599,
att: 0,
def: 250,
publicVar: 0,
escapeRate: 40,
enemyEscapeRate: 8,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 30, 0, 1, 1 ], [ 30, 0, 1, 1 ], [ 30, 0, 1, 1 ], [ 30, 0, 1, 1 ], [ 3, 21, 1, 2 ] ],
des: "“喵呜，借你行囊睡一觉可好？”",
skill: function() {
var e = parseInt(.2 * c.role.hp + 50);
c.role.hp -= e;
return "【喵妹使用「撩裙」，你损失" + e + "点气血(当前气血的20%)！】";
},
defSkill: function() {
c.role.hp -= 233;
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= 99;
return "【喵妹使用「比心」，你降低99点降妖力，233点气血！】";
},
winEvent: function() {
return "“呜呜呜~我只是想找个人玩玩嘛~(ಥ_ಥ)”";
},
lostEvent: function() {
return "“帅锅，记得再来洞府坐坐哈~❥(^_-)”";
}
},
2002: {
name: "聚宝盆妖道",
lv: 125,
hp: 8125,
maxHp: 8125,
att: 0,
def: 297,
publicVar: 0,
escapeRate: 40,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 4, 3 ] ],
des: "“贫道精通聚宝秘术，一文可生万两。”",
skill: function() {
this.publicVar += 1;
if (this.publicVar % 3 == 0) {
if (c.money >= 4) {
c.money -= 4;
c.itemNum[4] += 1;
this.enemyEscapeRate += 30;
return "【分析师使用「嘴强斗战胜佛」，你消费了0.4两，获得赠品「袈裟布」*1！】";
}
c.itemNum[4] -= 3;
c.itemNum[4] < 0 && (c.itemNum[4] = 0);
this.enemyEscapeRate += 100;
return "【“哼，你可知贫道时辰多贵？把东西还来！”。你失去「蟠桃」*3】";
}
if (c) {
this.escapeRate -= 30;
this.enemyEscapeRate += 5;
return "【分析师使用「抱大腿」，你遁走率-30%！】";
}
},
defSkill: function() {
c.itemNum[0] += 1;
var e = parseInt(.1 * o.att);
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= e;
return "【分析师丢给你一个蟠桃，你获得「蟠桃」*1，你降妖力降低" + e + "！】";
},
winEvent: function() {
return "【“哼！不买就罢了~你的盘缠我不还啦~有本事去告天庭呀~”】";
},
lostEvent: void 0
},
2003: {
name: "车迟国虎力大仙",
lv: 155,
hp: 5155,
maxHp: 5155,
att: 0,
def: 360,
publicVar: 0,
escapeRate: 30,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 0,
getAtt: 1,
drop: [ [ 30, 7, 1, 1 ], [ 30, 1, 1, 2 ], [ 30, 1, 1, 2 ], [ 5, 17, 1, 2 ] ],
des: "“敢与本大仙赌一场祈雨法么？”",
skill: function() {
this.publicVar += 1;
if (this.publicVar % 3 != 0) {
var e = parseInt(o.def), t = parseInt(.2 * this.def * this.publicVar);
c.role.hp -= e + t;
return "【虎力大仙使用「黑虎袭胸！」，你损失" + e + "，附加" + t + "点流血！】";
}
var n = parseInt(this.def * this.publicVar);
c.role.hp -= n;
return "【虎力大仙使用「绝活！千年杀！」，你损失" + n + "点气血！】";
},
defSkill: function() {
var e = parseInt(.5 * this.def);
c.role.hp -= e;
this.def += 99;
return "【虎力大仙使用「白鹤起舞」，护身力增加99，你受到" + e + "反弹劫伤！】";
},
winEvent: function() {
return "“可以！论骚气，我虎力大仙服！”";
},
lostEvent: function() {
return "“你能拿我虎力大仙怎么办？”";
}
},
2004: {
name: "波月洞黄袍怪",
lv: 195,
hp: 6470,
maxHp: 6470,
att: 1199,
def: 480,
publicVar: 0,
escapeRate: 40,
enemyEscapeRate: 0,
lostHealth: 3,
achieve: 0,
getAtt: 1,
drop: [ [ 50, 0, 1, 2 ], [ 10, 14, 1, 2 ] ],
des: "“入我波月洞，不献袈裟便献命。”",
skill: function() {
if (480 == this.def) {
var e = parseInt(this.publicVar * o.att * .2 + this.att - o.def), t = parseInt(.08 * o.def);
c.role.hp -= e;
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= t;
return "【黄袍怪使用「龙啸」！你受到" + e + "点劫伤，护身力-" + t + "！】";
}
return "";
},
defSkillfunction: function() {
if (100 * Math.random() < 25) {
this.publicVar += 1;
if (480 == this.def) {
this.def += 480;
this.att -= 480;
return "【黄袍怪启动「护法姿态」，护身力+480，降妖力-480，气势+1！】";
}
this.def += 480;
this.att -= 680;
return "【黄袍怪启动「降魔姿态」，护身力-480，降妖力+480，气势+1！】";
}
if (this.def > 480) {
var e = parseInt(this.publicVar * o.def * .4 + .2 * this.def), t = parseInt(.08 * o.att);
c.role.hp -= e;
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= t;
return "【黄袍怪使用「反震」！你受到" + e + "点劫伤，降妖力-" + t + "！】";
}
return "";
},
winEvent: function() {
c.money += 5;
return "“大哥！往后我就跟你混了！”【获得0.5两】";
},
lostEvent: function() {
c.money -= parseInt(.1 * c.money);
return "“你永远都学不乖？”【你损失10%盘缠！】";
}
},
2005: {
name: "翠云山铁扇公主",
lv: 85,
hp: 2850,
maxHp: 2850,
att: 0,
def: 250,
publicVar: 0,
escapeRate: 50,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 1,
getAtt: 1,
drop: [ [ 100, 99, 2, 3 ], [ 6, 27, 1, 2 ], [ 6, 26, 1, 2 ] ],
des: "“芭蕉扇一开，八百里火焰都听我号令。”「特注：随天数成长型妖王」",
skill: function() {
var e = c.day;
if (e < 120) {
var t = cc.find("Event/scr_fight").getComponent("scr_fight").correct[1], n = parseInt(4 * e + .05 * o.maxHp - o.def - t);
c.role.hp -= n;
return "【仙子使用「晴空霹雳.一段！」，你受到" + n + "点劫伤】";
}
if (e < 150) {
var a = 2 * (c.day - 90);
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= a;
t = cc.find("Event/scr_fight").getComponent("scr_fight").correct[1], n = parseInt(4 * e + .05 * o.maxHp - o.def - t);
c.role.hp -= n;
return "【仙子使用「晴空霹雳.二段！」，你受到" + n + "点劫伤，护身力减少" + a + "！】";
}
a = parseInt(.1 * o.maxHp);
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= a;
var i = parseInt(.1 * o.maxHp);
t = cc.find("Event/scr_fight").getComponent("scr_fight").correct[1], n = parseInt(4 * e + .05 * o.maxHp - o.def - t);
c.role.hp -= n;
this.hp += a;
return "【仙子使用「晴空霹雳.三段！」，你受到" + n + "点劫伤，护身力减少" + a + "，仙子恢复" + i + "点气血！】";
},
defSkill: function() {
var e = 100 * Math.random(), t = c.day - 90;
if (t < 40) {
if (e < t) {
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 999999;
return "【仙子使用「幻影旋风.一段！」】";
}
return "";
}
if (t < 65) {
if (e < t) {
var n = parseInt(.3 * o.def);
this.def += n;
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 999999;
return "【仙子使用「幻影旋风.二段！」，仙子增加" + n + "点护身力！】";
}
return "";
}
if (e < t) {
n = parseInt(.3 * o.def);
var a = parseInt(.7 * o.att);
this.def += n;
c.role.hp -= a;
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 999999;
return "【仙子使用「幻影旋风.三段！」，仙子增加" + n + "点护身力！你受到" + a + "点反弹劫伤！】";
}
return "";
},
winEvent: function() {
return "“我一定会更强的！”";
},
lostEvent: void 0
},
3001: {
name: "枯松涧吸血蝠妖",
lv: 120,
hp: 12e3,
maxHp: 12e3,
att: 360,
def: 140,
publicVar: 0,
escapeRate: 20,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 16, 1, 2 ], [ 100, 16, 1, 2 ] ],
des: "倒挂的黑影齐齐睁眼，腥风扑面。",
skill: function() {
var t = Math.max(parseInt(.5 * this.att), 0);
e("scr_data").role.hp -= t;
this.hp += t;
return "【你被吸取" + t + "点气血！】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
3002: {
name: "盘丝洞七彩蛛姬",
lv: 150,
hp: 15e3,
maxHp: 15e3,
att: 450,
def: 175,
publicVar: 0,
escapeRate: 10,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 16, 1, 2 ], [ 100, 16, 1, 2 ] ],
des: "",
skill: function() {
if (100 * Math.random() < 30) {
this.escapeRate -= 10;
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= parseInt(.25 * o.att);
return "【" + this.name + "使用「束缚」，你降妖力降低25%，遁走率降低10%！】";
}
return "【" + this.name + "使用「束缚」，但是被你躲开啦！】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
3003: {
name: "黑风蛇将",
lv: 190,
hp: 19999,
maxHp: 19999,
att: 599,
def: 221,
publicVar: 0,
escapeRate: 0,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 16, 1, 2 ], [ 100, 16, 1, 2 ] ],
des: "",
skill: function() {
var t = parseInt(.2 * this.att), n = parseInt(.1 * o.def);
this.publicVar += 1;
var a = t * this.publicVar;
e("scr_data").role.hp -= a;
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= n;
return "【毒酸：每回合损失" + a + "点气血，" + n + "点护身力！】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
3004: {
name: "狸花妖将",
lv: 240,
hp: 24865,
maxHp: 24865,
att: 740,
def: 270,
publicVar: 0,
escapeRate: -10,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 16, 1, 2 ], [ 100, 16, 1, 2 ] ],
des: "",
skill: function() {
if (100 * Math.random() < 30) {
var e = parseInt(.2 * c.role.hp);
c.role.hp -= e;
return "【巨狸妖使用「疯狂撕咬」你损失" + e + "点气血！】";
}
return "";
},
defSkill: function() {
if (100 * Math.random() < 30) {
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 99999;
return "【" + this.name + "躲避你的降妖力！】";
}
return "";
},
winEvent: void 0,
lostEvent: void 0
},
3005: {
name: "哮天犬残影",
lv: 300,
hp: 3e4,
maxHp: 3e4,
att: 900,
def: 350,
publicVar: 0,
escapeRate: -20,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 16, 1, 2 ], [ 100, 16, 1, 2 ] ],
des: "",
skill: function() {
var t = e("scr_data"), n = 100 * Math.random();
this.publicVar += 1;
if (n < 10 * this.publicVar + 20) {
var a = 2 * (this.att - o.def);
t.role.hp -= a;
return "【" + this.name + "使用「疯狂暴击」，你损失" + a + "点气血！】";
}
return "";
},
defSkill: function() {
this.att += parseInt(.1 * this.att);
this.def -= parseInt(.1 * this.def);
return "【云游犬妖火魔，降妖力提高10%，护身力降低10%！】";
},
winEvent: void 0,
lostEvent: void 0
},
3006: {
name: "碧波潭巨蜥",
lv: 375,
hp: 36e3,
maxHp: 36e3,
att: 1150,
def: 434,
publicVar: 0,
escapeRate: -30,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 16, 1, 2 ], [ 100, 16, 1, 2 ] ],
des: "",
skill: function() {
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= parseInt(.08 * o.def);
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= parseInt(.08 * o.def);
return "【巨蜥使用「粘液」，你降低8%降妖力，8%护身力！】";
},
defSkill: function() {
var e = parseInt(.06 * this.maxHp);
this.hp += e;
return "【巨蜥使用自愈，恢复" + e + "点气血！】";
},
winEvent: void 0,
lostEvent: void 0
},
3007: {
name: "无舌夜叉",
lv: 475,
hp: 45e3,
maxHp: 45e3,
att: 1400,
def: 599,
publicVar: 0,
escapeRate: -40,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 16, 1, 2 ], [ 100, 16, 1, 2 ] ],
des: "“啊~呜~呜~”",
skill: function() {
if (100 * Math.random() < 50) {
var e = this.att;
c.role.hp += e;
return "【无舌人对你使用「治疗」，你恢复" + e + "点气血】";
}
this.publicVar += 3;
var t = 3 * this.att - o.def;
c.role.hp -= t;
return "【无舌人对你使用「撕咬」，你损失" + t + "点气血，并附加3层毒素劫伤！】";
},
defSkill: function() {
if (this.publicVar > 0) {
var t = e("scr_data"), n = parseInt(.1 * this.att);
this.publicVar += 1;
var a = n * this.publicVar;
t.role.hp -= a;
return "【毒素：每回合损失" + a + "点气血】";
}
return "";
},
winEvent: void 0,
lostEvent: void 0
},
3008: {
name: "南天门金甲卫",
lv: 600,
hp: 6e4,
maxHp: 6e4,
att: 1800,
def: 699,
publicVar: 0,
escapeRate: -50,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 16, 1, 2 ], [ 100, 16, 1, 2 ] ],
des: "“此地不得过关！”",
skill: function() {
this.publicVar += 1;
if (this.publicVar % 4 == 0) {
var e = 5 * this.att;
c.role.hp -= e;
return "【" + this.name + "向你发射了一颗定风珠！击中！你损失" + e + "点气血！】";
}
return "【“警告！速速退去，不然就祭出芭蕉扇了~”】";
},
defSkill: function() {
if (100 * Math.random() < 30) {
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 99999;
return "【" + this.name + "使用「护法盾」！】";
}
return "";
},
winEvent: void 0,
lostEvent: void 0
},
3009: {
name: "天庭执戟偏将",
lv: 800,
hp: 75e3,
maxHp: 75e3,
att: 2499,
def: 999,
publicVar: 0,
escapeRate: -60,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 16, 1, 2 ], [ 100, 16, 1, 2 ] ],
des: "“凡骨也敢闯天门？看我斩妖刀。”",
skill: function() {
if (4 == this.publicVar) {
var e = this.att * (1 + this.publicVar);
c.role.hp -= e;
return "【" + this.name + "使用「终结.斩杀！」，你受到" + e + "点气血！】";
}
this.publicVar += 1;
var t = this.att, n = parseInt(.1 * this.att * this.publicVar);
c.role.hp -= t + n;
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= parseInt(.05 * o.def);
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= parseInt(.05 * o.att);
return "【" + this.name + "使用「剔骨小刀！」你受到" + t + "点劫伤，附加" + n + "流血，攻防降低5%！】";
},
defSkill: function() {
this.att += parseInt(.05 * this.att);
return "【" + this.name + "使用「集中」，" + this.name + "降妖力提升！】";
},
winEvent: void 0,
lostEvent: void 0
},
3010: {
name: "兜率宫弃炉童",
lv: 1e3,
hp: 99999,
maxHp: 99999,
att: 2999,
def: 1199,
publicVar: 0,
escapeRate: -70,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 16, 1, 2 ], [ 100, 16, 1, 2 ] ],
des: "“既入弃炉，便做我下一味丹引吧。”",
skill: function() {
this.publicVar += 1;
var e = parseInt(this.att * (1 + this.publicVar / 10));
c.role.hp -= e;
this.hp += e;
return "【" + this.name + "喷出「靶向喷雾」你受到" + e + "点劫伤。" + this.name + "恢复" + e + "点气血，并收集1点能量！】";
},
defSkill: function() {
if (this.publicVar % 4 == 0) {
this.def = 899;
return "【" + this.name + "「无敌屏障」被击破！】";
}
if (this.publicVar % 2 == 0) {
this.def = 99999;
return "【" + this.name + "启动「无敌屏障」！】";
}
var e = parseInt(o.att * (.2 + this.publicVar / 10));
c.role.hp -= e;
return "【" + this.name + "开启「反射屏障」你受到" + e + "点劫伤！】";
},
winEvent: void 0,
lostEvent: void 0
},
100: {
name: "小玉面狐妖",
lv: 1,
hp: 60,
maxHp: 60,
att: 0,
def: 0,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 0,
achieve: 0,
getAtt: 1,
drop: [],
des: "把蟠桃和盘缠都交出来<(｀^′)>",
skill: function() {
var t = e("scr_data");
if (t.money > 0) {
t.money -= 1;
this.publicVar += 1;
return "【你被偷走0.1两(笑)】";
}
return "【“哼！不跟你玩了！”】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data"), n = Math.min(10, this.publicVar + 3);
t.money += n;
return "【你从玉面狐妖身上抢到" + (n / 10).toFixed(1) + "两】";
},
lostEvent: void 0
},
101: {
name: "黑风洞莽先锋（精英）",
lv: 12,
hp: 485,
maxHp: 485,
att: 30,
def: 0,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 3,
achieve: 2,
getAtt: 2,
drop: [ [ 100, 1, 2, 2 ], [ 100, 7, 1, 2 ], [ 100, 12, 1, 2 ], [ 100, 20, 1, 2 ] ],
des: "“此山归黑风洞，外人滚远些！”",
skill: function() {
this.att += 7;
return "【壮汉暴跳如雷，降妖力提升！】";
},
defSkill: function() {
var t = e("scr_public"), n = t.role.att() - t.role.def();
if (100 * Math.random() < 35) {
e("scr_data").role.hp -= n;
return "【壮汉使用「反震」，你损失" + n + "点气血！】";
}
return "";
},
winEvent: function() {
e("scr_data").choice[0] = 0;
return "【“你给老子等着！”】";
},
lostEvent: function() {
var t = e("scr_data");
t.itemNum2[0] -= t.itemNum2[0];
t.itemNum2[7] -= t.itemNum2[7];
return "【你损失全部的斋饭和安神香！】【“别让老子再看到你，听见没！”】";
}
},
102: {
name: "锦袍妖商（精英）",
lv: 10,
hp: 410,
maxHp: 410,
att: 30,
def: 0,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 3,
achieve: 1,
getAtt: 1,
drop: [ [ 100, 1, 4, 2 ], [ 50, 25, 1, 2 ] ],
des: "“行者留步，贫道有桩大买卖。”",
skill: function() {
this.publicVar += 1;
if (this.publicVar % 3 == 0) {
this.hp += 99;
this.att += 5;
return "【" + this.name + "使用「治疗」，恢复99点气血，降妖力提高5点！】";
}
return "";
},
defSkill: void 0,
winEvent: function() {
e("scr_data").choice[0] = 1;
return "【" + this.name + "遁走了！】";
},
lostEvent: function() {
var t = e("scr_data"), n = t.money;
t.money -= n;
return "【你损失全部的盘缠！】";
}
},
103: {
name: "波月洞黄袍怪（BOSS）",
lv: 23,
hp: 855,
maxHp: 855,
att: 0,
def: 0,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 3,
achieve: 3,
getAtt: 3,
drop: [ [ 100, 11, 1, 2 ] ],
des: "“敢坏我洞府姻缘，找死！”",
skill: function() {
var t = e("scr_data"), n = parseInt(Math.max(.25 * (this.maxHp - this.hp) - o.def + 20, 0)), a = parseInt(.3 * n);
this.hp += a;
t.role.hp -= n;
return "【黄袍怪使用「嗜血狂魔」，你受到" + n + "点劫伤,黄袍怪恢复" + a + "点气血】";
},
defSkill: function() {
if (100 * Math.random() < 15) {
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 9999;
return "【黄袍怪使用「格挡」！】";
}
return "";
},
winEvent: function() {
var t = e("scr_data");
t.choice[0] = 1;
t.publicVar[5] = 1;
return "【" + this.name + "被人救走了！】";
},
lostEvent: function() {
var t = e("scr_data");
t.energy = 0;
t.choice[0] = 2;
return "【你受重伤！损失全部的法力】";
}
},
104: {
name: "洞门守妖",
lv: 15,
hp: 540,
maxHp: 540,
att: 0,
def: 0,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 11, 1, 1 ] ],
des: "“洞门不开，凡人退散！”",
skill: function() {
var t = Math.max(40 - o.def, 0);
this.hp -= 50;
e("scr_data").role.hp -= t;
return "【看守者使用「拼命」，对你造成" + t + "点劫伤，看守者损失50点气血】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.choice[3] = 2;
return "【你已拥有仙砂*" + t.itemNum[11] + "】";
},
lostEvent: void 0
},
105: {
name: "追魂夜叉",
lv: 35,
hp: 1498,
maxHp: 1498,
att: 0,
def: 0,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 3,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 11, 2, 1 ] ],
des: "“我不与你多言~降妖人得有降妖人的样子！”",
skill: function() {
var t = e("scr_data"), n = 100 * Math.random();
this.publicVar += 1;
if (this.publicVar <= 20) {
if (n < 85) return "【追杀者拿起铁锹，向你发射了一颗定风珠！但是未命中】";
var a = 699 - o.def;
t.role.hp -= a;
return "【追杀者拿起铁锹，向你发射了一颗定风珠！击中！你损失" + a + "点气血！】";
}
return "【追杀者拿起铁锹，但是发现没定风珠啦！】";
},
defSkill: void 0,
winEvent: function() {
return "【你已拥有仙砂*" + e("scr_data").itemNum[11] + "】";
},
lostEvent: function() {
e("scr_data").itemNum[11] = 0;
return "，你失去所有【仙砂】";
}
},
106: {
name: "黑风岭剪径妖（精英）",
lv: 40,
hp: 1370,
maxHp: 1370,
att: 0,
def: 0,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 2,
getAtt: 1,
drop: [ [ 100, 99, 6, 3 ], [ 50, 23, 1, 2 ] ],
des: "“留下买路盘缠，饶你过岭！”",
skill: function() {
var t = Math.max(100 - o.def, 0);
this.publicVar += 1;
var n = t * this.publicVar;
e("scr_data").role.hp -= n;
return "【劫匪使用「放血」，每回合损失" + n + "点气血（" + this.publicVar + "层）】";
},
defSkill: void 0,
winEvent: function() {
return "“大爷饶命啊！m(_ _)m”";
},
lostEvent: function() {
return "“叫NM多管闲事！”";
}
},
107: {
name: "染尘破戒僧（精英）",
lv: 50,
hp: 1700,
maxHp: 1700,
att: 243,
def: 50,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 3,
achieve: 1,
getAtt: 1,
drop: [ [ 100, 25, 1, 2 ], [ 100, 24, 1, 2 ], [ 50, 27, 1, 2 ] ],
des: "“照妖镜照不出我，照得出你么？”",
skill: void 0,
defSkill: function() {
var t = e("scr_public"), n = t.role.att() - t.role.def();
if (100 * Math.random() < 40) {
e("scr_data").role.hp -= n;
return "【游方僧使用「反震」，你损失" + n + "点气血！】";
}
return "";
},
winEvent: function() {
return "“你给老子等着！老子还有来的”";
},
lostEvent: function() {
return "“老子脸上写着王八蛋？”";
}
},
108: {
name: "六耳猕猴残念（BOSS）",
lv: 60,
hp: 2199,
maxHp: 2199,
att: 0,
def: 20,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 999,
achieve: 5,
getAtt: 5,
drop: [ [ 100, 11, 2, 1 ], [ 100, 8, 1, 2 ], [ 100, 27, 2, 2 ], [ 100, 17, 1, 2 ] ],
des: "“大胆！别坏我好事！”",
skill: function() {
var t = e("scr_data"), n = e("scr_data2");
this.publicVar += 1;
var a = 30 * this.publicVar, i = Math.max(parseInt(180 + 10 * this.publicVar - o.def - 40 * n.gameData[0]), 0);
t.role.hp -= i + a;
var c = parseInt(.05 * this.hp);
this.hp -= c;
return "【" + this.name + "使用「拼命3」，你损失" + i + "点气血，每回合损失" + a + "点气血（流血），杀人犯损失" + c + "点气血】";
},
defSkill: function() {
var t = e("scr_data"), n = this.def;
this.def += 20;
t.role.hp -= n;
return "【杀人犯使用「霸气护体2」，增加20点护身力，你受到" + n + "点劫伤】";
},
winEvent: function() {
var t = e("scr_data");
t.distance += 1;
t.publicVar[3] = 1;
return "";
},
lostEvent: function() {
var t = e("scr_data"), n = e("scr_data2");
t.ifFollow[0] = 0;
t.plotId = Math.min(2 + n.gameData[0], 4);
e("scr_public").save();
cc.director.loadScene("plot");
return "";
}
},
109: {
name: "长安西坊地头妖（精英）",
lv: 70,
hp: 2460,
maxHp: 2460,
att: 0,
def: 141,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 3,
achieve: 1,
getAtt: 1,
drop: [],
des: "“你这凡骨，也配在西坊落脚？”",
skill: function() {
var e = parseInt(.15 * (this.maxHp - this.hp)), t = 317 + o.def;
c.role.hp -= t;
return "【大罗使用「穿透」，你损失" + t + "点气血，玉面狐妖使用「崇拜」，大罗恢复" + e + "点气血！】";
},
defSkill: void 0,
winEvent: function() {
c.publicVar2[15] += 1;
if (0 == c.publicVar2[27]) {
c.publicVar2[27] = 1;
return "你从大佬身上找到一本经卷，获得《坎贝尔骨科炼丹疗法学》经卷籍（请去诵经界面使用）！";
}
return "";
},
lostEvent: function() {
c.money = 0;
return "你损失全部的盘缠！！！";
}
},
110: {
name: "长安金吾卫四零八队",
lv: 199,
hp: 6222,
maxHp: 6222,
att: 405,
def: 200,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 1,
getAtt: 1,
drop: [ [ 60, 7, 1, 2 ], [ 60, 7, 1, 2 ], [ 60, 7, 1, 2 ] ],
des: "“不许打坐，听到没！”",
skill: void 0,
defSkill: void 0,
winEvent: function() {
if (0 == c.publicVar[8]) {
c.ifFollow[1] = 0;
c.publicVar[7] -= 700;
c.friendSkill[1] = 0;
c.friendSkill[3] = 0;
c.friendSkill[4] = 0;
c.friendSkill[5] = 0;
c.friendSkill[6] = 0;
c.friendSkill[8] = 0;
i.init();
}
return "“可以，你们两个给我等好喽！”";
},
lostEvent: function() {
if (0 == c.publicVar[8]) {
c.ifFollow[1] = 0;
c.publicVar[7] -= 700;
c.friendSkill[1] = 0;
c.friendSkill[3] = 0;
c.friendSkill[4] = 0;
c.friendSkill[5] = 0;
c.friendSkill[6] = 0;
c.friendSkill[8] = 0;
}
c.money -= parseInt(.5 * c.money);
i.init();
return "你损失一半的盘缠！";
}
},
111: {
name: "长安西坊地头妖（精英）",
lv: 70,
hp: 2460,
maxHp: 2460,
att: 0,
def: 121,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 3,
achieve: 1,
getAtt: 1,
drop: [],
des: "“你这凡骨，也配在西坊落脚？”",
skill: function() {
var e = 317 + o.def;
c.role.hp -= e;
return "【大佬使用「穿透」，你损失" + e + "点气血！】";
},
defSkill: function() {
var e = parseInt(.15 * (o.maxHp - c.role.hp) + 50);
c.role.hp += e;
return "【玉面狐妖对你使用「协助」，你恢复" + e + "点气血！】";
},
winEvent: function() {
c.publicVar2[15] += 1;
if (0 == c.publicVar2[27]) {
c.publicVar2[27] = 1;
return "你从大佬身上找到一本经卷，获得《坎贝尔骨科炼丹疗法学》经卷籍（请去诵经界面使用）！";
}
return "";
},
lostEvent: function() {
return "“老子打自己的女施主，要你管？”";
}
},
112: {
name: "黑风债鬼（小BOSS）",
lv: 199,
hp: 19999,
maxHp: 19999,
att: 0,
def: 499,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 3,
achieve: 1,
getAtt: 1,
drop: [],
des: "“你替她担这因果债么？”",
skill: function() {
var e = parseInt(699 - .5 * o.def - cc.find("Event/scr_fight").getComponent("scr_fight").correct[1]);
if (4 == this.publicVar) {
var t = 3 * e;
c.role.hp -= t;
return "【" + this.name + "使用「终结.剔骨」，你受到" + t + "点气血！】";
}
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= parseInt(.05 * o.def);
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= parseInt(.05 * o.att);
this.publicVar += 1;
var n = parseInt(49 * this.publicVar);
c.role.hp -= e + n;
return "【" + this.name + "使用「放血」你受到" + e + "点劫伤，附加" + n + "流血，攻防降低5%！】";
},
defSkill: function() {
var t = e("scr_public"), n = parseInt(.6 * (t.role.att() - t.role.def()));
if (100 * Math.random() < 35) {
e("scr_data").role.hp -= n;
return "【黑风债主使用「反震」，你损失" + n + "点气血！】";
}
return "";
},
winEvent: function() {
if (0 == c.publicVar2[25]) {
c.publicVar2[25] = 1;
return "你从大佬身上找到一本经卷，获得《儿童手工DIY》经卷籍（请去诵经界面使用）！";
}
return "";
},
lostEvent: function() {
return "“老子打自己的女施主，要你管？”";
}
},
113: {
name: "黑风债鬼（小BOSS）",
lv: 199,
hp: 19999,
maxHp: 19999,
att: 0,
def: 499,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 3,
achieve: 1,
getAtt: 1,
drop: [],
des: "“你替她担这因果债么？”",
skill: function() {
var e = parseInt(499 - .3 * o.def - .5 * cc.find("Event/scr_fight").getComponent("scr_fight").correct[1]);
if (4 == this.publicVar) {
var t = 3 * e;
c.role.hp -= t;
return "【" + this.name + "使用「终结.剔骨」，你受到" + t + "点气血！】";
}
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= parseInt(.05 * o.def);
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= parseInt(.05 * o.att);
this.publicVar += 1;
var n = parseInt(39 * this.publicVar);
c.role.hp -= e + n;
return "【" + this.name + "使用「放血」你受到" + e + "点劫伤，附加" + n + "流血，攻防降低5%！】";
},
defSkill: function() {
var t = e("scr_public"), n = t.role.att() - t.role.def();
if (100 * Math.random() < 35) {
e("scr_data").role.hp -= n;
return "【黑风债主使用「反震」，你损失" + n + "点气血！】";
}
return "";
},
winEvent: function() {
if (0 == c.publicVar2[25]) {
c.publicVar2[25] = 1;
return "你从大佬身上找到一本经卷，获得《儿童手工DIY》经卷籍（请去诵经界面使用）！";
}
return "";
},
lostEvent: void 0
},
201: {
name: "眼镜王蛇将（精英）",
lv: 15,
hp: 545,
maxHp: 545,
att: 1,
def: 0,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 1,
getAtt: 1,
drop: [ [ 100, 3, 2, 1 ], [ 100, 23, 1, 2 ] ],
des: "呼哧~呼哧~",
skill: function() {
var t = Math.max(60 - o.def, 0);
this.publicVar += 1;
var n = t * this.publicVar;
e("scr_data").role.hp -= n;
return "【中毒：每回合损失" + n + "点气血（" + this.publicVar + "层）】";
},
defSkill: void 0,
winEvent: function() {
e("scr_data").choice[6] += 1;
return "";
},
lostEvent: void 0
},
202: {
name: "脱枷夜叉（精英）",
lv: 25,
hp: 850,
maxHp: 850,
att: 80,
def: 20,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 1,
getAtt: 1,
drop: [ [ 100, 1, 2, 2 ], [ 100, 17, 1, 2 ] ],
des: "",
skill: function() {
var t = e("scr_data"), n = parseInt(Math.max(.2 * this.hp - o.def, 0));
t.role.hp -= n;
return "【" + this.name + "使用「咆哮」，你受到" + n + "点劫伤】";
},
defSkillfunction: function() {
var t = e("scr_public"), n = t.role.att() - t.role.def();
if (100 * Math.random() < 30) {
e("scr_data").role.hp -= n;
return "【" + this.name + "使用「反震」，你损失" + n + "点气血！】";
}
return "";
},
winEvent: function() {
e("scr_data").choice[6] += 1;
return "";
},
lostEvent: void 0
},
203: {
name: "木甲傀儡（疑心魔）",
lv: 45,
hp: 1500,
maxHp: 1500,
att: 0,
def: 60,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 1,
getAtt: 1,
drop: [ [ 100, 17, 1, 2 ], [ 100, 99, 6, 3 ], [ 100, 17, 1, 2 ] ],
des: "“机关步不可乱，乱一步便有暗箭。”",
skill: function() {
var t = e("scr_data");
if (100 * Math.random() < 70) return "【机械人使用「电钻！」，但是戳歪了！】";
var n = 699 - o.def;
t.role.hp -= n;
return "【机械人使用「电钻！」，戳中！你损失" + n + "点气血】";
},
defSkill: function() {
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= 40;
return "【机械人使用「神奇舞蹈」，太逗啦！你降低40点降妖力】";
},
winEvent: function() {
e("scr_data").choice[6] += 1;
return "";
},
lostEvent: void 0
},
204: {
name: "罗刹女幻身",
lv: 60,
hp: 2100,
maxHp: 2100,
att: 310,
def: 0,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 1,
getAtt: 1,
drop: [ [ 100, 27, 1, 2 ], [ 100, 99, 8, 3 ] ],
des: "“我家圣婴大王，可曾从此路过？”",
skill: function() {
if (100 * Math.random() < 50) {
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= 20;
return "【铁扇公主使用「弱点打击」，你降低20点护身力】";
}
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= 40;
return "【铁扇公主使用「弱点打击」，你降低40点降妖力】";
},
defSkill: function() {
if (100 * Math.random() < Math.min(20 + 5 * this.publicVar, 40)) {
var t = parseInt(.5 * o.att);
e("scr_data").role.hp -= t;
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 99999;
return "【" + this.name + "使用「格挡」「反弹」，你减少" + t + "点气血！】";
}
return "";
},
winEvent: function() {
var t = e("scr_data");
t.choice[6] += 1;
if (0 == t.skillLv[18]) {
t.skillLv[18] = 1;
return "【激活特性「降妖力提升2」】";
}
return "";
},
lostEvent: void 0
},
205: {
name: "白面玉兔童",
lv: 80,
hp: 2680,
maxHp: 2680,
att: 0,
def: 80,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 1,
getAtt: 1,
drop: [ [ 100, 21, 1, 2 ], [ 100, 26, 2, 2 ] ],
des: "“小仙愿捣药赎罪，行者莫打啦。”",
skill: function() {
var t = e("scr_data"), n = 100 * Math.random();
if (n < 30) {
t.role.hp += 233;
return "【么么啾给在给你捏脚，你恢复233点气血！】";
}
if (n >= 30 && n < 70) {
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= 99;
return "【么么啾袭击了你的胸部，你降低130点护身力】";
}
if (n >= 70) {
var a = parseInt(3 * (660 - o.def));
t.role.hp -= a;
return "【么么啾使用「大铁锤」——绝后一击！你损失" + a + "点气血！】";
}
},
defSkillfunction: function() {
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= 40;
return "【么么啾使用「萌你一脸」，你降低40点降妖力！】";
},
winEvent: function() {
e("scr_data").choice[6] += 1;
return "“呜呜呜，主银你不要我吗\n(ಥ﹏ಥ)”";
},
lostEvent: void 0
},
206: {
name: "赤焰狼妖",
lv: 120,
hp: 12e3,
maxHp: 12e3,
att: 360,
def: 140,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 9, 3, 1 ], [ 100, 23, 2, 2 ] ],
des: "“嗷？”「西行提示：从此妖开始，后续妖血量激增，但是攻防下调~」",
skill: function() {
var t = e("scr_data"), n = 100 * Math.random();
this.publicVar += 1;
if (n < Math.min(20 + 4 * this.publicVar, 50)) {
var a = parseInt(1.5 * this.att - o.def);
t.role.hp -= a;
return "【" + this.name + "使用「暴击」，你损失" + a + "点气血！】";
}
return "";
},
defSkill: function() {
if (100 * Math.random() < Math.min(20 + 4 * this.publicVar, 50)) {
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 99999;
return "【" + this.name + "躲避了你的降妖力！】";
}
return "";
},
winEvent: function() {
c.choice[6] += 1;
return "";
},
lostEvent: void 0
},
207: {
name: "八臂拳妖",
lv: 155,
hp: 15155,
maxHp: 15155,
att: 470,
def: 180,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 26, 2, 2 ], [ 100, 20, 2, 2 ] ],
des: "“八只拳头都等生锈了，终于来人了。”",
skill: function() {
this.publicVa += 1;
var e = this.att, t = parseInt(.1 * this.att * this.publicVar);
c.role.hp -= e + t;
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= parseInt(.05 * o.def);
return "【" + this.name + "使用「碎骨爆裂拳！」你受到" + e + "点劫伤，附加" + t + "流血，护身力降低5%！】";
},
defSkill: function() {
this.att += parseInt(.05 * this.att);
return "【" + this.name + "使用「集中」，" + this.name + "降妖力提升！】";
},
winEvent: function() {
c.choice[6] += 1;
return "";
},
lostEvent: void 0
},
209: {
name: "双扇罗刹女",
lv: 245,
hp: 24120,
maxHp: 24120,
att: 0,
def: 280,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 14, 6, 2 ], [ 100, 22, 2, 2 ] ],
des: "“其实我最擅长的不是芭蕉扇~”",
skill: function() {
if (100 * Math.random() < 50) {
var e = parseInt(.25 * c.role.hp);
c.role.hp -= e;
return "【" + this.name + "使用「P18C手芭蕉扇」！你损失" + e + "点气血(当前气血的25%)！】";
}
e = parseInt(.25 * (o.maxHp - c.role.hp));
c.role.hp -= e;
return "【" + this.name + "使用「AKM突击芭蕉扇」！你损失" + e + "点气血(已损失气血的25%)！】";
},
defSkill: function() {
if (100 * Math.random() < 30 + 10 * this.publicVar) {
this.publicVar += 1;
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 99999;
return "【" + this.name + "闪避了你的降妖力！并且下次闪避概率提升！】";
}
return "";
},
winEvent: function() {
var t = e("scr_data");
t.choice[6] += 1;
t.randomEvent[3] += 1;
if (0 == t.skillLv[22]) {
t.skillLv[22] = 1;
return "【激活特性「降妖力提升3」】";
}
return "";
},
lostEvent: void 0
},
210: {
name: "雷火妖卵",
lv: 300,
hp: 99999,
maxHp: 99999,
att: 0,
def: 350,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 13, 1, 2 ], [ 100, 25, 2, 2 ] ],
des: "雷纹忽明忽暗，像下一息就要炸开。",
skill: function() {
this.def += parseInt(.1 * this.def);
return "【" + this.name + "就这么静静的看着你~】";
},
defSkill: function() {
if (this.publicVar < 8) {
var e = parseInt(this.def);
c.role.hp -= e;
return "【" + this.name + "「蛋身一震」！你受到" + e + "点反弹劫伤！】";
}
c.role.hp -= 9999999;
return "【自爆！！！！】";
},
winEvent: function() {
c.choice[6] += 1;
return "";
},
lostEvent: function() {
return "【天啦噜！自爆蛋爆炸啦啊啊啊啊！你被炸飞啦~】";
}
},
211: {
name: "机关羽衣仙",
lv: 380,
hp: 36570,
maxHp: 36570,
att: 1143,
def: 440,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 27, 4, 2 ], [ 100, 21, 2, 2 ] ],
des: "“凡铁也敢碰仙机？”\n「碾压」技能效果：对于护身力低于自身的目标造成2倍劫伤",
skill: function() {
if (o.def < this.def) {
var e = 2 * (this.att - o.def);
c.role.hp -= e;
return "【机甲仙子使用「碾压」对你造成" + e + "点劫伤】";
}
this.def += parseInt(.3 * this.def);
return "【机甲仙子使用「护甲强化」护身力增加30%】";
},
defSkill: function() {
if (100 * Math.random() < Math.min(20 + 5 * this.publicVar, 100)) {
var e = parseInt(o.att);
c.role.hp -= e;
return "【机甲仙子使用「机甲护体」，你受到" + e + "点弹刀劫伤！（你降妖力的100%）】";
}
this.publicVar += 1;
return "【机甲仙子「机甲护体」触发几率提高！】";
},
winEvent: function() {
c.choice[6] += 1;
return "";
},
lostEvent: void 0
},
213: {
name: "火炮羽衣仙",
lv: 600,
hp: 60815,
maxHp: 60815,
att: 1804,
def: 700,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 26, 4, 2 ], [ 100, 20, 4, 2 ] ],
des: "“尝尝火德星君遗下的雷火炮吧。”",
skill: function() {
if (this.publicVar % 3 == 0) return "【" + this.name + "使用「战争践踏！」，你被一脚剁飞啦！】";
if (this.publicVar % 3 == 1) {
var e = 4 * this.att;
c.role.hp -= e;
return "【" + this.name + "使用「对空一击！」！你损失" + e + "点气血！】";
}
if (this.publicVar % 3 == 2) {
this.att += parseInt(.4 * this.att);
this.hp += parseInt(.3 * this.maxHp);
return "【" + this.name + "坐地点了一根香，吐了一个香圈，气血恢复30%，降妖力提高40%！】";
}
this.publicVar += 1;
},
defSkill: void 0,
winEvent: function() {
c.choice[6] += 1;
return "";
},
lostEvent: void 0
},
214: {
name: "金角王幻影",
lv: 750,
hp: 72e3,
maxHp: 72e3,
att: 2299,
def: 999,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 10, 1, 2 ], [ 100, 11, 1, 2 ] ],
des: "“紫金葫芦已开，谁敢应我一声？”\n「不屈的意志！」技能效果:如果对方气血百分比高于自身，则造成3倍无视护身力的劫伤！并恢复自身10%气血",
skill: function() {
if (c.role.hp / o.maxHp / (this.hp / this.maxHp) > 1) {
var e = 3 * this.att;
c.role.hp -= e;
this.hp += parseInt(.1 * this.maxHp);
this.publicVar -= 3;
return "【吾王使用「不屈的意志！」，造成" + e + "点劫伤！自身恢复10%气血！吾王怒气减3】";
}
if (100 * Math.random() < Math.min(30 + 5 * this.publicVar, 100)) {
e = parseInt(1.2 * this.att);
c.role.hp -= e;
this.publicVar -= 1;
return "【吾王使用「誓约胜利之剑！暴击！」，造成" + e + "点劫伤！吾王怒气减1】";
}
e = this.att - o.def;
c.role.hp -= e;
this.hp += parseInt(.1 * this.maxHp);
this.publicVar += 1;
return "【吾王使用「誓约胜利之剑！」，造成" + e + "点劫伤，并获得2点怒气（下次暴击率提高！）】";
},
defSkill: function() {
if (100 * Math.random() < Math.min(30 + 5 * this.publicVar, 60)) {
this.att += parseInt(.05 * this.att);
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 999999;
return "【" + this.name + "使用「风王结界」，免疫劫伤，降妖力增加5%，！】";
}
this.publicVar += 2;
return "【吾王获得2点怒气（下次结界触发几率提高！）】";
},
winEvent: function() {
c.choice[6] += 1;
return "";
},
lostEvent: void 0
},
215: {
name: "西行",
lv: 999,
hp: 99999,
maxHp: 99999,
att: 0,
def: 1999,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 999,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 15, 3, 2 ] ],
des: "",
skill: void 0,
defSkill: function() {
var e = [ "「对于国产西行，」”", "「我始终坚信，」", "「什么样的环境孕育出什么样的作品。」", "「那些嘲讽国产西行的人，」", "「本质上是在嘲讽自己————你低估了自己的力量。」”", "「国产西行的未来，」", "「在你的手中，」", "「而不是制作者或者戏台...」", "「一起共勉吧。西行 2017.10.16」" ], t = "";
"undefined" != typeof e[this.publicVar] && (t = e[this.publicVar]);
this.publicVar += 1;
this.def -= 200;
return t;
},
winEvent: function() {
c.choice[6] += 1;
return "“再会吧~道友...”";
},
lostEvent: void 0
},
401: {
name: "巡山小钻风1队",
lv: 100,
hp: 16e3,
maxHp: 16e3,
att: 199,
def: 120,
publicVar: 0,
escapeRate: -9567,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 50, 3 ] ],
des: "",
skill: function() {
var e = parseInt(this.att - .3 * o.def + this.publicVar);
c.role.hp -= e;
return "【" + this.name + "使用「连拖带拽」！你损失" + e + "点气血！】";
},
defSkill: function() {
this.publicVar += 20;
return "【" + this.name + "使用「抱大腿」！你降低20点护身力】";
},
winEvent: function() {
c.orderTimes[4] += 4;
i.save();
return "【赏赐：香瘾永久降低4%】“不想走是吧？可以的！”";
},
lostEvent: function() {
c.publicVar3[2] = 1;
c.ifFollow[0] = 0;
c.ifFollow[1] = 0;
c.publicVar[13] = 1;
i.init();
return c.ifFollow[0] > 0 ? "【你被强行赶出城...你与月兔仙子失去了联系。】" : "【你被强行赶出城...】";
}
},
402: {
name: "巡山小钻风2队",
lv: 140,
hp: 23333,
maxHp: 23333,
att: 280,
def: 160,
publicVar: 0,
escapeRate: -9567,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 80, 3 ] ],
des: "",
skill: function() {
var e = 100 * Math.random(), t = parseInt(this.att - .3 * o.def);
if (e < 30 + 5 * this.publicVar) {
t *= 2;
c.role.hp -= t;
return "【" + this.name + "使用「致命一击」，你损失" + t + "点气血！】";
}
this.publicVar += 5;
c.role.hp -= t;
return "【" + this.name + "使用「雷杖」，你损失" + t + "点气血！】";
},
defSkill: function() {
if (100 * Math.random() < 30) {
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 99999;
return "【" + this.name + "使用「护法盾」！】";
}
return "";
},
winEvent: function() {
c.money += 100;
i.save();
return "【赏赐：10两盘缠】“小行者，虽然你确实有两下子，但是你是不可能干过天庭的~”";
},
lostEvent: function() {
c.publicVar3[2] = 1;
c.ifFollow[0] = 0;
c.ifFollow[1] = 0;
c.publicVar[13] = 1;
i.init();
return c.ifFollow[0] > 0 ? "【你被强行赶出城...你与月兔仙子失去了联系。】" : "【你被强行赶出城...】";
}
},
403: {
name: "巡山小钻风3队",
lv: 200,
hp: 33332,
maxHp: 33332,
att: 400,
def: 240,
publicVar: 0,
escapeRate: -9567,
enemyEscapeRate: 0,
lostHealth: 3,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 120, 3 ] ],
des: "",
skill: function() {
var e = parseInt(this.att - .3 * o.def);
c.role.hp -= e;
this.hp += e;
return "【" + this.name + "使用「强行验血」，你损失" + e + "点气血，3队恢复" + e + "点气血！】";
},
defSkill: function() {
this.att += 10;
return "【" + this.name + "降妖力+10！】";
},
winEvent: function() {
c.itemNum2[12] += 10;
i.save();
return "【赏赐：猴儿酒*10】“报告，你惹了一个惹不起的人！”";
},
lostEvent: function() {
c.publicVar3[2] = 1;
c.ifFollow[0] = 0;
c.ifFollow[1] = 0;
c.publicVar[13] = 1;
i.init();
return c.ifFollow[0] > 0 ? "【你被强行赶出城...你与月兔仙子失去了联系。】" : "【你被强行赶出城...】";
}
},
404: {
name: "巡山小钻风4队",
lv: 280,
hp: 48865,
maxHp: 48865,
att: 560,
def: 330,
publicVar: 0,
escapeRate: -9567,
enemyEscapeRate: 0,
lostHealth: 4,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 170, 3 ] ],
des: "",
skill: function() {
var e = parseInt(this.att - .3 * o.def), t = Math.min(20 + 2 * this.publicVar, 60);
if (100 * Math.random() < t) {
e *= 5;
c.role.hp -= e;
return "【" + this.name + "使用「芭蕉扇击」！击中！你损失" + e + "点气血！】";
}
return "【" + this.name + "使用「芭蕉扇击」，但是未命中！】";
},
defSkill: function() {
this.publicVar += 1;
this.att += 15;
return "【" + this.name + "使用集中，降妖力+15，且下次芭蕉扇击命中率提高！】";
},
winEvent: function() {
c.itemNum2[14] += 20;
i.save();
return "【赏赐：定风珠*20】“老大要来了！”";
},
lostEvent: function() {
c.publicVar3[2] = 1;
c.ifFollow[0] = 0;
c.ifFollow[1] = 0;
c.publicVar[13] = 1;
i.init();
return c.ifFollow[0] > 0 ? "【你被强行赶出城...你与月兔仙子失去了联系。】" : "【你被强行赶出城...】";
}
},
405: {
name: "巡天晓将",
lv: 380,
hp: 65865,
maxHp: 65865,
att: 762,
def: 450,
publicVar: 0,
escapeRate: -9567,
enemyEscapeRate: 0,
lostHealth: 4,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 230, 3 ] ],
des: "“小行者，看我这身金甲亮不亮？”",
skill: function() {
var e = this.att + o.def, t = parseInt(.015 * (this.maxHp - this.hp));
c.role.hp -= e;
this.hp += t;
return "【陈晓使用「西行.霸王拳」，对你造成" + e + "点劫伤，自身恢复" + t + "点气血】";
},
defSkill: function() {
if (100 * Math.random() < Math.min(3 * this.publicVar + 20, 60)) {
var t = parseInt(.3 * o.att);
e("scr_data").role.hp -= t;
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 999999;
return "【" + this.name + "使用「格挡」「反弹」，你减少" + t + "点气血！】";
}
return "【陈晓下次格挡概率增加！】";
},
winEvent: function() {
c.itemNum2[15] += 5;
c.itemNum2[7] += 3;
c.itemNum2[12] += 5;
c.orderTimes[4];
i.save();
return "【赏赐：香瘾降低15%，香*3，西行披肩*5，猴儿酒*5！】“但愿你能赢过天庭，虽然我是天庭的犬妖...”";
},
lostEvent: function() {
c.publicVar3[2] = 1;
c.ifFollow[0] = 0;
c.ifFollow[1] = 0;
c.publicVar[13] = 1;
i.init();
return c.ifFollow[0] > 0 ? "【你被强行赶出城...你与月兔仙子失去了联系。】" : "【你被强行赶出城...】";
}
},
406: {
name: "天工机关巨兽（BOSS）",
lv: 999,
hp: 299999,
maxHp: 299999,
att: 0,
def: 1299,
publicVar: 0,
escapeRate: -9567,
enemyEscapeRate: -9999,
lostHealth: 5,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 12, 1, 1 ] ],
des: "“这是专门为你们这些刁民炼制的隐藏武器，除了天庭高层，世界上没有人知道，因为知道的都死了！”\n「特点：钢甲巨兽，慢热型妖王；高血高防，但前期劫伤较低」",
skill: function() {
var e = 1e4 + this.enemyEscapeRate;
this.publicVar += 1;
if (this.publicVar % 7 == 0) {
var t = Math.max(parseInt(.04 * this.def * e + 999 - o.def), 1);
c.role.hp -= t;
this.hp += t;
this.enemyEscapeRate += 1;
return "【机关巨兽使用「加农炮！」你受到" + t + "点劫伤！机关巨兽充能+1，恢复" + t + "点气血！（回复量与机关巨兽充能量/主角护身力有关）】";
}
if (this.publicVar % 4 == 0) {
this.enemyEscapeRate += 4;
return "【机关巨兽使用「机甲进化」，充能+4！】";
}
var n = Math.max(parseInt(.01 * this.def * e + 499 - .5 * o.def), 0);
c.role.hp -= n;
return "【机关巨兽「喷油！灼烧」你受到" + n + "点灼烧劫伤（劫伤与机关巨兽充能量/主角护身力有关）！】";
},
defSkill: function() {
this.publicVar < 1 && (this.publicVar += 1);
var t = 1e4 + this.enemyEscapeRate;
if (this.publicVar % 11 == 0) {
var n = parseInt(.06 * (this.maxHp - this.hp));
this.hp += n;
return "【机关巨兽启动紧急修复！恢复已损失气血的6%（" + n + "点）】";
}
if (this.publicVar % 5 == 0) {
var a = parseInt(.2 * o.att + .2 * this.def);
e("scr_data").role.hp -= a;
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 99999;
return "【机关巨兽使用「荆棘钢甲」！你受到" + a + "点劫伤！】";
}
if (this.publicVar % 3 == 0) {
var i = parseInt(.06 * this.def);
this.def += i;
return "【机关巨兽启动「护身力系统」！护身力增加6%（" + i + "点）】";
}
if (100 * Math.random() < Math.min(30 + 2 * t, 60)) {
this.enemyEscapeRate += 1;
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 999999;
return "【机关巨兽使用「电离屏障」，免疫劫伤，充能+1！（触发几率与充能有关）】";
}
var c = 2 * t + 20;
this.def += c;
return "【机关巨兽启动「警戒系统」，护身力+" + c + "（增加量与机关巨兽当前充能量有关）！】";
},
winEvent: function() {
return "【你已战胜最终BOSS，西行即将结束，可以看看还有啥没做完的~】";
},
lostEvent: function() {
c.publicVar3[2] = 1;
c.ifFollow[0] = 0;
c.ifFollow[1] = 0;
c.publicVar[13] = 1;
i.init();
return c.ifFollow[0] > 0 ? "【你被驱逐出城。你与月兔仙子失去了联系。】" : "【你破庙里的窝被机关巨兽铲平...你被赶出城区...】";
}
},
501: {
name: "月宫守门玉犬",
lv: 80,
hp: 2685,
maxHp: 2685,
att: 0,
def: 187,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [],
des: "玉犬歪着头，似乎在辨认你的气味。",
skill: function() {
this.publicVar += 1;
if (this.publicVar <= 5) {
c.role.hp += 99;
return "【灵犬使用「添~滋溜~滋溜~」，你恢复99点气血！】";
}
this.enemyEscapeRate += 100;
return "【灵犬有些伤心，准备要离开了！】";
},
defSkill: void 0,
winEvent: function() {
c.chioce2[7] += 1;
c.itemNum2[0] += 3;
return "【灵犬点了点头，开心地离开了。灵犬的祝福：获得「斋饭」*3！】";
},
lostEvent: void 0
},
502: {
name: "月宫护兔童子团",
lv: 100,
hp: 3345,
maxHp: 3345,
att: 0,
def: 234,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [],
des: "“入我月宫童子团，才许看捣药仙舞。”",
skill: function() {
this.publicVar += 1;
if (this.publicVar <= 4) {
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] += 30;
return "【后援队使用「加油！」，你增加30点降妖力！】";
}
this.enemyEscapeRate += 100;
return "【后援队有些失望，准备要离开了！】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.chioce2[7] += 1;
t.itemNum2[22] += 1;
return "【“好吧，你确实配得上我道侣，加油吧~”。粉丝的祝福：获得「锦襕袈裟」*1！】";
},
lostEvent: void 0
},
503: {
name: "月宫管事仙娥",
lv: 130,
hp: 4335,
maxHp: 4335,
att: 0,
def: 300,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [],
des: "“月宫不收凡米，只收桂花露。”",
skill: function() {
this.publicVar += 1;
if (this.publicVar <= 3) {
c.money += 1;
return "【管洞府给了你1文盘缠~】";
}
c.role.hp -= 99999;
return "【“还不走？”】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.money -= this.publicVar;
t.chioce2[7] += 1;
t.money += 20;
return "【“如今少年行者脸皮都这么厚嘛！”。你把盘缠还给了管洞府。管洞府的祝福：获得2两！】";
},
lostEvent: function() {
c.money -= 3;
return "【“做人不要太贪！滚出去！”。你被轰出院子，失去3文盘缠！】";
}
},
504: {
name: "月兔仙子师兄",
lv: 170,
hp: 5650,
maxHp: 5650,
att: 0,
def: 500,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [],
des: "“想带走我师妹，先过我桂枝剑阵。”",
skill: function() {
var e = 100 * Math.random(), t = 999;
if (e < 40) {
this.hp -= t;
return "【" + this.name + "使用「信心打击」，反弹，" + this.name + "受到" + t + "点劫伤！】";
}
if (e < 60) {
this.hp += 2 * t;
return "【" + this.name + "感觉有点口干，饮了一口水，恢复" + 2 * t + "点气血！】";
}
t = parseInt(t - o.def);
c.role.hp -= t;
return "【" + this.name + "使用「信心打击」，你受到" + t + "点劫伤！】";
},
defSkill: void 0,
winEvent: function() {
var e = Math.min(parseInt(.05 * c.choice[5] + 5), 55);
c.role.def += e;
c.chioce2[7] += 1;
return "【“你走吧，我想静静~”。哥哥的祝福：护身力永久增加" + e + "（与月兔仙子缘分有关）！】";
},
lostEvent: void 0
},
505: {
name: "月宫姨母",
lv: 220,
hp: 7300,
maxHp: 7300,
att: 0,
def: 510,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [],
des: "“有几分功德？几卷真经？可护她一世安稳？”",
skill: void 0,
defSkill: function() {
var e = parseInt(.3 * c.money);
this.att += 1;
if (this.att <= 3) {
this.publicVar += e;
c.money -= e;
return "【你给了月兔仙子妈" + (e / 10).toFixed(1) + "两！】";
}
if (this.publicVar < 20) {
c.role.hp -= 999999;
return "【“哈哈哈哈哈”】";
}
this.hp -= 999999;
return "【“哈哈哈哈哈”】";
},
winEvent: function() {
var e = Math.min(parseInt(.5 * c.choice[5] + 50), 550);
c.role.maxHp += e;
c.chioce2[7] += 1;
return "【“好像还有点盘缠嗷~”。母上大人的祝福：气血永久增加" + e + "（与月兔仙子缘分有关）！】";
},
lostEvent: function() {
return "【“穷成这样~我敢把女儿交给你？”。你被赶出屋来！】";
}
},
506: {
name: "月宫老药师",
lv: 300,
hp: 9999,
maxHp: 9999,
att: 1200,
def: 500,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [],
des: "“若能破我捣药杵法，我便信你护得住她。”",
skill: function() {
if (4 == this.publicVar) {
var e = this.att * (1 + this.publicVar);
return "【" + this.name + "使用「空手道.锁喉！」，你受到" + e + "点气血！】";
}
this.publicVar += 1;
var t = parseInt(.5 * this.att);
c.role.hp -= t;
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= parseInt(.1 * o.def);
return "【" + this.name + "使用「空手道.穿心！」你受到" + t + "点劫伤，护身力降低10%！】";
},
defSkill: function() {
this.att += parseInt(.05 * this.att);
return "【" + this.name + "使用「空手道.蓄气！」，" + this.name + "降妖力提升！】";
},
winEvent: function() {
var e = Math.min(parseInt(.1 * c.choice[5] + 10), 110);
c.role.att += e;
c.chioce2[7] += 1;
return "【师父大人的祝福：降妖力永久增加" + e + "（与月兔仙子缘分有关）！】";
},
lostEvent: void 0
},
600: {
name: "盗经小妖",
lv: 10,
hp: 380,
maxHp: 380,
att: 0,
def: 0,
publicVar: 0,
escapeRate: 50,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 1, 1, 1 ], [ 100, 4, 1, 1 ] ],
des: "嗡嗡-嗡！",
skill: function() {
var t = Math.max(20 - o.def, 0);
e("scr_data").role.hp -= t;
this.hp += t;
return "【你被吸取" + t + "点气血！】";
},
defSkill: void 0,
winEvent: function() {
c.publicVar[10] += 1;
return "";
},
lostEvent: void 0
},
601: {
name: "分魂妖",
lv: 20,
hp: 710,
maxHp: 710,
att: 0,
def: 0,
publicVar: 0,
escapeRate: 40,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 1, 2, 1 ], [ 100, 4, 2, 1 ] ],
des: "%$#%$#%#^&^",
skill: function() {
var t = Math.max(60 - o.def, 0);
this.att += 10;
e("scr_data").role.hp -= t;
this.hp += t;
return "【你被吸取" + t + "点气血！" + this.name + "降妖力+10】";
},
defSkill: void 0,
winEvent: function() {
c.publicVar[10] += 1;
return "";
},
lostEvent: void 0
},
602: {
name: "送子鬼母",
lv: 35,
hp: 1200,
maxHp: 1200,
att: 0,
def: 0,
publicVar: 0,
escapeRate: 30,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 1, 3, 1 ], [ 100, 4, 3, 1 ] ],
des: "嗡--------！",
skill: function() {
var t = Math.max(120 + 20 * this.publicVar - o.def, 0);
e("scr_data").role.hp -= t;
this.hp += t;
return "【你被吸取" + t + "点气血！" + this.name + "吸血能力强化！】";
},
defSkill: void 0,
winEvent: function() {
c.publicVar[10] += 1;
return "";
},
lostEvent: void 0
},
603: {
name: "黑水河鼍龙",
lv: 50,
hp: 1665,
maxHp: 1665,
att: 0,
def: 0,
publicVar: 0,
escapeRate: 25,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 1,
getAtt: 1,
drop: [ [ 100, 1, 4, 1 ], [ 100, 4, 4, 1 ] ],
des: "",
skill: function() {
var t = Math.max(200 - o.def, 0);
this.def += 30;
e("scr_data").role.hp -= t;
this.hp += t;
return "【你被吸取" + t + "点气血！" + this.name + "护身力+30】";
},
defSkill: void 0,
winEvent: function() {
c.publicVar[10] += 1;
return "";
},
lostEvent: void 0
},
700: {
name: "蚊小满",
lv: 10,
hp: 380,
maxHp: 380,
att: 0,
def: 0,
publicVar: 0,
escapeRate: 50,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 1, 1, 1 ], [ 100, 4, 1, 1 ] ],
des: "嗡嗡-嗡！",
skill: function() {
var t = Math.max(20 - o.def, 0);
e("scr_data").role.hp -= t;
this.hp += t;
return "【你被吸取" + t + "点气血！】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.kills[0] += 1;
t.randomEvent[4] += 1;
return "【你已超度" + t.kills[0] + "只蚊妖】";
},
lostEvent: void 0
},
701: {
name: "大文蚊",
lv: 20,
hp: 710,
maxHp: 710,
att: 0,
def: 0,
publicVar: 0,
escapeRate: 40,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 1, 2, 1 ], [ 100, 4, 2, 1 ] ],
des: "%$#%$#%#^&^",
skill: function() {
var t = Math.max(60 - o.def, 0);
this.att += 10;
e("scr_data").role.hp -= t;
this.hp += t;
return "【你被吸取" + t + "点气血！" + this.name + "降妖力+10】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.kills[0] += 1;
t.randomEvent[4] += 1;
return "【你已超度" + t.kills[0] + "只蚊妖】";
},
lostEvent: void 0
},
702: {
name: "密斯特蚊",
lv: 35,
hp: 1200,
maxHp: 1200,
att: 0,
def: 0,
publicVar: 0,
escapeRate: 35,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 1, 3, 1 ], [ 100, 4, 3, 1 ] ],
des: "嗡--------！",
skill: function() {
var t = Math.max(120 + 20 * this.publicVar - o.def, 0);
e("scr_data").role.hp -= t;
this.hp += t;
return "【你被吸取" + t + "点气血！" + this.name + "吸血能力强化！】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.kills[0] += 1;
t.randomEvent[4] += 1;
return "【你已超度" + t.kills[0] + "只蚊妖】";
},
lostEvent: void 0
},
703: {
name: "阿蚊",
lv: 50,
hp: 1665,
maxHp: 1665,
att: 0,
def: 0,
publicVar: 0,
escapeRate: 30,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 1,
getAtt: 1,
drop: [ [ 100, 1, 4, 1 ], [ 100, 4, 4, 1 ] ],
des: "",
skill: function() {
var t = Math.max(200 - o.def, 0);
this.def += 30;
e("scr_data").role.hp -= t;
this.hp += t;
return "【你被吸取" + t + "点气血！" + this.name + "护身力+30】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.kills[0] += 1;
t.randomEvent[4] += 1;
return "【你已超度" + t.kills[0] + "只蚊妖】";
},
lostEvent: void 0
},
704: {
name: "徐蚊强",
lv: 70,
hp: 2465,
maxHp: 2465,
att: 0,
def: 0,
publicVar: 0,
escapeRate: 25,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 1,
getAtt: 1,
drop: [ [ 100, 1, 5, 1 ], [ 100, 4, 5, 1 ] ],
des: "",
skill: function() {
var t = parseInt(Math.max((320 - o.def) * (2 - this.hp / this.maxHp), 0));
e("scr_data").role.hp -= t;
this.hp += t;
return "【你被吸取" + t + "点气血！】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.kills[0] += 1;
t.randomEvent[4] += 1;
return "【你已超度" + t.kills[0] + "只蚊妖】";
},
lostEvent: void 0
},
705: {
name: "蚊母女王",
lv: 90,
hp: 3333,
maxHp: 3333,
att: 0,
def: 0,
publicVar: 0,
escapeRate: 20,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 2,
getAtt: 1,
drop: [ [ 100, 1, 10, 1 ], [ 100, 4, 10, 1 ], [ 100, 26, 1, 2 ] ],
des: "血红的肚子，如同宝石般纯净无暇！",
skill: function() {
var t = Math.max(520 - o.def, 0);
e("scr_data").role.hp -= t;
this.hp += t;
return "【你被吸取" + t + "点气血！】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.kills[0] += 1;
return "【你已超度" + t.kills[0] + "只蚊妖】";
},
lostEvent: void 0
},
706: {
name: "蚊姬媛",
lv: 29,
hp: 599,
maxHp: 599,
att: 0,
def: 0,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 0,
achieve: 0,
getAtt: 1,
drop: [ [ 1, 12, 1, 1 ] ],
des: "%&#@*#%*%##%！",
skill: function() {
e("scr_data").role.hp += 200;
this.hp -= 200;
e("scr_public").ifMaxHp();
return this.name + "在给你输送营养！你增加200点气血";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.kills[0] += 1;
return "【" + this.name + "变成了一具干妖身！你已超度" + t.kills[0] + "只蚊妖】";
},
lostEvent: void 0
},
800: {
name: "玉面狐妖(小童子)",
lv: 7,
hp: 210,
maxHp: 210,
att: 0,
def: 0,
publicVar: 0,
escapeRate: 30,
enemyEscapeRate: 0,
lostHealth: 0,
achieve: 0,
getAtt: 1,
drop: [],
des: "..嘻嘻..(≥▽≤)y",
skill: function() {
var t = e("scr_data");
this.enemyEscapeRate += 20;
if (t.money > 0) {
t.money -= 1;
this.publicVar += 1;
return "【你被偷走0.1两，玉面狐妖想要溜(￣﹏￣)】";
}
return "【“穷成这般也敢出来？”】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data"), n = this.publicVar + 5;
t.money += n;
t.randomEvent[3] += 1;
return "【获得" + (n / 10).toFixed(1) + "两！】【“呜呜呜，我告诉我姐去”】";
},
lostEvent: void 0
},
801: {
name: "玉面狐妖长姐",
lv: 16,
hp: 575,
maxHp: 575,
att: 0,
def: 0,
publicVar: 0,
escapeRate: 30,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 4, 3 ] ],
des: "( ' – ' )你就那个怪叔叔？",
skill: function() {
var t = Math.max(20 - o.def + 15 * this.publicVar, 0), n = e("scr_data");
this.publicVar += 1;
n.role.hp -= t;
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= 15;
return "【" + this.name + "使用「泰山压顶（130kg）」，你受到" + t + "点劫伤！你感觉喘呼吸困难！护身力降低15点！】";
},
defSkill: void 0,
winEvent: function() {
e("scr_data").randomEvent[3] += 1;
return "";
},
lostEvent: function() {
var t = e("scr_data"), n = parseInt(Math.max(.2 * t.money, 0));
t.money -= n;
return "【你损失20%的盘缠！】";
}
},
802: {
name: "玉面狐妖小姨",
lv: 20,
hp: 700,
maxHp: 700,
att: 80,
def: 0,
publicVar: 0,
escapeRate: 30,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 6, 3 ] ],
des: "来嘛！来洞府坐坐会儿~",
skill: function() {
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= 25;
var t = e("scr_data"), n = Math.max(30 - o.def, 5);
this.publicVar += 1;
var a = this.publicVar * n;
t.money -= this.publicVar;
t.role.hp -= a;
t.money < 0 && (t.money = 0);
return "【" + this.name + "用身体在你身上蹭了蹭，你降妖力减少25，气血减少" + a + "，盘缠减少" + (this.publicVar / 10).toFixed(1) + "两】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.money += Math.min(this.publicVar, 10);
t.randomEvent[3] += 1;
return "【你抢回被偷的盘缠！】";
},
lostEvent: function() {
var t = e("scr_data"), n = parseInt(Math.max(.15 * t.money, 0));
t.money -= n;
return "【你损失15%的盘缠！】";
}
},
803: (n = {
name: "玉面狐妖狐母",
lv: 35,
hp: 1200,
maxHp: 1200,
att: 150,
def: 36,
publicVar: 0,
escapeRate: 30,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 8, 3 ] ],
des: "快把盘缠交出来！",
skill: function() {
var e = parseInt(.03 * o.maxHp);
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= 30;
return "【" + this.name + "使用色诱，你的降妖力降低30点，气血减少" + e + "】";
},
defSkill: void 0,
winEvent: void 0
}, a(n, "winEvent", function() {
e("scr_data").randomEvent[3] += 1;
return "";
}), a(n, "lostEvent", function() {
var t = e("scr_data"), n = parseInt(Math.max(.1 * t.money, 0));
t.money -= n;
return "【你损失10%的盘缠！】";
}), n),
804: {
name: "玉面狐妖祖母",
lv: 45,
hp: 1500,
maxHp: 1500,
att: 0,
def: 30,
publicVar: 0,
escapeRate: 30,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 10, 3 ] ],
des: "打劫(〃'▽'〃)！",
skill: function() {
this.publicVar += 1;
var t = 80 * this.publicVar;
e("scr_data").role.hp -= t;
return "【放血：每回合损失" + t + "点气血（" + this.publicVar + "层）】";
},
defSkill: void 0,
winEvent: function() {
e("scr_data").randomEvent[3] += 1;
return "";
},
lostEvent: function() {
var t = e("scr_data"), n = parseInt(Math.max(.1 * t.money, 0));
t.money -= n;
return "【你损失10%的盘缠！】";
}
},
805: {
name: "玉面狐族女王（精英）",
lv: 60,
hp: 1999,
maxHp: 1999,
att: 310,
def: 50,
publicVar: 0,
escapeRate: 30,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 1,
getAtt: 2,
drop: [ [ 100, 99, 12, 3 ] ],
des: "快把盘缠交出来！",
skill: function() {
this.publicVar += 1;
var t = 100 * this.publicVar;
e("scr_data").role.hp -= t;
return "【流血：每回合损失" + t + "点气血（" + this.publicVar + "层）】";
},
defSkill: void 0,
winEvent: function() {
e("scr_data").randomEvent[3] += 1;
return "";
},
lostEvent: function() {
var t = e("scr_data"), n = parseInt(Math.max(.15 * t.money, 0));
t.money -= n;
return "【你损失15%的盘缠！】";
}
},
806: {
name: "盘丝盗后（精英）",
lv: 80,
hp: 2700,
maxHp: 2700,
att: 0,
def: 60,
publicVar: 0,
escapeRate: 30,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 2,
getAtt: 3,
drop: [ [ 100, 99, 15, 3 ], [ 100, 99, 15, 3 ], [ 100, 27, 1, 2 ] ],
des: "嘿嘿，换上蛛丝羽衣，陪姐姐演一出洞府戏吧~",
skill: function() {
var t = e("scr_data");
this.publicVar += 1;
if (this.publicVar % 3 == 0) {
var n = 400 + 100 * this.publicVar - o.def, a = 20 * this.publicVar;
t.role.hp -= n;
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= a;
return "【女王使用「黑风罗刹靴」，你损失" + n + "点气血，并降低" + a + "点降妖力】";
}
t.role.hp += 200;
return "【女王使用「皮鞭」，你恢复200点气血，降低100点护身力】";
},
defSkill: function() {
this.hp += 200;
return "【女王有点小兴奋，恢复200点气血】";
},
winEvent: function() {
c.randomEvent[3] += 1;
return "";
},
lostEvent: function() {
var t = e("scr_data"), n = parseInt(Math.max(.15 * t.money, 0));
t.money -= n;
return "【你损失15%的盘缠！】";
}
},
807: {
name: "噬魂瘾妖（BOSS）",
lv: 120,
hp: 3999,
maxHp: 3999,
att: 760,
def: 120,
publicVar: 0,
escapeRate: 20,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 3,
getAtt: 3,
drop: [ [ 100, 11, 2, 1 ] ],
des: "“没错，她就是为了我才当贼女王的...我是个废物..”",
skill: function() {
var t = e("scr_data"), n = parseInt(Math.max(.25 * (this.maxHp - this.hp) - o.def + .01 * this.hp, 0)), a = parseInt(.3 * n);
this.hp += a;
t.role.hp -= n;
return "【毒男使用「嗜血狂魔」，你受到" + n + "点劫伤,毒男恢复" + a + "点气血】";
},
defSkill: function() {
var t = e("scr_data");
this.publicVar += 1;
var n = 200 * this.publicVar;
t.role.hp -= n;
return "【中毒：每回合损失" + n + "点气血】";
},
winEvent: function() {
c.randomEvent[3] += 1;
return "“也许，死是一种解脱吧...再见了...我的女王...”";
},
lostEvent: function() {
var t = e("scr_data"), n = parseInt(Math.max(.2 * t.money, 0));
t.money -= n;
return "【你损失20%的盘缠！】";
}
},
808: {
name: "噬魂瘾妖二相（BOSS）",
lv: 180,
hp: 5980,
maxHp: 5980,
att: 1087,
def: 418,
publicVar: 0,
escapeRate: 10,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 3,
getAtt: 3,
drop: [ [ 100, 11, 2, 1 ] ],
des: "“我是不会死的，我一定要为她报仇！”",
skill: function() {
var t = e("scr_data"), n = parseInt(Math.max(.25 * (this.maxHp - this.hp) - o.def + .01 * this.hp, 0)), a = parseInt(.3 * n);
this.hp += a;
t.role.hp -= n;
return "【毒男使用「嗜血狂魔」，你受到" + n + "点劫伤,毒男恢复" + a + "点气血】";
},
defSkill: function() {
var t = e("scr_data"), n = parseInt(.2 * this.att);
this.publicVar += 1;
var a = n * this.publicVar;
t.role.hp -= a;
return "【中毒：每回合损失" + a + "点气血】";
},
winEvent: function() {
c.randomEvent[3] += 1;
return "“...不甘心...啊...”";
},
lostEvent: function() {
var t = e("scr_data"), n = parseInt(Math.max(.2 * t.money, 0));
t.money -= n;
return "【你损失20%的盘缠！】";
}
},
809: {
name: "噬魂瘾妖三相（BOSS）",
lv: 300,
hp: 9999,
maxHp: 9999,
att: 1800,
def: 700,
publicVar: 0,
escapeRate: 0,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 3,
getAtt: 3,
drop: [ [ 100, 11, 2, 1 ] ],
des: "“就算没手，我还有脚！”",
skill: function() {
var t = e("scr_data"), n = parseInt(Math.max(.25 * (this.maxHp - this.hp) - o.def + .01 * this.hp, 0)), a = parseInt(.3 * n);
this.hp += a;
t.role.hp -= n;
return "【毒男使用「嗜血狂魔」，你受到" + n + "点劫伤,毒男恢复" + a + "点气血】";
},
defSkill: function() {
var t = e("scr_data"), n = parseInt(.2 * this.att);
this.publicVar += 1;
var a = n * this.publicVar;
t.role.hp -= a;
return "【中毒：每回合损失" + a + "点气血】";
},
winEvent: function() {
c.randomEvent[3] += 1;
return "“啊！我的脚！”";
},
lostEvent: function() {
var t = e("scr_data"), n = parseInt(Math.max(.2 * t.money, 0));
t.money -= n;
return "【你损失20%的盘缠！】";
}
},
881: {
name: "噬魂瘾妖四相（BOSS）",
lv: 500,
hp: 16520,
maxHp: 16520,
att: 3e3,
def: 1200,
publicVar: 0,
escapeRate: -10,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 3,
getAtt: 3,
drop: [ [ 100, 11, 2, 1 ] ],
des: "“就算没手没脚，我还有嘴！”",
skill: function() {
var t = e("scr_data"), n = parseInt(Math.max(.25 * (this.maxHp - this.hp) - o.def + .01 * this.hp, 0)), a = parseInt(.3 * n);
this.hp += a;
t.role.hp -= n;
return "【毒男使用「嗜血狂魔」，你受到" + n + "点劫伤,毒男恢复" + a + "点气血】";
},
defSkill: function() {
var t = e("scr_data"), n = parseInt(.2 * this.att);
this.publicVar += 1;
var a = n * this.publicVar;
t.role.hp -= a;
return "【中毒：每回合损失" + a + "点气血】";
},
winEvent: function() {
c.randomEvent[3] += 1;
return "..e..e.e..e..a..a";
},
lostEvent: function() {
var t = e("scr_data"), n = parseInt(Math.max(.2 * t.money, 0));
t.money -= n;
return "【你损失20%的盘缠！】";
}
},
882: {
name: "噬魂瘾妖真身（BOSS）",
lv: 999,
hp: 32995,
maxHp: 32995,
att: 6e3,
def: 2400,
publicVar: 0,
escapeRate: -20,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 3,
getAtt: 3,
drop: [ [ 100, 11, 2, 1 ] ],
des: "黑雾贴地爬来，瘾妖只剩半截身子仍不肯散。",
skill: function() {
var t = e("scr_data"), n = parseInt(Math.max(.25 * (this.maxHp - this.hp) - o.def + .01 * this.hp, 0)), a = parseInt(.3 * n);
this.hp += a;
t.role.hp -= n;
return "【毒男使用「嗜血狂魔」，你受到" + n + "点劫伤,毒男恢复" + a + "点气血】";
},
defSkill: function() {
var t = e("scr_data"), n = parseInt(.2 * this.att);
this.publicVar += 1;
var a = n * this.publicVar;
t.role.hp -= a;
return "【中毒：每回合损失" + a + "点气血】";
},
winEvent: function() {
return "毒男化成一缕青香，飘散在蓝天白云中...";
},
lostEvent: function() {
var t = e("scr_data"), n = parseInt(Math.max(.2 * t.money, 0));
t.money -= n;
return "【你损失20%的盘缠！】";
}
},
810: {
name: "堕懒游方僧",
lv: 5,
hp: 215,
maxHp: 215,
att: 0,
def: 0,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 0,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 1, 3 ] ],
des: "“求求你放过我吧，我两天没用斋啦~(ㄒoㄒ)”",
skill: function() {
var t = e("scr_data");
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= 10;
this.enemyEscapeRate += 15;
if (t.money >= 1) {
t.money -= 1;
this.publicVar += 1;
return "【" + this.name + "使用「求饶」，你的降妖力下降10点，并给了对方0.1两】";
}
this.escapeRate += 100;
return "【游方僧发现你根本没盘缠，打算要溜了！】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.money += this.publicVar;
t.randomEvent[10] += 1;
return "【你拿回" + (this.publicVar / 10).toFixed(1) + "两】【“你们全是没同缘心的坏人！”】";
},
lostEvent: void 0
},
811: {
name: "闭门游方僧",
lv: 12,
hp: 445,
maxHp: 445,
att: 0,
def: 9999,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 2, 3 ] ],
des: "“没看见我在玩传音符吗！”",
skill: function() {
if (100 * Math.random() < 50) {
this.hp -= 99;
return "【" + this.name + "使用「嘴遁」，但是被你反弹，" + this.name + "受到99点劫伤！】";
}
e("scr_data").role.hp -= 99;
return "【" + this.name + "使用「嘴遁」，你受到99点劫伤！】";
},
defSkill: void 0,
winEvent: function() {
e("scr_data").randomEvent[10] += 1;
return "【“老子特么就服你！”】";
},
lostEvent: function() {
var t = e("scr_data"), n = parseInt(Math.max(.1 * t.money, 0));
t.money -= n;
return "【你损失10%的盘缠！】";
}
},
812: {
name: "落魄女行者",
lv: 20,
hp: 775,
maxHp: 775,
att: 0,
def: 0,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 3,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 22, 1, 2 ] ],
des: "“我真的没偷你的盘缠！不信你搜啊！”",
skill: function() {
var t = 100 * Math.random(), n = 20 * this.publicVar;
this.publicVar += 1;
if (t < n) {
e("scr_data").role.hp -= 9999;
return "【你被用瓜群众围殴，损失9999点气血！】";
}
return "【" + this.name + "在大声呼救！】";
},
defSkill: function() {
var t = 100 * Math.random(), n = e("scr_public"), a = e("scr_data");
if (t <= 40) {
var i = 50 - o.def;
a.role.hp -= i;
return "【你从" + this.name + "身上搜到发霉的男式内衣，你损失" + i + "点气血！】";
}
if (t > 40 && t <= 60) {
a.money += 1;
return "【你从" + this.name + "身上搜到0.1两！】";
}
if (t > 60) {
this.hp -= n.role.att();
return "【你碰到一个奇妖的东西...】";
}
},
winEvent: function() {
e("scr_data").randomEvent[10] += 1;
return "【“(ಥ_ಥ)有人耍流氓哇”】";
},
lostEvent: function() {
return "【你被用瓜群众围殴，损失9999点气血！】";
}
},
813: {
name: "暴怒游方僧",
lv: 32,
hp: 1150,
maxHp: 1150,
att: 0,
def: 0,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 5, 3 ] ],
des: "快把盘缠交出来，就饶你一命！",
skill: function() {
var t = Math.random(), n = Math.max(parseInt(400 * t - o.def), 0);
e("scr_data").role.hp -= n;
return "【" + this.name + "使用「疯狂」，你受到" + n + "点劫伤】";
},
defSkill: void 0,
winEvent: function() {
e("scr_data").randomEvent[10] += 1;
return "【你抢回被偷的盘缠！】";
},
lostEvent: function() {
var t = e("scr_data"), n = parseInt(Math.max(.2 * t.money, 0));
t.money -= n;
return "【你损失20%的盘缠！】";
}
},
814: {
name: "失路挑担僧",
lv: 46,
hp: 1670,
maxHp: 1670,
att: 0,
def: 99999,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 3,
drop: [ [ 100, 0, 6, 1 ] ],
des: "求求你给我找一份差事吧！(ಥ﹏ಥ)~哇！哇~哇——！",
skill: function() {
var t = (233 - o.def) * (this.publicVar + 1), n = 233 * (this.publicVar + 1);
e("scr_data").role.hp -= t;
this.hp -= n;
this.publicVar += 1;
return "【你和云游一起抱头痛哭，你损失" + t + "点气血，游方僧损失" + n + "点气血】";
},
defSkill: function() {
e("scr_data");
var t = 66 * this.publicVar;
this.hp += t;
return "【你在安慰游方僧，游方僧恢复了" + t + "点气血】";
},
winEvent: function() {
e("scr_data").randomEvent[10] += 1;
return "";
},
lostEvent: void 0
},
815: {
name: "赌命游方僧",
lv: 66,
hp: 2300,
maxHp: 2300,
att: 0,
def: 60,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 9, 3 ] ],
des: "如果你赢啦我给你1文盘缠，输啦我剁你一根手指，如何？",
skill: function() {
var t = e("scr_data");
if (100 * Math.random() < 20 + 20 * this.publicVar) {
var n = 3 * (353 - o.def);
t.role.hp -= n;
return "【你输啦，损失" + n + "点气血】";
}
this.publicVar += 1;
t.money += 1;
return "【你赢啦，获得0.1两！】";
},
defSkill: void 0,
winEvent: function() {
e("scr_data").randomEvent[10] += 1;
return "";
},
lostEvent: function() {
var t = e("scr_data"), n = parseInt(Math.max(.25 * t.money + this.publicVar, 0));
t.money -= n;
return "【你损失全部赢得盘缠，和自己25%的盘缠！】";
}
},
816: {
name: "瘾魔缠身僧",
lv: 92,
hp: 3080,
maxHp: 3080,
att: 0,
def: 92,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 3,
achieve: 2,
getAtt: 2,
drop: [ [ 100, 11, 2, 1 ] ],
des: "！",
skill: function() {
var t = e("scr_data"), n = 560 - o.def;
this.publicVar += 1;
var a = 60 * this.publicVar;
t.role.hp -= n + a;
return "【游方僧使用「撕咬」，你受到" + n + "点劫伤，每回合损失" + a + "点气血（" + this.publicVar + "层）】";
},
defSkill: function() {
var t = e("scr_data");
this.publicVar += 1;
var n = 60 * this.publicVar;
t.role.hp -= n;
return "【中毒：每回合损失" + n + "点气血（" + this.publicVar + "层）】";
},
winEvent: function() {
e("scr_data").randomEvent[10] += 1;
return "";
},
lostEvent: function() {
var t = e("scr_data"), n = parseInt(Math.max(.3 * t.money, 0));
t.money -= n;
return "【你损失30%的盘缠！】";
}
},
900: {
name: "锯齿夜叉",
lv: 35,
hp: 1200,
maxHp: 1200,
att: 0,
def: 0,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 0,
achieve: 2,
getAtt: 2,
drop: [ [ 100, 4, 1, 2 ] ],
des: "“站稳些，锯齿见血才好看。”",
skill: function() {
e("scr_data").role.hp -= 9999;
return "【电锯男使用「电锯！」，你损失9999点气血！】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: function() {
var t = e("scr_data"), n = 2 * t.randomEvent[13] + 2;
t.money += n;
t.randomEvent[13] = 0;
return "【“哎呀~舒服了~舒服了”。你获得" + (n / 10).toFixed(1) + "两】";
}
},
901: {
name: "受伤的火焰狐妖",
lv: 20,
hp: 200,
maxHp: 1e3,
att: 10,
def: 0,
publicVar: 0,
escapeRate: 0,
enemyEscapeRate: 0,
lostHealth: 3,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 9, 1, 1 ] ],
des: "火焰狐妖周身散发着火红的光芒！",
skill: function() {
this.hp += 60;
return "【火焰狐妖正在自愈！恢复自身60点气血】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
902: {
name: "九节再生虫",
lv: 1,
hp: 5,
maxHp: 5,
att: 0,
def: 0,
publicVar: 0,
escapeRate: 100,
enemyEscapeRate: 0,
lostHealth: 20,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 9, 1, 1 ] ],
des: "彩蝶振翅，鳞粉里藏着迷魂香。",
skill: function() {
var t = e("scr_data"), n = e("scr_public"), a = t.kills[1];
if (0 == a) {
t.role.hp += 200;
t.role.hp > n.role.maxHp() && (t.role.hp = n.role.maxHp());
return "【" + this.name + "在给你治疗！你回复200点气血】";
}
this.publicVar += 2;
var i = 200 * a * this.publicVar;
t.role.hp -= i;
return "【剧毒：每回合损失" + i + "点气血】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.kills[1] += 1;
if (1 == t.kills[1]) return "「我知道，这是我无法逃脱的宿命。但是啊，愚蠢的人类，你将为此付出代价！」";
},
lostEvent: void 0
},
903: {
name: "黑鬃恶犬妖",
lv: 6,
hp: 250,
maxHp: 250,
att: 15,
def: 0,
publicVar: 0,
escapeRate: 35,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 3, 2, 1 ] ],
des: "“%&妖风#@*”",
skill: function() {
var t = e("scr_data"), n = 100 * Math.random();
this.publicVar += 1;
if (n < 20 * this.publicVar) {
var a = 2 * this.att;
t.role.hp -= a;
return "【" + this.name + "使用「疯咬」，你损失" + a + "点气血！】";
}
return "";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
904: {
name: "护崽鬼母",
lv: 8,
hp: 315,
maxHp: 315,
att: 10,
def: 0,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 30, 7, 1, 2 ], [ 50, 12, 1, 2 ] ],
des: "“妖——风——起——！”",
skill: function() {
var t = e("scr_data");
if (100 * Math.random() < 50) return "【" + this.name + "使用「赤焰罗刹靴」，但是被你躲开啦！】";
var n = 4 * this.att - o.def;
t.role.hp -= n;
return "【" + this.name + "使用「赤焰罗刹靴」，正中靶心，你损失" + n + "点气血！】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
907: {
name: "剪径双妖",
lv: 20,
hp: 710,
maxHp: 710,
att: 85,
def: 10,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 5, 3 ] ],
des: "“来妖呀！这行者偷了我洞府宝贝！”",
skill: void 0,
defSkill: void 0,
winEvent: void 0,
lostEvent: function() {
var t = e("scr_data"), n = parseInt(Math.max(.5 * t.money, 0));
t.money -= n;
return "【你损失一半的盘缠！】";
}
},
908: {
name: "银环蛇妖（精英）",
lv: 6,
hp: 210,
maxHp: 210,
att: 1,
def: 0,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 3,
achieve: 1,
getAtt: 2,
drop: [ [ 100, 3, 3, 1 ] ],
des: "~嘶~嘶！~",
skill: function() {
var t = Math.max(7 - o.def, 0);
this.publicVar += 1;
var n = t * this.publicVar;
e("scr_data").role.hp -= n;
return "【中毒：每回合损失" + n + "点气血（" + this.publicVar + "层）】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
909: {
name: "醉酒山神（精英）",
lv: 15,
hp: 545,
maxHp: 545,
att: 0,
def: 0,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 1,
getAtt: 2,
drop: [ [ 100, 20, 1, 2 ] ],
des: "“偷饮本神猴儿酒，还想过山？”",
skill: function() {
var t = Math.max(120 - o.def, 0);
this.hp -= 99;
e("scr_data").role.hp -= t;
return "【醉汉使用「拼命」，你损失" + t + "点气血，醉汉损失99点气血！】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
910: {
name: "大肚债魔（幕后操手）",
lv: 200,
hp: 6645,
maxHp: 6645,
att: 1200,
def: 450,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 1,
getAtt: 2,
drop: [ [ 100, 99, 60, 3 ] ],
des: "“滚开！敢打老子女施主的注意？”",
skill: void 0,
defSkill: void 0,
winEvent: function() {
e("scr_data").chioce2[6] += 1;
return "";
},
lostEvent: void 0
},
911: {
name: "大肚债魔（幕后操手）",
lv: 200,
hp: 6645,
maxHp: 6645,
att: 1200,
def: 450,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 1,
getAtt: 2,
drop: [ [ 100, 99, 60, 3 ] ],
des: "“滚开！敢打老子女施主的注意？”",
skill: void 0,
defSkill: void 0,
winEvent: function() {
e("scr_data").chioce2[6] += 1;
return "";
},
lostEvent: void 0
},
996: {
name: "覆面妖客",
lv: 99,
hp: 99999,
maxHp: 99999,
att: 0,
def: 9999,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 0, 4, 1 ], [ 10, 4, 1, 2 ] ],
des: "“想知道我是谁？那是不可能的！”",
skill: function() {
var t = e("scr_data"), n = 2 * Math.random() + 1, a = parseInt(o.maxHp * n);
t.role.hp -= a;
return "【蒙面人使用「闷棍Max」，你损失" + a + "点气血！】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: function() {
var t = e("scr_data"), n = e("scr_public");
t.ifFollow[0] = 0;
t.distance = 300;
t.button[0] = !1;
t.button[1] = !0;
t.button[2] = !0;
n.ifNotify = !0;
n.save();
n.init();
return "【你被蒙面人打晕，趴光袈裟被丢在了长安城门口！】";
}
},
997: {
name: "覆面妖客",
lv: 99,
hp: 9999,
maxHp: 9999,
att: 0,
def: 9999,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 0, 4, 1 ], [ 10, 4, 1, 2 ] ],
des: "“想知道我是谁？那是不可能的！”",
skill: function() {
var t = e("scr_data"), n = 2 * Math.random() + 1, a = parseInt(o.maxHp * n);
t.role.hp -= a;
return "【蒙面人使用「闷棍Max」，你损失" + a + "点气血！】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: function() {
e("scr_data").distance = 99;
return "【你被蒙面人打晕，斋粮全丢，趴光袈裟被丢在了高老庄门口！】";
}
},
998: {
name: "西行说书人",
lv: 999,
hp: 9999,
maxHp: 9999,
att: 0,
def: 0,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 999,
achieve: 0,
getAtt: 1,
drop: [],
des: "“哈哈哈哈哈哈！你是想抵抗神的旨意么？”",
skill: function() {
var t = e("scr_data"), n = parseInt(.3 * o.maxHp);
t.role.hp -= n;
e("scr_effect").attackEfect1();
return "【啊哈哈哈你的西行数据正在被说书人删除啊哈哈哈西行已损坏西行已损坏】";
},
defSkill: function() {
return "【啊哈哈哈你的西行数据正西行已损坏啊哈哈哈你的西行数据正】";
},
winEvent: function() {
var t = e("scr_data");
t.itemNum[12] += 1;
return "获得【MMP】*1【慈悲泪】*1（用于解锁隐藏剧缘，你已拥有" + t.itemNum[12] + "）";
},
lostEvent: function() {
var t = e("scr_data2");
JSON.parse(cc.sys.localStorage.getItem("userData")) && cc.sys.localStorage.removeItem("userData");
t.initMoney = 50;
t.gameData[0] = 0;
e("scr_public").save2();
cc.director.loadScene("start");
return "你的存档已被说书人清除，西行即将自动关闭";
}
},
999: {
name: "西行天外执笔者",
lv: 999,
hp: 999999,
maxHp: 999999,
att: 9999,
def: 9999,
publicVar: 0,
escapeRate: 0,
enemyEscapeRate: 0,
lostHealth: 0,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 0, 4, 1 ], [ 10, 4, 1, 2 ] ],
des: "“行者，你的命数已落在我笔尖。”",
skill: function() {
var t = e("scr_data"), n = parseInt(.2 * o.maxHp);
t.role.hp -= n;
return "【“叫你丫的刷！啊！还刷不刷？！”】";
},
defSkill: function() {
var t = e("scr_data"), n = parseInt(.2 * o.hp);
t.role.hp -= n;
return "【“你丫还敢还手？你还敢还手！”】";
},
winEvent: void 0,
lostEvent: function() {
e("scr_data").health = -9999;
return "";
}
},
100001: {
name: "圣婴大王红孩儿",
lv: 1,
hp: 30,
maxHp: 30,
att: 1,
def: 1,
publicVar: 0,
escapeRate: 30,
enemyEscapeRate: 0,
lostHealth: 0,
achieve: 0,
getAtt: 1,
drop: [ [ 10, 26, 1, 2 ] ],
des: "“三昧真火在此，谁敢称第一？”",
skill: function() {
var t = e("scr_data"), n = 10 * t.kills[2];
if (100 * Math.random() < n) {
var a = 2 * this.att - o.def, i = this.def;
t.role.hp -= a;
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= i;
return "【童子使用「啊拖勒啊可痛！」，你受到" + a + "点劫伤，并降低" + i + "点护身力！】";
}
return "";
},
defSkill: function() {
var t = e("scr_data");
if (100 * Math.random() < Math.min(5 * t.kills[2], 75)) {
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 9999;
return "【童子使用「侯塞给！」】";
}
return "";
},
winEvent: function() {
var t = e("scr_data"), n = t.kills[2], a = "【“我是不会认输的！\n(▼ヘ▼#)”】";
t.specialEnemy[100001].lv += 3;
t.specialEnemy[100001].att += 15;
t.specialEnemy[100001].hp += 80;
t.specialEnemy[100001].maxHp += 80;
t.specialEnemy[100001].def += 6;
t.kills[2] += 1;
if (2 == n) {
t.itemNum[0] += 2;
a = "【童子留下2个「蟠桃」！然后遁走了！】你获得「蟠桃」*2";
}
if (6 == n) {
t.itemNum2[1] += 3;
a = "【童子留下3个「金疮药」！然后遁走了！】你获得「金疮药」*3";
}
if (12 == n) {
t.itemNum2[20] += 1;
a = "【童子留下一块「金砖」！然后遁走了！】你获得「金砖」*1";
}
if (20 == n) {
t.itemNum2[18] += 1;
a = "【童子留下一个「避尘靴」！然后遁走了！】你获得「避尘靴」*1";
}
return a;
},
lostEvent: function() {
e("scr_data").publicVar2[7] += 1;
return "【︿(￣︶￣)︿】";
}
},
100002: {
name: "吞山巨蟒（特殊）",
lv: 25,
hp: 875,
maxHp: 875,
att: 0,
def: 0,
publicVar: 0,
escapeRate: 80,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 3,
getAtt: 3,
drop: [ [ 100, 3, 3, 1 ] ],
des: "特注：斗法结束后巨蟒不会回满血！！！",
skill: function() {
var t = e("scr_data"), n = parseInt(Math.max(.07 * this.hp - o.def, 0));
t.role.hp -= n;
return "【" + this.name + "使用「缠绕」，你受到" + n + "点劫伤】";
},
defSkill: function() {
e("scr_data").specialEnemy[100002].hp = this.hp;
return "";
},
winEvent: void 0,
lostEvent: void 0
},
200001: {
name: "白骨夫人",
lv: 8,
hp: 315,
maxHp: 315,
att: 20,
def: 0,
publicVar: 0,
escapeRate: 40,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 20, 7, 1, 2 ], [ 10, 21, 1, 2 ], [ 100, 1, 1, 2 ] ],
des: "“小行者，姐姐借你一副皮囊可好？”",
skill: function() {
var t = e("scr_data"), n = parseInt(this.att), a = parseInt(.1 * this.att), i = parseInt(.2 * this.att);
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= a;
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= i;
t.role.hp -= n;
return "【" + this.name + "使用「壁咚」，你受到" + n + "点劫伤，降妖力下降" + i + "点，护身力下降" + a + "点！】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.specialEnemy[200001].lv += 20;
t.specialEnemy[200001].att += 80;
t.specialEnemy[200001].hp += 520;
t.specialEnemy[200001].maxHp += 520;
t.specialEnemy[200001].def += 40;
t.orderTimes[7] = 0;
return "【姐姐有点小兴奋了呢\n(*/ω＼*)】";
},
lostEvent: function() {
e("scr_data").orderTimes[7] += 2;
return "【“￣へ￣！非要逼姐姐？”】";
}
},
300001: {
name: "火焰狐妖." + e("scr_data").kills[1] + "转（稀有）",
lv: 35,
hp: 510,
maxHp: 510,
att: 0,
def: 0,
publicVar: 0,
escapeRate: 100,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 9, 1, 1 ] ],
des: "发现一只全身散发红色光芒的狐妖！",
skill: function() {
var t = e("scr_data"), n = 10 * t.kills[1] + 40;
if (100 * Math.random() < n) {
var a = parseInt(.12 * t.role.hp + 5 + 10 * t.kills[1]);
t.role.hp -= a;
this.hp += a;
return "【火焰狐妖使用「灵魂摄取」，你损失12%的当前气血（" + a + "），火焰狐妖恢复" + a + "点气血！】";
}
return "";
},
defSkill: function() {
var t = e("scr_data");
if (100 * Math.random() < 10 * t.kills[1] + 40) {
var n = parseInt(.12 * (this.maxHp - this.hp) + 5 + 10 * t.kills[1]);
this.hp += n;
t.role.hp -= n;
return "【火焰狐妖使用「红灵护体」，恢复自身12%已损失的气血！(" + n + "点)，并对你造成" + n + "点劫伤！】";
}
return "";
},
winEvent: function() {
var t = e("scr_data");
t.kills[1];
t.specialEnemy[300001].lv += 5;
t.specialEnemy[300001].att += 35;
t.specialEnemy[300001].hp += 210;
t.specialEnemy[300001].maxHp += 210;
t.specialEnemy[300001].def += 10;
t.kills[1] += 1;
return "";
},
lostEvent: void 0
},
300002: {
name: "黑风山熊罴怪（稀有）",
lv: 45,
hp: 2275,
maxHp: 2275,
att: 0,
def: 0,
publicVar: 0,
escapeRate: 50,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 8, 1, 1 ] ],
des: "特注：斗法结束后黑熊精不会回满血！！！",
skill: function() {
var t = e("scr_data"), n = parseInt(Math.max(.1 * this.hp - o.def + this.def, 0));
t.role.hp -= n;
return "【" + this.name + "使用「咆哮」，你受到" + n + "点劫伤】";
},
defSkill: function() {
var t = e("scr_data");
t.specialEnemy[300002].hp = this.hp;
this.def += 10;
t.role.hp -= this.def;
return "【黑熊精使用「石化皮肤」「强化反甲」，护身力+10，你损失" + this.def + "点气血】";
},
winEvent: function() {
var t = e("scr_data");
t.kills[3] += 1;
t.specialEnemy[300002].lv += 5;
t.specialEnemy[300002].def += 15;
t.specialEnemy[300002].maxHp += 400;
t.specialEnemy[300002].hp = this.hp;
i.save();
if (0 == t.skillLv[16] && this.lv >= 55) {
t.skillLv[16] = 1;
return "【激活特性「护身力提升2」】";
}
return "";
},
lostEvent: void 0
},
300003: {
name: "深渊巨蟒",
lv: 35,
hp: 875,
maxHp: 875,
att: 0,
def: 0,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 1,
getAtt: 3,
drop: [ [ 100, 3, 3, 1 ], [ 100, 26, 1, 2 ] ],
des: "特注：斗法结束后巨蟒不会回满血！！！",
skill: function() {
var t = e("scr_data"), n = parseInt(Math.max(.07 * this.hp - o.def, 0));
t.role.hp -= n;
return "【" + this.name + "使用「缠绕」，你受到" + n + "点劫伤】";
},
defSkill: function() {
e("scr_data").specialEnemy[300003].hp = this.hp;
return "";
},
winEvent: function() {
e("scr_data").choice[6] += 1;
return "";
},
lostEvent: void 0
},
400001: {
name: "黑水河盗宝妖队" + parseInt(899 * Math.random() + 100) + "队",
lv: 100,
hp: 3345,
maxHp: 3345,
att: 0,
def: 234,
publicVar: 0,
escapeRate: 40,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 0,
getAtt: 1,
drop: [ [ 30, 11, 1, 1 ] ],
des: "“你知不知道好奇能让人疯掉？”",
skill: function() {
var t = e("scr_data"), n = 100 * Math.random(), a = this.lv / 5;
this.publicVar += 1;
if (this.publicVar <= 10) {
if (n < a) {
var i = 9 * this.lv - o.def;
t.role.hp -= i;
return "【走私团伙，向你发射了一颗定风珠！击中！你损失" + i + "点气血！】";
}
return "【走私团伙，向你发射了一颗定风珠！但是未命中】";
}
return "【走私团伙没定风珠啦！】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.specialEnemy[400001].lv += 20;
t.specialEnemy[400001].hp += 500;
t.specialEnemy[400001].maxHp += 500;
t.specialEnemy[400001].def += 40;
return "【“你给老子等着！”】";
},
lostEvent: void 0
},
400002: {
name: "千年枯藤怪",
lv: 199,
hp: 19999,
maxHp: 19999,
att: 0,
def: 20,
publicVar: 0,
escapeRate: 100,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 0, 10, 1 ], [ 100, 1, 10, 1 ] ],
des: "......",
skill: void 0,
defSkill: function() {
var t = e("scr_data");
t.specialEnemy[400002].hp = this.hp;
this.def += 20;
t.role.hp -= this.def;
return "【反弹！你损失" + this.def + "点气血】";
},
winEvent: function() {
var t = e("scr_data");
t.specialEnemy[400002].lv += 100;
t.specialEnemy[400002].def += 20;
t.specialEnemy[400002].maxHp += 1e4;
t.specialEnemy[400002].hp = this.hp;
i.save();
return "";
},
lostEvent: void 0
},
400003: {
name: "黄风怪",
lv: 60,
hp: 2025,
maxHp: 2025,
att: 310,
def: 121,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 3, 2, 1 ], [ 20, 9, 1, 1 ] ],
des: "“嗷嗷嗷~”",
skill: function() {
var t = e("scr_data"), n = 100 * Math.random();
this.publicVar += 1;
if (n < 20 * this.publicVar) {
var a = 2 * this.att - o.def;
t.role.hp -= a;
return "【" + this.name + "使用「暴击」，你损失" + a + "点气血！】";
}
return "";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.specialEnemy[400003].lv += 20;
t.specialEnemy[400003].att += 150;
t.specialEnemy[400003].hp += 620;
t.specialEnemy[400003].maxHp += 620;
t.specialEnemy[400003].def += 50;
if (this.lv >= 160 && 0 == t.skillLv[20]) {
t.skillLv[20] = 1;
return "【激活特性「护身力提升3」！】";
}
return "";
},
lostEvent: void 0
},
900001: {
name: "黑风莽汉（精英）",
lv: 15,
hp: 575,
maxHp: 575,
att: 60,
def: 0,
publicVar: 0,
escapeRate: 10,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 1,
getAtt: 1,
drop: [ [ 100, 1, 2, 2 ], [ 30, 23, 1, 2 ] ],
des: "“本妖掉的铜钱，你也敢捡？”",
skill: function() {
this.att += parseInt(.1 * this.att);
return "【壮汉使用「狂暴」，壮汉降妖力增加】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.specialEnemy[900001].lv += 30;
t.specialEnemy[900001].att += 180;
t.specialEnemy[900001].hp += 1e3;
t.specialEnemy[900001].maxHp += 1e3;
t.specialEnemy[900001].def += 60;
return "";
},
lostEvent: function() {
var t = e("scr_data"), n = parseInt(Math.max(.5 * t.money, 0));
t.money -= n;
return "【你损失一半的盘缠！】";
}
},
900002: {
name: "云游女侠",
lv: 20,
hp: 998,
maxHp: 998,
att: 50,
def: 36,
publicVar: 0,
escapeRate: 10,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 1,
getAtt: 1,
drop: [ [ 100, 0, 2, 1 ], [ 30, 22, 1, 2 ] ],
des: "“(╬￣皿￣)=○这是我先看到的”",
skill: function() {
var e = parseInt(.3 * this.def), t = parseInt(.1 * this.hp);
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= e;
this.hp += t;
return "【女侠使用「王之怒视」，你降低" + e + "点护身力，女侠很开心，恢复了" + t + "点气血】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.specialEnemy[900002].lv += 40;
t.specialEnemy[900002].att += 120;
t.specialEnemy[900002].hp += 1400;
t.specialEnemy[900002].maxHp += 1400;
t.specialEnemy[900002].def += 90;
return "";
},
lostEvent: void 0
},
900003: {
name: "巡天晓将",
lv: 500,
hp: 16500,
maxHp: 16500,
att: 1500,
def: 1150,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 1,
getAtt: 1,
drop: [ [ 100, 14, 6, 2 ], [ 100, 7, 1, 2 ] ],
des: "“小行者，过来抽根香？”",
skill: function() {
var e = this.att + o.def, t = parseInt(.2 * (this.maxHp - this.hp));
c.role.hp -= e;
this.hp += t;
return "【陈晓使用「西行.霸王拳」，对你造成" + e + "点劫伤，自身恢复" + t + "点气血】";
},
defSkill: function() {
if (100 * Math.random() < Math.min(this.lv / 50 + 20, 80)) {
var t = parseInt(.5 * o.att);
e("scr_data").role.hp -= t;
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 999999;
return "【" + this.name + "使用「格挡」「反弹」，你减少" + t + "点气血！】";
}
return "";
},
winEvent: function() {
var t = e("scr_data");
t.specialEnemy[900003].lv += 500;
t.specialEnemy[900003].att += 1500;
t.specialEnemy[900003].hp += 16e3;
t.specialEnemy[900003].maxHp += 16e3;
t.specialEnemy[900003].def += 1150;
return "";
},
lostEvent: function() {
e("scr_data").itemNum2[19] -= 1;
return "【芭蕉扇被抢走一把！你损失「芭蕉扇」*1！】";
}
},
900004: {
name: "？？？？",
lv: 1,
hp: 999999,
maxHp: 999999,
att: 300,
def: 0,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 3,
achieve: 1,
getAtt: 1,
drop: [],
des: "",
skill: function() {
if (this.att < 2 * o.att) {
this.att += 20;
this.lv += 1;
c.specialEnemy[900004].att = this.att;
}
c.specialEnemy[900004].hp = this.hp;
if (this.lv > 30) {
var e = 2 * Math.max(this.att - o.def, 0);
c.role.hp -= e;
return "【？使用「学习.暴击」你受到" + e + "点劫伤！】";
}
if (this.lv > 100) {
e = 2 * this.att;
c.role.hp -= e;
return "【？使用「学习.破防」你受到" + e + "点劫伤！】";
}
if (this.lv > 200) {
e = 2 * this.att;
var t = parseInt(.2 * e);
this.hp += t;
c.role.hp -= e;
return "【？使用「学习.吸血」你受到" + e + "点劫伤，？恢复" + t + "点气血！】";
}
if (this.lv > 500) {
this.publicVar += 1;
e = 2 * this.att, t = parseInt(.2 * e);
var n = parseInt(.2 * this.att * this.publicVar);
this.hp += t;
c.role.hp -= e + n;
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= parseInt(.05 * o.def);
return "【？使用「进化.毒暴」你受到" + e + "点劫伤，附加" + n + "点毒性劫伤，护身力降低5%。？恢复" + t + "点气血！】";
}
return "";
},
defSkill: function() {
if (this.def < 2 * o.def) {
this.def += 10;
this.lv += 1;
c.specialEnemy[900004].def = this.def;
c.specialEnemy[900004].lv = this.lv;
}
c.specialEnemy[900004].hp = this.hp;
if (this.lv > 150) {
var e = parseInt(.5 * this.def);
c.role.hp -= e;
return "【？使用「学习.反弹」你受到" + e + "点劫伤！】";
}
if (this.lv > 700) {
e = 2 * this.att;
c.role.hp -= e;
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= parseInt(.4 * o.att);
return "【？使用「进化.离子护甲」，格挡40%劫伤，你受到" + e + "点反弹劫伤！】";
}
return "";
},
winEvent: function() {
var t = e("scr_data");
t.specialEnemy[900004].lv += 999;
t.specialEnemy[900004].maxHp += 999999;
t.specialEnemy[900004].hp = this.hp;
i.save();
return "“如果我不存在...整个世界将会陷入混乱...”";
},
lostEvent: void 0
},
900005: {
name: "西行炼妖计划",
lv: 500,
hp: 599999,
maxHp: 599999,
att: 0,
def: 0,
publicVar: 0,
escapeRate: 100,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 1,
getAtt: 1,
drop: [ [ 100, 17, 4, 2 ] ],
des: "「西行：由于炼妖计划属于炼制失败的产品，有些功能并不完善，目前还不具备自愈能力；但是在这个世界的某处，还沉打坐着一个来自同一妖胎、即将完工的伟大作品！」",
skill: function() {
if (this.att < 1500) {
this.att += 4;
this.lv += 1;
c.specialEnemy[900005].att = this.att;
}
c.specialEnemy[900005].hp = this.hp;
if (this.lv > 580) {
this.publicVar += 1;
var e = this.att, t = parseInt(.05 * this.att * this.publicVar);
c.role.hp -= e + t;
return "【炼妖计划使用「进化.感染」你受到" + e + "点劫伤，附加" + t + "点生化劫伤！】";
}
return "";
},
defSkill: function() {
if (this.def < 600) {
this.def += 2;
this.lv += 1;
c.specialEnemy[900005].def = this.def;
c.specialEnemy[900005].lv = this.lv;
}
c.specialEnemy[900005].hp = this.hp;
if (this.lv > 530) {
var e = Math.max(this.def - 28, 0);
c.role.hp -= e;
return "【炼妖计划使用「模仿.反弹」你受到" + e + "点劫伤！】";
}
return "【炼妖计划静静的看着你...】";
},
winEvent: function() {
c.choice[6] += 1;
return "";
},
lostEvent: void 0
},
900006: {
name: "一块黑色的山石",
lv: 200,
hp: 299999,
maxHp: 299999,
att: 0,
def: 0,
publicVar: 0,
escapeRate: 100,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 8, 6, 1 ] ],
des: "「特注：这真的是块山石！」",
skill: function() {
c.specialEnemy[900006].hp = this.hp;
return "";
},
defSkill: function() {
if (this.def < 300) {
this.def += 1;
c.specialEnemy[900006].def = this.def;
}
c.specialEnemy[900006].hp = this.hp;
var e = 2 * this.def;
c.role.hp -= e;
return "【你受到" + e + "点反弹劫伤！】";
},
winEvent: function() {
c.choice[6] += 1;
return "";
},
lostEvent: void 0
},
900007: {
name: "入魔游方僧",
lv: 40,
hp: 3900,
maxHp: 3900,
att: 90,
def: 50,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 1,
getAtt: 1,
drop: [],
des: "“大胆！敢抢贫僧的钵？”",
skill: function() {
if (4 == this.publicVar) {
var e = this.att * (1 + this.publicVar);
c.role.hp -= e;
return "【" + this.name + "使用「叫尼玛抢！还敢不敢抢？」，你损失" + e + "点气血！】";
}
this.publicVar += 1;
var t = this.att, n = parseInt(.1 * this.att * this.publicVar);
c.role.hp -= t + n;
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= parseInt(.05 * o.att);
return "【" + this.name + "使用「连推带踹！」你受到" + t + "点劫伤，附加" + n + "流血，降妖力降低5%！】";
},
defSkill: function() {
this.att += parseInt(.05 * this.att);
return "【" + this.name + "使用「暴跳如雷」，游方僧降妖力提升！】";
},
winEvent: function() {
var t = e("scr_data");
t.specialEnemy[900007].lv += 20;
t.specialEnemy[900007].att += 63;
t.specialEnemy[900007].hp += 2e3;
t.specialEnemy[900007].maxHp += 2e3;
t.specialEnemy[900007].def += 23;
var n = cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent").randomItemNum || 3;
t.itemNum[2] += n;
return "【获得「铜铃」*" + n + "！】";
},
lostEvent: function() {
var t = e("scr_data");
t.money -= parseInt(.3 * t.money);
return "【你被抢走30%的盘缠！】";
}
}
};
t.exports = r;
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_data2: "scr_data2",
scr_effect: "scr_effect",
scr_public: "scr_public"
} ],
scr_eventData: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "2944e+wEixMS7sVFHLOkrHX", "scr_eventData");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {}
});
cc._RF.pop();
}, {} ],
scr_eventDetermine: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "9e235Y/Ke9BkbMuLhAsJW6/", "scr_eventDetermine");
cc.Class({
extends: cc.Component,
properties: {},
callBack: function() {
cc.director.loadScene("main");
},
onLoad: function() {
this.node.on("touchstart", this.callBack, this);
}
});
cc._RF.pop();
}, {} ],
scr_event: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "00b3c6RjfdHPbEfl8GaNNla", "scr_event");
cc.Class({
extends: cc.Component,
properties: {},
creatText: function(e, t, n) {
var a = new cc.Node(t);
a.addComponent(cc.Label);
a.parent = e;
a.setPosition(0, 0);
a.opacity = 0;
a.runAction(cc.fadeIn(2));
a.color = new cc.Color(255, 255, 255);
a.getComponent(cc.Label).overflow = 3;
a.getComponent(cc.Label).horizontalAlign = 1;
a.setContentSize(600, 300);
a.getComponent(cc.Label).string = n;
a.getComponent(cc.Label).lineHeight = 60;
a.getComponent(cc.Label).fontSize = 40;
},
event: function() {
var t = this, n = e("scr_data"), a = e("scr_data2"), i = e("scr_public"), c = e("scr_effect"), o = {
1: {
text: [ "长安西坊的墙上贴着一张降妖榜，", "榜下女施主低声说，此榜专招胆大的行者。", "“西边井里藏着吃香火的水妖。\n若愿下井镇它，需先买一张避水符，\n明日随队入井，\n事成赏二两盘缠并记一笔功德，你看如何？”", "我没有符钱", "买避水符" ],
BGM: "",
require: [ n.distance, 0 ],
choice1: function() {
n.enemyId = 102;
r("“小妖们，看看这行者有没有藏着香火钱！”");
},
choice2: function() {
if (n.money >= 10) {
n.choice[1] = 2;
n.money -= 10;
r("“很好，明日卯时井口相见。”");
} else c.playText("Canvas/notify2", "盘缠不够！", 60);
}
},
2: {
text: [ "“很好，", "今后行者只需将蚊妖尸身封在这八卦炉中，”", "说完妖人掏出一个收妖瓶，", "“贫道会按月前来收妖身，", "每只一文。", "在此拜谢！！”", "", "…(⊙_⊙;)…" ],
BGM: "",
require: [],
choice1: function() {},
choice2: function() {
var e = n.kills[0], t = (e / 10).toFixed(1);
n.money += e;
n.kills[0] = 0;
r("“你本次一共超度" + e + "只蚊妖，\n这是" + t + "两，请务必收下！待贫道炼成驱蚊神丹，必有重谢！告辞！”，\n妖人踩着一阵黄烟遁走了...\n【你获得" + t + "两】");
}
},
3: {
text: [ "破庙后有间塌了一半的土地祠。", "我推门进去，白发土地公正抱着一尊断香炉发呆。", "他说自己守过此地三百年，如今连供奉他的村名都忘了。", "祠中符灰满地，妖鼠在贡桌下乱窜。", "雨停后，祠里静得只剩香灰落声。", "【临走时，你抉择...】", "替土地公重整香案（消耗全部法力）", "香火已断，顺其自然吧" ],
BGM: "",
require: [],
choice1: function() {
n.energy = 0;
n.choice[2] = 2;
n.randomEvent[1] += 1;
r("你替土地公重整香案，离开时断香炉里忽然亮起一点火。获得「善缘牌」*1");
},
choice2: function() {
r("雨停后你离开土地祠，身后旧香炉轻轻响了一声。");
}
},
4: {
text: [ "   女施主点起一截残香，讲起自己被狐魅迷心的往事。", "   她曾是高老庄有名的绣娘，能绣百鸟朝凤，也能绣降妖符纹。", "   后来一只狐妖借她手艺骗取香火，她替妖背了因果，家业一夜散尽。", "   她几次想重开绣坊，却总在梦里听见狐笑。", "如今她只剩一件旧护法袈裟，想拿来换一线清醒。", "", "......" ],
BGM: "BGM3",
require: [],
choice1: function() {},
choice2: function() {
r("“我如今一身疾患，也没人要，就等着去见我的道侣呢”，临走时，她淡淡的说道。\n【护法袈裟等级+1！】");
}
},
5: {
text: [ "井底别有洞天，石壁上贴满驱蚊符。", "一位土地婆正替疯疯癫癫的道人捉小妖虱。", "道人正是——灭蚊妖堂九坛主！", "他认出你后抱着八卦炉直转圈。", "土地婆留你用斋，", "又讲起九坛主为何执念蚊妖。", "", "继续西行" ],
BGM: "",
require: [],
choice1: function() {},
choice2: function() {
t.eventId = 6;
t.ifTriggerEvent();
}
},
6: {
text: [ "“九坛主年轻时守一座河神庙，", "一夜妖蚊成灾，他只顾追一只金翅蚊王，", "却忘了庙里还睡着自己的小童。", "天亮时，小童满身毒包，魂魄被蚊王吸走。", "道侣离他而去，他也从此只认一件事：灭尽天下蚊妖。", "如今他疯疯癫癫，连饭都常忘了吃...”", "临走时，你抉择", "把身上所有盘缠留给九坛主", "算了，愿他自渡吧" ],
BGM: "",
require: [],
choice1: function() {
var e = n.kills[0], t = n.money, a = 5 * e + t;
n.kills[0] = 0;
n.money = 0;
n.role.maxHp += a;
n.choice[7] += 1;
r("【九坛主祝福】你的最大气血提高" + a + "点\n（提高量与捐盘缠数和灭蚊数有关，你已降伏" + e + "只蚊妖，捐出" + (t / 10).toFixed(1) + "两）");
},
choice2: function() {
r("你走出山洞，已是早晨，蔚蓝的天空中漂浮着朵朵白云");
}
},
7: {
text: [ "跟随那位女施主穿过蛛网般的巷子，", "我来到一处挂满红纱的盘丝小院。", "刚踏进门，黑风债鬼破门而入，怒吼：“敢碰我盘中花？”", "", "遁走..." ],
BGM: "",
require: [ n.distance, 0 ],
choice1: function() {},
choice2: function() {
n.role.hp = i.role.maxHp();
n.enemyId = 109;
i.save();
cc.director.loadScene("main");
}
},
8: {
text: [ "老行者曾是黄风岭下的挑担僧，护过一队取经人。", "那一夜黄风大作，他躲进石洞，醒来时同伴全被妖风卷走。", "从此他不敢再往西，只在长安破庙里买签运符、饮猴儿酒，装作自己还在等下一队人。", "", "..." ],
BGM: "",
require: [],
choice1: function() {},
choice2: function() {
n.energy += 60;
n.hunger = i.maxHunger();
n.role.hp = i.role.maxHp();
r("法力+60，斋粮全恢复，气血全恢复！");
}
},
9: {
text: [ "月兔仙子把我拉到桂树影下，眉飞色舞地讲月宫趣事。", "她说嫦娥娘娘罚她捣药三百杵，玉犬却偷偷替她数错。", "临走时她塞给你一个小包袱，让你选一样。", "月宫随身法衣", "桂花糕和盘缠" ],
BGM: "",
require: [],
choice1: function() {
n.itemNum2[27] += 1;
n.itemNum2[22] += 1;
n.itemNum2[21] += 1;
r("获得【锦襕袈裟】*1，【虎皮裙】*1，【月兔仙子手链】*1");
},
choice2: function() {
n.money += 40;
n.itemNum[0] += 20;
r("获得4两盘缠！【蟠桃】*20");
}
},
10: {
text: [ "“那你这诵经的盘缠够还吗？”\n“还行吧，如今一日可以赚三四块，多的时候十几块。如今只想把我妈治好，还债的事我还没想好...”", "“想过拜入仙门吗？”，我问。\n“想过呀，可我半路学艺，琵琶也只是皮毛。女儿国医馆收徒要看根骨，我这点盘缠连路引都买不起...”", "“你不是会琵琶么，也许能以曲安魂。”\n“若真能安魂，我先弹给自己听。”", "", "..." ],
BGM: "",
require: [],
choice1: function() {},
choice2: function() {
t.eventId = 11;
t.ifTriggerEvent();
}
},
11: {
text: [ "“我有个主意，一直想和你说。”杏仙忽然眼睛一亮。", "“什么主意？”", "“你沿途能拾到妖骨、舍利碎片、灵草，我懂长安妖市的门路。你负责闯路，我负责换成盘缠，如何？”", "", "好，就这么定！" ],
BGM: "",
require: [],
choice1: function() {},
choice2: function() {
t.eventId = 12;
t.ifTriggerEvent();
}
},
12: {
text: [ "提示：自今日起，你可以进入黄风洞支路。每日拾得的特殊妖材，会由杏仙带去长安妖市换成盘缠（金额可在每日结算界面查看）", "最后，你需要抉择分成比例。\n（举例：若今日卖出10两，选七成即你得7两，杏仙得3两；选三成则反过来）\n（说书人：取经路上没有五五开的安稳选项。）", "我最辛苦，应该我拿大头（拿7成）", "我应该帮帮她，我拿小头吧（拿3成）" ],
BGM: "",
require: [],
choice1: function() {
n.publicVar2[21] = 7;
i.save();
cc.director.loadScene("main");
},
choice2: function() {
n.publicVar2[21] = 3;
i.save();
cc.director.loadScene("main");
}
},
13: {
text: [ "杏仙急忙跑来，脸色像被霜打过的花。", "“黑风债鬼找到我娘了，我得回去。我的东西你拿着，别问，别追。\n若有缘，灵山脚下再听我弹一曲。”", "\n说完她登上天兵云车，琵琶声断在阳光里。", "", "启程" ],
BGM: "",
require: [],
choice1: function() {},
choice2: function() {
var e = Math.max(parseInt(n.publicVar[7] / 50), 1), t = Math.min(Math.max(parseInt(n.publicVar[7] / 100), 1), 6);
n.money += 4 * e;
n.money += 10 * e;
n.itemNum2[26] += t;
n.itemNum2[27] += t;
if (n.publicVar[7] >= 600) {
n.itemNum2[10] += 1;
n.itemNum2[11] += 1;
r("你获得【盘缠】*" + (10 * e / 10).toFixed(1) + ",【蟠桃】*" + 4 * e + "，【如意金箍棒】*1，【大圣披风】*1，【如意石】*" + t + "，【月兔仙子手链】*" + t + "！\n【说明：赏赐与杏仙最终的缘分有关】");
} else if (n.publicVar[7] >= 400) {
n.itemNum2[10] += 1;
n.itemNum2[9] += 1;
r("你获得【盘缠】*" + (10 * e / 10).toFixed(1) + ",【蟠桃】*" + 4 * e + "，【如意金箍棒】*1，【护法袈裟】*1，【如意石】*" + t + "，【月兔仙子手链】*" + t + "！\n【说明：赏赐与杏仙最终的缘分有关】");
} else {
n.itemNum2[8] += 1;
n.itemNum2[9] += 1;
r("你获得【盘缠】*" + (10 * e / 10).toFixed(1) + ",【蟠桃】*" + 4 * e + "，【降妖短杖】*1，【护法袈裟】*1，【如意石】*" + t + "，【月兔仙子手链】*" + t + "！\n【说明：赏赐与杏仙最终的缘分有关】");
}
}
},
1003: {
text: [ "清晨，我正在打坐，", "忽听行囊外铜铃自鸣，像有小妖翻动包袱。", "是否要出去看看？", "是", "否" ],
BGM: "",
require: [],
choice1: function() {
n.enemyId = 100;
i.save();
cc.director.loadScene("main");
},
choice2: function() {
cc.director.loadScene("main");
}
},
1007: {
text: [ "遭到不明物体袭击！！！", "是否迎战?", "是", "否" ],
BGM: "",
require: [],
choice1: function() {
n.enemyId = 908;
i.save();
cc.director.loadScene("main");
},
choice2: function() {
cc.director.loadScene("main");
}
},
2002: {
text: [ "一大早，我正在打坐，", "几个黑风洞小妖踢翻了我的钵。", "领头莽先锋晃着狼牙棒，骂道：", "“在我山头歇脚，拜过洞主没有？”", "不理他", "递上一炷香" ],
BGM: "",
require: [],
choice1: function() {
if (0 == e("scr_data2").gameData[4]) {
n.role.hp = i.role.maxHp();
n.enemyId = 101;
i.save();
cc.director.loadScene("main");
} else {
n.money += 20;
r("“开玩笑的嘛，来，拿着买点用的，早点回山门吧孩子~”。获得2两~");
}
},
choice2: function() {
if (0 == e("scr_data2").gameData[4]) if (n.itemNum2[7] >= 1) {
n.itemNum2[7] -= 1;
r("胡渣大汉接过香，说道，\n“还算有点聪明气。不过，你最好给我滚远点，要不大洞府都没饭用，明白没？”");
} else cc.find("Canvas/Notify2").getComponent("cc.Label").string = "你身上没有香..."; else {
n.itemNum2[7] += 1;
n.itemNum2[12] += 2;
r("“开玩笑的嘛，来，拿点香火压惊~”。获得【安神香】*1，【猴儿酒】*2");
}
}
},
2004: {
text: [ "清晨，一个放牛小童，", "远远看了我许久；", "我刚想起身，他把一个纸包放在地上，转身就跑。", "纸包里是半块桂花糕，还有一枚写着平安的小符。", "", "(≥﹏ ≤)" ],
BGM: "BGM1",
require: [],
choice1: function() {
cc.director.loadScene("main");
},
choice2: function() {
n.hunger = i.maxHunger();
n.energy += i.maxEnergy();
n.role.hp = i.role.maxHp();
r("感觉自己两气满满哒！\n（状态全恢复+爆满！）");
}
},
2006: {
text: [ "城门告示上写着，", "“急招挑担行者：日供2两！年岁不限！经卷不限！无需通关文牒！功德日结。\n集合处：杨湖客栈五楼六零三。”", "你要去看看吗？", "去", "不去" ],
BGM: "",
require: [],
choice1: function() {
t.eventId = 1;
t.ifTriggerEvent();
},
choice2: function() {
cc.director.loadScene("main");
}
},
2009: {
text: [ "“行者请留步”", "一个奇装异服，蓬头垢面的人走过来说道，", "“在下灭蚊妖堂九坛主，", "立志杀尽天下蚊妖,", "近日，在下跟踪多日，", "行者法力了得，所到之处，妖蚊妖身遍野，", "在下实在佩服，", "不知是否愿帮我完成一个心愿?”", "", "蛤?" ],
BGM: "",
require: [],
choice1: function() {},
choice2: function() {
t.eventId = 2;
t.ifTriggerEvent();
}
},
2011: {
text: [ "醉酒山神拦住去路，非说你偷饮了他的猴儿酒。", "给不给?", "不给", "给（需猴儿酒*1）" ],
BGM: "",
require: [],
choice1: function() {
n.role.hp = i.role.maxHp();
n.enemyId = 909;
i.save();
cc.director.loadScene("main");
},
choice2: function() {
if (n.itemNum2[12] >= 1) {
n.itemNum2[12] -= 1;
r("“我就说是你偷饮的嘛！还装清白？取经人也会嘴硬。”");
} else cc.find("Canvas/Notify2").getComponent("cc.Label").string = "你身上没猴儿酒...";
}
},
2014: {
text: [ "一位浑身散发着异味的中年女施主走过来，说道，", "“小帅哥，麻烦你个事儿，”", "说完她拿出一件旧护法袈裟。", "“这本来是留着过冬的袈裟，还是新的，你看能不能换你几根香抽抽？”", "换（需安神香*1）", "不换" ],
BGM: "",
require: [],
choice1: function() {
if (n.itemNum2[7] >= 1) {
n.itemNum2[7] -= 1;
n.itemNum2[9] += 1;
t.eventId = 4;
cc.audioEngine.stopAll();
cc.audioEngine.play("res/raw-assets/Audio/BGM3.ogg", !1, 1);
t.ifTriggerEvent();
} else cc.find("Canvas/Notify2").getComponent("cc.Label").string = "你身上没有那么多香...";
},
choice2: function() {
cc.director.loadScene("main");
}
},
2016: {
text: [ "游方僧之间的竞争变得日益激烈，", "很多游方僧不得不早晨4点、蹲守在各种小斋铺和落魄点...", "这一日，你总算领先了一个长期蹲守据点的土地婆，几分钟", "你抉择", "开左边的旧宝箱", "开右边的旧宝箱" ],
BGM: "",
require: [],
choice1: function() {
n.itemNum2[27] += 1;
n.itemNum2[24] += 1;
r("获得【月兔仙子手链】*1，【行者短袍】*1");
},
choice2: function() {
n.itemNum[0] += 4;
n.itemNum[1] += 4;
n.itemNum[4] += 3;
n.itemNum2[1] += 3;
n.money += 8;
r("获得【降妖木】*4【袈裟布】*4【蟠桃】*3【金疮药】*3【盘缠】*0.8");
}
},
2017: {
text: [ "“你还没滚出黑风岭？”", "“不知道这是本洞山头？”", "", "我正等你！" ],
BGM: "",
require: [ n.choice[0], 1 ],
require2: [ a.gameData[4], 0 ],
choice1: function() {},
choice2: function() {
n.enemyId = 101;
n.role.hp = i.role.maxHp();
i.save();
cc.director.loadScene("main");
}
},
2019: {
text: [ "我在柳荫下小憩，", "一位小仙童好奇地望着我的行囊，想凑过来。", "年轻妇人慌忙拉住她，从香囊里取出2两盘缠丢给我，说：", "“有手有脚，何不去挣一份功德？”", "把盘缠收起来，离开", "把盘缠还给她" ],
BGM: "BGM1",
require: [],
choice1: function() {
n.money += 20;
r("好吧...\n我就是个化缘僧\n【获得2两盘缠！】");
},
choice2: function() {
r("是啊，有手有脚，怎么就活不下去呢？为啥？");
}
},
2020: {
text: [ "“大胆行者！", "给本王起来！”", "我的感觉头部受到猛烈一击，鲜血流了下来。", "一个满身肥膘的大汉，凶狠的蹬着我，他的身后是前数日的那几个游方僧，", "“敢在本洞山头撒野的，就是你？”", "是", "不是" ],
BGM: "BGM1",
require: [],
choice1: function() {
if (0 == a.gameData[4]) {
n.skillLv[4] = 0;
n.enemyId = 103;
n.role.hp = i.role.maxHp();
i.save();
cc.director.loadScene("main");
} else {
n.itemNum2[11] += 1;
r("“哈哈哈哈哈~果然有几分胆气！拿上本王旧披风，往西闯吧！”。获得【大圣披风】*1");
}
},
choice2: function() {
if (0 == a.gameData[4]) {
n.enemyId = 103;
n.role.hp = i.role.maxHp();
i.save();
cc.director.loadScene("main");
} else {
n.itemNum2[11] += 1;
r("“哈哈哈哈哈~果然有几分胆气！拿上本王旧披风，往西闯吧！”。获得【大圣披风】*1");
}
}
},
3006: {
text: [ "清晨，五行山下起了妖甘霖，", "行囊帐里全部湿透，我慌忙逃窜，寻找避甘霖的地方，", "突然发现山脚有间民房", "【你要进去避甘霖吗？】", "去", "不去" ],
require: [ n.distance, 0 ],
choice1: function() {
t.eventId = 3;
t.ifTriggerEvent();
},
choice2: function() {
cc.director.loadScene("main");
}
},
3007: {
text: [ "来到一个小山庄，", "门口两个焚香的少年行者，挡住去路，", "不让过关。", "硬闯", "绕道而行" ],
require: [ n.distance, 0 ],
choice1: function() {
n.role.hp = i.role.maxHp();
n.enemyId = 104;
i.save();
cc.director.loadScene("main");
},
choice2: function() {
cc.director.loadScene("main");
}
},
3008: {
text: [ "我正在路边小解，", "突然，一辆黑色轿车疾驰而来，", "我本能一跃，滚落沟底，", "正在此时，车上下来两个拿着铁锹的农民！", "", "刚正面！" ],
require: [ n.choice[3], 2 ],
choice1: function() {},
choice2: function() {
n.role.hp = i.role.maxHp();
n.enemyId = 105;
i.save();
cc.director.loadScene("main");
}
},
3010: {
text: [ "清晨我被一阵阵大哭声和大笑声吵醒，", "我钻出行囊帐一看————", "路边，一个叉腿坐地、短发、身着中书院服的仙姑，饮着猴儿酒，一会大笑，一会大哭...", "过去问问", "算了，还是不要生事的好" ],
require: [],
choice1: function() {
0 == a.gameData[4] ? n.choice[5] += 1 : n.choice[5] += 66;
r("仙姑（月兔仙子，西行同伴之一）瞟了你一眼，并没有理你....");
},
choice2: function() {
n.role.hp -= 1;
r("仙姑（月兔仙子，西行同伴之一）向你扔了块山石，\n<(｀^′)>\n你损失1点气血");
}
},
3011: {
text: [ "入夜，我正在行囊帐里打坐", "一个柔软的身体钻了进来，", "“(；´д｀)ゞ~道兄你好~", "有没有啥用的a~，", "我两天没用过东西啦\n(ಥ_ಥ)”", "有哇", "流氓——呀————！" ],
require: [ n.choice[5], 1 ],
choice1: function() {
n.choice[5] += 3;
n.itemNum[0] = 0;
n.itemNum2[0] = 0;
n.itemNum2[12] -= parseInt(.5 * n.itemNum2[12]);
n.ifFollow[0] = 1;
r("...“哈哈哈哈哈哈哈哈哈——嗝————谢谢道兄！\n(*≧▽≦)ツ┻━┻！\n哈哈哈，那就麻烦道兄带我回长安城啦！”\n【你损失所有的蟠桃/斋饭和一半的猴儿酒！！！月兔仙子跟随！】");
},
choice2: function() {
r("你一脚把仙姑（月兔仙子）踹出了行囊帐...");
}
},
3013: {
text: [ "“嘿~道兄，做早饭咧~(｀・ω・´)", "我做饭可厉害啦(*￣︶￣)，", "让我试试呗( • ̀ω•́ )✧~", "让她试", "不让她试" ],
require: [ n.ifFollow[0], 1 ],
choice1: function() {
if (n.choice[5] < 35) {
n.role.hp = 1;
n.choice[5] += 3;
r("...你饮了一大盆「黯然销魂十杂大补汤」\n【气血全损失，月兔仙子缘分+4】");
} else {
n.itemNum2[0] += 1;
r("获得【斋饭】*1");
}
},
choice2: function() {
n.choice[5] -= 3;
r("哼！￣へ￣\n【月兔仙子缘分-4】");
}
},
3015: {
text: [ "发现一个山洞，", "洞里有两条路，", "一条似乎有点亮光，", "一条布满青苔，黑不见底", "你走哪条？", "有亮光的", "幽黑的" ],
require: [],
choice1: function() {
t.eventId = 5;
t.ifTriggerEvent();
},
choice2: function() {
n.itemNum2[18] += 1;
r("你找了一个【避尘靴】！拿了赶紧溜了~");
}
},
3016: {
text: [ "“道兄(ಥ﹏ಥ)，", "刚才雷公像把天敲裂了，太吓人啦(´థ౪థ)σ，", "emmm..那个..我能在你行囊旁打坐一会儿吗？\n(︶.̮︶✽)”", "可以哇", "不行！" ],
require: [ n.ifFollow[0], 1 ],
choice1: function() {
n.energy = 0;
n.choice[5] += 10;
r("由于月兔仙子入夜说梦话（偷笑）、蹬人，你一晚没打坐！\n【法力0恢复！月兔仙子缘分+10】");
},
choice2: function() {
n.choice[5] -= 4;
r("￣へ￣\n【月兔仙子缘分-4】");
}
},
3017: {
text: [ "有人喊抓贼，", "是否帮忙？", "是", "算了吧" ],
require: [],
choice1: function() {
n.role.hp = i.role.maxHp();
n.enemyId = 106;
i.save();
cc.director.loadScene("main");
},
choice2: function() {
cc.director.loadScene("main");
}
},
3022: {
text: [ "一个驻地大半年的地质探路僧、执意要请你去基地用口饭。", "【你去吗？】", "去", "不去" ],
require: [],
choice1: function() {
n.hunger = i.maxHunger();
n.itemNum[0] += 3;
n.itemNum2[13] += 1;
n.chioce2[0] = 1;
r("地质队，请你用了一顿饭。一位中年男托你送一个生日法宝给他的女儿。\n【斋粮全恢复！获得「蟠桃」*3！获得委托法宝「┑(=^ω^=)┑」*1】");
},
choice2: function() {
cc.director.loadScene("main");
}
},
3024: {
text: [ "你在一个隐蔽的草丛中发现一套水手服，", "似乎是有人故意放在此地的", "你要用它替换掉月兔仙子身上的旧袈裟吗？", "换换换！", "想想就行了(º﹃º )" ],
require: [ n.ifFollow[0], 1 ],
choice1: function() {
if (n.choice[5] > 400) {
n.choice[5] += 23;
r("(/ω＼)好害羞...不过只要你喜欢我就穿...\no(*////▽////*)q\n月兔仙子缘分+23");
} else {
n.role.hp = 1;
r("动~感~少~女~拳——！\n（╬￣皿￣）=○＃（￣＃）３￣）\n你损失全部气血");
}
},
choice2: function() {
cc.director.loadScene("main");
}
},
3025: {
text: [ "一个可怜的游方僧要求和你一起做个伴，", "你是否同意？", "同意", "拒绝" ],
require: [],
choice1: function() {
n.money = 0;
r("....第二天一大早，游方僧早就不见踪影。\n【你损失全部盘缠！】");
},
choice2: function() {
n.role.hp = i.role.maxHp();
n.enemyId = 107;
i.save();
r("“大胆！看我收了你！”");
}
},
3032: {
text: [ "“哥...那啥...e....\n⁄(⁄⁄•⁄ω⁄•⁄⁄)⁄", "到了长安城后，你要不来我洞府玩吧”", "好呀", "算了，你父母肯定不会同意的" ],
require: [ n.ifFollow[0], 1 ],
choice1: function() {
r("“耶————！\n(’∇’)シ┳━┳掀桌（开心）\n。。。。\n┬—┬ノ('-'ノ)摆好摆好”");
},
choice2: function() {
r("月兔仙子似乎很伤心...");
}
},
4003: {
text: [ "老行者对于新同伴似乎很感兴趣，几次想过来搭话。", "最后终于憋不住，", "“道友，我琢磨了好数日，发现了一个天大的秘密！”", "他似乎很激动，", "“能不能借我一块盘缠，这次稳中大奖！跑不了！中了奖咱们一人一半！怎么样？”", "借", "不借" ],
require: [],
choice1: function() {
if (n.money >= 10) {
n.publicVar2[14] = 1;
r("老行者抢过盘缠，一溜香，不见了...");
} else cc.find("Canvas/Notify2").getComponent("cc.Label").string = "你兜里有几个盘缠，心里没点数？";
},
choice2: function() {
r("“哎~难受哇~看着盘缠，就没了...”");
}
},
4006: {
text: [ "我正在在街上拾取落魄，突然一个20上下，穿着短裳、罗刹靴的女施主，拉住我的袈裟小声说，", "“小帅哥，要不要来玩会儿，只要5文哟~”", "不去！", "好呀(°_°) " ],
require: [],
choice1: function() {
cc.director.loadScene("main");
},
choice2: function() {
n.publicVar2[15] += 1;
t.eventId = 7;
t.ifTriggerEvent();
}
},
4007: {
text: [ "老行者不知道哪里弄了点回锅肉和猴儿酒，", "非要叫你过去用两口，", "当然去呀！", "算了，不想和他有什么瓜葛" ],
require: [ n.publicVar2[14], 1 ],
choice1: function() {
t.eventId = 8;
t.ifTriggerEvent();
},
choice2: function() {
cc.director.loadScene("main");
}
},
4008: {
text: [ "这天，桥底下搬来一个琵琶仙姑（杏仙），", "单马尾、白体恤、牛仔裤，怎么看都不像是游方僧。", "她似乎有些腼腆，面对老行者的质问，只是莞尔一笑", "不行，太特么奇妖了，我也得去问个究竟", "暗中观察一段时间再说" ],
action: function() {
var t = e("scr_data");
0 == e("scr_data2").gameData[4] && (t.publicVar[7] = -49);
t.publicVar2[17] = 1;
i.save();
},
require: [],
choice1: function() {
n.publicVar[7] -= 10;
r("杏仙缘分-10！");
},
choice2: function() {
cc.director.loadScene("main");
}
},
4012: {
text: [ "三个身穿制服的胖子来到破庙，", "一脚踢开脚边的水壶，大声叫到，", "“不许在此地搭行囊帐，听到没！”", "正面刚", "赶紧递香（需香*3，盘缠*3）" ],
require: [],
choice1: function() {
n.role.hp = i.role.maxHp();
n.enemyId = 110;
if (0 == n.publicVar[8]) {
n.ifFollow[1] = 1;
n.publicVar[7] += 700;
n.friendSkill[1] = 1;
n.friendSkill[3] = 1;
n.friendSkill[4] = 1;
n.friendSkill[5] = 1;
n.friendSkill[6] = 1;
n.friendSkill[8] = 1;
r("杏仙加入斗法！");
} else {
i.save();
cc.director.loadScene("main");
}
},
choice2: function() {
if (n.itemNum2[7] >= 3 && n.money >= 30) {
n.itemNum2[7] -= 3;
n.money -= 30;
r("“一个星期内，给我搬走，听见没！”");
} else cc.find("Canvas/Notify2").getComponent("cc.Label").string = "尴尬，香不够...";
}
},
4014: {
text: [ "经过数日的寻找，", "总算找到地质队长描述的客栈，", "是否要将委托法宝（┑(=^ω^=)┑）归还呢？", "归还", "自己留着" ],
require: [ n.chioce2[0], 1 ],
choice1: function() {
n.itemNum2[13] -= 1;
n.chioce2[0] = 2;
r("队长的女儿，书院生模样，扎着双马尾，非常可爱。不过她似乎对法宝没啥兴趣，扔到一边，就进屋去了...\n年轻的师娘邀我进去，我担心弄脏了地板，慌忙推辞...走出客栈，恍若隔世...");
},
choice2: function() {
cc.director.loadScene("main");
}
},
4015: {
text: [ "八月盛夏，林荫路上，我意外的遇到了杏仙，", "她带着鸭舌帽，似乎不想被人认出；一把琵琶，落寞地独唱着。", "虽然围观的人很多，但是打赏的几乎没有，", "“这么貌若仙子还出来化缘？莫不是妖法？！”，有人摸着下巴，大声「嘀咕」", "打赏自己一半的盘缠", "算啦，这是她自己的事" ],
require: [],
choice1: function() {
if (n.money > 0) {
var e = parseInt(.5 * n.money + 1), t = parseInt(.5 * e + 4), a = (e / 10).toFixed(1);
n.money -= e;
n.publicVar[7] += t;
r("杏仙看了你一眼，低下头继续西行唱着歌...\n【你本次给出" + a + "两，杏仙存款+" + a + "两，缘分+" + t + "】");
} else cc.find("Canvas/Notify2").getComponent("cc.Label").string = "你身上一分盘缠也没有！";
},
choice2: function() {
cc.director.loadScene("main");
}
},
4017: {
text: [ "“(ಡωಡ)hiahiahia！", "道兄，可算找到你啦！", "就差此地的旧宝箱没找啦！(╥╯^╰╥)", "上次忘了说了，给，这是我洞府地址，记得来洞府坐坐哈(^_−)☆”", "", "(#ﾟДﾟ)" ],
action: function() {
n.publicVar[9] = 1;
i.save();
},
require: [ n.publicVar[3], 1 ],
choice1: function() {},
choice2: function() {
t.eventId = 9;
t.ifTriggerEvent();
}
},
4018: {
text: [ "这天，我在长街游荡，", "意外碰见了月兔仙子！", "她衣袂干净，腰间挂着捣药小杵。", "我刚想躲开，她已经挥手跑来。", "“道兄~好久不见呀！”", "“对不起，我...”", "“没事啦，你走后那位老行者把我送回月宫了。嫦娥娘娘罚我多捣三天药，我先去书院啦，拜拜~”", "", "....." ],
require: [ n.choice[5], 1 ],
require2: [ n.publicVar[3], 0 ],
choice1: function() {},
choice2: function() {
r("那位奇怪的老行者是谁？是她师父的恶作剧？");
}
},
4019: {
text: [ "这天，我在长街游荡，", "意外碰见那位月宫短发仙姑（月兔仙子）。", "她眉眼清亮，像刚从桂花露里洗过。", "是否过去打招呼？", "是", "算了，月宫仙子怎会记得我" ],
require: [],
require2: [ n.choice[5], 0 ],
choice1: function() {
n.publicVar[9] = 2;
r("“喔~是你呀~我认得你！要是有啥困难，可以来找我喔︿(￣︶￣)︿”，仙姑的热心，让我鼻子一酸，这是我初入西行有这种感受...");
},
choice2: function() {
r("注孤生————说书人留言");
}
},
4021: {
text: [ "街上有个男施主在对一个女施主拳打脚踢，", "我仔细一看，这位女施主正是刚来长安城时，叫我去玩玩的女施主！", "你是否帮她？", "帮忙", "算了，这是她自找的" ],
require: [],
choice1: function() {
n.role.hp = i.role.maxHp();
n.publicVar2[15] += 1;
n.enemyId = 111;
i.save();
cc.director.loadScene("main");
},
choice2: function() {
cc.director.loadScene("main");
}
},
4030: {
text: [ "一辆白色云车停到破庙外，", "老行者兴奋的跑过来喊道，“快快快，天降斋粮啦，一瓶灵血，2两盘缠！我道心不稳，不然我全献喽！”", "献灵血！（气血上限-70，盘缠+2两）", "不献！" ],
action: function() {
cc.find("Canvas/Choice/label").getComponent("cc.Label").string = "【申明】此处为西行奇遇效果，不等于真实情况，千万别误解";
},
require: [],
choice1: function() {
n.role.maxHp -= 70;
n.money += 20;
i.save();
r("气血上限-70，获得2两。");
},
choice2: function() {
cc.director.loadScene("main");
}
},
4032: {
text: [ "一帮凶恶的男施主将杏仙团团围住，其中一个黑风债主叫到，", "“念你死去爹的面子，老子一再忍让。给你10天时间，再不还盘缠，你就给我做花妖去！”", "朦胧夜色下，看不清杏仙脸上的表缘，不过，她一个字也没说。", "帮忙解围（BOSS级妖王）", "切莫冲动，以免搞砸，先观察数日再说" ],
require: [],
choice1: function() {
n.role.hp = i.role.maxHp();
n.enemyId = 112;
i.save();
cc.director.loadScene("main");
},
choice2: function() {
var e = parseInt(.3 * n.publicVar2[18]), t = (e / 10).toFixed(1);
n.publicVar2[18] -= e;
r("黑风债主把杏仙行囊翻了一个遍。【杏仙存款减少" + t + "两！杏仙存款还剩下" + (n.publicVar2[18] / 10).toFixed(1) + "】");
}
},
4033: {
text: [ "我在长安西坊边晃荡，", "一只小狐妖忽然冲来，把包袱塞进我怀里，又钻进人群不见。", "看背影和狐尾，应该正是玉面狐妖。", "", "打开包袱" ],
require: [ n.publicVar2[15], 2 ],
choice1: function() {},
choice2: function() {
n.itemNum[0] += 10;
n.itemNum2[23] += 1;
n.itemNum2[25] += 1;
r("获得【蟠桃】*10，【疗伤符】*1，【护身符】*1");
}
},
4034: {
text: [ "杏仙极为节俭，她每天入夜回来前，都会去附近一个炊饼铺，请购当天卖剩的、折扣炊饼。", "这天，看着她背着琵琶远远过来了，我决定和她开个玩笑，我冲到炊饼铺里，指着她经常请购的炊饼，喊道，", "“掌柜！这种炊饼我全要了！”（需2两）", "“哎呀，手抽筋了！不好意哈——哈~哈~哈”" ],
require: [],
choice1: function() {
if (n.money >= 20) {
n.money -= 20;
n.publicVar[7] += 20;
n.hunger += parseInt(2 * i.maxHunger());
r("买完炊饼，我在门口慢悠悠用着。不一会儿杏仙过来了，她看了看我，我吃惊的看着她，塞了一大口炊饼，她立马转头看别的去了。不一会儿，杏仙就从店里出来了，涨红了脸问道，“e...，能不能卖我几个炊饼”，“哦？这个呀？可以呀，一起回山门用吧，嘿嘿~”。【斋粮值爆满，杏仙缘分+20】");
} else cc.find("Canvas/Notify2").getComponent("cc.Label").string = "店长：“没盘缠装啥逼，蛤?”";
},
choice2: function() {
r("你被赶了出来...");
}
},
4040: {
text: [ "老行者用天兵赏下的几文盘缠，买了猴儿酒和素斋，招呼你过去坐坐。", "去还是不去呢？", "", "去", "不去" ],
require: [],
choice1: function() {
n.publicVar2[16] = parseInt(99 * Math.random() + 1);
n.hunger = i.maxHunger();
r("用完饭，老行者兴高采烈的抽出两张签运符，给了你一张。获得【签运符】（明晚开奖）！斋粮全恢复！");
},
choice2: function() {
cc.director.loadScene("main");
}
},
4041: {
text: [ "老行者拿着签运符，挺着圆鼓鼓的肚子，气喘吁吁回到破庙。", "俩人激动得不行！", "", "签运揭晓啦！好紧张！" ],
require: [ n.publicVar2[16], 1 ],
choice1: function() {},
choice2: function() {
if (n.publicVar2[16] < 90) {
n.energy = 10 * parseInt(.05 * n.energy);
r("...\n......\n.........\n签运落空\n你气得一入夜没打坐好\n法力恢复减半...");
} else {
n.money += 10;
n.energy = 10 * parseInt(.05 * n.energy);
r("...\n......\n.........\n恭喜签中一两香火！\n你兴奋得一入夜没打坐好\n法力恢复减半...获得1两...");
}
n.publicVar2[16] = 0;
}
},
4042: {
text: [ "黑风债主一伙再次来到破庙，围住杏仙问道：", "“怎么样？赚的盘缠呢？你不是在卖艺诵经么？”", "“那是给我妈治魔障的，你的盘缠我一定会还的。”，杏仙有点惊恐。", "“这是你自己的事，我不关心。我只是让你还盘缠！”，黑风债主拉高了嗓门", "【你要怎么办？】", "先稳住黑风债主，把身上所有盘缠给他（必须大于2两）", "...这种事，我无能为力" ],
require: [],
choice1: function() {
if (n.money >= 20) {
var e = n.money, t = parseInt(.5 * e + 5), a = (e / 10).toFixed(1);
n.money -= e;
n.publicVar2[18] += e;
n.publicVar[7] += t;
r("“哦？这么快就找到男道友啦？虽然不够塞牙缝。不过我也不是那么不通情达理，我就给「你们」多点时间。”，说完黑风债主离开了。\n【你本次给出" + a + "两，杏仙存款+" + a + "两，缘分+" + t + "】");
} else cc.find("Canvas/Notify2").getComponent("cc.Label").string = "这点钱恐怕会激怒对方...";
},
choice2: function() {
var e = parseInt(.5 * n.publicVar2[18]), t = (e / 10).toFixed(1);
n.publicVar2[18] -= e;
r("几个跟班上前围住杏仙，黑风债主从琵琶包里搜出" + t + "两，说道，“我也不是那么不通情达理，我先拿一些，回山门好交差，下次可没这么便宜了。”【杏仙存款减少" + t + "两！杏仙存款还剩下" + (n.publicVar2[18] / 10).toFixed(1) + "】");
}
},
4047: {
text: [ "“小哥，请问下哪里比较容易拾取到罐子？”，一日魔障仙姑过来问道，她的手在不停的颤抖。", "告诉她", "不理她" ],
require: [],
choice1: function() {
n.publicVar2[19] += 50;
r("“拾取罐子得清晨五点前去，不然会被其他人拾取走。小斋铺、旅馆、活动场多点，运气好可以拾取到零食、盒饭...”\n【你获得铜铃的概率降低3%！】");
},
choice2: function() {
cc.director.loadScene("main");
}
},
4050: {
text: [ "近日灭蚊妖堂大炼驱蚊丹，蚊妖尸身竟成了抢手货。", "一个妖市商人暗中观察我数日，终于忍不住凑上前。", "“我出长安最高价，每只三文！再过几日黄风一停，可就没这个价喽~”", "换取所有蚊妖尸身", "不卖！坐等升值！" ],
require: [],
choice1: function() {
var e = n.kills[0], t = 3 * e, a = (t / 10).toFixed(1);
n.money += t;
n.kills[0] = 0;
r("你一共换取" + e + "只蚊妖，获得" + a + "两！");
},
choice2: function() {
r("“阔以！你就掖着，等发霉吧！”，蚊妖商人气愤的走了。");
}
},
4054: {
text: [ "这天，你发现一只未开封的旧供箱。", "不过，你远远看见土地婆正扶着病仙姑向这边走来。", "你是否要开启供箱？", "凭本事发现的供箱，为啥要让给别人，开！", "算了，留给她当作迈出第一步的鼓励吧！" ],
require: [ n.publicVar2[19], 1 ],
choice1: function() {
n.itemNum[2] += 10;
n.itemNum2[27] += 1;
n.itemNum2[21] += 1;
r("获得【铜铃】*10，【月兔仙子手链】*1，【虎皮裙】*1");
},
choice2: function() {
n.publicVar2[19] += 50;
r("不一会儿母女俩就走了过来，女施主牵着塑料袋，土地婆在旧宝箱中掏了半天，女施主有点不耐烦，“快点呀！好臭！手都快断了！”。土地婆笑眯眯的安慰道，“再坚持会儿！回山门后、你一定可以让土地公大吃一惊的！”。女施主没再说什么了。");
}
},
4056: {
text: [ "杏仙渐渐卸下心防，我们的话也慢慢多了起来。", "“你欠黑风债鬼多少因果？”我问。", "“两万多两吧...”\n“怎会这么多？”\n“我爹当年向黑风洞借香火钱救人，利滚利，便成了这本账。”\n“你爹娘呢？”这个问题我一直想问。\n“爹被债鬼逼死，娘从那以后心魔缠身，如今寄在乡下亲戚家。”", "", "......." ],
require: [],
choice1: function() {},
choice2: function() {
t.eventId = 10;
t.ifTriggerEvent();
}
},
4059: {
text: [ "入夜，天气微凉，我买了几个热腾腾的馒头给杏仙送了过去。", "我背着琵琶，一起走在回洞府的路上。", "宁静的秋夜，皓月如洗，树影婆娑......", "【你是否要尝试牵下杏仙的手呢？】", "试一试！死了也值！（成功率不固定，根据缘分值计算概率！）", "算了吧，我拿什么去谈一场结缘？别连道友也没得做！" ],
require: [],
choice1: function() {
var e = n.publicVar[7];
if (e < 300) {
var t = parseInt(.1 * (300 - e));
n.publicVar[7] -= t;
r("我缓缓靠近，假装不经意间勾了一下她的手，她本能般的缩回了手，拉开距离。【杏仙戒备增加，缘分-" + t + "！】");
} else {
n.publicVar[7] += 40;
r("我缓缓靠近，假装不经意间勾了一下她的手，她轻微的缩了一下手，不过立即就安静下来，我顺势勾起她的指头，捏住她的手，一路都没有说话，但是我感觉我的都快跳出来啦，她的手心温暖而湿润。【杏仙缘分+40】");
}
},
choice2: function() {
cc.director.loadScene("main");
}
},
146: {
text: [ "我拾取完旧物回到破庙，黑风债鬼正把杏仙逼到墙边。", "“你爹欠的是因果，不是盘缠。今日不还，我便收你一缕魂火抵账。”", "斗法！", "给他盘缠（需10两）~" ],
action: function() {
e("scr_data").enemyId = 113;
i.save();
},
require: [],
choice1: function() {
n.role.hp = i.role.maxHp();
n.enemyId = 113;
i.save();
cc.director.loadScene("main");
},
choice2: function() {
if (n.money >= 100) {
n.money -= 100;
n.publicVar2[18] += 100;
n.publicVar[7] += 60;
n.enemyId = 0;
r("“哦？不错，小行者挺懂事的，往后就多麻烦你了啊~”，说完黑风债主离开了。杏仙缘分+60。");
} else cc.find("Canvas/Notify2").getComponent("cc.Label").string = "对于胃口增的人，没个十几块，恐怕难以打发";
}
},
163: {
text: [ "一个女施主和天兵来到破庙，见到杏仙后立马坐倒在地，大哭，", "“杏儿哇~你妈快不行了~”。杏仙呆住了。", "女施主往杏仙身后瞅了瞅，突然停止哭泣，问，“你平时就住这儿？”。\n杏仙没出声。\n女施主接着大哭道，“我苦命的孩子呀，从小都是住大宅，如今要和这些游方僧住一起，你到底吃了多少苦头哇~...”", "", "..." ],
action: function() {
e("scr_data").ifFollow[1] = 0;
n.publicVar2[17] = 0;
i.save();
},
require: [],
choice1: function() {},
choice2: function() {
t.eventId = 13;
t.ifTriggerEvent();
}
},
174: {
text: [ "“天官巡城，破庙闲人一律迁走。我等奉命行事，对不住啦，小行者。”", "几个金吾卫乘云车来到破庙外。", "知道了，我马上搬走（放弃抵抗）", "我就不走！（斗法）" ],
action: function() {
n.enemyId = 401;
i.save();
},
require: [],
require2: [ n.publicVar3[2], 0 ],
choice1: function() {
n.enemyId = 0;
n.publicVar3[2] = 1;
t.ifTriggerEvent("你搬离了破庙...");
},
choice2: function() {
n.role.hp = i.role.maxHp();
n.enemyId = 401;
i.save();
cc.director.loadScene("main");
}
},
175: {
text: [ "“听说你抗了天官令？”又来了几个金吾卫...", "我马上搬走（放弃抵抗）", "是的，我就是不走！（斗法）" ],
action: function() {
n.enemyId = 402;
i.save();
},
require: [],
require2: [ n.publicVar3[2], 0 ],
choice1: function() {
n.enemyId = 0;
n.publicVar3[2] = 1;
t.ifTriggerEvent("你搬离了破庙...");
},
choice2: function() {
n.role.hp = i.role.maxHp();
n.enemyId = 402;
i.save();
cc.director.loadScene("main");
}
},
176: {
text: [ "“请问抗令不迁的行者是不是你？”又来了几个天兵...", "不是的，我刚来，我这就搬走（放弃抵抗）", "是的（斗法）" ],
action: function() {
n.enemyId = 403;
i.save();
},
require: [],
require2: [ n.publicVar3[2], 0 ],
choice1: function() {
n.enemyId = 0;
n.publicVar3[2] = 1;
t.ifTriggerEvent("你搬离了破庙...");
},
choice2: function() {
n.role.hp = i.role.maxHp();
n.enemyId = 403;
i.save();
cc.director.loadScene("main");
}
},
177: {
text: [ "“听说你要与金吾卫斗法？”几个大块头天兵问道...", "没没没！这就走（放弃抵抗）", "是的，来吧！（斗法）" ],
action: function() {
n.enemyId = 404;
i.save();
},
require: [],
require2: [ n.publicVar3[2], 0 ],
choice1: function() {
n.enemyId = 0;
n.publicVar3[2] = 1;
t.ifTriggerEvent("你搬离了破庙...");
},
choice2: function() {
n.role.hp = i.role.maxHp();
n.enemyId = 404;
i.save();
cc.director.loadScene("main");
}
},
178: {
text: [ "“竟要本天将亲自出马的，就是你这行者？”一位小胡髭天将问道。", "哪敢！这就走！哈哈（放弃抵抗）", "哦~是吗？（斗法）" ],
action: function() {
n.enemyId = 405;
i.save();
},
require: [],
require2: [ n.publicVar3[2], 0 ],
choice1: function() {
n.enemyId = 0;
n.publicVar3[2] = 1;
t.ifTriggerEvent("你搬离了破庙...");
},
choice2: function() {
n.role.hp = i.role.maxHp();
n.enemyId = 405;
i.save();
cc.director.loadScene("main");
}
},
179: {
text: [ "“轰隆隆~轰隆隆”，天工机关巨兽开到破庙前...", "我走还不成嘛！（放弃抵抗）", "我已成仙，法力无边！（斗法）" ],
action: function() {
n.enemyId = 406;
i.save();
},
require: [],
require2: [ n.publicVar3[2], 0 ],
choice1: function() {
n.enemyId = 0;
n.publicVar3[2] = 1;
t.ifTriggerEvent("你搬离了破庙...");
},
choice2: function() {
n.role.hp = i.role.maxHp();
n.enemyId = 406;
i.save();
cc.director.loadScene("main");
}
}
};
function r(n) {
cc.find("Canvas/Determine");
e("scr_public").save();
cc.find("Canvas/Choice").active = !1;
cc.find("Canvas/EventText").active = !1;
cc.find("Canvas/Notify2").active = !1;
e("scr_effect").playText("Canvas/Notify", n, 80);
t.scheduleOnce(function() {
cc.find("Canvas/Determine").active = !0;
cc.find("Canvas/Determine").runAction(cc.fadeIn(2));
}, 2);
}
return o;
},
calculateEventId: function() {
var t = e("scr_public").regionId(), n = e("scr_data").stayDay, a = e("scr_data"), i = 0;
1e3 == t && (i = 1e3 + n[0]);
2e3 == t && (i = 2e3 + n[1]);
3e3 == t && (i = 3e3 + n[2]);
4e3 == t && (i = 4e3 + n[3]);
a.day > 143 && (i = a.day);
return i;
},
ifTrigger: function() {
var e, t, n = this.eventData(), a = n.require[0], i = n.require[1];
return ("undefined" == typeof a || a >= i) && ("undefined" == typeof n.require2 || (e = n.require2[0], 
t = n.require2[1], "undefined" == typeof n.require2 || e == t));
},
eventData: function() {
var e = this.eventId || this.calculateEventId(), t = this.event()[e];
return t;
},
triggerEvent: function() {
var t = e("scr_data"), n = this.eventData(), a = n.text, i = a.pop(), c = a.pop(), o = a.length, r = 1, s = t.publicVar[6] || 2, l = parseInt(.25 * s * 1e3), u = cc.find("Canvas/EventText"), p = this;
n.BGM;
"undefined" != typeof n.action && n.action();
this.initUI();
window.setTimeout(function() {
p.creatText(u, "plot0", a[0]);
}, l);
this.schedule(function() {
this.creatText(u, "plot" + r, a[r]);
r++;
}, s, o - 2);
this.scheduleOnce(function() {
var e = n.choice1, t = n.choice2, a = cc.find("Canvas/Choice/Choice1"), o = cc.find("Canvas/Choice/Choice2");
a.getChildByName("choiceText").getComponent("cc.Label").string = c;
o.getChildByName("choiceText").getComponent("cc.Label").string = i;
if ("" == c) {
a.active = !1;
cc.find("Canvas/Choice/label").active = !1;
} else a.active = !0;
cc.find("Canvas/Choice").runAction(cc.fadeIn(2));
a.on("touchstart", e, this);
o.on("touchstart", t, this);
}, s * o);
},
initUI: function() {
var e = cc.find("Canvas/Choice");
e.stopAllActions();
e.opacity = 0;
cc.find("Canvas/EventText").removeAllChildren();
e.getChildByName("Choice1").targetOff(this);
e.getChildByName("Choice2").targetOff(this);
},
ifTriggerEvent: function() {
"undefined" == typeof this.eventData() ? cc.director.loadScene("main") : this.ifTrigger() ? this.triggerEvent() : cc.director.loadScene("main");
},
onLoad: function() {
this.ifTriggerEvent();
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_data2: "scr_data2",
scr_effect: "scr_effect",
scr_public: "scr_public"
} ],
scr_explore: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "aac8eR1m+lE25FoXnDRrcRr", "scr_explore");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var t = cc.find("Canvas/Button/button_forward").getComponent("scr_forwardButton").constructor, n = new t(), a = new t(), i = new t(), c = new t(), o = this, r = e("scr_data");
this.node.runAction(cc.tintTo(.3, 255, 255, 255));
n.addDistance = function() {};
a.addDistance = function() {};
i.addDistance = function() {};
c.addDistance = function() {
e("scr_data").publicVar3[1] += 1;
};
n.shieldButton = function() {
o.node.off("touchstart", n.callBack, n);
o.node.runAction(cc.tintTo(.3, 114, 199, 255));
o.scheduleOnce(o.onLoad, .05);
};
a.shieldButton = function() {
o.node.off("touchstart", a.callBack, a);
o.node.runAction(cc.tintTo(.3, 114, 199, 255));
o.scheduleOnce(o.onLoad, .05);
};
i.shieldButton = function() {
o.node.off("touchstart", i.callBack, i);
o.node.runAction(cc.tintTo(.3, 114, 199, 255));
o.scheduleOnce(o.onLoad, .05);
};
c.shieldButton = function() {
o.node.off("touchstart", c.callBack, c);
o.node.runAction(cc.tintTo(.3, 114, 199, 255));
o.scheduleOnce(o.onLoad, .05);
};
n.getItemNum = function() {
return 1;
};
a.getItemNum = function() {
return 1;
};
i.getItemNum = function() {
return 2;
};
c.getItemNum = function() {
return Math.min(parseInt(e("scr_data").publicVar3[1] / 100 + 1), 4);
};
n.dryUp = function() {
var t = e("scr_public").regionId(), n = e("scr_data");
return 2e3 == t && n.day >= 42 || 3e3 == t && n.day >= 80;
};
n.playBGM = function() {};
n.stopForward = function() {
n.forward();
};
a.getEnemyRate = function() {
return [ [ 0, 0 ], [ 30, 1001 ], [ 50, 1002 ], [ 70, 1003 ], [ 80, 400002 ], [ 95, 300001 ], [ 100, 100001 ] ];
};
i.getEnemyRate = function() {
return [ [ 0, 0 ], [ 20, 2001 ], [ 40, 2002 ], [ 60, 2003 ], [ 75, 2004 ], [ 100, 2005 ] ];
};
c.getFigthId = function() {
return [ 3001, 3002, 3003, 3004, 3005, 3006, 3007, 3008, 3009, 3010, 900004 ][Math.min(parseInt(e("scr_data").publicVar3[1] / 50), 10)];
};
a.getDrop = function() {
return [ [ 16, 0, 2, 1 ], [ 25, 1, 2, 1 ], [ 25, 4, 2, 1 ], [ 19, 5, 1, 1 ], [ 6, 6, 1, 1 ] ];
};
i.getDrop = function() {
return [ [ 97, 2, 1, 1 ], [ 20, 2, 1, 1 ], [ 25, 99, 2, 3 ], [ 15, 7, 1, 1 ] ];
};
c.getDrop = function() {
return [ [ 60, 16, 1, 2 ], [ 20, 16, 1, 2 ], [ 8, 8, 1, 1 ] ];
};
a.regionEventId = function() {
return 7e3 + a.randomId([ 0, 20, 40, 60, 80, 100 ]);
};
i.regionEventId = function() {
return 8e3 + i.randomId([ 0, 25, 50, 75, 100 ]);
};
c.regionEventId = function() {
return 9e3 + c.randomId([ 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]);
};
c.regionEventId = function() {
return 0;
};
c.event = function() {
var t = 100 * Math.random(), n = e("scr_data"), a = e("scr_public"), i = e("scr_effect");
if (t < 10) {
n.role.hp = a.role.maxHp();
i.playText("Canvas/Text/txt_notify", "气血全恢复！", 60);
} else if (t < 25) {
n.publicVar3[4] += 10;
i.playText("Canvas/Text/txt_notify", "降妖力+10！（持续1天）", 60);
} else if (t < 40) {
n.publicVar3[10] += 10;
i.playText("Canvas/Text/txt_notify", "护身力+10！（持续1天）", 60);
} else if (t < 50) {
n.publicVar3[16] += 50;
n.role.hp += 50;
i.playText("Canvas/Text/txt_notify", "气血上限+50！（持续1天）", 60);
} else if (t < 60) {
n.publicVar3[5] += 1;
i.playText("Canvas/Text/txt_notify", "全法相（攻防血）提高1%！（效果随天数缓慢衰减）", 60);
} else if (t < 70) {
n.publicVar3[11] += 6;
i.playText("Canvas/Text/txt_notify", "遁走率+6%！（持续1天）", 60);
} else if (t < 80) {
n.publicVar3[17] += 1;
i.playText("Canvas/Text/txt_notify", "「月兔仙子手链」等级+1！（效果持续1天）", 60);
} else if (t < 90) {
n.publicVar3[18] += 1;
i.playText("Canvas/Text/txt_notify", "「如意石」等级+1！（效果持续1天）", 60);
} else {
n.publicVar3[9] += 1;
i.playText("Canvas/Text/txt_notify", "「照妖镜」等级+1！（效果持续1天）", 60);
}
a.save();
};
switch (r.publicVar[13]) {
case 0:
this.node.on("touchstart", n.callBack, n);
break;

case 1:
this.node.on("touchstart", a.callBack, a);
break;

case 2:
this.node.on("touchstart", i.callBack, i);
break;

case 3:
this.node.on("touchstart", c.callBack, c);
}
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_effect: "scr_effect",
scr_public: "scr_public"
} ],
scr_fightState: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c4f80DG6eFB/bvHazsL2je9", "scr_fightState");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var t = [ "平  衡", "拼  命", "猥  琐" ], n = e("scr_data"), a = this, i = this.node.getChildByName("text").getComponent("cc.Label");
c();
0 == n.skillLv[5] ? a.node.active = !1 : a.node.active = !0;
this.node.on("touchstart", function() {
if (1 == n.skillLv[9] && 0 == n.skillLv[14]) {
n.figthState += 1;
n.figthState > 1 && (n.figthState = 0);
c();
}
if (1 == n.skillLv[9] && 1 == n.skillLv[14]) {
n.figthState += 1;
n.figthState > 2 && (n.figthState = 0);
c();
}
}, this);
function c() {
var e = t[n.figthState];
i.string = e;
}
}
});
cc._RF.pop();
}, {
scr_data: "scr_data"
} ],
scr_fight: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "e0873SPr91PW4GARejADMmt", "scr_fight");
cc.Class({
extends: cc.Component,
properties: {},
creatText: function(e, t, n) {
var a = new cc.Node(t), i = (a.addComponent(cc.Label), cc.sequence(cc.scaleTo(.2, 1.3), cc.scaleTo(.1, 1)));
a.parent = e;
a.color = new cc.Color(0, 0, 0);
a.getComponent(cc.Label).overflow = 3;
a.getComponent(cc.Label).horizontalAlign = 1;
a.setContentSize(630, 200);
a.getComponent(cc.Label).string = n;
a.getComponent(cc.Label).lineHeight = 60;
a.getComponent(cc.Label).fontSize = 36;
a.setScale(0, 0);
a.runAction(i);
},
getItem: function(t) {
for (var n = "", a = t.length, i = e("scr_public"), c = e("scr_data"), v = 0, o = 0; o < a; o++) {
for (var z = 0; z <= 1+ c.wis; z++) if (100 * Math.random() < t[o][0]) {
var r = (27 * Math.random()).toFixed(0), q = (12 * Math.random()).toFixed(0), s = t[o][2], l = t[o][3];
if (2 == l) {
var u = i.itemName2;
c.itemNum2[r] += s;
n = n + "【" + u[r] + "】*" + s;
}
if (1 == l) {
u = i.itemName;
c.itemNum[q] += s;
n = n + "【" + u[q] + "】*" + s;
}
if (3 == l) {
c.money += s * 1;
n = n + "【盘缠】*" + (s/10).toFixed(1);
}
}
}
"" == n && (n = "没发现法宝");
i.save();
return n;
},
fight: function(t) {
var n = e("scr_data"), a = e("scr_public"), i = e("scr_effect"), c = this, o = e("scr_enemy")[t], r = {}, s = cc.find("Canvas/Fight/fight"), l = cc.find("Canvas/Fight/escape"), u = cc.find("Canvas/Fight/state"), p = cc.find("Canvas/Fight/notify2"), f = cc.find("Canvas/Fight/roleHp"), d = cc.find("Canvas/Fight/enemyHp"), m = cc.find("Canvas/Fight/escapeRate"), h = cc.find("Canvas/Fight/notify"), v = 0, y = 0, g = [ 0, 0, 0 ], b = n.figthExp, _ = (n.skillLv[4], 
n.buffState), x = 0, C = 0, E = {
att: parseInt(n.publicVar[7] + 600),
crit: 10 + 25 * n.friendSkill[5],
bleedNum: 1,
attackTimes: 1
};
n.publicVar[4] = 0;
n.nidie = 1;
n.wis = 0;
n.siw = 1;
for (var v = 0; v < n.siw; v++)if (100 * Math.random() <= 90) {
n.wis += 1;
n.siw += 1;
} 
this.correct = [ 0, 0 ];
this.publicVar = 0;
for (var I in o) r[I] = o[I];
var V = {
maxHp: a.role.maxHp(),
att: a.role.att(),
def: a.role.def()
};
(function() {
if (6 == t.toString().length) {
n.specialEnemy[t].hp <= 0 && (n.specialEnemy[t].hp = n.specialEnemy[t].maxHp);
var e = n.specialEnemy[t];
r.lv = e.lv;
r.hp = e.hp;
r.maxHp = e.maxHp;
r.att = e.att;
r.def = e.def;
}
})();
(function() {
if (-1 == n.publicVar[1]) {
r.hp = parseInt(.5 * r.hp);
r.maxHp = parseInt(.5 * r.maxHp);
} else if (1 == n.publicVar[1]) {
var e = n.day, a = e / 40 + 1, i = parseInt(Math.pow(e, 1.5) / 6);
if (6 == t.toString().length) {
var c = n.specialEnemy[t];
r.hp == r.maxHp && (r.hp = parseInt(c.hp * a));
r.maxHp = parseInt(c.maxHp * a);
r.att += 2 * i;
r.def += i;
} else {
r.hp = parseInt(r.hp * a);
r.maxHp = parseInt(r.maxHp * a);
r.att += 2 * i;
r.def += i;
}
}
})();
var N = V.def, T = r.des, k = [ "平  衡", "拼  命", "猥  琐" ];
s.targetOff(s);
l.targetOff(l);
s.on("touchstart", function Cao() {
r.hp > 0 && n.role.hp > 0 && function () {
var e = "你使用【普攻】", a = "", o = "", s = "", l = "", u = "", f = "", d = "";
c.publicVar = 0;
var m = n.figthState;
if (1 == n.skillLv[25]) {
var y = 100 * Math.random();
if (y < 10) {
var I = parseInt(.03 * V.maxHp);
c.publicVar += r.def;
n.role.hp += I;
n.role.hp > V.maxHp && (n.role.hp = V.maxHp);
s = "。【霸气】无视护身力，气血恢复" + I;
}
}
"undefined" != typeof r.defSkill && (u = r.defSkill());
if (function() {
{
if (1 == n.ifFollow[0] && 1 == n.friendSkill1[2]) {
var e = parseInt(n.choice[5] / 4), t = 100 * Math.random();
return t < e;
}
return !1;
}
}()) {
var N = parseInt(.1 * V.maxHp), T = parseInt(.03 * V.att);
n.role.hp += N;
c.correct[0] += T;
n.role.hp > V.maxHp && (n.role.hp = V.maxHp);
f = "【声援：气血+" + N + "，降妖力+" + T + "】";
}
var k = parseInt(Math.max(V.att + c.correct[0] + c.publicVar - r.def * (1 - 2 * n.itemNum2[15] / 100), 0));
if (0 == m) {
k = parseInt(k * (1 + b[0] / 500));
g[0] += 1;
}
if (1 == m) {
var S = parseInt(.08 * V.maxHp);
k = parseInt(k * (1.32 + b[1] / 200));
n.role.hp -= S;
g[1] += 1;
l = "「拼命：你损失" + S + "点气血」";
}
if (2 == m) {
k = parseInt(.7 * k);
g[2] += 1;
}
1 == _[0] && (k = parseInt(1.3 * k));
if (n.itemNum2[10] > 0) {
(v += 1) > 20 && (v = 20);
var H = parseInt(4 * n.itemNum2[10] * v);
k = parseInt(k * (H / 100 + 1));
e = e.replace("普攻", "割裂");
o = "，劫伤加成" + H + "%";
}
if (w = 2 * n.itemNum2[3] + x, 100 * Math.random() < w || 1 == C) {
k = parseInt(1.5 * k);
e += "，触发【暴击】";
C = 0;
A();
}
var w;
if (w = 40, 100 * Math.random() < w || 1 == C) {
n.nidie = 0;
}
if (n.itemNum2[19] > 0 && n.itemNum2[14] > 0 && n.publicVar[4] > 0) {
n.itemNum2[14] -= 1;
n.publicVar3[14] += 1;
k = parseInt(k * (n.itemNum2[19] + 1));
e = e.replace(/普攻|割裂/, "芭蕉扇击");
/暴击/.test(e) && (e = e.replace(/暴击/, "爆头"));
}
if (L = 2 * n.itemNum2[8], 100 * Math.random() < L) {
var N = parseInt(.21 * k), I = new RegExp("触发");
n.role.hp += N;
n.role.hp > V.maxHp && (n.role.hp = V.maxHp);
I.test(e) ? e += "【嗜血】" : e += "，触发【嗜血】";
a = "，恢复" + N + "点气血";
}
var L;
1 == n.ifFollow[1] && (d = function() {
var e = "。杏仙使用【普攻】", t = "", a = 100 * Math.random(), i = E.att - r.def + c.publicVar;
i = Math.max(i, 0);
if (a < E.crit) {
i = parseInt(1.5 * i);
e = e.replace(/普攻/, "暗杀");
if (n.friendSkill[3] > 0) {
var o = parseInt(.1 * i * E.bleedNum), s = parseInt(.1 * r.def);
r.hp -= o;
r.def -= s;
E.bleedNum += 1;
t = t + "，附加" + o + "流血，减防" + s;
}
if (n.friendSkill[4] > 0) {
var l = parseInt(.25 * i);
n.role.hp += l;
t = t + "。你恢复" + l + "气血";
}
if (n.friendSkill[6] > 0) {
C = 1;
t += "，你下次降妖力必定暴击！";
}
}
if (n.friendSkill[8] > 0 && E.attackTimes % 3 == 0) {
i = parseInt(2.5 * i);
e = /暗杀/.test(e) ? e.replace(/暗杀/, "终结.蝶舞") : e.replace(/普攻/, "终结");
};
r.hp -= i;
E.attackTimes += 1;
return e = e + ("，造成" + i + "点劫伤") + t;
}());
r.hp -= k;
100002 == t && (u = r.defSkill());
e = e + "，对" + r.name + "造成" + k + "点劫伤" + a + o + s + l + u + f + d;
D();
c.creatText(h, "roleNotify", e);
(function() {
R();
p.getComponent("cc.Label").string = "";
i.textZoon2("Canvas/Fight/enemyHp");
})();
P();
U();
F();
M();
}();
if (n.nidie == 1) {
s.getComponent("cc.Button").scheduleOnce(Cao, .1);
} else r.hp > 0 && n.role.hp > 0 && s.getComponent("cc.Button").scheduleOnce(S, 1);
}, s);
l.on("touchstart", function() {
var e = H(), t = 100 * Math.random();
n.skillLv[14] > 0 && (n.figthState = 2);
cc.find("Canvas/Fight/state/text").getComponent("cc.Label").string = k[n.figthState];
P();
if (t > e) {
r.hp > 0 && n.role.hp > 0 ? s.getComponent("cc.Button").scheduleOnce(S, .7) : F();
n.publicVar2[6] += 1;
D();
i.playText("Canvas/Fight/notify2", "遁走失败！", 60);
} else {
var a = 1 + n.itemNum2[18];
n.escapeExp += a;
i.playText("Canvas/Text/txt_notify", "遁走成功！\n遁走技术+" + a + "（累计" + n.escapeExp + "）", 80);
B();
L();
}
}, l);
R();
(function() {
var e = cc.find("Canvas/Fight");
cc.find("Canvas/Button").setScale(0, 0);
e.active = !0;
e.scale = 0;
e.runAction(cc.scaleTo(.5, 1));
cc.find("Canvas/Text/txt_notify").opacity = 0;
O();
(function() {
if (n.itemNum2[19] > 0) {
var e = cc.find("Canvas/Fight/gunButton");
e.active = !0;
w();
e.targetOff(e);
e.on("touchstart", function() {
0 == n.publicVar[4] ? n.publicVar[4] = 1 : n.publicVar[4] = 0;
w();
}, e);
}
})();
f.scale = 1;
m.scale = 1;
})();
i.playText("Canvas/Fight/notify2", T, 80);
function S() {
var e = r.enemyEscapeRate;
if (0 != e) {
if (100 * Math.random() < e - 5 * n.itemNum2[15]) {
(function() {
P();
i.playText("Canvas/Text/txt_notify", r.name + "遁走啦！", 80);
L();
})();
return;
}
}
var t, a = r.name + "降妖力", o = new RegExp("触发"), s = "", l = "", u = "", f = n.figthState;
if (t = 2 * n.itemNum2[11], 100 * Math.random() < t) {
v > 20 && (v = 20);
var d = 20 * (y += 1), m = Math.round(.05 * V.maxHp);
V.def = Math.round(N * (d / 100 + 1));
n.role.hp += m;
n.role.hp > V.maxHp && (n.role.hp = V.maxHp);
a += "。【火焰狐妖之灵】触发";
s = "，气血恢复" + m + "，护身力加成" + d + "%";
}
n.nidie = 1;
var g, _, x = parseInt(Math.max(r.att - c.correct[1] - V.def, 0));
0 == f && (x = parseInt(x * (1 - b[0] / 500)));
if (2 == f) {
var C = 10 + b[2];
x = parseInt(x * (.7 - b[2] / 600));
}
if (g = Math.min(2 * n.itemNum2[4], 60), 100 * Math.random() < g) {
x = 0;
o.test(a) ? a = a.replace("触发", "【格挡】触发") : a += "。【格挡】触发";
}
if (_ = 2 * n.itemNum2[9], 100 * Math.random() < _) {
var E = Math.max(V.def - c.correct[1], 0);
(x -= E) < 0 && (x = 0);
r.hp -= E;
o.test(a) ? a = a.replace("触发", "【反弹】触发") : a += "。【反弹】触发";
l = "，" + E + "点劫伤反弹给" + r.name;
}
n.role.hp -= x;
if (2 == f) {
C = parseInt(20 + b[2]);
n.role.hp += C;
n.role.hp > V.maxHp && (n.role.hp = V.maxHp);
u = "「猥琐：你恢复" + C + "点气血」";
}
a = a + "，你受到" + x + "点劫伤" + l + s + u;
"undefined" != typeof r.skill && (a = a + "！" + r.skill());
c.creatText(h, "enemyNotify", a);
O();
(function() {
R();
A();
p.getComponent("cc.Label").string = "";
i.textZoon2("Canvas/Fight/roleHp");
i.textZoon2("Canvas/Fight/escapeRate");
})();
F();
U();
M();
}
function H() {
var e = Math.round(100 * (1 - r.hp / r.maxHp)), t = (r.escapeRate + e + n.escapeExp / 10 + 2 * n.itemNum2[24] + n.publicVar3[11]).toFixed(1);
t < 0 && (t = 0);
return t = Math.min(t, 100);
}
function R() {
f.getComponent("cc.Label").string = "HP" + n.role.hp + "/" + V.maxHp;
d.getComponent("cc.Label").string = r.name + "LV" + r.lv + "\nHP" + r.hp;
m.getComponent("cc.Label").string = H() + "%";
n.publicVar[4] > 0 && w();
}
function w() {
cc.find("Canvas/Fight/gunButton").getComponent("cc.Label").string = "（" + n.itemNum2[14] + "）\n【" + [ "关", "开" ][n.publicVar[4]] + "】";
}
function M() {
a.save();
a.init();
}
function L() {
var e = cc.find("Canvas/Button"), t = cc.find("Canvas/Text/txt_notify");
if (n.role.hp <= 0) {
if (n.skillLv[24] > 0) {
if (100 * Math.random() < Math.min(Math.max(parseInt(n.publicVar3[12] / 5), 20), 40) && -9567 != r.escapeRate) {
n.role.hp = a.role.maxHp();
i.playText("Canvas/Text/txt_notify", "【金身行者：我又回来啦！~】", 80);
} else n.role.hp = 1 + parseInt(50 * n.itemNum2[25] + .03 * a.role.maxHp() * n.itemNum2[25]);
} else n.role.hp = 1 + parseInt(50 * n.itemNum2[25] + .03 * a.role.maxHp() * n.itemNum2[25]);
if (n.day <= 3) {
n.role.hp = a.role.maxHp();
n.health += r.lostHealth;
i.playText("Canvas/Text/txt_notify", "【说书人的守护：西行前3天斗法失败不会受到惩罚，并且帮你补满血，请开心点玩西行吧~】", 80);
}
}
cc.find("Canvas/Fight").runAction(cc.scaleTo(.3, 0));
e.active = !0;
e.runAction(cc.scaleTo(.3, 1));
t.opacity = 255;
n.enemyId = 0;
(function() {
if (n.buffState[0] > 0) {
var e = 100 * Math.random();
e < 50 && (n.buffState[0] = 0);
}
})();
D();
M();
}
function B() {
n.enemyId = 0;
M();
}
function U() {
if (r.hp <= 0) {
P();
var e = r.drop, t = "", a = "斗法胜利！\n获得", o = c.getItem(e), s = function() {
var e = "", t = r.achieve;
for (var z = 0; z <= 10; z++) if (0 != t && "undefined" != typeof t) {
n.achieve += t;
e = "。功德+" + t;
}
return e;
}();
1 == n.skillLv[5] && (t = function() {
var e = [ "【平衡架势】", "【拼命架势】", "【猥琐架势】" ], t = g.indexOf(Math.max.apply(Math, g));
n.figthExp[t] += 1;
{
if (n.figthExp[t] > 150) {
n.figthExp[t] = 150;
return "。" + e[t] + "熟练度已达最大值";
}
return "。" + e[t] + "熟练度+1";
}
}());
var l = function() {
var e = r.getAtt, t = 100 * Math.random();
{
if (t < 20) {
n.role.def += e;
return "。护身力提高" + e + "点！";
}
if (t < 60) {
n.role.att += e;
return "。降妖力提高" + e + "点！";
}
n.role.maxHp += 5 * e;
return "。最大气血提高" + 5 * e + "点！";
}
}(), u = function(e) {
{
if (1 == n.ifFollow[0] && 1 == n.friendSkill1[3]) {
var t = 100 * Math.random();
if (t < 30) {
var a = c.getItem(e);
return "【拾取漏：" + a + "】";
}
return "";
}
return "";
}
}(e), p = function(e) {
{
if (1 == n.publicVar[1]) {
var t = n.day + 20, a = 100 * Math.random();
if (a < t) {
var i = c.getItem(e);
return "【修罗：" + i + "】";
}
return "";
}
return "";
}
}(e), f = function(e) {
{
if (n.itemNum2[26] > 0) {
var t = 100 * Math.random(), a = n.itemNum2[26] + n.publicVar3[18];
if (t < a) {
var i = c.getItem(e);
return "【如意石：" + i + "】";
}
return "";
}
return "";
}
}(e);
n.winTimes += 1;
"没发现法宝" == o && (a = a.replace("获得", ""));
a = f + u + p + a + o + l + t + s;
"undefined" != typeof r.winEvent && (a = a + "！\n" + r.winEvent());
B();
c.scheduleOnce(function() {
i.playText("Canvas/Text/txt_notify", a, 80);
L();
}, 1.2);
}
}
function F() {
if (n.role.hp <= 0) {
var e = "";
P();
f.stopAllActions();
m.stopAllActions();
var t = r.lostHealth || 0;
e = n.day < 20 ? "斗法失败！道心-" + t + "（道心为0时西行结束）" : "斗法失败！道心-" + t;
n.health -= t;
"undefined" != typeof r.lostEvent && (e = e + "！\n" + r.lostEvent());
n.publicVar3[12] += 1;
B();
c.scheduleOnce(function() {
i.playText("Canvas/Text/txt_notify", e, 80);
L();
}, 1.2);
}
}
function A() {
var e = [ [ 14, 0 ], [ 0, 0 ], [ -14, 0 ], [ 0, 0 ], [ 4, 0 ], [ 0, 0 ] ], t = 0;
c.schedule(function() {
cc.find("Canvas").parent.setPosition(e[t][0], e[t][1]);
t++;
}, .05, 5);
}
function D() {
h.removeAllChildren(!0);
}
function P() {
f.scale = 0;
m.scale = 0;
s.scale = 0;
l.scale = 0;
u.scale = 0;
}
function O() {
s.scale = 1;
l.scale = 1;
u.scale = 1;
}
},
ifBeAttacked: function() {
var t = e("scr_data").enemyId;
t && this.fight(t);
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
scr_forwardButton: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "7e6b7ZHdulNI6LuPQKyXMkr", "scr_forwardButton");
cc.Class({
extends: cc.Component,
properties: {},
fight: function() {
var t = this.getFigthId();
e("scr_data").enemyId = t;
e("scr_public").save();
cc.find("Event/scr_fight").getComponent("scr_fight").fight(t);
},
getFigthId: function() {
for (var e = this.getEnemyRate(), t = 100 * Math.random(), n = e.length, a = 0; a <= n - 2; a++) if (t > e[a][0] && t <= e[a + 1][0]) return e[a + 1][1];
},
getEnemyRate: function() {
e("scr_data");
var t = [], n = e("scr_public").regionId();
1e3 == n ? t = [ [ 0, 0 ], [ 20, 1 ], [ 35, 2 ], [ 60, 3 ], [ 70, 4 ], [ 85, 100001 ], [ 95, 100002 ], [ 100, 706 ] ] : 2e3 == n ? t = [ [ 0, 0 ], [ 25, 21 ], [ 45, 22 ], [ 65, 23 ], [ 75, 24 ], [ 85, 25 ], [ 92, 26 ], [ 99, 100001 ], [ 100, 27 ] ] : 3e3 == n ? t = [ [ 0, 0 ], [ 25, 31 ], [ 40, 32 ], [ 50, 33 ], [ 60, 34 ], [ 70, 35 ], [ 80, 36 ], [ 88, 300001 ], [ 95, 300002 ], [ 100, 100001 ] ] : 4e3 == n && (t = [ [ 0, 0 ], [ 20, 41 ], [ 40, 42 ], [ 60, 43 ], [ 70, 44 ], [ 85, 45 ], [ 95, 400001 ], [ 100, 100001 ] ]);
return t;
},
getItemNum: function() {
return 2;
},
getItem: function() {
e("scr_public").regionId();
var t = e("scr_data"), n = this.getDrop(), a = cc.find("Event/scr_fight").getComponent("scr_fight").getItem(n), i = function() {
var t = e("scr_data"), a = t.itemNum2[17] + t.publicVar3[9], i = 100 * Math.random(), c = "";
i < a && (c = "没发现法宝" != (c = cc.find("Event/scr_fight").getComponent("scr_fight").getItem(n)) ? "\n【照妖镜：发现" + c + "】" : "\n【照妖镜：什么也没有发现！】");
return c;
}(), c = function() {
var t = e("scr_data"), a = "";
if (1 == t.publicVar[1]) {
var i = t.day + 20, c = 100 * Math.random();
c < i && (a = "没发现法宝" != (a = cc.find("Event/scr_fight").getComponent("scr_fight").getItem(n)) ? "\n【修罗：发现" + a + "】" : "\n【修罗：什么也没有发现！】");
}
return a;
}();
if ("没发现法宝" != a) a = i + c + "发现" + a; else {
var o = function() {
var t = e("scr_data"), a = 5 * (t.itemNum2[27] + t.publicVar3[17]), i = 100 * Math.random(), c = "";
if (i < a) if ("没发现法宝" != (c = cc.find("Event/scr_fight").getComponent("scr_fight").getItem(n))) c = "\n【月兔仙子手链：发现" + c + "】"; else {
t.money += 1;
c = "\n【月兔仙子手链：发现0.1两！】";
}
return c;
}();
t.publicVar2[1] += 1;
a = o + i + c + "什么也没有找到！";
if (t.skillLv[23] > 0) {
t.money += 1;
a += "【逆袭：盘缠+0.1】";
}
if (t.day <= 3) {
t.itemNum[5] += 2;
a += "【说书人的呵护：获得「灵草」*2（西行前3天有效）】";
}
}
e("scr_effect").playText("Canvas/Text/txt_notify", a, 60);
},
getDrop: function() {
var t = [], n = this.getItemNum(), a = e("scr_public").regionId();
1e3 == a && (t = [ [ 20, 0, n, 1 ], [ 30, 1, n, 1 ], [ 30, 4, n, 1 ], [ 20, 5, n, 1 ], [ 7, 6, n, 1 ], [ 2, 8, 1, 1 ] ]);
2e3 == a && (t = [ [ 75, 2, n, 1 ], [ 22, 99, n, 3 ], [ 15, 10, n, 1 ], [ 16, 7, n, 1 ] ]);
3e3 == a && (t = [ [ 15, 0, n, 1 ], [ 35, 1, n, 1 ], [ 35, 4, n, 1 ], [ 15, 5, n, 1 ], [ 5, 6, n, 1 ], [ 2, 8, 1, 1 ] ]);
4e3 == a && (t = [ [ 75, 2, n, 1 ], [ 25, 99, n, 3 ], [ 20, 10, n, 1 ], [ 10, 99, 2, 3 ] ]);
return t;
},
randomId: function(e) {
for (var t = 100 * Math.random(), n = e.length, a = 0; a <= n - 2; a++) if (t > e[a] && t <= e[a + 1]) return a + 1;
},
event: function() {
var e = 1;
e = 100 * Math.random() <= this.eventPartitionRate() ? this.randomId([ 0, 10, 20, 25, 35, 45, 60, 70, 80, 90, 100 ]) : this.regionEventId();
cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent").startEvent(e);
},
eventPartitionRate: function() {
var t = e("scr_public").regionId();
return 1e3 == t ? 60 : 2e3 == t ? 30 : 3e3 == t ? 50 : 4e3 == t ? 50 : void 0;
},
regionEventId: function() {
var t = 1, n = e("scr_public").regionId();
1e3 == n && (t = 1e3 + this.randomId([ 0, 25, 50, 75, 100 ]));
2e3 == n && (t = 2e3 + this.randomId([ 0, 10, 20, 40, 50, 90, 100 ]));
3e3 == n && (t = 3e3 + this.randomId([ 0, 15, 25, 35, 50, 65, 80, 100 ]));
4e3 == n && (t = 4e3 + this.randomId([ 0, 10, 25, 55, 75, 100 ]));
return t;
},
forward: function() {
var t = 100 * Math.random(), n = e("scr_data");
this.reduceRes();
this.recoveryHp();
this.reduceHealth();
if (t <= 20) if (n.distance <= 3) {
n.publicVar2[3] += 1;
n.wis = 0;
this.getItem();
} else {
n.publicVar2[2] += 1;
n.wis = 0;
n.siw = 1;
for (var v = 0; v < n.siw; v++)if (100 * Math.random() <= 60) {
n.wis += 1;
n.siw += 1;
} 
this.fight();
} else if (t <= 80) {
n.publicVar2[3] += 1;
n.wis = 0;
n.siw = 1;
for (var v = 0; v < n.siw; v++) if (100 * Math.random() <= 90) {
n.wis += 1;
n.siw += 1;
} 
this.getItem();
} else if (n.distance <= 5) {
n.publicVar2[3] += 1;
this.getItem();
} else {
n.publicVar2[4] += 1;
this.event();
}
},
reduceHealth: function() {
var t = e("scr_data");
if (e("scr_public").autoEat() && t.hunger <= 0) {
if (100 * Math.random() < 50) {
t.health -= 1;
e("scr_effect").textZoon("Canvas/Text/txt_health");
}
}
},
recoveryHp: function() {
var t = e("scr_data"), n = e("scr_public"), a = (4 + 8 * t.skillLv[3] + 36 * t.skillLv[17] + 2 * t.itemNum2[23]) * (1 + t.skillLv[21]), i = n.role.maxHp();
t.role.hp += a;
t.role.hp > i && (t.role.hp = i);
},
reduceRes: function() {
var t = e("scr_data");
e("scr_effect");
this.addDistance();
this.switchForwardButton();
t.energy -= this.Energy;
t.hunger > 0 && (t.hunger -= 5);
},
addDistance: function() {
e("scr_data").distance += 1;
e("scr_effect").textZoon("Canvas/Text/txt_distance");
},
switchForwardButton: function() {
var t = e("scr_data"), n = (e("scr_effect"), e("scr_public"));
if (100 == t.distance && 1 == t.stayDay[1]) {
t.button[0] = !1;
t.button[1] = !0;
t.button[2] = !0;
n.ifNotify = !0;
}
101 == t.distance && (t.button[1] = !1);
},
playBGM: function() {
cc.audioEngine.stopAll();
var e = cc.game._persistRootNodes;
for (var t in e) var n = e[t].getComponent("scr_BGM").BGM4;
cc.audioEngine.play(n, !1, 1);
},
callBack: function() {
var t = e("scr_data"), n = e("scr_effect"), a = e("scr_public"), i = this.dryUp();
a.ifGameOver();
this.Energy = 10;
if (t.energy >= this.Energy && 0 == i) if (t.day >= 180) this.end(); else if (290 == t.distance && 1 == t.ifFollow[0]) {
t.plotId = 1;
t.enemyId = 108;
a.save();
cc.director.loadScene("plot");
} else if (299 == t.distance) if (1 == t.ifFollow[0]) {
t.button[0] = !1;
t.button[1] = !0;
t.button[2] = !0;
a.init();
t.ifFollow[0];
t.plotId = 5;
a.save();
cc.director.loadScene("plot");
} else {
t.button[0] = !1;
t.button[1] = !0;
t.button[2] = !0;
t.distance += 1;
a.save();
a.init();
n.playText("Canvas/Text/txt_notify", "你已到达长安城！", 60);
} else this.forward(); else if (t.energy < this.Energy) n.playText("Canvas/Text/txt_notify", "法力不足！", 60); else if (100 == t.distance) {
t.button[0] = !0;
n.playText("Canvas/Text/txt_notify", "再待下去迟早会被发现，还是去长安城看看吧！", 60);
} else t.distance < 300 && t.distance > 100 && n.playText("Canvas/Text/txt_notify", "还是先去长安城整顿一下吧！", 60);
t.distance < 100 ? cc.find("Game/scr_mainUIinit").getComponent("scr_mainUIinit").showButton() : a.init();
t.distance > 300 && (t.distance = 300);
a.autoEat();
a.init();
a.save();
this.shieldButton();
},
end: function() {
var t = e("scr_effect"), n = e("scr_data"), a = e("scr_public");
({
0: function() {
n.energy = 1e3;
n.publicVar[13] = 2;
n.publicVar3[3] += 1;
a.save();
t.playText("Canvas/Text/txt_notify", "整个城池被大雾笼罩，身边的人影开始慢慢消失，周围没有一点声音...", 60);
},
1: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "一个男施主的身影缓缓浮现，一步步向我走了过来...", 60);
},
2: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "“欢迎你的到来，我的道友；此地是西行的终点，我是这场西行的说书人”", 60);
},
3: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "“虽然你可能有很多疑问，但是我并不想在此地回答你；我到此地来，只是想收获我的西行成果”", 60);
},
4: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "“但是在此之前，有些东西我需要向你交代一下。”", 60);
},
5: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "“首先，在这场西行里，只有两个真正的角色————你和我”", 60);
},
6: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "“其他角色，只不过是我所创造的虚拟角色”", 60);
},
7: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "“这个世界中既不存在「师父」，也没有「黄袍怪」和「通缉魔王」”", 60);
},
8: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "“我并不关心这些虚拟角色的「命运」，我只在意你体验完西行后，获得了什么”", 60);
},
9: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "“希望你能认真的回答我几个问题，我将根据问题的答案、和你在西行中的所有抉择，给出我的个人评价”", 60);
},
10: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "“如果评价没有达到我的预期，你的西行存档将会被我删除，那么请开始答题吧~”", 60);
},
11: function() {
cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent").startEvent(10001);
},
111: function() {
cc.find("Canvas/Text/txt_notify").y = 277;
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "“你的答题评分为" + n.publicVar[11] + "（满分30，与刚才十个题目有关）。\n这部分设计目的、只是想引导你去思考这些问题，你随便怎么选都可以，我不会去要求你必须怎么样”", 60);
},
112: function() {
var e = cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent");
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "“西行评分为" + e.gamePoint + "（满分52，与你在西行中的抉择有关）。\n这部分是考察你西行的策略性和你的性格（西行性格，不必较真）”", 60);
},
113: function() {
cc.find("Canvas/Text/txt_notify").y = 577;
var e = cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent");
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "“法相评分为" + e.attPoint + "（满分18，攻防血法相越「低」分数越高！）\n此地很有必要解释下为何、要这么设计：\n第一，我想让你注重培养同伴、被动技和某些法宝，而不仅是仅用法相碾压 \n第二，低法相取得真经比可能比高法相取得真经更具挑战性！”", 60);
},
114: function() {
var a = 59 - 10 * e("scr_data2").gameData[4];
cc.find("Canvas/Text/txt_notify").y = 77;
var i = cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent");
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "“总分为" + i.totalPoint + "，低于取得真经所需分数（" + a + "分）。”", 60);
},
115: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "“你的存档即将被我删除。”", 60);
},
116: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "“但是，被我删档后，重新开始西行，会有部分NPC保留对你的记忆，并且取得真经所需评分将至49分。”", 60);
},
117: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "“我会在此地等着你，再会吧~”", 60);
},
118: function() {
e("scr_data2").gameData[4] = 1;
e("scr_public").save2();
JSON.parse(cc.sys.localStorage.getItem("userData")) && cc.sys.localStorage.removeItem("userData");
cc.director.loadScene("start");
},
211: function() {
cc.find("Canvas/Text/txt_notify").y = 277;
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "“你的答题评分为" + n.publicVar[11] + "（满分30，与刚才十个题目有关）。\n这部分设计目的、只是想引导你去思考这些问题，你随便怎么选都可以，我不会去要求你必须怎么样”", 60);
},
212: function() {
var e = cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent");
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "“西行评分为" + e.gamePoint + "（满分52，与你在西行中的抉择有关）。\n这部分是考察你西行的策略性和你的性格（西行性格，不必较真）”", 60);
},
213: function() {
cc.find("Canvas/Text/txt_notify").y = 577;
var e = cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent");
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "“法相评分为" + e.attPoint + "（满分18，攻防血法相越「低」分数越高！）\n此地很有必要解释下为何、要这么设计：\n第一，我想让你注重培养同伴、被动技和某些法宝，而不仅是仅用法相碾压 \n第二，低法相取得真经比可能比高法相取得真经更具挑战性！”", 60);
},
214: function() {
var a = 59 - 10 * e("scr_data2").gameData[4];
cc.find("Canvas/Text/txt_notify").y = 77;
var i = cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent");
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "“总分为" + i.totalPoint + "，高于取得真经所需分数（" + a + "分）。你可以过关啦~”", 60);
},
215: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "“不过你想看到一个什么样的结局，将由你自己去抉择。我需要指出的是，无论你如何抉择，西行都将结束。请做出你的抉择。”", 60);
},
216: function() {
cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent").startEvent(20001);
},
311: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "听说老行者遗体被人领走啦，被一个中年女施主。（地点：长安城。结局：安息吧，痛苦）", 60);
},
312: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "落满枫叶的小路上，月兔仙子正和几位同窗手舞足蹈的说着些什么，不知道她是否还记得那个安静的少年呢？（地点：长安城。结局：两个世界）", 60);
},
313: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "再次碰到玉面狐妖时，她衣着端庄，在一家胭脂铺做卖胭脂，她说，“还是自立后过得舒坦呀，虽然没啥盘缠...”（地点：长安城。结局：从零启程）", 60);
},
314: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "我再也没有等到杏仙的消息，她能还清那些巨额的因果债吗？”（地点：长安城。结局：懵懂的青春）", 60);
},
315: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "土地公，你还好吗？（地点：长安城。结局：无奈的人生）", 60);
},
316: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "与世隔绝的灵山外的群山中，地质队长正在台灯下撰写报告；而在另一头，她的女儿正准备在论坛上通宵怼那些侮辱她偶像的人。（地点：山脉。结局：隔阂）", 60);
},
317: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "堂主的师娘突发脑溢血过世，他像孤魂一样终日在山间游荡着...（地点：山脉。结局：游荡的灵魂）", 60);
},
318: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "那处可疑的山庄已被天兵封锁。（地点：山脉。结局：封锁的造毒窝点）", 60);
},
319: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "土地的房子前已长满杂草，房内早已空荡荡...（地点：山脉。结局：天空的流星）", 60);
},
320: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "年轻的师娘和小仙姑依旧在河边散步，小仙姑对着一个游方僧做了一个鬼脸...（地点：高老庄。结局：榜样）", 60);
},
321: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "焚香的中年女施主找到一个胖嘟嘟的男友。“虽然经常挨打，但是总算不是一个人了”，女施主抽着香，淡淡的说道。（地点：高老庄。结局：可怜还是可恨？）", 60);
},
322: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "送糖的小童子，作文拿到全县第一名，梦里笑醒的师娘、大半夜跑到便利店给他买了一大盒五颜六色的棒棒糖...等待着儿子的苏醒。（地点：高老庄。结局：甜甜的童子）", 60);
},
323: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "三个游方僧已经三分高老庄，各自守着自己的地盘...（地点：高老庄。结局：扩散的黑暗）", 60);
},
324: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "呆萌的玉面狐妖打算放弃原来的职业，因为她找到了更稳定的生存方法————拾取塑料瓶...（地点：山脉。结局：孤儿的挣扎）", 60);
},
325: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "推开栅栏，院子里长满了杂草，似乎很久没人居住...（地点：洞府）", 60);
},
326: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "门是开着的，屋里没有灯火，静悄悄的；青灰色的屋顶、几颗新绿色的嫩芽，在夕阳的余晖下，显得格外的安静。一只狸妖咪在门前的阳光下打着哈欠（地点：洞府）", 60);
},
327: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "一个满头白发的土地，忽然呆在了门口....", 60);
},
328: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "...全剧终...", 60);
},
329: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "「感谢您能陪我看到最后！我是西行，再会啦~」", 60);
},
330: function() {
e("scr_data2").gameData[4] = 0;
e("scr_public").save2();
cc.director.loadScene("end");
},
411: function() {
n.plotId = 1001;
a.save();
cc.director.loadScene("plot");
},
412: function() {
n.plotId = 1002;
a.save();
cc.director.loadScene("plot");
},
413: function() {
n.plotId = 1003;
a.save();
cc.director.loadScene("plot");
}
})[n.publicVar3[3]]();
a.save();
a.init();
},
dryUp: function() {
return !1;
},
shieldButton: function() {
this.node.off("touchstart", this.callBack, this);
this.node.runAction(cc.tintTo(.3, 114, 199, 255));
this.scheduleOnce(this.onLoad, .05);
},
autoEat: function() {
var t = e("scr_data"), n = e("scr_public");
if (t.hunger <= 0) {
if (t.itemNum[0] >= 1) {
t.itemNum[0] -= 1;
t.orderTimes[5] += 1;
t.hunger += 20;
100 * Math.random() < 15 && (t.health += 1);
n.save();
n.textZoon("Canvas/Button/txt_state");
return !0;
}
if (t.itemNum2[0] >= 1) {
t.itemNum2[0] -= 1;
t.orderTimes[2] += 1;
t.hunger += 70;
n.save();
n.textZoon("Canvas/Button/txt_state");
return !0;
}
return !0;
}
return !1;
},
onLoad: function() {
this.endActionId = 0;
this.node.runAction(cc.tintTo(.3, 255, 255, 255));
this.node.on("touchstart", this.callBack, this);
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_data2: "scr_data2",
scr_effect: "scr_effect",
scr_public: "scr_public"
} ],
scr_friendSkillJudge1: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "fc5f8Ub5xdFcbVtSTj8STEm", "scr_friendSkillJudge1");
cc.Class({
extends: cc.Component,
properties: {},
skillJugge: function() {
var t = e("scr_data"), n = e("scr_public"), a = t.friendSkill1, i = {
1: function() {
0 == a[1] && t.choice[5] >= 30 && (a[1] = 1);
},
2: function() {
0 == a[2] && t.choice[5] >= 60 && (a[2] = 1);
},
3: function() {
0 == a[3] && t.choice[5] >= 120 && (a[3] = 1);
},
4: function() {
0 == a[4] && t.choice[5] >= 240 && (a[4] = 1);
}
};
for (var c in i) i[c]();
n.save();
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
scr_friendSkillUI1: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "0992cbWpqJNPIJFvroUyU98", "scr_friendSkillUI1");
cc.Class({
extends: cc.Component,
properties: {},
skillDes: function() {
var t = e("scr_data"), n = [ "【女侠】给主角增加" + parseInt(t.choice[5] / 4 + 10) + "点降妖力，增加幅度与缘分有关。天生自带，无需激活！", "【小道友】法力上限+20，缘分达到30激活！", "【声援】每回合，" + Math.min(parseInt(t.choice[5] / 4), 100) + "%几率给主角恢复10%气血，并增加主角3%降妖力（可无限叠加），触发概率与缘分相关，缘分达到60激活！", "【捡漏仙童】胜利后，30%几率再获得一次赏赐，全妖怪有效，缘分达到120激活！", "【阴阳调息】打坐时，道心恢复效果翻倍，气血恢复效果翻倍，法力额外再恢复20！缘分达到240激活！" ];
return n;
},
showDes: function() {
for (var t = e("scr_data"), n = e("scr_public"), a = t.friendSkill1, i = this.skillDes(), c = i.length, o = cc.find("Canvas/Show"), r = 0; r <= c - 1; r++) {
n.showText2(o, "skill" + r, i[r], 60);
a[r] > 0 && (o.getChildByName("skill" + r).color = new cc.Color(0, 255, 0));
}
},
onLoad: function() {
this.showDes();
cc.find("Canvas/back").on("touchstart", function() {
cc.director.loadScene("friend1");
}, this);
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_public: "scr_public"
} ],
scr_friendSkillUI2: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "d0387ZXPPtJs4Lfy6jPllmL", "scr_friendSkillUI2");
cc.Class({
extends: cc.Component,
properties: {},
skillDes: function() {
var t = e("scr_data"), n = [ "【同行】杏仙会与主角并肩作战（降妖力" + parseInt(t.publicVar[7] + 600) + "，随缘分提升）", "【剑舞】杏仙每次降妖力暴击提高5%！需30缘分", "【善心】每天" + Math.max(parseInt(t.publicVar[7] / 20 + 25), 25) + "%几率获得杏仙总存款的2%（杏仙存款为" + (t.publicVar2[18] / 10).toFixed(1) + "两，你能到手的碎银为" + (.02 * t.publicVar2[18] / 10).toFixed(1) + "两），触发几率随缘分提升。需60缘分", "【破甲】杏仙暴击后，附加给目标一层流血效果，降低目标10%护身力。需100缘分", "【保护】杏仙暴击后，劫伤的50%用于治疗主角。需160缘分", "【冷静】杏仙基础暴击率+25%。需240缘分", "【双影】杏仙暴击后，主角下次降妖力必定触发暴击！需340缘分", "【监督】每天" + Math.max(parseInt(t.publicVar[7] / 20 + 20), 20) + "%几率降低主角1%香瘾，触发几率随缘分提升。需460缘分", "【终结】杏仙每间隔两次降妖力，触发一次「终结」技。需600缘分" ];
return n;
},
showDes: function() {
for (var t = e("scr_data"), n = e("scr_public"), a = t.friendSkill, i = this.skillDes(), c = i.length, o = cc.find("Canvas/Show"), r = 0; r <= c - 1; r++) {
n.showText2(o, "skill" + r, i[r], 50);
a[r] > 0 && (o.getChildByName("skill" + r).color = new cc.Color(0, 255, 0));
}
},
onLoad: function() {
this.showDes();
cc.find("Canvas/goods").getComponent("cc.Label").string = "当前缘分：" + e("scr_data").publicVar[7];
cc.find("Canvas/back").on("touchstart", function() {
cc.director.loadScene("main");
}, this);
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_public: "scr_public"
} ],
scr_friendUI1: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "871fc61bpBNRLPJHo54vOLw", "scr_friendUI1");
cc.Class({
extends: cc.Component,
properties: {},
dialog: function() {
return [ "“我叫月兔仙子，今年17，在长安城三中诵经”", "“暑假开头的、三天母女保温期一过，我妈就成天说我懒，还贪吃。\n(ಥ_ಥ)”", "“骗我，不让我用太多肉，说对身体不好，合着我就是拾取来的。\n╮(╯﹏╰）╭”", "“如果不能吃肉，只吃草，那活着有啥意思呢？对吧。”", "“如是，我打算出去闯闯，做一个持猴儿酒闯江湖的女侠，哈~哈——哈！\nヽ(ﾟДﾟ)ﾉ”", "“我偷偷爬上一辆货运云车，一觉醒来，就在五行山。\n(*´・ｖ・)”", "“趁着老车夫方便，我溜下车，准备去路边的村子弄点用的。\n︿(￣︶￣)︿”", "“结果碰到一只巨丑无比的大黑犬，我一路狂奔，啥也不管了。\n(;´༎ຶД༎ຶ`)”", "“猿后，我也不知道到了彼处。\n(ಥ_ಥ)”", "“我想随便采几个蘑菇充充饥，结果发现没带火（幸好没带...）。\n(｡･ω･｡)”", "“不过呢，我聪明啊，我沿着货运云车路，拾取到几罐饮剩的猴儿酒。\n︿(￣︶￣)︿”", "“我躲在路边，暗中观察那些、光着膀子开车的老车夫，准备拦一个可靠点的。\n( • ̀ω•́ )✧”", "“结果，选中了你，你说我选得对吗？\n(*/ω＼*)”", "“其实哇，你打招呼后，我已经跟踪你一日了，嘿嘿~\n(｡･ω･｡)”" ];
},
randomDialog: function() {
return [ "“(ಡωಡ)hiahiahia....嗝~”", "“跟你讲我可是很厉害的哦ｸﾞｯ!\n(๑•̀ㅂ•́)و✧”", "“西行路上都是骗人的，哪有什么蟠桃、野兔，全是荆棘和虫子\n(╥╯^╰╥)”", "“偷偷告诉你...这场西行说书人没有女道友\n(ಡωಡ)hiahiahia”", "“偷偷告诉你...长得漂亮的仙姑大多都平胸，但是反过来，就不好说啦╮(╯﹏╰）╭”", "“我跟你讲哈！那些一个人、背着行囊云游的仙姑，最好别去搭讪=￣ω￣=”", "“啊嘞嘞~这样真让人头劫痛呢╮(￣▽￣)╭”", "“人家天生就不怎么会撒娇呢\n(ಡωಡ)hiahiahia”", "“嘿嘿(º﹃º )，放心放心姐姐不是什么好人~”", "“听说这场西行的最终BOSS是个变态╮(￣▽￣)╭”" ];
},
initUI: function() {
var t = e("scr_data");
cc.find("Canvas/inf/good").getComponent("cc.Label").string = "月兔仙子缘分：" + t.choice[5];
},
initUI2: function() {
var t = e("scr_data");
cc.find("Canvas/inf/good").getComponent("cc.Label").string = "杏仙缘分：" + t.publicVar[7];
},
eat: function() {
var t = e("scr_data"), n = e("scr_effect"), a = e("scr_public");
if (t.itemNum[0] > 0 || t.itemNum2[0] > 0) {
if (t.itemNum[0] > 0) {
t.publicVar2[10] = 0;
t.publicVar[2] = 1;
t.itemNum[0] -= 1;
t.choice[5] += 1;
this.initUI();
cc.find("Canvas/Show").removeAllChildren();
n.playText("Canvas/notify", "蟠桃-1，月兔仙子缘分+1", 80);
} else if (t.itemNum2[0] > 0) {
t.publicVar2[10] = 0;
t.publicVar[2] = 1;
t.itemNum2[0] -= 1;
t.choice[5] += 3;
this.initUI();
cc.find("Canvas/Show").removeAllChildren();
n.playText("Canvas/notify", "斋饭-1，月兔仙子缘分+3", 80);
}
a.save();
} else {
cc.find("Canvas/Show").removeAllChildren();
n.playText("Canvas/notify", "用光光啦！", 80);
}
},
takePill: function() {
var t = e("scr_data"), n = e("scr_effect"), a = e("scr_public");
for (var z = 0; z <= 1000 + t.talkTimes[0]; z++) if (t.itemNum2[1] > 0) {
t.choice[5] += 2;
t.itemNum2[1] -= 1;
this.initUI();
a.save();
cc.find("Canvas/Show").removeAllChildren();
n.playText("Canvas/notify", "“张嘴，用丹药~”\n“啊~~~~emmmmm~”\n月兔仙子缘分+2", 80);
} else {
cc.find("Canvas/Show").removeAllChildren();
n.playText("Canvas/notify", "没丹药啦~！", 80);
}
},
talk: function() {
var t = e("scr_data"), n = e("scr_effect");
if (t.energy >= 10) {
var a = this.dialog(), i = e("scr_public"), c = t.talkTimes[0], o = cc.find("Canvas/Show"), r = a[c];
if ("undefined" == typeof r) {
var s = this.randomDialog(), l = s.length;
r = s[parseInt(Math.max(Math.random() * l - .1))];
}
c % 3 == 0 && o.removeAllChildren();
i.showText(o, "plot" + c, r, 60);
t.talkTimes[0] += 0;
t.energy -= 10;
t.choice[5] += 1;
this.initUI();
i.save();
} else {
cc.find("Canvas/Show").removeAllChildren();
n.playText("Canvas/notify", "法力不足！", 80);
}
},
onLoad: function() {
e("scr_data"), e("scr_public");
var t = cc.find("Canvas/button");
cc.find("Canvas/close").on("touchstart", function() {
e("scr_public").save();
cc.director.loadScene("main");
}, this);
this.initUI();
t.getChildByName("button1").on("touchstart", this.talk, this);
t.getChildByName("button2").on("touchstart", this.eat, this);
t.getChildByName("button4").on("touchstart", this.takePill, this);
t.getChildByName("button3").on("touchstart", function() {
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
scr_home: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "82a35cQvNJE9LzHff6utW/P", "scr_home");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var t = e("scr_data"), n = e("scr_effect"), a = e("scr_public"), i = cc.find("Canvas/UI1"), c = cc.find("Canvas/UI2"), o = cc.find("Canvas/UI3"), r = cc.find("Canvas/UI4"), s = cc.find("Canvas/UI5"), l = i.getChildByName("choice1"), u = i.getChildByName("choice2"), p = i.getChildByName("choice3"), f = i.getChildByName("choice4"), d = i.getChildByName("choice5"), m = i.getChildByName("choice6"), h = t.publicVar2[23] + t.publicVar2[24] + t.publicVar2[25] + t.publicVar2[26] + t.publicVar2[27] + t.publicVar2[28] + t.publicVar2[29];
(function() {
i.getChildByName("back").on("touchstart", function() {
e("scr_public").save();
cc.director.loadScene("main");
}, this);
t.publicVar2[17] > 0 ? l.on("touchstart", v, l) : l.on("touchstart", J, l);
u.on("touchstart", function() {
e("scr_data").energy >= 10 ? cc.director.loadScene("notice2") : cc.director.loadScene("diary");
}, this);
p.on("touchstart", y, this);
f.on("touchstart", g, this);
h > 0 ? d.on("touchstart", b, this) : d.on("touchstart", J, this);
t.stayDay[3] > 12 ? m.on("touchstart", _, this) : m.on("touchstart", J, this);
c.getChildByName("choice1").on("touchstart", x, this);
c.getChildByName("choice2").on("touchstart", C, this);
c.getChildByName("choice3").on("touchstart", E, this);
o.getChildByName("choice1").on("touchstart", I, this);
o.getChildByName("choice2").on("touchstart", V, this);
o.getChildByName("choice3").on("touchstart", N, this);
0 != t.publicVar2[23] && r.getChildByName("choice7").on("touchstart", T, this);
0 != t.publicVar2[24] && r.getChildByName("choice6").on("touchstart", k, this);
0 != t.publicVar2[25] && r.getChildByName("choice5").on("touchstart", S, this);
0 != t.publicVar2[26] && r.getChildByName("choice4").on("touchstart", H, this);
0 != t.publicVar2[27] && r.getChildByName("choice3").on("touchstart", R, this);
0 != t.publicVar2[28] && r.getChildByName("choice2").on("touchstart", w, this);
0 != t.publicVar2[29] && r.getChildByName("choice1").on("touchstart", M, this);
s.getChildByName("choice1").on("touchstart", L, this);
s.getChildByName("choice2").on("touchstart", B, this);
t.stayDay[3] < 30 || s.getChildByName("choice3").on("touchstart", U, this);
0 != t.publicVar2[21] && s.getChildByName("choice4").on("touchstart", F, this);
1 == t.publicVar[9] ? s.getChildByName("choice5").on("touchstart", A, this) : 2 == t.publicVar[9] && s.getChildByName("choice5").on("touchstart", D, this);
c.getChildByName("back").on("touchstart", function() {
(function() {
a.save();
c.runAction(cc.scaleTo(.3, 0));
})();
K();
}, this);
o.getChildByName("back").on("touchstart", function() {
(function() {
a.save();
o.runAction(cc.scaleTo(.3, 0));
})();
K();
}, this);
r.getChildByName("back").on("touchstart", function() {
(function() {
a.save();
r.runAction(cc.scaleTo(.3, 0));
})();
K();
}, this);
s.getChildByName("back").on("touchstart", function() {
(function() {
a.save();
s.runAction(cc.scaleTo(.3, 0));
})();
K();
}, this);
})();
O();
(function() {
i.active = !0;
c.active = !0;
o.active = !0;
r.active = !0;
s.active = !0;
c.scale = 0;
o.scale = 0;
r.scale = 0;
s.scale = 0;
0 == h && (d.getChildByName("text").getComponent("cc.Label").string = "？？？？");
t.stayDay[3] > 12 && (m.getChildByName("text").getComponent("cc.Label").string = "外出");
})();
(function() {
if (t.publicVar[7] > 0 && 0 == t.publicVar[8]) {
t.plotId = 98;
a.save();
cc.director.loadScene("plot");
}
})();
function v() {
t.energy >= 10 ? function() {
t.publicVar[7];
var e = parseInt(t.publicVar2[20] + 2 * t.publicVar[20]), a = 100 * Math.random();
if (a < e) {
var i = parseInt(7.9 * Math.random()), c = [ "liao ♂ 得不错", "“瑶酱~今日也要两气满满喔~”", "“嘿~嘿嘿~”", "“(｡･∀･)ﾉﾞ嗨！~上午好呀！”", "一波逗弄", "一波求教", "“清晨好呀！”", "“卡哇咿滴斯勒” “？”" ];
t.publicVar[7] += 1;
t.publicVar2[20] += parseInt(3 * Math.random() + 1);
n.playText("Canvas/notify", c[i] + "，缘分+1\n（当前缘分：" + t.publicVar[7] + "）\n（下次成功率为" + t.publicVar2[20] + "%+" + 2 * t.publicVar[20] + "）", 60);
} else {
var i = parseInt(5.9 * Math.random()), c = [ "寒暄", "吹逼", "赞美", "沉默", "鸡汤", "分析" ];
t.publicVar2[20] -= parseInt(3 * Math.random() + 1);
n.playText("Canvas/notify", "一顿" + c[i] + "，缘分+0\n（下次聊天成功率" + t.publicVar2[20] + "%+" + 2 * t.publicVar[20] + "%）", 60);
}
t.energy -= 10;
O();
}() : n.playText("Canvas/notify", "法力不足！", 60);
}
function y() {
Z();
(function() {
Q();
c.runAction(cc.scaleTo(.3, 1));
})();
q();
}
function g() {
Z();
(function() {
Q();
o.runAction(cc.scaleTo(.3, 1));
})();
G();
}
function b() {
Z();
(function() {
Q();
r.runAction(cc.scaleTo(.3, 1));
})();
z();
}
function _() {
Z();
(function() {
Q();
s.runAction(cc.scaleTo(.3, 1));
})();
(function() {
t.stayDay[3] < 30 && (cc.find("Canvas/UI5/choice3/text").getComponent("cc.Label").string = "？？？？");
0 == t.publicVar2[21] && (cc.find("Canvas/UI5/choice4/text").getComponent("cc.Label").string = "？？？？");
0 == t.publicVar[9] && (cc.find("Canvas/UI5/choice5/text").getComponent("cc.Label").string = "？？？？");
})();
}
function x() {
a.autoEat();
t.energy >= 10 && t.hunger >= 20 ? function() {
var e = t.publicVar[14] + t.publicVar[19];
if (100 * Math.random() < e) {
t.publicVar[15] += 20;
n.playText("Canvas/notify", "训练成功！最大气血+2%！你感觉气血通畅，神清气爽！", 60);
} else n.playText("Canvas/notify", "训练失败！你感觉头晕眼花，四肢无力！怕是要升天喽~", 60);
t.energy -= 10;
t.hunger -= 20;
t.publicVar[14] -= 5;
O();
q();
}() : t.energy < 10 ? n.playText("Canvas/notify", "法力不足！", 60) : n.playText("Canvas/notify", "斋粮值不足！", 60);
}
function C() {
a.autoEat();
t.energy >= 10 && t.hunger >= 20 ? function() {
var e = t.publicVar[14] + t.publicVar[19];
if (100 * Math.random() < e) {
t.publicVar[16] += 20;
n.playText("Canvas/notify", "训练成功！护身力提高2%！你感觉气身体变得更加柔软了呢(ಡωಡ)！再也不怕挨揍啦！", 60);
} else n.playText("Canvas/notify", "训练失败！“哎呀！扭到腰了~(´థ౪థ)σ”。", 60);
t.energy -= 10;
t.hunger -= 20;
t.publicVar[14] -= 5;
O();
q();
}() : t.energy < 10 ? n.playText("Canvas/notify", "法力不足！", 60) : n.playText("Canvas/notify", "斋粮值不足！", 60);
}
function E() {
a.autoEat();
t.energy >= 10 && t.hunger >= 20 ? function() {
var e = t.publicVar[14] + t.publicVar[19];
if (100 * Math.random() < e) {
t.publicVar[17] += 10;
n.playText("Canvas/notify", "训练成功！降妖力提高1%！“哇！~乌拉————！”。", 60);
} else n.playText("Canvas/notify", "训练失败！“哎呦~砸到了脚啦！”。", 60);
t.energy -= 10;
t.hunger -= 20;
t.publicVar[14] -= 5;
O();
q();
}() : t.energy < 10 ? n.playText("Canvas/notify", "法力不足！", 60) : n.playText("Canvas/notify", "斋粮值不足！需20点", 60);
}
function I() {
var e = 3 * t.publicVar[18] + 40;
if (t.money >= e) {
t.publicVar[18] += 1;
t.money -= e;
n.playText("Canvas/notify", "升级成功！最大法力+10（累计增加" + 10 * t.publicVar[18] + "）", 60);
} else n.playText("Canvas/notify", "没盘缠！", 60);
G();
}
function V() {
var e = 2 * t.publicVar[19] + 2;
if (t.money >= e) {
t.publicVar[19] += 1;
t.money -= e;
n.playText("Canvas/notify", "升级成功！锻炼成功率永久增加1%（累计增加" + t.publicVar[19] + "%）", 60);
} else n.playText("Canvas/notify", "没盘缠！", 60);
G();
}
function N() {
var e = 1 * t.publicVar[20] + 1;
if (t.money >= e) {
t.publicVar[20] += 1;
t.money -= e;
n.playText("Canvas/notify", "升级成功！杏仙对话成功率永久增加2%（累计增加" + 2 * t.publicVar[20] + "%）", 60);
} else n.playText("Canvas/notify", "没盘缠！", 60);
G();
}
function T() {
a.autoEat();
if (0 == t.publicVar2[23]) n.playText("Canvas/notify", "你还没有获得本经卷！", 60); else if (t.publicVar2[23] >= 101) n.playText("Canvas/notify", "本经卷已看完！", 60); else if (t.energy >= 10 && t.hunger >= 10) {
t.energy -= 10;
t.hunger -= 10;
t.publicVar2[23] += 1;
t.publicVar2[30] += 1;
P();
z();
n.playText("Canvas/notify", "“搜嘎~搜嘎~”。阅历+1！\n（阅历用于提高基础工盘缠）", 60);
} else n.playText("Canvas/notify", "状态不好，学不进去！（需10点法力，10点斋粮）", 60);
}
function k() {
if (0 == t.publicVar2[24]) n.playText("Canvas/notify", "你还没有获得本经卷！", 60); else if (t.publicVar2[24] >= 101) n.playText("Canvas/notify", "本经卷已看完！", 60); else if (t.hunger >= 5) {
var e = [ "【长期郁结之气会导致灵台功能或结构改变】", "【打坐眠是一个极为复杂的灵台活动，任何一个环节出现问题，都会导致打坐眠障碍】", "【心魔滋生的原因，1/3为自身性格，1/3为客观环境，1/3为遗传】", "【慢性失眠的本质是灵台功能或者结构出现紊乱】", "【户外活动可能能够缓解郁结之气，并帮助灵台功能的缓慢修复】", "【心魔症终身患病率为8%（中国），女性患病几率为男性两倍】", "【失眠/早醒、食欲下降/体重减轻、头晕头痛/便秘/腰肩酸痛、思想迟缓/易疲劳，可能是心魔的危险信号】", "【大量随机对照试验证实、静心观照法对多种心神疾患有效】", "【接受思想——无条件接受自身缺陷——可能是一种快速治疗的方法】", "【外貌、身高、性取向是父母给的，既不用自卑也无需炫耀】", "【无论你多么「落魄」，总会存在适合自己的目标，只是极为隐蔽】", "【获得成就感（哪怕只是清扫卫生、起床走走），可能是行为疗法的核心】", "【云游、美食、打西行，不能治疗心神问题（即便是用来分散注意，也有限，并且可能导致新的问题）】", "【任何让你感到痛苦的事，都可以找到对应的不合理认知————观心法】" ], i = e.length, c = parseInt(Math.random() * (i - 1.01)), o = 10 * parseInt(a.maxEnergy() / 20);
t.hunger -= 10;
t.publicVar2[24] += 10;
t.energy += o;
P();
z();
n.playText("Canvas/notify", "法力+" + o + "！" + e[c], 60);
} else n.playText("Canvas/notify", "肚子饿了，不想看！（需10点斋粮）", 60);
}
function S() {
if (0 == t.publicVar2[25]) n.playText("Canvas/notify", "你还没有获得本经卷！", 60); else if (t.publicVar2[25] >= 101) n.playText("Canvas/notify", "本经卷已看完！", 60); else if (t.energy >= 10) {
t.publicVar2[25] += 1;
t.energy -= 10;
if (3 == t.publicVar2[25]) {
t.publicVar[7] += 6;
n.playText("Canvas/notify", "炼制出「辣激蘑菇汤」。杏仙：“咕噜噜~咕噜噜~”。杏仙缘分+6！", 60);
} else if (7 == t.publicVar2[25]) {
t.role.hp += a.role.maxHp();
t.hunger += a.maxHunger();
n.playText("Canvas/notify", "炼制出「急支糖浆拌饭」。“美滋滋~美滋滋~”。斋粮/气血爆满！", 60);
} else if (17 == t.publicVar2[25]) {
t.maxHunger += 30;
n.playText("Canvas/notify", "炼制出「西行牌健胃片」。“嘎吱~嘎吱~”。斋粮值上限提高30点！", 60);
} else if (33 == t.publicVar2[25]) {
t.maxEnergy += 10;
n.playText("Canvas/notify", "炼制出「兴奋剂」。“哇~乌拉——！”。法力上限提高10点！", 60);
} else if (55 == t.publicVar2[25]) {
t.itemNum[11] += 4;
n.playText("Canvas/notify", "炼制出「仙砂」。获得【仙砂】*4！", 60);
} else if (101 == t.publicVar2[25]) {
t.role.att += 30;
t.role.def += 15;
t.role.maxHp += 150;
n.playText("Canvas/notify", "炼制出「生长激素」！降妖力+40，护身力+20，气血+200！（以上法相为永久性增加）", 60);
} else n.playText("Canvas/notify", "一脸懵逼，啥也没学会！", 60);
P();
z();
} else n.playText("Canvas/notify", "法力不足（需10点）！", 60);
}
function H() {
a.autoEat();
if (0 == t.publicVar2[26]) n.playText("Canvas/notify", "你还没有获得本经卷！", 60); else if (t.publicVar2[26] >= 101) n.playText("Canvas/notify", "本经卷已看完！", 60); else if (t.energy >= 10 && t.hunger >= 10) {
var e = parseInt(5 * (2.99 * Math.random() + 1)), i = [ "【每日限制红肉摄入（不高于100g）】", "【每日推荐主食摄入量250~400g】", "【每日推荐蔬果摄入量500~850g】", "【每日推荐鱼禽蛋仙乳摄入量150~250g】", "【每日食盐摄入不超过6g】", "【每日推荐6000步，或等量活动】", "【每周推荐150分钟以上运动】", "【每日饮水不低于1500ml（7杯）】", "【一瓶可乐215大卡（相当于一碗饭或两斤蔬菜的能量）】", "【在各年岁阶段都应避免超重】", "【肥胖，是隐藏在心血管疾患、癌症背后的真凶】", "【中国44%死于心脑血管疾患，22%死于癌症】", "【90%心脑血管疾患可以通过改变生活习惯预防】", "【70%癌症可以通过改变生活习惯预防】", "【对于超重的人，哪怕丢失少量体重，也可使道心获益】", "【在日常生活中额外做些活动，不管强度如何，都将获益】", "【抉择全谷类斋粮而不是精加工斋粮】", "【学会阅读食品标签】", "【减肥必须运动+饮食，单独一项很难成功（容易反弹）】", "【100g薯片能量相当于两大碗饭，或者跑步一小时】", "【蔬果的道心获益机制主要在于、可以帮助我们减少能量摄入...】", "【道心人补充复合维生素片，并不能使道心获益】", "【没有证据证明补充抗氧化剂可以预防癌症】", "【终身维持道心体重极为重要】" ], c = i.length, o = parseInt(Math.random() * (c - 1.01));
t.energy -= 10;
t.hunger -= 10;
t.publicVar2[26] += 2;
t.role.maxHp += e;
P();
z();
n.playText("Canvas/notify", "最大气血提高" + e + "！" + i[o], 60);
} else n.playText("Canvas/notify", "状态不够！（需10点法力，10点斋粮）", 60);
}
function R() {
a.autoEat();
if (0 == t.publicVar2[27]) n.playText("Canvas/notify", "你还没有获得本经卷！", 60); else if (t.publicVar2[27] >= 101) n.playText("Canvas/notify", "本经卷已看完！", 60); else if (t.energy >= 10 && t.hunger >= 10) {
var e = parseInt(2.99 * Math.random() + 1);
t.energy -= 10;
t.hunger -= 10;
t.publicVar2[27] += 2;
t.role.def += e;
P();
z();
n.playText("Canvas/notify", "护身力提高" + e + "！", 60);
} else n.playText("Canvas/notify", "状态不够！（需10点法力，10点斋粮）", 60);
}
function w() {
a.autoEat();
if (0 == t.publicVar2[28]) n.playText("Canvas/notify", "你还没有获得本经卷！", 60); else if (t.publicVar2[28] >= 101) n.playText("Canvas/notify", "本经卷已看完！", 60); else if (t.energy >= 10 && t.hunger >= 10) {
var e = parseInt(2.99 * Math.random() + 1);
t.energy -= 10;
t.hunger -= 10;
t.publicVar2[28] += 2;
t.role.att += e;
P();
z();
n.playText("Canvas/notify", "降妖力提高" + e + "！", 60);
} else n.playText("Canvas/notify", "状态不够！（需10点法力，10点斋粮）", 60);
}
function M() {
if (0 == t.publicVar2[29]) n.playText("Canvas/notify", "你还没有获得本经卷！", 60); else if (t.publicVar2[29] >= 101) n.playText("Canvas/notify", "本经卷已看完！", 60); else if (t.publicVar3[15] >= 3) n.playText("Canvas/notify", "适当怡缘，沉迷伤身呐~", 60); else {
t.publicVar2[29] += 5;
t.publicVar3[4] += 80;
t.publicVar3[15] += 1;
t.role.hp = a.role.maxHp();
a.save();
z();
n.playText("Canvas/notify", "脸红耳燥，血脉膨胀。气血全恢复！降妖力+80！（打坐后加攻状态消失）", 60);
}
}
function L() {
t.publicVar[13] = 0;
a.save();
cc.director.loadScene("main", function() {
e("scr_effect").playText("Canvas/Text/txt_notify", "你已到达长安西坊，可以开始探路啦~", 60);
});
}
function B() {
if (t.energy >= 10) {
t.publicVar[13] = 1;
t.energy -= 10;
a.save();
cc.director.loadScene("main", function() {
e("scr_effect").playText("Canvas/Text/txt_notify", "你已到达郊外，可以开始探路啦~", 60);
});
} else n.playText("Canvas/notify", "法力不足！", 60);
}
function U() {
if (t.energy >= 20) {
t.publicVar[13] = 2;
t.energy -= 20;
a.save();
cc.director.loadScene("main", function() {
e("scr_effect").playText("Canvas/Text/txt_notify", "你已到达市中心，可以开始探路啦~", 60);
});
} else n.playText("Canvas/notify", "法力不足！", 60);
}
function F() {
if (t.energy >= 30) {
t.publicVar[13] = 3;
t.energy -= 30;
a.save();
cc.director.loadScene("main", function() {
e("scr_effect").playText("Canvas/Text/txt_notify", "你已到达山洞，可以开始探路啦~", 60);
});
} else n.playText("Canvas/notify", "法力不足！", 60);
}
function A() {
if (t.energy >= 10) if (t.chioce2[7] <= 5) {
var e = t.chioce2[7];
t.energy -= 10;
t.enemyId = [ 501, 502, 503, 504, 505, 506 ][e];
a.save();
cc.director.loadScene("main");
} else {
t.plotId = 99;
a.save();
cc.director.loadScene("plot");
} else n.playText("Canvas/notify", "法力不足！", 60);
}
function D() {
if (0 == t.ifFollow[0]) {
t.plotId = 99;
a.save();
cc.director.loadScene("plot");
} else 1 == t.ifFollow[0] && n.playText("Canvas/notify", "月兔仙子已成为同伴！", 60);
}
function P() {
cc.find("Canvas/energy").getComponent("cc.Label").string = "法力 " + t.energy;
}
function O() {
t.publicVar2[17] > 0 ? l.getChildByName("text").getComponent("cc.Label").string = "找杏仙唠嗑（成功率" + (t.publicVar2[20] + 2 * t.publicVar[20]) + "%）" : l.getChildByName("text").getComponent("cc.Label").string = "？？？？";
p.getChildByName("text").getComponent("cc.Label").string = "锻炼（成功率" + (t.publicVar[14] + t.publicVar[19]) + "%）";
cc.find("Canvas/energy").getComponent("cc.Label").string = "法力 " + t.energy;
}
function q() {
cc.find("Canvas/UI2/hunger").getComponent("cc.Label").string = "斋粮 " + t.hunger;
cc.find("Canvas/UI2/rate").getComponent("cc.Label").string = "成功率 " + (t.publicVar[14] + t.publicVar[19]) + "%（" + t.publicVar[14] + "%+" + t.publicVar[19] + "%）";
cc.find("Canvas/UI2/choice1/text").getComponent("cc.Label").string = "修仙（气血上限+" + (t.publicVar[15] / 10).toFixed(0) + "%）";
cc.find("Canvas/UI2/choice2/text").getComponent("cc.Label").string = "第八套广播体操（护身力+" + (t.publicVar[16] / 10).toFixed(0) + "%）";
cc.find("Canvas/UI2/choice3/text").getComponent("cc.Label").string = "举轮胎（降妖力+" + (t.publicVar[17] / 10).toFixed(0) + "%）";
}
function G() {
cc.find("Canvas/UI3/money").getComponent("cc.Label").string = "盘缠 " + (t.money / 10).toFixed(1);
cc.find("Canvas/UI3/choice1/text").getComponent("cc.Label").string = "居住区（LV" + t.publicVar[18] + " 提升需" + ((3 * t.publicVar[18] + 40) / 10).toFixed(1) + "两）";
cc.find("Canvas/UI3/choice2/text").getComponent("cc.Label").string = "运动区（LV" + t.publicVar[19] + " 提升需" + ((2 * t.publicVar[19] + 2) / 10).toFixed(1) + "两）";
cc.find("Canvas/UI3/choice3/text").getComponent("cc.Label").string = "云游狸妖篷（LV" + t.publicVar[20] + " 提升需" + ((1 * t.publicVar[20] + 1) / 10).toFixed(1) + "两）";
}
function z() {
var e = r.getChildByName("choice7").getChildByName("text").getComponent("cc.Label"), n = r.getChildByName("choice6").getChildByName("text").getComponent("cc.Label"), a = r.getChildByName("choice5").getChildByName("text").getComponent("cc.Label"), i = r.getChildByName("choice4").getChildByName("text").getComponent("cc.Label"), c = r.getChildByName("choice3").getChildByName("text").getComponent("cc.Label"), o = r.getChildByName("choice2").getChildByName("text").getComponent("cc.Label"), s = r.getChildByName("choice1").getChildByName("text").getComponent("cc.Label");
0 == t.publicVar2[23] ? e.string = "？？？？" : e.string = "《担经从入门到取经》（已看" + Math.max(t.publicVar2[23] - 1) + "%，阅历" + t.publicVar2[30] + "）";
0 == t.publicVar2[24] ? n.string = "？？？？" : n.string = "《心经静念法》（已看" + Math.max(t.publicVar2[24] - 1) + "%）";
0 == t.publicVar2[25] ? a.string = "？？？？" : a.string = "《儿童手工DIY》（已看" + Math.max(t.publicVar2[25] - 1) + "%）";
0 == t.publicVar2[26] ? i.string = "？？？？" : i.string = "《斋饭炼体经》（已看" + Math.max(t.publicVar2[26] - 1) + "%）";
0 == t.publicVar2[27] ? c.string = "？？？？" : c.string = "《坎贝尔骨科炼丹疗法学》（已看" + Math.max(t.publicVar2[27] - 1) + "%）";
0 == t.publicVar2[28] ? o.string = "？？？？" : o.string = "《如来神掌》（已看" + Math.max(t.publicVar2[28] - 1) + "%）";
0 == t.publicVar2[29] ? s.string = "？？？？" : s.string = "《大唐西域记》（已看" + Math.max(t.publicVar2[29] - 1) + "%）";
cc.find("Canvas/UI4/hunger").getComponent("cc.Label").string = "斋粮 " + t.hunger;
}
function J() {
n.playText("Canvas/notify", "暂未满足开启条件！加油吧~", 60);
}
function Z() {
i.runAction(cc.scaleTo(.3, 0));
}
function K() {
Q();
i.runAction(cc.scaleTo(.3, 1));
}
function Q() {
cc.find("Canvas/notify").getComponent("cc.Label").string = "";
}
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_effect: "scr_effect",
scr_public: "scr_public"
} ],
scr_initData: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c335afOsddDPoVdzNq+7r/A", "scr_initData");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var t = e("scr_data"), n = e("scr_data2");
"undefined" == typeof t.itemNum2[18] && (t.itemNum2[18] = 0);
"undefined" == typeof t.itemNum2[19] && (t.itemNum2[19] = 0);
"undefined" == typeof t.itemNum2[20] && (t.itemNum2[20] = 0);
"undefined" == typeof t.itemNum2[21] && (t.itemNum2[21] = 0);
"undefined" == typeof t.itemNum2[22] && (t.itemNum2[22] = 0);
"undefined" == typeof t.itemNum2[23] && (t.itemNum2[23] = 0);
"undefined" == typeof t.itemNum2[24] && (t.itemNum2[24] = 0);
"undefined" == typeof t.itemNum2[25] && (t.itemNum2[25] = 0);
"undefined" == typeof t.itemNum2[26] && (t.itemNum2[26] = 0);
"undefined" == typeof t.itemNum2[27] && (t.itemNum2[27] = 0);
"undefined" == typeof t.ifFollow && (t.ifFollow = [ 0, 0 ]);
"undefined" == typeof t.talkTimes && (t.talkTimes = [ 0, 0 ]);
"undefined" == typeof t.friendSkill1 && (t.friendSkill1 = [ 1, 0, 0, 0, 0 ]);
"undefined" == typeof t.friendSkill2 && (t.friendSkill2 = [ 1, 0, 0, 0, 0 ]);
"undefined" == typeof t.friendSkill && (t.friendSkill = [ 1, 0, 0, 0, 0, 0, 0, 0 ]);
"undefined" == typeof t.choice[6] && (t.choice[6] = 0);
"undefined" == typeof t.choice[7] && (t.choice[7] = 0);
"undefined" == typeof t.choice[8] && (t.choice[8] = 0);
"undefined" == typeof t.chioce2 && (t.chioce2 = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]);
"undefined" == typeof t.plotId && (t.plotId = 0);
"undefined" == typeof t.escapeExp && (t.escapeExp = 0);
"undefined" == typeof t.randomEvent[11] && (t.randomEvent[11] = 0);
"undefined" == typeof t.randomEvent[12] && (t.randomEvent[12] = 0);
"undefined" == typeof t.randomEvent[13] && (t.randomEvent[13] = 0);
"undefined" == typeof t.publicVar && (t.publicVar = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]);
"undefined" == typeof t.publicVar2 && (t.publicVar2 = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]);
"undefined" == typeof t.publicVar3 && (t.publicVar3 = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]);
"undefined" == typeof t.specialEnemy[300001] && (t.specialEnemy[300001] = {
lv: 20,
hp: 710,
maxHp: 710,
att: 0,
def: 20
});
"undefined" == typeof t.specialEnemy[300002] && (t.specialEnemy[300002] = {
lv: 45,
hp: 2470,
maxHp: 2470,
att: 0,
def: 40
});
"undefined" == typeof t.specialEnemy[300003] && (t.specialEnemy[300003] = {
lv: 35,
hp: 3270,
maxHp: 3270,
att: 0,
def: 0
});
"undefined" == typeof t.specialEnemy[400001] && (t.specialEnemy[400001] = {
lv: 100,
hp: 3345,
maxHp: 3345,
att: 0,
def: 234
});
"undefined" == typeof t.specialEnemy[400002] && (t.specialEnemy[400002] = {
lv: 199,
hp: 19999,
maxHp: 19999,
att: 0,
def: 20
});
"undefined" == typeof t.specialEnemy[400003] && (t.specialEnemy[400003] = {
lv: 60,
hp: 2050,
maxHp: 2050,
att: 310,
def: 121
});
"undefined" == typeof t.specialEnemy[900001] && (t.specialEnemy[900001] = {
lv: 15,
hp: 575,
maxHp: 575,
att: 59,
def: 16
});
"undefined" == typeof t.specialEnemy[900002] && (t.specialEnemy[900002] = {
lv: 20,
hp: 998,
maxHp: 998,
att: 50,
def: 36
});
"undefined" == typeof t.specialEnemy[900003] && (t.specialEnemy[900003] = {
lv: 500,
hp: 16500,
maxHp: 16500,
att: 1500,
def: 1150
});
"undefined" == typeof t.specialEnemy[900004] && (t.specialEnemy[900004] = {
lv: 1,
hp: 999999,
maxHp: 999999,
att: 999,
def: 0
});
"undefined" == typeof t.specialEnemy[900005] && (t.specialEnemy[900005] = {
lv: 500,
hp: 599999,
maxHp: 599999,
att: 0,
def: 0
});
"undefined" == typeof t.specialEnemy[900006] && (t.specialEnemy[900006] = {
lv: 200,
hp: 299999,
maxHp: 299999,
att: 0,
def: 0
});
"undefined" == typeof t.specialEnemy[900007] && (t.specialEnemy[900007] = {
lv: 40,
hp: 3900,
maxHp: 3900,
att: 90,
def: 50
});
"undefined" == typeof n.gameData && (n.gameData = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]);
"undefined" == typeof n.gameData2 && (n.gameData = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]);
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_data2: "scr_data2"
} ],
scr_initGame: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "6ef62YkKgVEPbATA/Rgpij9", "scr_initGame");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var t = e("scr_data"), n = e("scr_data2"), a = e("scr_public");
if (0 != n.initMoney) {
t.money += n.initMoney;
n.initMoney = 0;
}
if (n.gameData[2] < 9999) {
var i = new Date(), c = parseInt(i.getTime() / 36e5);
n.gameData[2] = c;
}
n.gameData[3] = 0;
t.publicVar[6] = 2;
a.save();
a.save2();
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_data2: "scr_data2",
scr_public: "scr_public"
} ],
scr_liveModeMain: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b3dbdX/PEZG2b06UXyCtd3Z", "scr_liveModeMain");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {}
});
cc._RF.pop();
}, {} ],
scr_mainUIEvent: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "449f7/pnslKIp1sHAfscrPC", "scr_mainUIEvent");
cc.Class({
extends: cc.Component,
properties: {},
creatText: function(e, t, n) {
var a = new cc.Node(t);
a.addComponent(cc.Label);
a.parent = e;
a.setPosition(0, 0);
a.opacity = 0;
a.runAction(cc.fadeIn(1));
a.color = new cc.Color(0, 0, 0);
a.getComponent(cc.Label).overflow = 3;
a.getComponent(cc.Label).horizontalAlign = 1;
a.setContentSize(600, 300);
a.getComponent(cc.Label).string = n;
a.getComponent(cc.Label).lineHeight = 50;
a.getComponent(cc.Label).fontSize = 40;
},
event: function() {
var t = this, n = e("scr_data"), a = e("scr_public"), i = (e("scr_effect"), parseInt(9 * Math.random() + 1));
this.randomItemNum = parseInt(7 * Math.random() + 1);
this.stealMoney = parseInt(10 * Math.random() + 1);
this.stealRate = parseInt(100 * Math.random());
var c = [ [ "锦襕袈裟", 22, 1, 1 ], [ "疗伤符", 23, 1, 1 ], [ "护身符", 25, 1, 1 ], [ "行者短袍", 24, 1, 1 ], [ "月兔仙子手链", 27, 1, 1 ], [ "如意石", 26, 1, 1 ], [ "金砖", 20, 1, 1 ], [ "照妖镜", 17, 1, 1 ], [ "虎皮裙", 21, 1, 1 ] ];
t.drawDiscount = parseInt(9 * Math.random() + 1);
this.changeItemId2 = parseInt(8.99 * Math.random());
this.changeItemId3 = parseInt(3.99 * Math.random());
var o = {
1: {
text: [ "路边草丛里闪着两枚香火钱，是否拾起？", "拾取", "不拾取" ],
choice1: function() {
if (100 * Math.random() < 25) {
n.randomEvent[0] += 1;
t.closeUI();
cc.find("Canvas/Button").stopAllActions();
cc.find("Event/scr_fight").getComponent("scr_fight").fight(900001);
} else {
n.money += 2;
t.closeUI("获得0.2两！");
}
},
choice2: function() {
t.closeUI();
}
},
2: {
text: [ "白骨夫人披着人皮拦住去路...", "你要怎么做？", "降妖！", "给" + Math.min(1 + n.orderTimes[7], 6) + "文盘缠买路" ],
choice1: function() {
n.publicVar2[12] += 1;
t.closeUI();
cc.find("Canvas/Button").stopAllActions();
cc.find("Event/scr_fight").getComponent("scr_fight").fight(200001);
},
choice2: function() {
var e = Math.min(1 + n.orderTimes[7], 6);
if (n.money >= e) {
n.publicVar2[12] += 1;
n.money -= e;
n.orderTimes[7] += 1;
t.closeUI("白骨夫人蹦蹦跳跳地离开了...");
} else cc.find("Canvas/Event/Choice/Choice2/choiceText").getComponent("cc.Label").string = "你怕是没那么多盘缠哦！";
}
},
3: {
text: [ "“收废丹、换灵草喽~”妖市小贩摇铃喊道，是否过去看看？", "看看", "算了" ],
choice1: function() {
cc.director.loadScene("shop4");
},
choice2: function() {
n.energy += 10;
t.closeUI("法力+10（消耗返还！）");
}
},
4: {
text: [ "一阵黑风卷走了你的盘缠！", "是否追进风里？", "追！", "算了..." ],
choice1: function() {
var e = [ 810, 811, 812, 813, 814, 815, 816 ][n.randomEvent[10]];
n.publicVar2[0] += 1;
if ("undefined" == typeof e) {
n.money += 5;
t.closeUI("劫匪见你追来，吓晕了过去！你从身上搜得5文盘缠！");
} else {
t.closeUI();
cc.find("Canvas/Button").stopAllActions();
cc.find("Event/scr_fight").getComponent("scr_fight").fight(e);
}
},
choice2: function() {
n.publicVar2[0] += 1;
var e = 1 + n.randomEvent[3];
e > 3 && (e = 3);
n.money <= 0 && (e = 0);
n.money -= e;
n.money < 0 && (n.money = 0);
t.closeUI("损失" + (e / 10).toFixed(1) + "两");
}
},
5: {
text: [ "前方一名妖商腰间露出" + (this.stealMoney / 10).toFixed(1) + "两香火钱，", "他正低头数符，似乎没有察觉。是否顺走？", "顺走！活命要紧（成功率" + this.stealRate.toFixed(1) + "%）", "算了！名声要紧" ],
choice1: function() {
if (100 * Math.random() < t.stealRate) {
n.money += t.stealMoney;
n.publicVar[0] += 10;
t.closeUI("偷窃成功！获得" + (t.stealMoney / 10).toFixed(1) + "两。罪恶+10（累计" + n.publicVar[0] + "，高业障值会导致失眠）");
} else {
n.role.hp = 1;
t.closeUI("偷窃失败！你被用瓜群众一顿狂殴，损失全部气血！");
}
t.stealMoney = parseInt(10 * Math.random() + 1);
t.stealRate = parseInt(100 * Math.random());
},
choice2: function() {
t.stealMoney = parseInt(10 * Math.random() + 1);
t.stealRate = parseInt(100 * Math.random());
t.closeUI();
}
},
6: {
text: [ "发现一只蒙尘供箱！", "是否开启？", "是", "算了" ],
choice1: function() {
if (100 * Math.random() < 75) (function() {
var e = 100 * Math.random();
if (e <= 20) {
var i = 5 * parseInt(a.maxHunger() / 10);
n.hunger += i;
t.closeUI("找到一些剩饭！斋粮恢复50%（" + i + "点）！");
}
if (e > 20) {
var c = parseInt(1.9 * Math.random() + 1);
n.itemNum2[1] += c;
t.closeUI("找到一些金疮药！获得【金疮药】*" + c);
}
})(); else {
n.publicVar2[13] += 1;
t.closeUI();
cc.find("Canvas/Button").stopAllActions();
cc.find("Event/scr_fight").getComponent("scr_fight").fight(900002);
}
},
choice2: function() {
t.closeUI();
}
},
7: {
text: [ "路上碰到一位摔倒的土地婆，", "是否要去搀扶起来？", "搀扶", "不搀扶" ],
choice1: function() {
n.randomEvent[6] += 1;
if (20 == n.randomEvent[6]) {
n.randomEvent[1] += 1;
t.closeUI("土地婆送给你一个「善缘牌」，你获得「善缘牌」*1");
} else {
if (100 * Math.random() <= 15) {
n.publicVar2[5] += 1;
if (n.money > 0) {
n.money -= parseInt(.5 * n.money);
t.closeUI("你被摸走一半的盘缠！");
} else t.closeUI("cao！你以为一大把年纪，趟地上很容易？耍老娘？呸！");
} else {
var e = 100 * Math.random();
n.publicVar[0] -= 1;
if (e <= 20) {
n.itemNum[0] += 2;
t.closeUI("土地婆送给你【蟠桃】*2。业障值减1（你目前罪恶" + n.publicVar[0] + "）");
}
if (e > 20 && e <= 80) {
n.itemNum2[1] += 1;
t.closeUI("土地婆送给你【金疮药】*1。业障值减1（你目前罪恶" + n.publicVar[0] + "）");
}
if (e > 80) {
n.itemNum[4] += 2;
t.closeUI("土地婆送给你【袈裟布】*2。业障值减1（你目前罪恶" + n.publicVar[0] + "）");
}
}
}
},
choice2: function() {
t.closeUI("你假装没看见，走开了");
}
},
8: {
text: [ "发现一处菩提树荫，妖风吹不到这里。", "小憩（法力+20）", "疗伤（气血全恢复）" ],
choice1: function() {
n.energy += 20;
t.closeUI("法力恢复20点！");
},
choice2: function() {
n.role.hp += parseInt(a.role.maxHp());
t.closeUI("恢复全部气血！");
}
},
9: {
text: [ "“小行者，我看你印堂发黑，妖气缠身。", "要不要试试小雷音坛的醒神雷法？酥酥麻麻，很通透哦~”", "试雷法!（3文，成功率" + Math.max(100 - 5 * n.orderTimes[3], 20) + "%）", "退退退！" ],
choice1: function() {
if (n.money >= 3) {
var e = 100 * Math.random(), a = Math.max(100 - 5 * n.orderTimes[3], 20);
n.money -= 3;
if (e < a) {
n.orderTimes[4] += 1;
n.orderTimes[3] += 1;
t.closeUI("雷法成功！香瘾减少1%");
} else {
n.role.hp = 1;
t.closeUI("雷法失败！你损失全部气血！");
}
} else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "没盘缠！( ¯▽¯；)";
},
choice2: function() {
n.energy += 10;
t.closeUI("法力+10（消耗返还！）");
}
},
10: {
text: [ "“收安神香喽~", c[t.changeItemId2][3] + "个香换" + c[t.changeItemId2][2] + "个「" + c[t.changeItemId2][0] + "」”", "换换换！", "没香(｀_´)" ],
choice1: function() {
var e = c[t.changeItemId2][3];
if (n.itemNum2[7] >= e) {
var a = t.changeItemId2, i = c[a];
n.itemNum2[7] -= e;
n.itemNum2[i[1]] += i[2];
t.closeUI("获得【" + i[0] + "】*" + i[2] + "！");
t.changeItemId2 = parseInt(5.99 * Math.random());
} else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "确实没香！( ¯▽¯；)";
},
choice2: function() {
n.energy += 10;
t.changeItemId2 = parseInt(4.99 * Math.random());
t.closeUI("法力+10（消耗返还！）");
}
},
1001: {
text: [ "一位驾云走神的仙姑，不小心撞了你的行囊！", "你要怎么处理？", "让她赔礼！", "让她赔丹药！" ],
choice1: function() {
n.itemNum[3] += 1;
t.closeUI("获得【妖兽肉】*1！");
},
choice2: function() {
n.itemNum2[1] += 1;
t.closeUI("获得【金疮药】*1！");
}
},
1002: {
text: [ "前边出现两条路：", "右边妖林阴森，左边草坡开阔", "你走哪边?", "妖林", "草坡" ],
choice1: function() {
n.itemNum[1] += 2;
n.itemNum[4] += 2;
t.closeUI("获得【降妖木】*2【袈裟布】*2！");
},
choice2: function() {
n.itemNum[0] += 2;
n.itemNum[5] += 2;
t.closeUI("获得【蟠桃】*2【灵草】*2！");
}
},
1003: {
text: [ "一个小童子正捧着桂花糕...", "抢了赶紧溜！", "继续西行" ],
choice1: function() {
if (100 * Math.random() < 25) {
t.closeUI();
cc.find("Canvas/Button").stopAllActions();
cc.find("Event/scr_fight").getComponent("scr_fight").fight(904);
} else {
e("scr_data").hunger += 40;
t.closeUI("恢复40点斋粮！");
}
},
choice2: function() {
t.closeUI("你拍了拍肚皮，继续西行");
}
},
1004: {
text: [ "你被一只黑鬃恶犬妖穷追不舍，", "你要怎么做？", "正面斗法！", "丢个蟠桃？！" ],
choice1: function() {
t.closeUI();
cc.find("Canvas/Button").stopAllActions();
cc.find("Event/scr_fight").getComponent("scr_fight").fight(903);
},
choice2: function() {
if (n.itemNum[0] >= 1) {
n.itemNum[0] -= 1;
t.closeUI("你丢了一个蟠桃，恶犬妖高兴的拾取蟠桃去啦！");
} else cc.find("Canvas/Event/Choice/Choice2/choiceText").getComponent("cc.Label").string = "蟠桃不够！( ¯▽¯；)";
}
},
2001: {
text: [ "路上发现5文香火钱！拾取不拾取？", "拾取", "不拾取" ],
choice1: function() {
t.closeUI();
cc.find("Canvas/Button").stopAllActions();
cc.find("Event/scr_fight").getComponent("scr_fight").fight(907);
},
choice2: function() {
t.closeUI();
}
},
2002: {
text: [ "有一群游方僧在树下赌签运，", "是否去试下手气？", "试", "不试" ],
choice1: function() {
var n = e("scr_data");
if (n.money > 0) {
var a = 100 * Math.random(), i = Math.min(n.money, 100);
if (a < 45) {
n.money += i;
t.closeUI("手气不错，盘缠翻倍！");
} else {
n.money = 0;
t.closeUI("你输光了所有的盘缠！");
}
} else cc.find("Canvas/Event/Choice/Choice2/choiceText").getComponent("cc.Label").string = "没盘缠！( ¯▽¯；)";
},
choice2: function() {
t.closeUI("");
}
},
2003: {
text: [ "“妖市香会，今日清仓！", "每件" + i + "文！件件" + i + "文！", "买不买没关系，进来瞧一瞧。”", "路边小贩摇着铜铃喊道。", "挑一个看看", "走喽~" ],
choice1: function() {
if (n.money >= i) {
var e = 100 * Math.random();
n.money -= i;
if (e <= 30) {
n.itemNum2[1] += 1;
t.closeUI("获得【金疮药】*1");
}
if (e > 30 && e <= 55) {
n.itemNum2[12] += 1;
t.closeUI("获得【猴儿酒】*1");
}
if (e > 55 && e <= 80) {
n.itemNum2[0] += 1;
t.closeUI("获得【斋饭】*1");
}
if (e > 80 && e <= 95) {
n.itemNum2[22] += 1;
t.closeUI("获得【锦襕袈裟】*1");
}
if (e > 95 && e <= 100) {
n.itemNum2[25] += 1;
t.closeUI("获得【护身符】*1");
}
} else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "没盘缠！( ¯▽¯；)";
},
choice2: function() {
t.closeUI();
}
},
2004: {
text: [ "一位正襟危坐的落魄剑修，", "身旁立着一柄寒光凛冽的乌金短刃。", "地上一张白布写道：", "“家父心魔深重，无盘缠求丹，愿换传家法器，售价" + (n.randomEvent[7] / 10).toFixed(1) + "两！”", "买了", "溜了溜了~" ],
choice1: function() {
if (n.money >= n.randomEvent[7]) {
n.money -= n.randomEvent[7];
n.itemNum2[10] += 1;
n.choice[4] += 1;
t.closeUI("获得【如意金箍棒】！");
n.randomEvent[7] = 99 + 100 * n.choice[4];
} else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "没盘缠！( ¯▽¯；)";
},
choice2: function() {
n.randomEvent[7] -= 10;
n.randomEvent[7] <= 59 && (n.randomEvent[7] = 59);
t.closeUI();
}
},
2005: {
text: [ "发现一份搬运经箱（LV.1）的差事，", "是否去试试？", "是（需20斋粮,成功率" + Math.min(70 + n.workExp, 100) + "%）", "算了" ],
action: function() {
cc.find("Canvas/Event/Choice/label").getComponent("cc.Label").string = "【提示】如果斋粮不足，系统将自动使用斋粮哦^_^";
},
choice1: function() {
var a = e("scr_public");
s();
if (n.hunger >= 0) {
var i = n.workExp, c = 100 * Math.random(), o = 70 + i;
n.hunger -= 20;
a.autoEat();
if (c < o) {
n.money += 4;
n.workExp += 1;
t.closeUI("应聘成功，面试经验+1！\n获得" + .4.toFixed(1) + "两！");
} else {
n.publicVar2[9] += 1;
n.workExp += 1;
t.closeUI("面试经验+1\n【“不好意思，我们可不敢乱用没取得真经文牒的小孩，你还是去找找其他差事吧”】");
}
} else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "斋粮值不足！";
},
choice2: function() {
t.closeUI();
}
},
2006: {
text: [ "发现一份斋堂帮厨（LV.2）的临时差事，", "是否去试试？", "是（需20斋粮,成功率" + Math.min(20 + n.workExp, 100) + "%）", "算了" ],
action: function() {
cc.find("Canvas/Event/Choice/label").getComponent("cc.Label").string = "【提示】如果斋粮不足，系统将自动使用斋粮哦^_^";
},
choice1: function() {
var a = e("scr_public");
s();
if (n.hunger >= 20) {
var i = n.workExp, c = 100 * Math.random(), o = 20 + i;
n.hunger -= 20;
a.autoEat();
if (c < o) {
n.money += 6;
n.workExp += 1;
t.closeUI("应聘成功，面试经验+1！获得" + .6.toFixed(1) + "两！");
} else {
n.publicVar2[9] += 1;
n.workExp += 1;
t.closeUI("“面试经验+1\n【“你太内向，对别人评价又很敏感；\n我不建议你做这种需要频繁和各种人、打交道的差事，\n你还是找点技术活做做吧。”】");
}
} else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "斋粮值不足！";
},
choice2: function() {
t.closeUI();
}
},
3001: {
text: [ "远处有一处妖市小摊", "过去看看", "算啦，太累，还不如打坐一会儿" ],
choice1: function() {
cc.director.loadScene("shop");
},
choice2: function() {
n.energy += 10;
t.closeUI("法力+10");
}
},
3002: {
text: [ Math.min(n.randomEvent[5] + 1, 7) + "只云游犬妖眼巴巴地看着你，", "是否给点【蟠桃】？", "给！（需蟠桃*" + Math.min(n.randomEvent[5] + 1, 7) + ")", "不给！" ],
choice1: function() {
var e = Math.min(n.randomEvent[5] + 1, 7);
if (n.itemNum[0] >= e) {
var a = Math.max(Math.round(e / 2), 1);
n.randomEvent[5] += 1;
n.publicVar[0] -= a;
n.itemNum[0] -= e;
if (3 == n.randomEvent[5]) {
n.itemNum2[26] += 1;
t.closeUI("云游犬妖把你带到一个地方，你找到一个「如意石」。业障值减" + a + "（你目前罪恶" + n.publicVar[0] + "）");
} else if (7 == n.randomEvent[5]) {
n.itemNum2[8] += 1;
t.closeUI("云游犬妖把你带到一堆白骨前，你找到一个「降妖短杖」。业障值减" + a + "（你目前罪恶" + n.publicVar[0] + "）");
} else if (10 == n.randomEvent[5]) {
n.randomEvent[1] += 1;
t.closeUI("云游犬妖送了你一张「善缘牌」（用于解锁特殊剧缘）！业障值减" + a + "（你目前罪恶" + n.publicVar[0] + "）");
} else t.closeUI("云游犬妖似乎从来没用过这么好用的东西...业障值减" + a + "（你目前罪恶" + n.publicVar[0] + "）");
} else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "法宝不足！";
},
choice2: function() {
t.closeUI("你把云游犬妖轰走了");
}
},
3003: {
text: [ "前边有两条路，", "左边看起来很好走，", "右边看起来很危险！", "你走哪边?", "左边", "右边" ],
choice1: function() {
n.itemNum[1] += 2;
n.itemNum[0] += 2;
t.closeUI("获得【降妖木】*2【蟠桃】*2！");
},
choice2: function() {
n.enemyId = 300002;
t.closeUI();
cc.find("Canvas/Button").stopAllActions();
cc.find("Event/scr_fight").getComponent("scr_fight").fight(300002);
}
},
3004: {
text: [ "“香会套法宝喽，", "小行者要不要试下手气，", "2文一次！", "试试", "溜了溜了" ],
choice1: function() {
if (n.money >= 2) {
var e = 100 * Math.random(), a = 20 + 10 * n.randomEvent[12];
n.money -= 2;
if (e < a) {
n.randomEvent[12] += 1;
(function() {
var e = 100 * Math.random();
if (e <= 40) {
n.itemNum[0] += 5;
t.closeUI("获得【蟠桃】*4，扔圈熟练度+1");
}
if (e > 40 && e <= 50) {
n.money += 10;
t.closeUI("获得【1两】大奖！扔圈熟练度+1");
}
if (e > 50 && e <= 70) {
n.itemNum2[12] += 1;
t.closeUI("获得【猴儿酒】*1，扔圈熟练度+1");
}
if (e > 70 && e <= 90) {
n.itemNum2[7] += 1;
t.closeUI("获得【安神香】*1，扔圈熟练度+1");
}
if (e > 90 && e <= 95) {
n.itemNum2[27] += 1;
t.closeUI("获得【月兔仙子手链】*1，扔圈熟练度+1");
}
if (e > 95) {
n.itemNum2[21] += 1;
t.closeUI("获得【虎皮裙】*1，扔圈熟练度+1");
}
})();
} else {
n.randomEvent[12] += 1;
t.closeUI("你扔空了，啥也没圈到，扔圈熟练度+1");
}
} else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "没盘缠！";
},
choice2: function() {
t.closeUI("");
}
},
3005: {
text: [ "“道友，", "你若能接我一记试刀，我就给你" + (2 * n.randomEvent[13] + 2) + "文盘缠。”", "一个游方僧拉着你说道", "行，来呀！", "啊！！！我呸！" ],
choice1: function() {
t.closeUI();
cc.find("Canvas/Button").stopAllActions();
cc.find("Event/scr_fight").getComponent("scr_fight").fight(900);
},
choice2: function() {
n.randomEvent[13] += 1;
t.closeUI("");
}
},
3006: {
text: [ "前边有两座村子，", "东边锣鼓喧天，似在迎神；", "西边哭天喊地，像有妖丧。", "你去哪边?", "东边", "西边" ],
choice1: function() {
var e = 100 * Math.random();
if (e < 90) {
n.money += 2;
t.closeUI("抢到【0.2两】红包！");
}
if (e >= 90) {
n.money += 10;
t.closeUI("抢到【1两】红包！");
}
},
choice2: function() {
n.itemNum2[0] += 1;
t.closeUI("获得【斋饭】*1！");
}
},
3007: {
text: [ "发现一处被妖气熏黑的土丘，", "是否挖挖看？", "是（需20斋粮,成功率" + (40 + 3 * n.randomEvent[11]) + "%）", "算了" ],
choice1: function() {
var a = e("scr_public");
s();
if (n.hunger >= 20) {
var i = 100 * Math.random(), c = 40 + 3 * n.randomEvent[11];
n.hunger -= 20;
a.autoEat();
n.randomEvent[11] += 1;
i < c ? function() {
var e = 100 * Math.random();
if (e < 20) {
n.itemNum[8] += 1;
t.closeUI("挖到【乌金石】*1");
} else if (e < 60) {
n.itemNum[9] += 1;
t.closeUI("挖到出一个盒子，打开一看，发现【火焰火狐裘】*1");
} else if (e < 63) {
n.itemNum2[17] += 1;
t.closeUI("挖到出一个宝箱，打开一看，发现【照妖镜】*1");
} else if (e < 100) {
var a = parseInt(5 * Math.random() + 1);
n.money += a;
t.closeUI("挖到一些硬币，获得" + (a / 10).toFixed(1) + "两！");
}
}() : t.closeUI("忙活半天，啥也没挖到，挖掘技术+1");
} else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "斋粮值不够！";
},
choice2: function() {
t.closeUI("");
}
},
4001: {
text: [ "一位袈裟褴褛的剑修，", "在地上写道：", "“父亲心魔深重，兄长赌光香火钱，又欠万两因果债。现换绝世剑谱一本，只要" + (Math.max(parseInt(n.day + n.publicVar2[28] * n.publicVar3[19] - 40), 29) / 10).toFixed(1) + "两，香会特价，仅此一本！”", "哇~香火价~赶紧买！", "......" ],
choice1: function() {
var e = Math.max(parseInt(n.day + n.publicVar2[28] * n.publicVar3[19] - 40), 29);
if (n.money >= e) {
n.money -= e;
n.publicVar2[28] = 1;
n.publicVar3[19] += 1;
t.closeUI("获得《如来神掌》！请到诵经界面使用。如果再次请购此经卷，此经卷使用次数将重置，但贼贵！");
} else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "没盘缠！( ¯▽¯；)";
},
choice2: function() {
n.energy += 10;
t.closeUI("法力恢复10点（消耗返还！）");
}
},
4002: {
text: [ "“道友，这儿有市集上买不到的东西，要不要过来看看？”", "过去看看", "算了~" ],
choice1: function() {
cc.director.loadScene("shop2");
},
choice2: function() {
n.energy += 10;
t.closeUI("法力+10（消耗返还！）");
}
},
4003: {
text: [ "发现一份替道观贴驱妖符的差事，是否去试试？", "是（需20斋粮）", "算了" ],
action: function() {
cc.find("Canvas/Event/Choice/label").getComponent("cc.Label").string = "【提示】如果斋粮不足，系统将自动使用斋粮哦^_^";
},
choice1: function() {
var a = e("scr_public");
s();
if (n.hunger >= 0) {
var i = parseInt(3 + n.publicVar2[30] / 15);
n.money += i;
n.hunger -= 20;
a.autoEat();
t.closeUI("获得报酬" + (i / 10).toFixed(1) + "两");
} else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "斋粮值不足！";
},
choice2: function() {
t.closeUI();
}
},
4004: {
text: [ "碰到一位烤红薯的土地，是否买点尝尝？", "买（2文）", "算了" ],
choice1: function() {
if (n.money >= 2) {
var e = Math.min(3 * n.chioce2[4], 50), a = 100 * Math.random();
n.money -= 2;
if (a < e) {
n.chioce2[4] += 1;
n.hunger += 80;
t.closeUI("“啊吧~啊吧~”，不会说话的土地额外送给你一个红薯，斋粮+80！");
} else {
n.chioce2[4] += 1;
n.hunger += 40;
t.closeUI("香喷喷烤红薯，斋粮+40");
}
} else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "没盘缠！";
},
choice2: function() {
t.closeUI();
}
},
4005: {
text: [ "路上发现" + t.randomItemNum + "个踩扁的铜铃，四周无人，拾取不拾取？", "拾取", "不拾取" ],
choice1: function() {
if (100 * Math.random() < 50) {
t.closeUI();
cc.find("Canvas/Button").stopAllActions();
n.enemyId = 900007;
cc.find("Event/scr_fight").getComponent("scr_fight").fight(900007);
} else {
n.itemNum[2] += t.randomItemNum;
t.closeUI("获得" + t.randomItemNum + "个铜铃！");
}
},
choice2: function() {
t.closeUI();
}
},
7001: {
text: [ "又逛到那处可疑的地方，是否接着挖？", "是（需30斋粮，当前深度" + n.chioce2[3] + "）", "算了，留着肚子干点别的" ],
choice1: function() {
var a = e("scr_public");
i();
i();
if (n.hunger >= 30) {
n.hunger -= 30;
a.autoEat();
n.chioce2[3] += 1;
(function() {
var e = n.chioce2[3];
if (2 == e) {
n.money += 4;
t.closeUI("挖到两枚银币，获得0.4两！");
} else if (6 == e) {
n.itemNum[8] += 2;
t.closeUI("挖到两个黑色山石，获得【乌金石】*2");
} else if (12 == e) {
n.itemNum2[26] += 2;
t.closeUI("挖到一个如意石，获得【如意石】*2");
} else if (20 == e) {
n.itemNum[9] += 6;
t.closeUI("挖到出一个宝箱，打开一看，发现火焰火狐裘，获得【火焰火狐裘】*6！");
} else if (32 == e) {
n.itemNum2[27] += 2;
t.closeUI("挖到出一个宝箱，打开一看，发现月兔仙子手链，获得【月兔仙子手链】*2！");
} else if (50 == e) {
n.itemNum[8] += 10;
t.closeUI("挖到大量黑色山石，获得【乌金石】*10！！！");
} else t.closeUI("啥也没挖到！");
})();
} else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "你怕是会晕死在洞底哦~";
function i() {
var t = e("scr_data");
if (t.hunger <= 30) if (t.itemNum2[0] >= 1) {
t.itemNum2[0] -= 1;
t.orderTimes[2] += 1;
t.hunger += 60;
} else if (t.itemNum[0] >= 1) {
t.itemNum[0] -= 1;
t.orderTimes[5] += 1;
t.hunger += 20;
}
}
},
choice2: function() {
n.energy += 10;
t.closeUI("法力+10（消耗返还！）");
}
},
7002: {
text: [ "“我的梦想是成为天下第一飞刀手，所以能请你帮个忙个么？”，一个年轻小行者真诚的问道。", "可以呀（报酬0.5两，但有风险）", "...我是sb？" ],
choice1: function() {
var e = 100 * Math.random(), a = Math.min(20 + 5 * n.chioce2[5], 60);
n.chioce2[5] += 1;
if (e < a) {
n.money += 5;
t.closeUI("“走你！...蛤蛤！完美！”。获得0.5两报酬，小行者飞刀技术提升！");
} else {
n.money += 10;
n.role.hp = 1;
n.health -= 3;
t.closeUI("“走你！...哎呀！不好意思，手滑了下...多给你5文，拿去买些丹药吧~”。气血全损失，道心-3，获得1两报酬，小行者飞刀技术提升！");
}
},
choice2: function() {
n.chioce2[5] -= 1;
t.closeUI("由于小行者迟迟没有训练，所以飞镖技术退化了...");
}
},
7003: {
text: [ "你碰到" + parseInt(n.specialEnemy[400003].lv / 20) + "匹狼，要怎么做？", "干！", "丢块肉..." ],
choice1: function() {
t.closeUI();
cc.find("Canvas/Button").stopAllActions();
cc.find("Event/scr_fight").getComponent("scr_fight").fight(400003);
},
choice2: function() {
if (n.itemNum[3] >= 1) {
n.itemNum[3] -= 1;
t.closeUI("丢块妖兽肉，赶紧溜~(ง˙o˙)ว");
} else cc.find("Canvas/Event/Choice/Choice2/choiceText").getComponent("cc.Label").string = "没妖兽肉！( ¯▽¯；)";
}
},
7004: {
text: [ "路过一片流沙河环绕的小树林，是弄点用的还是拾取点材料呢？", "弄用的", "弄材料" ],
choice1: function() {
var e = parseInt(4 * Math.random() + 1), a = parseInt(3 * Math.random() + 1);
n.itemNum[0] += e;
n.itemNum[3] += a;
t.closeUI("获得【蟠桃】*" + e + "【妖兽肉】*" + a + "！");
},
choice2: function() {
var e = parseInt(4 * Math.random() + 1), a = parseInt(4 * Math.random() + 1);
n.itemNum[1] += e;
n.itemNum[4] += a;
t.closeUI("获得【降妖木】*" + e + "【袈裟布】*" + a + "！");
}
},
7005: {
text: [ "“在下施半仙，要不要来抽个签呀？如今商行搞活动，限时折扣价！咋样？”", "好呀（" + t.drawDiscount + "折，" + t.drawDiscount + "文盘缠）", "算了" ],
choice1: function() {
var e = t.drawDiscount;
if (n.money >= e) {
n.money -= e;
var a = 100 * Math.random();
if (a < 25) {
n.publicVar3[9] += 30;
t.closeUI("“嗯~今日你更容易拾取到东西哟~”（再次获得法宝几率+30%，持续1天）”");
} else if (a < 50) {
n.publicVar3[4] += 99;
t.closeUI("“嗯~今日适合怼！怼！怼！~”（降妖力+99，持续1天）”");
} else if (a < 75) {
n.publicVar3[10] += 99;
t.closeUI("“嗯~今日适合冈！冈！冈！~”（护身力+99，持续1天）”");
} else {
n.publicVar3[11] += 100;
t.closeUI("“嗯~今日适合装逼呢~”（遁走率+100%，持续1天）”");
}
} else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "“没盘缠！”";
},
choice2: function() {
t.closeUI("");
}
},
8001: {
text: [ "在修塔工地找到一份运青砖的临时差事，做不做呢？", "做（需20斋粮）", "算了" ],
action: function() {
cc.find("Canvas/Event/Choice/label").getComponent("cc.Label").string = "【提示】如果斋粮不足，系统将自动使用斋粮哦^_^";
},
choice1: function() {
var a = e("scr_public");
s();
if (n.hunger >= 0) {
var i = parseInt(5 + n.publicVar2[30] / 15);
n.money += i;
n.hunger -= 20;
a.autoEat();
t.closeUI("获得报酬" + (i / 10).toFixed(1) + "两");
} else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "斋粮值不足！";
},
choice2: function() {
t.closeUI();
}
},
8002: {
text: [ "一位长发仙姑抱膝坐在墙边，身旁写着几行清秀小字：“云游至此，香囊和传音符被偷，求" + (2 + 2 * n.chioce2[6]) + "文路费回洞府...”", "被骗了也值！给！", "溜了~" ],
choice1: function() {
var e = 2 + 2 * n.chioce2[6];
if (n.chioce2[6] > 10) {
var i = a.role.maxHp();
n.role.hp += parseInt(.5 * i);
n.role.hp > i && (n.role.hp = i);
t.closeUI("仙姑拒绝接受你的盘缠...并帮你清理劫伤，气血恢复50%！");
} else if (n.money < e) cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "没盘缠~"; else if (5 == n.chioce2[6]) {
t.closeUI();
cc.find("Canvas/Button").stopAllActions();
cc.find("Event/scr_fight").getComponent("scr_fight").fight(910);
} else if (10 == n.chioce2[6]) {
n.money -= e;
n.publicVar2[24] += 1;
n.chioce2[6] += 1;
t.closeUI("仙姑送给你一本经卷，小声说了句「对不起」，跑开了。获得《心经静念法》！");
} else {
n.money -= e;
n.chioce2[6] += 1;
t.closeUI("仙姑小声说了句谢谢...");
}
},
choice2: function() {
n.energy += 10;
t.closeUI("法力+10（消耗返还）");
}
},
8003: {
text: [ "“有奖套圈...咦？小行者，咋看起有些面熟呀...", "4文一次，要不要来一发？", "试试（" + Math.min(2 * n.randomEvent[12] + 20, 80) + "%套中）", "溜了溜了" ],
choice1: function() {
if (n.money >= 4) {
var e = 100 * Math.random(), a = Math.min(2 * n.randomEvent[12] + 20, 80);
n.money -= 4;
if (e < a) {
n.randomEvent[12] += 1;
(function() {
var e = 100 * Math.random();
if (e <= 40) {
n.money += 10;
t.closeUI("获得【1两】，扔圈熟练度+1（累计" + n.randomEvent[12] + "）");
}
if (e > 40 && e <= 50) {
n.itemNum2[12] += 1;
t.closeUI("获得【猴儿酒】*1，扔圈熟练度+1（累计" + n.randomEvent[12] + "）");
}
if (e > 50 && e <= 70) {
n.itemNum2[17] += 1;
t.closeUI("获得【照妖镜】*1，扔圈熟练度+1（累计" + n.randomEvent[12] + "）");
}
if (e > 70 && e <= 90) {
n.itemNum2[22] += 1;
t.closeUI("获得【锦襕袈裟】*1，扔圈熟练度+1（累计" + n.randomEvent[12] + "）");
}
if (e > 90 && e <= 95) {
n.itemNum2[27] += 1;
t.closeUI("获得【月兔仙子手链】*1，扔圈熟练度+1（累计" + n.randomEvent[12] + "）");
}
if (e > 95) {
n.itemNum2[26] += 1;
t.closeUI("获得【如意石】*1，扔圈熟练度+1（累计" + n.randomEvent[12] + "）");
}
})();
} else {
n.randomEvent[12] += 1;
t.closeUI("你扔空了，啥也没圈到，扔圈熟练度+1（累计" + n.randomEvent[12] + "）");
}
} else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "没盘缠！";
},
choice2: function() {
n.energy += 10;
t.closeUI("法力+10（消耗返还）");
}
},
8004: {
text: [ "发现一座金光闪闪的妖市楼阁！要进去看看吗？", "去", "不去" ],
choice1: function() {
cc.director.loadScene("shop3");
},
choice2: function() {
n.energy += 10;
t.closeUI("法力+10（消耗返还）");
}
},
90001: {
text: [ "“欢迎入阁，道友要做点什么呢？”", "请花妖奏曲", "饮点猴儿酒（1两）" ],
choice1: function() {},
choice2: function() {
n.energy += 10;
t.closeUI("法力+10（消耗返还）");
}
},
90002: {
text: [ "请问你找哪位？", "", "" ],
choice1: function() {},
choice2: function() {
n.energy += 10;
t.closeUI("法力+10（消耗返还）");
}
},
10001: {
text: [ "在导致行者失路的主要原因是：\n（此地仅对比这两类，不讨论身体缺陷问题）", "懒惰/愚昧（自身因素）", "心魔/外劫（客观因素）" ],
choice1: function() {
n.publicVar[11] > 0 && (n.publicVar[11] = 0);
n.publicVar[11] += 3;
t.closeUI();
t.startEvent(10002);
},
choice2: function() {
n.publicVar[11] > 0 && (n.publicVar[11] = 0);
n.publicVar[11] += 3;
t.closeUI();
t.startEvent(10002);
}
},
10002: {
text: [ "你是否认为内向是一种性格缺陷？", "是的", "不是的" ],
choice1: function() {
n.publicVar[11] += 3;
t.closeUI();
t.startEvent(10003);
},
choice2: function() {
n.publicVar[11] += 3;
t.closeUI();
t.startEvent(10003);
}
},
10003: {
text: [ "你认为包容可以解决矛盾吗？", "可以", "不可以" ],
choice1: function() {
n.publicVar[11] += 3;
t.closeUI();
t.startEvent(10004);
},
choice2: function() {
n.publicVar[11] += 3;
t.closeUI();
t.startEvent(10004);
}
},
10004: {
text: [ "你认为哪种东西更重要？", "个人法力和稳固道心", "良好缘法和安稳洞府" ],
choice1: function() {
n.publicVar[11] += 3;
t.closeUI();
t.startEvent(10005);
},
choice2: function() {
n.publicVar[11] += 3;
t.closeUI();
t.startEvent(10005);
}
},
10005: {
text: [ "你认为哪种念头更易生心魔？", "“我天生命薄...不配被渡...”", "“我身边的人都该顺我心意！”" ],
choice1: function() {
n.publicVar[11] += 3;
t.closeUI();
t.startEvent(10006);
},
choice2: function() {
n.publicVar[11] += 3;
t.closeUI();
t.startEvent(10006);
}
},
10006: {
text: [ "你更需要：", "自己认可自己", "别人认可自己" ],
choice1: function() {
n.publicVar[11] += 3;
t.closeUI();
t.startEvent(10007);
},
choice2: function() {
n.publicVar[11] += 3;
t.closeUI();
t.startEvent(10007);
}
},
10007: {
text: [ "你认为人活着需要理由吗？", "需要", "不需要" ],
choice1: function() {
n.publicVar[11] += 3;
t.closeUI();
t.startEvent(10008);
},
choice2: function() {
n.publicVar[11] += 3;
t.closeUI();
t.startEvent(10008);
}
},
10008: {
text: [ "你是否有想过愚蠢和缺乏自制力的人应该都死掉？", "想过", "没想过" ],
choice1: function() {
n.publicVar[11] += 3;
t.closeUI();
t.startEvent(10009);
},
choice2: function() {
n.publicVar[11] += 3;
t.closeUI();
t.startEvent(10009);
}
},
10009: {
text: [ "回答以上问题时，你是否揣测过这些问题与取经功德的关系？", "有", "没有" ],
choice1: function() {
n.publicVar[11] += 3;
t.closeUI();
t.startEvent(10010);
},
choice2: function() {
n.publicVar[11] += 3;
t.closeUI();
t.startEvent(10010);
}
},
10010: {
text: [ "以上问题你是如实回答的吗？（没有为了取得真经而刻意选择答案）", "是的", "不是的" ],
choice1: function() {
n.publicVar[11] += 3;
t.closeUI();
r();
},
choice2: function() {
n.publicVar[11] += 3;
t.closeUI();
r();
}
},
20001: {
text: [ "你愿意回山门吗？", "愿意", "不愿意" ],
choice1: function() {
n.publicVar3[3] = 311;
t.closeUI("“回山门吧，少年。”");
},
choice2: function() {
if (n.ifFollow[0] > 0) {
n.publicVar3[3] = 412;
n.plotId = 1002;
a.save();
cc.director.loadScene("plot");
} else if (n.publicVar[7] >= 999) {
n.publicVar3[3] = 413;
n.plotId = 1003;
a.save();
cc.director.loadScene("plot");
} else {
n.publicVar3[3] = 411;
n.plotId = 1001;
a.save();
cc.director.loadScene("plot");
}
}
}
};
function r() {
var i = 59 - 10 * e("scr_data2").gameData[4];
n.skillLv[4] = 0;
t.gamePoint = 3 * n.choice[2] + 6 * n.choice[7] + 6 * n.publicVar2[14] + 2 * (10 - n.publicVar2[21]) + 5 * n.publicVar[9] - Math.max(Math.min((4 * n.orderTimes[1] - n.orderTimes[4]) / 10, 10), 0);
t.gamePoint += parseInt(3 * n.publicVar2[19] / 50) + 3 * n.publicVar2[15];
t.attPoint = parseInt(21 - 6 * a.role.maxHp() / 1e4 - 6 * a.role.att() / 2e3 - 6 * a.role.def() / 1e3);
t.attPoint = Math.min(Math.max(t.attPoint, 0), 18);
t.totalPoint = t.gamePoint + t.attPoint + n.publicVar[11];
if (t.totalPoint < i) {
n.publicVar3[3] = 111;
t.closeUI("......");
} else {
n.publicVar3[3] = 211;
t.closeUI("......");
}
}
function s() {
var t = e("scr_data");
if (t.hunger <= 20) if (t.itemNum2[0] >= 1) {
t.itemNum2[0] -= 1;
t.orderTimes[2] += 1;
t.hunger += 60;
} else if (t.itemNum[0] >= 1) {
t.itemNum[0] -= 1;
t.orderTimes[5] += 1;
t.hunger += 20;
}
}
return o;
},
startEvent: function(e) {
var t = this.event()[e], n = t.text, a = n.pop(), i = n.pop(), c = n.length, o = cc.find("Canvas/Event/Choice");
cc.find("Canvas/Event/EventText").removeAllChildren();
cc.find("Canvas/Event/Choice/label").getComponent("cc.Label").string = "你抉择...";
"undefined" != typeof t.action && t.action();
this.showUI();
this.printEventDes(n);
this.scheduleOnce(function() {
o.runAction(cc.scaleTo(.5, 1));
}, 1 * c);
(function() {
var e = t.choice1, n = t.choice2, c = o.getChildByName("Choice1"), r = o.getChildByName("Choice2");
c.getChildByName("choiceText").getComponent("cc.Label").string = i;
r.getChildByName("choiceText").getComponent("cc.Label").string = a;
if ("" == i) {
c.opacity = 0;
o.getChildByName("label").opacity = 0;
}
c.on("touchstart", e, c);
r.on("touchstart", n, r);
})();
},
printEventDes: function(e) {
var t = e.length, n = 1, a = this, i = cc.find("Canvas/Event/EventText");
cc.find("Event/scr_mainUIEvent");
this.creatText(i, "plot0", e[0]);
this.schedule(function() {
a.creatText(i, "plot" + n, e[n]);
n++;
}, 1, t - 2);
},
showUI: function() {
cc.find("Canvas/Text/txt_notify").opacity = 0;
cc.find("Canvas/Text/txt_notify").getComponent("cc.Label").string = "";
cc.find("Canvas/Event").scale = 1;
cc.find("Canvas/Event/Choice").scale = 0;
cc.find("Canvas/Button").runAction(cc.scaleTo(.3, 0));
},
closeUI: function(t) {
var n = cc.find("Canvas/Button"), a = e("scr_public"), i = cc.find("Canvas/Event/Choice/Choice1"), c = cc.find("Canvas/Event/Choice/Choice2");
cc.find("Canvas/Text/txt_notify").opacity = 255;
cc.find("Canvas/Event/EventText").removeAllChildren();
i.targetOff(i);
c.targetOff(c);
cc.find("Canvas/Event").scale = 0;
n.runAction(cc.scaleTo(.3, 1));
t = t || "";
e("scr_effect").playText("Canvas/Text/txt_notify", t, 60);
a.save();
a.init();
},
onLoad: function() {}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_data2: "scr_data2",
scr_effect: "scr_effect",
scr_public: "scr_public"
} ],
scr_mainUIinit: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "63b63kuwo9N7JpekGEK/q7S", "scr_mainUIinit");
cc.Class({
extends: cc.Component,
properties: {},
skillShow: function() {
var t = 0, n = e("scr_data").skillLv;
for (var a in n) n[a] > 0 && t++;
return t;
},
initSkillShow: function() {
cc.find("Canvas/Text/txt_skillNum").getComponent("cc.Label").string = "特性  " + this.skillShow() + "/27";
},
whichShow: function(t, n) {
for (var a = e("scr_data").distance, i = cc.find(n).children, c = t.length, o = 0; o <= c; o++) a >= t[o] ? i[o].active = !0 : i[o].active = !1;
},
showButton: function() {
this.whichShow([ 6, 4, 7, 23 ], "Canvas/Button");
e("scr_public").init();
},
showfriendButton: function() {
var t = e("scr_data"), n = cc.find("Canvas/Button/button_friend");
1 == t.ifFollow[0] || 1 == t.ifFollow[1] ? n.active = !0 : n.active = !1;
},
onButton: function() {
var t = e("scr_data"), n = cc.find("Canvas/Button"), a = n.getChildByName("button_dekaron");
t.day > 0 && t.publicVar[1] >= 0 ? a.on("touchstart", this.dekaronButton, this) : a.active = !1;
1 == t.ifFollow[0] ? n.getChildByName("button_friend").on("touchstart", function() {
cc.director.loadScene("friend1");
}, this) : 1 == t.ifFollow[1] && n.getChildByName("button_friend").on("touchstart", function() {
cc.director.loadScene("friendSkill2");
}, this);
},
dekaronButton: function() {
var t = e("scr_data"), n = e("scr_public"), a = e("scr_effect");
t.energy >= 10 ? function() {
var e = [ 201, 202, 300003, 203, 204, 205, 206, 207, 900006, 209, 210, 211, 900005, 213, 214, 215 ][t.choice[6]];
if ("undefined" == typeof e) a.playText("Canvas/Text/txt_notify", "什么都没有...", 60); else {
t.energy -= 10;
n.save();
cc.find("Event/scr_fight").getComponent("scr_fight").fight(e);
}
}() : a.playText("Canvas/Text/txt_notify", "挑战需10点法力！", 60);
},
hideUI: function() {
var e = cc.find("Canvas/Button").children, t = cc.find("Canvas/Text").children, n = cc.find("Canvas/Button/button_explore");
for (var a in e) e[a].active = !1;
for (var i in t) t[i].active = !1;
cc.find("Canvas/UI").active = !1;
cc.find("Canvas/Text/txt_notify").active = !0;
n.active = !0;
n.x = 7;
n.y = 164;
},
onLoad: function() {
var t = e("scr_public"), n = e("scr_data");
(function() {
if (300 == n.distance && n.stayDay[3] > 1 && 0 == n.publicVar3[2]) {
var t = cc.find("Canvas/Button/button_rest");
t.getChildByName("text").getComponent("cc.Label").string = "桥  洞";
t.on("touchstart", function() {
cc.director.loadScene("home");
}, t);
} else {
var t = cc.find("Canvas/Button/button_rest");
t.on("touchstart", function() {
e("scr_data").energy >= 10 ? cc.director.loadScene("notice2") : cc.director.loadScene("diary");
}, t);
}
})();
this.showButton();
this.initSkillShow();
this.onButton();
this.showfriendButton();
t.autoEat();
n.role.hp < 0 && (n.role.hp = 1);
t.init();
cc.find("Canvas/Fight").active = !1;
cc.find("Canvas/Button").active = !0;
n.day >= 180 && this.hideUI();
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_effect: "scr_effect",
scr_public: "scr_public"
} ],
scr_makeButton: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "fbf64sNmm5MYp/UrY57mFiI", "scr_makeButton");
cc.Class({
extends: cc.Component,
properties: {},
callBack: function() {
cc.director.loadScene("make");
},
onLoad: function() {
this.node.on("touchstart", this.callBack, this);
}
});
cc._RF.pop();
}, {} ],
scr_makeUI: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "65413JSLq1B/LWVXwKnjL2L", "scr_makeUI");
cc.Class({
extends: cc.Component,
properties: {
itemUI: {
default: null,
type: cc.Prefab
}
},
creatText: function(e, t, n) {
var a = new cc.Node(t);
a.addComponent(cc.Label);
a.parent = e;
a.setPosition(0, -300);
a.color = new cc.Color(0, 255, 0);
a.getComponent(cc.Label).overflow = 3;
a.setContentSize(530, 300);
a.getComponent(cc.Label).string = n;
a.getComponent(cc.Label).lineHeight = 80;
a.getComponent(cc.Label).fontSize = 40;
},
itemContent: function() {
this.data = e("scr_data");
var t = this, n = e("scr_effect"), a = {
0: {
itemName: " 斋饭 ",
needDes: "※需【妖兽肉】" + this.data.itemNum[3] + "/1【降妖木】" + this.data.itemNum[1] + "/1",
des: "※获得【斋饭】（已拥有" + this.data.itemNum2[0] + "）",
ifEnough: function(e) {
t.data.itemNum[3] >= 1 && t.data.itemNum[1] >= 1 && (cc.find("Canvas/Page/view/content/page_1/" + e + "/button/name").color = new cc.color(0, 255, 0));
},
button: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.itemNum[3] >= 1 && n.itemNum[1] >= 1) {
n.itemNum[3] -= 1;
n.itemNum[1] -= 1;
n.itemNum2[0] += 1;
i.save();
a.playText("Canvas/notify", "获得【斋饭】*1", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "材料不足！", 100);
}
},
1: {
itemName: " 金疮药 ",
needDes: "※需【灵草】" + this.data.itemNum[5] + "/2",
des: "※获得【金疮药】（拥有" + this.data.itemNum2[1] + "）",
ifEnough: function(e) {
t.data.itemNum[5] >= 2 && (cc.find("Canvas/Page/view/content/page_1/" + e + "/button/name").color = new cc.color(0, 255, 0));
},
button: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
for (var z = 0; z <= n.talkTimes[0]; z++) if (n.itemNum[5] >= 2) {
n.itemNum[5] -= 2;
n.itemNum2[1] += 1;
i.save();
a.playText("Canvas/notify", "获得【金疮药】*1", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "材料不足！", 100);
}
},
2: {
itemName: "行囊帐LV" + this.data.itemNum2[2],
needDes: "※需【降妖木】" + this.data.itemNum[1] + "/" + (1 + this.data.itemNum2[2]) + "【袈裟布】" + this.data.itemNum[4] + "/" + (4 + 2 * this.data.itemNum2[2]),
des: "※法力上限增加" + 10 * this.data.itemNum2[2] + "点",
ifEnough: function(e) {
t.data.itemNum[1] >= 1 + t.data.itemNum2[2] && t.data.itemNum[4] >= 4 + 2 * t.data.itemNum2[2] && (cc.find("Canvas/Page/view/content/page_1/" + e + "/button/name").color = new cc.color(0, 255, 0));
},
button: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 1 + n.itemNum2[2], o = n.itemNum[1], r = 4 + 2 * n.itemNum2[2], s = n.itemNum[4];
if (o >= c && s >= r) {
n.itemNum[1] -= c;
n.itemNum[4] -= r;
n.itemNum2[2] += 1;
i.save();
a.playText("Canvas/notify", "法力上限+10！", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "材料不足！", 100);
}
},
3: {
itemName: "木棍LV" + this.data.itemNum2[3],
needDes: "※需【降妖木】" + this.data.itemNum[1] + "/" + (4 + 2 * this.data.itemNum2[3]),
des: "※增加" + 10 * this.data.itemNum2[3] + "点降妖力。【暴击】" + 2 * this.data.itemNum2[3] + "%几率触发暴击",
ifEnough: function(e) {
t.data.itemNum[1] >= 4 + 2 * t.data.itemNum2[3] && (cc.find("Canvas/Page/view/content/page_1/" + e + "/button/name").color = new cc.color(0, 255, 0));
},
button: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 4 + 2 * n.itemNum2[3];
if (n.itemNum[1] >= c) {
n.itemNum[1] -= c;
n.itemNum2[3] += 1;
i.save();
a.playText("Canvas/notify", "降妖力+10！", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "材料不足！", 100);
}
},
4: {
itemName: "麻布衣LV" + this.data.itemNum2[4],
needDes: "※需【袈裟布】" + this.data.itemNum[4] + "/" + (4 + 2 * this.data.itemNum2[4]),
des: "※增加" + 50 * this.data.itemNum2[4] + "点气血上限。" + Math.min(2 * this.data.itemNum2[4], 60) + "%几率触发【格挡】",
ifEnough: function(e) {
t.data.itemNum[4] >= 4 + 2 * t.data.itemNum2[4] && (cc.find("Canvas/Page/view/content/page_2/" + e + "/button/name").color = new cc.color(0, 255, 0));
},
button: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 4 + 2 * n.itemNum2[4];
if (n.itemNum[4] >= c) {
n.itemNum[4] -= c;
n.itemNum2[4] += 1;
i.save();
a.playText("Canvas/notify", "气血上限+50！", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "材料不足！", 100);
}
},
5: {
itemName: "驱蚊工具LV" + this.data.itemNum2[6],
needDes: "※需【灵草】" + this.data.itemNum[5] + "/" + (8 + 2 * this.data.itemNum2[6]),
des: "※打坐时恢复" + 30 * this.data.itemNum2[6] + "点气血",
ifEnough: function(t) {
var n = e("scr_data");
n.itemNum[5] >= 8 + 2 * n.itemNum2[6] && (cc.find("Canvas/Page/view/content/page_2/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 8 + 2 * n.itemNum2[6];
if (n.itemNum[5] >= c) {
n.itemNum[5] -= c;
n.itemNum2[6] += 1;
i.save();
a.playText("Canvas/notify", "讨厌的蚊妖减少啦~", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "材料不足！", 100);
}
},
6: {
itemName: "陷阱LV" + this.data.itemNum2[5],
needDes: "※需【降妖木】" + this.data.itemNum[1] + "/" + (4 + 2 * this.data.itemNum2[5]),
des: "※每天30%几率随机获得一种素材，升级提升获得数量",
ifEnough: function(t) {
var n = e("scr_data");
n.itemNum[1] >= 4 + 2 * n.itemNum2[5] && (cc.find("Canvas/Page/view/content/page_2/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 4 + 2 * n.itemNum2[5];
if (n.itemNum[1] >= c) {
n.itemNum[1] -= c;
n.itemNum2[5] += 1;
i.save();
a.playText("Canvas/notify", "升级成功！", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "材料不足！", 100);
}
},
7: {
itemName: "  安神香  ",
needDes: "※需【安神草】" + this.data.itemNum[6] + "/4 或者【残香】" + this.data.itemNum[7] + "/8",
des: "※获得【安神香】。西行中重要的“软货币”，也可自己使用",
ifEnough: function(t) {
var n = e("scr_data");
(n.itemNum[6] >= 4 || n.itemNum[7] >= 8) && (cc.find("Canvas/Page/view/content/page_2/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = n.itemNum[6], o = n.itemNum[7];
for (var z = 0; z <= 3; z++) if (c >= 4) {
n.itemNum[6] -= 4;
n.itemNum2[7] += 1;
i.save();
a.playText("Canvas/notify", "获得【安神香】*1！", 100);
t.delayCreatItemUI();
} else if (o >= 8) {
n.itemNum[7] -= 8;
n.itemNum2[7] += 1;
i.save();
a.playText("Canvas/notify", "获得【安神香】*1！", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "材料不足！", 100);
}
},
8: {
itemName: "猴儿酒",
needDes: "※需【50ml猴儿酒】" + this.data.itemNum[10] + "/5",
des: "※获得一罐【猴儿酒】！",
ifEnough: function(t) {
e("scr_data").itemNum[10] >= 5 && (cc.find("Canvas/Page/view/content/page_3/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
for (var z = 0; z <= n.talkTimes[0]; z++) if (n.itemNum[10] >= 5) {
n.itemNum[10] -= 5;
n.itemNum2[12] += 1;
i.save();
a.playText("Canvas/notify", "获得【猴儿酒】*1！", 100);
t.delayCreatItemUI3();
} else a.playText("Canvas/notify", "材料不足！", 100);
}
},
9: {
itemName: "降妖短杖LV" + this.data.itemNum2[8],
needDes: "※可通过请购，或者打妖掉落提高等级",
des: "※增加" + 20 * this.data.itemNum2[8] + "点降妖力。【嗜血】出手时，" + 2 * this.data.itemNum2[8] + "%概率恢复劫伤21%的气血",
button: function() {
n.playText("Canvas/notify", "请去商店请购！", 100);
}
},
10: {
itemName: "护法袈裟LV" + this.data.itemNum2[9],
needDes: "※可通过请购，或者打妖掉落提高等级",
des: "※增加" + 10 * this.data.itemNum2[9] + "点护身力。【反弹】受击时，" + 2 * this.data.itemNum2[9] + "%几率减免「100%*自身护身力」点劫伤，并且将劫伤反弹给对方",
button: function() {
n.playText("Canvas/notify", "请去商店请购！", 100);
}
},
11: {
itemName: "┑(=^ω^=)┑LV" + this.data.itemNum2[13],
needDes: "※获得方法未知",
des: "※每天自动获得「0.1*LV」两",
button: function() {
n.playText("Canvas/notify", "喵~", 100);
}
},
12: {
itemName: "如意石LV" + (this.data.itemNum2[26] + this.data.publicVar3[18]),
needDes: "※法宝杂藏",
des: "※增加" + (this.data.itemNum2[26] + this.data.publicVar3[18]) + "%的额外掉落赏赐",
button: function() {}
},
13: {
itemName: "月兔仙子手链LV" + (this.data.itemNum2[27] + this.data.publicVar3[17]),
needDes: "※法宝杂藏",
des: "※如果西行/探路时未发现法宝，则有" + 5 * (this.data.itemNum2[27] + this.data.publicVar3[17]) + "%概率（LV*5%）再一次获得赏赐",
button: function() {
n.playText("Canvas/notify", "月兔仙子手链触发时，必定获得赏赐，且可以与「劫运缠身逆袭」特性同时触发", 100);
}
},
14: {
itemName: "如意金箍棒LV" + this.data.itemNum2[10],
needDes: "※需【乌金石】" + this.data.itemNum[8] + "/" + (10 + 2 * this.data.itemNum2[10]),
des: "※增加" + 30 * this.data.itemNum2[10] + "点降妖力。【割裂】每次降妖力劫伤提高" + 4 * this.data.itemNum2[10] + "%，最多叠加20次",
ifEnough: function(t) {
var n = e("scr_data");
n.itemNum[8] >= 10 + 2 * n.itemNum2[10] && (cc.find("Canvas/Page/view/content/page_4/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 10 + 2 * n.itemNum2[10];
if (n.itemNum[8] >= c) {
n.itemNum[8] -= c;
n.itemNum2[10] += 1;
i.save();
a.playText("Canvas/notify", "获得【如意金箍棒】*1！", 100);
t.delayCreatItemUI4();
} else a.playText("Canvas/notify", "材料不足！", 100);
}
},
15: {
itemName: "大圣披风LV" + this.data.itemNum2[11],
needDes: "※需【火焰火狐裘】" + this.data.itemNum[9] + "/" + (10 + 2 * this.data.itemNum2[11]),
des: "※增加" + 150 * this.data.itemNum2[11] + "点气血上限，" + 15 * this.data.itemNum2[11] + "点护身力。【火焰狐妖之灵】受击时，" + 2 * this.data.itemNum2[11] + "%概率提高20%护身力（最多叠加20次），并且恢复自身5%的气血",
ifEnough: function(t) {
var n = e("scr_data");
n.itemNum[9] >= 10 + 2 * n.itemNum2[11] && (cc.find("Canvas/Page/view/content/page_4/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 10 + 2 * n.itemNum2[11];
if (n.itemNum[9] >= c) {
n.itemNum[9] -= c;
n.itemNum2[11] += 1;
i.save();
a.playText("Canvas/notify", "获得【大圣披风】*1！", 100);
t.delayCreatItemUI4();
} else a.playText("Canvas/notify", "材料不足！", 100);
}
},
16: {
itemName: "西行披肩LV" + this.data.itemNum2[15],
needDes: "※用于增加自信。",
des: "※每级增加1%全斗法法相（攻防血）。【帅呆】每级减少敌方2%护身力！【拉风】每级减少敌方5%遁走率！",
button: function() {
n.playText("Canvas/notify", "听说穿上这件披肩的人，最后都被打死了...", 100);
}
},
17: {
itemName: "照妖镜LV" + (this.data.itemNum2[17] + this.data.publicVar3[9]),
needDes: "※法宝杂藏",
des: "※西行/探路时，" + (this.data.itemNum2[17] + this.data.publicVar3[9]) + "%几率额外获得一次赏赐！",
button: function() {
n.playText("Canvas/notify", "(O_o)", 100);
}
},
18: {
itemName: "避尘靴LV" + this.data.itemNum2[18],
needDes: "※法宝杂藏",
des: "※遁走技术增加速度+1！（你目前遁走技术为" + this.data.escapeExp + "）",
button: function() {
n.playText("Canvas/notify", "装了比就跑，真特么刺激", 100);
}
},
19: {
itemName: "芭蕉扇LV" + this.data.itemNum2[19],
needDes: "※仙砂（拥有" + this.data.itemNum[11] + "）兑换，可能会招来麻烦！",
des: "※造成「芭蕉扇等级+1」倍劫伤，每次消耗1颗定风珠（已有" + this.data.itemNum2[14] + "）。点击斗法界面右下角文字可以打开/关闭芭蕉扇效果！",
button: function() {
e("scr_data").itemNum2[19] > 0 ? n.playText("Canvas/notify", "点击斗法界面右下角（遁走率右边）【开/关】才会生效哦~", 100) : n.playText("Canvas/notify", "你还没有芭蕉扇！", 100);
}
},
20: {
itemName: "金砖LV" + this.data.itemNum2[20],
needDes: "※法宝杂藏",
des: "※每级增加5点降妖力！",
button: function() {
n.playText("Canvas/notify", "听说集齐21块可以召唤巡山小钻风哦~", 100);
}
},
21: {
itemName: "虎皮裙LV" + this.data.itemNum2[21],
needDes: "※法宝杂藏",
des: "※每级增加5点护身力！",
button: function() {
n.playText("Canvas/notify", "有股淡淡的清香呢~(ಡωಡ)~", 100);
}
},
22: {
itemName: "锦襕袈裟LV" + this.data.itemNum2[22],
needDes: "※法宝杂藏",
des: "※每级增加25点气血！",
button: function() {
n.playText("Canvas/notify", "听说集齐18件可以变成女施主哦~", 100);
}
},
23: {
itemName: "疗伤符LV" + this.data.itemNum2[23],
needDes: "※法宝杂藏",
des: "※每级提高2点西行/探路时气血回复量！",
button: function() {
n.playText("Canvas/notify", "“鼠妖丹药~蟑螂丹药~臭脚克星...”", 100);
}
},
24: {
itemName: "行者短袍LV" + this.data.itemNum2[24],
needDes: "※法宝杂藏",
des: "※每级增加2%遁走几率！",
button: function() {
var e = 100 * Math.random();
e < 30 ? n.playText("Canvas/notify", "(→_→) (↑_↑) (←_←) (↓_↓)", 100) : e < 60 ? n.playText("Canvas/notify", "(→_→) (←_←)(→_→)(←_←)", 100) : n.playText("Canvas/notify", "(↑_↑) (→_→) (↑_↑) (←_←)", 100);
}
},
25: {
itemName: "护身符LV" + this.data.itemNum2[25],
needDes: "※法宝杂藏",
des: "※战败后，保留" + parseInt(1 + 50 * this.data.itemNum2[25] + .03 * e("scr_public").role.maxHp() * this.data.itemNum2[25]) + "点气血！",
button: function() {
n.playText("Canvas/notify", "上边似乎画着一个性感的二次两仙姑~", 100);
}
}
};
return a;
},
creatPrefab: function(e, t) {
var n = cc.instantiate(this.itemUI), a = this.itemContent()[e], i = a.button, c = "item" + e;
n.name = c;
n.getChildByName("button").getChildByName("name").getComponent("cc.Label").string = a.itemName;
n.getChildByName("need").getComponent("cc.Label").string = a.needDes;
n.getChildByName("des").getComponent("cc.Label").string = a.des;
n.getChildByName("button").getChildByName("name").getComponent("cc.Button").scheduleOnce(function() {
n.getChildByName("button").getChildByName("name").on("touchstart", i, this);
}, .4);
cc.find("Canvas/Page/view/content").getChildByName(t).addChild(n);
"undefined" != typeof a.ifEnough && a.ifEnough(c);
},
creatItemUI1: function() {
cc.find("Canvas/Page/view/content/page_1").removeAllChildren();
for (var e = 0; e <= 3; e++) this.creatPrefab(e, "page_1");
},
creatItemUI2: function() {
cc.find("Canvas/Page/view/content/page_2").removeAllChildren();
for (var e = 4; e <= 7; e++) this.creatPrefab(e, "page_2");
},
creatItemUI3: function() {
if (e("scr_data").distance >= 0) {
cc.find("Canvas/Page/view/content/page_3").removeAllChildren();
for (var t = 8; t <= 11; t++) this.creatPrefab(t, "page_3");
} else this.creatText(cc.find("Canvas/Page/view/content/page_3"), "notify", "※第3页内容，将在到达高老庄后解锁！");
},
creatItemUI4: function() {
if (e("scr_data").distance >=0) {
cc.find("Canvas/Page/view/content/page_4").removeAllChildren();
for (var t = 12; t <= 15; t++) this.creatPrefab(t, "page_4");
} else this.creatText(cc.find("Canvas/Page/view/content/page_4"), "notify", "※第4页内容，将在到达高老庄后解锁！");
},
creatItemUI5: function() {
if (e("scr_data").distance >= 0) {
cc.find("Canvas/Page/view/content/page_5").removeAllChildren();
for (var t = 16; t <= 19; t++) this.creatPrefab(t, "page_5");
} else this.creatText(cc.find("Canvas/Page/view/content/page_5"), "notify", "※第5页内容，将在到达高老庄后解锁！");
},
creatItemUI6: function() {
if (e("scr_data").distance >= 0) {
cc.find("Canvas/Page/view/content/page_6").removeAllChildren();
for (var t = 20; t <= 23; t++) this.creatPrefab(t, "page_6");
} else this.creatText(cc.find("Canvas/Page/view/content/page_6"), "notify", "※第6页内容，将在到达高老庄后解锁！");
},
creatItemUI7: function() {
if (e("scr_data").distance >= 1) {
cc.find("Canvas/Page/view/content/page_7").removeAllChildren();
for (var t = 24; t <= 25; t++) this.creatPrefab(t, "page_7");
} else this.creatText(cc.find("Canvas/Page/view/content/page_7"), "notify", "※第7页内容，将在到达高老庄后解锁！");
},
delayCreatItemUI: function() {
var e = this;
this.scheduleOnce(function() {
e.creatItemUI1();
e.creatItemUI2();
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
delayCreatItemUI7: function() {
this.scheduleOnce(this.creatItemUI7, .2);
},
onLoad: function() {
this.creatItemUI1();
this.creatItemUI2();
this.creatItemUI3();
this.creatItemUI4();
this.creatItemUI5();
this.creatItemUI6();
this.creatItemUI7();
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_effect: "scr_effect",
scr_public: "scr_public"
} ],
scr_newGame: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "116b0dQK4RNd6tA1hozVnWG", "scr_newGame");
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
scr_notice2: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "5d6b1w/rEpC5bWSm2L4xLZt", "scr_notice2");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var t = cc.find("Canvas/button");
cc.find("Canvas/button/button1").on("touchstart", function() {
cc.director.loadScene("main");
}, this);
cc.find("Canvas/button/button2").on("touchstart", function() {
cc.director.loadScene("diary");
}, this);
e("scr_effect").playText("Canvas/text", "系统检测到你还有没用完的法力，你确定要打坐吗？", 80);
t.opacity = 0;
this.scheduleOnce(function() {
t.runAction(cc.fadeIn(2));
}, 2);
}
});
cc._RF.pop();
}, {
scr_effect: "scr_effect"
} ],
scr_notice: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "8a8f3K8uShD74FI50VPMkWg", "scr_notice");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var t = cc.find("Canvas/button");
cc.find("Canvas/button/button1").on("touchstart", function() {
cc.sys.localStorage.removeItem("userData");
cc.director.loadScene("choice");
}, this);
cc.find("Canvas/button/button2").on("touchstart", function() {
cc.director.loadScene("start");
}, this);
e("scr_effect").playText("Canvas/text", "新开会删除旧存档，你确定要重新启程吗？", 80);
t.opacity = 0;
this.scheduleOnce(function() {
t.runAction(cc.fadeIn(2));
}, 2);
}
});
cc._RF.pop();
}, {
scr_effect: "scr_effect"
} ],
scr_open: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "72e60aF4atJaJ3b2ZL0hIlb", "scr_open");
cc.Class({
extends: cc.Component,
properties: {},
creatText: function(e, t, n) {
var a = new cc.Node(t);
a.addComponent(cc.Label);
a.parent = e;
a.setPosition(0, 0);
a.opacity = 0;
a.runAction(cc.fadeIn(3));
a.color = new cc.Color(255, 255, 255);
a.getComponent(cc.Label).overflow = 3;
a.getComponent(cc.Label).horizontalAlign = 1;
a.setContentSize(600, 300);
a.getComponent(cc.Label).string = n;
a.getComponent(cc.Label).lineHeight = 50;
a.getComponent(cc.Label).fontSize = 40;
},
onLoad: function() {
var e = [ "昨日，", "和师父大吵一架后，", "我双手空空的逃了出来。", "我决定离开这座洞府，", "再也不回山门了..." ], t = (e.length, 
this), n = 0, a = cc.find("Canvas/Layout"), i = cc.find("Canvas/skip");
function c() {
t.creatText(a, "plot" + n, e[n]);
n++;
}
var o = window.setInterval(function() {
var e = {
500: function() {
c();
},
3500: function() {
c();
},
6500: function() {
c();
},
9500: function() {
c();
},
12500: function() {
c();
},
17500: function() {
var e = a.children;
for (var t in e) e[t].runAction(cc.fadeOut(2));
},
20000: function() {
window.clearInterval(o);
cc.director.loadScene("main");
}
};
"undefined" != typeof e[r += 500] && e[r]();
}, 500), r = 0;
i.on("touchstart", function() {
o && window.clearTimeout(o);
cc.director.loadScene("main");
}, this);
this.scheduleOnce(function() {
i.active = !0;
i.runAction(cc.fadeTo(3, 60));
}, 2);
}
});
cc._RF.pop();
}, {} ],
scr_over2_1: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "62e498iaclK8KXOlDUYWsAs", "scr_over2_1");
cc.Class({
extends: cc.Component,
properties: {},
creatText: function(e, t, n) {
var a = new cc.Node(t);
a.addComponent(cc.Label);
a.parent = e;
a.setPosition(0, 0);
a.opacity = 0;
a.runAction(cc.fadeIn(3));
a.color = new cc.Color(255, 255, 255);
a.getComponent(cc.Label).overflow = 3;
a.getComponent(cc.Label).horizontalAlign = 1;
a.setContentSize(600, 300);
a.getComponent(cc.Label).string = n;
a.getComponent(cc.Label).lineHeight = 70;
a.getComponent(cc.Label).fontSize = 40;
},
onLoad: function() {
e("scr_data");
var t = e("scr_data2"), n = e("scr_public"), a = [ "很好，", "你可能有点轻微的强迫症，", "但是我还是决定给你一点补偿,", "虽然我认为你接受的可能性只有\n20%，", "但是，你也没办法寄刀片给我\n(｀・ω・´)", "因为我是一个虚拟现实角色！" ];
console.log(a);
var i = a.length, c = 0, o = cc.find("Canvas/Show"), r = cc.find("Canvas/Determine"), s = this, l = Math.min(20 + 10 * t.dieChoice[3], 40);
cc.find("Canvas/Determine/choice1/text").getComponent("cc.Label").string = "带着说书人给的" + parseInt(l / 10) + "两盘缠，重新启程";
r.active = !1;
r.opacity = 0;
this.schedule(function() {
s.creatText(o, "plot" + c, a[c]);
console.log(a[c]);
c++;
}, 3, i - 1);
this.scheduleOnce(function() {
r.active = !0;
r.runAction(cc.fadeIn(2));
}, 3 * (i + 1));
r.getChildByName("choice1").on("touchstart", function() {
t.initMoney = l;
t.dieChoice[3] += 0;
n.save2();
(function() {
JSON.parse(cc.sys.localStorage.getItem("userData")) && cc.sys.localStorage.removeItem("userData");
cc.director.loadScene("start");
})();
}, this);
r.getChildByName("choice2").on("touchstart", function() {
t.dieChoice[3] += 1;
n.save2();
cc.director.loadScene("over");
}, this);
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_data2: "scr_data2",
scr_public: "scr_public"
} ],
scr_over2: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "aca905dFBlPoYq+iajnsZIA", "scr_over2");
cc.Class({
extends: cc.Component,
properties: {},
creatText: function(e, t, n) {
var a = new cc.Node(t);
a.addComponent(cc.Label);
a.parent = e;
a.setPosition(0, 0);
a.opacity = 0;
a.runAction(cc.fadeIn(3));
a.color = new cc.Color(255, 255, 255);
a.getComponent(cc.Label).overflow = 3;
a.getComponent(cc.Label).horizontalAlign = 1;
a.setContentSize(600, 300);
a.getComponent(cc.Label).string = n;
a.getComponent(cc.Label).lineHeight = 60;
a.getComponent(cc.Label).fontSize = 40;
},
onLoad: function() {
var t = e("scr_data"), n = e("scr_public"), a = [ "由于一些人的吐槽，\n(；′⌒`)", "自今日起，\n→_→", "神平稳存在的说书人可以将你复活，\n︿(￣︶￣)︿", "但是，你必须放弃一样东西！\n(╬￣皿￣)", "——请做出你的抉择！\n(●｀エ´)" ], i = a.length, c = 0, o = cc.find("Canvas/Show"), r = cc.find("Canvas/Determine"), s = this;
r.active = !1;
r.opacity = 0;
this.schedule(function() {
s.creatText(o, "plot" + c, a[c]);
c++;
}, 2.5, i - 1);
this.scheduleOnce(function() {
r.active = !0;
r.runAction(cc.fadeIn(2));
}, 2.5 * (i + 1));
r.getChildByName("choice1").on("touchstart", function() {
var e = t.role;
e.maxHp -= parseInt(.04 * n.role.maxHp());
e.def -= parseInt(.04 * n.role.def());
e.att -= parseInt(.04 * n.role.att());
l();
}, this);
r.getChildByName("choice2").on("touchstart", function() {
t.maxEnergy -= 10;
l();
}, this);
r.getChildByName("choice3").on("touchstart", function() {
if (t.money >= 80 || t.itemNum2[7] >= 8 || t.itemNum2[12] >= 16) {
t.money >= 80 ? t.money -= 80 : t.itemNum2[7] >= 8 ? t.itemNum2[7] -= 8 : t.itemNum2[12] >= 16 && (t.itemNum2[12] -= 16);
l();
} else cc.find("Canvas/Determine/choice3/text").getComponent("cc.Label").string = "你怕是一个条件都不满足喔（笑）！";
}, this);
r.getChildByName("choice4").on("touchstart", function() {
cc.director.loadScene("over2_1");
}, this);
4e3 == n.regionId() && (r.getChildByName("choice4").active = !1);
function l() {
t.health = 30;
t.role.hp = n.role.maxHp();
t.hunger = n.maxHunger();
n.save();
cc.director.loadScene("main");
}
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_public: "scr_public"
} ],
scr_over: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "6d161adbZhGOIo8GmNaz6i6", "scr_over");
cc.Class({
extends: cc.Component,
properties: {},
creatText: function(e, t, n) {
var a = new cc.Node(t);
a.addComponent(cc.Label);
a.parent = e;
a.setPosition(0, 0);
a.opacity = 0;
a.runAction(cc.fadeIn(3));
a.color = new cc.Color(255, 255, 255);
a.getComponent(cc.Label).overflow = 3;
a.getComponent(cc.Label).horizontalAlign = 1;
a.setContentSize(600, 300);
a.getComponent(cc.Label).string = n;
a.getComponent(cc.Label).lineHeight = 50;
a.getComponent(cc.Label).fontSize = 40;
},
onLoad: function() {
var t = [ [ "数日后，", "你在草丛中被人发现，", "全身浮肿，面目全非。", "结局——", "【客死他乡】" ], [ "数日后，", "你在草丛中被人发现，", "奄奄一息，身上散发着难闻的味道。", "你立刻被送往救苦观。", "师父当晚从旧山门赶来，", "你的云游生涯就此结束。", "结局——", "【无奈的人生】" ] ], n = "", a = e("scr_public").regionId(), i = (n = a < 4e3 ? t[0] : t[1]).length, c = 0, o = cc.find("Canvas/Show"), r = cc.find("Canvas/Determine"), s = this;
this.schedule(function() {
s.creatText(o, "plot" + c, n[c]);
c++;
}, 2, i - 1);
this.scheduleOnce(function() {
r.active = !0;
r.runAction(cc.fadeIn(2));
}, 2 * (i + 1));
r.on("touchstart", function() {
JSON.parse(cc.sys.localStorage.getItem("userData")) && cc.sys.localStorage.removeItem("userData");
cc.director.loadScene("start");
}, this);
}
});
cc._RF.pop();
}, {
scr_public: "scr_public"
} ],
scr_playAds: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "602f4GJE5dHeJbKWFm68u1y", "scr_playAds");
cc.Class({
extends: cc.Component,
properties: {},
callBack: function() {},
onLoad: function() {},
start: function() {}
});
cc._RF.pop();
}, {} ],
scr_plot: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "22594SzhLdDFIhFu3G4ZURs", "scr_plot");
cc.Class({
extends: cc.Component,
properties: {},
creatText: function(e, t, n) {
var a = new cc.Node(t);
a.addComponent(cc.Label);
a.parent = e;
a.setPosition(0, 0);
a.opacity = 0;
a.runAction(cc.fadeIn(2));
a.color = new cc.Color(255, 255, 255);
a.getComponent(cc.Label).overflow = 3;
a.getComponent(cc.Label).horizontalAlign = 1;
a.setContentSize(600, 300);
a.getComponent(cc.Label).string = n;
a.getComponent(cc.Label).lineHeight = 60;
a.getComponent(cc.Label).fontSize = 40;
},
plotData: function() {
var t = e("scr_data"), n = e("scr_public");
e("scr_effect");
return {
0: {
text: [ "我是本次西行的说书人。", "你走到这里，命簿已经翻乱。", "现在我给你两个岔路：", "是重返那场月下相遇，还是背着这份因果继续往西？", "回到认识月兔仙子之前", "背负因果，继续西行" ],
BGM: "",
choice1: function() {},
choice2: function() {}
},
1: {
text: [ "午后，桂影安静。", "一声惊叫忽然从林中刺出。", "我赶到时，黑风莽先锋正拽住月兔仙子的衣袖，妖气压得草叶伏地。", "她看见我，眼里先是惊，随后是怕我冲动。", "", "我要降了他！" ],
BGM: "",
choice1: function() {},
choice2: function() {
if (0 == e("scr_data2").gameData[4]) {
t.skillLv[4] = 0;
t.enemyId = 108;
t.role.hp = n.role.maxHp();
n.save();
cc.director.loadScene("main");
} else cc.director.loadScene("main", function() {
e("scr_data").itemNum2[10] += 1;
e("scr_public").save();
e("scr_effect").playText("Canvas/Text/txt_notify", "“月兔姑娘没伤着吧？”莽先锋挠着头说道，“我只是拦路查妖，吓着你们了。这样，这根旧铁棒送你防身。”获得【如意金箍棒】*1", 60);
});
}
},
2: {
text: [ "这里是命簿夹缝。", "你也许不明白为何被拦在此处，", "但因果从不讲人情——", "若过不了这场心劫，你便护不住月兔仙子。", "我要回到认识月兔仙子的前一日，再试一次", "我选择放下这段缘法" ],
BGM: "",
choice1: function() {
var t = e("scr_data");
e("scr_data2").gameData[0] += 1;
t = JSON.parse(cc.sys.localStorage.getItem("dataCopy"));
cc.sys.localStorage.setItem("userData", JSON.stringify(t));
n.save2();
cc.director.loadScene("main");
},
choice2: function() {
t.health += 999;
t.distance += 1;
t.enemyId = 0;
t.role.hp = n.role.maxHp();
n.save();
cc.director.loadScene("main", function() {
e("scr_data").itemNum[12] += 1;
e("scr_public").save();
e("scr_effect").playText("Canvas/Text/txt_notify", "月兔仙子在你背后轻轻落泪，泪珠化作【慈悲泪】*1", 60);
});
}
},
3: {
text: [ "“若你给不了她安稳，", "便不要把她拖进你的劫里。”", "“有些缘法，不相逢也是一种慈悲。”", "回到认识月兔仙子之前", "好吧，我放下" ],
BGM: "",
choice1: function() {
var t = e("scr_data");
e("scr_data2").gameData[0] += 1;
t = JSON.parse(cc.sys.localStorage.getItem("dataCopy"));
cc.sys.localStorage.setItem("userData", JSON.stringify(t));
n.save2();
cc.director.loadScene("main", function() {
e("scr_data").itemNum[12] += 1;
e("scr_public").save();
e("scr_effect").playText("Canvas/Text/txt_notify", "月兔仙子在你背后轻轻落泪，泪珠化作【慈悲泪】*1", 60);
});
},
choice2: function() {
t.health += 999;
t.distance += 1;
t.enemyId = 0;
t.role.hp = n.role.maxHp();
n.save();
cc.director.loadScene("main", function() {
e("scr_data").itemNum[12] += 1;
e("scr_public").save();
e("scr_effect").playText("Canvas/Text/txt_notify", "月兔仙子在你背后轻轻落泪，泪珠化作【慈悲泪】*1", 60);
});
}
},
4: {
text: [ "“喜欢不是占有，", "执念也不是护持。”", "“你若只会握紧，最后只会捏碎掌中月光。”", "说书人，我要破了你的命簿", "让我回到西行路" ],
BGM: "",
choice1: function() {
t.enemyId = 998;
t.health += 999;
t.role.hp = n.role.maxHp();
n.save();
cc.director.loadScene("main");
},
choice2: function() {
t.health += 999;
t.distance += 1;
t.enemyId = 0;
t.role.hp = n.role.maxHp();
n.save();
cc.director.loadScene("main", function() {
e("scr_data").itemNum[12] += 1;
e("scr_public").save();
e("scr_effect").playText("Canvas/Text/txt_notify", "月兔仙子在你背后轻轻落泪，泪珠化作【慈悲泪】*1", 60);
});
}
},
5: {
text: [ "月光将尽，", "月兔仙子也该回月宫复命了...", "轻摸她的发顶，道别", "拍拍肩膀，道别" ],
BGM: "",
choice1: function() {
t.distance += 1;
t.ifFollow[0] = 0;
n.save();
cc.director.loadScene("main", function() {
e("scr_effect").playText("Canvas/Text/txt_notify", "月兔仙子踏着月光，依依不舍地离开了", 60);
});
},
choice2: function() {
t.distance += 1;
t.choice[5] += 10;
t.ifFollow[0] = 0;
n.save();
cc.director.loadScene("main", function() {
e("scr_effect").playText("Canvas/Text/txt_notify", "“等桂花开时，我还会下凡找你！( • ̀ω•́ )✧”", 60);
});
}
},
98: {
text: [ "杏仙缘分已足，是否请她一同西行？（若杏仙同行，其它同伴将会离队，且无法再邀请其它同伴；若你拒绝，往后便再无此缘，请考虑清楚！）", "是", "算了" ],
BGM: "",
choice1: function() {
t.ifFollow[0] = 0;
t.ifFollow[1] = 1;
t.publicVar[8] = 1;
n.save();
cc.director.loadScene("home", function() {
e("scr_effect").playText("Canvas/notify", "杏仙愿与你同行西路，请好好珍惜吧~", 60);
});
},
choice2: function() {
t.publicVar[8] = 1;
cc.director.loadScene("home");
}
},
99: {
text: [ "是否邀请月兔仙子成为同伴？（若月兔仙子同行，其它同伴将会离队，且无法再邀请其它同伴，请考虑清楚）", "是", "算了" ],
BGM: "",
choice1: function() {
t.ifFollow[0] = 1;
t.ifFollow[1] = 0;
n.save();
cc.director.loadScene("home", function() {
e("scr_effect").playText("Canvas/notify", "月兔仙子愿与你同行西路，请好好珍惜吧~", 60);
});
},
choice2: function() {
cc.director.loadScene("home");
}
},
1001: {
text: [ "五十载后，长安西坊那座破庙被重修。", "工匠在佛座下发现一只旧行囊，里面有残香、铜铃和一本发黄的西行日记。", "年轻僧人翻到最后一页，只看见一行淡墨：\n“我曾离灵山很远，也曾离自己很远。”", "风从庙门吹入，铜铃轻响。", "...全剧终..." ],
BGM: "",
choice1: function() {},
choice2: function() {
cc.director.loadScene("end");
}
},
1002: {
text: [ "一载后，黄风岭外多了一间小小草庐。", "草庐旁种着一树杏花，清晨花影落在琵琶上。", "他对杏仙说：“若灵山太远，我们便先把这里过成净土。”", "杏仙笑而不答，只弹了一曲《风停》。", "", "本次西行已完结，后续待说" ],
BGM: "",
choice1: function() {},
choice2: function() {
cc.director.loadScene("end");
}
},
1003: {
text: [ "半年后，月宫书院散学。", "桂树下，一个披旧袈裟的少年静静等着，肩上落满细碎月光。", "月兔仙子抱着药杵跑来，笑着牵起他的手。", "两人的影子越过天河桥，慢慢消失在银色夜幕里。", "", "本次西行已完结，后续待定..." ],
BGM: "",
choice1: function() {},
choice2: function() {
cc.director.loadScene("end");
}
}
};
},
startPlot: function() {
var t = e("scr_data"), n = (e("scr_public"), this.plotId || t.plotId), a = this.plotData()[n], i = a.text, c = i.pop(), o = i.pop(), r = i.length, s = 0, l = cc.find("Canvas/EventText");
(function() {
var e = cc.find("Canvas/Choice");
e.stopAllActions();
e.opacity = 0;
cc.find("Canvas/EventText").removeAllChildren();
e.getChildByName("Choice1").targetOff(this);
e.getChildByName("Choice2").targetOff(this);
})();
this.schedule(function() {
this.creatText(l, "plot" + s, i[s]);
s++;
}, 2.5, r - 1);
this.scheduleOnce(function() {
var e = a.choice1, t = a.choice2, n = cc.find("Canvas/Choice/Choice1"), i = cc.find("Canvas/Choice/Choice2");
n.getChildByName("choiceText").getComponent("cc.Label").string = o;
i.getChildByName("choiceText").getComponent("cc.Label").string = c;
if ("" == o) {
n.active = !1;
cc.find("Canvas/Choice/label").active = !1;
}
cc.find("Canvas/Choice").runAction(cc.fadeIn(2));
n.on("touchstart", e, this);
i.on("touchstart", t, this);
}, 2.5 * (r + 1));
},
onLoad: function() {
this.startPlot();
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_data2: "scr_data2",
scr_effect: "scr_effect",
scr_public: "scr_public"
} ],
scr_public: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "4bdd0LrXWhLypzYw/KwkeQ9", "scr_public");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var n = {
itemName: [ "蟠桃", "降妖木", "铜铃", "妖兽肉", "袈裟布", "灵草", "安神草", "残香", "乌金石", "火焰火狐裘", "50ml猴儿酒", "仙砂", "慈悲泪" ],
itemName2: [ "斋饭", "金疮药", "行囊帐", "木棍", "麻布衣", "陷阱", "驱蚊工具", "安神香", "降妖短杖", "护法袈裟", "如意金箍棒", "大圣披风", "猴儿酒", "┑(=^ω^=)┑", "定风珠", "西行披肩", "舍利碎片", "照妖镜", "避尘靴", "芭蕉扇", "金砖", "虎皮裙", "锦襕袈裟", "疗伤符", "行者短袍", "护身符", "如意石", "月兔仙子手链" ],
ifNotify: !1,
init: function() {
var t = cc.find("Canvas/Text"), n = e("scr_data");
t.getChildByName("txt_day").getComponent("cc.Label").string = this.regionName() + n.day + "天";
t.getChildByName("txt_energy").getComponent("cc.Label").string = n.energy + "/" + this.maxEnergy();
t.getChildByName("txt_hunger").getComponent("cc.Label").string = n.hunger + "/" + this.maxHunger();
t.getChildByName("txt_health").getComponent("cc.Label").string = "道心  " + n.health;
t.getChildByName("txt_hp").getComponent("cc.Label").string = "气血  " + n.role.hp + "/" + this.role.maxHp();
t.getChildByName("txt_att").getComponent("cc.Label").string = "降妖力  " + this.role.att();
t.getChildByName("txt_def").getComponent("cc.Label").string = "护身力  " + this.role.def();
t.getChildByName("txt_money").getComponent("cc.Label").string = "盘缠  " + (n.money / 10).toFixed(1);
t.getChildByName("txt_distance").getComponent("cc.Label").string = "离洞府  " + n.distance + "km";
t.getChildByName("txt_item1").getComponent("cc.Label").string = "金疮药  " + n.itemNum2[1];
t.getChildByName("txt_item2").getComponent("cc.Label").string = "斋粮  " + n.itemNum[0] + "+" + n.itemNum2[0];
this.mainUITextColor();
this.buttonState();
this.showPlace();
},
mainUITextColor: function() {
var t = e("scr_data"), n = cc.find("Canvas/Button"), a = "";
t.hunger <= 0 && (a += "【斋粮】");
t.skillLv[4] >= 1 && (a += "【香瘾】");
t.buffState[0] >= 1 && (a += "【暴躁】");
n.getChildByName("txt_state").getComponent("cc.Label").string = a;
},
showPlace: function() {
var t = e("scr_data");
if (300 == t.distance) {
var n = cc.find("Canvas/Button/txt_place").getComponent("cc.Label");
0 == t.publicVar[13] ? n.string = "「长安西坊」" : 1 == t.publicVar[13] ? n.string = "「郊外」" : 2 == t.publicVar[13] ? n.string = "「市中心」" : 3 == t.publicVar[13] && (n.string = "「山洞" + t.publicVar3[1] + "米」");
}
},
buttonState: function() {
var t = e("scr_data"), n = cc.find("Canvas/Button"), a = n.getChildByName("button_forward"), i = n.getChildByName("button_shop"), c = n.getChildByName("button_explore");
t.button[0] ? a.active = !0 : a.active = !1;
t.button[1] && 0 == t.publicVar3[3] ? i.active = !0 : i.active = !1;
t.button[2] ? c.active = !0 : c.active = !1;
},
save: function() {
var t = e("scr_data");
cc.sys.localStorage.setItem("userData", JSON.stringify(t));
},
save2: function() {
var t = e("scr_data2");
cc.sys.localStorage.setItem("data2", JSON.stringify(t));
},
saveCopy: function() {
var t = e("scr_dataCopy");
cc.sys.localStorage.setItem("dataCopy", JSON.stringify(t));
},
creatText: function(e, t, n, a, i, c) {
var o = new cc.Node(t);
o.addComponent(cc.Label);
o.parent = e;
o.setPosition(n, a);
o.setContentSize(600, 300);
o.setAnchorPoint(.5, .5);
o.getComponent(cc.Label).overflow = 3;
o.getComponent(cc.Label).string = i;
o.getComponent(cc.Label).lineHeight = 60;
o.getComponent(cc.Label).fontSize = 40;
},
role: {
maxHp: function() {
var t = e("scr_data"), n = t.role.maxHp + 50 * t.itemNum2[4] + 150 * t.itemNum2[11] + 50 * t.skillLv[2] + 100 * t.skillLv[15] + 150 * t.skillLv[19] + 25 * t.itemNum2[22] + t.publicVar3[16];
n = Math.round(n * (1 + t.publicVar[15] / 1e3 + t.itemNum2[15] / 100 + t.publicVar3[5] / 100));
return n;
},
att: function() {
var t = e("scr_data"), n = 1;
1 == t.publicVar && (n = 1);
var a = t.role.att + 10 * t.itemNum2[3] + 20 * t.itemNum2[8] + 30 * t.itemNum2[10] + 10 * t.skillLv[11] + 20 * t.skillLv[18] + 30 * t.skillLv[22] + 5 * t.itemNum2[20] + t.publicVar3[4];
"undefined" != typeof t.ifFollow[0] && 1 == t.ifFollow[0] && (a += parseInt(t.choice[5] / 4 + 10));
a = Math.round(a * (1 - t.skillLv[4] * n) * (1 + t.publicVar[17] / 1e3 + t.itemNum2[15] / 100 + t.publicVar3[5] / 100));
return a;
},
def: function() {
var t = e("scr_data"), n = 1;
1 == t.publicVar && (n = 1);
var a = t.role.def + 10 * t.itemNum2[9] + 15 * t.itemNum2[11] + 10 * t.skillLv[8] + 20 * t.skillLv[16] + 30 * t.skillLv[20] + 5 * t.itemNum2[21] + t.publicVar3[10];
a = Math.round(a * (1 - t.skillLv[4] * n) * (1 + t.publicVar[16] / 1e3 + t.itemNum2[15] / 100 + t.publicVar3[5] / 100));
return a;
}
},
ifMaxHp: function() {
var t = e("scr_data"), n = this.role.maxHp();
t.role.hp > n && (t.role.hp = n);
},
creatNode: function() {
var e = this;
cc.loader.loadRes("button1", cc.SpriteFrame, function(t, n) {
var a = new cc.Node("NewSprite");
a.addComponent(cc.Sprite).spriteFrame = n;
a.parent = e.node;
});
},
regionId: function() {
var t = 0, n = [ 100, 300 ], a = e("scr_data").distance;
a < n[0] && (t = 1e3);
a == n[0] && (t = 2e3);
a > n[0] && a < n[1] && (t = 3e3);
a == n[1] && (t = 4e3);
return t;
},
regionName: function() {
var t = 0, n = [ 100, 300 ], a = e("scr_data").distance;
a < n[0] && (t = "荒野.");
a == n[0] && (t = "高老庄.");
a > n[0] && a < n[1] && (t = "山脉.");
a == n[1] && (t = "长安城.");
return t;
},
maxEnergy: function() {
var t = e("scr_data"), n = t.skillLv, a = t.maxEnergy + 10 * n[1] + 20 * n[7] + 30 * n[12] + 10 * t.itemNum2[2] + t.friendSkill1[1] * t.ifFollow[0] * 20 + 10 * t.publicVar[18];
return a;
},
maxHunger: function() {
var t = e("scr_data"), n = t.skillLv, a = t.maxHunger + 50 * n[13];
return a;
},
autoEat: function() {
var t = e("scr_data");
if (t.hunger <= 0) {
if (t.itemNum[0] >= 1) {
t.itemNum[0] -= 1;
t.orderTimes[5] += 1;
t.hunger += 20;
100 * Math.random() < 15 && (t.health += 1);
this.save();
return !0;
}
if (t.itemNum2[0] >= 1) {
t.itemNum2[0] -= 1;
t.orderTimes[2] += 1;
t.hunger += 70;
this.save();
return !0;
}
return !0;
}
return !1;
},
playBGM: function(e) {
cc.audioEngine.stopAll();
var t = cc.game._persistRootNodes;
for (var n in t) var a = t[n].getComponent("scr_BGM")[e];
cc.audioEngine.play(a, !1, 1);
},
ifGameOver: function() {
if (e("scr_data").health <= 0) {
var t = this.regionId();
1e3 == t && cc.director.loadScene("over");
t > 1e3 && cc.director.loadScene("over2");
}
},
showText: function(e, t, n, a) {
var i = new cc.Node(t);
i.addComponent(cc.Label);
i.parent = e;
i.setPosition(0, 0);
i.opacity = 0;
i.runAction(cc.fadeIn(3));
i.color = new cc.Color(255, 255, 255);
i.getComponent(cc.Label).overflow = 3;
i.getComponent(cc.Label).horizontalAlign = 1;
i.setContentSize(600, 300);
i.getComponent(cc.Label).string = n;
i.getComponent(cc.Label).lineHeight = a || 40;
i.getComponent(cc.Label).fontSize = 40;
},
showText2: function(e, t, n, a) {
var i = new cc.Node(t);
i.addComponent(cc.Label);
i.parent = e;
i.setPosition(0, 0);
i.color = new cc.Color(115, 115, 115);
i.getComponent(cc.Label).overflow = 3;
i.setContentSize(630, 300);
i.getComponent(cc.Label).string = n;
i.getComponent(cc.Label).lineHeight = a;
i.getComponent(cc.Label).fontSize = 32;
}
};
t.exports = n;
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_data2: "scr_data2",
scr_dataCopy: "scr_dataCopy"
} ],
scr_quitGame: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b8981TVaLZEQZriw0Ikoosd", "scr_quitGame");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
cc.eventManager.addListener({
event: cc.EventListener.KEYBOARD,
onKeyPressed: function(e, t) {
e === cc.KEY.back && cc.director.end();
}
}, this.node);
}
});
cc._RF.pop();
}, {} ],
scr_readConfession: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "edbeey5ue9CDZU2M2ziBjld", "scr_readConfession");
cc.Class({
extends: cc.Component,
properties: {},
read: function() {
var t = [ "1111111", "我是个失败的人", "aaa", "bbb", "ccc" ], n = e("scr_effect"), a = e("scr_data").achieve, i = Math.random(), c = t.length, o = parseInt(a / 100);
o > c - 5 && (o = c - 5);
var r = Math.round(4 * Math.random() + o);
i > .5 ? n.playText("Canvas/Text/txt_confession", "我该做点什么呢？", 120) : n.playText("Canvas/Text/txt_confession", t[r], 120);
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
scr_restDetermine: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "64f6f/B7StMlZJx3Vgs0Rn/", "scr_restDetermine");
cc.Class({
extends: cc.Component,
properties: {},
callBack: function() {
cc.director.loadScene("event");
},
onLoad: function() {
this.node.on("touchstart", this.callBack, this);
}
});
cc._RF.pop();
}, {} ],
scr_rest: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "6fbc4dkoxJCWoP/GvoxW/9l", "scr_rest");
cc.Class({
extends: cc.Component,
properties: {},
creatText: function(e, t) {
var n = new cc.Node(e);
n.addComponent(cc.Label);
n.parent = cc.find("Canvas/SkillShow");
n.setPosition(0, 0);
n.color = new cc.Color(255, 255, 255);
n.getComponent(cc.Label).overflow = 3;
n.getComponent(cc.Label).horizontalAlign = 0;
n.setContentSize(600, 300);
n.getComponent(cc.Label).string = t;
n.getComponent(cc.Label).lineHeight = 60;
n.getComponent(cc.Label).fontSize = 40;
},
restMain: function() {
var t = e("scr_data"), n = e("scr_public"), a = t.skillLv, i = this;
(function() {
t.publicVar2[20] = parseInt(100 * Math.random() - 40);
t.publicVar[14] = parseInt(50 * Math.random());
t.publicVar3[4] = 0;
t.publicVar3[9] = 0;
t.publicVar3[10] = 0;
t.publicVar3[11] = 0;
t.publicVar3[16] = 0;
t.publicVar3[17] = 0;
t.publicVar3[18] = 0;
0 == t.publicVar3[2] ? t.publicVar[13] = 0 : t.publicVar[13] = 1;
t.publicVar3[15] = 0;
t.plotId = 0;
})();
(function() {
t.day += 1;
cc.find("Canvas/Day").getComponent("cc.Label").string = "第" + t.day + "天";
})();
n.autoEat();
(function() {
var e = 3 * t.orderTimes[1] - t.orderTimes[4], n = 100 * Math.random();
1 == t.publicVar[1] && (e = t.orderTimes[1] - t.orderTimes[4]);
if (n < e) {
t.publicVar2[8] += 1;
t.skillLv[4] = 1;
i.creatText("smoke", "【香瘾】发作！");
} else t.skillLv[4] = 0;
})();
(function() {
cc.find("Canvas/energy/text");
var e = 0, a = n.maxEnergy();
t.energy += a;
t.energy > a && (t.energy = a);
if (c()) {
e = 20;
t.energy += e;
}
cc.find("Canvas/AttrShow/energy/text").getComponent("cc.Label").string = "法力 +" + (a + e) + "（" + t.energy + "/" + a + "）";
})();
(function() {
if (t.itemNum2[6] > 0) {
var e = 30 * t.itemNum2[6];
n.role.maxHp();
c() && (e *= 2);
t.role.hp += e;
n.ifMaxHp();
cc.find("Canvas/AttrShow/hp/text").getComponent("cc.Label").string = "气血 +" + e + "（" + t.role.hp + "/" + n.role.maxHp() + "）";
} else cc.find("Canvas/AttrShow/hp").active = !1;
})();
(function() {
var e = n.regionId();
1e3 == e && (t.stayDay[0] += 1);
2e3 == e && (t.stayDay[1] += 1);
3e3 == e && (t.stayDay[2] += 1);
4e3 == e && (t.stayDay[3] += 1);
})();
(function() {
if (100 * Math.random() < 20) {
var e = function() {
var e = 100 * Math.random(), a = n.regionId(), i = 800, c = 10 * (t.itemNum2[19] - 1) + 1;
if (e < 70) {
var o = t.randomEvent[3], r = [ 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 881, 882, 0 ];
i = r[o];
} else if (4e3 == a) {
var o = t.randomEvent[3], r = [ 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 881, 882, 0 ];
i = r[o];
} else s = t.randomEvent[4], i = [ 700, 701, 702, 703, 704, 705, 0 ][s];
var s;
t.day >= 21 && 1e3 == a && (i = 997);
t.day >= 83 && 3e3 == a && (i = 996);
e < c && (i = 900003);
t.day >= 178 && (i = 0);
return i;
}();
0 != e && (t.enemyId = e);
}
})();
!function() {
if (100 == t.distance && t.stayDay[1] >= 23) {
t.button[0] = !0;
t.button[1] = !0;
}
}();
(function() {
(function() {
if (t.hunger <= 0) {
t.health -= 2;
i.creatText("hunger", "【斋粮】道心降低2点！");
}
})();
(function() {
var e = 100 * Math.random(), n = t.itemNum2[5];
if (t.itemNum2[5] > 0 && e < 30) {
var a = 100 * Math.random();
if (a <= 20) {
t.itemNum[3] += n;
i.creatText("skill1", "【陷阱】获得「妖兽肉」*" + n);
return !0;
}
if (a > 20 && a <= 40) {
t.itemNum[5] += n;
i.creatText("skill1", "【陷阱】获得「灵草」*" + n);
return !0;
}
if (a > 40 && a <= 60) {
t.itemNum[0] += n;
i.creatText("skill1", "【陷阱】获得「蟠桃」*" + n);
return !0;
}
if (a > 60 && a <= 80) {
t.itemNum[1] += n;
i.creatText("skill1", "【陷阱】获得「降妖木」*" + n);
return !0;
}
if (a > 80) {
t.itemNum[4] += n;
i.creatText("skill1", "【陷阱】获得「袈裟布」*" + n);
}
}
})();
(function() {
if (a[10] > 0) {
var e = 100 * Math.random();
if (e < 40) {
var n = a[10];
c() && (n *= 2);
t.health += n;
i.creatText("skill2", "【自愈】道心+" + n);
}
}
})();
(function() {
var e = 100 * Math.random();
if (a[6] > 0 && e < 40) {
var n = a[6] + parseInt(t.randomEvent[6] / 10);
t.money += n;
i.creatText("skill3", "【化缘】获得" + (n / 10).toFixed(1) + "两");
}
})();
(function() {
var e = t.itemNum2[13];
if (e > 0) {
var n = 1 * e;
t.money += n;
i.creatText("getMoney", "【┑(=^ω^=)┑】获得" + (n / 10).toFixed(1) + "两");
}
})();
(function() {
var e = 100 * Math.random();
if (t.skillLv[26] > 0 && e < 30) {
t.energy += parseInt(.3 * n.maxEnergy());
i.creatText("spirit", "【不屈的精神力】额外恢复30%法力！");
}
})();
(function() {
var e = 100 * Math.random(), n = t.publicVar[0] / 3;
if (e < n) {
t.energy -= parseInt(.5 * t.energy);
i.creatText("hunger", "【失眠】法力-50%！");
}
})();
(function() {
if (1 == t.ifFollow[0] && 0 == t.publicVar[2]) {
t.publicVar2[10] += 1;
t.choice[5] -= 1;
i.creatText("ifEat", "【道心不稳】月兔仙子缘分-1（哼！）");
}
t.publicVar[2] = 0;
})();
(function() {
if (t.publicVar2[17] > 0) {
var e = 10 * Math.random() + 1;
t.publicVar2[18] += e;
}
})();
(function() {
if (t.publicVar2[17] > 0 && t.itemNum2[16] > 0) {
var e = t.itemNum2[16], n = 2 * e, a = parseInt(n * t.publicVar2[21] / 10), c = Math.max(parseInt(n - a + 7 - t.publicVar2[21] + 3), 0);
t.money += a;
t.publicVar2[18] += n - a;
t.itemNum2[16] = 0;
t.publicVar[7] += c;
i.creatText("sell", "【换取】舍利碎片" + e + "个，总售额" + (n / 10).toFixed(1) + "两，你分到" + (a / 10).toFixed(1) + "两！杏仙缘分+" + c);
}
})();
(function() {
if (1 == t.ifFollow[1] && t.friendSkill[2] > 0) {
var e = 100 * Math.random(), n = Math.max(parseInt(t.publicVar[7] / 15 + 25), 25);
if (e < n) {
var a = parseInt(.02 * t.publicVar2[18]);
t.publicVar2[18] -= a;
t.money += a;
i.creatText("sell", "【善心】杏仙给了你" + (a / 10).toFixed(1) + "两碎银！");
}
}
})();
(function() {
if (1 == t.ifFollow[1] && t.friendSkill[7]) {
var e = 100 * Math.random(), n = Math.max(parseInt(t.publicVar[7] / 10 + 20), 20);
if (e < n) {
t.orderTimes[4] += 1;
i.creatText("reduceSmoke", "【监督】香瘾降低1%！");
}
}
})();
(function() {
if (t.publicVar3[5] > 0) {
var e = parseInt(.2 * t.publicVar3[5] + 1);
t.publicVar3[5] -= e;
t.publicVar3[5] < 0 && (t.publicVar3[5] = 0);
i.creatText("gameBuff", "【兴奋消退】玩西行获得的法相加成效果消退" + e + "%，还剩下" + t.publicVar3[5] + "%");
}
})();
(function() {
if (t.stayDay[3] > 3) {
t.publicVar3[7] += parseInt(15 * Math.random() + 5);
t.publicVar3[8] += 1;
}
})();
})();
(function() {
var e = 20;
Math.random();
t.hunger <= 0 && (e = 0);
t.hunger -= e;
cc.find("Canvas/AttrShow/hunger/text").getComponent("cc.Label").string = "斋粮 -" + e + "（" + t.hunger + "/" + n.maxHunger() + "）";
})();
(function() {
if (9 == t.stayDay[2]) {
var n = e("scr_dataCopy");
n = JSON.parse(cc.sys.localStorage.getItem("userData"));
cc.sys.localStorage.setItem("dataCopy", JSON.stringify(n));
}
})();
n.save();
function c() {
return 1 == t.ifFollow[0] && 1 == t.friendSkill1[4];
}
},
onLoad: function() {
var t = 0;
e("scr_data");
this.restMain();
cc.find("Canvas/Day").runAction(cc.fadeIn(1));
this.schedule(function() {
var e = [ "Canvas/AttrShow", "Canvas/SkillShow", "Canvas/Determine" ];
"Canvas/Determine" == e[t] && (cc.find("Canvas/Determine").active = !0);
cc.find(e[t]).runAction(cc.fadeIn(1));
t++;
}, 1, 2);
e("scr_public").save();
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_dataCopy: "scr_dataCopy",
scr_public: "scr_public"
} ],
scr_shop2: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "83a81yV4XxNdIIu5OySpYvE", "scr_shop2");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var t = e("scr_data"), n = e("scr_effect"), a = e("scr_public"), i = cc.find("Canvas/UI1"), c = i.getChildByName("choice1"), o = i.getChildByName("choice2"), r = i.getChildByName("choice3"), s = i.getChildByName("choice4"), l = i.getChildByName("choice5"), u = i.getChildByName("choice6"), p = i.getChildByName("choice7");
f();
(function() {
c.on("touchstart", d, this);
o.on("touchstart", m, this);
r.on("touchstart", h, this);
s.on("touchstart", v, this);
l.on("touchstart", y, this);
u.on("touchstart", g, this);
p.on("touchstart", b, this);
})();
function f() {
cc.find("Canvas/money").getComponent("cc.Label").string = "仙砂：" + t.itemNum[11] + " / 盘缠:" + (t.money / 10).toFixed(1);
cc.find("Canvas/UI1/choice5/text").getComponent("cc.Label").string = "芭蕉扇（需" + (10 + 10 * t.itemNum2[19]) + "个仙砂）";
cc.find("Canvas/UI1/choice7/text").getComponent("cc.Label").string = "换取所有舍利碎片（每个1文，已有" + t.itemNum2[16] + "个）";
}
function d() {
if (t.itemNum[11] >= 1) {
t.itemNum[11] -= 1;
t.money += 10;
a.save();
n.playText("Canvas/notify", "获得1两！", 60);
f();
} else n.playText("Canvas/notify", "仙砂不足！", 60);
}
function m() {
if (t.itemNum[11] >= 4 && 0 == t.publicVar2[29]) {
t.itemNum[11] -= 4;
t.publicVar2[29] = 1;
n.playText("Canvas/notify", "获得《大唐西域记》！请到诵经界面使用。", 60);
f();
} else t.itemNum[11] < 4 ? n.playText("Canvas/notify", "仙砂不足！", 60) : n.playText("Canvas/notify", "你已拥有此经卷！", 60);
}
function h() {
if (t.money >= 60 && 0 == t.publicVar2[23]) {
t.money -= 60;
t.publicVar2[23] = 1;
n.playText("Canvas/notify", "获得《担经从入门到取经》！请到诵经界面使用。", 60);
f();
} else t.money < 60 ? n.playText("Canvas/notify", "盘缠不足！", 60) : n.playText("Canvas/notify", "你已拥有此经卷！", 60);
}
function v() {
if (t.money >= 60 && 0 == t.publicVar2[26]) {
t.money -= 60;
t.publicVar2[26] = 1;
n.playText("Canvas/notify", "获得《斋饭炼体经》！请到诵经界面使用。", 60);
f();
} else t.money < 60 ? n.playText("Canvas/notify", "盘缠不足！", 60) : n.playText("Canvas/notify", "你已拥有此经卷！", 60);
}
function y() {
var e = 10 + 10 * t.itemNum2[19];
if (t.itemNum[11] >= e) {
t.itemNum[11] -= e;
t.itemNum2[19] += 1;
n.playText("Canvas/notify", "获得「芭蕉扇」！", 60);
f();
} else n.playText("Canvas/notify", "仙砂不足！", 60);
}
function g() {
if (t.money >= 5) {
t.money -= 5;
t.itemNum2[14] += 1;
n.playText("Canvas/notify", "获得「定风珠」*1", 60);
f();
} else n.playText("Canvas/notify", "盘缠不够！", 60);
}
function b() {
if (t.itemNum2[16] > 0) {
var e = t.itemNum2[16];
t.money += e;
t.itemNum2[16] -= e;
n.playText("Canvas/notify", "换取「舍利碎片」*" + e + "，获得" + (e / 10).toFixed(1) + "两！", 60);
f();
} else n.playText("Canvas/notify", "你身上没有舍利碎片~", 60);
}
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_effect: "scr_effect",
scr_public: "scr_public"
} ],
scr_shop3: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "bddbc1AxUZNv63YXc4kCfkQ", "scr_shop3");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var t = this, n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = cc.find("Canvas/UI1"), o = cc.find("Canvas/UI2"), r = c.getChildByName("choice1"), s = c.getChildByName("choice2"), l = c.getChildByName("choice3"), u = c.getChildByName("choice4"), p = c.getChildByName("choice5"), f = (c.getChildByName("choice6"), 
[ 70, 70, 70, 70, 50 ]), d = [ [ "云纹披风", 15, 1, 100 ], [ "虎皮裙", 21, 1, 20 ], [ "月兔仙子手链", 27, 1, 20 ], [ "如意石", 26, 1, 20 ], [ "金砖", 20, 1, 20 ], [ "行者短袍", 24, 1, 20 ] ];
(function() {
c.active = !0;
o.active = !0;
o.scale = 0;
t.cureTimes = 0;
t.gameTime1 = n.publicVar3[6];
t.gameTime2 = n.publicVar3[6];
t.r1 = 100 * Math.random();
t.r2 = 100 * Math.random();
t.r3 = 100 * Math.random();
t.r4 = 100 * Math.random();
t.r5 = 100 * Math.random();
t.makeMoneyRate = (50 * Math.random() + 25).toFixed(1);
t.makeMoneyProfit = (50 * Math.random()).toFixed(1);
t.r3 < f[2] && (l.getChildByName("text").getComponent("cc.Label").string = "三楼：西行斋堂");
t.itemId = parseInt(5.99 * Math.random());
t.itemDiscount = parseInt(30 * Math.random() + 60);
t.itemName = d[t.itemId][0];
t.itemPrice = d[t.itemId][3];
t.finalPrice = parseInt(t.itemPrice * t.itemDiscount / 100);
})();
C();
(function() {
c.getChildByName("back").on("touchstart", function() {
e("scr_public").save();
cc.director.loadScene("main");
}, this);
t.r1 < f[0] ? r.on("touchstart", b, r) : r.on("touchstart", I, r);
t.r2 < f[1] ? s.on("touchstart", _, s) : s.on("touchstart", I, s);
t.r3 < f[2] ? l.on("touchstart", v, l) : l.on("touchstart", I, l);
t.r4 < f[3] ? u.on("touchstart", h, u) : u.on("touchstart", I, u);
n.publicVar3[7] > 800 ? p.on("touchstart", E, p) : t.r5 < f[4] ? p.on("touchstart", V, p) : p.on("touchstart", m, p);
o.getChildByName("choice1").on("touchstart", y, this);
o.getChildByName("choice2").on("touchstart", g, this);
o.getChildByName("back").on("touchstart", function() {
o.runAction(cc.scaleTo(.3, 0));
(function() {
N();
c.runAction(cc.scaleTo(.3, 1));
})();
}, this);
})();
x();
function m() {
if (t.cureTimes >= 3) a.playText("Canvas/notify", "“啊哈哈哈哈哈~有些累了...下次再来哈~”", 60); else if (n.money >= 10) {
var e = Math.max(100 - n.publicVar3[8], 0), i = 100 * Math.random();
n.publicVar3[7] -= 10;
t.cureTimes += 1;
n.money -= 10;
if (i < e) {
n.orderTimes[4] += 1;
a.playText("Canvas/notify", "雷法成功！香瘾减少1%，雷音坛总资产+1两", 60);
} else {
n.health -= 1;
a.playText("Canvas/notify", "雷法失败...道心减1点...雷音坛总资产+1两", 60);
}
C();
} else a.playText("Canvas/notify", "没盘缠！", 60);
}
function h() {
if (t.gameTime2 - t.gameTime1 > 30) a.playText("Canvas/notify", "“小行者，没取得真经文牒的人只能临时上机两小时哦，我怕天兵来查，请下次再玩吧~”", 60); else if (20 == n.publicVar3[6]) {
n.money += 1;
n.publicVar3[6] += 1;
a.playText("Canvas/notify", "你踏上西行的热忱让斗法馆掌柜很是感动，掌柜鼓励你坚持梦想，并赏赐你0.1两，~", 60);
} else if (50 == n.publicVar3[6]) {
n.money += 5;
n.publicVar3[6] += 1;
a.playText("Canvas/notify", "你成功晋级小妖仙阶，掌柜流出喜悦的泪水，并赏赐你0.5两~", 60);
} else if (90 == n.publicVar3[6]) {
n.hunger = i.maxHunger();
n.publicVar3[6] += 1;
a.playText("Canvas/notify", "你成功晋级巡山仙阶，掌柜高兴的请你用了一顿素斋汤，斋粮全恢复！", 60);
} else if (140 == n.publicVar3[6]) {
n.money += 20;
n.itemNum2[25] += 1;
n.publicVar3[6] += 1;
C();
a.playText("Canvas/notify", "你成功晋级护法仙阶，掌柜赏赐你2两盘缠，和一件个护身符~", 60);
} else if (200 == n.publicVar3[6]) {
n.itemNum2[21] += 1;
n.itemNum2[22] += 1;
n.publicVar3[6] += 1;
a.playText("Canvas/notify", "你成功晋级罗汉仙阶，掌柜赠送你她的贴身衣物，获得【锦襕袈裟】*1和【虎皮裙】*1！", 60);
} else if (300 == n.publicVar3[6]) {
n.hunger = i.maxHunger();
n.publicVar3[6] += 1;
C();
a.playText("Canvas/notify", "你成功晋级金刚仙阶，掌柜兴奋的邀你去她房里打坐一觉，法力全恢复！", 60);
} else if (450 == n.publicVar3[6]) {
n.itemNum2[17] += 1;
n.itemNum2[26] += 1;
n.itemNum2[27] += 1;
n.publicVar3[6] += 1;
a.playText("Canvas/notify", "你成功晋级菩萨仙阶，掌柜赠送你一些收集品，获得【月兔仙子手链】*1【如意石】*1【照妖镜】*1！", 60);
} else if (700 == n.publicVar3[6]) {
n.role.att += 50;
n.role.def += 25;
n.role.maxHp += 250;
n.publicVar3[6] += 1;
i.save();
a.playText("Canvas/notify", "你成功晋级斗战胜佛仙阶，掌柜授予你「王的男施主」称号，降妖力永久+50，护身力永久+25，气血永久+250！", 60);
} else if (n.money >= 1) {
var e = Math.min((40 + n.publicVar3[6] / 10).toFixed(1), 75), c = 100 * Math.random();
n.money -= 1;
if (c < e) {
n.publicVar3[5] < 99 && (n.publicVar3[5] += 1);
n.publicVar3[6] += 1;
t.gameTime2 += 1;
a.playText("Canvas/notify", "西行胜利！道心大悦~攻防血提高1%（临时效果，随天数缓慢衰减）。西行技术+1", 60);
C();
} else {
n.publicVar3[5] = 0;
n.publicVar3[6] += 1;
t.gameTime2 += 1;
a.playText("Canvas/notify", "西行失败！道心不稳~法相加成消失...西行技术+1", 60);
C();
}
} else a.playText("Canvas/notify", "没盘缠...", 60);
}
function v() {
c.runAction(cc.scaleTo(.3, 0));
(function() {
N();
o.runAction(cc.scaleTo(.3, 1));
})();
}
function y() {
if (n.hunger > i.maxHunger()) a.playText("Canvas/notify", "已经用不下啦...", 60); else if (n.itemNum[3] >= 4 && n.itemNum[0] >= 5) {
n.hunger += 350;
n.maxHunger += 5;
n.itemNum[3] -= 4;
n.itemNum[0] -= 5;
n.publicVar3[13] += 1;
a.playText("Canvas/notify", "斋粮+350，最大斋粮值提高5点！", 60);
C();
} else a.playText("Canvas/notify", "斋粮不足~", 60);
}
function g() {
if (n.hunger > i.maxHunger()) a.playText("Canvas/notify", "已经用不下啦...", 60); else if (n.itemNum[0] >= 5) {
n.hunger += 100;
n.health += 1;
n.itemNum[0] -= 5;
a.playText("Canvas/notify", "斋粮+100，道心+1！", 60);
C();
} else a.playText("Canvas/notify", "斋粮不足~", 60);
}
function b() {
var e = 100 * Math.random();
if (0 == t.makeMoneyRate) a.playText("Canvas/notify", "“今日已祭炼聚宝盆，请明日再来吧~”", 60); else if (0 == n.money) a.playText("Canvas/notify", "“不好意思，请你出去~”", 60); else if (n.money > 500) a.playText("Canvas/notify", "“不好意思，你已超过国洞府监管限定金额，请你去实体盘缠庄吧，我们只是网上的小盘缠庄~”", 60); else if (e < t.makeMoneyRate) {
var i = parseInt(n.money * t.makeMoneyProfit / 100);
n.money += i;
a.playText("Canvas/notify", "祭炼聚宝盆成功！盘缠增加" + t.makeMoneyProfit + "%(+" + (i / 10).toFixed(1) + ")", 60);
t.makeMoneyRate = 0;
C();
} else {
i = parseInt(n.money * t.makeMoneyProfit / 100);
n.money -= i;
a.playText("Canvas/notify", "祭炼聚宝盆失败...盘缠缩水" + t.makeMoneyProfit + "%(-" + (i / 10).toFixed(1) + ")", 60);
t.makeMoneyRate = 0;
C();
}
}
function _() {
if (t.itemDiscount >= 9999) a.playText("Canvas/notify", "商品已缘尽~", 60); else if (n.money >= t.finalPrice) {
var e = d[t.itemId][1], i = d[t.itemId][2];
n.money -= t.finalPrice;
n.itemNum2[e] += i;
a.playText("Canvas/notify", "获得【" + t.itemName + "】*" + i, 60);
t.itemDiscount = 9999;
C();
x();
} else a.playText("Canvas/notify", "盘缠不足！", 60);
}
function x() {
t.itemDiscount >= 9999 ? s.getChildByName("text").getComponent("cc.Label").string = "二楼：西行锦襕阁（已缘尽~）" : t.r2 < f[1] ? s.getChildByName("text").getComponent("cc.Label").string = "二楼：西行锦襕阁（" + t.itemName + "," + t.itemDiscount + "折," + (t.finalPrice / 10).toFixed(1) + "两）" : s.getChildByName("text").getComponent("cc.Label").string = "？？？？（闭观中...）";
}
function C() {
t.r1 < f[0] ? r.getChildByName("text").getComponent("cc.Label").string = "一楼：西行聚宝（赢盘缠概率" + t.makeMoneyRate + "%）" : r.getChildByName("text").getComponent("cc.Label").string = "？？？？（闭观中...）";
t.r4 < f[3] ? u.getChildByName("text").getComponent("cc.Label").string = "四楼：西行斗法馆（法相+" + n.publicVar3[5] + "%,胜率" + Math.min((40 + n.publicVar3[6] / 10).toFixed(1), 75) + "%）" : u.getChildByName("text").getComponent("cc.Label").string = "？？？？（闭观中...）";
cc.find("Canvas/UI2/hunger").getComponent("cc.Label").string = "斋粮 " + n.hunger + "/" + i.maxHunger();
cc.find("Canvas/money").getComponent("cc.Label").string = "盘缠 " + (n.money / 10).toFixed(1);
n.publicVar3[7] > 800 ? p.getChildByName("text").getComponent("cc.Label").string = "关门大吉！转行啦~" : t.r5 < f[4] ? p.getChildByName("text").getComponent("cc.Label").string = "？？？？（心缘不好，外出云游啦~）" : p.getChildByName("text").getComponent("cc.Label").string = "五楼：小雷音雷法（资产" + ((800 - n.publicVar3[7]) / 10).toFixed(1) + "两,成功率" + Math.max(100 - n.publicVar3[8], 0) + "%）";
i.save();
}
function E() {
a.playText("Canvas/notify", "由于经济不景气，商行倒闭，掌柜转行卖土鸡蛋去啦~", 60);
}
function I() {
a.playText("Canvas/notify", "“闭观啦！哈哈哈哈哈！”", 60);
}
function V() {
a.playText("Canvas/notify", "“再为难~也不能耽误闭观呀！哈哈哈哈哈！”", 60);
}
function N() {
cc.find("Canvas/notify").getComponent("cc.Label").string = "";
}
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_effect: "scr_effect",
scr_public: "scr_public"
} ],
scr_shop4: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "981fdTWKwRAN6F2FBk0OJHn", "scr_shop4");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var t = this, n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = cc.find("Canvas/UI1"), o = c.getChildByName("choice2"), r = c.getChildByName("choice3"), s = c.getChildByName("choice4"), l = [ [ "照妖镜*1", 17, 1, 50 ], [ "斋饭*3", 0, 3, 12 ], [ "月兔仙子手链*1", 27, 1, 50 ], [ "如意石*1", 26, 1, 50 ], [ "猴儿酒*1", 12, 1, 30 ], [ "金疮药*4", 1, 4, 12 ] ];
t.itemId = parseInt(5.99 * Math.random());
t.itemDiscount = Math.random();
t.ifSellOut = 0;
var u = parseInt(l[t.itemId][3] * t.itemDiscount), p = l[t.itemId][0], f = l[t.itemId][1], d = l[t.itemId][2];
m();
(function() {
o.on("touchstart", h, this);
r.on("touchstart", v, this);
s.on("touchstart", y, this);
})();
function m() {
cc.find("Canvas/money").getComponent("cc.Label").string = "盘缠：" + (n.money / 10).toFixed(1);
cc.find("Canvas/UI1/choice2/text").getComponent("cc.Label").string = "换取金疮药（每个1文，已拥有" + n.itemNum2[1] + "）";
cc.find("Canvas/UI1/choice3/text").getComponent("cc.Label").string = "换取香（每个6文，已拥有" + n.itemNum2[7] + "）";
cc.find("Canvas/UI1/choice4/text").getComponent("cc.Label").string = p + "（香火价" + (u / 10).toFixed(1) + "两，限缘！！！）";
}
function h() {
if (n.itemNum2[1] > 0) {
var e = parseInt(.5 * n.itemNum2[1] + 1);
n.money += e;
n.itemNum2[1] -= e;
i.save();
a.playText("Canvas/notify", "换取【金疮药】*" + e + "，获得" + e + "文", 100);
m();
} else a.playText("Canvas/notify", "法宝不足！", 100);
}
function v() {
if (n.itemNum2[7] > 0) {
n.money += 6;
n.itemNum2[7] -= 1;
i.save();
a.playText("Canvas/notify", "换取【香】*1，获得6文", 100);
m();
} else a.playText("Canvas/notify", "法宝不足！", 100);
}
function y() {
if (1 == t.ifSellOut) a.playText("Canvas/notify", "本次活动每人只能请购一次哦，下次再来吧~", 100); else if (n.money >= u) {
n.money -= u;
n.itemNum2[f] += d;
t.ifSellOut = 1;
i.save();
a.playText("Canvas/notify", "获得【" + p + "】！", 100);
m();
} else a.playText("Canvas/notify", "盘缠不足...", 100);
}
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_effect: "scr_effect",
scr_public: "scr_public"
} ],
scr_shopButton: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "46243Z6bxNGuK5lVJQiKZD4", "scr_shopButton");
cc.Class({
extends: cc.Component,
properties: {},
callBack: function() {
cc.director.loadScene("shop");
},
onLoad: function() {
this.node.on("touchstart", this.callBack, this);
}
});
cc._RF.pop();
}, {} ],
scr_shopUI: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "ca1d33wMc1MzoV4yHqs7mr9", "scr_shopUI");
cc.Class({
extends: cc.Component,
properties: {
itemUI: {
default: null,
type: cc.Prefab
}
},
itemContent: function() {
var t = this;
this.data = e("scr_data");
var n = {
0: {
itemName: " 降妖木*10（拥有" + this.data.itemNum[1] + ")",
needDes: "请购/换取：1两/0.5两",
ifEnough: function(t) {
e("scr_data").money >= 10 && (cc.find("Canvas/Page/view/content/page_1/" + t + "/name").color = new cc.color(0, 255, 0));
},
button1: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.money >= 10) {
n.money -= 10;
n.itemNum[1] += 10;
n.shopPoint += 10;
i.save();
a.playText("Canvas/notify", "获得【降妖木】*10！积分*10！", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "盘缠不够！", 100);
},
button2: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.itemNum[1] >= 10) {
n.money += 5;
n.itemNum[1] -= 10;
i.save();
a.playText("Canvas/notify", "失去【降妖木】*10，获得0.5两！", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "法宝不足！", 100);
}
},
1: {
itemName: " 袈裟布*10（拥有" + this.data.itemNum[4] + ")",
needDes: "请购/换取：1两/0.5两",
ifEnough: function(t) {
e("scr_data").money >= 10 && (cc.find("Canvas/Page/view/content/page_1/" + t + "/name").color = new cc.color(0, 255, 0));
},
button1: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
for (var z = 0; z <= n.talkTimes[0]; z++) if (n.money >= 10) {
n.money -= 10;
n.itemNum[4] += 10;
n.shopPoint += 10;
i.save();
a.playText("Canvas/notify", "获得【袈裟布】*10！积分*10！", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "盘缠不够！", 100);
},
button2: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
for (var z = 0; z <= n.talkTimes[0]; z++) if (n.itemNum[4] >= 10) {
n.money += 5;
n.itemNum[4] -= 10;
i.save();
a.playText("Canvas/notify", "失去【袈裟布】*10，获得0.5两！", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "法宝不足！", 100);
}
},
2: {
itemName: " 蟠桃*5（拥有" + this.data.itemNum[0] + ")",
needDes: "请购/换取：0.5两/0.2两",
ifEnough: function(t) {
e("scr_data").money >= 5 && (cc.find("Canvas/Page/view/content/page_1/" + t + "/name").color = new cc.color(0, 255, 0));
},
button1: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
for (var z = 0; z <= n.talkTimes[0]; z++) if (n.money >= 5) {
n.money -= 5;
n.itemNum[0] += 5;
n.shopPoint += 5;
i.save();
a.playText("Canvas/notify", "获得【蟠桃】*5！积分*5！", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "盘缠不够！", 100);
},
button2: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
for (var z = 0; z <= n.talkTimes[0]; z++) if (n.itemNum[0] >= 5) {
n.money += 2;
n.itemNum[0] -= 5;
i.save();
a.playText("Canvas/notify", "失去【蟠桃】*5，获得0.2两！", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "法宝不足！", 100);
}
},
3: {
itemName: " 铜铃（拥有" + this.data.itemNum[2] + ")",
needDes: "售价：每只1文~",
ifEnough: function(t) {
e("scr_data").itemNum[2] > 0 && (cc.find("Canvas/Page/view/content/page_1/" + t + "/name").color = new cc.color(0, 255, 0));
},
button1: void 0,
button2: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = n.itemNum[2];
if (c > 0) {
n.money += c;
n.itemNum[2] -= c;
n.shopPoint += c;
i.save();
a.playText("Canvas/notify", "失去【铜铃】*" + c + "，获得" + c + "文盘缠，积分+" + c, 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "法宝不足！", 100);
}
},
4: {
itemName: " 妖兽肉*2（拥有" + this.data.itemNum[3] + ")",
needDes: "请购/换取：0.4两/0.2两",
ifEnough: function(t) {
e("scr_data").money >= 4 && (cc.find("Canvas/Page/view/content/page_2/" + t + "/name").color = new cc.color(0, 255, 0));
},
button1: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
for (var z = 0; z <= n.talkTimes[0]; z++) if (n.money >= 4) {
n.money -= 4;
n.itemNum[3] += 2;
n.shopPoint += 4;
i.save();
a.playText("Canvas/notify", "获得【妖兽肉】*2！积分*4！", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "盘缠不够！", 100);
},
button2: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
for (var z = 0; z <= n.talkTimes[0]; z++) if (n.itemNum[3] >= 2) {
n.money += 2;
n.itemNum[3] -= 2;
i.save();
a.playText("Canvas/notify", "失去【妖兽肉】*2，获得0.2两！", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "法宝不足！", 100);
}
},
5: {
itemName: " 灵草*4（拥有" + this.data.itemNum[5] + ")",
needDes: "请购/换取：0.4两/0.2两",
ifEnough: function(t) {
e("scr_data").money >= 4 && (cc.find("Canvas/Page/view/content/page_2/" + t + "/name").color = new cc.color(0, 255, 0));
},
button1: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
for (var z = 0; z <= n.talkTimes[0]; z++) if (n.money >= 4) {
n.money -= 4;
n.itemNum[5] += 4;
n.shopPoint += 4;
i.save();
a.playText("Canvas/notify", "获得【灵草】*4！积分*4！", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "盘缠不够！", 100);
},
button2: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
for (var z = 0; z <= n.talkTimes[0]; z++) if (n.itemNum[5] >= 4) {
n.money += 2;
n.itemNum[5] -= 4;
i.save();
a.playText("Canvas/notify", "失去【灵草】*4，获得0.2两！", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "法宝不足！", 100);
}
},
6: {
itemName: " 降妖短杖（当前等级" + this.data.itemNum2[8] + ")",
needDes: "价格：" + (3.2 + .3 * this.data.itemNum2[8]).toFixed(1) + "两",
ifEnough: function(t) {
cc.find("Canvas/Page/view/content/page_2/" + t + "/button1/text").getComponent("cc.Label").string = "升级";
var n = e("scr_data");
n.money >= 32 + 3 * n.itemNum2[8] && (cc.find("Canvas/Page/view/content/page_2/" + t + "/name").color = new cc.color(0, 255, 0));
},
button1: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 32 + 3 * n.itemNum2[8], o = n.money, r = 32 + 3 * n.itemNum2[8];
for (var z = 0; z <= 0; z++) if (o >= c) {
n.money -= c;
n.itemNum2[8] += 1;
n.shopPoint += r;
i.save();
a.playText("Canvas/notify", "降妖短杖等级提高1级！积分*" + r + "！", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "盘缠不够！", 100);
},
button2: void 0
},
7: {
itemName: " 护法袈裟（当前等级" + this.data.itemNum2[9] + ")",
needDes: "价格：" + (2 + .2 * this.data.itemNum2[9]).toFixed(1) + "两",
ifEnough: function(t) {
cc.find("Canvas/Page/view/content/page_2/" + t + "/button1/text").getComponent("cc.Label").string = "升级";
var n = e("scr_data");
n.money >= 20 + 2 * n.itemNum2[9] && (cc.find("Canvas/Page/view/content/page_2/" + t + "/name").color = new cc.color(0, 255, 0));
},
button1: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 20 + 2 * n.itemNum2[9], o = n.money, r = 20 + 2 * n.itemNum2[9];
for (var z = 0; z <= 0; z++) if (o >= c) {
n.money -= c;
n.itemNum2[9] += 1;
n.shopPoint += r;
i.save();
a.playText("Canvas/notify", "护法袈裟等级提高1级！积分*" + r + "！", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "盘缠不够！", 100);
},
button2: void 0
},
8: {
itemName: " 连点器（当前连点次数" + this.data.talkTimes[0] + ")",
needDes: "右键清零左键加100次，卡住了退出西行就好了，再进已经连点完了",
ifEnough: function(t) {
e("scr_data").money >= 4000000000000 && (cc.find("Canvas/Page/view/content/page_2/" + t + "/name").color = new cc.color(0, 255, 0));
},
button1: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
for (var z = 0; z <= 1; z++) if (n.money >= 4) {
n.money -= 0;
n.talkTimes[0] += 50;
n.shopPoint += 0;
i.save();
a.playText("Canvas/notify", "连点次数+100！", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "盘缠不够！", 100);
},
button2: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
for (var z = 0; z <= n.talkTimes[0]; z++) if (n.itemNum[5] >= 4) {
n.money += 0;
n.talkTimes[0] = 0;
i.save();
a.playText("Canvas/notify", "连点次数回复！", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "法宝不足！", 100);
}
},
9: {
itemName: "  抽奖  ",
needDes: "价格：100积分，随机获得一份赏赐！",
ifEnough: function(t) {
cc.find("Canvas/Page/view/content/page_3/" + t + "/button1/text").getComponent("cc.Label").string = "抽奖";
e("scr_data").shopPoint >= 100 && (cc.find("Canvas/Page/view/content/page_3/" + t + "/name").color = new cc.color(0, 255, 0));
},
button1: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
for (var z = 0; z <= n.talkTimes[0]; z++) if (n.shopPoint >= 100) {
n.shopPoint -= 100;
var c = function() {
var t = "", n = 100 * Math.random(), a = e("scr_data");
if (n <= 60) {
a.money += 10;
t = "1两盘缠！";
}
if (n > 60 && n <= 70) {
a.itemNum2[23] += 1;
t = "【疗伤符】*1！";
}
if (n > 70 && n <= 75) {
a.itemNum2[21] += 1;
t = "【虎皮裙】*1！";
}
if (n > 75 && n <= 80) {
a.itemNum2[20] += 1;
t = "【金砖】*1！";
}
if (n > 80 && n <= 85) {
a.itemNum2[26] += 1;
t = "【如意石】*1！";
}
if (n > 85 && n <= 90) {
a.itemNum2[27] += 1;
t = "【月兔仙子手链】*1！";
}
if (n > 90 && n <= 100) {
a.itemNum2[24] += 1;
t = "【行者短袍】*1！";
}
return t;
}();
i.save();
a.playText("Canvas/notify", "恭喜获得，" + c, 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "积分不够！", 100);
},
button2: void 0
}
};
return n;
},
creatPrefab: function(e, t) {
var n = cc.instantiate(this.itemUI), a = this.itemContent()[e], i = a.button1, c = a.button2, o = "item" + e;
n.name = o;
n.getChildByName("name").getComponent("cc.Label").string = a.itemName;
n.getChildByName("need").getComponent("cc.Label").string = a.needDes;
"undefined" != typeof i ? n.getChildByName("button1").getComponent("cc.Button").scheduleOnce(function() {
n.getChildByName("button1").on("touchstart", i, this);
}, .4) : n.getChildByName("button1").active = !1;
"undefined" != typeof c ? n.getChildByName("button2").getComponent("cc.Button").scheduleOnce(function() {
n.getChildByName("button2").on("touchstart", c, this);
}, .6) : n.getChildByName("button2").active = !1;
cc.find("Canvas/Page/view/content").getChildByName(t).addChild(n);
"undefined" != typeof a.ifEnough && a.ifEnough(o);
},
creatItemUI1: function() {
this.initText();
cc.find("Canvas/Page/view/content/page_1").removeAllChildren();
for (var e = 0; e <= 3; e++) this.creatPrefab(e, "page_1");
},
creatItemUI2: function() {
this.initText();
cc.find("Canvas/Page/view/content/page_2").removeAllChildren();
for (var e = 4; e <= 7; e++) this.creatPrefab(e, "page_2");
},
creatItemUI3: function() {
this.initText();
cc.find("Canvas/Page/view/content/page_3").removeAllChildren();
for (var e = 8; e <= 9; e++) this.creatPrefab(e, "page_3");
},
initText: function() {
var t = e("scr_data");
cc.find("Canvas/money").getComponent("cc.Label").string = "盘缠：" + (t.money / 10).toFixed(1) + "两";
cc.find("Canvas/point").getComponent("cc.Label").string = "积分：" + t.shopPoint;
},
delayCreatItemUI: function() {
var e = this;
this.scheduleOnce(function() {
e.creatItemUI1();
e.creatItemUI2();
e.creatItemUI3();
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
scr_effect: "scr_effect",
scr_public: "scr_public"
} ],
scr_skillButton: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "46028T60zdCgZQPViIBJA6V", "scr_skillButton");
cc.Class({
extends: cc.Component,
properties: {},
callBack: function() {
cc.director.loadScene("skill");
},
onLoad: function() {
this.node.on("touchstart", this.callBack, this);
}
});
cc._RF.pop();
}, {} ],
scr_skillJudge2: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "fbb08mI2F9N/4eaXqX0Gf87", "scr_skillJudge2");
cc.Class({
extends: cc.Component,
properties: {},
skillJugge: function() {
var t = e("scr_data"), n = e("scr_public"), a = t.friendSkill, i = {
1: function() {
0 == a[1] && t.publicVar[7] >= 30 && (a[1] = 1);
},
2: function() {
0 == a[2] && t.publicVar[7] >= 60 && (a[2] = 1);
},
3: function() {
0 == a[3] && t.publicVar[7] >= 100 && (a[3] = 1);
},
4: function() {
0 == a[4] && t.publicVar[7] >= 160 && (a[4] = 1);
},
5: function() {
0 == a[5] && t.publicVar[7] >= 240 && (a[5] = 1);
},
6: function() {
0 == a[6] && t.publicVar[7] >= 340 && (a[6] = 1);
},
7: function() {
0 == a[7] && t.publicVar[7] >= 460 && (a[7] = 1);
},
8: function() {
0 == a[8] && t.publicVar[7] >= 600 && (a[8] = 1);
}
};
for (var c in i) i[c]();
n.save();
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
scr_skillJudge: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "daeebn9rLFFwagiEBrNgbsO", "scr_skillJudge");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var t = e("scr_data"), n = e("scr_public"), a = t.skillLv, i = {
0: function() {
t.hunger <= 0 ? a[0] = 1 : a[0] = 0;
},
1: function() {
0 == a[1] && t.winTimes >= 8 && (a[1] = 1);
},
2: function() {
0 == a[2] && t.orderTimes[5] >= 30 && (a[2] = 1);
},
3: function() {
0 == a[3] && t.orderTimes[0] >= 15 && (a[3] = 1);
},
5: function() {
0 == a[5] && t.winTimes >= 15 && (a[5] = 1);
},
6: function() {
0 == a[6] && t.randomEvent[6] >= 10 && (a[6] = 1);
},
7: function() {
0 == a[7] && t.orderTimes[2] >= 30 && (a[7] = 1);
},
8: function() {
0 == a[8] && t.figthExp[0] >= 20 && (a[8] = 1);
},
9: function() {
0 == a[9] && t.winTimes >= 20 && (a[9] = 1);
},
10: function() {
0 == a[10] && t.itemNum2[2] >= 5 && (a[10] = 1);
},
11: function() {
0 == a[11] && t.figthExp[1] >= 30 && (a[11] = 1);
},
12: function() {
0 == a[12] && t.orderTimes[5] >= 666 && (a[12] = 1);
},
13: function() {
0 == a[13] && t.orderTimes[5] >= 200 && t.orderTimes[2] >= 60 && (a[13] = 1);
},
14: function() {
0 == a[14] && t.winTimes >= 60 && (a[14] = 1);
},
15: function() {
0 == a[15] && t.figthExp[2] >= 40 && (a[15] = 1);
},
17: function() {
0 == a[17] && t.orderTimes[0] >= 99 && (a[17] = 1);
},
19: function() {
0 == a[19] && t.publicVar3[13] >= 4 && (a[19] = 1);
},
21: function() {
0 == a[21] && t.itemNum2[6] >= 10 && (a[21] = 1);
},
23: function() {
0 == a[23] && t.publicVar2[1] >= 233 && (a[23] = 1);
},
24: function() {
0 == a[24] && t.publicVar3[12] >= 79 && (a[24] = 1);
},
25: function() {
0 == a[25] && t.itemNum2[3] >= 15 && t.itemNum2[4] >= 15 && (a[25] = 1);
},
26: function() {
0 == a[26] && t.kills[2] >= 40 && (a[26] = 1);
}
};
for (var c in i) i[c]();
n.save();
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_public: "scr_public"
} ],
scr_skillUI: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "ae252WOSz5CF6dAaVPNVzC8", "scr_skillUI");
cc.Class({
extends: cc.Component,
properties: {},
creatText: function(e, t, n) {
var a = new cc.Node(t);
a.addComponent(cc.Label);
a.parent = e;
a.setPosition(0, 0);
a.color = new cc.Color(115, 115, 115);
a.getComponent(cc.Label).overflow = 3;
a.setContentSize(630, 300);
a.getComponent(cc.Label).string = n;
a.getComponent(cc.Label).lineHeight = 50;
a.getComponent(cc.Label).fontSize = 32;
},
onLoad: function() {
var t = e("scr_data"), n = (t.figthExp, 3 * t.orderTimes[1] - t.orderTimes[4]);
1 == t.publicVar[1] && (n = t.orderTimes[1] - t.orderTimes[4]);
var a = {
0: "【斋粮】当斋粮值低于0时激活。斋粮状态下，西行/探路有几率减少道心，且打坐时必定减少道心！（另外：斋粮时系统会自动使用斋粮，直到用光为止哦^_^）",
1: "【法力提升1】法力上限+10，斗法胜利8次后激活（" + t.winTimes + "/8）。",
2: "【气血提升1】最大气血+50，用「蟠桃」30次后激活(" + t.orderTimes[5] + "/30）。",
3: "【恢复1】西行/探路时，气血恢复量提高8点。使用「金疮药」15次后激活（" + t.orderTimes[0] + "/15）。",
4: "【香瘾】降妖力/护身力减为零！每天有" + n + "%概率激活，效果持续1天。（焚香次数越多激活概率越高，每次增加3%）",
5: "【平衡架势】造成" + (t.figthExp[0] / 5 + 100).toFixed(1) + "%劫伤，承受" + (100 - t.figthExp[0] / 5).toFixed(1) + "%劫伤。效果随熟练度提升而提升（" + t.figthExp[0] + "/150）。斗法胜利15次(" + t.winTimes + "/15)后开启。",
6: "【化缘】每天40%概率额外拾取到1文盘缠，搀扶土地婆10次激活！此特性可升级，每搀扶10次涨1文哈~(^_−)☆！（" + t.randomEvent[6] + "/10）。",
7: "【法力提升2】法力上限+20，用「斋饭」30次后激活（" + t.orderTimes[2] + "/30）。",
8: "【护身力提升1】护身力增加10点，平衡架势熟练度达20后激活（" + t.figthExp[0] + "/20）。",
9: "【拼命架势】可切换到拼命架势。出手时，造成" + (t.figthExp[1] / 2 + 132).toFixed(1) + "%劫伤，每次出手损失8%最大气血。效果随熟练度而提升（" + t.figthExp[1] + "/150）。斗法胜利" + t.winTimes + "/20次后激活。注意1：一场斗法中，使用最多的架势将获得1点熟练度",
10: "【自愈1】打坐时40%几率恢复1点道心，行囊帐达到5级激活。",
11: "【降妖力提升1】降妖力增加10点，拼命架势熟练度达30激活（" + t.figthExp[1] + "/30）。",
12: "【法力提升3】法力上限+30，用蟠桃666次后激活，餐风饮露更养道心哦（" + t.orderTimes[5] + "/666）。",
13: "【大胃王】斋粮上限+50，用（" + t.orderTimes[5] + "/200）次「蟠桃」和（" + t.orderTimes[2] + "/60）次「斋饭」后激活。",
14: "【猥琐架势】可切换到猥琐架势。受击时，承受" + (70 - t.figthExp[2] / 6).toFixed(1) + "%的劫伤，且恢复" + parseInt(t.figthExp[2] + 10) + "点气血，但造成劫伤减也少30%。效果随熟练度而提升（" + t.figthExp[2] + "/150）。斗法胜利" + t.winTimes + "/60次后激活。注意2：遁走时系统将自动切换为猥琐架势！",
15: "【气血提升2】最大气血+100，猥琐架势熟练度达40激活（" + t.figthExp[2] + "/40）。",
16: "【护身力提升2】护身力+20，第三次降伏山脉中「黑熊精」后激活。",
17: "【恢复2】西行/探路时，气血恢复量提高36点，使用「金疮药」99次后激活（" + t.orderTimes[0] + "/99）。",
18: "【降妖力提升2】降妖力+20，降伏九九劫难中「铁扇公主」后激活。",
19: "【气血提升3】最大气血+150。在长安城中心的西行斋堂食用4次「巨无霸」套餐后激活！（" + t.publicVar3[13] + "/4）",
20: "【护身力提升3】护身力+30。降伏长安城郊外的「黄风怪」4次后激活！",
21: "【恢复强化】西行/探路时，气血恢复效果翻倍。「驱蚊工具」等级达到10级后激活（" + t.itemNum2[6] + "/10）。你目前西行/探路回恢复量为" + (4 + 8 * t.skillLv[3] + 36 * t.skillLv[17] + 2 * t.itemNum2[23]) * (1 + t.skillLv[21]) + "（激活后此数值将会翻倍，疗伤符恢复效果也将翻倍！）。",
22: "【降妖力提升3】降妖力+30，降伏九九劫难中「双扇罗刹女」后激活。",
23: "【劫运缠身逆袭】如果西行/探路时没发现法宝，则必定获得1文盘缠！没发现法宝次数达233次后激活（" + t.publicVar2[1] + "/233）。",
24: "【金身行者】斗法失败后，" + Math.min(Math.max(parseInt(t.publicVar3[12] / 5), 20), 40).toFixed(1) + "%几率满血复活！斗法失败79次后激活（" + t.publicVar3[12] + "/79）",
25: "【霸气】斗战豪气冲九霄！出手时，10%几率无视目标护身力，且恢复自身3%气血。木棍、麻布衣达到15级时激活",
26: "【不屈的精神力】打坐时30%几率额外再恢复30%法力！降伏「红孩儿」40次后激活！（" + t.kills[2] + "/40）"
}, i = e("scr_data").skillLv, c = cc.find("Canvas/Scroll/view/content"), o = parseInt(1 + t.day / 3), r = Object.keys(a).length;
"undefined" == typeof r && (r = 99);
for (var s in a) {
var l = r - s - 1;
if (l > o - 1) ; else {
this.creatText(c, "skill" + l, a[l]);
i[l] > 0 && (c.getChildByName("skill" + l).color = new cc.Color(0, 255, 0));
}
}
var u = cc.find("Canvas/Button_loadAchieve"), p = cc.find("Canvas/Button_system");
u.on("touchstart", function() {
cc.director.loadScene("achieve");
}, u);
p.on("touchstart", function() {
cc.director.loadScene("system");
}, p);
}
});
cc._RF.pop();
}, {
scr_data: "scr_data"
} ],
scr_startChoice: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "abb1fsZ7zZIh7RCgg95JM2L", "scr_startChoice");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var t = cc.find("Canvas/Determine"), n = cc.find("Canvas/text2"), a = this, i = e("scr_data"), c = e("scr_data2"), o = e("scr_public"), r = e("scr_effect"), s = 0;
t.getChildByName("choice1").on("touchstart", function() {
i.itemNum[0] += 20;
i.itemNum2[1] += 20;
i.money += 30;
u();
}, this);
t.getChildByName("choice2").on("touchstart", function() {
i.itemNum2[20] += 3;
u();
}, this);
t.getChildByName("choice3").on("touchstart", function() {
i.itemNum2[24] += 13;
u();
}, this);
t.getChildByName("choice4").on("touchstart", function() {
i.itemNum2[13] += 1;
i.money += 20;
u();
}, this);
t.getChildByName("choice5").on("touchstart", function() {
i.itemNum2[17] += 6;
u();
}, this);
t.getChildByName("choice6").on("touchstart", function() {
i.itemNum2[27] += 20;
i.publicVar[1] = -1;
u();
}, this);
t.getChildByName("choice7").on("touchstart", function() {
if (c.gameData[1] > -1) {
i.publicVar[1] = 1;
u();
} else r.playText("Canvas/text1", "无间劫模式需先取得真经西行", 80);
}, this);
t.getChildByName("choice8").on("touchstart", function() {
r.playText("Canvas/text1", "该模式还在闭关推演中，静候开悟哦←_←", 80);
}, this);
(function() {
t.opacity = 0;
n.opacity = 0;
})();
(function() {
r.playText("Canvas/text1", "请抉择一种初始法宝套餐...", 80);
a.schedule(l, 2, 1);
})();
function l() {
cc.find([ "Canvas/Determine", "Canvas/text2" ][s]).runAction(cc.fadeIn(2));
s++;
}
function u() {
cc.find("Canvas/Determine").active = !1;
cc.find("Canvas/text1").active = !1;
cc.find("Canvas/text2").active = !1;
o.save();
cc.director.loadScene("open");
}
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_data2: "scr_data2",
scr_effect: "scr_effect",
scr_public: "scr_public"
} ],
scr_startUI: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "cea75di7zpJiqfvO6EeKLF9", "scr_startUI");
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
scr_system: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "00817ZNI7hJb4XVsFxczkla", "scr_system");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var t = [ "平稳", "疾行", "平稳" ], n = cc.find("Canvas/button/speed"), a = e("scr_data"), i = e("scr_effect");
cc.find("Canvas/text/speed").getComponent("cc.Label").string = "你目前剧缘（部分）播放速度为" + t[a.publicVar[6] || 2];
n.on("touchstart", function() {
a.publicVar[6] += 1;
a.publicVar[6] > 2 && (a.publicVar[6] = 1);
i.playText("Canvas/text/speed", "你目前剧缘播放速度为" + t[a.publicVar[6]], 60);
}, n);
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_effect: "scr_effect"
} ],
scr_weixin: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "30448HDiXRBAKQpqrA00msY", "scr_weixin");
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
testAll: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "90bfc8sWA1FKba1y8235I0Y", "testAll");
cc.Class({
extends: cc.Component,
properties: {},
callBack: function() {
this.changeData();
},
changeData: function() {
var t = e("scr_data"), n = e("scr_public");
e("scr_data2");
t.day = 179;
t.ifFollow[0] = 0;
t.publicVar[7] = 999;
t.publicVar3[3] = 0;
n.save();
n.save2();
n.init();
},
changeData2: function() {
var t = e("scr_data"), n = e("scr_public");
t.itemNum2[3] = 30;
t.itemNum2[4] = 30;
t.itemNum2[8] = 15;
t.itemNum2[9] = 15;
t.itemNum2[10] = 6;
t.itemNum2[11] = 6;
t.itemNum2[14] = 999;
t.itemNum2[19] = 2;
t.itemNum2[20] = 500;
t.itemNum2[21] = 200;
t.itemNum2[22] = 200;
t.ifFollow[0] = 1;
t.choice[5] = 999;
t.skillLv[5] = 1;
t.skillLv[9] = 1;
t.skillLv[14] = 1;
t.skillLv[25] = 1;
t.figthExp[0] = 150;
t.figthExp[1] = 150;
t.figthExp[2] = 150;
t.role.hp = n.role.maxHp();
},
onLoad: function() {
this.node.on("touchstart", this.callBack, this);
}
});
cc._RF.pop();
}, {
scr_data: "scr_data",
scr_data2: "scr_data2",
scr_public: "scr_public"
} ],
test: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "8d2adDidEdDNoDEfhV+1NKI", "test");
cc.Class({
extends: cc.Component,
properties: {},
callBack: function() {},
onLoad: function() {}
});
cc._RF.pop();
}, {} ]
}, {}, [ "scr_eatButton", "scr_makeButton", "scr_shopButton", "scr_skillButton", "scr_backMainUI", "scr_diaryDetermine", "scr_eventDetermine", "scr_restDetermine", "scr_QQpay", "scr_backStartUI", "scr_backSupport", "scr_continueButton", "scr_initGame", "scr_newGame", "scr_notice", "scr_notice2", "scr_open", "scr_startChoice", "scr_startUI", "scr_weixin", "scr_achieve", "scr_eatUI", "scr_eventData", "scr_makeUI", "scr_shop2", "scr_shop3", "scr_shop4", "scr_shopUI", "scr_skillJudge", "scr_skillUI", "scr_data", "scr_data2", "scr_dataCopy", "scr_diary", "scr_event", "scr_mainUIEvent", "scr_plot", "scr_rest", "scr_enemy", "scr_explore", "scr_fight", "scr_fightState", "scr_forwardButton", "scr_friendSkillJudge1", "scr_friendSkillUI1", "scr_friendSkillUI2", "scr_friendUI1", "scr_skillJudge2", "scr_effect", "scr_public", "scr_home", "scr_mainUIinit", "scr_readConfession", "scr_end", "scr_initData", "scr_over", "scr_over2", "scr_over2_1", "scr_system", "NewScript", "scr_BGM", "scr_playAds", "scr_quitGame", "test", "testAll", "scr_liveModeMain" ]);
