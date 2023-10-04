import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Datepicker({ controller, isBiggerFont }) {
  const theme = createTheme({
    typography: {
      fontSize: isBiggerFont ? 28 : 14,
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          "& > :not(style)": { m: 1, width: "450px" }
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en" >
          <DatePicker
            label="Data urodzenia"
            value={controller.value ? dayjs(controller.value) : null}
            onChange={(newValue) => {
              controller.onChange(newValue.toDate());
            }}
          />
        </LocalizationProvider>
      </Box>
    </ThemeProvider>
  );
}
