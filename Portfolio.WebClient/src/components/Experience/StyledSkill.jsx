import { Typography, styled } from "@mui/material";
import { motion } from "framer-motion";
import { fadeUpChild } from "../../data/constants/FramerVariants";

const SkillBlock = styled(motion.div)({
    display: 'inline-block',
    borderRadius: 32,
    margin: 4,
    padding: 6
});

export default function StyledSkill({ text }) {
    return (
        <SkillBlock sx={{ backgroundColor: "secondary.main" }}
            variants={fadeUpChild}>
            <Typography>
                {text}
            </Typography>
        </SkillBlock>
    );
};