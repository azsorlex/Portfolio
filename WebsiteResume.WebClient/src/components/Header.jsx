import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <AppBar className="navbar" position="sticky" sx={{ backgroundColor: '#333' }}>
            <Toolbar>
                <Link to="/">
                    <Avatar alt="Alexander Rozsa">AR</Avatar>
                </Link>
                <Box sx={{ flexGrow: 1 }} />
                <Link to="/">
                    <Typography variant="p">
                        Home
                    </Typography>
                </Link>
                <Link to="/skills">
                    <Typography variant="p">
                        Skills
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    );
}

export default Header;