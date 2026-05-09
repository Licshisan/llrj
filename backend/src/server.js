const env = require('./config/env');
const pool = require('./db/pool');
const initDb = require('./db/init');
const createApp = require('./app');

async function start() {
  if (env.autoInitDb) {
    await initDb();
  }

  const app = createApp();
  const server = app.listen(env.port, () => {
    console.log(`LLRJ backend listening on port ${env.port}`);
  });

  async function shutdown(signal) {
    console.log(`${signal} received, shutting down...`);
    server.close(async () => {
      await pool.end();
      process.exit(0);
    });
  }

  process.on('SIGINT', () => shutdown('SIGINT'));
  process.on('SIGTERM', () => shutdown('SIGTERM'));
}

start().catch(async (error) => {
  console.error('Failed to start server:', error);
  await pool.end();
  process.exit(1);
});
