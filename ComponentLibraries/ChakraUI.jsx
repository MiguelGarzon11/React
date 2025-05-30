// ¿Para qué sirve?
// Chakra UI te permite crear interfaces accesibles con un diseño muy limpio. Tiene una ventaja: Puedes estilizar los componentes con props como si fueran atributos (color, bg, p, m). Es ideal para principiantes y proyectos rápidos.

// ¿Cómo se instala?
// npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

// Luego se envuelve la app en ChakraProvider

// main.jsx o index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
        <App />
    </ChakraProvider>
);

// App.jsx
import { Button } from '@chakra-ui/react';

function App() {
    return <Button colorScheme="teal">Hola desde Chakra</Button> // Muestra un botón verde (teal) con un accesible y responsivo.
}

export default App;
