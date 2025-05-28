// Jotai es una librería de estado basada en la linea de átomos, pequeños pedazos de estado que pueden combinarse.

// Sirve para dividir el estado en unidades independientes que puedes usar y combinar fácilmente.

// ¿Como se usa?
// npm install jotai

// Ejemplo:

// store.js

import { atom } from 'jotai'; // atom es una unidad de estado: guarda un valor

export const countAtom = atom(0); // Creo un atom countAtom su valor incial es de (0) puedo leerlo y escribirlo desde cualquier componente.

// App.js

import { useAtom } from 'jotai';  // Es un hook que me permite leer y modificar el atom
import { countAtom } from './store'; // Importo countAtom para usar ese estado específico en el componente.

function App() {
    const [count, setCount] = useAtom(countAtom); // Es como usar useState, pero este valor puede ser compartido entre componentes (global).
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <button onClick={() => setCount((c) => c - 1)}>-</button>
        </div>
    );
}

