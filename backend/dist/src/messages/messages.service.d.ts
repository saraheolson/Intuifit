import { PrismaService } from '../prisma/prisma.service';
import { CreateMessageDto } from './dto/create-message.dto';
export declare class MessagesService {
    private prisma;
    constructor(prisma: PrismaService);
    createMessage(data: CreateMessageDto, senderId: string): Promise<{
        receiver: {
            id: string;
            name: string;
            role: import(".prisma/client").$Enums.Role;
        };
        sender: {
            id: string;
            name: string;
            role: import(".prisma/client").$Enums.Role;
        };
    } & {
        id: string;
        content: string;
        senderId: string;
        receiverId: string;
        sentAt: Date;
    }>;
    getConversation(userId: string, otherUserId: string): Promise<({
        receiver: {
            id: string;
            name: string;
            role: import(".prisma/client").$Enums.Role;
        };
        sender: {
            id: string;
            name: string;
            role: import(".prisma/client").$Enums.Role;
        };
    } & {
        id: string;
        content: string;
        senderId: string;
        receiverId: string;
        sentAt: Date;
    })[]>;
    getConversations(userId: string): Promise<any[]>;
}
