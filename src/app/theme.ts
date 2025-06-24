"use client";

import { brown, orange } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: orange[500],
    },
    secondary: {
      main: brown[500],
    },
  },
  typography: {
    fontFamily: "var(--font-roboto)",
    h1: {
      fontSize: "2rem", // default is ~6rem
      fontWeight: 500,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 400,
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 400,
    },
    h5: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    h6: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          textTransform: "none",
          "&.active": {
            borderBottom: `2px solid ${theme.palette.primary.main}`,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            paddingBottom: "6px",
          },
        }),
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          ".active": {
            borderBottom: `2px solid ${theme.palette.primary.main}`,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          },
        }),
      },
    }
  },
});

export default theme;
