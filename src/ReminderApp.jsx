import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReminderList from "./ReminderList";

function ReminderApp() {
    const defaultReminders = [
        { id: 1, text: 'First Reminder, adding a few more words to test the visual space when displayed', date: new Date("2025-10-20T10:00:00")},
        { id: 1, text: 'Second Reminder, adding a few more words to test the visual space when displayed', date: new Date("2025-10-20T10:00:00")},
        { id: 1, text: 'Third Reminder, adding a few more words to test the visual space when displayed', date: new Date("2025-10-20T10:00:00")},
        { id: 1, text: 'Fourth Reminder, adding a few more words to test the visual space when displayed', date: new Date("2025-10-20T10:00:00")},
        { id: 1, text: 'Fifth Reminder, adding a few more words to test the visual space when displayed', date: new Date("2025-10-20T10:00:00")},
    ];

    const [reminders, setReminders] =  useState(() => {
        const saved = localStorage.getItem("reminders");
        return saved ? JSON.parse(saved) : defaultReminders;
    });

    return (
        <div>
            <div className="d-flex">
                <Link to="/" className="btn btn-primary">
                    Back
                </Link>
            </div>
            <div>
                <h2>Reminders</h2>
                <ReminderList
                    reminders={reminders}
                />
            </div>
        </div>
    )
}

export default ReminderApp;