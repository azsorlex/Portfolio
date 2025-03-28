import { Box, Container, Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { container } from "../data/constants/FramerVariants";

export default function About() {
  return (
    <Container className="PageContainer" id="about" maxWidth="lg">
      <Box m="auto" className="ContentContainer">
        <Typography variant="h2" textTransform="uppercase" gutterBottom>
          About Me
        </Typography>
        <Typography
          mb={2}
          component={motion.p}
          variants={container}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.75 }}>
          {`I'm a software develper that's been doing what I do since 2014 in high school; 
          a university-qualified professional with a Bachelors of Computer Science and
          2.5 years of experience in full stack development. 
          I'm always looking to broaden my horizons with new opportunities.`}
        </Typography>
        <Typography
          sx={{ mb: 4 }}
          component={motion.p}
          variants={container}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.75 }}>
          {`Down the line I'm hoping I can leave a mark on the world in a meaningful way. 
                My perfect job in this industry would be one where my contributions will have real, tangible effects. 
                Much like how a bridge or tunnel being built will allow people to get to their destination faster, the systems I contribute to should visibly, positively impact peoples lives; to make advancements in the space.`}
        </Typography>
        <Divider />
      </Box>
    </Container>
  );
}
