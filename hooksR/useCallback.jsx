// Memoriza funciones para evitar recrearlas en cada renderizado.

import { useCallback } from "react";

// Sirve para Optimización de rendimiento, especialmente cuando pasas funciones props.

// Sintaxis:


const funcionMemorizada = useCallback(() => {
    // Lógica
}, [dependencias]);

// Ejemplo:

function MiComponente() {
    const [contador, setContador] = useState(0);

    const incrementar = useCallback(() => {
        setContador((contadoractual) => contadoractual + 1);
    }, [])

    return <button onClick={incrementar}>Aumentar</button>;
}