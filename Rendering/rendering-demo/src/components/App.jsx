import { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import TaskCounter from './TaskCounter';
import HighlightTask from './HighlightTask';
import TaskLifecycle from './TaskLifecycle';
import '../styles/styles.css';


export default function App() {
    const [tasks, setTasks] = useState([]); // Se inicializa un estado localpara almacenar las tareas como un array vacio.

    const addTask = (task) => setTasks([...tasks, task]) // Recibe una nueva task, crea un nuevo array copiando todo lo anterior y agrega la nueva tarea al final.

    return (
        <div className="container">
            <h1>Task Manager Pro</h1>
            <TaskLifecycle />
            <TaskForm addTask={addTask} />
            <TaskCounter
                tasks={tasks}
                render={(count) => <p>Tienes {count} tareas</p>}
            />
            <TaskList tasks={tasks} />
            {tasks.length > 0 && (
                <HighlightTask task={tasks[tasks.length - 1]}/>
            )}
        </div>
    );
}