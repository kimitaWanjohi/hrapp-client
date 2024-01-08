import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import SignIn from "@/components/Auth/Signin";


export const metadata: Metadata = {
  title: "Signin Page | Herxel HRMS",
  description: "Signin Page | Herxel HRMS",
  // other metadata
};


const SignInPage: React.FC = () => {
  return (
    <>
      <SignIn />
    </>
  );
};

export default SignInPage;
