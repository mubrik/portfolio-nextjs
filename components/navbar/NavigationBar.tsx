import React from "react";
// mui
import { styled } from "@mui/material/styles";
// custom
import DarkModeSwitch from "./DarkModeSwitch";
import NavButton from "./NavButton";

const StyledNavAreaDiv = styled("nav")(({theme}) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(1)
}));

interface IComponentProps {
  children?: React.ReactNode;
}

const NavigationBar = ({ children }: IComponentProps): JSX.Element => {

  return(
    <StyledNavAreaDiv>
      {children}
      <NavButton />
      <DarkModeSwitch />
    </StyledNavAreaDiv>
  );
};

export default NavigationBar;