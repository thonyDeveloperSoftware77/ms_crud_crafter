// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FacultiesModule } from './faculties/faculties.module';
import { SkillsModule } from './skills/skills.module';
import { UsersModule } from './users/users.module';
import { CareersService } from './careers/careers.service';
import { CareersModule } from './careers/careers.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    FacultiesModule,
    SkillsModule,
    UsersModule,
    CareersModule,
  ],
  providers: [CareersService],
})
export class AppModule {}
