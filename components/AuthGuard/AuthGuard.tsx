'use client';

import React, {useEffect} from 'react';
import {usePathname, useRouter} from 'next/navigation';

import {UserType} from "@/types/user";
import GraphqlClient from "@/lib/client";
import { useDispatch, useSelector } from "@/store/hooks";
import { login, logOut} from "@/store/features/authSlice";

const getToken = () => {
  const token: string = localStorage.getItem('token') || '';
  return token;
};

const getMeQuery = `
query Me {
  me{
    id
    username
    email
    isStaff
    isSuperuser
    dateJoined
    company{
      id
    }
    employee{
      id
    }
    profile{
      avatar
    }
  }
}`

const getLoggedInUser = async (): Promise<UserType> => {
  const res = await GraphqlClient(getMeQuery);
  return res.data.me;
}

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
      if(getToken() && !isLoggedIn) {
        const user = await getLoggedInUser()
        dispatch(login({
          user,
          token: getToken() as string,
          isLoggedIn: true,
          payload: {},
        }))
      } else if (!getToken() && isLoggedIn) {
        dispatch(logOut());
      }
    }
    fetchUser().then(r => r);
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    if (!isLoggedIn && !isAuthPage) {
      router.push('/auth/signin');
    }
  }, [pathname]);
  return <>{children}</>;
}
