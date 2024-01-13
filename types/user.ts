import { CompanyType } from './company';
import { EmployeeType } from './employee';


export enum ProfileRoleChoices {
  ADMIN = "ADMIN",
  EMPLOYEE = "EMPLOYEE",
  MANAGER = "MANAGER",
}

interface ProfileType {
  id: number;
  user: UserType;
  avatar: string;
  role: ProfileRoleChoices;
}

export interface UserType {
  id: number;
  lastLogin?: Date;
  isSuperuser: boolean;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  isStaff: boolean;
  isActive: boolean;
  dateJoined: Date;
  profile: ProfileType;
  companies: CompanyType[];
  employee: EmployeeType;
}
