import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import TaskApp from "./TaskApp";

function Home() {
    return (
        <div>
            <h2>Initial Page</h2>
            <Link to="/task-app" className="btn btn-primary m-2" >Task App</Link>
        </div>
    )
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/task-app" element={<TaskApp/>} />
            </Routes>
        </Router>
    )
}

export default App
