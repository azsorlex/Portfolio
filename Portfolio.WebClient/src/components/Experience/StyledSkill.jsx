import { Typography, styled } from "@mui/material";

const SkillBlock = styled('div')({
    display: 'inline-block',
    backgroundColor: 'darkblue',
    borderRadius: 32,
    margin: 4,
    padding: 6
});

export default function StyledSkill({text}) {
    return (
        <SkillBlock className="prevent-select">
            <Typography color="text.secondary">
                {text}
            </Typography>
        </SkillBlock>
    );
};