"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
async function main() {
    const admin = await prisma.user.update({
        where: {
            email: 'sarahellenolson@gmail.com',
        },
        data: {
            id: 'user_2ySlVs20tDt0URmxWaRC0EoAfc9',
            role: prisma_1.Role.admin,
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
//# sourceMappingURL=create-admin-user.js.map