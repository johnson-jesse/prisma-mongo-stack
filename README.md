# Prisma MongoDB Prototype Stack

## Prerequisites

1) Project requires [Docker](https://docs.docker.com/engine/install/) to be installed.
2) [Update your hosts file](#updating-your-hosts-file) to make it work on Windows, macOS, or Linux.

## Tools (optional)
1) [MongoDB Compass](https://www.mongodb.com/docs/compass/install/) For easy UI database access
2) [Mongodb](https://www.mongodb.com/docs/mongodb-shell/install/) For easy shell database access

## Get Started DB
Create a `.env` file based on `.env.example.md` and update the user name and password accordingly. Then run:
```sh
npm run db:standup
```

## Get Started UI

### MongoDB Compass connection string
Replace user and password. Confirm replicaSet match docker-compose

```sh
mongodb://{user}:{password}@127.0.0.1:27017,127.0.0.1:27018,127.0.0.1:27019/?replicaSet=rs0&authSource=admin
```

## Updating Your Hosts File

To resolve custom hostnames like `mongo1`, `mongo2`, and `mongo3` to `localhost`, you can update your system's hosts file.


### 🪟 Windows

1. Open Notepad as Administrator.
2. Open the file: `C:\Windows\System32\drivers\etc\hosts`
3. Add the following lines:
```sh
127.0.0.1 mongo1
127.0.0.1 mongo2
127.0.0.1 mongo3
```

### 🍎 macOS

1. Open Terminal.
2. Run: `sudo nano /etc/hosts`
3. Add the following lines:
```sh
127.0.0.1 mongo1
127.0.0.1 mongo2
127.0.0.1 mongo3
```
4. Save (`Ctrl + O`, `Enter`) and exit (`Ctrl + X`).

### 🐧 Linux

1. Open Terminal.
2. Run: `sudo nano /etc/hosts`
3. Add the following lines:
```sh
127.0.0.1 mongo1
127.0.0.1 mongo2
127.0.0.1 mongo3
```
4. Save and exit the editor.

> ✅ These changes let you connect to your local MongoDB containers by name (e.g., `mongo1:27017`) instead of by IP.