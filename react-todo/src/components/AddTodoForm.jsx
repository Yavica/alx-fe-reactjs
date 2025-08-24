import React, { useState } from "react";

function AddTodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Enter a todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "0.5rem" }}
      />
      <button type="submit" style={{ marginLeft: "0.5rem" }}>
        Add
      </button>
    </form>
  );
}

export default AddTodoForm;
