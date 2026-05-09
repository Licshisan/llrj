const { fail, ok } = require('../utils/http');
const playerService = require('../services/playerService');
const saveService = require('../services/saveService');

function getPlayerIdFromBody(body) {
  const directId = body?.player_id ?? body?.user_id;
  const settingId = body?.setting?.账号?.id;
  const id = Number.parseInt(directId ?? settingId, 10);
  return Number.isFinite(id) && id > 0 ? id : null;
}

async function uploadSave(req, res) {
  const { save, setting } = req.body || {};
  if (!save) return fail(res, 400, '缺少存档数据');

  const playerId = getPlayerIdFromBody(req.body);
  if (!playerId) return fail(res, 400, '缺少玩家ID');

  const player = await playerService.findPlayerById(playerId);
  if (!player) return fail(res, 404, '用户不存在');

  const saved = await saveService.createSave(player.id, save);
  if (setting !== undefined) {
    await playerService.updatePlayer(player.uid, { setting });
  }

  return ok(res, {
    msg: '存档上传成功',
    id: Number(saved.id),
    save_id: saved.save_id,
    day: saved.day,
  });
}

async function randomSave(req, res) {
  const record = await saveService.findRandomSave(req.query?.day);
  if (!record) return fail(res, 404, '未找到符合条件的存档');

  return ok(res, {
    msg: '获取成功',
    nickname: record.nickname,
    setting: record.setting || {},
    save: record.save,
  });
}

module.exports = {
  randomSave,
  uploadSave,
};
