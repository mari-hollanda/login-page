import { api } from "./index";

interface ISignUpInput {
  name: string;
  email: string;
  password: string;
}

export async function apiSignUpService(data: ISignUpInput): Promise<void> {
  await api.post("/sign-up", {
    name: data.name,
    email: data.email,
    password: data.password,
  });
}
