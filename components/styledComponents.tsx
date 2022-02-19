
import { styled } from "@mui/material/styles";
import { 
  Typography, TypographyProps,
  Button, ButtonProps,
  Box
} from '@mui/material';
// dk mode
import { useDarkMode } from "./customContext/DarkModeContext";

export const CustomTypography = ({children, ...rest}: TypographyProps): JSX.Element => {
  // darkmode
  const { darkMode } = useDarkMode();

  return(
    <Typography
      sx={{color: darkMode ? "text.primary" : "text.secondary"}}
      {...rest}
    >
      {children}
    </Typography>
  );
};

export const CustomBaseButton = ({ children, href, variant, onClick,  ...rest }: ButtonProps):JSX.Element => {
  // href may or may not be passed in
  const _href = href ? href : "";

  // darkmode
  const {darkMode} = useDarkMode();
  // handle click, need links to open in new tab
  const handleLink = (href: string, event?:React.MouseEvent<HTMLButtonElement>): void => {
    // prev default
    if (event) {
      event.preventDefault();
    }
    // manually open
    window.open(href, "_blank");
  };

  return(
    <Button 
      color={darkMode ? "secondary" : "primary"}
      variant={variant ? variant : "outlined"}
      onClick={onClick ? onClick : (e) => handleLink(_href, e)}
      href={href ? href : ""}
      {...rest}
    >
      {children}
    </Button>
  );
};

interface ICustomNavButton {
  text: string;
  isActive: boolean;
  onClick?: () => void;
  icon?: React.ReactElement;
}

export const CustomNavButton = ({isActive, onClick, text, icon }: ICustomNavButton): JSX.Element => {

  return(
    <Box
      component={"span"}
      onClick={onClick ? onClick : undefined }
      sx={[
        {
          flexShrink: 0,
          display: 'inline-flex',
          alignItems: 'stretch',
          position: 'relative',
          borderRadius: 4,
          padding: 0.8,
          marginLeft: 0.4,
          marginRight: 0.4,
          cursor: 'pointer',
          textDecoration: 'none',
          textTransform: "uppercase",
          minWidth: "64px",
          transition: '0.2s ease-out',
          fontFamily: "ubuntu",
          fontWeight: "300",
          fontSize: "0.8125rem",
          lineHeight: "1.75",
          color: (theme) => theme.palette.mode === "dark" ? "secondary.main" : "primary.main",
          "&:hover": {
            backgroundColor: (theme) => theme.palette.mode === "dark" ? `${theme.palette.secondary.main}0a` : `${theme.palette.primary.main}0a`,
          },
          '&:after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            bottom: 0,
            left: '50%',
            width: 6,
            height: 6,
            borderRadius: 50,
            transform: 'scale(0) translateX(-50%)',
            transition: '0.3s ease-out',
            opacity: 0,
            backgroundColor: (theme) => theme.palette.mode == "dark" ? theme.palette.secondary.light : theme.palette.primary.light
          },
        },
        isActive && {
          fontWeight: "500",
          "&:after": {
            opacity: 1,
            transform: 'scale(1) translateX(-50%)',
          },
        }
      ]}
    >
      {
        icon &&
        <Box
          component={"span"}
          sx={{
            display: "inherit",
            marginLeft: "-2px",
            marginRight: "6px"
          }}
        >
          {icon}
        </Box>
      }
      {text}
    </Box>
  );
};

export const StyledNavButton = styled("div")(({theme}) => ({
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  borderRadius: 4,
  padding: theme.spacing(1),
  cursor: 'pointer',
  textDecoration: 'none',
  transition: '0.2s ease-out',
  '&:after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: 6,
    height: 6,
    borderRadius: 50,
    transform: 'scale(0) translateX(-50%)',
    transition: '0.3s ease-out',
    opacity: 0,
    backgroundColor: theme.palette.mode == "dark" ? theme.palette.secondary.dark : theme.palette.secondary.light
  },
  "&:hover": {
    "&:after": {
      opacity: 1,
      transform: 'scale(1) translateX(-50%)',
    },
  },
  "&:active": {
    "&:after": {
      opacity: 1,
      width: 40,
      backgroundColor: theme.palette.mode == "dark" ? theme.palette.secondary.dark : theme.palette.secondary.light,
      transform: 'scale(1) translateX(-50%)',
    },
  }
}));

export const StyledHomeRootFlexMain = styled("main")(({theme}) => ({
  display: "flex",
  flexDirection: "row",
  position: "relative",
  minHeight: "92vh",
  alignItems: "flex-start",
  justifyContent: "center",
  overflow: "hidden",
  padding: theme.spacing(0.8),
  [theme.breakpoints.up("sm")]: {
    justifyContent: "center",
  }
}));

export const StyledNavAreaDiv = styled("div")(({theme}) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(1)
}));

export const StyledProfileCardDiv = styled("div")(({theme}) => ({
  position: "relative",
  flexDirection: "column",
  height: "auto",
  padding: theme.spacing(2),
  borderRadius: "0.9em",
  backdropFilter: "blur(2px)",
  minWidth:"100%", // mobile
  [theme.breakpoints.up("xs")]: {
    minWidth:"50vw"
  },
  [theme.breakpoints.up("sm")]: {
    minWidth:"55vw"
  },
  [theme.breakpoints.up("xl")]: {
    minWidth:"58vw"
  },
}));

export const StyledAboutDiv = styled("div")(({theme}) => ({
  margin: theme.spacing(0.5),
  marginBottom: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center"
}));

export const StyledParagraphDiv = styled("div")(({theme}) => ({
  margin: theme.spacing(0.1),
  marginBottom: theme.spacing(1.5),
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center"
}));

export const StyledBtnSectionDiv = styled("div")(({theme}) => ({
  margin: theme.spacing(3),
  display: "flex",
  justifyContent: "space-evenly",
}));

export const StyledProfileAviDiv = styled("div")(({theme}) => ({
  margin: theme.spacing(0.5),
  marginBottom: theme.spacing(3),
  display: "flex",
  justifyContent: "space-evenly",
}));

export const StyledProjectListDiv = styled("div")(({theme}) => ({
  position: "relative",
  maxHeight: "70vh",
  overflow: "auto",
  [theme.breakpoints.up("sm")]: {
    maxHeight: "73vh",
  },
}));

export const StyledWideScreenNav = styled("nav")(({theme}) => ({
  display: "flex",
  flexDirection: "row",
  marginLeft: theme.spacing(3)
}));

export const StyledNavMarginLeftRight = styled("nav")(({theme}) => ({
  marginLeft: "4px",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    marginLeft: "auto",
    marginRight: "auto",
  }
}));