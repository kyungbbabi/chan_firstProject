import React from "react";
import { Box, Grid, Typography } from "@mui/material";

export default function Profile() {

  return (
    <Box>
      <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "3em"}}>
        <Typography variant="h4" gutterBottom>
          Profile Page
        </Typography>
        <Typography>
          This is the profile page content. Replace this with actual profile information.
        </Typography>
      </Box>
    </Box>
  );

};
