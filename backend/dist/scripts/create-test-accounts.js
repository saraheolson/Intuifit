"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../generated/prisma");
const bcrypt_1 = require("bcrypt");
const prisma = new prisma_1.PrismaClient();
async function main() {
    const adminPassword = await (0, bcrypt_1.hash)('outpost-stuffing-external-collided', 10);
    const admin = await prisma.user.create({
        data: {
            email: 'sarahellenolson@gmail.com',
            passwordHash: adminPassword,
            role: prisma_1.Role.admin,
            name: 'Admin User',
            profileInfo: {},
        },
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=create-test-accounts.js.map