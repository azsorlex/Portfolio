import { Box, Link, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
  currentExperienceContainer,
  fadeUpChild,
} from "../../data/constants/FramerVariants";

export default function CurrentExperienceBox({ experience = {} }) {
  return (
    <Box
      component={motion.div}
      minWidth="50%"
      m='auto'
      variants={currentExperienceContainer}
      initial="hidden"
      whileInView="show"
    >
      <Link href={`#${experience.id}`} color="secondary">
        <Typography variant="h6" component={motion.h6} variants={fadeUpChild}>
          {experience.company && experience.type === "Work"
            ? `${experience.company} as a${
                experience.name.match("^[aeiouAEIOU].*") ? "n" : ""
              } ${experience.name}`
            : experience.name}
        </Typography>
      </Link>
    </Box>
  );
}
