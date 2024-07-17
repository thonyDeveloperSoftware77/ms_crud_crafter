// src/faculties/faculties.service.ts
import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { FacultiesModel } from "./faculties.model";

@Injectable()
export class FacultiesService {
  private supabaseClient;

  constructor(private readonly supabaseService: SupabaseService) {
    this.supabaseClient = this.supabaseService.getClient();
  }

  async getAllFaculties(): Promise<FacultiesModel[]> {
    const { data, error } = await this.supabaseClient
      .from('faculties')
      .select('*');

    if (error) {
      throw error;
    }


    return data
  }


  async createFaculty(facultyData: FacultiesModel): Promise<FacultiesModel> {

    const { data, error } = await this.supabaseClient
      .from('faculties')
      .insert([facultyData])
      .select();

    if (error) {
      throw error;
    }

    //Verifica si se insertó correctamente
    if (!data) {
      throw new Error('No se pudo insertar el registro');
    }

    return data[0]
  }


  async updateFaculty(id: number, name: string): Promise<FacultiesModel> {
    const { data, error } = await this.supabaseClient
      .from('faculties')
      .update({ name: name })
      .eq('id', id)
      .select();

    if (error) {
      throw error;
    }

    // Asegura que los datos estén deserializados correctamente
    return data[0]
  }

  async deleteFaculty(id: number): Promise<FacultiesModel> {
    const { data, error } = await this.supabaseClient
      .from('faculties')
      .delete()
      .eq('id', id)
      .select();

    if (error) {
      throw error;
    }

    return data[0]
  }
}
