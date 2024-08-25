import { styled } from "@mui/material";
import { motion } from "framer-motion";
import { itemContainer } from "../data/constants/FramerVariants";

interface ItemContainerProps {
  children: any,
  id: string,
};

const Container = styled(motion.div)(({ theme }: any) => ({
  padding: theme.spacing(4),
  margin: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.experience,
}));

export const ItemContainer = ({ children, id }: ItemContainerProps) => (
  <Container
    id={id}
    variants={itemContainer}
    initial="hidden"
    whileInView="show"
    sx={{ backgroundColor: "auto" }}
  >
    {children}
  </Container>
);
