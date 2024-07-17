// src/faculties/faculties.controller.ts
import { Controller, Get, Post, Body, Put, Delete } from "@nestjs/common";
import { FacultiesService } from './faculties.service';
import { FacultiesModel } from "./faculties.model";

@Controller('faculties')
export class FacultiesController {
  constructor(private readonly facultiesService: FacultiesService) {}

  @Get()
  async getAllFaculties() {
    return this.facultiesService.getAllFaculties();
  }

  @Post()
  async createFaculty (
    @Body() data:FacultiesModel
  ) {
    return this.facultiesService.createFaculty(
      data
    );
  }

  @Put()
  async updateFaculty(
    @Body('id') id: number,
    @Body('name') name: string
  ) {
    return this.facultiesService.updateFaculty(
      id,
      name
    );
  }

  @Delete()
  async deleteFaculty(
    @Body('id') id: number
  ) {
    return this.facultiesService.deleteFaculty(
      id
    );
  }


}
