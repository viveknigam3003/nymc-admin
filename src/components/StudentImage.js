import React from "react";
import { makeStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    position: "relative",
    height: 80,
    margin: 20,
    width: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    borderStyle: "dotted",
    borderWidth: 1,
    borderColor: green[400]
  },
});

function StudentImage(props) {
  const classes = useStyles();
  return (
    <img
      src={props.uploaded ? props.src[0].dataURL : null}
      alt="upd_img"
      className={classes.root}
    />
  );
}

export default StudentImage;
