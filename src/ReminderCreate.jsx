import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function ReminderCreate({ onClose, onAdd, show }) {
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
        <Modal show={show} onHide={onClose} centered>
            <Modal.Header>
                <Modal.Title>
                    Add a New Reminder
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <div className="mb-3">
                            <Form.Control 
                                type="text"
                                placeholder="Enter a reminder..."
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                autoFocus
                            />
                        </div>
                        <div className="mb-5">
                        <Form.Control
                            type="datetime-local"
                            value={dateTime}
                            onChange={(e) => setDateTime(e.target.value)}
                        />
                        </div>
                    </Form.Group>
                    <div className="d-flex justify-content-end mt-3">
                        <Button onClick={onClose} className="me-2" variant="secondary">Cancel</Button>
                        <Button type="submit" variant="primary">Add Reminder</Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    )
};

export default ReminderCreate;