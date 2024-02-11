import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const containerStyle = {
    marginTop: "10px",
    width: "52%",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  useEffect(() => {
    axios
      .get("https://rikintodo.onrender.com/get")
      .then((res) => setTodos(res.data))
      .catch((ex) => console.log(ex));
  }, [todos]);

  const handleEdit = (id) => {
    axios
      .put(`https://rikintodo.onrender.com/update/${id}`)
      .then((res) => setTodos(res.data))
      .catch((ex) => console.log(ex));
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://rikintodo.onrender.com/delete/${id}`)
      .then((res) => alert("Deleted"))
      .catch((ex) => console.log(ex));
  };

  return (
    <div className="home">
      <h1>To do list</h1>
      <Create />
      <div style={containerStyle}>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <>
              <div
                style={{
                  padding: "5px",
                  background: "black",
                  color: "White",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "relative",
                    paddingRight: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleEdit(todo._id)}
                >
                  {todo.done === true ? "Done" : 0}
                </span>
                {/* if done just cross the text */}
                <span
                  style={{
                    textDecoration: `${
                      todo.done === true ? "line-through" : "none"
                    }`,
                  }}
                >
                  {todo.task}
                </span>
                <span
                  style={{
                    position: "absolute",
                    right: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleDelete(todo._id)}
                >
                  X
                </span>
              </div>
            </>
          ))
        ) : (
          <h2>No Records</h2>
        )}
      </div>
    </div>
  );
};

export default Home;
