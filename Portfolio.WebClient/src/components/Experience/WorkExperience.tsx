import { List, ListItem, ListItemText, Typography } from "@mui/material";
import dayjs from "dayjs";
import MediaSection from "./MediaSection";
import { motion } from "framer-motion";
import { fadeUpChild } from "../../data/constants/FramerVariants";
import { ItemContainer } from "../ItemContainer";
import StyledSkill from "../Skills/StyledSkill";
import { ExperienceDTO } from "../../services/ExperiencesService";

interface WorkExperienceProps {
  experience: ExperienceDTO,
};

export default function WorkExperience({ experience }: WorkExperienceProps) {
  return (
    <ItemContainer id={experience.id}>
      <Typography variant="h4" component={motion.h4} variants={fadeUpChild}>
        {experience.name}
      </Typography>
      {experience.company && experience.location && (
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
      {experience.skills?.map((x) => (
        <StyledSkill key={`${x}_${experience.id}`} name={x} />
      ))}
      <List sx={{ listStyleType: "disc" }}>
        {experience.descriptionLines?.map((x) => (
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
