import { Button } from "react-bootstrap";

function ReminderList({ reminders, onDelete, onEdit }) {



    return (
        <ul className="list-group mt-3">
            {reminders.map(reminder => (
                <li className="list-group-item d-flex">
                    <div className="reminders_text border text-start">
                        <span className="border">
                            {reminder.text}
                        </span>
                    </div>
                    <div className="reminders_date border text-start">
                        {new Date(reminder.date).toLocaleDateString()} {new Date(reminder.date).toLocaleTimeString()}
                    </div>
                    <div className="reminders_mod border">
                        <div className="dropdown">
                            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                                Mod
                            </button>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item btn btn-primary" onClick={() => onEdit(reminder)} >Edit</button></li>
                                <li><button className="dropdown-item btn btn-primary" onClick={() => onDelete(reminder.id)} >Delete</button></li>
                                <li><button className="dropdown-item btn btn-primary disabled" >Other...</button></li>
                            </ul>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
};

export default ReminderList