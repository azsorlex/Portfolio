import { Link, Tooltip } from "@mui/material";

export default function NavLink({ title, icon, to, target, rel }) {
    return (
        <Tooltip title={title}>
            <Link className="navlink" href={to} target={target} rel={rel} color="secondary">
                {icon}
            </Link>
        </Tooltip>
    );
}