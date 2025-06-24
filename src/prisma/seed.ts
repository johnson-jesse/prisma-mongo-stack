import { readFileSync } from 'fs';

import { PrismaClient } from '../../generated/prisma/client';
import { hashPassword } from '../app/library/password';

const users = JSON.parse(readFileSync('./src/prisma/seed.users.json', 'utf8'));
const prisma = new PrismaClient();

async function main() {
  // Delete all users first (and cascade if needed)
  await prisma.user.deleteMany();

  for (const user of users) {
    const data = {
      name: user.name,
      email: user.email,
      password: await hashPassword(user.password),
      role: user.role,
      address: {
        street: user.street,
        city: user.city,
        state: user.state,
        zip: user.zip,
      },
    };
    await prisma.user.create({ data });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
