import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function BasicButtons({ isDisabled,isBiggerFont }) {
  const theme = createTheme({
    typography: {
      fontSize: isBiggerFont ? 28 : 14,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2} direction="column" style={{ width: "auto" }}>
        <Button variant="contained" type="submit" disabled={isDisabled}>
          Wyślij
        </Button>
      </Stack>
    </ThemeProvider>
  );
}
