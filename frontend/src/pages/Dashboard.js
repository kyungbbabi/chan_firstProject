import React from "react";
import { Box, Grid, Typography } from "@mui/material";

export default function Dashboard(){

  return (
    <Box>
      <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "3em"}}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Typography>
          Dashboard content goes here. Replace with actual dashboard components and data.
        </Typography>
      </Box>
    </Box>
  );

};
