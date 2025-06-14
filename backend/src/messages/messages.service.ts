import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessagesService {
  constructor(private prisma: PrismaService) {}

  async createMessage(data: CreateMessageDto, senderId: string) {
    // Verify sender and receiver exist and have a valid relationship
    const sender = await this.prisma.user.findUnique({
      where: { id: senderId },
      include: {
        coach: true,
        client: true,
      },
    });

    const receiver = await this.prisma.user.findUnique({
      where: { id: data.receiverId },
      include: {
        coach: true,
        client: true,
      },
    });

    if (!sender || !receiver) {
      throw new NotFoundException('User not found');
    }

    // Verify the relationship between sender and receiver
    if (sender.role === 'coach' || sender.role === 'team_coach') {
      // If sender is a coach, receiver must be their client
      if (receiver.role !== 'client' || !receiver.client || receiver.client.coachId !== sender.coach?.id) {
        throw new ForbiddenException('You can only message your clients');
      }
    } else if (sender.role === 'client') {
      // If sender is a client, receiver must be their coach
      if (receiver.role !== 'coach' || !receiver.coach || !sender.client || sender.client.coachId !== receiver.coach.id) {
        throw new ForbiddenException('You can only message your coach');
      }
    }

    return this.prisma.message.create({
      data: {
        senderId,
        receiverId: data.receiverId,
        content: data.content,
      },
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            role: true,
          },
        },
        receiver: {
          select: {
            id: true,
            name: true,
            role: true,
          },
        },
      },
    });
  }

  async getConversation(userId: string, otherUserId: string) {
    // Verify both users exist
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        coach: true,
        client: true,
      },
    });

    const otherUser = await this.prisma.user.findUnique({
      where: { id: otherUserId },
      include: {
        coach: true,
        client: true,
      },
    });

    if (!user || !otherUser) {
      throw new NotFoundException('User not found');
    }

    // Verify the relationship between users
    if (user.role === 'coach' || user.role === 'team_coach') {
      if (otherUser.role !== 'client' || !otherUser.client || otherUser.client.coachId !== user.coach?.id) {
        throw new ForbiddenException('You can only view conversations with your clients');
      }
    } else if (user.role === 'client') {
      if (otherUser.role !== 'coach' || !otherUser.coach || !user.client || user.client.coachId !== otherUser.coach.id) {
        throw new ForbiddenException('You can only view conversations with your coach');
      }
    }

    return this.prisma.message.findMany({
      where: {
        OR: [
          { senderId: userId, receiverId: otherUserId },
          { senderId: otherUserId, receiverId: userId },
        ],
      },
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            role: true,
          },
        },
        receiver: {
          select: {
            id: true,
            name: true,
            role: true,
          },
        },
      },
      orderBy: {
        sentAt: 'asc',
      },
    });
  }

  async getConversations(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        coach: true,
        client: true,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Get all messages where the user is either sender or receiver
    const messages = await this.prisma.message.findMany({
      where: {
        OR: [
          { senderId: userId },
          { receiverId: userId },
        ],
      },
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            role: true,
          },
        },
        receiver: {
          select: {
            id: true,
            name: true,
            role: true,
          },
        },
      },
      orderBy: {
        sentAt: 'desc',
      },
    });

    // Group messages by conversation partner
    const conversations = new Map();
    messages.forEach(message => {
      const partnerId = message.senderId === userId ? message.receiverId : message.senderId;
      const partner = message.senderId === userId ? message.receiver : message.sender;
      
      if (!conversations.has(partnerId)) {
        conversations.set(partnerId, {
          partner,
          lastMessage: message,
          unreadCount: 0,
        });
      }
    });

    return Array.from(conversations.values());
  }
} 