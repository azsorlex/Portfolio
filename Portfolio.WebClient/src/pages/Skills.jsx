import { useEffect, useState } from 'react';
import SkillsService from '../services/SkillsService';
import SkillsList from '../components/Skills/SkillsList';
import { Typography } from '@mui/material';
import PageNav from '../components/Layouts/PageNav';

export default function Skills() {
    const skills = [
        {
            "_id": {
                "$oid": "6656c4884d70b6186496a1a2"
            },
            "name": "C#",
            "type": {
                "name": "Programming languages",
                "priority": 0
            },
            "priority": 0,
            "image": "csharp"
        },
        {
            "_id": {
                "$oid": "6656c4884d70b6186496a1a1"
            },
            "name": "ASP.NET Core",
            "type": {
                "name": "Tools and Frameworks",
                "priority": 1
            },
            "priority": 1,
            "image": "csharp"
        }
    ];

    const certifications = [
        {
            "name": "AZ-900",
            "issuedBy": "Microsoft",
            "issueDate": "2024-05-19",
            "image": "csharp"
        },
        {
            "name": "Tricentis Tosca Fundamentals – Automating web application testing (AS1)",
            "issuedBy": "Tricentis",
            "issueDate": "2024-03-19",
            "image": "csharp"
        },
        {
            "name": "ITIL v4 Foundation",
            "issuedBy": "PeopleCert",
            "issueDate": "2021-11-19",
            "expiryDate": "2024-11-19",
            "image": "csharp"
        }
    ]

    /*const [skills, setSkills] = useState([]);

    useEffect(() => {
        SkillsService.loadSkills()
            .then(r => setSkills(r.data))
            .catch(error => {
                console.error(error);
                const placeholder = ![undefined, ""].includes(error.response.data) && error.response.data.error.startsWith('SqlException: Connection Timeout Expired')
                    ? [{ 'id': 'Please wait a little longer while the database resumes :)' }]
                    : [{ 'id': 'Error', 'order': 0 }];
                setSkills(placeholder);
            });
    }, []);

    if (skills.length === 0) {
        return (
            <h1>Loading...</h1>
        )
    }*/

    return (
        <>
            <Typography variant='h1'>Skills.</Typography>
            <SkillsList skills={skills}/>
            <Typography variant='h1'>Certifications.</Typography>
            <SkillsList skills={certifications} />
            <PageNav beforeTo="/about" beforeTitle="About" afterTo="/experience" afterTitle="Experience" />
        </>
    );
}