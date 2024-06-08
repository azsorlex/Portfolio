import { Box, Button, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import SkillsList from "../components/Skills/SkillsList";
import PageNav from "../components/Layouts/PageNav";
import { useEffect, useState } from "react";
import StyledSkill from "../components/Experience/StyledSkill";
import ExperiencesService from "../services/ExperiencesService";
import SkillsService from "../services/SkillsService";

export default function Home() {
    const [topSkills, setTopSkills] = useState(undefined)
    const [currentWork, setCurrentWork] = useState(undefined);
    const [currentProject, setCurrentProject] = useState(undefined);

    useEffect(() => {
        getTopSkills();
        getCurrentExperience();
    }, []);

    const getTopSkills = async () => {
        try {
            const response = await SkillsService.loadSkills();
            setTopSkills(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const getCurrentExperience = async () => {
        try {
            const response = await ExperiencesService.loadExperiences();
            setCurrentWork(response.data.find(x => x.type === "Work"));
            setCurrentProject(response.data.find(x => x.type === "Project"));
        } catch (error) {
            console.error(error);
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
                        ? <SkillsList skills={topSkills} />
                        : <Typography variant="h2">Loading</Typography>
                    }
                </Box>
                <Link component={RouterLink} to="/skills" underline="none">
                    <Button variant="contained">
                        All skills
                    </Button>
                </Link>
            </Box>
            <Box bgcolor="background.object" p={4} mb={4} borderRadius={8} width="46%">
                <Typography variant="h4">
                    {`Currently working at:`}
                </Typography>
                <Typography variant="h5">
                    {currentWork ? `${currentWork.company} as a${currentWork.name.match('^[aeiouAEIOU].*') ? 'n' : ''} ${currentWork.name}`
                        : `Nowhere. I'm looking for work.`}
                </Typography>
                {currentWork &&
                    <>
                        <Typography variant="h6">
                            Skills used in this role:
                        </Typography>
                        {currentWork.skills.map((x) => (
                            <StyledSkill key={x} text={x} />
                        ))}
                    </>
                }
            </Box>
            <Box bgcolor="background.object" p={4} borderRadius={8} width="46%">
                <Typography variant="h4">
                    {`Currently working on:`}
                </Typography>
                <Typography variant="h5">
                    {currentProject ? currentProject.name : `Nothing. Some inspiration should come soon though.`}
                </Typography>
                {currentProject &&
                    <>
                        <Typography variant="h6">
                            Skills used in this project:
                        </Typography>
                        {currentProject.skills.map((x) => (
                            <StyledSkill key={x} text={x} />
                        ))}
                    </>
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