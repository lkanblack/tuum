import { FormControl, InputLabel, Grid, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

function SelectField({ value, label, required }) {
  const [selected, setSelected] = useState();
  return (
    <Grid xs={12} sm={6} md={6} item>
      <FormControl fullWidth required={required}>
        <InputLabel style={{ marginLeft: "-13px" }}>{label}</InputLabel>

        <Select
          variant="standard"
          onChange={(e) => setSelected(e.target.value)}
        >
          {value.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
}

export default SelectField;
