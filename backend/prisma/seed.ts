import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const password1 = bcrypt.hashSync('password', 10);
  const password2 = bcrypt.hashSync('password', 10);
  const password3 = bcrypt.hashSync('password', 10);
  
  const user1 = await prisma.user.create({
    data: {
      email: 'user@example.com',
      password: password1,
    },
  });
  
  const user2 = await prisma.user.create({
    data: {
      email: 'user2@example.com',
      password: password2,
    },
  });
  
  const user3 = await prisma.user.create({
    data: {
      email: 'user3@example.com',
      password: password3,
    },
  });
  
  await prisma.invoice.createMany({
    data: [
      { vendor_name: 'Vendor 1', amount: 100, description: "Rental" , due_date: new Date(), user_id: user1.id, paid: false },
      { vendor_name: 'Vendor 2', amount: 200, description: "Rental", due_date: new Date(), user_id: user1.id, paid: true },
      { vendor_name: 'Vendor 3', amount: 300, description: "Rental", due_date: new Date(), user_id: user1.id, paid: false },
      { vendor_name: 'Vendor 4', amount: 400, description: "Rental", due_date: new Date(), user_id: user2.id, paid: true },
      { vendor_name: 'Vendor 5', amount: 500, description: "Rental", due_date: new Date(), user_id: user2.id, paid: false },
      { vendor_name: 'Vendor 6', amount: 600, description: "Rental", due_date: new Date(), user_id: user2.id, paid: true },
      { vendor_name: 'Vendor 7', amount: 700, description: "Rental", due_date: new Date(), user_id: user3.id, paid: false },
      { vendor_name: 'Vendor 8', amount: 800, description: "Rental", due_date: new Date(), user_id: user3.id, paid: true },
      { vendor_name: 'Vendor 9', amount: 900, description: "Rental", due_date: new Date(), user_id: user3.id, paid: false },
      { vendor_name: 'Vendor 10', amount: 1000, description: "Rental", due_date: new Date(), user_id: user3.id, paid: true },
    ],
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
