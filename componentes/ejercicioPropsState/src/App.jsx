// App.jsx (Componente padre)
import React from 'react';
import UsuarioCard from './UsuarioCard';

function App() {
    return (
        <div>
            <h1>Usuarios</h1>
            <UsuarioCard nombre="Miguel Ángel" ciudad="Bogotá" />
            <UsuarioCard nombre="Camila" ciudad="Medellín" />
        </div>
    );
}

export default App;

