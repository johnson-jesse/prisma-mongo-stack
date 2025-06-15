import { readFileSync } from "fs";
import { PrismaClient } from "../../generated/prisma/client";

const users = JSON.parse(readFileSync("./src/prisma/seed.users.json", "utf8"));
const prisma = new PrismaClient();

async function main() {
  for (const user of users) {
    console.log("Users seeded", user);
    await prisma.user.create({ data: user });
  }
  // console.log("Users seeded", prisma);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
