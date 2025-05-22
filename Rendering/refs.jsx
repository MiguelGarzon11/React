// Refs te permite acceder directamente a elementos del DOM o guardar una referencia mutable.

// Ejemplo enfocar un input automáticamente

import { useRef, useEffect } from "react";

function InputAutoenfocado() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return <input ref={inputRef} placeholder="Estoy enfocado" />;
}

// Ejemplo: 
import React from 'react';

function Formulario() {
  const inputRef = React.useRef(); // 1. Creamos el ref

  function enfocarInput() {
    inputRef.current.focus();      // 3. Usamos el ref
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Escribe aquí..." /> {/* 2. Lo asignamos */}
      <button onClick={enfocarInput}>Enfocar el input</button>
    </div>
  );
}
