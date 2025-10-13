import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function CreateTask({ show, onCreate, onClose, task = "" }) {
  const [text, setText] = useState(task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;

    onCreate(text);
    setText("");
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add New Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="taskInput">
            <Form.Control
              type="text"
              placeholder="Enter a task..."
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
              Add Task
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default CreateTask;
