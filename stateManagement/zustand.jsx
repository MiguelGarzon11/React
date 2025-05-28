//  Es una librería de manejo de estado para React muy ligera y sin boilerplate, basada en hooks.

// Sirve para crear y usar una store global de froma muy simple, sin necesidad de proveedores o contextos.

// Como se usa:
// npm install zusband

// Ejemplo:

// store.js
import { create } from 'zustand';

export const useStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
}));

// App.js

import { useStore } from './store';

export default function App() {
    const { count, increment, decrement } = useStore();
        
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );

}