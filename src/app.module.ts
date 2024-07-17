// src/app.module.ts
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ConfigModule } from '@nestjs/config';
import { FacultiesModule } from './faculties/faculties.module';
import { SkillsModule } from './skills/skills.module';
import { UsersModule } from './users/users.module';
import { CareersService } from './careers/careers.service';
import { CareersModule } from './careers/careers.module';
import { UsersCareersModule } from './users-careers/users-careers.module';
import { UsersSkillsService } from './users-skills/users-skills.service';
import { UsersSkillsController } from './users-skills/users-skills.controller';
import { UsersSkillsModule } from './users-skills/users-skills.module';
import { LoggerMiddleware } from "./Logger.middleware";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    FacultiesModule,
    SkillsModule,
    UsersModule,
    CareersModule,
    UsersCareersModule,
    UsersSkillsModule,
  ],
})
export class AppModule implements  NestModule{
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}
