import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Box, Fab } from "@mui/material";
import { ThemeContext } from "../../App";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { RoutesProps } from "react-router-dom";

export default function Layout({ children }: RoutesProps) {
  const themeContext = React.useContext(ThemeContext);

  return (
    <React.Fragment>
      <Header />
      <Box className="spacer" />
      {children}
      <Fab
        color="primary"
        aria-label="toggle-theme"
        sx={{ position: "fixed", bottom: "5dvh", right: "5dvw" }}
        onClick={themeContext.update}
      >
        {themeContext.darkMode ? <LightModeOutlined /> : <DarkModeOutlined />}
      </Fab>
      <Footer />
    </React.Fragment>
  );
}
