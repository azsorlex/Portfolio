import { Box, Link } from "@mui/material";
import { motion } from "framer-motion";
import { skillsListContainer } from "../../data/constants/FramerVariants";
import StyledSkill from "../Experience/StyledSkill";

export default function SkillsList({ skills, certifications = false }) {
    return (
        <Box component={motion.div}
            variants={skillsListContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}>
            {skills.map((skill) => {
                console.log(skill);
                return (
                    certifications && skill.url !== null
                        ? <Link key={skill.id} href={skill.url} target="_blank" rel="noopener">
                            <StyledSkill text={skill.name} />
                        </Link>
                        : <StyledSkill key={skill.id} text={skill.name} />
                );
            })}
        </Box>
    );
}