import { Box, Button, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import SkillsList from "../components/Skills/SkillsList";
import PageNav from "../components/Layouts/PageNav";
import { useEffect, useState } from "react";
import ExperiencesService from "../services/ExperiencesService";
import SkillsService from "../services/SkillsService";
import CurrentExperienceBox from "../components/Home/CurrentExperienceBox";

export default function Home() {
    const [topSkills, setTopSkills] = useState(undefined)
    const [currentWork, setCurrentWork] = useState([]);
    const [currentProjects, setCurrentProjects] = useState([]);

    useEffect(() => {
        getTopSkills();
        getCurrentExperience();
    }, []);

    const getTopSkills = async () => {
        try {
            const response = await SkillsService.getTopSkills(4);
            setTopSkills(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const getCurrentExperience = async () => {
        try {
            const response = await ExperiencesService.getCurrentExperiences();
            setCurrentWork(response.data.filter(x => x.type === 'Work'));
            setCurrentProjects(response.data.filter(x => x.type === 'Project'));
        } catch (error) {
            console.error(error);
        }
    }

    const toggleExperience = async () => {
        if (currentWork.length === 0 && currentProjects.length === 0) {
            await getCurrentExperience();
        } else {
            setCurrentWork([]);
            setCurrentProjects([]);
        }
    }

    return (
        <>
            <Box borderRadius={8} mt="25vh" mb="30vh" pt={4} pb={4} bgcolor="background.object">
                <Box width="85%" margin='auto'>
                    <Typography variant="h6">
                        {"Hi, I'm"}
                    </Typography>
                    <Typography variant="h1">
                        {"Alexander Rozsa"}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        {"But you can call me Alex. I'm a passionate software engineer with experience in full stack development, who enjoys building dynamic products from start to finish."}
                    </Typography>
                    <Link component={RouterLink} to="/about" underline="none">
                        <Button variant="contained">
                            Learn more about me here
                        </Button>
                    </Link>
                </Box>
            </Box>
            <Box mb="30vh">
                <Typography variant="h4">
                    Top skills:
                </Typography>
                <Box width="85%" margin="auto" p={1} borderRadius={8} bgcolor="background.object">
                    {topSkills
                        ? <SkillsList skills={topSkills} columns={4} />
                        : <Typography variant="h2">Loading</Typography>
                    }
                </Box>
                <Link component={RouterLink} to="/skills" underline="none">
                    <Button variant="contained">
                        All skills
                    </Button>
                </Link>
            </Box>
            <Button variant="contained" onClick={toggleExperience}>
                {`(experimental) Toggle Work and Projects`}
            </Button>
            <Box width="46%" mb={4}>
                {currentWork.length > 0
                    ? currentWork.map((work) => (<CurrentExperienceBox key={work.id} experience={work} />))
                    : <CurrentExperienceBox experience={{ type: 'Work', name: "Nowhere. I'm looking for work" }} />
                }
            </Box>
            <Box width="46%">
                {currentProjects.length > 0
                    ? currentProjects.map((project) => (<CurrentExperienceBox key={project.id} experience={project} />))
                    : <CurrentExperienceBox experience={{ type: 'Project', name: "Nothing. Some inspiration should come soon though." }} />
                }
            </Box>
            <Link display="block" mt={5} component={RouterLink} to="/experience" underline="none">
                <Button variant="contained">
                    See all my work here
                </Button>
            </Link>
            <PageNav afterTo="/about" afterTitle="About" />
        </>
    );
}