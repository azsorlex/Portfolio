import { useEffect, useState } from "react";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import Skills from "./Skills";
import About from "./About";
import Experience from "./Experience";
import AnimatedMain from "../components/Shared/AnimatedMain";
import { AnimatePresence, motion } from "framer-motion";
import CurrentExperienceBox from "../components/Home/CurrentExperienceBox";
import LoadingIcon from "../components/LoadingIcon";
import ExperiencesService, { ExperienceDTO } from "../services/ExperiencesService";
import { container } from "../data/constants/FramerVariants";
import { ApiResponseType } from "../services/BaseService";
import PageContainer from "../components/Shared/PageContainer";

export default function Home() {
  const [currentExperienceClicked, setCurrentExperienceClicked] = useState<boolean>(false);
  const [currentWork, setCurrentWork] = useState<ApiResponseType<ExperienceDTO[]>>();
  const [currentProjects, setCurrentProjects] = useState<ApiResponseType<ExperienceDTO[]>>();

  // Remove the negative space on smaller screens.
  useEffect(() => {
    // Using timeout to wait for framer motion exit animation and the dom to update with new data.
    setTimeout(() => {
      const pageContainer = document.getElementById("home");
      const child = pageContainer?.firstElementChild;
      if (!child) return;

      const height = parseFloat(getComputedStyle(child).height);
      const minHeightThreshold = parseFloat(getComputedStyle(pageContainer).minHeight) - (window.innerHeight * 0.25); // Minheight - 25dvh

      if (height < minHeightThreshold) {
        pageContainer.style.marginBottom = "-20lvh"; // Used to counteract a visual bug in Safari ios
      } else {
        pageContainer.style.marginBottom = "0";
      }
    }, 350);
  }, [currentWork]);

  const getCurrentExperience = () => {
    if (currentWork === null) {
      setCurrentWork(undefined);
      setCurrentProjects(undefined);
    }
    setCurrentExperienceClicked(true);

    void ExperiencesService.getCurrentExperiences()
      .then((experiences) => {
        setCurrentWork(experiences?.filter((x) => x.type === "Work") ?? experiences);
        setCurrentProjects(experiences?.filter((x) => x.type === "Project") ?? experiences);
      });
  };

  return (
    <AnimatedMain>
      <PageContainer id="home">
        <Box m="auto">
          <Typography variant="subtitle1">{"Hi, I'm"}</Typography>
          <Typography
            variant="h1"
            textTransform="uppercase"
            mb={2}>
            {"Alexander Rozsa"}
          </Typography>
          <Typography mb={4}>
            {
              "But you can call me Alex. I'm a passionate software developer with experience in full stack development, who enjoys building dynamic products from start to finish."
            }
          </Typography>
          <Typography variant="h5" textTransform="uppercase" gutterBottom>
            About this site
          </Typography>
          <Typography variant="body2" mb={4}>
            {
              "This site is an example of a developed dynamic product. Most of the info on here is retrieved from a custom API, which in turn gets data from multiple databases. Take a look:"
            }
          </Typography>
          <AnimatePresence mode="wait">
            {currentExperienceClicked ? (
              <Box
                key="currentExperience"
                display="flex"
                flexDirection="row"
                width="80%"
                m="auto"
                component={motion.div}
                variants={container}
                initial="hidden"
                animate="show"
              >
                <Box mr="auto" width="40%">
                  <Typography
                    variant="h5"
                    textTransform="uppercase"
                  >{`currently working as a:`}</Typography>
                  <AnimatePresence mode="wait">
                    {currentWork ? (
                      <List
                        key="Current Work Container"
                        sx={{ listStyleType: "disc" }}>
                        {
                          currentWork.length > 0 ?
                            currentWork.map((work) => (
                              <ListItem
                                key={work.id}
                                sx={{ display: "list-item", textAlign: "center" }}>
                                <CurrentExperienceBox
                                  key={work.id}
                                  experience={work}
                                />
                              </ListItem>
                            ))
                            : (
                              <ListItem
                                key="Empty Work"
                                sx={{ display: "list-item", textAlign: "center" }}>
                                <CurrentExperienceBox
                                  experience={{
                                    id: "experience",
                                    type: "Work",
                                    name: "Job Seeker",
                                  }}
                                />
                              </ListItem>
                            )
                        }
                      </List>
                    ) : (
                      <LoadingIcon
                        key={currentWork}
                        source={currentWork}
                        callback={getCurrentExperience} />
                    )}
                  </AnimatePresence>
                </Box>
                <Box ml="auto" width="40%">
                  <Typography
                    variant="h5"
                    textTransform="uppercase"
                  >{`currently working on:`}</Typography>
                  <AnimatePresence mode="wait">
                    {currentProjects ? (
                      <List
                        key="Current Projects Container"
                        sx={{ listStyleType: "disc" }}>
                        {
                          currentProjects.length > 0 ?
                            currentProjects.map((project) => (
                              <ListItem
                                key={project.id}
                                sx={{ display: "list-item", textAlign: "center" }}>
                                <CurrentExperienceBox
                                  key={project.id}
                                  experience={project}
                                />
                              </ListItem>
                            ))
                            : (
                              <ListItem
                                key="Empty Project"
                                sx={{ display: "list-item", textAlign: "center" }}>
                                <CurrentExperienceBox
                                  experience={{
                                    id: "projects",
                                    type: "Project",
                                    name: "Nothing. Some inspiration should come soon though.",
                                  }}
                                />
                              </ListItem>
                            )
                        }
                      </List>
                    ) : (
                      <LoadingIcon
                        key={currentProjects}
                        source={currentProjects}
                        callback={getCurrentExperience} />
                    )}
                  </AnimatePresence>
                </Box>
              </Box>
            ) : (
              <Button
                key="loadButton"
                variant="outlined"
                color="secondary"
                component={motion.button}
                exit={{ scale: 0 }}
                onClick={getCurrentExperience}
              >
                Load my current endeavours
              </Button>
            )}
          </AnimatePresence>
        </Box>
      </PageContainer>
      <About />
      <Skills />
      <Experience />
    </AnimatedMain>
  );
}