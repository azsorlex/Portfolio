import { blue, grey } from "@mui/material/colors";
import "@fontsource-variable/source-code-pro";
import "@fontsource-variable/noto-serif";

const dark = grey[900];
const light = grey['A200'];
const accent = blue[400];

const GetDesignTokens = (mode) => ({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                button: {
                    '&:hover': {
                        color: accent,
                    },
                },
                a: {
                    '&:hover': {
                        color: accent,
                    },
                },
            },
        },
    },
    palette: {
        mode,
        primary: {
            ...(mode === 'light' ? {
                main: dark,
            } : {
                main: light,
            }),
        },
        secondary: {
            ...blue,
        },
        background: {
            ...(mode === 'light' ? {
                default: light,
                paper: dark,
            } : {
                default: dark,
                paper: light,
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