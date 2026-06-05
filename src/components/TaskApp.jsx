import TaskList from "./TaskList";
import TaskCreate from "../forms/TaskCreate";
import TaskEdit from "../forms/TaskEdit";
import { useState, useEffect, useReducer } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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

    const [showCreate, setShowCreate] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);
    // const [darkMode, isDarkMode] = useState(false);


    const darkModeReducer = (state, action) => {
        switch (action.type) {
            case "TOGGLE":
                return !state;

            case "DARK":
                return true;

            case "LIGHT":
                return false;

            default:
                return state;
        }
    };

    const [darkMode, dispatch] = useReducer(darkModeReducer, false);

    const handleCreateTask = (text) => {
        const newTask = { id: Date.now(), text };
        setTasks([...tasks, newTask]);
    };

    const handleDeleteTask = (taskId) => {
        setTasks(tasks.filter((t) => t.id !== taskId));
    };

    const handleEditClick = (task) => {
        setCurrentTask(task);
        setShowEdit(true);
    };

    const handleUpdateTask = (taskId, newText) => {
        setTasks(tasks.map((t) => (t.id === taskId ? { ...t, text: newText } : t)));
    };

    const resetTasks = () => {
        setTasks(defaultTasks);
        localStorage.removeItem("tasks");
    };

    return (
        <div className={`w-100 vh-100 px-5 py-3 ${darkMode ? "bg-black" : "bg-white"}`}>
            <div className="d-flex flex-row justify-content-between">
                <Link to="/" className="btn btn-primary">
                    Back
                </Link>
                <button
                    className={`btn ${darkMode ? "btn-light" : "btn-dark"}`}
                    onClick={() => dispatch({ type: "TOGGLE" })}
                >
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </div>
            <div className={`container my-4 ${darkMode ? "bg-dark text-white" : "bg-light text-black"} w-100 p-3 rounded`}>
                <h2 className="text-center mb-3">Task List</h2>

                <div className="d-flex justify-content-center mb-3">
                    <Button variant="primary" onClick={() => setShowCreate(true)}>
                        + Create Task
                    </Button>
                </div>

                <TaskList
                    tasks={tasks}
                    setTasks={setTasks}
                    onDelete={handleDeleteTask}
                    onEdit={handleEditClick}
                />

                <div className="text-center mt-3">
                    <Button variant="warning" onClick={resetTasks}>
                        Reset
                    </Button>
                </div>

                <TaskCreate
                    show={showCreate}
                    onCreate={handleCreateTask}
                    onClose={() => setShowCreate(false)}
                />

                <TaskEdit
                    show={showEdit}
                    task={currentTask}
                    onUpdate={handleUpdateTask}
                    onClose={() => setShowEdit(false)}
                />
            </div>
        </div>
    );
}

export default TaskApp;
