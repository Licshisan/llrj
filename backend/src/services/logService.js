const pool = require('../db/pool');

async function createErrorReport(data) {
  const { player_id, user_id, name, line, msg, stack, setting, ...payload } = data || {};
  const playerId = Number.parseInt(player_id ?? user_id, 10) || null;
  const lineNumber = Number.parseInt(line, 10) || null;

  const { rows } = await pool.query(
    `INSERT INTO errors (player_id, name, line, msg, stack, setting, payload)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING id, created_at`,
    [
      playerId,
      name || null,
      lineNumber,
      msg || null,
      stack || null,
      setting === undefined ? null : JSON.stringify(setting),
      JSON.stringify(payload),
    ],
  );
  return rows[0];
}

async function createMessage(msg) {
  const { rows } = await pool.query(
    `INSERT INTO messages (msg) VALUES ($1) RETURNING id, created_at`,
    [JSON.stringify(msg || {})],
  );
  return rows[0];
}

module.exports = {
  createErrorReport,
  createMessage,
};
