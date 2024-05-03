import { useEffect, useState } from 'react';
import SkillsService from '../services/SkillsService';
import SkillsList from '../components/Skills/SkillsList';
import { Typography } from '@mui/material';

const Skills = () => {
    const [skills, setSkills] = useState([]);

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
    }

    return (
        <>
            <Typography variant='p'>These are my skills:</Typography>
            <SkillsList skills={skills} />
        </>
    );
}

export default Skills;