import { Box, Link } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { skillsListContainer } from "../../data/constants/FramerVariants";
import StyledSkill from "./StyledSkill";
import { CertificationsType, SkillsType } from "../../pages/Skills";

interface SkillsListProps {
  skills: SkillsType | CertificationsType,
  checked?: boolean,
  certifications?: boolean,
};

export default function SkillsList({ skills, checked, certifications = false }: SkillsListProps) {
  return (
    <AnimatePresence mode="wait">
      <Box
        key={skills!.map((s) => s.name).join()}
        component={motion.div}
        variants={skillsListContainer}
        initial="hidden"
        whileInView="show"
        exit="exit"
      >
        {
          skills!.map((skill) => {
            return certifications && skill.url !== null ? (
              <Link key={skill.id} href={skill.url} target="_blank" rel="noopener">
                <StyledSkill name={skill.name} />
              </Link>
            ) : (
              <StyledSkill
                key={skill.id}
                name={skill.name}
                priority={skill.priority}
                checked={checked}
              />
            );
          })
        }
      </Box>
    </AnimatePresence>
  );
}
