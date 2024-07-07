// src/faculties/faculties.service.ts
import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class FacultiesService {
  private supabaseClient;

  constructor(private readonly supabaseService: SupabaseService) {
    this.supabaseClient = this.supabaseService.getClient();
  }

  async getAllFaculties() {
    const { data, error } = await this.supabaseClient
      .from('faculties')
      .select('*');
    if (error) {
      throw error;
    }
    return data;
  }

  async createFaculty(faculty) {
    const { data, error } = await this.supabaseClient
      .from('faculties')
      .insert([faculty]);
    if (error) {
      throw error;
    }
    return data;
  }
}
