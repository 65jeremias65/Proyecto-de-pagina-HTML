import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Páginas
import Inicio from './Pages/Inicio';
import Deporte from './Pages/Deporte';
import Lectura from './Pages/Lectura';
import Videojuegos from './Pages/Videojuegos';
// import Contacto from './Pages/Contacto'; // si luego la creas

// Navbar
import Navbar from './Componentes/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Ahora siempre visible */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/deporte" element={<Deporte />} />
        <Route path="/lectura" element={<Lectura />} />
        <Route path="/videojuegos" element={<Videojuegos />} />
        {/* <Route path="/contacto" element={<Contacto />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
