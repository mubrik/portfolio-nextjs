import React from "react";
// mui
import { useMediaQuery } from "@mui/material";
// motion
import { motion } from "framer-motion";
// grad color
import useGetGradientColor from "../customHooks/useGetGradientColor";

interface IComponentProps {
  children?: React.ReactNode;
}

const AnimateGradientBackgroundDiv = ({ children }: IComponentProps): JSX.Element => {

  // animation colors for motion div
  const animateColors = useGetGradientColor();
  // responsive
  const isSmallScreen = useMediaQuery('(max-width:400px)');

  return(
    <motion.div
        // animate in background
        initial={{
          position: "absolute",
          right: 0,
          top: 0,
          boxShadow: "#0000002b 1px 1px 3px 1px",
        }}
        animate={{
          background: animateColors.bgColor,
          borderRadius: "0.9em",
          width: "95%",
          height: isSmallScreen ? "83%" : "87%",
          right: isSmallScreen ? 8 : 18,
          top: 66,
          zIndex: -777,
          transition: {
            delay: 0.2,
            duration: 0.8,
            type: "spring"
          }
        }}
      >
        { children }
      </motion.div>
  );
};

export default AnimateGradientBackgroundDiv;