import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
export default function UserDetails(props) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: 10,
        maxWidth: 500,
        margin: "0 auto"
      }}
    >
      <TextField
        name="occupation"
        value={props.OccupationValue}
        onChange={props.Occupation}
        fullWidth
        label="Occupation"
        type="text"
        margin="normal"
      />
      <br />
      <TextField
        name="city"
        value={props.cityValue}
        onChange={props.city}
        fullWidth
        label="City"
        type="text"
        margin="normal"
      />
      <br />
      <TextField
        name="bio"
        value={props.bioValue}
        onChange={props.bio}
        fullWidth
        label="Bio"
        type="email"
        margin="normal"
      />
      <br />
      <Button
        onClick={props.prevStage}
        style={{ padding: "10px 25px", margin: 10 }}
        variant="contained"
        color="secondary"
      >
        BACK
      </Button>
      <Button
        onClick={props.nextStage}
        style={{ padding: "10px 25px", margin: 10 }}
        variant="contained"
        color="primary"
      >
        CONTINUE
      </Button>
    </div>
  );
}
