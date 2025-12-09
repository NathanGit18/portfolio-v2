import { useEffect } from 'react';
import { FaGithub, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import './Modal.css';

const Modal = ({ isOpen, onClose, project }) => {
    // Close modal if user presses esc key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="modal-header">
                    <h2>{project.title}</h2>
                    <button className="close-btn" onClick={onClose}>
                        <FaTimes />
                    </button>
                </div>

                {/* Body */}
                <div className="modal-body">
                    <p className="modal-desc">{project.description}</p>

                    <div className="modal-tags">
                        {project.tags.map((tag) => (
                            <span key={tag} className="modal-tag">{tag}</span>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="modal-actions">
                        <a href={project.github} target="_blank" rel="noreferrer" className="btn primary">
                            <FaGithub /> View Code
                        </a>
                        {project.demo && (
                            <a href={project.demo} target="_blank" rel="noreferrer" className="btn secondary">
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Modal;