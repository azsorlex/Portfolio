import { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Divider, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import { AccountTree, GitHub, Home, LinkedIn } from "@mui/icons-material";

const Footer = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar component="footer" position="static" color="primary" enableColorOnDark>
            <Toolbar variant="dense">
                <Typography fontSize={12}>
                    Built from scratch by yours truly
                </Typography>
                <Box className="spacer" />
                <Tooltip title='GitHub'>
                    <Link onClick={handleClick} className="navlink">
                        <GitHub />
                    </Link>
                </Tooltip>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    transformOrigin={{ horizontal: 'center', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
                >
                    <MenuItem>
                        <Tooltip title='Profile'>
                            <Link to='https://github.com/azsorlex' target="_blank" rel="noopener noreferrer">
                                <Home />
                            </Link>
                        </Tooltip>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <Tooltip title='Repository'>
                            <Link to='https://github.com/azsorlex/website-resume' target="_blank" rel="noopener noreferrer">
                                <AccountTree />
                            </Link>
                        </Tooltip>
                    </MenuItem>
                </Menu>
                <Tooltip title='LinkedIn'>
                    <Link to='https://www.linkedin.com/in/alexander-rozsa/' target="_blank" rel="noopener noreferrer" className="navlink">
                        <LinkedIn />
                    </Link>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;