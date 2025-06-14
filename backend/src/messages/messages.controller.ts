import { Controller, Get, Post, Body, Param, UseGuards, Request } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('messages')
@UseGuards(JwtAuthGuard, RolesGuard)
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  @Roles('coach', 'team_coach', 'client')
  async createMessage(@Body() data: CreateMessageDto, @Request() req) {
    return this.messagesService.createMessage(data, req.user.id);
  }

  @Get('conversations')
  @Roles('coach', 'team_coach', 'client')
  async getConversations(@Request() req) {
    return this.messagesService.getConversations(req.user.id);
  }

  @Get('conversation/:userId')
  @Roles('coach', 'team_coach', 'client')
  async getConversation(@Param('userId') userId: string, @Request() req) {
    return this.messagesService.getConversation(req.user.id, userId);
  }
} 