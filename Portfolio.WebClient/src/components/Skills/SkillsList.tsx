import { Box } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { skillsListContainer } from "../../data/constants/FramerVariants";
import StyledSkill from "./StyledSkill";
import { SkillsType } from "../../pages/Skills";

interface SkillsListProps {
  skills: SkillsType,
  checked?: boolean,
};

export default function SkillsList({ skills, checked }: SkillsListProps) {
  return (
    <AnimatePresence mode="wait">
      <Box
        key={skills?.map((s) => s.name).join()}
        component={motion.div}
        variants={skillsListContainer}
        initial="hidden"
        whileInView="show"
        exit="exit"
      >
        {skills?.map((skill) => (
          <StyledSkill
            key={skill.id}
            name={skill.name}
            priority={skill.priority}
            checked={checked}
          />
        ))}
      </Box>
    </AnimatePresence>
  );
}