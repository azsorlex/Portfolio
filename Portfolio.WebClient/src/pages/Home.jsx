import { Box, Button, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import SkillsList from "../components/Skills/SkillsList";
import PageNav from "../components/Layouts/PageNav";
import { useEffect, useState } from "react";
import ExperiencesService from "../services/ExperiencesService";
import SkillsService from "../services/SkillsService";
import CurrentExperienceBox from "../components/Home/CurrentExperienceBox";
import LoadingIcon from "../components/LoadingIcon";
import AnimatedMain from "../components/Layouts/AnimatedMain";
import { AnimatePresence } from "framer-motion";

export default function Home() {
    const [topSkills, setTopSkills] = useState(undefined)
    const [currentWork, setCurrentWork] = useState(undefined);
    const [currentProjects, setCurrentProjects] = useState(undefined);

    useEffect(() => {
        getTopSkills();
        getCurrentExperience();
    }, []);

    const getTopSkills = async () => {
        try {
            const response = await SkillsService.getTopSkills(4);
            console.log('Top skills fetched.');
            setTopSkills(response.data);
        } catch (error) {
            console.log(error);
            setTopSkills(null);
        }
    }

    const getCurrentExperience = async () => {
        try {
            const response = await ExperiencesService.getCurrentExperiences();
            console.log('Current experiences fetched.');
            setCurrentWork(response.data.filter(x => x.type === 'Work'));
            setCurrentProjects(response.data.filter(x => x.type === 'Project'));
        } catch (error) {
            console.error(error);
            setCurrentWork(null);
            setCurrentProjects(null);
        }
    }

    return (
        <AnimatedMain>
            <Box display="flex" alignItems="center" height="calc(100vh - 48px)">
                <Box className="animation-zone" width="95%" m="auto">
                    <Typography variant="subtitle2">
                        {"Hi, I'm"}
                    </Typography>
                    <Typography variant="h1">
                        {"ALEXANDER ROZSA"}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        {"But you can call me Alex. I'm a passionate software engineer with experience in full stack development, who enjoys building dynamic products from start to finish."}
                    </Typography>
                    <Link component={RouterLink} to="/about">
                        <Button variant="outlined" color="secondary">
                            Learn more about me
                        </Button>
                    </Link>
                </Box>
            </Box>
            <Box display="flex" alignItems="center" width="100%" height="100vh">
                <Box className="animation-zone" m="auto" width="75%">
                    <Typography variant="h2" paragraph>
                        TOP SKILLS
                    </Typography>
                    <Box margin="auto" width="60%" p={1}>
                        <AnimatePresence mode="wait">
                            {topSkills
                                ? <SkillsList key={topSkills} skills={topSkills} />
                                : <LoadingIcon key={topSkills} source={topSkills} />}
                        </AnimatePresence>
                    </Box>
                    <Link component={RouterLink} to="/skills" underline="none">
                        <Button variant="outlined" color="secondary">
                            All skills
                        </Button>
                    </Link>
                </Box>
            </Box>
            <Box display="flex" alignItems="center" height="75vh" width="100%">
                <Box flexDirection="column" width="100%">
                    <Box display="flex" flexDirection="row" width="100%">
                        <Box className="animation-zone" width="50%">
                            <Typography variant="h4">
                                {`CURRENTLY WORKING AT:`}
                            </Typography>
                            <AnimatePresence mode="wait">
                                {currentWork
                                    ? currentWork.length > 0
                                        ? currentWork.map((work) => (<CurrentExperienceBox key={work.id} experience={work} />))
                                        : <CurrentExperienceBox key={currentWork} experience={{ type: 'Work', name: "Nowhere. I'm looking for work" }} />
                                    : <LoadingIcon key={currentWork} source={currentWork} />
                                }
                            </AnimatePresence>
                        </Box>
                        <Box className="animation-zone" width="50%" ml="auto">
                            <Typography variant="h4">
                                {`CURRENTLY WORKING ON:`}
                            </Typography>
                            <AnimatePresence mode="wait">
                                {currentProjects
                                    ? currentProjects.length > 0
                                        ? currentProjects.map((project) => (<CurrentExperienceBox key={project.id} experience={project} />))
                                        : <CurrentExperienceBox key={currentProjects} experience={{ type: 'Project', name: "Nothing. Some inspiration should come soon though." }} />
                                    : <LoadingIcon key={currentProjects} source={currentProjects} />
                                }
                            </AnimatePresence>
                        </Box>
                    </Box>
                    <Link className="animation-zone" mt={5} component={RouterLink} to="/experience">
                        <Button className="animation-zone" variant="outlined" color="secondary">
                            See all my work here
                        </Button>
                    </Link>
                    <PageNav className="animation-zone" afterTo="/about" afterTitle="About" mt={16} width="50%" />
                </Box>
            </Box>
        </AnimatedMain>
    );
}