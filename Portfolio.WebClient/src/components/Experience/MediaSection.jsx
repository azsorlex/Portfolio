import { Box, Link, Typography } from "@mui/material"

export default function MediaSection({ media = [] }) {
    if (media.length == 0) {
        return;
    }

    return (
        <Box>
            <Typography variant="h5">
                Media:
            </Typography>
            {media.map((x) => (
                <Box key={x.title} mb={2}>
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