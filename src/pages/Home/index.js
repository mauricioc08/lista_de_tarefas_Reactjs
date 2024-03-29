import "./home.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../fireBaseConnections";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    if (email !== "" && senha !== "") {
      await signInWithEmailAndPassword(auth, email, senha)
        .then(() => {
          navigate("/admin", { replace: true });
        })
        .catch((error) => {
          if (error.code === "auth/user-not-found") {
            setErro(true);
          } else if (error.code === "auth/wrong-password") {
            setErro(true);
          }
        });
      setEmail("");
      setSenha("");
    } else {
      alert("Preencha todos os campos!");
    }
  }

  return (
    <div className="home-container">
      <h1>Lista de Tarefas</h1>
      {erro ? (
        <span className="erroSpan">Usuário ou Senha Inválidos!</span>
      ) : (
        <span>Gerencie sua agenda de forma fácil.</span>
      )}

      <form className="form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          minLength="6"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Acessar</button>
      </form>

      <Link className="btn-link" to="/register">
        Não possui uma conta? Cadastre-se
      </Link>
    </div>
  );
};

export default Home;
