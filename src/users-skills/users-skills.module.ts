import { Module } from '@nestjs/common';
import { UsersSkillsController } from './users-skills.controller';
import { UsersSkillsService } from './users-skills.service';
import { SupabaseService } from '../supabase/supabase.service';
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [ConfigModule],
  providers: [UsersSkillsService, SupabaseService],
  controllers: [UsersSkillsController],
})
export class UsersSkillsModule {}
