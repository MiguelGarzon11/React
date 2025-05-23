// Crea una referencia mutable que persiste entre renderizados y puede referirse a elementos del DOM.

// Sirve para manipular directamente elementos del DOM o almacenar valores sin re-renderizar.

// Sintaxis:

const referencia = useRef(valorInicial);

// Ejemplo:

import { useRef } from 'react';

function EnfocarInput() {
    const inputRef = useRef();

    const enfocar = () => {
        inputRef.current.focus();
    };

    return (
        <>
        <input ref={inputRef} />
        <button onClick={enfocar}>Enfocar input</button>
        </>
    );
}