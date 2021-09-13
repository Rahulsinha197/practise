import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";
import "../pages/AddUser.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
}));

const AddUser = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact: "",
    address: "",
  });
  const [error, setError] = useState("");

  let history = useHistory();
  let dispatch = useDispatch();

  const { first_name, last_name, email, contact, address } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    console.log(name, value);
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!first_name || !last_name || !address || !email || !contact) {
      setError("Can't have empty fields");
    } else {
      console.log(state);
      dispatch(addUser(state, history));

      setError("");
    }
  };
  return (
    <div>
      <Button
        className="add"
        variant="contained"
        color="secondary"
        onClick={() => history.push("./")}
      >
        Go Back
      </Button>
      <h2>Add User</h2>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="First Name"
          value={first_name}
          name="first_name"
          placeholder="Enter Your first Name"
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Last Name"
          value={last_name}
          name="last_name"
          placeholder="Enter Your Last Name"
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Email"
          value={email}
          name="email"
          placeholder="Enter Email"
          type="email"
          onChange={handleInputChange}
        />
        <br />

        <TextField
          id="standard-basic"
          label="contact"
          value={contact}
          name="contact"
          placeholder="Enter Contact"
          type="number"
          onChange={handleInputChange}
        />
        <br />

        <TextField
          id="standard-basic"
          label="Address"
          name="address"
          value={address}
          placeholder="Enter Address"
          type="text"
          onChange={handleInputChange}
        />
        <br />

        <Button
          style={{ width: "100px" }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddUser;
