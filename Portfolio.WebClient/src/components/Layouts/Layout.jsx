import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Box, Container } from '@mui/material';

export default function Layout(props) {
    return (
        <React.Fragment>
            <Header />
            <Box className="spacer" />
            <Container component="main" maxWidth="md">
                {props.children}
            </Container>
            <Footer />
        </React.Fragment>
    );
}