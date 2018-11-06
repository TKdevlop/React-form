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
        name="firstName"
        value={props.firstNameValue}
        onChange={props.firstName}
        fullWidth
        label="First name"
        type="text"
        margin="normal"
      />
      <br />
      <TextField
        name="lastName"
        value={props.lastNameValue}
        onChange={props.lastName}
        fullWidth
        label="Last name"
        type="text"
        margin="normal"
      />
      <br />
      <TextField
        name="email"
        value={props.emailValue}
        onChange={props.email}
        fullWidth
        label="Email"
        type="email"
        margin="normal"
      />
      <br />
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
