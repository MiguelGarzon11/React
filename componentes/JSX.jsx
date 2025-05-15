// JSX significa JavaScript XML. Permite escribir HTML dentro de JavaScript.
// Reglas:
//     Siempre una sola etiqueta padre(div, <>, etc.).
//     Usa className en vez de class.
//     Atributos como onClick, style se escriben en camelCase.

// Sintaxis:

const nombre = "Miguel";
const Saludo = () => (
    <div>
        <h1>Hola, {nombre}</h1>
    </div>
);

// Ejercicio: Si me quiero evitar el uso de return todo lo que no sea JSX este fuera de la función. 
// Como por ejemplo const edad = 17.

const Presentacion = () => {
    const edad = 17;
    return (
        <div>
            <h2>Me llamo Miguel Ángel</h2>
            <p>Tengo {edad} años</p>
        </div>
    );
};

