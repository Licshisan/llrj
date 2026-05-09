const { ok } = require('../utils/http');

async function ranking(req, res) {
  return ok(res, { msg: '排行榜暂未开放', data: [] });
}

module.exports = {
  ranking,
};
