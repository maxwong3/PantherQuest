#!/bin/sh
set -e

echo "docker-entrypoint.sh: waiting for database..."
node ./scripts/wait-for-db.js

if [ "${SEED_ON_STARTUP}" = "true" ] || [ "${SEED_ON_STARTUP}" = "1" ]; then
  if [ -f ./seed.js ]; then
    echo "docker-entrypoint.sh: running seed.js"
    node seed.js || echo "seed.js exited with error"
  else
    echo "docker-entrypoint.sh: no seed.js found, skipping"
  fi
fi

echo "docker-entrypoint.sh: starting server..."
exec "$@"
