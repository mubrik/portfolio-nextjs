import React from "react";
// styled
import { 
  StyledWideScreenNav, CustomBaseButton,
  StyledNavButton, CustomNavButton
} from "../styledComponents";
// hook
import { useHomePageState } from '../homepage/Homepage';
// icons
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ListIcon from '@mui/icons-material/List';
import HomeIcon from '@mui/icons-material/Home';

const NavbarWideScreen = (): JSX.Element => {

  // homepage
  const { setHomePageState, state: homeState } = useHomePageState();

  return(
    <StyledWideScreenNav>
      <CustomNavButton 
        isActive={homeState === "profile"} 
        onClick={() => setHomePageState("profile")} 
        text={"Home"}
        icon={<HomeIcon fontSize="small"/>}
      />
      <CustomNavButton 
        isActive={homeState === "projects"} 
        onClick={() => setHomePageState("projects")} 
        text={"Projects"}
        icon={<ListIcon fontSize="small"/>}
      />
      <CustomNavButton 
        isActive={homeState === "nowPlaying"} 
        onClick={() => setHomePageState("nowPlaying")} 
        text={"Playlist"}
        icon={<MusicNoteIcon fontSize="small"/>}
      />

      {/* <CustomBaseButton
        size={"small"}
        onClick={() => setHomePageState("projects")}
        sx={{
          marginLeft: (theme) =>  theme.spacing(2),
        }}
        startIcon={<ListIcon/>}
      >
        Projects
      </CustomBaseButton>
      <CustomBaseButton
        size={"small"}
        onClick={() => setHomePageState("nowPlaying")}
        sx={{
          marginLeft: (theme) =>  theme.spacing(2),
        }}
        startIcon={<MusicNoteIcon/>}
      >
        Playlist
      </CustomBaseButton> */}
    </StyledWideScreenNav>
  );
};

export default NavbarWideScreen;