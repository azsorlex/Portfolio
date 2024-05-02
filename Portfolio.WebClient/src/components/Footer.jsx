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
        <AppBar position="static" sx={{ top: 'auto', bottom: '0', backgroundColor: '#333333' }}>
            <Toolbar>
                <Typography fontSize={12}>
                    Designed and developed by Alexander Rozsa
                </Typography>
                <Box sx={{ flexGrow: 1, alignSelf: 'center' }} />
                <Tooltip title='GitHub'>
                    <Link onClick={handleClick} id="navlink">
                        <GitHub sx={{ mt: '5px' }} />
                    </Link>
                </Tooltip>
                <Menu
                    id='git-menu'
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                    sx={{
                        "& .MuiMenu-paper": { backgroundColor: "#333333" }
                    }}>
                    <MenuItem>
                        <Tooltip title='Profile' position='top'>
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
                    <Link to='https://www.linkedin.com/in/alexander-rozsa/' target="_blank" rel="noopener noreferrer" id="navlink">
                        <LinkedIn sx={{ mt: '5px' }} />
                    </Link>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;