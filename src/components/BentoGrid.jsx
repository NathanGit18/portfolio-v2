import './BentoGrid.css';
import { 
  FaReact, FaJs, FaCss3Alt, FaHtml5, 
  FaJava, FaLinux, FaDocker, FaPython, 
  FaDatabase, FaGithub, FaLinkedin 
} from 'react-icons/fa';
import { SiVite, SiC, SiWireshark } from 'react-icons/si';

const BentoGrid = () => {
    return (
        <div className="bento-container">
            <div className="bento-item area-1">
                <div className="hero-content">
                    <h2>Hi, I'm Nathan <span className="wave">👋</span></h2>
                    <p>NSCC IT Student & Developer based in Halifax, Nova Scotia.</p>  
                </div>
                
            </div>

            <div className="bento-item area-2">
                <h3>Featured Project</h3>
                <p>Portfolio</p>

                <div className="tags">
                    <span className="tag">React</span>
                    <span className="tag">JavaScript</span>
                    <span className="tag">CSS</span>
                    <span className="tag">Vite</span>
                    <span className="tag">Netlify</span>
                </div>
            </div>

            <div className="bento-item area-3">
                <h3>My Toolbox</h3>
                <div className="icon-grid">
                    {/* Core Languages */}
                    <div className="icon-box" data-tooltip="JavaScript"><FaJs size={32} color="#F7DF1E" /></div>
                    <div className="icon-box" data-tooltip="React"><FaReact size={32} color="#61DAFB" /></div>
                    <div className="icon-box" data-tooltip="Python"><FaPython size={32} color="#3776AB" /></div>
                    <div className="icon-box" data-tooltip="Java"><FaJava size={32} color="#007396" /></div>
                    <div className="icon-box" data-tooltip="C Programming"><SiC size={32} color="#A8B9CC" /></div>
                    
                    {/* Web & Data */}
                    <div className="icon-box" data-tooltip="HTML5"><FaHtml5 size={32} color="#E34F26" /></div>
                    <div className="icon-box" data-tooltip="CSS3"><FaCss3Alt size={32} color="#1572B6" /></div>
                    <div className="icon-box" data-tooltip="SQL"><FaDatabase size={32} color="#f2f2f2" /></div>

                    {/* Systems & Tools */}
                    <div className="icon-box" data-tooltip="Linux"><FaLinux size={32} color="#FCC624" /></div>
                    <div className="icon-box" data-tooltip="Docker"><FaDocker size={32} color="#2496ED" /></div>
                    <div className="icon-box" data-tooltip="Wireshark"><SiWireshark size={32} color="#1679A7" /></div>
                </div>
            </div>

            <div className="bento-item area-4 social-box">
                <h3>Connect</h3>
                <div className="social-links">
                    <a href="https://github.com/NathanGit18" target="_blank" rel="noopener noreferrer" className="social-btn">
                        <FaGithub size={28} />
                    </a>
                    <a href="https://linkedin.com/in/nathanldev" target="_blank" rel="noopener noreferrer" className="social-btn">
                        <FaLinkedin size={28} />
                    </a>
                </div>
            </div>

            <div className="bento-item area-5">
                <h3>About Me</h3>
                <p>I build clean, efficient code and I love the gym.</p>
            </div>
        </div>
    );
};

export default BentoGrid;