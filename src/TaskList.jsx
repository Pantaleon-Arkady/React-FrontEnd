function TaskList({tasks}) {

    return (
        <ul>
            {tasks.map(task => (
                <li>
                    <span>
                        {task.text}
                    </span>
                </li>
            ))}
        </ul>
    )
}

export default TaskList