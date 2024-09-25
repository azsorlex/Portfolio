import { Link, Tooltip } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

interface NavLinkProps {
    title: string,
    href: string,
    icon: any,
    target?: string,
    rel?: string,
}

export default function NavLink({ title, href, icon, target, rel }: NavLinkProps) {
    const { pathname } = useLocation();

    return href.startsWith(pathname) && href.includes('#') ?
        <Link className="navlink"
            color="secondary"
            href={href}
            target={target}>
            <Tooltip title={title}>
                {icon}
            </Tooltip>
        </Link>
        :
        <Link component={RouterLink}
            color="secondary"
            className="navlink"
            to={href}
            target={target}
            rel={rel}>
            <Tooltip title={title}>
                {icon}
            </Tooltip>
        </Link>;
}