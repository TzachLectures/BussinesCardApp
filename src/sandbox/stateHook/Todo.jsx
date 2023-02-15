import { Button, List, ListItem, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const updateNewTask = (e) => {
    setNewTask(e.target.value);
  };

  const addToList = () => {
    setTodoList([...todoList, { id: todoList.length, name: newTask }]);
    setNewTask("");
  };

  return (
    <>
      <TextField
        label="New Task"
        variant="outlined"
        value={newTask}
        onChange={updateNewTask}
      />
      <Button variant="contained" onClick={addToList} disabled={newTask == ""}>
        +
      </Button>
      <List>
        {todoList.map((item) => (
          <ListItem key={item.id}>{item.name}</ListItem>
        ))}
      </List>
    </>
  );
}
