import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme, useMediaQuery } from '@mui/material';
import './App.css';
import GetDesignTokens from './components/GetDesignTokens';
import Layout from './components/Layout';
import Home from './pages/Home';
import Skills from './pages/Skills';

const App = () => {
    const darkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = React.useMemo(() => createTheme(GetDesignTokens(darkMode ? 'dark' : 'light')), [darkMode]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/skills' element={<Skills />} />
                </Routes>
            </Layout>
        </ThemeProvider>
    );
}

export default App;