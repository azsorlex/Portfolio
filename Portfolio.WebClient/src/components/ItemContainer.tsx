import { styled } from "@mui/material";
import { motion } from "framer-motion";
import { itemContainer } from "../data/constants/FramerVariants";
import { ReactNode } from "react";

interface ItemContainerProps {
  children: ReactNode,
  id: string,
};

const Container = styled(motion.div)(({ theme }) => ({
  padding: theme.spacing(4),
  margin: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.experience,
}));

export const ItemContainer = ({ children, id }: ItemContainerProps) => (
  <Container
    id={id}
    className="ItemContainer"
    variants={itemContainer}
    initial="hidden"
    whileInView="show"
  >
    {children}
  </Container>
);
