export default function TaskCounter({ tasks, render }) {
    return <div className="counter">{render(TaskList.length)}</div>;
}