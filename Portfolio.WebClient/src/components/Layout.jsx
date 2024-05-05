import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Box, Container, CssBaseline } from '@mui/material';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Header />
            <Box className="spacer" />
            <Container id="main" component="main" maxWidth="lx">
                {children}
            </Container>
            <Footer />
        </React.Fragment>
    );
}

export default Layout;