import React from "react";
//mui
import { duration, useMediaQuery } from "@mui/material";
// motion
import { motion } from "framer-motion";
// homepage state
import { useHomePageState } from "../homepage/Homepage";
import { useDarkMode } from "../customContext/DarkModeContext";

const NavbarLogo = (): JSX.Element => {
  // homepagae
  const { state: homePageState, setHomePageState } = useHomePageState();
  // dk mode
  const { darkMode } = useDarkMode();
  // is mobile
  const isSmallScreen = useMediaQuery("(max-width:400px)");

  return(
    <motion.div
      initial={{
        color: "rgb(205 132 229 / 87%)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        fontFamily: "ubuntu",
        fontSize: "0.8rem",
        fontVariant: "contextual",
        fontWeight: "400",
        textShadow: "0px 0px 0px #000000"
      }}
      animate={{
        textShadow: "1px 1px 2px #0000009e",
        fontSize: isSmallScreen ? "1.2rem" : "1.5rem",
      }}
      transition={{
        default: {duration: 1.6},
        fontSize: {type: "spring", duration: 1.2}
      }}
      onClick={() => setHomePageState("profile")}
    >
      <span>
        Mubrik
      </span>
      <motion.svg width={14} height={32} viewBox={"0 0 14 12"}>
        <motion.line
          x1={"7"}
          x2={"7"}
          y1={"-5"}
          y2={"20"}
          stroke={darkMode ? "#eadbefde" : "#0000009e"}
          strokeWidth={3}
          strokeLinecap={"round"}
          initial={{
            pathLength: 0
          }}
          animate={{
            pathLength: 2,
            transition: {
              duration: 2
            }
          }}
        />
      </motion.svg>
      <span>
        {
          homePageState === "profile" ? "Profile" :
          homePageState === "nowPlaying" ? "Playlist" : "Projects"
        }
      </span>
    </motion.div>
  );
};

export default NavbarLogo;