import './Navbar.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Brand / Logo */}
      <span className="logo">
        Nathan Lambourne
      </span>

      {/* Right Side: Socials + Resume */}
      <div className="nav-actions">
        
        {/* Social Icons */}
        <a 
          href="https://github.com/NathanGit18" 
          target="_blank" 
          rel="noreferrer" 
          className="social-icon"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>

        <a 
          href="https://linkedin.com/in/nathanldev" 
          target="_blank" 
          rel="noreferrer" 
          className="social-icon"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>

        {/* Separator Line */}
        <div className="separator"></div>

        {/* Resume Button */}
        <a 
          href="/Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="resume-btn"
        >
          <HiDownload size={18} />
          <span>Resume</span>
        </a>

      </div>
    </nav>
  );
};

export default Navbar;