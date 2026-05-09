const fs = require('fs/promises');
const path = require('path');
const pool = require('./pool');

async function initDb() {
  const schemaPath = path.resolve(__dirname, '../../sql/schema.sql');
  const schema = await fs.readFile(schemaPath, 'utf8');
  await pool.query(schema);
}

if (require.main === module) {
  initDb()
    .then(() => {
      console.log('PostgreSQL tables are ready.');
      return pool.end();
    })
    .catch(async (error) => {
      console.error('Failed to initialize database:', error);
      await pool.end();
      process.exit(1);
    });
}

module.exports = initDb;
