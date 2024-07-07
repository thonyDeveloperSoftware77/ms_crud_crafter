// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FacultiesModule } from './faculties/faculties.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    FacultiesModule,
  ],
})
export class AppModule {}
