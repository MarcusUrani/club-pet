import { useState, useContext } from "react";
import { NomeContext } from "../../context/NomeContext/NomeContext";

const InputNome = () => {
  let { nome, nomeValido } = useContext(NomeContext);
  const [mensagemErro, setMensagemErro] = useState("O nome não é válido");

  const validarNome = (nome) => {
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    if (nome.length === 0) {
      setMensagemErro("O campo nome é obrigatório");
    } else if (!regex.test(nome)) {
      setMensagemErro("O nome informado é inválido");
    }

    console.log(nome);

    return regex.test(nome);
  };

  return (
    <div>
      <label
        htmlFor="nome"
        className="block text-sm/6 font-medium text-gray-900 text-left"
      >
        Digite seu nome
      </label>
      <div className="mt-2">
        <input
          id="nome"
          name="nome"
          type="text"
          placeholder="Nome"
          required
          onBlur={(event) => {
            nome = event.target.value;
            nomeValido = validarNome(event.target.value);
          }}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
        />
      </div>
      {nomeValido === false ? (
        <p className="text-left font-bold text-sm text-red-500">
          {mensagemErro}
        </p>
      ) : null}
    </div>
  );
};

export default InputNome;
