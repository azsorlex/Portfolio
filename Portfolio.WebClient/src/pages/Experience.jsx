import { Container, Typography } from "@mui/material";
import PageNav from "../components/Layouts/PageNav";
import WorkExperience from "../components/Experience/WorkExperience";
import { useEffect, useState } from "react";
import ExperiencesService from "../services/ExperiencesService";
import LoadingIcon from "../components/LoadingIcon";
import AnimatedMain from "../components/Layouts/AnimatedMain";

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
            setWork(null);
            setProjects(null);
        }
    }

    return (
        <AnimatedMain>
            <Typography className="animation-zone" variant="h1">
                WORK EXPERIENCE
            </Typography>
            <Container className="animation-zone" maxWidth="sm">
                {work
                    ? work.map((x) => (
                        <WorkExperience key={x.id} experience={x} />
                    ))
                    : <LoadingIcon source={work} />}
            </Container>
            <Typography className="animation-zone" variant="h1">
                PROJECTS
            </Typography>
            <Container className="animation-zone" maxWidth="sm">
                {projects
                    ? projects.map((x) => (
                        <WorkExperience key={x.id} experience={x} />
                    ))
                    : <LoadingIcon source={projects} />}
            </Container>
            <PageNav beforeTo="/skills" beforeTitle="Skills" mb={32} mt={12} />
        </AnimatedMain>
    );
}