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
},
BGM2: {
url: cc.AudioClip,
},
BGM3: {
url: cc.AudioClip,
},
BGM4: {
url: cc.AudioClip,
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
var t = e("scr_data"), n = e("scr_data2"), a = e("scr_public"), i = t.publicVar2[2] + t.publicVar2[3] + t.publicVar2[4], c = t.itemNum3[0] + t.itemNum3[1] + t.itemNum3[2] + t.itemNum3[3] + t.itemNum3[4] + t.itemNum3[5] + t.itemNum3[6] + t.itemNum3[7], o = this.day(), r = t.choice[5] + t.publicVar[7], s = {
0: "【银两守护者】击败乔仁",
1: "【dalao】声望达到99（" + t.achieve + "/99）",
2: "【黄心乱意】被黄心道骚扰66次！（" + t.publicVar2[0] + "/66）",
3: "【传家宝绝缘体】前进探索999次，且啥也没找到比例超过25%！你目前一共前进探索" + i + "次，其中有" + t.publicVar2[1] + "次啥也没找到，占比" + (100 * t.publicVar2[1] / i).toFixed(1) + "%",
4: "【变相奇遇】捡钱被打10次（" + t.randomEvent[0] + "/10），摸宝箱10次（" + t.publicVar2[13] + "/10）",
5: "【战斗不息】前进探索999次，且战斗占比超过24%！你目前一共前进探索" + i + "次，其中战斗" + t.publicVar2[2] + "次（占比" + (100 * t.publicVar2[2] / i).toFixed(1) + "%），捡道具" + t.publicVar2[3] + "次（占比" + (100 * t.publicVar2[3] / i).toFixed(1) + "%），事件" + t.publicVar2[4] + "次（占" + (100 * t.publicVar2[4] / i).toFixed(1) + "%）",
6: "【偷鸡不成蚀把米】被仇人反杀10次（" + t.publicVar2[5] + "/10）！",
7: "【你一定有伊贺传家宝对吧，对吧，呐】逃跑失败999次（" + t.publicVar2[6] + "/999）",
8: "【一定是特别的缘分】鸠：“你又来啦！这次也要加油啊！诶？花？不，不是吧，诶！好，好啊！”遇到少女49次（" + t.publicVar2[12] + "/49）！",
9: "【就你会冲锋是吧】击杀重拳先生10次（" + t.kills[3] + "/10）",
10: "【平.安镇】彻底击败雁飞绝",
11: "【实在不行咱抽个太极传家宝吧】触发虚炁36次（" + t.publicVar2[8] + "/36）",
12: "【真.残忍】罪恶值60（" + t.publicVar[0] + "/60）",
13: "【圣女挚爱】“笑一笑吧，起码哭的时候笑着吧。”白莲巧好感10000（" + t.choice[5] + "/10000）",
14: "【减肥少女】“你。。没事吧。。”“没，没事，只是。。。减肥而已。。”。连续30天不喂食白莲巧！（" + t.publicVar2[10] + "/30）",
15: "【happyend?】“或许，不认识我，她能活的更好。。”触发回到认识白莲巧前一天后，放弃认识白莲巧，并到达京城",
16: "【不畏浮云遮望眼】击杀元海平",
17: "【杀人如麻】拥有6个「怨念之灵」（" + t.randomEvent[1] + "/6）",
18: "【童颜剑士】击败四星40次（" + t.kills[2] + "/40），并且被击败20次（" + t.publicVar2[7] + "/20）",
19: "【神医啊！】被刘丹治疗成功21次（" + t.orderTimes[3] + "/21）",
20: "【你有这运气真不去派派开箱？】成功获得满级传家宝（5级）（" + c + "/5）",
21: "【你小名是不是叫燃堂力】打工失败49次（" + t.publicVar2[9] + "/49）",
22: "【化身为鸟，无拘无束】拥有1000个「将令」（" + t.itemNum[12] + "/1000，最难成就 ）",
23: "【无敌？我宗天下无敌！】拥有100级门帮三件套",
24: "【不差钱而已，才不是没有传家宝呢】打出99个以上苦无（" + t.publicVar3[14] + "/99）",
25: "【家.庭】“相公，你回来啦！是先吃饭呢还是~(*￣︶￣)”元可倾好感10000（" + t.publicVar[7] + "/10000），且白莲巧好感等于0",
26: "【弥补】击杀元海平后，元可倾好感大于0",
27: "【伪.后宫】白莲巧好感+陈元可倾达好感达到30000（" + r + "/30000）",
28: "【举世无双】踢馆完成",
29: "【真希望有人能全门派通关】本游戏通关8次以上（" + n.gameData[1] + "/8）",
30: "【我还记得，可我快忘了】本游戏在你手机中存活达3000小时（" + o + "/3000）"
}, l = {
0: function() {
return t.randomEvent[3] > 0;
},
1: function() {
return t.achieve >= 99;
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
return t.choice[5] >= 10000;
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
return c >= 5;
},
21: function() {
return t.publicVar2[9] >= 49;
},
22: function() {
return t.itemNum[12] >= 1000;
},
23: function() {
return t.itemNum2[20] >= 100 && t.itemNum2[21] >= 100 && t.itemNum2[22] >= 100;
},
24: function() {
return t.publicVar3[14] >= 99;
},
25: function() {
return t.publicVar[7] >= 10000 && t.choice[5] <= 0;
},
26: function() {
return t.publicVar2[9] >= 0 && t.publicVar[3] > 0;
},
27: function() {
return r >= 30000;
},
28: function() {
return t.choice[6] >= 16;
},
29: function() {
return n.gameData[1] + 1 >= 8;
},
30: function() {
return o >= 3000;
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
hp: 1000,
maxHp: 1000,
att: 50,
def: 0
},
money: 5,
day: 1,
energy: 200,
maxEnergy: 120,
hunger: 200,
maxHunger: 200,
health: 30,
achieve: 0,
shopPoint: 0,
enemyId: 0,
menpai: [0, 0, 0, 0, 0, 0, 0, 0, 0 ],
menpai2: 0,
juexue: [1, 0],
haogan: [0, 0],
gudu: 0,
jiuguan: 1,
tingzhi: 0,
CJBsl: 0,
CJByh: 1,
CJByh2: 0,
CJBtj: 1,
dkmoney: 0,
dkmoney2: 0,
dk1: 1,
dk2: 0,
dk3: 1,
fuzai: 0,
fuzai1: 0,
xitai: [ 0, 0, 0 ],
fzy: 0,
ysd: 0,
sysx: 1,
haogan1: [ 0, 0, 0 ],
honghuang: 0,
ceshi: [ 1, 0, 0, 0 ],
duanlian: [ 0, 0 ],
weather: [ 0, 1, 0, 0, 0],
publicVar: [ 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
publicVar2: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
publicVar3: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
orderTimes: [ 0, 0, 0, 0, 0, 0, 0, 0 ],
randomEvent: [ 0, 0, 0, 0, 0, 0, 0, 99, 588, 0, 0, 0, 0, 0 ],
choice: [ 2, 0, 0, 0, 0, 0, 0, 0, 0 ],
chioce2: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
kills: [ 0, 0, 0, 0 ],
itemNum: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
itemNum2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
itemNum3: [0, 0, 0, 0, 0, 0, 0, 0],
ifFollow: [0, 0, 0, 0, 0],
Gensui: [0, 0, 0, 0, 0],
Shengwang: 0,
jinyan: 0,
plotId: 0,
talkTimes: [ 0, 0 ],
choiceAtt: 0,
button: [ !0, !0, !0 ],
figthState: 0,
figthExp: [ 0, 0, 0 ],
workExp: 0,
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
hp: 8750,
maxHp: 8750,
att: 0,
def: 0
},
200001: {
lv: 15,
hp: 1500,
maxHp: 1500,
att: 50,
def: 0
},
300001: {
lv: 5,
hp: 5000,
maxHp: 5000,
att: 0,
def: 0
},
300002: {
lv: 45,
hp: 22000,
maxHp: 22000,
att: 100,
def: 100
},
300003: {
lv: 5,
hp: 8270,
maxHp: 8270,
att: 0,
def: 0
},
400001: {
lv: 100,
hp: 100000,
maxHp: 100000,
att: 600,
def: 100
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
hp: 20500,
maxHp: 20500,
att: 3100,
def: 1210
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
lv: 5,
hp: 5000,
maxHp: 5000,
att: 0,
def: 0
});
"undefined" == typeof e.specialEnemy[300002] && (e.specialEnemy[300002] = {
lv: 5,
hp: 22000,
maxHp: 22000,
att: 0,
def: 0
});
"undefined" == typeof e.specialEnemy[300003] && (e.specialEnemy[300003] = {
lv: 5,
hp: 8270,
maxHp: 8270,
att: 0,
def: 0
});
"undefined" == typeof e.specialEnemy[400001] && (e.specialEnemy[400001] = {
lv: 100,
hp: 100000,
maxHp: 100000,
att: 600,
def: 100
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
hp: 20500,
maxHp: 20500,
att: 3100,
def: 1210
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
1001: [ "“刘向元！”", "“你给我等着！我终有一天会打败你！！！”", "“我在这里起誓！我盘桓道第三十六名弟子聪明溪向你发出挑战！”", "", [ a.distance, 0 ] ],
1003: [ "聪明溪\n我父亲旧时的好友，", "在多年前的比武招亲上惜败家父，", "从此\n二人再不两立", "", [] ],
1005: [ "16年前，雨下得像今天这么大", "我出生在一个小山村。", "童年是我最快乐的时光", "茗溢诗歌，刀剑武法\n直到。。。", "", [] ],
1009: [ "自从父亲去世，母亲就带着我东奔西走，", "她压缩着时间工作，", "只为了让我过上和之前一样的生活；", "但我唯一的亲人，", "却被那县衙夺去性命", "思念", "一直在增长...", "", [] ],
2007: [ "王喜贵是吗，", "看在他家伙食这么好吃的份上，饶了他吧", "", [ a.choice[1], 2 ] ],
2021: [ "人生在世，需要一个目标", "我的目标是，", "寻仇", "", [] ],
2022: [ "“3日之后，来顺天府见我，逾时不候。。。”", "“明白了”", "卢暗蛊，我儿时的好友，我现在的接头人，街上贴满了我的悬赏，只有他愿意当我的接头人", "聪明溪，等着我，你的人头，一定是我砍下的。", "唉，时间不多了。", "是时候收拾行囊，前往顺天府了。", "", [] ],
3001: [ "时间有时过得很慢，", "孤独的夜更是如此。", "安静的过于怪异，", "果然只有孤独才是我的归宿。", "", [] ],
3002: [ "父亲死后的第一年，", "母亲迫于生计只好改嫁，", "我随着她受到了无数乡里的谩骂。", "当时年少的我，", "开始变得成熟...", "", [] ],
3003: [ "改嫁后的第一年，母亲失去了左腿，", "改嫁的对象是顺天府的高官。", "他肥胖，臃肿，脾气古怪，动不动就打人。", "", [] ],
3004: [ "那胖子为血刀之流，需要人血养炼器皿", "他常叫一些无家可归的人来府邸做客，最后残忍杀害，", "我躲在母亲的怀里，害怕的要死。", "直到那个禽兽对母亲动了手。。。", "", []],
3005: [ "那日，很冷", "手握的刀也很冷，", "身上滑落的血液很冷。", "游子与母亲的心也很冷。", "", []],
3018: [ "他死后母亲带着我逃了", "由于生前滥杀无辜，官府没有公布死讯。", "然而，", "没了主要的经济支柱，", "我和母亲的生活水平每况愈下", "最后连歇息的地方都难找了", "", [] ],
3027: [ "残阳落山头，光辉同昼短，", "一人站在无名墓前痛饮劣酒。", "光辉余烬，", "他的影子变得愈发寒冷诡谲。", "", [] ],
3028: [ "列刀娉花，人道瞥煞，", "有些人终其一生都在寻找归宿的路上，", "寻找着属于自己的避风港。", "人们总是在渴求着本不属于自己的那份希望。。。", "", [] ],
4001: [ "血雨腥风，负着杀人之罪，却不能停下复仇的脚步。", "我并不会感到孤独，", "只不过是一直渴望着，是否，会有人知道，知道曾属于“我”的存在", "", [] ],
4004: [ "同福楼，就先住在这里吧。", "老板娘热情地招待着我。", "不知为何，她总是会以奇怪的眼神看我，是被发现了吗", "", [] ],
4008: [ "老板娘叫做元可倾。", "“我看你啊，就先别去做什么镖客了", "现在这几大门派纷争，指不定你那天就被火并了”这是她第一次主动找我说话。", "“空有一身好武艺，脑子实在笨了点。”她声音又小了些。", "“不去当掌舵还不去做官，唉。”，我无言", "", [] ],
4009: [ "楼里有个小二，叫赵顺耳，人如其名，知道的事情特别多。", "无论是哪家生了孩子，哪家得了绝学，或是中了状元，又是犯了朝廷。", "都是他在客人酒足饭饱后的谈资", "", [] ],
4010: [ "顺耳虽然只是个小二，", "但是人脉极其广阔，也许以后帮得上忙。", "", [] ],
4018: [ "住了几天后，顺耳与我也熟络了起来。", "他告诉我，老板娘似乎是某个名门的宗室，被夺权后才流落至此。", "", [] ],
4019: [ "“嘿！最近官府查得严这几天就先别出房门了”小二在耳边偷偷说道", "“此。。此话怎讲”我有些震惊。", "他又偷偷掏出一张黄纸“你现在全城有名的通缉犯，还装什么”", "“看情况吧”我有些无奈", [] ],
4022: [ "我被一阵敲门声吵醒，门外像是有人在说话。", "“你们是说，这房间里没有人住？”外面传来一阵声音，“正是，如若不信，大人您自己看便是了”女声又大了点", "我迅速翻窗攀向屋顶，心中有些不安。", "", [] ],
4023: [ "“你躲得了一时，躲不了一世。”元可倾有些气愤道", "“你想过你之后怎么办吗，这样婆婆妈妈，怎么才能出人头地”，我正想回答，又被夺了言，", "“我知道你付不起房钱，就先让你垫着了，我知道你要干什么，但，别那么拼命了。。。”，她将语调放低了几分叹道，", "“你啊。。唉，真不知道该拿你怎么办”", "", [] ],
4025: [ "头很痛，梦到了过去的事情。", "我还记得那是一个晴天，真的很晴。", "父亲问我今后想走什么样的道路的时候，我不知如何回答", "他抚着我的头笑而不语，而我被暖阳晒得昏昏欲睡", "", [] ],
4026: [ "“云，武，术，法，道，皆因苦乐而现，因苦乐而合。", "五练以云为首，因是苦乐悲极，飘仙欲云，云雾之中看懂本质才能有为。”", "年幼的我不了解父亲说的话，就算是现在也不了解", "", [] ],
4028: [ "昨天酒楼来了个五毒的住客，那人有些怪异，我很是讨厌。", "“瞧，这新来的是老板娘请来的，听说他炼出了种厉害的蛊，虽然是请来的，但你也小心点啊。”赵顺耳在我耳边小声道", "我感到后背一丝凉意", "", [] ],
4033: [ "京城热闹非凡，哪怕是深夜依旧是商贾游人的聚集地。", "花魁妩媚，侠客豪饮，觥筹交错，烛灯宏明，长天灿烂，有民宅千万，酒楼耸立，青楼渐起，但。。。这一切与我无关", "哪怕沾上一点点都是致命的。", "", [] ],
4036: [ "早上，隔壁的客房发出一阵巨响", "我赶忙前往，", "房内一片漆黑，那位五毒小伙，痴笑着捧着一堆灰白色的粉末转过头来“成了！”。", "", [] ],
4038: [ "“怎么样了？”，元可倾问道。", "\n“这真是天绝神赐！神赐！遇火则明，浴火而狂，我将称成为----火药”那人感叹道", "元可倾似乎很高兴，\n“这样的话，也就是说有机会了”", "“正是，感谢小姐多日帮助，小生必当回报。”那人回答\n“别躲了我知道你在那边。”我从暗处走出，元可倾看着我笑道“看来老天爷还是蛮喜欢你的嘛”", "“...”", "", [] ],
4043: [ "你还记得吗，记得什么？", "你还知道吗，知道什么？", "梦境中的另一个我不止一遍问着自己，我不知所措的应答着；我不明白我为什么会被问到这些问题，我也不知道如何回答", "那是一种极为怪异的感受，放空自己", "直到，你看到的，听到的逐渐变成现实的光晕，然后醒来", "", [] ],
4044: [ "元可倾为我作了一个计划。", "她将那包裹着奇怪蛊物的布袋交到我的手里", "“好好记住那个帮你的人，叫做陈琦，是他给了你这个机会”她有些呜咽", "“今早刚出京城口就被同党抹了脖子，好好记住他吧”", "“我这边不会拖后腿的，不用担心，加油吧。”", "", [] ],
4045: [ "聪明溪如今已是朝廷要臣。", "所谓一人之下万人之上，可惜他多年闭门不出", "但是有了“火药”就可以引他出门", "用一种特制的铁器将火药发射到最为中心的养心堂", "养心堂皆是药草书籍非常容易点燃，养心堂失火，聪明溪必定会破了警戒出门避险。", "", [] ],
4048: [ "“羲儿，快走！快走啊！”母亲倒在地上叫着", "火光之下，她眼泪横流，一群黑色的身影出现，血红胜过了火焰，燃破了天空。", "", [] ],
4051: [ "一切的一切，都是为了复仇而来，一切的一切，都是为了复仇而作", "真好啊，少见地受到了少有的真情。", "但就算是成功，灭了盘桓道那么多无辜之人，我和他又有什么区别呢", "", [] ],
4052: [ "我看不清楚，我也不想看清楚，我不能明晰，也不想明晰。。。", "有时候独自一人时，我会想，如果不是因为复仇，我估计只是一个努力耕田的农人罢了。", "", [] ],
4062: [ "陈琦的墓葬在城外的钟元山，一座有碑无尸的墓。", "然而就是这个墓，也被人挖地三尺，渴望着能从中找点好处，", "元可倾哭的很伤心，我看不清了，我真的看不清了，父亲所谓的“正义”", "到底，是什么东西呢。", "", [] ],
4063: [ "这一次，梦中的我又一次问着我", "你还记得吗，我记得，我要复仇！", "我并没有照常反问，“我”迟疑了一下，接着说道“那就不要再哭了”哭？我不可能会哭。醒来的我抹了抹湿润的眼眶。。。“起床！”", "", [] ],
147: [ "过去的景象再次出现，一位衣衫褴褛的孩子站在已成灰烬的房前", "一具焦黑的尸体被抬出，他忍住，没有流泪，上官大人一纸判定死因是失火，他坚持，没有流泪。", "被周围伙伴嘲笑是瘟神克死了父母，还是没有流泪。。。", "就这样一个不会流泪的人，在母亲尸骸被村民当做是灾祸扔下悬崖时，终于哭了，他抓挠着地面，似乎把这辈子所有泪都哭光了", "", [] ],
148: [ "最近，时间似乎变得更慢了，", "就算离最终复仇只剩下二十多天。", "对于我来说，与二十多年无异。", "", [] ],
150: [ "“也许，复仇，从一开始就是错误的吧。”元可倾如此劝告。", "“如果我现在放弃，那之前因我而死的人们又会是如何的冤曲呢。”我插话着", "", [] ],
153: [ "定义，我对我自己的定义是十足的恶棍，为了达成目的不择手段。", "或许，我是个恶棍吗，又或许，我比恶棍还要可怕一些。", "越是靠近，便越是感觉自己无法理喻。", "越是靠近，便愈发感觉自己的无能为力。", "", [] ],
156: [ "“你以后有打算怎么办？”，我问元可倾。", "她又用那种奇怪的眼神看着我不说话", "“你真的打算在京城做一辈子老板娘吗。”，我又问。", "“也许呢，也许吧~”，她似乎很乐观，好看的嘴角微微翘起。", "“你这话说的我云里雾里。”，她又用一种全新的眼神看着我。", "我也不清楚，我是个几乎不会读眼色的人。", "", [] ],
159: [ "“仓皇教的嫡女吗，原来如此。”我感叹道", "“你可别告诉她是我说的啊，不然我这条小命不保！”顺耳小声说道", "", [] ],
165: [ "已经很久没有洗头了", "在不尽的惊恐中我少得安逸。", "这时有股怪力突然将我抵入接水的盆中。", "莫不是官府的人？我想，又反手抓住那人，运气合神，将其摁倒在地。", "撩开湿透的头发，一看，元可倾倒在地上笑得合不拢嘴。", "", [] ],
167: [ "趁着夜色溜出同福楼。", "夜已深沉，京城繁华不减，四周车水马龙，在人群中我找到了少有的安宁。", "猛然间一直手抓住了我，是顺耳，“你下次可别不说话就走啊，老板娘都快急死了。”看来是时候回去了。", "", [] ],
169: [ "盘桓道的禁制有五个位点。", "分别为金、木、水、火、土。", "这五个位点由五个用魂兽魂精做成的神灵守护着", "", [] ],
171: [ "每个位点距离都很远，需要一天的路程才能到达", "终于要出发了", "聪明溪，等着我！。", "", [] ],
173: [ "父亲还在的时候，我们是村里的名望一家", "玉女莲音道的母亲，逍遥盘桓道的父亲。", "村中大大小小的事务都是父亲一手操持。", "（待续）", "", [] ],
174: [ "或许是由于父母的缘故。", "我学习功法的速度十分快速。", "而代价就是。", "我无法与同龄孩子一同玩耍。", "（待续）", "", [] ],
175: [ "父亲被暗算逝世后，", "母亲带着我一人生活。", "村中人们见大势已去，纷纷离开拥护着另一个人做村长。", "即使还没显露，但我知道，那种源于深处的嫉妒无法隐藏。", "（待续）", "", [] ],
176: [ "父亲走后，我练功的时间减少了，有时间与同龄的孩子玩耍。", "母亲介绍我与他们认识，他们极不情愿的将我拉入伙。", "（待续）", "", [] ],
177: [ "孩子的恶意比成年人更加可怖。", "他们在玩捉迷藏时用石头丢我，在荡秋千时将在空中的我用力推下，", "然而自幼学习轻功的我，自然不会让他们得逞。", "（待续）", "", [] ],
178: [ "他们想要欺负我，但是总是不得趁，", "领头的男孩十分气愤", "终于有天他在一处池塘边吆喝着一群孩子说要与我决斗。", "孩童的我早已懂得分寸，并没有下重手，但是为首的男孩却冲刺过猛落入池塘，等到他父母来时早已肿胀的漂在水上。", "（待续）", "", [] ],
179: [ "母亲再嫁，继父死后，我们又回到桃花村。", "村中的人看见我们都骂嗓着灾星。", "我们收回了早已变成畜棚的房子住下。", "但是没过几日，官府的人来了", "他们放了一把大火，将房子烧的彻底。", "母亲哀求着让我先走，自己却没了音信，", "那个孩子在那个晚上痛苦的悲鸣响彻云霄", "（剧终）", "", [] ]
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
u.runAction(cc.fadeIn(0.5));
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
itemName: " 熟肉 ",
needDes: "※拥有：" + this.data.itemNum[0],
des: "※效果：饥饿+" + (5 + 5 * this.data.menpai[4]) + "，【被噎到了】50%几率减少1点健康值(伊贺不会触发此效果)",
ifEnough: function(t) {
e("scr_data").itemNum[0] > 0 && (cc.find("Canvas/Page/view/content/page_1/" + t + "/button/name").color = new cc.color(255, 182, 193));
},
button: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = n.itemNum[0], o = i.maxHunger();
if (n.hunger < o) if (c >= 1) {
var r = "好吃ლ(´ڡ`ლ)", s = 100 * Math.random() + 100 * n.menpai[4];
n.itemNum[0] -= 1;
n.hunger += 5 + 5 * n.menpai[4];
n.orderTimes[5] += 1;
if (s < 50) {
n.health -= 1;
r += "健康值-1";
}
i.save();
a.playText("Canvas/notify", r + "！", 100);
t.delayCreatItemUI1();
} else a.playText("Canvas/notify", "道具不足！", 100); else a.playText("Canvas/notify", "已经吃不下了！", 100);
}
},
1: {
itemName: " 佳肴 ",
needDes: "※拥有：" + this.data.itemNum2[0],
des: "※效果：饥饿+" + (20 + 10 * this.data.menpai[4]) + "，【美食即动力】有20%的概率增加10点精力",
ifEnough: function(t) {
e("scr_data").itemNum2[0] > 0 && (cc.find("Canvas/Page/view/content/page_1/" + t + "/button/name").color = new cc.color(255, 182, 193));
},
button: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = n.itemNum2[0], o = i.maxHunger();
if (n.hunger < o) if (c >= 1) {
var r = "好吃ლ(´ڡ`ლ)", s = 100 * Math.random();
n.itemNum2[0] -= 1;
n.hunger += 20 + 10 * n.menpai[4];
n.orderTimes[2] += 1;
if (s < 20) {
n.energy += 10;
n.energy -= 10 * n.menpai[0] * n.juexue[1];
r += "精力+10";
}
i.save();
a.playText("Canvas/notify", r + "！", 100);
t.delayCreatItemUI1();
} else a.playText("Canvas/notify", "道具不足！", 100); else a.playText("Canvas/notify", "已经吃不下了！", 100);
}
},
2: {
itemName: " 伤药 ",
needDes: "※拥有：" + this.data.itemNum2[1],
des: "※效果：恢复" + ( 40 + 4 * this.data.orderTimes[0]) + "生命值，每次使用增加恢复量4点，生命上限4点，10%恢复1点健康（血刀门效果减少五分之四）",
ifEnough: function(t) {
e("scr_data").itemNum2[1] > 0 && (cc.find("Canvas/Page/view/content/page_1/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 40 + 4 * n.orderTimes[0], o = n.itemNum2[1], r = n.role.hp, s = i.role.maxHp(), q = n.menpai[3];
if (r < s) if (o >= 1) {
var l = "治疗成功", p = 100 * Math.random();
n.itemNum2[1] -= 1;
n.role.hp += parseInt(c - 0.8 * q * c);
n.role.hp > s && (n.role.hp = s);
n.orderTimes[0] += 1;
if (p < 10) {
n.health += 1;
l += "健康值+1";
}
i.save();
a.playText("Canvas/notify", l + "！", 100);
t.delayCreatItemUI1();
} else a.playText("Canvas/notify", "道具不足！", 100); else a.playText("Canvas/notify", "生命已达最大值！", 100);
}
},
3: {
itemName: " 元神丹（每日最多1个） ",
needDes: "※拥有：" + this.data.itemNum2[7] + "（你当前虚炁值为" + n + "%）",
des: "※效果：增加100精力，回满血量饥饿！攻防提高100（暂时），血量上限提高50（永久），解除【虚炁】。（非太极会有副作用）",
ifEnough: function (t) {
e("scr_data").itemNum2[7] > 0 && (cc.find("Canvas/Page/view/content/page_1/" + t + "/button/name").color = new cc.color(240, 255, 255));
},
button: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), z = (1 - n.menpai[7]), c = (n.orderTimes[1],
n.itemNum2[7]);
n.orderTimes[1];
if (c >= 1 && n.sysx + n.itemNum3[7]>= 1) {
n.itemNum2[7] -= 1;
n.energy += 100;
n.ysd += 1;
n.energy -= 100 * n.menpai[0] * n.juexue[1];
n.role.maxHp += 50;
n.publicVar3[4] += 100;
n.publicVar3[10] += 100;
n.fzy += z;
n.sysx -= 1;
n.role.hp = i.role.maxHp();
n.hunger = i.maxHunger();
n.orderTimes[1] += 1;
n.skillLv[4] = 0;
n.itemNum[7] += 1;
i.save();
a.playText("Canvas/notify", "“这味道怎么有点怪怪的？”获得残魄*1", 100);
t.delayCreatItemUI1();
} else a.playText("Canvas/notify", "吃太多了或者物品不足", 100);
}
},
4: {
itemName: " 美酒 ",
needDes: "※拥有：" + this.data.itemNum2[12],
des: "※效果：恢复20精力，并获得10个【道心】。70%获得【醉熏】状态（伤害增加30%，战后一定几率消失）",
ifEnough: function(t) {
e("scr_data").itemNum2[12] > 0 && (cc.find("Canvas/Page/view/content/page_2/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.itemNum2[12] >= 1) {
var o = 100 * Math.random(), r = "精力+20，获得【道心】*10";
n.itemNum2[12] -= 1;
n.energy += 20;
n.energy -= 20 * n.menpai[0] * n.juexue[1];
n.itemNum[2] += 50;
if (o < 70) {
n.buffState[0] = 1;
r += "，获得【醉熏】状态！";
}
i.save();
a.playText("Canvas/notify", r, 100);
t.delayCreatItemUI2();
} else a.playText("Canvas/notify", "道具不足！", 100);
}
},
5: {
itemName: " 喂养雪兔（雪山） ",
needDes: "※拥有草药：" + this.data.itemNum[5],
des: "※效果：每天回复满角色血量，战斗时有40%的概率回复角色" + (50 + 2 * this .data.haogan[0]) + "的血量。（防御气势时增加20%的治疗概率，减少10%的治疗量）",
ifEnough: function (t) {
e("scr_data").itemNum[5] >= 1 && e("scr_data").menpai[2] >= 1 && (cc.find("Canvas/Page/view/content/page_2/" + t + "/button/name").color = new cc.color(0, 191, 255));
},
button: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.itemNum[5] >= 1 && n.menpai[2] >= 1) {
var r = "雪兔好感+1";
n.itemNum[5] -= 1;
n.haogan[0] += 1;
i.save();
a.playText("Canvas/notify", r, 100);
t.delayCreatItemUI2();
} else a.playText("Canvas/notify", "道具不足或者门派错误！", 100);
}
},
6: {
itemName: " 喂养雪雕（雪山） ",
needDes: "※拥有熟肉：" + this.data.itemNum[0],
des: "※雪雕啄击：战斗时会额外造成" + (100 + 2 * this.data.haogan[1]) + "的伤害。（进攻气势时，增加20%的伤害，提高反噬概率20%）",
ifEnough: function (t) {
e("scr_data").itemNum[0] >= 1 && e("scr_data").menpai[2] >= 1 && (cc.find("Canvas/Page/view/content/page_2/" + t + "/button/name").color = new cc.color(0, 191, 255));
},
button: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.itemNum[0] >= 1 && n.menpai[2] >= 1) {
var r = "雪雕好感+1";
n.itemNum[0] -= 1;
n.haogan[1] += 1;
i.save();
a.playText("Canvas/notify", r, 100);
t.delayCreatItemUI2();
} else a.playText("Canvas/notify", "道具不足或者门派错误！", 100);
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
for (var e = 4; e <= 6; e++) this.creatPrefab(e, "page_2");
},
creatItemUI3: function() {
this.initText();
cc.find("Canvas/Page/view/content/page_3").removeAllChildren();
for (var e = 8; e <= 11; e++) this.creatPrefab(e, "page_3");
},
initText: function() {
var t = e("scr_data"), n = e("scr_public");
cc.find("Canvas/hunger").getComponent("cc.Label").string = "饥饿：" + t.hunger + "/" + n.maxHunger() + "  精力：" + t.energy + "/" + n.maxEnergy() + "  生命：" + t.role.hp + "/" + n.role.maxHp();
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
var t = [ "这可能是我的最后一版流浪改版。", "这里是我的开始，也是我的一个节点，离开的节点", "感谢晓风游戏，也感谢所有支持我的人", "这里是三天苍（你叫我小马也行）。（2022.1.28）" ], n = (t.length, 
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
name: "齐恒西<丐帮>",
lv: 16,
hp: 5000,
maxHp: 5000,
att: 100,
def: 0,
publicVar: 0,
escapeRate: 10,
enemyEscapeRate: 0,
lostHealth: 30,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 1, 3, 1 ], [ 100, 0, 5, 1 ], [ 100, 3, 2, 1 ], [ 100, 99, 10, 3 ] ],
des: "“铁子，来点钱”",
skill: function() {
c.money -= 1;
c.role.hp -= 100;
return "【你被偷走1两,hp-100】！";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: function() {
e("scr_data").money = 0;
return "失去所有金钱！";
}
},
1: {
name: "魂兽<鹿>",
lv: 100,
hp: 9000,
maxHp: 9000,
att: 100,
def: 0,
publicVar: 0,
escapeRate: 100,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 50, 2, 50, 1 ], [ 50, 1, 5, 2 ] ],
des: "垚垚垚！",
skill: function() {
var t = Math.max(200 - o.def, 0);
e("scr_data").role.hp -= t;
this.hp += t;
this.def += o.def;
return "【魂兽提升防御，你被吸取" + t + "点生命！】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.kills[0] += 1;
t.itemNum[14] += 1;
return "【你已消灭" + t.kills[0] + "只魂兽】";
},
lostEvent: void 0
},
2: {
name: "刘丹<逍遥游侠>",
lv: 3,
hp: 2550,
maxHp: 2550,
att: 500,
def: 5,
publicVar: 0,
escapeRate: 100,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 14, 3, 1 ] ],
des: "“清风扶待人，命里漠须归”",
skill: function() {
var t = e("scr_data");
this.publicVar += 1;
t.health -= 5;
t.role.maxHp += 100;
return "【" + this.name + "使用「元辉一线」】你失去5点健康提高最大生命值100】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
3: {
name: "蛮人",
lv: 5,
hp: 10000,
maxHp: 10000,
att: 60,
def: 0,
publicVar: 0,
escapeRate: 50,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [[100, 3, 2, 1], [100, 5, 3, 1], [ 50, 1, 5, 2 ] ],
des: "为了下一顿，冲锋！！",
skill: void 0,
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
4: {
name: "李安<五毒>（精英）",
lv: 120,
hp: 7250,
maxHp: 7250,
att: 0,
def: 0,
publicVar: 0,
escapeRate: 60,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 1,
getAtt: 2,
drop: [ [ 100, 3, 10, 1 ], [ 100, 1, 2, 2 ], [ 100, 1, 5, 2 ] ],
des: "“循规蹈矩，散祸人心，哈哈哈！”",
skill: function() {
var t = Math.max(20, 0);
this.publicVar += 1;
var n = t * this.publicVar;
e("scr_data").role.hp -= n;
return "【剧毒（初级）：每回合损失" + n + "点生命（" + this.publicVar + "层）】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
21: {
name: "魂兽<虎>",
lv: 100,
hp: 7000,
maxHp: 7000,
att: 0,
def: 80,
publicVar: 0,
escapeRate: 50,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 50, 0, 10, 1 ], [ 100, 2, 50, 1 ] ],
des: "嗷呜！！",
skill: function() {
var t = Math.max(1000 - o.def, 0);
e("scr_data").role.hp -= t;
this.hp += t;
return "【" + this.name + "使用「猛烈撕咬」，恢复自身血量，你损失" + t + "点生命】";
},
defSkill: void 0,
winEvent: function () {
var t = e("scr_data");
t.kills[0] += 1;
t.itemNum[14] += 1;
return "【你已消灭" + t.kills[0] + "只魂兽】";
},
lostEvent: void 0
},
22: {
name: "王刚<少林>",
lv: 7,
hp: 10000,
maxHp: 10000,
att: 100,
def: 700,
publicVar: 0,
escapeRate: 50,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 20, 3 ], [ 100, 1, 1, 2 ] ],
des: "“丹印，墨痕，少林独尊”",
skill: void 0,
defSkill: function() {
if (100 * Math.random() < 25) {
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 9999;
this.def += 100;
this.hp -= 1000;
return "【" + this.name + "使用「合心不骛」！】";
}
return "";
},
winEvent: void 0,
lostEvent: void 0
},
23: {
name: "刘道忠<雪山>",
lv: 8,
hp: 7500,
maxHp: 7500,
att: 10,
def: 0,
publicVar: 0,
escapeRate: 100,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 0, 5, 2 ], [ 100, 1, 1, 2 ], [ 100, 0, 1, 1 ] ],
des: "“染血剑锋，苍流独中！”",
skill: void 0,
defSkill: function() {
var t = e("scr_public"), n = t.role.att() - t.role.def();
if (100 * Math.random() < 25) {
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 9999;
e("scr_data").role.hp -= 10 * n;
return "【" + this.name + "使用「剑里如一」，你十倍损失" + n + "点生命！】";
}
return "";
},
winEvent: void 0,
lostEvent: void 0
},
24: {
name: "西吴苑<太极>",
lv: 10,
hp: 7500,
maxHp: 7500,
att: 800,
def: 170,
publicVar: 0,
escapeRate: 50,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 0, 3, 3 ], [ 100, 1, 1, 2 ], [ 100, 0, 5, 2 ] ],
des: "“刀剑无影，唯我无故！”",
skill: function() {
var t = e("scr_data"), n = parseInt(Math.max(.25 * this.hp + 5 * this.att, 0));
t.role.hp -= n;
return "【" + this.name + "使用「阴阳浑天剑」，你受到" + n + "点伤害】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
25: {
name: "诸葛遥<玉女>(精英)",
lv: 75,
hp: 10000,
maxHp: 10000,
att: 680,
def: 100,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 50, 3 ], [ 100, 1, 10, 2 ], [ 100, 21, 1, 2 ] ],
des: "“轻仙渡边，佳人宿天”",
skill: function () {
var t = e("scr_data"), n = 100 * Math.random();
t = e("scr_data");
this.publicVar += 1;
if (this.publicVar <= 10) {
var kk = 1000 + 500 * this.publicVar;
if (n < 75) return "【" + this.name + "使用「万花鞭法」！但是被你躲开啦~】";
t.role.hp -= kk;
return "【你被「万花鞭法」击中！损失"+ kk + "点生命！】";
}
},
defSkill: function () {
this.hp += 1000;
return "【" + this.name + "「万花不灭」回复自身十分之一的血量】";
},
winEvent: function() {
return "【" + this.name + "果然。。。你，技高一筹】";
},
lostEvent: function() {
var t = e("scr_data");
t.role.hp = 1;
return "【你被狠狠地羞辱了一顿，血量透支】";
}
},
26: {
name: "阎乐<逍遥游侠>（稀有精英）",
lv: 170,
hp: 70000,
maxHp: 70000,
att: 1000,
def: 0,
publicVar: 0,
escapeRate: 100,
enemyEscapeRate: 40,
lostHealth: 0,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 10, 3 ] ],
des: "“少侠，我赠你金露，与我交手可好”",
skill: function() {
e("scr_data").money += 10;
return "【" + this.name + "使用「赐金如晨露」，你收到了10银两】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
27: {
name: "赤眉<\ 血刀门之祖 />（传说boss）",
lv: 1000,
hp: 350000,
maxHp: 350000,
att: 1000,
def: 0,
publicVar: 0,
escapeRate: 100,
enemyEscapeRate: 0,
lostHealth: 10000,
achieve: 3,
getAtt: 1,
drop: [ [ 100, 11, 200, 1 ] ],
des: "“鲜血染刀锋，命数玩物中！哈哈哈哈哈！你的死期到了！”",
skill: function() {
var t = e("scr_data"), n = parseInt(4.9 * Math.random()), kk = 0;
if (t.publicVar[0] * t.menpai[3] >= 10) {
kk += 50;
}
if (0 == n + kk) {
var a = 0.1 * this.hp;
t.role.hp -= a;
return "【赤眉使用「肆杀夺命刀」，化自身血量为力量斩出，你损失" + a + "点生命！】";
}
if (1 == n + kk) {
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= 500;
return "【赤眉使用「急骤元拳」，用极快的速度挥出一拳，破了你的防御，你降低500点防御！】";
}
if (2 == n + kk) {
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= 30;
return "【赤眉使用「乱花迷人眼」，用极快的刀法让你失去招架之力，你降低500点攻击！】";
}
if (3 == n+ kk) {
this.publicVar += 2;
a = 0.05 * this.hp * this.publicVar;
t.role.hp -= a;
return "【赤眉使用「夺命连环刀」，你连续被刺到，损失" + a + "点生命！】";
}
if (4 == n+ kk) {
a = 0.1 * this.maxHp;
t.role.hp -= a;
this.hp += a; 
return "【赤眉使用「猿嘶犬嗜」，用手上的血刀吸取了你的生命，你受到" + a + "点伤害！】";
}
},
defSkill: function() {
var e = parseInt(.3 * (this.maxHp - this.hp)), t = 100 * Math.random(), n = "";
this.hp += e;
if (t < 40) {
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 9999;
n = "【赤眉使用「血衣护主第一式」！格挡成功！】";
}
return "【赤眉使用「血衣护主第二式」，恢复" + e + "点生命】" + n;
},
winEvent: void 0,
lostEvent: function() {
var n = e("scr_data");
n.itemNum2[1] = 0;
n.itemNum2[2] = 0;
n.itemNum2[3] = 0;
n.itemNum2[4] = 0;
n.itemNum2[5] = 0;
n.itemNum2[6] = 0;
n.itemNum2[7] = 0;
n.itemNum2[8] = 0;
n.itemNum2[9] = 0;
n.itemNum2[10] = 0;
n.itemNum2[11] = 0;
n.itemNum2[12] = 0;
n.itemNum2[13] = 0;
n.itemNum2[14] = 0;
n.itemNum2[15] = 0;
n.itemNum2[16] = 0;
n.itemNum2[17] = 0;
n.itemNum2[18] = 0;
n.itemNum2[19] = 0;
n.itemNum2[20] = 0;
n.itemNum2[21] = 0;
n.itemNum2[22] = 0;
n.itemNum2[23] = 0;
n.itemNum2[24] = 0;
n.itemNum2[25] = 0;
n.itemNum2[26] = 0;
n.itemNum2[27] = 0;
n.itemNum2[0] = 0;
n.itemNum[1] = 0;
n.itemNum[2] = 0;
n.itemNum[3] = 0;
n.itemNum[4] = 0;
n.itemNum[5] = 0;
n.itemNum[6] = 0;
n.itemNum[7] = 0;
n.itemNum[8] = 0;
n.itemNum[9] = 0;
n.itemNum[10] = 0;
n.itemNum[11] = 0;
n.itemNum[12] = 0;
n.itemNum[0] = 0;
n.money = 0;
return "你失去了一切，轮回将继续开始";
}
},
31: {
name: "罗森<丐帮>",
lv: 16,
hp: 8750,
maxHp: 8750,
att: 600,
def: 100,
publicVar: 0,
escapeRate: 50,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 0, 1, 1 ], [ 100, 1, 1, 2 ] ],
des: "饥饿，饥饿！使我疯狂！",
skill: function() {
var t = 100 * Math.random(), n = e("scr_data");
if (t < 15) {
this.enemyEscapeRate += 20;
if (n.itemNum[0] >= 1) {
n.itemNum[0] -= 1;
this.publicVar += 1;
}
return "【你被偷走「熟肉」*1】！";
}
return "";
},
defSkill: void 0,
winEvent: function() {
e("scr_data").itemNum[0] += this.publicVar;
return "【你抢回被偷的熟肉】";
},
lostEvent: void 0
},
32: {
name: "秋田林生<伊贺>",
lv: 24,
hp: 5900,
maxHp: 5900,
att: 3000,
def: 40,
publicVar: 0,
escapeRate: 50,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 3, 1, 1 ], [ 100, 1, 1, 2 ] ],
des: "在下，参上！！",
skill: function() {
var t = 100 * Math.random(), n = e("scr_data");
if (t < 20) {
var a = Math.max(3 * (120 - o.def), 0);
n.role.hp -= a;
return "【林生使用「夺命镖」！命中！你损失" + a + "点生命！】";
}
this.hp -= 100;
return "【林生使用「夺命镖」！失败！林生损失100点生命！】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
33: {
name: "李斯<少林>",
lv: 32,
hp: 29999,
maxHp: 29999,
att: 140,
def: 1000,
publicVar: 0,
escapeRate: 60,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 1, 2, 2 ] ],
des: "少林甲，穿千门！",
skill: function() {
var t = 100 * Math.random(), n = e("scr_data");
if (t < 30) {
if (n.itemNum2[1] > 0) {
this.publicVar += 1;
n.itemNum2[1] -= 1;
this.enemyEscapeRate += 20;
return "【你的伤药被偷啦！" + this.name + "顺势潜行！】";
}
return "";
}
return "";
},
defSkill: function() {
if (30 < 100 * Math.random()) {
var e = parseInt(.1 * this.maxHp);
this.hp += e;
this.def += 500;
return "【" + this.name + "使用「少林金甲」，防御+500，生命+" + e + "】";
}
return "";
},
winEvent: function() {
e("scr_data").itemNum2[1] += this.publicVar;
return "【你夺回全部伤药】";
},
lostEvent: void 0
},
34: {
name: "钱景<逍遥游侠>",
lv: 45,
hp: 25350,
maxHp: 25350,
att: 460,
def: 460,
publicVar: 0,
escapeRate: 70,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 50, 4, 2, 1 ], [ 50, 1, 2, 1 ], [ 100, 1, 2, 2 ] ],
des: "三千人，幻影罗身",
skill: function() {
var t = e("scr_data"), n = parseInt(Math.max(1.5 * (2120 - o.def), 0)), a = parseInt(.15 * this.hp);
this.hp -= a;
t.role.hp -= n;
return "【" + this.name + "使用「#献祭#幻影剑法」，你损失" + n + "点生命，" + this.name + "损失" + a + "点生命】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
35: {
name: "孙元勋<血刀>",
lv: 60,
hp: 30250,
maxHp: 30250,
att: 1100,
def: 60,
publicVar: 0,
escapeRate: 80,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 3, 2, 1 ], [ 100, 1, 2, 2 ] ],
des: "血色炎天，刀落人心（场地绝学{血夜人魂}发动！）",
skill: function() {
var t = e("scr_data"), n = parseInt(Math.max(.2 * this.hp - o.def, 0));
t.role.hp -= n;
return "【孙元勋使用「幻影剑法」，你受到" + n + "点伤害】";
},
defSkill: function() {
this.def += 150;
return "【孙元勋使用「血衣」，增加150点防御】";
},
winEvent: void 0,
lostEvent: void 0
},
36: {
name: "烈心<少林>（残废）",
lv: 999,
hp: 999999,
maxHp: 999999,
att: 0,
def: 0,
publicVar: 0,
escapeRate: 100,
enemyEscapeRate: 1,
lostHealth: 0,
achieve: 0,
getAtt: 1,
drop: [],
des: "趁人不备，你，你，你不要b脸！",
skill: function() {
this.publicVar += 1;
if (5 == this.publicVar) {
this.hp -= 9999999;
return "【烈心自杀了，但是他真的死了吗。。。】";
}
return "【烈心正在尝试还击】";
},
defSkill: void 0,
winEvent: function() {
var t = this.maxHp - this.hp - 9999999, n = Math.max(Math.min(Math.round(t / 500 + 1), 10), 1);
e("scr_data").itemNum[8] += n;
return "【烈心自杀了！你对烈心（残废）造成" + t + "点伤害，获得【暗铁】*" + n + "】";
},
lostEvent: void 0
},
41: {
name: "李兰<伊贺>",
lv: 28,
hp: 9999,
maxHp: 9999,
att: 500,
def: 0,
publicVar: 0,
escapeRate: 100,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 0, 1, 1 ] ],
des: "一触即发！纳命来！",
skill: function() {
this.publicVar += 1;
var e = Math.pow(this.publicVar, 2), t = 20 * e, n = Math.pow(this.publicVar + 1, 2) - e;
c.role.hp -= t;
this.hp += 50 * n;
return "【李兰扔出" + e + "个飞镖！你损失" + t + "点生命！（李兰额外扔出" + n + "个飞镖！）】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
42: {
name: "刘丹<逍遥游侠>（豪迈者）",
lv: 400,
hp: 13700,
maxHp: 13700,
att: 800,
def: 580,
publicVar: 0,
escapeRate: 60,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 80, 0, 1, 1 ] ],
des: "善心，仁心，恒心。",
skill: function() {
var e = 100 * Math.random(), t = 4 * Math.random() + 2;
if (e < 70) {
this.publicVar += 1;
if (this.publicVar < t) {
if (100 * Math.random() < 50) {
c.money += 1;
return "【刘丹给了你10银两！】";
}
var n = 59999 - o.def;
c.role.hp -= n;
return "【“施主，有舍有得可否知道”。刘丹轻轻挥了一刀，你损失" + n + "点生命！】";
}
n = 59999 - o.def;
c.role.hp -= n;
return "【“施主，有舍有得可否知道”。刘丹轻轻挥了一刀，你损失" + n + "点生命！】";
}
this.hp += 2000;
return "【“施主，我安好落身了，哈哈哈哈”。生命+2000！】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
43: {
name: "刘丹<逍遥游侠>(豁达者)",
lv: 400,
hp: 13700,
maxHp: 13700,
att: 0,
def: 120,
publicVar: 0,
escapeRate: 100,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 60, 99, 2, 3 ], [ 40, 1, 1, 2 ] ],
des: "善心，仁心，恒心。",
skill: function() {
var e = 100 * Math.random();
if (e < 20) {
c.money > 0 && (c.money = 0);
return "【刘丹使用「莲辉一线」。你损失所有的金钱！】";
}
if (e < 80) {
var t = 7777 - o.def;
c.role.hp -= t;
return "【刘丹使用「幻影剑法」。你损失" + t + "点生命！】";
}
c.role.hp += 8888;
return "【刘丹使用「血衣护主第二式」。你恢复8888点生命！】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
44: {
name: "珈<太极>",
lv: 70,
hp: 23850,
maxHp: 23850,
att: 0,
def: 167,
publicVar: 0,
escapeRate: 70,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 2, 3 ], [ 5, 27, 0, 2 ] ],
des: "太极剑，太极如风，不动如雷",
skill: function() {
c.role.hp -= 3828;
return "【珈使用「长空思璇」你损失3828点生命！】";
},
defSkill: function() {
var e = parseInt(3828 - .3 * o.att);
this.hp += e;
return "【阿龙使用「长空列璇」，恢复" + e + "点生命！】";
},
winEvent: void 0,
lostEvent: void 0
},
45: {
name: "素素<丐帮>(自信)",
lv: 30,
hp: 10400,
maxHp: 10400,
att: 1000,
def: 599,
publicVar: 0,
escapeRate: 100,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 2, 3 ] ],
des: "哟，客官，要来点黑活吗？",
skill: function() {
if (c.money >= 100) {
c.money -= 100;
return "【素素使用「#献祭#莲辉一线」，你被偷走100银两！】！";
}
var e = Math.max(10000 - 0 , 0);
c.role.hp -= e;
this.enemyEscapeRate += 100;
return "【素素使用「丐离趋势」，自身提高100点逃跑概率，你损失" + e + "点生命！】";
},
defSkill: function() {
this.escapeRate -= 10;
return "【素素使用「暗中黑手」你逃跑几率-10%！】！";
},
winEvent: function() {
return "你，你竟敢打女人，你，你没有树枝！";
},
lostEvent: void 0
},
1001: {
name: "李烨<五毒>（精英）",
lv: 70,
hp: 23850,
maxHp: 23850,
att: 100,
def: 1500,
publicVar: 0,
escapeRate: 50,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 80, 3, 1, 1 ] ],
des: "李家剧毒，无人能敌！",
skill: function() {
var t = Math.max(500 - 0, 0) + 30;
this.publicVar += 1;
var n = t * this.publicVar;
e("scr_data").role.hp -= n;
return "【中毒：每回合损失" + n + "点生命（" + this.publicVar + "层）】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
1002: {
name: "欧阳云<玉女>（精英）",
lv: 90,
hp: 20750,
maxHp: 20750,
att: 1000,
def: 200,
publicVar: 0,
escapeRate: 100,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 50, 3 ] ],
des: "无人，能敌！",
skill: function() {
var e = 100 * Math.random();
if (e < 30) {
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= parseInt(.5 * o.att);
return "【欧阳云使用「万花鞭法」，你被缴械，攻击减半！】";
}
if (e < 70) {
if (c.money > 10000) {
c.money = 0;
return "【欧阳云使用「莲辉一线」，你损失所有银两！】";
}
this.enemyEscapeRate += 100;
return "【欧阳云使用「飞云舞步」完全脱离准备！】";
}
this.def += 200;
return "【欧阳云使用「天衣」，防御+200！】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
1003: {
name: "康当<雪山>（精英）",
lv: 120,
hp: 10350,
maxHp: 10350,
att: 1000,
def: 100,
publicVar: 0,
escapeRate: 100,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 50, 0, 1, 2 ], [ 100, 1, 1, 2 ] ],
des: "北域雪山，不动如山",
skill: function() {
var e = Math.max(parseInt(650 + 50 * this.publicVar - .5 * o.def), 0);
c.role.hp -= e;
return "【康当使用「染血剑法」，你损失" + e + "点生命，攻击提高！】";
},
defSkill: function() {
var t = e("scr_public").role.att();
if (100 * Math.random() < 30) {
c.role.hp -= t;
return "【康当使用「寒剑应损」，你损失" + t + "点生命！】";
}
return "";
},
winEvent: void 0,
lostEvent: void 0
},
2001: {
name: "诸葛若瑶<太极>精英",
lv: 105,
hp: 35998,
maxHp: 35999,
att: 1000,
def: 250,
publicVar: 0,
escapeRate: 40,
enemyEscapeRate: 8,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 30, 0, 1, 1 ], [ 30, 0, 1, 1 ], [ 30, 0, 1, 1 ], [ 30, 0, 1, 1 ], [ 3, 21, 1, 2 ] ],
des: "仙人已逝，碧月生辉。",
skill: function() {
var e = parseInt(.7 * c.role.hp + 50);
c.role.hp -= e;
return "【诸葛若瑶使用「狂杀阵」，你损失" + e + "点生命(当前生命的70%)！】";
},
defSkill: function() {
c.role.hp -= 10000;
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= 1000;
return "【诸葛若瑶使用「凄杀阵」，你降低1000点攻击，10000点生命！】";
},
winEvent: function() {
return "住！。。住手！别碰哪里，啊~";
},
lostEvent: function() {
return "妾身受教了";
}
},
2002: {
name: "刘丹<逍遥游侠>（桀骜者）",
lv: 8848,
hp: 8848,
maxHp: 8848,
att: 8848,
def: 8848,
publicVar: 0,
escapeRate: 100,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 4, 3 ] ],
des: "少年！又见面了，哈哈哈！",
skill: function() {
this.publicVar += 1;
if (this.publicVar % 3 == 0) {
if (c.money >= 0) {
c.money = 0;
this.maxHp += 8848;
this.hp += 8848;
this.att += 8848;
this.def += 8848;
return "【刘丹使用「谦辉一线」，你失去所有银两，加强了刘丹8848点全属性“谢谢小兄弟”】";
}
c.itemNum[4] -= 3;
c.itemNum[4] < 0 && (c.itemNum[4] = 0);
return "【刘丹使用「不等交易」。你失去「熟肉」*3】";
}
if (c) {
this.escapeRate -= 30;
return "【刘丹使用「雾中黑手」，你逃跑率-30%！】";
}
},
defSkill: function() {
c.itemNum[0] += 1;
var e = parseInt(.1 * o.att);
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= e;
return "【刘丹使用「等价交易」，你获得「熟肉」*1，你攻击降低" + e + "！】";
},
winEvent: function() {
return "【谢谢施主！！！！！！！你真是个大善人】";
},
lostEvent: void 0
},
2003: {
name: "琛月<太极>（精英）",
lv: 155,
hp: 51555,
maxHp: 51555,
att: 10000,
def: 500,
publicVar: 0,
escapeRate: 30,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 0,
getAtt: 1,
drop: [ [ 30, 7, 1, 1 ], [ 30, 1, 1, 2 ], [ 30, 1, 1, 2 ], [ 5, 17, 0, 2 ] ],
des: "这位好汉，你可要小心了！",
skill: function() {
this.publicVar += 1;
if (this.publicVar % 3 != 0) {
var e = parseInt(o.def), t = parseInt(.2 * this.def * this.publicVar);
c.role.hp -= e + t;
return "【琛月使用「黑虎掏心」，你损失" + e + "，附加" + t + "点流血！】";
}
var n = parseInt(this.def * this.publicVar);
c.role.hp -= n;
this.def += 500;
return "【琛月使用「白鹭雀起」，你损失" + n + "点生命！】";
},
defSkill: function() {
var e = parseInt(.5 * this.def);
c.role.hp -= e;
this.def += 500;
return "【琛月使用「青龙腾空」，防御增加500，你受到" + e + "反弹伤害！】";
},
winEvent: function() {
return "啊！！！！！！！你这个卑鄙之徒";
},
lostEvent: function() {
return "哈哈哈哈，小垃圾，小乐色，小**，真是**，这都打不过。";
}
},
2004: {
name: "莱<雪山>（稀有精英）",
lv: 195,
hp: 64700,
maxHp: 64700,
att: 11990,
def: 4800,
publicVar: 0,
escapeRate: 40,
enemyEscapeRate: 0,
lostHealth: 3,
achieve: 0,
getAtt: 1,
drop: [ [ 50, 0, 1, 2 ], [ 10, 14, 1, 2 ] ],
des: "万花丛中过。。香气萦环身！！哈哈哈！",
skill: function() {
if (480 == this.def) {
var e = parseInt(this.publicVar * o.att * .2 + this.att - o.def), t = parseInt(.8 * o.def);
c.role.hp -= e;
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= t;
this.hp -= 5000;
return "【莱使用「#献祭#七伤拳」！自身损失5000点生命，你受到" + e + "点伤害，防御-" + t + "！】";
}
return "";
},
defSkillfunction: function() {
if (100 * Math.random() < 25) {
this.publicVar += 1;
if (4800 == this.def) {
this.def += 4800;
this.att -= 4800;
return "【莱切换「进攻如火」，防御+4800，攻击-4800，气势+10！】";
}
this.def += 4800;
this.att -= 6800;
return "【莱切换「不动如山」，防御-4800，攻击+4800，决心+1！】";
}
if (this.def > 480) {
var e = parseInt(this.publicVar * o.def * .4 + .2 * this.def), t = parseInt(.08 * o.att);
c.role.hp -= e;
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= t;
return "【莱使用「冲波流」！你受到" + e + "点伤害，攻击-" + t + "！】";
}
return "";
},
winEvent: function() {
c.money += 0;
return "师傅。。来世，我还做你的徒弟";
},
lostEvent: function() {
c.money -= parseInt(.1 * c.money);
return "？区区小辈，不值一提【你损失10%金钱！】";
}
},
2005: {
name: "烈心<少林>(传说级精英)",
lv: 10,
hp: 285000,
maxHp: 285000,
att: 0,
def: 2500,
publicVar: 0,
escapeRate: 50,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 1,
getAtt: 1,
drop: [ [ 100, 99, 2, 3 ], [ 6, 27, 1, 2 ] ],
des: "有仇必报「场地绝学{雷厉风行}发动」",
skill: function() {
var e = c.day;
if (e < 120) {
var t = cc.find("Event/scr_fight").getComponent("scr_fight").correct[1], n = parseInt(4 * e + .5 * o.maxHp - o.def - t);
c.role.hp -= n;
return "【烈心使用「#献祭#撼心拳」，你受到" + n + "点伤害】";
}
if (e < 150) {
var a = 2 * (c.day - 90);
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= a;
t = cc.find("Event/scr_fight").getComponent("scr_fight").correct[1], n = parseInt(4 * e + .5 * o.maxHp - o.def - t);
c.role.hp -= n;
return "【烈心使用「撼心拳」，你受到" + n + "点伤害，防御减少" + a + "！】";
}
a = parseInt(.1 * o.maxHp);
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= a;
var i = parseInt(.1 * o.maxHp);
t = cc.find("Event/scr_fight").getComponent("scr_fight").correct[1], n = parseInt(4 * e + .5 * o.maxHp - o.def - t);
c.role.hp -= n;
this.hp += a;
return "【烈心使用「#悟道#撼心拳」，你受到" + n + "点伤害，防御减少" + a + "，烈心恢复" + i + "点生命！】";
},
defSkill: function() {
var e = 100 * Math.random(), t = c.day - 90;
if (t < 40) {
if (e < t) {
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 999999;
return "【烈心使用「#献祭#列金甲」】";
}
return "";
}
if (t < 65) {
if (e < t) {
var n = parseInt(.3 * o.def);
this.def += n;
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 999999;
return "【烈心使用「列金甲」，烈心增加" + n + "点防御！】";
}
return "";
}
if (e < t) {
n = parseInt(.3 * o.def);
var a = parseInt(.7 * o.att);
this.def += n;
c.role.hp -= a;
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 999999;
return "【烈心使用「#悟道#列金甲」，烈心增加" + n + "点防御！你受到" + a + "点反弹伤害！】";
}
return "";
},
winEvent: function() {
return "**，趁人之危？原来就这么弱。";
},
lostEvent: void 0
},
3001: {
name: "守门人<赤>",
lv: 100,
hp: 12000,
maxHp: 12000,
att: 360,
def: 140,
publicVar: 0,
escapeRate: 20,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 16, 10, 2 ], [ 100, 16, 10, 2 ] ],
des: "“禁止入内”",
skill: function() {
var t = Math.max(parseInt(.5 * this.att), 0);
e("scr_data").role.hp -= t;
this.hp += t;
return "【守门人<赤>使用了「口技」吸取了你" + t + "点生命！】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
3002: {
name: "守门人<橙>",
lv: 150,
hp: 15000,
maxHp: 15000,
att: 450,
def: 175,
publicVar: 0,
escapeRate: 10,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 16, 10, 2 ], [ 100, 16, 10, 2 ] ],
des: "“禁止入内”",
skill: function() {
if (100 * Math.random() < 30) {
this.escapeRate -= 10;
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= parseInt(.25 * o.att);
return "【" + this.name + "使用「束缚」，你攻击降低25%，逃跑率降低10%！】";
}
return "【" + this.name + "使用「束缚」，但是被你躲开啦！】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
3003: {
name: "守门人<黄>",
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
drop: [ [ 100, 16, 10, 2 ], [ 100, 16, 10, 2 ] ],
des: "“禁止入内”",
skill: function() {
var t = parseInt(.2 * this.att), n = parseInt(.1 * o.def);
this.publicVar += 1;
var a = t * this.publicVar;
e("scr_data").role.hp -= a;
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= n;
return "【毒酸：每回合损失" + a + "点生命，" + n + "点防御！】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
3004: {
name: "守门人<绿>",
lv: 240,
hp: 124865,
maxHp: 124865,
att: 740,
def: 270,
publicVar: 0,
escapeRate: -10,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 16, 10, 2 ], [ 100, 16, 10, 2 ] ],
des: "“我帽子好看吗？”",
skill: function() {
if (100 * Math.random() < 30) {
var e = parseInt(.2 * c.role.hp);
c.role.hp -= e;
return "【守门人<绿>使用「唾液」你损失" + e + "点生命！】";
}
return "";
},
defSkill: function() {
if (100 * Math.random() < 30) {
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 99999;
return "【" + this.name + "躲避你的攻击！】";
}
return "";
},
winEvent: void 0,
lostEvent: void 0
},
3005: {
name: "守门人<青>",
lv: 300,
hp: 170000,
maxHp: 170000,
att: 900,
def: 350,
publicVar: 0,
escapeRate: -20,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 16, 10, 2 ], [ 100, 16, 10, 2 ] ],
des: "“好看”",
skill: function() {
var t = e("scr_data"), n = 100 * Math.random();
this.publicVar += 1;
if (n < 10 * this.publicVar + 20) {
var a = 2 * (this.att - o.def);
t.role.hp -= a;
return "【" + this.name + "使用「轻吻」，你损失" + a + "点生命！】";
}
return "";
},
defSkill: function() {
this.att += parseInt(.1 * this.att);
this.def -= parseInt(.1 * this.def);
return "【守门人变得狂躁，攻击提高10%，防御降低10%！】";
},
winEvent: void 0,
lostEvent: void 0
},
3006: {
name: "守门人<蓝>",
lv: 375,
hp: 360000,
maxHp: 360000,
att: 1150,
def: 434,
publicVar: 0,
escapeRate: -30,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 16, 10, 2 ], [ 100, 16, 10, 2 ] ],
des: "“不好看”",
skill: function() {
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= parseInt(.08 * o.def);
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= parseInt(.08 * o.def);
return "【守门人<蓝>使用「抚摸」，你降低8%攻击，8%防御！】";
},
defSkill: function() {
var e = parseInt(.06 * this.maxHp);
this.hp += e;
return "【守门人<蓝>使用自愈，恢复" + e + "点生命！】";
},
winEvent: void 0,
lostEvent: void 0
},
3007: {
name: "守门人<紫>",
lv: 475,
hp: 450000,
maxHp: 450000,
att: 1400,
def: 599,
publicVar: 0,
escapeRate: -40,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 16, 10, 2 ], [ 100, 16, 10, 2 ] ],
des: "“你说得对。”",
skill: function() {
if (100 * Math.random() < 50) {
var e = this.att;
c.role.hp += e;
return "【守门人对你使用「爽滑」，你恢复" + e + "点生命】";
}
this.publicVar += 3;
var t = 3 * this.att - o.def;
c.role.hp -= t;
return "【守门人对你使用「慢舔」，你损失" + t + "点生命，并附加3层毒素伤害！】";
},
defSkill: function() {
if (this.publicVar > 0) {
var t = e("scr_data"), n = parseInt(.1 * this.att);
this.publicVar += 1;
var a = n * this.publicVar;
t.role.hp -= a;
return "【毒素：每回合损失" + a + "点生命】";
}
return "";
},
winEvent: void 0,
lostEvent: void 0
},
3008: {
name: "守门人<灰>",
lv: 600,
hp: 600000,
maxHp: 600000,
att: 1800,
def: 699,
publicVar: 0,
escapeRate: -50,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 16, 10, 2 ], [ 100, 16, 10, 2 ] ],
des: "“但是。。。”",
skill: function() {
this.publicVar += 1;
if (this.publicVar % 4 == 0) {
var e = 5 * this.att;
c.role.hp -= e;
return "【" + this.name + "向你打胶！你损失" + e + "点生命！】";
}
return "【“最难受的一次”“逆天”】";
},
defSkill: function() {
if (100 * Math.random() < 30) {
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 99999;
return "【" + this.name + "使用「胶状护盾」！】";
}
return "";
},
winEvent: void 0,
lostEvent: void 0
},
3009: {
name: "守门人<白>",
lv: 800,
hp: 750000,
maxHp: 750000,
att: 2499,
def: 999,
publicVar: 0,
escapeRate: -60,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 16, 10, 2 ], [ 100, 16, 10, 2 ] ],
des: "“感觉不如。。。”",
skill: function() {
if (4 == this.publicVar) {
var e = this.att * (1 + this.publicVar);
c.role.hp -= e;
return "【" + this.name + "使用「拥抱」，你受到" + e + "点生命！】";
}
this.publicVar += 1;
var t = this.att, n = parseInt(.1 * this.att * this.publicVar);
c.role.hp -= t + n;
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= parseInt(.05 * o.def);
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= parseInt(.05 * o.att);
return "【" + this.name + "使用「吹气」你受到" + t + "点伤害，附加" + n + "流血，攻防降低5%！】";
},
defSkill: function() {
this.att += parseInt(.05 * this.att);
return "【" + this.name + "使用「集中」，" + this.name + "攻击强化！】";
},
winEvent: void 0,
lostEvent: void 0
},
3010: {
name: "守门人<黑>",
lv: 1e3,
hp: 999999,
maxHp: 999999,
att: 2999,
def: 1199,
publicVar: 0,
escapeRate: -70,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 16, 10, 2 ], [ 100, 16, 10, 2 ] ],
des: "“可是这是一款由。。。”",
skill: function() {
this.publicVar += 1;
var e = parseInt(this.att * (1 + this.publicVar / 10));
c.role.hp -= e;
this.hp += e;
return "【" + this.name + "喷出「胶」你受到" + e + "点伤害。" + this.name + "恢复" + e + "点生命，并收集1点能量！】";
},
defSkill: function() {
if (this.publicVar % 4 == 0) {
this.def = 899;
return "【" + this.name + "「bl」被击破！】";
}
if (this.publicVar % 2 == 0) {
this.def = 99999;
return "【" + this.name + "启动「bl」！】";
}
var e = parseInt(o.att * (.2 + this.publicVar / 10));
c.role.hp -= e;
return "【" + this.name + "开启「ake」你受到" + e + "点伤害！】";
},
winEvent: void 0,
lostEvent: void 0
},
100: {
name: "马原<丐帮>",
lv: 10,
hp: 6000,
maxHp: 6000,
att: 10,
def: 0,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 0,
achieve: 0,
getAtt: 1,
drop: [],
des: "去死吧！",
skill: function() {
var t = e("scr_data");
if (t.money > 0) {
t.money -= 1;
this.publicVar += 1;
return "【你被偷走1两】";
}
return "【“时过境迁！”】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data"), n = Math.min(10, this.publicVar + 3);
t.money += n;
return "【你从马原身上抢到" + n + "两】";
},
lostEvent: void 0
},
101: {
name: "雁飞绝<雪山派>（普通boss）",
lv: 100,
hp: 23050,
maxHp: 23050,
att: 150,
def: 0,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1000,
achieve: 2,
getAtt: 2,
drop: [ [ 100, 1, 5, 2 ], [ 100, 22, 2, 2 ], [ 100, 21, 2, 2 ], [ 100, 20, 2, 2 ] ],
des: "“为了能踏实的睡觉，你给我去spa！”",
skill: function() {
this.att += 50;
return "【雁飞绝使用「雁反」，攻击力提高！！】";
},
defSkill: function() {
var t = e("scr_public"), n = 0.5 * t.role.att() - t.role.def();
if (100 * Math.random() < 30) {
e("scr_data").role.hp -= n;
return "【雁飞绝使用「剑滑背」，你损失" + n + "点生命！】";
}
return "";
},
winEvent: function() {
e("scr_data").choice[0] = 0;
e("scr_data").Shengwang += 100;
return "【“你给老子等着！”】";
},
lostEvent: function() {
return "【“来世再见！”】";
}
},
102: {
name: "黑衣武座（简单boss）",
lv: 100,
hp: 20000,
maxHp: 20000,
att: 100,
def: 0,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 3,
achieve: 1,
getAtt: 1,
drop: [ [ 100, 1, 4, 2 ], [ 50, 22, 1, 2 ] ],
des: "“白日做梦！先过了我这关再说！”",
skill: function() {
this.publicVar += 1;
if (this.publicVar % 3 == 0) {
this.hp += 400;
this.att += 10;
return "【" + this.name + "使用「黑衣身法」，恢复500点生命，攻击提高10点！】";
}
return "";
},
defSkill: void 0,
winEvent: function() {
e("scr_data").choice[0] = 1;
return "【" + this.name + "死亡！！】";
},
lostEvent: function() {
var t = e("scr_data"), n = t.money;
t.money -= n;
return "【你损失全部的银两！】";
}
},
103: {
name: "雁飞绝#献祭#<雪山派>（精英BOSS）",
lv: 230,
hp: 38550,
maxHp: 38550,
att: 500,
def: 100,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 3,
achieve: 3,
getAtt: 3,
drop: [ [ 100, 11, 20, 1 ] ],
des: "“x你x！”",
skill: function() {
var t = e("scr_data"), n = parseInt(Math.max(.25 * (this.maxHp - this.hp) - o.def + 20, 0)), a = parseInt(.3 * n);
this.hp += a;
t.role.hp -= n;
return "【雁飞绝使用「#献祭#雁嘶吼」，你受到" + n + "点伤害,雁飞绝恢复" + a + "点生命】";
},
defSkill: function() {
if (100 * Math.random() < 15) {
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 9999;
return "【雁飞绝使用「雁清风」格挡了你的伤害！】";
}
return "";
},
winEvent: function() {
var t = e("scr_data");
t.choice[0] = 1;
t.publicVar[5] = 1;
t.Shengwang += 200;
return "【雁飞绝献祭过多，彻底殒命！】";
},
lostEvent: function() {
var t = e("scr_data");
t.energy = 0;
t.choice[0] = 2;
return "【你受重伤！损失全部的精力，刘丹将你就走了。。。】";
}
},
104: {
name: "农民（两人）<无>",
lv: 1,
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
drop: [ [ 100, 12, 1, 1 ] ],
des: "“拼了命也不让你进！”",
skill: function() {
var t = Math.max(40 - o.def, 0);
this.hp -= 50;
e("scr_data").role.hp -= t;
return "【农民使用「拼命」，对你造成" + t + "点伤害，农民损失50点生命】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.choice[3] = 2;
t.money += 100;
return "邪教消灭，村中偷来的官粮被回收，只留下饥饿的妇孺等待死亡。";
},
lostEvent: void 0
},
105: {
name: "老妇人(拿着木棍)<邪教>",
lv: 1,
hp: 20,
maxHp: 20,
att: 0,
def: 0,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 3,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 11, 2, 1 ] ],
des: "“都是你害的，都是你害的！我要报仇！”",
skill: function() {
var t = e("scr_data"), n = 100 * Math.random();
this.publicVar += 1;
if (this.publicVar <= 20) {
if (n < 85) return "【老妇人向你挥出木棒，但是未命中】";
var a = 699 - o.def;
t.role.hp -= a;
return "【老妇人向你挥出木棒，击中！你损失" + a + "点生命！】";
}
return "【老妇人想继续挥打，但似乎用尽了力气】";
},
defSkill: void 0,
winEvent: function() {
return "在生命最后时分，她依旧抓着我的腿，那血流满面的样子恐怖。";
},
lostEvent: function() {
e("scr_data").health -= 99999999;
return "“我报仇啦，哈哈哈，老头子，大家，你们安心的去吧！”";
}
},
106: {
name: "劫匪",
lv: 4,
hp: 437,
maxHp: 437,
att: 0,
def: 0,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 0,
achieve: 2,
getAtt: 1,
drop: [ [ 100, 99, 10, 3 ], [ 100, 0, 10, 2 ] ],
des: "“求你放我一马吧，家里老婆孩子等着吃饭呢！”",
skill: function() {
var t = Math.max(100 - o.def, 0);
this.publicVar += 1;
var n = t * this.publicVar;
e("scr_data").role.hp -= n;
return "【劫匪使用「放血」，每回合损失" + n + "点生命（" + this.publicVar + "层）】";
},
defSkill: void 0,
winEvent: function() {
return "“叫你抢我家老爷的粮食，该死！”";
},
lostEvent: function() {
return "他飞快地离开了";
}
},
107: {
name: "黄桃",
lv: 1,
hp: 17,
maxHp: 17,
att: 2,
def: 5,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 3,
achieve: 1,
getAtt: 1,
drop: [ [ 100, 4, 1, 1 ] ],
des: "“别，别打我，我错了！”",
skill: void 0,
defSkill: function() {
var t = e("scr_public"), n = t.role.att() - t.role.def();
if (100 * Math.random() < 40) {
e("scr_data").role.hp -= n;
return "【黄桃使用「反击」，你损失" + n + "点生命！】";
}
return "";
},
winEvent: function() {
return "鲜血从头上流下，将土尘带走，终能看清她白皙的皮肤，摸到冰冷的手臂";
},
lostEvent: function() {
return "她慌忙逃走了。。";
}
},
108: {
name: "元海平<血刀>【仓皇教原宗主】",
lv: 100,
hp: 400000,
maxHp: 400000,
att: 5000,
def: 1000,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 0,
achieve: 5,
getAtt: 5,
drop: [ [ 100, 11, 20, 1 ], [ 100, 12, 10, 2 ], [ 100, 27, 2, 2 ], [ 100, 29, 1, 2 ] ],
des: "原来你们俩是一伙的！",
skill: function() {
var t = e("scr_data"), n = e("scr_data2");
this.publicVar += 1;
var a = 30 * this.publicVar, i = Math.max(parseInt(1000 + 100 * this.publicVar - 100 * n.gameData[0]), 0);
t.role.hp -= i + a;
var c = parseInt(.25 * this.hp);
this.hp -= c;
this.escapeRate += 10;
return "【" + this.name + "使用「晴空霹雳」，你损失" + i + "点生命，每回合损失" + a + "点生命（电灼烧），元海平损失" + c + "点生命】";
},
defSkill: function() {
var t = e("scr_data"), n = this.def * this.publicVar;
this.def += 1000;
this.hp -= n;
this.escapeRate += 10;
return "【元海平使用「烈缺霹雳」，增加1000点防御，自身受到" + n + "点伤害】";
},
winEvent: function() {
var t = e("scr_data");
t.distance += 1;
t.publicVar[3] = 1;
t.publicVar[7] -= 2000;
t.Shengwang += 500;
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
name: "鸮（魂兽）",
lv: 10,
hp: 21450,
maxHp: 21450,
att: 1000,
def: 1000,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 3,
achieve: 1,
getAtt: 1,
drop: [ [100, 14, 20, 1] ],
des: "“今天又能饱餐一顿了！”少女瞬间化身成为妖物。",
skill: function() {
var e = parseInt(.5 * (this.maxHp - this.hp)), t = 317 + o.def;
c.role.hp -= t;
return "【鸮使用「寸手」，你损失" + t + "点生命，触发连击！使用「苍」，鸮恢复" + e + "点生命！】";
},
defSkill: void 0,
winEvent: function() {
c.publicVar2[15] += 1;
return "大鸟飞去，只留惊愕的路人和你在原地。";
},
lostEvent: function() {
c.money = 0;
return "你损失全部的金钱！！！";
}
},
110: {
name: "陈当<丐帮>",
lv: 199,
hp: 62222,
maxHp: 62222,
att: 4050,
def: 2000,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 1,
getAtt: 1,
drop: [],
des: "“别来挡道！！”",
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
return "“大，大侠饶命！”";
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
return "你损失一半的银两！";
}
},
111: {
name: "鸮（稀有魂兽）",
lv: 100,
hp: 246000,
maxHp: 246000,
att: 1000,
def: 1000,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 3,
achieve: 1,
getAtt: 1,
drop: [ [100, 14, 30, 1] ],
des: "“怎么又是你！”",
skill: function() {
var e = 1000 + o.def;
c.role.hp -= e;
return "【鸮使用「穿透」，你损失" + e + "点生命！】";
},
defSkill: function() {
var e = parseInt(.15 * (o.maxHp - c.role.hp) + 50);
c.role.hp += e;
return "【路人对你使用「协助」，你恢复" + e + "点生命！】";
},
winEvent: function() {
c.publicVar2[15] += 1;
return "魂兽终于死去，但却寻不到一点魂精！";
},
lostEvent: function() {
return "“大鸟飞去，只留下半死不活的你”";
}
},
112: {
name: "半道青（混混）<逍遥>",
lv: 100,
hp: 51999,
maxHp: 51999,
att: 1000,
def: 499,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 3,
achieve: 1,
getAtt: 1,
drop: [ [100, 11, 100, 1] ],
des: "“敢碍本大爷的事？”",
skill: function() {
var e = parseInt(9999 - .5 * o.def);
if (4 == this.publicVar) {
var t = 3 * e;
c.role.hp -= t;
return "【" + this.name + "使用「剥皮剔骨」，你受到" + t + "点生命！】";
}
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= parseInt(.05 * o.def);
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= parseInt(.05 * o.att);
this.publicVar += 1;
var n = parseInt(49 * this.publicVar);
c.role.hp -= e + n;
return "【" + this.name + "使用「剔骨放血」你受到" + e + "点伤害，附加" + n + "流血，攻防降低5%！】";
},
defSkill: function() {
var t = e("scr_public"), n = parseInt(.6 * (t.role.att() - t.role.def()));
if (100 * Math.random() < 35) {
e("scr_data").role.hp -= n;
return "【半道青使用「剑滑背」，你损失" + n + "点生命！】";
}
return "";
},
winEvent: function() {
if (0 == c.publicVar2[25]) {
return "获得100官令！";
}
return "";
},
lostEvent: function() {
return "“就这点实力还敢出来造次？？”";
}
},
113: {
name: "半道青（混混）<逍遥>",
lv: 100,
hp: 51999,
maxHp: 51999,
att: 1000,
def: 499,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 3,
achieve: 1,
getAtt: 1,
drop: [[100, 11, 50, 1]],
des: "“敢碍本大爷的事？”",
skill: function () {
var e = parseInt(9999 - .5 * o.def);
if (4 == this.publicVar) {
var t = 3 * e;
c.role.hp -= t;
return "【" + this.name + "使用「剥皮剔骨」，你受到" + t + "点生命！】";
}
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= parseInt(.05 * o.def);
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= parseInt(.05 * o.att);
this.publicVar += 1;
var n = parseInt(49 * this.publicVar);
c.role.hp -= e + n;
return "【" + this.name + "使用「剔骨放血」你受到" + e + "点伤害，附加" + n + "流血，攻防降低5%！】";
},
defSkill: function () {
var t = e("scr_public"), n = parseInt(.6 * (t.role.att() - t.role.def()));
if (100 * Math.random() < 35) {
e("scr_data").role.hp -= n;
return "【半道青使用「剑滑背」，你损失" + n + "点生命！】";
}
return "";
},
winEvent: function () {
if (0 == c.publicVar2[25]) {
return "获得100官令！";
}
return "";
},
lostEvent: function () {
return "“就这点实力还敢出来造次？？”";
}
},
201: {
name: "桑晴<\五毒宗之祖/>（传说）",
lv: 1000,
hp: 100000,
maxHp: 100000,
att: 500,
def: 1000,
publicVar: 0,
escapeRate: 100,
enemyEscapeRate: 0,
lostHealth: 0,
achieve: 1,
getAtt: 1,
drop: [ [ 100, 11, 100, 1 ], [ 100, 2, 5000, 1 ] ],
des: "“至为纯粹的毒液！翻涌！”",
skill: function() {
var t = Math.max(500 + 0.1 * o.att, 0);
this.publicVar += 1;
var n = t * this.publicVar;
e("scr_data").role.hp -= n;
return "【纯粹之毒：每回合损失" + n + "点生命（" + this.publicVar + "层）】";
},
defSkill: void 0,
winEvent: function() {
e("scr_data").choice[6] += 1;
e("scr_data").Shengwang += 500;
return "“水至清则无鱼。。。”";
},
lostEvent: void 0
},
202: {
name: "混沌.雪豹",
lv: 25,
hp: 8500,
maxHp: 8500,
att: 800,
def: 200,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 1,
getAtt: 1,
drop: [ [100, 11, 10, 1] ],
des: "",
skill: function() {
var t = e("scr_data"), n = parseInt(Math.max(.2 * this.hp - o.def, 0));
t.role.hp -= n;
return "【" + this.name + "使用「咆哮」，你受到" + n + "点伤害】";
},
defSkillfunction: function() {
var t = e("scr_public"), n = t.role.att() - t.role.def();
if (100 * Math.random() < 30) {
e("scr_data").role.hp -= n;
return "【" + this.name + "使用「反震」，你损失" + n + "点生命！】";
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
name: "混沌.雪兔",
lv: 45,
hp: 15000,
maxHp: 15000,
att: 1000,
def: 60,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 1,
getAtt: 1,
drop: [ [100, 11, 10, 1] ],
des: "“请你吃好吃的！”",
skill: function() {
var t = e("scr_data");
if (100 * Math.random() < 70) return "【雪兔使用「美食赠礼1」，你连连拒绝！】";
var n = 699 - o.def;
t.role.hp += n;
return "【雪兔使用「美食赠礼1」，你吃了下去，感觉还行，你回复" + n + "点生命】";
},
defSkill: function() {
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] += 4000;
return "【雪兔使用「美食赠礼2」，好吃诶！你增加4000点攻击】";
},
winEvent: function() {
e("scr_data").choice[6] += 1;
return "";
},
lostEvent: void 0
},
204: {
name: "纯粹.雪兔",
lv: 600,
hp: 21000,
maxHp: 21000,
att: 3100,
def: 0,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 1,
getAtt: 1,
drop: [ [100, 11, 10, 1] ],
des: "“嗨嗨嗨，来啦。”",
skill: function() {
if (100 * Math.random() < 50) {
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= 2000;
return "【雪兔使用「美食赠礼1」，你降低2000点防御】";
}
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= 4000;
return "【雪兔使用「美食赠礼2」，你降低4000点攻击】";
},
defSkill: function() {
if (100 * Math.random() < Math.min(20 + 5 * this.publicVar, 40)) {
var t = parseInt(.5 * o.att);
e("scr_data").role.hp -= t;
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 99999;
return "【" + this.name + "触发「格挡」「反弹」，你减少" + t + "点生命！】";
}
return "";
},
winEvent: function() {
var t = e("scr_data");
t.choice[6] += 1;
if (0 == t.skillLv[18]) {
t.skillLv[18] = 1;
t.itemNum[2] += 2000;
return "";
}
return "";
},
lostEvent: void 0
},
205: {
name: "宋雨柔<\玉女阁之祖/>（传说）",
lv: 1000,
hp: 90000,
maxHp: 90000,
att: 1500,
def: 500,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 1,
getAtt: 1,
drop: [ [100, 11, 100, 1], [100, 2, 5000, 1] ],
des: "“静待佳人 ”",
skill: function() {
var t = e("scr_data"), n = 100 * Math.random();
if (n < 30) {
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= 10000;
t.role.hp += 50000;
return "【宋雨柔使用「天女散花第一式」，你失去10000点攻击回复50000点生命】";
}
if (n >= 30 && n < 70) {
t.role.hp += 50000;
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= 10000;
return "【宋雨柔使用「天女散花第二式」，你失去10000点防御回复50000点生命】";
}
if (n >= 70) {
var a = parseInt(10 * (5000 - o.def));
t.role.hp -= a;
return "【宋雨柔使用「天女散花第三式」——绝后一击！你损失" + a + "点生命！】";
}
},
defSkillfunction: function() {
this.hp += 50000;
return "【宋雨柔使用「天女散花第四式」，回复50000点生命】";
},
winEvent: function() {
e("scr_data").choice[6] += 1;
e("scr_data").Shengwang += 500;
return "“身法有限，毅力无限”";
},
lostEvent: void 0
},
206: {
name: "纯粹.芝士雪豹",
lv: 1000,
hp: 12000,
maxHp: 12000,
att: 1360,
def: 140,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [100, 11, 10, 1] ],
des: "“喵？”",
skill: function() {
var t = e("scr_data"), n = 100 * Math.random();
this.publicVar += 1;
if (n < Math.min(20 + 4 * this.publicVar, 50)) {
var a = parseInt(1.5 * this.att - o.def);
t.role.hp -= a;
return "【" + this.name + "使用「血汗香甜」，你损失" + a + "点生命！】";
}
return "";
},
defSkill: function() {
if (100 * Math.random() < Math.min(20 + 4 * this.publicVar, 50)) {
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 99999;
return "【" + this.name + "躲避了你的攻击！】";
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
name: "浩瀚.芝士雪豹",
lv: 1000,
hp: 15155,
maxHp: 15155,
att: 2070,
def: 180,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [100, 11, 10, 1] ],
des: "“喵喵喵？”",
skill: function() {
this.publicVa += 1;
var e = this.att, t = parseInt(.1 * this.att * this.publicVar);
c.role.hp -= e + t;
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= parseInt(.05 * o.def);
return "【" + this.name + "使用「血汗香甜」你受到" + e + "点伤害，附加" + t + "流血，防御降低5%！】";
},
defSkill: function() {
this.att += parseInt(.05 * this.att);
return "【" + this.name + "使用「嗷嗷嗷嗷」，" + this.name + "攻击强化！】";
},
winEvent: function() {
c.choice[6] += 1;
return "";
},
lostEvent: void 0
},
209: {
name: "中村道也<\伊贺谷之祖/>（传说）",
lv: 1000,
hp: 80000,
maxHp: 80000,
att: 1500,
def: 500,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [100, 11, 100, 1], [100, 2, 5000, 1] ],
des: "“踪迹，影！”",
skill: function() {
if (100 * Math.random() < 50) {
var e = parseInt(.5 * c.role.hp);
c.role.hp -= e;
return "【" + this.name + "使用「三村苍茫」！你损失" + e + "点生命(当前生命的50%)！】";
}
e = parseInt(.5 * (o.maxHp - c.role.hp));
c.role.hp -= e;
return "【" + this.name + "使用「四野苍茫」！你损失" + e + "点生命(已损失生命的50%)！】";
},
defSkill: function() {
if (100 * Math.random() < 30 + 10 * this.publicVar) {
this.publicVar += 1;
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 99999;
return "【" + this.name + "闪避了你的攻击！并且下次闪避概率提升！】";
}
return "“终究是逃不过光明。。”";
},
winEvent: function() {
var t = e("scr_data");
t.choice[6] += 1;
t.randomEvent[3] += 1;
if (0 == t.skillLv[22]) {
t.skillLv[22] = 1;
t.itemNum[2] += 500;
e("scr_data").Shengwang += 500;
return "【终究还是。。棋差一着。。】";
}
return "";
},
lostEvent: void 0
},
210: {
name: "王有志<少林>（传说）",
lv: 500,
hp: 400000,
maxHp: 400000,
att: 500,
def: 4000,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [100, 11, 100, 1], [100, 2, 2500, 1] ],
des: "坚如磐石",
skill: function() {
this.def += parseInt(.1 * this.def);
return "【" + this.name + "使用「安如磐石」提高10%的防御】";
},
defSkill: function() {
if (this.publicVar < 8) {
var e = parseInt(this.def);
c.role.hp -= e;
return "【" + this.name + "使用「返拳」！你受到" + e + "点反弹伤害！】";
}
c.role.hp -= 9999999;
return "【「#献祭#返拳」造成9999999点真实伤害！】";
},
winEvent: function() {
c.choice[6] += 1;
return "“磐石也有碎裂的那一天”";
},
lostEvent: function() {
return "“坚如磐石”";
}
},
211: {
name: "昊元明<\少林寺之祖/>（传说）",
lv: 1000,
hp: 600000,
maxHp: 600000,
att: 1000,
def: 5000,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [100, 11, 100, 1], [100, 2, 5000, 1] ],
des: "“你果然有点东西”\n场地绝学「无坚不摧」：对于防御低于自身的目标造成10倍伤害",
skill: function() {
if (o.def < this.def) {
var e = 10 * (this.def - o.def);
c.role.hp -= e;
return "【昊元明使用「无影掌.天」对你造成" + e + "点伤害】";
}
this.def += parseInt(.3 * this.def);
return "【昊元明使用「道.天」防御增加30%】";
},
defSkill: function() {
if (100 * Math.random() < Math.min(20 + 5 * this.publicVar, 100)) {
var e = parseInt(o.att) * 10;
c.role.hp -= e;
return "【昊元明使用「返拳.天」，你受到" + e + "点反弹伤害！（你攻击的1000%）】";
}
this.publicVar += 1;
return "【「返拳.天」触发几率提高！】";
},
winEvent: function() {
c.choice[6] += 1;
c.Shengwang += 500;
return "";
},
lostEvent: void 0
},
213: {
name: "藏天傲<\雪山派之祖/>（传说）",
lv: 1000,
hp: 100000,
maxHp: 100000,
att: 500,
def: 2000,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [[100, 11, 100, 1], [100, 2, 5000, 1] ],
des: "“天下藏风雪。”",
skill: function() {
if (this.publicVar % 3 == 0) return "【藏天傲使用「血汗香甜」，你被一脚剁飞啦！】";
if (this.publicVar % 3 == 1) {
var e = 4 * this.att;
c.role.hp -= e;
return "【藏天傲使用「对空一击」，你损失" + e + "点生命！】";
}
if (this.publicVar % 3 == 2) {
this.att += parseInt(.4 * this.att);
this.hp += parseInt(.3 * this.maxHp);
return "【藏天傲使用「义眼订正」，藏天傲生命恢复30%，攻击提高40%！】";
}
this.publicVar += 1;
},
defSkill: void 0,
winEvent: function() {
c.choice[6] += 1;
c.Shengwang += 500;
return "";
},
lostEvent: void 0
},
214: {
name: "赵存明<\太极门之祖/>（传说）",
lv: 1000,
hp: 140000,
maxHp: 140000,
att: 1400,
def: 1400,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [100, 11, 100, 1], [100, 2, 5000, 1] ],
des: "“大道通青天”\n场地绝学「调和」:如果对方生命百分比高于自身，则造成3倍无视防御的伤害！并恢复自身10%生命",
skill: function() {
if (c.role.hp / o.maxHp / (this.hp / this.maxHp) > 1) {
var e = 3 * this.att;
c.role.hp -= e;
this.hp += parseInt(.1 * this.maxHp);
this.publicVar -= 3;
return "【赵存明使用「#献祭#冲拳」，造成" + e + "点伤害！自身恢复10%生命！韵减少3点】";
}
if (100 * Math.random() < Math.min(30 + 5 * this.publicVar, 100)) {
e = parseInt(3 * this.att);
c.role.hp -= e;
this.publicVar -= 1;
return "【赵存明使用「通天流」暴击！，造成" + e + "点伤害！韵减少1点】";
}
e = this.att - o.def;
c.role.hp -= e;
this.hp += parseInt(.5 * this.maxHp);
this.publicVar += 2;
return "【赵存明使用「通天流」，造成" + e + "点伤害，并获得2点韵（下次暴击率提高！）】";
},
defSkill: function() {
if (100 * Math.random() < Math.min(30 + 5 * this.publicVar, 60)) {
this.att += parseInt(.5 * this.att);
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 999999;
return "【赵存明使用「三天苍」，免疫伤害，攻击增加50%，！】";
}
this.publicVar += 2;
return "【赵存明获得2点韵（下次「三天苍」触发几率提高！）】";
},
winEvent: function() {
c.choice[6] += 1;
c.Shengwang += 500;
return "";
},
lostEvent: void 0
},
215: {
name: "晓风<\流浪日记之祖/>（滑稽）",
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
drop: [[100, 11, 100, 1], [100, 2, 5000, 1] ],
des: "",
skill: void 0,
defSkill: function() {
var e = [ "「对于国产游戏，」”", "「我始终坚信，」", "「什么样的环境孕育出什么样的作品。」", "「那些嘲讽国产游戏的人，」", "「本质上是在嘲讽自己————你低估了自己的力量。」”", "「国产游戏的未来，」", "「在你的手中，」", "「而不是开发商或者平台...」", "「一起共勉吧。晓风 2017.10.16」" ], t = "";
"undefined" != typeof e[this.publicVar] && (t = e[this.publicVar]);
this.publicVar += 1;
this.def -= 200;
return t;
},
winEvent: function() {
c.choice[6] += 1;
c.Shengwang += 500;
return "“再会吧~朋友...”";
},
lostEvent: void 0
},
401: {
name: "守护者<金>",
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
des: "“速速退去！”",
skill: function() {
var e = parseInt(this.att - .3 * o.def + this.publicVar);
c.role.hp -= e;
return "【" + this.name + "使用「金之刚」！你损失" + e + "点生命！】";
},
defSkill: function() {
this.publicVar += 20;
return "【" + this.name + "使用「金之利」！你降低20点防御】";
},
winEvent: function() {
i.save();
return "“可惜。。。啊”";
},
lostEvent: function() {
c.publicVar3[2] = 1;
c.ifFollow[0] = 0;
c.ifFollow[1] = 0;
c.publicVar[13] = 1;
i.init();
return c.ifFollow[0] > 0 ? "【你独自离开...】" : "【你独自离开...】";
}
},
402: {
name: "守护者<木>",
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
des: "“一动不动，木头人”",
skill: function() {
var e = 100 * Math.random(), t = parseInt(this.att - .3 * o.def);
if (e < 30 + 5 * this.publicVar) {
t *= 2;
c.role.hp -= t;
return "【" + this.name + "使用「木之实」，你损失" + t + "点生命！】";
}
this.publicVar += 5;
c.role.hp -= t;
return "【" + this.name + "使用「木之强」，你损失" + t + "点生命！】";
},
defSkill: function() {
if (100 * Math.random() < 30) {
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 99999;
return "【" + this.name + "使用「木之韧」！】";
}
return "";
},
winEvent: function() {
i.save();
return "“可惜啊啊啊啊啊啊啊~”";
},
lostEvent: function() {
c.publicVar3[2] = 1;
c.ifFollow[0] = 0;
c.ifFollow[1] = 0;
c.publicVar[13] = 1;
i.init();
return c.ifFollow[0] > 0 ? "【你独自离开...】" : "【你独自离开...】";
}
},
403: {
name: "守护者<水>",
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
des: "“水惊雁！”",
skill: function() {
var e = parseInt(this.att - .3 * o.def);
c.role.hp -= e;
this.hp += e;
return "【" + this.name + "使用「水之活」，你损失" + e + "点生命，守护者<水>恢复" + e + "点生命！】";
},
defSkill: function() {
this.att += 1000;
return "【" + this.name + "使用「水之柔」，攻击+1000！】";
},
winEvent: function() {
c.itemNum2[12] += 10;
i.save();
return "【奖励：美酒*10】“可惜啊。。。”";
},
lostEvent: function() {
c.publicVar3[2] = 1;
c.ifFollow[0] = 0;
c.ifFollow[1] = 0;
c.publicVar[13] = 1;
i.init();
return c.ifFollow[0] > 0 ? "【你独自离开...】" : "【你独自离开...】";
}
},
404: {
name: "守护者<火>",
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
des: "“火！”",
skill: function() {
var e = parseInt(this.att - .3 * o.def), t = Math.min(20 + 2 * this.publicVar, 60);
if (100 * Math.random() < t) {
e *= 5;
c.role.hp -= e;
return "【" + this.name + "使用「火之炽」！击中！你损失" + e + "点生命！】";
}
return "【" + this.name + "使用「火之炽」，但是未命中！】";
},
defSkill: function() {
this.publicVar += 1;
this.att += 1500;
return "【" + this.name + "使用「火之意志(滑稽」，攻击+1500，且「火之炽」命中率提高！】";
},
winEvent: function() {
i.save();
return "“怎么会这样。。。。”";
},
lostEvent: function() {
c.publicVar3[2] = 1;
c.ifFollow[0] = 0;
c.ifFollow[1] = 0;
c.publicVar[13] = 1;
i.init();
return c.ifFollow[0] > 0 ? "【你独自离开...】" : "【你独自离开...】";
}
},
405: {
name: "守护者<土>",
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
des: "“土鳖在此！”",
skill: function() {
var e = this.att + o.def, t = parseInt(.015 * (this.maxHp - this.hp));
c.role.hp -= e;
this.hp += t;
return "【守护者<土>使用「土之纯」，对你造成" + e + "点伤害，自身恢复" + t + "点生命】";
},
defSkill: function() {
if (100 * Math.random() < Math.min(3 * this.publicVar + 20, 60)) {
var t = parseInt(.3 * o.att);
e("scr_data").role.hp -= t;
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 999999;
return "【" + this.name + "使用「土之厚」「反击」，你减少" + t + "点生命！】";
}
return "【守护者<土>下次格挡概率增加！】";
},
winEvent: function() {
i.save();
return "“怎么会这样子。。。”";
},
lostEvent: function() {
c.publicVar3[2] = 1;
c.ifFollow[0] = 0;
c.ifFollow[1] = 0;
c.publicVar[13] = 1;
i.init();
return c.ifFollow[0] > 0 ? "【你独自离开...】" : "【你独自离开...】";
}
},
406: {
name: "聪明溪{（|<盘桓>|）}（最终BOSS）",
lv: "+ ∞",
hp: 999999,
maxHp: 999999,
att: 1000,
def: 1000,
publicVar: 0,
escapeRate: -9567,
enemyEscapeRate: -9999,
lostHealth: 5,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 12, 1, 1 ] ],
des: "“那就让你知道什么叫做毁灭一切的力量！”\n传说.场地绝学「大道无为」发动：获取大道之力，随着时间的增加而变强",
skill: function() {
var e = 1e4 + this.enemyEscapeRate;
this.publicVar += 1;
if (this.publicVar % 7 == 0) {
var t = Math.max(parseInt(.04 * this.def * e + 999 - o.def), 1);
c.role.hp -= t + c.dkmoney;
this.hp += t;
this.enemyEscapeRate += 1;
return "【聪明溪使用「纯粹天流」你受到" + t + "点伤害！聪明溪蓄力+1，恢复" + t + "点生命！（回复量与聪明溪蓄力值/角色防御有关）】";
}
if (this.publicVar % 4 == 0) {
this.enemyEscapeRate += 4;
return "【聪明溪使用「无垠心海」，蓄力+4！】";
}
var n = Math.max(parseInt(.01 * this.def * e + 499 - .5 * o.def), 0);
c.role.hp -= n;
return "【聪明溪「无味真火」你受到" + n + "点灼烧伤害（伤害与聪明溪蓄力值/角色防御有关）！】";
},
defSkill: function() {
this.publicVar < 1 && (this.publicVar += 1);
var t = 1e4 + this.enemyEscapeRate;
if (this.publicVar % 11 == 0) {
var n = parseInt(.25 * (this.maxHp - this.hp));
this.hp += n;
return "【聪明溪燃烧阳寿瞬间得到新生！恢复已损失生命的25%（" + n + "点）】";
}
if (this.publicVar % 5 == 0) {
var a = parseInt(.2 * o.att + .2 * this.def);
e("scr_data").role.hp -= a;
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 99999;
return "【聪明溪使用「四游八方」！你受到" + a + "点伤害！】";
}
if (this.publicVar % 3 == 0) {
var i = parseInt(.3 * this.def);
this.def += i;
return "【聪明溪使用「钢龙铁壁」！防御增加30%（" + i + "点）】";
}
if (100 * Math.random() < Math.min(30 + 2 * t, 60)) {
this.enemyEscapeRate += 1;
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 999999;
return "【聪明溪使用「从龙不破」，免疫伤害，蓄力+1！（触发几率与蓄力值有关）】";
}
var c = 200 * t + 20;
this.def += c;
return "【聪明溪启动「金龙缠身」，防御+" + c + "（增加量与聪明溪当前充能量有关）！】";
},
winEvent: function() {
return "【你已战胜最终BOSS，游戏即将结束，可以看看还有啥没做完的~】";
},
lostEvent: function() {
c.publicVar3[2] = 1;
c.ifFollow[0] = 0;
c.ifFollow[1] = 0;
c.ifFollow[2] = 0;
c.ifFollow[3] = 0;
c.ifFollow[4] = 0;
c.publicVar[13] = 1;
i.init();
return c.ifFollow[0] > 0 ? "【你再一次失去了一切】" : "【你再一次失去了一切】";
}
},
501: {
name: "陈刚<独明教>",
lv: 80,
hp: 268500,
maxHp: 268500,
att: 1000,
def: 1870,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [],
des: "“天圣主啊，保佑我吧！”",
skill: function() {
this.publicVar += 1;
if (this.publicVar <= 5) {
c.role.hp -= 9999;
return "【陈刚使用「祈祷」，你失去9999点生命！】";
}
this.enemyEscapeRate += 10;
return "【陈刚有些动摇，准备要逃跑了！】";
},
defSkill: void 0,
winEvent: function() {
c.chioce2[7] += 1;
c.itemNum2[1] += 20;
return "【陈刚应声倒地，你在他尸体上找到了「伤药」*20！】";
},
lostEvent: function () {
c.ifFollow[0] = 0;
return "【你落荒而逃。。。】";
}
},
502: {
name: "李秀<独明教>",
lv: 100,
hp: 334500,
maxHp: 334500,
att: 1000,
def: 2340,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [],
des: "“对主不敬！”",
skill: function() {
this.publicVar += 1;
if (this.publicVar <= 4) {
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= 3000;
return "【李秀使用「祈祷」，你减少3000点防御！】";
}
this.enemyEscapeRate += 100;
return "【李秀有些动摇，准备要逃跑了！】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.chioce2[7] += 1;
t.itemNum2[20] += 10;
t.itemNum2[21] += 10;
t.itemNum2[22] += 10;
return "【李秀在最后时刻祈祷成功，身体爆炸，你捡到「门帮三件套」*10！】";
},
lostEvent: function () {
c.money = 0;
c.ifFollow[0] = 0;
return "【“你失去所有钱。。。。】";
}
},
503: {
name: "王力<独明教>",
lv: 130,
hp: 433500,
maxHp: 433500,
att: 1000,
def: 3000,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [],
des: "“不要小瞧我啊！~”",
skill: function() {
this.publicVar += 1;
if (this.publicVar <= 3) {
c.money += 1;
return "【王力想打发走你，给了你1两~】";
}
c.role.hp -= 99999999;
return "【“还不走？”】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.money -= this.publicVar;
t.chioce2[7] += 1;
t.money += 200;
return "【王力倒下，你在他身上找到了很多钱。。。获得200银两！】";
},
lostEvent: function() {
c.money = 0;
c.ifFollow[0] = 0;
return "【你失去了所有钱。。。】";
}
},
504: {
name: "郑玲<独明教>",
lv: 170,
hp: 565000,
maxHp: 565000,
att: 1000,
def: 5000,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [],
des: "“让你看看我的厉害！”",
skill: function() {
var e = 100 * Math.random(), t = 99999;
if (e < 40) {
this.hp -= t;
return "【" + this.name + "使用「主的背弃」，反弹，" + this.name + "受到" + t + "点伤害！】";
}
if (e < 60) {
this.hp += 2 * t;
return "【" + this.name + "使用「主的加护」，恢复" + 2 * t + "点生命！】";
}
t = parseInt(t - o.def);
c.role.hp -= t;
return "【" + this.name + "使用「主的拾举」，你受到" + t + "点伤害！】";
},
defSkill: void 0,
winEvent: function() {
var e = Math.min(parseInt(.05 * c.choice[5] + 5), 100);
c.role.def += e;
c.chioce2[7] += 1;
return "【郑玲倒地后，似乎有天神加护，防御永久增加" + e + "（与白莲巧好感有关）！】";
},
lostEvent: function () {
c.money = 0;
c.ifFollow[0] = 0;
return "【“你失去所有钱。。。。】";
}
},
505: {
name: "张大海<独明教>",
lv: 220,
hp: 730000,
maxHp: 730000,
att: 1000,
def: 5100,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [],
des: "“别想再前进一步！”",
skill: void 0,
defSkill: function() {
var e = parseInt(.3 * c.money);
this.att += 1000;
if (this.att <= 3000) {
this.publicVar += e;
return "【张大海正在蓄力！】";
}
if (this.publicVar < 20) {
c.role.hp -= 99999999;
return "【“哈哈哈哈哈，渣渣，不堪一击！”】";
}
this.hp -= 99999;
return "【“哈哈哈哈哈”】";
},
winEvent: function() {
var e = Math.min(parseInt(.5 * c.choice[5] + 50), 5000);
c.role.maxHp += e;
c.chioce2[7] += 1;
return "【张大海倒地后，似乎有天神加护，生命永久增加" + e + "（与白莲巧好感有关）！】";
},
lostEvent: function () {
c.money = 0;
c.ifFollow[0] = 0;
return "【“你失去所有钱。。。。】";
}
},
506: {
name: "皇甫高云<独明教>",
lv: 300,
hp: 999999,
maxHp: 999999,
att: 1000,
def: 5000,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [],
des: "“自寻死路！”",
skill: function() {
if (4 == this.publicVar) {
var e = this.att * (10 + 10 * this.publicVar);
return "【" + this.name + "使用「天道.王之抹杀」，你受到" + e + "点生命！】";
}
this.publicVar += 1;
var t = parseInt(.5 * this.att);
c.role.hp -= t;
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= parseInt(.5 * o.def);
return "【" + this.name + "使用「天道.圣者无敌」你受到" + t + "点伤害，防御降低50%！】";
},
defSkill: function() {
this.att += parseInt(.5 * this.att);
return "【" + this.name + "使用「天道.天使加护」，" + this.name + "攻击大幅度强化！】";
},
winEvent: function() {
var e = Math.min(parseInt(.1 * c.choice[5] + 10), 1000);
c.role.att += e;
c.chioce2[7] += 1;
c.Gensui[0] = 1;
return "【皇甫高云倒地后，似乎有天神加护，攻击永久增加" + e + "（与白莲巧好感有关）！】";
},
lostEvent: function () {
c.money = 0;
c.ifFollow[0] = 0;
return "【“你失去所有钱。。。。】";
}
},
600: {
name: "毛贼",
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
return "【你被吸取" + t + "点生命！】";
},
defSkill: void 0,
winEvent: function() {
c.publicVar[10] += 1;
return "";
},
lostEvent: void 0
},
601: {
name: "精分患者",
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
return "【你被吸取" + t + "点生命！" + this.name + "攻击+10】";
},
defSkill: void 0,
winEvent: function() {
c.publicVar[10] += 1;
return "";
},
lostEvent: void 0
},
602: {
name: "盯谁谁怀孕大妈",
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
return "【你被吸取" + t + "点生命！" + this.name + "吸血能力强化！】";
},
defSkill: void 0,
winEvent: function() {
c.publicVar[10] += 1;
return "";
},
lostEvent: void 0
},
603: {
name: "阿龙",
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
return "【你被吸取" + t + "点生命！" + this.name + "防御+30】";
},
defSkill: void 0,
winEvent: function() {
c.publicVar[10] += 1;
return "";
},
lostEvent: void 0
},
700: {
name: "魂兽<羊>",
lv: 10,
hp: 3800,
maxHp: 3800,
att: 100,
def: 0,
publicVar: 0,
escapeRate: 50,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 2, 25, 1 ], [ 100, 4, 5, 1 ] ],
des: "咩！",
skill: function() {
var t = Math.max(20 + o.def, 0);
e("scr_data").role.hp -= t;
this.hp += 2 * t;
return "【你被吸取" + t + "点生命！魂兽血量双倍恢复！】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.kills[0] += 1;
t.itemNum[14] += 1;          
t.randomEvent[4] += 1;
return "【你已消灭" + t.kills[0] + "只魂兽】";
},
lostEvent: void 0
},
701: {
name: "魂兽<犬>",
lv: 20,
hp: 7100,
maxHp: 7100,
att: 100,
def: 0,
publicVar: 0,
escapeRate: 40,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 2, 25, 1 ], [ 100, 4, 2, 1 ] ],
des: "汪汪！",
skill: function() {
var t = Math.max(10 + o.def, 0);
this.att += t;
e("scr_data").role.hp -= t;
this.hp += t;
return "【你被吸取" + t + "点生命！" + this.name + "攻击+"+ t + "】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.kills[0] += 1;
t.itemNum[14] += 2; 
t.randomEvent[4] += 1;
return "【你已消灭" + t.kills[0] + "只魂兽】";
},
lostEvent: void 0
},
702: {
name: "魂兽<鹰>",
lv: 35,
hp: 12000,
maxHp: 12000,
att: 0,
def: 0,
publicVar: 0,
escapeRate: 100,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 2, 30, 1 ], [ 100, 9, 3, 1 ] ],
des: "sing！",
skill: function() {
var t = Math.max(120 + 20 * this.publicVar + o.def, 0);
e("scr_data").role.hp -= t;
this.hp += t;
return "【你被吸取" + t + "点生命！" + this.name + "吸血能力强化！】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.kills[0] += 1;
t.itemNum[14] += 3; 
t.randomEvent[4] += 1;
return "【你已消灭" + t.kills[0] + "只魂兽】";
},
lostEvent: void 0
},
703: {
name: "魂兽<狼>",
lv: 50,
hp: 16655,
maxHp: 16655,
att: 0,
def: 0,
publicVar: 0,
escapeRate: 30,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 1,
getAtt: 1,
drop: [ [ 100, 2, 40, 1 ], [ 100, 9, 4, 1 ] ],
des: "嗷呜！",
skill: function() {
var t = Math.max(20 + o.def, 0);
this.def += t;
e("scr_data").role.hp -= t;
this.hp += t;
return "【你被吸取" + t + "点生命！" + this.name + "防御+"+ t +"】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.kills[0] += 1;
t.itemNum[14] += 4; 
t.randomEvent[4] += 1;
return "【你已消灭" + t.kills[0] + "只魂兽】";
},
lostEvent: void 0
},
704: {
name: "魂兽<狈>",
lv: 70,
hp: 24655,
maxHp: 24655,
att: 0,
def: 0,
publicVar: 0,
escapeRate: 25,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 1,
getAtt: 1,
drop: [ [ 100, 2, 50, 1 ], [ 100, 9, 5, 1 ] ],
des: "呜嗷！",
skill: function() {
var t = parseInt(Math.max((200 + o.def) * (2 - this.hp / this.maxHp), 0));
e("scr_data").role.hp -= t;
this.hp += t;
return "【你被吸取" + t + "点生命！】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.kills[0] += 1;
t.itemNum[14] += 5; 
t.randomEvent[4] += 1;
return "【你已消灭" + t.kills[0] + "只魂兽】";
},
lostEvent: void 0
},
705: {
name: "魂兽<狐>",
lv: 90,
hp: 33333,
maxHp: 33333,
att: 0,
def: 0,
publicVar: 0,
escapeRate: 20,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 2,
getAtt: 1,
drop: [ [ 100, 2, 20, 1 ], [ 100, 9, 10, 1 ], [ 100, 15, 1, 1 ] ],
des: "呲呲！",
skill: function() {
var t = Math.max(520 + o.def, 0);
e("scr_data").role.hp -= t;
this.hp += t;
return "【你被吸取" + t + "点生命！】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.kills[0] += 1;
t.itemNum[14] += 1; 
return "【你已消灭" + t.kills[0] + "只魂兽】";
},
lostEvent: void 0
},
706: {
name: "魂兽<牛>",
lv: 29,
hp: 5999,
maxHp: 5999,
att: 0,
def: 0,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 0,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 4, 10, 1 ] ],
des: "哞！",
skill: function () {
var t = Math.max(200 + o.def, 0);
e("scr_data").role.hp += 200;
this.hp -= 200;
this.att += t;
e("scr_public").ifMaxHp();
return this.name + "在给你输送营养！你增加200点生命";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.kills[0] += 1;
t.itemNum[14] += 1; 
return "【" + this.name + "变成了一具干尸！你已消灭" + t.kills[0] + "只魂兽】";
},
lostEvent: void 0
},
800: {
name: "乔仁<丐帮>",
lv: 7,
hp: 9100,
maxHp: 9100,
att: 0,
def: 0,
publicVar: 0,
escapeRate: 100,
enemyEscapeRate: 0,
lostHealth: 0,
achieve: 0,
getAtt: 1,
drop: [],
des: "想见到帮主，先过了我这关!（从此开始将会失去大量银两，谨慎开战。）",
skill: function() {
var t = e("scr_data");
this.enemyEscapeRate += 20;
if (t.money > 0) {
t.money = 0;
this.publicVar += 1;
return "【你被偷走所有银两，乔仁起势移步】";
}
return "【“穷成这B样也敢出来混？”】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data"), n = this.publicVar + 5;
t.money += n;
t.randomEvent[3] += 1;
return "【获得" + n + "两！】【“你给我等着！”】";
},
lostEvent: void 0
},
801: {
name: "乔善<丐帮>",
lv: 16,
hp: 15750,
maxHp: 15750,
att: 0,
def: 0,
publicVar: 0,
escapeRate: 30,
enemyEscapeRate: 100,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 4, 3 ] ],
des: "先过了我这关再说！",
skill: function() {
var t = Math.max(2000 - o.def + 15 * this.publicVar, 0), n = e("scr_data");
this.publicVar += 1;
n.role.hp -= t;
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= 150;
return "【" + this.name + "使用「赤膊拳」，你受到" + t + "点伤害！你感觉喘呼吸困难！防御降低150点！】";
},
defSkill: void 0,
winEvent: function() {
e("scr_data").randomEvent[3] += 1;
return "";
},
lostEvent: void 0
},
802: {
name: "乔怜<丐帮>",
lv: 20,
hp: 27000,
maxHp: 27000,
att: 800,
def: 0,
publicVar: 0,
escapeRate: 30,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 6, 3 ] ],
des: "你小子还挺厉害的啊！",
skill: function() {
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= 800;
var t = e("scr_data"), n = Math.max(3000 , 5);
this.publicVar += 1;
var a = this.publicVar * n;
t.money -= this.publicVar;
t.role.hp -= a;
t.money < 0 && (t.money = 0);
return "【" + this.name + "使用「#悟道#赤膊拳」，你攻击减少800，生命减少" + a + "，金钱减少" + this.publicVar + "两】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.money += Math.min(this.publicVar, 10);
t.randomEvent[3] += 1;
return "【你抢回被偷的钱！】";
},
lostEvent: void 0
},
803: (n = {
name: "乔忠<丐帮>",
lv: 35,
hp: 31200,
maxHp: 31200,
att: 1500,
def: 36,
publicVar: 0,
escapeRate: 100,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 8, 3 ] ],
des: "识相点，把钱交出来！",
skill: function() {
var e = parseInt(.3 * o.maxHp);
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= 30;
return "【" + this.name + "使用「冲刺拳」，你的防御降低30点，生命减少" + e + "】";
},
defSkill: void 0,
winEvent: void 0
}, a(n, "winEvent", function() {
e("scr_data").randomEvent[3] += 1;
return "";
}), a(n, "lostEvent", function() {
var t = e("scr_data"), n = parseInt(Math.max(.1 * t.money, 0));
t.money -= n;
return "你行！(你损失10%的银两)";
}), n),
804: {
name: "乔星<丐帮>",
lv: 45,
hp: 41500,
maxHp: 41500,
att: 0,
def: 3000,
publicVar: 0,
escapeRate: 30,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 10, 3 ] ],
des: "还敢继续打？",
skill: function() {
this.publicVar += 1;
var t = 500 * this.publicVar;
e("scr_data").role.hp -= t;
return "【（丐帮）流血：每回合损失" + t + "点生命（" + this.publicVar + "层）】";
},
defSkill: void 0,
winEvent: function() {
e("scr_data").randomEvent[3] += 1;
return "";
},
lostEvent: void 0
},
805: {
name: "乔力<丐帮>（精英）",
lv: 60,
hp: 61999,
maxHp: 61999,
att: 3100,
def: 5000,
publicVar: 0,
escapeRate: 30,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 1,
getAtt: 2,
drop: [ [ 100, 99, 12, 3 ] ],
des: "在我的棍下，受死吧！",
skill: function() {
this.publicVar += 1;
var t = 1000 * this.publicVar;
e("scr_data").role.hp -= t;
return "【（丐帮）流血：每回合损失" + t + "点生命（" + this.publicVar + "层）】";
},
defSkill: void 0,
winEvent: function() {
e("scr_data").randomEvent[3] += 1;
return "";
},
lostEvent: void 0
},
806: {
name: "乔灵<丐帮>（传说级精英）",
lv: 80,
hp: 99700,
maxHp: 99700,
att: 0,
def: 6000,
publicVar: 0,
escapeRate: 30,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 2,
getAtt: 3,
drop: [ [ 100, 99, 15, 3 ], [ 100, 99, 15, 3 ], [ 100, 27, 1, 2 ] ],
des: "灭绝！",
skill: function() {
var t = e("scr_data");
this.publicVar += 1;
if (this.publicVar % 3 == 0) {
var n = 400 + 1000 * this.publicVar - o.def, a = 500 * this.publicVar;
t.role.hp -= n;
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= a;
return "【乔灵使用「#悟道#赤膊拳」，你损失" + n + "点生命，并降低" + a + "点攻击】";
}
t.role.hp += 200;
return "【乔灵使用「仁慈」，你恢复200点生命，降低100点防御】";
},
defSkill: function() {
this.hp += 200;
return "【乔灵有点小兴奋，恢复200点生命】";
},
winEvent: function() {
c.randomEvent[3] += 1;
return "";
},
lostEvent: function() {
var t = e("scr_data"), n = parseInt(Math.max(.15 * t.money, 0));
t.money = 0;
return "【你损失所有的钱！】";
}
},
807: {
name: "乔丰<丐帮>（稀有级BOSS）",
lv: 120,
hp: 199999,
maxHp: 199999,
att: 760,
def: 120,
publicVar: 0,
escapeRate: 20,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 3,
getAtt: 3,
drop: [ [ 100, 11, 100, 1 ] ],
des: "少侠你好，我是丐帮预位宗主乔丰。",
skill: function() {
var t = e("scr_data"), n = parseInt(Math.max(.25 * (this.maxHp - this.hp) - o.def + .01 * this.hp, 0)), a = parseInt(.3 * n);
this.hp += a;
t.role.hp -= n;
return "【乔丰使用「嗜血狂魔」，你受到" + n + "点伤害,乔丰恢复" + a + "点生命】";
},
defSkill: function() {
var t = e("scr_data");
this.publicVar += 1;
var n = 1000 * this.publicVar;
t.role.hp -= n;
return "【丐帮剧毒：每回合损失" + n + "点生命】";
},
winEvent: function() {
c.randomEvent[3] += 1;
return "果然还是你。。。技高一筹";
},
lostEvent: function() {
var t = e("scr_data"), n = parseInt(Math.max(.2 * t.money, 0));
t.money = 0;
return "【你损失所有的钱！】";
}
},
808: {
name: "乔丰<丐帮>（求教者）（史诗级BOSS）",
lv: 180,
hp: 259800,
maxHp: 259800,
att: 818,
def: 224,
publicVar: 0,
escapeRate: 10,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 3,
getAtt: 3,
drop: [ [ 100, 11, 100, 1 ] ],
des: "我是，不会认输的！",
skill: function() {
var t = e("scr_data"), n = parseInt(Math.max(.25 * (this.maxHp - this.hp) - o.def + .01 * this.hp, 0)), a = parseInt(.3 * n);
this.hp += a;
t.role.hp -= n;
return "【乔丰使用「嗜血狂魔」，你受到" + n + "点伤害,乔丰恢复" + a + "点生命】";
},
defSkill: function() {
var t = e("scr_data"), n = parseInt(.01 * this.att);
this.publicVar += 1;
var a = n * this.publicVar;
t.role.hp -= a;
return "【丐帮剧毒：每回合损失" + a + "点生命】";
},
winEvent: function() {
c.randomEvent[3] += 1;
return "“...不甘心...啊...”";
},
lostEvent: function() {
var t = e("scr_data"), n = parseInt(Math.max(.2 * t.money, 0));
t.money = 0;
return "【你损失所有的钱！】";
}
},
809: {
name: "乔丰<丐帮>（拯救者）（传说级BOSS）",
lv: 300,
hp: 309999,
maxHp: 309999,
att: 1000,
def: 300,
publicVar: 0,
escapeRate: 0,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 3,
getAtt: 3,
drop: [ [ 100, 11, 100, 1 ] ],
des: "丐帮荣耀，与我同在！",
skill: function() {
var t = e("scr_data"), n = parseInt(Math.max(.25 * (this.maxHp - this.hp) - o.def + .01 * this.hp, 0)), a = parseInt(.3 * n);
this.hp += a;
t.role.hp -= n;
return "【乔丰使用「嗜血狂魔」，你受到" + n + "点伤害,乔丰恢复" + a + "点生命】";
},
defSkill: function() {
var t = e("scr_data"), n = parseInt(.2 * this.att);
this.publicVar += 1;
var a = n * this.publicVar;
t.role.hp -= a;
return "【丐帮剧毒：每回合损失" + a + "点生命】";
},
winEvent: function() {
c.randomEvent[3] += 1;
return "我不能接受！";
},
lostEvent: function() {
var t = e("scr_data"), n = parseInt(Math.max(.2 * t.money, 0));
t.money = 0;
return "【你损失所有的钱！】";
}
},
881: {
name: "乔丰<丐帮>（历练者）（登峰造极）",
lv: 500,
hp: 400000,
maxHp: 400000,
att: 1000,
def: 350,
publicVar: 0,
escapeRate: -10,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 3,
getAtt: 3,
drop: [ [ 100, 11, 100, 1 ] ],
des: "绝不认输！",
skill: function() {
var t = e("scr_data"), n = parseInt(Math.max(.25 * (this.maxHp - this.hp) - o.def + .01 * this.hp, 0)), a = parseInt(.3 * n);
this.hp += a;
t.role.hp -= n;
return "【乔丰使用「嗜血狂魔」，你受到" + n + "点伤害,乔丰恢复" + a + "点生命】";
},
defSkill: function() {
var t = e("scr_data"), n = parseInt(.2 * this.att);
this.publicVar += 1;
var a = n * this.publicVar;
t.role.hp -= a;
return "【丐帮剧毒：每回合损失" + a + "点生命】";
},
winEvent: function() {
c.randomEvent[3] += 1;
return "..e..e.e..e..a..a";
},
lostEvent: function() {
var t = e("scr_data"), n = parseInt(Math.max(.2 * t.money, 0));
t.money = 0;
return "【你损失所有的钱！】";
}
},
882: {
name: "乔.丰<丐帮>（浩瀚传奇）",
lv: 999,
hp: 600000,
maxHp: 600000,
att: 1000,
def: 500,
publicVar: 0,
escapeRate: -20,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 3,
getAtt: 3,
drop: [ [ 100, 11, 150, 1 ] ],
des: "死！",
skill: function() {
var t = e("scr_data"), n = parseInt(Math.max(.25 * (this.maxHp - this.hp) - o.def + .01 * this.hp, 0)), a = parseInt(.3 * n);
this.hp += a;
t.role.hp -= n;
return "【乔.丰使用「嗜血狂魔」，你受到" + n + "点伤害,乔.丰恢复" + a + "点生命】";
},
defSkill: function() {
var t = e("scr_data"), n = parseInt(.2 * this.att);
this.publicVar += 1;
var a = n * this.publicVar;
t.role.hp -= a;
return "【丐帮剧毒：每回合损失" + a + "点生命】";
},
winEvent: function() {
return "无尽。。深渊";
},
lostEvent: function() {
var t = e("scr_data"), n = parseInt(Math.max(.2 * t.money, 0));
t.money = 0;
return "【你损失所有的钱！】";
}
},
810: {
name: "森<黄心道>",
lv: 5,
hp: 21500,
maxHp: 21500,
att: 100,
def: 0,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 0,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 1, 3 ] ],
des: "苍天已死，黄土当立。",
skill: function() {
var t = e("scr_data");
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= 1000;
this.enemyEscapeRate += 15;
if (t.money >= 1) {
t.money -= 1;
this.publicVar += 1;
return "【" + this.name + "使用「顺风挡」降低了你1000点攻击并使你失去了1银两】";
}
this.escapeRate += 100;
return "【你失去最后的金钱，夺回来！】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.money += this.publicVar;
t.randomEvent[10] += 1;
return "【你拿回" + this.publicVar + "银两】【我不会认输，绝对不会】";
},
lostEvent: void 0
},
811: {
name: "罗<黄心道>",
lv: 12,
hp: 44500,
maxHp: 44500,
att: 1000,
def: 9999,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 2, 3 ] ],
des: "苍天已死，黄土当立。",
skill: function() {
if (100 * Math.random() < 50) {
this.hp -= 10000;
return "【" + this.name + "使用「顺势踢」，使用失败，" + this.name + "受到10000点伤害！】";
}
e("scr_data").role.hp -= 20000;
return "【" + this.name + "使用「顺势踢」，你受到20000点伤害！】";
},
defSkill: void 0,
winEvent: function() {
e("scr_data").randomEvent[10] += 1;
return "【失误。。。了。】";
},
lostEvent: function() {
var t = e("scr_data"), n = parseInt(Math.max(.1 * t.money, 0));
t.money -= n;
return "【你失去所有十分之一的银两】";
}
},
812: {
name: "万<黄心道>",
lv: 20,
hp: 77500,
maxHp: 77500,
att: 0,
def: 0,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 3,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 22, 1, 2 ] ],
des: "苍天已死，黄土当立！",
skill: function() {
var t = 100 * Math.random(), n = 20 * this.publicVar;
this.publicVar += 1;
if (t < n) {
e("scr_data").role.hp -= 9999;
return "【 万 使用「裂空斩」你失去9999点生命】";
}
return "【" + this.name + "正在聚气】";
},
defSkill: function() {
var t = 100 * Math.random(), n = e("scr_public"), a = e("scr_data");
if (t <= 40) {
var i = 1000000 - o.def;
a.role.hp -= i;
return "【你被" + this.name + "卷入虚空，你损失" + i + "点生命！】";
}
if (t > 40 && t <= 60) {
a.money += 10;
return "【你捡到了从" + this.name + "口袋中掉落的10银两】";
}
if (t > 60) {
this.hp -= n.role.att();
this.att += 1000;
return "【 万 使用「噬心」主动接下你的技能，并学习从中获得攻击提升】";
}
},
winEvent: function() {
e("scr_data").randomEvent[10] += 1;
return "【技不如人。。。。。】";
},
lostEvent: function() {
return "【？就这啊不是吧，不是吧。】";
}
},
813: {
name: "象<黄心道>",
lv: 32,
hp: 115000,
maxHp: 115000,
att: 0,
def: 0,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 5, 3 ] ],
des: "苍天已死，黄土当立！",
skill: function() {
var t = Math.random(), n = Math.max(parseInt(400000 * t - o.def), 0);
e("scr_data").role.hp -= n;
return "【" + this.name + "使用「#献祭#撼心拳」，你受到" + n + "点伤害】";
},
defSkill: void 0,
winEvent: function() {
e("scr_data").randomEvent[10] += 1;
return "【你赢了，暂时的。】";
},
lostEvent: function() {
var t = e("scr_data"), n = parseInt(Math.max(.2 * t.money, 0));
t.money = 0;
return "【你失去了所有钱】";
}
},
814: {
name: "故<黄心道>",
lv: 46,
hp: 167000,
maxHp: 167000,
att: 0,
def: 99999,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 3,
drop: [ [ 100, 0, 6, 1 ] ],
des: "苍天已死！黄土当立！",
skill: function() {
var t = (233 - o.def) * (this.publicVar + 1), n = 233333 * (this.publicVar + 1);
e("scr_data").role.hp -= t;
this.hp -= n;
this.publicVar += 1;
return "【 故 使用「杀星巨鼎第一式」，你损失" + t + "点生命， 故 损失" + n + "点生命】";
},
defSkill: function() {
e("scr_data");
var t = 666666 * this.publicVar;
this.hp += t;
return "【 故 使用「杀星巨鼎第二式」， 故 恢复了" + t + "点生命】";
},
winEvent: function() {
e("scr_data").randomEvent[10] += 1;
return "";
},
lostEvent: void 0
},
815: {
name: "须<黄心道>",
lv: 66,
hp: 230000,
maxHp: 230000,
att: 0,
def: 60,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 9, 3 ] ],
des: "苍天已死！黄土当立！！",
skill: function() {
var t = e("scr_data");
if (100 * Math.random() < 20 + 20 * this.publicVar) {
var n = 3 * (353366 - o.def);
t.role.hp -= n;
return "【 须 使用「阴阳决」，你损失" + n + "点生命】";
}
this.publicVar += 1;
t.money += 100;
return "【须 使用「阴阳决」，获得100银两！】";
},
defSkill: void 0,
winEvent: function() {
e("scr_data").randomEvent[10] += 1;
return "";
},
lostEvent: function() {
var t = e("scr_data"), n = parseInt(Math.max(.25 * t.money + this.publicVar, 0));
t.money = 0;
return "【你失去所有银两】";
}
},
816: {
name: "归<黄心道>",
lv: 92,
hp: 308000,
maxHp: 308000,
att: 58974,
def: 69754,
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
var a = 1000 * this.publicVar;
t.role.hp -= n + a;
return "【 归 使用「虚空撕裂」，你受到" + n + "点伤害，每回合损失" + a + "点生命（" + this.publicVar + "层）】";
},
defSkill: function() {
var t = e("scr_data");
this.publicVar += 1;
var n = 500 * this.publicVar;
t.role.hp -= n;
return "【黄心中毒：每回合损失" + n + "点生命（" + this.publicVar + "层）】";
},
winEvent: function() {
e("scr_data").randomEvent[10] += 1;
return "";
},
lostEvent: function() {
var t = e("scr_data"), n = parseInt(Math.max(.3 * t.money, 0));
t.money = 0;
return "【你失去所有钱】";
}
},
900: {
name: "道士<伊贺>",
lv: 35,
hp: 3000,
maxHp: 3000,
att: 999999,
def: 999999,
publicVar: 0,
escapeRate: 100,
enemyEscapeRate: 0,
lostHealth: 0,
achieve: 2,
getAtt: 2,
drop: [ [ 100, 37, 20, 2 ] ],
des: "“谢谢阁下。”",
skill: function() {
e("scr_data").role.hp -= 999999999999999;
return "【道士使用「斩！」，你损失9999999999999999点生命！】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: function() {
var t = e("scr_data"), n = 2 * t.randomEvent[13] + 2;
t.money += n;
t.randomEvent[13] = 0;
return "【“非常感谢”。你获得" + n + "两】";
}
},
901: {
name: "受伤的火狐",
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
des: "火狐周身散发着火红的光芒！",
skill: function() {
this.hp += 60;
return "【火狐正在自愈！恢复自身60点生命】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
902: {
name: "再生虫",
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
des: "散发着彩色光芒的蝴蝶",
skill: function() {
var t = e("scr_data"), n = e("scr_public"), a = t.kills[1];
if (0 == a) {
t.role.hp += 200;
t.role.hp > n.role.maxHp() && (t.role.hp = n.role.maxHp());
return "【" + this.name + "在给你治疗！你回复200点生命】";
}
this.publicVar += 2;
var i = 200 * a * this.publicVar;
t.role.hp -= i;
return "【剧毒：每回合损失" + i + "点生命】";
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
name: "李斯<伊贺谷>",
lv: 6,
hp: 4500,
maxHp: 4500,
att: 100,
def: 1,
publicVar: 0,
escapeRate: 35,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 3, 2, 1 ] ],
des: "“路见不平，趁火打劫！”",
skill: function() {
var t = e("scr_data"), n = 100 * Math.random();
this.publicVar += 1;
if (n < 20 * this.publicVar) {
var a = 2 * this.att;
t.role.hp -= a;
t.role.hp -= a;
t.role.hp -= a;
return "【" + this.name + "使用「幻影苦无」，你损失" + 3 * a + "点生命！】";
}
return "";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
904: {
name: "稀有魂兽<龙>（成年）",
lv: 80,
hp: 9550,
maxHp: 9550,
att: 500,
def: 0,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 14, 10, 1 ], [ 30, 37, 50, 2 ] ],
des: "“不可饶恕！！！”",
skill: function() {
var t = e("scr_data");
if (100 * Math.random() < 50) return "【" + this.name + "使用「龙之怒吼」，你连忙躲开！】";
var n = 4 * this.att;
t.role.hp -= n;
return "【" + this.name + "使用「龙之怒吼」，命中，你损失" + n + "点生命！】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
907: {
name: "廉当<丐帮>（蝉联冠军）",
lv: 200,
hp: 200000,
maxHp: 200000,
att: 3050,
def: 500,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 99, 300, 3 ] ],
des: "“借我试试刀吧！”",
skill: void 0,
defSkill: void 0,
winEvent: void 0,
lostEvent: function() {
var t = e("scr_data"), n = parseInt(Math.max(.5 * t.money, 0));
t.money = 0;
return "【你失去所有的钱！】";
}
},
908: {
name: "缺月<五毒>（盗贼）",
lv: 60,
hp: 5100,
maxHp: 5100,
att: 10,
def: 0,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 3,
achieve: 1,
getAtt: 10,
drop: [ [ 100, 3, 3, 1 ] ],
des: "居然被你看出来了！~",
skill: function() {
var t = Math.max(20, 0);
this.publicVar += 1;
var n = t * this.publicVar * 5;
e("scr_data").role.hp -= n;
return "【中毒：每回合损失" + n + "点生命（" + this.publicVar + "层）】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
909: {
name: "章青<丐帮>（酒鬼）",
lv: 150,
hp: 15450,
maxHp: 15450,
att: 0,
def: 0,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 1,
getAtt: 2,
drop: [ [ 100, 20, 1, 2 ] ],
des: "“你胆子还挺大的嘛！”",
skill: function() {
var t = Math.max(6000 - o.def, 0);
this.hp -= 5000;
e("scr_data").role.hp -= t;
return "【章青使用「舍死无生」，你损失" + t + "点生命，自身损失5000点生命！】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: void 0
},
910: {
name: "梅天梁（幕后操手）",
lv: 200,
hp: 664555,
maxHp: 664555,
att: 12000,
def: 450,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 1,
getAtt: 2,
drop: [],
des: "“滚开！敢妨碍老子做生意？”",
skill: void 0,
defSkill: void 0,
winEvent: function() {
e("scr_data").chioce2[6] += 1;
return "";
},
lostEvent: void 0
},
911: {
name: "梅天梁（幕后操手）",
lv: 200,
hp: 664555,
maxHp: 664555,
att: 1200,
def: 450,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 1,
getAtt: 2,
drop: [],
des: "“滚开！敢妨碍老子做生意？”",
skill: void 0,
defSkill: void 0,
winEvent: function() {
e("scr_data").chioce2[6] += 1;
return "";
},
lostEvent: void 0
},
996: {
name: "鸿儒（过路人）",
lv: 99,
hp: 100000,
maxHp: 100000,
att: 500,
def: 500,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 11, 10, 1 ], [ 10, 37, 50, 2 ] ],
des: "“哥么，憋搁着待了，没病走两步”",
skill: function() {
var t = e("scr_data"), n = 2 * Math.random() + 1, a = parseInt(o.maxHp * n);
t.role.hp -= a;
return "【鸿儒使用「停留」，你损失" + a + "点生命！】";
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
return "【你被鸿儒打晕，趴光衣服被丢在了京城门口！】";
}
},
997: {
name: "吴涛（过路人）",
lv: 99,
hp: 999999,
maxHp: 999999,
att: 4999,
def: 4999,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 11, 10, 1 ], [ 10, 37, 50, 2 ] ],
des: "“同志，真别待下去了，在待下去上级要出手了”",
skill: function() {
var t = e("scr_data"), n = 2 * Math.random() + 1, a = parseInt(o.maxHp * n);
t.role.hp -= a;
return "【吴涛使用「流客」，你损失" + a + "点生命！】";
},
defSkill: void 0,
winEvent: void 0,
lostEvent: function() {
e("scr_data").distance = 99;
e("scr_data").money = 0;
e("scr_data").health = 0;
e("scr_data").itemNum[5] = 0;
e("scr_data").itemNum[1] = 0;
return "【你被吴涛打晕，失去了所有银两，健康清空，趴光衣服被丢在了平安镇门口！】";
}
},
998: {
name: "#小马<天学者><地狱螺旋至高主宰>#",
lv: 932660690,
hp: 114514,
maxHp: 114514,
att: 1,
def: 114514,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 99999999,
achieve: 0,
getAtt: 1,
drop: [],
des: "“哈哈哈哈哈哈！蝼蚁，你能赢过我吗，哈哈哈！”",
skill: function() {
var t = e("scr_data");
t.role.hp = 0;
e("scr_effect").attackEfect1();
return "【啊哈哈哈你的游戏数据正在被作者删除啊哈哈哈游戏已损坏游戏已损坏】";
},
defSkill: function() {
return "【啊哈哈哈你的游戏数据正游戏已损坏啊哈哈哈你的游戏数据正】";
},
winEvent: function() {
var t = e("scr_data");
t.itemNum[12] += 100;
t.menpai2 += 1;
return "获得【将令】*100（你已拥有" + t.itemNum[12] + "）成为天学派";
},
lostEvent: function() {
var t = e("scr_data2");
JSON.parse(cc.sys.localStorage.getItem("userData")) && cc.sys.localStorage.removeItem("userData");
t.initMoney = 50;
t.gameData[0] = 0;
e("scr_public").save2();
cc.director.loadScene("start");
return "你的存档已被作者清除，游戏即将自动关闭";
}
},
999: {
name: "游戏GM",
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
des: "“你好，你已经被我盯上了哟~”",
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
name: "四星<逍遥游侠>",
lv: 10,
hp: 5000,
maxHp: 5000,
att: 250,
def: 250,
publicVar: 0,
escapeRate: 30,
enemyEscapeRate: 0,
lostHealth: 0,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 0, 1, 2 ] ],
des: "登峰造极！",
skill: function() {
var t = e("scr_data"), n = 10 * t.kills[2];
if (100 * Math.random() < n) {
var a = 2 * this.att - o.def, i = this.def;
t.role.hp -= a;
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= i;
return "【四星使用「撼心拳」，你受到" + a + "点伤害，并降低" + i + "点防御！】";
}
return "";
},
defSkill: function() {
var t = e("scr_data");
if (100 * Math.random() < Math.min(5 * t.kills[2], 75)) {
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 9999;
return "【四星使用「列金甲」】";
}
return "";
},
winEvent: function() {
var t = e("scr_data"), n = t.kills[2], a = "【“我是不会认输的！\n(▼ヘ▼#)”】";
t.specialEnemy[100001].lv += 10;
t.specialEnemy[100001].att += 250;
t.specialEnemy[100001].hp += 5000;
t.specialEnemy[100001].maxHp += 5000;
t.specialEnemy[100001].def += 250;
t.kills[2] += 1;
if (2 == n) {
t.itemNum[0] += 2;
a = "【四星留下2个「熟肉」！然后逃走了！】你获得「熟肉」*2";
}
if (6 == n) {
t.itemNum2[1] += 3;
a = "【四星留下3个「伤药」！然后逃走了！】你获得「伤药」*3";
}
if (12 == n) {
t.itemNum2[20] += 1;
a = "【四星留下一块「门帮专武」！然后逃走了！】你获得「门帮专武」*1";
}
if (20 == n) {
t.itemNum2[20] += 1;
a = "【四星留下一个「伤药」！然后逃走了！】你获得「伤药」*1";
}
return a;
},
lostEvent: function() {
e("scr_data").publicVar2[7] += 1;
return "【小垃圾，不挺牛的吗，就这啊】";
}
},
100002: {
name: "杨干（丐帮）（特殊精英）",
lv: 25,
hp: 8750,
maxHp: 8750,
att: 0,
def: 0,
publicVar: 0,
escapeRate: 80,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 3,
getAtt: 3,
drop: [ [ 100, 3, 3, 1 ] ],
des: "“战无双，意无穷！拦路打劫，天地应允！”（生命值永久减少，攻击每次加300）",
skill: function() {
var t = e("scr_data"), n = parseInt(Math.max(.07 * this.hp + o.def, 0));
t.role.hp -= 2 * n;
this.hp -= 500;
return "【" + this.name + "使用「神王霹雳棍」（必定暴击），双倍造成" + n + "点伤害,减少自身血量500点】";
},
defSkill: function() {
e("scr_data").specialEnemy[100002].hp = this.hp;
e("scr_data").specialEnemy[100002].att += 300;
return "";
},
winEvent: void 0,
lostEvent: function () {
e("scr_data").money = 0;
return "【“今天又能大吃一顿了，哈哈哈哈哈”】";
}
},
200001: {
name: "鸠（玉女阁)",
lv: 5,
hp: 1500,
maxHp: 1500,
att: 50,
def: 0,
publicVar: 0,
escapeRate: 40,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [],
des: "“义正方西，名正方东”",
skill: function() {
var t = e("scr_data"), n = parseInt(this.att), a = parseInt(.1 * this.att), i = parseInt(.2 * this.att);
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= a;
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= i;
t.role.hp -= n;
return "【" + this.name + "使用「万花鞭法」，你受到" + n + "点伤害，攻击下降" + i + "点，防御下降" + a + "点！】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.specialEnemy[200001].lv += 5;
t.specialEnemy[200001].att += 150;
t.specialEnemy[200001].hp += 1500;
t.specialEnemy[200001].maxHp += 1500;
t.specialEnemy[200001].def += 5;
t.orderTimes[7] = 0;
t.itemNum[9] += 5;
t.haogan1[0] += 5;
t.Gensui[3] = 1;
return "【“我不自量力，收下吧。”良革+5（你现在可以邀请鸠入队）】";
},
lostEvent: function() {
e("scr_data").orderTimes[7] += 2;
e("scr_data").money = 0;
e("scr_data").haogan1[0] += 10;
return "【“小女子险胜罢辽，兄台修为更高”】";
}
},
300001: {
name: "地狱螺旋位列三." + e("scr_data").kills[1] + "重（灭局）",
lv: 3,
hp: 5000,
maxHp: 5000,
att: 0,
def: 0,
publicVar: 0,
escapeRate: 100,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 11, 50, 1 ] ],
des: "螺旋，噬灭，穷尽",
skill: function() {
var t = e("scr_data"), n = 10 * t.kills[1] + 40;
if (100 * Math.random() < n) {
var a = parseInt(.2 * t.role.hp + 5 + 10 * t.kills[1]);
t.role.hp -= a;
this.hp += a;
return "【灭局使用「瞳明」，你损失20%的当前生命值（" + a + "），灭局恢复" + a + "点生命！】";
}
return "";
},
defSkill: function() {
var t = e("scr_data");
if (100 * Math.random() < 10 * t.kills[1] + 40) {
var n = t.role.maxHp;
this.hp += n;
t.role.hp -= n;
return "【灭局使用「立身」，恢复自身20%已损失的生命！(" + n + "点)，并对你造成" + n + "点伤害！】";
}
return "";
},
winEvent: function() {
var t = e("scr_data");
t.kills[1];
t.specialEnemy[300001].lv += 0;
t.specialEnemy[300001].att += 100;
t.specialEnemy[300001].hp += 5000;
t.specialEnemy[300001].maxHp += 5000;
t.specialEnemy[300001].def += 100;
t.kills[1] += 1;
return "";
},
lostEvent: void 0
},
300002: {
name: "重拳先生<少林>",
lv: 5,
hp: 22000,
maxHp: 22000,
att: 100,
def: 1000,
publicVar: 0,
escapeRate: 50,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 11, 10, 1 ] ],
des: "接下这一拳吧！",
skill: function() {
var t = e("scr_data"), n = parseInt(Math.max(.1 * this.hp - o.def + this.def, 0));
t.role.hp -= n;
return "【" + this.name + "使用「拳击」，你受到" + n + "点伤害】";
},
defSkill: function() {
var t = e("scr_data"), n = parseInt(Math.max(.1 * this.hp - o.def + this.def, 0));
t.specialEnemy[300002].hp = this.hp;
this.def += 2000;
t.role.hp -= n;
return "【重拳先生使用「重锤复兴」「肃杀」，防御+2000，你损失" + this.def + "点生命】";
},
winEvent: function() {
var t = e("scr_data");
t.kills[3] += 1;
t.specialEnemy[300002].lv += 5;
t.specialEnemy[300002].def += 300;
t.specialEnemy[300002].maxHp += 1000;
t.specialEnemy[300002].hp = this.hp;
i.save();
if (0 == t.skillLv[16] && this.lv >= 55) {
t.skillLv[16] = 1;
t.itemNum[2] += 500;
return "";
}
return "";
},
lostEvent: void 0
},
300003: {
name: "寺猖",
lv: 5,
hp: 8750,
maxHp: 8750,
att: 500,
def: 500,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 1,
getAtt: 3,
drop: [ [ 100, 3, 3, 1 ] ],
des: "让我见识一下你真正的实力吧",
skill: function() {
var t = e("scr_data"), n = parseInt(Math.max(.07 * this.hp - o.def, 0));
t.role.hp -= n;
return "【" + this.name + "使用「拳击」，你受到" + n + "点伤害】";
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
name: "橦林<伊贺>",
lv: 100,
hp: 100000,
maxHp: 100000,
att: 6000,
def: 100,
publicVar: 0,
escapeRate: 40,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 11, 1, 1 ] ],
des: "无需躲闪，即刻毙命！",
skill: function() {
var t = e("scr_data"), n = 100 * Math.random(), a = this.lv / 5;
this.publicVar += 1;
if (this.publicVar <= 10) {
if (n < a) {
var i = 9 * this.lv;
t.role.hp -= i;
return "【橦林向你发射了一颗苦无！击中！你损失" + i + "点生命！】";
}
return "【橦林向你发射了一颗苦无！但是未命中】";
}
return "【橦林没苦无啦！】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.specialEnemy[400001].lv += 100;
t.specialEnemy[400001].hp += 50000;
t.specialEnemy[400001].maxHp += 50000;
t.specialEnemy[400001].def += 100;
return "【“就差，一点。。。！”】";
},
lostEvent: void 0
},
400002: {
name: "烈心（疗伤）<少林>",
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
des: "你要不要脸啊！",
skill: void 0,
defSkill: function() {
var t = e("scr_data");
t.specialEnemy[400002].hp = this.hp;
this.def += 20;
t.role.hp -= this.def;
return "【反击！你损失" + this.def + "点生命】";
},
winEvent: function() {
var t = e("scr_data");
t.specialEnemy[400002].lv += 100;
t.specialEnemy[400002].def += 1000;
t.specialEnemy[400002].maxHp += 1000000;
t.specialEnemy[400002].hp = this.hp;
i.save();
return "";
},
lostEvent: void 0
},
400003: {
name: "张火<少林>",
lv: 60,
hp: 20250,
maxHp: 20250,
att: 3100,
def: 1210,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 0,
getAtt: 1,
drop: [ [ 100, 3, 2, 1 ], [ 20, 9, 1, 1 ] ],
des: "“接我一拳”",
skill: function() {
var t = e("scr_data"), n = 100 * Math.random();
this.publicVar += 1;
if (n < 20 * this.publicVar) {
var a = 2 * this.att - o.def;
t.role.hp -= a;
return "【" + this.name + "使用「拳击」，你损失" + a + "点生命！】";
}
return "";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.specialEnemy[400003].lv += 20;
t.specialEnemy[400003].att += 15000;
t.specialEnemy[400003].hp += 62000;
t.specialEnemy[400003].maxHp += 62000;
t.specialEnemy[400003].def += 50;
if (this.lv >= 160 && 0 == t.skillLv[20]) {
t.skillLv[20] = 1;
t.itemNum[2] += 500;
return "";
}
return "";
},
lostEvent: void 0
},
900001: {
name: "贾当<丐帮>（精英）",
lv: 75,
hp: 5750,
maxHp: 5750,
att: 600,
def: 0,
publicVar: 0,
escapeRate: 10,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 1,
getAtt: 1,
drop: [ [ 100, 1, 2, 2 ], [ 30, 23, 1, 2 ] ],
des: "“哈哈哈哈，又来一个！”",
skill: function() {
this.att += parseInt(.1 * this.att);
return "【贾当使用「无双士卒」，贾当攻击增加】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.specialEnemy[900001].lv += 15;
t.specialEnemy[900001].att += 150;
t.specialEnemy[900001].hp += 1000;
t.specialEnemy[900001].maxHp += 1000;
t.specialEnemy[900001].def += 10;
return "";
},
lostEvent: function() {
var t = e("scr_data"), n = parseInt(Math.max(.5 * t.money, 0));
t.money -= n;
return "【你损失一半的银两！】";
}
},
900002: {
name: "宝箱捍卫者（魂兽<人>）",
lv: 10,
hp: 7500,
maxHp: 7500,
att: 50,
def: 50,
publicVar: 0,
escapeRate: 10,
enemyEscapeRate: 0,
lostHealth: 1,
achieve: 1,
getAtt: 1,
drop: [ [ 100, 2, 50, 1 ], [ 100, 14, 10, 1 ] ],
des: "“遵循主人之命，捍卫此物”",
skill: function() {
var e = parseInt(.3 * this.def), t = parseInt(.1 * this.hp);
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= 50 * e;
this.hp += t;
return "【捍卫者使用「魂魄打击」，双倍降低你" + e + "点防御，使自己恢复了" + t + "点生命】";
},
defSkill: void 0,
winEvent: function() {
var t = e("scr_data");
t.specialEnemy[900002].lv += 10;
t.specialEnemy[900002].att += 50;
t.specialEnemy[900002].hp += 500;
t.specialEnemy[900002].maxHp += 500;
t.specialEnemy[900002].def += 100;
return "";
},
lostEvent: void 0
},
900003: {
name: "牛少天<丐帮>(没事找事)",
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
drop: [],
des: "“你挺闲的嘛”",
skill: function() {
var e = this.att + o.def, t = parseInt(.2 * (this.maxHp - this.hp));
c.role.hp -= e;
this.hp += t;
return "【牛少天使用「智慧冲撞」，对你造成" + e + "点伤害，自身恢复" + t + "点生命】";
},
defSkill: function() {
if (100 * Math.random() < Math.min(this.lv / 50 + 20, 80)) {
var t = parseInt(.5 * o.att);
e("scr_data").role.hp -= t;
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 999999;
return "【" + this.name + "使用「牛定胜天-1」「反弹」，你减少" + t + "点生命！】";
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
return "“好玩，嘿嘿。。。”";
}
},
900004: {
name: "英烈魂<降临>",
lv: 1,
hp: 9999999,
maxHp: 9999999,
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
return "【英烈魂使用「学习.丐帮」你受到" + e + "点伤害！】";
}
if (this.lv > 100) {
e = 2 * this.att;
c.role.hp -= e;
return "【英烈魂使用「学习.玉女」你受到" + e + "点伤害！】";
}
if (this.lv > 200) {
e = 2 * this.att;
var t = parseInt(.2 * e);
this.hp += t;
c.role.hp -= e;
return "【英烈魂使用「学习.血刀」你受到" + e + "点伤害，？恢复" + t + "点生命！】";
}
if (this.lv > 500) {
this.publicVar += 1;
e = 2 * this.att, t = parseInt(.2 * e);
var n = parseInt(.2 * this.att * this.publicVar);
this.hp += t;
c.role.hp -= e + n;
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= parseInt(.05 * o.def);
return "【英烈魂使用「进化.五毒」你受到" + e + "点伤害，附加" + n + "点毒性伤害，防御降低5%。？恢复" + t + "点生命！】";
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
return "【英烈魂使用「学习.雪山」你受到" + e + "点伤害！】";
}
if (this.lv > 700) {
e = 2 * this.att;
c.role.hp -= e;
cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= parseInt(.4 * o.att);
return "【？使用「进化.少林」，格挡40%伤害，你受到" + e + "点反弹伤害！】";
}
return "";
},
winEvent: function() {
var t = e("scr_data");
t.specialEnemy[900004].lv += 999;
t.specialEnemy[900004].maxHp += 9999999;
t.specialEnemy[900004].hp = this.hp;
i.save();
return "“你的力量，我认可了。。。”";
},
lostEvent: void 0
},
900005: {
name: "晓风基因计划",
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
des: "「晓风：由于基因计划属于研发失败的产品，有些功能并不完善，目前还不具备自动修复能力；但是在这个世界的某处，还沉睡着一个来自同一胚胎、即将完工的伟大作品！」",
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
return "【基因计划使用「进化.感染」你受到" + e + "点伤害，附加" + t + "点生化伤害！】";
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
return "【基因计划使用「模仿.反弹」你受到" + e + "点伤害！】";
}
return "【基因计划静静的看着你...】";
},
winEvent: function() {
c.choice[6] += 1;
return "";
},
lostEvent: void 0
},
900006: {
name: "一块黑色的石头",
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
des: "「特注：这真的是块石头！」",
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
return "【你受到" + e + "点反弹伤害！】";
},
winEvent: function() {
c.choice[6] += 1;
return "";
},
lostEvent: void 0
},
900007: {
name: "牛少天<丐帮>(守株待兔者)",
lv: 40,
hp: 39000,
maxHp: 39000,
att: 90,
def: 50,
publicVar: 0,
escapeRate: -9999,
enemyEscapeRate: 0,
lostHealth: 2,
achieve: 1,
getAtt: 1,
drop: [],
des: "“？NM~敢抢老子东西？”",
skill: function() {
if (4 == this.publicVar) {
var e = this.att * (1 + this.publicVar);
c.role.hp -= e;
return "【" + this.name + "使用「蛮牛冲撞」，你损失" + e + "点生命！】";
}
this.publicVar += 1;
var t = this.att, n = parseInt(.1 * this.att * this.publicVar);
c.role.hp -= t + n;
cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= parseInt(.05 * o.att);
return "【" + this.name + "使用「疯狂冲撞」你受到" + t + "点伤害，附加" + n + "流血，攻击降低5%！】";
},
defSkill: function() {
this.att += parseInt(.05 * this.att);
return "【" + this.name + "使用「牛定胜天」，攻击强化！】";
},
winEvent: function() {
var t = e("scr_data");
t.specialEnemy[900007].lv += 20;
t.specialEnemy[900007].att += 200;
t.specialEnemy[900007].hp += 2e3;
t.specialEnemy[900007].maxHp += 2e3;
t.specialEnemy[900007].def += 100;
var n = cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent").randomItemNum || 3;
t.itemNum[14] += n;
return "【获得「魂精」*" + n + "！】";
},
lostEvent: function() {
var t = e("scr_data");
t.money -= parseInt(.9 * t.money);
return "【你被抢走90%的金钱！】";
}
}
};           //zxczxcxzc
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
text: [ "来到王府，", "刚想进门却被一位身穿黑衣的壮汉拦住，\n看样子是王府的武座", "“喂，穿的这么破，要饭的吧，\n，不对，要饭的都比你有钱\n叫花子不准入内！”他用他滚圆的肚子将我往外顶了顶", "我是来报仇的", "谁说没钱的？（100000银两）" ],
BGM: "",
require: [ n.distance, 0 ],
choice1: function() {
n.enemyId = 102;
r("“你想硬闯王府？”");
},
choice2: function() {
if (n.money >= 100000) {
n.choice[1] = 2;
n.money -= 100000;
n.maxHunger += 50;
n.hunger = n.maxHunger;
r("“哟，公子，小的有眼不识泰山，这边请(大快朵颐，饱食度最大值+50)”");
} else c.playText("Canvas/notify2", "银两不够！", 60);
}
},
2: {
text: [ "“没钱嘛，", "这样吧，你先攒会银两", "，今后有钱了再给我些吧”", "“现在你身上的钱我就都拿走了，作为回报我给你传点真气”", "只见这人左手碰了下我，", "右手便出现了一些银两", "“不给！！！”", "行。。吧" ],
BGM: "",
require: [],
choice1: function () {
n.money -= 0;
r("你把手上的钱瞬间收起，然后很快的离开了。。。");
},
choice2: function() {
var e = n.money;
if (n.dkmoney <= 0) {
n.money -= e;
n.role.att += parseInt( 0.3 * e );
n.role.def += parseInt( 0.1 * e );
n.role.maxHp += parseInt( 1 * e );
r("你本次一共失去" + e + "银两，全属性增加！\n“小友告辞！”，\n那人不知用了什么法术，瞬间消失了...");
} else c.playText("Canvas/notify2", "哟，还贷款了，这钱我不要！", 60);
}
},
3: {
text: [ "我敲了敲门，没反应", "又敲了敲，门开了，是一位白发老爷爷", "我解释来意，老人似乎听不太清，但是执意让我进屋，", "房子里散乱的堆放着各种垃圾，", "弥漫着一股尿臭味。", "雨停了，屋里非常的安静，老人一直呆坐着，他已经记不起来自己孩子的名字。", "【临走时，你选择...】", "除掉老人（限血刀，伊贺，五毒）", "帮忙打扫也无济于事，自然而然吧" ],
BGM: "",
require: [],
choice1: function() {
if (n.menpai[3] + n.menpai[4] + n.menpai[6] >= 1) {
n.publicVar[0] += 30;
n.money += 200;
r("手起刀落，老人瞬间毙命，这是你最后的仁慈。（罪恶+30，银两+200)");
} else c.playText("Canvas/notify2", "银两不够！", 60);
},
choice2: function() {
r("雨停了，你离开了，走了没多远，就听到老人的哭喊和男人的叱骂，所谓世界，只是麻木不仁的，悲剧。");
}
},
4: {
text: [ "   老人挥了挥手。", "   口中说着一些奇怪的话。", "   你看着手中的秘籍。", "若有所思。", "老人又回头说了句", "", "......" ],
BGM: "",
require: [],
choice1: function() {},
choice2: function() {
r("“老身不偏不倚，乐善好施，少侠再见”。\n【《富财金经》秘籍等级+1！】");
}
},
5: {
text: [ "大约又过了3个时辰，", "远处飘来一朵祥云，", "一个熟悉的身影跳了下来", "“嗨嗨，来啦”", "对，那正是放了我鸽子的所谓真人--小马", "“随我来”她道", "", "跟随" ],
BGM: "",
require: [],
choice1: function() {},
choice2: function() {
t.eventId = 6;
t.ifTriggerEvent();
}
},
6: {
text: [ "“上古时期，天地魂兽横行，", "突然有一天便失去了大半，", "而原因正是因为这一缕洪荒之气", "这律洪荒之气世代由修仙者保管，", "只不过如今仙人少见，更多的只有依仙傍神的习武之人", "如今我已无力守护这丝魂气，", "我见你骨骼清奇，不如你来保管这律魂气", "而代价，是3000两白银”", "你的选择是", "这东西，我要了", "骗谁呢？当我小孩子？" ],
BGM: "",
require: [],
choice1: function() {
if (n.money >= 3000) {
n.choice[7] += 1;
n.money -= 3000;
n.itemNum[13] += 1;
n.itemNum2[28] += 1;
n.honghuang += 1;
r("“你获得【※\洪荒之气/※】，获得隐藏道具《魔刀灭极》秘籍");
} else c.playText("Canvas/notify2", "银两不够！", 60);
},
choice2: function() {
r("小马见你拒绝连连感慨，“果然是我看错了”");
}
},
7: {
text: ["她带着你兜兜转转", "来到了一个外表绚丽的青楼", "她宽衣解带，你如此看着，却发现其身体遍布羽毛", "", "你是什么人！"],
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
text: [ "头脑阵痛，一个鬼魅无比的声音响起", "“愤怒吗，憎恶吗？”曾经的回忆不断袭来，家门的鲜血，夜晚的火光，以及他们的丑恶的笑", "不断地呼救，不断地哭泣，不断地呼喊着父母，不断地被践踏。。。", "", "“我要他们血债血偿！”" ],
BGM: "BGM2",
require: [],
choice1: function() {},
choice2: function() {
n.energy += 700;
n.hunger = 10 * i.maxHunger();
n.role.hp = i.role.maxHp();
r("行动力+700，饥饿十倍恢复，生命全恢复！（罪恶+200）");
}
},
9: {
text: [ "我正想出发，赵顺耳却把我拦了下来", "“这独明教虽然已经是破败残余，但实力仍不可小觑，你最好做好准备。”", "说着，他将搜罗的奇怪道具向我展开，二选一嘛。。。", "食物伤药，防具材料", "学习功法的材料" ],
BGM: "",
require: [],
choice1: function() {
n.itemNum2[0] += 20;
n.itemNum[4] += 100;
n.itemNum2[12] += 10;
n.itemNum2[1] += 50;
r("获得【佳肴】*20，【毛皮】*100，【美酒】*10，【伤药】*50！");
},
choice2: function() {
n.itemNum[14] += 200;
n.itemNum[2] += 5000;
r("获得【魂精】*200，【道心】*5000！");
}
},
10: {
text: [ "“最近客栈的收入咋样。。。”我少见的关心起了同福楼的情况", "“唉，也就那样吧。虽然生意在变好，但是外债还是很多啊。”元可倾无奈", "“不过生活总是会变好的嘛，总不会再差下去了。”", "", "..." ],
BGM: "",
require: [],
choice1: function() {},
choice2: function() {
t.eventId = 11;
t.ifTriggerEvent();
}
},
11: {
text: [ "“说起赚钱，我倒有个法子。”，旁边的顺耳突然有点神秘的说道。", "“啥办法？”我问", "“我知道城外有一处闹鬼的英烈门，最近正在找有能力的人去镇魂，给的很多哦，不过还是很危险的。。。”", "", "能听到这种消息，只能说不愧是顺耳了" ],
BGM: "",
require: [],
choice1: function() {},
choice2: function() {
t.eventId = 12;
t.ifTriggerEvent();
}
},
12: {
text: [ "提示：从现在开始你可以进入英烈门副本，每天收集的特殊道具，系统会自动出售（出售金额可在每日的结算界面查看）", "最后，你需要选择分成比例。\n（不能全拿，毕竟是要补贴给同福楼的）", "我最辛苦，应该我拿大头（拿7成）", "我应该帮帮她，我拿小头吧（拿3成）" ],
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
text: [ "元可倾急忙向我跑过来", "“接下来就不能和你一起奋斗了，毕竟还有同福楼”", "这些东西你就收下吧", "", "确定" ],
BGM: "",
require: [],
choice1: function() {},
choice2: function() {
var e = Math.max(parseInt(n.publicVar[7] / 50), 1), t = Math.min(Math.max(parseInt(n.publicVar[7] / 100), 1), 6);
n.money += 10 * e;
n.itemNum2[0] += e;
n.itemNum2[29] += t;
if (n.publicVar[7] >= 20000) {
n.ifFollow[1] = 1;
n.Gensui[1] = 1;
n.publicVar2[17] = 0;
r("“果然还是陪你一起去比较好o(*￣▽￣*)ブ”你获得【银两】*" + 10 * e + ",【佳肴】*" + e + "，【毛皮衣絨】*" + t + "！（元可倾将继续帮助你）\n【说明：奖励与元可倾最终的好感有关】");
} else if (n.publicVar[7] >= 4000) {
n.itemNum2[20] += 10;
n.itemNum2[21] += 10;
n.itemNum2[22] += 10;
r("你获得【银两】*" + 10 * e + ",【佳肴】*" + e + "，【《门帮三件套】*10，【毛皮衣絨】*" + t + "！\n【说明：奖励与元可倾最终的好感有关】");
} else {
n.itemNum2[12] += 10;
r("你获得【银两】*" + 10 * e + ",【佳肴】*" + e + "，【美酒】*10，【毛皮衣絨】*" + t + "！\n【说明：奖励与元可倾最终的好感有关】");
}
}
},
14: {
text: ["“你是。。。”那痴笑女子回首，时光荏苒，决堤泪涌", "她迅速向我奔来，用那血腥十足的双手拥着我，嗅着我身上的味道", "“果真是你，但你不应是坠崖而死吗？”", "", "..."],
BGM: "",
require: [],
choice1: function () { },
choice2: function () {
t.eventId = 15;
t.ifTriggerEvent();
}
},
15: {
text: ["我们聊了很久", "我也是这才得知，那官府的迫害并未在我死后停止，她的家人悉数被杀，为了复仇，走上了邪道，因此才得如今状况", "我们一起吧！（邀请楚惜怜）", "你我二道不合，再会"],
BGM: "",
require: [],
choice1: function () {
n.Gensui[4] = 1;
i.save();
cc.director.loadScene("main");
},
choice2: function () {
n.Gensui[4] = 0;
n.itemNum[2] += 1000;
i.save();
cc.director.loadScene("main");
}
},
1003: {
text: [ "遇到了一个丐帮的痞子", "他向我发起挑战，为的是钱财", "我的选择是", "参战", "投降" ],
BGM: "",
require: [],
choice1: function() {
n.enemyId = 100;
i.save();
cc.director.loadScene("main");
},
choice2: function () {
n.money = 0;
i.save();
cc.director.loadScene("main");
}
},
1007: {
text: [ "路遇路人遇难，好心帮助不想他却借此偷钱", "是否反击", "是", "否" ],
BGM: "",
require: [],
choice1: function() {
n.enemyId = 908;
i.save();
cc.director.loadScene("main");
},
choice2: function () {
n.money = 0;
i.save();
cc.director.loadScene("main");
}
},
2002: {
text: [ "我来到雁府前，", "几下轻功溜了进去，", "一位中年男子背对着我，", "“我总觉得最近睡觉不大舒坦，\n本来想亲自去找，没想到自己送上门来了”", "杀母之仇！", "君子报仇！十年不晚！（润）" ],
BGM: "BGM2",
require: [],
choice1: function() {
if (0 == e("scr_data2").gameData[4]) {
n.role.hp = i.role.maxHp();
n.enemyId = 101;
i.save();
cc.director.loadScene("main");
} else {
n.money += 1000;
r("“果然是我最近没能好好接济穷人！\n这点钱你拿着，别搞垮了身子~”。获得1000两~");
}
},
choice2: function() {
if (0 == e("scr_data2").gameData[4]) if (n.itemNum2[7] >= 0) {
r("你用极快的速度逃走了，你知道他的实力远大于你");
} else cc.find("Canvas/Notify2").getComponent("cc.Label").string = "？？？"; else {
n.itemNum2[7] += 1;
n.itemNum2[12] += 2;
r("“开玩笑的嘛，来，给你点好东西”。获得【元神】*1，【美酒】*2");
}
}
},
2004: {
text: [ "早上我被一整动静惊醒，", "一位男子坐在我的身旁；", "我定睛一看，那人正是刘丹，", "“先前取你阳寿修炼愧对与内心，今日遇见便来道歉”", "他几步轻功离去，留下一锅米粥和几颗内丹。。", "", "这。。。" ],
BGM: "",
require: [],
choice1: function() {
cc.director.loadScene("main");
},
choice2: function() {
n.hunger = 5 * i.maxHunger();
n.energy += 4 * i.maxEnergy();
n.role.hp = i.role.maxHp();
r("浑身充满了力量！\n（状态5倍恢复）");
}
},
2006: {
text: [ "“瞧一瞧，看一看！王府王大人大喜！”", "“各位公子少爷可以凭熟人邀请前去会宴。（仇人之一）””，", "你要去前往宴会吗", "前去一探", "无心前往" ],
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
text: [ "“小友，你是否在寻求升仙之术，或者绝世功法？”", "一位衣衫褴褛，气息不凡的人走过来说道，", "“我嘛，你叫我小马也行", "身上有一份真仙之气,一本《魔刀灭极》", "我几天没吃东西了，你身上要是有些银两。。", "不如给我点。。嘿嘿我就将这两个东西都给你", "只要10000两，", "不知小友可有兴趣？?”", "", "这是。。何意" ],
BGM: "",
require: [],
choice1: function() {},
choice2: function() {
t.eventId = 2;
t.ifTriggerEvent();
}
},
2011: {
text: [ "一个酒鬼歪着身子向你挑衅，", "“把你的酒都交出来！”", "不给", "给（需美酒*1）" ],
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
n.itemNum2[12] = 0;
r("“哈哈哈哈！下次给我小心点！”");
} else cc.find("Canvas/Notify2").getComponent("cc.Label").string = "你身上没有一瓶...";
}
},
2014: {
text: [ "一位长相丑陋的老人来到，说道，", "“这位少侠，我见你骨骼惊奇，”", "说完他拿出一本秘籍。", "“这可是传世的宝贝啊，现在只要500两，要不要？”", "要", "不要" ],
BGM: "",
require: [],
choice1: function() {
if (n.money >= 500) {
n.money -= 500;
n.itemNum2[13] += 1;
t.eventId = 4;
t.ifTriggerEvent();
} else cc.find("Canvas/Notify2").getComponent("cc.Label").string = "你没有足够的钱。。。";
},
choice2: function() {
cc.director.loadScene("main");
}
},
2015: {
text: ["你正在闲逛，一个熟悉的声音叫住了你，", "“少侠！还记得我吗，鸠，就那个打赢你的”", "说着，她掏出一本秘籍。", "“之前实在对不住，下手太狠了，这个就当做补偿好了。”她笑的真切。", "好呀", "不行，这事没完"],
BGM: "",
require: [],
choice1: function () {
n.itemNum2[6] += 1;
n.haogan1[0] += 100;
r("获得《妙手回春》秘籍*1");
},
choice2: function () {
n.haogan1[0] -= 10000;
r("她表情突然有些失落，却仍努力挤出微笑，挥手道别。（小马：NB）");
}
},
2016: {
text: [ "刘丹走了过来，", "掏出2个盒子，说道“这里有2个宝盒，一个代表财富，一个代表牺牲，你选择哪个”", "我看了他好久才开始选择起来", "果然还是", "牺牲比较好", "财富比较好" ],
BGM: "",
require: [],
choice1: function() {
n.itemNum2[20] += 4;
n.itemNum2[21] += 4;
n.itemNum2[22] += 4;
r("获得【门帮3件套】*4");
},
choice2: function() {
n.itemNum[0] += 8;
n.itemNum[1] += 8;
n.itemNum[4] += 5;
n.itemNum2[1] += 6;
n.money += 50;
r("获得【木材】*8【毛皮】*8【熟肉】*5【伤药】*6【银两】*50");
}
},
2017: {
text: [ "“你tm还没死？”", "“真是阴魂不散”", "", "我在等你！" ],
BGM: "BGM2",
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
text: [ "早上，我睁开眼睛，", "便看到一个年轻的女子正在看着我，", "我很诧异", "女子见我醒了，双颊微红快步离开，但是却把一个包裹落下了", "偷偷拿走", "“喂！这是你的吗?”" ],
BGM: "",
require: [],
choice1: function() {
n.money += 1200;
n.publicVar[0] += 300;
r("偷东西针不戳【获得1000银两！罪恶值+300】");
},
choice2: function() {
r("女人红着脸回头拿过包裹连连道谢，又迅速离去。");
}
},
2020: {
text: [ "就算我东躲西藏", "雁飞绝仍然找上了我", "他十分气愤，并且似乎内力修为比之前高了不少。", "看来，是时候要决一死战了", "雁飞绝：“为了能踏实入睡，给我死吧！”", "“可笑”", "“不值一提”" ],
BGM: "BGM2",
require: [],
choice1: function() {
if (0 == a.gameData[4]) {
n.skillLv[4] = 0;
n.enemyId = 103;
n.role.hp = i.role.maxHp();
i.save();
cc.director.loadScene("main");
} else {
r("“哈哈哈哈哈~果然是条硬汉！小伙子有前途。拿上老子的战袍，征服宇宙吧！”。");
}
},
choice2: function() {
if (0 == a.gameData[4]) {
n.enemyId = 103;
n.role.hp = i.role.maxHp();
i.save();
cc.director.loadScene("main");
} else {
r("“哈哈哈哈哈~果然是条硬汉！小伙子有前途。拿上老子的战袍，征服宇宙吧！”。");
}
}
},
3006: {
text: [ "早上，山里下起了暴雨，", "帐篷已经无法让我获得干燥，潮湿的气息漫延", "突然发现山脚有间民房", "【你要进去避雨吗？】", "去", "不去" ],
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
text: [ "【委托：消灭邪教】来到目的村庄，", "村口两个握着锄头的老人，挡住去路，", "“俺们这没啥粮食了，别来抢了！”", "立即执行", "放弃委托" ],
require: [ n.distance, 0 ],
choice1: function() {
n.role.hp = i.role.maxHp();
n.enemyId = 104;
n.haogan1[1] -= 100;
i.save();
cc.director.loadScene("main");
},
choice2: function() {
cc.director.loadScene("main");
}
},
3008: {
text: [ "我正在路边树下避雨，", "突然，一个老妇人奔来，", "我本能一跃，拿起武器应战，", "仔细观察对方穿着，此人正是那邪教残党", "", "刚正面！" ],
require: [ n.choice[3], 2 ],
choice1: function() {},
choice2: function() {
n.role.hp = i.role.maxHp();
n.haogan1[1] -= 100;
n.enemyId = 105;
i.save();
cc.director.loadScene("main");
}
},
3010: {
text: [ "我正在路上走着，突然与一个素衣女子撞了个满怀", "你刚想询问这人姓名，却被女子一把推开“抱歉”她瞬身离去", "“你是谁？”", "“cancanneed？”" ],
require: [],
choice1: function() {
0 == a.gameData[4] ? n.choice[5] += 1 : n.choice[5] += 66;
r("那女子回头向你看了一眼，继续赶路");
},
choice2: function() {
n.role.maxHp -= 10000000;
n.health = 0;
r("那人突然扔出一把暗器，你躲闪不及，失去大量血量，\n<(｀^′)>\n你损失10000000点最大生命值健康归零");
}
},
3011: {
text: [ "“救救我！”我被一阵柔弱的叫喊声吵醒", "那素衣女子半搭在地上“少侠救我，那凶贼将至，我还有使命未成”", "她气喘嘘嘘，向我这边爬来，污秽的双手祈求着回应", "这时远处一个身影向这处闪来", "救人一命胜过七级浮屠", "谁知道你是好是坏" ],
require: [ n.choice[5], 1 ],
choice1: function() {
n.choice[5] += 3;
n.ifFollow[0] = 1;
r("“行行。。行吧”\n“在下感激不尽”我握住对方的手向身后拢去\n身影靠近，已经能看到样貌“在下天门教教主元海平，少侠可否见过一名素衣女子走过”\n“抱歉，并没有，雨天潮湿，保重身体”我敷衍着，那人匆匆离去");
},
choice2: function () {
n.publicVar[7] += 100;
r("身影靠近，已经能看到样貌“是她是她就是她！”我说道，我一拳将女子击晕，然后将她推给了对方\n“如果你去京城的话，去同福楼报我的名字，有好处”那人再三道谢捆着女子离去");
}
},
3013: {
text: ["经过几日的相处，我与白莲巧渐渐熟络起来", "她皮相精致，让人忍不住看向她，我时常如此", "只不过在今天她打坐时被意外的发现了“少侠，你这是何意”她凝滞的脸上看不出表情", "你很好看（坦率）", "发。发呆罢了（怂b）" ],
require: [ n.ifFollow[0], 1 ],
choice1: function() {
if (n.choice[5] < 1000) {
n.choice[5] += 10;
r("“。。。谢谢”她转过头，空气变的冷寂（好感+10）");
} else {
n.choice[5] += 5;
r("“在下尚有任务在身，暂不想这些俗尘之事，少侠倒不如好些心思在武艺锻炼上。”她站起缓缓走向河边（好感+50）");
}
},
choice2: function() {
n.choice[5] += 5;
r("“若有时间发呆，不如打坐沉思一番，虽不入门道，却对心形有些益处”我尴尬的笑着（好感+5）");
}
},
3015: {
text: [ "来到我和小马约定的地点", "已过了2个时辰", "她却迟迟不来", "正巧刚才跑过一只稀有魂兽", "你等还是不等呢？", "等", "不等" ],
require: [],
choice1: function() {
t.eventId = 5;
t.ifTriggerEvent();
},
choice2: function() {
n.itemNum[14] += 10;
r("你成功将魂兽抓住，并获得10点魂精");
}
},
3016: {
text: [ "深夜，我与白莲巧坐在帐篷前看着星空", "夜空深寂，群星闪烁，白莲巧转头看我问道", "少侠，如若有天你我反变为敌，你会怎么办。”她的眼睛很好看，不过浸满了忧伤", "我会让你回心转意", "我会将你抹杀" ],
require: [ n.ifFollow[0], 1 ],
choice1: function() {
n.itemNum[2] += 5000;
n.choice[5] -= 1000;
r("原来少侠是这么想的吗，果然如此呢\n【获得道心*5000，白莲巧好感-1000】");
},
choice2: function() {
n.choice[5] += 100;
r("原来如此，少侠好风采【白莲巧好感+100】");
}
},
3017: {
text: [ "有人喊抓贼，", "是否帮忙？", "是", "算了吧" ],
require: [],
choice1: function() {
n.role.hp = i.role.maxHp();
n.enemyId = 106;
n.haogan1[1] -= 100;
i.save();
cc.director.loadScene("main");
},
choice2: function() {
cc.director.loadScene("main");
}
},
3022: {
text: [ "矿山，烟雾遮天蔽日，一位年长的矿工邀请你一起去吃饭", "你去吗？", "去", "不去" ],
require: [],
choice1: function() {
n.hunger = i.maxHunger();
n.itemNum[0] += 10;
n.itemNum2[13] += 1;
n.chioce2[0] = 1;
r("你久违吃了一顿饱饭。“这是我好不容易遇上的的秘籍，能帮我给我的儿子吗，他去念书应该用得上。”。\n【饥饿全恢复！获得「熟肉」*10！获得委托礼物「《富财金经》秘籍」*1】");
},
choice2: function() {
cc.director.loadScene("main");
}
},
3024: {
text: [ "深夜，一个骚动将你惊醒，借着月光你微睁双眼，是白莲巧，她跪坐在你的身旁，她静静的看着你，空气肃杀的可怕", "爬起来“怎么了？”", "装睡" ],
require: [ n.ifFollow[0], 1 ],
choice1: function() {
if (n.choice[5] > 10000) {
n.itemNum[2] += 5000;
n.choice[5] += 100;
r("她似乎意识到你会惊醒，冷漠道“你的呼噜声实在太大，今天额外如此，便想来瞧瞧有何原因。”，“抱。。。报歉。。”，“既然无事发生，我便先去了。。。”她转身离去\n获得【道心】*5000白莲巧好感+100，");
} else {
n.choice[5] -= 10000000;
r("她似乎意识到你会惊醒，冷漠道“你的呼噜声实在太大，今天额外如此，便想来瞧瞧有何原因。”，“？你事真多。。不会把耳朵闭紧点。”说罢，你又睡去，她也沉默离开。“是我多言了。。。”她转身离去\n，白莲巧好感-10000000");
}
},
choice2: function () {
n.choice[5] += 10;
r("她不知为何流下泪水，不久便离开了，你疑惑不解【白莲巧好感+10】");
}
},
3025: {
text: [" 醒来，发现一个衣衫褴褛的女孩在偷吃你的食物", "你的选择是？", "“慢点吃”", "杀！" ],
require: [],
choice1: function() {
if (n.money >= 2000 && n.publicVar[0] <= 0) {
n.money = 0;
n.publicVar2[31] = 2;
n.haogan1[1] += 100;
r("“呜呜呜，屑，屑屑”女孩流着泪对你露出笑靥，脏兮兮的脸遮不住青春的活力");
} else cc.find("Canvas/Notify2").getComponent("cc.Label").string = "你的钱还不至于救济这么一个女孩";
},
choice2: function() {
n.role.hp = i.role.maxHp();
n.enemyId = 107;
n.haogan1[1] -= 1000000;
n.hunger += 500;
n.maxHunger += 50;
n.publicVar[0] += 100;
i.save();
r("“敢抢我吃的是吧！（乱世之下，女孩的躯体也变成了珍馐，饱食度+500,最大饱食度，罪恶值+100）”");
}
},
3032: {
text: [ "夜深了，看着在你身旁熟睡的白莲巧", "你若有所思，你对她的感情到底是怎样的。。。", "憧憬？", "单纯的救助之情？" ],
require: [ n.ifFollow[0], 1 ],
choice1: function() {
r("就算是憧憬也说不清了");
},
choice2: function() {
r("也许吧，谁知道呢");
}
},
4003: {
text: [ "群英楼，一个神奇的地方，奇闻异世也颇多。", "最近在同福楼的租客都再传着，", "“京城贰拾陆号有传世秘籍出售”", "去问只道是可信不可试", "看着本就不富裕的盘缠你陷入沉思", "去（2000两）", "不去" ],
require: [],
choice1: function() {
if (n.money >= 2000) {
n.publicVar2[14] = 1;
n.money -= 2000;
r("来到目的地，把银两摞在桌上，一个披着斗篷的神秘人摆了摆手“回去，之后你将得到答案”");
} else cc.find("Canvas/Notify2").getComponent("cc.Label").string = "你兜里有几个铜子，心里没点数？";
},
choice2: function() {
r("果然还是慎重些好。。。");
}
},
4006: {
text: [ "我正在在街上打探消息，一个浓妆艳抹的妙龄女子拥来，", "“少侠，凤花楼开业啦，要不去看看？”她笑着", "不去！", "不。。也不是不行" ],
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
text: ["这日，群英楼令使将一本书交给了我", "说是一个身披斗篷的人送来的，拿起书，只觉得恶气逼人", "花了钱的，当然看", "算了吧。。。。" ],
require: [ n.publicVar2[14], 1 ],
choice1: function () {
t.eventId = 8;
n.publicVar[0] += 200;
t.ifTriggerEvent();
},
choice2: function() {
cc.director.loadScene("main");
}
},
4008: {
text: [ "同福楼的生意很好，", "又因为老板娘的缘故，前来喝酒聊天的人对此风评很好。", "“快来帮下忙，招待不过来了！”元可倾这么对我说", "“来咯！”", "太容易暴露了，不去" ],
action: function() {
var t = e("scr_data");
0 == e("scr_data2").gameData[4] && (t.publicVar[7] = -49);
t.publicVar2[17] = 1;
i.save();
},
require: [],
choice1: function() {
n.publicVar[7] += 10;
r("元可倾好感+10");
},
choice2: function() {
cc.director.loadScene("main");
}
},
4012: {
text: [ "这天，来了个丐帮的痞子，", "他气势汹汹，嘴里念叨着保护费的奇怪词汇", "“小姑娘，你要在这开店，可是要点代价的！”", "拔刀相助", "关我P事" ],
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
r("元可倾加入战斗！");
} else {
i.save();
cc.director.loadScene("main");
}
},
choice2: function() {
if (n.money >= 0) {
n.publicVar[7] -= 10000
r("元可倾好感-10000");
} else cc.find("Canvas/Notify2").getComponent("cc.Label").string = "系统出错，换个选项吧";
}
},
4014: {
text: [ "经过几天的寻找，", "总算找到矿工的儿子了，", "是否要将委托礼物（《富财金经》秘籍）给他呢？", "信守承诺", "诶，就是不给" ],
require: [ n.chioce2[0], 1 ],
choice1: function() {
n.itemNum2[13] -= 1;
n.chioce2[0] = 2;
r("他欣喜的招呼我进门，但被我拒绝了，他说最近实在吃不起饭了，十分感谢。我听惯了这些感激，麻木地转身离去。");
},
choice2: function() {
cc.director.loadScene("main");
}
},
4015: {
text: [ "这天出门，在路上遇到了元可倾", "她是个非常有活力的人，正帮着左邻右舍处理那树上的马蜂。", "她总是如此，笑容在阳光下熠熠生辉，", "就像正真的太阳一般。。。不过她似乎遇到了一些困难", "“我来帮忙吧”", "算了，被认出来就不好了" ],
require: [],
choice1: function() {
if (n.money > 0) {
var e = parseInt(.5 * n.money + 1), t = parseInt(.5 * e + 4), a = (e / 10).toFixed(1);
n.role.maxHp -= 1000;
n.publicVar[7] += 100;
r("元可倾笑着看着你，老人们的不止夸赞让你有些不自在，你只是专注地做事罢了【蜜蜂叮咬，血量上限-1000，元可倾好感+100】");
} else cc.find("Canvas/Notify2").getComponent("cc.Label").string = "你身上一分钱也没有！";
},
choice2: function() {
cc.director.loadScene("main");
}
},
4017: {
text: [ "这天，顺耳告诉我他找到了独明教的残党聚居地", "独明教的圣坛，那个曾是白莲巧的所谓的家", "这些是是非非，总该是要有人清算的，是道德心作祟又或者是什么呢，不清楚了。。。", "", "出发吧" ],
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
text: [ "这天，我在街上游荡，", "见到了一队整齐的官兵向着城外奔去", "我连忙回避，不希望被认出来", "之后，赵顺耳告诉我，这群官兵是去平息叛乱的，", "叛乱的是独明教，他们似乎是找到了教派圣女的尸首，将其炼化", "获取了巨大的力量", "并用了这股力量与官府抗争，不过很快就被平息了。。。", "", "....." ],
require: [ n.choice[5], 1 ],
require2: [ n.publicVar[3], 0 ],
choice1: function() {},
choice2: function() {
r("我似乎有些眉目，但却说不出口。。。");
}
},
4019: {
    text: ["这天，我在街上游荡，", "见到了一队整齐的官兵向着城外奔去", "我连忙回避，不希望被认出来", "之后，赵顺耳告诉我，这群官兵是去平息叛乱的，叛乱的教派实力异常强大(我该前去一探吗。。。)", "去！", "懒了" ],
require: [],
require2: [ n.choice[5], 0 ],
choice1: function() {
n.publicVar[9] = 2;
r("[独明教方位已公开]你现在可以前往独明教了");
},
choice2: function() {
r("或许是命中注定，你知道你不该去那是非之地");
}
},
4021: {
text: ["又是一天我在街上游荡，", "之间那妖女又在诱骗路人。", "远远望去，那路人似乎有同意一同前往的倾向。（你的选择是。。。）", "绝对不能让她得逞！", "多一事不如少一事"],
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
text: [ "昨天，来了位身着白褂的商人，", "他坐在客栈前，吆喝着“稀世珍宝，瞧一瞧看一看咯！给我一瓶血就够！”", "去看看！（生命上限-15000，魂精+100）", "赶走！" ],
action: function() {
cc.find("Canvas/Choice/label").getComponent("cc.Label").string = "那商人笑的诡异，不止如何是好。";
},
require: [],
choice1: function() {
n.role.maxHp -= 15000;
n.itemNum[14] += 100;
i.save();
r("魂精+100。");
},
choice2: function() {
n.role.maxHp -= 0;
n.money += 0;
i.save();
r("他不紧不慢的走了，似乎并不惊慌。");
}
},
4032: {
text: [ "今天来了一帮混混样的人，他们把同福楼围得水泄不通", "为首的混混：“欠债还钱，天经地义！说好十天还完欠款的，现在还不还是什么意思！”", "“我说过了，我会还钱的，只不过不是现在，你们这样影响我的生意，也得不到半点好处。”", "帮忙解围（BOSS级对手）", "默不作声" ],
require: [],
choice1: function() {
n.role.hp = i.role.maxHp();
n.enemyId = 112;
i.save();
cc.director.loadScene("main");
},
choice2: function() {
n.publicVar[7] -= 10000
r("混混把元可倾带走了，只知道她回来的时候泪流满面。。。【元可倾好感减少10000】");
}
},
4033: {
text: [ "我在京城晃荡，", "一个熟悉的身影出现，那是黄桃。“走了好远，可不容易呢，这是大家送你的礼物！”", "她又笑着挥手离去，我尚未开口，她却不见踪影", "", "打开包裹" ],
require: [ n.publicVar2[31], 2 ],
choice1: function() {},
choice2: function() {
n.itemNum2[13] += 1;
n.itemNum2[23] += 1;
n.Gensui[2] = 1;
r("获得【《财富金经》秘籍】*1，【《医者恒心》秘籍】*1，黄桃可邀请入队");
}
},
4034: {
text: [ "同福楼是元可倾的全部，原本的宗门破碎，她费劲力气建起了同福楼", "她如此和我说道“生活总会变好的，再撑一撑，总会过去的。”她总是对自己的苦难闭口不谈", "“我把钱都给你”（需要大于2000两）", "沉默" ],
require: [],
choice1: function() {
if (n.money >= 2000) {
n.publicVar[7] += parseInt(100 + (n.money - 2000) / 100);
var e = parseInt(100 + (n.money - 2000) / 100);
n.money = 0
n.energy += parseInt(2 * i.maxEnergy());
r("她似乎有些意外，在你的坚持下，她收下了那笔钱。【行动力爆满，元可倾好感+ " + e + "】");
} else cc.find("Canvas/Notify2").getComponent("cc.Label").string = "这点钱，你好意思给吗？";
},
choice2: function() {
r("她也沉默，等待着时间的流失");
}
},
4040: {
text: [ "这天，小马再次到来，她慢悠悠道：“想要传家宝吗，跟我来。。。”。", "还有这等好事？", "", "去", "不去" ],
require: [],
choice1: function() {
n.publicVar2[16] = parseInt(99 * Math.random() + 1);
n.hunger = i.maxHunger();
r("她用手弹了弹我的额头，手中突然出现一团东西，正想发问，小马又不见踪影。获得【大道丸】（等待一天）！");
},
choice2: function() {
cc.director.loadScene("main");
}
},
4041: {
text: [ "时间流逝，手中的物体逐渐变大。", "突然发出刺眼光芒", "", "怒屮刘丹出奇迹！" ],
require: [ n.publicVar2[16], 1 ],
choice1: function() {},
choice2: function() {
if (n.publicVar2[16] < 95) {
n.energy = 10 * parseInt(.05 * n.energy);
r("...\n......\n.........\nP都没有\n你气得一晚上没睡好\n精力恢复减半...");
} else {
n.itemNum[13] += 1;
n.energy = 10 * parseInt(.05 * n.energy);
n.honghuang += 1;
r("...\n......\n.........\n恭喜获得一个※洪荒之气※！\n你兴奋得一晚上没睡好\n精力恢复减半...");
}
n.publicVar2[16] = 0;
}
},
4042: {
text: [ "混混一伙再次来到桥下，围住元可倾问道：", "“怎么样？赚的钱呢？你这楼不是蛮热闹的吗？”", "“都说了收入多，支出也多，你们先等等。”，元可倾有点惊恐。", "“这是你自己的事，我不关心。我只是让你还钱！”，混混拉高了嗓门", "【你要怎么办？】", "BYD还来？", "...这种事，我无能为力" ],
require: [],
choice1: function () {
n.role.hp = i.role.maxHp();
n.enemyId = 112;
i.save();
cc.director.loadScene("main");
},
choice2: function () {
n.publicVar[7] -= 10000
r("混混把元可倾带走了，只知道她回来的时候泪流满面。。。【元可倾好感减少10000】");
}
},
4047: {
text: [ "出门，发现一群人正在围殴一个乞丐", "帮助", "不理她" ],
require: [],
choice1: function() {
n.role.hp = i.role.maxHp();
n.enemyId = 113;
i.save();
cc.director.loadScene("main");
},
choice2: function() {
n.haogan1[1] -= 1000;
r("这就是他的命。。。");
}
},
4050: {
text: [ "这天，我又一次遇见了那位名为小马的怪人。", "她笑着招手示意我过去，", "“感觉你杀了蛮多魂兽的，这样，你每杀一只魂兽，我给你10个官令怎么样？~把武器拿过来我看看(笑”", "把武器给小马", "再等等（下次一个20官令" ],
require: [],
choice1: function() {
var e = n.kills[0], t = 10 * e;
n.itemNum[11] += t;
n.kills[0] = 0;
r("只见她转动手掌，武器发出阵阵白光，沾染的魂兽之息逐渐消失。你一共击杀了" + e + "个魂兽，获得" + t + "官令！");
},
choice2: function() {
r("“走好不送”小马挥手道别。（根本没有下次了，什么都贪只会害了你");
}
},
4054: {
text: ["出门，发现一群人正在围殴一个乞丐", "帮助", "不理她"],
require: [],
choice1: function () {
n.health -= 10;
n.haogan1[1] += 40;
r("这就是你的命。。。不自量力的后果");
},
choice2: function () {
n.haogan1[1] -= 10;
r("这就是他的命。。。");
}
},
4056: {
text: [ "深夜，我无法入眠，来到楼顶，却见到了元可倾。", "“你欠那些人多少钱？”，我问道。", "“唔，两百万多吧...”\n“...怎么会这么多！”，我有点吃惊。\n“本来没有这么多的，只是利滚利翻了好几倍，当时借钱也没多想，官府也帮着那帮人。。。”\n“那你爸妈呢？”，这个问题我一直都想问。\n“我的父亲。。。我已经好久没见了，过去的生活，也好久不见了。。。”", "", "......." ],
require: [],
choice1: function() {},
choice2: function() {
t.eventId = 10;
t.ifTriggerEvent();
}
},
4059: {
text: [ "天气微凉，又是在孤寂的楼顶。", "又是无言的两人。", "黑色的夜快要将两人笼罩，繁华的街道却显荒凉", "【一种念头突然出现，你想要更加靠近眼前这个坚强的姑娘】", "尝试，未来我手中！（成功率不固定，根据好感值计算概率！）", "算了吧，我该拿什么给她未来。。。" ],
require: [],
choice1: function() {
var e = n.publicVar[7];
if (e < 9000) {
n.publicVar[7] -= 1000;
r("缓缓靠近，假装不经意间勾了一下她的手，她本能般的缩回了手，拉开距离。【元可倾戒备增加，好感-1000！】");
} else {
n.publicVar[7] += 500;
r("缓缓靠近，假装不经意间勾了下她的手，她却将手缩了回去，她笑着看向我，食指弹了下我的额头“还不是时候，不过有你在安心多了”她又转身离开楼顶【元可倾好感+500】");
}
},
choice2: function() {
cc.director.loadScene("main");
}
},
146: {
text: [ "今日出门突感内心晃荡，回到同福楼，只见混混把元可倾逼到墙角，说道，", "“都到这时候，还不把钱还来~，看来只好用点下三滥的手断了”他露出可憎的奸笑", "给我死！", "妥协" ],
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
n.enemyId = 0;
r("那日的场景，我永远不想记起。。。（元可倾自刎倾向增加）");
}
},
152: {
text: ["这天，来到英烈阁，却发现一残衣女子", "笑的好生癫狂,但是脸庞甚是熟悉，曾经的我的邻家", "楚惜怜，那个曾经无比阳光的少女如今也成为了时代的缩影", "", "“你还记得我吗？”"],
action: function () {
n.Gensui[4] = 1;
i.save();
},
require: [],
choice1: function () { },
choice2: function () {
t.eventId = 14;
t.ifTriggerEvent();
}
},
163: {
text: [ "“马上，马上就要出发了吧”，", "“嗯。”", "“你等着哈，我拿点东西给你。”", "", "..." ],
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
text: [ "面前的就是第一个守护者了，", "纯粹的元素之力压得人喘不过气。。。", "还是。。。算了吧", "战斗" ],
action: function() {
n.enemyId = 401;
i.save();
},
require: [],
require2: [ n.publicVar3[2], 0 ],
choice1: function() {
n.enemyId = 0;
n.publicVar3[2] = 1;
t.ifTriggerEvent("你独自离开...");
},
choice2: function() {
n.role.hp = i.role.maxHp();
n.enemyId = 401;
i.save();
cc.director.loadScene("main");
}
},
175: {
text: [ "第二个守护者的力量不逊第一个，要小心了", "还是。。。算了吧", "战斗" ],
action: function() {
n.enemyId = 402;
i.save();
},
require: [],
require2: [ n.publicVar3[2], 0 ],
choice1: function() {
n.enemyId = 0;
n.publicVar3[2] = 1;
t.ifTriggerEvent("你独自离开...");
},
choice2: function() {
n.role.hp = i.role.maxHp();
n.enemyId = 402;
i.save();
cc.director.loadScene("main");
}
},
176: {
text: [ "纯粹的水，往往会比其它的任何物体更加致命。。。", "溜了。。。", "战斗" ],
action: function() {
n.enemyId = 403;
i.save();
},
require: [],
require2: [ n.publicVar3[2], 0 ],
choice1: function() {
n.enemyId = 0;
n.publicVar3[2] = 1;
t.ifTriggerEvent("你独自离开...");
},
choice2: function() {
n.role.hp = i.role.maxHp();
n.enemyId = 403;
i.save();
cc.director.loadScene("main");
}
},
177: {
text: [ "冲天的火焰，恐怖的力量扑面而来", "润了(´ڡ`)", "战斗" ],
action: function() {
n.enemyId = 404;
i.save();
},
require: [],
require2: [ n.publicVar3[2], 0 ],
choice1: function() {
n.enemyId = 0;
n.publicVar3[2] = 1;
t.ifTriggerEvent("你独自离开...");
},
choice2: function() {
n.role.hp = i.role.maxHp();
n.enemyId = 404;
i.save();
cc.director.loadScene("main");
}
},
178: {
text: [ "土，脚下的土地蕴藏着无尽的能量。", "怕了。。。", "战斗" ],
action: function() {
n.enemyId = 405;
i.save();
},
require: [],
require2: [ n.publicVar3[2], 0 ],
choice1: function() {
n.enemyId = 0;
n.publicVar3[2] = 1;
t.ifTriggerEvent("独自离开...");
},
choice2: function() {
n.role.hp = i.role.maxHp();
n.enemyId = 405;
i.save();
cc.director.loadScene("main");
}
},
179: {
text: [ "“你，可算是来了”，你终是找到了血债仇人", "我。。。原谅你了（不再寻仇）", "今天便要你血债血偿！（战斗）" ],
action: function() {
n.enemyId = 406;
i.save();
},
require: [],
require2: [ n.publicVar3[2], 0 ],
choice1: function() {
n.enemyId = 0;
n.publicVar3[2] = 1;
t.ifTriggerEvent("你独自离开...");
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
o.scheduleOnce(o.onLoad, .7);
};
a.shieldButton = function() {
o.node.off("touchstart", a.callBack, a);
o.node.runAction(cc.tintTo(.3, 114, 199, 255));
o.scheduleOnce(o.onLoad, .7);
};
i.shieldButton = function() {
o.node.off("touchstart", i.callBack, i);
o.node.runAction(cc.tintTo(.3, 114, 199, 255));
o.scheduleOnce(o.onLoad, .7);
};
c.shieldButton = function() {
o.node.off("touchstart", c.callBack, c);
o.node.runAction(cc.tintTo(.3, 114, 199, 255));
o.scheduleOnce(o.onLoad, .7);
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
return [ [ 97, 2, 10, 1 ], [ 20, 2, 10, 1 ], [ 25, 99, 20, 3 ], [ 15, 7, 10, 1 ] ];
};
c.getDrop = function() {
return [ [ 60, 16, 1, 2 ], [ 50, 16, 10, 2 ], [ 25, 6, 1, 1 ] ];
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
i.playText("Canvas/Text/txt_notify", "生命全恢复！", 60);
} else if (t < 25) {
n.publicVar3[4] += 10;
i.playText("Canvas/Text/txt_notify", "攻击+10！（持续1天）", 60);
} else if (t < 40) {
n.publicVar3[10] += 10;
i.playText("Canvas/Text/txt_notify", "防御+10！（持续1天）", 60);
} else if (t < 50) {
n.publicVar3[16] += 50;
n.role.hp += 50;
i.playText("Canvas/Text/txt_notify", "生命上限+50！（持续1天）", 60);
} else if (t < 60) {
n.publicVar3[5] += 1;
i.playText("Canvas/Text/txt_notify", "全属性（攻防血）提高1%！（效果随天数缓慢衰减）", 60);
} else if (t < 70) {
n.publicVar3[11] += 6;
i.playText("Canvas/Text/txt_notify", "逃跑率+6%！（持续1天）", 60);
} else if (t < 80) {
n.publicVar3[4] += 10;
i.playText("Canvas/Text/txt_notify", "攻击+10！（持续1天）", 60);
} else if (t < 90) {
n.publicVar3[4] += 10;
i.playText("Canvas/Text/txt_notify", "攻击+10！（持续1天）", 60);
} else {
n.publicVar3[4] += 10;
i.playText("Canvas/Text/txt_notify", "攻击+10！（持续1天）", 60);
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
var t = [ "权  衡", "进  攻", "保  守" ], n = e("scr_data"), a = this, i = this.node.getChildByName("text").getComponent("cc.Label");
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
for (var n = "", a = t.length, i = e("scr_public"), c = e("scr_data"), o = 0; o < a; o++) {
if (100 * Math.random() < t[o][0]) {
var r = t[o][1], s = t[o][2], l = t[o][3];
if (2 == l) {
var u = i.itemName2;
c.itemNum2[r] += s;
n = n + "【" + u[r] + "】*" + s;
}
if (1 == l) {
u = i.itemName;
c.itemNum[r] += s;
n = n + "【" + u[r] + "】*" + s;
}
if (3 == l) {
c.money += s;
n = n + "【银两】*" + s ;
}
}
}
"" == n && (n = "没发现道具");
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
var N = V.def, T = r.des, k = [ "权  衡", "进  攻", "防  御" ];
s.targetOff(s);
l.targetOff(l);
s.on("touchstart", function() {
r.hp > 0 && n.role.hp > 0 && function() {
var e = "你使用【炁击】", a = "", o = "", s = "", l = "", u = "", f = "", d = "", ynlr = "", tjtt = "", tjyy = "", wdgd = "", slwyz = "", tjjl = "", xdxymg = "", xsfs = "", xsxd = "", xsxb = "", W2Dgd = "", W3Dgd = "";
c.publicVar = 0;
var m = n.figthState;
if (1 == n.skillLv[25]) {
var y = 100 * Math.random();
if (y < 10) {
var I = parseInt(.03 * V.maxHp);
c.publicVar += r.def;
n.role.hp += I;
n.role.hp > V.maxHp && (n.role.hp = V.maxHp);
s = "。【霸气】无视防御，生命恢复" + I;
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
var N = parseInt(.2 * V.maxHp), T = parseInt(.03 * V.att);
n.role.hp += N;
c.correct[0] += T;
n.role.hp > V.maxHp && (n.role.hp = V.maxHp);
f = "【血液崇拜：生命+" + N + "，攻击+" + T + "】";
}
var k = parseInt(Math.max(V.att + c.correct[0] + c.publicVar - r.def * (1 - 2 * n.itemNum2[15] / 100), 0));
if (0 == m) {
k = parseInt(k * (1 + b[0] / 500));
g[0] += 1;
}
if (1 == m) {
var S = parseInt(.05 * V.maxHp);
k = parseInt(k * (1.32 + b[1] / 200));
n.role.hp -= S;
g[1] += 1;
l = "「进攻气势：你损失" + S + "点生命」";
}
if (2 == m) {
k = parseInt(.7 * k);
g[2] += 1;
}
1 == _[0] && (k = parseInt(1.3 * k));
if (n.itemNum2[10] * n.menpai[5] > 0) {
(v += 1) > 20 && (v = 20);
var H = parseInt(4 * n.itemNum2[10] * v);
k = parseInt(k * (H / 100 + 1));
e = e.replace("炁击", "致盲");
o = "，伤害加成" + H + "%";
}
if (w = 40 * n.menpai[0] + 12 * n.itemNum3[0], 100 * Math.random() < w || 1 == C) {
k = parseInt((1.5 + 0.3 * n.itemNum3[0]) * k);
e += "，触发【暴击】";
C = 0;
A();
}
var w;
if (JIU = 30 * n.ifFollow[3], 100 * Math.random() < JIU || 1 == C) {
k = parseInt((2 * n.ifFollow[3]) * k);
e += "，触发【特级暴击】";
C = 0;
A();
}
var JIU;
if (JIU1 = 1 * n.ifFollow[3], 100 * Math.random() < JIU1 || 1 == C) {
k = parseInt((10 * n.ifFollow[3]) * k);
e += "，触发【隐藏暴击】";
C = 0;
A();
}
var JIU1;
if (n.itemNum2[19] * n.menpai[4] > 0 && n.itemNum2[14] > (Math.min(n.itemNum2[19], 10) * n.CJByh) && n.publicVar[4] > 0) {
n.itemNum2[14] -= Math.min(n.itemNum2[19], 10) * n.CJByh;
n.publicVar3[14] += 1;
k = parseInt(k * Math.min((n.itemNum2[19] + 1) ,10));
e = e.replace(/炁击|致盲/, "连击");
/暴击/.test(e) && (e = e.replace(/暴击/, "爆头"));
}
if (YN = 100 * n.itemNum2[30] * n.menpai[5], 100 * Math.random() < YN) {
var N = parseInt(550 * n.itemNum2[30]), G = parseInt(.1 * r.def), I = new RegExp("触发");
r.hp -= N;
r.def -= G;
I.test(e) ? e += "【凌人】" : e += "，触发【凌人】";
ynlr = "，造成" + N + "点穿刺伤害，减少对方" + G + "点防御";
}
var YN;
    if (TY = 100 * n.itemNum2[35] * n.menpai[7], 100 * Math.random() < TY) {
var G = parseInt(.2 * r.def), I = new RegExp("触发");
r.def -= G;
I.test(e) ? e += "【通透】" : e += "，触发【通透】";
tjtt = "，减少对方" + G + "点防御";
}
var TY;
if (YY1 = (40 * n.menpai[7] + n.itemNum2[36] * n.menpai[7]), 100 * Math.random() + 1 < YY1) {
var N = (2 * V.att), I = new RegExp("触发");
r.hp -= N;
I.test(e) ? e += "【阴鱼】" : e += "，触发【阴鱼】";
tjyy = "，造成" + N + "点内伤伤害";
}
var YY1;
if (WD = 100 * n.itemNum2[33] * n.juexue[0] * n.menpai[6], 100 * Math.random() < WD) {
var WD1 = parseInt(50 * n.itemNum2[33]), WD2 = parseInt(.02 * r.att), WD3 = n.publicVar[0], WD4 = n.itemNum3[6], I = new RegExp("触发");
n.gudu += 1;
r.hp -= WD1 * n.gudu + Math.max(2 * WD3 * n.gudu * WD4 ,0);
r.att -= WD2;
V.def += 10 * WD4;
n.role.hp += WD1 * n.gudu + 2 * WD3 * n.gudu * WD4;
I.test(e) ? e += "【蛊毒】" : e += "，触发【蛊毒】";
wdgd = "，造成" + (WD1 * n.gudu + Math.max(2 * WD3 * n.gudu * WD4, 0)) + "点中毒伤害（" + n.gudu + "层），并回复同等生命，减少对方" + WD2 + "点攻击";
}
var WD;
if (W2D = 100 * n.itemNum2[38] * n.juexue[1] * n.menpai[6], 100 * Math.random() < W2D) {
var W2D1 = parseInt(50 * n.itemNum2[38]), W2D3 = n.publicVar[0], W2D4 = n.itemNum3[6], I = new RegExp("触发");
n.gudu += 1;
r.hp -= W2D1 * n.gudu + Math.max(2 * W2D3 * n.gudu * W2D4, 0);
V.def += 10 * W2D4;
I.test(e) ? e += "【蛊毒】" : e += "，触发【蛊毒】";
W2Dgd = "，造成" + (W2D1 * n.gudu + Math.max(2 * W2D3 * n.gudu * W2D4, 0)) + "点中毒伤害（" + n.gudu + "层）";
}
var W2D;
if (W3D = 1 * n.gudu * n.juexue[1], 5 <= W3D) {
var W3D1 = parseInt(1000 * n.itemNum2[38]), W3D3 = n.publicVar[0], W3D4 = n.itemNum3[6], I = new RegExp("触发");
r.hp -= W3D1 + 10 * W3D3 * W3D4;
V.def += 10 * W3D4;
n.gudu = 0;
I.test(e) ? e += "【毒爆】" : e += "，触发【毒爆】";
W3Dgd = "，造成" + (W3D1 + 10 * W3D3 * W3D4) + "点毒爆伤害,毒层清零！";
}
var W3D;
if (SL = 100 * n.menpai[1], 100 * Math.random() < SL) {
var SL1 = Math.max(parseInt((1 + 0.4 * n.itemNum3[1]) * V.def - r.def * (1 - n.CJBsl)), 0), I = new RegExp("触发");
r.hp -= SL1;
I.test(e) ? e += "【无影掌】" : e += "，触发【无影掌】";
slwyz = "，额外造成" + SL1 + "点伤害";
}
var SL;
if (TJ = 100 * n.menpai[7], 100 * Math.random() < TJ) {
var TJ1 = Math.max(parseInt(.5 * r.def + .5 * r.att ), 0) , I = new RegExp("触发");
r.hp -= TJ1;
I.test(e) ? e += "【借力】" : e += "，触发【借力】";
tjjl = "，额外造成" + TJ1 + "点伤害";
}
var TJ;
if (L = 40 * n.menpai[3] + 12 * n.itemNum3[3], 100 * Math.random() < L) {
var N = parseInt((0.3 + 0.04 * n.itemNum3[3]) * k), I = new RegExp("触发");
n.role.hp += N;
n.role.hp > V.maxHp && (n.role.hp = V.maxHp);
I.test(e) ? e += "【血液敏感】" : e += "，触发【血液敏感】";
xdxymg = "，恢复" + N + "点生命";
}
var L;
if (n.itemNum2[34] >= 1) {
if (0 == n.figthState) {
if (XS = 30 - 4 * n.itemNum3[2], 100 * Math.random() <= XS) {
var N = 200 * n.itemNum2[34], I = new RegExp("触发");
n.role.hp -= N;
n.role.hp > V.maxHp && (n.role.hp = V.maxHp);
I.test(e) ? e += "【反噬】" : e += "，触发【反噬】";
xsfs = "，减少" + N + "点生命";
}
}
if (1 == n.figthState) {
if (XS = 50 - 4 * n.itemNum3[2], 100 * Math.random() <= XS) {
var N = 200 * n.itemNum2[34], I = new RegExp("触发");
n.role.hp -= N;
n.role.hp > V.maxHp && (n.role.hp = V.maxHp);
I.test(e) ? e += "【反噬】" : e += "，触发【反噬】";
xsfs = "，减少" + N + "点生命";
}
}
if (2 == n.figthState) {
if (XS = 30 - 4 * n.itemNum3[2], 100 * Math.random() <= XS) {
var N = 200 * n.itemNum2[34], I = new RegExp("触发");
n.role.hp -= N;
n.role.hp > V.maxHp && (n.role.hp = V.maxHp);
I.test(e) ? e += "【反噬】" : e += "，触发【反噬】";
xsfs = "，减少" + N + "点生命";
}
}
var XS;
}
if (n.menpai[2] >= 1) {
if (0 == n.figthState) {
if (XD = 100 * n.menpai[2], 100 * Math.random() < XD) {
var XD1 = Math.max(parseInt(100 + 2 * n.haogan[1] - r.def), 0), I = new RegExp("触发");
r.hp -= XD1;
I.test(e) ? e += "【雪雕啄击】" : e += "，触发【雪雕啄击】";
xsxd = "，额外造成" + XD1 + "点伤害";
}
}
if (1 == n.figthState) {
if (XD = 100 * n.menpai[2], 100 * Math.random() < XD) {
var XD1 = Math.max(parseInt(100 + 2 * n.haogan[1] - r.def), 0), I = new RegExp("触发");
r.hp -= XD1 * 1.2;
I.test(e) ? e += "【雪雕啄击】" : e += "，触发【雪雕啄击】";
xsxd = "，额外造成" + (XD1 * 1.2) + "点伤害";
}
}
if (2 == n.figthState) {
if (XD = 100 * n.menpai[2], 100 * Math.random() < XD) {
var XD1 = Math.max(parseInt(100 + 2 * n.haogan[1] - r.def), 0), I = new RegExp("触发");
r.hp -= XD1;
I.test(e) ? e += "【雪雕啄击】" : e += "，触发【雪雕啄击】";
xsxd = "，额外造成" + XD1 + "点伤害";
}
}
var XD;
}
if (XB = 100 * n.itemNum3[2], 100 * Math.random() < XB) {
var XB1 = Math.max(parseInt(2 * (n.haogan[1] + n.haogan[0])), 0), I = new RegExp("触发");
r.hp -= XB1;
I.test(e) ? e += "【血汗香甜】" : e += "，触发【血汗香甜】";
xsxb = "，雪豹造成" + XB1 + "点伤害";
}
var XB;
if (kp = 100 * n.itemNum2[28], 100 * Math.random() < kp) {
var kp1 = parseInt(.1 * k), I = new RegExp("");
n.role.hp += kp1;
n.role.hp > V.maxHp && (n.role.hp = V.maxHp);
I.test(e) ? e += "【魔刀夺命】" : e += "，【魔刀夺命】";
a = "，恢复" + kp1 + "点生命";
}
var kp;
1 == n.ifFollow[1] && (d = function() {
var e = "。元可倾使用【炁击】", t = "", a = 100 * Math.random(), i = E.att - r.def + c.publicVar;
i = Math.max(i, 0);
if (a < E.crit) {
i = parseInt(1.5 * i);
e = e.replace(/炁击/, "怒风刺人");
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
t = t + "。你恢复" + l + "生命";
}
if (n.friendSkill[6] > 0) {
C = 1;
t += "，你下次攻击必定暴击！";
}
}
if (n.friendSkill[8] > 0 && E.attackTimes % 3 == 0) {
i = parseInt(2.5 * i);
e = /怒风刺人/.test(e) ? e.replace(/怒风刺人/, "寻风化云") : e.replace(/炁击/, "终结");
}
r.hp -= i;
E.attackTimes += 1;
return e = e + ("，造成" + i + "点伤害") + t;
}());
r.hp -= k;
100002 == t && (u = r.defSkill());
e = e + "，对" + r.name + "造成" + k + "点伤害" + a + o + s + l + u + f + d + ynlr + tjtt + tjyy + wdgd + slwyz + tjjl + xdxymg + xsfs + xsxd + xsxb + W2Dgd + W3Dgd;
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
r.hp > 0 && n.role.hp > 0 && s.getComponent("cc.Button").scheduleOnce(S, 1);
}, s);
l.on("touchstart", function() {
var e = H(), t = 100 * Math.random();
n.skillLv[14] > 0 && (n.figthState = 2);
cc.find("Canvas/Fight/state/text").getComponent("cc.Label").string = k[n.figthState];
P();
if (t > e) {
r.hp > 0 && n.role.hp > 0 ? s.getComponent("cc.Button").scheduleOnce(S, .7) : F();
n.publicVar2[6] += 1;
cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] += 10 * n.itemNum3[4];
D();
i.playText("Canvas/Fight/notify2", "逃跑失败！", 60);
} else {
var a = 1 + n.itemNum2[18];
n.escapeExp += a;
n.CJByh2 += 1;
n.money += 15 * n.menpai[4];
n.gudu = 0;
n.Shengwang -= 1;
i.playText("Canvas/Text/txt_notify", "逃跑成功！\n逃跑技术+" + a + "（累计" + n.escapeExp + "）", 80);
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
if (n.itemNum2[19] * n.menpai[4] > 0) {
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
i.playText("Canvas/Text/txt_notify", r.name + "逃跑啦！", 80);
L();
})();
return;
}
}
var t, a = r.name + "攻击", o = new RegExp("触发"), s = "", l = "", u = "", f = n.figthState;
if (t = 2 * n.itemNum2[11] * n.menpai[1], 100 * Math.random() < t) {
v > 20 && (v = 20);
var d = 20 * (y += 1), m = Math.round(.05 * V.maxHp);
V.def = Math.round(N * (d / 100 + 1));
n.role.hp += m;
n.role.hp > V.maxHp && (n.role.hp = V.maxHp);
a += "。【金甲护体】触发";
s = "，生命恢复" + m + "，防御加成" + d + "%";
}
var g, _, kl, xs, xt, ty, yy, ht, jiuu, xilian, x = parseInt(Math.max(r.att - c.correct[1] - V.def, 0));
0 == f && (x = parseInt(x * (1 - b[0] / 500)));
if (2 == f) {
var C = 10 + b[2];
x = parseInt(x * (.7 - b[2] / 600));
}
if (g = Math.min(50 * n.itemNum2[4] * n.menpai[1], 50), 100 * Math.random() < g) {
x = 0;
o.test(a) ? a = a.replace("触发", "【格挡】触发") : a += "。【格挡】触发";
}
if (kl = Math.min(40 * n.menpai[5] + 6 * n.itemNum3[5], 70), 100 * Math.random() < kl) {
x = 0;
V.att += 10 * n.itemNum3[5];
o.test(a) ? a = a.replace("触发", "【闪避】触发") : a += "。【闪避】触发";
}
if (xs = Math.min(30 * n.menpai[2], 30), 100 * Math.random() < xs) {
x = 0;
o.test(a) ? a = a.replace("触发", "【闪避】触发") : a += "。【闪避】触发";
}
    if (ty = Math.min(40 * n.itemNum2[35] * n.menpai[7], 40), 100 * Math.random() < ty) {
x = 0;
o.test(a) ? a = a.replace("触发", "【化解】触发") : a += "。【化解】触发";
}
if (n.menpai[2] >= 1) {
if (0 == n.figthState) {
if (xt = 40 * n.menpai[2], 100 * Math.random() + 1 < xt) {
C = 50 + 2 * n.haogan[0];
n.role.hp += C;
n.role.hp > V.maxHp && (n.role.hp = V.maxHp);
u = "「雪兔：你恢复" + C + "点生命」";
}
}
if (1 == n.figthState) {
if (xt = 40 * n.menpai[2], 100 * Math.random() + 1 < xt) {
C = 50 + 2 * n.haogan[0];
n.role.hp += C;
n.role.hp > V.maxHp && (n.role.hp = V.maxHp);
u = "「雪兔：你恢复" + C + "点生命」";
}
}
if (2 == n.figthState) {
if (xt = 60 * n.menpai[2], 100 * Math.random() + 1 < xt) {
C = (50 + 2 * n.haogan[0]) * 0.9;
n.role.hp += C;
n.role.hp > V.maxHp && (n.role.hp = V.maxHp);
u = "「雪兔：你恢复" + C + "点生命」";
}
}
}
if (yy = (40 * n.menpai[7] + n.itemNum2[36] * n.menpai[7]), 100 * Math.random() + 1 < yy) {
C = 2 * V.att;
n.role.hp += C;
n.role.hp > V.maxHp && (n.role.hp = V.maxHp);
u = "【阳鱼】：你恢复" + C + "点生命";
}
if (ht = n.ifFollow[2], 1 == ht && 100 * Math.random() > 50) {
C = parseInt(0.2 * V.maxHp);
n.role.hp += C;
n.role.hp > V.maxHp && (n.role.hp = V.maxHp);
u = "【黄桃神力！】：你恢复" + C + "点生命";
}
if (jiuu = n.ifFollow[3], 1 == jiuu && 100 * Math.random() < 30) {
C = parseInt(0.4 * V.att);
n.role.hp -= C;
V.att += C;
u = "【天行百段】：你增加" + C + "点攻击，损失部分生命";
}
if (xilian = n.ifFollow[4], 1 == xilian && 100 * Math.random() < 30) {
C = 0.05 * V.maxHp;
n.role.hp += C;
r.hp -= 0.1 * n.role.hp;
u = "【九阴白骨爪】：楚惜怜造成" + C + "点真实伤害，你恢复同等生命";
}
if (_ = 50 * n.menpai[2], 100 * Math.random() < _) {
var E = Math.max(r.att - c.correct[1], 0) * (1 + 0.05 * n.itemNum2[9] * n.menpai[2]);
(x -= E) < 0 && (x = 0);
r.hp -= E;
o.test(a) ? a = a.replace("触发", "【反弹】触发") : a += "。【反弹】触发";
l = "，" + E + "点伤害反弹给" + r.name;
}
n.role.hp -= x;
if (2 == f) {
C = parseInt(20 + b[2]);
n.role.hp += C;
n.role.hp > V.maxHp && (n.role.hp = V.maxHp);
u = "「防御气势：你恢复" + C + "点生命」";
}
a = a + "，你受到" + x + "点伤害" + l + s + u;
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
var e = Math.round(100 * (1 - r.hp / r.maxHp)), t = (r.escapeRate + e + n.escapeExp / 10 + 2 * n.itemNum2[24] * n.menpai[4] + n.publicVar3[11]).toFixed(1);
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
cc.find("Canvas/Fight/gunButton").getComponent("cc.Label").string = "（" + n.itemNum2[14] + "）\n【" + [ "虚", "实" ][n.publicVar[4]] + "】";
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
i.playText("Canvas/Text/txt_notify", "【圣斗士：我又回来啦！~】", 80);
} else n.role.hp = 1 + parseInt(500 * n.itemNum2[25] + .1 * a.role.maxHp() * n.itemNum2[25]);
} else n.role.hp = 1 + parseInt(500 * n.itemNum2[25] + .1 * a.role.maxHp() * n.itemNum2[25]);
if (n.day <= 7) {
n.role.hp = a.role.maxHp();
n.health += r.lostHealth;
n.health += 1;
i.playText("Canvas/Text/txt_notify", "【作者的守护：在7天之内你在战败后不会受到惩罚以及尽可能避免死亡~】", 80);
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
e < 70 - 100 * n.itemNum2[31] && (n.buffState[0] = 0);
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
var e = r.drop, t = "", a = "战斗胜利！\n获得", o = c.getItem(e), s = function() {
var e = "", t = r.achieve;
if (0 != t && "undefined" != typeof t) {
n.achieve += t;
e = "。声望+" + t;
}
return e;
}();
1 == n.skillLv[5] && (t = function() {
var e = [ "【权衡气势】", "【进攻气势】", "【防御气势】" ], t = g.indexOf(Math.max.apply(Math, g));
n.figthExp[t] += 1;
{
if (n.figthExp[t] > 150) {
n.figthExp[t] = 150;
return "。" + e[t] + "魄力无双！已达巅峰！";
}
return "。" + e[t] + "魄力提升！";
}
}());
var l = function() {
var e = r.getAtt, t = 100 * Math.random();
{
if (t < 20) {
n.role.def += e;
return "。防御提高" + e + "点！";
}
if (t < 60) {
n.role.att += e;
return "。攻击提高" + e + "点！";
}
n.role.maxHp += 5 * e;
return "。最大生命值提高" + 5 * e + "点！";
}
}(), u = function(e) {
{
if (1 == n.ifFollow[0] && 1 == n.friendSkill1[3]) {
var t = 100 * Math.random();
if (t >= 0) {
var a = c.getItem(e);
return "【血液崇拜：" + a + "】";
}
return "";
}
return "";
}
}(), ht1 = function (e) {
{
if (1 == n.ifFollow[2]) {
var t = 100 * Math.random();
if (t >= 0) {
var a = c.getItem(e);
return "【摸鱼大法：" + a + "（双倍）】";
}
return "";
}
return "";
}
}(e), ht2 = function (e) {
{
if (1 == n.ifFollow[2]) {
var t = 100 * Math.random();
if (t >= 0) {
var a = c.getItem(e);
return "";
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
    if (n.itemNum2[26] * n.menpai[0] > 0) {
var t = 100 * Math.random(), a = 5 * n.itemNum2[26] + n.publicVar3[18];
if (t < a) {
var i = c.getItem(e);
return "【《打狗棍法》秘籍：" + i + "】";
}
return "";
}
return "";
}
}(e);
n.winTimes += 1;
n.gudu = 0;
n.Shengwang += 1;
n.jinyan += 1;
n.maxHunger += 8 * n.menpai[0] * n.juexue[1];
n.hunger += 20 * n.menpai[0] * n.juexue[1];
n.publicVar[0] += 10 * n.menpai[0] * n.juexue[1];
n.money += 10 * n.menpai[4];
n.haogan1[2] += 1 * n.ifFollow[4];
"没发现道具" == o && (a = a.replace("获得", ""));
a = f + u + p + a + o + l + t + s + ht1 + ht2;
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
e = n.day < 20 ? "战斗失败！健康-" + t + "（健康为0时游戏结束）" : "战斗失败！健康-" + t;
n.health -= t;
n.gudu = 0;
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
var e = [ [ 4, 0 ], [ 0, 0 ], [ -4, 0 ], [ 0, 0 ], [ 4, 0 ], [ 0, 0 ] ], t = 0;
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
var t = e("scr_data"), a = t.itemNum2[17] * t.menpai[3], i = 100 * Math.random(), c = "";
i < a && (c = "没发现道具" != (c = cc.find("Event/scr_fight").getComponent("scr_fight").getItem(n)) ? "\n【血魂寻踪：发现" + c + "】" : "\n【血魂寻踪：无事发生】");
return c;
}(), c = function() {
var t = e("scr_data"), a = "";
if (1 == t.ifFollow[2]) {
var i = t.day + 20, c = 100 * Math.random();
c >= 0 && (a = "没发现道具" != (a = cc.find("Event/scr_fight").getComponent("scr_fight").getItem(n)) ? "\n【摸鱼大法：发现" + a + "】" : "\n【摸鱼神功：什么也没有发现！】");
}
return a;
}();
if ("没发现道具" != a) a = i + c + "发现" + a; else {
var o = function() {
var t = e("scr_data"), a = 5 * (t.itemNum2[27] + t.publicVar3[17]), i = 100 * Math.random(), c = "";
if (i < a) if ("没发现道具" != (c = cc.find("Event/scr_fight").getComponent("scr_fight").getItem(n))) c = "\n【寓利化形：发现" + c + "】"; else {
t.money += 1;
c = "\n【《寓利化形》秘籍：发现1两！】";
}
return c;
}();
t.publicVar2[1] += 1;
a = o + i + c + "什么也没有找到！";
if (t.skillLv[23] > 0) {
t.money += 1;
a += "【逆袭：金钱+0.1】";
}
if (t.day <= 7) {
t.itemNum2[1] += 5;
t.itemNum[0] += 1;
a += "【神秘人的帮助：获得「伤药」*5,「熟肉」*1（游戏前7天有效）】";
}
if (t.fzy >= 1) {
var c = 100 * Math.random(), z = 10 * t.fzy;
if (z > c) {
t.health -= 999999;
a += "【元神丹副作用：英雄请重新来过】";
}
}
}
e("scr_effect").playText("Canvas/Text/txt_notify", a, 60);
},
getDrop: function() {
var t = [], n = this.getItemNum(), a = e("scr_public").regionId();
1e3 == a && (t = [ [ 20, 0, n, 1 ], [ 30, 1, n, 1 ], [ 30, 4, n, 1 ], [ 20, 5, n, 1 ], [ 7, 6, n, 1 ], [ 10, 8, 1, 1 ] ]);
2e3 == a && (t = [ [ 75, 2, 10 * n, 1 ], [ 22, 99, n, 3 ], [ 15, 10, n, 1 ], [ 16, 7, n, 1 ] ]);
3e3 == a && (t = [ [ 15, 0, n, 1 ], [ 35, 1, n, 1 ], [ 35, 4, n, 1 ], [ 15, 5, n, 1 ], [ 5, 6, n, 1 ], [ 10, 8, 1, 1 ] ]);
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
this.getItem();
} else {
n.publicVar2[2] += 1;
this.fight();
} else if (t <= 80) {
n.publicVar2[3] += 1;
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
t.energy -= this.Energy + t.weather[0] * 2 + t.weather[3] * 1 - t.weather[4] * 1;
t.hunger > 0 && (t.hunger -= 5);
t.role.hp -= t.weather[2] * 10 + t.weather[3] * 5;
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
101 == t.distance && (t.button[1] = !0);
},
playBGM: function() {
cc.audioEngine.stopAll();
var e = cc.game._persistRootNodes;
for (var t in e) var n = e[t].getComponent("scr_BGM").BGM1;
cc.audioEngine.play(n, !1, 1);
},
callBack: function() {
var t = e("scr_data"), n = e("scr_effect"), a = e("scr_public"), i = this.dryUp();
a.ifGameOver();
this.Energy = 10;
if (t.energy >= (this.Energy + t.weather[0] * 2 + t.weather[3] * 1 - t.weather[4] * 1) && 0 == i) if (t.day >= 180) this.end(); else if (290 == t.distance && 1 == t.ifFollow[0]) {
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
n.playText("Canvas/Text/txt_notify", "你已到达京城！", 60);
} else this.forward(); else if (t.energy < (this.Energy + t.weather[0] * 2 + t.weather[3] * 1 - t.weather[4] * 1)) n.playText("Canvas/Text/txt_notify", "精力不足！", 60); else if (100 == t.distance) {
t.button[0] = !0;
n.playText("Canvas/Text/txt_notify", "时不我待，还是尽早启程吧！", 60);
} else t.distance < 300 && t.distance > 100 && n.playText("Canvas/Text/txt_notify", "时不我待，还是速速前去吧。", 60);
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
t.playText("Canvas/Text/txt_notify", "血液喷涌，不知是从何处出现的腥甜，慢慢将我包围。", 60);
},
1: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "他，他，她，她，她。。。不见了，记忆也在逐渐消失。", 60);
},
2: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "一个声音传来，那人却是那真人小马，但他穿着怪异，一身白色，好似哭丧者。", 60);
},
3: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "“哟，你醒啦，今天感觉怎么样，还好吗，记得给好评哟。”", 60);
},
4: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "我想张口，但是，我说不出话，肺部仿佛充斥着铁针，痛苦，好痛苦", 60);
},
5: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "我终于用眼泪将血滴从眼中染出，才看清，我早已失去四肢，只有具悲伤的躯壳", 60);
},
6: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "呼吸是一种痛苦，我想要倾诉，但是我无法发出任何声响。", 60);
},
7: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "又一个声音传来，那是刘丹，他也一袭白衫，眼前带着两个方方正正的框。", 60);
},
8: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "“我们该走了吧，时间到了，明年再来吧。。。。”", 60);
},
9: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "小马微笑着点点头，随着刘丹一同走出了门，而我，环顾四周，只见是瓷器做的墙壁，各种麻线交错，空旷的令人恐惧。", 60);
},
10: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "再次闭上双眼，离去的小马又再次出现“你还好吗？回答我几个问题吧。”", 60);
},
11: function() {
cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent").startEvent(10001);
},
111: function() {
cc.find("Canvas/Text/txt_notify").y = 277;
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "“你的答题评分为" + n.publicVar[11] + "（满分30，与刚才十个题目有关）。\n不用揣测，遵循内心就好。”", 60);
},
112: function() {
var e = cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent");
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "“游戏评分为" + e.gamePoint + "（满分62，与你在游戏中的选择有关）。\n表现出最真实的自己，才是最重要的。”", 60);
},
113: function() {
cc.find("Canvas/Text/txt_notify").y = 577;
var e = cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent");
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "“属性评分为" + e.attPoint + "（满分18，攻防血属性越「低」分数越高！）\n少刷数值，虽然你的乐趣可能就在刷刷刷上，但游戏我觉得还是要轻松点好。”", 60);
},
114: function() {
var a = 59 - 10 * e("scr_data2").gameData[4];
cc.find("Canvas/Text/txt_notify").y = 77;
var i = cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent");
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "“总分为" + i.totalPoint + "，低于通关所需分数（" + a + "分）。”", 60);
},
115: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "“哎，世界，在崩坏呢，不过不用担心，我在另一个维度等你。”", 60);
},
116: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "“下次，“他们”可能还会记得你，并且通关所需评分将至49分。”", 60);
},
117: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "“我会在这里等着你，再会吧~”", 60);
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
    t.playText("Canvas/Text/txt_notify", "“你的答题评分为" + n.publicVar[11] + "（满分30，与刚才十个题目有关）。\n不用揣测，遵循内心就好。”", 60);
},
212: function() {
var e = cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent");
n.publicVar3[3] += 1;
    t.playText("Canvas/Text/txt_notify", "“游戏评分为" + e.gamePoint + "（满分62，与你在游戏中的选择有关）。\n表现出最真实的自己，才是最重要的。”", 60);
},
213: function() {
cc.find("Canvas/Text/txt_notify").y = 577;
var e = cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent");
n.publicVar3[3] += 1;
    t.playText("Canvas/Text/txt_notify", "“属性评分为" + e.attPoint + "（满分18，攻防血属性越「低」分数越高！）\n这里很有必要解释下为何、要这么设计：\n少刷数值，虽然你的乐趣可能就在刷刷刷上，但游戏我觉得还是要轻松点好。”", 60);
},
214: function() {
var a = 59 - 10 * e("scr_data2").gameData[4];
cc.find("Canvas/Text/txt_notify").y = 77;
var i = cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent");
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "“总分为" + i.totalPoint + "，高于通关所需分数（" + a + "分）。你可以过关啦~”", 60);
},
215: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "“世界只不过是一个枷锁，你想如何见证，这是你的选择，寻找吧，这是属于你的未来。”", 60);
},
216: function() {
cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent").startEvent(20001);
},
311: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "刘丹与赤眉大战，最后双双殒命，但赤眉的信徒始终打算将其复活。（结局：无法逃离的可怖）", 60);
},
312: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "白莲巧在这世上存在的痕迹似乎被清除了一般，独明教的余孽仍然想要卷土重来（结局：不安的失去）", 60);
},
313: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "黄桃在这乞丐横行的世上，再无力气活着，最后还是悄然离世（结局：人走茶凉）", 60);
},
314: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "元可倾已然出嫁，但悲伤的面容却在她的后半生从未改变，她也不再像从前那般耀眼（结局：暗淡的光芒）", 60);
},
315: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "乞丐们的竞争越加激烈，普通居民都无法好好生活了。。。（结局：动荡人生）", 60);
},
316: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "矿工们仍然在努力的工作，只不过工资已拖欠许久。（结局：无力的前行）", 60);
},
317: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "矿工的儿子科举失败，原因是考试时极度饥饿（结局：名落孙山）", 60);
},
318: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "独明教残余在官兵的攻击下败下阵来，但余孽任存（结局：毒火不尽）", 60);
},
319: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "那个邀着他人比试的少女，终是再一次比试中被阴险的偷袭，失去了生命（结局：改变的轨迹）", 60);
},
320: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "魂兽们的领地随着所谓武侠者的变多而不断减少。。。（结局：失去的曾经）", 60);
},
321: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "信奉邪教的村民最后还是被邪教压榨的一点不剩。。。相同的故事仍然在不断重演（结局：黑色的大手）", 60);
},
322: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "乔丰带领着丐帮不断走向新的高潮，未来可期（结局：光明大道）", 60);
},
323: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "那个诱骗人的妖女仍在作案，莫名失踪案不断增多（结局：千古奇案）", 60);
},
324: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "朝廷空有武力，而无民心，世道不定，摇摇欲坠（结局：东起孤星）", 60);
},
325: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "你在失败后独自回到了师傅所在的宗门，得到的却是被人杀害的消息（结局：失去的日子）", 60);
},
326: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "你来到了曾经出生的村庄，不废吹灰之力，一夜之间，村中老少皆去地府（结局：自食其果）", 60);
},
327: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "最后，你隐姓埋名，在这漂泊世间成为沧海一粟....（结局：随波逐流）", 60);
},
328: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "...全剧终...", 60);
},
329: function() {
n.publicVar3[3] += 1;
t.playText("Canvas/Text/txt_notify", "「感谢您能游玩到最后！我是三天苍，再会啦~」", 60);
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
413: function () {
n.plotId = 1003;
a.save();
cc.director.loadScene("plot");
},
414: function () {
n.plotId = 1004;
a.save();
cc.director.loadScene("plot");
},
415: function () {
n.plotId = 1005;
a.save();
cc.director.loadScene("plot");
},
416: function () {
n.plotId = 1006;
a.save();
cc.director.loadScene("plot");
},
417: function() {
n.plotId = 1007;
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
this.scheduleOnce(this.onLoad, .7);
},
autoEat: function() {
var t = e("scr_data"), n = e("scr_public");
if (t.hunger <= 0) {
if (t.itemNum[0] >= 1) {
t.itemNum[0] -= 1;
t.orderTimes[5] += 1;
t.hunger += 5;
100 * Math.random() < -1 && (t.health += 0);
n.save();
n.textZoon("Canvas/Button/txt_state");
return !0;
}
if (t.itemNum2[0] >= 1) {
t.itemNum2[0] -= 1;
t.orderTimes[2] += 1;
t.hunger += 50 + 10 * t.menpai[4]
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
0 == a[1] && t.choice[5] >= 1000 && (a[1] = 1);
},
2: function() {
0 == a[2] && t.choice[5] >= 2000 && (a[2] = 1);
},
3: function() {
0 == a[3] && t.choice[5] >= 3000 && (a[3] = 1);
},
4: function() {
0 == a[4] && t.choice[5] >= 3000 && (a[4] = 1);
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
var t = e("scr_data"), n = ["【血脉之力】给主角增加" + Math.max(parseInt(t.choice[5] / 2 + 100), 0) + "点攻击，增加幅度与好感有关。天生自带，无需激活！", "【血液崇拜.活力】精力上限+20，好感达到1000激活！", "【血液崇拜.复生】每回合，" + Math.min(parseInt(t.choice[5] / 4), 100) + "%几率给主角恢复20%生命，并增加主角3%攻击（可无限叠加），触发概率与好感相关，好感达到2000激活！", "【血液崇拜.无限】胜利后，必定再获得一次奖励，全怪物有效，好感达到3000激活！", "【血液崇拜.再起】睡觉时，健康恢复效果翻倍，精力额外再恢复20，每日留存血量增加" + Math.max(2 * t.choice[5], 0) + "！好感达到5000激活！" ];
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
var t = e("scr_data"), n = ["【淡风袭人】元可倾会与主角并肩作战（攻击" + parseInt(t.publicVar[7] + 600) + "，随好感提升）", "【烈风催人】元可倾每次攻击暴击提高5%！需30好感", "【清风怀仁】每天" + Math.max(parseInt(t.publicVar[7] / 20 + 25), 25) + "%几率获得元可倾总存款的2%（元可倾存款为" + parseInt(t.publicVar2[18]) + "两，你能到手的零钱为" + (.02 * t.publicVar2[18] / 10).toFixed(1) + "元），触发几率随好感提升。需60好感", "【怒风刺人】元可倾暴击后，附加给目标一层流血效果，降低目标10%防御。需100好感", "【柔风馨暖】元可倾暴击后，伤害的50%用于治疗主角。需160好感", "【清风润道】元可倾基础暴击率+25%。需240好感", "【迅风驰笑】元可倾暴击后，主角下次攻击必定触发暴击！需340好感", "【清风怀仁2】每天" + Math.max(parseInt(t.publicVar[7] / 20 + 20), 20) + "%几率增加角色10点健康，触发几率随好感提升。需460好感", "【终结技】元可倾每间隔两次攻击，触发一次「寻风化云」。需600好感" ];
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
cc.find("Canvas/goods").getComponent("cc.Label").string = "当前好感：" + e("scr_data").publicVar[7];
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
return [ "“若是能活的像少侠这般痛快，倒也是一种幸福”", "“但我只能是一个孤星”", "“雨褪不去的，原来只有世俗悲鸣”", "“所谓爱恨情仇，只不过是虚伪可笑的说法罢了”", "“如果你也能接受地狱的锤炼，那么或许你也会懂吧”", "“一个降世的灾星，一群虚伪的官吏，恶俗的百姓，堕落的朝廷”", "“我是为了使命才活到现在的”", "“他们是唯一待我好的，而为了胜利献出自己就是我的使命”", "“你问我是何胜利？‘将世上所有人都尽数毁灭，也就没有纷争了吧’他们是这么说的”", "“可惜我曾经的家已经消失了。。。”", "“他们让我逃走，等待时机卷土重来”", "“但是还是被元海平发现了。。。”", "“如果我的死能让世人安居乐业就好了，但我还不能死”", "“幸好之后遇到了你”她突然苦笑" ];
},
randomDialog: function() {
return [ "“无理”", "“无情”", "“无义”", "“无仁”", "“无德”", "“无为”", "“无道”", "“无名”", "“无心”", "“儿女私情也好，江湖义气也罢，终究是逃不掉的”" ];
},
initUI: function() {
var t = e("scr_data");
cc.find("Canvas/inf/good").getComponent("cc.Label").string = "白莲巧好感：" + t.choice[5];
},
initUI2: function() {
var t = e("scr_data");
cc.find("Canvas/inf/good").getComponent("cc.Label").string = "元可倾好感：" + t.publicVar[7];
},
eat: function() {
var t = e("scr_data"), n = e("scr_effect"), a = e("scr_public");
if (t.role.maxHp > 0 || t.itemNum[15] > 0) {
if (t.itemNum[15] > 0) {
t.publicVar2[10] = 0;
t.publicVar[2] = 1;
t.itemNum[15] -= 1;
t.choice[5] += 10;
this.initUI();
cc.find("Canvas/Show").removeAllChildren();
n.playText("Canvas/notify", "精血丸-1，白莲巧好感+10", 80);
} else if (t.role.maxHp > 0 && t.health > 1) {
t.publicVar2[10] = 0;
t.publicVar[2] = 1;
t.role.maxHp -= 1000;
t.role.hp = 0;
t.health -= 1;
t.choice[5] += 5;
this.initUI();
cc.find("Canvas/Show").removeAllChildren();
n.playText("Canvas/notify", "最大生命值-1000，健康-1，白莲巧好感+5", 80);
}
a.save();
} else {
cc.find("Canvas/Show").removeAllChildren();
n.playText("Canvas/notify", "吃光光啦！", 80);
}
},
takePill: function() {
var t = e("scr_data"), n = e("scr_effect"), a = e("scr_public");
if (t.itemNum2[1] > 0) {
t.choice[5] += 2;
t.itemNum2[1] -= 1;
this.initUI();
a.save();
cc.find("Canvas/Show").removeAllChildren();
n.playText("Canvas/notify", "“吃点吧”\n“感。感谢。。”\n白莲巧好感+2", 80);
} else {
cc.find("Canvas/Show").removeAllChildren();
n.playText("Canvas/notify", "没药啦~！", 80);
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
t.talkTimes[0] += 1;
t.energy -= 50;
t.choice[5] += 10;
t.itemNum[2] += 100;
this.initUI();
i.save();
} else {
cc.find("Canvas/Show").removeAllChildren();
n.playText("Canvas/notify", "精力不足！", 80);
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
var t = e("scr_data"), n = e("scr_effect"), a = e("scr_public"), i = cc.find("Canvas/UI1"), c = cc.find("Canvas/UI2"), o = cc.find("Canvas/UI3"), r = cc.find("Canvas/UI4"), s = cc.find("Canvas/UI5"), l = i.getChildByName("choice1"), u = i.getChildByName("choice2"), p = i.getChildByName("choice3"), f = i.getChildByName("choice4"), d = i.getChildByName("choice5"), m = i.getChildByName("choice6"), h = t.Gensui[0] + t.Gensui[1] + t.Gensui[2] + t.Gensui[3] + t.Gensui[4] + t.ceshi[0] + t.publicVar2[29];
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
0 != t.Gensui[0] && r.getChildByName("choice7").on("touchstart", T, this);
0 != t.Gensui[1] && r.getChildByName("choice6").on("touchstart", k, this);
0 != t.Gensui[2] && r.getChildByName("choice5").on("touchstart", S, this);
0 != t.Gensui[3] && r.getChildByName("choice4").on("touchstart", H, this);
0 != t.Gensui[4] && r.getChildByName("choice3").on("touchstart", R, this);
0 != t.ceshi[0] && r.getChildByName("choice2").on("touchstart", w, this);
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
var i = parseInt(7.9 * Math.random()), c = [ "“你好啊。。。”", "“最近酒馆怎么样”", "“现在这样其实也还不错呢。。。”", "“最近有什么推荐菜吗？”", "“天气不错啊”", "“你今天看上去额外好看呢”", "“生意兴隆呢”", " “？”" ];
t.publicVar[7] += 1;
t.publicVar2[20] += parseInt(3 * Math.random() + 1);
n.playText("Canvas/notify", c[i] + "，好感+1\n（当前好感：" + t.publicVar[7] + "）\n（下次成功率为" + t.publicVar2[20] + "%", 60);
} else {
var i = parseInt(5.9 * Math.random()), c = [ "寒暄", "吹逼", "赞美", "沉默", "鸡汤", "分析" ];
t.publicVar2[20] -= parseInt(3 * Math.random() + 1);
n.playText("Canvas/notify", "一顿" + c[i] + "，好感+0\n（下次聊天成功率" + t.publicVar2[20] + "%", 60);
}
t.energy -= 10;
O();
}() : n.playText("Canvas/notify", "精力不足！", 60);
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
t.money >= 100 + 10 * t.duanlian[1] ? function() {
var e = Math.max((100 / (2 * Math.max(t.duanlian[0], 1)) + t.duanlian[1]), (5 + t.duanlian[1]));
if (100 * Math.random() < e) {
t.publicVar[15] += 20;
t.duanlian[1] = 0;
t.duanlian[0] += 1;
n.playText("Canvas/notify", "强化成功，最大生命提高2%，你感到精力充沛！", 60);
} else n.playText("Canvas/notify", "强化失败，下次强化概率增加1%，消耗银两增加10", 60);
t.money -= 100 + 10 * t.duanlian[1];
t.duanlian[1] += 1;
O();
q();
}() : n.playText("Canvas/notify", "银两不够，强化个锤子！", 60);
}
function C() {
t.money >= 100 + 10 * t.duanlian[1] ? function () {
var e = Math.max((100 / (2 * Math.max(t.duanlian[0], 1)) + t.duanlian[1]), (5 + t.duanlian[1]));
if (100 * Math.random() < e) {
t.publicVar[16] += 20;
t.duanlian[1] = 0;
t.duanlian[0] += 1;
n.playText("Canvas/notify", "强化成功，防御提高2%！你感到自己脸皮变厚了。", 60);
} else n.playText("Canvas/notify", "强化失败，下次强化概率增加1%，消耗银两增加10", 60);
t.money -= 100 + 10 * t.duanlian[1];
t.duanlian[1] += 1;
O();
q();
}() : n.playText("Canvas/notify", "银两不够，强化个锤子！", 60);
}
function E() {
t.money >= 100 + 10 * t.duanlian[1] ? function () {
var e = Math.max((100 / (2 * Math.max(t.duanlian[0], 1)) + t.duanlian[1]), (5 + t.duanlian[1]));
if (100 * Math.random() < e) {
t.publicVar[17] += 10;
t.duanlian[1] = 0;
t.duanlian[0] += 1;
n.playText("Canvas/notify", "强化成功，攻击提高1%！战斗，爽！", 60);
} else n.playText("Canvas/notify", "强化失败，下次强化概率增加1%，消耗银两增加10", 60);
t.money -= 100 + 10 * t.duanlian[1];
t.duanlian[1] += 1;
O();
q();
}() : n.playText("Canvas/notify", "银两不够，锤子也不给你强化！", 60);
}
function I() {
cc.director.loadScene("shop2");
G();
}
function V() {
t.ceshi[2] += 1;
if (t.ceshi[2] <= 2) {
cc.director.loadScene("shop3");
} else n.playText("Canvas/notify", "出入太多，伤财伤身。", 60);
G();
}
function N() {
var e = 2 * t.publicVar2[30] + 10;
if (t.money >= e) {
t.publicVar2[30] += 1;
t.money -= e;
n.playText("Canvas/notify", "学习完毕，感觉自己工作经验更多了！", 60);
} else n.playText("Canvas/notify", "没钱！", 60);
G();
}
function T() {
a.autoEat();
if (0 == t.Gensui[0]) n.playText("Canvas/notify", "你还没有达成条件", 60); else if (t.ifFollow[0] >= 1) n.playText("Canvas/notify", "白莲巧已入队", 60); else if (t.energy >= 0 && t.hunger >= 0) {
t.ifFollow[0] = 1;
t.ifFollow[1] = 0;
t.ifFollow[2] = 0;
t.ifFollow[3] = 0;
t.ifFollow[4] = 0;
P();
z();
n.playText("Canvas/notify", "“一起？当然可以，走吧”。", 60);
} else n.playText("Canvas/notify", "系统错误", 60);
}
function k() {
if (0 == t.Gensui[1]) n.playText("Canvas/notify", "你还没有达成条件", 60); else if (t.ifFollow[1] >= 1) n.playText("Canvas/notify", "元可倾已入队", 60); else if (t.energy >= 0 && t.hunger >= 0) {
t.ifFollow[0] = 0;
t.ifFollow[1] = 1;
t.ifFollow[2] = 0;
t.ifFollow[3] = 0;
t.ifFollow[4] = 0;
P();
z();
n.playText("Canvas/notify", "“一起？那就走吧！”。", 60);
} else n.playText("Canvas/notify", "系统错误", 60);
}
function S() {
if (0 == t.Gensui[2] && t.haogan1[1] >= 200) n.playText("Canvas/notify", "你还没有达成条件", 60); else if (t.ifFollow[2] >= 1) n.playText("Canvas/notify", "黄桃已入队", 60); else if (t.energy >= 0 && t.hunger >= 0) {
t.ifFollow[0] = 0;
t.ifFollow[1] = 0;
t.ifFollow[2] = 1;
t.ifFollow[3] = 0;
t.ifFollow[4] = 0;
P();
z();
n.playText("Canvas/notify", "“原来我也可以嘛，好开心。”。", 60);
} else n.playText("Canvas/notify", "系统错误", 60);
}
function H() {
a.autoEat();
if (0 == t.Gensui[3]) n.playText("Canvas/notify", "你还没有达成条件", 60); else if (t.ifFollow[3] >= 1) n.playText("Canvas/notify", "鸠已入队", 60); else if (t.energy >= 0 && t.hunger >= 0) {
t.ifFollow[0] = 0;
t.ifFollow[1] = 0;
t.ifFollow[2] = 0;
t.ifFollow[3] = 1;
t.ifFollow[4] = 0;
P();
z();
n.playText("Canvas/notify", "“总算到我出马了！”。", 60);
} else n.playText("Canvas/notify", "系统错误", 60);
}
function R() {
a.autoEat();
if (0 == t.Gensui[4]) n.playText("Canvas/notify", "你还没有达成条件", 60); else if (t.ifFollow[4] >= 1) n.playText("Canvas/notify", "楚惜怜已入队", 60); else if (t.energy >= 0 && t.hunger >= 0) {
t.ifFollow[0] = 0;
t.ifFollow[1] = 0;
t.ifFollow[2] = 0;
t.ifFollow[3] = 0;
t.ifFollow[4] = 1;
P();
z();
n.playText("Canvas/notify", "“杀人？好呀！(*^▽^*)”。", 60);
} else n.playText("Canvas/notify", "系统错误", 60);
}
function w() {
a.autoEat();
if (0 == t.ceshi[0]) n.playText("Canvas/notify", "你还没有达成条件", 60); else if (t.ifFollow[1] <= 0) n.playText("Canvas/notify", "已全部离队", 60); else if (t.energy >= 0 && t.hunger >= 0) {
t.ifFollow[0] = 0;
t.ifFollow[1] = 0;
t.ifFollow[2] = 0;
t.ifFollow[3] = 0;
t.ifFollow[4] = 0;
P();
z();
n.playText("Canvas/notify", "已全部离队。", 60);
} else n.playText("Canvas/notify", "系统错误", 60);
}
function M() {
if (0 == t.publicVar2[29]) n.playText("Canvas/notify", "你还没有获得临天水", 60); else if (t.publicVar2[29] >= 101) n.playText("Canvas/notify", "喝完了。。。", 60); else if (t.publicVar3[15] >= 2) n.playText("Canvas/notify", "小酌怡情，豪饮伤身呐~", 60); else {
t.publicVar2[29] += 5;
t.publicVar3[4] += 500;
t.publicVar3[15] += 1;
t.energy += 100;
t.role.hp = a.role.maxHp();
a.save();
z();
n.playText("Canvas/notify", "战斗爽！生命值全恢复！攻击+500！恢复100行动力（睡觉后加攻状态消失）", 60);
}
}
function L() {
t.publicVar[13] = 0;
a.save();
cc.director.loadScene("main", function() {
e("scr_effect").playText("Canvas/Text/txt_notify", "你已到达稻香街，可以开始探索啦~", 60);
});
}
function B() {
if (t.energy >= 0) {
t.publicVar[13] = 1;
a.save();
cc.director.loadScene("main", function() {
e("scr_effect").playText("Canvas/Text/txt_notify", "你已到达郊外，可以开始探索啦~", 60);
});
} else n.playText("Canvas/notify", "0精力就走不了啦！", 60);
}
function U() {
if (t.energy >= 0) {
t.publicVar[13] = 2;
a.save();
cc.director.loadScene("main", function() {
e("scr_effect").playText("Canvas/Text/txt_notify", "你已到达城中心，可以开始探索啦~", 60);
});
} else n.playText("Canvas/notify", "0精力就走不了啦！", 60);
}
function F() {
if (t.energy >= 0) {
t.publicVar[13] = 3;
a.save();
cc.director.loadScene("main", function() {
e("scr_effect").playText("Canvas/Text/txt_notify", "你已到达英烈门，可以开始探索啦~", 60);
});
} else n.playText("Canvas/notify", "0精力就走不了啦！", 60);
}
function A() {
if (t.energy >= 0) if (t.chioce2[7] <= 5) {
var e = t.chioce2[7];
t.enemyId = [ 501, 502, 503, 504, 505, 506 ][e];
a.save();
cc.director.loadScene("main");
} else {
t.plotId = 99;
a.save();
cc.director.loadScene("plot");
} else n.playText("Canvas/notify", "0精力就走不了啦！", 60);
}
function D() {
if (0 == t.ifFollow[0]) {
t.plotId = 99;
a.save();
cc.director.loadScene("plot");
} else 1 == t.ifFollow[0] && n.playText("Canvas/notify", "白莲巧已成为伙伴！", 60);
}
function P() {
cc.find("Canvas/energy").getComponent("cc.Label").string = "精力 " + t.energy;
}
function O() {
t.publicVar2[17] > 0 ? l.getChildByName("text").getComponent("cc.Label").string = "找元可倾聊天（成功率" + (t.publicVar2[20] + 2 * t.publicVar[20]) + "%）" : l.getChildByName("text").getComponent("cc.Label").string = "？？？？";
p.getChildByName("text").getComponent("cc.Label").string = "锻造强化（成功率" + Math.max((100 / (2 * Math.max(t.duanlian[0], 1)) + t.duanlian[1]), (5 + t.duanlian[1])) + "%）";
cc.find("Canvas/energy").getComponent("cc.Label").string = "精力 " + t.energy;
}
function q() {
cc.find("Canvas/UI2/hunger").getComponent("cc.Label").string = "金钱 " + t.money;
cc.find("Canvas/UI2/rate").getComponent("cc.Label").string = "成功率 " + Math.max((100 / (2 * Math.max(t.duanlian[0], 1)) + t.duanlian[1]), (5 + t.duanlian[1])) + "%";
cc.find("Canvas/UI2/choice1/text").getComponent("cc.Label").string = "饰品强化（生命上限+" + (t.publicVar[15] / 10).toFixed(0) + "%）";
cc.find("Canvas/UI2/choice2/text").getComponent("cc.Label").string = "防具强化（防御+" + (t.publicVar[16] / 10).toFixed(0) + "%）";
cc.find("Canvas/UI2/choice3/text").getComponent("cc.Label").string = "武器强化（攻击+" + (t.publicVar[17] / 10).toFixed(0) + "%）";
}
function G() {
cc.find("Canvas/UI3/money").getComponent("cc.Label").string = "金钱 " + t.money;
cc.find("Canvas/UI3/choice1/text").getComponent("cc.Label").string = "神秘商店";
cc.find("Canvas/UI3/choice2/text").getComponent("cc.Label").string = "群英楼（一日来往，最多两次）";
cc.find("Canvas/UI3/choice3/text").getComponent("cc.Label").string = "工作请教（LV" + t.publicVar2[30] + " 提升需" + (2 * t.publicVar2[30] + 10) + "两）";
}
function z() {
var e = r.getChildByName("choice7").getChildByName("text").getComponent("cc.Label"), n = r.getChildByName("choice6").getChildByName("text").getComponent("cc.Label"), a = r.getChildByName("choice5").getChildByName("text").getComponent("cc.Label"), i = r.getChildByName("choice4").getChildByName("text").getComponent("cc.Label"), c = r.getChildByName("choice3").getChildByName("text").getComponent("cc.Label"), o = r.getChildByName("choice2").getChildByName("text").getComponent("cc.Label"), s = r.getChildByName("choice1").getChildByName("text").getComponent("cc.Label");
0 == t.Gensui[0] ? e.string = "？？？？" : e.string = "邀请白莲巧入队（好感：" + t.choice[5] + "）";
0 == t.Gensui[1] ? n.string = "？？？？" : n.string = "邀请元可倾入队（好感：" + t.publicVar[7] + "）";
0 == t.Gensui[2] ? a.string = "？？？？" : a.string = "邀请黄桃入队（需好感：200）（好感：" + t.haogan1[1] + "）";
0 == t.Gensui[3] ? i.string = "？？？？" : i.string = "邀请鸠入队（好感：" + t.haogan1[0] + "）";
0 == t.Gensui[4] ? c.string = "？？？？" : c.string = "邀请楚惜怜入队（好感" + t.haogan1[2] + "）";
0 == t.ceshi[0] ? o.string = "？？？？" : o.string = "好友全部离队";
0 == t.publicVar2[29] ? s.string = "？？？？" : s.string = "临天水（剩余" + Math.max(t.publicVar2[29] - 1) + "%）";
cc.find("Canvas/UI4/hunger").getComponent("cc.Label").string = "饥饿 " + t.hunger;
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
"undefined" == typeof t.publicVar3 && (t.publicVar3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
"undefined" == typeof t.Gensui && (t.Gensui = [0, 0, 0, 0, 0]);
"undefined" == typeof t.specialEnemy[300001] && (t.specialEnemy[300001] = {
lv: 5,
hp: 5000,
maxHp: 5000,
att: 0,
def: 20
});
"undefined" == typeof t.specialEnemy[300002] && (t.specialEnemy[300002] = {
lv: 5,
hp: 22000,
maxHp: 22000,
att: 100,
def: 100
});
"undefined" == typeof t.specialEnemy[300003] && (t.specialEnemy[300003] = {
lv: 5,
hp: 8270,
maxHp: 8270,
att: 0,
def: 0
});
"undefined" == typeof t.specialEnemy[400001] && (t.specialEnemy[400001] = {
lv: 100,
hp: 100000,
maxHp: 100000,
att: 600,
def: 100
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
hp: 20500,
maxHp: 20500,
att: 3100,
def: 1210
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
var c = [ [ "门帮饰品", 22, 1, 1 ], [ "《医者恒心》秘籍", 23, 1, 1 ], [ "《生手本心》秘籍", 25, 1, 1 ], [ "影闪披风", 24, 1, 1 ], [ "《寓利化形》秘籍", 27, 1, 1 ], [ "《打狗棍法》秘籍", 26, 1, 1 ], [ "门帮专武", 20, 1, 1 ], [ "血魂刀", 17, 1, 1 ], [ "门帮防具", 21, 1, 1 ] ];
t.drawDiscount = parseInt(9 * Math.random() + 1);
this.changeItemId2 = parseInt(8.99 * Math.random());
this.changeItemId3 = parseInt(3.99 * Math.random());
var o = {
1: {
text: [ "路上发现100两，是否要捡起来？", "捡", "不捡" ],
choice1: function() {
if (100 * Math.random() < 25) {
n.randomEvent[0] += 1;
t.closeUI();
cc.find("Canvas/Button").stopAllActions();
cc.find("Event/scr_fight").getComponent("scr_fight").fight(900001);
} else {
n.money += 100;
t.closeUI("获得100两！");
}
},
choice2: function() {
t.closeUI();
}
},
2: {
text: [ "一位眉目清秀的女子在街上喊着", "“小女今日才出师门，\n在此向各位豪杰比试，\n胜者得宝物，败者失盘缠”\n她转而看向了你，“这位少侠请与我一战”", "“不自量力！”", "“在下无心应战（银两>100）”" ],
choice1: function() {
n.publicVar2[12] += 1;
n.haogan1[0] += 10;
t.closeUI();
cc.find("Canvas/Button").stopAllActions();
cc.find("Event/scr_fight").getComponent("scr_fight").fight(200001);
},
choice2: function() {
if (n.money > 100) {
n.publicVar2[12] += 1;
n.money -= 100;
n.orderTimes[7] += 1;
n.haogan1[0] -= 10;
t.closeUI("对方蹦蹦跳跳的离开了...");
} else cc.find("Canvas/Event/Choice/Choice2/choiceText").getComponent("cc.Label").string = "身无分文，只好应战";
}
},
3: {
text: [ "“瞧一瞧看一看，神秘商店开启咯~”，一位小贩喊道，是否过去瞄瞄？", "瞄瞄", "算了" ],
choice1: function() {
cc.director.loadScene("shop2");
},
choice2: function() {
n.energy += 10;
t.closeUI("精力+10（消耗返还！）");
}
},
4: {
text: [ "盘缠被抢啦！", "是否要追赶？", "追！", "算了..." ],
choice1: function() {
var e = [ 810, 811, 812, 813, 814, 815, 816 ][n.randomEvent[10]];
n.publicVar2[0] += 1;
if ("undefined" == typeof e) {
n.money += 100;
t.closeUI("对方见你追来，吓晕了过去！你从身上搜得100银两！");
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
t.closeUI("损失" + e + "两");
}
},
5: {
text: [ "前方一人，" + (this.stealMoney * 1) + "银两盘在手中，", "他正在与人争吵，是否趁火打劫", "确定（成功率" + this.stealRate.toFixed(1) + "%）", "不义而富且贵，于我如浮云" ],
choice1: function() {
if (100 * Math.random() < t.stealRate) {
n.money += 10 * t.stealMoney;
n.publicVar[0] += 10;
t.closeUI("抢劫成功！获得" + 10 * t.stealMoney + "两。罪恶+10（累计" + n.publicVar[0] + "，高罪恶值会导致失眠）");
} else {
n.role.hp = 1;
n.money += 50;
t.closeUI("抢劫失败，你被众人殴打至残，好心人丢了50银两让你治病");
}
t.stealMoney = parseInt(10 * Math.random() + 1);
t.stealRate = parseInt(100 * Math.random()) + 30;
},
choice2: function() {
t.stealMoney = parseInt(10 * Math.random() + 1);
t.stealRate = parseInt(100 * Math.random() + 30);
t.closeUI();
}
},
6: {
text: [ "发现一个被掩埋的宝箱！", "是否尝试获得？", "是", "算了" ],
choice1: function() {
if (100 * Math.random() < 75) (function() {
var e = 100 * Math.random();
if (e <= 20) {
var i = 5 * parseInt(a.maxHunger() / 10);
n.money += 50;
t.closeUI("获得50银两！");
}
if (e > 20) {
var c = parseInt(1.9 * Math.random() + 1);
n.itemNum2[20] += 1;
n.itemNum2[21] += 1;
n.itemNum2[22] += 1;
t.closeUI("门帮系列三件套+1");
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
text: [ "路上碰到一位奄奄一息的仇敌，", "是否要补刀？", "此时不报更待何时", "得饶人处且饶人" ],
choice1: function() {
n.randomEvent[6] += 1;
if (20 == n.randomEvent[6]) {
n.randomEvent[1] += 1;
t.closeUI("你在他身上找到「怨念之灵」，你获得「怨念之灵」*1");
} else {
if (100 * Math.random() <= 15) {
n.publicVar2[5] += 1;
if (n.role.hp >= 1) {
n.role.hp = 1;
t.closeUI("他临死之际趁你不注意将你打成重伤，随后死去！");
} else t.closeUI("他临死之际趁你不注意将你打成重伤，随后死去！");
} else {
var e = 100 * Math.random();
n.publicVar[0] += 5;
if (e <= 20) {
n.money += 100;
t.closeUI("你在他身上找到100银两。罪恶值+5（你目前罪恶" + n.publicVar[0] + "）");
}
if (e > 20 && e <= 80) {
n.itemNum2[1] += 10;
t.closeUI("你在他身上找到【伤药】*10。罪恶值+5（你目前罪恶" + n.publicVar[0] + "）");
}
if (e > 80) {
n.itemNum2[0] += 10;
t.closeUI("你在他身上找到【佳肴】*10。罪恶值+5（你目前罪恶" + n.publicVar[0] + "）");
}
}
}
},
choice2: function() {
t.closeUI("你假装没看见，走开了");
}
},
8: {
text: [ "发现一个修行的好地方", "小憩（精力+20）", "疗伤（生命全恢复）" ],
choice1: function() {
n.energy += 20;
t.closeUI("精力恢复20点！");
},
choice2: function() {
n.role.hp += parseInt(a.role.maxHp());
t.closeUI("恢复全部生命值！");
}
},
9: {
text: [ "“哟，你最近过得如何”刘丹走了过来", "“近日盘缠花光，我看你身体不大健康，这样3两给你回复回复”", "来一发!（3两，成功率" + Math.max(100 - 3 * n.orderTimes[3], 1) + "%）", "爪巴！" ],
choice1: function() {
if (n.money >= 3) {
var e = 100 * Math.random(), a = Math.max(100 - 5 * n.orderTimes[3], 20);
n.money -= 3;
if (e < a) {
n.health += 10
t.closeUI("疗伤成功！健康+10");
} else {
n.role.hp = 1;
n.health += 10
t.closeUI("刘丹传输真气时飞来一只小虫，小手一抖，额外让你失去全部血量！");
}
} else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "。。。这点钱都无了吗";
},
choice2: function() {
n.energy += 10;
t.closeUI("精力+10（消耗返还！）");
}
},
10: {
text: ["你正在前行，一只魂兽出现在前方", "你要怎么做？", "杀！", "与它玩耍"],
choice1: function () {
n.itemNum[14] += 1;
t.closeUI("获得【魂精】*1！");
},
choice2: function () {
n.itemNum2[20] += 1;
n.itemNum2[21] += 1;
n.itemNum2[22] += 1;
t.closeUI("魂兽十分高兴，带你去了一个藏宝洞，获得门帮三件套*1！");
}
},
1001: {
text: [ "你正在前行，一只魂兽出现在前方", "你要怎么做？", "杀！", "与它玩耍" ],
choice1: function() {
n.itemNum[14] += 1;
t.closeUI("获得【魂精】*1！");
},
choice2: function() {
n.itemNum2[20] += 1;
n.itemNum2[21] += 1;
n.itemNum2[22] += 1;
t.closeUI("魂兽十分高兴，带你去了一个藏宝洞，获得门帮三件套*1！");
}
},
1002: {
text: [ "前边出现两条路：", "右边是树林，左边是草地", "你走那边?", "树林", "草地" ],
choice1: function() {
n.itemNum[1] += 2;
n.itemNum[4] += 2;
t.closeUI("获得【木材】*2【毛皮】*2！");
},
choice2: function() {
n.itemNum[0] += 2;
n.itemNum[5] += 2;
t.closeUI("获得【熟肉】*2【草药】*2！");
}
},
1003: {
text: [ "前方出现了一只年幼的稀有魂兽", "趁其不备，杀！", "这么小，算了" ],
choice1: function() {
if (100 * Math.random() < 25) {
t.closeUI();
cc.find("Canvas/Button").stopAllActions();
cc.find("Event/scr_fight").getComponent("scr_fight").fight(904);
} else {
e("scr_data").itemNum[14] += 2;
t.closeUI("获得【魂精】* 2！");
}
},
choice2: function () {
e("scr_data").energy += 20;
t.closeUI("一股浩然正气围绕着你，精力+20");
}
},
1004: {
text: [ "你被一个忍者紧跟不舍，", "你要怎么做？", "正面刚！", "丢点钱（100两）" ],
choice1: function() {
t.closeUI();
cc.find("Canvas/Button").stopAllActions();
cc.find("Event/scr_fight").getComponent("scr_fight").fight(903);
},
choice2: function() {
if (n.money >= 100) {
n.money -= 100;
t.closeUI("那人迅速去捡钱了！");
} else cc.find("Canvas/Event/Choice/Choice2/choiceText").getComponent("cc.Label").string = "没钱！( ¯▽¯；)";
}
},
2001: {
text: [ "“看一看瞧一瞧，侠客擂台，赢了能拿奖哦”", "去", "不去" ],
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
text: [ "有一群僧侣正在求人祈雨，", "是否去试试(贷款无法参加)", "试", "不试" ],
choice1: function() {
var n = e("scr_data");
if (n.money >= 0 && n.dkmoney <= 0) {
var a = 100 * Math.random(), i = Math.min(n.money, 20000);
if (a < 20 && n.day <= 30) {
n.money += i;
t.closeUI("成功！你获得了你当前双倍的银两奖励");
} else {
n.role.hp = 1;
n.health -= 30;
t.closeUI("失败了！你被吸光了所有精血！");
if (n.money >= 20000 && n.dkmoney <= 0 && n.day <= 30) {
n.money += i;
t.closeUI("触发保底！真厉害，但是还是减少了血量。。。");
}
}
} else cc.find("Canvas/Event/Choice/Choice2/choiceText").getComponent("cc.Label").string = "???";
},
choice2: function () {
var n = e("scr_data");
n.energy += 10;
t.closeUI("");
}
},
2003: {
text: [ "“瞧一瞧看一看，今日特惠", "每件" + 10 * i + "两！件件" + 10 * i + "两！", "买不买没关系，进来看一哈，瞧一哈。”", "路边一小贩叫嚷着。", "挑一个看看", "走喽~" ],
choice1: function() {
if (n.money >= 10 * i) {
var e = 100 * Math.random();
n.money -= 10 * i;
if (e <= 40) {
n.itemNum2[1] += 15;
t.closeUI("获得【伤药】*15");
}
if (e > 40 && e <= 55) {
n.itemNum2[12] += 3;
t.closeUI("获得【美酒】*3");
}
if (e > 55 && e <= 80) {
n.itemNum2[0] += 10;
t.closeUI("获得【佳肴】*10");
}
if (e > 80 && e <= 95) {
n.itemNum2[22] += 1;
t.closeUI("获得【门帮饰品】*1");
}
if (e > 95 && e <= 100) {
n.itemNum2[21] += 1;
t.closeUI("获得【门帮防具】*1");
}
} else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "没钱！( ¯▽¯；)";
},
choice2: function() {
t.closeUI();
}
},
2004: {
text: [ "一位和你相同宗门的男子，", "身旁摆放着武器、饰品与防具", "地上一张白布上写道，", "“慈父重病，无钱医治，现出售门帮宝具，希望同门侠客能帮助，售价" + n.randomEvent[7] + "！”", "买了", "溜了溜了~" ],
choice1: function() {
if (n.money >= n.randomEvent[7]) {
n.money -= n.randomEvent[7];
n.itemNum2[20] += 2;
n.itemNum2[21] += 2;
n.itemNum2[22] += 2;
n.choice[4] += 1;
t.closeUI("获得【门帮三件套】* 2！");
n.randomEvent[7] = 99 + 100 * n.choice[4];
} else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "没钱！( ¯▽¯；)";
},
choice2: function() {
n.randomEvent[7] -= 10;
n.randomEvent[7] <= 59 && (n.randomEvent[7] = 59);
t.closeUI();
}
},
2005: {
text: [ "发现一份建房子（LV.1）的小工，", "是否去试试？", "是（需20饥饿,成功率" + Math.min(70 + n.workExp, 100) + "%）", "算了" ],
action: function() {
cc.find("Canvas/Event/Choice/label").getComponent("cc.Label").string = "【提示】可以扣到负数，请谨慎选择";
},
choice1: function() {
var a = e("scr_public");
s();
if (n.hunger >= 0) {
var i = n.workExp, c = 100 * Math.random(), o = 70 + i;
n.hunger -= 20;
a.autoEat();
if (c < o) {
n.money += 50;
n.workExp += 1;
t.closeUI("工作成功，工作经验+1！\n获得" + 50 + "两！");
} else {
n.publicVar2[9] += 1;
n.workExp += 2;
t.closeUI("工作失败，工作经验+2\n【搞砸了】");
}
} else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "饥饿值不足！";
},
choice2: function() {
t.closeUI();
}
},
2006: {
text: [ "发现一份消灭魂兽（LV.2）的小工，", "是否去试试？", "是（需50饥饿,成功率" + Math.min(20 + n.workExp, 100) + "%）", "算了" ],
action: function() {
cc.find("Canvas/Event/Choice/label").getComponent("cc.Label").string = "【提示】可以扣到负数，请谨慎选择";
},
choice1: function() {
var a = e("scr_public");
s();
if (n.hunger >= 0) {
var i = n.workExp, c = 100 * Math.random(), o = 50 + i;
n.hunger -= 50;
a.autoEat();
if (c < o) {
n.money += 150;
n.workExp += 1;
n.itemNum[14] += 2;
t.closeUI("除害成功，工作经验+1！魂精+2获得150两！");
} else {
n.publicVar2[9] += 1;
n.workExp += 2;
t.closeUI("“任务失败，工作经验+2\n【搞砸了】");
}
} else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "饥饿值不足！";
},
choice2: function() {
t.closeUI();
}
},
3001: {
text: [ "远处有一个小商店", "过去看看", "算啦，太累，还不如小睡一下呢" ],
choice1: function() {
cc.director.loadScene("shop2");
},
choice2: function() {
n.energy += 10;
t.closeUI("精力+10");
}
},
3002: {
text: [ "几个乞丐，眼巴巴的看着你，", "是否给点钱？", "给！（需" + Math.min(100 * n.randomEvent[5] + 100, 500) + "两)", "不给！" ],
choice1: function() {
var e = Math.min(100 * n.randomEvent[5], 500);
if (n.money >= e) {
var a = Math.max(Math.round(e / 2), 1);
n.randomEvent[5] += 1;
n.publicVar[0] -= 5;
n.money -= e;
n.haogan1[1] += 15;
if (3 == n.randomEvent[5]) {
n.itemNum[14] += 5;
t.closeUI("乞丐把你带到一个地方，你找到五个「魂精」。罪恶值减" + 5 + "（你目前罪恶" + n.publicVar[0] + "）");
} else if (7 == n.randomEvent[5]) {
n.itemNum2[37] += 10;
t.closeUI("乞丐把你带到一堆白骨前，你找到十个「传家宝碎片」。罪恶值减" + 5 + "（你目前罪恶" + n.publicVar[0] + "）");
} else if (10 == n.randomEvent[5]) {
n.itemNum[12] += 1;
t.closeUI("乞丐送了你一个将令！罪恶值减" + 5 + "（你目前罪恶" + n.publicVar[0] + "）");
} else t.closeUI("乞丐非常感谢你，不停地磕头...罪恶值减" + 5 + "（你目前罪恶" + n.publicVar[0] + "）");
} else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "钱不够啦！";
},
choice2: function () {
t.closeUI("你把乞丐轰走了");
}
},
3003: {
text: [ "前边有两条路，", "左边看起来很好走，", "右边看起来很危险！", "你走哪边?", "左边", "右边" ],
choice1: function() {
n.itemNum[3] += 2;
n.itemNum[0] += 2;
t.closeUI("获得【蔬菜】*2【熟肉】*2！");
},
choice2: function() {
n.enemyId = 300002;
t.closeUI();
cc.find("Canvas/Button").stopAllActions();
cc.find("Event/scr_fight").getComponent("scr_fight").fight(300002);
}
},
3004: {
text: [ "“有奖套圈喽，", "少侠要不要试下手气，", "20两一次！", "试试", "溜了溜了" ],
choice1: function() {
if (n.money >= 2) {
var e = 100 * Math.random(), a = 20 + 10 * n.randomEvent[12];
n.money -= 2;
if (e < a) {
n.randomEvent[12] += 1;
(function() {
var e = 100 * Math.random();
if (e <= 40) {
n.itemNum[4] += 5;
t.closeUI("获得【毛皮】*5，扔圈熟练度+1");
}
if (e > 40 && e <= 50) {
n.money += 50;
t.closeUI("获得50两！扔圈熟练度+1");
}
if (e > 50 && e <= 70) {
n.itemNum2[12] += 1;
t.closeUI("获得【美酒】*1，扔圈熟练度+1");
}
if (e > 70 && e <= 90) {
n.itemNum2[7] += 1;
t.closeUI("获得【元神丹】*1，扔圈熟练度+1");
}
if (e > 90 && e <= 95) {
n.itemNum2[14] += 10;
t.closeUI("获得【苦无】*1，扔圈熟练度+1");
}
if (e > 95) {
n.itemNum[11] += 1;
t.closeUI("获得【官令】*1，扔圈熟练度+1");
}
})();
} else {
n.randomEvent[12] += 1;
t.closeUI("你扔空了，啥也没圈到，扔圈熟练度+1");
}
} else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "没钱！";
},
choice2: function() {
t.closeUI("");
}
},
3005: {
text: [ "“少侠，", "你若能给我些血液，我就给你" + (2 * n.randomEvent[13] + 2) + "两”", "一个神秘道士叫住了你", "行，行吧。。", "不给！" ],
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
text: [ "前边有俩村子，", "东边锣鼓喧天，鞭炮齐鸣;", "西边哭天喊地，神号鬼泣！", "你去哪边?", "东边", "西边" ],
choice1: function() {
var e = 100 * Math.random();
if (e < 90) {
n.money += 20;
t.closeUI("获得20两！");
}
if (e >= 90) {
n.money += 100;
t.closeUI("抢到100两！");
}
},
choice2: function() {
n.itemNum2[0] += 10;
t.closeUI("获得【佳肴】*10！");
}
},
3007: {
text: [ "发现一个可疑的地方，", "是否挖挖看？", "是（需20饥饿,成功率" + (40 + 3 * n.randomEvent[11]) + "%）", "算了" ],
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
n.itemNum[8] += 10;
t.closeUI("挖到【暗铁】*10");
} else if (e < 60) {
n.itemNum[9] += 10;
t.closeUI("挖到出一个盒子，打开一看，发现【良革】*10");
} else if (e < 63) {
n.itemNum2[37] += 25;
t.closeUI("挖到出一个宝箱，打开一看，发现【传家宝碎片】*25");
} else if (e < 100) {
var a = parseInt(5 * Math.random() + 1);
n.money += a;
t.closeUI("挖到一些银两，获得" + a + "两！");
}
}() : t.closeUI("忙活半天，啥也没挖到，挖掘技术+1");
} else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "饥饿值不够！";
},
choice2: function() {
t.closeUI("");
}
},
4001: {
text: ["一位和你相同宗门的男子，", "身旁摆放着武器、饰品与防具", "地上一张白布上写道，", "“慈父重病，无钱医治，现出售门帮宝具，希望同门侠客能帮助，售价" + n.randomEvent[7] + "两！”", "买了", "溜了溜了~"],
choice1: function () {
if (n.money >= n.randomEvent[7]) {
n.money -= n.randomEvent[7];
n.itemNum2[20] += 1;
n.itemNum2[21] += 1;
n.itemNum2[22] += 1;
n.choice[4] += 1;
t.closeUI("获得【门帮三件套】* 1！");
n.randomEvent[7] = 99 + 100 * n.choice[4];
} else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "没钱！( ¯▽¯；)";
},
choice2: function () {
n.randomEvent[7] -= 10;
n.randomEvent[7] <= 59 && (n.randomEvent[7] = 59);
t.closeUI();
}
},
4002: {
text: ["发现一份处理邻里纠纷的工作，是否去试试？", "是（需20饥饿）", "算了"],
action: function () {
cc.find("Canvas/Event/Choice/label").getComponent("cc.Label").string = "【提示】如果饥饿不足，系统将自动使用食物哦^_^";
},
choice1: function () {
var a = e("scr_public");
s();
if (n.hunger >= 0) {
var i = parseInt(10 + 2 * n.publicVar2[30]);
n.money += i;
n.hunger -= 20;
a.autoEat();
t.closeUI("“大家都别吵啦。”获得报酬" + i + "两");
} else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "饥饿值不足！";
},
choice2: function () {
t.closeUI();
}
},
4003: {
text: [ "发现一份处理邻里纠纷的工作，是否去试试？", "是（需20饥饿）", "算了" ],
action: function() {
cc.find("Canvas/Event/Choice/label").getComponent("cc.Label").string = "【提示】如果饥饿不足，系统将自动使用食物哦^_^";
},
choice1: function() {
var a = e("scr_public");
s();
if (n.hunger >= 0) {
var i = parseInt(10 + 2 * n.publicVar2[30]);
n.money += i;
n.hunger -= 20;
a.autoEat();
t.closeUI("“大家都别吵啦。”获得报酬" + i + "两");
} else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "饥饿值不足！";
},
choice2: function() {
t.closeUI();
}
},
4004: {
text: [ "碰到一位烤红薯的老人，是否买点尝尝？", "买2两", "算了" ],
choice1: function() {
if (n.money >= 2) {
var e = Math.min(3 * n.chioce2[4], 50), a = 100 * Math.random();
n.money -= 2;
if (a < e) {
n.chioce2[4] += 1;
n.hunger += 80;
t.closeUI("“啊吧~啊吧~”，不会说话的老人额外送给你一个红薯，饥饿+80！");
} else {
n.chioce2[4] += 1;
n.hunger += 40;
t.closeUI("香喷喷烤红薯，饥饿+40");
}
} else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "没钱！";
},
choice2: function() {
t.closeUI();
}
},
4005: {
text: [ "路上发现" + t.randomItemNum + "个魂精，四周无人，捡不捡？", "捡", "不捡" ],
choice1: function() {
if (100 * Math.random() < 50) {
t.closeUI();
cc.find("Canvas/Button").stopAllActions();
n.enemyId = 900007;
cc.find("Event/scr_fight").getComponent("scr_fight").fight(900007);
} else {
n.itemNum[14] += t.randomItemNum;
t.closeUI("获得" + t.randomItemNum + "个魂精！");
}
},
choice2: function() {
t.closeUI();
}
},
7001: {
text: [ "又逛到那个可疑的地方，是否接着挖？", "是（需30饥饿，当前深度" + n.chioce2[3] + "）", "算了，留着肚子干点别的" ],
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
n.money += 40;
t.closeUI("挖到两枚银币，获得40两！");
} else if (6 == e) {
n.itemNum[8] += 10;
t.closeUI("挖到几个黑色石头，获得【暗铁】*10");
} else if (12 == e) {
n.money += 40;
t.closeUI("挖到两枚银币，获得40两！");
} else if (20 == e) {
n.itemNum[9] += 10;
t.closeUI("挖到出一个宝箱，打开一看，发现良革，获得【良革】*10！");
} else if (32 == e) {
n.money += 40;
t.closeUI("挖到两枚银币，获得40两！");
} else if (50 == e) {
n.itemNum[8] += 10;
t.closeUI("挖到大量黑色石头，获得【暗铁】*10！！！");
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
t.closeUI("精力+10（消耗返还！）");
}
},
7002: {
text: [ "“我的梦想是成为天下第一飞刀手，所以能请你帮个忙个么？”，一位李姓小伙真诚的问道。", "可以呀（报酬200两，但有风险）", "...我是sb？" ],
choice1: function() {
var e = 100 * Math.random(), a = Math.min(20 + 5 * n.chioce2[5], 60);
n.chioce2[5] += 1;
if (e < a) {
n.money += 200;
t.closeUI("“走你！...蛤蛤！完美！”。获得200两，小伙飞刀技术提升！");
} else {
n.money += 1000;
n.role.hp = 1;
n.health -= 50;
t.closeUI("“走你！...哎呀！不好意思，手滑了下...多给你点，拿去买些药吧~”。生命全损失，健康-50，获得1000两报酬，小伙飞刀技术提升！");
}
},
choice2: function() {
n.chioce2[5] -= 1;
t.closeUI("由于小伙子迟迟没有训练，所以飞刀技术退步了...");
}
},
7003: {
text: [ "你碰到一个少林邪僧约战，要怎么做？", "干！", "给点钱走吧。。。(100两)" ],
choice1: function() {
t.closeUI();
cc.find("Canvas/Button").stopAllActions();
cc.find("Event/scr_fight").getComponent("scr_fight").fight(400003);
},
choice2: function() {
if (n.money >= 100) {
n.money -= 100;
t.closeUI("溜了溜了");
} else cc.find("Canvas/Event/Choice/Choice2/choiceText").getComponent("cc.Label").string = "居然。。。没钱了。。";
}
},
7004: {
text: [ "遇到一片资源丰富的矿区，采集些什么好呢？", "矿区肯定是砍树啊", "暗铁！暗铁！" ],
choice1: function() {
var e = parseInt(4 * Math.random() + 8);
n.itemNum[1] += e;
t.closeUI("获得【木材】*" + e + "！");
},
choice2: function() {
var e = parseInt(4 * Math.random() + 4);
n.itemNum[8] += e;
t.closeUI("获得【暗铁】*" + e + "！");
}
},
7005: {
text: [ "遇到一片资源丰富的猎场，采集些什么好呢？", "毛皮常用必选毛皮", "良革才是优选啊" ],
choice1: function () {
var e = parseInt(4 * Math.random() + 8);
n.itemNum[4] += e;
t.closeUI("获得【毛皮】*" + e + "！");
},
choice2: function () {
var e = parseInt(4 * Math.random() + 4);
n.itemNum[9] += e;
t.closeUI("获得【良革】*" + e + "！");
}
},
8001: {
text: [ "遇到了行刺的高级委托（lv.10），做不做呢？(增加罪恶值)", "做（需50饥饿）", "算了" ],
action: function() {
cc.find("Canvas/Event/Choice/label").getComponent("cc.Label").string = "【提示】如果饥饿不足，系统将自动使用食物哦^_^";
},
choice1: function() {
var a = e("scr_public");
s();
if (n.hunger >= 0) {
var i = parseInt(30 + 2 * n.publicVar2[30]);
n.money += i;
n.hunger -= 50;
n.publicVar[0] += 10;
a.autoEat();
t.closeUI("获得报酬" + i + "两，罪恶值+10");
} else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "饥饿值不足！";
},
choice2: function() {
t.closeUI();
}
},
8002: {
text: [ "几个残疾的小乞丐跪坐在路边，身旁放着一个破旧的瓷碗，乞讨吗？丢" + (100 + 200 * n.chioce2[6]) + "两给他们吧", "可怜的孩子啊", "不给！" ],
choice1: function() {
var e = 100 + 200 * n.chioce2[6];
if (n.chioce2[6] > 10) {
var i = a.role.maxHp();
n.role.hp += parseInt(.5 * i);
n.role.hp > i && (n.role.hp = i);
n.haogan1[1] += 10;
t.closeUI("乞丐们笑笑拒绝了你的钱...并帮你清理伤口，生命恢复50%！");
} else if (n.money < e) cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "没钱~"; else if (5 == n.chioce2[6]) {
t.closeUI();
cc.find("Canvas/Button").stopAllActions();
cc.find("Event/scr_fight").getComponent("scr_fight").fight(910);
} else if (10 == n.chioce2[6] && 1 == n.menpai[0]) {
n.money -= e;
n.maxEnergy += 10;
n.haogan1[1] += 10;
n.chioce2[6] += 1;
t.closeUI("乞丐们送给你一本秘籍。最大行动力+10");
} else {
n.money -= e;
n.chioce2[6] += 1;
n.haogan1[1] += 10;
t.closeUI("乞丐们笑笑，无声地向你表达感谢");
}
},
choice2: function() {
n.energy += 10;
t.closeUI("精力+10（消耗返还）");
}
},
8003: {
text: ["遇到了寻宝的高级委托（lv.10），做不做呢？", "做（需70饥饿）", "算了"],
action: function () {
cc.find("Canvas/Event/Choice/label").getComponent("cc.Label").string = "【提示】如果饥饿不足，系统将自动使用食物哦^_^";
},
choice1: function () {
var a = e("scr_public");
s();
if (n.hunger >= 0) {
var i = parseInt(40 + n.publicVar2[30]);
n.money += i;
n.hunger -= 70;
a.autoEat();
t.closeUI("获得报酬" + i + "两");
} else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "饥饿值不足！";
},
choice2: function () {
t.closeUI();
}
},
8004: {
text: ["遇到了寻宝的高级委托（lv.10），做不做呢？", "做（需70饥饿）", "算了"],
action: function () {
cc.find("Canvas/Event/Choice/label").getComponent("cc.Label").string = "【提示】如果饥饿不足，系统将自动使用食物哦^_^";
},
choice1: function () {
var a = e("scr_public");
s();
if (n.hunger >= 0) {
var i = parseInt(40 + n.publicVar2[30]);
n.money += i;
n.hunger -= 70;
a.autoEat();
t.closeUI("获得报酬" + i + "两");
} else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "饥饿值不足！";
},
choice2: function () {
t.closeUI();
}
},
90001: {
text: [ "“欢迎光临，你要做点什么呢？”", "找妹子", "喝点酒（1元）" ],
choice1: function() {},
choice2: function() {
n.energy += 10;
t.closeUI("精力+10（消耗返还）");
}
},
90002: {
text: [ "请问你找哪位？", "", "" ],
choice1: function() {},
choice2: function() {
n.energy += 10;
t.closeUI("精力+10（消耗返还）");
}
},
10001: {
text: [ "在导致流浪的主要原因是：\n（这里仅对比这两类，不讨论身体缺陷问题）", "有不得不做的事（自身因素）", "单纯喜欢/经济（客观因素）" ],
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
text: [ "你是否萌生过我要突然获得神力将欺侮我的都俯首称臣", "有过", "不曾有过。" ],
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
text: [ "你认为复仇是对的吗？", "当然", "不是" ],
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
text: [ "你认为哪种东西更重要？", "亲人朋友的健康", "自己的健康" ],
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
text: [ "你认为那些天天说着不想活了却依旧坚持活着的丧文化是否是精神失常？", "“这可能是他们表达活着的方式。”", "“他们全都是个彻头彻尾的虚伪者！”" ],
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
text: [ "当你除了痛苦呼吸其它都无能为力时，你是否会继续坚持活下去？", "会", "不会" ],
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
text: [ "在回答以上问题时，你是否有想过这些问题与游戏的联系、或者去揣测作者的意图？", "有", "没有" ],
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
text: [ "以上问题你是如实回答的吗？（没有为了通关而去刻意选择答案）", "是的", "不是的" ],
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
text: [ "你愿意回到那个怪异的世界吗？", "愿意", "不愿意" ],
choice1: function() {
n.publicVar3[3] = 311;
t.closeUI("“寻找你的真实吧。”");
},
choice2: function() {
if (n.ifFollow[0] > 0 && n.choice[5] >= 200 && n.dkmoney <= 0) {
n.publicVar3[3] = 412;
n.plotId = 1002;
a.save();
cc.director.loadScene("plot");
} else if (n.haogan1[1] >= 200 && n.choice[5] >= 200 && n.haogan1[0] >= 200 && n.haogan1[1] >= 200 && n.haogan1[2] >= 200 && n.publicVar[7] >= 999 && n.Shengwang >= 5000 && n.dkmoney <= 0) {
n.publicVar3[3] = 417;
n.plotId = 1007;
a.save();
cc.director.loadScene("plot");
} else if (n.ifFollow[1] > 0 && n.publicVar[7] >= 999 && n.dkmoney <= 0) {
n.publicVar3[3] = 413;
n.plotId = 1003;
a.save();
cc.director.loadScene("plot");
} else if (n.ifFollow[3] > 0 && n.haogan1[0] >= 200 && n.dkmoney <= 0) {
n.publicVar3[3] = 414;
n.plotId = 1004;
a.save();
cc.director.loadScene("plot");
} else if (n.ifFollow[2] > 0 && n.haogan1[1] >= 200 && n.dkmoney <= 0) {
n.publicVar3[3] = 415;
n.plotId = 1005;
a.save();
cc.director.loadScene("plot");
} else if (n.ifFollow[4] > 0 && n.haogan1[2] >= 200 && n.dkmoney <= 0) {
n.publicVar3[3] = 416;
n.plotId = 1006;
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
t.gamePoint += parseInt(3 * n.publicVar2[19] / 50) + 3 * n.publicVar2[15] + 10;
t.attPoint = parseInt(21 - 1 * a.role.maxHp() / 10000 - 1 * a.role.att() / 10000 - 1 * a.role.def() / 1000);
t.attPoint = Math.min(Math.max(t.attPoint, 0), 18);
t.totalPoint = t.gamePoint + t.attPoint + n.publicVar[11] - 10 * n.dkmoney;
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
cc.find("Canvas/Event/Choice/label").getComponent("cc.Label").string = "你选择...";
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
t.day > 45 && t.publicVar[1] >= 0 ? a.on("touchstart", this.dekaronButton, this) : a.active = !1;
1 == t.ifFollow[0] ? n.getChildByName("button_friend").on("touchstart", function() {
cc.director.loadScene("friend1");
}, this) : 1 == t.ifFollow[1] && n.getChildByName("button_friend").on("touchstart", function() {
cc.director.loadScene("friendSkill2");
}, this);
},
dekaronButton: function() {
var t = e("scr_data"), n = e("scr_public"), a = e("scr_effect");
t.energy >= 10 ? function() {
var e = [ 201, 202, 300003, 203, 204, 205, 206, 207, 209, 210, 211, 213, 214, 215 ][t.choice[6]];
if ("undefined" == typeof e) a.playText("Canvas/Text/txt_notify", "什么都没有...", 60); else {
t.energy -= 10;
n.save();
cc.find("Event/scr_fight").getComponent("scr_fight").fight(e);
}
}() : a.playText("Canvas/Text/txt_notify", "挑战需10点精力！", 60);
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
if (300 == n.distance && n.stayDay[3] > 1 && 0 == n.publicVar3[2] && n.day <= 175) {
var t = cc.find("Canvas/Button/button_rest");
t.getChildByName("text").getComponent("cc.Label").string = "客  栈";
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
itemName: " 佳肴 ",
needDes: "※需【蔬菜】" + this.data.itemNum[3] + "/2【熟肉】" + this.data.itemNum[0] + "/1",
des: "※获得【佳肴】（已拥有" + this.data.itemNum2[0] + "）",
ifEnough: function (e) {
t.data.itemNum[3] >= 2 && t.data.itemNum[0] >= 1 && (cc.find("Canvas/Page/view/content/page_1/" + e + "/button/name").color = new cc.color(0, 255, 0));
},
button: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.itemNum[3] >= 2 && n.itemNum[0] >= 1) {
n.itemNum[3] -= 2;
n.itemNum[0] -= 1;
n.itemNum2[0] += 1;
i.save();
a.playText("Canvas/notify", "获得【佳肴】*1", 100);
t.delayCreatItemUI1();
} else a.playText("Canvas/notify", "材料不足！", 100);
}
},
1: {
itemName: " 伤药 ",
needDes: "※需【草药】" + this.data.itemNum[5] + "/5",
des: "※获得【伤药】（拥有" + this.data.itemNum2[1] + "）",
ifEnough: function (e) {
t.data.itemNum[5] >= 5 && (cc.find("Canvas/Page/view/content/page_1/" + e + "/button/name").color = new cc.color(0, 255, 0));
},
button: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.itemNum[5] >= 5) {
n.itemNum[5] -= 5;
n.itemNum2[1] += 1;
i.save();
a.playText("Canvas/notify", "获得【伤药】*1", 100);
t.delayCreatItemUI1();
} else a.playText("Canvas/notify", "材料不足！", 100);
}
},
2: {
itemName: "毛皮衣絨LV" + this.data.itemNum2[29],
needDes: "【毛皮】" + this.data.itemNum[4] + "/" + (8 + 7 * this.data.itemNum2[29]),
des: "※防御增加" + 10 * this.data.itemNum2[29] + "点，生命增加" + 500 * this.data.itemNum2[29] + "点",
ifEnough: function (e) {
t.data.itemNum[4] >= 8 + 7 * t.data.itemNum2[29] && (cc.find("Canvas/Page/view/content/page_1/" + e + "/button/name").color = new cc.color(255, 182, 193));
},
button: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), o = n.itemNum[4], r = 8 + 7 * n.itemNum2[29];
if (o >= r) {
n.itemNum[4] -= r;
n.itemNum2[29] += 1;
i.save();
a.playText("Canvas/notify", "合成成功！", 100);
t.delayCreatItemUI1();
} else a.playText("Canvas/notify", "材料不足！", 100);
}
},
3: {
itemName: "打狗棒<丐帮>LV" + this.data.itemNum2[3],
needDes: "※需【木材】" + this.data.itemNum[1] + "/" + (6 + 3 * this.data.itemNum2[3]) + "、【毛皮】" + this.data.itemNum[4] + "/" + (2 + 1 * this.data.itemNum2[3]),
des: "※增加" + 75 * this.data.itemNum2[3] + "点攻击。【暴击】固定40%几率触发暴击",
ifEnough: function (e) {
t.data.itemNum[1] >= 6 + 3 * t.data.itemNum2[3] && t.data.menpai[0] >= 1 && t.data.itemNum[4] >= 2 + 1 * t.data.itemNum2[3] && (cc.find("Canvas/Page/view/content/page_1/" + e + "/button/name").color = new cc.color(255, 165, 0));
},
button: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 6 + 3 * n.itemNum2[3], p = 2 + 1 * n.itemNum2[3];
if (n.itemNum[1] >= c && n.itemNum[4] >= p && n.menpai[0] >= 1) {
n.itemNum[1] -= c;
n.itemNum[4] -= p;
n.itemNum2[3] += 1;
i.save();
a.playText("Canvas/notify", "打狗棒升级成功！", 100);
t.delayCreatItemUI1();
} else a.playText("Canvas/notify", "材料不足或者门派错误！", 100);
}
},
4: {
itemName: "《打狗棍法》<丐帮>第" + this.data.itemNum2[26] + "境",
needDes: "※需【道心】" + this.data.itemNum[2] + "/" + (200 * this.data.itemNum2[26]) + "、【魂精】" + this.data.itemNum[14] + "/" + (8 * this.data.itemNum2[26]),
des: "※增加" + 750 * this.data.itemNum2[26] + "点攻击，击杀敌人后有" + (5 * this.data.itemNum2[26] + this.data.publicVar3[18]) + "%的概率额外掉落奖励",
ifEnough: function (e) {
t.data.itemNum[2] >= 200 * t.data.itemNum2[26] && t.data.itemNum[14] >= 8 * t.data.itemNum2[26] && t.data.menpai[0] >= 1 && (cc.find("Canvas/Page/view/content/page_2/" + e + "/button/name").color = new cc.color(255, 165, 0));
},
button: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 200 * n.itemNum2[26], p = 8 * n.itemNum2[26];
if (n.itemNum[2] >= c && n.itemNum[14] >= p && n.menpai[0] >= 1) {
n.itemNum[2] -= c;
n.itemNum[14] -= p;
n.itemNum2[26] += 1;
i.save();
a.playText("Canvas/notify", "学习成功!", 100);
t.delayCreatItemUI2();
} else a.playText("Canvas/notify", "根基不足或者门派错误！", 100);
}
},
5: {
itemName: "少林真衫<少林>LV" + this.data.itemNum2[11],
needDes: "※需【良革】" + this.data.itemNum[9] + "/" + (10 + 10 * this.data.itemNum2[11]),
des: "※增加" + 750 * this.data.itemNum2[11] + "点生命上限，" + 50 * this.data.itemNum2[11] + "点防御。【金甲护体】受击时，" + 2 * this.data.itemNum2[11] + "%概率提高20%防御（最多叠加20次），并且恢复自身5%的生命",
ifEnough: function (t) {
var n = e("scr_data");
n.itemNum[9] >= 10 + 10 * n.itemNum2[11] && n.menpai[1] >= 1 && (cc.find("Canvas/Page/view/content/page_2/" + t + "/button/name").color = new cc.color(50, 205, 50));
},
button: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 10 + 10 * n.itemNum2[11];
if (n.itemNum[9] >= c && n.menpai[1] >= 1) {
n.itemNum[9] -= c;
n.itemNum2[11] += 1;
i.save();
a.playText("Canvas/notify", "获得【少林真衫】*1！", 100);
t.delayCreatItemUI2();
} else a.playText("Canvas/notify", "材料不足或者门派错误！", 100);
}
},
6: {
itemName: "《金钟罩》<少林>第" + this.data.itemNum2[4] + "境",
needDes: "※需【道心】" + this.data.itemNum[2] + "/" + (200 * this.data.itemNum2[4]) + "、【魂精】" + this.data.itemNum[14] + "/" + (8 * this.data.itemNum2[4]),
des: "※增加" + 5000 * this.data.itemNum2[4] + "点生命上限，" + 250 * this.data.itemNum2[4] + "点防御。50%几率触发【格挡】",
ifEnough: function (e) {
t.data.itemNum[2] >= 200 * t.data.itemNum2[4] && t.data.itemNum[14] >= 8 * t.data.itemNum2[4] && t.data.menpai[1] >= 1 && (cc.find("Canvas/Page/view/content/page_2/" + e + "/button/name").color = new cc.color(50, 205, 50));
},
button: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 200 * n.itemNum2[4], p = 8 * n.itemNum2[4];
if (n.itemNum[2] >= c && n.itemNum[14] >= p && n.menpai[1] >= 1) {
n.itemNum[2] -= c;
n.itemNum[14] -= p;
n.itemNum2[4] += 1;
i.save();
a.playText("Canvas/notify", "学习成功!", 100);
t.delayCreatItemUI2();
} else a.playText("Canvas/notify", "根基不足或者门派错误！", 100);
}
},
7: {
itemName: "苍白神剑<雪山>LV" + this.data.itemNum2[34],
needDes: "※需【木材】" + this.data.itemNum[1] + "/" + (10 + 20 * this.data.itemNum2[34]) + "、【暗铁】" + this.data.itemNum[8] + "/" + (5 + 15 * this.data.itemNum2[34]),
des: "※增加" + 1250 * this.data.itemNum2[34] + "点攻击。攻击时有30%的概率被反噬。",
ifEnough: function (t) {
var n = e("scr_data");
n.itemNum[1] >= 10 + 20 * n.itemNum2[34] && n.itemNum[8] >= 5 + 15 * n.itemNum2[34] && n.menpai[2] >= 1 && (cc.find("Canvas/Page/view/content/page_2/" + t + "/button/name").color = new cc.color(0, 191, 255));
},
button: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 10 + 20 * n.itemNum2[34], o = 5 + 15 * n.itemNum2[34];
if (n.itemNum[1] >= c && n.itemNum[8] >= o && n.menpai[2] >= 1) {
n.itemNum[1] -= c;
n.itemNum[8] -= o;
n.itemNum2[34] += 1;
i.save();
a.playText("Canvas/notify", "获得【苍白神剑】*1！", 100);
t.delayCreatItemUI2();
} else a.playText("Canvas/notify", "材料不足或者门派错误！", 100);
}
},
8: {
itemName: "《傲然剑气》<雪山>秘籍LV" + this.data.itemNum2[9],
needDes: "※需【道心】" + this.data.itemNum[2] + "/" + (200 * this.data.itemNum2[9]) + "、【魂精】" + this.data.itemNum[14] + "/" + (8 * this.data.itemNum2[9]),
des: "※增加" + 150 * this.data.itemNum2[9] + "点防御，" + 750 * this.data.itemNum2[9] + "点生命。【反弹】受到伤害时，固定50%几率额外恢复「" + (100 + 5 * this.data.itemNum2[9]) +"%*对手攻击」点伤害，并且将等同于恢复量的伤害反弹给对方",
ifEnough: function (e) {
t.data.itemNum[2] >= 200 * t.data.itemNum2[9] && t.data.itemNum[14] >= 8 * t.data.itemNum2[9] && t.data.menpai[2] >= 1 && (cc.find("Canvas/Page/view/content/page_3/" + e + "/button/name").color = new cc.color(0, 191, 255));
},
button: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 200 * n.itemNum2[9], p = 8 * n.itemNum2[9];
if (n.itemNum[2] >= c && n.itemNum[14] >= p && n.menpai[2] >= 1) {
n.itemNum[2] -= c;
n.itemNum[14] -= p;
n.itemNum2[9] += 1;
i.save();
a.playText("Canvas/notify", "学习成功!", 100);
t.delayCreatItemUI3();
} else a.playText("Canvas/notify", "根基不足或者门派错误！", 100);
}
},
9: {
itemName: "血魂刀<血刀>LV" + this.data.itemNum2[17],
needDes: "※需【木材】" + this.data.itemNum[1] + "/" + (20 + 10 * this.data.itemNum2[17]) + "、【暗铁】" + this.data.itemNum[8] + "/" + (10 + 20 * this.data.itemNum2[17]),
des: "※增加" + 1500 * this.data.itemNum2[17] + "点生命上限，" + 550 * this.data.itemNum2[17] + "点攻击。前进/探索时，" + (this.data.itemNum2[17] + this.data.publicVar3[9]) + "%几率额外获得一次奖励！",
ifEnough: function (t) {
var n = e("scr_data");
n.itemNum[1] >= 20 + 10 * n.itemNum2[17] && n.itemNum[8] >= 10 + 20 * n.itemNum2[17] && n.menpai[3] >= 1 && (cc.find("Canvas/Page/view/content/page_3/" + t + "/button/name").color = new cc.color(220, 20, 60));
},
button: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 20 + 10 * n.itemNum2[17], o = 10 + 20 * n.itemNum2[17];
if (n.itemNum[1] >= c && n.itemNum[8] >= o && n.menpai[3] >= 1) {
n.itemNum[1] -= c;
n.itemNum[8] -= o;
n.itemNum2[17] += 1;
i.save();
a.playText("Canvas/notify", "获得【血魂刀】*1！", 100);
t.delayCreatItemUI3();
} else a.playText("Canvas/notify", "材料不足或者门派错误！", 100);
}
},
10: {
itemName: "《嗜血剑法》<血刀>第" + this.data.itemNum2[8] + "境",
needDes: "※需【道心】" + this.data.itemNum[2] + "/" + (200 * this.data.itemNum2[8]) + "、【魂精】" + this.data.itemNum[14] + "/" + (8 * this.data.itemNum2[8]),
des: "※增加" + 450 * this.data.itemNum2[8] + "点攻击。【血液敏感】攻击时，固定40%概率恢复伤害30%的生命",
ifEnough: function (e) {
t.data.itemNum[2] >= 200 * t.data.itemNum2[8] && t.data.itemNum[14] >= 8 * t.data.itemNum2[8] && t.data.menpai[3] >= 1 && (cc.find("Canvas/Page/view/content/page_3/" + e + "/button/name").color = new cc.color(220, 20, 60));
},
button: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 200 * n.itemNum2[8], p = 8 * n.itemNum2[8];
if (n.itemNum[2] >= c && n.itemNum[14] >= p && n.menpai[3] >= 1) {
n.itemNum[2] -= c;
n.itemNum[14] -= p;
n.itemNum2[8] += 1;
i.save();
a.playText("Canvas/notify", "学习成功!", 100);
t.delayCreatItemUI3();
} else a.playText("Canvas/notify", "根基不足或者门派错误！", 100);
}
},
11: {
itemName: "云曦红拂<玉女>LV" + this.data.itemNum2[32],
needDes: "※需【毛皮】" + this.data.itemNum[4] + "/" + (20 + 10 * this.data.itemNum2[32]) + "、【良革】" + this.data.itemNum[9] + "/" + (10 + 20 * this.data.itemNum2[32]),
des: "※增加" + 1500 * this.data.itemNum2[32] + "点生命上限，" + 350 * this.data.itemNum2[32] + "点攻击。40%几率触发【闪避】",
ifEnough: function (t) {
var n = e("scr_data");
n.itemNum[4] >= 20 + 10 * n.itemNum2[32] && n.itemNum[9] >= 10 + 20 * n.itemNum2[32] && n.menpai[5] >= 1 && (cc.find("Canvas/Page/view/content/page_3/" + t + "/button/name").color = new cc.color(64, 224, 208));
},
button: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 20 + 10 * n.itemNum2[32], o = 10 + 20 * n.itemNum2[32];
if (n.itemNum[4] >= c && n.itemNum[9] >= o && n.menpai[5] >= 1) {
n.itemNum[4] -= c;
n.itemNum[9] -= o;
n.itemNum2[32] += 1;
i.save();
a.playText("Canvas/notify", "获得【云曦红拂】*1！", 100);
t.delayCreatItemUI3();
} else a.playText("Canvas/notify", "材料不足或者门派错误！", 100);
}
},
12: {
itemName: "《万花鞭法》<玉女>第" + this.data.itemNum2[10] + "境",
needDes: "※需【道心】" + this.data.itemNum[2] + "/" + (200 * this.data.itemNum2[10]) + "、【魂精】" + this.data.itemNum[14] + "/" + (8 * this.data.itemNum2[10]),
des: "※增加" + 250 * this.data.itemNum2[10] + "点攻击。【致盲】每次攻击伤害提高" + 4 * this.data.itemNum2[10] + "%，最多叠加20次",
ifEnough: function (t) {
var n = e("scr_data");
n.itemNum[2] >= 200 * n.itemNum2[10] && n.itemNum[14] >= 8 * n.itemNum2[10] && n.menpai[5] >= 1 && n.juexue[0] >= 1 && (cc.find("Canvas/Page/view/content/page_4/" + t + "/button/name").color = new cc.color(64, 224, 208));
},
button: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 200 * n.itemNum2[10], p = 8 * n.itemNum2[10];
if (n.itemNum[2] >= c && n.itemNum[14] >= p && n.menpai[5] >= 1 && n.juexue[0] >= 1) {
n.itemNum[2] -= c;
n.itemNum[14] -= p;
n.itemNum2[10] += 1;
i.save();
a.playText("Canvas/notify", "学习成功", 100);
t.delayCreatItemUI4();
} else a.playText("Canvas/notify", "根基不足或者门派错误！", 100);
}
},
13: {
itemName: "《莲欣剑法》<玉女>第" + this.data.itemNum2[30] + "境",
needDes: "※需【道心】" + this.data.itemNum[2] + "/" + (200 * this.data.itemNum2[30]) + "、【魂精】" + this.data.itemNum[14] + "/" + (8 * this.data.itemNum2[30]),
des: "※增加" + 350 * this.data.itemNum2[30] + "点攻击。【凌人】每次造成与本绝学增加攻击相同的穿刺伤害，并且减少对方十分之一的护甲",
ifEnough: function (t) {
var n = e("scr_data");
n.itemNum[2] >= 200 * n.itemNum2[30] && n.itemNum[14] >= 8 * n.itemNum2[30] && n.menpai[5] >= 1 && n.juexue[1] >= 1 && (cc.find("Canvas/Page/view/content/page_4/" + t + "/button/name").color = new cc.color(64, 224, 208));
},
button: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 200 * n.itemNum2[30], p = 8 * n.itemNum2[30];
if (n.itemNum[2] >= c && n.itemNum[14] >= p && n.menpai[5] >= 1 && n.juexue[1] >= 1) {
n.itemNum[2] -= c;
n.itemNum[14] -= p;
n.itemNum2[30] += 1;
i.save();
a.playText("Canvas/notify", "学习成功", 100);
t.delayCreatItemUI4();
} else a.playText("Canvas/notify", "根基不足或者门派错误！", 100);
}
},
14: {
itemName: "寰虫蛊壶<五毒>LV" + this.data.itemNum2[33],
needDes: "※需【暗铁】" + this.data.itemNum[8] + "/" + (35 * this.data.itemNum2[33]),
des: "※增加" + 250 * this.data.itemNum2[33] + "点攻击。【蛊毒】每回合对对手额外" + 50 * this.data.itemNum2[33] + "造成点中毒伤害，并回复同等生命，并且减少对方五十分之一的攻击",
ifEnough: function (t) {
var n = e("scr_data");
n.itemNum[8] >= 35 * n.itemNum2[33] && n.menpai[6] >= 1 && n.juexue[0] >= 1 && (cc.find("Canvas/Page/view/content/page_4/" + t + "/button/name").color = new cc.color(34, 139, 34));
},
button: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 35 * n.itemNum2[33];
if (n.itemNum[8] >= c && n.menpai[6] >= 1 && n.juexue[0] >= 1) {
n.itemNum[8] -= c;
n.itemNum2[33] += 1;
i.save();
a.playText("Canvas/notify", "获得【寰虫蛊壶】*1！", 100);
t.delayCreatItemUI4();
} else a.playText("Canvas/notify", "材料不足或者门派错误！", 100);
}
},
15: {
itemName: "《生手本心》<五毒>第" + this.data.itemNum2[25] + "境",
needDes: "※需【道心】" + this.data.itemNum[2] + "/" + (200 * this.data.itemNum2[25]) + "、【魂精】" + this.data.itemNum[14] + "/" + (8 * this.data.itemNum2[25]),
des: "※增加" + 2500 * this.data.itemNum2[25] + "点生命，增加" + 100 * this.data.itemNum2[25] + "点防御，战败后，保留" + parseInt(1 + 500 * this.data.itemNum2[25] + .1 * e("scr_public").role.maxHp() * this.data.itemNum2[25]) + "点生命！",
ifEnough: function (t) {
var n = e("scr_data");
n.itemNum[2] >= 200 * n.itemNum2[25] && n.itemNum[14] >= 8 * n.itemNum2[25] && n.menpai[6] >= 1 && (cc.find("Canvas/Page/view/content/page_4/" + t + "/button/name").color = new cc.color(34, 139, 34));
},
button: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 200 * n.itemNum2[25], p = 8 * n.itemNum2[25];
if (n.itemNum[2] >= c && n.itemNum[14] >= p && n.menpai[6] >= 1) {
n.itemNum[2] -= c;
n.itemNum[14] -= p;
n.itemNum2[25] += 1;
i.save();
a.playText("Canvas/notify", "学习成功", 100);
t.delayCreatItemUI4();
} else a.playText("Canvas/notify", "根基不足或者门派错误！", 100);
}
},
16: {
itemName: "天阳素剑<太极>LV" + this.data.itemNum2[35],
needDes: "※需【木材】" + this.data.itemNum[1] + "/" + (40 + 20 * this.data.itemNum2[35]),
des: "※增加" + 500 * this.data.itemNum2[35] + "点生命上限，" + 250 * this.data.itemNum2[35] + "点攻击。【通透】每次攻击都将减少对方2%的防御，【化解】恒有40%的概率使自己暂时不受伤",
ifEnough: function (t) {
var n = e("scr_data");
n.itemNum[1] >= 40 + 20 * n.itemNum2[35] && n.menpai[7] >= 1 && (cc.find("Canvas/Page/view/content/page_5/" + t + "/button/name").color = new cc.color(240, 255, 255));
},
button: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 40 + 20 * n.itemNum2[35];
if (n.itemNum[1] >= c && n.menpai[7] >= 1) {
n.itemNum[1] -= c;
n.itemNum2[35] += 1;
i.save();
a.playText("Canvas/notify", "获得【天阳素剑】*1！", 100);
t.delayCreatItemUI5();
} else a.playText("Canvas/notify", "材料不足或者门派错误！", 100);
}
},
17: {
itemName: "《阴阳混天箓》<太极>第" + this.data.itemNum2[36] + "境",
needDes: "※需【道心】" + this.data.itemNum[2] + "/" + (200 * this.data.itemNum2[36]) + "、【魂精】" + this.data.itemNum[14] + "/" + (8 * this.data.itemNum2[36]),
des: "※增加" + 1500 * this.data.itemNum2[36] + "点生命。【阴鱼】攻击时有" + (40 + this.data.itemNum2[36]) + "%的概率对对手造成自身攻击2倍的内伤伤害，【阳鱼】受到攻击时有" + (40 + this.data.itemNum2[36]) + "%的概率回复自身攻击2倍的生命",
ifEnough: function (t) {
var n = e("scr_data");
n.itemNum[2] >= 200 * n.itemNum2[36] && n.itemNum[14] >= 8 * n.itemNum2[36] && n.menpai[7] >= 1 && (cc.find("Canvas/Page/view/content/page_5/" + t + "/button/name").color = new cc.color(240, 255, 255));
},
button: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 200 * n.itemNum2[36], p = 8 * n.itemNum2[36];
if (n.itemNum[2] >= c && n.itemNum[14] >= p && n.menpai[7] >= 1) {
n.itemNum[2] -= c;
n.itemNum[14] -= p;
n.itemNum2[36] += 1;
i.save();
a.playText("Canvas/notify", "学习成功", 100);
t.delayCreatItemUI5();
} else a.playText("Canvas/notify", "根基不足或者门派错误！", 100);
}
},
18: {
itemName: "影闪披风<伊贺>LV" + this.data.itemNum2[24],
needDes: "※需【毛皮】" + this.data.itemNum[4] + "/" + (20 + 10 * this.data.itemNum2[24]) + "、【良革】" + this.data.itemNum[9] + "/" + (10 + 20 * this.data.itemNum2[24]),
des: "※增加" + 500 * this.data.itemNum2[24] + "点生命上限。增加" + 2 * this.data.itemNum2[24] + "%逃跑概率！",
ifEnough: function (t) {
var n = e("scr_data");
n.itemNum[4] >= 20 + 10 * n.itemNum2[24] && n.itemNum[9] >= 10 + 20 * n.itemNum2[24] && n.menpai[4] >= 1 && (cc.find("Canvas/Page/view/content/page_5/" + t + "/button/name").color = new cc.color(255, 215, 0));
},
button: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 20 + 10 * n.itemNum2[24], o = 10 + 20 * n.itemNum2[24];
if (n.itemNum[4] >= c && n.itemNum[9] >= o && n.menpai[4] >= 1) {
n.itemNum[4] -= c;
n.itemNum[9] -= o;
n.itemNum2[24] += 1;
i.save();
a.playText("Canvas/notify", "获得【影闪披风】*1！", 100);
t.delayCreatItemUI5();
} else a.playText("Canvas/notify", "材料不足或者门派错误！", 100);
}
},
19: {
itemName: "《魂附鬣蛰》<伊贺>第" + this.data.itemNum2[19] + "境",
needDes: "※需【道心】" + this.data.itemNum[2] + "/" + (200 * this.data.itemNum2[19]) + "、【魂精】" + this.data.itemNum[14] + "/" + (8 * this.data.itemNum2[19]),
des: "※增加" + 150 * this.data.itemNum2[19] + "点攻击。【连击】攻击时减少" + Math.min((this.data.itemNum2[19] + 1), 10) + "个苦无造成额外伤害，通过战斗时右下角【实/虚】控制连击是否开启",
ifEnough: function (e) {
t.data.itemNum[2] >= 200 * t.data.itemNum2[19] && t.data.itemNum[14] >= 8 * t.data.itemNum2[19] && t.data.menpai[4] >= 1 && (cc.find("Canvas/Page/view/content/page_5/" + e + "/button/name").color = new cc.color(255, 215, 0));
},
button: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 200 * n.itemNum2[19], p = 8 * n.itemNum2[19];
if (n.itemNum[2] >= c && n.itemNum[14] >= p && n.menpai[4] >= 1) {
n.itemNum[2] -= c;
n.itemNum[14] -= p;
n.itemNum2[19] += 1;
i.save();
a.playText("Canvas/notify", "学习成功!", 100);
t.delayCreatItemUI5();
} else a.playText("Canvas/notify", "根基不足或者门派错误！", 100);
}
},
20: {
itemName: "门帮专武LV" + this.data.itemNum2[20],
needDes: "※根据每个门派的不同增加属性",
des: "※增加" + ((25 * this.data.itemNum2[20] * this.data.menpai[0]) + (10 * this.data.itemNum2[20] * this.data.menpai[1]) + (20 * this.data.itemNum2[20] * this.data.menpai[3]) + (5 * this.data.itemNum2[20] * this.data.menpai[4]) + (25 * this.data.itemNum2[20] * this.data.menpai[5]) + (10 * this.data.itemNum2[20] * this.data.menpai[6]) + (5 * this.data.itemNum2[20] * this.data.menpai[2]) + (5 * this.data.itemNum2[20] * this.data.menpai[7])) + "点攻击。",
button: function () {
n.playText("Canvas/notify", "每个门派提升都不同哦~", 100);
}
},
21: {
itemName: "门帮防具LV" + this.data.itemNum2[21],
needDes: "※根据每个门派的不同增加属性",
des: "※增加" + ((7 * this.data.itemNum2[21] * this.data.menpai[0]) + (20 * this.data.itemNum2[21] * this.data.menpai[1]) + (5 * this.data.itemNum2[21] * this.data.menpai[3]) + (10 * this.data.itemNum2[21] * this.data.menpai[4]) + (15 * this.data.itemNum2[21] * this.data.menpai[5]) + (10 * this.data.itemNum2[21] * this.data.menpai[6]) + (5 * this.data.itemNum2[21] * this.data.menpai[2]) + (5 * this.data.itemNum2[21] * this.data.menpai[7])) + "点防御。",
button: function () {
n.playText("Canvas/notify", "每个门派提升都不同哦~", 100);
}
},
22: {
itemName: "门帮饰品LV" + this.data.itemNum2[22],
needDes: "※根据每个门派的不同增加属性",
des: "※增加" + ((25 * this.data.itemNum2[22] * this.data.menpai[0]) + (50 * this.data.itemNum2[22] * this.data.menpai[1]) + (50 * this.data.itemNum2[22] * this.data.menpai[3]) + (10 * this.data.itemNum2[22] * this.data.menpai[4]) + (15 * this.data.itemNum2[22] * this.data.menpai[5]) + (25 * this.data.itemNum2[22] * this.data.menpai[6]) + (5 * this.data.itemNum2[22] * this.data.menpai[2]) + (5 * this.data.itemNum2[22] * this.data.menpai[7])) + "点生命。",
button: function () {
n.playText("Canvas/notify", "每个门派提升都不同哦~", 100);
}
},
23: {
itemName: "《太极原章》秘籍LV" + this.data.itemNum2[15],
needDes: "※传世秘籍。",
des: "※每级增加1%全战斗属性（攻防血）。【无双】每级减少敌方2%防御！【至强】每级减少敌方5%逃跑率！",
button: function () {
n.playText("Canvas/notify", "听说使用这个秘籍的人，最后都被打死了...", 100);
}
},
24: {
itemName: "  元神丹  ",
needDes: "※需【残魂】" + this.data.itemNum[6] + "/4 或者【残魄】" + this.data.itemNum[7] + "/8",
des: "※获得【元神丹】。价值很高，可以当作货币，也可自己使用",
ifEnough: function (t) {
var n = e("scr_data");
(n.itemNum[6] >= 4 || n.itemNum[7] >= 8) && (cc.find("Canvas/Page/view/content/page_7/" + t + "/button/name").color = new cc.color(0, 191, 255));
},
button: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = n.itemNum[6], o = n.itemNum[7];
if (c >= 4) {
n.itemNum[6] -= 4;
n.itemNum2[7] += 1;
i.save();
a.playText("Canvas/notify", "获得【元神丹】*1！", 100);
t.delayCreatItemUI7();
} else if (o >= 8) {
n.itemNum[7] -= 8;
n.itemNum2[7] += 1;
i.save();
a.playText("Canvas/notify", "获得【元神丹】*1！", 100);
t.delayCreatItemUI7();
} else a.playText("Canvas/notify", "材料不足！", 100);
}
},
25: {
itemName: "美酒",
needDes: "※需【酒麦】" + this.data.itemNum[10] + "/6",
des: "※获得一罐【美酒】！",
ifEnough: function (t) {
e("scr_data").itemNum[10] >= 6 && (cc.find("Canvas/Page/view/content/page_7/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.itemNum[10] >= 6) {
n.itemNum[10] -= 6;
n.itemNum2[12] += 1;
i.save();
a.playText("Canvas/notify", "获得【美酒】*1！", 100);
t.delayCreatItemUI7();
} else a.playText("Canvas/notify", "材料不足！", 100);
}
},
26: {
itemName: "苦无",
needDes: "※需【暗铁】" + this.data.itemNum[8] + "/1",
des: "※获得一发【苦无】！",
ifEnough: function (t) {
e("scr_data").itemNum[8] >= 1 && (cc.find("Canvas/Page/view/content/page_7/" + t + "/button/name").color = new cc.color(0, 255, 0));
},
button: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.itemNum[8] >= 1) {
n.itemNum[8] -= 1;
n.itemNum2[14] += 1;
i.save();
a.playText("Canvas/notify", "获得【苦无】*1！", 100);
t.delayCreatItemUI7();
} else a.playText("Canvas/notify", "材料不足！", 100);
}
},
27: {
itemName: "鬼催心瓶<五毒>LV" + this.data.itemNum2[38],
needDes: "※需【暗铁】" + this.data.itemNum[8] + "/" + (35 * this.data.itemNum2[38]),
des: "※增加" + 250 * this.data.itemNum2[38] + "点攻击。【蛊毒】每回合对对手额外" + 50 * this.data.itemNum2[38] + "造成点中毒伤害，累计五层后清空毒层并造成一次巨额毒爆伤害。",
ifEnough: function (t) {
var n = e("scr_data");
n.itemNum[8] >= 35 * n.itemNum2[38] && n.menpai[6] >= 1 && n.juexue[1] >= 1 && (cc.find("Canvas/Page/view/content/page_7/" + t + "/button/name").color = new cc.color(34, 139, 34));
},
button: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 35 * n.itemNum2[38];
if (n.itemNum[8] >= c && n.menpai[6] >= 1 && n.juexue[1] >= 1) {
n.itemNum[8] -= c;
n.itemNum2[38] += 1;
i.save();
a.playText("Canvas/notify", "获得【鬼催心瓶】*1！", 100);
t.delayCreatItemUI7();
} else a.playText("Canvas/notify", "材料不足或者门派错误！", 100);
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
cc.find("Canvas/Page/view/content/page_3").removeAllChildren();
for (var e = 8; e <= 11; e++) this.creatPrefab(e, "page_3");
},
creatItemUI4: function() {
cc.find("Canvas/Page/view/content/page_4").removeAllChildren();
for (var e = 12; e <= 15; e++) this.creatPrefab(e, "page_4");
},
creatItemUI5: function() {
cc.find("Canvas/Page/view/content/page_5").removeAllChildren();
for (var e = 16; e <= 19; e++) this.creatPrefab(e, "page_5");
},
creatItemUI6: function() {
cc.find("Canvas/Page/view/content/page_6").removeAllChildren();
for (var e = 20; e <= 23; e++) this.creatPrefab(e, "page_6");
},
creatItemUI7: function() {
cc.find("Canvas/Page/view/content/page_7").removeAllChildren();
for (var e = 24; e <= 27; e++) this.creatPrefab(e, "page_7");
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
e("scr_effect").playText("Canvas/text", "系统检测到你还有没用完的精力，你确定要睡觉吗？", 80);
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
e("scr_effect").playText("Canvas/text", "新开会删除旧存档，你确定要新开吗？", 80);
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
var e = [ "清风终流道", "万古不思春", "英雄气盖世", "羁旅散人间", "吾辈去矣，不必思量" ], t = (e.length, 
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
cc.find("Canvas/Determine/choice1/text").getComponent("cc.Label").string = "带着作者给的" + parseInt(l / 1) + "两，重新开始";
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
var t = e("scr_data"), n = e("scr_public"), a = [ "由于一些人的吐槽，\n(；′⌒`)", "从现在开始，\n→_→", "神一般存在的作者可以将你复活，\n︿(￣︶￣)︿", "但是，你必须放弃一样东西！\n(╬￣皿￣)", "——请做出你的选择！\n(●｀エ´)" ], i = a.length, c = 0, o = cc.find("Canvas/Show"), r = cc.find("Canvas/Determine"), s = this;
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
e.maxHp -= parseInt(.1 * n.role.maxHp());
e.def -= parseInt(.1 * n.role.def());
e.att -= parseInt(.1 * n.role.att());
l();
}, this);
r.getChildByName("choice2").on("touchstart", function() {
t.maxEnergy -= 20;
l();
}, this);
r.getChildByName("choice3").on("touchstart", function() {
if (t.money >= 8000 || t.itemNum[12] >= 20 || t.itemNum2[37] >= 150) {
t.money >= 8000 ? t.money -= 8000 : t.itemNum[12] >= 20 ? t.itemNum[12] -= 20 : t.itemNum2[37] >= 150 && (t.itemNum2[37] -= 150);
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
var t = [ [ "几天后，", "你在草丛中被人发现，", "全身浮肿，面目全非。", "结局——", "【客死他乡】" ], [ "几天后，", "你在草丛中被人发现，", "奄奄一息，身上散发着难闻的味道。", "你立刻被送往政所。", "却被官员发现身份，", "你的复仇生涯就此结束。", "结局——", "【无奈的人生】" ] ], n = "", a = e("scr_public").regionId(), i = (n = a < 4e3 ? t[0] : t[1]).length, c = 0, o = cc.find("Canvas/Show"), r = cc.find("Canvas/Determine"), s = this;
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
a.color = new cc.Color(220, 20, 60);
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
text: [ "你好，我是小马，", "你可能现在一脸懵逼。", "我现在要给你两个选项，", "因为我想知道你接下来会怎么处理。", "回到过去", "管我吊事" ],
BGM: "",
choice1: function() {},
choice2: function() {}
},
1: {
text: [ "我正在回帐篷的路上，", "突然听到一声叫声凄烈的救命，", "我意识到元海平来了，", "不能让他得逞！起码不要是现在！", "管我吊事", "我要杀了他！" ],
BGM: "BGM2",
choice1: function () {
t.distance += 1;
t.enemyId = 0;
t.role.hp = n.role.maxHp();
n.save();
cc.director.loadScene("main", function () {
e("scr_public").save();
e("scr_effect").playText("Canvas/Text/txt_notify", "元海平一拳一拳的攻击着，突然什么东西飞到了你的脚下，你愣了一下，感慨道，原来，是头啊", 60);
});
},
choice2: function() {
if (0 == e("scr_data2").gameData[4]) {
t.skillLv[4] = 0;
t.enemyId = 108;
t.role.hp = n.role.maxHp();
n.save();
cc.director.loadScene("main");
} else cc.director.loadScene("main", function() {
e("scr_data").itemNum[12] += 10;
e("scr_public").save();
e("scr_effect").playText("Canvas/Text/txt_notify", "“白莲巧，这次算你运气好，摊上这人当主，下次让我见到你，等着瞧！”元海平边逃边叫喊着，又从口袋里掉了什么东西出来，你捡起一看。获得【将令】*10", 60);
});
}
},
2: {
text: [ "你好，欢迎来到冥界，我是小马", "作为至高至善的主宰", "我可以将你复活", "并使你获得第二次机会", "我会获胜的", "女人？不要也罢" ],
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
t.distance += 1;
t.enemyId = 0;
t.role.hp = n.role.maxHp();
n.save();
cc.director.loadScene("main", function() {
e("scr_data").itemNum[12] += 10;
e("scr_public").save();
e("scr_effect").playText("Canvas/Text/txt_notify", "“哈哈哈哈，很好，拿上这个东西，去地狱螺旋门口等待复活吧！”，获得【将令】*10", 60);
});
}
},
3: {
text: [ "“哟，你又来了，哈哈", "果然，还是你太弱了吧。”", "“不过我很喜欢看人类垂死挣扎的样子，你想要再来一遍吗？哈哈哈哈哈哈！”", "请您让我再。试一次", "唉，不要了，糟心玩意" ],
BGM: "",
choice1: function() {
var t = e("scr_data");
e("scr_data2").gameData[0] += 1;
t = JSON.parse(cc.sys.localStorage.getItem("dataCopy"));
cc.sys.localStorage.setItem("userData", JSON.stringify(t));
n.save2();
cc.director.loadScene("main", function() {
e("scr_data").itemNum[12] += 15;
e("scr_public").save();
e("scr_effect").playText("Canvas/Text/txt_notify", "“你果然超出我的预期人类，还算你聪明，真是无趣，滚滚滚，别烦我”获得【将令】*15", 60);
});
},
choice2: function() {
t.distance += 1;
t.enemyId = 0;
t.role.hp = n.role.maxHp();
n.save();
cc.director.loadScene("main", function() {
e("scr_data").itemNum[12] += 15;
e("scr_public").save();
e("scr_effect").playText("Canvas/Text/txt_notify", "你果然超出我的预期人类，还算你聪明，真是无趣，滚滚滚，别烦我”获得【将令】*15", 60);
});
}
},
4: {
text: [ "“哈哈哈哈哈哈哈哈哈，蝼蚁，就这点水平吗", "哈哈哈真是可笑，这么多次还是失去了。”", "“你真是个彻头彻尾的失败者”", "小马！我和你没完！", "也许是吧。。" ],
BGM: "",
choice1: function() {
t.enemyId = 998;
t.role.hp = n.role.maxHp();
n.save();
cc.director.loadScene("main");
},
choice2: function() {
t.distance += 1;
t.enemyId = 0;
t.role.hp = n.role.maxHp();
n.save();
cc.director.loadScene("main", function() {
e("scr_data").itemNum[12] += 20;
e("scr_public").save();
e("scr_effect").playText("Canvas/Text/txt_notify", "“看你这么可怜的份上，这些给你吧”，获得【将令】*20", 60);
});
}
},
5: {
text: [ "随着京城的距离越来越近，", "白莲巧每天表达担忧的次数也越来越多。。。", "“别担心，我会保护好你的”", "我们还是分开为好" ],
BGM: "",
choice1: function() {
t.distance += 1;
t.choice[5] += 100;
n.save();
cc.director.loadScene("main", function() {
e("scr_effect").playText("Canvas/Text/txt_notify", "白莲巧恍惚看着你“谢谢。。。”", 60);
});
},
choice2: function() {
t.distance += 1;
t.ifFollow[0] = 0;
n.save();
cc.director.loadScene("main", function() {
e("scr_effect").playText("Canvas/Text/txt_notify", "“说的也是”她马上收拾行囊离开了", 60);
});
}
},
98: {
text: [ "元可倾好感已满足要求，是否邀请元可倾成为伙伴？（暂时入队", "是", "算了" ],
BGM: "",
choice1: function() {
t.ifFollow[0] = 0;
t.ifFollow[1] = 1;
t.publicVar[8] = 1;
n.save();
cc.director.loadScene("home", function() {
e("scr_effect").playText("Canvas/notify", "元可倾成为伙伴！请好好珍惜吧~", 60);
});
},
choice2: function() {
t.publicVar[8] = 1;
cc.director.loadScene("home");
}
},
99: {
text: [ "是否邀请白莲巧成为伙伴？（暂时入队", "是", "算了" ],
BGM: "",
choice1: function() {
t.ifFollow[0] = 1;
t.ifFollow[1] = 0;
n.save();
cc.director.loadScene("home", function() {
e("scr_effect").playText("Canvas/notify", "白莲巧成为伙伴！请好好珍惜吧~", 60);
});
},
choice2: function() {
cc.director.loadScene("home");
}
},
1001: {
text: [ "男人在床上醒来，他躺在一个偌大的白色空间中", "四周缠绕着无数的管子，似乎是连通着他的躯体，他说不出话，因为带着一个透明的口罩，他也动不了，他失去了四肢", "此时空间的一处突然振动，门开了，他听到了两个非常熟悉的声音，但他却怎么都记不起来是谁的，他只能看着这对白衣男女对着他指指点点，又转身离开...", "", "...全剧终..." ],
BGM: "BGM1",
choice1: function() {},
choice2: function() {
cc.director.loadScene("end");
}
},
1002: {
text: [ "因为你的出现，应有的命运扭转，而这，才是你的结局：\n不久前，一个荒无人烟的山上，兴起一户人家，山上野兽众多，没人敢上山查看，只能偶尔看见，男主人带着妻子下山逛集市。", "二人气质非凡，少数几个认得男孩是之前杀灭天下第一高手的那位少侠，但没人敢说出口来", "女孩矜持地笑着，想将集市上的新奇玩意全都买下，男人摸着不富裕的口袋默不作声...", "...全剧终...", "", "结局--【共得圆满】" ],
BGM: "BGM1",
choice1: function() {},
choice2: function() {
cc.director.loadScene("end");
}
},
1003: {
text: [ "因为你的出现，应有的命运扭转，而这，才是你的结局：\n阳光灿烂，酒馆生意兴隆，但女孩却似乎有些不愉快。", "她那不成器的丈夫似猫一般，在房顶慵懒地享受着岁月宁静的时光。", "终于，女孩忍受不住了，她运起轻功登上房檐，给了男孩一巴掌，男孩却似乎并不生气，傻傻笑着，揉着惺忪睡眼，随着女孩进楼帮忙...", "...全剧终...", "", "结局--【岁月静好】" ],
BGM: "BGM1",
choice1: function() {},
choice2: function() {
cc.director.loadScene("end");
}
},
1004: {
text: ["因为你的出现，应有的命运扭转，而这，才是你的结局：\n“你说咱们以后让他学啥好呢？”女孩挽着男孩的臂膀，笑的灿烂。", "男孩改去了往日的阴沉，露出了少有的微笑以待，“孩子还没出生就想这么多，是不是太早了些。”。", "4月的阳光清爽温柔，照在两人的身上，他们要去赶集，步伐却没有变快的意思，时不时的树荫，撒了糖的花香，将远去的声音柔和，听的不大真切...", "...全剧终...", "", "结局--【铭得欢心】"],
BGM: "BGM1",
choice1: function () {},
choice2: function () {
cc.director.loadScene("end");
}
},
1005: {
text: ["因为你的出现，应有的命运扭转，而这，才是你的结局：\n平安镇，在那场事件后，迎来了少有的平静。", "“这是不是有些贵了呀。”，“你喜欢就行。”", "女孩从未想过自己能成婚，她的乞丐朋友们纷纷前来祝福，褪去破旧的衣服，穿上大红色的喜服，他们笑着相拥...", "...全剧终...", "", "结局--【尽守温情】"],
BGM: "BGM1",
choice1: function () { },
choice2: function () {
cc.director.loadScene("end");
}
},
1006: {
text: ["因为你的出现，应有的命运扭转，而这，才是你的结局：\n女孩仍旧有些癫狂，但在怀得身孕后正常了不少，不过依然会时不时念叨些什么，那是男孩的名字。", "“回家了？”，“嗯，真累啊。”", "女孩不断地尝试着变成一位温柔的妻子，不过总是以失败告终，男孩也不说什么，只是淡淡的笑，然后他们相拥的背影在秋日的光影下化作温柔的一簇，淡然消失在茫茫人海...", "...全剧终...", "", "结局--【青梅相竹马】"],
BGM: "BGM1",
choice1: function () { },
choice2: function () {
cc.director.loadScene("end");
}
},
1007: {
text: ["因为你的出现，应有的命运扭转，而这，才是你的结局：\n男人在偌大的床上醒来，他脸上的不悦是对被吵醒的最好回答，但女孩们似乎并不在意。", "武林至尊，天地共主，这是天下人对男人的称呼，没人知道他是如何走到这一步的，也没人知道他的身世", "男人有些恍惚，但床上五位俊俏的少女总是能将他拉回现实，江山，权利，美人，他拥有了所有人都梦想着的东西，但那是否是男人所求的？我们不得而知...", "...全剧终...", "", "结局--【红颜江山】"],
BGM: "BGM1",
choice1: function () { },
choice2: function () {
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
itemName: ["熟肉", "木材", "道心", "蔬菜", "毛皮", "草药", "残魂", "残魄", "暗铁", "良革", "酒麦", "官令", "将令", "※\洪荒之气/※", "魂精", "精血丸" ],
itemName2: ["佳肴", "伤药", "精魄", "打狗棒", "《金钟罩》秘籍", "《无中生有》秘籍", "《妙手回春》秘籍", "元神", "《嗜血剑法》秘籍", "《傲然剑气》秘籍", "《万花鞭法》秘籍", "少林真衫", "美酒", "《富财金经》秘籍", "苦无", "《太极原章》秘籍", "兵魂", "血魂刀", "《丐离趋势》秘籍", "《魂附鬣蛰》秘籍", "门帮专武", "门帮防具", "门帮饰品", "《医者恒心》秘籍", "影闪披风", "《生手本心》秘籍", "《打狗棍法》秘籍", "《寓利化形》秘籍", "《魔刀灭极》秘籍", "毛皮衣絨", "《莲欣剑法》秘籍", "《醉侠烂漫刀》秘籍", "云曦红拂", "苍白神剑", "寰虫蛊壶", "天阳素剑", "阴阳混天箓", "传家宝碎片", "鬼催心瓶"],
itemName3: ["权耀神龙之杖", "存光凡竹指虎", "云顶芝士雪豹", "苍天怜道血刃", "禁忌负影卷轴", "光华灿烂云裳", "蛮虫厮木锻戒", "万古独存玉佩"],
ifNotify: !1,
init: function() {
var t = cc.find("Canvas/Text"), n = e("scr_data");
t.getChildByName("txt_day").getComponent("cc.Label").string = this.regionName() + n.day + "日";
t.getChildByName("txt_energy").getComponent("cc.Label").string = n.energy + "/" + this.maxEnergy();
t.getChildByName("txt_hunger").getComponent("cc.Label").string = n.hunger + "/" + this.maxHunger();
t.getChildByName("txt_health").getComponent("cc.Label").string = "健康  " + n.health;
t.getChildByName("txt_hp").getComponent("cc.Label").string = "生命  " + n.role.hp ;
t.getChildByName("txt_maxhp").getComponent("cc.Label").string = "最大生命  " + this.role.maxHp();
t.getChildByName("txt_att").getComponent("cc.Label").string = "攻击  " + this.role.att();
t.getChildByName("txt_def").getComponent("cc.Label").string = "防御  " + this.role.def();
t.getChildByName("txt_money").getComponent("cc.Label").string = "银两  " + n.money ;
t.getChildByName("txt_distance").getComponent("cc.Label").string = "距离  " + n.distance + "km";
t.getChildByName("txt_item1").getComponent("cc.Label").string = "声望  " + n.Shengwang;
t.getChildByName("txt_item2").getComponent("cc.Label").string = "战斗lv" + parseInt( n.jinyan / 10 ) + ".";
this.mainUITextColor();
this.buttonState();
this.showPlace();
},
mainUITextColor: function() {
var t = e("scr_data"), n = cc.find("Canvas/Button"), a = "";
t.hunger <= 0 && (a += "【饥饿】");
t.skillLv[4] >= 1 && (a += "【虚炁】");
t.buffState[0] >= 1 && (a += "【醉熏】");
t.menpai[0] >= 1 && (a += "【丐帮】");
t.menpai[0] >= 1 && t.juexue[0] >= 1 && (a += "1.盘地蛇");
t.menpai[0] >= 1 && t.juexue[1] >= 1 && (a += "2.饿鬼道");
t.menpai[1] >= 1 && (a += "【少林】");
t.menpai[3] >= 1 && (a += "【血刀】");
t.menpai[3] >= 1 && t.juexue[0] >= 1 && (a += "1.伺血者");
t.menpai[3] >= 1 && t.juexue[1] >= 1 && (a += "2.觅血者");
t.menpai[4] >= 1 && (a += "【伊贺】");
t.menpai[5] >= 1 && (a += "【玉女】");
t.menpai[5] >= 1 && t.juexue[0] >= 1 && (a += "1.缠天绫");
t.menpai[5] >= 1 && t.juexue[1] >= 1 && (a += "2.承剑行");
t.menpai[6] >= 1 && (a += "【五毒】");
t.menpai[6] >= 1 && t.juexue[0] >= 1 && (a += "1.千足虫");
t.menpai[6] >= 1 && t.juexue[1] >= 1 && (a += "2.毒螯蝎");
t.menpai[2] >= 1 && (a += "【雪山】");
t.menpai[7] >= 1 && (a += "【太极】");
if (t.day <= 90) {
1 == t.weather[0] && (a += "「烈阳」");
1 == t.weather[1] && (a += "「晴朗」");
1 == t.weather[2] && (a += "「阴雨」");
1 == t.weather[3] && (a += "「暴雨」");
1 == t.weather[4] && (a += "「清风」");
}
if (t.day > 90) {
1 == t.weather[0] && (a += "「暴雪」");
1 == t.weather[1] && (a += "「晴朗」");
1 == t.weather[2] && (a += "「阴雨」");
1 == t.weather[3] && (a += "「暴雨」");
1 == t.weather[4] && (a += "「清风」");
}
n.getChildByName("txt_state").getComponent("cc.Label").string = a;
},
showPlace: function() {
var t = e("scr_data"), n = cc.find("Canvas/Button"), qq = "";
if (300 == t.distance) {
0 == t.publicVar[13] && (qq += "「稻香街」");
1 == t.publicVar[13] && (qq += "「郊外」");
2 == t.publicVar[13] && (qq += "「城中心」");
3 == t.publicVar[13] && (qq += "「英烈门" + t.publicVar3[1] + "米」");
}
n.getChildByName("txt_place").getComponent("cc.Label").string = qq;
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
var t = e("scr_data"), n = t.role.maxHp + 5000 * t.itemNum2[4] * t.menpai[1] + 1500 * t.itemNum2[17] * t.menpai[3] + 1500 * t.itemNum2[32] * t.menpai[5] + 500 * t.itemNum2[24] * t.menpai[4] + 150 * t.itemNum2[11] + t.publicVar3[16] + 500 * t.itemNum2[29] + 2500 * t.itemNum2[25] + 4 * t.orderTimes[0] + 25 * t.itemNum2[22] * t.menpai[0] + 50 * t.itemNum2[22] * t.menpai[1] + 50 * t.itemNum2[22] * t.menpai[3] + 5 * t.itemNum2[22] * t.menpai[4] + 15 * t.itemNum2[22] * t.menpai[5] + 25 * t.itemNum2[22] * t.menpai[6] + 5 * t.itemNum2[22] * t.menpai[2] + 500 * t.itemNum2[35] * t.menpai[7] + 1500 * t.itemNum2[36] * t.menpai[7] + 5 * t.itemNum2[22] * t.menpai[7] + Math.max(30 * t.publicVar[0] * t.menpai[3], 0) + 5000 * t.itemNum3[2] + 5000 * t.itemNum3[6] + 5000 * t.itemNum3[7] + 10 * t.CJByh2 * t.itemNum3[4] + 10 * t.ifFollow[4] * t.haogan1[2] + 750 * t.itemNum2[9] * t.menpai[2];
n = Math.round(n * (1 + t.publicVar[15] / 1e3 + t.itemNum2[15] / 100 + t.publicVar3[5] / 100));
return n;
},
att: function() {
var t = e("scr_data"), n = 1;
1 == t.publicVar && (n = 1);
var a = t.role.att + 75 * t.itemNum2[3] * t.menpai[0] + 450 * t.itemNum2[8] * t.menpai[3] + 250 * t.itemNum2[10] + 350 * t.itemNum2[30] + 350 * t.itemNum2[32] * t.menpai[5] + 550 * t.itemNum2[17] * t.menpai[3] + 150 * t.itemNum2[19] * t.menpai[4] + t.publicVar3[4] + 250 * t.itemNum2[33] * t.menpai[6] + 250 * t.itemNum2[38] * t.menpai[6] + 25 * t.itemNum2[20] * t.menpai[0] + 10 * t.itemNum2[20] * t.menpai[1] + 20 * t.itemNum2[20] * t.menpai[3] + 10 * t.itemNum2[20] * t.menpai[4] + 750 * t.itemNum2[26] * t.menpai[0] + 25 * t.itemNum2[20] * t.menpai[5] + 10 * t.itemNum2[20] * t.menpai[6] + 1250 * t.itemNum2[34] * t.menpai[2] + 5 * t.itemNum2[20] * t.menpai[2] + 250 * t.itemNum2[35] * t.menpai[7] + 5 * t.itemNum2[20] * t.menpai[7] + Math.max(10 * t.publicVar[0] * t.menpai[4], 0) + 1000 * t.itemNum3[0] + 1000 * t.itemNum3[3] + 1000 * t.itemNum3[4] + 2 * t.CJByh2 * t.itemNum3[4] + Math.max(1 * t.publicVar[0] * t.menpai[0], 0) + 1 * t.maxHunger * t.menpai[0] * t.juexue[1];
"undefined" != typeof t.ifFollow[0] && 1 == t.ifFollow[0] && (a += Math.max(parseInt(t.choice[5] / 2 + 100), 0));
a = Math.round(a * (1 + t.publicVar[17] / 1e3 + t.itemNum2[15] / 100 + t.publicVar3[5] / 100));
return a;
},
def: function() {
var t = e("scr_data"), n = 1;
1 == t.publicVar && (n = 1);
var a = t.role.def + 150 * t.itemNum2[9] * t.menpai[2] + 50 * t.itemNum2[11] * t.menpai[1] + 10 * t.skillLv[8] + 30 * t.skillLv[20] + t.publicVar3[10] + 10 * t.itemNum2[29] + 250 * t.itemNum2[4] * t.menpai[1] + 100 * t.itemNum2[25] + 7 * t.itemNum2[21] * t.menpai[0] + 20 * t.itemNum2[21] * t.menpai[1] + 5 * t.itemNum2[21] * t.menpai[3] + 10 * t.itemNum2[21] * t.menpai[4] + 15 * t.itemNum2[21] * t.menpai[5] + 10 * t.itemNum2[21] * t.menpai[6] + 5 * t.itemNum2[21] * t.menpai[2] + 5 * t.itemNum2[21] * t.menpai[7] + Math.max(10 * t.publicVar[0] * t.menpai[6], 0) + 1000 * t.itemNum3[1] + 1000 * t.itemNum3[5] + 2 * t.CJByh2 * t.itemNum3[4];
a = Math.round(a * (1 - t.skillLv[4] * n * t.CJBtj) * (1 + t.publicVar[16] / 1e3 + t.itemNum2[15] / 100 + t.publicVar3[5] / 100));
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
a < n[0] && (t = "桃花村.");
a == n[0] && (t = "平安镇.");
a > n[0] && a < n[1] && (t = "顺天府.");
a == n[1] && (t = "京城.");
return t;
},
maxEnergy: function() {
var t = e("scr_data"), n = t.skillLv, a = t.maxEnergy + 10 * t.itemNum2[2] + t.friendSkill1[1] * t.ifFollow[0] * 20;
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
t.hunger += 5;
100 * Math.random() < 15 && (t.health += 0);
this.save();
return !0;
}
if (t.itemNum2[0] >= 1) {
t.itemNum2[0] -= 1;
t.orderTimes[2] += 1;
t.hunger += 40;
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
cc.find("Canvas/Day").getComponent("cc.Label").string = "第" + t.day + "日";
})();
n.autoEat();
(function() {
var e = 3 * t.orderTimes[1] - t.orderTimes[4], n = 100 * Math.random();
1 == t.publicVar[1] && (e = t.orderTimes[1] - t.orderTimes[4]);
if (n < e) {
t.publicVar2[8] += 1;
t.skillLv[4] = 1;
i.creatText("smoke", "【虚炁】产生！");
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
cc.find("Canvas/AttrShow/energy/text").getComponent("cc.Label").string = "精力 +" + (a + e) + "（" + t.energy + "/" + a + "）";
})();
(function() {
if (t.itemNum2[6] > 0) {
var e = 1000 * t.itemNum2[6];
n.role.maxHp();
c() && (e *= 2);
t.role.hp += e;
n.ifMaxHp();
cc.find("Canvas/AttrShow/hp/text").getComponent("cc.Label").string = "生命 +" + e + "（" + t.role.hp + "/" + n.role.maxHp() + "）";
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
!function () {
if (100 <= t.distance) {
t.button[1] = !0;
}
}();
(function() {
(function() {
if (t.hunger <= 0) {
t.health -= 1;
i.creatText("hunger", "【饥饿】健康值降低1点！");
}
})();
(function () {
if (t.honghuang >= 1) {
t.itemNum[13] += 1 * t.honghuang;
i.creatText("skill7", "【洪荒】洪荒之气数量回复！");
}
})();
(function () {
if (t.haogan1[1] < 200 && 1 == t.ifFollow[2] ) {
t.ifFollow[2] = 0;
i.creatText("skill13", "【黄桃离队】不和你玩了！");
}
})();
(function () {
if (t.dk2 >= 1) {
t.dk2 = 0;
i.creatText("skill8", "");
}
})();
(function () {
if (t.ceshi[2] >= 2) {
t.ceshi[2] = 0;
i.creatText("skill9", "");
}
})();
(function () {
if (t.health >= 1) {
t.sysx = 1;
i.creatText("skill10", "");
}
})();
(function () {
if (t.haogan[0] >= 0 && t.menpai[2] >= 1) {
t.role.hp = n.role.maxHp();
i.creatText("skill4", "【雪兔的赐福】血量回满！");
}
})();
(function () {
if (t.jiuguan >= 0) {
t.jiuguan = 1;
}
})();
(function () {
if (t.ysd >= 1) {
t.ysd = 0;
}
})();
(function () {
if (t.menpai[3] >= 1 && t.juexue[0] >= 1) {
var pp = e("scr_public").role.maxHp();
t.role.hp = 0.25 * pp + 2 * t.choice[5];
t.role.maxHp += 250;
t.health += 1;
t.itemNum[15] += 1;
i.creatText("skill6", "【血液崇拜.不灭】失去部分血量！最大生命值+250,精血丸+1,健康+1");
}
})();
(function () {
if (t.menpai[3] >= 1 && t.juexue[1] >= 1) {
var pp = e("scr_public").role.maxHp();
t.role.hp = 0.25 * pp + 2 * t.choice[5];
t.role.att += 50;
t.itemNum[15] += 1;
i.creatText("skill6", "【血液崇拜.不羁】失去部分血量！攻击力+50,精血丸+1");
}
})();
(function () {
var e = t.fuzai;
if (e >= 1) {
t.maxEnergy -= 2;
t.fuzai1 += 1;
t.dkmoney += t.dkmoney2 * 0.02
i.creatText("getMoney", "【负债】失去2点最大行动力，贷款利息增加");
}
})();
(function () {
var e = 100 * Math.random();
if (t.menpai[0] * t.juexue[0] > 0 && e >= 0) {
var a = 100 * Math.random();
if (a <= 20) {
t.itemNum[3] += 1;
t.money += 10;
i.creatText("skill5", "【丐帮天赋】获得「蔬菜」* 1，银两+10");
return !0;
}
if (a > 20 && a <= 40) {
t.itemNum[5] += 1;
t.money += 10;
i.creatText("skill5", "【丐帮天赋】获得「草药」* 1，银两+10");
return !0;
}
if (a > 40 && a <= 60) {
t.itemNum[0] += 1;
t.money += 10;
i.creatText("skill5", "【丐帮天赋】获得「熟肉」* 1，银两+10");
return !0;
}
if (a > 60 && a <= 80) {
t.itemNum[1] += 2;
t.money += 10;
i.creatText("skill5", "【丐帮天赋】获得「木材」* 2，银两+10");
return !0;
}
if (a > 80) {
t.itemNum[4] += 2;
t.money += 10;
i.creatText("skill5", "【丐帮天赋】获得「毛皮」* 2，银两+10");
}
}
})();
(function() {
var e = 100 * Math.random(), n = t.itemNum2[5];
if (t.itemNum2[5] > 0 && e < 30) {
var a = 100 * Math.random();
if (a <= 20) {
t.itemNum[3] += n;
i.creatText("skill1", "【《无中生有》秘籍】获得「蔬菜」*" + n);
return !0;
}
if (a > 20 && a <= 40) {
t.itemNum[5] += n;
i.creatText("skill1", "【《无中生有》秘籍】获得「草药」*" + n);
return !0;
}
if (a > 40 && a <= 60) {
t.itemNum[0] += n;
i.creatText("skill1", "【《无中生有》秘籍】获得「熟肉」*" + n);
return !0;
}
if (a > 60 && a <= 80) {
t.itemNum[1] += n;
i.creatText("skill1", "【《无中生有》秘籍】获得「木材」*" + n);
return !0;
}
if (a > 80) {
t.itemNum[4] += n;
i.creatText("skill1", "【《无中生有》秘籍】获得「毛皮」*" + n);
}
}
})();
(function () {
var a = 100 * Math.random();
if (a <= 5) {
t.weather[0] = 1;
t.weather[1] = 0;
t.weather[2] = 0;
t.weather[3] = 0;
t.weather[4] = 0;
}
if (a > 5 && a <= 60) {
t.weather[0] = 0;
t.weather[1] = 1;
t.weather[2] = 0;
t.weather[3] = 0;
t.weather[4] = 0;
}
if (a > 60 && a <= 70) {
t.weather[0] = 0;
t.weather[1] = 0;
t.weather[2] = 1;
t.weather[3] = 0;
t.weather[4] = 0;
}
if (a > 70 && a <= 80) {
t.weather[0] = 0;
t.weather[1] = 0;
t.weather[2] = 0;
t.weather[3] = 1;
t.weather[4] = 0;
}
if (a > 80) {
t.weather[0] = 0;
t.weather[1] = 0;
t.weather[2] = 0;
t.weather[3] = 0;
t.weather[4] = 1;
}
})();
(function() {
if (a[10] > 0) {
var e = 100 * Math.random();
if (e < 40) {
var n = a[10];
c() && (n *= 2);
t.health += n;
i.creatText("skill2", "【自愈】健康值+" + n);
}
}
})();
(function() {
var e = 100 * Math.random();
if (a[6] > 0 && e < 40) {
var n = a[6] + parseInt(t.randomEvent[6] / 10);
t.money += n;
i.creatText("skill3", "【捡钱】获得" + n + "两");
}
})();
(function() {
var e = t.itemNum2[13];
if (e > 0) {
var n = 50 * e;
t.money += n;
i.creatText("getMoney", "【《富财金经》秘籍】获得" + n + "两");
}
})();
(function() {
var e = 100 * Math.random();
if (t.skillLv[26] > 0 && e < 30) {
t.energy += parseInt(.3 * n.maxEnergy());
t.energy -= parseInt(.3 * 1 * t.menpai[0] * t.juexue[1] * n.maxEnergy());
i.creatText("spirit", "【不屈的精神力】额外恢复30%精力！");
}
})();
(function() {
var e = 100 * Math.random(), n = (t.publicVar[0] - 99999999999 * t.itemNum3[3]) / 3;
if (e < n) {
t.energy -= parseInt(.5 * t.energy);
i.creatText("hunger", "【失眠】精力-50%！");
}
})();
(function() {
if (1 == t.ifFollow[0] && 0 == t.publicVar[2]) {
t.publicVar2[10] += 1;
t.choice[5] -= 10;
i.creatText("ifEat", "【渴血症】白莲巧好感-10（没事。。我没事）");
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
i.creatText("sell", "【出售】兵魂" + e + "个，总售额" + n + "两，你分到" + a + "两！元可倾好感+" + c);
}
})();
(function() {
if (1 == t.ifFollow[1] && t.friendSkill[2] > 0) {
var e = 100 * Math.random(), n = Math.max(parseInt(t.publicVar[7] / 15 + 25), 25);
if (e < n) {
var a = parseInt(.02 * t.publicVar2[18]);
t.publicVar2[18] -= a;
t.money += a;
i.creatText("sell", "【清风怀仁】元可倾给了你" + a  + "两！");
}
}
})();
(function() {
if (1 == t.ifFollow[1] && t.friendSkill[7]) {
var e = 100 * Math.random(), n = Math.max(parseInt(t.publicVar[7] / 10 + 20), 20);
if (e < n) {
t.health += 10;
i.creatText("reduceSmoke", "【清风怀仁2】健康增加10点！");
}
}
})();
(function() {
if (t.publicVar3[5] > 0) {
var e = parseInt(.2 * t.publicVar3[5] + 1);
t.publicVar3[5] -= e;
t.publicVar3[5] < 0 && (t.publicVar3[5] = 0);
i.creatText("gameBuff", "【兴奋消退】模拟训练获得的属性加成效果消退" + e + "%，还剩下" + t.publicVar3[5] + "%");
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
cc.find("Canvas/AttrShow/hunger/text").getComponent("cc.Label").string = "饥饿 -" + e + "（" + t.hunger + "/" + n.maxHunger() + "）";
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
cc.find("Canvas/money").getComponent("cc.Label").string = "官令：" + t.itemNum[11] + " / 传家宝碎片:" + t.itemNum2[37] + " / 银两:" + t.money;
cc.find("Canvas/UI1/choice5/text").getComponent("cc.Label").string = "《太极元章》秘籍（需" + (10 * t.itemNum2[15]) + "个官令）";
cc.find("Canvas/UI1/choice7/text").getComponent("cc.Label").string = "出售所有兵魂（每个2两，已有" + t.itemNum2[16] + "个）";
}
function d() {
if (t.itemNum2[37] >= 150 && t.itemNum3[0] + t.itemNum3[1] + t.itemNum3[2] + t.itemNum3[3] + t.itemNum3[4] + t.itemNum3[5] + t.itemNum3[6] + t.itemNum3[7] >= 1) {
t.itemNum2[37] -= 150;
if (t.menpai[0] >= 1) {
t.itemNum3[0] += 1
}if (t.menpai[1] >= 1) {
t.itemNum3[1] += 1
}if (t.menpai[2] >= 1) {
t.itemNum3[2] += 1
}if (t.menpai[3] >= 1) {
t.itemNum3[3] += 1
}if (t.menpai[4] >= 1) {
t.itemNum3[4] += 1
}if (t.menpai[5] >= 1) {
t.itemNum3[5] += 1
}if (t.menpai[6] >= 1) {
t.itemNum3[6] += 1
}if (t.menpai[7] >= 1) {
t.itemNum3[7] += 1
}
a.save();
n.playText("Canvas/notify", "熔锻成功！", 60);
f();
} else n.playText("Canvas/notify", "传家宝碎片不足！", 60);
}
function m() {
if (t.itemNum[11] >= 40 && 0 == t.publicVar2[29]) {
t.itemNum[11] -= 40;
t.publicVar2[29] = 1;
n.playText("Canvas/notify", "获得临天水！请到编队界面使用。", 60);
f();
} else t.itemNum[11] < 4 ? n.playText("Canvas/notify", "官令不足！", 60) : n.playText("Canvas/notify", "限购一瓶！", 60);
}
function h() {
if (t.itemNum[11] >= 1) {
t.itemNum[11] -= 1;
t.itemNum[14] += 2;
n.playText("Canvas/notify", "获得【魂精】*2，失去【官令】*1。", 60);
f();
} else n.playText("Canvas/notify", "官令不足！", 60);
}
function v() {
if (t.itemNum2[16] >= 10) {
t.itemNum2[16] -= 10;
t.itemNum[14] += 1;
n.playText("Canvas/notify", "获得【魂精】*1，失去【兵魂】*10。", 60);
f();
} else n.playText("Canvas/notify", "兵魂不足！", 60);
}
function y() {
var e = 10 * t.itemNum2[15];
if (t.itemNum[11] >= e) {
t.itemNum[11] -= e;
t.itemNum2[15] += 1;
n.playText("Canvas/notify", "获得「《太极元章》秘籍」！", 60);
f();
} else n.playText("Canvas/notify", "官令不足！", 60);
}
function g() {
if (t.money >= 5) {
t.money -= 5;
t.itemNum2[14] += 1;
n.playText("Canvas/notify", "获得「苦无」*1", 60);
f();
} else n.playText("Canvas/notify", "钱不够！", 60);
}
function b() {
if (t.itemNum2[16] > 0) {
var e = t.itemNum2[16];
t.money += 2 * e;
t.itemNum2[16] -= e;
n.playText("Canvas/notify", "出售「兵魂」*" + e + "，获得" + (e * 2) + "元！", 60);
f();
} else n.playText("Canvas/notify", "你身上没有兵魂~", 60);
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
[70, 70, 70, 70, 50]), d = [["传家宝碎片", 37, 2, 1000], ["美酒", 12, 5, 500], [ "秘籍:无中生有", 5, 1, 100 ], [ "门帮防具", 21, 10, 1000 ], [ "门帮专武", 20, 10, 1000 ], [ "门帮饰品", 22, 10, 500 ] ];
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
t.r3 < f[2] && (l.getChildByName("text").getComponent("cc.Label").string = "邓三姐(北庖南厨)");
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
if (t.cureTimes >= 3) a.playText("Canvas/notify", "“抽奖这玩意，见好就收吧！”", 60); else if (n.money >= 1000) {
var e = Math.max(100 - n.publicVar3[8], 0), i = 100 * Math.random();
n.publicVar3[7] -= 10;
t.cureTimes += 1;
n.money -= 1000;
if (i < 50) {
n.itemNum2[37] += 5;
a.playText("Canvas/notify", "中奖啦！，传家宝碎片+5！", 60);
} else {
a.playText("Canvas/notify", "没中奖。。。大非酋啊。", 60);
}
C();
} else a.playText("Canvas/notify", "没钱咯！", 60);
}
function h() {
if (t.gameTime2 - t.gameTime1 > 30) a.playText("Canvas/notify", "“模拟太多往往会让自己失去实战的信念，今日就先到此为止吧”道人如是说", 60); else if (20 == n.publicVar3[6]) {
n.money += 100;
n.publicVar3[6] += 1;
a.playText("Canvas/notify", "你不断地训练，让道人十分感动，赠送你100两补贴身体", 60);
} else if (50 == n.publicVar3[6]) {
n.money += 500;
n.publicVar3[6] += 1;
a.playText("Canvas/notify", "你的技术平浅入流，道人十分肯定，赠送你500两补贴身体", 60);
} else if (90 == n.publicVar3[6]) {
n.hunger = i.maxHunger();
n.publicVar3[6] += 1;
a.playText("Canvas/notify", "你的技术略有天资，道人十分欣喜，赠送你【无双♂大黄瓜】吃，饥饿全恢复！", 60);
} else if (140 == n.publicVar3[6]) {
n.money += 1000;
n.publicVar3[6] += 1;
C();
a.playText("Canvas/notify", "你的技术由浅入深，道人鼓励你再接再厉，送了你1000两~", 60);
} else if (200 == n.publicVar3[6]) {
n.itemNum2[20] += 10;
n.itemNum2[21] += 10;
n.itemNum2[22] += 10;
n.publicVar3[6] += 1;
a.playText("Canvas/notify", "你的技术青出于蓝，道人送你他的门派武具，获得【门帮三件套】*10！", 60);
} else if (300 == n.publicVar3[6]) {
n.energy += 100;
n.publicVar3[6] += 1;
C();
a.playText("Canvas/notify", "你的技术至为大道，道人帮助你修炼，给你传输真气，精力+100！", 60);
} else if (450 == n.publicVar3[6]) {
n.itemNum2[37] += 50;
n.publicVar3[6] += 1;
a.playText("Canvas/notify", "你的技术惊为天人，老板赠送你传家宝碎片！！！，获得【传家宝碎片】*50！", 60);
} else if (700 == n.publicVar3[6]) {
n.role.att += 500;
n.role.def += 250;
n.role.maxHp += 2500;
n.publicVar3[6] += 1;
i.save();
a.playText("Canvas/notify", "你的技术嗤唬神佛，威压鬼神，获得「天道中流」称号，攻击永久+500，防御永久+250，生命永久+2500！", 60);
} else if (n.itemNum2[7] >= 1) {
var e = Math.min((40 + n.publicVar3[6] / 10).toFixed(1), 75), c = 100 * Math.random();
n.itemNum2[7] -= 1;
if (c < e) {
n.publicVar3[5] < 99 && (n.publicVar3[5] += 1);
n.publicVar3[6] += 1;
t.gameTime2 += 1;
a.playText("Canvas/notify", "模拟训练胜利，攻防血提高1%（临时效果，随天数缓慢衰减）。模拟经验+1", 60);
C();
} else {
n.publicVar3[5] = 0;
n.publicVar3[6] += 1;
t.gameTime2 += 1;
a.playText("Canvas/notify", "模拟训练失败，属性加成消失...模拟经验+1", 60);
C();
}
} else a.playText("Canvas/notify", "元神丹不足。。。", 60);
}
function v() {
c.runAction(cc.scaleTo(.3, 0));
(function() {
N();
o.runAction(cc.scaleTo(.3, 1));
})();
}
function y() {
if (n.hunger > i.maxHunger()) a.playText("Canvas/notify", "已经吃不下啦...", 60); else if (n.itemNum2[7] >= 2) {
n.hunger += 350;
n.maxHunger += 5;
n.itemNum2[7] -= 2;
n.publicVar3[13] += 1;
a.playText("Canvas/notify", "饥饿+350，最大饥饿值提高5点！", 60);
C();
} else a.playText("Canvas/notify", "元神丹不足", 60);
}
function g() {
if (n.hunger > i.maxHunger()) a.playText("Canvas/notify", "已经吃不下啦...", 60); else if (n.itemNum2[7] >= 1) {
n.hunger += 100;
n.health += 1;
n.itemNum2[7] -= 1;
a.playText("Canvas/notify", "饥饿+100，健康值+1！", 60);
C();
} else a.playText("Canvas/notify", "元神丹不足", 60);
}
function b() {
var e = 100 * Math.random();
if (0 == t.makeMoneyRate) a.playText("Canvas/notify", "“别上头啊，小玩娱乐，大玩伤身。”", 60); else if (0 == n.money) a.playText("Canvas/notify", "“不好意思，请你出去（笑）”", 60); else if (n.money < 10000) a.playText("Canvas/notify", "“钱不够就别来咯？”", 60); else if (e < 5 && n.dkmoney <= 0) {
var i = parseInt(n.money * t.makeMoneyProfit / 100);
n.money += 40000;
a.playText("Canvas/notify", "中了！！获得40000两", 60);
t.makeMoneyRate = 0;
C();
} else {
i = parseInt(n.money * t.makeMoneyProfit / 100);
n.money -= 10000;
a.playText("Canvas/notify", "失败。。感觉身体被掏空。。。。", 60);
t.makeMoneyRate = 0;
C();
}
}
function _() {
if (t.itemDiscount >= 9999) a.playText("Canvas/notify", "商品已售罄~", 60); else if (n.money >= t.finalPrice) {
var e = d[t.itemId][1], i = d[t.itemId][2];
n.money -= t.finalPrice;
n.itemNum2[e] += i;
a.playText("Canvas/notify", "获得【" + t.itemName + "】*" + i, 60);
t.itemDiscount = 9999;
C();
x();
} else a.playText("Canvas/notify", "金钱不足！", 60);
}
function x() {
t.itemDiscount >= 9999 ? s.getChildByName("text").getComponent("cc.Label").string = "李倓(流浪商人)（断货中。。。）" : t.r2 < f[1] ? s.getChildByName("text").getComponent("cc.Label").string = "李倓(流浪商人)（" + t.itemName + "," + parseInt(t.itemDiscount / 10) + "折," + t.finalPrice + "两）" : s.getChildByName("text").getComponent("cc.Label").string = "李倓(流浪商人)（回家陪老婆咯！）";
}
function C() {
t.r1 < f[0] ? r.getChildByName("text").getComponent("cc.Label").string = "九月六(摸奖)（一次10000两）" : r.getChildByName("text").getComponent("cc.Label").string = "九月六(摸奖)（输光了，赌博害人啊！）";
t.r4 < f[3] ? u.getChildByName("text").getComponent("cc.Label").string = "骆长青(太极道人)（属性+" + n.publicVar3[5] + "%,一次一颗元神丹）" : u.getChildByName("text").getComponent("cc.Label").string = "骆长青(太极道人)（外出求学中。。。）";
cc.find("Canvas/UI2/hunger").getComponent("cc.Label").string = "饥饿 " + n.hunger + "/" + i.maxHunger();
cc.find("Canvas/money").getComponent("cc.Label").string = "银两 " + n.money;
n.publicVar3[7] > 800 ? p.getChildByName("text").getComponent("cc.Label").string = "没钱就不干了，亏本买卖做了白做" : t.r5 < f[4] ? p.getChildByName("text").getComponent("cc.Label").string = "高俅(传家宝搜集者)(外出中。。。)" : p.getChildByName("text").getComponent("cc.Label").string = "高俅(传家宝抽奖)（一次1000两,中奖率？%）(〃'▽'〃)";
i.save();
}
function E() {
a.playText("Canvas/notify", "“他呀，难见咯！~”", 60);
}
function I() {
a.playText("Canvas/notify", "“人嘛，总是要休息休息的”", 60);
}
function V() {
a.playText("Canvas/notify", "“他呀，难见咯！”", 60);
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
    var t = this, n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = cc.find("Canvas/UI1"), o = c.getChildByName("choice2"), r = c.getChildByName("choice3"), s = c.getChildByName("choice4"), l = [["佳肴*3", 0, 3, 12], ["佳肴*3", 0, 3, 12], ["佳肴*3", 0, 3, 12], ["佳肴*3", 0, 3, 12], [ "美酒*1", 12, 1, 30 ], [ "伤药*4", 1, 4, 12 ] ];
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
cc.find("Canvas/money").getComponent("cc.Label").string = "金钱：" + n.money;
cc.find("Canvas/UI1/choice2/text").getComponent("cc.Label").string = "出售伤药（每个1毛，已拥有" + n.itemNum2[1] + "）";
cc.find("Canvas/UI1/choice3/text").getComponent("cc.Label").string = "出售烟（每个6毛，已拥有" + n.itemNum2[7] + "）";
cc.find("Canvas/UI1/choice4/text").getComponent("cc.Label").string = p + "（活动价" + u + "元，限购！！！）";
}
function h() {
if (n.itemNum2[1] > 0) {
var e = parseInt(.5 * n.itemNum2[1] + 1);
n.money += e;
n.itemNum2[1] -= e;
i.save();
a.playText("Canvas/notify", "出售【伤药】*" + e + "，获得" + e + "毛", 100);
m();
} else a.playText("Canvas/notify", "道具不足！", 100);
}
function v() {
if (n.itemNum2[7] > 0) {
n.money += 6;
n.itemNum2[7] -= 1;
i.save();
a.playText("Canvas/notify", "出售【烟】*1，获得6毛", 100);
m();
} else a.playText("Canvas/notify", "道具不足！", 100);
}
function y() {
if (1 == t.ifSellOut) a.playText("Canvas/notify", "本次活动每人只能购买一次哦，下次再来吧~", 100); else if (n.money >= u) {
n.money -= u;
n.itemNum2[f] += d;
t.ifSellOut = 1;
i.save();
a.playText("Canvas/notify", "获得【" + p + "】！", 100);
m();
} else a.playText("Canvas/notify", "余额不足...", 100);
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
itemName: " 木材*10（拥有" + this.data.itemNum[1] + ")",
needDes: "购买/出售：50两/30两",
ifEnough: function(t) {
e("scr_data").money >= 50 && (cc.find("Canvas/Page/view/content/page_1/" + t + "/name").color = new cc.color(0, 255, 0));
},
button1: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.money >= 50) {
n.money -= 50;
n.itemNum[1] += 10;
n.shopPoint += 10;
i.save();
a.playText("Canvas/notify", "获得【木材】*10！积分*10！", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "钱不够！", 100);
},
button2: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.itemNum[1] >= 10) {
n.money += 30;
n.itemNum[1] -= 10;
i.save();
a.playText("Canvas/notify", "失去【木材】*10，获得30两！", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "道具不足！", 100);
}
},
1: {
itemName: " 毛皮*10（拥有" + this.data.itemNum[4] + ")",
needDes: "购买/出售：50两/30两",
ifEnough: function(t) {
e("scr_data").money >= 50 && (cc.find("Canvas/Page/view/content/page_1/" + t + "/name").color = new cc.color(0, 255, 0));
},
button1: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.money >= 50) {
n.money -= 50;
n.itemNum[4] += 10;
n.shopPoint += 10;
i.save();
a.playText("Canvas/notify", "获得【毛皮】*10！积分*10！", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "钱不够！", 100);
},
button2: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.itemNum[4] >= 10) {
n.money += 30;
n.itemNum[4] -= 10;
i.save();
a.playText("Canvas/notify", "失去【毛皮】*10，获得30两！", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "道具不足！", 100);
}
},
2: {
itemName: " 暗铁*5（拥有" + this.data.itemNum[8] + ")",
needDes: "购买/出售：50两/30两",
ifEnough: function (t) {
e("scr_data").money >= 50 && (cc.find("Canvas/Page/view/content/page_1/" + t + "/name").color = new cc.color(0, 255, 0));
},
button1: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.money >= 50) {
n.money -= 50;
n.itemNum[8] += 5;
n.shopPoint += 5;
i.save();
a.playText("Canvas/notify", "获得【暗铁】*5！积分*5！", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "钱不够！", 100);
},
button2: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.itemNum[8] >= 5) {
n.money += 30;
n.itemNum[8] -= 5;
i.save();
a.playText("Canvas/notify", "失去【暗铁】*5，获得30两！", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "道具不足！", 100);
}
},
3: {
itemName: " 良革*5（拥有" + this.data.itemNum[9] + ")",
needDes: "购买/出售：50两/30两",
ifEnough: function (t) {
e("scr_data").money >= 50 && (cc.find("Canvas/Page/view/content/page_1/" + t + "/name").color = new cc.color(0, 255, 0));
},
button1: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.money >= 50) {
n.money -= 50;
n.itemNum[9] += 5;
n.shopPoint += 5;
i.save();
a.playText("Canvas/notify", "获得【良革】*5！积分*5！", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "钱不够！", 100);
},
button2: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.itemNum[9] >= 5) {
n.money += 30;
n.itemNum[9] -= 5;
i.save();
a.playText("Canvas/notify", "失去【良革】*5，获得30两！", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "道具不足！", 100);
}
},
4: {
itemName: " 熟肉*5（拥有" + this.data.itemNum[0] + ")",
needDes: "购买/出售：50两/20两(偷鸡摸狗:伊贺在购买时半价",
ifEnough: function(t) {
e("scr_data").money >= 50 && (cc.find("Canvas/Page/view/content/page_2/" + t + "/name").color = new cc.color(0, 255, 0));
},
button1: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.money >= 50 - 25 * n.menpai[4]) {
n.money -= 50 - 25 * n.menpai[4];
n.itemNum[0] += 5;
n.shopPoint += 5;
i.save();
a.playText("Canvas/notify", "获得【熟肉】*5！积分*5！", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "钱不够！", 100);
},
button2: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.itemNum[0] >= 5) {
n.money += 20;
n.itemNum[0] -= 5;
i.save();
a.playText("Canvas/notify", "失去【熟肉】*5，获得20两！", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "道具不足！", 100);
}
},
5: {
itemName: " 戏台（播放BGM，手动开关)",
needDes: "                   经典丨？？？",
ifEnough: function (t) {
cc.find("Canvas/Page/view/content/page_2/" + t + "/button1/text").getComponent("cc.Label").string = "播放/暂停";
cc.find("Canvas/Page/view/content/page_2/" + t + "/button2/text").getComponent("cc.Label").string = "????";
e("scr_data").money >= 0 && (cc.find("Canvas/Page/view/content/page_2/" + t + "/name").color = new cc.color(255, 182, 193));
},
button1: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (0 == n.xitai[0]) {
n.xitai[0] += 1;
cc.audioEngine.stopAll();
cc.audioEngine.play("res/raw-assets/Audio/BGM3.ogg", 1, 1000);
} else {
cc.audioEngine.stopAll();
n.xitai[0] -= 1;
}
},
button2: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.money >= 0) {
n.xitai[1] += 1;
cc.audioEngine.stopAll();
cc.audioEngine.play("res/raw-assets/Audio/BGM4.ogg", 1, 1000);
} else a.playText("Canvas/notify", "虽然不要钱，但你这。。。", 100);
}
},
6: {
itemName: " 蔬菜*5（拥有" + this.data.itemNum[3] + ")",
needDes: "购买/出售：40两/20两",
ifEnough: function(t) {
e("scr_data").money >= 40 && (cc.find("Canvas/Page/view/content/page_2/" + t + "/name").color = new cc.color(0, 255, 0));
},
button1: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.money >= 40) {
n.money -= 40;
n.itemNum[3] += 5;
n.shopPoint += 5;
i.save();
a.playText("Canvas/notify", "获得【蔬菜】*5！积分*2！", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "钱不够！", 100);
},
button2: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.itemNum[3] >= 5) {
n.money += 20;
n.itemNum[3] -= 5;
i.save();
a.playText("Canvas/notify", "失去【蔬菜】*5，获得20两！", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "道具不足！", 100);
}
},
7: {
itemName: " 草药*5（拥有" + this.data.itemNum[5] + ")",
needDes: "购买/出售：30两/20两",
ifEnough: function(t) {
e("scr_data").money >= 30 && (cc.find("Canvas/Page/view/content/page_2/" + t + "/name").color = new cc.color(0, 255, 0));
},
button1: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.money >= 30) {
n.money -= 30;
n.itemNum[5] += 5;
n.shopPoint += 5;
i.save();
a.playText("Canvas/notify", "获得【草药】*5！积分*4！", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "钱不够！", 100);
},
button2: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.itemNum[5] >= 5) {
n.money += 20;
n.itemNum[5] -= 5;
i.save();
a.playText("Canvas/notify", "失去【草药】*5，获得20两！", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "道具不足！", 100);
}
},
8: {
itemName: " 转职大厅（当前职业" + (this.data.juexue[0] * 1 + this.data.juexue[1] * 2) + "）",
needDes: "价格：一次100两",
ifEnough: function(t) {
cc.find("Canvas/Page/view/content/page_3/" + t + "/button1/text").getComponent("cc.Label").string = "一转二";
cc.find("Canvas/Page/view/content/page_3/" + t + "/button2/text").getComponent("cc.Label").string = "二转一";
var n = e("scr_data");
n.money >= 100 && (cc.find("Canvas/Page/view/content/page_3/" + t + "/name").color = new cc.color(0, 255, 0));
},
button1: function() {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.money >= 100 && n.juexue[0] >= 1 && n.menpai[0] + n.menpai[3] + n.menpai[5] + n.menpai[6] >= 1) {
n.money -= 100;
n.juexue[0] -= 1;
n.juexue[1] += 1;
n.itemNum2[30] = 0;
n.itemNum2[30] += n.itemNum2[10];
n.itemNum2[10] = 0;
n.itemNum2[38] = 0;
n.itemNum2[38] += n.itemNum2[33];
n.itemNum2[33] = 0;
i.save();
a.playText("Canvas/notify", "转职成功", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "钱不够或者已经转职又或者门派错误！", 100);
},
button2: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.money >= 100 && n.juexue[1] >= 1 && n.menpai[0] + n.menpai[3] + n.menpai[5] + n.menpai[6] >= 1) {
n.money -= 100;
n.juexue[1] -= 1;
n.juexue[0] += 1;
n.itemNum2[10] = 0;
n.itemNum2[10] += n.itemNum2[30];
n.itemNum2[30] = 0;
n.itemNum2[33] = 0;
n.itemNum2[33] += n.itemNum2[38];
n.itemNum2[38] = 0;
i.save();
a.playText("Canvas/notify", "转职成功", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "钱不够或者已经转职又或者门派错误！", 100);
}
},
9: {
itemName: "坑爹酒馆",
needDes: "一次五十，四十精力，一天一次/谈天说地，十点精力",
ifEnough: function (t) {
cc.find("Canvas/Page/view/content/page_3/" + t + "/button1/text").getComponent("cc.Label").string = "喝酒";
cc.find("Canvas/Page/view/content/page_3/" + t + "/button2/text").getComponent("cc.Label").string = "扯淡";
e("scr_data").health >= 0 && (cc.find("Canvas/Page/view/content/page_3/" + t + "/name").color = new cc.color(0, 255, 0));
},
button1: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.money >= 50 && n.jiuguan >= 1) {
n.money -= 50;
n.energy += 40;
n.energy -= 40 * n.menpai[0] * n.juexue[1];
n.jiuguan -= 1;
var c = function () {
var t = "", n = 10000 * Math.random(), a = e("scr_data");
if (n <= 5000) {
a.energy += 10
t = "“美味啊很美味啊”你感叹道,精力额外+10！";
}
if (n > 5000 && n <= 6000) {
a.itemNum[0] += 1;
t = "“哟，常客，送你个下酒菜”【熟肉】+1";
}
if (n > 6000 && n <= 7000) {
a.itemNum2[1] += 5;
t = "“怎么伤的这么重，来擦个药”【伤药】+5";
}
if (n > 7000 && n <= 7500) {
a.money += 200;
t = "“酒王争霸赛第一名！奖金200两”！";
}
if (n > 7500 && n <= 9500) {
a.itemNum[10] += 1;
t = "“呸呸呸！这酒怎么还有杂质的！”【酒麦】+1";
}
if (n > 9500 && n <= 9999) {
a.itemNum2[12] += 1;
t = "“客官，买一送一！”【美酒】+1";
}
if (n > 9999 && n <= 10000) {
a.itemNum2[31] += 1;
t = "#“呵呵呵，果然是个酒鬼，给你了！”【醉侠烂漫刀】秘籍+1#";
}
return t;
}();
i.save();
a.playText("Canvas/notify", "" + c, 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "钱不够！", 100);
},
button2: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.energy >= 10) {
n.energy -= 10;
var c = function () {
var t = "", n = 10000 * Math.random(), a = e("scr_data");
if (n <= 1000) {
a.itemNum[2] += 50
t = "稀疏平常的故事，平凡的人嘛？道心+50";
}
if (n > 1000 && n <= 1500) {
a.itemNum[2] += 100;
t = "有意思的勇者的故事，道心+100";
}
if (n > 1500 && n <= 4000) {
a.itemNum[2] += 10;
t = "吹牛吗，听听吧的故事，道心+10";
}
if (n > 4000 && n <= 7500) {
a.itemNum[2] += 0;
t = "无趣的故事，只是发牢骚吗，道心+0";
}
if (n > 7500 && n <= 9500) {
a.itemNum[2] += 5;
t = "隔壁老头的恋爱故事，丝，奇怪，道心+5";
}
if (n > 9500 && n <= 9999) {
a.itemNum[2] += 150;
t = "男男？我这是听到了什么！道心+150";
}
if (n > 9999 && n <= 10000) {
a.itemNum[2] += 1000;
t = "#少年为父报仇的故事是吗，有意思，道心+1000#";
}
return t;
}();
i.save();
a.playText("Canvas/notify", "" + c, 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "精力不够！", 100);
},
},
10: {
itemName: "传家之宝（官令" + this.data.itemNum[11] + ")",
needDes: "拥有洪荒之气后每天一次/10官令一次",
ifEnough: function (t) {
cc.find("Canvas/Page/view/content/page_3/" + t + "/button1/text").getComponent("cc.Label").string = "洪荒大灶";
cc.find("Canvas/Page/view/content/page_3/" + t + "/button2/text").getComponent("cc.Label").string = "官令强寻";
e("scr_data").itemNum[13] >= 1 && (cc.find("Canvas/Page/view/content/page_3/" + t + "/name").color = new cc.color(255, 182, 193));
},
button1: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.itemNum[13] >= 1) {
n.itemNum[13] -= 1;
var c = function () {
var t = "", n = 200 * Math.random(), a = e("scr_data");
if (n > 199 && n <= 200 && a.menpai[0] >= 1) {
a.itemNum3[0] += 1;
t = "权耀神龙之杖！";
} if (n > 199 && n <= 200 && a.menpai[1] >= 1) {
a.itemNum3[1] += 1;
a.CJBsl = 1;
t = "存光凡竹指虎！";
} if (n > 199 && n <= 200 && a.menpai[2] >= 1) {
a.itemNum3[2] += 1;
t = "云顶芝士雪豹！";
} if (n > 199 && n <= 200 && a.menpai[3] >= 1) {
a.itemNum3[3] += 1;
t = "苍天怜道血刃！";
} if (n > 199 && n <= 200 && a.menpai[4] >= 1) {
a.itemNum3[4] += 1;
a.CJByh = 0;
t = "禁忌负影卷轴！";
} if (n > 199 && n <= 200 && a.menpai[5] >= 1) {
a.itemNum3[5] += 1;
t = "光华灿烂云裳！";
} if (n > 199 && n <= 200 && a.menpai[6] >= 1) {
a.itemNum3[6] += 1;
t = "蛮虫厮木锻戒！";
} if (n > 199 && n <= 200 && a.menpai[7] >= 1) {
a.itemNum3[7] += 1;
a.CJBtj = 0;
t = "万古独存玉佩！";
}
if (n > 197 && n <= 199) {
a.itemNum[11] += 50;
t = "【官令】*50！";
}
if (n > 195 && n <= 197) {
a.itemNum2[2] += 1;
t = "【精魄】*1！";
}
if (n > 180 && n <= 195) {
a.itemNum[11] += 5;
t = "【官令】*5！";
}
if (n > 50 && n <= 180) {
a.money += 200;
t = "银两*200！";
}
if (n <= 50) {
t = "啥也没有！";
}
return t;
}();
i.save();
a.playText("Canvas/notify", "恭喜获得，" + c, 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "洪荒之气不足！", 100);
},
button2: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.itemNum[11] >= 10) {
n.itemNum[11] -= 10;
var c = function () {
var t = "", n = 200 * Math.random(), a = e("scr_data");
if (n > 199 && n <= 200 && a.menpai[0] >= 1) {
a.itemNum3[0] += 1;
t = "权耀神龙之杖！";
} if (n > 199 && n <= 200 && a.menpai[1] >= 1) {
a.itemNum3[1] += 1;
a.CJBsl = 1;
t = "存光凡竹指虎！";
} if (n > 199 && n <= 200 && a.menpai[2] >= 1) {
a.itemNum3[2] += 1;
t = "云顶芝士雪豹！";
} if (n > 199 && n <= 200 && a.menpai[3] >= 1) {
a.itemNum3[3] += 1;
t = "苍天怜道血刃！";
} if (n > 199 && n <= 200 && a.menpai[4] >= 1) {
a.itemNum3[4] += 1;
a.CJByh = 0;
t = "禁忌负影卷轴！";
} if (n > 199 && n <= 200 && a.menpai[5] >= 1) {
a.itemNum3[5] += 1;
t = "光华灿烂云裳！";
} if (n > 199 && n <= 200 && a.menpai[6] >= 1) {
a.itemNum3[6] += 1;
t = "蛮虫厮木锻戒！";
} if (n > 199 && n <= 200 && a.menpai[7] >= 1) {
a.itemNum3[7] += 1;
a.CJBtj = 0;
t = "万古独存玉佩！";
}
if (n > 195 && n <= 199) {
a.itemNum[11] += 20;
t = "【官令】*20！";
}
if (n > 180 && n <= 195) {
a.itemNum[1] += 1;
t = "【官令】*1！";
}
if (n > 50 && n <= 180) {
a.money += 100;
t = "银两*100！";
}
if (n <= 50) {
t = "啥也没有！";
}
return t;
}();
i.save();
a.playText("Canvas/notify", "恭喜获得，" + c, 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "官令不够！", 100);
},
},
11: {
itemName: "安康银行(1:1.02)（贷款：" + this.data.dkmoney + "两) ",
needDes: "100银两/次，(限额10W，单次最高贷款100次，每日重置)",
ifEnough: function (t) {
cc.find("Canvas/Page/view/content/page_3/" + t + "/button1/text").getComponent("cc.Label").string = "贷款";
cc.find("Canvas/Page/view/content/page_3/" + t + "/button2/text").getComponent("cc.Label").string = "还贷";
e("scr_data").money > e("scr_data").dkmoney && (cc.find("Canvas/Page/view/content/page_3/" + t + "/name").color = new cc.color(0, 255, 0));
},
button1: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.dkmoney <= 100000 && n.dk2 <= 100) {
n.money += 100;
n.dkmoney += 100;
n.dkmoney2 += 100;
n.dk2 += 1;
n.dk3 = 0;
n.fuzai = 1;
i.save();
a.playText("Canvas/notify", "贷款100两！", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "超额了！！", 100);
},
button2: function () {
var a = e("scr_effect"), i = e("scr_public"), n = e("scr_data").money, m = e("scr_data").dkmoney, b = e("scr_data").money - e("scr_data").dkmoney;
if (n >= m) {
e("scr_data").money -= m;
e("scr_data").dkmoney = 0;
e("scr_data").dk3 = 1;
e("scr_data").maxEnergy += e("scr_data").fuzai1 * 2;
e("scr_data").fuzai1 = 0;
e("scr_data").fuzai = 0;
i.save();
a.playText("Canvas/notify", "还清贷款，好样的!", 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "没钱！！", 100);
}
},
12: {
itemName: "  基础抽奖  ",
needDes: "20两或者40积分/次，包含各种物资。",
ifEnough: function (t) {
cc.find("Canvas/Page/view/content/page_4/" + t + "/button1/text").getComponent("cc.Label").string = "银两抽奖";
cc.find("Canvas/Page/view/content/page_4/" + t + "/button2/text").getComponent("cc.Label").string = "积分抽奖";
e("scr_data").money >= 20 && (cc.find("Canvas/Page/view/content/page_4/" + t + "/name").color = new cc.color(0, 255, 0));
},
button1: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.money >= 20) {
n.money -= 20;
var c = function () {
var t = "", n = 100 * Math.random(), a = e("scr_data");
if (n <= 10) {
a.itemNum[0] += 4;
t = "【熟肉】*4！";
}
if (n > 10 && n <= 20) {
a.itemNum[3] += 6;
t = "【蔬菜】*6！";
}
if (n > 20 && n <= 30) {
a.itemNum[5] += 8;
t = "【草药】*8！";
}
if (n > 30 && n <= 40) {
a.itemNum[1] += 8;
t = "【木材】*8！";
}
if (n > 40 && n <= 50) {
a.itemNum[4] += 8;
t = "【毛皮】*8！";
}
if (n > 50 && n <= 60) {
a.itemNum[8] += 4;
t = "【暗铁】*4！";
}
if (n > 60 && n <= 70) {
a.itemNum[9] += 4;
t = "【良革】*4！";
}
if (n > 70 && n <= 90) {
a.itemNum[14] += 1;
t = "【魂精】*1！";
}
if (n > 90 && n <= 100) {
a.itemNum[10] += 1;
t = "【酒麦】*1！";
}
return t;
}();
i.save();
a.playText("Canvas/notify", "恭喜获得，" + c, 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "钱不够！", 100);
},
button2: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.shopPoint >= 40) {
n.shopPoint -= 40;
var c = function () {
var t = "", n = 100 * Math.random(), a = e("scr_data");
if (n <= 10) {
a.itemNum[0] += 4;
t = "【熟肉】*4！";
}
if (n > 10 && n <= 20) {
a.itemNum[3] += 6;
t = "【蔬菜】*6！";
}
if (n > 20 && n <= 30) {
a.itemNum[5] += 8;
t = "【草药】*8！";
}
if (n > 30 && n <= 40) {
a.itemNum[1] += 8;
t = "【木材】*8！";
}
if (n > 40 && n <= 50) {
a.itemNum[4] += 8;
t = "【毛皮】*8！";
}
if (n > 50 && n <= 60) {
a.itemNum[8] += 4;
t = "【暗铁】*4！";
}
if (n > 60 && n <= 70) {
a.itemNum[9] += 4;
t = "【良革】*4！";
}
if (n > 70 && n <= 90) {
a.itemNum[14] += 1;
t = "【魂精】*1！";
}
if (n > 90 && n <= 100) {
a.itemNum[10] += 1;
t = "【酒麦】*1！";
}
return t;
}();
i.save();
a.playText("Canvas/notify", "恭喜获得，" + c, 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "钱不够！", 100);
},
},
13: {
itemName: "  酒馆投置【50天后开启】 ",
needDes: "射者中，奕者胜，觥筹交错，坐起而喧哗者，众宾欢也。（100两/500两）",
ifEnough: function (t) {
cc.find("Canvas/Page/view/content/page_4/" + t + "/button1/text").getComponent("cc.Label").string = "娱乐小计";
cc.find("Canvas/Page/view/content/page_4/" + t + "/button2/text").getComponent("cc.Label").string = "认真胜负";
e("scr_data").money > 0 && (cc.find("Canvas/Page/view/content/page_4/" + t + "/name").color = new cc.color(0, 255, 0));
},
button1: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.money >= 100 && n.day >= 50) {
n.money -= 100;
n.dk2 -= 1;
var c = function () {
var t = "", n = 100 * Math.random(), a = e("scr_data");
if (n <= 70) {
a.money += 0;
t = "“果然还是输了。。”，银两被回收";
}
if (n > 70 && n <= 95) {
a.money += 300;
t = "“小赢几把，运气罢了哈哈哈”银两翻倍！！";
}
if (n > 95 && n <= 98) {
a.money += 400;
t = "“今天来运了，都是小钱哈哈哈”银两翻三倍！！";
}
if (n > 98 && n <= 100) {
a.money += 500;
t = "“哟，这运气瞧着，谢谢各位谦让，哈哈”银两翻四倍！！！";
}
return t;
}();
i.save();
a.playText("Canvas/notify", "结果：" + c, 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "钱不够！", 100);
},
button2: function () {
var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
if (n.money >= 500 && n.day >= 50) {
n.money -= 500;
n.dk2 -= 1;
var c = function () {
var t = "", n = 100 * Math.random(), a = e("scr_data");
if (n <= 70) {
a.money += 0;
t = "“果然还是输了。。”，银两被回收";
}
if (n > 70 && n <= 95) {
a.money += 1500;
t = "“小赢几把，运气罢了哈哈哈”银两翻倍！！";
}
if (n > 95 && n <= 98) {
a.money += 2000;
t = "“今天来运了，都是小钱哈哈哈”银两翻三倍！！";
}
if (n > 98 && n <= 100) {
a.money += 2500;
t = "“哟，这运气瞧着，谢谢各位谦让，哈哈”银两翻四倍！！！";
}
return t;
}();
i.save();
a.playText("Canvas/notify", "你的结果是：" + c, 100);
t.delayCreatItemUI();
} else a.playText("Canvas/notify", "钱不够！", 100);
},
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
for (var e = 8; e <= 11; e++) this.creatPrefab(e, "page_3");
},
creatItemUI4: function () {
this.initText();
cc.find("Canvas/Page/view/content/page_4").removeAllChildren();
for (var e = 12; e <= 13; e++) this.creatPrefab(e, "page_4");
},
initText: function() {
var t = e("scr_data");
cc.find("Canvas/money").getComponent("cc.Label").string = "银两：" + t.money + "两";
cc.find("Canvas/point").getComponent("cc.Label").string = "积分：" + t.shopPoint;
},
delayCreatItemUI: function() {
var e = this;
this.scheduleOnce(function() {
e.creatItemUI1();
e.creatItemUI2();
e.creatItemUI3();
e.creatItemUI4();
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
delayCreatItemUI4: function () {
this.scheduleOnce(this.creatItemUI4, .2);
},
onLoad: function() {
this.creatItemUI1();
this.creatItemUI2();
this.creatItemUI3();
this.creatItemUI4();
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
0 == a[1] && t.winTimes >= 5 && (a[1] = 1) && (t.itemNum[2] += 500);
},
2: function() {
    0 == a[2] && t.orderTimes[5] >= 30 && (a[2] = 1) && (t.itemNum[2] += 500);
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
0 == a[7] && t.orderTimes[2] >= 100 && (a[7] = 1) && (t.itemNum[2] += 2000);
},
8: function() {
0 == a[8] && t.figthExp[0] >= 20 && (a[8] = 1) && (t.itemNum[2] += 500);
},
9: function() {
0 == a[9] && t.winTimes >= 20 && (a[9] = 1);
},
10: function() {
0 == a[10] && t.itemNum2[22] >= 5 && (a[10] = 1);
},
11: function() {
0 == a[11] && t.figthExp[1] >= 30 && (a[11] = 1) && (t.itemNum[2] += 500);
},
12: function() {
0 == a[12] && t.orderTimes[5] >= 666 && (a[12] = 1) && (t.itemNum[2] += 10000);
},
13: function() {
0 == a[13] && t.orderTimes[5] >= 200 && t.orderTimes[2] >= 60 && (a[13] = 1);
},
14: function() {
0 == a[14] && t.winTimes >= 60 && (a[14] = 1);
},
15: function() {
0 == a[15] && t.figthExp[2] >= 40 && (a[15] = 1) && (t.itemNum[2] += 500);
},
17: function() {
0 == a[17] && t.orderTimes[0] >= 99 && (a[17] = 1);
},
19: function() {
0 == a[19] && t.publicVar3[13] >= 4 && (a[19] = 1) && (t.itemNum[2] += 5000);
},
21: function() {
0 == a[21] && t.itemNum2[15] >= 5 && (a[21] = 1);
},
23: function() {
0 == a[23] && t.publicVar2[1] >= 233 && (a[23] = 1);
},
24: function() {
0 == a[24] && t.publicVar3[12] >= 79 && (a[24] = 1);
},
25: function() {
0 == a[25] && t.itemNum2[29] >= 50 && (a[25] = 1) && (t.itemNum[2] += 50000);
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
0: "【饥饿】当饥饿值低于0时激活。饥饿状态下，前进/探索有几率减少健康值，且睡觉时必定减少健康！（另外：饥饿时系统会自动使用食物，直到用光为止哦^_^）",
1: "【小试牛刀】战斗胜利5次（" + t.winTimes + "/5），给予500道心。",
2: "【不怕噎着】食用「熟肉」30次(" + t.orderTimes[5] + "/30），给予500道心",
3: "【自愈！！】使用「伤药」15次（" + t.orderTimes[0] + "/15），获得效果：前进/探索时，生命恢复量提高8点。",
4: "【虚炁】防御归零！每天有" + n + "%概率激活，效果持续1天。（元神丹次数越多激活概率越高，每次增加3%）",
5: "【权衡气势】造成" + (t.figthExp[0] / 5 + 100).toFixed(1) + "%伤害，承受" + (100 - t.figthExp[0] / 5).toFixed(1) + "%伤害。效果随熟练度提升而提升（" + t.figthExp[0] + "/150）。战斗胜利15次(" + t.winTimes + "/15)后开启。",
6: "【恶有恶报】每天40%概率额外捡到1银两，杀仇人10次激活，每杀10次涨1两（" + t.randomEvent[6] + "/10）。",
7: "【吃香喝辣】吃「佳肴」100次（" + t.orderTimes[2] + "/100），奖励道心2000。",
8: "【攻守兼备】权衡气势熟练度达20（" + t.figthExp[0] + "/20），给予500道心。",
9: "【进攻气势】可切换到进攻气势。攻击时，造成" + (t.figthExp[1] / 2 + 132).toFixed(1) + "%伤害，每次攻击损失5%最大生命值。效果随熟练度而提升（" + t.figthExp[1] + "/150）。战斗胜利" + t.winTimes + "/20次后激活。注意1：一场战斗中，使用最多的架势将获得1点熟练度",
10: "【生命强化】睡觉时40%几率恢复1点健康值，门帮饰品达到5级激活。",
11: "【进攻无双】进攻气势熟练度达30（" + t.figthExp[1] + "/30），给予500道心。",
12: "【杀不死我的只会让我更强！】吃熟肉666次（" + t.orderTimes[5] + "/666），给予10000道心。",
13: "【大胃王】饥饿上限+50，吃（" + t.orderTimes[5] + "/200）次「熟肉」和（" + t.orderTimes[2] + "/60）次「佳肴」后激活。",
14: "【防御气势】可切换到防御气势。受击时，承受" + (70 - t.figthExp[2] / 6).toFixed(1) + "%的伤害，且恢复" + parseInt(t.figthExp[2] + 10) + "点生命，但造成伤害减也少30%。效果随熟练度而提升（" + t.figthExp[2] + "/150）。战斗胜利" + t.winTimes + "/60次后激活。注意2：逃跑时系统将自动切换为防御气势！",
15: "【坚如磐石】防御气势熟练度达40（" + t.figthExp[2] + "/40），给予500道心。",
16: "【你，不准冲】第三次击败山脉中「重拳先生」，给予500道心。",
17: "【更强的自愈！！！】前进/探索时，生命恢复量提高36点，使用「伤药」99次后激活（" + t.orderTimes[0] + "/99）。",
18: "【为什么要打兔兔】击败挑战副本中「雪兔」，给予2000道心。",
19: "【ლ(´ڡ`ლ)好吃】食用4次醇入故梦（" + t.publicVar3[13] + "/4），给予5000道心",
20: "【天雷地火】击败省城郊外的「张火」4次，给予500道心",
21: "【恢复强化】前进/探索时，生命恢复效果翻倍。「《太极元章》秘籍」等级达到5级后激活（" + t.itemNum2[15] + "/5）。你目前前进/探索回恢复量为" + (4 + 8 * t.skillLv[3] + 36 * t.skillLv[17] + 2 * t.itemNum2[23]) * (1 + t.skillLv[21]) + "（激活后此数值将会翻倍，创可贴恢复效果也将翻倍！）。",
22: "【小日子过的挺不错的。。。伊贺谷】击败挑战副本中「中村道也」，给予500道心。",
23: "【非酋逆袭】如果前进/探索时没发现道具，则必定获得1两！没发现道具次数达233次后激活（" + t.publicVar2[1] + "/233）。",
24: "【圣斗士】战斗失败后，" + Math.min(Math.max(parseInt(t.publicVar3[12] / 5), 20), 40).toFixed(1) + "%几率满血复活！战斗失败79次后激活（" + t.publicVar3[12] + "/79）",
25: "【热不死你】毛皮衣绒达到50级，给予50000道心",
26: "【不屈的精神力】睡觉时30%几率额外再恢复30%精力！击败「四星」40次后激活！（" + t.kills[2] + "/40）"
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
t.getChildByName("choice1").on("touchstart", function () {
i.menpai[5] += 1;
i.itemNum2[32] += 1;
i.itemNum2[10] += 1;
cc.audioEngine.stopAll();
cc.audioEngine.play("res/raw-assets/Audio/BGM3.ogg", !1, 1);
u();
}, this);
t.getChildByName("choice2").on("touchstart", function () {
i.menpai[4] += 1;
i.itemNum2[24] += 1;
i.itemNum2[19] += 1;
i.itemNum2[14] += 50;
cc.audioEngine.stopAll();
cc.audioEngine.play("res/raw-assets/Audio/BGM3.ogg", !1, 1);
u();
}, this);
t.getChildByName("choice3").on("touchstart", function () {
i.menpai[1] += 1;
i.itemNum2[4] += 1;
i.itemNum2[11] += 1;
cc.audioEngine.stopAll();
cc.audioEngine.play("res/raw-assets/Audio/BGM3.ogg", !1, 1);
u();
}, this);
t.getChildByName("choice4").on("touchstart", function () {
i.menpai[3] += 1;
i.itemNum2[8] += 1;
i.itemNum2[17] += 1;
cc.audioEngine.stopAll();
cc.audioEngine.play("res/raw-assets/Audio/BGM3.ogg", !1, 1);
u();
}, this);
t.getChildByName("choice5").on("touchstart", function () {
i.menpai[2] += 1;
i.itemNum2[34] += 1;
i.itemNum2[9] += 1;
cc.audioEngine.stopAll();
cc.audioEngine.play("res/raw-assets/Audio/BGM3.ogg", !1, 1);
u();
}, this);
t.getChildByName("choice6").on("touchstart", function() {
i.menpai[0] += 1;
i.itemNum2[26] += 1;
i.itemNum2[3] += 1;
cc.audioEngine.stopAll();
cc.audioEngine.play("res/raw-assets/Audio/BGM3.ogg", !1, 1);
u();
}, this);
t.getChildByName("choice7").on("touchstart", function() {
if (c.gameData[1] > 0) {
i.publicVar[1] = 1;
u();
} else r.playText("Canvas/text1", "暂未开放", 80);
}, this);
t.getChildByName("choice8").on("touchstart", function() {
i.menpai[7] += 1;
i.itemNum2[35] += 1;
i.itemNum2[36] += 1;
cc.audioEngine.stopAll();
cc.audioEngine.play("res/raw-assets/Audio/BGM3.ogg", !1, 1);
u();
}, this);
t.getChildByName("choice9").on("touchstart", function () {
i.menpai[6] += 1;
i.itemNum2[25] += 1;
i.itemNum2[33] += 1;
cc.audioEngine.stopAll();
cc.audioEngine.play("res/raw-assets/Audio/BGM3.ogg", !1, 1);
u();
}, this);
(function() {
t.opacity = 0;
n.opacity = 0;
})();
(function() {
r.playText("Canvas/text1", "请选择你的门派...", 80);
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
var t = [ "一般", "快", "一般" ], n = cc.find("Canvas/button/speed"), a = e("scr_data"), i = e("scr_effect");
cc.find("Canvas/text/speed").getComponent("cc.Label").string = "你目前剧情（部分）播放速度为" + t[a.publicVar[6] || 2];
n.on("touchstart", function() {
a.publicVar[6] += 1;
a.publicVar[6] > 2 && (a.publicVar[6] = 1);
i.playText("Canvas/text/speed", "你目前剧情播放速度为" + t[a.publicVar[6]], 60);
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
t.itemNum2[3] = 0;
t.itemNum2[4] = 0;
t.itemNum2[8] = 0;
t.itemNum2[9] = 0;
t.itemNum2[10] = 0;
t.itemNum2[11] = 0;
t.itemNum2[14] = 0;
t.itemNum2[19] = 0;
t.itemNum2[20] = 0;
t.itemNum2[21] = 0;
t.itemNum2[22] = 0;
t.ifFollow[0] = 0;
t.choice[5] = 0;
t.skillLv[5] = 0;
t.skillLv[9] = 0;
t.skillLv[14] = 0;
t.skillLv[25] = 0;
t.figthExp[0] = 0;
t.figthExp[1] = 0;
t.figthExp[2] = 0;
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