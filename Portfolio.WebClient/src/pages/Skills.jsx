import { useEffect, useState } from 'react';
import SkillsService from '../services/SkillsService';
import SkillsList from '../components/Skills/SkillsList';
import { Box, Typography } from '@mui/material';
import PageNav from '../components/Layouts/PageNav';
import CertificationsService from '../services/CertificationsService';
import LoadingIcon from '../components/LoadingIcon';
import AnimatedMain from '../components/Layouts/AnimatedMain';
import { AnimatePresence } from 'framer-motion';

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
            setSkills(null);
        }
    }

    const loadCertifications = async () => {
        try {
            const response = await CertificationsService.getCertifications();
            setCertifications(response.data);
        } catch (error) {
            console.error(error);
            setCertifications(null);
        }
    }

    return (
        <AnimatedMain>
            <Typography className="animation-zone" variant='h1'>SKILLS</Typography>
            <Box className="animation-zone" width={"75%"} mb={8}>
                <AnimatePresence mode='wait'>
                    {skills
                        ? <SkillsList key={skills} skills={skills} columns={6} />
                        : <LoadingIcon key={skills} source={skills} />}
                </AnimatePresence>
            </Box>
            <Typography className="animation-zone" variant='h1'>CERTIFICATIONS</Typography>
            <Box className="animation-zone" width={"75%"}>
                <AnimatePresence mode='wait'>
                    {certifications
                        ? <SkillsList key={certifications} skills={certifications} columns={6} />
                        : <LoadingIcon key={certifications} source={certifications} />}
                </AnimatePresence>
            </Box>
            <PageNav beforeTo="/about" beforeTitle="About" afterTo="/experience" afterTitle="Experience" mt={8} />
        </AnimatedMain>
    );
}