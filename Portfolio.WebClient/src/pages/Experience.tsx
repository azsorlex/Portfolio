import { Box, Container, Typography } from "@mui/material";
import WorkExperience from "../components/Experience/WorkExperience";
import { useEffect, useRef, useState } from "react";
import ExperiencesService, { ExperienceDTO } from "../services/ExperiencesService";
import LoadingIcon from "../components/LoadingIcon";
import { AnimatePresence, useInView } from "framer-motion";
import { ApiResponseType } from "../services/BaseService";

export default function Experience() {
  const [work, setWork] = useState<ApiResponseType<ExperienceDTO[]>>();
  const [projects, setProjects] = useState<ApiResponseType<ExperienceDTO[]>>();
  const loadExperienceRef = useRef(null);
  const isInView = useInView(loadExperienceRef, { once: true });

  useEffect(() => {
    void ExperiencesService.getExperiences(!isInView)
        .then((experiences) => {
          setWork(experiences?.filter((x) => x.type === "Work"));
          setProjects(experiences?.filter((x) => x.type === "Project"));
        });
  }, [isInView]);

  return (
    <Container className="PageContainer" maxWidth="lg" sx={{ minHeight: "calc(100dvh - (48px))" }}>
      <Box id="experience" height="48px" />
      <Typography variant="h2">EXPERIENCE</Typography>
      <Container maxWidth="sm" ref={loadExperienceRef}>
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
