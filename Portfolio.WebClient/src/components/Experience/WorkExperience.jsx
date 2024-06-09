import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import dayjs from "dayjs";
import StyledSkill from "./StyledSkill";
import MediaSection from "./MediaSection";

export default function WorkExperience({ experience = {} }) {
    return (
        <Box sx={{ mb: 4 }}>
            <Typography variant="h5">
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
                    <ListItem key={x} sx={{ display: 'list-item' }}>
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