import "./App.css";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Registration";
import SecondRegistration from "./pages/SecondRegistration";
import Home from "./pages/Home";

function App() {
  const [nome, setNome] = useState("");
  const [nomeValido, setNomeValido] = useState(true);
  const [cpf, setCpf] = useState("");
  const [cpfValido, setCpfValido] = useState(true);
  const [telefone, setTelefone] = useState("");
  const [telefoneValido, setTelefoneValido] = useState(true);
  const [email, setEmail] = useState("");
  const [emailValido, setEmailValido] = useState(true);
  const [senha, setSenha] = useState("");
  const [senhaValida, setSenhaValida] = useState(true);
  const [segundaSenha, setSegundaSenha] = useState("");
  const [segundaSenhaValida, setSegundaSenhaValida] = useState(true);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("donoDePet");

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Login
          setEmail={setEmail}
          emailValido={emailValido}
          setEmailValido={setEmailValido}
        />
      ),
    },
    { path: "/login", element: <Login email={email} setEmail={setEmail} /> },
    {
      path: "/registro",
      element: (
        <Register
          nome={nome}
          setNome={setNome}
          nomeValido={nomeValido}
          setNomeValido={setNomeValido}
          cpf={cpf}
          setCpf={setCpf}
          cpfValido={cpfValido}
          setCpfValido={setCpfValido}
          telefone={telefone}
          setTelefone={setTelefone}
          telefoneValido={telefoneValido}
          setTelefoneValido={setTelefoneValido}
          email={email}
          setEmail={setEmail}
          emailValido={emailValido}
          setEmailValido={setEmailValido}
          senha={senha}
          setSenha={setSenha}
          senhaValida={senhaValida}
          setSenhaValida={setSenhaValida}
          segundaSenha={segundaSenha}
          setSegundaSenha={setSegundaSenha}
          segundaSenhaValida={segundaSenhaValida}
          setSegundaSenhaValida={setSegundaSenhaValida}
          opcaoSelecionada={opcaoSelecionada}
          setOpcaoSelecionada={setOpcaoSelecionada}
        />
      ),
    },
    {
      path: "/registro_final",
      element: <SecondRegistration />,
    },
    {
      path: "/dashboard",
      element: <Home />,
    },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
