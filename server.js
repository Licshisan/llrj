const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
app.use(express.json());

// ===================== MySQL 连接配置（改成你宝塔的） =====================
const db = mysql.createPool({
  host: 'localhost',
  user: 'llrj',         // 你的数据库用户名
  password: '100235',   // 你的密码
  database: 'llrj',     // 库名
  waitForConnections: true,
  connectionLimit: 10
});

// 自动建表（第一次运行自动创建）
(async () => {
  await db.query(`
    CREATE TABLE IF NOT EXISTS players (
      id INT PRIMARY KEY AUTO_INCREMENT,
      uid VARCHAR(255) UNIQUE NOT NULL,
      nickname VARCHAR(255)
    )
  `);
  await db.query(`CREATE TABLE IF NOT EXISTS errors (id INT PRIMARY KEY AUTO_INCREMENT, data TEXT, time DATETIME)`);
  await db.query(`CREATE TABLE IF NOT EXISTS messages (id INT PRIMARY KEY AUTO_INCREMENT, data TEXT, time DATETIME)`);
  await db.query(`CREATE TABLE IF NOT EXISTS saves (uid VARCHAR(255) PRIMARY KEY, save TEXT, setting TEXT, time DATETIME)`);
  console.log('✅ MySQL 连接成功 & 表已创建');
})();

// ===================== 1. 登录 =====================
app.post('/login', async (req, res) => {
  const { uid } = req.body;
  if (!uid) return res.status(400).json({ code: 400, msg: '缺少uid' });

  const [rows] = await db.query('SELECT * FROM players WHERE uid = ?', [uid]);
  if (rows.length > 0) {
    const user = rows[0];
    return res.json({ nickname: user.nickname, id: user.id });
  }

  const [result] = await db.query('INSERT INTO players (uid, nickname) VALUES (?, ?)', [uid, '玩家']);
  res.json({ nickname: '玩家', id: result.insertId });
});

// ===================== 2. 异常上报 =====================
app.post('/error', async (req, res) => {
  await db.query('INSERT INTO errors (data, time) VALUES (?, NOW())', [JSON.stringify(req.body)]);
  res.json({ code: 200, msg: '异常上报成功' });
});

// ===================== 3. 普通消息 =====================
app.post('/msg', async (req, res) => {
  await db.query('INSERT INTO messages (data, time) VALUES (?, NOW())', [JSON.stringify(req.body)]);
  res.json({ code: 200, msg: '消息上传成功' });
});

// ===================== 4. 上传存档 =====================
app.post('/save', async (req, res) => {
  const { save, setting } = req.body;
  const uid = setting?.uid || setting?.唯一标识 || 'unknown';

  await db.query(`
    REPLACE INTO saves (uid, save, setting, time)
    VALUES (?, ?, ?, NOW())
  `, [uid, JSON.stringify(save), JSON.stringify(setting)]);

  res.json({ code: 200, msg: '存档上传成功' });
});

app.listen(3000, () => {
  console.log('🚀 服务启动成功 端口：3000');
});