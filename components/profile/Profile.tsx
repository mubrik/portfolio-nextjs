import React from "react";
// mui
import { Avatar } from "@mui/material";
// icons
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ListIcon from '@mui/icons-material/List';
//dk mode
import { useDarkMode } from "../customContext/DarkModeContext";
// custom
import AnimateInOutDiv from "./AnimateInOutDiv";
import AnimateGradientBackgroundDiv from "../animation/AnimateGradientBackgroundDiv";
import { 
  StyledProfileCardDiv, StyledNavAreaDiv,
  CustomBaseButton,StyledProfileAviDiv,
  StyledAboutDiv, CustomTypography,
  StyledParagraphDiv
} from "../styledComponents";
// hooks
import { useHomePageState } from "../homepage/Homepage";

const Profile = (): JSX.Element => {
  // dk mode
  const { darkMode } = useDarkMode();
  // homepage state
  const { setHomePageState } = useHomePageState();

  return(
    <AnimateInOutDiv>
      <AnimateGradientBackgroundDiv/>
      <StyledProfileCardDiv>
        <StyledProfileAviDiv>
          <Avatar 
            src={darkMode ? "/avi2.png" : "/avi.png"} 
            alt="test"
            sx={{ width: 80, height: 80 }}
          />
        </StyledProfileAviDiv>
        <StyledAboutDiv>
          <CustomTypography>My name is Mubarak Yahaya, A developer from Nigeria. </CustomTypography>
          <CustomTypography>I love good music, coffee and tweaking stuff :) </CustomTypography>
          <CustomTypography>My current development stack includes Python, javaScript( typeScript ) and Linux </CustomTypography>
        </StyledAboutDiv>
        <StyledParagraphDiv>
          <CustomTypography>Check out some of my</CustomTypography>
          <CustomBaseButton
            variant={"contained"}
            sx={{marginLeft:(theme) => theme.spacing(1)}}
            onClick={() => setHomePageState("projects")}
          >
            Projects
          </CustomBaseButton>
        </StyledParagraphDiv>
        <StyledParagraphDiv>
          <CustomTypography>What am i </CustomTypography>
          <CustomBaseButton
            variant={"contained"}
            sx={{marginLeft:(theme) => theme.spacing(1), marginRight:(theme) => theme.spacing(1)}}
            onClick={() => setHomePageState("nowPlaying")}
          >
            Listening
          </CustomBaseButton>
          <CustomTypography>to?</CustomTypography>
        </StyledParagraphDiv>
      </StyledProfileCardDiv>
    </AnimateInOutDiv>
  );
};

export default Profile;