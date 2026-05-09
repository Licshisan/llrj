const express = require('express');
const cors = require('cors');
const env = require('./config/env');
const routes = require('./routes');

function createApp() {
  const app = express();

  if (env.trustProxy) app.set('trust proxy', 1);

  app.use(cors({ origin: env.corsOrigin === '*' ? true : env.corsOrigin }));
  app.use(express.json({ limit: env.jsonLimit }));
  app.use(express.urlencoded({ limit: env.jsonLimit, extended: true }));

  app.use(routes);

  app.use((req, res) => {
    res.status(404).json({ code: 404, msg: '接口不存在' });
  });

  app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({ code: 500, msg: '服务器错误', error: error.message });
  });

  return app;
}

module.exports = createApp;
