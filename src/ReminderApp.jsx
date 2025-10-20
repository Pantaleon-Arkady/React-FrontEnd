import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReminderList from "./ReminderList";
import CreateReminder from "./CreateReminder";

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

    const handleDeleteReminder = (reminderId) => {
        setReminders(reminders.filter((reminder) => reminder.id !== reminderId))
    };

    const resetReminder = () => {
        setReminders(defaultReminders);
        localStorage.removeItem('reminders');
    }

    const [showForm, setShowForm] = useState(false);

    const displayForm = () => {
        setShowForm(prev => !prev);
    };

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
                <button
                    onClick={displayForm}
                    className="btn btn-outline-primary"
                    aria-label="create"
                >+</button>
                {
                    showForm && <CreateReminder
                        onAdd={handleCreateReminder}
                        onClose={displayForm}
                    />
                }
                <ReminderList
                    reminders={reminders}
                    onDelete={handleDeleteReminder}
                />
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