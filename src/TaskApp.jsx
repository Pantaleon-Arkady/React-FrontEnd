import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { useState, useEffect } from "react";

function TaskApp() {
    const defaultTasks = [
        { id: 1, text: "I can't do this, I can't do it — that's balogna." },
        { id: 2, text: "Talent is a pursued interest." },
        { id: 3, text: "Anything you are willing to practice you can do." },
        { id: 4, text: "- Bob Ross" }
    ];

    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : defaultTasks;
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const [showForm, setShowForm] = useState(false);

    const displayForm = () => {
        setShowForm(prev => !prev);
    }

    const handleDeleteTask = (taskId) => {
        const newTasks = tasks.filter(task => task.id !== taskId);
        setTasks(newTasks);
    };

    const handleCreateTask = (text) => {
        const newTask = { id: Date.now(), text, done: false };
        setTasks([...tasks, newTask]);
    };

    const resetTasks = () => {
        setTasks(defaultTasks);
        localStorage.removeItem("tasks");
    };

    return (
        <div className="container my-4 bg-light w-100">
            <h2>Task List</h2>
            <div className="d-flex align-items-center w-100 gap-2 justify-content-center">
                <button
                    onClick={displayForm}
                    className="btn btn-outline-primary flex-shrink-0 create_btn"
                    aria-label="create"
                >
                    +
                </button>
                {showForm && (
                    <div className="flex-grow-1">
                        <TaskForm
                            onCreate={handleCreateTask}
                            onClose={() => setShowForm(false)}
                        />
                    </div>
                )}
            </div>

            <TaskList
                tasks={tasks}
                onDelete={handleDeleteTask}
            />

            <button onClick={resetTasks} className="btn btn-warning mt-3">
                Reset
            </button>
        </div>
    )
}

export default TaskApp;