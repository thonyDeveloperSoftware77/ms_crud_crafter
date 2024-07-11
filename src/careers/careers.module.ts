import { Module } from '@nestjs/common';
import { CareersController } from './careers.controller';
import { ConfigModule } from "@nestjs/config";
import { SupabaseService } from "../supabase/supabase.service";
import { CareersService } from "./careers.service";

@Module({
  imports: [ConfigModule],
  controllers: [CareersController],
  providers: [SupabaseService, CareersService]
})
export class CareersModule {}