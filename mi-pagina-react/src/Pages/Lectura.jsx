import React from 'react';
import '../Estilos/Lectura.css'; // Mantienes tu estilo propio
import { Link } from 'react-router-dom';

function Lectura() {
  return (
    <div>
      <header className="encabezado-lectura">
        <img src="/imagenes/libreria3.jpeg" alt="Imagen de lectura" className="imagen-lectura" />
        <h1 className="titulo-lectura">MIS LECTURAS DEL 2025</h1>
      </header>

      <nav className="menu-navegacion">
        <ul>
          <li><Link id="boton-inicio" to="/">Inicio</Link></li>
          <li><Link to="/contacto">Contáctame y deja tu comentario</Link></li>
        </ul>
      </nav>

      <main>
        <section className="libro">
          <img src="/imagenes/mundo-feliz.jpeg" alt="Portada libro 1" />
          <p><strong>Un mundo feliz</strong> de Aldous Huxley: Es una novela distópica que representa una sociedad aparentemente perfecta donde la tecnología controla todos o casi todos los aspectos de la vida. Este libro me hizo reflexionar sobre la pérdida de la individualidad, el precio del control social y el consumismo como medio para alcanzar la felicidad.</p>
        </section>

        <section className="libro">
          <img src="/imagenes/viaje-alucinante2.jpeg" alt="Portada libro 2" />
          <p><strong>Viaje alucinante</strong> de Isaac Asimov: Ciencia ficción con enfoque filosófico sobre el conocimiento y la exploración humana. Al principio no me convencía, pero a medida que lo iba leyendo me atrapó por completo.</p>
        </section>

        <section className="libro">
          <img src="/imagenes/1984.jpeg" alt="Portada libro 3" />
          <p><strong>1984</strong>: Hasta ahora, el mejor libro de distopía que he leído. Refleja un gobierno totalitario que controla todos los aspectos de la vida. Invita a pensar sobre la pérdida de privacidad, la manipulación de la historia y el lenguaje como herramienta de dominación.</p>
        </section>

        <section className="libro">
          <img src="/imagenes/rebelion-en-la-granja.jpeg" alt="Portada libro 4" />
          <p><strong>Rebelión en la granja</strong> de George Orwell: Una fábula política que, a través de animales, critica cómo las revoluciones pueden corromperse. Es una metáfora poderosa sobre el poder y la opresión.</p>
        </section>
      </main>

      <footer>
        <p>© 2025 Jeremías Cancino todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default Lectura;
