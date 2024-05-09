import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Box, Container } from '@mui/material';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <Box className="spacer" />
            <Container id="main" component="main" maxWidth="md">
                {children}
            </Container>
            <Footer />
        </React.Fragment>
    );
}

export default Layout;