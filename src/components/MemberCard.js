import React, { useRef } from "react";
import { exportComponentAsJPEG } from "react-component-export-image";

import { makeStyles, Button } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import Logo from "./Logo";
import StudentImage from "./StudentImage";

const useStyles = makeStyles({
  root: {
    width: "89mm",
    height: "51mm",
    fontFamily: "Work Sans",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#fffafa",
    marginTop: 20,
    borderColor: green[400],
    borderWidth: 2,
    borderStyle: "solid",
  },
  header: {
    display: "flex",
    fontSize: 12,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    fontWeight: 500,
    color: green[600],
    paddingBottom: 0,
  },
  sub: {
    textAlign: "left",
    width: "50%",
    fontFamily: "Work Sans",
    fontSize: 10,
    paddingLeft: 10,
    paddingRight: 10,
    color: "#000000",
    opacity: 0.8,
  },
  details: {
    padding: 10,
    display: "flex",
    height: "30mm",
    alignItems: "start",
    justifyContent: "space-evenly",
    flexDirection: "column",
    fontFamily: "Work Sans",
    fontSize: 12,
    fontWeight: 500,
    opacity: 0.8,
  },
  btn: {
    margin: 10,
  },
  values: {
    color: "#000000",
    opacity: 0.8,
  },
  cont: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
});

function MemberCard(props) {
  const classes = useStyles();
  const componentRef = useRef();

  const info = {
    id: props.id,
    name: props.name,
    issued: props.issued,
    valid: props.valid,
    start: props.start,
    end: props.end,
    image: props.image,
    uploaded: props.uploaded
  };

  const ComponentToPrint = React.forwardRef((props, ref) => (
    <div className={classes.root} ref={ref}>
      <div id="header" className={classes.header}>
        <div id="company-name">Nirmal Yoga and Meditation Center</div>
        <Logo />
      </div>
      <div id="sub" className={classes.sub}>
        E-Membership Card
      </div>
      <div id="left" className={classes.cont}>
        <div id="details" className={classes.details}>
        <div id="nymc-id" className={classes.fields}>
            ID: <span className={classes.values}>{info.id}</span>{" "}
          </div>
          <div id="name" className={classes.fields}>
            Name: <span className={classes.values}>{info.name}</span>{" "}
          </div>
          <div id="issued" className={classes.fields}>
            Issued: <span className={classes.values}>{info.issued}</span>{" "}
          </div>
          <div id="valid" className={classes.fields}>
            Valid Thru: <span className={classes.values}>{info.valid}</span>{" "}
          </div>
          <div id="start" className={classes.fields}>
            Plan Start: <span className={classes.values}>{info.start}</span>{" "}
          </div>
          <div id="end" className={classes.fields}>
            Plan End: <span className={classes.values}>{info.end}</span>{" "}
          </div>
        </div>
        <StudentImage src={info.image} uploaded={info.uploaded}/>
      </div>
    </div>
  ));

  return (
    <React.Fragment>
      <ComponentToPrint ref={componentRef} />
      <Button
        color="primary"
        variant="contained"
        size="small"
        className={classes.btn}
        onClick={() => exportComponentAsJPEG(componentRef)}
      >
        Save
      </Button>
    </React.Fragment>
  );
}

export default MemberCard;
