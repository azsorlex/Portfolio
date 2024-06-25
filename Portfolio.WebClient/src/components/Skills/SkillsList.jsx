import { ImageList, ImageListItem, Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import { fadeInChild, skillsListContainer } from "../../data/constants/FramerVariants";

export default function SkillsList({ skills, columns }) {
    return (
        <ImageList cols={columns} gap={50} sx={{ width: "100%" }} component={motion.ul}
            variants={skillsListContainer}
            initial="hidden"
            animate="show">
            {skills.map((skill) => (
                <Tooltip key={skill.name} title={skill.name}>
                    <ImageListItem component={motion.li}
                        variants={fadeInChild}>
                        <img srcSet={skill.image} src={skill.image} alt={skill.name} />
                    </ImageListItem>
                </Tooltip>
            ))}
        </ImageList>
    );
}