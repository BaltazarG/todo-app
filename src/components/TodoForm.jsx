import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-around align-items-center w-100"
    >
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            autoFocus
            name="text"
            className="bg-primary border rounded border-primary p-1 mt-5 mx-3 text-center fst-italic text-light w-75"
          />
          <button onClick={handleSubmit} className="btn btn-primary mx-3 mt-5">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            value={input}
            autoFocus
            onChange={handleChange}
            name="text"
            className="bg-primary border rounded border-primary p-1 w-75 mx-3 text-center fst-italic text-light"
          />
          <button onClick={handleSubmit} className="btn btn-primary mx-3">
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
