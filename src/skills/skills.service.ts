import { Injectable } from '@nestjs/common';
import { SupabaseService } from "../supabase/supabase.service";
import { SkillsModel } from "./skills.model";

@Injectable()
export class SkillsService {
  private supabaseClient;

  constructor(private readonly  supabaseService:SupabaseService) {
    this.supabaseClient = this.supabaseService.getClient();
  }


  async getAllSkills() : Promise<SkillsModel[]> {
    const { data, error } = await this.supabaseClient
      .from('skills')
      .select('*');

    if (error) {
      throw error;
    }

    return data
  }


  async createSkill(skillData: SkillsModel) : Promise<SkillsModel>{

    const { data, error } = await this.supabaseClient
      .from('skills')
      .insert([skillData])
      .select();

    if (error) {
      throw error;
    }

    return data
  }

  async updateSkill(_id: number, _name: string) : Promise<SkillsModel> {
    console.log(_id,_name)

    const { data, error } = await this.supabaseClient
      .from('skills')
      .update({ name: _name })
      .eq('id', _id)
      .select();

    if (error) {
      console.log(error)
      throw error;
    }

    return data;
  }

  async deleteSkill(_id: number) : Promise<SkillsModel> {
    const { data, error } = await this.supabaseClient
      .from('skills')
      .delete()
      .eq('id', _id)
      .select();

    if (error) {
      throw error;
    }

    return data;
  }


}
