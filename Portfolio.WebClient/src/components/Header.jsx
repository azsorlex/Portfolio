import { AppBar, Avatar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <AppBar position="sticky" color="primary">
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
        </AppBar>
    );
}

export default Header;