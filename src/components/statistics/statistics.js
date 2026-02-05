import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import "./statistics.css";

export default function Statistics() {
  const navigate = useNavigate();

  // 🔥 MOCK (depois vem do back)
  const stats = {
    topStudent: { name: "João Bach - 5o C - CEICA", score: 120 },
    topClass: { name: "2o C - EMU", score: 860 },
    totalPoints: 3240,
    worstClass: { name: "CEICA 4o B", score: 50 },
  };

  const classData = [
    { name: "EMU 2o C", pontos: 860 },
    { name: "CEICA 3o B", pontos: 200 },
    { name: "CEICA 5o A", pontos: 500 },
    { name: "Turma D", pontos: 430 },
    { name: "Turma E", pontos: 720 },
    { name: "Turma F", pontos: 300 }
  ];

  const pieData = [
    { name: "Total Pontos", value: stats.totalPoints },
    { name: "Restante", value: 4000 - stats.totalPoints },
  ];

  const COLORS = ["#5a3fbf", "#e5e7eb"];



const ITEMS_PER_PAGE = 3;
const [page, setPage] = React.useState(0);

const totalPages = Math.ceil(classData.length / ITEMS_PER_PAGE);

const visibleData = classData.slice(
  page * ITEMS_PER_PAGE,
  page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
);

function nextPage() {
  if (page < totalPages - 1) setPage(page + 1);
}

function prevPage() {
  if (page > 0) setPage(page - 1);
}


  return (
    <div className="stats-page">
      <header className="stats-header">
        <button onClick={() => navigate(-1)} className="back-btn">
          <ArrowLeft size={20} />
        </button>
        <h1>Estatísticas</h1>
      </header>

      <main className="stats-container">
        {/* CARDS */}
        <section className="stats-cards">
          <div className="stat-card">
            <h3>🏆 Melhor aluno</h3>
            <p>{stats.topStudent.name}</p>
            <span>{stats.topStudent.score} pts</span>
          </div>

          <div className="stat-card">
            <h3>🥇 Melhor turma</h3>
            <p>{stats.topClass.name}</p>
            <span>{stats.topClass.score} pts</span>
          </div>

          <div className="stat-card">
            <h3>📊 Pontos totais</h3>
            <p className="big">{stats.totalPoints}</p>
          </div>

          <div className="stat-card danger">
            <h3>⚠️ Menor turma</h3>
            <p>{stats.worstClass.name}</p>
            <span>{stats.worstClass.score} pts</span>
          </div>
        </section>

        {/* GRAFICOS */}
        <section className="charts">
          {/* BAR */}
<div className="chart-card">
  <div className="chart-header">
    <h3>Pontuação por turma</h3>

    <div className="chart-nav">
      <button onClick={prevPage} disabled={page === 0}>
        <ChevronLeft size={18} />
      </button>

      <span>{page + 1}/{totalPages}</span>

      <button onClick={nextPage} disabled={page === totalPages - 1}>
        <ChevronRight size={18} />
      </button>
    </div>
  </div>

  <ResponsiveContainer width="100%" height={250}>
    <BarChart data={visibleData}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="pontos" fill="#5a3fbf" radius={[8, 8, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
</div>


          {/* PIE */}
          <div className="chart-card">
            <h3>Pontos gerais</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  innerRadius={60}
                  outerRadius={90}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </section>
      </main>
    </div>
  );
}
