const { ok } = require('../utils/http');
const logService = require('../services/logService');

async function uploadError(req, res) {
  const report = await logService.createErrorReport(req.body);
  return ok(res, { msg: '异常上报成功', id: Number(report.id) });
}

async function uploadMessage(req, res) {
  const message = await logService.createMessage(req.body);
  return ok(res, { msg: '消息上传成功', id: Number(message.id) });
}

module.exports = {
  uploadError,
  uploadMessage,
};
