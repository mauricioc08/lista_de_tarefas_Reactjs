// import "./home.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleRegister(e) {
    e.preventDefault();

    if (email !== "" && senha !== "") {
      setEmail("");
      setSenha("");
    } else {
      alert("Preencha todos os campos!");
    }
  }

  return (
    <div className="home-container">
      <h1>Cadastre-se</h1>
      <span>Vamos criar sua conta!</span>

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
