import { useEffect, useMemo, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CssBaseline, Fab, ThemeProvider, createTheme, responsiveFontSizes, useMediaQuery } from '@mui/material';
import './App.css';
import GetDesignTokens from './components/GetDesignTokens';
import Layout from './components/Layouts/Layout';
import Home from './pages/Home';
import Skills from './pages/Skills';
import About from './pages/About';
import Experience from './pages/Experience';
import { AnimatePresence } from 'framer-motion';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';

const getModeName = (mode) => (
    mode ? 'dark' : 'light'
);

const scrollToTop = () => {
    document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
    });
};

export default function App() {
    const systemDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [darkMode, setDarkMode] = useState(systemDarkMode);
    const theme = useMemo(() => responsiveFontSizes(createTheme(GetDesignTokens(getModeName(darkMode)))), [darkMode]);
    const location = useLocation();

    const toggleTheme = () => {
        const newMode = !darkMode;
        document.documentElement.setAttribute('data-theme', getModeName(newMode));
        setDarkMode(newMode);
    };

    useEffect(() => {
        scrollToTop();
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', getModeName(systemDarkMode));
        setDarkMode(systemDarkMode);
    }, [systemDarkMode]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Fab color='primary' aria-label='toggle-theme' onClick={toggleTheme} sx={{ position: 'fixed', bottom: '5vh', right: '5vh' }}>
                {darkMode
                    ? <LightModeOutlined />
                    : <DarkModeOutlined /> }
            </Fab>
            <AnimatePresence mode='wait' onExitComplete={scrollToTop}>
                <Layout key={location.pathname}>
                    <Routes location={location}>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/experience' element={<Experience />} />
                        <Route path='/skills' element={<Skills />} />
                    </Routes>
                </Layout>
            </AnimatePresence>
        </ThemeProvider>
    );
}