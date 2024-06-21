import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Box } from '@mui/material';

export default function Layout(props) {
    return (
        <React.Fragment>
            <Header />
            <Box className='spacer' />
            {props.children}
            <Footer />
        </React.Fragment>
    );
}