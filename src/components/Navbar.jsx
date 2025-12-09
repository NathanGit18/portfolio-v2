import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/" className="logo">
                Nathan Lambourne
            </a>

            <ul className="nav-links">
                <li>
                    <a href="#about" className="nav-link">About</a>
                </li>
                <li>
                    <a href="#projects" className="nav-link">Projects</a>
                </li>
                <li>
                    <a href="#contact" className="nav-link">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar
