import "./admin.css";
import React, { useState } from "react";
import { auth } from "../../fireBaseConnections";
import { signOut } from "firebase/auth";

const Admin = () => {
  const [tarefaInput, setTarefaInput] = useState("");

  function handleRegister(e) {
    e.preventDefault();
    alert("clicouuuu");
  }

  async function handleLogout() {
    await signOut(auth);
  }

  return (
    <div className="admin-container">
      <h1>Minhas Tarefas</h1>
      <form className="form" onSubmit={handleRegister}>
        <textarea
          placeholder="Digite sua tarefa..."
          value={tarefaInput}
          onChange={(e) => setTarefaInput(e.target.value)}
        />
        <button className="btn-register" type="submit">
          Registrar tarefa
        </button>
      </form>

      <article className="list">
        <p>
          cbhdscbhsdcbodcnkqcnbnvcqpçojwojddddddddddddddddddddddddddddddddddddddddo
        </p>
        <div>
          <button>Editar</button>
          <button className="btn-delete">Concluir</button>
        </div>
      </article>

      <button className="btn-logout" onClick={handleLogout}>
        Sair
      </button>
    </div>
  );
};

export default Admin;
