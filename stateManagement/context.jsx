// Context API (nativa de React)
// Sirve para compartir datos globales como el tema (claro/oscuro), idioma, usuario autenticado, etc.

// ¿Cuándo usarla?
// Cuando tu app necesita compartir datos simples entre varios componentes sin instalar nada externo.

// Sintaxis Básica 

// npm install constx

import { createState } from 'constx';

export const [useCounter, setCounter] = createState(0);

// Ejemplo:

import React from 'react';
import { useCounter, useCounter } from './counterState';

export default function CounterComponent() {
    const counter = useCounter(); // Usar el valor actual

    const increment = () => setCounter (counter + 1); // Cambiar valor

    return (
        <div>
            <h1>Contador: {counter}</h1>
            <button onClick={increment}>Incrementar</button>
        </div>
    )
}
