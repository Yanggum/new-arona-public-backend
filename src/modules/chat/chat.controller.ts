import { Body, Controller, Post, Request } from '@nestjs/common';
import { CreateCharChatDto } from '../../dto';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('load_students')
  async chatLoadStudentPost(): Promise<any> {
    return this.chatService.chatLoadStudentPost();
  }

  @Post()
  async chatPost(
    @Body() req: CreateCharChatDto,
    @Request() request: Request,
  ): Promise<any> {
    return this.chatService.chatPost(req, request);
  }
}
