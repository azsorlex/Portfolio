import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, Grid, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function PageNav({ beforeTo, beforeTitle, afterTo, afterTitle }) {
    return (
        <Grid container width="30vh" mt={5} columns={2}>
            {beforeTo &&
                <Link component={RouterLink} to={beforeTo} underline="none">
                    <ArrowBack fontSize="xs" /> {beforeTitle}
                </Link>
            }
            <Box className="spacer" />
            {afterTo &&
                <Link component={RouterLink} to={afterTo} underline="none">
                    {afterTitle} <ArrowForward fontSize="xs" />
                </Link>
            }
        </Grid>
    );
}