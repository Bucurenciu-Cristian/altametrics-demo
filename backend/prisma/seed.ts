import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const password = bcrypt.hashSync('password', 10);
  const user = await prisma.user.create({
    data: {
      email: 'user@example.com',
      password,
    },
  });

  await prisma.invoice.createMany({
    data: [
      {
        vendor_name: 'Vendor 1',
        amount: 100,
        due_date: new Date(),
        user_id: user.id,
        paid: false,
      },
      {
        vendor_name: 'Vendor 2',
        amount: 200,
        due_date: new Date(),
        user_id: user.id,
        paid: true,
      },
    ],
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
