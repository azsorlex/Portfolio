import { Box, Link, List, ListItem, ListItemText, Typography, styled } from "@mui/material";
import dayjs from "dayjs";

const StyledExperience = styled('div')({
    display: 'inline-block',
    backgroundColor: 'limegreen',
    color: "black",
    borderRadius: 32,
    margin: 4,
    padding: 6
});

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
                <StyledExperience className="prevent-select">
                    <Typography variant="p">
                        {x}
                    </Typography>
                </StyledExperience>
            ))}
            <List sx={{ listStyleType: 'disc' }}>
                {experience.descriptionLines.map((x) => (
                    <ListItem sx={{ display: 'list-item' }}>
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
                <Box sx={{ mb: 2 }}>
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