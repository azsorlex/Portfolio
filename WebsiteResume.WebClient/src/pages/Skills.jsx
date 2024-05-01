import { useEffect, useState } from 'react';
import SkillsService from '../services/SkillsService';
import SkillsList from '../components/Skills/SkillsList';

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        try {
            SkillsService.loadSkills().then(r => setSkills(r.data));
        } catch (error) {
            console.error(error);
            const placeholder = !error.response.data.error.startsWith('SqlException: Connection Timeout Expired')
                ? [{ 'id': 'Error', 'order': 0 }]
                : [{ 'id': 'Please wait a little longer while the database resumes :)' }];
            setSkills(placeholder);
        }
    }, []);

    if (skills.length === 0) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <div>
            <p>These are my skills (only a small sample for the time being)</p>
            <SkillsList skills={skills} />
        </div >
    );
}

export default Skills;