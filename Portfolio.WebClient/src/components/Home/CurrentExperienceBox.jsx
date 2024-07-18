import { Box, Typography } from "@mui/material";
import StyledSkill from "../Experience/StyledSkill";
import { motion } from "framer-motion";
import { currentExperienceContainer, fadeUpChild } from "../../data/constants/FramerVariants";

export default function CurrentExperienceBox({ experience }) {
    return (
        <Box pt={1} mb={4} component={motion.div}
            variants={currentExperienceContainer}
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}>
            <Typography variant="h5" component={motion.h5}
                variants={fadeUpChild}>
                {experience.company && experience.type === 'Work'
                    ? `${experience.company} as a${experience.name.match('^[aeiouAEIOU].*') ? 'n' : ''} ${experience.name}`
                    : experience.name}
            </Typography>
            {experience.skills &&
                <>
                    <Typography variant="h6" component={motion.h6}
                        variants={fadeUpChild}>
                        Skills used in this project:
                    </Typography>
                    {experience.skills.map((x) => (
                        <StyledSkill key={x} name={x} />
                    ))}
                </>
            }
        </Box>
    );
}