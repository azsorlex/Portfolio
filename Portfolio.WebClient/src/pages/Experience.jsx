import dayjs from "dayjs";
import { Box, Container, List, ListItem, ListItemText, Typography } from "@mui/material";
import PageNav from "../components/Layouts/PageNav";
import WorkExperience from "../components/Experience/WorkExperience";
import { useEffect, useState } from "react";
import ExperiencesService from "../services/ExperiencesService";
import StyledSkill from "../components/Experience/StyledSkill";
import MediaSection from "../components/Experience/MediaSection";

export default function Experience() {
    const [work, setWork] = useState(undefined);
    const [projects, setProjects] = useState(undefined);

    useEffect(() => {
        getExperience();
    }, []);

    const getExperience = async () => {
        try {
            const response = await ExperiencesService.getExperiences();
            console.log(response.data.find(x => x.type === "Work"));
            setWork(response.data.filter(x => x.type === "Work"));
            setProjects(response.data.filter(x => x.type === "Project"));
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Typography className="animation-zone" variant="h1">
                WORK EXPERIENCE
            </Typography>
            <Container className="animation-zone" maxWidth="sm">
                {work
                    ? work.map((x) => (
                        <WorkExperience key={x.id} experience={x} />
                    ))
                    : <Typography variant="h2">Loading</Typography>}
            </Container>
            <Typography className="animation-zone" variant="h1">
                PROJECTS
            </Typography>
            <Container className="animation-zone" maxWidth="sm">
                {projects
                    ? projects.map((x) => (
                        <WorkExperience key={x.id} experience={x} />
                    ))
                    : <Typography variant="h2">Loading</Typography>}
            </Container>
            <PageNav beforeTo="/skills" beforeTitle="Skills" />
        </>
    );
}