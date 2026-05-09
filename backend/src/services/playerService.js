const pool = require('../db/pool');
const generateNickname = require('../utils/nickname');

const playerColumns = 'id, uid, nickname, created_at, login_at, setting, achivement';

async function findPlayerByUid(uid) {
  const { rows } = await pool.query(`SELECT ${playerColumns} FROM player WHERE uid = $1`, [uid]);
  return rows[0] || null;
}

async function findPlayerById(id) {
  const { rows } = await pool.query(`SELECT ${playerColumns} FROM player WHERE id = $1`, [id]);
  return rows[0] || null;
}

async function login(uid) {
  const existing = await findPlayerByUid(uid);
  if (existing) {
    const { rows } = await pool.query(
      `UPDATE player SET login_at = NOW() WHERE id = $1 RETURNING ${playerColumns}`,
      [existing.id],
    );
    return rows[0];
  }

  const nickname = generateNickname();
  const { rows } = await pool.query(
    `INSERT INTO player (uid, nickname) VALUES ($1, $2) RETURNING ${playerColumns}`,
    [uid, nickname],
  );
  return rows[0];
}

async function updatePlayer(uid, data) {
  const fields = [];
  const values = [];

  if (data.nickname !== undefined) {
    fields.push(`nickname = $${fields.length + 1}`);
    values.push(data.nickname);
  }
  if (data.setting !== undefined) {
    fields.push(`setting = $${fields.length + 1}`);
    values.push(JSON.stringify(data.setting || {}));
  }
  if (data.achivement !== undefined) {
    fields.push(`achivement = $${fields.length + 1}`);
    values.push(JSON.stringify(data.achivement || {}));
  }

  if (fields.length === 0) {
    return findPlayerByUid(uid);
  }

  values.push(uid);
  const { rows } = await pool.query(
    `UPDATE player SET ${fields.join(', ')} WHERE uid = $${values.length} RETURNING ${playerColumns}`,
    values,
  );
  return rows[0] || null;
}

module.exports = {
  findPlayerById,
  findPlayerByUid,
  login,
  updatePlayer,
};
