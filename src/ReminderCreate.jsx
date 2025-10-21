import { useState } from "react";

function ReminderCreate({ onClose, onAdd }) {
    const [text, setText] = useState("");
    const [dateTime, setDateTime] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (text.trim() === "" || !dateTime) return;

        onAdd({
            id: Date.now(),
            text,
            date: new Date(dateTime),
        });

        setText("");
        setDateTime("");
        onClose();
    }

    return (
        <form className="p-3 border rounded bg-white shadow-sm" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Task</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter a task..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Date & Time</label>
                <input
                    type="datetime-local"
                    className="form-control"
                    value={dateTime}
                    onChange={(e) => setDateTime(e.target.value)}
                />
            </div>
            <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-primary">
                    Add Reminder
                </button>
                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={onClose}
                >
                    Cancel
                </button>
            </div>
        </form>
    )
};

export default ReminderCreate;