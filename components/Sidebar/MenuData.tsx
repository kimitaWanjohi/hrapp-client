import React from "react";
import { MdDashboard } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";


export type MenuItem = {
  id: string;
  name: string;
  path: string;
  icon?: React.ReactNode;
  hasChildren: boolean;
  children?: ChildMenuItem[];
};

export type ChildMenuItem = {
  parent: string;
  id: string;
  name: string;
  path: string;
  hasChildren: boolean;
};

const MenuData = () :MenuItem[] => ([
  {
    id: "home",
    name: "Home",
    path: "/",
    icon: <MdDashboard className={"text-2xl"} />,
    hasChildren: false,
  },
  {
    id: "employees",
    name: "Employees",
    path: "/employees/list",
    icon: <IoIosPeople className={"text-2xl"} />,
    hasChildren: true,
    children: [
      {
        parent: "employees",
        id: "employees-list",
        name: "Employees List",
        path: "/employees/list",
        hasChildren: false,
      },
      {
        parent: "employees",
        id: "employees-create",
        name: "Create Employee",
        path: "/employees/create",
        hasChildren: false,
      }
    ]
  }
]);

export default MenuData;