import { Link, Tooltip } from "@mui/material";
import { ReactElement } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { GITHUB_URL_PREFIX } from "../../data/constants/GlobalConstants";
import { Code, Home, LinkedIn, Send } from "@mui/icons-material";

interface NavLinkProps {
    title: string,
    href: string,
    icon: ReactElement | string,
    target?: string,
    rel?: string,
}

interface IconProps {
    icon: ReactElement | string,
}

function Icon({ icon }: IconProps) : ReactElement {
    if (typeof icon === 'string') {
        switch (icon) {
            case 'home':
                return <Home />
            case 'code':
                return <Code />
            case 'linkedin':
                return <LinkedIn />
            case 'send':
                return <Send />;
        }
    }

    return icon as ReactElement;
}

export default function NavLink({ title, href, icon, target, rel }: NavLinkProps) {
    const { pathname } = useLocation();
    const github = href.startsWith(GITHUB_URL_PREFIX);

    return github || href.startsWith(pathname) && href.includes('#')
        ?
        <Link className={`navlink${github ? " navlink-github" : ""}`}
            color="secondary"
            href={href}
            target={target}>
            <Tooltip title={title}>
                <Icon icon={icon} />
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
                <Icon icon={icon} />
            </Tooltip>
        </Link>;
}