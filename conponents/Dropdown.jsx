"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";


export default function Dropdown({ options, controller, isBiggerFont }) {
  const handleChange = (event) => {
    controller.onChange(event.target.value);
  };

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
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Kontynent</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={controller.value}
            label="Kontynent"
            onChange={handleChange}
          >
            {options.map((option, i) => {
              return (
                <MenuItem key={i} value={option}>
                  {option}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </ThemeProvider>
  );
}
