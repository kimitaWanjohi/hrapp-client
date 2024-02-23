import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Table from "@/components/Employees/Table";
import {EmployeesEmployeeStatusChoices, EmployeeType} from "@/types/employee";
import GraphqlClient from "@/lib/client";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Employees Page | Herxel Hrms Dashboard Template",
  description: "This is Employees page for Herxel Hrms",
  // other metadata
};


const getEmployees = async (companyId: number, status: EmployeesEmployeeStatusChoices, limit: number ) => {
  const query = `
  query Employees ($status: EmployeeStatusEnum $companyId: Int $limit: Int ) {
    employees(status: $status companyId: $companyId limit: $limit) {
      id
      firstName
      lastName
      employeeNumber
      nationalId
      employmentType
      basicSalary
      dateOfEmployment
      status
    }
  }`;

  const response = await GraphqlClient(
    query,
    {status, companyId, limit},
    { next: { revalidate: 60 } }
  );

  const employees: EmployeeType = response?.data.data.employees;
  return employees;
};


const EmployeesPage = () => {

  

  return (
    <>
      <Breadcrumb pageName="Employees" />

      <div>
        <Table />
      </div>
    </>
  );
}

export default EmployeesPage;
