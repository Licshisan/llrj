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
    "地瓜", "果子", "伤药", "熟肉", "生肉", "啤酒", "小男孩",
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
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ limit: '20mb', extended: true }));
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
        setting TEXT,
        donation INT DEFAULT 0,
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
      
      let setting = null;
      try {
        if (user.setting && user.setting.trim()) {
          setting = JSON.parse(user.setting);
        }
      } catch (e) {
        setting = null;
      }

      return res.json({ 
        code: 200, 
        nickname: user.nickname, 
        id: user.id,
        donation: user.donation || 0,
        setting,
      });
    }

    const nickname = 生成随机昵称();
    const [result] = await db.query('INSERT INTO players (uid, nickname, created_at, last_login) VALUES (?, ?, NOW(), NOW())', [uid, nickname]);
    res.json({ code: 200, nickname, id: result.insertId, donation: 0, setting: null });

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


// 判断版本号 是否 小于 0.7.0
function isBefore070(version) {
  if (!version) return true; // 空版本当作旧版
  
  // 拆分成数字数组
  const v1 = version.split('.').map(Number);
  const v2 = [0, 7, 0];

  // 逐位对比
  for (let i = 0; i < 3; i++) {
    const a = v1[i] || 0;
    const b = v2[i] || 0;
    if (a < b) return true;
    if (a > b) return false;
  }
  return false; // 等于 0.7.0
}

// ===================== 4. 上传存档（已修复所有bug） =====================
app.post('/save', async (req, res) => {
  try {
    const { save, setting } = req.body;
    if (!save || !setting) return res.status(400).json({ code: 400, msg: '缺少存档数据' });

    const user_id = parseInt(setting?.账号?.id) || 0;
    const save_id = save?.存档名称 || 'default';
    const day = save.天数

    if(isBefore070(setting.游戏版本)){
      return res.json({ code: 400, msg: '版本不支持' });
    }

    await db.query(`
      INSERT INTO saves (user_id, save_id, day, save, setting, time)
      VALUES (?, ?, ?, ?, ?, NOW())
    `, [user_id, save_id, day || 0, JSON.stringify(save), JSON.stringify(setting)]);

    if (user_id > 0) {
      await db.query('UPDATE players SET setting = ? WHERE id = ?', [JSON.stringify(setting), user_id]);
    }

    res.json({ code: 200, msg: '存档上传成功，云同步已更新' });

  } catch (err) {
    res.status(500).json({ code: 500, msg: '存档失败', error: err.message });
  }
});

// ===================== 4.5 上传设置 =====================
app.post('/setting', async (req, res) => {
  try {
    const { setting } = req.body;
    if (!setting) return res.status(400).json({ code: 400, msg: '缺少设置数据' });
    const user_id = parseInt(setting?.账号?.id) || 0;
    if (user_id <= 0) return res.status(400).json({ code: 400, msg: '用户不存在' });
    await db.query('UPDATE players SET setting = ? WHERE id = ?', [JSON.stringify(setting), user_id]);
    res.json({ code: 200, msg: '设置上传成功' });
  } catch (err) {
    res.status(500).json({ code: 500, msg: '设置上传失败', error: err.message });
  }
});


// ===================== 5. 获取随机存档 =====================
app.get('/random-save', async (req, res) => {
  try {
    const { day } = req.query;
    if (!day) return res.status(400).json({ code: 400, msg: '缺少天数参数' });

    const [rows] = await db.query(`
      SELECT save, setting, user_id FROM saves 
      WHERE day = ? 
      AND time >= DATE_SUB(NOW(), INTERVAL 7 DAY)
      ORDER BY RAND()
      LIMIT 1
    `, [day]);

    if (rows.length === 0) {
      return res.status(404).json({ code: 404, msg: '未找到符合条件的存档' });
    }

    const randomSave = rows[0];
    const player_id = randomSave?.user_id || 0

    let nickname = "未知玩家"
    let setting = null;
    if (player_id) {
      const [playerRows] = await db.query(
        'SELECT nickname, setting FROM players WHERE id = ? LIMIT 1',
        [player_id]
      );
      if (playerRows.length > 0) {
        nickname = playerRows[0].nickname;
        try {
          if (playerRows[0].setting && playerRows[0].setting.trim()) {
            setting = JSON.parse(playerRows[0].setting);
          }
        } catch (e) {
          setting = null;
        }
      }
    }

    res.json({
      code: 200,
      msg: '获取成功',
      nickname,
      setting,
      save: JSON.parse(randomSave.save),
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


// ===================== 9. 设置赞助金额 =====================
app.post('/admin/set-donation', async (req, res) => {
  try {
    const { user_id, amount } = req.body;
    if (!user_id || amount === undefined) {
      return res.status(400).json({ code: 400, msg: '缺少用户ID或金额' });
    }

    const [result] = await db.query(
      'UPDATE players SET donation = ? WHERE id = ?',
      [parseInt(amount) || 0, user_id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ code: 404, msg: '用户不存在' });
    }

    res.json({ 
      code: 200, 
      msg: `✅ 赞助金额已设置为 ¥${amount}`,
      user_id,
      donation: amount
    });

  } catch (err) {
    res.status(500).json({ code: 500, msg: '设置失败', error: err.message });
  }
});

// ===================== 启动服务 =====================
app.listen(3000, () => {
  console.log('🚀 服务启动成功 端口：3000');
});