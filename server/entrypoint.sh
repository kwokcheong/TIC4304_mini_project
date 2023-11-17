#!/bin/bash
# entrypoint.sh

# Wait for the MySQL database to be ready before executing commands
echo "Waiting for the database to be ready..."
while ! nc -z db 3306; do
  sleep 1
done

echo "Database is ready!"

# Execute database migrations
npx sequelize-cli db:migrate

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"
