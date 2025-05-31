// ¿Qué es?
// Ark UI es una librería headless que combina lo mejor de Radix y React Aria, pero con una APi aún más facil de usar y soporte completo para Tailwind, React, Solid y Vue.

// ¿Para qué sirve?
// ideal si usas Tailwind o quieres una sintaxis más agradable amigable y declarativa.
// Ark UI te da componentes listos para estilizar, con una APi más intuitiva que la de Rodix o React Aria.

// ¿Cómo se instala?
// npm i @ark-ui/react

// Ejemplo:
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@ark-ui/react';

// Esta línea importa cuatro componentes de la librería @ark-ui/react:

// Accordion: El contenedor principal del acordeón.
// AccordionItem: Un ítem dentro del acordeón.
// AccordionTrigger: El botón que el usuario hace clic para expandir o colapsar contenido.
// AccordionContent: El contenido que se muestra u oculta al interactuar con el trigger.



function App() {
    return (
        <Accordion> // contenedor
            <AccordionItem value="item-1">  // Se crea un item del acordeon
                <AccordionTrigger>¿Qué es Ark UI?</AccordionTrigger> // Crea el boton sobre el que el usuario va a hacer click
                <AccordionContent>      // Contenido cuando el item se expande
                    Es una librería headless moderna compatible con Tailwind.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}

// Este componente React crea un acordeón simple con un solo ítem. Al hacer clic en el título "¿Qué es Ark UI?", se despliega una explicación debajo.