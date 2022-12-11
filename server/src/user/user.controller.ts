import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('/user')
  getAll() {
    return 'aa';
  }
}
