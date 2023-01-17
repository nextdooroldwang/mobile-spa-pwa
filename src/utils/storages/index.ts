export const reservedKeys = {
  token: 'TOKEN',
  fmc: 'FMC_TOKEN',
  team: 'TEAM',
  name: 'NAME',
  avatar: 'AVATAR',
  permissions: 'PERMISSIONS',
};

export const reservedChatKeys = (roomId: string, userId: string) =>
  `CHAT-MESSAGE-${roomId}-${userId}`;
