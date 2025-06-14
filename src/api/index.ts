import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log("About to create a user...", process.env)
  await prisma.user.create({
    data: {
      name: "Rich",
      email: "hello@prisma.com",
      posts: {
        create: {
          title: "My first post",
          body: "Lots of really interesting stuff",
          slug: "my-first-post",
        },
      },
    },
  });

  console.log("User created...")

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });

  console.dir(allUsers, { depth: null });
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
