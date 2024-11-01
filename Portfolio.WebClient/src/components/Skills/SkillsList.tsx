import { Box } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { skillsListContainer } from "../../data/constants/FramerVariants";
import StyledSkill from "./StyledSkill";
import { ApiResponseType } from "../../services/BaseService";
import { SkillDTO } from "../../services/SkillsService";

interface SkillsListProps {
  skills: ApiResponseType<SkillDTO[]>,
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