import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Box, Fab } from "@mui/material";
import { ThemeContext } from "../../App";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

export default function Layout(props) {
  const themeContext = React.useContext(ThemeContext);

  return (
    <React.Fragment>
      <Header />
      <Box className="spacer" />
      {props.children}
      <Fab
        color="primary"
        aria-label="toggle-theme"
        onClick={themeContext.update}
        sx={{ position: "fixed", bottom: "5vh", right: "5vw" }}
      >
        {themeContext.darkMode ? <LightModeOutlined /> : <DarkModeOutlined />}
      </Fab>
      <Footer />
    </React.Fragment>
  );
}
