import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Skills from "./Skills";
import About from "./About";
import Experience from "./Experience";
import AnimatedMain from "../components/Layouts/AnimatedMain";
import { ItemContainer } from "../components/ItemContainer";
import { AnimatePresence } from "framer-motion";
import CurrentExperienceBox from "../components/Home/CurrentExperienceBox";
import LoadingIcon from "../components/LoadingIcon";
import ExperiencesService from "../services/ExperiencesService";

export default function Home() {
  const [currentWork, setCurrentWork] = useState(undefined);
  const [currentProjects, setCurrentProjects] = useState(undefined);

  useEffect(() => {
    getCurrentExperience();
  }, []);

  const getCurrentExperience = async () => {
    try {
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
      <Box
        className="animation-zone PageContainer"
        minHeight="calc(100dvh - 48px)"
      >
        <Box m="auto">
          <Typography variant="subtitle2">{"Hi, I'm"}</Typography>
          <Typography variant="h1">{"ALEXANDER ROZSA"}</Typography>
          <Typography variant="subtitle1" paragraph>
            {
              "But you can call me Alex. I'm a passionate software engineer with experience in full stack development, who enjoys building dynamic products from start to finish."
            }
          </Typography>
          <Box display="flex" flexDirection="row" width="100%">
            <Box mr="auto">
              <ItemContainer width="50%">
                <Typography
                  variant="h4"
                  gutterBottom
                >{`CURRENTLY WORKING AT:`}</Typography>
                <AnimatePresence mode="wait">
                  {currentWork ? (
                    currentWork.length > 0 ? (
                      currentWork.map((work) => (
                        <CurrentExperienceBox key={work.id} experience={work} />
                      ))
                    ) : (
                      <CurrentExperienceBox
                        key="Empty Work"
                        experience={{
                          id: "experience",
                          type: "Work",
                          name: "Nowhere. I'm looking for work",
                        }}
                      />
                    )
                  ) : (
                    <LoadingIcon key={currentWork} source={currentWork} />
                  )}
                </AnimatePresence>
              </ItemContainer>
            </Box>
            <Box ml="auto">
              <ItemContainer width="50%">
                <Typography
                  variant="h4"
                  gutterBottom
                >{`CURRENTLY WORKING ON:`}</Typography>
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
              </ItemContainer>
            </Box>
          </Box>
        </Box>
      </Box>
      <About />
      <Skills />
      <Experience />
    </AnimatedMain>
  );
}
