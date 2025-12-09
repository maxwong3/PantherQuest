const pgp = require('pg-promise')();

const url = process.env.DATABASE_URL;
const retryDelay = 2000;
const maxAttempts = 30;

if (!url) {
  console.error('DATABASE_URL not set');
  process.exit(1);
}

let attempt = 0;

async function check() {
  attempt++;
  try {
    const db = pgp(url);
    await db.one('SELECT 1');
    console.log('Database is ready');
    process.exit(0);
  } catch (err) {
    console.log(`Database not ready (attempt ${attempt}/${maxAttempts}): ${err.message}`);
    if (attempt >= maxAttempts) {
      console.error('Max attempts reached, exiting');
      process.exit(1);
    }
    setTimeout(check, retryDelay);
  }
}

check();
