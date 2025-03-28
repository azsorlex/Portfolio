import { MouseEvent, useEffect, useRef, useState } from "react";
import { AppBar, Box, Divider, Link, Menu, MenuItem, Stack, Toolbar, Tooltip, Typography, } from "@mui/material";
import { Copyright, GitHub } from "@mui/icons-material";
import dayjs from "dayjs";
import NavLink from "./NavLink";
import ContactsService, { ContactDTO } from "../../services/ContactsService";
import { ApiResponseType } from "../../services/BaseService";
import LoadingIcon from "../LoadingIcon";
import { GITHUB_FOOTER_SUB_ITEMS, GITHUB_URL_PREFIX } from "../../data/constants/GlobalConstants";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { container } from "../../data/constants/FramerVariants";

export default function Footer() {
  const [contacts, setContacts] = useState<ApiResponseType<ContactDTO[]>>()
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const loadContactsRef = useRef(null);
  const isInView = useInView(loadContactsRef, { once: true });

  useEffect(() => {
    getContacts();
  }, [isInView]);

  const handleGithubClick = (event: MouseEvent<HTMLElement>) => {
    // To temporarily make the animations instant when opening the menu.
    document.body.classList.remove("loaded");
    setAnchorEl(event.currentTarget);
  };

  const handleGithubClose = () => {
    setAnchorEl(null);
    // Add the animations back in when done.
    setTimeout(() => {
      document.body.classList.add("loaded");
    }, 5);
  };

  const getContacts = () => {
    if (contacts === null) {
      setContacts(undefined);
    }

    void ContactsService.getContacts(!isInView)
      .then((response) => {
        setContacts(response);
      });
  }

  return (
    <AppBar
      component="footer"
      position="static"
      color="primary"
      enableColorOnDark
      sx={{ transition: "all 0.25s linear" }}
    >
      <Toolbar
        variant="dense"
        ref={loadContactsRef}>
        <Copyright fontSize="small" sx={{ mr: 0.5 }} />
        <Typography fontSize={12}>
          {`${dayjs().year()} Alexander Rozsa`}
        </Typography>
        <Box className="spacer" />
        <AnimatePresence mode="wait">
          {contacts ?
            <Stack
              key={contacts[0].name}
              direction="row"
              spacing={3}
              component={motion.div}
              variants={container}
              initial="hidden"
              animate="show">
              {contacts
                .filter(x => x.name === "GitHub")
                .map(x => (
                  <Tooltip
                    key={x.name}
                    title={x.name}>
                    <Link
                      className="navlink"
                      color="secondary"
                      component="button"
                      onClick={handleGithubClick}
                    >
                      <GitHub />
                    </Link>
                  </Tooltip>
                ))}
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleGithubClose}
                transformOrigin={{ horizontal: "center", vertical: "top" }}
                anchorOrigin={{ horizontal: "center", vertical: "top" }}
              >
                {contacts
                  .filter((x) => x.alt === GITHUB_FOOTER_SUB_ITEMS)
                  .map((x, index, arr) => (
                    <Box key={index}>
                      <MenuItem>
                        <NavLink
                          title={x.name}
                          href={x.url ?? ""}
                          icon={x.icon}
                          target="_blank"
                          rel="noopener"
                        />
                      </MenuItem>
                      {index < arr.length - 1
                        && <Divider
                          color="secondary"
                          variant="middle"
                          aria-hidden="true" />}
                    </Box>
                  ))}

              </Menu>
              {contacts
                .filter((x) => x.url != null && !x.url.startsWith(GITHUB_URL_PREFIX))
                .map((x) => (
                  <NavLink
                    key={x.name}
                    title={x.name}
                    href={x.url ?? ""}
                    icon={x.icon}
                    target="_blank"
                    rel="noopener"
                  />
                ))}
            </Stack>
            :
            <LoadingIcon
              key="loading"
              source={contacts}
              callback={getContacts} />
          }
        </AnimatePresence>
      </Toolbar>
    </AppBar>
  );
}