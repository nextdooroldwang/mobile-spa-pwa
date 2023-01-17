import { userModel } from '@/types';
import fetcher from '@/utils/request';
import { reservedKeys } from '@/utils/storages';
import { useRequest } from 'ahooks';

export const useReuestToLogin = (cb: (res: userModel.UserModel) => void) => {
  const { loading, error, run } = useRequest(
    async () =>
      fetcher({
        uri: '/user/login',
        method: 'POST',
      }),
    {
      debounceWait: 500,
      manual: true,
      onSuccess: (res) => {
        cb(userModel.createUser(res.data));
      },
    },
  );

  if (error) {
    console.log('Login Error', error);
  }

  return {
    loading,
    // data: nullish(data, userModel.createUser(data)),
    run,
  };
};

export const refreshToken = (token: userModel.UserModel['token']) => {
  return fetcher({
    uri: '/user/refresh',
    method: 'POST',
    parameters: { token },
  });
};

export const useReuestToGetProfile = (
  cb: (res: userModel.ProfileModel) => void,
) => {
  const { loading, error, run } = useRequest(
    async () =>
      fetcher({
        uri:
          '/user/profile?token=' +
          (localStorage.getItem(reservedKeys.fmc) ?? ''),
        method: 'GET',
      }),
    {
      debounceWait: 500,
      manual: true,
      onSuccess: (res) => {
        cb(userModel.createProfile(res.data));
      },
    },
  );

  if (error) {
    console.log('Get Profile Error', error);
  }

  return {
    loading,
    run,
  };
};
