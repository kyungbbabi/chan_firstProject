import React from "react";
import { Pagination as MuiPagination, Box, Stack } from "@mui/material";

const Pagination = ({ currentPage, totalPage, onPageChange, color = 'primary', size = 'medium'}) => {
  const handleChange = (event, value) => {
    onPageChange(value);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, mb: 3 }}>
      <Stack spacing={2}>
        <MuiPagination 
          count={totalPage}
          page={currentPage}
          onChange={handleChange}
          color={color}
          size={size}
          showFirstButton 
          showLastButton
        />
      </Stack>
    </Box>
  );
};

export default Pagination;