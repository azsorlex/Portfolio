import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Box } from '@mui/material';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <Box sx={{ flexGrow: 1 }} />
            <Box id="main" sx={{ flexGrow: 1 }}>
                {children}
            </Box>
            <Footer />
        </React.Fragment>
    );
}

export default Layout;