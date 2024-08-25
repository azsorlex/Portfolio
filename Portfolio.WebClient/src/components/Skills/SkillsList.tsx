import { Box, Checkbox, FormControlLabel, Link } from "@mui/material";
import { motion } from "framer-motion";
import { skillsListContainer } from "../../data/constants/FramerVariants";
import { ChangeEvent, Key, useState } from "react"
import StyledSkill from "../Experience/StyledSkill";

interface SkillsListProps {
  skills: Array<Record<any, any>>,
  certifications?: boolean,
};

export default function SkillsList({ skills, certifications = false }: SkillsListProps) {
  const [topSkillsChecked, setTopSkillsChecked] = useState(false);

  const handleTopSkillsChecked = (event: ChangeEvent<HTMLInputElement>) => {
    setTopSkillsChecked(event.target.checked);
  };

  return (
    <Box
      component={motion.div}
      variants={skillsListContainer}
      initial="hidden"
      whileInView="show"
    >
      {!certifications && (
        <Box>
          <FormControlLabel
            label="Top Skills"
            control={
              <Checkbox
                checked={topSkillsChecked}
                onChange={handleTopSkillsChecked}
              />
            }
          />
        </Box>
      )}
      {skills.map((skill) => {
        return certifications && skill.url !== null ? (
          <Link key={skill.id} href={skill.url} target="_blank" rel="noopener">
            <StyledSkill name={skill.name} />
          </Link>
        ) : (
          <StyledSkill
            key={skill.id}
            name={skill.name}
            priority={skill.priority}
            checked={topSkillsChecked}
          />
        );
      })}
    </Box>
  );
}
