import { Grid } from "@mui/material";
import React from "react";
import "./textarea.scss";

function Textarea({ label, name }) {
  return (
    <Grid xs={12} sm={12} md={12} item style={{ paddingTop: "64px" }}>
      <label htmlFor={name}>{label}</label>
      <textarea name={name} style={{ width: "100%", height: 110 }} />
    </Grid>
  );
}

export default Textarea;
