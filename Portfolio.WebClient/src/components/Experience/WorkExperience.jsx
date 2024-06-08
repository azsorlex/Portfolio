import { Box, Link, List, ListItem, ListItemText, Typography } from "@mui/material";
import dayjs from "dayjs";
import StyledSkill from "./StyledSkill";

export default function WorkExperience({ experience = {} }) {
    return (
        <Box sx={{ mb: 4 }}>
            <Typography variant="h6">
                {[
                    experience.name,
                    experience.company,
                    `${dayjs(experience.startDate).format('MMM YYYY')} - ${experience.endDate ? dayjs(experience.endDate).format('MMM YYYY') : "Present"}`,
                    experience.location
                ].join(' | ')}
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
            {experience.media.length > 0 &&
                <Typography variant="h6">
                    Media:
                </Typography>
            }
            {experience.media.map((x) => (
                <Box key={x.title} mb={2}>
                    <Typography>
                        {x.title}
                    </Typography>
                    <Typography>
                        {x.description}
                    </Typography>
                    <Link href={x.url} target="_blank" rel="noopener">
                        Go to resource
                    </Link>
                </Box>
            ))}
        </Box>
    )
}