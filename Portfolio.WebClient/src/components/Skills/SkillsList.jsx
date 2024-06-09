import { ImageList, ImageListItem, Tooltip } from "@mui/material";

export default function SkillsList({ skills, columns }) {
    return (
        <ImageList cols={columns} gap={50}>
            {skills.map((skill) => {
                return (
                    <Tooltip key={skill.name} title={skill.name}>
                        <ImageListItem sx={{ borderStyle: 'solid', borderRadius: 8 }}>
                            <img
                                srcSet={`/images/${skill.image}.svg`}
                                src={`/images/${skill.image}.svg`}
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