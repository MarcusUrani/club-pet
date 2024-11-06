import { useState } from "react";
import InputSenha from "../../components/InputSenha";

const InputConfirmarSenha = () => {
  const [segundaSenha, setSegundaSenha] = useState("");
  const [segundaSenhaValida, setSegundaSenhaValida] = useState(true);
  const [mensagemErro, setMensagemErro] = useState("");

  const validarSegundaSenha = (segundaSenha) => {
    if (segundaSenha.length === 0) {
      setMensagemErro("O campo é obrigatório");
    } else if (InputSenha.senha !== segundaSenha) {
      setMensagemErro("As senhas não são iguais");
    }

    console.log(InputSenha);

    return InputSenha.senha === segundaSenha;
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
            setSegundaSenha(event.target.value);
            setSegundaSenhaValida(validarSegundaSenha(event.target.value));
          }}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
        />
      </div>
      {segundaSenhaValida === false ? (
        <p className="text-left font-bold text-sm text-red-500">
          {mensagemErro}
        </p>
      ) : null}
    </div>
  );
};

export default InputConfirmarSenha;
