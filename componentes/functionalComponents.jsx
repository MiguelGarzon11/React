// Son funciones que retornan JSX (una mezcla de HTML + JS). Son la forma moderna y recomendada de crear componentes
// en React

// Sintaxis:

function Componente() {
    return <h1>Hola desde un componente funcional</h1>;
}

// o con función flecha:
const Componente = () => <h1>Hola desde un componente</h1>;

// Ejercicio:

function Bienvenida() {
    return <h2>¡Bienvenido, Miguel Ángel!</h2>;
}

// Para usarlo:

function App() {
    return (
        <div>
            <Bienvenida />
        </div>
    );
}