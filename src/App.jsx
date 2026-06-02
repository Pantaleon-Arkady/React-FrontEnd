import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import TaskApp from "./components/TaskApp";
import ReminderApp from "./components/ReminderApp";
import WorkoutApp from "./components/WorkoutApp";
import Operation from "./components/Operations";
import Trials from "./components/Trials";
import FirstLayout from "./components/FirstLayout";

function Home() {
    return (
        <div className="d-flex flex-column">
            <h2>Initial Page</h2>
            <div className="d-flex flex-row">
                <div className="d-flex w-25 flex-column p-5 m-3 bg-light rounded border border-2">
                    <h2>React JS Apps</h2>
                    <Link to="/task-app" className="btn btn-primary m-2" >Task App</Link>
                    <Link to="/reminder-app" className="btn btn-primary m-2" >Reminder App</Link>
                    <Link to="/workout-app" className="btn btn-primary m-2">Workout App</Link>
                    <Link to="/operation-app" className="btn btn-primary m-2">Operation App</Link>
                    <Link to="/trials" className="btn btn-primary m-2">Trials </Link>
                </div>
                <div className="d-flex w-25 flex-column p-5 m-3 bg-light rounded border border-2">
                    <h2>React JS Layouts</h2>
                    <Link to="/first-layout" className="btn btn-primary m-2">First Layout</Link>
                </div>
            </div>
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
                <Route path="/operation-app" element={<Operation />} />
                <Route path="/trials" element={<Trials />} />
                <Route path="/first-layout" element={<FirstLayout />} />
            </Routes>
        </Router>
    )
}

export default App
