import { AppBar, Avatar, Container, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <AppBar position="sticky" color="primary">
            <Container component="div" maxWidth="xl">
                <Toolbar>
                    <Link to="/" className="spacer">
                        <Avatar alt="AR" src="/android-chrome-192x192.png" />
                    </Link>
                    <Link to="/" className="navlink">
                        <Typography variant="p">
                            Home
                        </Typography>
                    </Link>
                    <Link to="/skills" className="navlink">
                        <Typography variant="p">
                            Skills
                        </Typography>
                    </Link>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;