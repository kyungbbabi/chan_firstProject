import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

export default function Notifications(){

  const [open, setOpen] = useState(false);
  
  return (
    <Box>
      <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "3em"}}>
        <Typography variant="h4" gutterBottom>
          Notifications
        </Typography>
        <Typography>
          Notification content goes here. Replace with actual notifications and data.
        </Typography>
      </Box>
    </Box>
  );

};
