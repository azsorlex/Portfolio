import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function PageNav({ beforeTo, beforeTitle, afterTo, afterTitle, width = "30%", mb = 0, mt = 0 }) {
    return (
        <Box className="animation-zone" id="page-nav" display="flex" flexDirection="row" width={width} margin="auto" mb={mb} mt={mt}>
            {beforeTo &&
                <Link component={RouterLink} to={beforeTo}>
                    <Button startIcon={<ArrowBack />} variant="text" color="secondary">
                        {beforeTitle}
                    </Button>
                </Link>
            }
            <Box className="spacer" />
            {afterTo &&
                <Link component={RouterLink} to={afterTo} ml="auto">
                    <Button endIcon={<ArrowForward />} variant="text" color="secondary">
                        {afterTitle}
                    </Button>
                </Link>
            }
        </Box>
    );
}