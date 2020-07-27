import React, { useState } from "react";
import { TextField, makeStyles, Button, ButtonGroup } from "@material-ui/core";
import MemberCard from "./MemberCard";
import ImageUploading from "react-images-uploading";

const maxMbFileSize = 10 * 1024 * 1024;

const useStyles = makeStyles({
  root: {
    minWidth: "30%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});

function Form() {
  const classes = useStyles();
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [issued, setIssued] = useState();
  const [valid, setValid] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [image, setImage] = useState([]);
  const [uploaded, setUploaded] = useState(false)

  const handleSubmit = () => console.log("YO");

  const onChange = (imageList) => {
    setImage(imageList);
    setUploaded(true)
  };

  const onError = (errors, files) => {
    console.log(errors, files);
  };

  return (
    <React.Fragment>
      <form className={classes.root} id="member-form" onSubmit={handleSubmit}>
      <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="id"
          label="NYMC ID"
          type="id"
          id="nymc-id"
          size="small"
          defaultValue={id}
          onChange={(e) => setID(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="name"
          label="Name"
          type="name"
          id="name"
          size="small"
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          width="inherit"
          name="membership-start"
          label="Membership Start Date"
          type="date"
          id="membership-start"
          size="small"
          defaultValue={issued}
          onChange={(e) => setIssued(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="valid-through"
          label="Membership Valid Thru"
          type="date"
          id="membership-end"
          size="small"
          defaultValue={valid}
          onChange={(e) => setValid(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          name="start-date"
          label="Plan Start Date"
          type="date"
          id="start-date"
          size="small"
          defaultValue={start}
          fullWidth
          onChange={(e) => setStart(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          name="endDate"
          label="Plan End Date"
          type="date"
          id="end-date"
          size="small"
          defaultValue={end}
          fullWidth
          onChange={(e) => setEnd(e.target.value)}
        />
        <div style={{fontFamily: "Work Sans", fontSize: 12, opacity: 0.8, padding: 10}}>Upload Candidate Image</div>
        <ImageUploading
          onChange={onChange}
          maxFileSize={maxMbFileSize}
          acceptType={["jpg", "gif", "png", "jpeg"]}
          onError={onError}
        >
          {({ onImageUpload, onImageRemoveAll }) => (
            <ButtonGroup>
              <Button variant="outlined" color="primary" onClick={onImageUpload}>Upload image</Button>
              <Button variant="outlined" color="secondary" disabled={!uploaded} onClick={() => {setUploaded(false); return onImageRemoveAll}}>Remove image</Button>
            </ButtonGroup>
          )}
        </ImageUploading>
      </form>
      <MemberCard
        id={id}
        name={name}
        issued={issued}
        valid={valid}
        start={start}
        end={end}
        image={image}
        uploaded={uploaded}
      />
    </React.Fragment>
  );
}

export default Form;
