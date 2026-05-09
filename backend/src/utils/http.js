function ok(res, data = {}) {
  return res.json({ code: 200, ...data });
}

function fail(res, status, msg, extra = {}) {
  return res.status(status).json({ code: status, msg, ...extra });
}

function asyncHandler(handler) {
  return (req, res, next) => Promise.resolve(handler(req, res, next)).catch(next);
}

module.exports = {
  ok,
  fail,
  asyncHandler,
};
