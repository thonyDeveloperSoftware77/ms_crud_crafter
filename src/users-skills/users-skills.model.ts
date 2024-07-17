import { UsersModel } from "../users/users";
import { SkillsModel } from "../skills/skills.model";

export interface UsersSkillsModel {
  user_id: string;
  skill_id: number;
  users?: UsersModel; // Relación con Users
  skills?: SkillsModel; // Relación con Skills
}
