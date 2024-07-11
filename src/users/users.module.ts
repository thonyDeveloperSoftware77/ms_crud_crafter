import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { ConfigModule } from "@nestjs/config";
import { SupabaseService } from "../supabase/supabase.service";

@Module({
  imports: [ConfigModule],
  controllers: [UsersController],
  providers: [SupabaseService,UsersService]
})
export class UsersModule {}
