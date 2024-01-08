'use client';

import { useRouter, usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import AuthState from '@/lib/authState';


export default function AuthGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!AuthState.isLoggedIn() && pathname !== '/auth/signin' && pathname !== '/auth/signup' && pathname !== '/auth/forgot-password' && pathname !== '/auth/reset-password') {
      router.push('/auth/signin');
    }
  }, [pathname]);

  return <>{children}</>;
}
