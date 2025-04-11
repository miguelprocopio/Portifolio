import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './paginas/inicio';
import Sobre from './paginas/Sobre';
import Projetos from './paginas/Projetos';
import JogoSenha from './paginas/JogoSenha';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1>Meu Portfólio</h1>

        <nav className="nav">
          <Link to="/"><button>Início</button></Link>
          <Link to="/sobre"><button>Sobre Mim</button></Link>
          <Link to="/projetos"><button>Projetos</button></Link>
          <Link to="/jogo"><button>Jogo Senha</button></Link>
        </nav>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/jogo" element={<JogoSenha />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
