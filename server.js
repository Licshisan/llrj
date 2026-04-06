function 生成随机昵称() {
  const 形容词列表 = [
    "呆萌", "勇敢", "调皮", "温柔", "疯狂",
    "慵懒", "帅气", "神秘", "暴躁", "可爱",
    "潇洒", "憨厚", "傲娇", "勇猛", "佛系",
    "沙雕", "冷酷", "阳光", "忧郁", "无敌",

    "呆萌", "沙雕", "emo", "纯爱", "鸡你太美",
    "慵懒", "神秘", "暴躁", "傲娇", "佛系",
    "摆烂", "热血", "腹黑", "蠢萌", "猥琐",
    "邪恶", "卑鄙", "风骚", "逗比", "传奇",
    "拼命", "平衡", "懵逼", "划水", "单身",
    "喵喵", "咩咩", "咕咕", "嘎嘎", "嗷呜",
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
    "电锯男", "蒙面人", "流浪者", "萌新", "菜菜", "咸鱼", 
    "地瓜", "果子", "上药", "熟肉", "生肉", "啤酒", "小男孩",
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
        nickname VARCHAR(255),
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        last_login DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    await db.query(`
      CREATE TABLE IF NOT EXISTS errors (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255),
        line INT,
        msg TEXT,
        stack TEXT,
        setting TEXT,
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
        day INT,
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
      await db.query('UPDATE players SET last_login = NOW() WHERE id = ?', [user.id]);
      return res.json({ code: 200, nickname: user.nickname, id: user.id });
    }

    const nickname = 生成随机昵称();
    const [result] = await db.query('INSERT INTO players (uid, nickname, created_at, last_login) VALUES (?, ?, NOW(), NOW())', [uid, nickname]);
    res.json({ code: 200, nickname, id: result.insertId });

  } catch (err) {
    res.status(500).json({ code: 500, msg: '登录失败', error: err.message });
  }
});

// ===================== 2. 异常上报 =====================
app.post('/error', async (req, res) => {
  try {
    const { name, line, msg, stack, setting, ...rest } = req.body;
    await db.query(
      'INSERT INTO errors (name, line, msg, stack, setting, data, time) VALUES (?, ?, ?, ?, ?, ?, NOW())',
      [name || null, line || null, msg || null, stack || null, JSON.stringify(setting) || null, JSON.stringify(rest) || null]
    );
    res.json({ code: 200, msg: '异常上报成功' });
  } catch (err) {
    res.json({ code: 500, msg: '异常上报失败' });
  }
});

// ===================== 2.5 修改昵称 =====================
app.post('/nickname', async (req, res) => {
  try {
    const { uid, nickname } = req.body;
    if (!uid || !nickname) return res.status(400).json({ code: 400, msg: '缺少用户标识或昵称' });
    if (nickname.length > 50) return res.status(400).json({ code: 400, msg: '昵称不能超过50个字符' });

    const [result] = await db.query('UPDATE players SET nickname = ? WHERE uid = ?', [nickname, uid]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ code: 404, msg: '用户不存在' });
    }

    res.json({ code: 200, msg: '昵称修改成功', nickname });
  } catch (err) {
    res.status(500).json({ code: 500, msg: '昵称修改失败', error: err.message });
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
    // ✅ 提取总天数
    const day = (save?.停留天数?.荒野 || 0) + (save?.停留天数?.县城 || 0) + (save?.停留天数?.山脉 || 0) + (save?.停留天数?.省城 || 0);

    await db.query(`
      INSERT INTO saves (user_id, save_id, day, save, setting, time)
      VALUES (?, ?, ?, ?, ?, NOW())
    `, [user_id, save_id, day || 0, JSON.stringify(save), JSON.stringify(setting)]);

    res.json({ code: 200, msg: '存档上传成功' });

  } catch (err) {
    res.status(500).json({ code: 500, msg: '存档失败', error: err.message });
  }
});

// ===================== 5. 获取随机存档 =====================
app.get('/random-save', async (req, res) => {
  try {
    const { day } = req.query;
    if (!day) return res.status(400).json({ code: 400, msg: '缺少天数参数' });

    const [rows] = await db.query(`
      SELECT save, setting FROM saves 
      WHERE day = ? 
      AND time >= DATE_SUB(NOW(), INTERVAL 7 DAY)
      ORDER BY RAND()
      LIMIT 1
    `, [day]);

    if (rows.length === 0) {
      return res.status(404).json({ code: 404, msg: '未找到符合条件的存档' });
    }

    const randomSave = rows[0];
    res.json({
      code: 200,
      msg: '获取成功',
      save: JSON.parse(randomSave.save),
      setting: JSON.parse(randomSave.setting)
    });

  } catch (err) {
    res.status(500).json({ code: 500, msg: '获取存档失败', error: err.message });
  }
});

// ===================== 6. 定时清理过期存档 =====================
async function 清理过期存档() {
  try {
    const [result] = await db.query(`
      DELETE FROM saves 
      WHERE time < DATE_SUB(NOW(), INTERVAL 30 DAY)
    `);
    if (result.affectedRows > 0) {
      console.log(`🧹 已清理 ${result.affectedRows} 个30天以上的过期存档`);
    }
  } catch (err) {
    console.error('❌ 存档清理失败', err.message);
  }
}

// 每天凌晨4点执行（低峰期）
function 调度凌晨4点() {
  const 现在 = new Date();
  const 下次执行 = new Date(现在);
  下次执行.setHours(4, 0, 0, 0);
  if (下次执行 <= 现在) 下次执行.setDate(下次执行.getDate() + 1);
  const 延迟毫秒 = 下次执行.getTime() - 现在.getTime();

  setTimeout(() => {
    清理过期存档();
    setInterval(清理过期存档, 24 * 60 * 60 * 1000);
  }, 延迟毫秒);

  console.log(`⏰ 存档清理任务已调度，下次执行：${下次执行.toLocaleString()}`);
}
调度凌晨4点();


// ===================== 启动服务 =====================
app.listen(3000, () => {
  console.log('🚀 服务启动成功 端口：3000');
});