import { Controller, Get } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get('/:uid')
  async getUserByUid(uid: string) {
    return this.usersService.getUserByUid(uid);
  }
}
