import { useReuestToGetProfile, useReuestToLogin } from '@/hooks/request/user';
import { userModel } from '@/types';
import { reservedKeys } from '@/utils/storages';
import { useSetState } from 'ahooks';
import { useCallback } from 'react';
import { history } from 'umi';

export default function useAuthModel() {
  const [profileState, setProfileState] = useSetState<
    userModel.ProfileModel & userModel.UserModel
  >({
    id: 0,
    token: localStorage.getItem(reservedKeys.token) || '',
    name: localStorage.getItem(reservedKeys.name) || '',
    avatar: localStorage.getItem(reservedKeys.avatar) || '',
  });

  const handleSignout = useCallback(async () => {
    try {
      setProfileState({
        id: 0,
        token: '',
        name: '',
        avatar: '',
      });
      localStorage.clear();
      history.replace('/login');
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }, [setProfileState]);

  const { run: handleGetProfile } = useReuestToGetProfile(
    (data: userModel.ProfileModel) => {
      setProfileState({
        id: data.id,
        name: data.name,
        avatar: data.avatar,
      });
      localStorage.setItem(reservedKeys.name, data.name);
      localStorage.setItem(reservedKeys.avatar, data.avatar);
    },
  );

  const { loading, run: handleSignin } = useReuestToLogin(
    (data: userModel.UserModel) => {
      if (data !== undefined) {
        setProfileState({
          token: data.token,
        });
        localStorage.setItem(reservedKeys.token, data.token);
        handleGetProfile();
        history.replace('/');
      }
    },
  );

  return {
    loading,
    profile: profileState,
    signin: handleSignin,
    signout: handleSignout,
  };
}
