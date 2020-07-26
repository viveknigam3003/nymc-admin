import React from "react";
import { makeStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    position: "relative",
    left: 0,
    bottom: 0,
    backgroundColor: green["A200"],
    color: "#000000",
    width: "100%",
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    opacity: 0.8,
    padding: 10,
    fontSize: 10,
    fontFamily: "Work Sans",
  },
});

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.text}>Developed by Vivek Nigam (viveknigam3003) | 2020</div>
    </div>
  );
}

export default Footer;
