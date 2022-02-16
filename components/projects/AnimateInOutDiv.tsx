import React from "react";
// motion
import { motion } from "framer-motion";

interface IComponentProps {
  children?: React.ReactNode;
}

const AnimateInOutDiv = ({ children }: IComponentProps): JSX.Element => {

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
          translateY: "0%",
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