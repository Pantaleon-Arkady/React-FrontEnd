import { useState } from "react";

function CreateTask({ onCreate, task = "", onClose }) {
  const [text, setText] = useState(task);

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim() === "") return;

    onCreate(text);
    setText("");
    onClose();
  }

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">Add Task</button>
    </form>
  );
}

export default CreateTask;
