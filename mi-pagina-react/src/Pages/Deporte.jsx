// src/Pages/Deporte.jsx
import React from 'react';
import '../Estilos/Deporte.css';
import { Link } from 'react-router-dom';

function Deporte() {
  return (
    <div>
      <header className="encabezado">
        <div className="imagenes-fondo">
          <img src="/Imagenes/real-madrid.jpeg" alt="Real Madrid" />
          <img src="/Imagenes/basket.jpeg" alt="Básquet" />
          <img src="/Imagenes/gym.jpeg" alt="Gimnasio" />
          <img src="/Imagenes/psg.jpeg" alt="PSG" />
          <img src="/Imagenes/calistenia.jpeg" alt="Extra" />
        </div>
        <h1 className="titulo-bienvenida">BIENVENIDOS A MI PÁGINA DEPORTIVA</h1>
      </header>

      <nav className="menu-navegacion">
        <ul>
          <li>
            <Link id="boton-inicio" className="primera-hoja" to="/">Inicio</Link>
          </li>
          <li>
            <Link className="formulario" to="/contacto">Contáctame y deja tu comentario</Link>
          </li>
        </ul>
      </nav>

      <section>
        <p className="parafo1">
          Yo, desde muy chico, empecé a hacer deporte. Comencé jugando a la pelota desde que tengo memoria prácticamente. Siempre me ha gustado jugar.
          Durante mi infancia, jugué en un club de mi comuna llamado Martín de Solier, donde gané algunos trofeos a nivel local.
          Más adelante, tuve que dejar el club porque solo tenía categorías hasta sub15.
          Después de eso seguí jugando, pero solo de forma ocasional, ya que por temas de presupuesto no pude entrar a ningún club de renombre, porque había que pagar una mensualidad.
        </p>
      </section>

      <section>
        <p className="parafo2">
          Desde que empecé a jugar básquetbol, aproximadamente a los 16 años, fue porque en mi curso nadie jugaba fútbol, así que tuve que adaptarme para no aburrirme durante los recreos del liceo. Al principio no me gustaba, ya que las reglas me parecían muy absurdas especialmente porque no es un deporte de mucho contacto, y como era nuevo para mí, no tenía un buen nivel y me ganaban con facilidad. Eso me frustraba bastante. Sin embargo, con el tiempo empecé a mejorar y logré alcanzar un buen nivel. Luego de eso, formé un equipo con el que ganamos los campeonatos de básquetbol de 3° y 4° medio que se realizaban en mi liceo, obteniendo así dos medallas.
        </p>
      </section>

      <section className="parafo3">
        <p>
          Y durante el transcurso de tercero medio también empecé a practicar calistenia en mi casa. Sumado a que jugaba básquetbol en el liceo, mi condición física era muy buena. Sin embargo, después de salir del liceo y comenzar a trabajar, tuve que dejar de hacer deporte, ya que no disponía de mucho tiempo para realizar estas actividades.
        </p>
      </section>

      <section className="parafo4">
        <p>
          Durante el transcurso del año pasado, finalmente pude inscribirme en el gimnasio, ya que contaba con más tiempo para asistir de forma constante. Eso sí, tuve que dejar el básquetbol definitivamente, principalmente por temas de tiempo. Sin embargo, ahora tengo una mejor organización para equilibrar los estudios, el trabajo y el gimnasio.
        </p>
      </section>

      <footer>
        <p>© 2025 Jeremías Cancino. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Deporte;
