import "./About.css";
import { FaGraduationCap, FaLaptopCode, FaLocationDot } from "react-icons/fa6";

function About() {
  return (
    <section className="about" id="about">

      <div className="container">

        <h2
          className="section-title"
          data-aos="fade-up"
        >
          About <span>Me</span>
        </h2>

        <p
          className="section-subtitle"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Passionate about creating beautiful and scalable web applications.
        </p>

        <div className="about-grid">

          {/* Left */}

          <div
            className="about-left"
            data-aos="fade-right"
          >

            <h3>Hello 👋</h3>

            <p>
              I'm <strong>Nidhi Khandaskar</strong>, a Computer Science
              student and aspiring Full Stack MERN Developer from Pune.
            </p>

            <p>
              I enjoy building responsive web applications,
              learning new technologies, and solving real-world
              problems through code.
            </p>

            <p>
              My current focus is improving my MERN Stack skills,
              strengthening Data Structures & Algorithms, and
              preparing for Software Development roles.
            </p>

          </div>

          {/* Right */}

          <div
            className="about-right"
            data-aos="fade-left"
          >

            <div className="info-card">

              <FaGraduationCap className="info-icon" />

              <div>

                <h4>Education</h4>

                <p>
                  B.Tech Computer Science
                  <br />
                  First Year
                </p>

              </div>

            </div>

            <div className="info-card">

              <FaLaptopCode className="info-icon" />

              <div>

                <h4>Current Focus</h4>

                <p>
                  MERN Stack
                  <br />
                  Full Stack Development
                </p>

              </div>

            </div>

            <div className="info-card">

              <FaLocationDot className="info-icon" />

              <div>

                <h4>Location</h4>

                <p>
                  Pune, Maharashtra
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;