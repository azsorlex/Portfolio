import { Box, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { fadeUpChild, skillsListContainer } from "../../data/constants/FramerVariants";
import StyledSkill from "./StyledSkill";
import { ApiResponseType } from "../../services/BaseService";
import { SkillDTO } from "../../services/SkillsService";

interface SkillsListProps {
  skills: ApiResponseType<SkillDTO[]>,
  topSkillsChecked?: boolean,
  groupByChecked?: boolean,
};

export default function SkillsList({ skills, topSkillsChecked, groupByChecked }: SkillsListProps) {
  return (
    <AnimatePresence mode="wait">
      {
        groupByChecked ?
          <Box
            key="groupedSkillsContainer"
            component={motion.div}
            variants={skillsListContainer}
            initial="hidden"
            whileInView="show"
            exit="exit"
          >
            <AnimatePresence mode="wait">
              {
                Object.entries(Object.groupBy(skills ?? [], ({ type }) => type)).map(([type, groupedSkills]) => (
                  <Box
                    key={`${type}${skills?.map((s) => s.name).join()}`}
                    mb={3}
                    component={motion.div}
                    variants={skillsListContainer}
                    initial="hidden"
                    whileInView="show"
                    exit="exit">
                    <Typography
                      variant="h5"
                      component={motion.h5}
                      variants={fadeUpChild}
                      gutterBottom
                    >
                      {type}
                    </Typography>
                    {groupedSkills?.map((skill) => {
                      return (<StyledSkill
                        key={skill.id}
                        name={skill.name}
                        priority={skill.priority}
                        checked={topSkillsChecked}
                      />)
                    })}
                  </Box>
                ))
              }
            </AnimatePresence>
          </Box>
          :
          <Box
            key={skills?.map((s) => s.name).join()}
            component={motion.div}
            variants={skillsListContainer}
            initial="hidden"
            whileInView="show"
            exit="exit"
          >
            {
              skills?.map((skill) => (
                <StyledSkill
                  key={skill.id}
                  name={skill.name}
                  priority={skill.priority}
                  checked={topSkillsChecked}
                />
              ))
            }
          </Box>
      }
    </AnimatePresence>
  );
}