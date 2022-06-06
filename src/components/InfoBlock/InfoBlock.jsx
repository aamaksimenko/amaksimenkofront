import React, { memo } from "react";
import { Alert } from "@mui/material";

function InfoBlock({ severity, text }) {
  return (
    <Alert sx={{ width: "100%" }} severity={severity}>
      {text}
    </Alert>
  );
}

export default memo(InfoBlock);
