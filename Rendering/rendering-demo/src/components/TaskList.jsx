export default function TaskList({ tasks }) {
    return (
        <ul className="task-list">
            {tasks.map((task, index) => (
                <li key={index} className="task-item">
                    {task}
                </li>
            ))}
        </ul>
    );
}