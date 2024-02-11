import axios from "axios";
import React, { useState } from "react";

const Create = () => {
  const [task, setTask] = useState();
  const handleAdd = () => {
    axios
      .post("http://localhost:3001/add", { task: task }) //route add
      .then((res) => console.log(res))
      .catch((ex) => console.log(ex));
  };
  return (
    <div className="create_form">
      <input
        type="text"
        name=""
        placeholder="Enter Task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default Create;
