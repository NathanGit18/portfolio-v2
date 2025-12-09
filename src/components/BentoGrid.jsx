import { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';
import './BentoGrid.css';
import { 
  FaReact, FaJs, FaCss3Alt, FaHtml5, 
  FaJava, FaLinux, FaDocker, FaPython, 
  FaDatabase
} from 'react-icons/fa';
import { SiVite, SiC, SiWireshark } from 'react-icons/si';
import profileImg from '../assets/pfp.jpg';

const BentoGrid = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const portfolioProject = {
        title: 'Portfolio Website',
        description: 'This is the current portfolio you are viewing. It is built with React, Vite, and CSS Grid. Features a responsive Bento layout, dark mode, and custom animations.',
        tags: ['React', 'JavaScript', 'CSS', 'Vite', 'Netlify'],
        github: 'https://github.com/NathanGit18/portfolio-v2'
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <div className="app-container">
        
        {/* 1. The Animated Grid Container */}
        <motion.div 
            className="bento-container"
            variants={containerVariants}
            initial="hidden"
            animate="show"
        >
            
            {/* Area 1: Hero (Tall Left) */}
            <motion.div className="bento-item area-1" variants={itemVariants}>
            <div className="hero-img-container">
                <img src={profileImg} alt="Nathan Lambourne" className="profile-img" />
            </div>
            <div className="hero-text">
                <h2>Hi, I'm Nathan <span className="wave">👋</span></h2>
                <p>NSCC IT Student & Developer based in Halifax, Nova Scotia.</p>
            </div>
            </motion.div>

            {/* Area 2: Featured Project (Top Right) */}
            <motion.div 
            className="bento-item area-2 project-card" 
            variants={itemVariants}
            onClick={() => setIsModalOpen(true)}
            style={{ cursor: 'pointer' }}
            >
            <div className="project-badge">Featured</div>
            <div className="project-content">
                <h3>Portfolio</h3>
                <p>Built with React & Vite</p>
                <div className="tags">
                    <span className="tag">React</span>
                    <span className="tag">Vite</span>
                    <span className="tag">CSS</span>
                </div>
            </div>
            </motion.div>

            {/* Area 3: Toolbox (Tall Far Right) */}
            <motion.div className="bento-item area-3" variants={itemVariants}>
            <h3>My Toolbox</h3>
            <div className="icon-grid">
                <div className="icon-box" data-tooltip="JavaScript"><FaJs size={28} color="#F7DF1E" /></div>
                <div className="icon-box" data-tooltip="React"><FaReact size={28} color="#61DAFB" /></div>
                <div className="icon-box" data-tooltip="Python"><FaPython size={28} color="#3776AB" /></div>
                <div className="icon-box" data-tooltip="Java"><FaJava size={28} color="#007396" /></div>
                <div className="icon-box" data-tooltip="C Programming"><SiC size={28} color="#A8B9CC" /></div>
                <div className="icon-box" data-tooltip="HTML5"><FaHtml5 size={28} color="#E34F26" /></div>
                <div className="icon-box" data-tooltip="CSS3"><FaCss3Alt size={28} color="#1572B6" /></div>
                <div className="icon-box" data-tooltip="SQL"><FaDatabase size={28} color="#f2f2f2" /></div>
                <div className="icon-box" data-tooltip="Linux"><FaLinux size={28} color="#FCC624" /></div>
                <div className="icon-box" data-tooltip="Docker"><FaDocker size={28} color="#2496ED" /></div>
                <div className="icon-box" data-tooltip="Wireshark"><SiWireshark size={28} color="#1679A7" /></div>
                <div className="icon-box" data-tooltip="Vite"><SiVite size={28} color="#646CFF" /></div>
            </div>
            </motion.div>

            {/* Area 5: About Me (Middle Center) */}
            <motion.div className="bento-item area-5" variants={itemVariants}>
            <h3>About Me</h3>
            <p>I build clean, efficient code and I love the gym.</p>
            </motion.div>

            {/* Area 4: Status (Bottom Center) */}
            <motion.div className="bento-item area-4 status-box" variants={itemVariants}>
            <h3>Status</h3>
            <div className="status-indicator">
                <span className="pulsing-dot"></span>
                <p>Open to Work</p>
            </div>
            </motion.div>

        </motion.div>

        {/* The Modal */}
        <Modal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            project={portfolioProject} 
        />

    </div>
  );
};

export default BentoGrid;