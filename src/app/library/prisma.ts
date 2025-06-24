import { PrismaClient } from "@/prisma/client"

const prisma = new PrismaClient()

// For development hot reloads, cache the PrismaClient instance globally
const globalForPrisma = global as unknown as { prisma?: PrismaClient }

if (process.env.NODE_ENV !== 'production') {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = prisma
  }
} 

export default globalForPrisma.prisma ?? prisma
