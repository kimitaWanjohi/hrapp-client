import { CompanyType } from './company';
import { EmployeeType } from './employee';


interface ProfileType {
  id: number;
  user: UserType;
  avatar: string;
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
