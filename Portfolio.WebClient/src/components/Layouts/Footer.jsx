import { useEffect, useState } from "react";
import { AppBar, Box, Divider, Link, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import { Code, Copyright, GitHub, Home, LinkedIn, Send } from "@mui/icons-material";
//import * as MUIcon from "@mui/icons-material";
import NavLink from "./NavLink";
import ContactsService from "../../services/ContactsService";

export default function Footer() {
    //const [contactMD, setContactMD] = useState(undefined);
    const [anchorEl, setAnchorEl] = useState(undefined);
    const open = Boolean(anchorEl);

    /*useEffect(() => {
        loadContactMetadata();
    }, []);

    const loadContactMetadata = async () => {
        try {
            const response = await ContactsService.loadContacts();
            setContactMD(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const getIconFromString = (name) => {
        const md = contactMD.find(x => x.name === name);
        const Icon = MUIcon[md.icon];
        return <Icon />
    }*/

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar component="footer" position="static" color="primary" enableColorOnDark>
            <Toolbar variant="dense">
                <Copyright fontSize="xs" sx={{ mr: 0.5 }} />
                <Typography fontSize={12}>
                    {`${new Date().getFullYear()} Alexander Rozsa`}
                </Typography>
                <Box className="spacer" />
                {//contactMD &&
                    <Tooltip title='GitHub'>
                        <Link className="navlink" color="secondary" component="button" onClick={handleClick}>
                            {//getIconFromString("GitHub")
                            }
                            <GitHub />
                        </Link>
                    </Tooltip>}
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    transformOrigin={{ horizontal: 'center', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
                >
                    <MenuItem>
                        <Tooltip title='Profile'>
                            <Link href='https://github.com/azsorlex' color="secondary" target="_blank" rel="noopener">
                                <Home />
                            </Link>
                        </Tooltip>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <Tooltip title='Repository'>
                            <Link href='https://github.com/azsorlex/website-resume' color="secondary" target="_blank" rel="noopener">
                                <Code />
                            </Link>
                        </Tooltip>
                    </MenuItem>
                </Menu>
                <NavLink title='LinkedIn' icon={<LinkedIn />} to="https://www.linkedin.com/in/alexander-rozsa" target="_blank" rel="noopener" />
                <NavLink title="Send me a message" icon={<Send />} to="mailto:arozsa@proton.me" target="_blank" rel="noopener" />
            </Toolbar>
        </AppBar>
    );
}