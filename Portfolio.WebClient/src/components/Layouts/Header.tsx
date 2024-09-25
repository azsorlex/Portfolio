import { Code, DarkModeOutlined, DocumentScanner, Home, LightModeOutlined, Portrait, School } from "@mui/icons-material";
import { AppBar, Box, Container, Fab, Toolbar, alpha, useScrollTrigger, useTheme, } from "@mui/material";
import NavLink from "./NavLink";
import { ThemeContext } from "../../App";
import { useContext } from "react";

export default function Header() {
  const themeContext = useContext(ThemeContext);
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <AppBar
      className={trigger ? "blurred" : "transparent"}
      position="sticky"
      color="transparent"
      enableColorOnDark
      sx={{
        backgroundColor: alpha(theme.palette.primary.main, 0.2),
        boxShadow: 0,
        zIndex: 1,
      }}
    >
      <Container component="div" maxWidth="lg">
        <Toolbar variant="dense">
          <Fab
            color="primary"
            aria-label="toggle-theme"
            size="small"
            onClick={themeContext.update}
          >
            {themeContext.darkMode ? <LightModeOutlined /> : <DarkModeOutlined />}
          </Fab>
          <Box className="spacer" />
          <NavLink title="Home" href="/" icon={<Home />} />
          <NavLink title="About" href="/#about" icon={<Portrait />} />
          <NavLink title="Skills & Certifications" href="/#skills" icon={<School />} />
          <NavLink title="Experience" href="/#experience" icon={<Code />} />
          <NavLink title="Resume" href="/resume" icon={<DocumentScanner />} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}