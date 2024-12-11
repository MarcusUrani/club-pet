import clubPetLogo from "../../assets/pet.png";
import SeletorUsuario from "../../components/SeletorUsuario";
import InputCpf from "../../components/InputCpf";
import InputTelefone from "../../components/InputTelefone";
import InputEmail from "../../components/InputEmail";
import InputSenha from "../../components/InputSenha";
import InputConfirmarSenha from "../../components/InputConfirmarSenha";
import InputNome from "../../components/InputNome";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Register = (props) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    if (
      props.nomeValido === true &&
      props.cpfValido === true &&
      props.emailValido === true &&
      props.telefoneValido === true &&
      props.senhaValida === true &&
      props.segundaSenhaValida === true
    ) {
      try {
        const response = await axios.post(
          "https://localhost:7132/api/auth/register",
          {
            username: props.email,
            passwordHash: props.senha,
          }
        );

        if (response.status === 200 || response.status === 201) {
          navigate("/registro_final");
        } else {
          setErrorMessage(
            response.data.message ||
              "Falha no registro. Por favor, tente novamente."
          );
        }
      } catch (error) {
        const errorResponse = error.response;
        setErrorMessage(
          errorResponse?.data?.message ||
            "Ocorreu um erro ao processar sua solicitação."
        );
      }
    } else {
      setErrorMessage("Por favor, preencha todos os campos corretamente.");
      return false;
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
            Faça seu registro
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
            }}
          >
            <SeletorUsuario
              opcaoSelecionada={props.opcaoSelecionada}
              setOpcaoSelecionada={props.setOpcaoSelecionada}
            />
            <InputNome
              setNome={props.setNome}
              nomeValido={props.nomeValido}
              setNomeValido={props.setNomeValido}
            />
            <InputCpf
              setCpf={props.setCpf}
              cpfValido={props.cpfValido}
              setCpfValido={props.setCpfValido}
            />
            <InputTelefone
              setTelefone={props.setTelefone}
              telefoneValido={props.telefoneValido}
              setTelefoneValido={props.setTelefoneValido}
            />
            <InputEmail
              setEmail={props.setEmail}
              emailValido={props.emailValido}
              setEmailValido={props.setEmailValido}
            />
            <InputSenha
              setSenha={props.setSenha}
              senhaValida={props.senhaValida}
              setSenhaValida={props.setSenhaValida}
            />
            <InputConfirmarSenha
              senha={props.senha}
              setSegundaSenha={props.setSegundaSenha}
              segundaSenhaValida={props.segundaSenhaValida}
              setSegundaSenhaValida={props.setSegundaSenhaValida}
            />
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Avançar
              </button>
            </div>
          </form>
          {errorMessage && (
            <p className="mt-4 text-center text-sm text-red-500">
              {errorMessage}
            </p>
          )}

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Já possui cadastro?{" "}
            <Link
              to="/"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Faça login aqui
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
