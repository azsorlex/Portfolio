import { createContext, MouseEventHandler, useEffect, useMemo, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme, responsiveFontSizes, useMediaQuery } from "@mui/material";
import "./App.css";
import getDesignTokens from "./components/GetDesignTokens";
import Layout from "./components/Layouts/Layout";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import { AnimatePresence } from "framer-motion";
import { ErrorBoundary } from 'react-error-boundary';

interface ContextValues {
  darkMode?: boolean,
  update?: MouseEventHandler<HTMLButtonElement>,
};

const getModeName = (mode: boolean) => (mode ? "dark" : "light");

function fallbackRender({ error }: { error: Error; resetErrorBoundary: () => void }) {
  return (
    <div role="alert">
      <h3>Something went wrong:</h3>
      <pre style={{ color: "red" }}>{error.name}: {error.message}</pre>
      <h3>Full trace:</h3>
      <pre style={{ color: "red" }}>{error.stack}</pre>
    </div>
  );
}

export const ThemeContext = createContext<ContextValues>({});

export const scrollToTop = (instant = false) => {
  document.documentElement.scrollTo({
    top: 0,
    left: 0,
    behavior: instant ? "instant" : "smooth",
  });
};

export default function App() {
  const location = useLocation();
  const systemDarkMode = useMediaQuery<boolean>("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(systemDarkMode);
  const theme = useMemo(
    () =>
      responsiveFontSizes(createTheme(getDesignTokens(getModeName(darkMode)))),
    [darkMode]
  );

  const toggleTheme = () => {
    const newMode = !darkMode;
    document.documentElement.setAttribute("data-theme", getModeName(newMode));
    setDarkMode(newMode);
  };

  useEffect(() => {
    if (location.hash) {
      document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: "instant" });
    } else {
      scrollToTop(false);
    }
    document.body.classList.add("loaded");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", getModeName(systemDarkMode));
    setDarkMode(systemDarkMode);
  }, [systemDarkMode]);

  return (
    <ErrorBoundary
      fallbackRender={fallbackRender}
      onError={console.error}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <ThemeContext.Provider
          value={{
            darkMode: darkMode,
            update: toggleTheme,
          }}
        >
          <AnimatePresence mode="wait">
            <Layout key={location.pathname}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
              </Routes>
            </Layout>
          </AnimatePresence>
        </ThemeContext.Provider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}