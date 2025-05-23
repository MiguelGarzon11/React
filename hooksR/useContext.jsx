// Permite consumir valores del contexto sin pasar props manualmente.

// Sirve para compartir datos globales (como temas o usuarios loguedos)

// Sintaxis:

const valor = useContext(MiContexto);

// Ejemplo:

import { createContext, useContext } from "react";

const TemaContexto = createContext('claro');

function componente() {
    const tema = useContext(TemaContexto);
    return <p>El tema actual es: {tema}</p>;
}

