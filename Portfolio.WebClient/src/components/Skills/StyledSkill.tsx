import { Typography, styled } from "@mui/material";
import { motion } from "framer-motion";
import { fadeUpChild } from "../../data/constants/FramerVariants";

interface StyledSkillProps {
  name: string,
  priority?: number,
  checked?: boolean,
};

const SkillBlock = styled(motion.div)({
  display: "inline-block",
  borderRadius: 32,
  margin: 6,
  padding: 6,
  minWidth: 36,
  transition: "background-color 0.15s, color 0.04s linear",
});

export default function StyledSkill({ name, priority, checked = false }: StyledSkillProps) {
  return (
    <SkillBlock
      sx={{
        backgroundColor: checked
          ? priority === 0
            ? "secondary.dark"
            : "primary.main"
          : "secondary.main",
        color: "primary.main",
      }}
      variants={fadeUpChild}
    >
      <Typography>{name}</Typography>
    </SkillBlock>
  );
}