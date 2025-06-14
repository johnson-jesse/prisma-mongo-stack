#!/bin/sh

echo "Waiting for Mongo to be ready..."

while true; do
  mongosh --host mongo1 --port 27017 -u devuser -p s3cr3tpass --authenticationDatabase admin --eval "db.adminCommand('ping')" --quiet
  if [ $? -eq 0 ]; then
    echo "Mongo is up!"
    break
  fi
  echo "Mongo not ready yet, sleeping 5 seconds..."
  sleep 5
done

echo "Initiating replica set..."

mongosh --host mongo1 --port 27017 -u devuser -p s3cr3tpass --authenticationDatabase admin --eval '
  cfg = {
    _id: "rs0",
    members: [
      { _id: 0, host: "mongo1:27017" },
      { _id: 1, host: "mongo2:27018" },
      { _id: 2, host: "mongo3:27019" }
    ]
  };
  try {
    rs.initiate(cfg);
    print("Replica set initiated successfully");
  } catch(e) {
    print("Replica set initiation failed or already initiated");
  }
'
