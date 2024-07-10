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

    return data.map((skill: any) => ({
      ...skill,
      name: JSON.parse(skill.name).name
    })) as SkillsModel[];
  }


  async createSkill(name: string) : Promise<SkillsModel>{
    const skillData: SkillsModel = {
      name: name
    };

    const { data, error } = await this.supabaseClient
      .from('skills')
      .insert([{ name: skillData.name }])
      .select();

    if (error) {
      throw error;
    }

    return {
      ...data[0],
      name: JSON.parse(data[0].name).name
    } as SkillsModel;
  }

  async updateSkill(id: number, name: string) : Promise<SkillsModel> {
    const { data, error } = await this.supabaseClient
      .from('skills')
      .update({ name })
      .eq('id', id)
      .select();

    if (error) {
      throw error;
    }

    return {
      ...data[0],
      name: JSON.parse(data[0].name).name
    } as SkillsModel;
  }


}
