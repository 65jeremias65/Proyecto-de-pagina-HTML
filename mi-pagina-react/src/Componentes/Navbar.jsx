// src/Componentes/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Si deseas usar estilos separados

function Navbar() {
  return (
    <nav className="menu-navegacion">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/deporte">Deporte y gimnasio</Link></li>
        <li><Link to="/lectura">Lectura</Link></li>
        <li><Link to="/videojuegos">Videojuegos</Link></li>
        <li><Link to="/contacto">Contáctame</Link></li> {/* puedes activarlo después */}
      </ul>
    </nav>
  );
}

export default Navbar;
