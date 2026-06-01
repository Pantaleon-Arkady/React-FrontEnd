import { useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";

function ReminderEdit({ show, onClose, reminder, onUpdate }) {
    const [text, setText] = useState("");
    const [dateTime, setDateTime] = useState("");

    useEffect(() => {
        if (reminder) {
            setText(reminder.text);
            setDateTime(new Date(reminder.date).toISOString().slice(0, 16));
        }
    }, [reminder]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim() || !dateTime) return;

        const updatedReminder = {
            ...reminder,
            text,
            date: new Date(dateTime),
        };

        onUpdate(updatedReminder);
        onClose();
    };

    return (
        <Modal show={show} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Edit Reminder</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Reminder Text</Form.Label>
                        <Form.Control
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            autoFocus
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Date & Time</Form.Label>
                        <Form.Control
                            type="datetime-local"
                            value={dateTime}
                            onChange={(e) => setDateTime(e.target.value)}
                        />
                    </Form.Group>

                    <div className="d-flex justify-content-end">
                        <Button variant="secondary" onClick={onClose} className="me-2">
                            Cancel
                        </Button>
                        <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default ReminderEdit;
