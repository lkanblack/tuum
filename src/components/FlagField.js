import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { Grid } from "@mui/material";

function FlagField() {
  const [selected, setSelected] = useState("");

  return (
    <Grid xs={12} sm={6} md={6} item>
      <ReactFlagsSelect
        selected={selected}
        placeholder="Country"
        alignOptions="left"
        onSelect={(code) => setSelected(code)}
      />
    </Grid>
  );
}

export default FlagField;
