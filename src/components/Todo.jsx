import React, { useState } from "react";
import TodoForm from "./TodoForm";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className="d-flex justify-content-center align-items-center my-3 w-100 mx-3"
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)} className="w-50">
        {todo.isComplete ? (
          <p className="text-danger fst-italic text-decoration-line-through">
            {todo.text}
          </p>
        ) : (
          <p className="text-primary">{todo.text}</p>
        )}
      </div>
      <div>
        <button
          onClick={() => removeTodo(todo.id)}
          className="btn btn-danger mx-3"
        >
          Delete
        </button>
        <button
          className="btn btn-warning mx-3 "
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        >
          Edit
        </button>
      </div>
    </div>
  ));
};

export default Todo;
