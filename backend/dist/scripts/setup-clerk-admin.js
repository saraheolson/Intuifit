"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clerk_sdk_node_1 = require("@clerk/clerk-sdk-node");
async function setupClerkAdmin() {
    try {
        const users = await clerk_sdk_node_1.clerkClient.users.getUserList({
            emailAddress: ['sarahellenolson@gmail.com']
        });
        if (!users.length) {
            console.error('Admin user not found in Clerk');
            return;
        }
        const adminUser = users[0];
        await clerk_sdk_node_1.clerkClient.users.updateUser(adminUser.id, {
            publicMetadata: {
                role: 'admin'
            }
        });
        console.log('Successfully set admin role in Clerk metadata');
    }
    catch (error) {
        console.error('Error setting up Clerk admin:', error);
    }
}
setupClerkAdmin();
//# sourceMappingURL=setup-clerk-admin.js.map