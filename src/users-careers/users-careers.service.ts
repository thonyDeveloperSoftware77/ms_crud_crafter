import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { UsersCareersModel } from './users-careers.model';

@Injectable()
export class UsersCareersService {
  private supabaseClient;

  constructor(private readonly supabaseService: SupabaseService) {
    this.supabaseClient = supabaseService.getClient();
  }

  async getAllUsersCareers(): Promise<any[]> {
    const { data, error } = await this.supabaseClient
      .from('users_careers')
      .select(`
        *,
        users:user_id (
          uid,
          email,
          first_name,
          last_name,
          role,
          is_active,
          created_at
        ),
        careers:career_id (
          id,
          name,
          description,
          semesters,
          credits,
          faculty_id
        )
      `);

    if (error) {
      throw error;
    }

    return data;
  }

  async getUserCareersByUserId(user_id: string): Promise<any[]> {
    const { data, error } = await this.supabaseClient
      .from('users_careers')
      .select(`
        *,
        users:user_id (
          uid,
          email,
          first_name,
          last_name,
          role,
          is_active,
          created_at
        ),
        careers:career_id (
          id,
          name,
          description,
          semesters,
          credits,
          faculty_id
        )
      `)
      .eq('user_id', user_id);

    if (error) {
      throw error;
    }

    return data;
  }
  async createUserCareer(userCareer: UsersCareersModel): Promise<UsersCareersModel> {
    const { data, error } = await this.supabaseClient
      .from('users_careers')
      .insert([userCareer])
      .select();

    if (error) {
      throw error;
    }

    return data[0] as UsersCareersModel;
  }

  async updateUserCareer(user_id: string, career_id: number, userCareer: Partial<UsersCareersModel>): Promise<UsersCareersModel> {
    console.log("user_id", user_id)
    console.log("career_id", career_id)
    console.log("userCareer", userCareer)
    const { data, error } = await this.supabaseClient
      .from('users_careers')
      .update({ status: userCareer }) // Esto actualiza todas las propiedades en userCareer
      .eq('user_id', user_id)
      .eq('career_id', career_id)
      .select();


    if (error) {
      console.log(error)
      throw error;
    }

    console.log(data)
    return data[0] as UsersCareersModel;
  }

  async deleteUserCareer(user_id: string, career_id: number): Promise<void> {
    const { error } = await this.supabaseClient
      .from('users_careers')
      .delete()
      .match({ user_id, career_id })
      .select();

    if (error) {
      throw error;
    }
  }
}
