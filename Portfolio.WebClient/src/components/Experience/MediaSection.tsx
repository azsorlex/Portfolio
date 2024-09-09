import { Box, Link, Typography } from "@mui/material"
import { motion } from "framer-motion";
import { fadeUpChild } from "../../data/constants/FramerVariants";
import { MediaDTO } from "../../services/ExperiencesService";

interface MediaSectionProps {
    media?: Array<MediaDTO>,
};

export default function MediaSection({ media }: MediaSectionProps) {
    if (!media || media.length == 0) {
        return;
    }

    return (
        <Box>
            <Typography variant="h5" component={motion.h5}
                variants={fadeUpChild}>
                Media:
            </Typography>
            {media.map((x) => (
                <Box key={x.title} mb={2} component={motion.div}
                    variants={fadeUpChild}>
                    <Typography variant="h6">
                        {x.title}
                    </Typography>
                    <Typography>
                        {x.description}
                    </Typography>
                    <Link href={x.url} target="_blank" rel="noopener">
                        Go to resource
                    </Link>
                </Box>
            ))}
        </Box>
    );
}