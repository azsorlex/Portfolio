import { useEffect, useState } from 'react';
import SkillsService from '../services/SkillsService';
import SkillsList from '../components/Skills/SkillsList';
import { Box, Typography } from '@mui/material';
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
            const response = await SkillsService.getSkills();
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
            const response = await CertificationsService.getCertifications();
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
            <Typography className="animation-zone" variant='h1'>SKILLS</Typography>
            <Box className="animation-zone" width={"75%"} mb={8}>
                {skills
                    ? <SkillsList skills={skills} columns={6} />
                    : <Typography variant='h2'>Loading</Typography>}
            </Box>
            <Typography className="animation-zone" variant='h1'>CERTIFICATIONS</Typography>
            <Box className="animation-zone" width={"75%"}>
                {certifications
                    ? <SkillsList skills={certifications} columns={6} />
                    : <Typography variant='h2'>Loading</Typography>}
            </Box>
            <PageNav beforeTo="/about" beforeTitle="About" afterTo="/experience" afterTitle="Experience" />
        </>
    );
}