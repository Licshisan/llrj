let nazaret = [{
    id: 140,
    nextEnemyId: 141,
    code: "守擂的路人甲",
    name: "守擂的路人甲",
    lv: 400,
    hp: 1e4,
    maxHp: 1e4,
    att: 1200,
    def: 330,
    skillDef: 8e3,
    publicVar: 0,
    escapeRate: -99999,
    enemyEscapeRate: 0,
    lostHealth: 5,
    achieve: 0,
    getAtt: 1,
    drop: [],
    des: "“友谊第一,比赛第二,点到为止~”",
    skillList: [{
        code: "直拳",
        name: "直拳",
        desc: "平平无奇",
        radio: 50,
        effect: function (danilee) {
            let henryka = yuriana("scr_data");
            var camilo;
            let oli = yuriana("scr_data2");
            camilo = 0;
            var orris = 5;
            let trek = yuriana("scr_public");
            orris = 7;
            let darvi = this.getHurt(danilee);
            darvi *= 1;
            trek.reduceHp(darvi);
            return "你受到" + darvi + "点伤害";
        },
        getHurt: function (pavlina) {
            var calia = 9;
            let abdoul = yuriana("scr_data");
            calia = 8;
            let elizandro = yuriana("scr_data2");
            let jeslynn = yuriana("scr_public");
            jeslynn.initUserData(abdoul);
            let vanisa = jeslynn.getPlusInt(pavlina.att - jeslynn.role.def(abdoul));
            vanisa *= 1;
            return vanisa;
        }
    }, {
        code: "扫腿",
        name: "扫腿",
        desc: "无视10%防御造成2倍伤害",
        radio: 50,
        effect: function (ashyah) {
            var drianna = 8;
            let izzabela = yuriana("scr_data");
            drianna = "cacmeb";
            let aunyae = yuriana("scr_data2");
            let eulos = yuriana("scr_public");
            var raquel = 14;
            let yiovanni = this.getHurt(ashyah);
            raquel = "pnigcd";
            eulos.reduceHp(yiovanni);
            return "你受到" + yiovanni + "点伤害";
        },
        getHurt: function (christafer) {
            let falicia = yuriana("scr_data");
            let lendra = yuriana("scr_data2");
            var crisann;
            let shakeyia = yuriana("scr_public");
            crisann = 2;
            shakeyia.initUserData(falicia);
            let neharika = shakeyia.getPlusInt(christafer.att - 0.9 * shakeyia.role.def(falicia));
            neharika *= 2;
            return neharika;
        }
    }],
    defSkillList: [{
        code: "防御",
        name: "防御",
        desc: "小幅度降低所受伤害",
        radio: 100,
        effect: function (teppei) {
            let normia = yuriana("scr_data");
            var zarayiah = 10;
            let toi = yuriana("scr_data2");
            zarayiah = 17;
            let seandouglas = yuriana("scr_public");
            cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= teppei.skillDef;
            return "大幅降低所受伤害";
        }
    }],
    skill: function (gaelyn) {
        gaelyn = "";
        let sasia = lanylah.selectNewItem([], this.skillList);
        let natelee = sasia.effect(this);
        gaelyn += this.name + "使用「" + sasia.name + ",」".split("").reverse().join("") + natelee;
        return gaelyn;
    },
    defSkill: function (elecia) {
        elecia = "";
        var albertjames = 5;
        let jesse = lanylah.selectNewItem([], this.defSkillList);
        albertjames = "hbbfkh";
        var caylob;
        let sharrol = jesse.effect(this);
        caylob = "jjqjfp";
        elecia += this.name + "使用「" + jesse.name + "」," + sharrol;
        return elecia;
    },
    winEvent: function () {
        return "好小子!";
    },
    lostEvent: undefined
}, {
    id: 141,
    nextEnemyId: 142,
    code: "退役拳击手老张",
    name: "退役拳击手老张",
    lv: 400,
    hp: 2e4,
    maxHp: 2e4,
    att: 1300,
    def: 600,
    skillDef: 6e3,
    publicVar: 0,
    escapeRate: -99999,
    enemyEscapeRate: 0,
    lostHealth: 5,
    achieve: 0,
    getAtt: 1,
    drop: [],
    des: "“好小子,俺老张也来跟你热热身~”",
    skillList: [{
        code: "重拳",
        name: "重拳",
        desc: "无视40%防御造成2倍伤害",
        radio: 50,
        effect: function (nakita) {
            let berg = yuriana("scr_data");
            let jakorie = yuriana("scr_data2");
            var yeili = 4;
            let giankarlo = yuriana("scr_public");
            yeili = 12;
            let srija = nakita.att;
            var jovania;
            let leanora = 0.6 * giankarlo.role.def(berg);
            jovania = "dlnnhg";
            var issel;
            let javene = this.getHurt(nakita);
            issel = 6;
            giankarlo.reduceHp(javene);
            var serai = 9;
            let cedriana = "你受到" + javene + "点伤害";
            serai = "imnjfi";
            if (giankarlo.isFightDetailMode()) {
                cedriana += "(攻击:" + srija + "减伤:" + leanora + ")";
            }
            return cedriana;
        },
        getHurt: function (brenson) {
            var geniel = 11;
            let zong = yuriana("scr_data");
            geniel = 3;
            var lauralyn = 11;
            let enley = yuriana("scr_data2");
            lauralyn = "bchpbk";
            var deralyn = 9;
            let bates = yuriana("scr_public");
            deralyn = "egmfbd";
            bates.initUserData(zong);
            let jontavius = brenson.att;
            let mirabai = 0.6 * bates.role.def(zong);
            let noemi = bates.getPlusInt(jontavius - mirabai);
            noemi *= 2;
            return noemi;
        }
    }, {
        code: "上勾拳",
        name: "上勾拳",
        desc: "无视40%防御造成4倍伤害",
        radio: 50,
        effect: function (lyall) {
            let teanna = yuriana("scr_data");
            var hiran = 4;
            let benham = yuriana("scr_data2");
            hiran = 9;
            var jandy;
            let mackenzey = yuriana("scr_public");
            jandy = 0;
            let kentrevious = this.getHurt(lyall);
            mackenzey.reduceHp(kentrevious);
            return "你受到" + kentrevious + "点伤害";
        },
        getHurt: function (caren) {
            let taijay = yuriana("scr_data");
            var astry;
            let julia = yuriana("scr_data2");
            astry = 9;
            let advita = yuriana("scr_public");
            advita.initUserData(taijay);
            var lyrah = 11;
            let jamarkus = advita.getPlusInt(caren.att - 0.6 * advita.role.def(taijay));
            lyrah = 14;
            jamarkus *= 4;
            return jamarkus;
        }
    }],
    defSkillList: [{
        code: "侧闪防守",
        name: "侧闪防守",
        desc: "免疫伤害",
        radio: 30,
        effect: function (aderemi) {
            var nyjai = 2;
            let sawyer = yuriana("scr_data");
            nyjai = 11;
            var jayvonne = 7;
            let clararose = yuriana("scr_data2");
            jayvonne = 1;
            var davide;
            let achazia = yuriana("scr_public");
            davide = 1;
            cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 999999;
            return "免疫本次伤害";
        },
        code: "格挡防守",
        name: "格挡防守",
        desc: "大幅减少本次伤害",
        radio: 30,
        effect: function (suehay) {
            var iretomiwa;
            let lateshia = yuriana("scr_data");
            iretomiwa = 9;
            let kairaluchi = yuriana("scr_data2");
            var alessandro;
            let yezenia = yuriana("scr_public");
            alessandro = 14;
            cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 2e4;
            return "大幅减少本次伤害";
        }
    }],
    skill: function (kirstian) {
        kirstian = "";
        let vareck = lanylah.selectNewItem([], this.skillList);
        let lashavia = vareck.effect(this);
        kirstian += this.name + "使用「" + vareck.name + "」," + lashavia;
        return kirstian;
    },
    defSkill: function (hieu) {
        hieu = "";
        var ronreaco = 16;
        let goldia = lanylah.selectNewItem([], this.defSkillList);
        ronreaco = 6;
        let cherryl = goldia.effect(this);
        hieu += this.name + "使用「" + goldia.name + "」," + cherryl;
        return hieu;
    },
    winEvent: function () {
        return "好小子!";
    },
    lostEvent: undefined
}, {
    id: 142,
    nextWinEventId: 6041,
    code: "中二少年",
    name: "中二少年",
    lv: 500,
    hp: 6e4,
    maxHp: 6e4,
    att: 1600,
    skillAttFix: 0.3,
    skillAtt2: 49,
    def: 700,
    skillDef: 22e3,
    publicVar: 0,
    escapeRate: -99999,
    enemyEscapeRate: 0,
    lostHealth: 5,
    achieve: 1,
    getAtt: 1,
    drop: [],
    des: "一位中二少年跳上了擂台\n“有两下子,本剑豪也来领教一下你的高招!”",
    skillList: [{
        code: "进阶·啊拖勒啊可痛",
        name: "进阶·啊拖勒啊可痛",
        desc: "造成3倍伤害,忽略50%防御",
        radio: 50,
        effect: function (lakai) {
            let ashalee = yuriana("scr_data");
            let tatsuro = yuriana("scr_data2");
            var sheikha;
            let izabele = yuriana("scr_public");
            sheikha = "jdibbl";
            let zorielle = this.getHurt(lakai);
            izabele.reduceHp(zorielle);
            return "你受到" + zorielle + "点伤害";
        },
        getHurt: function (zahniah) {
            var khamia = 9;
            let mailinh = yuriana("scr_data");
            khamia = 13;
            var thyra;
            let latrell = yuriana("scr_data2");
            thyra = 11;
            var anyfer = 10;
            let tahnesha = yuriana("scr_public");
            anyfer = 10;
            tahnesha.initUserData(mailinh);
            var lawarren = 16;
            let lapreal = tahnesha.getPlusInt(zahniah.att - 0.5 * tahnesha.role.def(mailinh));
            lawarren = 9;
            lapreal *= 3;
            return lapreal;
        }
    }, {
        code: "面对疾风吧",
        name: "面对疾风吧",
        desc: "无视80%防御造成3倍伤害,并提升自身30%攻击力",
        radio: 50,
        effect: function (jamaria) {
            let braeden = yuriana("scr_data");
            var cleman = 9;
            let gwendia = yuriana("scr_data2");
            cleman = 16;
            let shanene = yuriana("scr_public");
            var brezzy = 5;
            let sharlena = this.getHurt(jamaria);
            brezzy = 13;
            shanene.reduceHp(sharlena);
            jamaria.att += jamaria.att * jamaria.skillAttFix;
            return "你受到" + sharlena + "点伤害," + jamaria.name + "攻击力增加" + shanene.getPlusInt(jamaria.skillAttFix * 100) + "%";
        },
        getHurt: function (harce) {
            let stelmo = yuriana("scr_data");
            let doward = yuriana("scr_data2");
            var alexah = 13;
            let similoluwa = yuriana("scr_public");
            alexah = 0;
            similoluwa.initUserData(stelmo);
            let tyseana = similoluwa.getPlusInt(harce.att - 0.2 * similoluwa.role.def(stelmo));
            tyseana *= 3;
            return tyseana;
        }
    }],
    defSkillList: [{
        code: "哈撒给",
        name: "哈撒给",
        desc: "大幅度降低所受伤害",
        radio: 50,
        effect: function (edrianna) {
            var delorse = 12;
            let siyam = yuriana("scr_data");
            delorse = "jmpnjl";
            var verneisha;
            let menelek = yuriana("scr_data2");
            verneisha = "lbqpcb";
            let ld = yuriana("scr_public");
            cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= edrianna.skillDef;
            return "大幅降低所受伤害";
        }
    }, lanylah.buildNoSkill(50)],
    skill: function (tasja) {
        tasja = "";
        var waylonn = 5;
        let dawnielle = lanylah.selectNewItem([], this.skillList);
        waylonn = "oqfbca";
        let nychole = dawnielle.effect(this);
        tasja += this.name + "使用「" + dawnielle.name + "」," + nychole;
        return tasja;
    },
    defSkill: function (kaicey) {
        kaicey = "";
        var eliannie = 9;
        let keyuna = lanylah.selectNewItem([], this.defSkillList);
        eliannie = "oaoiai";
        if (lanylah.isNoSKill(keyuna)) {
            return "";
        }
        let petronilo = keyuna.effect(this);
        kaicey += this.name + "使用「" + keyuna.name + "」," + petronilo;
        return kaicey;
    },
    winEvent: function () {
        let mykaya = yuriana("scr_data");
        var chrishay;
        let candina = yuriana("scr_data2");
        chrishay = 9;
        var ellajean;
        let cartez = yuriana("scr_public");
        ellajean = 4;
        return "“什么?难道你就是传说中的剑圣?”";
    },
    lostEvent: function () {
        return "“败于剑豪之手,你也很不错了!”";
    }
}, {
    id: 143,
    code: "wuShuDiZi1",
    name: "武术队三弟子",
    lv: 500,
    hp: 1e5,
    maxHp: 1e5,
    att: 3300,
    skillAttFix: 0.04,
    skillAttFix2: 0.06,
    def: 700,
    skillDef: 2e4,
    publicVar: 0,
    escapeRate: -99999,
    enemyEscapeRate: 0,
    lostHealth: 5,
    achieve: 1,
    getAtt: 1,
    drop: [],
    des: "“太极-赵青松,请多指教!”",
    skillList: [{
        code: "太极·上步七星",
        name: "太极·上步七星",
        desc: "造成4倍攻击伤害,忽略35%防御力,降低嗜血效果3%",
        radio: 40,
        effect: function (vasisht) {
            var euriel;
            let kamilla = yuriana("scr_data");
            euriel = 8;
            let travis = yuriana("scr_data2");
            let adassa = yuriana("scr_public");
            var julita = 6;
            let tjay = this.getHurt(vasisht);
            julita = 15;
            adassa.reduceHp(tjay);
            adassa.reduceRadioSxAtFight(vasisht.skillAttFix);
            return "你受到" + tjay + "点伤害,嗜血效果降低" + adassa.getBfb(vasisht.skillAttFix) + "%";
        },
        getHurt: function (riyad) {
            var guenter;
            let mickale = yuriana("scr_data");
            guenter = 17;
            let rietta = yuriana("scr_data2");
            let javeya = yuriana("scr_public");
            javeya.initUserData(mickale);
            let tiahna = javeya.getPlusInt(riyad.att - 0.65 * javeya.role.def(mickale));
            tiahna *= 4;
            return tiahna;
        }
    }, {
        code: "太极·双峰贯耳",
        name: "太极·双峰贯耳",
        desc: "造成3倍攻击伤害,忽略50%防御力,降低嗜血效果6%",
        radio: 60,
        effect: function (lycia) {
            let kimbrely = yuriana("scr_data");
            let tikki = yuriana("scr_data2");
            var yasmina = 7;
            let anijia = yuriana("scr_public");
            yasmina = 0;
            let mahrukh = this.getHurt(lycia);
            anijia.reduceHp(mahrukh);
            anijia.reduceRadioSxAtFight(lycia.skillAttFix2);
            return "你受到" + mahrukh + "点伤害,嗜血效果降低" + anijia.getBfb(lycia.skillAttFix2) + "%";
        },
        getHurt: function (bozena) {
            var mauer;
            let kirkwood = yuriana("scr_data");
            mauer = "obninm";
            let larney = yuriana("scr_data2");
            var finessa = 6;
            let enry = yuriana("scr_public");
            finessa = "clhbmn";
            enry.initUserData(kirkwood);
            var omeria = 13;
            let rubert = enry.getPlusInt(bozena.att - 0.5 * enry.role.def(kirkwood));
            omeria = "eccpeb";
            rubert *= 3;
            return rubert;
        }
    }],
    defSkillList: [{
        code: "太极·白鹤亮翅",
        name: "太极·白鹤亮翅",
        desc: "大幅度降低所受伤害",
        radio: 30,
        effect: function (jahan) {
            let dashani = yuriana("scr_data");
            var weir = 10;
            let lyndsie = yuriana("scr_data2");
            weir = 17;
            var kwanzaa = 17;
            let abdulrazaq = yuriana("scr_public");
            kwanzaa = 2;
            cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= jahan.skillDef;
            return "大幅降低所受伤害";
        }
    }, {
        code: "太极·借力打力",
        name: "太极·借力打力",
        desc: "自身减免对手攻击力50%的伤害,并返还给对手",
        radio: 40,
        effect: function (queren, shamond) {
            let tricha = yuriana("scr_data");
            let aysin = yuriana("scr_data2");
            let azarion = yuriana("scr_public");
            var jacqelyn = 11;
            let ballard = azarion.role.att() * 0.5;
            jacqelyn = 10;
            ballard = azarion.reduceHp(ballard);
            cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= ballard;
            return "你受到" + ballard + "点伤害";
        }
    }, lanylah.buildNoSkill(30)],
    skill: function (lateya) {
        lateya = "";
        var purab = 11;
        let sheree = lanylah.selectNewItem([], this.skillList);
        purab = 2;
        var pragna = 4;
        let future = sheree.effect(this);
        pragna = "cejecn";
        lateya += this.name + "使用「" + sheree.name + "」," + future;
        return lateya;
    },
    defSkill: function (charmane, danesa) {
        danesa = "";
        let kydan = lanylah.selectNewItem([], this.defSkillList);
        if (lanylah.isNoSKill(kydan)) {
            return "";
        }
        let ariyona = kydan.effect(this, charmane);
        danesa += this.name + "使用「" + kydan.name + "」," + ariyona;
        return danesa;
    },
    winEvent: function () {
        lanylah.addUserMoney(1e3);
        return "“领教了!”\n恭喜你得到了100元奖金,发了笔小财!";
    },
    lostEvent: function () {
        return "“小兄弟别灰心,你只是欠缺了点经验,还有机会!”";
    }
}];

let compton = [{
    id: 140,
    nextEnemyId: 141,
    code: "棍术师",
    name: "棍术师",
    lv: 400,
    hp: 15e4,
    maxHp: 15e4,
    att: 3e3,
    def: 1e3,
    skillDef: 1e4,
    skillAttFix: 0.03,
    publicVar: 0,
    escapeRate: -99999,
    enemyEscapeRate: 0,
    lostHealth: 5,
    achieve: 0,
    getAtt: 1,
    drop: [],
    des: "“对方以长棍指向你,一言不发”",
    skillList: [{
        code: "八方扫",
        name: "八方扫",
        desc: "忽略40%防御,造成2倍伤害,削减3%嗜血效果",
        radio: 50,
        effect: function (andrella) {
            let magdalen = yuriana("scr_data");
            var phineus = 8;
            let jodell = yuriana("scr_data2");
            phineus = 18;
            var myrtha;
            let stachia = yuriana("scr_public");
            myrtha = 2;
            var linita;
            let daveisha = this.getHurt(andrella);
            linita = 18;
            stachia.reduceHp(daveisha);
            stachia.reduceRadioSxAtFight(andrella.skillAttFix);
            return "你受到" + daveisha + "点伤害,气血震荡,嗜血效果削减" + stachia.getBfb(andrella.skillAttFix) + "%";
        },
        getHurt: function (franchetta) {
            var nikaila;
            let yugo = yuriana("scr_data");
            nikaila = "bdmcqq";
            let simiyah = yuriana("scr_data2");
            let deeksha = yuriana("scr_public");
            deeksha.initUserData(yugo);
            var elyon;
            let marat = deeksha.getPlusInt(franchetta.att - 0.6 * deeksha.role.def(yugo));
            elyon = 16;
            marat *= 2;
            return marat;
        }
    }, {
        code: "劈山",
        name: "劈山",
        desc: "无视80%防御造成3倍伤害,削减3%嗜血效果",
        radio: 50,
        effect: function (ysobel) {
            var nieta = 15;
            let chaylyn = yuriana("scr_data");
            nieta = 9;
            let myreon = yuriana("scr_data2");
            let banan = yuriana("scr_public");
            var hindel = 8;
            let sydeny = this.getHurt(ysobel);
            hindel = "hjpjei";
            banan.reduceHp(sydeny);
            banan.reduceRadioSxAtFight(ysobel.skillAttFix);
            return "你受到" + sydeny + "点伤害,气血震荡,嗜血效果削减" + banan.getBfb(ysobel.skillAttFix) + "%";
        },
        getHurt: function (leith) {
            let marshaun = yuriana("scr_data");
            let philips = yuriana("scr_data2");
            var carlvin = 12;
            let ferra = yuriana("scr_public");
            carlvin = 7;
            ferra.initUserData(marshaun);
            var deda = 5;
            let kynd = ferra.getPlusInt(leith.att - 0.2 * ferra.role.def(marshaun));
            deda = "nglkno";
            kynd *= 3;
            return kynd;
        }
    }],
    defSkillList: [{
        code: "棍术·招架",
        name: "棍术·招架",
        desc: "大幅降低所受伤害",
        radio: 100,
        effect: function (aviral) {
            let sekhani = yuriana("scr_data");
            let shakarra = yuriana("scr_data2");
            let nyier = yuriana("scr_public");
            cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= aviral.skillDef;
            return "大幅降低所受伤害";
        }
    }],
    skill: function (zeppelyn) {
        zeppelyn = "";
        var sharkia;
        let mkenna = quavon.selectNewItem([], this.skillList);
        sharkia = 8;
        let josif = mkenna.effect(this);
        zeppelyn += this.name + "使用「" + mkenna.name + ",」".split("").reverse().join("") + josif;
        return zeppelyn;
    },
    defSkill: function (samarah) {
        samarah = "";
        var blynda;
        let shaeli = quavon.selectNewItem([], this.defSkillList);
        blynda = 6;
        var oline = 12;
        let nickesha = shaeli.effect(this);
        oline = "pnnffp";
        samarah += this.name + "使用「" + shaeli.name + ",」".split("").reverse().join("") + nickesha;
        return samarah;
    },
    winEvent: function () {
        return "好小子!";
    },
    lostEvent: undefined
}, {
    id: 141,
    nextEnemyId: 142,
    code: "退役拳王",
    name: "退役拳王",
    lv: 400,
    hp: 5e5,
    maxHp: 5e5,
    att: 3500,
    skillAtt: 1e3,
    skillAttFix: 0.03,
    skillDef: 15e3,
    def: 2e3,
    skillDef: 6e3,
    publicVar: 0,
    escapeRate: -99999,
    enemyEscapeRate: 0,
    lostHealth: 5,
    achieve: 0,
    getAtt: 1,
    drop: [],
    des: "“感受绝对的力量吧”",
    setSkillList: function () {
        let raynisha = yuriana("scr_data");
        let alaisa = yuriana("scr_data2");
        quavon.initUserData(raynisha);
        let kaidence = this;
        var jaekwon = 11;
        let yukie = [quavon.buildFightSkill(this, "暴力重拳", 50, 2, 1, 0.5, this.skillAttFix), quavon.buildFightSkill(this, "羚羊拳", 50, 3.5, 1, 0.4, this.skillAttFix)];
        jaekwon = "ndkqli";
        this.skillList = yukie;
    },
    setDefSkillList: function () {
        var kuzma = 14;
        let jashelle = yuriana("scr_data");
        kuzma = 15;
        let shironda = yuriana("scr_data2");
        quavon.initUserData(jashelle);
        var eleisa;
        let clemente = this;
        eleisa = 2;
        var chelly = 6;
        let aginah = [quavon.buildFightDefSkill(clemente, "极速侧闪", "规避伤害", 20, function (raidel) {
            let malyka = yuriana("scr_data");
            var jeyda = 12;
            let rayshelle = yuriana("scr_data2");
            jeyda = "dcibig";
            var latroya = 12;
            let anyel = yuriana("scr_public");
            latroya = 6;
            anyel.fightSkillDodge();
            return "规避本次攻击";
        }), quavon.buildFightDefSkill(clemente, "格挡防守", "大幅减少本次伤害", 70, function (akwasi) {
            var ronni = 14;
            let michla = yuriana("scr_data");
            ronni = "qfccgk";
            let atlis = yuriana("scr_data2");
            let emmaus = yuriana("scr_public");
            cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 2e4;
            return "大幅减少本次伤害";
        })];
        chelly = 4;
        this.defSkillList = aginah;
    },
    skill: function (idalina) {
        idalina = "";
        let tanikqua = quavon.selectNewItem([], this.skillList);
        var imelia = 10;
        let aniv = tanikqua.effect(this);
        imelia = 9;
        idalina += this.name + "使用「" + tanikqua.name + "」," + aniv;
        return idalina;
    },
    defSkill: function (suban) {
        suban = "";
        let ansel = quavon.selectNewItem([], this.defSkillList);
        let jannatul = ansel.effect(this);
        suban += this.name + "使用「" + ansel.name + "」," + jannatul;
        return suban;
    },
    winEvent: function () {
        return "好小子!";
    },
    lostEvent: undefined
}, {
    id: 142,
    nextWinEventId: 6041,
    code: "剑术师",
    name: "剑术师",
    lv: 500,
    hp: 1e6,
    maxHp: 1e6,
    att: 4e3,
    skillAtt: 2e3,
    skillAttFix: 0.03,
    skillAtt2: 49,
    def: 700,
    skillDef: 22e3,
    publicVar: 0,
    escapeRate: -99999,
    enemyEscapeRate: 0,
    lostHealth: 5,
    achieve: 1,
    getAtt: 1,
    drop: [],
    des: "一位持剑男子跳上了擂台\n“有两下子,在下也来领教一下你的高招!”",
    setSkillList: function () {
        var rari = 6;
        let chaydon = yuriana("scr_data");
        rari = 9;
        let teddrick = yuriana("scr_data2");
        quavon.initUserData(chaydon);
        var aramay = 6;
        let monye = this;
        aramay = 12;
        var rikardo = 16;
        let jacarter = [quavon.buildFightSkill(this, "剑术·极速连刺", 40, 2.5, 1, 0.4, this.skillAttFix), quavon.buildFightSkill(this, "剑术·回旋斩", 60, 3.5, 1, 0.5, this.skillAttFix)];
        rikardo = 9;
        this.skillList = jacarter;
    },
    defSkillList: [{
        code: "剑术·招架",
        name: "剑术·招架",
        desc: "大幅度降低所受伤害",
        radio: 50,
        effect: function (andriea) {
            var malone;
            let mialyn = yuriana("scr_data");
            malone = "dpmgkk";
            var rajeeni = 13;
            let hossam = yuriana("scr_data2");
            rajeeni = 9;
            var bufford;
            let arnol = yuriana("scr_public");
            bufford = 13;
            cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= andriea.skillDef;
            return "大幅降低所受伤害";
        }
    }],
    skill: function (janlyn) {
        janlyn = "";
        let jahseer = quavon.selectNewItem([], this.skillList);
        var laguana = 8;
        let treylen = jahseer.effect(this);
        laguana = 10;
        janlyn += this.name + "使用「" + jahseer.name + "」," + treylen;
        return janlyn;
    },
    defSkill: function (renza) {
        renza = "";
        let shreeda = quavon.selectNewItem([], this.defSkillList);
        if (quavon.isNoSKill(shreeda)) {
            return "";
        }
        let stancil = shreeda.effect(this);
        renza += this.name + "使用「" + shreeda.name + "」," + stancil;
        return renza;
    },
    winEvent: function () {
        let tedros = yuriana("scr_data");
        let teairra = yuriana("scr_data2");
        var joud = 5;
        let maiesha = yuriana("scr_public");
        joud = "pefifi";
        return "“厉害!”";
    },
    lostEvent: function () {
        return "“承让!”";
    }
}, {
    id: 143,
    nextWinEventId: 6042,
    code: "wuShuDiZi1",
    name: "武术队三弟子",
    lv: 500,
    hp: 12e5,
    maxHp: 12e5,
    att: 5e3,
    skillAtt: 2e3,
    skillAttFix: 0.03,
    skillAttFix2: 0.04,
    def: 700,
    skillDef: 2e4,
    publicVar: 0,
    escapeRate: -99999,
    enemyEscapeRate: 0,
    lostHealth: 5,
    achieve: 1,
    getAtt: 1,
    drop: [],
    des: "“太极-赵青松,请多指教!”",
    skillList: [{
        code: "太极·上步七星",
        name: "太极·上步七星",
        desc: "造成4倍攻击伤害,忽略35%防御力,降低嗜血效果3%",
        radio: 40,
        effect: function (wynsten) {
            let wajd = yuriana("scr_data");
            let aljoharah = yuriana("scr_data2");
            let jeliana = yuriana("scr_public");
            var pure = 10;
            let johniesha = this.getHurt(wynsten);
            pure = 8;
            jeliana.reduceHp(johniesha);
            jeliana.reduceRadioSxAtFight(wynsten.skillAttFix);
            return "你受到" + johniesha + "点伤害,嗜血效果降低" + jeliana.getBfb(wynsten.skillAttFix) + "%";
        },
        getHurt: function (damya) {
            let gwendolynne = yuriana("scr_data");
            var anat;
            let sebron = yuriana("scr_data2");
            anat = 13;
            let munha = yuriana("scr_public");
            munha.initUserData(gwendolynne);
            var tomorrow;
            let priscilla = munha.getPlusInt(damya.att - 0.65 * munha.role.def(gwendolynne));
            tomorrow = 9;
            priscilla *= 4;
            return priscilla;
        }
    }, {
        code: "太极·双峰贯耳",
        name: "太极·双峰贯耳",
        desc: "造成3倍攻击伤害,忽略50%防御力,降低嗜血效果6%",
        radio: 60,
        effect: function (antwann) {
            let talene = yuriana("scr_data");
            let shaarvi = yuriana("scr_data2");
            let sevanah = yuriana("scr_public");
            var aubreyjo = 10;
            let leonna = this.getHurt(antwann);
            aubreyjo = 15;
            sevanah.reduceHp(leonna);
            sevanah.reduceRadioSxAtFight(antwann.skillAttFix2);
            return "你受到" + leonna + "点伤害,嗜血效果降低" + sevanah.getBfb(antwann.skillAttFix2) + "%";
        },
        getHurt: function (quantisha) {
            var russie = 1;
            let gabirelle = yuriana("scr_data");
            russie = 3;
            var jackstin = 14;
            let kemma = yuriana("scr_data2");
            jackstin = 9;
            var koosha = 2;
            let trajon = yuriana("scr_public");
            koosha = "oeeici";
            trajon.initUserData(gabirelle);
            let taeshaun = trajon.getPlusInt(quantisha.att - 0.5 * trajon.role.def(gabirelle));
            taeshaun *= 3;
            return taeshaun;
        }
    }],
    defSkillList: [{
        code: "太极·白鹤亮翅",
        name: "太极·白鹤亮翅",
        desc: "大幅度降低所受伤害",
        radio: 30,
        effect: function (diavione) {
            let athena = yuriana("scr_data");
            var brisamar = 3;
            let naje = yuriana("scr_data2");
            brisamar = 4;
            let rebeccaann = yuriana("scr_public");
            cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= diavione.skillDef;
            return "大幅降低所受伤害";
        }
    }, {
        code: "太极·借力打力",
        name: "太极·借力打力",
        desc: "自身减免对手攻击力50%的伤害,并返还给对手",
        radio: 40,
        effect: function (decca, shadarian) {
            var delwyn = 2;
            let kurtiss = yuriana("scr_data");
            delwyn = 6;
            let jorgejr = yuriana("scr_data2");
            var janyhia = 9;
            let xavy = yuriana("scr_public");
            janyhia = "foqahi";
            let deziya = xavy.role.att() * 0.5;
            deziya = xavy.reduceHp(deziya);
            cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= deziya;
            return "你受到" + deziya + "点伤害";
        }
    }],
    skill: function (amarah) {
        amarah = "";
        let anyliah = quavon.selectNewItem([], this.skillList);
        var floye = 10;
        let sakhi = anyliah.effect(this);
        floye = 2;
        amarah += this.name + "使用「" + anyliah.name + ",」".split("").reverse().join("") + sakhi;
        return amarah;
    },
    defSkill: function (rockeem, robinette) {
        robinette = "";
        var arlette = 15;
        let prianna = quavon.selectNewItem([], this.defSkillList);
        arlette = 12;
        if (quavon.isNoSKill(prianna)) {
            return "";
        }
        var thurnell = 14;
        let mikayela = prianna.effect(this, rockeem);
        thurnell = 18;
        robinette += this.name + "使用「" + prianna.name + ",」".split("").reverse().join("") + mikayela;
        return robinette;
    },
    winEvent: function () {
        return "“领教了!”";
    },
    lostEvent: function () {
        return "“小兄弟别灰心,你只是欠缺了点经验,还有机会!”";
    }
}, quavon.buildStoryEnemyDaShiXiong()];