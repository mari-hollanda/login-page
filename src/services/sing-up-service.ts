import { api } from "./index";

interface ISignUpData {
  name: string;
  email: string;
  password: string;
}

export async function apiSignUpService(data: ISignUpData) {
  await api.post("/sign-up", data);
}
