import { Controller, Get, Post,  Delete, Param, Body } from '@nestjs/common';
import { UsersSkillsService } from './users-skills.service';
import { UsersSkillsModel } from './users-skills.model';

@Controller('users-skills')
export class UsersSkillsController {
  constructor(private readonly usersSkillsService: UsersSkillsService) {}

  @Get()
  async getAllUsersSkills(): Promise<any[]> {
    return this.usersSkillsService.getAllUsersSkills();
  }

  @Get('/:uid')
  async getUserSkillsByUserId(
    @Param('uid') uid: string): Promise<any[]> {
    return this.usersSkillsService.getUserSkillsByUserId(uid);
  }

  @Post()
  async createUserSkill(@Body('userSkill') userSkill: UsersSkillsModel): Promise<UsersSkillsModel> {
    console.log("userSkill", userSkill)
    return this.usersSkillsService.createUserSkill(userSkill);
  }



  @Delete()
  async deleteUserSkill(
    @Body('user_id') user_id: string,
    @Body('skill_id') skill_id: number
  ): Promise<UsersSkillsModel> {
    return this.usersSkillsService.deleteUserSkill(user_id, skill_id);
  }
}
