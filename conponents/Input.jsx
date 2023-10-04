"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";



export default function Input({ register, name, label,isBiggerFont }) {
  const theme = createTheme({
    typography: {
      fontSize: isBiggerFont? 28:14,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          "& > :not(style)": { m: 1, width: "450px" },
        }}
      >
        <TextField
          theme
          id="outlined-basic"
          label={label}
          variant="outlined"
          {...register(name)}
        />
      </Box>
    </ThemeProvider>
  );
}
