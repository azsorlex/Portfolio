import { grey, red } from "@mui/material/colors";

const GetDesignTokens = (mode) => ({
    palette: {
        mode,
        primary: {
            ...(mode === 'light' ? {
                main: grey[900],
            } : {
                main: grey['A100']
            }),
        },
        secondary: {
            ...red,
            ...(mode === 'dark' && {
                main: red[900],
            }),
        },
        ...(mode === 'light' ? {
            background: {
                default: '#FFFFFF',
                paper: grey[900]
            },
        } : {
            background: {
                default: '#000000',
                paper: '#FFFFFF'
            }
        }),
        text: {
            ...(mode === 'light'
                ? {
                    primary: grey[900],
                    secondary: grey[800],
                }
                : {
                    primary: '#fff',
                    secondary: grey[500],
                }),
        },
    },
});

export default GetDesignTokens;