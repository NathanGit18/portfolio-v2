import './BentoGrid.css';

const BentoGrid = () => {
    return (
        <div className="bento-container">
            <div className="bento-item area-1">
                <h2>Hi, I'm Nathan 👋</h2>
                <p>NSCC IT Student & Developer based in Halifax, Nova Scotia.</p>
            </div>

            <div className="bento-item area-2">
                <h3>Featured Project</h3>
                <p>Portfolio</p>
            </div>

            <div className="bento-item area-3">
                <h3>Tech Stack</h3>
                <ul>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>Vite</li>
                    <li>Netlify</li>
                    <li>Git</li>
                </ul>
            </div>

            <div className="bento-item area-4">
                <h3>Contact</h3>
                <p>Github | LinkedIn</p>
            </div>

            <div className="bento-item area-5">
                <h3>About Me</h3>
                <p>I build clean, efficient code and I love the gym.</p>
            </div>
        </div>
    );
};

export default BentoGrid;