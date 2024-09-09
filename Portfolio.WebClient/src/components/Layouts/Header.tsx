import { Code, DocumentScanner, Portrait, School } from "@mui/icons-material";
import { AppBar, Avatar, Box, Container, Link, Toolbar, alpha, useScrollTrigger, useTheme, } from "@mui/material";
import NavLink from "./NavLink";
import { ScrollToTop } from "../../App";
import { useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
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
          {pathname === "/" ? (
            <Avatar
              alt="AR"
              src="/android-chrome-192x192.png"
              onClick={() => ScrollToTop(false)}
              sx={{ ":hover": { cursor: "pointer" } }}
            />
          ) : (
            <Avatar
              alt="AR"
              src="/android-chrome-192x192.png"
              component={Link}
              href="/"
            />
          )}
          <Box className="spacer" />
          <NavLink title="About" to="/#about" icon={<Portrait />} />
          <NavLink
            title="Skills & Certifications"
            to="/#skills"
            icon={<School />}
          />
          <NavLink title="Experience" to="/#experience" icon={<Code />} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}