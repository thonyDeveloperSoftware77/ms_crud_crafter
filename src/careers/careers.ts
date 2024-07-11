import { FacultiesModel } from "../faculties/faculties.model";

export interface CareersModel {
  id?: number;
  name: string;
  description: string;
  semesters: number;
  credits: number;
  faculty_id: number;
  faculties?: FacultiesModel; // Añadido para la relación
}
