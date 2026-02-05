import React, { useState } from "react";
import { ArrowLeft, Plus, BookOpen, X, MoreHorizontal  } from "lucide-react";
import "./classroom.css";
import "../../utils/global.css";
import { useNavigate } from "react-router-dom";
import { useGetAllStudents } from "./student/hooks/useGetAllStudents";
import ErrorLoading from "../feedbacks/errorLoading/errorLoading";
import Loading from "../feedbacks/loading/loading";

export default function ClassRoom() {
  const studentsMoc = [
    { name: "Ana Paula" },
    { name: "Lucas Silva" },
    { name: "Marcos Vinícius" }
  ];

  const { students, loading, error } = useGetAllStudents(1);


  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const navigate = useNavigate();

  const openModal = (student) => {
    setSelectedStudent(student);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedStudent(null);
  };


  if (loading) return <Loading />;
  if (error) return  <ErrorLoading />;

  return (
    <div className="classroom">
      {/* Header */}
      <header className="classroom-header">
        <button className="icon-btn">
          <ArrowLeft size={20} onClick={() => navigate("/home")} />
        </button>

        <div className="header-actions">
          <button className="btn-secondary" onClick={() => navigate("/newStudent")}>
            <Plus size={18} />
            Adicionar aluno
          </button>

          <button className="btn-secondary">
            <BookOpen size={18} />
            Regras
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="classroom-main">
        <h1 className="classroom-title">Alunos da turma</h1>

        <div className="students-list">
          {studentsMoc.map((student, index) => (
            <div key={index} className="student-item">
              <span className="student-name">{student.name}</span>

            <div className="student-actions">
              
              <button
                className="student-add student-button"
                onClick={() => openModal(student)}
              >
                <Plus size={17} />
                
              </button>
            
              <button
                className="student-config student-button"

              >
                <MoreHorizontal size={17} />
              </button>
              
              </div>

            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <header className="modal-header">
              <h2>{selectedStudent?.name}</h2>
              <button className="icon-btn" onClick={closeModal}>
                <X size={18} color="black" />
              </button>
            </header>

            <div className="modal-list">
              <ModalRow label="Presença" value="+1" />
              <ModalRow label="Bom comportamento" value="+1" />
              <ModalRow label="Agenda assinada" value="+1" />
              <ModalRow label="Bagunça" value="-1" negative />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* Linha reutilizável */
function ModalRow({ label, value, negative }) {
  return (
    <div className={`modal-row ${negative ? "negative" : ""}`}>
      <span>{label}</span>

      <div className="row-actions">
        <span className="row-value">{value}</span>
        <button>{negative ? "-" : "+"}</button>
      </div>
    </div>
  );
}
