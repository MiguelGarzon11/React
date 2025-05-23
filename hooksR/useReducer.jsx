// Es una alternativa a useState para manejar estados más complejos con lógica de acciones.

import { useReducer } from "react";

// Ideal para formularios, lógica tipo Redux, y múltiples cambios de estado.

// Sintaxis:

const [estado, dispatch] = useReducer(reducer, estadoInicial); // Inicializa el estado y la función dispatch.
// Estado es el valor actual
// dispatch es una función que se usa para enviar acciones que le dicen al reductor ( la función reducer ) cómo cambiar el estado.


// Ejemplo:

function reducer(state, action) {   // Decide cómo cambiar el estado según el tipo de acción.
    switch (action.type) {
        case 'incrementar':
            return { count: state.count + 1};
        default:
            return state;
    }
}

function Contador() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <>
            <p>Contador: {state.count}</p> // Accede al valor actual del contador.
            <button onClick={() => dispatch({ type: 'incrementar' })}>  //	Envía una acción al reducer.
                Aumentar
            </button>   
        </>
    );
}