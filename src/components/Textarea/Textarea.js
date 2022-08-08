import { Grid, InputLabel } from "@mui/material";
import React from "react";
import "./textarea.scss";

function Textarea({ label }) {
  return (
    <Grid xs={12} sm={12} md={12} item>
      <InputLabel>{label}</InputLabel>
      <textarea aria-label="textarea" style={{ width: "100%", height: 110 }} />
    </Grid>
  );
}

export default Textarea;
