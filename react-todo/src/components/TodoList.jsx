import React from "react";

function TodoList({ todos, toggleTodo, deleteTodo }) {
  if (todos.length === 0) {
    return <p>No todos yet! Add one above.</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            margin: "0.5rem 0",
          }}
        >
          <span
            style={{ cursor: "pointer" }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </span>
          <button
            onClick={() => deleteTodo(todo.id)}
            style={{ marginLeft: "1rem" }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
