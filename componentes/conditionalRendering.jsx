// Es una forma de mostrar (o no mostrar) componentes o elementos en función de una condición. 
// Básicamente, decides qué se muestra en la interfaz dependiendo del estado o alguna variable.\

// 1. Usar if fuera del JSX

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn; // La propiedad isLoggedIn se usa para indicar si un usuario ha iniciado sesion correctamente.
  if (isLoggedIn) {
    return <h1>¡Hola, usuario!</h1>;
  }
  return <h1>Por favor, inicia sesión.</h1>;
}

// 2. Usar un operador ternario dentro del JSX

function Greeting(props) {
    return (
        <div>
            {props.isLoggedIn ? <h1>¡Hola Usuario!</h1> : <h1>Por favor, inicia sesión.</h1>}
        </div>
    );
}

// 3. Usar operador lógico && para mostrar algo solo si la condición es verdadera.

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hola!</h1>
            {unreadMessages.lenght > 0 && <h2>Tienes {unreadMessages.lenght} mensajes sin leer.</h2>}
        </div>
    );
}


// Ejemplo sencillo:

function App() {
    const [isLoggedIn, setIsloggedIn] = useState(false);

    return (
        <div>
            {isLoggedIn ? (
                <h1>Bienvenido de nuevo!</h1>
            ) : (
                <h1>Por favor, inicia sesion.</h1>
            )}
            
            <button onClick={() => setIsloggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Cerrar sesión" : "Iniciar sesión"}
            </button>
        </div>
    );
}