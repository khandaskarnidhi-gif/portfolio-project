import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
  FaArrowUp
} from "react-icons/fa";

function Footer() {

  const year = new Date().getFullYear();

  return (

    <footer className="footer">

      <div className="container">

        <div className="footer-content">

          {/* Left */}

          <div className="footer-brand">

            <h2>
              Nidhi<span>.</span>
            </h2>

            <p>
              Passionate Full Stack MERN Developer creating modern,
              responsive and user-friendly web applications.
            </p>

          </div>

          {/* Center */}

          <div className="footer-links">

            <h3>Quick Links</h3>

            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>

          </div>

          {/* Right */}

          <div className="footer-social">

            <h3>Connect</h3>

            <div className="social-icons">

              <a
                href="https://github.com/khandaskarnidhi-gif"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/nidhi-khandaskar-a4418b389"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:khandaskarnidhi@gmail.com"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>

            Made with <FaHeart className="heart" /> using React & Node.js

          </p>

          <p>

            © {year} Nidhi Khandaskar. All Rights Reserved.

          </p>

        </div>

      </div>

      <a
        href="#hero"
        className="scroll-top"
        aria-label="Back to top"
      >
        <FaArrowUp />
      </a>

    </footer>

  );

}

export default Footer;