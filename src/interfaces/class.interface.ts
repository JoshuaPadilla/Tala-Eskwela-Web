import type { Teacher } from "./teacher.interface";

export interface Class {
  id?: string;
  section: string;
  grade_lvl: number | string;
  createdAt?: Date;
  class_teacher: Teacher;
}
