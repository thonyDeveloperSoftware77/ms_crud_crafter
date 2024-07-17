import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { SkillsService } from "./skills.service";
import { SkillsModel } from "./skills.model";

@Controller('skills')
export class SkillsController {
  constructor(private readonly  skillsService: SkillsService) {}

  @Get()
  async getAllSkills() {
    return this.skillsService.getAllSkills();
  }

  @Post()
  async createSkill(
    @Body() data: SkillsModel
  ) {
    return this.skillsService.createSkill(
      data
    );
  }

  @Put()
  async updateSkill(
    @Body('id') id: number,
    @Body('name') name: string
  ) {
    return this.skillsService.updateSkill(
      id,
      name
    );
  }


  @Delete()
  async deleteSkill(
    @Body('id') id: number
  ) {
    return this.skillsService.deleteSkill(
      id
    );
  }
}



