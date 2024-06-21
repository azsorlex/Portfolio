import { useEffect, useMemo } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme, responsiveFontSizes, useMediaQuery } from '@mui/material';
import './App.css';
import GetDesignTokens from './components/GetDesignTokens';
import Layout from './components/Layouts/Layout';
import Home from './pages/Home';
import Skills from './pages/Skills';
import About from './pages/About';
import Experience from './pages/Experience';
import { AnimatePresence } from 'framer-motion';

export default function App() {
    const location = useLocation();
    const darkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = useMemo(() => responsiveFontSizes(createTheme(GetDesignTokens(darkMode ? 'dark' : 'light'))), [darkMode]);

    const scrollToTop = () => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    };

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
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