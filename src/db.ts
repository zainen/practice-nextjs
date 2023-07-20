import { PrismaClient } from "@prisma/client";

// check not for better option than unsafe typecast of unknown
const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? 
  new PrismaClient({
    log: ["query"]
  })

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma