import React, { useState } from "react";
import "../css/TodoList.css";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="todo-list-container">
      <h2>My Todo List</h2>
      <TodoInput todos={todos} setTodos={setTodos} />
      <div className="todo-items-wrapper">
        {todos.map((items, index) => {
          return (
            <TodoItem
              todos={todos}
              setTodos={setTodos}
              index={index + 1}
              key={items.id}
              todo={items}
            />
          );
        })}
      </div>
    </div>
  );
}
