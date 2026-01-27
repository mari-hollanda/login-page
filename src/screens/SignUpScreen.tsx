import { useState } from "react";
import { Link } from "react-router-dom";
import { apiSignUpService } from "../services/api-sign-up-service";

export default function SignUpScreen() {

  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
   e.preventDefault() //Impede o <form> de recarregar a página quando o botão submit é clicado.

  if (!name || !email || !password) {
    alert("Favor, preencher todos os campos!")
    return
  }

  try {
    await apiSignUpService({
      name,
      email,
      password
    })

    setName("")
    setEmail("")
    setPassword("")

    alert("Cadastro realizado com sucesso!")
    return

  } catch {
    alert("Não foi possível realizar o cadastro.")
    return
  }
  }

  return (
  <div className="min-h-screen flex items-center justify-center bg-(--bg-color) px-4">
    <div
      className="
        relative
        w-full
        max-w-5xl
        bg-(--bg-color)
        rounded-2xl
        shadow-lg
        overflow-hidden
        flex
        flex-col
        md:flex-row
      "
    >
      {/* LADO ESQUERDO */}
      <div className="w-full md:w-1/2 bg-(--primary-color) text-(--text-color) flex flex-col items-center justify-center px-6 py-12 md:px-10">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Seja bem-vindo!
        </h2>

        <p className="text-center mb-10 text-md max-w-sm">
          Para conectar-se conosco por favor crie a sua conta.
        </p>

        <Link
          to="/"
          className="w-36 bg-(--secondary-color) text-(--white-color) py-2 rounded-lg font-semibold hover:bg-(--white-color) hover:text-(--text-color) transition-colors text-center"
        >
          Login
        </Link>
      </div>

      {/* LADO DIREITO */}
      <div className="w-full md:w-1/2 bg-(--white-color) flex flex-col items-center justify-center px-6 py-12 md:px-10">
        <h2 className="text-2xl font-bold mb-6 text-(--text-color)">
          Cadastro
        </h2>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm flex flex-col items-center"
        >
          <input
            type="text"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
            className="w-full mb-4 p-3 border border-(--text-color) rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
          />

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            className="w-full mb-4 p-3 border border-(--text-color) rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
          />

          <input
            type="password"
            minLength={6}
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            className="w-full mb-6 p-3 border border-(--text-color) rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
          />

          <button
            type="submit"
            className="w-36 bg-(--primary-color) text-(--white-color) py-3 rounded-lg font-semibold hover:bg-(--secondary-color) transition-colors"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  </div>
);
}
