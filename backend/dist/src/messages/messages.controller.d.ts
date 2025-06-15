import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
export declare class MessagesController {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    createMessage(data: CreateMessageDto, req: any): Promise<{
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
        receiverId: string;
        senderId: string;
        sentAt: Date;
    }>;
    getConversations(req: any): Promise<any[]>;
    getConversation(userId: string, req: any): Promise<({
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
        receiverId: string;
        senderId: string;
        sentAt: Date;
    })[]>;
}
