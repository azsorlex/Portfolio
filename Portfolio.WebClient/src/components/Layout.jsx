import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Box, CssBaseline } from '@mui/material';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Header />
            <Box className="spacer" />
            <Box id="main">
                {children}
            </Box>
            <Footer />
        </React.Fragment>
    );
}

export default Layout;