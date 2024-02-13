import axios from "axios";
import api from "./utils/api";
import React, { useState, useContext } from "react";
import globalcontext from "./GlobalContentProvider/GlobalContext";

const Create = () => {
  const { setDataChanged } = useContext(globalcontext);
  const { postData } = api();
  const [task, setTask] = useState({
    task: "",
  });
  const handleAdd = async () => {
    const data = await postData("/add", task);
    console.log(data);
    alert("data set");
    setTask("");
    setDataChanged(true);
  };
  return (
    <div className="create_form">
      <input
        type="text"
        value={task.task}
        placeholder="Enter Task"
        onChange={(e) => setTask({ task: e.target.value })}
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default Create;
