import { Module } from '@nestjs/common';
import { SkillsController } from './skills.controller';
import { SkillsService } from './skills.service';
import { ConfigModule } from "@nestjs/config";
import { SupabaseService } from "../supabase/supabase.service";

@Module({
  imports: [ConfigModule],
  controllers: [SkillsController],
  providers: [SupabaseService, SkillsService]
})
export class SkillsModule {}
