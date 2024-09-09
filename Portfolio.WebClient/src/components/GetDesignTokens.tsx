import { blue, grey } from "@mui/material/colors";
import "@fontsource-variable/source-code-pro";
import "@fontsource-variable/noto-serif";

type ModeProp = 'light' | 'dark';

const dark = grey[900];
const light = grey['A200'];
const accent = blue[400];
const experienceDark = grey[800];
const experienceLight = grey['A400'];

const headerFont = {
    fontFamily: [
        '"Noto Serif Variable"',
        'serif',
    ].join(','),
};

const GetDesignTokens = (mode: ModeProp) => ({
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
                experience: experienceLight,
            } : {
                default: dark,
                paper: light,
                experience: experienceDark,
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
        h1: headerFont,
        h2: headerFont,
        h3: undefined,
        h4: headerFont,
        h5: headerFont,
    }
});

export default GetDesignTokens;