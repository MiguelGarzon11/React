// ¿Qué es?
// Es una librería de componentes headless creada por Adobe, pensada para construir interfaces extremadamente accesibles y flexibles

// ¿Para que sirve?
// Ideal para apps donde la accesibilidad es una prioridad: lectores de pantalla, navegación por teclado, etc. 
// Te da hooks con la lógica lista para qué tú crees tus propios componentes.

// ¿Cómo se instala?
// npm i @react-aria/button

// Ejemplo:
import { useButton } from 'react-aria/button';
import { useRef } from 'react';

function MyButton(props) {
    let ref = useRef();     // Se crea una referencia vacía 
    let { buttonProps } = useButton(props, ref);     // Le pasamos props (como onPress) y la referencia a useButton

    return (
        <button {...buttonProps} ref={ref}>
            Presióname
        </button>
    );
}

function App() {
    return <MyButton onPress={() => alert('¡Hola desde React Aria!')} />;
}