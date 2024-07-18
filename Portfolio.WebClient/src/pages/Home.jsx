import { Box, Typography } from "@mui/material";
import Skills from "./Skills";
import About from "./About";
import Experience from "./Experience";
import AnimatedMain from "../components/Layouts/AnimatedMain";

export default function Home() {
  return (
    <AnimatedMain>
      <Box className="animation-zone PageContainer" minHeight="calc(100vh - 48px)">
        <Box m="auto">
          <Typography variant="subtitle2">
            {"Hi, I'm"}
          </Typography>
          <Typography variant="h1">{"ALEXANDER ROZSA"}</Typography>
          <Typography variant="subtitle1" paragraph>
            {
              "But you can call me Alex. I'm a passionate software engineer with experience in full stack development, who enjoys building dynamic products from start to finish."
            }
          </Typography>
        </Box>
      </Box>
      <About />
      <Skills /> 
      <Experience />
    </AnimatedMain>
  );
}
