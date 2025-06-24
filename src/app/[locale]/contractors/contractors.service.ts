import prisma from '@/app/library/prisma';

import { Contractor } from './contractors.type';

export async function getContractors() {
  return (await prisma.user.findMany({
    where: {
      role: 'CONTRACTOR',
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
  })) as Contractor[];
}
