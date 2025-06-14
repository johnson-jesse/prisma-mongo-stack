#!/bin/sh

PORT="${PORT:-27017}"

exec docker-entrypoint.sh mongod \
  --replSet rs0 \
  --auth \
  --keyFile /etc/mongo-keyfile \
  --bind_ip_all \
  --port "$PORT"
