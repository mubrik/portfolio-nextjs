import React from "react";
// mui
import { useMediaQuery } from "@mui/material";
// motion
import { motion } from "framer-motion";

interface IComponentProps {
  children?: React.ReactNode;
}

const AnimateInOutDiv = ({ children }: IComponentProps): JSX.Element => {

  // responsive
  const isSmallScreen = useMediaQuery('(max-width:450px)');

  return(
    <motion.div
        // animate in div
        initial={{
          position: "absolute",
          translateX: "-50%",
          translateY: "-50%",
          scale: 0.3,
        }}
        animate={{
          scale: 1,
          translateX: "0%",
          translateY: isSmallScreen ? "6%" : "25%",
          transition: {
            duration: 1,
            type: "spring"
          },
        }}
        exit={{
          translateX: "70%",
          translateY: "80%",
          scale: 0.2,
          transition: {
            duration: 0.3
          }
        }}
      >
        { children }
      </motion.div>
  );
};

export default AnimateInOutDiv;