import { Box, Link } from "@mui/material";
import { motion } from "framer-motion";
import { skillsListContainer } from "../../data/constants/FramerVariants";
import StyledSkill from "./StyledSkill";
import { ApiResponseType } from "../../services/BaseService";
import { CertificationDTO } from "../../services/CertificationsService";

interface CertificationsListProps {
    certifications: ApiResponseType<CertificationDTO[]>,
};

export default function CertificationsList({ certifications }: CertificationsListProps) {
    return (
        <Box
            component={motion.div}
            variants={skillsListContainer}
            initial="hidden"
            whileInView="show"
        >
            {certifications?.map((skill) => {
                return skill.url ? (
                    <Link key={skill.id} href={skill.url} target="_blank" rel="noopener">
                        <StyledSkill name={skill.name} />
                    </Link>
                ) : (
                    <StyledSkill
                        key={skill.id}
                        name={skill.name}
                    />
                );
            })}
        </Box>
    );
}