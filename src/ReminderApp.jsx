import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import ReminderList from "./ReminderList";
import ReminderCreate from "./ReminderCreate";
import ReminderEdit from "./ReminderEdit";

function ReminderApp() {
    const defaultReminders = [
        { id: 1, text: 'First Reminder, adding a few more words to test the visual space when displayed', date: new Date("2025-10-20T10:00:00") },
        { id: 2, text: 'Second Reminder, adding a few more words to test the visual space when displayed', date: new Date("2025-10-20T10:00:00") },
        { id: 3, text: 'Third Reminder, adding a few more words to test the visual space when displayed', date: new Date("2025-10-20T10:00:00") },
        { id: 4, text: 'Fourth Reminder, adding a few more words to test the visual space when displayed', date: new Date("2025-10-20T10:00:00") },
        { id: 5, text: 'Fifth Reminder, adding a few more words to test the visual space when displayed', date: new Date("2025-10-20T10:00:00") },
    ];

    const [reminders, setReminders] = useState(() => {
        const saved = localStorage.getItem("reminders");
        return saved ? JSON.parse(saved) : defaultReminders;
    });

    useEffect(() => {
        localStorage.setItem("reminders", JSON.stringify(reminders))
    }, [reminders]);

    const [showCreate, setShowCreate] = useState(false);

    const handleDeleteReminder = (reminderId) => {
        setReminders(reminders.filter((reminder) => reminder.id !== reminderId))
    };

    const resetReminder = () => {
        setReminders(defaultReminders);
        localStorage.removeItem('reminders');
    }

    const handleCreateReminder = (reminder) => {
        setReminders([...reminders, reminder]);
    };

    return (
        <div>
            <div className="d-flex">
                <Link to="/" className="btn btn-primary">
                    Back
                </Link>
            </div>
            <div>
                <h2>Reminders</h2>
                <div className="d-flex justify-content-center mb-3">
                    <Button onClick={() => setShowCreate(true)} variant="primary">
                        +
                    </Button>
                </div>
                <ReminderList
                    reminders={reminders}
                    onDelete={handleDeleteReminder}
                />
                <ReminderCreate
                    show={showCreate}
                    onAdd={handleCreateReminder}
                    onClose={setShowCreate(false)}
                />
                <ReminderEdit />
                <button
                    onClick={() => resetReminder()}
                    className="btn btn-warning"
                >
                    Reset
                </button>
            </div>
        </div>
    )
}

export default ReminderApp;