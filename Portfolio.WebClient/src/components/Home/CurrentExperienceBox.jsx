import { Box, Typography } from "@mui/material";
import StyledSkill from "../Experience/StyledSkill";

export default function CurrentExperienceBox({ experience }) {
    return (
        <Box bgcolor="background.object" p={4} mb={4} borderRadius={8}>
            <Typography variant="h4">
                {`Currently working ${experience.type === 'Work' ? 'at' : 'on'}:`}
            </Typography>
            <Typography variant="h5">
                {experience.company && experience.type === 'Work'
                    ? `${experience.company} as a${experience.name.match('^[aeiouAEIOU].*') ? 'n' : ''} ${experience.name}`
                    : experience.name}
            </Typography>
            {experience.skills &&
                <>
                    <Typography variant="h6">
                        Skills used in this project:
                    </Typography>
                    {experience.skills.map((x) => (
                        <StyledSkill key={x} text={x} />
                    ))}
                </>
            }
        </Box>
    );
}