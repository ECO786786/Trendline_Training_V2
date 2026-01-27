import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    const users = await prisma.user.findMany();
  } catch (error) {
    console.error("Error querying database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
