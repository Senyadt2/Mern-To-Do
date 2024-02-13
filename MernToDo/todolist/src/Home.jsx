import React, { useEffect, useState, useContext } from "react";
import Create from "./Create";
import axios from "axios";
import api from "./utils/api";
import globalcontext from "./GlobalContentProvider/GlobalContext";
const Home = () => {
  const { dataChanged, setDataChanged } = useContext(globalcontext);
  const { fetchData, deleteData } = api();
  // const [data, setData] = useState();
  // console.log(data);
  const [todos, setTodos] = useState([]);

  const containerStyle = {
    marginTop: "10px",
    width: "52%",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const getDat = async () => {
    const data = await fetchData("/get");
    setTodos(data);
    console.log(data);
  };
  useEffect(() => {
    getDat();
    // setDataChanged(false); //this is not needed as global gets restart and does the work
  }, [dataChanged]);

  const handleEdit = (id) => {
    axios
      .put(`https://rikintodo.onrender.com/update/${id}`)
      .then((res) => setTodos(res.data))
      .catch((ex) => console.log(ex));
  };

  const handleDelete = async (id) => {
    // axios
    //   .delete(`https://rikintodo.onrender.com/delete/${id}`)
    //   .then((res) => alert("Deleted"))
    //   .catch((ex) => console.log(ex));
    const response = await deleteData(`/delete/${id}`);
    alert("Deleted");
    setDataChanged(true);
  };

  return (
    <div className="home">
      <h1>To do list</h1>
      <Create />
      <div style={containerStyle}>
        {todos?.length > 0 ? (
          todos.map((todo, index) => (
            <div
              key={index}
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
          ))
        ) : (
          <h2>No Records</h2>
        )}
      </div>
    </div>
  );
};

export default Home;
