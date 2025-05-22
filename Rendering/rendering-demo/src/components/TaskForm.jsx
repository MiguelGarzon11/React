import { useRef } from 'react';

export default function TaskForm({ addTask }) {
    const inputRef = useRef();      //Crea una referencia al input

    const handleSubmit = (e) => {       //Maneja el envío del formulario
        e.preventDefault();     //Evita que se recargue la página
        if (inputRef.current.value.trim()) { //Obtiene el texto escrito
            addTask(inputRef.current.value);    //Agrega la tarea nueva
            inputRef.current.value = '';        //Limpia el input
        }
        inputRef.current.focus();       //Devuelve el foco al input
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <input ref={inputRef} placeholder="Nueva tarea" className="input"/>
            <button type="submit" className="btn">Agregar</button>
        </form>
    );
}