import { Body, Controller, Get, Post, Put } from "@nestjs/common";
import { SkillsService } from "./skills.service";

@Controller('skills')
export class SkillsController {
  constructor(private readonly  skillsService: SkillsService) {}

  @Get()
  async getAllSkills() {
    return this.skillsService.getAllSkills();
  }

  @Post()
  async createSkill(
    @Body() name: string
  ) {
    return this.skillsService.createSkill(
      name
    );
  }

  @Put()
  async updateSkill(
    @Body() id: number,
    @Body() name: string
  ) {
    return this.skillsService.updateSkill(
      id,
      name
    );
  }
}



