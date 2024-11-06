import { useState } from "react";

const InputCpf = () => {
  const [cpf, setCpf] = useState("");
  const [cpfValido, setCpfValido] = useState(true);
  const [mensagemErro, setMensagemErro] = useState("");

  const validarCpf = (cpf) => {
    cpf = cpf.replace(/[^\d]+/g, "");

    if (cpf.length === 0) {
      setMensagemErro("O campo CPF é obrigatório");
      return false;
    }

    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
      setMensagemErro("CPF inválido");
      return false;
    }

    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }

    let resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) {
      setMensagemErro("CPF inválido");
      return false;
    }

    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;

    return true;
  };

  return (
    <div>
      <label
        htmlFor="cpf"
        className="block text-sm/6 font-medium text-gray-900 text-left"
      >
        Digite seu CPF
      </label>
      <div className="mt-2">
        <input
          id="cpf"
          name="cpf"
          type="number"
          placeholder="CPF"
          required
          onBlur={(event) => {
            setCpf(event.target.value);
            setCpfValido(validarCpf(event.target.value));
          }}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
        />
      </div>
      {cpfValido === false ? (
        <p className="text-left font-bold text-sm text-red-500">
          {mensagemErro}
        </p>
      ) : null}
    </div>
  );
};

export default InputCpf;
