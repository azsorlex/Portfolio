import { Box, Container, List, ListItem, ListItemText, Typography } from "@mui/material";
import SkillsList from "../components/Skills/SkillsList";
import PageNav from "../components/Layouts/PageNav";
import WorkExperience from "../components/Experience/WorkExperience";

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
            "$oid": "6656c4794d70b6186496a19e"
        },
        "type": "Work",
        "name": "Full Stack .NET Developer",
        "company": "Bupa",
        "location": "Melbourne, AU",
        "skills": [
            "C#",
            "React.js",
            "MS SQL Server",
            "ASP.NET Core",
            "CosmosDB"
        ],
        "descriptionLines": [
            "Worked in a large agile scrum team in the organisation’s Health Insurance division.",
            "The main responsibilities were implementing brand new features and maintaining existing ones for the Product and Information Management (PIM) project."
        ],
        "media": [],
        "startDate": "2022-01-31",
        "endDate": "2024-01-30"
    },
    {
        "_id": {
            "$oid": "6656c4794d70b6186496a19f"
        },
        "type": "Project",
        "name": "Portfolio Website",
        "skills": [
            "React.js",
            "MySQL",
            "MongoDB",
            "EF Core"
        ],
        "descriptionLines": [
            "A full stack portfolio website to showcase my works and also my expertise."
        ],
        "media": [],
        "startDate": "2024-03-20"
    }
]

export default function Experience() {
    return (
        <>
            <Typography variant="h1">
                Work experience.
            </Typography>
            <Container maxWidth="sm">
                {sampleData.filter(x => x.type === "Work").map((x) => (
                    <WorkExperience experience={x} />
                ))}
            </Container>
            <Typography variant="h1">
                Projects.
            </Typography>
            <Container maxWidth="xl">
                {sampleData.filter(x => x.type === "Project").map((x) => (
                    <Box>
                        <Typography variant="h6">
                            {x.name}
                        </Typography>
                        <List sx={{ listStyleType: 'disc' }}>
                            {x.descriptionLines.map((y) => (
                                <ListItem sx={{ display: 'list-item' }}>
                                    <ListItemText>
                                        {y}
                                    </ListItemText>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                ))}
            </Container>
            <PageNav beforeTo="/skills" beforeTitle="Skills" />
        </>
    );
}