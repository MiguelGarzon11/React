// React Router es una biblioteca que permite crear rutas en aplicaciones React, es decir, define qué componente se muestra dependiendo de la URL, Esto es esencial para contruir Single Page Applications (SPA), donde no hay carga completa del navegador al cambiar de "página".

// ¿Para qué sirve?
// Mostrar diferentes componentes según la URL (/home, /about, /contact)
// Navegar entre páginas sin recargar el navegador
// Pasar datos por la URL
// Crear rutas protegidas (como login)

// Instalación:
// Primero, debes instalarlo en tu proyecto con:

// npm install react-router-dom

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// BrowserRouter: Es el contenedor pricipal para la navegación
// Routes: Es el agrupador de rutas.
// Route: Define cada página y a qué componente muestra.
// Link: Reemplaza las etiquetas <a> apra navegar entre rutas sin recargar la página.

function Home() {
    return <h1>Página de Inicio</h1>;
}

function About() {
    return <h1>Acerca de Nosotros</h1>
}

function Contact() {
    return <h1>Contacto</h1>
}

function App() {
    return (
        <BrowserRouter> 
            <nav>
                <Link to="/">Inicio</Link> |
                <Link to="/about">Acerca</Link> |
                <Link to="/contact">Contacto</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App; 