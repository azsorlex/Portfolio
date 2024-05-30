import { deepPurple, grey } from "@mui/material/colors";

export default function GetDesignTokens(mode) {
    return ({
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
                ...deepPurple,
                ...(mode === 'light' && {
                    main: deepPurple[700],
                }),
            },
            background: {
                ...(mode === 'light' ? {
                    default: '#FFFFFF',
                    paper: grey[900]
                } : {
                    default: '#000000',
                    paper: '#FFFFFF'
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
    });
}