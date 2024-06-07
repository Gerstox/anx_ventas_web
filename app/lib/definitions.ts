export interface Login {
  username: string;
  password: string;
}

export interface JwtPayload {
  id: string;
  name: string;
  email: string;
  active: boolean;
}

export interface LoginResponse {
    accessToken: string;
}