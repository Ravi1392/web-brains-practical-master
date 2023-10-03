import { Alert, Stack } from "@mui/material";
import React from "react";

const ErrorAlert = ({ error }) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert sx={{ p: "0.5px 10px" }} severity="error">
        {error}
      </Alert>
    </Stack>
  );
};

export default ErrorAlert;
