import React, { useState } from 'react';
import '../Estilos/Inicio.css';
import { Link } from 'react-router-dom';
import Comentario from './Comentario'; // Asegúrate de ajustar la ruta si está en otra carpeta

function Inicio() {
  const [mostrarComentario, setMostrarComentario] = useState(false);

  return (
    <div>
      <header className="fondo_bienvenida_con_img">
        <h1 className="titulo-bienvenida">BIENVENIDOS A MI PRIMERA PÁGINA WEB</h1>
      </header>

      <nav className="menu-navegacion">
        <ul>
          <li>
            <Link id="boton-inicio" className="primera-hoja" to="/">Inicio</Link>
          </li>
          <li>
            <button
              onClick={() => setMostrarComentario(!mostrarComentario)}
              className="boton-contacto"
            >
              {mostrarComentario ? 'Cerrar formulario' : 'Contáctame'}
            </button>
          </li>
        </ul>
      </nav>

      <section>
        <h2>Mi biografía</h2>
        <p className="mensaje-presentacion">
          Hola, soy Jeremías Cancino. Actualmente estudio y trabajo, y me gusta mantenerme activo yendo al gimnasio regularmente. 
          Disfruto mucho hacer deporte, leer y pasar tiempo con mi mascota que es un gato blanco con negro llamado Tommy. 
          De vez en cuando también juego videojuegos. Me considero una persona carismática, siempre trato de transmitir buena energía 
          y ayudar a que quienes me rodean se sientan bien consigo mismos. Uno de mis sueños es poder comprar mi primer auto, 
          y me gustaría comprarme un Subaru Impreza para poder tunearlo y modificarlo a mi gusto.
        </p>
      </section>

      <section>
        <h3>Mis hobbies</h3>
        <ul>
          <li>
            <Link className="enlace1" to="/deporte" title="enlace a página de deporte y gimnasio">Deporte y gimnasio</Link>
          </li>
          <li>
            <Link className="enlace2" to="/lectura" title="enlace a página lectura">Lectura</Link>
          </li>
          <li>
            <Link className="enlace3" to="/videojuegos" title="enlace a página videojuegos">Videojuegos</Link>
          </li>
        </ul>
      </section>

      {mostrarComentario && <Comentario />}

      <footer>
        <p>© 2025 Jeremías Cancino todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default Inicio;
