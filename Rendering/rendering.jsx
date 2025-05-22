// ¿Qué es Rendering en React?

// En React, renderizar (rendering) significa mostrar en 
// pantalla la interfaz del usuario (UI) que retorna un componente.
// Un componente de React es como una función que retorna elementos visuales (JSX). 
// Cada vez que el estado (state) o las propiedades (props) cambian, React renderiza nuevamente el componente, 
// es decir, actualiza lo que ves en la pantalla.

// Ejemplo sencilo 

function Saludo() {
  return <h1>¡Hola, Miguel Ángel!</h1>;
}

// Este componente se "renderiza" al mostrar ese <h1> en la pantalla.

// ¿Cuándo React hace un "re-render"?

// React vuelve a renderizar un componente si:
// Cambia el state (estado interno).
// Cambian las props (datos externos).
// Su componente padre se vuelve a renderizar.

// ¿Qué hace el "rendering"?
// Convierte JSX en elementos del DOM virtual.
// Compara cambios con el DOM real (algoritmo de reconciliación).
// Actualiza solo lo necesario en el navegador.

