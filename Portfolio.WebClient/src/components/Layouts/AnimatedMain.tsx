import { Container } from "@mui/material";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedMainProps {
  children: Array<ReactNode>,
};

export default function AnimatedMain({ children }: AnimatedMainProps) {
  return (
    <Container
      maxWidth="xl"
      component={motion.main}
      initial={{ opacity: 0, translateY: "25px" }}
      animate={{ opacity: 1, translateY: 0, transition: { ease: "easeOut", duration: 1.5, delay: 0.25 } }}
      exit={{ opacity: 0, translateY: "25px", transition: { duration: 0.5 } }}
    >
      {children}
    </Container>
  );
}
