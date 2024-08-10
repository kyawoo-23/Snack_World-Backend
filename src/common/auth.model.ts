export type AuthRequestDto = {
  email: string;
  password: string;
};

export type AuthJwtPayload = {
  email: string;
  sub: string;
  role?: string;
};
