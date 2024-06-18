import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Header() {
  return (
    <header className="HeaderContainer">
      <h1>Minha Lista de Tarefas</h1>
      <nav className="Nav">
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
      </nav>
    </header>
  );
}

export default Header;
