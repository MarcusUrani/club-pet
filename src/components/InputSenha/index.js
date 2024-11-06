import { useState } from "react";

const InputSenha = () => {
  const [senha, setSenha] = useState("");
  const [senhaValida, setSenhaValida] = useState(true);
  const [mensagemErro, setMensagemErro] = useState("");

  const validarSenha = (senha) => {
    const regex =
      /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{7,}$/;

    if (senha.length === 0) {
      setMensagemErro("O campo senha é obrigatório");
    } else if (!regex.test(senha)) {
      setMensagemErro(
        "A senha precisa ter pelo menos 7 caracteres, uma letra maiúscula, um caractere especial e um número"
      );
    }

    return regex.test(senha);
  };

  return (
    <div>
      <label
        htmlFor="senha"
        className="block text-sm/6 font-medium text-gray-900 text-left"
      >
        Crie uma senha
      </label>
      <div className="mt-2">
        <input
          id="senha"
          name="senha"
          type="password"
          placeholder="Senha"
          required
          onBlur={(event) => {
            setSenha(event.target.value);
            setSenhaValida(validarSenha(event.target.value));
          }}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
        />
      </div>
      {senhaValida === false ? (
        <p className="text-left font-bold text-sm text-red-500">
          {mensagemErro}
        </p>
      ) : null}
    </div>
  );
};

export default InputSenha;
