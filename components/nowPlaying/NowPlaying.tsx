import React, {useState, useEffect} from "react";
//mui
import { Stack, styled,
  Box, Card, CardContent,
  CardMedia
} from "@mui/material";
// animate
import AnimateGradientBackgroundDiv from "../animation/AnimateGradientBackgroundDiv";
import AnimateInOutDiv from "./AnimateInOutDiv";
// styled
import { StyledProfileCardDiv, StyledNavAreaDiv } from "../styledComponents";
// custom
import { CustomBaseButton, CustomTypography } from "../styledComponents";
// hooks
import { useHomePageState } from "../homepage/Homepage";
import { usePlaylist } from "./NowPlayingContext";
import { useDarkMode } from "../customContext/DarkModeContext";
// icon
import LoadingButton from '@mui/lab/LoadingButton';
import ListIcon from '@mui/icons-material/List';
import HomeIcon from '@mui/icons-material/Home';

const StyledResponsiveGrid = styled("div")(({theme}) => ({
  display: "grid",
  gridTemplateRows: "auto",
  overflow: "auto",
  maxHeight: "70vh",
  padding: theme.spacing(1),
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "1fr 0.8fr",
    overflow: "hidden",
    gap: "10px",
    padding: theme.spacing(0.5),
    maxHeight: "75vh",
  },
}));


const NowPlaying = (): JSX.Element => {

  // homepage state
  const { setHomePageState } = useHomePageState();
  // tracks
  const {nowPlaying, prevTracks, dataState, setDataState} = usePlaylist();
  // dk mode
  const { darkMode } = useDarkMode();

  return(
    <AnimateInOutDiv>
      <AnimateGradientBackgroundDiv />
      <StyledProfileCardDiv>
        <Stack sx={{ gap: 1, position:"relative" }}>
        <StyledNavAreaDiv>
            <CustomBaseButton
              size={"small"}
              onClick={() => setHomePageState("profile")}
              sx={{
                marginLeft: (theme) =>  theme.spacing(1),
              }}
              startIcon={<HomeIcon/>}
            >
              Home
            </CustomBaseButton>
            <LoadingButton
              size={"small"}
              onClick={() => setDataState("idle")}
              loading={dataState === "loading" }
              variant="outlined"
              color={darkMode ? "secondary" : "primary"}
              sx={{
                marginRight: (theme) => theme.spacing(1)
              }}
            >
              Refresh
            </LoadingButton>
            <CustomBaseButton
              size={"small"}
              onClick={() => setHomePageState("projects")}
              sx={{
                marginLeft: (theme) =>  theme.spacing(1),
              }}
              startIcon={<ListIcon/>}
            >
              Projects
            </CustomBaseButton>
          </StyledNavAreaDiv>
          <StyledResponsiveGrid>
            <Stack direction={"row"}>
              { nowPlaying !== null &&
              <Card
                sx={{
                  display: 'flex',
                  justifyContent: "center", 
                  maxHeight: "84%",
                  boxShadow: "rgb(0 0 0 / 17%) 1px 1px 6px 0px",
                  border: "1px solid #0000002e",
                  borderRadius: "14px",
                  backgroundColor: "transparent"
                }} 
              >
                <Box sx={{
                  display: 'flex', 
                  flexDirection: 'column', 
                  textAlign: "center", 
                  gap: 1,
                  paddingTop: "5px"
                }}
                >
                  <CustomTypography 
                    variant="h4"
                  >
                    Now Playing
                  </CustomTypography>
                  <CardMedia
                    component="img"
                    image={
                      nowPlaying.image === "" ?
                      // load a placeholder
                      darkMode ? "https://media.giphy.com/media/jx8f8LrkhIOyAy6gcM/giphy.gif" :
                      "https://media.giphy.com/media/l46Ci4XuSbWL249fq/giphy.gif" :
                      nowPlaying.image
                    }
                    sx={{maxHeight: "60%"}}
                    alt="Live from space album cover"
                  />
                  <CardContent sx={{ flex: '1 1 auto' }}>
                    <CustomTypography 
                      variant="h5"
                    >
                      {nowPlaying.title}
                    </CustomTypography>
                    <CustomTypography 
                      variant="subtitle1"
                    >
                      {nowPlaying.artist}
                    </CustomTypography>
                    <CustomTypography 
                      variant="subtitle1"
                    >
                      {nowPlaying.date}
                    </CustomTypography>
                  </CardContent>
                </Box>
              </Card>
              }
            </Stack>
            <Stack direction={"column"} spacing={{ xs: 1, sm: 2, md: 1 }} >
              {
                (prevTracks !== null) &&
                prevTracks.map((track, index) => (
                  <Card 
                    key={index}
                    sx={{
                      display: 'flex',
                      flex: "0 1 auto",
                      maxHeight: "21vh",
                      backgroundColor: "transparent",
                      backdropFilter: "blur(3px)",
                      boxShadow: "rgb(0 0 0 / 17%) 1px 1px 6px 0px",
                      border: "1px solid #0000002e",
                      borderRadius: "14px", 
                      maxWidth: {
                        xs: "auto",
                        sm: "340px",
                        md: "420px"
                      },
                    }} 
                  >
                    <CardContent sx={{ flex: '1 1 auto' }}>
                      <CustomTypography 
                        variant="h5"
                      >
                        {track.title} 
                      </CustomTypography>
                      <CustomTypography 
                        variant="subtitle1"
                      >
                        {track.artist}
                      </CustomTypography>
                      <CustomTypography 
                        variant="subtitle1"
                      >
                        {track.date}
                      </CustomTypography>
                    </CardContent>
                  </Card>
                ))
              }
              {
                (dataState === "error") && 
                <>
                  <p> Error getting my tracks, try again or send a message :)</p>
                </>
              }
            </Stack>
          </StyledResponsiveGrid>
        </Stack>
      </StyledProfileCardDiv>
    </AnimateInOutDiv>
  );
};

export default NowPlaying;