import { Button } from "react-bootstrap";

function TaskList({ tasks, onDelete, onEdit }) {

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
                        <Button
                            variant="outline-primary"
                            onClick={() => onEdit(task)}
                        >
                            Edit
                        </Button>
                        <Button
                            variant="outline-danger"
                            onClick={() => onDelete(task.id)}
                        >
                            Delete
                        </Button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default TaskList