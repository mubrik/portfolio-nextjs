
import { styled } from "@mui/material/styles";
import { Typography, TypographyProps, Button, ButtonProps} from '@mui/material';
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

export const StyledHomeRootFlexDiv = styled("div")(({theme}) => ({
  display: "flex",
  flexDirection: "row",
  position: "relative",
  minHeight: "92vh",
  alignItems: "flex-start",
  justifyContent: "center",
  overflow: "auto",
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