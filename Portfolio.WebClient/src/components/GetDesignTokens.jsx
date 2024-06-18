import { deepPurple, grey } from "@mui/material/colors";
import "@fontsource-variable/source-code-pro";
import "@fontsource-variable/noto-serif";

export default function GetDesignTokens(mode) {
    return ({
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        ...(mode === 'light' ? {
                            backgroundImage: 'linear-gradient(#181818, #FFFFFF 50vh)',
                        } : {
                            backgroundImage: 'linear-gradient(to top, #BBBCBC, #2A2A2A 70vh)',
                        }),
                    },
                },
            },
        },
        palette: {
            mode,
            primary: {
                ...(mode === 'light' ? {
                    main: '#181818',
                } : {
                    main: grey['A200'],
                }),
            },
            secondary: {
                ...deepPurple,
                ...(mode === 'light' && {
                    main: deepPurple[700],
                }),
            },
            background: {
                ...(mode === 'light' ? {
                    //default: '#FFFFFF',
                    paper: grey[900],
                    //object: '#000FFc',
                } : {
                    default: '#181818',
                    paper: '#FFFFFF',
                    //object: '#00033c',
                })
            },
            text: {
                ...(mode === 'light' ? {
                    primary: grey[900],
                    secondary: grey[800],
                } : {
                    primary: '#fff',
                    secondary: grey[500],
                }),
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
}