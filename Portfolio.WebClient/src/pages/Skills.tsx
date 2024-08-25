import { useEffect, useState } from "react";
import SkillsService, { SkillDTO } from "../services/SkillsService";
import CertificationsService, { CertificationDTO } from "../services/CertificationsService";
import SkillsList from "../components/Skills/SkillsList";
import { Box, Container, Typography } from "@mui/material";
import LoadingIcon from "../components/LoadingIcon";
import { AnimatePresence } from "framer-motion";

type SkillsType = Array<SkillDTO> | undefined | null;
type CertificationsType = Array<CertificationDTO> | undefined | null;

export default function Skills() {
  const [skills, setSkills] = useState<SkillsType>(undefined);
  const [certifications, setCertifications] = useState<CertificationsType>(undefined);

  useEffect(() => {
    loadSkills();
    loadCertifications();
  }, []);

  const loadSkills = async () => {
    try {
      console.log("Fetching skills...");
      const response = await SkillsService.getSkills();
      console.log("Skills fetched.");
      setSkills(response.data);
    } catch (error) {
      console.error(error);
      setSkills(null);
    } 0
  };

  const loadCertifications = async () => {
    try {
      console.log("Fetching certifications...");
      const response = await CertificationsService.getCertifications();
      console.log("Certifications fetched.");
      setCertifications(response.data);
    } catch (error) {
      console.error(error);
      setCertifications(null);
    }
  };

  return (
    <Container className="PageContainer" id="skills" maxWidth="lg">
      <Box m="auto" className="ContentContainer">
        <Typography variant="h2">SKILLS</Typography>
        <Box width={"75%"} m="auto" mb={8}>
          <AnimatePresence mode="wait">
            {skills ? (
              <SkillsList key={skills.at(0)?.id} skills={skills} />
            ) : (
              <LoadingIcon key={skills} source={skills} />
            )}
          </AnimatePresence>
        </Box>
        <Typography variant="h2">CERTIFICATIONS</Typography>
        <Box width={"75%"} m="auto">
          <AnimatePresence mode="wait">
            {certifications ? (
              <SkillsList
                key={certifications.at(0)?.id}
                skills={certifications}
                certifications={true}
              />
            ) : (
              <LoadingIcon key={certifications} source={certifications} />
            )}
          </AnimatePresence>
        </Box>
      </Box>
    </Container>
  );
}
