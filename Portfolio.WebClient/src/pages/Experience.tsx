import { Box, Container, Typography } from "@mui/material";
import WorkExperience from "../components/Experience/WorkExperience";
import { useEffect, useState } from "react";
import ExperiencesService, { ExperienceDTO } from "../services/ExperiencesService";
import LoadingIcon from "../components/LoadingIcon";
import { AnimatePresence } from "framer-motion";

type ExperienceType = Array<ExperienceDTO> | undefined | null;

export default function Experience() {
  const [work, setWork] = useState<ExperienceType>(undefined);
  const [projects, setProjects] = useState<ExperienceType>(undefined);

  useEffect(() => {
    getExperience();
  }, []);

  const getExperience = async () => {
    try {
      console.log("Fetching experiences...");
      const response = await ExperiencesService.getExperiences();
      console.log("Experiences fetched.");
      setWork(response.data.filter((x) => x.type === "Work"));
      setProjects(response.data.filter((x) => x.type === "Project"));
    } catch (error) {
      console.error(error);
      setWork(null);
      setProjects(null);
    }
  };

  return (
    <Container className="PageContainer" maxWidth="lg">
      <Box id="experience" height="48px" />
      <Typography variant="h2">EXPERIENCE</Typography>
      <Container maxWidth="sm">
        <AnimatePresence mode="wait">
          {work ? (
            <Box key="Work Container">
              {work.map((x) => (
                <WorkExperience key={x.id} experience={x} />
              ))}
            </Box>
          ) : (
            <LoadingIcon key={work} source={work} />
          )}
        </AnimatePresence>
      </Container>
      <Typography variant="h2" mt={8}>
        PROJECTS
      </Typography>
      <Container maxWidth="sm">
        <AnimatePresence mode="wait">
          {projects ? (
            <Box key="Projects Container">
              {projects.map((x) => (
                <WorkExperience key={x.id} experience={x} />
              ))}
            </Box>
          ) : (
            <LoadingIcon key={projects} source={projects} />
          )}
        </AnimatePresence>
      </Container>
    </Container>
  );
}