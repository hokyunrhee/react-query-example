import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const global = globalThis as any;
  global.prisma = global.prisma || new PrismaClient();
  prisma = global.prisma;
}

export default prisma;
