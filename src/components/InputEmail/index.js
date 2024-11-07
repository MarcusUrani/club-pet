import { useState } from "react";

const InputEmail = (props) => {
  const [mensagemErro, setMensagemErro] = useState("");

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (email.length === 0) {
      setMensagemErro("O campo email é obrigatório");
    } else if (!regex.test(email)) {
      setMensagemErro("O email é inválido");
    }

    return regex.test(email);
  };

  return (
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
            props.setEmailValido(validarEmail(event.target.value));
          }}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
        />
      </div>
      {props.emailValido === false ? (
        <p className="text-left font-bold text-sm text-red-500">
          {mensagemErro}
        </p>
      ) : null}
    </div>
  );
};

export default InputEmail;
