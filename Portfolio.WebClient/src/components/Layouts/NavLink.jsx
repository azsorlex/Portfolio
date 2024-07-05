import { Link, Tooltip } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function NavLink({ title, icon, to, target, rel }) {
    return (
        <Tooltip title={title} color="secondary">
            <Link component={RouterLink} className="navlink" to={to} target={target} rel={rel}>
                {icon}
            </Link>
        </Tooltip>
    );
}