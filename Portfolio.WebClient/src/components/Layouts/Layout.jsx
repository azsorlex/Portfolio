import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Box, Container } from '@mui/material';

export default function Layout(props) {
    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    entry.target.classList.toggle('animation-zone-animation', entry.isIntersecting);
                });
            },
        );

        const animationElements = document.querySelectorAll('.animation-zone');

        animationElements.forEach((element) => observer.observe(element));

        console.log("Intersection Observer initialised");
    });

    return (
        <React.Fragment>
            <Header />
            <Box className='spacer' />
            <Container component='main' maxWidth='lg'>
                {props.children}
            </Container>
            <Footer />
        </React.Fragment>
    );
}