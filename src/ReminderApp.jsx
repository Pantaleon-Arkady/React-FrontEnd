import { Link } from "react-router-dom";

function ReminderApp() {

    return (
        <div>
            <div className="d-flex">
                <Link to="/" className="btn btn-primary">
                    Back
                </Link>
            </div>
            <span>Reminders App Init</span>
        </div>
    )
}

export default ReminderApp;