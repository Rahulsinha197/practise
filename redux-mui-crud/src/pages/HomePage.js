import React, { useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useSelector, useDispatch } from "react-redux";
import { loadUsers, deleteUser } from "../redux/actions";
import { useHistory } from "react-router-dom";

const useButtonStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

/* const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
]; */

const useStyles = makeStyles({
  table: {
    marginTop: 100,
    minWidth: 900,
  },
});

const HomePage = () => {
  const classes = useStyles();
  const buttonStyles = useButtonStyles();
  let dispatch = useDispatch();
  let history = useHistory();
  const { users } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <div>
      <div className={buttonStyles.root}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/addUser")}
        >
          {" "}
          Add User{" "}
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>First Name</StyledTableCell>
              <StyledTableCell>Last Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Contact</StyledTableCell>
              <StyledTableCell align="center">Adderss</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user) => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell component="th" scope="row">
                    {user.first_name}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {user.last_name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{user.email}</StyledTableCell>
                  <StyledTableCell align="right">
                    {user.contact}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {user.address}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <div className={buttonStyles.root}>
                      <ButtonGroup
                        variant="contained"
                        aria-label="contained primary button group"
                      >
                        <Button
                          color="primary"
                          onClick={() => history.push(`/editUser/${user.id}`)}
                        >
                          Edit{" "}
                        </Button>
                        <Button
                          color="secondary"
                          onClick={() => handleDelete(user.id)}
                        >
                          Delete
                        </Button>
                      </ButtonGroup>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default HomePage;
