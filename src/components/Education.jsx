import { motion } from 'framer-motion';
import { education } from '../data/education';
import './Education.css';

const Education = () => {
  return (
    <section className="education-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Education History
      </motion.h2>

      <div className="timeline">
        {/* The Vertical Line */}
        <div className="timeline-line"></div>

        {education.map((edu, index) => (
          <motion.div 
            key={edu.id}
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* The Icon Dot */}
            <div className="timeline-dot">{edu.icon}</div>
            
            {/* The Content Card */}
            <div className="timeline-content">
              <div className="timeline-header">
                <span className="timeline-date">{edu.date}</span>
                <span className="timeline-loc">{edu.location}</span>
              </div>
              
              <h3>{edu.school}</h3>
              <div className="degree-badge">{edu.degree}</div>
              <p>{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;