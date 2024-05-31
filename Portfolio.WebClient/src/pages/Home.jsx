import { Box, Button, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import SkillsList from "../components/Skills/SkillsList";
import PageNav from "../components/Layouts/PageNav";
import { useState } from "react";
import StyledSkill from "../components/Experience/StyledSkill";

const sampleData = [
    {
        "_id": {
            "$oid": "6656c4794d70b6186496a19f"
        },
        "type": "Work",
        "name": "IT Consultant",
        "company": "FDM Group",
        "location": "Melbourne, AU",
        "skills": [
            "React.js",
            "MySQL",
            "MongoDB",
            "EF Core"
        ],
        "descriptionLines": [
            "Received training to be a DevOps consultant for the first three months, then carried out the Bupa contract.",
            "Undertook additional professional and technical upskilling and team project work to increase suitability for future contracts."
        ],
        "media": [
            {
                "title": "SampleMedia",
                "description": "This is a piece of sample media to demonstrate linking to external resources.",
                "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            },
            {
                "title": "SampleMedia2",
                "description": "This is also a piece of sample media to demonstrate linking to external resources.",
                "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            }
        ],
        "startDate": "2021-10-16"
    },
    {
        "_id": {
            "$oid": "6656c4794d70b6186496a19f"
        },
        "type": "Project",
        "name": "Portfolio Website",
        "skills": [
            "React.js",
            "C#",
            "MongoDB",
            "EF Core",
            "ASP.NET Core",
            "MS SQL Server"
        ],
        "descriptionLines": [
            "A full stack portfolio website to showcase my works and also my expertise."
        ],
        "media": [],
        "startDate": "2024-03-20"
    }
];

export default function Home() {
    const [latestWork, setLatestWork] = useState(sampleData.find(x => x.type === "Work"));
    const [latestProject, setLatestProject] = useState(sampleData.find(x => x.type === "Project"));

    const toggleWork = () => {
        setLatestWork(latestWork === null ? sampleData.find(x => x.type === "Work") : null);
    };

    const toggleProject = () => {
        setLatestProject(latestProject === null ? sampleData.find(x => x.type === "Project") : null);
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
                    <SkillsList skills={[{ name: "C#", image: "csharp" }, { name: "Azure", image: "csharp" }, { name: "React.js", image: "csharp" }, { name: "Python", image: "csharp" }, { name: "Java", image: "csharp" }, { name: "JavaScript", image: "csharp" }]} />
                </Box>
                <Link component={RouterLink} to="/skills" underline="none">
                    <Button variant="contained">
                        All skills
                    </Button>
                </Link>
            </Box>
            <Button variant="contained" onClick={toggleWork}>
                {`(experimental) toggle work`}
            </Button>
            <Box bgcolor="background.object" p={4} mb={4} borderRadius={8} width="46%">
                <Typography variant="h4">
                    {`Currently working at:`}
                </Typography>
                <Typography variant="h5">
                    {latestWork ? `${latestWork.company} as a${latestWork.name.match('^[aeiouAEIOU].*') && 'n'} ${latestWork.name}`
                        : `Nowhere. I'm looking for work.`}
                </Typography>
                {latestWork &&
                    <>
                        <Typography variant="h6">
                            Skills used in this role:
                        </Typography>
                        {latestWork.skills.map((x) => (
                            <StyledSkill key={x} text={x} />
                        ))}
                    </>
                }
            </Box>
            <Button variant="contained" onClick={toggleProject}>
                {`(experimental) toggle project`}
            </Button>
            <Box bgcolor="background.object" p={4} borderRadius={8} width="46%">
                <Typography variant="h4">
                    {`Currently working on:`}
                </Typography>
                <Typography variant="h5">
                    {latestProject ? latestProject.name : `Nothing. Some inspiration should come soon though.`}
                </Typography>
                {latestProject &&
                    <>
                        <Typography variant="h6">
                            Skills used in this project:
                        </Typography>
                        {latestProject.skills.map((x) => (
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