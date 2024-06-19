import { ErrorOutline, Loop } from "@mui/icons-material";

export default function LoadingIcon({ source }) {
    return (
        source === null
            ? <ErrorOutline color="error" fontSize="large" />
            : <Loop className="spin" fontSize="large" />
    );
}