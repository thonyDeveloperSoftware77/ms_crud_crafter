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

  @Put(':id')
  async updateCareer(@Param('id') id: number, @Body() career: Partial<CareersModel>): Promise<CareersModel> {
    return this.careersService.updateCareer(id, career);
  }

  @Delete(':id')
  async deleteCareer(@Param('id') id: number): Promise<void> {
    return this.careersService.deleteCareer(id);
  }
}
