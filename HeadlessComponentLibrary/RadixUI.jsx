// ¿Qué es?
// Radix UI es una librería de componentes completamente accesibles y sin estilos.
// Te da componentes con comportamiento complejo como menús, diálogos, tooltips, tabs, y más.

// ¿Para qué sirve?
// Para construir interfaces personalizados desde cero, con comportamientos correctos y accesibles, pero con tu propio estilo (ej. usando Tailwind,CSS Modules, etc).

// ¿Cómo se instala?
// npm i @radix-ui/react-toast

// (Puedes cambiar toast por cualquier otro componente que quieras como dialog, popover, etc)

// Ejemplo:

import * as Toast from '@radix-ui/react-toast';

function App() {
    return (
        <Toast.Provider>
            <Toast.Root open>
                <Toast.Title>Mensaje</Toast.Title>
                <Toast.Description>Este es un toast con Radix UI</Toast.Description>
            </Toast.Root>
        </Toast.Provider>
    );
}

