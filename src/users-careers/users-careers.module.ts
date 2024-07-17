import { Module } from '@nestjs/common';
import { UsersCareersController } from './users-careers.controller';
import { UsersCareersService } from './users-careers.service';
import { ConfigModule } from "@nestjs/config";
import { SupabaseService } from "../supabase/supabase.service";

@Module({
  imports: [ConfigModule],
  providers: [SupabaseService,UsersCareersService],
  controllers: [UsersCareersController],
})
export class UsersCareersModule {}
