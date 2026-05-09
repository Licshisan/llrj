const path = require('path');

try {
  require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
} catch (error) {
  // dotenv is optional at runtime; real deployments can also use process env directly.
}

const env = {
  port: Number(process.env.PORT || 3000),
  databaseUrl: process.env.DATABASE_URL || 'postgres://llrj:100235@localhost:5432/llrj',
  corsOrigin: process.env.CORS_ORIGIN || '*',
  jsonLimit: process.env.JSON_LIMIT || '20mb',
  autoInitDb: process.env.AUTO_INIT_DB !== 'false',
  trustProxy: process.env.TRUST_PROXY === 'true',
};

module.exports = env;
