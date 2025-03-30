import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { skillsListContainer } from "../../data/constants/FramerVariants";
import { ApiResponseType } from "../../services/BaseService";
import { CertificationDTO } from "../../services/CertificationsService";
import CertificationsListItem from "./CertificationsListItem";

interface CertificationsListProps {
    certifications: ApiResponseType<CertificationDTO[]>;
};

export default function CertificationsList({ certifications }: CertificationsListProps) {
    return (
        <Box
            component={motion.div}
            variants={skillsListContainer}
            initial="hidden"
            whileInView="show"
        >
            {certifications?.map((certification) => (
                <CertificationsListItem
                    key={certification.id}
                    certification={certification} />
            ))}
        </Box>
    );
}