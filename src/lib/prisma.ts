// Prisma Client singleton for PostgreSQL
let prismaInstance: any = null;

export async function getPrisma() {
  if (prismaInstance) return prismaInstance;

  try {
    // @ts-ignore
    const { PrismaClient } = await import('@prisma/client');
    prismaInstance = new PrismaClient();
    return prismaInstance;
  } catch (err) {
    return null;
  }
}
