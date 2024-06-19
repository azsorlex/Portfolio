import { Box, Typography } from "@mui/material";
import StyledSkill from "../Experience/StyledSkill";

export default function CurrentExperienceBox({ experience }) {
    return (
        <Box pt={1} mb={4}>
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