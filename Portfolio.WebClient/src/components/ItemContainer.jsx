import { styled } from "@mui/material";
import { motion } from "framer-motion";
import { itemContainer } from "../data/constants/FramerVariants";

const Container = styled(motion.div)(({ theme }) => ({
  padding: theme.spacing(4),
  margin: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.experience,
}));

export const ItemContainer = ({ children }) => (
  <Container
    variants={itemContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    {children}
  </Container>
);
