import { PrismaClient, Role } from '../generated/prisma';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Update the existing admin user with the Clerk user ID
  const admin = await prisma.user.update({
    where: {
      email: 'sarahellenolson@gmail.com',
    },
    data: {
      id: 'user_2ySlVs20tDt0URmxWaRC0EoAfc9', // Clerk user ID
      role: Role.admin,
    },
  });

  console.log('Updated admin user:', admin);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 