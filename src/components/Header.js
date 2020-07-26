import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: "100%",
        fontSize: 24,
        fontFamily: "Work Sans",
        fontWeight: 500,
        paddingTop: 20,
        paddingBottom: 20
    }
});

function Header() {
  const classes = useStyles();
  return <div className={classes.root}>NYMC Online</div>;
}

export default Header;
