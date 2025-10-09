import TaskList from "./TaskList";
import { useState, useEffect } from "react";

function TaskApp() {
    const defaultTasks = [
        { id: 1, text: "Talent is a pursued interest." },
        { id: 2, text: "Anything you are willing to practice you can do." },
        { id: 3, text: "I can't do this, I can't do it — that's balogna." },
        { id: 4, text: "- Bob Ross" }
    ];

    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : defaultTasks;
      });
    
      useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }, [tasks]);


    return (
        <div>
            <h2>Task List</h2>
            <TaskList 
                tasks={tasks}
            />
        </div>
    )
}

export default TaskApp;