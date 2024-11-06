import clubPetLogo from "../../assets/pet.png";
import SeletorUsuario from "../../components/SeletorUsuario";
import InputNome from "../../components/InputNome";
import InputCpf from "../../components/InputCpf";
import InputTelefone from "../../components/InputTelefone";
import InputEmail from "../../components/InputEmail";
import InputSenha from "../../components/InputSenha";
import InputConfirmarSenha from "../../components/InputConfirmarSenha";

const Register = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex items-center justify-center gap-3">
            <img alt="ClubPet Logo" src={clubPetLogo} className="h-10 w-auto" />
            <p className="text-2xl font-bold">ClubPet</p>
          </div>
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Faça seu registro
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <SeletorUsuario />
            <InputNome />
            <InputCpf />
            <InputTelefone />
            <InputEmail />
            <InputSenha />
            <InputConfirmarSenha />
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Avançar
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
