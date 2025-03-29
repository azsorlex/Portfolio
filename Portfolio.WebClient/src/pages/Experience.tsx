import { Box, Button, Container, Typography } from "@mui/material";
import WorkExperience from "../components/Experience/WorkExperience";
import { useEffect, useRef, useState } from "react";
import ExperiencesService, { ExperienceDTO } from "../services/ExperiencesService";
import LoadingIcon from "../components/LoadingIcon";
import { AnimatePresence, useInView } from "framer-motion";
import { ApiResponseType } from "../services/BaseService";
import { Link } from "react-router-dom";
import PageContainer from "../components/Shared/PageContainer";

export default function Experience() {
  const [work, setWork] = useState<ApiResponseType<ExperienceDTO[]>>();
  const [projects, setProjects] = useState<ApiResponseType<ExperienceDTO[]>>();
  const loadExperienceRef = useRef(null);
  const isInView = useInView(loadExperienceRef, { once: true });

  useEffect(() => {
    getExperiences();
  }, [isInView]);

  const getExperiences = () => {
    if (work === null) {
      setWork(undefined);
      setProjects(undefined);
    }

    void ExperiencesService.getExperiences(!isInView)
      .then((experiences) => {
        setWork(experiences?.filter((x) => x.type === "Work") ?? experiences);
        setProjects(experiences?.filter((x) => x.type === "Project") ?? experiences);
      });
  };

  return (
    <PageContainer id="experience">
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
            <LoadingIcon
              key={work}
              source={work}
              callback={getExperiences} />
          )}
        </AnimatePresence>
      </Container>
      <Typography variant="h2" mt={4}>
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
            <LoadingIcon
              key={projects}
              source={projects}
              callback={getExperiences} />
          )}
        </AnimatePresence>
      </Container>
      <Link to="/resume">
        <Button
          variant='outlined'
          color='secondary'
          sx={{ mt: 5, mb: 8 }}>
          Go to my resume
        </Button>
      </Link>
    </PageContainer>
  );
}
