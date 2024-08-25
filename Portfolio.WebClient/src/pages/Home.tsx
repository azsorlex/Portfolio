import { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Skills from "./Skills";
import About from "./About";
import Experience from "./Experience";
import AnimatedMain from "../components/Layouts/AnimatedMain";
import { AnimatePresence, motion } from "framer-motion";
import CurrentExperienceBox from "../components/Home/CurrentExperienceBox";
import LoadingIcon from "../components/LoadingIcon";
import ExperiencesService, { ExperienceDTO } from "../services/ExperiencesService";
import { fadeUpChild, itemContainer } from "../data/constants/FramerVariants";

type ExperienceType = Array<ExperienceDTO> | undefined | null;

export default function Home() {
  const [currentExperienceClicked, setCurrentExperienceClicked] = useState<boolean>(false);
  const [currentWork, setCurrentWork] = useState<ExperienceType>(undefined);
  const [currentProjects, setCurrentProjects] = useState<ExperienceType>(undefined);

  const getCurrentExperience = async () => {
    try {
      setCurrentExperienceClicked(true);
      console.log("Fetching current experiences...");
      const response = await ExperiencesService.getCurrentExperiences();
      console.log("Current experiences fetched.");
      console.log(response.data);
      setCurrentWork(response.data.filter((x) => x.type === "Work"));
      setCurrentProjects(response.data.filter((x) => x.type === "Project"));
    } catch (error) {
      console.error(error);
      setCurrentWork(null);
      setCurrentProjects(null);
    }
  };

  return (
    <AnimatedMain>
      <Container className="PageContainer" maxWidth="lg" sx={{ minHeight: "calc(100dvh - 48px)" }}>
        <Box m="auto">
          <Typography variant="subtitle2">{"Hi, I'm"}</Typography>
          <Typography variant="h1" textTransform="uppercase">
            {"Alexander Rozsa"}
          </Typography>
          <Typography variant="subtitle1" mb={4}>
            {
              "But you can call me Alex. I'm a passionate software engineer with experience in full stack development, who enjoys building dynamic products from start to finish."
            }
          </Typography>
          <Typography variant="h5" textTransform="uppercase" gutterBottom>
            About this site
          </Typography>
          <Typography variant="subtitle1" mb={4}>
            {
              "This site is also dynamic. Most of the info on here is retrieved from a custom API, which in turn gets data from multiple databases. Take a look:"
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
                variants={itemContainer}
                initial="hidden"
                animate="show"
              >
                <Box mr="auto" width="40%">
                  <Typography
                    variant="h5"
                    textTransform="uppercase"
                  >{`currently working at:`}</Typography>
                  <AnimatePresence mode="wait">
                    {currentWork ? (
                      currentWork.length > 0 ? (
                        <Box key="Current Work Container">
                          {currentWork.map((work) => (
                            <CurrentExperienceBox
                              key={work.id}
                              experience={work}
                            />
                          ))}
                        </Box>
                      ) : (
                        <CurrentExperienceBox
                          key="Empty Work"
                          experience={{
                            id: "experience",
                            type: "Work",
                            name: "Nowhere",
                          }}
                        />
                      )
                    ) : (
                      <LoadingIcon key={currentWork} source={currentWork} />
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
                      currentProjects.length > 0 ? (
                        <Box key="Current Projects Container">
                          {currentProjects.map((project) => (
                            <CurrentExperienceBox
                              key={project.id}
                              experience={project}
                            />
                          ))}
                        </Box>
                      ) : (
                        <CurrentExperienceBox
                          key="Empty Project"
                          experience={{
                            id: "projects",
                            type: "Project",
                            name: "Nothing. Some inspiration should come soon though.",
                          }}
                        />
                      )
                    ) : (
                      <LoadingIcon
                        key={currentProjects}
                        source={currentProjects}
                      />
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
      </Container>
      <About />
      <Skills />
      <Experience />
    </AnimatedMain>
  );
}
