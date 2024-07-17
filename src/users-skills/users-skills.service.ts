import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { UsersSkillsModel } from './users-skills.model';

@Injectable()
export class UsersSkillsService {
  private supabaseClient;

  constructor(private readonly supabaseService: SupabaseService) {
    this.supabaseClient = supabaseService.getClient();
  }

  async getAllUsersSkills(): Promise<any[]> {
    const { data, error } = await this.supabaseClient
      .from('users_skills')
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
        skills:skill_id (
          id,
          name
        )
      `);

    if (error) {
      throw error;
    }

    return data;
  }

  async getUserSkillsByUserId(user_id: string): Promise<any[]> {
    const { data, error } = await this.supabaseClient
      .from('users_skills')
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
        skills:skill_id (
          id,
          name
        )
      `)
      .eq('user_id', user_id);

    if (error) {
      throw error;
    }

    return data;
  }



  async createUserSkill(userSkill: UsersSkillsModel): Promise<UsersSkillsModel> {
    console.log(userSkill)
    const { data, error } = await this.supabaseClient
      .from('users_skills')
      .insert([userSkill])
      .select();

    if (error) {
      console.log(error)
      throw error;
    }

    return data[0] as UsersSkillsModel;
  }

  async updateUserSkill(user_id: string, skill_id: number, userSkill: Partial<UsersSkillsModel>): Promise<UsersSkillsModel> {
    const { data, error } = await this.supabaseClient
      .from('users_skills')
      .update(userSkill)
      .match({ user_id, skill_id });

    if (error) {
      throw error;
    }

    return data[0] as UsersSkillsModel;
  }

  async deleteUserSkill(user_id: string, skill_id: number): Promise<UsersSkillsModel> {
    const userSkill = {user_id , skill_id}
    const { error } = await this.supabaseClient
      .from('users_skills')
      .delete()
      .match({ user_id, skill_id })
      .select();

    if (error) {
      throw error;
    }
    return userSkill;

  }
}
