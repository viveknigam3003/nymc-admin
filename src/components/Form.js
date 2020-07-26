import React, { useState } from "react";
import { TextField, makeStyles } from "@material-ui/core";
import MemberCard from "./MemberCard";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});

function Form() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [issued, setIssued] = useState("");
  const [valid, setValid] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleSubmit = () => console.log("YO");

  return (
    <React.Fragment>
      <form className={classes.root} id="member-form" onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          name="name"
          label="Name"
          type="name"
          id="password"
          size="small"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          name="membership-start"
          label="Membership Start Date"
          type="membership-start"
          id="membership-start"
          size="small"
          onChange={(e) => setIssued(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          name="valid-through"
          label="Membership Valid Through"
          type="membership-end"
          id="membership-end"
          size="small"
          onChange={(e) => setValid(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          name="start-date"
          label="Plan Start Date"
          type="start-date"
          id="start-date"
          size="small"
          onChange={(e) => setStart(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          name="endDate"
          label="Plan End Date"
          type="string"
          id="end-date"
          size="small"
          onChange={(e) => setEnd(e.target.value)}
        />
      </form>
      <MemberCard
        name={name}
        issued={issued}
        valid={valid}
        start={start}
        end={end}
      />
    </React.Fragment>
  );
}

export default Form;
