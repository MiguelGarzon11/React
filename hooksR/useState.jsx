// Hook que permite manejar el estado en componentes funcionales de React.
// ¿Para qué sirve?
// Guardar y actualizar valores como contadores, inputs, booleanos, etc.

// Sintaxis:

const [estado, setEstado] = useState(valorInicial);

// Ejemplo:

import { useState } from 'react';

function Contador() {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={() => setContador (contador + 1)}>Aumentar</button>
        </div>
    );
}

// useState sirve para guardar y actualizar datos en un componente de React
