// React maneja eventos como onClick, onChange, onSubmit igual que en HTML, pero en camelCase y con funciones JS.

function Boton() {
    function manejarClick() {
        alert("¡Hola Miguel Ángel!");
    }

    return <button onClick={manejarClick}>Haz clic</button>;
}

// Todos los eventos deben ser funciones, y se pasan entre llaves {}.

