import { Box, Container, Typography } from "@mui/material";
import WorkExperience from "../components/Experience/WorkExperience";
import { useEffect, useState } from "react";
import ExperiencesService from "../services/ExperiencesService";
import LoadingIcon from "../components/LoadingIcon";
import { AnimatePresence } from "framer-motion";
import CurrentExperienceBox from "../components/Home/CurrentExperienceBox";

export default function Experience() {
  const [work, setWork] = useState(undefined);
  const [projects, setProjects] = useState(undefined);
  const [currentWork, setCurrentWork] = useState(undefined);
  const [currentProjects, setCurrentProjects] = useState(undefined);

  useEffect(() => {
    getCurrentExperience();
    getExperience();
  }, []);

  const getCurrentExperience = async () => {
    try {
      const response = await ExperiencesService.getCurrentExperiences();
      console.log("Current experiences fetched.");
      setCurrentWork(response.data.filter((x) => x.type === "Work"));
      setCurrentProjects(response.data.filter((x) => x.type === "Project"));
    } catch (error) {
      console.error(error);
      setCurrentWork(null);
      setCurrentProjects(null);
    }
  };

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
      <Box className="page-padding" />
      <Box id="experience" height="48px" />
      <Box m="auto" mb="10vh">
        <Box display="flex" flexDirection="row" width="100%">
          <Box width="50%">
            <Typography variant="h4">{`CURRENTLY WORKING AT:`}</Typography>
            <AnimatePresence mode="wait">
              {currentWork ? (
                currentWork.length > 0 ? (
                  currentWork.map((work) => (
                    <CurrentExperienceBox key={work.id} experience={work} />
                  ))
                ) : (
                  <CurrentExperienceBox
                    key={currentWork}
                    experience={{
                      type: "Work",
                      name: "Nowhere. I'm looking for work",
                    }}
                  />
                )
              ) : (
                <LoadingIcon key={currentWork} source={currentWork} />
              )}
            </AnimatePresence>
          </Box>
          <Box width="50%" ml="auto">
            <Typography variant="h4">{`CURRENTLY WORKING ON:`}</Typography>
            <AnimatePresence mode="wait">
              {currentProjects ? (
                currentProjects.length > 0 ? (
                  currentProjects.map((project) => (
                    <CurrentExperienceBox
                      key={project.id}
                      experience={project}
                    />
                  ))
                ) : (
                  <CurrentExperienceBox
                    key={currentProjects}
                    experience={{
                      type: "Project",
                      name: "Nothing. Some inspiration should come soon though.",
                    }}
                  />
                )
              ) : (
                <LoadingIcon key={currentProjects} source={currentProjects} />
              )}
            </AnimatePresence>
          </Box>
        </Box>
        <Typography variant="h2">EXPERIENCE</Typography>
        <Container maxWidth="sm">
          <AnimatePresence mode="wait">
            {work ? (
              work.map((x) => <WorkExperience key={x.id} experience={x} />)
            ) : (
              <LoadingIcon key={work} source={work} />
            )}
          </AnimatePresence>
        </Container>
        <Typography variant="h2">PROJECTS</Typography>
        <Container maxWidth="sm">
          <AnimatePresence mode="wait">
            {projects ? (
              projects.map((x) => <WorkExperience key={x.id} experience={x} />)
            ) : (
              <LoadingIcon key={projects} source={projects} />
            )}
          </AnimatePresence>
        </Container>
      </Box>
    </Container>
  );
}
