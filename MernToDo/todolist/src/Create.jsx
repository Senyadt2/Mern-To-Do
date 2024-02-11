import axios from "axios";
import React, { useState } from "react";

const Create = () => {
  const [task, setTask] = useState();
  const handleAdd = () => {
    axios
      .post("https://rikintodo.onrender.com/add", { task: task }) //route add
      .then((res) => console.log(res))
      .catch((ex) => console.log(ex));
    setTask("");
  };
  return (
    <div className="create_form">
      <input
        type="text"
        value={task}
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
