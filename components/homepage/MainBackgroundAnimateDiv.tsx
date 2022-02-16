import React, { useMemo } from "react";
// animation
import { motion } from "framer-motion";
// dk mode
import { useDarkMode } from "../customContext/DarkModeContext";

interface IComponentProps {
  children?: React.ReactNode;
}

const MainBackgroundAnimateDiv = ({ children }: IComponentProps): JSX.Element => {

  // dkmode
  const {darkMode} = useDarkMode();

  const animateColors = useMemo(() => {

    const _bgColor = darkMode ? "linear-gradient(127deg, rgba(0, 0, 0, 0.81) 0%, rgba(0, 0, 0, 1) 100%)" : "linear-gradient(127deg, rgba(255, 255, 255, 0.8) 0%, rgba(241, 221, 236, 0.81) 100%)";
    
    return {
      bgColor: _bgColor
    };
  }, [darkMode]);

  return(
    <motion.div
      initial={{
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
      animate={{
        background: animateColors.bgColor,
      }}
      transition={{
        duration: 0.8,
        type: "spring"
      }}
    >
      {children}
    </motion.div>
  );
};

export default MainBackgroundAnimateDiv;