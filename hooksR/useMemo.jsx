// Memoriza el resultado de una función para no volver a calcularlo si no es necesario.

// Sirve para evitar cálculos pesados en cada render.

// Sintaxis:

const resultadoMemorizado = useMemo(() => {
    return funcionCostosa();
}, [dependencias]);

// Ejemplo:

import { useMemo, useState } from 'react';

function Calculo() {
    const [numero, setNumero] = useState(5);

    const resultado = useMemo(() => {
        console.log('Calculando...');
        return numero * 2;
    }, [numero]);

    return (
        <>
        <p>Resultado: {resultado}</p>
        <button onClick={() => setNumero(numero + 1)}>cambiar número</button>
        </>
    );
} 

