"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let MessagesService = class MessagesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createMessage(data, senderId) {
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
            throw new common_1.NotFoundException('User not found');
        }
        if (sender.role === 'coach' || sender.role === 'team_coach') {
            if (receiver.role !== 'client' || !receiver.client || receiver.client.coachId !== sender.coach?.id) {
                throw new common_1.ForbiddenException('You can only message your clients');
            }
        }
        else if (sender.role === 'client') {
            if (receiver.role !== 'coach' || !receiver.coach || !sender.client || sender.client.coachId !== receiver.coach.id) {
                throw new common_1.ForbiddenException('You can only message your coach');
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
    async getConversation(userId, otherUserId) {
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
            throw new common_1.NotFoundException('User not found');
        }
        if (user.role === 'coach' || user.role === 'team_coach') {
            if (otherUser.role !== 'client' || !otherUser.client || otherUser.client.coachId !== user.coach?.id) {
                throw new common_1.ForbiddenException('You can only view conversations with your clients');
            }
        }
        else if (user.role === 'client') {
            if (otherUser.role !== 'coach' || !otherUser.coach || !user.client || user.client.coachId !== otherUser.coach.id) {
                throw new common_1.ForbiddenException('You can only view conversations with your coach');
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
    async getConversations(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            include: {
                coach: true,
                client: true,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
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
};
exports.MessagesService = MessagesService;
exports.MessagesService = MessagesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MessagesService);
//# sourceMappingURL=messages.service.js.map