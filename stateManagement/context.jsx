// Context API (nativa de React)
// Sirve para compartir datos globales como el tema (claro/oscuro), idioma, usuario autenticado, etc.

// ¿Cuándo usarla?
// Cuando tu app necesita compartir datos simples entre varios componentes sin instalar nada externo.

// Sintaxis Básica 

import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
    return (
        <ThemeContext.Provider value={{ theme, setTheme}}>
            {children}  // Todo lo que envuelves dentro de ThemeProvider
        </ThemeContext.Provider>
    );
} 


// Ejemplo