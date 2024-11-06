import { createContext } from "react";

export const NomeContext = createContext();

export const NomeProvider = ({ children }) => {
  let nome = "";
  let nomeValido = true;

  return (
    <NomeContext.Provider value={(nome, nomeValido)}>
      {children}
    </NomeContext.Provider>
  );
};
