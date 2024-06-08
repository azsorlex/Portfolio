import { Box, Container, List, ListItem, ListItemText, Typography } from "@mui/material";
import PageNav from "../components/Layouts/PageNav";
import WorkExperience from "../components/Experience/WorkExperience";
import { useEffect, useState } from "react";
import ExperiencesService from "../services/ExperiencesService";

export default function Experience() {
    const [work, setWork] = useState(undefined);
    const [projects, setProjects] = useState(undefined);

    useEffect(() => {
        getExperience();
    }, []);

    const getExperience = async () => {
        try {
            const response = await ExperiencesService.loadExperiences();
            console.log(response.data.find(x => x.type === "Work"));
            setWork(response.data.filter(x => x.type === "Work"));
            setProjects(response.data.filter(x => x.type === "Project"));
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Typography variant="h1">
                Work experience.
            </Typography>
            <Container maxWidth="sm">
                {work
                    ? work.map((x) => (
                        <WorkExperience key={x.id} experience={x} />
                    ))
                    : <Typography variant="h2">Loading</Typography>}
            </Container>
            <Typography variant="h1">
                Projects.
            </Typography>
            <Container maxWidth="xl">
                {projects
                    ? projects.map((x) => (
                        <Box key={x.id}>
                            <Typography variant="h6">
                                {x.name}
                            </Typography>
                            <List sx={{ listStyleType: 'disc' }}>
                                {x.descriptionLines.map((y) => (
                                    <ListItem key={y} sx={{ display: 'list-item' }}>
                                        <ListItemText>
                                            {y}
                                        </ListItemText>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    ))
                    : <Typography variant="h2">Loading</Typography>}
            </Container>
            <PageNav beforeTo="/skills" beforeTitle="Skills" />
        </>
    );
}