const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const TodoModel = require("./Models/Todo");

const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/test"); //creating a database called test

app.get("/get", (req, res) => {
  TodoModel.find() //find all the data from database
    .then((result) => res.json(result)) //send the array of objets in json
    .catch((err) => res.json(err));
});

app.post("/add", (req, res) => {
  const task = req.body.task; //data taken from body of react axios post
  // Took task from body and post it inside TodoModel (collection) eg: todos.create({data})
  TodoModel.create({
    task: task,
  })
    .then((res) => res.json(res)) //response sended
    .catch((err) => res.json(err));
});

app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  TodoModel.findByIdAndUpdate({ _id: id }, { done: true })
    .then((result) => {
      res.json(result);
      console.log(result);
    })
    .catch((ex) => res.json(ex));
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  TodoModel.findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is running");
});
