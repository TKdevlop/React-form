import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
export default function Confirm(props) {
  return (
    <div
      style={{
        maxWidth: 400,
        margin: "0 auto ",
        textAlign: "center",
        padding: 10
      }}
    >
      <Typography variant="h6" gutterBottom>
        First Name:
      </Typography>
      <Typography gutterBottom noWrap>
        {props.firstName}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Last Name:
      </Typography>
      <Typography gutterBottom noWrap>
        {props.lastName}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Email:
      </Typography>
      <Typography gutterBottom noWrap>
        {props.email}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Occupation:
      </Typography>
      <Typography gutterBottom noWrap>
        {props.occupation}
      </Typography>
      <Typography variant="h6" gutterBottom>
        City:
      </Typography>
      <Typography gutterBottom noWrap>
        {props.city}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Bio:
      </Typography>
      <Typography gutterBottom noWrap>
        {props.bio}
      </Typography>
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
        CONFIRM & COUTINUE
      </Button>
    </div>
  );
}
