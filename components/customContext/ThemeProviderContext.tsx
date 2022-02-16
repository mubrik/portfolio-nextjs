import React from "react";
// mui
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
// dk mode
import { useDarkMode } from "./DarkModeContext";

interface IComponentProps {
  children?: React.ReactNode;
}

const ThemeProviderContext = ({ children }: IComponentProps): JSX.Element => {

  const { darkMode } = useDarkMode();

  // theme memoised
  const responsiveTheme = React.useMemo(
    () => {
      // create theme
      const _theme = createTheme({
        palette: {
          type: darkMode ? "dark" : "light",
          mode: darkMode ? "dark" : "light",
          primary: {
            light: "#6ec6ff",
            main: "#2196f3",
            dark: "#0069c0",
          },
          secondary: {
            light: "#ff8038",
            main: "#c95100",
            dark: "#912000",
          },
          warning: {
            main: "#b40000"
          }
        },
        typography: {
          fontFamily: [
              "Ubuntu",
              "sans-serif",
          ].join(","),
          fontSize: 14,
        },
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1536,
          },
        },
      });

      // return responsive theme
      return responsiveFontSizes(_theme, {factor:3});
    },
    [darkMode],
  );

  return(
    <ThemeProvider theme={responsiveTheme}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderContext;