import { ChangeEvent, useEffect, useRef, useState } from "react";
import SkillsService, { SkillDTO } from "../services/SkillsService";
import CertificationsService, { CertificationDTO } from "../services/CertificationsService";
import SkillsList from "../components/Skills/SkillsList";
import { Box, Checkbox, Container, FormControlLabel, Input, Typography } from "@mui/material";
import LoadingIcon from "../components/LoadingIcon";
import { AnimatePresence, useInView } from "framer-motion";
import CertificationsList from "../components/Skills/CertificationsList";
import { ApiResponseType } from "../services/BaseService";

export default function Skills() {
  const [skills, setSkills] = useState<ApiResponseType<SkillDTO[]>>();
  const [certifications, setCertifications] = useState<ApiResponseType<CertificationDTO[]>>();
  const [topSkillsChecked, setTopSkillsChecked] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredSkills, setFilteredSkills] = useState<ApiResponseType<SkillDTO[]>>([]);
  const loadSkillsRef = useRef(null);
  const isInView = useInView(loadSkillsRef, { once: true });

  useEffect(() => {
    getSkills();
    getCertifications();
  }, [isInView]);

  useEffect(() => {
    if (skills) {
      const delayFilter = setTimeout(() => {
        const regex = new RegExp(searchTerm.toLowerCase());
        setFilteredSkills(skills.filter(({ name }) => name.toLowerCase().match(regex)));
        setTopSkillsChecked(false);
      }, 500);

      return () => { clearTimeout(delayFilter); };
    }
  }, [searchTerm]);

  const handleSearchTerm = ((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchTerm(event.target.value);
  });

  const getSkills = () => {
    if (skills === null) {
      setSkills(undefined);
    }

    void SkillsService.getSkills(!isInView)
      .then((r) => {
        setFilteredSkills(r);
        setSkills(r);
      });
  };

  const getCertifications = () => {
    if (certifications === null) {
      setCertifications(undefined);
    }

    void CertificationsService.getCertifications(!isInView)
      .then((r) => {
        setCertifications(r);
      });
  }

  return (
    <Container className="PageContainer" id="skills" maxWidth="lg">
      <Box m="auto" className="ContentContainer">
        <Typography variant="h2">SKILLS</Typography>
        <Box width={"75%"} m="auto" mb={8} ref={loadSkillsRef}>
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
                        onChange={(e) => { setTopSkillsChecked(e.target.checked); }}
                      />
                    }
                  />
                </Box>
                <SkillsList key={skills.at(0)?.id} skills={filteredSkills} checked={topSkillsChecked} />
              </Box>
            ) : (
              <LoadingIcon
                key={skills}
                source={skills}
                callback={getSkills} />
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
              <LoadingIcon
                key={certifications}
                source={certifications}
                callback={getCertifications} />
            )}
          </AnimatePresence>
        </Box>
      </Box>
    </Container>
  );
}