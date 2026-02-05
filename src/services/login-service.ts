import { api } from "./index.ts";

interface ILoginData {
  email: string;
  password: string;
}

interface ISignInResponse {
  token: string;
  user: {
    email: string;
  };
}

export async function apiLoginService(
  data: ILoginData,
): Promise<ISignInResponse> {
  const response = await api.post<ISignInResponse>("/sign-in", data);
  return response.data;
}
