import { Injectable } from '@nestjs/common';
import { SupabaseService } from "../supabase/supabase.service";

@Injectable()
export class UsersService {
  private supabaseClient;

  constructor(private readonly supabaseService: SupabaseService) {
    this.supabaseClient = supabaseService.getClient();
  }

  async getAllUsers() {
    const { data, error } = await this.supabaseClient
      .from('users')
      .select('*');

    if (error) {
      throw error;
    }

    // Filtrar usuarios con rol 'admin'
    const filteredData = data.filter(user => user.role !== 'admin');

    return filteredData;
  }


  async getUserByUid(uid: string) {
    const { data, error } = await this.supabaseClient
      .from('users')
      .select('*')
      .eq('uid', uid);

    if (error) {
      throw error;
    }

    return data[0];
  }

}
