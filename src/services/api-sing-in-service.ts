import { api } from "./index";

interface ISignInInput {
  email: string;
  password: string;
}

interface ISignInOutput {
  token: string;
  user: {
    email: string;
  };
}

export async function apiSignInService(
  data: ISignInInput,
): Promise<ISignInOutput> {
  const response = await api.post("/sign-in", {
    email: data.email,
    password: data.password,
  });

  return response.data;
}
