import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsersCareersService } from './users-careers.service';
import { UsersCareersModel } from './users-careers.model';

@Controller('users-careers')
export class UsersCareersController {
  constructor(private readonly usersCareersService: UsersCareersService) {}

  @Get()
  async getAllUsersCareers(): Promise<any[]> {
    return this.usersCareersService.getAllUsersCareers();
  }

  @Get('/:user_id')
  async getUserCareersByUserId(
    @Param('user_id') user_id: string): Promise<any[]> {
    return this.usersCareersService.getUserCareersByUserId(user_id);
  }

  @Post()
  async createUserCareer(@Body() userCareer: UsersCareersModel): Promise<UsersCareersModel> {

    return this.usersCareersService.createUserCareer(userCareer);
  }

  @Put()
  async updateUserCareer(
    @Body('user_id') user_id: string,
    @Body('career_id') career_id: number,
    @Body('status') userCareer: Partial<UsersCareersModel>
  ): Promise<UsersCareersModel> {
    console.log("user_id", user_id)
    console.log("career_id", career_id)
    console.log("userCareer", userCareer)
    return this.usersCareersService.updateUserCareer(user_id, career_id, userCareer);
  }

  @Delete()
  async deleteUserCareer(
    @Body('user_id') user_id: string,
    @Body('career_id') career_id: number
  ): Promise<void> {
    return this.usersCareersService.deleteUserCareer(user_id, career_id);
  }
}
