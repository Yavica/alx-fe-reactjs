// src/components/__tests__/AddTodoForm.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddTodoForm from "../AddTodoForm";

test("renders input and button", () => {
  render(<AddTodoForm addTodo={() => {}} />);
  expect(screen.getByPlaceholderText("Add a new todo...")).toBeInTheDocument();
  expect(screen.getByText("Add")).toBeInTheDocument();
});

test("submits a new todo", () => {
  const mockAddTodo = jest.fn();
  render(<AddTodoForm addTodo={mockAddTodo} />);
  const input = screen.getByPlaceholderText("Add a new todo...");
  const button = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(button);

  expect(mockAddTodo).toHaveBeenCalledWith("New Task");
});
