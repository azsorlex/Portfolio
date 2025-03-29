import { Box, Link, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
  currentExperienceContainer,
  fadeUpChild,
} from "../../data/constants/FramerVariants";
import { ExperienceDTO } from "../../services/ExperiencesService";
import { useEffect, useState } from "react";

interface CurrentExperienceProps {
  experience: ExperienceDTO
};

export default function CurrentExperienceBox({ experience }: CurrentExperienceProps) {
  const [href, setHref] = useState(`#experience`);

  useEffect(() => {
    const checkElement = () => {
      const elementExists = !!document.getElementById(experience.id.toString());
      setHref(elementExists ? `#${experience.id}` : "#experience");
    };

    // Run initial check
    checkElement();

    // Set up a MutationObserver to watch for DOM changes
    const observer = new MutationObserver(checkElement);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => { observer.disconnect() }; // Cleanup on unmount
  }, [experience.id]);
  
  return (
    <Box
      component={motion.div}
      minWidth="50%"
      m='auto'
      variants={currentExperienceContainer}
      initial="hidden"
      whileInView="show"
    >
      <Link href={href} color="secondary">
        <Typography variant="h6" component={motion.h6} variants={fadeUpChild}>
          {experience.company && experience.type === "Work"
            ? `${experience.company} as a${(/^[aeiouAEIOU].*/.exec(experience.name)) ? "n" : ""} ${experience.name}`
            : experience.name}
        </Typography>
      </Link>
    </Box>
  );
}