const withHighlight = (Component) => (props) => (
    <div className="highlight">
        <Component {...props} />
    </div>
);

function ImportantTask({ task }) {
    return <p>Tarea importante: {task}</p>;
}

export default withHighlight(ImportantTask);