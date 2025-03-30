import { Link, Tooltip } from "@mui/material";
import { ForwardedRef, forwardRef } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { GITHUB_URL_PREFIX } from "../../data/constants/GlobalConstants";
import { Code, DocumentScanner, Home, LinkedIn, Portrait, School, Send } from "@mui/icons-material";

interface NavLinkProps {
    title: string,
    href: string,
    icon: string,
    target?: string,
    rel?: string,
}

interface IconProps {
    icon: string,
}

const Icon = forwardRef(function Icon(props: IconProps, ref: ForwardedRef<SVGSVGElement>) {
    const { icon } = props;
    switch (icon) {
        case 'home':
            return <Home {...props} ref={ref} />
        case 'code':
            return <Code {...props} ref={ref} />
        case 'linkedin':
            return <LinkedIn {...props} ref={ref} />
        case 'send':
            return <Send {...props} ref={ref} />;
        case 'portrait':
            return <Portrait {...props} ref={ref} />;
        case 'school':
            return <School {...props} ref={ref} />;
        case 'documentscanner':
            return <DocumentScanner {...props} ref={ref} />;
        default:
            throw new Error(`Icon ${icon} is not supported!`)
    }
});

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