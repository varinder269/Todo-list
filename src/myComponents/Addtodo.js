//import React from "react";
import React, { useState } from "react";

export const Addtodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("title or desc can't be blank");
    }
    else{
      
      props.addtodo(title, desc);
    }

    setDesc("");
    setTitle("");
  };

  return (
    <div className="container my-3">
      <h3>Add a todo</h3>
      <form onSubmit={submit}>
        <div class="mb-3">
          <label
            htmlFor="title"
            class="form-label"
          >
            todo title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            class="form-control border border-dark"
            id="title"

          />
        </div>
        <div class="mb-3">
          <label htmlFor="desc" class="form-label ">
            todo desccription
          </label>
          <input type="text" 
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          class="form-control border border-dark" id="desc" />
        </div>

        <button type="submit" class="btn btn-sm btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};
