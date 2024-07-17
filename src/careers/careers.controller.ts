import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CareersService } from './careers.service';
import { CareersModel } from "./careers";

@Controller('careers')
export class CareersController {
  constructor(private readonly careersService: CareersService) {}

  @Get()
  async getAllCareers(): Promise<any[]> {
    return this.careersService.getAllCareers();
  }

  @Post()
  async createCareer(@Body() career: CareersModel): Promise<CareersModel> {
    return this.careersService.createCareer(career);
  }

  @Put()
  async updateCareer(
    @Body('id') id: number,
    @Body() career: Partial<CareersModel>): Promise<CareersModel> {
    return this.careersService.updateCareer(id, career);
  }

  @Delete()
  async deleteCareer(@Body('id') id: number): Promise<void> {
    return this.careersService.deleteCareer(id);
  }
}
