import React from "react";
import { Button } from "@material-ui/core";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core";
import "./Todo.css";
function Todo(props) {
  return (
    <List className="">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={props.text} secondary="dummy" />
      </ListItem>
      <Button onClick={() => props.deleteTodo(props.text)}> Delete me </Button>
    </List>
  );
}

export default Todo;
