import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders app title", () => {
  render(<App />);
  expect(screen.getByText(/React Todo App/i)).toBeInTheDocument();
});

test("can add a new todo", () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Enter a todo/i);
  const button = screen.getByText(/Add/i);

  fireEvent.change(input, { target: { value: "Learn React" } });
  fireEvent.click(button);

  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
});

test("can toggle a todo", () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Enter a todo/i);
  const button = screen.getByText(/Add/i);

  fireEvent.change(input, { target: { value: "Write Tests" } });
  fireEvent.click(button);

  const todo = screen.getByText(/Write Tests/i);
  fireEvent.click(todo);

  expect(todo).toHaveStyle("text-decoration: line-through");
});

test("can delete a todo", () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Enter a todo/i);
  const button = screen.getByText(/Add/i);

  fireEvent.change(input, { target: { value: "Delete me" } });
  fireEvent.click(button);

  const deleteButton = screen.getByText(/Delete/i);
  fireEvent.click(deleteButton);

  expect(screen.queryByText(/Delete me/i)).not.toBeInTheDocument();
});
