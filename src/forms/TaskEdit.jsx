import { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function TaskEdit({ show, task, onUpdate, onClose }) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (task) setText(task.text);
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    onUpdate(task.id, text);
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="editTaskInput">
            <Form.Control
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              autoFocus
            />
          </Form.Group>
          <div className="d-flex justify-content-end mt-3">
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

export default TaskEdit;
