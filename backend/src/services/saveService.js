const pool = require('../db/pool');

function getSaveId(save) {
  return save?.save_id || save?.存档名称 || 'default';
}

function getSaveDay(save) {
  const rawDay = save?.day ?? save?.天数 ?? 0;
  const day = Number.parseInt(rawDay, 10);
  return Number.isFinite(day) ? day : 0;
}

async function createSave(playerId, save) {
  const saveId = getSaveId(save);
  const day = getSaveDay(save);
  const { rows } = await pool.query(
    `INSERT INTO saves (player_id, save_id, day, save)
     VALUES ($1, $2, $3, $4)
     RETURNING id, player_id, save_id, day, save, created_at`,
    [playerId, saveId, day, JSON.stringify(save)],
  );
  return rows[0];
}

async function findRandomSave(day) {
  const values = [];
  let where = `created_at >= NOW() - INTERVAL '7 days'`;

  if (day !== undefined && day !== null && day !== '') {
    values.push(Number.parseInt(day, 10));
    where += ` AND day = $${values.length}`;
  }

  const { rows } = await pool.query(
    `SELECT s.id, s.player_id, s.save_id, s.day, s.save, s.created_at, p.nickname, p.setting
     FROM saves s
     JOIN player p ON p.id = s.player_id
     WHERE ${where}
     ORDER BY RANDOM()
     LIMIT 1`,
    values,
  );

  return rows[0] || null;
}

module.exports = {
  createSave,
  findRandomSave,
};
