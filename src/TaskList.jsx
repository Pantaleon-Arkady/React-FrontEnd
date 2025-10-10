function TaskList({tasks, onDelete}) {

    return (
        <ul className="list-group mt-3">
            {tasks.map(task => (
                <li 
                    className="list-group-item d-flex justify-content-between"
                    key={task.id}
                >
                    <span>
                        {task.text}
                    </span>
                    <div>
                        <button
                            className="btn btn-primary"
                        >
                            Edit
                        </button>
                        <button 
                            className="btn btn-danger"
                            onClick={() => onDelete(task.id)}
                        >
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default TaskList