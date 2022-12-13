/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const User = await prisma.user.upsert({
    where: { username: 'a' },
    update: {},
    create: {
      username: 'a',
    },
  });

  const Shop = await prisma.shop.upsert({
    where: { name: 'b' },
    update: {},
    create: {
      name: 'b',
    },
  });

  console.log({ User, Shop });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
