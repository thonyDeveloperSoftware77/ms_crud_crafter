import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { CareersModel } from "./careers";

@Injectable()
export class CareersService {
  private supabaseClient;

  constructor(private readonly supabaseService: SupabaseService) {
    this.supabaseClient = supabaseService.getClient();
  }

  async getAllCareers(): Promise<any[]> {
    const { data, error } = await this.supabaseClient
      .from('careers')
      .select(`
        *,
        faculties:faculty_id (
          id,
          name
        )
      `);

    if (error) {
      throw error;
    }

    return data;
  }

  async createCareer(career: CareersModel): Promise<CareersModel> {
    const { data, error } = await this.supabaseClient
      .from('careers')
      .insert([career])
      .select();


    if (error) {
      throw error;
    }

    return data[0] as CareersModel;
  }

  async updateCareer(id: number, career: Partial<CareersModel>): Promise<CareersModel> {
    const { data, error } = await this.supabaseClient
      .from('careers')
      .update(career)
      .eq('id', id)
      .select()

    if (error) {
      throw error;
    }

    return data[0] as CareersModel;
  }

  async deleteCareer(id: number): Promise<void> {
    const { error } = await this.supabaseClient
      .from('careers')
      .delete()
      .eq('id', id)
      .select();

    if (error) {
      throw error;
    }
  }
}
