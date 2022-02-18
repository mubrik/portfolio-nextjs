import React from "react";
// mui
import { useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
// custom
import DarkModeSwitch from "./DarkModeSwitch";
import NavButton from "./NavButton";
import NavbarWideScreen from "./NavbarWideScreen";
import NavbarLogo from "./NavbarLogo";
// styled
import { StyledNavMarginLeftRight } from "../styledComponents";

const StyledNavAreaHeader = styled("header")(({theme}) => ({
  display: "flex",
  flex: "1 1 auto",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(1)
}));

interface IComponentProps {
  children?: React.ReactNode;
}

const NavigationBar = ({ children }: IComponentProps): JSX.Element => {

  // responsive
  const isSmallScreen = useMediaQuery('(max-width:550px)');
  
  return(
    <StyledNavAreaHeader>
      <StyledNavMarginLeftRight>
        <NavbarLogo/>
      </StyledNavMarginLeftRight>
      {
        !isSmallScreen &&
        <NavbarWideScreen />
      }
      <StyledNavMarginLeftRight>
        <DarkModeSwitch />
        {
          isSmallScreen &&
          <NavButton />
        }
      </StyledNavMarginLeftRight>
    </StyledNavAreaHeader>
  );
};

export default NavigationBar;