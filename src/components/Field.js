import React from "react";
import { Grid, TextField } from "@mui/material";

function Field({ label, placeholder, required }) {
  return (
    <Grid xs={12} sm={6} md={6} item>
      <TextField
        label={label}
        placeholder={placeholder}
        variant="standard"
        fullWidth
        required={required}
      />
    </Grid>
  );
}

export default Field;
