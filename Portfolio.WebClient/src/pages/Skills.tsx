import { ChangeEvent, useEffect, useState } from "react";
import SkillsService, { SkillDTO } from "../services/SkillsService";
import CertificationsService, { CertificationDTO } from "../services/CertificationsService";
import SkillsList from "../components/Skills/SkillsList";
import { Box, Checkbox, Container, FormControlLabel, Input, Typography } from "@mui/material";
import LoadingIcon from "../components/LoadingIcon";
import { AnimatePresence } from "framer-motion";
import CertificationsList from "../components/Skills/CertificationsList";

export type SkillsType = Array<SkillDTO> | undefined | null;
export type CertificationsType = Array<CertificationDTO> | undefined | null;

export default function Skills() {
  const [skills, setSkills] = useState<SkillsType>(undefined);
  const [certifications, setCertifications] = useState<CertificationsType>(undefined);
  const [topSkillsChecked, setTopSkillsChecked] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredSkills, setFilteredSkills] = useState<SkillsType>([]);

  useEffect(() => {
    loadSkills();
    loadCertifications();
  }, []);

  const loadSkills = async () => {
    try {
      console.log("Fetching skills...");
      const response = await SkillsService.getSkills();
      console.log("Skills fetched.")
      setFilteredSkills(response.data);
      setSkills(response.data);
    } catch (error) {
      console.error(error);
      setSkills(null);
    }
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

  const handleSearchTerm = ((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchTerm(event.target.value);
  })

  useEffect(() => {
    const delayFilter = setTimeout(() => {
      const regex = new RegExp(searchTerm.toLowerCase());
      setFilteredSkills(skills?.filter(({ name }) => name.toLowerCase().match(regex)));
      setTopSkillsChecked(false);
    }, 500);

    return () => clearTimeout(delayFilter);
  }, [searchTerm]);

  return (
    <Container className="PageContainer" id="skills" maxWidth="lg">
      <Box m="auto" className="ContentContainer">
        <Typography variant="h2">SKILLS</Typography>
        <Box width={"75%"} m="auto" mb={8}>
          <AnimatePresence mode="wait">
            {skills ? (
              <Box key={skills.at(0)?.id}>
                <Box>
                  <Input
                    placeholder="Find (can use RegEx)"
                    onChange={handleSearchTerm}
                    sx={{ mr: 2 }} />
                  <FormControlLabel
                    label="Top Skills"
                    control={
                      <Checkbox
                        checked={topSkillsChecked}
                        onChange={(e) => setTopSkillsChecked(e.target.checked)}
                      />
                    }
                  />
                </Box>
                <SkillsList key={skills.at(0)?.id} skills={filteredSkills} checked={topSkillsChecked} />
              </Box>
            ) : (
              <LoadingIcon key={skills} source={skills} />
            )}
          </AnimatePresence>
        </Box>
        <Typography variant="h2">CERTIFICATIONS</Typography>
        <Box width={"75%"} m="auto">
          <AnimatePresence mode="wait">
            {certifications ? (
              <CertificationsList
                key={certifications.at(0)?.id}
                certifications={certifications}
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