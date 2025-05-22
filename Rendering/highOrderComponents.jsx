// Un high Order Component (HOC): Es una función que recibe un componente como argumento y devuelve un nuevo 
// componente mejorado.

const MiHOC = (ComponenteOriginal) => {
    return function ComponenteMejorado(props) {
        // Lógica Extra
        return <ComponenteOriginal {...props} />
    };
};

// Ejemplo practico:

// Componente base:
function MostrarHora(porps) {
    return <h2>La hora es: {props.hora}</h2>;
}

// HOC que añade la hora

function withHoraActual(Componente) {
  return function ComponenteConHora(props) {
    const [hora, setHora] = React.useState(new Date().toLocaleTimeString());

    React.useEffect(() => {
      const timer = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
      }, 1000);
      return () => clearInterval(timer);
    }, []);

    return <Componente {...props} hora={hora} />;
  };
}


const MostrarHoraConReloj = withHoraActual(MostrarHora);

function App() {
  return <MostrarHoraConReloj />;
}
