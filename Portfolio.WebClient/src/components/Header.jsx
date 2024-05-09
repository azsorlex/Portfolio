import { Home, School } from "@mui/icons-material";
import { AppBar, Avatar, Box, Container, Toolbar, Tooltip, alpha, useTheme } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const theme = useTheme();
    const [className, setClassName] = useState("transparent");

    window.addEventListener("scroll", () => {
        setClassName(window.scrollY > 0 ? "blurred" : "transparent");
    });

    return (
        <AppBar className={className} position="sticky" color="transparent" enableColorOnDark sx={{ backgroundColor: alpha(theme.palette.primary.main, 0.2), boxShadow: 0 }}>
            <Container component="div" maxWidth="lg">
                <Toolbar variant="dense">
                    <Link onClick={() => window.scrollTo(0, 0)}>
                        <Avatar alt="AR" src="/android-chrome-192x192.png" />
                    </Link>
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

export default Header;