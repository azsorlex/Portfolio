import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>Alexander Rozsa</h1>
            <Link to="/">Homepage</Link>
            <br />
            <Link to="/skills">Skills</Link>
        </header>
    );
}

export default Header;