import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser, updateUser } from "../redux/actions";
import "../pages/EditUser.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
}));

const EditUser = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact: "",
    address: "",
  });
  const [error, setError] = useState("");
  let { id } = useParams();
  const { user } = useSelector((state) => state.data);

  let history = useHistory();
  let dispatch = useDispatch();

  const { first_name, last_name, email, contact, address } = state;

  useEffect(() => {
    dispatch(getSingleUser(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);

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
      dispatch(updateUser(state, id));
      history.push("/");
      setError("");
    }
  };
  return (
    <div>
      <Button
        className="edit"
        variant="contained"
        color="secondary"
        onClick={() => history.goBack()}
      >
        Go Back
      </Button>
      <h2>Edit User</h2>
      {error && <h3 className="erpop">{error}</h3>}
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
          Update
        </Button>
      </form>
    </div>
  );
};

export default EditUser;
