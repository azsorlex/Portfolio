import { Home, School } from "@mui/icons-material";
import { AppBar, Avatar, Box, Container, Toolbar, Tooltip, alpha, useScrollTrigger, useTheme } from "@mui/material";
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
                    <Avatar alt="AR" src="/android-chrome-192x192.png" component="a" href="#root" />
                    <Box className="spacer" />
                    <Tooltip title="Home">
                        <Link to="/" className="navlink">
                            <Home />
                        </Link>
                    </Tooltip>
                    <Tooltip title="Skills" color="secondary">
                        <Link to="/skills" className="navlink">
                            <School />
                        </Link>
                    </Tooltip>
                </Toolbar>
            </Container>
        </AppBar>
    );
}