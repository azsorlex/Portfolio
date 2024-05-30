import { Box, Typography } from "@mui/material"
import SkillsList from "../components/Skills/SkillsList";
import PageNav from "../components/Layouts/PageNav";

export default function Home() {
    return (
        <>
            <Typography variant="h6">
                {"Hi, I'm"}
            </Typography>
            <Typography variant="h1">
                {"Alexander Rozsa"}
            </Typography>
            <Typography variant="h6" mb={10}>
                {"But you can call me Alex. I'm a passionate software engineer with experience in full stack development, who enjoys building dynamic products from start to finish."}
            </Typography>
            <Typography variant="h4">
                {"Top skills"}
            </Typography>
            <Box sx={{ bgcolor: 'secondary.main' }}>
                <SkillsList skills={[{ name: "C#", image: "csharp" }, { name: "Azure", image: "csharp" }, { name: "React.js", image: "csharp" }, {name: "Python", image: "csharp"}, {name: "Java", image: "csharp"}, {name: "JavaScript", image: "csharp"}]} />
            </Box>
            <PageNav afterTo="/about" afterTitle="About" />
        </>
    );
}