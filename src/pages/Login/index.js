import { Link, useNavigate } from "react-router-dom";
import clubPetLogo from "../../assets/pet.png";
import { useState, useEffect } from "react";

const Login = (props) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (isAuthenticated) {
      navigate("/dashboard"); // Redireciona para a home se estiver logado
    }
  }, [navigate]);

  const handleLogin = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    try {
      const response = await fetch("https://localhost:7026/api/auth/login", {
        method: "POST",
        cors: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: props.email,
          passwordHash: password,
        }),
      });

      if (response.status === 401) {
        setErrorMessage("Credenciais inválidas");
      } else if (response.status === 200 || response.status === 201) {
        localStorage.setItem("isAuthenticated", true);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Erro no login:", error);
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex items-center justify-center gap-3">
            <img alt="ClubPet Logo" src={clubPetLogo} className="h-10 w-auto" />
            <p className="text-2xl font-bold">ClubPet</p>
          </div>
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Faça login na sua conta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900 text-left"
              >
                Digite seu email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  onBlur={(event) => {
                    props.setEmail(event.target.value);
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Digite sua senha
                </label>
                <div className="text-sm">
                  <Link
                    to="/"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Esqueceu a senha?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Senha"
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            {errorMessage && (
              <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
            )}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Entrar
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Não possui cadastro?{" "}
            <Link
              to="/registro"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Cadastre-se aqui
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
