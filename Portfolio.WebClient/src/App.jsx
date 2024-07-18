import { createContext, useEffect, useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
  useMediaQuery,
} from "@mui/material";
import "./App.css";
import GetDesignTokens from "./components/GetDesignTokens";
import Layout from "./components/Layouts/Layout";
import Home from "./pages/Home";

const getModeName = (mode) => (mode ? "dark" : "light");

export const ThemeContext = createContext();

export const ScrollToTop = (instant = false) => {
  document.documentElement.scrollTo({
    top: 0,
    left: 0,
    behavior: instant ? "instant" : "smooth",
  });
};

export default function App() {
  const systemDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(systemDarkMode);
  const theme = useMemo(
    () =>
      responsiveFontSizes(createTheme(GetDesignTokens(getModeName(darkMode)))),
    [darkMode]
  );

  const toggleTheme = () => {
    const newMode = !darkMode;
    document.documentElement.setAttribute("data-theme", getModeName(newMode));
    setDarkMode(newMode);
  };

  useEffect(() => {
    ScrollToTop(true);
    document.body.classList.add("loaded");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      getModeName(systemDarkMode)
    );
    setDarkMode(systemDarkMode);
  }, [systemDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <ThemeContext.Provider
        value={{
          darkMode: darkMode,
          update: toggleTheme,
        }}
      >
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}
