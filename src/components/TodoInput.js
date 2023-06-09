import React, { useState } from "react";
import "../css/TodoInput.css";
import { PlusIcon } from "@heroicons/react/outline";
import { v4 } from "uuid";

export default function TodoInput({ todos, setTodos }) {
  const [todo, setTodo] = useState("");
  const handleClick = () => {
    if (todo.length > 0) {
      const newTodo = {
        id: v4(),
        name: todo,
        isCompleted: false,
      };

      const newTodos = [...todos, newTodo];
      setTodos(newTodos);
      setTodo("");
    }
  };
  return (
    <div className="todo-input-wrapper">
      <input
        type="text"
        value={todo}
        placeholder="Enter todo"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={handleClick}>
        <PlusIcon className="plus-icon" />
      </button>
    </div>
  );
}
