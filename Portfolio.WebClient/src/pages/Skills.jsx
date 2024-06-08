import { useEffect, useState } from 'react';
import SkillsService from '../services/SkillsService';
import SkillsList from '../components/Skills/SkillsList';
import { Typography } from '@mui/material';
import PageNav from '../components/Layouts/PageNav';
import CertificationsService from '../services/CertificationsService';

export default function Skills() {
    const [skills, setSkills] = useState(undefined);
    const [certifications, setCertifications] = useState(undefined);

    useEffect(() => {
        loadSkills();
        loadCertifications();
    }, []);

    const loadSkills = async () => {
        try {
            const response = await SkillsService.loadSkills();
            setSkills(response.data);
        } catch (error) {
            console.error(error);
            const placeholder = ![undefined, ""].includes(error.response.data) && error.response.data.error.startsWith('SqlException: Connection Timeout Expired')
                ? [{ 'name': 'Please wait a little longer while the database resumes :)' }]
                : [{ 'name': 'Error', 'order': 0 }];
            setSkills(placeholder);
        }
    }

    const loadCertifications = async () => {
        try {
            const response = await CertificationsService.loadCertifications();
            setCertifications(response.data);
        } catch (error) {
            console.error(error);
            const placeholder = ![undefined, ""].includes(error.response.data) && error.response.data.error.startsWith('SqlException: Connection Timeout Expired')
                ? [{ 'name': 'Please wait a little longer while the database resumes :)' }]
                : [{ 'name': 'Error', 'order': 0 }];
            setCertifications(placeholder);
        }
    }

    return (
        <>
            <Typography variant='h1'>Skills.</Typography>
            {skills
                ? <SkillsList skills={skills} />
                : <Typography variant='h2'>Loading</Typography>}
            <Typography variant='h1'>Certifications.</Typography>
            {certifications
                ? <SkillsList skills={certifications} />
                : <Typography variant='h2'>Loading</Typography>}
            <PageNav beforeTo="/about" beforeTitle="About" afterTo="/experience" afterTitle="Experience" />
        </>
    );
}