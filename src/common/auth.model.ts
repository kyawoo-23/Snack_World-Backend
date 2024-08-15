export type AuthRequestDto = {
  email: string;
  password: string;
};

export type AuthJwtPayload = {
  name: string;
  email: string;
  sub: string;
  role?: string;
};
