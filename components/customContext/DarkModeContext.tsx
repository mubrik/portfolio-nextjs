import React, {useState, useEffect } from "react";
// media query from mui
import {useMediaQuery} from "@mui/material";
// types
import { IDarkModeState } from "../../custom-types";
// util
import createTypeContextUtil from "../utils/createTypeContextUtil";

// create context
const [useDarkMode, DarkModeProvider] = createTypeContextUtil<IDarkModeState>();

interface IComponentProps {
  children?: React.ReactNode;
}
// node
const DarkModeContext = ({ children }:IComponentProps): JSX.Element => {

  // state
  const [darkMode, setDarkMode] = useState(false);
  // get darkmode preference
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  
  // effect for setting dark mode
  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  return(
    <DarkModeProvider value={{
      darkMode: darkMode,
      setDarkMode: setDarkMode
    }}>
      {children}
    </DarkModeProvider>
  );
};

export default DarkModeContext;
export { useDarkMode };
