// import "./home.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../fireBaseConnections";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(false);
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    if (email !== "" && senha !== "") {
      await createUserWithEmailAndPassword(auth, email, senha)
        .then(() => {
          navigate("/admin", { replace: true });
        })
        .catch((error) => {
          console.log("Erro ao fazer cadastro" + error);
          if (error.code === "auth/email-already-in-use") {
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
      <h1>Cadastre-se</h1>
      {erro ? (
        <span className="erroSpan">Usuário Já Cadastrado!</span>
      ) : (
        <span>Vamos criar sua conta!</span>
      )}

      <form className="form" onSubmit={handleRegister}>
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
        <button type="submit">Cadastrar</button>
      </form>

      <Link className="btn-link" to="/">
        Já possui uma conta? Faça login!
      </Link>
    </div>
  );
};

export default Register;
