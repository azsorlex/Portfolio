import { Typography } from "@mui/material";
import PageNav from "../components/Layouts/PageNav";
import AnimatedMain from "../components/Layouts/AnimatedMain";

export default function About() {
    return (
        <AnimatedMain>
            <Typography className="animation-zone" variant="h1" gutterBottom>
                ABOUT ME
            </Typography>
            <Typography className="animation-zone" paragraph>
                {`I'm a software develper that's been doing what I do since 2014.
                From humble beginings where I first picked up HTML4 and said "This. This is what I want to do.",
                I've been gradually honing my craft through academia and individual study.
                Now I have 2 years of experience in full stack development and I'd like to broaden my horizons with new opportunities.`}
            </Typography>
            <Typography className="animation-zone" paragraph>
                {`Down the line I'm hoping I can leave a mark on the world in a meaningful way. 
                My perfect job in this industry would be one where my contributions will have real, tangible effects. 
                Much like how a bridge or tunnel being built will allow people to get to their destination faster, the systems I contribute to should visibly, positively impact peoples lives; to make advancements in the space.`}
            </Typography>
            <PageNav beforeTo="/" beforeTitle="Home" afterTo="/skills" afterTitle="Skills & Experience" mt={8} />
        </AnimatedMain>
    );
}