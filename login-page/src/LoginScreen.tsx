export default function LoginScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-(--bg-color)">
      <div className="relative w-225 h-130 bg-(--bg-color) rounded-2xl shadow-lg overflow-hidden flex">
        <div className="w-1/2 bg-(--primary-color) text-(--text-color) flex flex-col items-center justify-center px-10">
          <h2 className="text-2xl font-bold mb-6">Bem-vindo de volta!</h2>
          <p className="text-center mb-10 text-md">
            Para conectar-se conosco por favor logue com a sua conta.
          </p>
          <button
            type="submit"
            className="w-36 bg-(--secondary-color) text-(--white-color) py-2 rounded-lg font-semibold hover:bg-(--white-color) hover:text-(--text-color) transition-colors">
            Cadastro
          </button>
        </div>
        <div className="w-1/2 bg-(--white-color) flex flex-col items-center justify-center px-10">
          <h2 className="text-2xl font-bold mb-6 text-(--text-color)">Login</h2>
          <form className="w-full flex flex-col items-center">
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-4 p-3 border border-(--text-color) rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary-color) required"
            />
            <input
              type="password"
              placeholder="Senha"
              className="w-full mb-6 p-3 border border-(--text-color) rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary-color) required"
            />
            <button
              type="submit"
              className="w-36 bg-(--primary-color) text-(--white-color) py-3 rounded-lg font-semibold hover:bg-(--secondary-color) transition-colors">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
