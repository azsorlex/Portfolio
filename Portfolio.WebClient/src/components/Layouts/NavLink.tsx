import { Link, Tooltip } from "@mui/material";

interface NavLinkProps {
    title: string,
    icon: any,
    to: string,
    target?: string,
    rel?: string,
}

export default function NavLink({ title, icon, to, target, rel }: NavLinkProps) {
    return (
        <Tooltip title={title}>
            <Link className="navlink" href={to} target={target} rel={rel} color="secondary">
                {icon}
            </Link>
        </Tooltip>
    );
}