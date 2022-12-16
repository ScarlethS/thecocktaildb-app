import * as React from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

export default function LinearColor() {
  return (
    <Stack
      sx={{ display: "Flex", width: "100%", color: "white.500" }}
      spacing={6}
    >
      <LinearProgress color="inherit" height={2} />
    </Stack>
  );
}
