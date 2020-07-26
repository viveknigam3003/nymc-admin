import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
    fontFamily: "Work Sans",
    paddingTop: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 500,
    padding: 10
  },
  sub: {
    fontSize: 14,
    color: "#000000",
    opacity: 0.5,
    fontWeight: 100
  },
});

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>NYMC Membership Card</div>
      <div className={classes.sub}>
        Upload the image first and then fill in the candidate details
      </div>
    </div>
  );
}

export default Header;
