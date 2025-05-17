// ¿Qué es props?

// Es la abreviatura de "Propierties" (propiedades)
// Se usan para pasar datos de un componente padre a un componente hijo
// Son inmutables: una vez que se le pasan a un componente, este no puede cambiarlas.
// Los usas para configurar o personalizar un componente.

function Saludo(props) {
    return <h1>Hola, {props.nombre}!</h1>;
}

// Uso del componente con props
<Saludo nombre="Miguel" />
// Aqui, nombre es una prop que se le pasa desde el componente padre a Saludo.

// ¿Qué es State?

// state representa datos internos del componente que puedan cambiar con el tiempo.
// Se usa para manejar la interactividad, eventos o valores que cambian.
// Se puede modificar con setState (en componentes de clase) o con useState (en componentes funcionales con hooks).
// Cambiar el state provoca que el componente se vuelve a renderizar.

// así es como declaras un estado en React
const [estado, cambiarEstado] = useState(valorInicial)


// Ejemplo con Hook useState

import { useState } from 'react';

function Contador() {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <p>Has hecho click {contador} veces</p>
            <button onClick={() => setContador(contador + 1)}>
                Haz click
            </button>
        </div>
    );
}

// Aquí, contador es el state, y cada vez que haces clic, se actualiza y React vuelve a renderizar el componente.

// Ejercicio Usando Props y State:

