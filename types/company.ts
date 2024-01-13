import { UserType } from "./user";
import { EmployeeType } from "./employee";

export interface CompanyType {
  id: number;
  ownerFullName: string;
  owner: UserType;
  name: string;
  numberOfEmployees: number;
  email: string;
  country: string;
  phone: string;
  isDemo: boolean;
  createdAt: Date;
  updatedAt: Date;
  employeeSet: EmployeeType[];
}
