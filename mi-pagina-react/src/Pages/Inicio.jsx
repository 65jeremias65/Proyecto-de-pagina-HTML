import React, { useState } from 'react';
import '../Estilos/Inicio.css';
import { Link } from 'react-router-dom';

function Inicio() {
  // Estados para mostrar formulario y manejar inputs
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [comentario, setComentario] = useState('');
  const [enviado, setEnviado] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault();
    setEnviado(true);
    // Aquí podrías enviar los datos a tu backend o email
  };

  return (
    <div>
      <header className="fondo_bienvenida_con_img">
        <img
          src="/Imagenes/fondo-bienvenida.jpg"
          alt="Fondo de bienvenida"
          className="imagen-fondo"
        />
        <h1 className="titulo-bienvenida">BIENVENIDOS A MI PRIMERA PÁGINA WEB</h1>
      </header>

      <nav className="menu-navegacion">
        <ul>
          <li>
            <Link id="boton-inicio" className="primera-hoja" to="/">Inicio</Link>
          </li>
          <li>
            <button
              onClick={() => setMostrarFormulario(!mostrarFormulario)}
              className="boton-contacto"
            >
              {mostrarFormulario ? 'Cerrar formulario' : 'Contáctame'}
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

      {mostrarFormulario && (
        <section className="formulario-contacto">
          {!enviado ? (
            <form onSubmit={manejarEnvio}>
              <h2>Formulario de Contacto</h2>
              <input
                type="text"
                placeholder="Tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Tu correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              />
              <textarea
                placeholder="Escribe tu comentario"
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
                required
              />
              <button type="submit">Enviar</button>
            </form>
          ) : (
            <p className="mensaje-gracias">¡Gracias por tu mensaje, {nombre}!</p>
          )}
        </section>
      )}

      <footer>
        <p>© 2025 Jeremías Cancino todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default Inicio;
