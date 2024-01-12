import { UserType } from "./user";
import { CompanyType } from "./company";


export enum EmployeesEmployeeStatusChoices {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  SUSPENDED = "SUSPENDED",
  TERMINATED = "TERMINATED",
}


export interface EmployeeType {
  id: number;
  user: UserType;
  company: CompanyType;
  title: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  employeeNumber: string;
  gender: string;
  maritalStatus: string;
  education: string;
  nationalId: string;
  kraPin: string;
  nhifNumber: string;
  nssfNumber: string;
  dateOfBirth: Date;
  ethnicity: string;
  employmentType: string;
  basicSalary: number;
  offDays: string;
  dailyHours: string;
  paymentFrequency: string;
  paymentMethod: string;
  dateOfEmployment: Date;
  department: string;
  jobTitle: string;
  pensionNumber: string;
  phoneNumber: string;
  email: string;
  country: string;
  county: string;
  city: string;
  postalCode: string;
  nextOfKin: string;
  nextOfKinPhoneNumber: string;
  nextOfKinEmail: string;
  nextOfKinRelationship: string;
  bankName: string;
  bankBranch: string;
  bankAccountNumber: string;
  bankAccountName: string;
  status: EmployeesEmployeeStatusChoices;
}


