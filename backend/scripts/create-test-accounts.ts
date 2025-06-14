import { PrismaClient, Role } from '../generated/prisma';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Create an admin user
  const adminPassword = await hash('outpost-stuffing-external-collided', 10);
  const admin = await prisma.user.create({
    data: {
      email: 'sarahellenolson@gmail.com',
      passwordHash: adminPassword,
      role: Role.admin,
      name: 'Admin User',
      profileInfo: {},
    },
  });

  // // Create a coach user
  // const coachPassword = await hash('coach123', 10);
  // const coach = await prisma.user.create({
  //   data: {
  //     email: 'coach@example.com',
  //     passwordHash: coachPassword,
  //     role: 'coach',
  //     name: 'Coach User',
  //     profileInfo: {},
  //   },
  // });

  // // Create a client user
  // const clientPassword = await hash('client123', 10);
  // const client = await prisma.user.create({
  //   data: {
  //     email: 'client@example.com',
  //     passwordHash: clientPassword,
  //     role: 'client',
  //     name: 'Client User',
  //     profileInfo: {},
  //   },
  // });

  // console.log({ admin, coach, client });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 