import React from 'react';
import '../Estilos/Videojuegos.css';
import { Link } from 'react-router-dom';

function Videojuegos() {
  return (
    <div>
      <header>
        <h1>MI TOP DE SAGA DE VIDEOJUEGOS FAVORITOS</h1>
      </header>

      <nav className="menu-navegacion">
        <ul>
          <li><Link className="primera-hoja" to="/">Inicio</Link></li>
          <li><Link className="formulario" to="/contacto">Contáctame y deja tu comentario</Link></li>
        </ul>
      </nav>

      <section className="juego1">
        <h2>1. Saga God of War</h2>
        <p>Para mí es de los mejores juegos del género hack and slash, con una historia tan profunda como épica de un dios griego traicionado por los dioses del Olimpo. Me sigue impresionando que la PS2 pudiera correr casi toda la saga griega.</p>
        <img src="/imagenes/god_of_war.jpeg" alt="God of War" className="imagen-GOW" />
      </section>

      <section className="juego2">
        <h2>2. Saga de Grand Theft Auto</h2>
        <p>La sátira por excelencia del mundo moderno. Esta saga marcó un antes y un después en la industria y en mi vida. Cada entrega refleja aspectos distintos de la sociedad y el poder.</p>
        <img src="/imagenes/gta2.jpeg" alt="GTA" className="imagen-GTA" />
      </section>

      <section className="juego3">
        <h2>3. Saga Resident Evil</h2>
        <p>Desde el clásico de 1996 hasta el RE4 Remake, esta saga siempre tuvo una atmósfera oscura y claustrofóbica. Evolucionó en horror, acción y ciencia ficción. Es un ícono del survival horror.</p>
        <img src="/imagenes/resident_evil.jpeg" alt="Resident Evil" className="imagen-RE" />
      </section>

      <section className="juego4">
        <h2>4. Saga Call of Duty</h2>
        <p>Desde guerras mundiales hasta conflictos futuristas, COD destaca por su realismo, narrativa y modo multijugador que definió una generación.</p>
        <img src="/imagenes/cod.jpeg" alt="Call of Duty" className="imagen-cod" />
      </section>

      <section className="juego5">
        <h2>5. Saga BioShock</h2>
        <p>Esta saga me cambió la forma de ver el mundo. Combina ciencia ficción, filosofía y crítica social. Una joya narrativa que cuestiona el poder, la libertad y la utopía.</p>
        <img src="/imagenes/bioshock.jpeg" alt="BioShock" className="imagen-bioshock" />
      </section>

      <section className="juego6">
        <h2>6. Saga Burnout</h2>
        <p>Velocidad, rock y autos de lujo. Esta saga logró una mezcla perfecta de conducción arcade con una de las mejores bandas sonoras que escuché en un videojuego.</p>
        <img src="/imagenes/burnout.jpeg" alt="Burnout" className="imagen-burnout" />
      </section>

      <section className="juego7">
        <h2>7. Outlast</h2>
        <p>Un juego de terror psicológico que crea verdadera tensión. Su sonido, ambientación y oscuridad lo convierten en una experiencia aterradora.</p>
        <img src="/imagenes/outlast.jpeg" alt="Outlast" className="imagen-outlast" />
      </section>

      <section className="juego8">
        <h2>8. Uncharted</h2>
        <p>Aventura, acción y narrativa cinematográfica. Uncharted mezcla exploración, combate y gráficos increíbles, todo protagonizado por Nathan Drake.</p>
        <img src="/imagenes/uncharted.jpeg" alt="Uncharted" className="imagen-uncharted" />
      </section>

      <section className="juego9">
        <h2>9. Portal</h2>
        <p>Ingenioso, minimalista y adictivo. Portal destaca por su diseño de puzles, narrativa inteligente y curva de dificultad perfecta.</p>
        <img src="/imagenes/portal.jpeg" alt="Portal" className="imagen-portal" />
      </section>

      <section className="juego10">
        <h2>10. The Last of Us</h2>
        <p>Una historia poderosa de supervivencia y emociones. Este juego combina acción, drama y profundidad emocional. Su secuela continúa esa intensidad.</p>
        <img src="/imagenes/thelastofus2.jpeg" alt="The Last of Us" className="imagen-thelastofus" />
      </section>

      <footer>
        <p>© 2025 Jeremías Cancino todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default Videojuegos;
