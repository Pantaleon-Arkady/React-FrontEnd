import { Button } from "react-bootstrap";

function TaskList({ tasks, setTasks, onDelete, onEdit }) {

    const handleDragStart = (e, index) => {
        e.dataTransfer.setData("draggedIndex", index);
    };

    const handleDrop = (e, dropIndex) => {
        const draggedIndex = e.dataTransfer.getData("draggedIndex");

        const updatedTasks = [...tasks];

        const draggedTask = updatedTasks[draggedIndex];

        updatedTasks.splice(draggedIndex, 1);

        updatedTasks.splice(dropIndex, 0, draggedTask);

        setTasks(updatedTasks);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <ul className="list-group mt-3">
            {tasks.map((task, index) => (
                <li
                    key={task.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, index)}
                    className="list-group-item d-flex justify-content-between"
                >
                    <span>{task.text}</span>

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
    );
}

export default TaskList;