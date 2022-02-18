import * as React from 'react';
// material
import { styled } from '@mui/material/styles';
import { Menu, MenuItem, Fade, IconButton } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';
// dk mode context
import { useDarkMode } from '../customContext/DarkModeContext';
// types
import { IHomePageState } from '../../custom-types';
// hook
import { useHomePageState } from '../homepage/Homepage';

// styled
const StyledDiv = styled("div")(({theme}) => ({
  position: "relative",
  // border: `1px solid ${theme.palette.type == "dark" ? theme.palette.secondary.main : theme.palette.primary.main}`,
  // borderRadius: "18px",
  [theme.breakpoints.up("md")]: {
    marginLeft: theme.spacing(6)
  },
  [theme.breakpoints.up("lg")]: {
    marginLeft: theme.spacing(8)
  },
}));

interface IComponentProps {
  children?: React.ReactNode;
}

const NavButton = ({ children }:IComponentProps): JSX.Element => {
  // states
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement|HTMLElement|null>(null);
  const menuShow = Boolean(anchorEl);
  // darkmode
  const {darkMode} = useDarkMode();
  // homepage
  const { setHomePageState } = useHomePageState();

  // handle click, mount element
  const handleMenuClick = (_event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(_event.currentTarget.parentElement);
  };
  // handle menu close
  const handleMenuItemClick = (param?: IHomePageState): void => {
    if (param) {
      setHomePageState(param);
    }
    setAnchorEl(null);
  };

  return (
    <StyledDiv>
      <IconButton 
        aria-controls="fade-menu"
        aria-haspopup="true" 
        color={darkMode ? "secondary" : "primary"}
        onClick={(e) => handleMenuClick(e)}
      >
        <MenuOutlined fontSize={"small"}/>
      </IconButton>
      <Menu
        open={menuShow}
        anchorEl={anchorEl}
        onClose={() => handleMenuItemClick()}
        id="faded-menu"
        TransitionComponent={Fade}
      >
        <MenuItem onClick={() => handleMenuItemClick("profile")}> Home </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("projects")}> Projects </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("nowPlaying")}> Now Playing </MenuItem>
      </Menu>
    </StyledDiv>
  );
};

export default NavButton;