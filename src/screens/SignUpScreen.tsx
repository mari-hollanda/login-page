import { Link } from "react-router-dom";
import { useState } from "react";
import { apiSignUpService } from "../services/sing-up-service";

export default function SignUpScreen() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleSignUp(event: React.FormEvent) {
    event.preventDefault();

    if (!name || !email || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      await apiSignUpService({ name, email, password });
      alert("Cadastro realizado com sucesso!");
      setEmail("");
      setName("");
      setPassword("");
      return;
    } catch {
      alert("Erro ao realizar o cadastro. Por favor, tente novamente.");
      return;
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
            onSubmit={handleSignUp}
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
              placeholder="Senha"
              minLength={6}
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
