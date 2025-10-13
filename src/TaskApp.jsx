import TaskList from "./TaskList";
import CreateTask from "./CreateTask";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function TaskApp() {
    const defaultTasks = [
        { id: 1, text: "I can't do this, I can't do it — that's balogna." },
        { id: 2, text: "Talent is a pursued interest." },
        { id: 3, text: "Anything you are willing to practice you can do." },
        { id: 4, text: "- Bob Ross" },
    ];

    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : defaultTasks;
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const [showForm, setShowForm] = useState(false);

    const handleCreateTask = (text) => {
        const newTask = { id: Date.now(), text, done: false };
        setTasks([...tasks, newTask]);
    };

    const handleDeleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    const resetTasks = () => {
        setTasks(defaultTasks);
        localStorage.removeItem("tasks");
    };

    return (
        <div className="container my-4 bg-light w-100 p-3 rounded">
            <h2 className="text-center mb-3">Task List</h2>

            <div className="d-flex justify-content-center mb-3">
                <Button variant="primary" onClick={() => setShowForm(true)}>
                    + Create Task
                </Button>
            </div>

            <TaskList tasks={tasks} onDelete={handleDeleteTask} />

            <div className="text-center mt-3">
                <Button variant="warning" onClick={resetTasks}>
                    Reset
                </Button>
            </div>

            <CreateTask
                show={showForm}
                onCreate={handleCreateTask}
                onClose={() => setShowForm(false)}
            />
        </div>
    );
}

export default TaskApp;
