// Hook para ejecutar efectos secundarios como peticiones API, event listeners, o modificar el DOM.

import { useEffect } from "react";

// Sirve para controlar cuándo ejecutar funciones después del renderizado del componente. 

// Sintaxis:

useEffect(() => {
    // Código a ejecutar
}, [dependencias]);

// Nota: Se ejecuta solo si cambia el valor de dependencias, si es un array [] vacio solo se ejecutara una vez.,

// Ejemplo:

import { useEffect, useState } from 'react';

function Usuario() {
    const [usuario, seUsuario] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.json())    // Convierte la respuesta del servidor en un objeto JSON
            .then(data => setUsuario(data));    // Guarda ese objeto JSON en el estado usuario
    }, []);

    return <div>{usuario ? usuario.name : 'Cargando...'}</div>
} 