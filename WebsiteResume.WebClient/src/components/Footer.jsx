import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            Check out development progress at <Link to='https://github.com/azsorlex/website-resume' target="_blank" rel="noopener noreferrer">my repository</Link>
        </footer>
    );
}

export default Footer;