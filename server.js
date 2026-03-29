function 生成随机昵称() {
  const 形容词列表 = [
    "呆萌", "勇敢", "调皮", "温柔", "疯狂",
    "慵懒", "帅气", "神秘", "暴躁", "可爱",
    "潇洒", "憨厚", "傲娇", "勇猛", "佛系",
    "沙雕", "冷酷", "阳光", "忧郁", "无敌"
  ];

  const 角色列表 = [
    "小蚊", "小小兔", "小小蛇", "小青", "蚊媛", "巨蟒",
    "蚊乐队", "小混混", "丐帮弟子", "恶霸", "女警", "煤老板", "城管",
    "皮皮猴", "野猪", "药贩", "流浪剑客", "黑熊", "果树", "火狐", "山岭巨人",
    "熊孩子", "阿宾", "卖片老板", "阿龙", "站街妹",
    "金环蛇", "铃女", "流浪大叔", "古树", "再生虫",
    "喵妹", "高级金融分析师", "胖虎", "龙啸天", "排球少女",
    "流浪汉", "女贼", "西装男", "醉汉", "刀疤男",
    "看守者", "追杀者", "劫匪", "通缉犯",
    "草带男孩", "女流氓", "女汉子", "壮汉",
    "电锯男", "蒙面人", "流浪者", "萌新"
  ];
  const 形容词 = 形容词列表[Math.floor(Math.random() * 形容词列表.length)];
  const 角色 = 角色列表[Math.floor(Math.random() * 角色列表.length)];
  return `${形容词}的${角色}`;
}

const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// ===================== MySQL 连接 =====================
const db = mysql.createPool({
  host: 'localhost',
  user: 'llrj',
  password: '100235',
  database: 'llrj',
  waitForConnections: true,
  connectionLimit: 10
});

// ===================== 自动建表（修复版） =====================
(async () => {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS players (
        id INT PRIMARY KEY AUTO_INCREMENT,
        uid VARCHAR(255) UNIQUE NOT NULL,
        nickname VARCHAR(255)
      )
    `);

    await db.query(`
      CREATE TABLE IF NOT EXISTS errors (
        id INT PRIMARY KEY AUTO_INCREMENT,
        data TEXT,
        time DATETIME
      )
    `);

    await db.query(`
      CREATE TABLE IF NOT EXISTS messages (
        id INT PRIMARY KEY AUTO_INCREMENT,
        data TEXT,
        time DATETIME
      )
    `);

    await db.query(`
      CREATE TABLE IF NOT EXISTS saves (
        id INT PRIMARY KEY AUTO_INCREMENT,
        user_id INT NOT NULL,
        save_id VARCHAR(255) NOT NULL,
        save TEXT,
        setting TEXT,
        time DATETIME
      )
    `);

    console.log('✅ MySQL 连接成功 & 表已创建');
  } catch (err) {
    console.error('❌ 建表失败', err);
  }
})();

// ===================== 1. 登录 =====================
app.post('/login', async (req, res) => {
  try {
    const { uid } = req.body;
    if (!uid) return res.status(400).json({ code: 400, msg: '缺少uid' });

    const [rows] = await db.query('SELECT * FROM players WHERE uid = ?', [uid]);
    if (rows.length > 0) {
      const user = rows[0];
      return res.json({ code: 200, nickname: user.nickname, id: user.id });
    }

    const nickname = 生成随机昵称();
    const [result] = await db.query('INSERT INTO players (uid, nickname) VALUES (?, ?)', [uid, nickname]);
    res.json({ code: 200, nickname, id: result.insertId });

  } catch (err) {
    res.status(500).json({ code: 500, msg: '登录失败', error: err.message });
  }
});

// ===================== 2. 异常上报 =====================
app.post('/error', async (req, res) => {
  try {
    await db.query('INSERT INTO errors (data, time) VALUES (?, NOW())', [JSON.stringify(req.body)]);
    res.json({ code: 200, msg: '异常上报成功' });
  } catch (err) {
    res.json({ code: 500, msg: '异常上报失败' });
  }
});

// ===================== 3. 普通消息 =====================
app.post('/msg', async (req, res) => {
  try {
    await db.query('INSERT INTO messages (data, time) VALUES (?, NOW())', [JSON.stringify(req.body)]);
    res.json({ code: 200, msg: '消息上传成功' });
  } catch (err) {
    res.json({ code: 500, msg: '消息上传失败' });
  }
});

// ===================== 4. 上传存档（已修复所有bug） =====================
app.post('/save', async (req, res) => {
  try {
    const { save, setting } = req.body;
    if (!save || !setting) return res.status(400).json({ code: 400, msg: '缺少存档数据' });

    // ✅ 修复：user_id 必须转数字，表是 INT 类型
    const user_id = parseInt(setting?.账号?.id) || 0;
    // ✅ 修复：save_id 不能为空
    const save_id = setting?.uid || setting?.唯一标识 || 'default';

    await db.query(`
      INSERT INTO saves (user_id, save_id, save, setting, time)
      VALUES (?, ?, ?, ?, NOW())
    `, [user_id, save_id, JSON.stringify(save), JSON.stringify(setting)]);

    res.json({ code: 200, msg: '存档上传成功' });

  } catch (err) {
    res.status(500).json({ code: 500, msg: '存档失败', error: err.message });
  }
});

// ===================== 启动服务 =====================
app.listen(3000, () => {
  console.log('🚀 服务启动成功 端口：3000');
});