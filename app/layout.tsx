"use client";
import "./globals.css";
import "./data-tables-css.css";
import "./satoshi.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import AuthGuard from "@/components/AuthGuard/AuthGuard";


import Loader from "@/components/common/Loader";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import {StoreProvider} from "@/store/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pathname = usePathname();

  const isAuthPage = pathname === '/auth/signin' || pathname === '/auth/signup' || pathname === '/auth/forgot-password' || pathname === '/auth/reset-password';

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);



  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          {loading ? (
            <Loader />
          ) : (
            <StoreProvider>
              <AuthGuard>
              <div className="flex h-screen overflow-hidden">
                {
                  !isAuthPage &&
                <Sidebar
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                />
                }
              <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                { !isAuthPage &&
                  <Header
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                />}
                <main>
                  <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                    {children}
                  </div>
                </main>
                {/* <!-- ===== Main Content End ===== --> */}
              </div>
              {/* <!-- ===== Content Area End ===== --> */}
            </div>
            </AuthGuard>
            </StoreProvider>
          )}
        </div>
      </body>
    </html>
  );
}
