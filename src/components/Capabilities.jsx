import { motion } from 'framer-motion';
import { capabilities } from '../data/capabilities';
import './Capabilities.css';

const Capabilities = () => {
  return (
    <section className="capabilities-section">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        What I Bring to the Table
      </motion.h2>

      <div className="capabilities-grid">
        {capabilities.map((cap, index) => (
          <motion.div 
            key={cap.id}
            className="capability-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="icon-wrapper">
              <cap.icon size={32} />
            </div>
            
            <h3>{cap.title}</h3>
            <p className="cap-desc">{cap.description}</p>
            
            <ul className="skill-list">
              {cap.skills.map(skill => (
                <li key={skill}>
                    <span className="check-icon">✓</span> {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Capabilities;