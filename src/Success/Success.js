import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
export default function Success() {
  useEffect(() => {
    //make HTTP Request
  });
  return (
    <div
      style={{
        maxWidth: "80%",
        margin: "0 auto",
        padding: 10,
        textAlign: "center"
      }}
    >
      <Typography style={{ padding: 10 }} variant="h3">
        Thank You For Your Submisson!
      </Typography>
      <Typography style={{ padding: 10 }} gutterBottom noWrap>
        You will get email with futher instructions.
      </Typography>
    </div>
  );
}
