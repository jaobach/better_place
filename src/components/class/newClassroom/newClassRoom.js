import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../newClassroom/newClassroom.css"

export default function NewClassRoom() {
  const navigate = useNavigate();

  return (
    <div className="classroom-new">
      <header className="classroom-new-header">
        <button className="back-button" onClick={() => navigate("/home")}>
          <ArrowLeft size={20} />
        </button>

        <h1>Nova turma</h1>
      </header>

      <main className="classroom-new-main">
        <div className="form-card">
          <div className="form-group">
            <label>Nome da turma</label>
            <input
              type="text"
              placeholder="Ex: 3º Ano B"
            />
          </div>

          <div className="form-group">
            <label>Escola</label>
            <input
              type="text"
              placeholder="Escola"
            />
          </div>

          <button className="newClass-create">
            Criar turma
          </button>
        </div>
      </main>
    </div>
  );
}
