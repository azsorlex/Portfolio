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

export default function App() {
    const { pathname } = useLocation();
    const darkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = useMemo(() => responsiveFontSizes(createTheme(GetDesignTokens(darkMode ? 'dark' : 'light'))), [darkMode]);

    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0
        })
    }, [pathname]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/experience' element={<Experience />} />
                    <Route path='/skills' element={<Skills />} />
                </Routes>
            </Layout>
        </ThemeProvider>
    );
}