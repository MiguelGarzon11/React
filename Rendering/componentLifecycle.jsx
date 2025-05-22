// React permite ejecutar código en ciertos momentos:

// Cuando un componente se monta (aparece en pantalla).
// Cuando se actualiza.
// Cuando se desmonta.

// Ejemplo con useEffect (componente funcional):

import { useEffect } from "react";

function CicloVida() {
    useEffect(() => {
        console.log("El componente se montó");

        return () => {
            console.log("El componente se desmontó");
        };
    }, []);

    return <h2>Estoy en pantalla</h2>;
}

// useEffect con [] se ejecuta solo una vez al montar, y la función de return se ejecuta al desmontar.

