// src/faculties/faculties.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SupabaseService } from '../supabase/supabase.service';
import { FacultiesService } from './faculties.service';
import { FacultiesController } from './faculties.controller';

@Module({
  imports: [ConfigModule],
  providers: [SupabaseService, FacultiesService],
  controllers: [FacultiesController],
})
export class FacultiesModule {}
