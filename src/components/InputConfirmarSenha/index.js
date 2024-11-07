import { useState } from "react";

const InputConfirmarSenha = (props) => {
  const [mensagemErro, setMensagemErro] = useState("");

  const validarSegundaSenha = (segundaSenha) => {
    if (segundaSenha.length === 0) {
      setMensagemErro("O campo é obrigatório");
    } else if (props.senha !== segundaSenha) {
      setMensagemErro("As senhas não são iguais");
    }

    return props.senha === segundaSenha;
  };

  return (
    <div>
      <label
        htmlFor="confirmarSenha"
        className="block text-sm/6 font-medium text-gray-900 text-left"
      >
        Confirme sua senha
      </label>
      <div className="mt-2">
        <input
          id="confirmarSenha"
          name="confirmarSenha"
          type="password"
          placeholder="Senha"
          required
          onBlur={(event) => {
            props.setSegundaSenha(event.target.value);
            props.setSegundaSenhaValida(
              validarSegundaSenha(event.target.value)
            );
          }}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
        />
      </div>
      {props.segundaSenhaValida === false ? (
        <p className="text-left font-bold text-sm text-red-500">
          {mensagemErro}
        </p>
      ) : null}
    </div>
  );
};

export default InputConfirmarSenha;
