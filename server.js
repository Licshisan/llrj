const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();

app.use(express.json());

// 数据库连接
const db = new sqlite3.Database('./game.db', (err) => {
  if (err) console.error('数据库打开失败:', err.message);
  else console.log('✅ 已连接 SQLite 持久化数据库');
});

// 玩家表：只能一个主键，自增ID + 唯一标识uid
db.run(`CREATE TABLE IF NOT EXISTS players (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    uid TEXT UNIQUE NOT NULL,
    nickname TEXT
)`);

// 异常表
db.run(`CREATE TABLE IF NOT EXISTS errors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    data TEXT,
    time TEXT
)`);

// 消息表
db.run(`CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    data TEXT,
    time TEXT
)`);

// 存档表（增加 uid 绑定玩家，修复覆盖问题）
db.run(`CREATE TABLE IF NOT EXISTS saves (
    uid TEXT PRIMARY KEY,
    save TEXT,
    setting TEXT,
    time TEXT
)`);

app.post('/login', (req, res) => {
  const { uid } = req.body;
  if (!uid) return res.status(400).json({ code: 400, msg: '缺少唯一标识' });

  // 查询是否已有账号
  db.get(`SELECT * FROM players WHERE uid = ?`, [uid], (err, row) => {
    if (row) {
      return res.json({ nickname: row.nickname, id: row.id });
    }

    // 没有就创建
    const nickname = '玩家';
    db.run(`INSERT INTO players (uid, nickname) VALUES (?, ?)`, [uid, nickname], function () {
      res.json({ nickname, id: this.lastID });
    });
  });
});

app.post('/error', (req, res) => {
  const time = new Date().toLocaleString();
  db.run(`INSERT INTO errors (data, time) VALUES (?, ?)`, [JSON.stringify(req.body), time], () => {
    res.json({ code: 200, msg: '异常上报成功' });
  });
});

app.post('/msg', (req, res) => {
  const time = new Date().toLocaleString();
  db.run(`INSERT INTO messages (data, time) VALUES (?, ?)`, [JSON.stringify(req.body), time], () => {
    res.json({ code: 200, msg: '消息上传成功' });
  });
});

app.post('/save', (req, res) => {
  const { save, setting } = req.body;
  const uid = save.存档名称 || '未知存档'
  const time = new Date().toLocaleString();

  db.run(`INSERT OR REPLACE INTO saves (uid, save, setting, time) VALUES (?, ?, ?, ?)`,
    [uid, JSON.stringify(save), JSON.stringify(setting), time], () => {
      res.json({ code: 200, msg: '存档上传成功' });
    });
});

// 启动服务
app.listen(3000, () => {
  console.log('🚀 服务已启动：http://localhost:3000');
});