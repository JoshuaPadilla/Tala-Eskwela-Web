import type { Roles } from "../enums/role.enum";
import type { Class } from "./class.interface";

export interface Student {
  id: string;
  rfid_tag_uid?: string;
  profileUrl: string | undefined;
  push_token?: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  email: string;
  phone: string;
  grade_lvl: string;
  role: Roles;
  class: Class;
}
