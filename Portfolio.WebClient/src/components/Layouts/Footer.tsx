import { useState } from "react";
import { AppBar, Box, Divider, Link, Menu, MenuItem, Toolbar, Tooltip, Typography, } from "@mui/material";
import { Code, Copyright, GitHub, Home, LinkedIn, Send } from "@mui/icons-material";
import dayjs from "dayjs";
import NavLink from "./NavLink";

export default function Footer() {
  const [anchorEl, setAnchorEl] = useState(undefined);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    document.body.classList.remove("loaded");
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(undefined);
    setTimeout(() => {
      document.body.classList.add("loaded");
    }, 5);
  };

  return (
    <AppBar
      component="footer"
      position="static"
      color="primary"
      enableColorOnDark
      sx={{ transition: "all 0.25s linear" }}
    >
      <Toolbar variant="dense">
        <Copyright fontSize="small" sx={{ mr: 0.5 }} />
        <Typography fontSize={12}>
          {`${dayjs().year()} Alexander Rozsa`}
        </Typography>
        <Box className="spacer" />
        <Tooltip title="GitHub">
          <Link
            className="navlink"
            color="secondary"
            component="button"
            onClick={handleClick}
          >
            <GitHub />
          </Link>
        </Tooltip>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          transformOrigin={{ horizontal: "center", vertical: "top" }}
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
        >
          <MenuItem>
            <Tooltip title="Profile">
              <Link
                href="https://github.com/azsorlex"
                color="secondary"
                target="_blank"
                rel="noopener"
              >
                <Home />
              </Link>
            </Tooltip>
          </MenuItem>
          <Divider />
          <MenuItem>
            <Tooltip title="Repository">
              <Link
                href="https://github.com/azsorlex/website-resume"
                color="secondary"
                target="_blank"
                rel="noopener"
              >
                <Code />
              </Link>
            </Tooltip>
          </MenuItem>
        </Menu>
        <NavLink
          title="LinkedIn"
          href="https://www.linkedin.com/in/alexander-rozsa"
          icon={<LinkedIn />}
          target="_blank"
          rel="noopener"
        />
        <NavLink
          title="Send me a message"
          href="mailto:arozsa@proton.me"
          icon={<Send />}
          target="_blank"
          rel="noopener"
        />
      </Toolbar>
    </AppBar>
  );
}