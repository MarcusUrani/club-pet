import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (!isAuthenticated) {
      navigate("/login"); // Redireciona para a home se estiver logado
    }
  }, [navigate]);

  return (
    <div>
      <p>Login bem sucedido</p>
    </div>
  );
};

export default Home;
