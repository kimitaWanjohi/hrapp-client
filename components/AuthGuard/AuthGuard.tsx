'use client';

import React, {useEffect} from 'react';
import {usePathname, useRouter} from 'next/navigation';

import {UserType} from "@/types/user";
import { useDispatch, useSelector } from "@/store/hooks";
import { login, logOut} from "@/store/features/authSlice";

const getToken = () => {
  const token: string = localStorage.getItem('token') || '';
  return token;
};


export default function AuthGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);

  const isAuthPage = pathname.includes('/auth/');

  useEffect(() => {
    async function fetchUser() {
      if(getToken()) {
        dispatch(login({
          user: JSON.parse(localStorage.getItem('user') || '{}') as UserType,
          token: getToken(),
          isLoggedIn: true,
          payload: JSON.parse(localStorage.getItem('payload') || '{}'),
        }));
      } else {
        dispatch(logOut());
      }
    }
    fetchUser().then(r => r);
  }, [dispatch, isLoggedIn]);

  return <>{children}</>;
}
