import React from "react";
import { Search, ArrowRight, Plus, Cog, Sliders } from "lucide-react";
import "./home.css";
import "../../utils/global.css"
import { useNavigate } from "react-router-dom";

export default function Home() {
  const searches = [
    { title: "2o ano B", time: "2 hours ago", tag: "Claurio Abramo" },
    { title: "3o ano C", time: "Yesterday", tag: "Umuarama" },
    { title: "5a ano 4", time: "2 days ago", tag: "Claurio Abramo" }
  ];

  const navigate = useNavigate();

  return (
    <div className="home">
      <header className="home-header">
        <div className="logo">
          <div className="logo-icon">B</div>
          <span>Better place</span>
        </div>

        <div className="header-actions">
          <div className="welcome">
            <span>Bem vinda Maristela!</span>
            <div className="status-dot" />
          </div>
        </div>
      </header>

      <main className="home-main">
        <aside className="cta">
          <div className="cta-card">
            <p>O que faremos?</p>
            <button className="btn-primary" onClick={() => navigate("/newClassRoom")}>
              <Plus size={18} />
              Cadastrar nova turma
            </button>
            <button className="btn-primary">
              <Sliders size={18} />
              Ver estatísticas
            </button>
            <button className="btn-primary">
              <Cog size={18} />
              Configurações
            </button>
          </div>

        </aside>

        <section className="searches">
          <div className="searches-header">
            <div>
              <h1>Turmas</h1>
              <p> Trabalhos em andamento</p>
            </div>
            <span className="counter">{searches.length} items</span>
          </div>

          <div className="searches-list">
            {searches.map((item, index) => (
              <div key={index} className="search-item">
                <div className="search-left">
                  <div className="search-icon">
                    <Search size={18} />
                  </div>
                  <div>
                    <p className="search-title">{item.title}</p>
                    <div className="search-meta">
                      <span>{item.time}</span>
                      <span className="tag">{item.tag}</span>
                    </div>
                  </div>
                </div>
                <ArrowRight className="arrow" />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
