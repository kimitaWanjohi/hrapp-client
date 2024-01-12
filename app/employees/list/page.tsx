import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Table from "@/components/Employees/Table";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Employees Page | Herxel Hrms Dashboard Template",
  description: "This is Employees page for Herxel Hrms",
  // other metadata
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
