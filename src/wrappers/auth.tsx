import useAuth from '@/hooks/controller/common/useAuth';
import React from 'react';
import { Redirect } from 'umi';

export default (props: { children: React.ReactNode }) => {
  const { isLogin } = useAuth();
  if (isLogin) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/login" />;
  }
};
