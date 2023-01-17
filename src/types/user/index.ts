export type UserModel = {
  token: string;
};

export type ProfileModel = {
  id: number;
  name: string;
  avatar: string;
};

export const createUser = (json: PureObject): UserModel => ({
  token: json.token,
});

export const createProfile = (json: PureObject): ProfileModel => ({
  name: json.name,
  avatar: json.avatar,
  id: json.id,
});
