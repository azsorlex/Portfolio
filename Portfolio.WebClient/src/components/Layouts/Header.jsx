import { Code, Portrait, School } from "@mui/icons-material";
import { AppBar, Avatar, Box, Container, Toolbar, alpha, useScrollTrigger, useTheme } from "@mui/material";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";

export default function Header() {
    const theme = useTheme();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return (
        <AppBar className={trigger ? "blurred" : "transparent"} position="sticky" color="transparent" enableColorOnDark sx={{ backgroundColor: alpha(theme.palette.primary.main, 0.2), boxShadow: 0 }}>
            <Container component="div" maxWidth="lg">
                <Toolbar variant="dense">
                    <Avatar alt="AR" src="/android-chrome-192x192.png" component={Link} to="/" />
                    <Box className="spacer" />
                    <NavLink title="About" to="/about" icon={<Portrait />} />
                    <NavLink title="Skills & Certifications" to="/skills" icon={<School />} />
                    <NavLink title="Experience" to="/experience" icon={<Code />} />
                </Toolbar>
            </Container>
        </AppBar>
    );
}