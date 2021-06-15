import React, { useState } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Modal,
} from "@material-ui/core";
import "./Todo.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "400",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const updateTodo = (i) => {
    //update the todo list with new input
    props.updateList(input, i);
    setOpen(false);
  };
  return (
    <>
      <Modal open={open} onClose={handleOpen}>
        <div className={classes.paper}>
          <h1>i am a modal</h1>
          <input
            placeholder={props.Button}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button onClick={() => updateTodo(props.index)}>Update</Button>
        </div>
      </Modal>
      <List className="">
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText primary={props.text} secondary="dummy" />
        </ListItem>
        <button onClick={(e) => setOpen(true)}>Edit</button>
        <DeleteForeverIcon onClick={() => props.deleteTodo(props.text)} />
      </List>
    </>
  );
}

export default Todo;
