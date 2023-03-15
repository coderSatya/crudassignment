import React from "react";
import { Grid, Fab, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import StudentItem from "./StudentItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {clearAll} from '../../redux/features/studentSlice'


const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    right: "5%",
    bottom: "5%",
  },
}));



const Students = () => {
  const classes = useStyles();
  const students = useSelector(state => state.student.students)
  console.log(students);
  const dispatch = useDispatch();
  const handleClick = ()=>{
    dispatch(clearAll());
  }
  return (
    <>
      <Grid spacing={2} container>
        {students.map((student, index) => (
          <StudentItem key={index} student={student} />
        ))}
      </Grid>
      <Fab
        component={Link}
        to="/students/create"
        color="primary"
        className={classes.fab}
      >
        <AddIcon />
      </Fab>
      <button style={{fontWeight:'bold',margin:'20px 500px', fontSize:'20px'}} onClick={handleClick}>Clear All</button>
    </>
  );
};

export default Students;
