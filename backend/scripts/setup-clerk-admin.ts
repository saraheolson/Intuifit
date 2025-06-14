import { clerkClient } from '@clerk/clerk-sdk-node';

async function setupClerkAdmin() {
  try {
    // Get the admin user by email
    const users = await clerkClient.users.getUserList({
      emailAddress: ['sarahellenolson@gmail.com']
    });

    if (!users.length) {
      console.error('Admin user not found in Clerk');
      return;
    }

    const adminUser = users[0];

    // Update the user's public metadata to include the admin role
    await clerkClient.users.updateUser(adminUser.id, {
      publicMetadata: {
        role: 'admin'
      }
    });

    console.log('Successfully set admin role in Clerk metadata');
  } catch (error) {
    console.error('Error setting up Clerk admin:', error);
  }
}

setupClerkAdmin(); 