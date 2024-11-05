import clubPetLogo from "../../assets/pet.png";
import InputComponent from "../../components/InputComponent";
import SeletorUsuario from "../../components/SeletorUsuario";

const Register = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="ClubPet Logo"
            src={clubPetLogo}
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Faça seu cadastro
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <SeletorUsuario />
            <InputComponent
              inputId="email"
              inputType="email"
              inputPlaceholder="Email"
              inputText="Digite seu email"
            />

            <div>
              <InputComponent
                inputId="senha"
                inputType="password"
                inputPlaceholder="Senha"
                inputText="Digite sua senha"
              />
            </div>

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
            Já possui cadastro?{" "}
            <a
              href="/"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Faça login aqui
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
