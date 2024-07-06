import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import dayjs from "dayjs";
import StyledSkill from "./StyledSkill";
import MediaSection from "./MediaSection";
import { motion } from "framer-motion";
import { experienceContainer, fadeUpChild } from "../../data/constants/FramerVariants";

export default function WorkExperience({ experience = {} }) {
    return (
        <Box mb={2} component={motion.div}
            variants={experienceContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}>
            <Typography variant="h4" component={motion.h4}
                variants={fadeUpChild}>
                {[
                    experience.name,
                    experience.company,
                    `${dayjs(experience.startDate).format('MMM YYYY')} - ${experience.endDate ? dayjs(experience.endDate).format('MMM YYYY') : "Present"}`,
                    experience.location
                ].filter(Boolean).join(' | ')}
            </Typography>
            {experience.skills.map((x) => (
                <StyledSkill key={`${x}_${experience.id}`} text={x} />
            ))}
            <List sx={{ listStyleType: 'disc' }}>
                {experience.descriptionLines.map((x) => (
                    <ListItem key={x} sx={{display: "list-item"}} component={motion.li}
                        variants={fadeUpChild}>
                        <ListItemText>
                            {x}
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
            <MediaSection media={experience.media} />
        </Box>
    )
}