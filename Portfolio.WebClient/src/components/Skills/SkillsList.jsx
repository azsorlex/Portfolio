import { ImageList, ImageListItem, Tooltip } from "@mui/material";
import SVG from 'react-inlinesvg';

export default function SkillsList({ skills }) {
    return (
        <ImageList cols={6} gap={50}>
            {skills.map((skill) => {
                return (
                    <Tooltip key={skill.name} title={skill.name}>
                        <ImageListItem sx={{ borderStyle: 'solid', borderRadius: 8 }}>
                            <img
                                srcSet={`src/assets/${skill.image}.svg`}
                                src={`src/assets/${skill.image}.svg`}
                                alt={skill.name}
                                loading="lazy"
                            />
                        </ImageListItem>
                    </Tooltip>
                );
            })}
        </ImageList>
    );
}