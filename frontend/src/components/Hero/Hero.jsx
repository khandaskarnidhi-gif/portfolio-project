import "./Hero.css";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-container">

        <div className="hero-content">

          <span className="hero-tag">
            🚀 Open to Internship Opportunities
          </span>

          <p className="hero-intro">HELLO, I'M</p>

          <h1 className="hero-title">
            Nidhi
            <br />
            <span>Khandaskar</span>
          </h1>

          <h2 className="hero-role">
            Full Stack MERN Developer
          </h2>

          <p className="hero-description">
            I build modern, responsive and scalable web applications
            using React, Node.js, Express and MongoDB. I enjoy creating
            clean user interfaces and developing efficient backend systems.
          </p>

          <div className="hero-highlights">

            <div className="highlight-card">
              <h3>3+</h3>
              <p>Projects</p>
            </div>

            <div className="highlight-card">
              <h3>MERN</h3>
              <p>Stack</p>
            </div>

            <div className="highlight-card">
              <h3>Open</h3>
              <p>For Internship</p>
            </div>

          </div>

          <a href="#projects" className="btn btn-primary hero-btn">
            View Projects
            <FaArrowRight />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;