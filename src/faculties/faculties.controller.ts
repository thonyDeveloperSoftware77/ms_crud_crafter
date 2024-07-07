// src/faculties/faculties.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { FacultiesService } from './faculties.service';

@Controller('faculties')
export class FacultiesController {
  constructor(private readonly facultiesService: FacultiesService) {}

  @Get()
  async getAllFaculties() {
    return this.facultiesService.getAllFaculties();
  }

  @Post()
  async createFaculty(@Body() faculty) {
    return this.facultiesService.createFaculty(faculty);
  }
}
