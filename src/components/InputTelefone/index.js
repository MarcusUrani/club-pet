import { useState } from "react";

const InputTelefone = (props) => {
  const [mensagemErro, setMensagemErro] = useState("");

  const validarTelefone = (telefone) => {
    const regex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
    if (telefone.length === 0) {
      setMensagemErro("O campo Telefone é obrigatório");
    } else if (!regex.test(telefone)) {
      setMensagemErro("O telefone é inválido");
    }

    return regex.test(telefone);
  };

  return (
    <div>
      <label
        htmlFor="telefone"
        className="block text-sm/6 font-medium text-gray-900 text-left"
      >
        Digite seu Telefone
      </label>
      <div className="mt-2">
        <input
          id="telefone"
          name="telefone"
          type="number"
          placeholder="Telefone"
          required
          onBlur={(event) => {
            props.setTelefone(event.target.value);
            props.setTelefoneValido(validarTelefone(event.target.value));
          }}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
        />
      </div>
      {props.telefoneValido === false ? (
        <p className="text-left font-bold text-sm text-red-500">
          {mensagemErro}
        </p>
      ) : null}
    </div>
  );
};

export default InputTelefone;
