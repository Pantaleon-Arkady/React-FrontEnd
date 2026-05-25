import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import TaskApp from "./components/TaskApp";
import ReminderApp from "./components/ReminderApp";
import WorkoutApp from "./components/WorkoutApp";

function Home() {
    return (
        <div>
            <h2>Initial Page</h2>
            <Link to="/task-app" className="btn btn-primary m-2" >Task App</Link>
            <Link to="/reminder-app" className="btn btn-primary m-2" >Reminder App</Link>
            <Link to="/workout-app" className="btn btn-primary m-2">Workout App</Link>
        </div>
    )
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/task-app" element={<TaskApp/>} />
                <Route path="/reminder-app" element={<ReminderApp/>} />
                <Route path="/workout-app" element={<WorkoutApp />} />
            </Routes>
        </Router>
    )
}

export default App
