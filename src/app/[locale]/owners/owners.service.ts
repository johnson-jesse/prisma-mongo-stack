import prisma from '@/app/library/prisma';

import { Owner } from './owners.type';

export async function getOwners() {
  return (await prisma.user.findMany({
    where: {
      role: 'OWNER',
    },
    take: 100,
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      address: true,
      posts: true,
    },
  })) as Owner[];
}
