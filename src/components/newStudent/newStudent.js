import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./newStudent.css";
import { useCreateNewStudent } from "./hooks/useCreateStudent";
import { useState } from "react";

export default function NewStudent() {
  const navigate = useNavigate();

  const [newStudent, setNewStudent] = useState({"name":"","age":""})

  const { createStudent, loading, error } = useCreateNewStudent();


  function handleCreate() {
    createStudent({
      name: newStudent.name,
      age: newStudent.age,
      classroom_id: 1,
    });

    navigate(-1)
  }

  return (
    <div className="student-new">
      <header className="student-new-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <ArrowLeft size={20} />
        </button>

        <h1>Novo aluno</h1>
      </header>

      <main className="student-new-main">
        <div className="form-card">
          <div className="form-group">
            <label>Nome</label>
            <input
              type="text"
              placeholder="Ex: João"
                onChange={(e) =>
                setNewStudent({
                  ...newStudent,
                  name: e.target.value,
                })
              }
            />
          </div>


          <div className="form-group">
            <label>Idade</label>
            <input
              type="number"
              placeholder="Ex: 10"
              min="1"
              onChange={(e) =>
                setNewStudent({
                  ...newStudent,
                  age: e.target.value,
                })
              }
            />
          </div>

          <button className="btn-primary" onClick={()=>handleCreate()}>
            Criar aluno
          </button>
        </div>
      </main>
    </div>
  );
}
