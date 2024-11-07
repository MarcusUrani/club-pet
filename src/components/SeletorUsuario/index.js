const SeletorUsuario = (props) => {
  const handleChange = (e) => {
    props.setOpcaoSelecionada(e.target.value);
  };

  return (
    <div>
      <p className="block text-sm/6 font-medium text-gray-900 text-left mb-1">
        Selecione o tipo de usuário
      </p>
      <div className="flex items-center justify-between">
        <div>
          <label
            className="text-sm/6 font-medium text-gray-900 text-left mb-1 mr-2"
            htmlFor="donoDePet"
          >
            Dono de Pet
          </label>
          <input
            type="radio"
            name="donoDePet"
            value="donoDePet"
            id="donoDePet"
            checked={props.opcaoSelecionada === "donoDePet"}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label
            className="text-sm/6 font-medium text-gray-900 text-left mb-1 mr-2"
            htmlFor="cuidador"
          >
            Cuidador
          </label>
          <input
            type="radio"
            name="cuidador"
            value="cuidador"
            id="cuidador"
            checked={props.opcaoSelecionada === "cuidador"}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label
            className="text-sm/6 font-medium text-gray-900 text-left mb-1 mr-2"
            htmlFor="treinador"
          >
            Treinador
          </label>
          <input
            type="radio"
            name="treinador"
            value="treinador"
            id="treinador"
            checked={props.opcaoSelecionada === "treinador"}
            onChange={handleChange}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default SeletorUsuario;
