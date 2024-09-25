import { Container } from "@mui/material";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { animatedMainVariants } from "../../data/constants/FramerVariants";

interface AnimatedMainProps {
  children: ReactNode[] | ReactNode,
};

export default function AnimatedMain({ children }: AnimatedMainProps) {
  return (
    <Container
      maxWidth="xl"
      component={motion.main}
      variants={animatedMainVariants}
      initial="hidden"
      whileInView="show"
      exit="exit"
    >
      {children}
    </Container>
  );
}
