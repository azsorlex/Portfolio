import { Container } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function AnimatedMain({ children }) {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animation-zone-animation');
                    }
                });
            },
            {
                threshold: 1
            }
        );

        const animationElements = document.querySelectorAll('.animation-zone');

        animationElements.forEach((element) => observer.observe(element));

        console.log("Intersection Observer initialised");
    }, []);

    return (
        <Container maxWidth="lg" component={motion.main}
            exit={{ opacity: 0, translateY: "25px", transition: { duration: 0.5 } }}>
            {children}
        </Container>
    );
}