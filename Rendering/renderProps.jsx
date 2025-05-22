// Usando Render Props 
// Una render Prop es una función que se pasa como prop para que el componente pueda decidir qué renderizar.

// Ejemplo:

function Contador({ render }) {
    const [count, setCount] = React.useState(0);
    return <div>{render(count, () => setCount(count + 1))}</div>;
}


function App() {
    return (
        <Contador render={(count, aumentar) => (
            <>
            <p>Contador: {count}</p>
            <button onClick={aumentar}>Aumentar</button>
            </>
        )} />
    );
}

// Render es una prop que recibe una función para personalizar lo que se muestra

