import { ImageList, ImageListItem, Tooltip } from "@mui/material";

export default function SkillsList({ skills, columns }) {
    return (
        <ImageList cols={columns} gap={50} sx={{width: "100%"}}>
            {skills.map((skill) => (
                <Tooltip key={skill.name} title={skill.name}>
                    <ImageListItem>
                        <img
                            srcSet={skill.image.length < 20 ? `/images/${skill.image}.svg` : skill.image}
                            src={skill.image.length < 20 ? `/images/${skill.image}.svg` : skill.image}
                            alt={skill.name}
                            loading="lazy"
                        />
                    </ImageListItem>
                </Tooltip>
            ))}
        </ImageList>
    );
}