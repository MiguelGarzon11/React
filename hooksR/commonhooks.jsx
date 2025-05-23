// Creating Custom Hooks (Crear Hooks personalizados)

// Es una función de JavaScript que usa otros hooks para encapsular lógica reutilizable.

// Sirve para evitar la duplicación de lógica como useFetch, useForm, etc.

// Ejemplo:

import { useEffect, useState } from "react";

function useContador(inicial = 0) {     // Se crea un hook personalizado siempre inicia con (use)
    const [contador, setContador] = useState(inicial);

    const aumentar = () => setContador((c) => c + 1);

    return { contador, aumentar };
}

// Uso

function App() {
    const [ contador, aumentar ] = useContador(10);

    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={aumentar}>+1</button>
        </div>
    );
}


// Hooks Best Practices (buenas prácticas con Hooks)

// Reglas de Hooks:
// Solo llama hooks en el nivel superior del componente.
// Solo llama hooks dentro de componentes funcionales o custom hooks.
// Usa nombres que empiecen con use (useContador, useUsuario, etc).
// No mutar el estado directamente (setEstado({...estado, nuevo: valor})).
// Usa useMemo y useCallback solo cuando sea necesario.

