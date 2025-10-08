import TaskList from "./TaskList";

function TaskApp() {
    const defaultTasks = [
        { id: 1, text: "Talent is a pursued interest." },
        { id: 2, text: "Anything you are willing to practice you can do." },
        { id: 3, text: "I can't do this, I can't do it — that's balogna." },
        { id: 4, text: "- Bob Ross" }
    ];


    return (
        <div>
            <h2>Task List</h2>
            <TaskList 
                tasks={defaultTasks}
            />
        </div>
    )
}

export default TaskApp;