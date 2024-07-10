// src/faculties/faculties.controller.ts
import { Controller, Get, Post, Body, Put } from "@nestjs/common";
import { FacultiesService } from './faculties.service';

@Controller('faculties')
export class FacultiesController {
  constructor(private readonly facultiesService: FacultiesService) {}

  @Get()
  async getAllFaculties() {
    return this.facultiesService.getAllFaculties();
  }

  @Post()
  async createFaculty (
    @Body() name:string
  ) {
    return this.facultiesService.createFaculty(
      name
    );
  }

  @Put()
  async updateFaculty(
    @Body() id: number,
    @Body() name: string
  ) {
    return this.facultiesService.updateFaculty(
      id,
      name
    );
  }
}
