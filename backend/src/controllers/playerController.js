const { fail, ok } = require('../utils/http');
const playerService = require('../services/playerService');

function serializePlayer(player) {
  return {
    id: Number(player.id),
    uid: player.uid,
    nickname: player.nickname,
    created_at: player.created_at,
    login_at: player.login_at,
    setting: player.setting || {},
    achivement: player.achivement || {},
  };
}

async function login(req, res) {
  const { uid } = req.body || {};
  if (!uid) return fail(res, 400, '缺少uid');

  const player = await playerService.login(String(uid));
  return ok(res, {
    msg: '登录成功',
    ...serializePlayer(player),
  });
}

async function updatePlayer(req, res) {
  const { uid, nickname, setting, achivement } = req.body || {};
  if (!uid) return fail(res, 400, '缺少uid');
  if (nickname !== undefined && String(nickname).length > 50) {
    return fail(res, 400, '昵称不能超过50个字符');
  }

  const player = await playerService.updatePlayer(String(uid), {
    nickname: nickname === undefined ? undefined : String(nickname),
    setting,
    achivement,
  });

  if (!player) return fail(res, 404, '用户不存在');
  return ok(res, { msg: '玩家数据上传成功', ...serializePlayer(player) });
}

async function updateNickname(req, res) {
  const { uid, nickname } = req.body || {};
  if (!uid || !nickname) return fail(res, 400, '缺少用户标识或昵称');
  if (String(nickname).length > 50) return fail(res, 400, '昵称不能超过50个字符');

  const player = await playerService.updatePlayer(String(uid), { nickname: String(nickname) });
  if (!player) return fail(res, 404, '用户不存在');
  return ok(res, { msg: '昵称修改成功', nickname: player.nickname });
}

async function updateSetting(req, res) {
  const { uid, setting } = req.body || {};
  const playerId = Number.parseInt(setting?.账号?.id, 10);

  if (!setting) return fail(res, 400, '缺少设置数据');

  let player = null;
  if (uid) {
    player = await playerService.updatePlayer(String(uid), { setting });
  } else if (Number.isFinite(playerId) && playerId > 0) {
    const existing = await playerService.findPlayerById(playerId);
    if (existing) {
      player = await playerService.updatePlayer(existing.uid, { setting });
    }
  }

  if (!player) return fail(res, 404, '用户不存在');
  return ok(res, { msg: '设置上传成功', setting: player.setting || {} });
}

module.exports = {
  login,
  updateNickname,
  updatePlayer,
  updateSetting,
};
