
let yakelin = [{
    code: "cj_support",
    name: "友情赞助",
    point: 1,
    desc: "【🎁友情赞助】玩家的支持是游戏前进的源动力 [部分藏品生效数量额外增加,部分天赋出现概率及数量发生改变]",
    hasGet: function (eltha, dira, tanijah) {
        if (tanijah.hasSupport()) {
            return true;
        } else {
            return false;
        }
    },
    getName: function (zylar) {
        zylar = "";
        if (yanais.hasSupportOver(12)) {
            return "🎁友情赞助＋12";
        }
        if (yanais.hasSupport10()) {
            return "🎁友情赞助＋10";
        }
        if (yanais.hasSupport9()) {
            return "🎁友情赞助＋9";
        }
        if (yanais.hasSupport8()) {
            return "🎁友情赞助＋8";
        }
        if (yanais.hasSupport7()) {
            return "🎁友情赞助＋7";
        }
        if (yanais.hasSupport6()) {
            return "🎁友情赞助＋6";
        }
        if (yanais.hasSupport5()) {
            return "🎁友情赞助＋5";
        }
        if (yanais.hasSupport4()) {
            return "🎁友情赞助＋4";
        }
        if (yanais.hasSupport3()) {
            return "🎁友情赞助＋3";
        }
        if (yanais.hasSupport2()) {
            return "🎁友情赞助＋2";
        }
        if (yanais.hasSupport1()) {
            return "🎁友情赞助＋1";
        }
        return "🎁友情赞助";
    },
    changeDesc: function () {
        if (yanais.hasSupport1()) {
            this.desc = "【🎁友情赞助+1】玩家的支持是游戏前进的源动力 [部分藏品生效数量额外增加,部分天赋出现概率及数量发生改变,转运概率额外+10%]";
        }
        if (yanais.hasSupport15()) {
            this.desc = "【🎁友情赞助+1.5】玩家的支持是游戏前进的源动力 [部分藏品生效数量额外增加,部分天赋出现概率及数量发生改变,传说天赋抽取概率额外加3%,转运概率额外+5%,宝物获取概率额外+10%]";
        }
        if (yanais.hasSupport2()) {
            this.desc = "【🎁友情赞助+2】玩家的支持是游戏前进的源动力 [部分藏品生效数量额外增加,部分天赋出现概率及数量发生改变,转运概率额外+25%,所有宝物掉落概率额外增加25%]";
        }
        if (yanais.hasSupport3()) {
            this.desc = "【🎁友情赞助+3】玩家的支持是游戏前进的源动力 [部分藏品生效数量额外增加,部分天赋出现概率及数量发生改变,转运概率额外+30%,所有宝物掉落概率额外增加40%]";
        }
        if (yanais.hasSupport4()) {
            this.desc = "【🎁友情赞助+4】玩家的支持是游戏前进的源动力 [部分藏品生效数量额外增加,部分天赋出现概率及数量发生改变,转运概率额外+35%,所有宝物掉落概率额外增加45%]";
        }
        if (yanais.hasSupport5()) {
            this.desc = "【🎁友情赞助+5】玩家的支持是游戏前进的源动力 [部分藏品生效数量额外增加,部分天赋出现概率及数量发生改变,转运概率额外+40%,所有宝物掉落概率额外增加50%]";
        }
        if (yanais.hasSupport6()) {
            this.desc = "【🎁友情赞助+6】玩家的支持是游戏前进的源动力 [部分藏品生效数量额外增加,部分天赋出现概率及数量发生改变,转运概率额外+45%,所有宝物掉落概率额外增加55%]";
        }
        if (yanais.hasSupport7()) {
            this.desc = "【🎁友情赞助+7】玩家的支持是游戏前进的源动力 [部分藏品生效数量额外增加,部分天赋出现概率及数量发生改变,转运概率额外+50%,所有宝物掉落概率额外增加60%]";
        }
        if (yanais.hasSupport8()) {
            this.desc = "【🎁友情赞助+8】玩家的支持是游戏前进的源动力 [部分藏品生效数量额外增加,部分天赋出现概率及数量发生改变,转运概率额外+55%,所有宝物掉落概率额外增加65%]";
        }
        if (yanais.hasSupport9()) {
            this.desc = "【🎁友情赞助+9】玩家的支持是游戏前进的源动力 [部分藏品生效数量额外增加,部分天赋出现概率及数量发生改变,转运概率额外+60%,所有宝物掉落概率额外增加70%]";
        }
        if (yanais.hasSupport10()) {
            this.desc = "【🎁友情赞助+10】玩家的支持是游戏前进的源动力 [部分藏品生效数量额外增加,部分天赋出现概率及数量发生改变,转运概率额外+65%,所有宝物掉落概率额外增加75%]";
        }
        if (yanais.hasSupportOver(12)) {
            this.desc = "【🎁友情赞助+12】玩家的支持是游戏前进的源动力 [部分藏品生效数量额外增加,部分天赋出现概率及数量发生改变,转运概率额外+65%,所有宝物掉落概率额外增加75%,旅游套餐效果加强50%]";
        }
    },
    color: [192, 111, 152]
}, {
    code: "cj-bydl",
    type: "ph",
    desc: "【🥇榜一大佬】位于排行榜第一 [奖励:额外增加30%转运概率 山脉道士算卦出现率+80% 攻击时空流浪者必定暴击]",
    hasGet: function (aubreylynn, deshaun, reigha) {
        if (deshaun.userOrder == 1) {
            return true;
        }
        return reigha.hasAchieve(this.code);
    },
    color: [138, 43, 226]
}, {
    code: "cj-b2dl",
    type: "ph",
    desc: "【🥈坐二望一】位于排行榜第二 [奖励:额外增加20%转运概率 山脉道士算卦出现率+60% 攻击时空流浪者暴击率额外+50%]",
    hasGet: function (britten, yamily, eoin) {
        if (yamily.userOrder == 2) {
            return true;
        }
        return eoin.hasAchieve(this.code);
    },
    color: [138, 43, 226]
}, {
    code: "cj-b3dl",
    type: "ph",
    desc: "【🥉登堂入室】位于排行榜第三 [奖励:额外增加10%转运概率 山脉道士算卦出现率+40% 攻击时空流浪者暴击率额外+30%]",
    hasGet: function (madsion, beliz, shahadah) {
        return shahadah.hasAchieve(this.code);
    },
    color: [138, 43, 226]
}, {
    code: "cj-b10dl",
    type: "ph",
    desc: "【一席之地】位于排行榜前十 [奖励:额外增加10%转运概率 额外增加获取多个天赋的概率 山脉道士算卦出现率+20% 算命移除天赋【家传把式】]",
    hasGet: function (clhoe, izabela, audrionna) {
        return audrionna.hasAchieve(this.code);
    },
    color: [138, 43, 226]
}, {
    code: "cj-b20dl",
    type: "ph",
    desc: "【小有名气】位于排行榜前20 [奖励:额外增加6%转运概率] 开局额外获得【香烟】*1",
    hasGet: function (kashen, carlishia, reaiah) {
        return reaiah.hasAchieve(this.code);
    },
    color: [138, 43, 226]
}, {
    code: "cj-b50dl",
    type: "ph",
    desc: "【略有耳闻】位于排行榜前50 [奖励:额外增加4%转运概率] 开局额外+1元",
    hasGet: function (madax, darin, tarell) {
        if (tarell.isB50() && darin.userOrder > 0) {
            return true;
        }
        return false;
    },
    color: [138, 43, 226]
}, {
    code: "cj_collect_ph1",
    type: "ph",
    desc: "【🥇多就是强】位于藏品榜前四 [奖励:所有藏品实际生效数量翻倍(至少+1)]",
    hasGet: function (devendra, jabarion, sameenah) {
        if ("undefined" == typeof jabarion.collectionPhb) {
            return false;
        }
        return sameenah.hasAchieve(this.code);
    },
    color: [138, 43, 226]
}, {
    code: "cj_collect_ph2",
    type: "ph",
    desc: "【🥈多多益善】位于藏品榜第5~10名 [奖励:所有藏品实际生效数量增加50%(至少+1)]",
    hasGet: function (shawnacy, sabir, ganajah) {
        if ("undefined" == typeof sabir.collectionPhb) {
            return false;
        }
        return ganajah.hasAchieve(this.code);
    },
    color: [255, 255, 0]
}, {
    code: "cj_collect_ph3",
    type: "ph",
    desc: "【🥉聊胜于无】位于藏品榜第11~20名 [奖励:所有藏品实际生效数量增加25%(至少+1)]",
    hasGet: function (corrinna, coua, haiyden) {
        if ("undefined" == typeof coua.collectionPhb) {
            return false;
        }
        return haiyden.hasAchieve(this.code);
    },
    color: [255, 255, 0]
}, {
    code: "cj-gameMethodProvier",
    name: "攻略研究者",
    point: 6e5,
    type: "special",
    desc: "【攻略研究者Lv1】贡献玩家公认的高质量的游戏攻略[奖励:中量排行榜积分,转运概率及宝物获取概率额外+7%",
    finalDesc: "【攻略研究者Lv1】贡献玩家公认的高质量的游戏攻略[奖励:中量排行榜积分,转运概率及宝物获取概率额外+7%",
    hasGet: function (evamaria, mahita, wini) {
        if (mahita.userId == 2) {
            wini.setAchieve(this.code, 0);
        }
        if (wini.getGameMethodProviderLv() >= 1) {
            wini.setAchieve(this.code, 1);
            return true;
        }
        var shloima;
        let bristyl = wini.getAchieveData(this.code);
        shloima = "eikcbm";
        if ("undefined" == typeof bristyl) {
            return false;
        }
        if (bristyl.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (ellarene, sturgill, kyrio, kestra) {
        if (!kyrio.hasAchieve(this.code)) { }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_treasure_ahz",
    name: "宝物爱好者",
    type: "special",
    point: 3e4,
    desc: "【宝物爱好者】普通世界,携带至少3件宝物通关且通关分数>=80 [奖励:解锁一个隐藏天赋](限一次)",
    finalDesc: "【宝物爱好者】[奖励:解锁隐藏天赋[夺宝达人]]",
    finish: function (keltyn, maxymilian, zakiyyah, fahd) {
        let mishie = zakiyyah.getAchieveData(this.code);
        if (keltyn.publicVar[1] != -1 && keltyn.publicVar[1] != 1 && keltyn.totalPoint >= 80) {
            if (mishie.num != 1 && zakiyyah.getUserTreasureNum() >= 3) {
                var jaimz;
                let dimitry = zakiyyah.buildAchieveData(this.code, 1, zakiyyah.getTime());
                jaimz = "kqfofn";
                zakiyyah.putAchieveData(this.code, dimitry);
                return true;
            }
        }
        return false;
    },
    hasGet: function (caidee, averylynn, clorene) {
        let anell = clorene.getAchieveData(this.code);
        if ("undefined" == typeof anell) {
            return false;
        }
        if (anell.num > 0) {
            return true;
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_collect_ahz",
    name: "收藏爱好者",
    point: 8e3,
    type: "special",
    desc: "【收藏爱好者】收集5件藏品 [奖励:一个蚊子腿](限一次)",
    finalDesc: "【收藏爱好者】[奖励:一个蚊子腿]",
    finish: function (verenize, jeffy, eytan, hayle) {
        if ("undefined" == typeof jeffy.userCollection) {
            return false;
        }
        if (jeffy.userCollection.totalNum >= 5 && jeffy.collectAhzTgNum != 1) {
            jeffy.collectAhzTgNum = 1;
            if ("undefined" == typeof jeffy.userCollection["collection_wzt"]) {
                jeffy.userCollection["collection_wzt"] = {
                    num: 0
                };
            }
            jeffy.userCollection["collection_wzt"].num += 1;
            jeffy.userCollection.totalNum += 1;
            return true;
        }
        return false;
    },
    hasGet: function (sharessa, tendria, amberdawn) {
        if (tendria.collectAhzTgNum == 1) {
            return true;
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_game_winner_0",
    name: "游戏高手·入门",
    point: 2e5,
    type: "special",
    desc: "【游戏高手·入门】在真实及以上世界,网吧打游戏至少20连胜 [奖励:网吧打游戏最大次数额外+10](限一次)",
    finalDesc: "【游戏高手·入门】[奖励:网吧打游戏最大次数额外+10]",
    finish: function (kavier, aricel, jira, janan) {
        if (kavier.realDebuff == 1 && jira.getGameMaxWinTime() >= 20) {
            jira.setAchieve(this.code, 1);
            return true;
        }
        return false;
    },
    hasGet: function (emajean, chamisa, alaia) {
        return alaia.hasAchieve(this.code);
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_game_winner_1",
    name: "游戏高手·一段",
    point: 4e5,
    type: "special",
    desc: "【游戏高手·一段】在真实及以上世界,网吧打游戏至少35连胜 [奖励:技能[游戏高手]提升Lv1](限一次)",
    finalDesc: "【游戏高手·一段】[奖励:技能[游戏高手]提升Lv1]",
    finish: function (jarrion, ticia, analuiza, voncia) {
        if (jarrion.realDebuff == 1 && analuiza.getGameMaxWinTime() >= 35) {
            analuiza.setAchieve(this.code, 1);
            return true;
        }
        return false;
    },
    hasGet: function (tyrin, trane, tiyona) {
        return tiyona.hasAchieve(this.code);
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_game_winner_2",
    name: "游戏高手·二段",
    point: 1e6,
    type: "special",
    desc: "【游戏高手·二段】在真实及以上世界,网吧打游戏至少50连胜 [奖励:技能[游戏高手]提升Lv1](限一次)",
    finalDesc: "【游戏高手·二段】[奖励:技能[游戏高手]提升Lv1]",
    finish: function (ileanna, clavon, jackline, joniyah) {
        if (ileanna.realDebuff == 1 && jackline.getGameMaxWinTime() >= 50) {
            jackline.setAchieve(this.code, 1);
            return true;
        }
        return false;
    },
    hasGet: function (trayvion, vitalina, soheila) {
        return soheila.hasAchieve(this.code);
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_wz_killer",
    name: "蚊子杀手",
    point: 2e5,
    type: "special",
    desc: "【蚊子杀手】在真实及以上世界,击杀蚊子数>=200,且通关评分>=80(当前已击杀" + yanais.getWzKillNum() + "只) [奖励:少量排行榜积分 激活角色特质[蚊子杀手]](限一次)",
    finalDesc: "【蚊子杀手】[奖励:少量排行榜积分 激活角色特质[蚊子杀手]]",
    finish: function (terraine, jedah, aquilina, silka) {
        if (jedah.userId == 8610) {
            aquilina.setAchieve(this.code, 1);
        }
        if (!aquilina.hasAchieve(this.code)) {
            if (silka >= 80 && terraine.realDebuff == 1 && aquilina.getWzKillNum() >= 200) {
                aquilina.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    hasGet: function (fathima, arathi, kaleia) {
        return kaleia.hasAchieve(this.code);
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_dt1",
    name: "好运赌徒",
    point: 5e5,
    type: "special",
    desc: "【好运赌徒】在真实及以上世界,无【赌术潜质】天赋的情况下,赌博总获利>=40元,且通关评分>=70(当前已获利" + yanais.getYuanText(tijae.winMoneyTotal) + ") [奖励:少量排行榜积分 激活角色特质[赌徒]](限一次)",
    finalDesc: "【好运赌徒】[奖励:少量排行榜积分 激活角色特质[赌徒]]",
    finish: function (charlean, olester, min, alynia) {
        if (min.hasAchieve(this.code)) {
            return false;
        }
        if (charlean.winMoneyTotal >= 400 && alynia >= 70 && min.isReal() && charlean.dbSkill == 0) {
            min.setAchieve(this.code, 1);
            return true;
        }
        return false;
    },
    hasGet: function (nic, zulay, astrea) {
        return astrea.hasAchieve(this.code);
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_dt2",
    name: "冒牌赌术",
    point: 5e5,
    type: "special",
    desc: "【冒牌赌术】在真实及以上世界,携带【赌术潜质】天赋的情况下,赌博总获利<=-40元,且通关评分>=70(当前已获利" + yanais.getYuanText(tijae.winMoneyTotal) + ") [奖励:少量排行榜积分 角色特质[赌徒]最大获利+5元,单次赌博最大额度+1元(拥有该特质后生效)](限一次)",
    finalDesc: "【冒牌赌术】[奖励:少量排行榜积分 角色特质[赌徒]最大获利+5元,单次赌博最大额度+1元(拥有该特质后生效)]",
    finish: function (wilmoth, dayri, jakari, cula) {
        if (jakari.hasAchieve(this.code)) {
            return false;
        }
        if (wilmoth.winMoneyTotal <= -400 && cula >= 70 && jakari.isReal() && wilmoth.dbSkill > 0) {
            jakari.setAchieve(this.code, 1);
            return true;
        }
        return false;
    },
    hasGet: function (samrat, lhea, kenn) {
        return kenn.hasAchieve(this.code);
    },
    color: [135, 206, 235]
}, {
    code: "cj_scdw",
    name: "收藏大王",
    point: 5e5,
    type: "special",
    desc: "【收藏大王】持有藏品数>=105(不包括螃蟹,当前持有数" + yanais.getUserCollectionTotalNum() + ")[奖励:少量排行榜积分 藏品实际生效数额外+1,藏品数量上限额外+1,藏品最大生效数额外+3]",
    finalDesc: "【收藏大王】[奖励:少量排行榜积分 藏品实际生效数额外+1,藏品数量上限额外+1,藏品最大生效数额外+3]",
    hasGet: function (baislee, meritza, avy) {
        if (avy.hasAchieve(this.code)) {
            return true;
        }
        if (avy.getUserCollectionTotalNum() >= 105) {
            avy.setAchieve(this.code, 1);
            return true;
        }
        return avy.hasAchieve(this.code);
    },
    finish: function (sharnelle, sanetra, anjelica, sirus) {
        if (anjelica.hasAchieve(this.code)) {
            return false;
        }
        if (anjelica.getUserCollectionTotalNum() >= 105) {
            anjelica.setAchieve(this.code, 1);
            return true;
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_test",
    name: "测试成就",
    point: 5e5,
    type: "special",
    canShow: false,
    newDesc: "持有藏品数>=105(不包括螃蟹,当前持有数" + yanais.getUserCollectionTotalNum() + ")",
    newBoon: "少量排行榜积分 藏品实际生效数额外+1,藏品数量上限额外+1,藏品最大生效数额外+3",
    hasGet: function () {
        var sarynity;
        let kyril = yuriana("scr_data");
        sarynity = 2;
        var deandres;
        let solana = yuriana("scr_data2");
        deandres = 6;
        let mariola = yuriana("scr_public");
        mariola.setAchieve(this.code, 0);
        return mariola.hasAchieve(this.code);
    },
    newCanFinish: function () {
        var jarmarcus = 5;
        let bertha = yuriana("scr_data");
        jarmarcus = 11;
        var tamsen = 9;
        let elesha = yuriana("scr_data2");
        tamsen = "bqdlak";
        let brae = yuriana("scr_public");
        if (brae.isTestUser()) {
            return true;
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_scj",
    name: "收藏家",
    point: 5e5,
    type: "special",
    desc: "【收藏家】持有藏品数>=70(不包括螃蟹,当前持有数" + yanais.getUserCollectionTotalNum() + ")[奖励:少量排行榜积分 藏品实际生效数额外+1,藏品数量上限额外+1,藏品最大生效数额外+2]",
    finalDesc: "【收藏家】[奖励:少量排行榜积分 藏品实际生效数额外+1,藏品数量上限额外+1,藏品最大生效数额外+2]",
    hasGet: function (wintana, maddlynn, orlie) {
        if (orlie.hasAchieve(this.code)) {
            return true;
        }
        if (orlie.getUserCollectionTotalNum() >= 70) {
            orlie.setAchieve(this.code, 1);
            return true;
        }
        return orlie.hasAchieve(this.code);
    },
    finish: function (sacred, neilson, raenisha, betha) {
        if (raenisha.hasAchieve(this.code)) {
            return false;
        }
        if (raenisha.getUserCollectionTotalNum() >= 70) {
            raenisha.setAchieve(this.code, 1);
            return true;
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_ktz_real_game_winner_2",
    name: "开拓者-游戏高手·二段",
    point: 5e5,
    type: "only",
    desc: "【开拓者-游戏高手·二段】第一个达成【游戏高手·二段】[奖励:大楼网吧开门概率提高5%] 达成者:自恋",
    finish: function (livvy, chey, lavarus, altina) {
        return false;
    },
    hasGet: function (filimon, abdulwahhab, marsean) {
        if (marsean.isUser([2, 1354])) {
            marsean.setAchieve(this.code, 1);
        }
        return marsean.hasAchieve(this.code);
    },
    color: [238, 162, 164]
}, {
    code: "cj_ktz_scdw",
    name: "开拓者-收藏大王",
    point: 1e5,
    type: "only",
    desc: "【开拓者-收藏大王】前两个达成【收藏大王】[奖励:先驱者之证*1] 达成者:蒋琰 你好",
    finish: function (zavi, keorra, maazi, kawuan) {
        return false;
    },
    hasGet: function (haseem, genva, yarell) {
        if (yarell.isUser([2, 13915, 1134])) {
            yarell.setAchieve(this.code, 1);
        }
        return yarell.hasAchieve(this.code);
    },
    color: [238, 162, 164]
}, {
    code: "cj_ktz_real2_hengSao",
    name: "开拓者-横扫·真实二阶",
    point: 5e5,
    type: "only",
    desc: "【开拓者-横扫·真实二阶】第一个达成【横扫·真实二阶】 [奖励:旧书店技能书售卖数量额外+1] 达成者:蒋琰",
    finish: function (kiet, ruvi, pharon, ladreama) {
        return false;
    },
    hasGet: function (raelan, anwitha, sheena) {
        if (anwitha.userId == 2 || anwitha.userId == 1134) {
            sheena.setAchieve(this.code, 1);
        }
        return sheena.hasAchieve(this.code);
    },
    color: [238, 162, 164]
}, {
    code: "cj_ktz_real_1_kb1",
    name: "开拓者-跬步(初级健身考试·理论)",
    point: 1e5,
    type: "only",
    desc: "【开拓者-跬步(初级健身考试·理论)】第一个达成【跬步(初级健身考试·理论)】 [奖励:每日最大健身次数额外+1] 达成者:蒋琰",
    finish: function (montrice, maynard, leauna, adefolarin) {
        return false;
    },
    hasGet: function (yaditzel, aradhana, emmerly) {
        if (aradhana.userId == 2 || aradhana.userId == 1134) {
            emmerly.setAchieve(this.code, 1);
        }
        return emmerly.hasAchieve(this.code);
    },
    color: [238, 162, 164]
}, {
    code: "cj_ktz_real_1_kb2",
    name: "开拓者-跬步(初级健身考试·实操)",
    point: 1e5,
    type: "only",
    desc: "【开拓者-跬步(初级健身考试·实操)】第一个达成【跬步(初级健身考试·实操)】 [奖励:每日最大健身次数额外+1] 达成者:悠悠",
    finish: function (merchelle, treda, aivery, terecia) {
        return false;
    },
    hasGet: function (tasos, heraldo, arunima) {
        if (heraldo.userId == 2 || heraldo.userId == 4183) {
            arunima.setAchieve(this.code, 1);
        }
        return arunima.hasAchieve(this.code);
    },
    color: [238, 162, 164]
}, {
    code: "cj_ktz_real_1_kb3",
    name: "开拓者-跬步(初级健身考试·体能)",
    point: 1e5,
    type: "only",
    desc: "【开拓者-跬步(初级健身考试·体能)】第一个达成【跬步(初级健身考试·体能)】 [奖励:每日最大健身次数额外+1] 达成者:悠悠",
    finish: function (mudaser, jameera, azelle, bilge) {
        return false;
    },
    hasGet: function (alaiiah, ger, shawnique) {
        if (ger.userId == 2 || ger.userId == 4183) {
            shawnique.setAchieve(this.code, 1);
        }
        return shawnique.hasAchieve(this.code);
    },
    color: [238, 162, 164]
}, {
    code: "cj_ktz_real_1_door1",
    name: "开拓者-入门(初级健身考试·理论)",
    point: 2e6,
    type: "only",
    desc: "【开拓者-入门(初级健身考试·理论)】第一个达成【入门(初级健身考试·理论)】 [奖励:每日最大健身次数额外+1] 达成者:蒋琰",
    finish: function (karmah, oaklie, dauphine, kaydon) {
        return false;
    },
    hasGet: function (audin, isaira, malai) {
        if (isaira.userId == 2 || isaira.userId == 1134) {
            malai.setAchieve(this.code, 1);
        }
        return malai.hasAchieve(this.code);
    },
    color: [238, 162, 164]
}, {
    code: "cj_ktz_real_1_door2",
    name: "开拓者-入门(初级健身考试·实操)",
    point: 2e6,
    type: "only",
    desc: "【开拓者-入门(初级健身考试·实操)】第一个达成【入门(初级健身考试·实操)】 [奖励:每日最大健身次数额外+1] 达成者:蒋琰",
    finish: function (breyona, stefenie, daden, aaronjoshua) {
        return false;
    },
    hasGet: function (abhir, shunell, zevy) {
        if (zevy.isUser([2, 1134])) {
            zevy.setAchieve(this.code, 1);
        }
        return zevy.hasAchieve(this.code);
    },
    color: [238, 162, 164]
}, {
    code: "cj_ktz_real_1_door3",
    name: "开拓者-入门(初级健身考试·体能)",
    point: 2e6,
    type: "only",
    desc: "【开拓者-入门(初级健身考试·体能)】第一个达成【入门(初级健身考试·体能)】 [奖励:每日最大健身次数额外+1] 达成者:蒋琰",
    finish: function (arven, corena, tshara, maik) {
        return false;
    },
    hasGet: function (coralie, demirose, marines) {
        if (demirose.userId == 2 || demirose.userId == 1134) {
            marines.setAchieve(this.code, 1);
        }
        return marines.hasAchieve(this.code);
    },
    color: [238, 162, 164]
}, {
    code: "cj_ktz_real_1_zige",
    name: "开拓者-资格",
    point: 1e5,
    type: "only",
    desc: "【开拓者-资格】第一个达成【资格】 [奖励:旧书店技能书最大数量额外+1] 达成者:消逝",
    finish: function (red, ikeshia, aavani, maiha) {
        return false;
    },
    hasGet: function (shamill, artavion, zaylyn) {
        if (artavion.userId == 2 || artavion.userId == 7519) {
            zaylyn.setAchieve(this.code, 1);
        }
        return zaylyn.hasAchieve(this.code);
    },
    color: [238, 162, 164]
}, {
    code: "cj_ktz_real_1_hengSao",
    name: "开拓者-横扫·平行",
    point: 5e5,
    type: "only",
    desc: "【开拓者-横扫·平行】第一个达成【横扫·平行】 [奖励:旧书店出现多个商品的概率提高10%] 达成者:亦恕",
    finish: function (sharlean, oval, jacobian, neomy) {
        return false;
    },
    hasGet: function (kyosuke, raiyne, giulietta) {
        if (raiyne.userId == 35 || raiyne.userId == 2) {
            giulietta.setAchieve(this.code, 1);
        }
        return giulietta.hasAchieve(this.code);
    },
    color: [238, 162, 164]
}, {
    code: "cj_ktz_real_1_yzzl_px",
    name: "开拓者-一战之力·平行",
    point: 1e6,
    type: "only",
    desc: "【开拓者-一战之力·平行】唯一成就,第一个达成[一战之力·平行][奖励:大量排行榜积分 道士算卦事件出现率额外+40%] 达成者:~(1358)",
    hasGet: function (shamone, dovan, sheida) {
        if (dovan.userId == 1358 || dovan.userId == 2) {
            sheida.setAchieve(this.code, 1);
            return true;
        }
        var briona = 9;
        let trynitee = sheida.getAchieveData(this.code);
        briona = 7;
        if ("undefined" == typeof trynitee) {
            return false;
        }
        if (trynitee.num > 0) {
            return true;
        }
        return false;
    },
    color: [238, 162, 164]
}, {
    code: "cj_ktz_kill_gold",
    name: "开拓者-屠神者",
    point: 2e6,
    type: "only",
    desc: "【开拓者-屠神者】唯一成就,第一个共计完成10次不同期的战神挑战[奖励:大量排行榜积分 未知奖励]",
    hasGet: function (marcquel, threasa, myster) {
        let osmon = myster.getAchieveData(this.code);
        if ("undefined" == typeof osmon) {
            return false;
        }
        if (osmon.num > 0) {
            return true;
        }
        return false;
    },
    color: [238, 162, 164]
}, {
    code: "cj_ktz_gold",
    name: "开拓者-战神",
    point: 2e6,
    type: "only",
    desc: "【开拓者-战神】唯一成就,第一个共计10次被选为战神挑战目标[奖励:大量排行榜积分 未知奖励]",
    updateAchieveModelDesc: function () {
        var kitrina = 7;
        let chimdindu = yuriana("scr_data");
        kitrina = 12;
        var bobra = 16;
        let mckane = yuriana("scr_data2");
        bobra = "dfmldh";
        let ailynn = yuriana("scr_public");
        let bryana = {
            2: 1,
            35: 1
        };
        let kahlan = ailynn.getUserId();
        var sanish = 11;
        let anaelise = ailynn.getNum(bryana[kahlan]);
        sanish = "pckime";
        this.desc += "(" + ailynn.getNum(bryana[kahlan]) + "/10)";
    },
    hasGet: function (taiyana, queene, paticia) {
        var wylder;
        let harless = paticia.getAchieveData(this.code);
        wylder = 12;
        if ("undefined" == typeof harless) {
            return false;
        }
        if (harless.num > 0) {
            return true;
        }
        return false;
    },
    color: [238, 162, 164]
}, {
    code: "cj_first_tsz",
    name: "探索先锋",
    point: 4e5,
    type: "only",
    level: "real2",
    desc: "【探索先锋】唯一成就:第一个达成【探索者】成就.[永久奖励:所有宝物掉落概率永久+5%] 达成者:Relssp",
    hasGet: function (lawrencia, severyn, hareld) {
        if (severyn.userId == 73 || severyn.userId == 2) {
            hareld.setAchieve(this.code, 1);
            return true;
        }
        var elica;
        let oswaldo = hareld.getAchieveData(this.code);
        elica = "fjpifh";
        if ("undefined" == typeof oswaldo) {
            return false;
        }
        if (oswaldo.num > 0) {
            return true;
        }
        return false;
    },
    color: [238, 162, 164]
}, {
    code: "cj_tsz",
    name: "探索者",
    point: 4e5,
    type: "real2",
    newDesc: "(真实世界2阶)战胜挖掘机且通关评分>=60",
    newBoon: "较多排行榜积分 解锁一个隐藏天赋-真实专属 解锁技能[超时空-掠天]",
    newCanFinish: function () {
        let maury = yuriana("scr_data");
        var zayana = 16;
        let vinyette = yuriana("scr_data2");
        zayana = 0;
        var ibaad;
        let dunia = yuriana("scr_public");
        ibaad = 4;
        var lauraine = 10;
        let cambrey = maury.totalPoint;
        lauraine = "egjoge";
        if (maury.publicVar[1] != -1 && maury.publicVar[1] != 1 && maury.realDebuff2 == 1 && cambrey >= 60 && maury.winWajueji == 1) {
            return true;
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj-real2-tz-fruit2",
    name: "果子杀手·二阶",
    point: 6e5,
    desc: "【果子杀手·二阶】达成[探索者]的情况下,吃果子数量不低于6000,且吃炒坚果次数不低于600(限一次)[奖励:较多排行榜积分 角色特质[易吸收体质(果子)]提升Lv1]",
    type: "real2",
    finalDesc: "【果子杀手·二阶】[奖励:较多排行榜积分 角色特质[易吸收体质(果子)]提升Lv1]",
    hasGet: function (graham, kayann, lylli) {
        if (kayann.userId == 8610) {
            lylli.setAchieve(this.code, 1);
        }
        let zarea = lylli.getAchieveData(this.code);
        if ("undefined" == typeof zarea) {
            return false;
        }
        if (zarea.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (chalanda, maguadalupe, celsie, kaliyanei) {
        if (celsie.reachTsz() && !celsie.hasAchieve(this.code)) {
            if (celsie.getTotalFruitNum() >= 6e3 && celsie.getRecodeChaoJianGuo() >= 600) {
                celsie.addAchieveNum(this.code);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj-real-tiaozhan-217",
    name: "退役拳手的馈赠(真实一阶)",
    point: 1e6,
    type: "real",
    desc: "击败挑战boss[退役知名拳手]时天数<=140,且达成成就[求生者](限一次)",
    regularText: "较多排行榜积分 开局健康额外+5",
    hasGet: function (christene, tenayah, martasia) {
        return martasia.hasAchieve(this.code);
    },
    finish: function (tevion, zissy, kenneth, jenique) {
        if (!kenneth.hasAchieve(this.code)) {
            if (kenneth.reachQsz() && kenneth.hasKill("217")) {
                kenneth.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj-ktz-real-tiaozhan-217",
    name: "开拓者-退役拳手的馈赠(真实一阶)",
    point: 5e5,
    type: "real",
    type2: "only",
    desc: "第一个达成[退役拳手的馈赠(真实一阶)] 达成者:蒋琰",
    regularText: "中量排行榜积分 开局健康额外+1",
    hasGet: function (hakan, krishika, marcine) {
        if (krishika.userId == 2 || krishika.userId == 1134) {
            marcine.setAchieve(this.code, 1);
        }
        return marcine.hasAchieve(this.code);
    },
    finish: function (sherinda, orlando, crettie, sergiojr) {
        return false;
    },
    color: [238, 162, 164]
}, {
    code: "cj-real2-tz-fruit1",
    name: "果子杀手",
    point: 2e4,
    desc: "【果子杀手】达成[求生者]的情况下,吃果子数量不低于6000(限一次)[奖励:少量排行榜积分 解锁角色特质[易吸收体质(果子)]]",
    type: "real",
    finalDesc: "【果子杀手】[奖励:较多排行榜积分 解锁角色特质[易吸收体质(果子)]]",
    hasGet: function (raelynne, rubell, nekisha) {
        let kerbie = nekisha.getAchieveData(this.code);
        if ("undefined" == typeof kerbie) {
            return false;
        }
        if (kerbie.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (viraansh, kicia, sandhya, likhitha) {
        if (sandhya.reachQsz() && !sandhya.hasAchieve(this.code)) {
            if (sandhya.getTotalFruitNum() >= 6e3) {
                sandhya.addAchieveNum(this.code);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_bxx",
    name: "不信邪",
    point: 1e6,
    type: "real2",
    desc: "【不信邪】(真实世界2阶)破除郊外幽影传说的源头,且满足[探索者]要求.(必须携带[探索者]天赋)[奖励:较多排行榜积分 道士算卦获得天赋的概率额外增加5%](限一次)",
    finalDesc: "【不信邪】[奖励:较多排行榜积分 道士算卦获得天赋的概率额外增加5%]",
    hasGet: function (raynaldo, yumika, kenyari) {
        var ocie = 11;
        let kiansh = kenyari.getAchieveData(this.code);
        ocie = "gbjdog";
        if ("undefined" == typeof kiansh) {
            return false;
        }
        if (kiansh.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (fenris, gevorg, ayaaz, laquintin) {
        let dmitry = ayaaz.getAchieveData(this.code);
        if (ayaaz.reachTsz()) {
            if (dmitry.num != 1 && ayaaz.hasKillYouYing()) {
                let avigail = ayaaz.buildAchieveData(this.code, 1, ayaaz.getTime());
                ayaaz.putAchieveData(this.code, avigail);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real2_wyh",
    name: "万元户(真实二阶)",
    point: 2e6,
    type: "real2",
    desc: "【万元户(真实二阶)】到达省城36天内,携带超过10000元的现金进行探索至少一次,且达成[探索者][奖励:较多排行榜积分 技能[千金散尽还复来]提升Lv1](限一次)" + "当局达成情况:" + (yanais.isReachWyh() ? "已达成" : "未达成"),
    finalDesc: "【万元户(真实二阶)】[奖励:较多排行榜积分 技能[千金散尽还复来]提升Lv1]",
    challengeList: [{
        code: "民以食为天",
        boonText: "较多排行榜积分 技能[千金散尽还复来]提升Lv1",
        point: 3e6
    }],
    canFinish: function (brynton, paije, iyshia, loleta) {
        if (iyshia.reachTsz()) {
            if (iyshia.isReachWyh()) {
                return true;
            }
        }
        return false;
    },
    hasGet: function (vanesia, doraly, carmeisha) {
        let kanako = carmeisha.getAchieveData(this.code);
        if ("undefined" == typeof kanako) {
            return false;
        }
        if (kanako.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (tampatha, rinesa, travion, addix) {
        var shaina = 3;
        let baiba = travion.getAchieveData(this.code);
        shaina = 5;
        if (travion.reachTsz()) {
            if (travion.isReachWyh() && !travion.hasAchieve(this.code)) {
                let milana = travion.buildAchieveData(this.code, 1, travion.getTime());
                travion.putAchieveData(this.code, milana);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_ktz_real2_wyh",
    name: "开拓者-万元户(真实二阶)",
    point: 1e4,
    type: "real2",
    desc: "【开拓者-万元户(真实二阶)】第一个或前两位(限时)达成【万元户(真实二阶)】奖励:开局额外增加0.2元 达成者:悠悠 在下小炀",
    finish: function (cheria, shlomie, leonello, nitoya) {
        return false;
    },
    hasGet: function (daycen, rumell, alysin) {
        if (alysin.isUser([5635, 2, 5430])) {
            alysin.setAchieve(this.code, 1);
        }
        return alysin.hasAchieve(this.code);
    },
    color: [238, 162, 164]
}, {
    code: "cj_xhq",
    name: "血汗钱",
    point: 18e5,
    type: "real2",
    desc: "【血汗钱】(真实世界2阶)到达省城36天内,携带超过4000元的现金进行探索至少一次,且通关评分>=60[奖励:较多排行榜积分 角色特质位提升至2个 世界线略微变动](限一次)" + "当局达成情况:" + (yanais.isReachXhq() ? "已达成" : "未达成"),
    finalDesc: "【血汗钱】[奖励:较多排行榜积分 世界线略微变动]",
    hasGet: function (loriane, nikolaas, dominie) {
        if (nikolaas.userId == 8610) {
            dominie.setAchieve(this.code, 1);
        }
        var kerlin;
        let jabron = dominie.getAchieveData(this.code);
        kerlin = 9;
        if ("undefined" == typeof jabron) {
            return false;
        }
        if (jabron.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (martisha, izabell, linoshka, awwal) {
        var oracle;
        let wera = linoshka.getAchieveData(this.code);
        oracle = 5;
        if (linoshka.isReal2() && awwal >= 60) {
            if (linoshka.isReachXhq() && !linoshka.hasAchieve(this.code)) {
                var dejan;
                let imaya = linoshka.buildAchieveData(this.code, 1, linoshka.getTime());
                dejan = 3;
                linoshka.putAchieveData(this.code, imaya);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_ktz_real_1_wyh",
    name: "开拓者-万元户(平行)",
    point: 1e4,
    type: "real_1",
    desc: "【开拓者-万元户(平行)】第一个或前两位(限时)达成【万元户(平行)】奖励:开局额外增加0.3元 达成者:蒋琰 季伯常",
    finish: function (empris, davana, renetta, sylvesta) {
        return false;
    },
    hasGet: function (sionna, jacqulene, rejane) {
        if (rejane.isUser([1134, 7664, 2])) {
            rejane.setAchieve(this.code, 1);
        }
        return rejane.hasAchieve(this.code);
    },
    color: [238, 162, 164]
}, {
    code: "cj_real_1_wyh",
    name: "万元户(平行)",
    point: 2e6,
    type: "real_1",
    desc: "【万元户(平行)】到达省城36天内,携带超过10000元的现金进行探索至少一次,且达成[前行者][奖励:较多排行榜积分 技能[千金散尽还复来]提升Lv1](限一次)" + "当局达成情况:" + (yanais.isReachWyh() ? "已达成" : "未达成"),
    finalDesc: "【万元户(平行)】[奖励:较多排行榜积分 技能[千金散尽还复来]提升Lv1]",
    hasGet: function (yoshani, fatiha, yosuf) {
        var zamyrah = 11;
        let coleta = yosuf.getAchieveData(this.code);
        zamyrah = 2;
        if ("undefined" == typeof coleta) {
            return false;
        }
        if (coleta.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (sapphyre, jmarie, rutherford, courtni) {
        var deoveon = 6;
        let vishwa = rutherford.getAchieveData(this.code);
        deoveon = 14;
        if (rutherford.reachQxz()) {
            if (rutherford.isReachWyh() && !rutherford.hasAchieve(this.code)) {
                var brandin = 8;
                let muhib = rutherford.buildAchieveData(this.code, 1, rutherford.getTime());
                brandin = 9;
                rutherford.putAchieveData(this.code, muhib);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_ktz_real2_QiangYing",
    name: "开拓者-强硬",
    point: 2e6,
    type: "only",
    desc: "【开拓者-强硬】唯一成就,第一个达成【强硬】[奖励:较多排行榜积分] 达成者:亦恕",
    hasGet: function (isse, rodson, arniece) {
        if (rodson.userId == 35 || rodson.userId == 2) {
            arniece.setAchieve(this.code, 1);
            return true;
        }
        let rogan = arniece.getAchieveData(this.code);
        if ("undefined" == typeof rogan) {
            return false;
        }
        if (rogan.num > 0) {
            return true;
        }
        return false;
    },
    color: [238, 162, 164]
}, {
    code: "cj_ktz_bxx",
    name: "开拓者-不信邪",
    point: 35e4,
    type: "only",
    desc: "【开拓者-不信邪】唯一成就,第一个达成[不信邪]成就[奖励:较多排行榜积分 道士算卦事件出现概率额外增加40%] 达成者:亦恕",
    hasGet: function (aisia, tahtyana, nerriah) {
        if (tahtyana.userId == 35 || tahtyana.userId == 2) {
            nerriah.setAchieve(this.code, 1);
            return true;
        }
        let martyn = nerriah.getAchieveData(this.code);
        if ("undefined" == typeof martyn) {
            return false;
        }
        if (martyn.num > 0) {
            return true;
        }
        return false;
    },
    color: [238, 162, 164]
}, {
    code: "cj_ktz_xhq",
    name: "开拓者-血汗钱",
    point: 8e5,
    type: "only",
    desc: "【开拓者-血汗钱】唯一成就,第一个达成血汗钱[奖励:较多排行榜积分 2个草带] 达成者:寻伤忘忧",
    hasGet: function (chasidi, shawen, ticara) {
        if (shawen.userId == 463 || shawen.userId == 2) {
            if (ticara.gd2("ktz_xhq") != 1) {
                ticara.sd2("ktz_xhq", 1);
                ticara.addCollection2("collection_cd", 2);
                ticara.setAchieve(this.code, 1);
                return true;
            }
        }
        var burdena;
        let nevie = ticara.getAchieveData(this.code);
        burdena = 1;
        if ("undefined" == typeof nevie) {
            return false;
        }
        if (nevie.num > 0) {
            return true;
        }
        return false;
    },
    color: [238, 162, 164]
}, {
    code: "cj_ktz_shiLian2",
    name: "开拓者-二阶试炼",
    point: 6e5,
    type: "only",
    desc: "【开拓者-二阶试炼】唯一成就,第一个达成【二阶试炼】[奖励:较多排行榜积分 试炼环节健康消耗永久降低10点] 达成者:亦恕",
    hasGet: function (luler, dannica, keondric) {
        if (dannica.userId == 35 || dannica.userId == 2) {
            keondric.setAchieve(this.code, 1);
            return true;
        }
        var tyvell;
        let daz = keondric.getAchieveData(this.code);
        tyvell = 1;
        if ("undefined" == typeof daz) {
            return false;
        }
        if (daz.num > 0) {
            return true;
        }
        return false;
    },
    color: [238, 162, 164]
}, {
    code: "cj_real2_QiangYing",
    name: "强硬",
    point: 3e6,
    desc: "【强硬】达成【探索者】的同时,战胜刀疤,巨人王,城中村大佬的次数 >=3(限一次)[奖励:较多排行榜积分 解锁角色特质[硬汉]]",
    type: "real2",
    finalDesc: "【强硬】[奖励:较多排行榜积分 解锁角色特质[硬汉]]",
    hasGet: function (anik, vaidehi, roshni) {
        if (roshni.hasAchieve(this.code)) {
            return true;
        }
        return false;
    },
    finish: function (vonnette, lastarza, nichalas, quartterio) {
        var edier = 0;
        let lynia = nichalas.getAchieveData(this.code);
        edier = 12;
        if (nichalas.hasAchieve(this.code)) {
            return false;
        }
        if (nichalas.reachTsz()) {
            if (vonnette.winDaoBaNan + vonnette.winDaLao + nichalas.getKingKill() >= 3) {
                nichalas.addAchieveNum(this.code);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real2_HengSao",
    name: "横扫·真实二阶",
    point: 5e6,
    desc: "【横扫·真实二阶】必须携带天赋[探索者],达成【探索者】的同时,战胜刀疤,巨人王,城中村大佬的次数=4(限一次)[奖励:较多排行榜积分 角色特质[硬汉]提升Lv1]",
    type: "real2",
    finalDesc: "【横扫·真实二阶】[奖励:较多排行榜积分 角色特质[硬汉]提升Lv1]",
    hasGet: function (jaremiah, raishaun, tameera) {
        if (tameera.hasAchieve(this.code)) {
            return true;
        }
        return false;
    },
    finish: function (madlynn, luisgustavo, quarterrio, kynzly) {
        var masashi;
        let mariene = quarterrio.getAchieveData(this.code);
        masashi = "lkhhgo";
        if (quarterrio.hasAchieve(this.code)) {
            return false;
        }
        if (quarterrio.reachTsz() && quarterrio.isTsz()) {
            if (madlynn.winDaoBaNan + madlynn.winDaLao + quarterrio.getKingKill() >= 4) {
                quarterrio.addAchieveNum(this.code);
                return true;
            }
        }
        return false;
    }
}, {
    code: "cj_real2_bynw",
    name: "变异女王杀手(真实二阶)",
    point: 6e6,
    type: "real2",
    desc: "通关评分>=80,且击败变异女王(限一次)",
    regularText: "较多排行榜积分,击杀蚊子后掉落生肉的概率额外+4%",
    hasGet: function (hilary, deborrah, shourya) {
        if (shourya.hasAchieve(this.code)) {
            return true;
        }
        if (shourya.isTestUser()) {
            shourya.setAchieve(this.code, 1);
        }
        return false;
    },
    finish: function (arsema, tynan, tauren, alyona) {
        if (tauren.isReal2World() && arsema.totalPoint >= 80 && arsema.win707) {
            tauren.setAchieve(this.code, 1);
            return true;
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_ktz_real2_bynw",
    name: "开拓者-变异女王杀手(真实二阶)",
    point: 5e5,
    type: "real2",
    desc: "【开拓者-变异女王杀手(真实二阶)】第一个或前两位(限时)达成【变异女王杀手(真实二阶)】奖励:击杀蚊子后掉落生肉的概率额外+1% 达成者:蒋琰,悠悠",
    finish: function (ralphe, kalashia, arlex, relonda) {
        return false;
    },
    hasGet: function (isahi, dezerey, reyonna) {
        if (reyonna.isUser([1134, 5635, 2])) {
            reyonna.setAchieve(this.code, 1);
        }
        return reyonna.hasAchieve(this.code);
    },
    color: [238, 162, 164]
}, {
    code: "cj_kill_gold_1",
    name: "战神挑战(一期)",
    point: 6e5,
    type: "real2",
    desc: "【战神挑战(一期)】限时成就,作为【探索者】且达成[探索者]成就的同时,在[挑战]中战胜一期战神挑战目标:亦恕[奖励:较多排行榜积分 少量战力榜积分](限一次)",
    finalDesc: "【战神挑战(一期)】[奖励:较多排行榜积分 少量战力榜积分]",
    hasGet: function (prather, lakeley, roley) {
        if (lakeley.userId == 463 && lakeley.bugfixzs != 1) {
            lakeley.bugfixzs = 1;
            roley.setAchieve(this.code, 0);
            roley.save2();
        }
        let karnesha = roley.getAchieveData(this.code);
        if ("undefined" == typeof karnesha) {
            return false;
        }
        if (karnesha.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (stehen, alba, orry, damichael) {
        var nichloas = 9;
        let bruin = orry.getAchieveData(this.code);
        nichloas = "dkheoh";
        if (orry.reachTsz() && bruin.num != 1 && orry.hasKill(668) && orry.isTsz()) {
            var makhaya;
            let zanyla = orry.buildAchieveData(this.code, 1, orry.getTime());
            makhaya = 8;
            orry.putAchieveData(this.code, zanyla);
            return true;
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_shiLian2",
    name: "二阶试炼",
    point: 1e6,
    type: "real2",
    desc: "【二阶试炼】达成【探索者】的同时,在[挑战]中战胜另一个自己[奖励:较多排行榜积分 一个隐藏天赋](限一次)",
    finalDesc: "【二阶试炼】[奖励:较多排行榜积分 隐藏天赋[粉碎]]",
    hasGet: function (zuberi, tayisha, addisan) {
        var janasia = 10;
        let riketa = addisan.getAchieveData(this.code);
        janasia = 15;
        if ("undefined" == typeof riketa) {
            return false;
        }
        if (riketa.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (kieran, adelayne, gerelene, tazeem) {
        let tadeas = gerelene.getAchieveData(this.code);
        if (gerelene.reachTsz() && tadeas.num != 1 && gerelene.hasKill(666)) {
            var naleigh;
            let breckston = gerelene.buildAchieveData(this.code, 1, gerelene.getTime());
            naleigh = 15;
            gerelene.putAchieveData(this.code, breckston);
            return true;
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_reputation_2",
    name: "初出茅庐(真实一阶)",
    point: 1e6,
    type: "real",
    desc: "【初出茅庐(真实一阶)】地下拳场的名气达到[初出茅庐](限一次)\n[奖励:套餐[烟瘾抵抗者]加强一次 较多排行榜积分]",
    finalDesc: "【初出茅庐(真实一阶)】[奖励:套餐[烟瘾抵抗者]加强一次 较多排行榜积分]",
    hasGet: function (elethia, alyca, monford) {
        var lirael;
        let kelin = monford.getAchieveData(this.code);
        lirael = 12;
        if ("undefined" == typeof kelin) {
            return false;
        }
        if (kelin.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (alzada, zayanah, carneal, kees) {
        if (!carneal.hasAchieve(this.code) && carneal.isRealWorld()) {
            var traesyn = 14;
            let burtis = carneal.getQuanChangUserReputation();
            traesyn = 5;
            if (burtis.lv >= 2) {
                carneal.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_reputation_5",
    name: "声名鹊起(真实一阶)",
    point: 2e6,
    type: "real",
    desc: "【声名鹊起(真实一阶)】达成[求生者]且地下拳场的名气达到[声名鹊起](限一次)\n[奖励:激活隐藏天赋[商店之友] 较多排行榜积分]",
    finalDesc: "【声名鹊起(真实一阶)】[奖励:激活隐藏天赋[商店之友] 较多排行榜积分]",
    challengeList: [{
        code: "民以食为天",
        boonText: "较多排行榜积分 技能[受欢迎的黑拳手]提升Lv1",
        point: 4e6
    }],
    canFinish: function (sanam, lender, ellamae, taleea) {
        var jalisia = 0;
        let kizzi = ellamae.getQuanChangUserReputation();
        jalisia = 8;
        if (ellamae.reachQsz() && kizzi.lv >= 5) {
            return true;
        }
        return false;
    },
    hasGet: function (kateri, markyla, giacinto) {
        var lateasa = 11;
        let gerold = giacinto.getAchieveData(this.code);
        lateasa = 3;
        if ("undefined" == typeof gerold) {
            return false;
        }
        if (gerold.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (lexington, hellena, mihan, maricia) {
        if (!mihan.hasAchieve(this.code) && mihan.isRealWorld()) {
            let alexas = mihan.getQuanChangUserReputation();
            if (mihan.reachQsz() && alexas.lv >= 5) {
                mihan.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_reputation_6",
    name: "名噪一时(真实一阶)",
    point: 4e6,
    type: "real",
    desc: "【名噪一时(真实一阶)】达成[求生者]且地下拳场的名气达到[名噪一时](限一次)\n[奖励:较多排行榜积分 技能[受欢迎的黑拳手]提升Lv1]",
    finalDesc: "【名噪一时(真实一阶)】[奖励:较多排行榜积分 技能[受欢迎的黑拳手]提升Lv1]",
    challengeList: [{
        code: "民以食为天",
        boonText: "较多排行榜积分 技能[受欢迎的黑拳手]提升Lv1",
        point: 6e6
    }],
    canFinish: function (amyna, olaoluwa, mackay, ishaq) {
        let ronneka = mackay.getQuanChangUserReputation();
        if (mackay.reachQsz() && ronneka.lv >= 6) {
            return true;
        }
        return false;
    },
    hasGet: function (laziyah, agustina, zekariah) {
        var tristine = 11;
        let halil = zekariah.getAchieveData(this.code);
        tristine = 0;
        if ("undefined" == typeof halil) {
            return false;
        }
        if (halil.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (maddelena, miaisha, salvina, keonne) {
        if (!salvina.hasAchieve(this.code) && salvina.isRealWorld()) {
            var zaragoza = 7;
            let ellary = salvina.getQuanChangUserReputation();
            zaragoza = 7;
            if (salvina.reachQsz() && ellary.lv >= 6) {
                salvina.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_ktz_real1_ms_reputation_6",
    name: "开拓者-名噪一时(真实一阶·民以食为天)",
    point: 1e4,
    type: "real",
    type2: "only",
    desc: "【开拓者-名噪一时(真实一阶·民以食为天)】唯一成就,第一个达成【名噪一时(真实一阶·民以食为天)】[奖励:技能[受欢迎的黑拳手]加成额外增加1%] 达成者:你好",
    hasGet: function (crisel, dijon, shvonne) {
        if (dijon.userId == 13915 || dijon.userId == 2) {
            shvonne.setAchieve(this.code, 1);
            return true;
        }
        return shvonne.hasAchieve(this.code);
    },
    color: [238, 162, 164]
}, {
    code: "cj_ktz_real1_reputation_6",
    name: "开拓者-名噪一时(真实一阶)",
    point: 1e6,
    type: "real",
    type2: "only",
    desc: "【开拓者-名噪一时(真实一阶)】唯一成就,第一个达成【名噪一时(真实一阶)】[奖励:较多排行榜积分 技能[受欢迎的黑拳手]加成额外增加1%] 达成者:蒋琰",
    hasGet: function (aryanna, elidia, apria) {
        if (elidia.userId == 1134 || elidia.userId == 2) {
            apria.setAchieve(this.code, 1);
            return true;
        }
        return apria.hasAchieve(this.code);
    },
    color: [238, 162, 164]
}, {
    code: "cj_ktz_real_biyao_hide_story",
    name: "行者无惧",
    point: 15e5,
    type: "only",
    desc: "【行者无惧】唯一成就,第一个达成成就[何惧] [奖励:较多排行榜积分 技能[伙伴亲和]额外提升Lv1] 达成者:寻伤忘忧",
    hasGet: function (jocely, genelle, sena) {
        if (genelle.userId == 463 || genelle.userId == 2) {
            sena.setAchieve(this.code, 1);
            return true;
        }
        var quanika;
        let caileb = sena.getAchieveData(this.code);
        quanika = 4;
        if ("undefined" == typeof caileb) {
            return false;
        }
        if (caileb.num > 0) {
            return true;
        }
        return false;
    },
    color: [238, 162, 164]
}, {
    code: "cj_ktz_shiLian",
    name: "开拓者-试炼",
    point: 1e5,
    type: "only",
    desc: "【开拓者-试炼】唯一成就,第一个达成【试炼】[奖励:较多排行榜积分 试炼环节健康消耗永久降低10点] 达成者:寻伤忘忧",
    hasGet: function (jda, aydrik, carver) {
        if (aydrik.userId == 463 || aydrik.userId == 2) {
            carver.setAchieve(this.code, 1);
            return true;
        }
        let haizel = carver.getAchieveData(this.code);
        if ("undefined" == typeof haizel) {
            return false;
        }
        if (haizel.num > 0) {
            return true;
        }
        return false;
    },
    color: [238, 162, 164]
}, {
    code: "cj_ktz_real_xianChengBaZhu",
    name: "开拓者-县城霸主",
    point: 2e6,
    type: "only",
    desc: "【开拓者-县城霸主】唯一成就,第一个达成【县城霸主】[奖励:较多排行榜积分 县城钉子户特质-地头蛇特性额外增加5%攻击力] 达成者:蒋琰",
    hasGet: function (zahraa, islombek, yescenia) {
        if (islombek.userId == 2 || islombek.userId == 1134) {
            yescenia.setAchieve(this.code, 1);
            return true;
        }
        var shauwn = 8;
        let miajah = yescenia.getAchieveData(this.code);
        shauwn = 8;
        if ("undefined" == typeof miajah) {
            return false;
        }
        if (miajah.num > 0) {
            return true;
        }
        return false;
    },
    color: [238, 162, 164]
}, {
    code: "cj-real2-tz-shenJingBaiZhan",
    name: "身经百战·真实二阶",
    point: 5e5,
    type: "real2",
    desc: "【身经百战·真实二阶】达成[探索者]且扶老奶奶被偷钱至少150次,且通关评分>=90[奖励:少量排行榜积分,角色特质[警惕-反扒]提升Lv1,技能[千金散尽还复来]提升Lv1] 1.27前限时奖励:先驱者之证*1",
    finalDesc: "【身经百战·真实二阶】[奖励:少量排行榜积分,角色特质[警惕-反扒]提升Lv1]",
    hasGet: function (kaceson, jumarcus, kyelynn) {
        let cyarah = kyelynn.getAchieveData(this.code);
        if ("undefined" == typeof cyarah) {
            return false;
        }
        if (cyarah.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (erlean, kathyria, ellijah, rosi) {
        if (!ellijah.hasAchieve(this.code)) {
            if (ellijah.reachTsz() && erlean.publicVar2[5] >= 150 && rosi >= 90) {
                ellijah.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj-real1-tz-shenJingBaiZhan",
    name: "身经百战·真实一阶",
    point: 1e5,
    type: "real",
    desc: "【身经百战·真实一阶】达成[求生者]且通关评分>=80且扶老奶奶被偷钱至少100次[奖励:少量排行榜积分,角色特质[警惕-反扒]提升Lv1,技能[千金散尽还复来]提升Lv1]",
    finalDesc: "【身经百战·真实一阶】[奖励:少量排行榜积分,角色特质[警惕-反扒]提升Lv1,技能[千金散尽还复来]提升Lv1]",
    hasGet: function (johnine, allese, kayvonna) {
        if (allese.userId == 1134) {
            kayvonna.setAchieve(this.code, 1);
        }
        let nahayla = kayvonna.getAchieveData(this.code);
        if ("undefined" == typeof nahayla) {
            return false;
        }
        if (nahayla.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (anllely, sharon, roberson, adriti) {
        if (!roberson.hasAchieve(this.code)) {
            if (adriti >= 80 && roberson.reachQsz() && anllely.publicVar2[5] >= 100) {
                roberson.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj-real1-tz-xianChengBaZhu",
    name: "县城霸主",
    point: 1e6,
    type: "real",
    desc: "【县城霸主】通关评分>=80且在县城击败刀疤男两次(第二次出现时机为42天以后在县城探索时,且需已击败一次)[奖励:较多排行榜积分,角色特质[县城钉子户]提升Lv1]",
    finalDesc: "【县城霸主】[奖励:较多排行榜积分,角色特质[县城钉子户]提升Lv1]",
    hasGet: function (nakevia, pattie, markk) {
        let midhuna = markk.getAchieveData(this.code);
        if ("undefined" == typeof midhuna) {
            return false;
        }
        if (midhuna.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (alexxus, shahna, sevinch, angler) {
        if (!sevinch.hasAchieve(this.code)) {
            if (angler >= 80 && sevinch.hasKill(10300) && sevinch.isRealWorld()) {
                shahna.xcbzFlag = 1;
                sevinch.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj-real_1-tz-xianChengBaZhu",
    name: "县城霸主·平行",
    point: 5e6,
    type: "real_1",
    newDesc: "通关评分>=80且在县城击败刀疤男两次(第二次出现时机为42天以后在县城探索时,且需已击败一次)",
    newBoon: "较多排行榜积分,角色特质[县城钉子户]提升Lv1",
    newCanFinish: function () {
        let jacobb = yuriana("scr_data");
        var jonina;
        let roanan = yuriana("scr_data2");
        jonina = 16;
        let lashan = yuriana("scr_public");
        let amorita = jacobb.totalPoint;
        if (!lashan.hasAchieve(this.code)) {
            if (amorita >= 80 && lashan.hasKill(10300) && lashan.isReal_1World()) {
                lashan.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj-real2-tz-xianChengBaZhu",
    name: "县城霸主·真实二阶",
    point: 2e6,
    type: "real2",
    newDesc: "通关评分>=80且在县城击败刀疤男两次(第二次出现时机为42天以后在县城探索时,且需已击败一次)",
    newBoon: "较多排行榜积分,角色特质[县城钉子户]提升Lv1",
    newCanFinish: function () {
        let tyasha = yuriana("scr_data");
        let shellby = yuriana("scr_data2");
        let shanard = yuriana("scr_public");
        var altonia;
        let gidgette = tyasha.totalPoint;
        altonia = 6;
        if (!shanard.hasAchieve(this.code)) {
            if (gidgette >= 80 && shanard.hasKill(10300) && shanard.isReal2World()) {
                shanard.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj-normal-tz-xianChengYongDongJi",
    name: "县城永动机",
    point: 1e4,
    type: "normal",
    desc: "【县城永动机】通关评分>=70且在县城探索时,单日最高探索次数超过10000次(限一次)\n[奖励:少量排行榜积分,解锁角色特质[县城钉子户]]",
    finalDesc: "【县城永动机】[奖励:少量排行榜积分,解锁角色特质[县城钉子户]]",
    hasGet: function (shannara, mahbeer, leeann) {
        if (mahbeer.userId == 9969) {
            leeann.setAchieve(this.code, 1);
        }
        let ethanial = leeann.getAchieveData(this.code);
        if ("undefined" == typeof ethanial) {
            return false;
        }
        if (ethanial.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (unita, leshan, eliaz, chrishanda) {
        if (!eliaz.hasAchieve(this.code)) {
            if (chrishanda >= 70 && eliaz.isReachXianChengYdj()) {
                eliaz.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_normal_ring_hide_story_4win",
    name: "擂主(普通)",
    point: 1e5,
    type: "normal",
    desc: "【擂主(普通)】触发隐藏剧情[以武会友]并获得最高奖金\n[奖励:少量排行榜积分 解锁套餐[烟瘾抵抗者]]",
    finalDesc: "【擂主(普通)】[奖励:少量排行榜积分 解锁套餐[烟瘾抵抗者]]",
    hasGet: function (desire, aladin, britynn) {
        var narita;
        let sondrea = britynn.getAchieveData(this.code);
        narita = 8;
        if ("undefined" == typeof sondrea) {
            return false;
        }
        if (sondrea.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (jacinto, jaquilla, alben, sierramarie) {
        if (!alben.hasAchieve(this.code)) {
            var gavriil = 10;
            let latiah = "story_ring_hide_normal";
            gavriil = "ongchi";
            if (alben.hasStartStory(latiah) && alben.hasWinStoryEnemy("wuShuDiZi1", latiah)) {
                alben.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_normal_ring_hide_story_3win",
    name: "守擂者(普通)",
    point: 6e4,
    type: "normal",
    desc: "【守擂者(普通)】触发隐藏剧情[以武会友]并取得3连胜\n[奖励:少量排行榜积分]",
    finalDesc: "【守擂者(普通)】[奖励:少量排行榜积分]",
    hasGet: function (thamia, barsha, chritian) {
        var aeri = 5;
        let breniah = chritian.getAchieveData(this.code);
        aeri = "mcojfi";
        if ("undefined" == typeof breniah) {
            return false;
        }
        if (breniah.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (johnnel, magarita, orianne, jaycion) {
        if (!orianne.hasAchieve(this.code)) {
            let lata = "story_ring_hide_normal";
            if (orianne.hasStartStory(lata) && orianne.hasWinStoryEnemy("中二少年", lata)) {
                orianne.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_normal_reputation_1",
    name: "初入拳场(普通)",
    point: 1e4,
    type: "normal",
    desc: "获得[地下拳场·身份牌],击败挖掘机且评分>=80,吸烟数<=40,饮酒数<=40(限一次)",
    regularText: "少量排行榜积分",
    hasGet: function (kerea, lezer, loammi) {
        let advait = loammi.getAchieveData(this.code);
        if ("undefined" == typeof advait) {
            return false;
        }
        if (advait.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (julea, atonio, kamarra, yesel) {
        if (!kamarra.hasAchieve(this.code)) {
            let kloi = kamarra.getQuanChangUserReputation();
            if (kamarra.reachNormalLimit() && kamarra.hasUserGmItemByCode("地下拳场·身份牌") && kloi.lv >= 1) {
                kamarra.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_normal_reputation_2",
    name: "初出茅庐(普通)",
    point: 1e4,
    type: "normal",
    desc: "地下拳场名气达到[初出茅庐],击败挖掘机且评分>=80,吸烟数<=40,饮酒数<=40(限一次)",
    regularText: "少量排行榜积分",
    hasGet: function (joiya, annaya, attley) {
        var jezreel = 9;
        let gabrail = attley.getAchieveData(this.code);
        jezreel = 5;
        if ("undefined" == typeof gabrail) {
            return false;
        }
        if (gabrail.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (helan, nakea, sharesa, rosalie) {
        if (!sharesa.hasAchieve(this.code)) {
            let lacandice = sharesa.getQuanChangUserReputation();
            if (sharesa.reachNormalLimit() && sharesa.hasUserGmItemByCode("地下拳场·身份牌") && lacandice.lv >= 2) {
                sharesa.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_normal_reputation_3",
    name: "略有耳闻(普通)",
    point: 1e4,
    type: "normal",
    desc: "地下拳场名气达到[略有耳闻],击败挖掘机且评分>=80,吸烟数<=40,饮酒数<=40(限一次)",
    regularText: "少量排行榜积分",
    hasGet: function (oatis, jailenne, jahime) {
        var chatrice = 9;
        let waconda = jahime.getAchieveData(this.code);
        chatrice = 6;
        if ("undefined" == typeof waconda) {
            return false;
        }
        if (waconda.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (arlos, zauria, rustyn, joylene) {
        if (!rustyn.hasAchieve(this.code)) {
            var rayjean;
            let lani = rustyn.getQuanChangUserReputation();
            rayjean = "lbhgmp";
            if (rustyn.reachNormalLimit() && rustyn.hasUserGmItemByCode("地下拳场·身份牌") && lani.lv >= 3) {
                rustyn.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_normal_reputation_4",
    name: "小有名气(普通)",
    point: 1e4,
    type: "normal",
    desc: "地下拳场名气达到[小有名气],击败挖掘机且评分>=80,吸烟数<=40,饮酒数<=40(限一次)",
    regularText: "少量排行榜积分",
    hasGet: function (chyrl, zanaa, ahlona) {
        var brionne = 10;
        let jacynthia = ahlona.getAchieveData(this.code);
        brionne = 2;
        if ("undefined" == typeof jacynthia) {
            return false;
        }
        if (jacynthia.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (shardul, tajma, mironda, quanice) {
        if (!mironda.hasAchieve(this.code)) {
            var seriena = 15;
            let amarachukwu = mironda.getQuanChangUserReputation();
            seriena = "pndhdk";
            if (mironda.reachNormalLimit() && mironda.hasUserGmItemByCode("地下拳场·身份牌") && amarachukwu.lv >= 4) {
                mironda.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_normal_reputation_5",
    name: "声名鹊起(普通)",
    point: 1e4,
    type: "normal",
    desc: "地下拳场名气达到[声名鹊起],击败挖掘机且评分>=80,吸烟数<=40,饮酒数<=40(限一次)",
    regularText: "少量排行榜积分",
    hasGet: function (nichlous, margreat, chy) {
        let sandrea = chy.getAchieveData(this.code);
        if ("undefined" == typeof sandrea) {
            return false;
        }
        if (sandrea.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (makaiya, sadonna, ramona, jameica) {
        if (!ramona.hasAchieve(this.code)) {
            let tyishia = ramona.getQuanChangUserReputation();
            if (ramona.reachNormalLimit() && ramona.hasUserGmItemByCode("地下拳场·身份牌") && tyishia.lv >= 5) {
                ramona.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_normal_reputation_6",
    name: "名噪一时(普通)",
    point: 1e4,
    type: "normal",
    desc: "地下拳场名气达到[名噪一时],击败挖掘机且评分>=80,吸烟数<=40,饮酒数<=40(限一次)",
    regularText: "少量排行榜积分 藏品[小混混的木棍]*1",
    hasGet: function (takwon, zelpha, manus) {
        if (manus.isTestUser()) {
            manus.setAchieve(this.code, 0);
        }
        var chanyia;
        let magdalia = manus.getAchieveData(this.code);
        chanyia = 11;
        if ("undefined" == typeof magdalia) {
            return false;
        }
        if (magdalia.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (carren, lazarus, khallil, gettys) {
        if (!khallil.hasAchieve(this.code)) {
            var theodosia = 5;
            let alitzel = khallil.getQuanChangUserReputation();
            theodosia = 3;
            if (khallil.reachNormalLimit() && khallil.hasUserGmItemByCode("地下拳场·身份牌") && alitzel.lv >= 6) {
                khallil.addCollection2("collection_mg", 1);
                khallil.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_ktz_normal_reputation_6",
    name: "开拓者-名噪一时(普通)",
    point: 1e5,
    type: "normal",
    type2: "only",
    desc: "【开拓者-名噪一时(普通)】唯一成就,第一个达成【名噪一时(普通)】[奖励:中量排行榜积分 藏品[巨人之心]*1]  达成者:蒋琰",
    hasGet: function (carlena, maxcine, tetsuro) {
        if (maxcine.userId == 1134 || maxcine.userId == 2) {
            tetsuro.setAchieve(this.code, 1);
            return true;
        }
        return tetsuro.hasAchieve(this.code);
    },
    color: [238, 162, 164]
}, {
    code: "cj_zy_ring_hide_story_3win",
    name: "守擂者(转运)",
    point: 3e5,
    type: "zy",
    desc: "【守擂者(转运)】触发隐藏剧情[以武会友-转运]并取得3连胜(吸烟数<=60,饮酒数<=300)\n[奖励:少量排行榜积分 转运概率提高5%]",
    finalDesc: "【守擂者(转运)】[奖励:少量排行榜积分 转运概率提高5%]",
    hasGet: function (jaseena, aristede, banyon) {
        let seoyoon = banyon.getAchieveData(this.code);
        if ("undefined" == typeof seoyoon) {
            return false;
        }
        if (seoyoon.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (jamyriah, floyde, kyron, viyana) {
        if (!kyron.hasAchieve(this.code)) {
            let dorrie = "story_ring_hide_zy";
            if (kyron.hasStartStory(dorrie) && kyron.hasWinStoryEnemy("Liulangdaoke", dorrie)) {
                kyron.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_zy_ring_hide_story_4win",
    name: "擂主(转运)",
    point: 6e5,
    type: "zy",
    desc: "【擂主(转运)】触发隐藏剧情[以武会友-转运]并获得最高奖金(吸烟数<=60,饮酒数<=300)\n[奖励:中量排行榜积分 转运概率提高7%]",
    finalDesc: "【擂主(转运)】[奖励:少量排行榜积分 转运概率提高7%]",
    hasGet: function (itsuko, bezaleel, koi) {
        let anaston = koi.getAchieveData(this.code);
        if ("undefined" == typeof anaston) {
            return false;
        }
        if (anaston.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (kiyara, syedali, trany, sewit) {
        if (!trany.hasAchieve(this.code)) {
            let monya = "story_ring_hide_zy";
            if (trany.hasStartStory(monya) && trany.hasWinStoryEnemy("WushuErDizi", monya)) {
                trany.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_zy_reputation_1",
    name: "初入拳场(转运)",
    point: 1e4,
    type: "zy",
    desc: "获得[地下拳场·身份牌],击败挖掘机且评分>=80,吸烟数<=40,饮酒数<=40(限一次)",
    regularText: "少量排行榜积分",
    hasGet: function (wells, jeveon, cobra) {
        var zef = 9;
        let maliaka = cobra.getAchieveData(this.code);
        zef = 0;
        if ("undefined" == typeof maliaka) {
            return false;
        }
        if (maliaka.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (ranford, nam, domitila, daquavion) {
        if (!domitila.hasAchieve(this.code)) {
            var athenna = 5;
            let leart = domitila.getQuanChangUserReputation();
            athenna = 7;
            if (domitila.reachZyLimit() && domitila.hasUserGmItemByCode("地下拳场·身份牌") && leart.lv >= 1) {
                domitila.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_zy_reputation_2",
    name: "初出茅庐(转运)",
    point: 1e4,
    type: "zy",
    desc: "地下拳场名气达到[初出茅庐],击败挖掘机且评分>=80,吸烟数<=40,饮酒数<=40(限一次)",
    regularText: "少量排行榜积分",
    hasGet: function (onita, wessley, omotola) {
        var sophiaanne = 2;
        let lyra = omotola.getAchieveData(this.code);
        sophiaanne = 12;
        if ("undefined" == typeof lyra) {
            return false;
        }
        if (lyra.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (donnie, mallard, tyran, demont) {
        if (!tyran.hasAchieve(this.code)) {
            var teneasha = 9;
            let fazon = tyran.getQuanChangUserReputation();
            teneasha = 2;
            if (tyran.reachZyLimit() && tyran.hasUserGmItemByCode("地下拳场·身份牌") && fazon.lv >= 2) {
                tyran.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_zy_reputation_3",
    name: "略有耳闻(转运)",
    point: 1e4,
    type: "zy",
    desc: "地下拳场名气达到[略有耳闻],击败挖掘机且评分>=80,吸烟数<=40,饮酒数<=40(限一次)",
    regularText: "少量排行榜积分",
    hasGet: function (earin, royality, christal) {
        let izabella = christal.getAchieveData(this.code);
        if ("undefined" == typeof izabella) {
            return false;
        }
        if (izabella.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (ladante, coyote, luan, kenye) {
        if (!luan.hasAchieve(this.code)) {
            var fawkes = 1;
            let joshalyn = luan.getQuanChangUserReputation();
            fawkes = 3;
            if (luan.reachZyLimit() && luan.hasUserGmItemByCode("地下拳场·身份牌") && joshalyn.lv >= 3) {
                luan.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_zy_reputation_4",
    name: "小有名气(转运)",
    point: 1e4,
    type: "zy",
    desc: "地下拳场名气达到[小有名气],击败挖掘机且评分>=80,吸烟数<=40,饮酒数<=40(限一次)",
    regularText: "少量排行榜积分 转运概率额外+1%",
    hasGet: function (teneke, marlane, avacyn) {
        let virla = avacyn.getAchieveData(this.code);
        if ("undefined" == typeof virla) {
            return false;
        }
        if (virla.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (amorea, marleen, jazaria, jakeim) {
        if (!jazaria.hasAchieve(this.code)) {
            let maisyn = jazaria.getQuanChangUserReputation();
            if (jazaria.reachZyLimit() && jazaria.hasUserGmItemByCode("地下拳场·身份牌") && maisyn.lv >= 4) {
                jazaria.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_zy_reputation_5",
    name: "声名鹊起(转运)",
    point: 1e4,
    type: "zy",
    desc: "地下拳场名气达到[声名鹊起],击败挖掘机且评分>=80,吸烟数<=40,饮酒数<=40(限一次)",
    regularText: "少量排行榜积分 转运概率额外+1%",
    hasGet: function (venisha, akhai, hend) {
        var ethelreda;
        let ade = hend.getAchieveData(this.code);
        ethelreda = 6;
        if ("undefined" == typeof ade) {
            return false;
        }
        if (ade.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (estrellita, brytin, hillie, lilyani) {
        if (!hillie.hasAchieve(this.code)) {
            var johara = 7;
            let lemaj = hillie.getQuanChangUserReputation();
            johara = "ceebdi";
            if (hillie.reachZyLimit() && hillie.hasUserGmItemByCode("地下拳场·身份牌") && lemaj.lv >= 5) {
                hillie.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_zy_reputation_6",
    name: "名噪一时(转运)",
    point: 2e4,
    type: "zy",
    desc: "地下拳场名气达到[名噪一时],击败挖掘机且评分>=80,吸烟数<=40,饮酒数<=40(限一次)",
    regularText: "少量排行榜积分 转运概率额外+1% 藏品[走私团伙枪支]*1 技能[受欢迎的黑拳手]加成额外增加2%",
    hasGet: function (alhana, lettia, patton) {
        if (patton.isUser([6554])) {
            patton.setAchieve(this.code, 1);
            return true;
        }
        let indra = patton.getAchieveData(this.code);
        if ("undefined" == typeof indra) {
            return false;
        }
        if (indra.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (anifer, jhoel, matthrew, lindella) {
        if (!matthrew.hasAchieve(this.code)) {
            var amaka = 9;
            let meyra = matthrew.getQuanChangUserReputation();
            amaka = 7;
            if (matthrew.reachZyLimit() && matthrew.hasUserGmItemByCode("地下拳场·身份牌") && meyra.lv >= 6) {
                matthrew.addCollection2("collection_qz", 1);
                matthrew.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_ktz_zy_reputation_6",
    name: "开拓者-名噪一时(转运)",
    point: 5e5,
    type: "zy",
    type2: "only",
    desc: "【开拓者-名噪一时(转运)】唯一成就,第一个达成【名噪一时(转运)】[奖励:中量排行榜积分 藏品[巨人之心]*1] 达成者:悠悠",
    hasGet: function (deante, azayzel, tonisha) {
        if (tonisha.isUser([2, 4183])) {
            tonisha.setAchieve(this.code, 1);
        }
        return tonisha.hasAchieve(this.code);
    },
    color: [238, 162, 164]
}, {
    code: "cj_real_biyao_hide_story",
    name: "何惧",
    point: 3e6,
    type: "real",
    desc: "【何惧】触发真实一阶-碧瑶线隐藏剧情,达成隐藏结局(限一次)\n[奖励:较多排行榜积分 真实二阶及以下世界解锁碧瑶进阶特性[合击][舍身]]",
    finalDesc: "【何惧】[奖励:较多排行榜积分 真实二阶及以下世界解锁碧瑶进阶特性[合击][舍身]]",
    hasGet: function (kanai, rim, dashanae) {
        let mianicole = dashanae.getAchieveData(this.code);
        if ("undefined" == typeof mianicole) {
            return false;
        }
        if (mianicole.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (kindra, ananth, akita, latissa) {
        if (!akita.hasAchieve(this.code)) {
            let izzabel = "story_biYao_hide_real";
            if (akita.hasGetStory(izzabel)) {
                var tyrei = 6;
                let jasimen = akita.buildAchieveData(this.code, 1, akita.getTime());
                tyrei = 2;
                akita.putAchieveData(this.code, jasimen);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_biyao_hide_story_second_stage",
    name: "咫尺",
    point: 18e5,
    type: "real",
    desc: "【咫尺】触发真实一阶-碧瑶线隐藏剧情,并和最终boss交手(限一次)\n[奖励:较多排行榜积分 真实二阶及以下世界解锁碧瑶进阶特性[合击]]",
    finalDesc: "【咫尺】[奖励:较多排行榜积分 真实二阶及以下世界解锁碧瑶进阶特性[合击]]",
    hasGet: function (derwood, shaiana, shamiek) {
        var syann;
        let charidy = shamiek.getAchieveData(this.code);
        syann = 5;
        if ("undefined" == typeof charidy) {
            return false;
        }
        if (charidy.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (adia, kearstin, caelen, ritchy) {
        let nakeea = caelen.getAchieveData("cj_shiLian");
        if (!caelen.hasAchieve(this.code)) {
            let kalona = "story_biYao_hide_real";
            if (caelen.hasStartStory(kalona) && caelen.hasWinStoryEnemy("催债公司老板的贴身保镖", kalona)) {
                caelen.addAchieveNum(this.code);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_biyao_hide_story_second_stage_part",
    name: "无畏前行",
    point: 9e5,
    type: "real",
    desc: "【无畏前行0/?】[多段成就]触发真实一阶-碧瑶线隐藏剧情,并击败二阶段的敌人(按进度计分)[奖励:较多排行榜积分,激活并提升技能[伙伴亲和]等级]",
    totalNum: 2,
    finalDesc: "【无畏前行0/?】[奖励:较多排行榜积分,激活技能[伙伴亲和]]",
    updateAchieve: function (aroosh) {
        var jazira = 14;
        let sefora = yuriana("scr_data");
        jazira = 13;
        var adones = 5;
        let kelven = yuriana("scr_data2");
        adones = 9;
        var vedya = 6;
        let manette = yuriana("scr_public");
        vedya = 5;
        manette.initUserData(sefora);
        var kaliq;
        let yamely = manette.getAchieveData(this.code);
        kaliq = "jlbcff";
        yamely.partNum = manette.getNum(yamely.partNum);
        aroosh = "?";
        if (yamely.partNum == this.totalNum) {
            aroosh = "" + this.totalNum;
        }
        this.name = "无畏前行(" + yamely.partNum + "/" + aroosh + ")";
        this.desc = "【无畏前行" + yamely.partNum + "/" + aroosh + "】触发真实一阶-碧瑶线隐藏剧情,并击败二阶段的敌人(按进度计分)[奖励:较多排行榜积分]";
        this.finalDesc = "【无畏前行" + yamely.partNum + "/" + aroosh + "】[奖励:较多排行榜积分]";
        this.point = 6e5 + 3e5 * yamely.partNum;
    },
    hasGet: function (carnesha, janece, yiheng) {
        if (yiheng.getAchievePartNum(this.code) > 0) {
            return true;
        }
        return false;
    },
    finish: function (valiant, gobind, deola, marielena, jelene) {
        var martin = 11;
        let kimona = deola.getAchieveData("cj_real_biyao_hide_story_second_stage_part");
        martin = "geifje";
        jelene = "story_biYao_hide_real";
        var kariya;
        let latroyia = deola.getAchievePartNum(this.code);
        kariya = 10;
        if (deola.hasStartStory(jelene)) {
            if (deola.hasWinStoryEnemy("催债公司的下属流氓", jelene) && deola.getAchievePartNum(this.code) < 1) {
                deola.setAchieve(this.code, 1);
                deola.addAchievePartNum(this.code);
                deola.debug3("+1:" + deola.getAchievePartNum(this.code));
            }
            if (deola.hasWinStoryEnemy("催债公司的直属打手", jelene) && deola.getAchievePartNum(this.code) < 2) {
                deola.setAchieve(this.code, 1);
                deola.addAchievePartNum(this.code);
                deola.debug4("+2:" + deola.getAchievePartNum(this.code));
            }
        }
        let dantae = deola.getAchievePartNum(this.code);
        if (dantae > latroyia) {
            this.updateAchieve();
            return true;
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_biyao_hide_story_first_stage",
    name: "无畏",
    point: 7e5,
    type: "real",
    desc: "【无畏】触发真实一阶-碧瑶线隐藏剧情,且通过第一阶段(限一次)\n[奖励:中量排行榜积分 解锁隐藏天赋【超量恢复】]",
    remark: "",
    finalDesc: "【无畏】[奖励:中量排行榜积分 解锁隐藏天赋【超量恢复】",
    hasGet: function (aszia, kanichi, haylyn) {
        let rayiona = haylyn.getAchieveData(this.code);
        if ("undefined" == typeof rayiona) {
            return false;
        }
        if (rayiona.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (rhory, sahmir, anitra, nani) {
        let petehn = anitra.getAchieveData("cj_shiLian");
        if (!anitra.hasAchieve(this.code)) {
            let jalyne = "story_biYao_hide_real";
            if (anitra.hasStartStory(jalyne) && anitra.hasWinStoryEnemy("皮衣男(阿强)", jalyne)) {
                anitra.addAchieveNum(this.code);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_biyao_hide_story_start",
    name: "勇敢的心",
    point: 2e5,
    type: "real",
    desc: "【勇敢的心】触发真实一阶-碧瑶线隐藏剧情(限一次)[奖励:少量排行榜积分]",
    remark: "抉择起于尝试,成功只是结果",
    finalDesc: "【勇敢的心】[奖励:少量排行榜积分]",
    hasGet: function (prajna, emmanuelle, paulean) {
        var sergi = 14;
        let shaelynne = paulean.getAchieveData(this.code);
        sergi = "iljfqi";
        if ("undefined" == typeof shaelynne) {
            return false;
        }
        if (shaelynne.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (shamea, gursimran, eduvina, moniyah) {
        let psymon = eduvina.getAchieveData("cj_shiLian");
        if (!eduvina.hasAchieve(this.code)) {
            var slate;
            let messiah = "story_biYao_hide_real";
            slate = 2;
            if (eduvina.hasStartStory(messiah)) {
                eduvina.addAchieveNum(this.code);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_ktz_bubai",
    name: "开拓者-不败",
    point: 5e5,
    type: "only",
    desc: "【开拓者-不败】唯一成就,第一个达成【不败】[奖励:较多排行榜积分 以武会友系列剧情免除报名费] 达成者:蒋琰",
    hasGet: function (ahmed, kourage, jadn) {
        if (kourage.userId == 1134 || kourage.userId == 2) {
            jadn.setAchieve(this.code, 1);
            return true;
        }
        return false;
    },
    color: [238, 162, 164]
}, {
    code: "cj_real_cat10",
    name: "捉猫能手(真实一阶)",
    point: 5e5,
    type: "real",
    desc: "达成【求生者】的同时,完成至少10次[寻找走失的猫]任务",
    regularText: "较多排行榜积分 猫出现率提升5%",
    hasGet: function (kearius, alyrah, kadience) {
        if (kadience.hasAchieve(this.code)) {
            return true;
        }
        return false;
    },
    finish: function (kallieann, namie, cheree, courtland) {
        if (cheree.reachQsz() && !cheree.hasAchieve(this.code)) {
            if (cheree.atLeastFinishTask("寻找走失的猫", 10)) {
                cheree.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_dog10",
    name: "寻犬能手(真实一阶)",
    point: 5e5,
    type: "real",
    desc: "达成【求生者】的同时,完成至少10次[寻找走失的大狼狗]任务",
    regularText: "较多排行榜积分 大狼狗出现率提升5%",
    hasGet: function (xzavior, kyann, cabella) {
        if (cabella.hasAchieve(this.code)) {
            return true;
        }
        return false;
    },
    finish: function (cortez, yuleidy, lawna, lenika) {
        if (lawna.reachQsz() && !lawna.hasAchieve(this.code)) {
            if (lawna.atLeastFinishTask("寻找走失的大狼狗", 10)) {
                lawna.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_ktz_bubai_real_3b",
    name: "开拓者-不败(3倍挑战)",
    point: 1e4,
    type: "only",
    desc: "【开拓者-不败(3倍挑战)】第一个在3倍挑战下达成【不败】[奖励:少量排行榜积分 开局基础攻击力额外+3] 达成者:蒋琰",
    hasGet: function (tegon, alesso, richele) {
        if (alesso.userId == 1134 || alesso.userId == 2) {
            richele.setAchieve(this.code, 1);
            return true;
        }
        return false;
    },
    color: [238, 162, 164]
}, {
    code: "cj_real_ring_hide_story_third_stage",
    name: "不败",
    point: 3e6,
    type: "real",
    desc: "【不败】触发真实一阶-以武会友隐藏剧情,且击败所有敌人(限一次)\n[奖励:较多排行榜积分 [善者多助]额外提升Lv2]",
    remark: "",
    finalDesc: "【不败】[奖励:较多排行榜积分 [善者多助]额外提升Lv2]",
    challengeList: [{
        code: "3倍挑战",
        boonText: "大量排行榜积分 旧书店技能书数量+1,特质【臂力过人】提升lv1",
        point: 12e6
    }, {
        code: "民以食为天",
        boonText: "较多排行榜积分 开局基础攻击额外+8",
        point: 14e6
    }],
    canFinish: function (candela, alexxes, chazlyn, christopherryan, kijah) {
        kijah = "story_ring_hide_real";
        if (chazlyn.hasStartStory(kijah) && chazlyn.hasWinStoryEnemy("武术队大师兄", kijah)) {
            return true;
        }
        return false;
    },
    hasGet: function (tatsuko, tonna, tamona) {
        let amri = tamona.getAchieveData(this.code);
        if ("undefined" == typeof amri) {
            return false;
        }
        if (amri.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (selda, breion, haskell, teani) {
        if (!haskell.hasAchieve(this.code)) {
            var zory = 14;
            let ramonia = "story_ring_hide_real";
            zory = 9;
            if (haskell.hasStartStory(ramonia) && haskell.hasWinStoryEnemy("武术队大师兄", ramonia)) {
                haskell.addAchieveNum(this.code);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_fightSkill2",
    name: "战斗基础",
    point: 1e6,
    type: "real",
    desc: "[民以食为天]挑战下,达成【求生者】的同时,任意一门战斗技能掌握程度达到基础",
    regularText: "较多排行榜积分",
    hasGet: function (brixley, valmore, anime) {
        if (anime.hasAchieve(this.code)) {
            return true;
        }
        return false;
    },
    finish: function (krisstina, neizan, deshonna, karyle) {
        if (deshonna.reachQsz() && !deshonna.hasAchieve(this.code)) {
            if (deshonna.fightSkillLvMax() >= 2) {
                deshonna.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_fightSkill3",
    name: "初窥门径",
    point: 2e6,
    type: "real",
    desc: "[民以食为天]挑战下,达成【求生者】的同时,任意一门战斗技能掌握程度达到初级",
    regularText: "较多排行榜积分",
    hasGet: function (kiril, armana, chanele) {
        if (chanele.hasAchieve(this.code)) {
            return true;
        }
        return false;
    },
    finish: function (pittman, kanella, jaliayah, cap) {
        if (jaliayah.reachQsz() && !jaliayah.hasAchieve(this.code)) {
            if (jaliayah.fightSkillLvMax() >= 3) {
                jaliayah.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_ktz_xiaosheng_3b",
    name: "开拓者-小胜(3倍挑战)",
    point: 1e4,
    type: "only",
    desc: "【开拓者-小胜(3倍挑战)】第一个在3倍挑战下达成【小胜】[奖励:少量排行榜积分 先驱者之证*1] 达成者:蒋琰",
    hasGet: function (carlia, kynnady, kayslie) {
        if (kynnady.userId == 1134 || kynnady.userId == 2) {
            kayslie.setAchieve(this.code, 1);
            return true;
        }
        return false;
    },
    color: [238, 162, 164]
}, {
    code: "cj_real_ring_hide_story_second_stage",
    name: "小胜",
    point: 2e6,
    type: "real",
    desc: "【小胜】触发真实一阶-以武会友隐藏剧情,拿到100元奖金(限一次)\n[奖励:较多排行榜积分 解锁隐藏剧情【以武会友-真实二阶】]",
    remark: "",
    finalDesc: "【小胜】[奖励:较多排行榜积分 解锁隐藏剧情【以武会友-真实二阶】]",
    challengeList: [{
        code: "3倍挑战",
        boonText: "较多排行榜积分 技能[伙伴亲和]等级+1",
        point: 5e6
    }, {
        code: "民以食为天",
        boonText: "大量排行榜积分 技能[伙伴亲和]等级+1",
        point: 4e6
    }],
    canFinish: function (jlon, kealyn, vonzell, maitlin, jakiaya) {
        jakiaya = "story_ring_hide_real";
        if (vonzell.hasStartStory(jakiaya) && vonzell.hasWinStoryEnemy("wuShuDiZi1", jakiaya)) {
            return true;
        }
        return false;
    },
    hasGet: function (bilon, kaytlinn, steeler) {
        let drene = steeler.getAchieveData(this.code);
        if ("undefined" == typeof drene) {
            return false;
        }
        if (drene.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (lawanika, wentz, maleina, claudio) {
        if (!maleina.hasAchieve(this.code)) {
            let swanson = "story_ring_hide_real";
            if (maleina.hasStartStory(swanson) && maleina.hasWinStoryEnemy("wuShuDiZi1", swanson)) {
                maleina.addAchieveNum(this.code);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_ring_hide_story_try",
    name: "一试身手",
    simpleName: "一试身手",
    basePoint: 3e5,
    morePoint: 6e5,
    point: 9e5,
    type: "real",
    desc: "【一试身手0/3】[多段成就]触发真实一阶-以武会友隐藏剧情,击败尽可能多的敌人(按进度计分)[奖励:较多排行榜积分 全部完成后解锁套餐[落魄鬼武传人]]",
    totalNum: 3,
    finalDesc: "【一试身手0/3】[奖励:较多排行榜积分]",
    challengeList: [{
        code: "民以食为天",
        boonText: "大量排行榜积分 每完成一阶段,初始生命值额外+20",
        maxProgress: 3,
        point: 2e6,
        adFinish: function (najib, motie) {
            let amhir = yuriana("scr_data");
            var alexondra = 8;
            let aalayah = yuriana("scr_data2");
            alexondra = 9;
            let gared = yuriana("scr_public");
            gared.initUserData(amhir);
            var donnelle = 5;
            let ashlye = gared.getAchieveAdvancePartNum("cj_real_ring_hide_story_try", this.code);
            donnelle = 10;
            najib = 0;
            motie = "story_ring_hide_real";
            if (gared.hasStartStory(motie)) {
                if (gared.hasWinStoryEnemy("棍术师", motie)) {
                    najib += 1;
                }
                if (gared.hasWinStoryEnemy("退役拳王", motie)) {
                    najib += 1;
                }
                if (gared.hasWinStoryEnemy("剑术师", motie)) {
                    najib += 1;
                }
            }
            if (najib > ashlye) {
                gared.setAchieveAdvancePartNum("cj_real_ring_hide_story_try", this.code, najib);
                if (najib >= this.maxProgress) {
                    gared.setAchieveAdvance("cj_real_ring_hide_story_try", this.code);
                }
                return true;
            }
            return false;
        }
    }],
    updateAchieve: function (virgin) {
        var javione = 1;
        let marceleen = yuriana("scr_data");
        javione = 9;
        var kateena;
        let russ = yuriana("scr_data2");
        kateena = "jhopcp";
        var coila;
        let romaro = yuriana("scr_public");
        coila = 11;
        romaro.initUserData(marceleen);
        var claritha;
        let dajonae = romaro.getAchieveData(this.code);
        claritha = 4;
        dajonae.partNum = romaro.getNum(dajonae.partNum);
        virgin = "?";
        if (dajonae.partNum == this.totalNum) {
            virgin = "" + this.totalNum;
        }
        this.name = this.simpleName + "(" + dajonae.partNum + "/" + virgin + ")";
        this.desc = "【" + this.simpleName + "" + dajonae.partNum + "/" + virgin + "】[多段成就]触发真实一阶-以武会友隐藏剧情,击败尽可能多的敌人(按进度计分)[奖励:较多排行榜积分 全部完成后解锁套餐[落魄鬼武传人]]";
        this.finalDesc = "【" + this.simpleName + "" + dajonae.partNum + "/" + virgin + "】[奖励:较多排行榜积分 全部完成后解锁套餐[落魄鬼武传人]]";
        this.point = this.basePoint + this.morePoint * dajonae.partNum;
    },
    hasGet: function (rilwan, brayln, kany) {
        if (kany.getAchievePartNum(this.code) > 0) {
            return true;
        }
        return false;
    },
    finish: function (ruxton, harm, kayllie, heather, laidy) {
        laidy = "story_ring_hide_real";
        let rawdah = kayllie.getAchievePartNum(this.code);
        if (kayllie.hasStartStory(laidy)) {
            if (kayllie.hasWinStoryEnemy("棍术师", laidy) && kayllie.getAchievePartNum(this.code) < 1) {
                kayllie.setAchieve(this.code, 1);
                kayllie.addAchievePartNum(this.code);
                kayllie.debug3("+1:" + kayllie.getAchievePartNum(this.code));
            }
            if (kayllie.hasWinStoryEnemy("退役拳王", laidy) && kayllie.getAchievePartNum(this.code) < 2) {
                kayllie.setAchieve(this.code, 1);
                kayllie.addAchievePartNum(this.code);
                kayllie.debug4("+2:" + kayllie.getAchievePartNum(this.code));
            }
            if (kayllie.hasWinStoryEnemy("剑术师", laidy) && kayllie.getAchievePartNum(this.code) < 3) {
                kayllie.setAchieve(this.code, 1);
                kayllie.addAchievePartNum(this.code);
                kayllie.debug4("+3:" + kayllie.getAchievePartNum(this.code));
            }
        }
        let janaya = kayllie.getAchievePartNum(this.code);
        if (janaya > rawdah) {
            this.updateAchieve();
            return true;
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_ktz_real_story_jh_real_try",
    name: "开拓者-慕名而至",
    point: 1e4,
    type: "real",
    desc: "【开拓者-慕名而至】第一个或前两位(限时)达成【慕名而至】[奖励:初始江湖名气额外+3] 达成者:十月,XL夕",
    finish: function (buffy, angila, raedene, ayna) {
        return false;
    },
    hasGet: function (keori, rashand, ahyana) {
        if (ahyana.isUser([5886, 2, 3836])) {
            ahyana.setAchieve(this.code, 1);
        }
        return ahyana.hasAchieve(this.code);
    },
    color: [238, 162, 164]
}, {
    code: "cj_ktz_real2_story_jh_real2_try_swt",
    name: "开拓者-慕名而至(真实二阶)-民以食为天",
    point: 0,
    type: "real2",
    desc: "【开拓者-慕名而至(真实二阶)】第一个或前两位(限时)达成【慕名而至(真实二阶)-民以食为天3阶段】[奖励:未知]",
    finish: function (auryn, peyson, makynna, ogreta) {
        return false;
    },
    hasGet: function (amira, merriman, saniye) {
        return saniye.hasAchieve(this.code);
    },
    color: [238, 162, 164]
}, {
    code: "cj_ktz_real2_story_jh_real2_try",
    name: "开拓者-慕名而至(真实二阶)",
    point: 0,
    type: "real2",
    desc: "【开拓者-慕名而至(真实二阶)】第一个或前两位(限时)达成【慕名而至(真实二阶)3阶段】[奖励:未知]",
    finish: function (wyndell, konni, adonya, lunamae) {
        return false;
    },
    hasGet: function (reny, domingos, gitzel) {
        return gitzel.hasAchieve(this.code);
    },
    color: [238, 162, 164]
}, {
    code: "cj_real2_story_jh_real2_try",
    name: "慕名而至(真实二阶)",
    simpleName: "慕名而至(真实二阶)",
    basePoint: 1e6,
    morePoint: 2e6,
    point: 2e6,
    type: "real2",
    desc: "【慕名而至(真实二阶)0/3】[多段成就]触发真实二阶-慕名而至隐藏剧情,击败尽可能多的敌人(按进度计分)[奖励:较多排行榜积分 进度1:[伙伴亲和]提升Lv1,开局额外增加50点最大生命值,进阶锻炼上限额外提升1000% 进度2:[传说体质]提升Lv1,进阶锻炼上限额外提升2000% 进度3:角色特质[硬汉]提升Lv1,进阶锻炼上限额外提升3000%]",
    totalNum: 3,
    finalDesc: "【慕名而至0/3】[奖励:较多排行榜积分]",
    challengeList: [{
        code: "民以食为天",
        boonText: "大量排行榜积分 进度1:开局获得[饺子]*1 进度2:特质[烟瘾抵抗者]提升Lv1 进度3:[超时空-掠天]次数额外+1 ",
        maxProgress: 3,
        point: 8e6,
        adFinish: function (airys, amond) {
            var rodrika;
            let elleia = yuriana("scr_data");
            rodrika = "phdjhq";
            let shantrel = yuriana("scr_data2");
            var genisis;
            let jhanvi = yuriana("scr_public");
            genisis = "gcokol";
            jhanvi.initUserData(elleia);
            airys = "cj_real2_story_jh_real2_try";
            var tyrekus;
            let wess = jhanvi.getAchieveAdvancePartNum(airys, this.code);
            tyrekus = 3;
            amond = 0;
            if (jhanvi.hasKill(1680)) {
                amond += 1;
            }
            if (jhanvi.hasKill(1681)) {
                amond += 1;
            }
            if (jhanvi.hasKill(1682)) {
                amond += 1;
            }
            if (amond > wess) {
                jhanvi.setAchieveAdvancePartNum(airys, this.code, amond);
                if (amond >= this.maxProgress) {
                    jhanvi.setAchieveAdvance(airys, this.code);
                }
                return true;
            }
            return false;
        }
    }],
    updateAchieve: function (jahana) {
        var kiria;
        let norelia = yuriana("scr_data");
        kiria = 4;
        let lux = yuriana("scr_data2");
        var alyzae = 9;
        let waymon = yuriana("scr_public");
        alyzae = 8;
        waymon.initUserData(norelia);
        let kashanti = waymon.getAchieveData(this.code);
        kashanti.partNum = waymon.getNum(kashanti.partNum);
        let sharinda = this.totalNum;
        this.name = this.simpleName + "(" + kashanti.partNum + "/" + sharinda + ")";
        jahana = "[奖励:较多排行榜积分 进度1:[伙伴亲和]提升Lv1,开局额外增加50点最大生命值,进阶锻炼上限提升1000% 进度2:[传说体质]提升Lv1,进阶锻炼上限提升2000% 进度3:角色特质[硬汉]提升Lv1,进阶锻炼上限提升3000%]";
        this.desc = "【" + this.simpleName + "" + kashanti.partNum + "/" + sharinda + "】[多段成就]触发真实二阶-慕名而至隐藏剧情,击败尽可能多的敌人(按进度计分)" + jahana;
        this.finalDesc = "【" + this.simpleName + "" + kashanti.partNum + "/" + sharinda + "】" + jahana;
        this.point = this.basePoint + this.morePoint * kashanti.partNum;
    },
    hasGet: function (virjinia, startasia, macauly) {
        if (macauly.getAchievePartNum(this.code) > 0) {
            return true;
        }
        return false;
    },
    finish: function (malecia, shrihan, shermika, norvelle) {
        var darletha = 15;
        let christol = shermika.getAchievePartNum(this.code);
        darletha = "phmghh";
        if (shermika.hasKill(1680) && shermika.getAchievePartNum(this.code) < 1) {
            shermika.setAchieve(this.code, 1);
            shermika.addAchievePartNum(this.code);
            shermika.debug3("+1:" + shermika.getAchievePartNum(this.code));
        }
        if (shermika.hasKill(1681) && shermika.getAchievePartNum(this.code) < 2) {
            shermika.setAchieve(this.code, 1);
            shermika.addAchievePartNum(this.code);
            shermika.debug4("+2:" + shermika.getAchievePartNum(this.code));
        }
        if (shermika.hasKill(1682) && shermika.getAchievePartNum(this.code) < 3) {
            shermika.setAchieve(this.code, 1);
            shermika.addAchievePartNum(this.code);
            shermika.debug4("+3:" + shermika.getAchievePartNum(this.code));
        }
        let jennelle = shermika.getAchievePartNum(this.code);
        if (jennelle > christol) {
            this.updateAchieve();
            return true;
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_story_jh_real_try",
    name: "慕名而至",
    simpleName: "慕名而至",
    basePoint: 5e5,
    morePoint: 8e5,
    point: 1e6,
    type: "real",
    desc: "【慕名而至0/3】[多段成就]触发真实一阶-慕名而至隐藏剧情,击败尽可能多的敌人(按进度计分)[奖励:较多排行榜积分 全部完成后[伙伴亲和]提升Lv1]",
    totalNum: 3,
    finalDesc: "【慕名而至0/3】[奖励:较多排行榜积分]",
    challengeList: [{
        code: "民以食为天",
        boonText: "大量排行榜积分 进度1,2分别解锁组合招式 [地潮破空][炎龙星落],进度3解锁[幻岚影风][星焰毁天]",
        maxProgress: 3,
        point: 4e6,
        adFinish: function (kayatana, antha, chimaobi) {
            let anye = yuriana("scr_data");
            let adiya = yuriana("scr_data2");
            let wonnie = yuriana("scr_public");
            wonnie.initUserData(anye);
            kayatana = "cj_real_story_jh_real_try";
            var jarik = 9;
            let petra = wonnie.getAchieveAdvancePartNum(kayatana, this.code);
            jarik = 1;
            antha = 0;
            chimaobi = "story_jh_real";
            if (wonnie.hasStartStory(chimaobi)) {
                if (wonnie.hasKill(165)) {
                    antha += 1;
                }
                if (wonnie.hasKill(166)) {
                    antha += 1;
                }
                if (wonnie.hasKill(167)) {
                    antha += 1;
                }
            }
            if (antha > petra) {
                wonnie.setAchieveAdvancePartNum(kayatana, this.code, antha);
                if (antha >= this.maxProgress) {
                    wonnie.setAchieveAdvance(kayatana, this.code);
                }
                return true;
            }
            return false;
        }
    }],
    updateAchieve: function (raman) {
        let keevon = yuriana("scr_data");
        let elsworth = yuriana("scr_data2");
        let reeana = yuriana("scr_public");
        reeana.initUserData(keevon);
        let nateal = reeana.getAchieveData(this.code);
        nateal.partNum = reeana.getNum(nateal.partNum);
        raman = "?";
        if (nateal.partNum == this.totalNum) {
            raman = "" + this.totalNum;
        }
        this.name = this.simpleName + "(" + nateal.partNum + "/" + raman + ")";
        this.desc = "【" + this.simpleName + "" + nateal.partNum + "/" + raman + "】[多段成就]触发真实一阶-慕名而至隐藏剧情,击败尽可能多的敌人(按进度计分)[奖励:较多排行榜积分 全部完成后[伙伴亲和]提升Lv1,其他奖励未知]";
        this.finalDesc = "【" + this.simpleName + "" + nateal.partNum + "/" + raman + "】[奖励:较多排行榜积分 全部完成后[伙伴亲和]提升Lv1]";
        this.point = this.basePoint + this.morePoint * nateal.partNum;
    },
    hasGet: function (karrar, sonnia, myzell) {
        if (myzell.isUser([5886, 2])) {
            myzell.setAchieve(this.code, 1);
            myzell.setAchievePartNum(this.code, 3);
        }
        if (myzell.getAchievePartNum(this.code) > 0) {
            return true;
        }
        return false;
    },
    finish: function (mitsi, tymber, samwell, illona, yamika) {
        yamika = "story_jh_real";
        let laqresha = samwell.getAchievePartNum(this.code);
        if (samwell.hasStartStory(yamika)) {
            if (samwell.hasKill(165) && samwell.getAchievePartNum(this.code) < 1) {
                samwell.setAchieve(this.code, 1);
                samwell.addAchievePartNum(this.code);
                samwell.debug3("+1:" + samwell.getAchievePartNum(this.code));
            }
            if (samwell.hasKill(166) && samwell.getAchievePartNum(this.code) < 2) {
                samwell.setAchieve(this.code, 1);
                samwell.addAchievePartNum(this.code);
                samwell.debug4("+2:" + samwell.getAchievePartNum(this.code));
            }
            if (samwell.hasKill(167) && samwell.getAchievePartNum(this.code) < 3) {
                samwell.setAchieve(this.code, 1);
                samwell.addAchievePartNum(this.code);
                samwell.debug4("+3:" + samwell.getAchievePartNum(this.code));
            }
        }
        var kaleeyah = 4;
        let juelle = samwell.getAchievePartNum(this.code);
        kaleeyah = 4;
        if (juelle > laqresha) {
            this.updateAchieve();
            return true;
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_ktz_real_ring_hide_story_try_swt",
    name: "开拓者-一试身手(真实一阶)[民以食为天]",
    point: 5e5,
    type: "real",
    type2: "only",
    desc: "【开拓者-一试身手(真实一阶)[民以食为天]】唯一成就,第一个达成【一试身手(真实一阶)[民以食为天]】[奖励:较多排行榜积分 开局基础最大生命值额外+10] 达成者:蒋琰",
    hasGet: function (bille, alouise, yahel) {
        if (alouise.userId == 1134 || alouise.userId == 2) {
            yahel.setAchieve(this.code, 1);
            return true;
        }
        return yahel.hasAchieve(this.code);
    },
    color: [238, 162, 164]
}, {
    code: "cj_ktz_real_dashu",
    name: "开拓者-康复之路(真实一阶)",
    point: 1e5,
    type: "real",
    type2: "only",
    desc: "【开拓者-康复之路(真实一阶)】唯一成就,第一个达成【康复之路(真实一阶)】达成者:悠悠 [奖励:少量排行榜积分 初始负罪感-5]",
    hasGet: function (pawel, cassie, geryl) {
        if (cassie.userId == 5635 || cassie.userId == 2) {
            geryl.setAchieve(this.code, 1);
            return true;
        }
        return geryl.hasAchieve(this.code);
    },
    color: [238, 162, 164]
}, {
    code: "cj_real_swt_dashu_hide_story_3",
    name: "康复之路(真实一阶)",
    point: 1e7,
    type: "real",
    desc: "【康复之路(真实一阶)】民以食为天挑战下,触发拯救中年大叔隐藏剧情,中年大叔最终康复出院,且击败挖掘机留在省城,最终评分不低于85\n[奖励:大量排行榜积分 初始负罪感-20 每次开局额外获得【施半仙的明信片】*1]",
    remark: "",
    finalDesc: "【康复之路(真实一阶)】[奖励:大量排行榜积分 初始负罪感-20 每次开局额外获得【施半仙的明信片】*1]",
    hasGet: function (cleto, daejanae, kaream) {
        return kaream.hasAchieve(this.code);
    },
    finish: function (aulene, blayze, shalicia, cyndle) {
        if (!shalicia.hasAchieve(this.code)) {
            if (shalicia.isRealWorld()) {
                if (aulene.daShuLastHealthStatus == "已出院" && aulene.winWajueji == 1 && cyndle >= 85) {
                    shalicia.addAchieveNum(this.code);
                    return true;
                }
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_swt_dashu_hide_story_2",
    name: "康复之路~一步之遥(真实一阶)",
    point: 6e6,
    type: "real",
    desc: "【康复之路~一步之遥(真实一阶)】民以食为天挑战下,触发拯救中年大叔隐藏剧情,中年大叔病危时健康值>150或大叔出院\n[奖励:较多排行榜积分 食品店补品加工费-5% 技能[伙伴亲和]额外提升lv1]",
    remark: "",
    finalDesc: "【康复之路~一步之遥(真实一阶)】[奖励:较多排行榜积分 食品店补品加工费-5% 技能[伙伴亲和]额外提升lv1]",
    hasGet: function (chanyah, jayann, servando) {
        return servando.hasAchieve(this.code);
    },
    finish: function (mehan, yulianny, joycelyn, luziana) {
        if (!joycelyn.hasAchieve(this.code)) {
            if (joycelyn.isRealWorld()) {
                if (joycelyn.getNum(mehan.daShuLastHealth) > 150) {
                    joycelyn.addAchieveNum(this.code);
                    return true;
                }
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_swt_dashu_hide_story_1",
    name: "康复之路~希望(真实一阶)",
    point: 3e6,
    type: "real",
    desc: "【康复之路~希望(真实一阶)】民以食为天挑战下,触发拯救中年大叔隐藏剧情,中年大叔病危时健康值>100或大叔出院\n[奖励:较多排行榜积分 食品店食材价格-5% 旧书店技能书数量额外+1]",
    remark: "",
    finalDesc: "【康复之路~希望(真实一阶)】[奖励:较多排行榜积分 食品店食材价格-5% 旧书店技能书数量额外+1]",
    hasGet: function (macil, madylen, rosh) {
        return rosh.hasAchieve(this.code);
    },
    finish: function (julienne, jaxtin, olianna, danique) {
        if (!olianna.hasAchieve(this.code)) {
            if (olianna.isRealWorld()) {
                if (olianna.getNum(julienne.daShuLastHealth) > 100) {
                    olianna.addAchieveNum(this.code);
                    return true;
                }
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_ktz_keZaoZhiCai",
    name: "开拓者-可造之材",
    point: 3e6,
    type: "only",
    desc: "【开拓者-可造之材】唯一成就,第一个达成【可造之材】[奖励:较多排行榜积分 技能[根骨过人]加成比例额外增加1%] 达成者:蒋琰",
    hasGet: function (shakema, sofian, minyon) {
        if (sofian.userId == 1134 || sofian.userId == 2) {
            minyon.setAchieve(this.code, 1);
            return true;
        }
        let marquies = minyon.getAchieveData(this.code);
        if ("undefined" == typeof marquies) {
            return false;
        }
        if (marquies.num > 0) {
            return true;
        }
        return false;
    },
    color: [238, 162, 164]
}, {
    code: "cj_ktz_real2_dashu",
    name: "开拓者-康复之路(真实二阶)",
    point: 1e4,
    type: "real2",
    type2: "only",
    desc: "【开拓者-康复之路(真实二阶)】唯一成就,第一个达成【康复之路(真实二阶)】[奖励:少量排行榜积分 初始负罪感-8] 达成者:蒋琰",
    hasGet: function (kolina, fatmata, chenier) {
        if (fatmata.userId == 1134 || fatmata.userId == 2) {
            chenier.setAchieve(this.code, 1);
            return false;
        }
        return chenier.hasAchieve(this.code);
    },
    color: [238, 162, 164]
}, {
    code: "cj_ktz_real2_dashu_2",
    name: "开拓者-康复之路~一步之遥(真实二阶)",
    point: 1e5,
    type: "real2",
    type2: "only",
    desc: "【开拓者-康复之路~一步之遥(真实二阶)】唯一成就,前2个达成【康复之路~一步之遥】[奖励:少量排行榜积分 初始负罪感-4] 达成者:蒋琰 睡得很深",
    hasGet: function (sankara, elisabel, navil) {
        if (elisabel.userId == 1134 || elisabel.userId == 15933 || elisabel.userId == 2) {
            navil.setAchieve(this.code, 1);
            return true;
        }
        return navil.hasAchieve(this.code);
    },
    color: [238, 162, 164]
}, {
    code: "cj_real2_swt_dashu_hide_story_3",
    name: "康复之路",
    point: 2e7,
    type: "real2",
    desc: "【康复之路】民以食为天挑战下,触发拯救中年大叔隐藏剧情,中年大叔最终康复出院,且击败挖掘机留在省城,最终评分不低于85\n[奖励:大量排行榜积分 技能[根骨过人]提升lv1]",
    remark: "",
    finalDesc: "【康复之路】[奖励:大量排行榜积分 技能[根骨过人]提升lv1]",
    hasGet: function (javares, arian, yureimy) {
        return yureimy.hasAchieve(this.code);
    },
    finish: function (jahida, sayda, dhyan, yakema) {
        if (!dhyan.hasAchieve(this.code)) {
            if (dhyan.isReal2()) {
                if (jahida.daShuLastHealthStatus == "已出院" && jahida.winWajueji == 1 && yakema >= 85) {
                    dhyan.addAchieveNum(this.code);
                    return true;
                }
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real2_swt_dashu_hide_story_2",
    name: "康复之路~一步之遥",
    point: 1e7,
    type: "real2",
    desc: "【康复之路~一步之遥】民以食为天挑战下,触发拯救中年大叔隐藏剧情,中年大叔病危时健康值>150或大叔出院\n[奖励:大量排行榜积分 开局额外获得一个【道士的介绍信】]",
    remark: "",
    finalDesc: "【康复之路~一步之遥】[奖励:大量排行榜积分 开局额外获得一个【道士的介绍信】]",
    hasGet: function (julliet, adiyan, kimberlea) {
        return kimberlea.hasAchieve(this.code);
    },
    finish: function (zaharah, seandee, pardeep, marylean) {
        if (!pardeep.hasAchieve(this.code)) {
            if (pardeep.isReal2()) {
                if (pardeep.getNum(zaharah.daShuLastHealth) > 150) {
                    pardeep.addAchieveNum(this.code);
                    return true;
                }
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real2_swt_dashu_hide_story_1",
    name: "康复之路~希望",
    point: 5e6,
    type: "real2",
    desc: "【康复之路~希望】民以食为天挑战下,触发拯救中年大叔隐藏剧情,中年大叔病危时健康值>100或大叔出院\n[奖励:较多排行榜积分 告示板最大同时接取任务数额外+1]",
    remark: "",
    finalDesc: "【康复之路~希望】[奖励:较多排行榜积分 告示板最大同时接取任务数额外+1]",
    hasGet: function (rozetta, abduljabbar, daigon) {
        return daigon.hasAchieve(this.code);
    },
    finish: function (arcadian, jefte, tahjmir, mohammedali) {
        if (!tahjmir.hasAchieve(this.code)) {
            if (tahjmir.isReal2()) {
                if (tahjmir.getNum(arcadian.daShuLastHealth) > 100) {
                    tahjmir.addAchieveNum(this.code);
                    return true;
                }
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real2_reputation_5",
    name: "声名鹊起(真实二阶)",
    point: 8e6,
    type: "real2",
    desc: "【声名鹊起(真实二阶)】达成[探索者]且地下拳场的名气达到[声名鹊起](限一次)\n[奖励:较多排行榜积分 未知奖励]",
    finalDesc: "【声名鹊起(真实二阶)】[奖励:较多排行榜积分 未知奖励]",
    challengeList: [{
        code: "民以食为天",
        boonText: "大量排行榜积分 开局额外获得[大米粥]*1",
        point: 2e7
    }],
    canFinish: function (shaynah, mircle, doneld, mccaela) {
        var numa = 3;
        let kristyan = doneld.getQuanChangUserReputation();
        numa = 2;
        if (doneld.reachTsz() && kristyan.lv >= 5) {
            return true;
        }
        return false;
    },
    hasGet: function (kaiyah, andrea, lydea) {
        let phinley = lydea.getAchieveData(this.code);
        if ("undefined" == typeof phinley) {
            return false;
        }
        if (phinley.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (amidala, laylagrace, analeah, gemma) {
        if (!analeah.hasAchieve(this.code) && analeah.isReal2World()) {
            var tamija = 6;
            let apirl = analeah.getQuanChangUserReputation();
            tamija = "mcbkgb";
            if (analeah.reachTsz() && apirl.lv >= 5) {
                analeah.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real2_reputation_6",
    name: "名噪一时(真实二阶)",
    point: 8e6,
    type: "real2",
    desc: "【名噪一时(真实二阶)】达成[探索者]且地下拳场的名气达到[名噪一时](限一次)\n[奖励:较多排行榜积分 技能[受欢迎的黑拳手]提升lv1]",
    finalDesc: "【名噪一时(真实二阶)】[奖励:较多排行榜积分 技能[受欢迎的黑拳手]提升lv1]",
    challengeList: [{
        code: "民以食为天",
        boonText: "大量排行榜积分 隐藏天赋【枪魂】提升Lv1",
        point: 2e7
    }],
    canFinish: function (jennalyse, allante, aprecious, tamberly) {
        let suanne = aprecious.getQuanChangUserReputation();
        if (aprecious.reachTsz() && suanne.lv >= 6) {
            return true;
        }
        return false;
    },
    hasGet: function (maci, yaana, tineka) {
        let nanie = tineka.getAchieveData(this.code);
        if ("undefined" == typeof nanie) {
            return false;
        }
        if (nanie.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (asaya, karas, breaunna, aaidyn) {
        if (!breaunna.hasAchieve(this.code) && breaunna.isReal2World()) {
            var jonnita;
            let marris = breaunna.getQuanChangUserReputation();
            jonnita = 2;
            if (breaunna.reachTsz() && marris.lv >= 6) {
                breaunna.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real2_ring_hide_story_third_stage",
    name: "可造之材",
    point: 12e6,
    type: "real2",
    desc: "【可造之材】触发真实二阶-以武会友隐藏剧情,且击败所有敌人(限一次)\n[奖励:大量排行榜积分 技能[根骨过人]提升lv1]",
    remark: "",
    finalDesc: "【可造之材】[奖励:大量排行榜积分 技能[根骨过人]提升lv1]",
    challengeList: [{
        code: "民以食为天",
        boonText: "大量排行榜积分 隐藏天赋【枪魂】提升Lv1",
        point: 45e6
    }],
    canFinish: function (tra, noretta, lyzeth, mckay, beckhym) {
        beckhym = "story_ring_hide_real2";
        if (lyzeth.hasStartStory(beckhym) && lyzeth.hasWinStoryEnemy("武术队男队副教练", beckhym)) {
            return true;
        }
        return false;
    },
    hasGet: function (datrion, liev, randolyn) {
        let jahrell = randolyn.getAchieveData(this.code);
        if ("undefined" == typeof jahrell) {
            return false;
        }
        if (jahrell.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (ersilia, avantika, arville, haeli) {
        if (!arville.hasAchieve(this.code)) {
            let lindsey = "story_ring_hide_real2";
            if (arville.hasStartStory(lindsey) && arville.hasWinStoryEnemy("武术队男队副教练", lindsey)) {
                arville.addAchieveNum(this.code);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real2_ring_hide_story_second_stage",
    name: "小胜·二阶",
    point: 4e6,
    type: "real2",
    desc: "【小胜·二阶】触发真实二阶-以武会友隐藏剧情,拿到100元奖金(限一次)\n[奖励:套餐[烟瘾抵抗者]加强一次,较多排行榜积分]",
    remark: "",
    finalDesc: "【小胜·二阶】[奖励:套餐[烟瘾抵抗者]加强一次,较多排行榜积分 ]",
    challengeList: [{
        code: "民以食为天",
        boonText: "较多排行榜积分 技能[传说体质]提升至Lv2(如已达到Lv2则加强潜力挖掘的效果)",
        point: 24e6
    }],
    canFinish: function (ladaria, osaretin, pearlie, jarett, latoni) {
        latoni = "story_ring_hide_real2";
        if (pearlie.hasStartStory(latoni) && pearlie.hasWinStoryEnemy("武术队大师兄", latoni)) {
            return true;
        }
        return false;
    },
    hasGet: function (tippy, shequita, sharrone) {
        var charlottle;
        let lehanna = sharrone.getAchieveData(this.code);
        charlottle = 2;
        if ("undefined" == typeof lehanna) {
            return false;
        }
        if (lehanna.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (nikolette, lakeysa, claudeth, ukiah) {
        if (!claudeth.hasAchieve(this.code)) {
            var lilliann;
            let shataka = "story_ring_hide_real2";
            lilliann = "kiplci";
            if (claudeth.hasStartStory(shataka) && claudeth.hasWinStoryEnemy("武术队大师兄", shataka)) {
                claudeth.addAchieveNum(this.code);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_ktz_real2_ring_hide_story_second_stage_swt",
    name: "开拓者-小胜(真实二阶)[民以食为天]",
    point: 5e4,
    type: "real2",
    type2: "only",
    desc: "【开拓者-一试身手(真实二阶)[民以食为天]】唯一成就,第一个达成【一试身手(真实二阶)[民以食为天]】[奖励:未知]",
    hasGet: function (aeric, fabrisio, wynter) {
        return wynter.hasAchieve(this.code);
    },
    color: [238, 162, 164]
}, {
    code: "cj_ktz_real2_ring_hide_story_try_swt",
    name: "开拓者-一试身手(真实二阶)[民以食为天]",
    point: 5e4,
    type: "real2",
    type2: "only",
    desc: "【开拓者-一试身手(真实二阶)[民以食为天]】唯一成就,第一个达成【一试身手(真实二阶)[民以食为天]】[奖励:大楼一楼[晓风金融]开业率额外+2%] 达成者:亦恕",
    hasGet: function (verabelle, ladarrin, aithan) {
        if (ladarrin.userId == 35 || ladarrin.userId == 2) {
            aithan.setAchieve(this.code, 1);
            return true;
        }
        return aithan.hasAchieve(this.code);
    },
    color: [238, 162, 164]
}, {
    code: "cj_real2_ring_hide_story_try",
    name: "一试身手·二阶",
    simpleName: "一试身手·二阶",
    basePoint: 9e5,
    morePoint: 12e5,
    point: 9e5,
    type: "real2",
    desc: "【一试身手·二阶0/3】[多段成就]触发真实二阶-以武会友隐藏剧情,击败尽可能多的敌人(按进度计分)[奖励:较多排行榜积分 根据进度开启部分隐藏剧情 满进度后[传说体质]提升至Lv1]",
    totalNum: 3,
    finalDesc: "【一试身手·二阶0/3】[奖励:较多排行榜积分]",
    challengeList: [{
        code: "民以食为天",
        boonText: "大量排行榜积分,达成进度2后,角色特质位额外+1,全部达成后大楼一楼[晓风金融]开业率额外+5%",
        maxProgress: 3,
        point: 18e6,
        adFinish: function (teresea, khasai, kardae) {
            let mylah = yuriana("scr_data");
            var jiancarlo = 14;
            let rosely = yuriana("scr_data2");
            jiancarlo = "kcgdka";
            let hascal = yuriana("scr_public");
            hascal.initUserData(mylah);
            teresea = "cj_real2_ring_hide_story_try";
            var enissa;
            let christabella = hascal.getAchieveAdvancePartNum(teresea, this.code);
            enissa = 4;
            khasai = 0;
            kardae = "story_ring_hide_real2";
            if (hascal.hasStartStory(kardae)) {
                if (hascal.hasWinStoryEnemy("墨镜男旺哥(黑拳小头目)", kardae)) {
                    khasai += 1;
                }
                if (hascal.hasWinStoryEnemy("武师", kardae)) {
                    khasai += 1;
                }
                if (hascal.hasWinStoryEnemy("wuShuDiZi1", kardae)) {
                    khasai += 1;
                }
            }
            if (khasai > christabella) {
                hascal.setAchieveAdvancePartNum(teresea, this.code, khasai);
                if (khasai >= this.maxProgress) {
                    hascal.setAchieveAdvance(teresea, this.code);
                }
                return true;
            }
            return false;
        }
    }],
    updateAchieve: function (fedele) {
        var dezmen = 9;
        let lue = yuriana("scr_data");
        dezmen = "cgamgj";
        let maraki = yuriana("scr_data2");
        var jadonis;
        let chella = yuriana("scr_public");
        jadonis = "kkdqhi";
        chella.initUserData(lue);
        var montevious = 16;
        let coyer = chella.getAchieveData(this.code);
        montevious = 16;
        coyer.partNum = chella.getNum(coyer.partNum);
        fedele = "?";
        if (coyer.partNum == this.totalNum) {
            fedele = "" + this.totalNum;
        }
        this.name = this.simpleName + "(" + coyer.partNum + "/" + fedele + ")";
        this.desc = "【" + this.simpleName + "" + coyer.partNum + "/" + fedele + "】[多段成就]触发真实二阶-以武会友隐藏剧情,击败尽可能多的敌人(按进度计分)[奖励:较多排行榜积分 进度2额外增加1个角色特质位 满进度后[传说体质]提升至Lv1]";
        this.finalDesc = "【" + this.simpleName + "" + coyer.partNum + "/" + fedele + "】";
        if (coyer.partNum == 3) {
            this.finalDesc += "[奖励:较多排行榜积分 [传说体质]提升至Lv1]";
        } else {
            this.finalDesc += "[奖励:较多排行榜积分]";
        }
        this.point = this.basePoint + this.morePoint * coyer.partNum;
    },
    hasGet: function (aydia, arinzechukwu, shenika) {
        if (shenika.getAchievePartNum(this.code) > 0) {
            return true;
        }
        if (shenika.isTestUser()) {
            shenika.setAchievePartNum(this.code, 3);
        }
        return false;
    },
    finish: function (brisa, quynton, misaki, bilguun, virginia) {
        virginia = "story_ring_hide_real2";
        var essfa;
        let kennis = misaki.getAchievePartNum(this.code);
        essfa = 9;
        if (misaki.hasStartStory(virginia)) {
            if (misaki.hasWinStoryEnemy("墨镜男旺哥(黑拳小头目)", virginia) && misaki.getAchievePartNum(this.code) < 1) {
                misaki.setAchieve(this.code, 1);
                misaki.addAchievePartNum(this.code);
            }
            if (misaki.hasWinStoryEnemy("师武".split("").reverse().join(""), virginia) && misaki.getAchievePartNum(this.code) < 2) {
                misaki.setAchieve(this.code, 1);
                misaki.addAchievePartNum(this.code);
            }
            if (misaki.hasWinStoryEnemy("wuShuDiZi1", virginia) && misaki.getAchievePartNum(this.code) < 3) {
                misaki.setAchieve(this.code, 1);
                misaki.addAchievePartNum(this.code);
            }
        }
        let amandalynn = misaki.getAchievePartNum(this.code);
        if (amandalynn > kennis) {
            this.updateAchieve();
            return true;
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_shiLian",
    name: "试炼",
    point: 5e4,
    type: "real",
    desc: "【试炼】达成【求生者】的同时,在[挑战]中战胜另一个自己[奖励:中量排行榜积分](限一次)",
    finalDesc: "【试炼】[奖励:中量排行榜积分]",
    hasGet: function (torunn, trinnity, keontae) {
        var gari = 2;
        let caitland = keontae.getAchieveData(this.code);
        gari = 2;
        if ("undefined" == typeof caitland) {
            return false;
        }
        if (caitland.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (parul, bevery, graydon, amariona) {
        let nebula = graydon.getAchieveData("cj_shiLian");
        if (graydon.reachQsz()) {
            if (nebula.num != 1 && graydon.hasKill(666)) {
                let samyrah = graydon.buildAchieveData(this.code, 1, graydon.getTime());
                graydon.putAchieveData(this.code, samyrah);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_first_yz",
    name: "第一勇者",
    point: 3e4,
    type: "only",
    desc: "【第一勇者】唯一成就:第一个达成【勇者】成就.[永久奖励:击败巨人王获得宝物概率永久+15%] 达成者:亦恕",
    hasGet: function (daquandre, paisliegh, raza) {
        if (paisliegh.userId == 35 || paisliegh.userId == 2) {
            raza.setAchieve(this.code, 1);
            return true;
        }
        var arionna;
        let sabarin = raza.getAchieveData(this.code);
        arionna = 13;
        if ("undefined" == typeof sabarin) {
            return false;
        }
        if (sabarin.num > 0) {
            return true;
        }
        return false;
    },
    color: [238, 162, 164]
}, {
    code: "cj_real_bynw",
    name: "变异女王杀手(真实一阶)",
    point: 2e6,
    type: "real",
    desc: "通关评分>=80,且击败变异女王(限一次)",
    regularText: "较多排行榜积分,击杀蚊子后掉落生肉的概率额外+2%",
    hasGet: function (deronda, hadiyyah, macky) {
        if (macky.isTestUser()) {
            macky.setAchieve(this.code, 1);
        }
        if (macky.hasAchieve(this.code)) {
            return true;
        }
        return false;
    },
    finish: function (kristof, jahari, opha, chelli) {
        if (opha.isRealWorld() && kristof.totalPoint >= 80 && kristof.win707) {
            opha.setAchieve(this.code, 1);
            return true;
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_yz",
    name: "勇者",
    point: 3e4,
    type: "real",
    desc: "【勇者】达成【求生者】的同时,战胜山岭巨人王[奖励:解锁[猎人套餐],解锁特殊事件[城中村租房]](限一次)",
    finalDesc: "【勇者】[奖励:解锁套餐[猎人套餐],解锁特殊事件[城中村租房]]",
    challengeList: [{
        code: "3倍挑战",
        boonText: "较多排行榜积分 [超时空-劫财]提升至Lv1",
        point: 1e6,
        conditionText: "通关评分>=86"
    }],
    canFinish: function (kostandinos, keyaira, darrlyn, jabien) {
        if (darrlyn.reachQsz()) {
            if (darrlyn.getKingKill() >= 1 && kostandinos.totalPoint >= 86) {
                return true;
            }
        }
        return false;
    },
    hasGet: function (shamra, clevland, linaya) {
        let senta = linaya.getAchieveData(this.code);
        if ("undefined" == typeof senta) {
            return false;
        }
        if (senta.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (oktavia, lapearl, shawnda, hilberto) {
        let marlesa = shawnda.getAchieveData(this.code);
        if (oktavia.publicVar[1] != -1 && oktavia.publicVar[1] != 1 && oktavia.realDebuff == 1 && hilberto >= 60 && oktavia.winWajueji == 1) {
            if (marlesa.num != 1 && shawnda.getKingKill() >= 1) {
                let korei = shawnda.buildAchieveData(this.code, 1, shawnda.getTime());
                shawnda.putAchieveData(this.code, korei);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_yzzl",
    name: "一战之力",
    point: 3e4,
    desc: "【一战之力】达成【求生者】的同时,战胜刀疤和城中村大佬的次数 >=2 [奖励:中量排行榜积分 解锁真实世界2阶](最多3次)",
    maxNum: 3,
    showNum: 1,
    type: "real",
    finalDesc: "【一战之力】[奖励:中量排行榜积分 解锁真实世界2阶]",
    challengeList: [{
        code: "3倍挑战",
        boonText: "较多排行榜积分 [旧书店]属性书售卖数量额外+1",
        point: 1e6
    }],
    canFinish: function (chenae, lawrance, kseniya, aliyonna) {
        if (kseniya.reachQsz()) {
            if (chenae.winDaoBaNan + chenae.winDaLao >= 2) {
                return true;
            }
        }
        return false;
    },
    hasGet: function (marzette, lavernia, darrias) {
        if (lavernia.userId == 70) {
            if (!darrias.hasAchieve(this.code)) {
                darrias.setAchieve(this.code, 1);
            }
        }
        if (darrias.hasAchieve(this.code)) {
            return true;
        }
        return false;
    },
    finish: function (kashanda, senad, rodley, saeeda) {
        var prebble = 10;
        let leea = rodley.getAchieveData(this.code);
        prebble = 9;
        if (rodley.reachQsz() && rodley.getNum(leea.num) < 3) {
            if (kashanda.winDaoBaNan + kashanda.winDaLao >= 2) {
                rodley.addAchieveNum(this.code);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_1_qxz",
    name: "前行者",
    point: 5e5,
    desc: "【前行者】在[真实世界·平行]击败挖掘机且通关评分不低于70分(限一次) [奖励:中量排行榜积分 山脉道士算卦事件出现率额外+20%]",
    type: "real_1",
    finalDesc: "【前行者】[奖励:中量排行榜积分 山脉道士算卦事件出现率额外+20%]",
    hasGet: function (lutrecia, takeesha, cheylin) {
        if (cheylin.isTestMode()) {
            cheylin.setAchieve(this.code, 0);
        }
        if (cheylin.hasAchieve(this.code)) {
            return true;
        }
        return false;
    },
    finish: function (farrah, izac, fu, lozen) {
        if (fu.reachQxz() && !fu.hasAchieve(this.code)) {
            fu.setAchieve(this.code, 1);
            return true;
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_1_yzzl",
    name: "一战之力·平行",
    point: 8e5,
    desc: "【一战之力·平行】达成【前行者】的同时,战胜刀疤和城中村大佬的次数 >= 2 (限一次)[奖励:中量排行榜积分 解锁特殊事件[旧书店],旧书店商品最大数量+2,解锁5种书籍]",
    type: "real_1",
    finalDesc: "【一战之力·平行】[奖励:中量排行榜积分 解锁特殊事件[旧书店],旧书店商品最大数量+2,解锁5种书籍]",
    hasGet: function (vahin, errika, swarnim) {
        if (swarnim.hasAchieve(this.code)) {
            return true;
        }
        return false;
    },
    finish: function (rashida, iselin, nicohlas, amneet) {
        var sherdina;
        let justyce = nicohlas.getAchieveData(this.code);
        sherdina = 5;
        if (nicohlas.reachQxz() && !nicohlas.hasAchieve(this.code)) {
            if (rashida.winDaoBaNan + rashida.winDaLao >= 2) {
                nicohlas.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_1_zp1",
    name: "诈骗团伙的报复·一阶段(平行)",
    point: 2e6,
    type: "real_1",
    desc: "达成【前行者】的同时,击败诈骗团伙打手(限一次)",
    regularText: "较多排行榜积分 解锁县城特殊事件[告示板]",
    hasGet: function (zenna, hodan, clendon) {
        if (clendon.hasAchieve(this.code)) {
            return true;
        }
        return false;
    },
    finish: function (yoni, adetola, daniana, hay) {
        if (daniana.reachQxz() && !daniana.hasAchieve(this.code)) {
            if (daniana.hasKill(10050)) {
                daniana.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_1_bynw",
    name: "变异女王杀手(平行)",
    point: 4e6,
    type: "real_1",
    desc: "通关评分>=80,且击败变异女王(限一次)",
    regularText: "较多排行榜积分,特质[蚊子杀手]提升Lv1",
    hasGet: function (luchia, sachin, leighia) {
        if (leighia.hasAchieve(this.code) && sachin.win707) {
            return true;
        }
        return false;
    },
    finish: function (clea, va, sereda, tara) {
        if (sereda.isPublicMode() && sereda.isReal_1World() && clea.totalPoint >= 80 && sereda.hasKill(707)) {
            if (!sereda.hasAchieve(this.code)) {
                if (clea.win707) {
                    va.win707 = true;
                }
                sereda.setAchieve(this.code, 1);
                return true;
            } else {
                if (!va.win707) {
                    if (clea.win707) {
                        va.win707 = true;
                        sereda.setAchieve(this.code, 1);
                        return true;
                    }
                }
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_ktz_real_1_bynw",
    name: "开拓者-变异女王杀手(平行)",
    point: 5e5,
    type: "real_1",
    desc: "【开拓者-变异女王杀手(平行)】第一个或前两位(限时)达成【变异女王杀手(平行)】奖励:击杀蚊子后掉落生肉的概率额外+1% 达成者:悠悠,蒋琰",
    finish: function (nateisha, vivyan, kija, arrayah) {
        return false;
    },
    hasGet: function (tyvin, thiara, taemon) {
        if (taemon.isUser([1134, 5635, 2])) {
            taemon.setAchieve(this.code, 1);
        }
        return taemon.hasAchieve(this.code);
    },
    color: [238, 162, 164]
}, {
    code: "cj_real_1_cat10",
    name: "捉猫能手(平行)",
    point: 1e6,
    type: "real_1",
    desc: "达成【前行者】的同时,完成至少15次[寻找走失的猫]任务",
    regularText: "较多排行榜积分 猫出现率提升10%,逃跑率降低5%",
    hasGet: function (kaylanni, korrigan, omaria) {
        if (omaria.hasAchieve(this.code)) {
            return true;
        }
        return false;
    },
    finish: function (jasminerose, shakobe, jahn, belmeda) {
        if (jahn.reachQxz() && !jahn.hasAchieve(this.code)) {
            if (jahn.atLeastFinishTask("寻找走失的猫", 15)) {
                jahn.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_1_dog10",
    name: "寻犬能手(平行)",
    point: 1e6,
    type: "real_1",
    desc: "达成【前行者】的同时,完成至少15次[寻找走失的大狼狗]任务",
    regularText: "较多排行榜积分 大狼狗出现率提升10%,逃跑率降低5%",
    hasGet: function (jaco, tyshekia, daijanay) {
        if (daijanay.hasAchieve(this.code)) {
            return true;
        }
        return false;
    },
    finish: function (leemon, yeva, derec, laurien) {
        if (derec.reachQxz() && !derec.hasAchieve(this.code)) {
            if (derec.atLeastFinishTask("寻找走失的大狼狗", 15)) {
                derec.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_1_xiaotou10",
    name: "小偷哪里跑(平行)",
    point: 2e6,
    type: "real_1",
    desc: "吸烟数<=20,饮酒数<=20,通关评分>=60的同时,完成至少15次[抓小偷]任务",
    regularText: "较多排行榜积分 县城[告示板]最大任务数+1 初始负罪感-5",
    hasGet: function (laderion, mehwish, kileigh) {
        if (kileigh.hasAchieve(this.code)) {
            return true;
        }
        return false;
    },
    finish: function (stephfon, lakiya, janiris, braxen) {
        if (janiris.reachLimit(20, 60) && !janiris.hasAchieve(this.code)) {
            if (janiris.atLeastFinishTask("抓小偷", 15)) {
                janiris.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_1_zmjsz",
    name: "知名健身者",
    point: 13e6,
    desc: "【知名健身者】达成【前行者】的同时,不超过140天和至少1名知名教练在比拼中不相上下 [奖励:大量排行榜积分 进阶健身锻炼属性额外增加10%]",
    type: "real_1",
    finalDesc: "【知名健身者】[奖励:大量排行榜积分 进阶健身锻炼属性额外增加10%]",
    hasGet: function (edica, zakyra, hadasha) {
        if (hadasha.hasAchieve(this.code)) {
            return true;
        }
        return false;
    },
    finish: function (kyce, zamoria, luisdavid, ramonica) {
        var kyroe;
        let maricielo = luisdavid.getAchieveData(this.code);
        kyroe = 9;
        if (luisdavid.reachQxz() && !luisdavid.hasAchieve(this.code)) {
            if (luisdavid.getNum(kyce.coachContestResultZM0_1) >= 1) {
                zamoria.zmjsz = 1;
                luisdavid.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_1_jltz",
    name: "教练挑战(正式·略占上风)",
    point: 1e7,
    desc: "【教练挑战(正式·略占上风)】达成【前行者】的同时,不超过140天和至少2名正式教练在比拼中略占上风[奖励:较多排行榜积分 解锁技能[高屋建瓴]lv1,进阶健身锻炼属性和经验值额外增加5%先驱者之证*1][当前进度:" + CoachPKResultSystem.queryResult(tijae, "正式教练", {
        min: 1
    }) + "/2]",
    type: "real_1",
    finalDesc: "【教练挑战(正式·略占上风)】[奖励:较多排行榜积分 解锁技能[高屋建瓴]lv1,进阶健身锻炼属性和经验值额外增加5%, 先驱者之证*1]",
    hasGet: function (macklan, lorree, emmily) {
        if (emmily.isTestUser()) {
            emmily.setAchieve(this.code, 1);
        }
        if (emmily.hasAchieve(this.code)) {
            return true;
        }
        return false;
    },
    finish: function (jontelle, keyonnie, jais, docie) {
        let marisue = jais.getAchieveData(this.code);
        if (jais.reachQxz() && !jais.hasAchieve(this.code)) {
            if (CoachPKResultSystem.queryResult(jontelle, "正式教练", {
                min: 1
            }) >= 2) {
                keyonnie.jltz = 1;
                jais.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_1_jltz_winyy",
    name: "教练挑战(业余·完胜)",
    point: 7e6,
    desc: "【教练挑战(业余·完胜)】达成【前行者】的同时,不超过140天完胜至少3名业余教练[奖励:较多排行榜积分,开局获得馒头*1,进阶健身器材可用数+1][当前进度:" + CoachPKResultSystem.queryResult(tijae, "业余教练", 2) + "/3]",
    type: "real_1",
    finalDesc: "【教练挑战(业余·完胜)】[奖励:较多排行榜积分,开局获得馒头*1,进阶健身器材可用数+1]",
    hasGet: function (finnie, regla, shanecka) {
        if (shanecka.hasAchieve(this.code)) {
            return true;
        }
        return false;
    },
    finish: function (kohlson, dameka, shayd, karmindy) {
        var byrne = 2;
        let krisit = shayd.getAchieveData(this.code);
        byrne = 12;
        if (shayd.reachQxz() && !shayd.hasAchieve(this.code)) {
            if (CoachPKResultSystem.queryResult(kohlson, "业余教练", 2) >= 3) {
                shayd.setAchieve(this.code, 1);
                dameka.jltz = 1;
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_1_zige",
    name: "资格",
    point: 13e6,
    desc: "【资格】达成【前行者】的同时,通过初级健身教练考核,拿到资格证 [奖励:大量排行榜积分 解锁进阶健身区及1项进阶器材 角色特质位额外+1 每天健身中心最大健身次数额外+3]",
    type: "real_1",
    finalDesc: "【资格】[奖励:大量排行榜积分 解锁进阶健身区及1项进阶器材 角色特质位额外+1 每天健身中心最大健身次数额外+3]",
    hasGet: function (jennalynn, senneca, brantlyn) {
        if (brantlyn.hasAchieve(this.code)) {
            return true;
        }
        return false;
    },
    finish: function (aara, zuzu, eliasar, cniyah) {
        var dolora;
        let dejhon = eliasar.getAchieveData(this.code);
        dolora = 2;
        if (eliasar.reachQxz() && !eliasar.hasAchieve(this.code)) {
            if (eliasar.hasUserGmItemByCode("初级健身教练资格证")) {
                eliasar.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_ktz_real_1_zige_2",
    name: "开拓者-资格(良好)",
    point: 1e4,
    type: "real_1",
    desc: "【开拓者-资格(良好)】第一个达成【资格(良好)】奖励:旧书店额外增加1%【完好】书籍出现率 达成者:蒋琰",
    finish: function (jezlyn, zaheer, ardell, tarren) {
        return false;
    },
    hasGet: function (adarious, unia, nazira) {
        if (nazira.isUser([1134, 2])) {
            nazira.setAchieve(this.code, 1);
        }
        return nazira.hasAchieve(this.code);
    },
    color: [238, 162, 164]
}, {
    code: "cj_real_1_zige_2",
    name: "资格(良好)",
    point: 2e7,
    desc: "【资格(良好)】达成【前行者】的同时,通过初级健身教练考核,拿到资格证,且最终成绩为良好(不低于75分) [奖励:大量排行榜积分 旧书店额外增加5%【完好】书籍出现率,技能书数量额外+1,解锁隐藏天赋【枪魂】(可多段强化)]",
    type: "real_1",
    finalDesc: "【资格(良好)】[奖励:大量排行榜积分 旧书店额外增加5%【完好】书籍出现率,技能书数量额外+1,解锁隐藏天赋【枪魂】]",
    hasGet: function (sadiqua, carmelyn, nekeidra) {
        if (nekeidra.hasAchieve(this.code)) {
            return true;
        }
        return false;
    },
    finish: function (lakischa, victorio, idena, tiandria) {
        var ceylan;
        let kuyper = idena.getAchieveData(this.code);
        ceylan = "pcegan";
        if (idena.reachQxz() && !idena.hasAchieve(this.code)) {
            if (idena.hasUserGmItemByCode("初级健身教练资格证")) {
                var brittny = 5;
                let elwyn = idena.getUserGmItemByCode("初级健身教练资格证");
                brittny = "gpceje";
                if ("undefined" != typeof elwyn.finalResult) {
                    if (elwyn.finalResult.examRankModel.rank >= 2) {
                        idena.setAchieve(this.code, 1);
                        return true;
                    }
                }
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_1_zige_3",
    name: "资格(优秀)",
    point: 3e7,
    desc: "【资格(优秀)】达成【前行者】的同时,通过初级健身教练考核,拿到资格证,且最终成绩为优秀(不低于90分) [奖励:大量排行榜积分 解锁角色特质【读书人】,未知奖励]",
    type: "real_1",
    finalDesc: "【资格(优秀)】[奖励:大量排行榜积分 解锁角色特质【读书人】,未知奖励]",
    hasGet: function (dunk, terriah, justina) {
        if (justina.hasAchieve(this.code)) {
            return true;
        }
        return false;
    },
    finish: function (jimmye, xaia, nation, saalih) {
        let alyxzander = nation.getAchieveData(this.code);
        if (nation.reachQxz() && !nation.hasAchieve(this.code)) {
            if (nation.hasUserGmItemByCode("初级健身教练资格证")) {
                let khileigh = nation.getUserGmItemByCode("初级健身教练资格证");
                if ("undefined" != typeof khileigh.finalResult) {
                    if (khileigh.finalResult.examRankModel.rank >= 3) {
                        nation.setAchieve(this.code, 1);
                        return true;
                    }
                }
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_1_th1_3",
    name: "跬步(初级健身考试·理论)",
    point: 2e6,
    desc: "【跬步(初级健身考试·理论)】达成【前行者】的同时,在初级健身教练考核中,至少一门理论考试成绩达到通过或以上(限一次)[奖励:较多排行榜积分 每天健身中心最大健身次数额外+1]",
    type: "real_1",
    finalDesc: "【跬步(初级健身考试·理论)】[奖励:较多排行榜积分 每天健身中心最大健身次数额外+1]",
    hasGet: function (joshie, nicolee, jahmeer) {
        if (jahmeer.hasAchieve(this.code)) {
            return true;
        }
        return false;
    },
    finish: function (myrtes, emmitte, hajira, saquita) {
        var everleigh = 13;
        let heeba = hajira.getAchieveData(this.code);
        everleigh = 15;
        if (hajira.reachQxz() && !hajira.hasAchieve(this.code)) {
            if (myrtes.th1) {
                hajira.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_1_op1_3",
    name: "跬步(初级健身考试·实操)",
    point: 2e6,
    desc: "【跬步(初级健身考试·实操)】达成【前行者】的同时,在初级健身教练考核中,至少一门实操考试成绩达到通过或以上(限一次)[奖励:较多排行榜积分 每天健身中心最大健身次数额外+1]",
    type: "real_1",
    finalDesc: "【跬步(初级健身考试·实操)】[奖励:较多排行榜积分 每天健身中心最大健身次数额外+1]",
    hasGet: function (jiselle, dacota, araxi) {
        if (araxi.hasAchieve(this.code)) {
            return true;
        }
        return false;
    },
    finish: function (makeen, wendie, hitha, gravity) {
        var veeya;
        let hayes = hitha.getAchieveData(this.code);
        veeya = 13;
        if (hitha.reachQxz() && !hitha.hasAchieve(this.code)) {
            if (makeen.op1) {
                hitha.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_1_body1_3",
    name: "跬步(初级健身考试·体能)",
    point: 1e6,
    desc: "【跬步(初级健身考试·体能)】达成【前行者】的同时,在初级健身教练考核中,体能考试至少击败初试考官(限一次)[奖励:较多排行榜积分 每天健身中心最大健身次数额外+1]",
    type: "real_1",
    finalDesc: "【跬步(初级健身考试·体能)】[奖励:较多排行榜积分 每天健身中心最大健身次数额外+1]",
    hasGet: function (kemi, navayah, zamiyah) {
        if (zamiyah.hasAchieve(this.code)) {
            return true;
        }
        return false;
    },
    finish: function (avidan, rictoria, luisfelipe, gumercindo) {
        let samuele = luisfelipe.getAchieveData(this.code);
        if (luisfelipe.reachQxz() && !luisfelipe.hasAchieve(this.code)) {
            if (luisfelipe.hasKill(160)) {
                luisfelipe.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_1_body2_3",
    name: "入门(初级健身考试·体能)",
    point: 4e6,
    desc: "【入门(初级健身考试·体能)】达成【前行者】的同时,在初级健身教练考核中,体能考试至少击败复试考官(限一次)[奖励:较多排行榜积分 每天健身中心最大健身次数额外+2]",
    type: "real_1",
    finalDesc: "【入门(初级健身考试·体能)】[奖励:较多排行榜积分 每天健身中心最大健身次数额外+2]",
    hasGet: function (kameera, treshia, kelleye) {
        if (kelleye.hasAchieve(this.code)) {
            return true;
        }
        return false;
    },
    finish: function (ceylin, emarie, edora, myeasha) {
        let kabrina = edora.getAchieveData(this.code);
        if (edora.reachQxz() && !edora.hasAchieve(this.code)) {
            if (edora.hasKill(161)) {
                edora.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_1_th2_3",
    name: "入门(初级健身考试·理论)",
    point: 4e6,
    desc: "【入门(初级健身考试·理论)】达成【前行者】的同时,在初级健身教练考核中,理论考试最终成绩达到通过或以上(限一次)[奖励:较多排行榜积分 每天健身中心最大健身次数额外+2]",
    type: "real_1",
    finalDesc: "【入门(初级健身考试·理论)】[奖励:较多排行榜积分 每天健身中心最大健身次数额外+2]",
    hasGet: function (ame, amalina, olna) {
        if (olna.hasAchieve(this.code)) {
            return true;
        }
        return false;
    },
    finish: function (syr, alondria, delanei, hadiyah) {
        var leasa;
        let jacavion = delanei.getAchieveData(this.code);
        leasa = "pnbqbg";
        if (delanei.reachQxz() && !delanei.hasAchieve(this.code)) {
            if (syr.th2) {
                delanei.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_1_op2_3",
    name: "入门(初级健身考试·实操)",
    point: 6e6,
    desc: "【入门(初级健身考试·实操)】达成【前行者】的同时,在初级健身教练考核中,实操考试的最终成绩达到通过或以上(限一次)[奖励:较多排行榜积分 每天健身中心单器材最大使用次数额外+1]",
    type: "real_1",
    finalDesc: "【入门(初级健身考试·实操)】[奖励:较多排行榜积分 每天健身中心单器材最大使用次数额外+1]",
    hasGet: function (sudays, mathayus, oakes) {
        if (oakes.hasAchieve(this.code)) {
            return true;
        }
        return false;
    },
    finish: function (derick, jaymi, laylon, rythm) {
        let lakenya = laylon.getAchieveData(this.code);
        if (laylon.reachQxz() && !laylon.hasAchieve(this.code)) {
            if (derick.op2) {
                laylon.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_1_reputation_5",
    name: "声名鹊起(平行)",
    point: 2e6,
    type: "real_1",
    desc: "【声名鹊起(平行)】达成[前行者]且地下拳场的名气达到[声名鹊起](限一次)\n[奖励:套餐[烟瘾抵抗者]加强一次 较多排行榜积分]",
    finalDesc: "【声名鹊起(平行)】[奖励:套餐[烟瘾抵抗者]加强一次 较多排行榜积分]",
    hasGet: function (josmary, revanth, raif) {
        if (raif.hasAchieve(this.code)) {
            return true;
        }
        return false;
    },
    finish: function (xzaiver, bridy, lahni, sanita) {
        if (!lahni.hasAchieve(this.code) && lahni.isReal_1World()) {
            let hosia = lahni.getQuanChangUserReputation();
            if (lahni.reachQxz() && hosia.lv >= 5) {
                lahni.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_real_1_reputation_6",
    name: "名噪一时(平行)",
    point: 4e6,
    type: "real_1",
    desc: "【名噪一时(平行)】达成[前行者]且地下拳场的名气达到[名噪一时](限一次)\n[奖励:[受欢迎的黑拳手]提升Lv1,[伙伴亲和]提升Lv1,大量排行榜积分]",
    finalDesc: "【名噪一时(平行)】[奖励:[受欢迎的黑拳手]提升Lv1,[伙伴亲和]提升Lv1,大量排行榜积分]",
    hasGet: function (lekesia, havis, danl) {
        if (danl.hasAchieve(this.code)) {
            return true;
        }
        return false;
    },
    finish: function (elizabeta, ervene, johnoliver, devonne) {
        if (!johnoliver.hasAchieve(this.code) && johnoliver.isReal_1World()) {
            var timberley = 10;
            let malda = johnoliver.getQuanChangUserReputation();
            timberley = "hmmdmk";
            if (johnoliver.reachQxz() && malda.lv >= 6) {
                johnoliver.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_ktz_real_1_reputation_6",
    name: "开拓者-名噪一时(平行)",
    point: 1e5,
    type: "real_1",
    type2: "only",
    desc: "【开拓者-名噪一时(平行)】唯一成就,第一个达成【声名鹊起(平行)】[奖励:较多排行榜积分 [烟瘾抵抗者]开局烟瘾额外-3] 达成者:你好",
    hasGet: function (onnah, draya, lindall) {
        if (parseInt(draya.userId) == 15933 || draya.userId == 2) {
            lindall.setAchieve(this.code, 1);
            return true;
        }
        return lindall.hasAchieve(this.code);
    },
    color: [238, 162, 164]
}, {
    code: "cj_ktz_real_1_reputation_5",
    name: "开拓者-声名鹊起(平行)",
    point: 1e6,
    type: "real_1",
    type2: "only",
    desc: "【开拓者-声名鹊起(平行)】唯一成就,第一个达成【声名鹊起(平行)】[奖励:较多排行榜积分 [烟瘾抵抗者]开局烟瘾额外-2] 达成者:蒋琰",
    hasGet: function (ehlana, hazelrose, ranetta) {
        if (hazelrose.userId == 1134 || hazelrose.userId == 2) {
            ranetta.setAchieve(this.code, 1);
            return true;
        }
        return ranetta.hasAchieve(this.code);
    },
    color: [238, 162, 164]
}, {
    code: "cj_real_1_hengSao",
    name: "横扫·平行",
    point: 1e6,
    desc: "【横扫·平行】达成【前行者】的同时,战胜刀疤,巨人王和城中村大佬的次数 = 4 (限一次)[奖励:中量排行榜积分 [旧书店]额外增加1种防御类书籍和一种攻击类书籍],[旧书店]每次售卖的属性书数量+1,技能书数量+1]",
    type: "real_1",
    finalDesc: "【横扫·平行】[奖励:中量排行榜积分 [旧书店]额外增加1种防御类书籍和一种攻击类书籍,[旧书店]每次售卖的属性书数量+1,技能书数量+1]",
    hasGet: function (tihanna, tracyann, gibert) {
        if (gibert.hasAchieve(this.code)) {
            return true;
        }
        return false;
    },
    finish: function (moa, tabytha, quadarious, barry) {
        let fernley = quadarious.getAchieveData(this.code);
        if (quadarious.reachQxz() && !quadarious.hasAchieve(this.code)) {
            if (moa.winDaoBaNan + moa.winDaLao + quadarious.getKingKill() == 4) {
                quadarious.setAchieve(this.code, 1);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    name: "开拓者-求生者",
    code: "cj_first_qsz",
    desc: "【开拓者-求生者】唯一成就:第一个达成【求生者】成就.[永久奖励:转运概率额外+5%] 达成者:Relssp",
    type: "only",
    point: 14e3,
    type: "only",
    hasGet: function (jabahri, zyrell, emilce) {
        if (zyrell.userId == 73 || zyrell.firstQsz == 1) {
            zyrell.firstQsz = 1;
            emilce.save2();
            return true;
        }
        return false;
    },
    color: [238, 162, 164]
}, {
    code: "cj_first_yzzl",
    name: "开拓者-一战之力",
    type: "only",
    point: 3e4,
    desc: "【开拓者-一战之力】唯一成就:第一个达成【一战之力】成就.[永久奖励:转运概率额外+5%] 达成者:亦恕",
    hasGet: function (sarahjane, khaleia, arend) {
        if (khaleia.userId == 35 || khaleia.userId == 2) {
            if (!arend.hasAchieve(this.code)) {
                arend.setAchieve(this.code, 1);
            }
            return true;
        }
        if (khaleia.userId == 70 && khaleia.hasRemove70ktz != 1) {
            khaleia.hasRemove70ktz = 1;
            arend.setAchieve(this.code, 0);
            arend.save2();
        }
        return false;
    },
    color: [238, 162, 164]
}, {
    code: "cj_collect_first_ahz",
    name: "开拓者-收藏爱好者",
    type: "only",
    point: "6000",
    desc: "【开拓者-收藏爱好者】唯一成就:第一个收集5件藏品 [奖励:两个蚊子腿 一个草带] 达成者:Relssp",
    hasGet: function (brayzlee, janis, ephrain) {
        if (janis.userId == 73 || janis.userId == 2) {
            ephrain.buildAndPutAchieveData(this.code, 1);
            if (janis.firstAhz != 1) {
                janis.firstAhz = 1;
                ephrain.addCollection2("collection_wzt", 2);
                ephrain.addCollection2("collection_cd", 1);
                ephrain.save2();
            }
            return true;
        }
        if (janis.userId == 2) {
            if (janis.hasEffectFirstAhz != 1) {
                janis.hasEffectFirstAhz = 1;
                if ("undefined" == typeof janis.userCollection["collection_wzt"]) {
                    janis.userCollection["collection_wzt"] = {
                        num: 0
                    };
                }
                if ("undefined" == typeof janis.userCollection["collection_cd"]) {
                    janis.userCollection["collection_cd"] = {
                        num: 0
                    };
                }
                janis.userCollection["collection_wzt"].num += 2;
                janis.userCollection["collection_cd"].num += 1;
                janis.userCollection.totalNum += 3;
                ephrain.save2();
            }
            return true;
        }
        return false;
    },
    color: [238, 162, 164]
}, {
    code: "cj_tz1_real",
    name: "挑战者1阶·真",
    type: "real",
    point: 4e4,
    desc: "【挑战者1阶·真】达成[求生者]的情况下,击败基因改造人(限一次)[奖励:中量排行榜积分]",
    finalDesc: "【挑战者1阶·真】[奖励:中量排行榜积分]",
    hasGet: function (melanne, danya, caedance) {
        var kumari = 7;
        let ozmar = caedance.getAchieveData(this.code);
        kumari = 9;
        if ("undefined" == typeof ozmar) {
            return false;
        }
        if (ozmar.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (cavari, calogero, eimy, hallel) {
        var janani;
        let fridah = eimy.getAchieveData(this.code);
        janani = 7;
        if (cavari.publicVar[1] != -1 && cavari.publicVar[1] != 1 && cavari.realDebuff == 1 && hallel >= 60 && cavari.winWajueji == 1) {
            if (fridah.num != 1 && eimy.getKill(220) >= 1) {
                var avala;
                let jasmely = eimy.buildAchieveData(this.code, 1, eimy.getTime());
                avala = "pgknmp";
                eimy.putAchieveData(this.code, jasmely);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj-Xr",
    name: "新人",
    point: 4e3,
    desc: "【新人】在真实世界存活至通关成功且分数>=49(" + yanais.getAchieveNum("cj-Xr") + "/1)\n" + "[奖励:少量排行榜积分 略微提升抽到多个正面天赋的概率](限一次)",
    type: "real",
    finalDesc: "【新人】[奖励:少量排行榜积分 略微提升抽到多个正面天赋的概率]",
    hasGet: function (donevin, brynden, anayis) {
        if (brynden.realXrNum > 0) {
            return true;
        }
        if (anayis.hasAchieve(this.code)) {
            return true;
        }
        return false;
    },
    finish: function (macailyn, scarlette, mykhel, tatsu) {
        let zarar = mykhel.getAchieveData(this.code);
        if (!mykhel.hasAchieve(this.code) && macailyn.publicVar[1] != -1 && macailyn.publicVar[1] != 1 && macailyn.realDebuff == 1 && tatsu >= 49) {
            mykhel.addAchieveNum(this.code);
            return true;
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj-real-tz-buYiPiLao",
    name: "不易疲劳",
    point: 2e4,
    desc: "【不易疲劳】达成[求生者]的情况下,精力上限超过2000(限一次)[奖励:少量排行榜积分 解锁角色特质[不易疲劳]]",
    type: "real",
    finalDesc: "【不易疲劳】[奖励:少量排行榜积分 解锁角色特质[不易疲劳]]",
    hasGet: function (faber, oneyda, woodruff) {
        var antwanne = 15;
        let jesusenrique = woodruff.getAchieveData(this.code);
        antwanne = 7;
        if ("undefined" == typeof jesusenrique) {
            return false;
        }
        if (jesusenrique.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (masion, vaida, darinesha, shemira) {
        if (darinesha.reachQsz() && !darinesha.hasAchieve(this.code)) {
            if (darinesha.maxEnergy() >= 2e3) {
                darinesha.addAchieveNum(this.code);
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj-real-tz-biliguoren",
    name: "臂力过人",
    point: 2e4,
    desc: "【臂力过人】达成[求生者]的情况下,面板攻击力超过10万(限一次)[奖励:少量排行榜积分 解锁角色特质[臂力过人]]",
    type: "real",
    finalDesc: "【臂力过人】[奖励:少量排行榜积分 解锁角色特质[臂力过人]]",
    hasGet: function (amaaya, shrivika, gensis) {
        var ashtun;
        let knixon = gensis.getAchieveData(this.code);
        ashtun = 14;
        if ("undefined" == typeof knixon) {
            return false;
        }
        if (knixon.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (daevion, kamsiyochukwu, dazlyn, azurie) {
        if (dazlyn.reachQsz() && !dazlyn.hasAchieve("cj-real-tz-biliguoren")) {
            if (dazlyn.role.att() >= 1e5) {
                dazlyn.addAchieveNum("cj-real-tz-biliguoren");
                return true;
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj-Qsz",
    name: "求生者",
    point: 12e3,
    desc: "【求生者】在真实世界存活至通关成功且不被赶出城,分数>=60(需拥有[新人]成就)(限3次)(" + yanais.getAchieveNum("cj-Qsz") + "/1)\n" + "[奖励:中量排行榜积分 解锁隐藏天赋[疾影] 角色特质位解锁并提升至1]",
    type: "real",
    finalDesc: "【求生者】[奖励:中量排行榜积分,传说天赋[疾影],角色特质位解锁并提升至1]",
    hasGet: function (kachet, caseson, antonial) {
        let sevasti = antonial.getAchieveData(this.code);
        if ("undefined" == typeof sevasti) {
            return false;
        }
        if (sevasti.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (taleshia, shanesa, kayenne, sevy) {
        if (kayenne.reachQsz() && kayenne.getAchieveNum("cj-Qsz") < 3) {
            kayenne.addAchieveNum("cj-Qsz");
            return true;
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "cj_tz1",
    name: "挑战者1阶",
    type: "zy",
    point: 6e3,
    desc: "【挑战者1阶】达成[人定胜天]的情况下,击败基因改造人(限一次)[奖励:少量排行榜积分]",
    finalDesc: "【挑战者1阶】[奖励:少量排行榜积分]",
    hasGet: function (zyara, zaliya, shadaria) {
        let tykeshia = shadaria.getAchieveData(this.code);
        if ("undefined" == typeof tykeshia) {
            return false;
        }
        if (tykeshia.num > 0) {
            return true;
        }
        return false;
    },
    finish: function (luar, ethelyn, abery, javawn) {
        let zikiria = abery.getAchieveData(this.code);
        if (luar.orderTimes[1] <= 33 && luar.publicVar[1] != -1 && luar.publicVar[1] != 1 && luar.xzDebuff == 1 && luar.totalPoint >= 82) {
            if (luar.winTz == 1 && luar.winWajueji == 1 && luar.winHuChaZhuangHan == 1 && luar.winXiZhuangNan == 1 && luar.winDaoBaNan == 1 && luar.winBuGanJingLiuLangHan == 1 && luar.winTongJiFan == 1) {
                if (zikiria.num != 1 && abery.getKill(220) >= 1) {
                    var fairah = 10;
                    let jazeera = abery.buildAchieveData(this.code, 1, abery.getTime());
                    fairah = 8;
                    abery.putAchieveData(this.code, jazeera);
                    return true;
                }
            }
        }
        return false;
    },
    color: [135, 206, 235]
}, {
    code: "xzTgNum",
    name: "转运",
    color: [135, 206, 235],
    point: 1e3,
    show: false
}, {
    code: "xz2TgNum",
    name: "转运·战",
    color: [135, 206, 235],
    point: 3e3,
    show: false
}, {
    code: "wyTgNum",
    name: "无烟战神",
    color: [135, 206, 235],
    point: 1,
    show: false
}, {
    code: "brcaTgNum",
    name: "不染尘埃",
    color: [135, 206, 235],
    point: 10,
    show: false
}, {
    code: "yryyTgNum",
    name: "游刃有余",
    color: [135, 206, 235],
    point: 2500,
    show: false
}];
