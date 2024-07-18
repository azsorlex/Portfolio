import { List, ListItem, ListItemText, Typography } from "@mui/material";
import dayjs from "dayjs";
import StyledSkill from "./StyledSkill";
import MediaSection from "./MediaSection";
import { motion } from "framer-motion";
import {
  experienceContainer,
  fadeUpChild,
} from "../../data/constants/FramerVariants";
import { ItemContainer } from "../ItemContainer";

export default function WorkExperience({ experience = {} }) {
  return (
    <ItemContainer
      mb={2}
      component={motion.div}
      variants={experienceContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Typography variant="h4" component={motion.h4} variants={fadeUpChild}>
        {experience.name}
      </Typography>
      {experience.company !== null && experience.location !== null && (
        <Typography variant="h5" component={motion.h5} variants={fadeUpChild}>
          {`${experience.company}, ${experience.location}`}
        </Typography>
      )}
      <Typography variant="h5" component={motion.h5} variants={fadeUpChild}>
        {`${dayjs(experience.startDate).format("MMM YYYY")} - 
        ${
          experience.endDate
            ? dayjs(experience.endDate).format("MMM YYYY")
            : "Present"
        }
        `}
      </Typography>
      {experience.skills.map((x) => (
        <StyledSkill key={`${x}_${experience.id}`} name={x} />
      ))}
      <List sx={{ listStyleType: "disc" }}>
        {experience.descriptionLines.map((x) => (
          <ListItem
            key={x}
            sx={{ display: "list-item" }}
            component={motion.li}
            variants={fadeUpChild}
          >
            <ListItemText>{x}</ListItemText>
          </ListItem>
        ))}
      </List>
      <MediaSection media={experience.media} />
    </ItemContainer>
  );
}
