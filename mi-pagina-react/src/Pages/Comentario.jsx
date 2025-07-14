import React, { useState } from 'react';
import '../Estilos/Comentario.css';

function Comentario() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [comentario, setComentario] = useState('');
  const [enviado, setEnviado] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <div className="contenedor-comentario">
      {!enviado ? (
        <form className="formulario-contacto" onSubmit={manejarEnvio}>
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
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      ) : (
        <p className="mensaje-gracias">¡Gracias por tu mensaje, {nombre}!</p>
      )}
    </div>
  );
}

export default Comentario;
