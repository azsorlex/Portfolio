import { blue, grey } from "@mui/material/colors";
import "@fontsource-variable/source-code-pro";
import "@fontsource-variable/noto-serif";

const GetDesignTokens = (mode) => ({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    ...(mode === 'light' ? {
                        backgroundImage: `linear-gradient(to top, ${grey[900]}, ${grey['A400']} 70vh)`,
                    } : {
                        backgroundImage: `linear-gradient(to top, ${grey['A400']}, ${grey[900]} 70vh)`,
                    }),
                },
                button: {
                    '&:hover': {
                        color: blue[400],
                    },
                },
                a: {
                    '&:hover': {
                        color: blue[400],
                    },
                },
            },
        },
    },
    palette: {
        mode,
        primary: {
            ...(mode === 'light' ? {
                main: grey[900],
            } : {
                main: grey['A200'],
            }),
        },
        secondary: {
            ...blue,
        },
        background: {
            ...(mode === 'light' ? {
                paper: grey[900],
            } : {
                paper: grey['A200'],
            })
        },
    },
    typography: {
        allVariants: {
            fontFamily: [
                '"Source Code Pro Variable"',
                'monospace',
            ].join(','),
        },
        h1: {
            fontFamily: [
                '"Noto Serif Variable"',
                'serif',
            ].join(','),
        },
        h2: {
            fontFamily: [
                '"Noto Serif Variable"',
                'serif',
            ].join(','),
        },
        h4: {
            fontFamily: [
                '"Noto Serif Variable"',
                'serif',
            ].join(','),
        },
    }
});

export default GetDesignTokens;