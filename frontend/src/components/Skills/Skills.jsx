import "./Skills.css";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb
} from "react-icons/si";

const skills = [
  {
    icon: <FaReact />,
    title: "React",
    desc: "Building fast and interactive user interfaces."
  },
  {
    icon: <FaNodeJs />,
    title: "Node.js",
    desc: "Backend development with JavaScript runtime."
  },
  {
    icon: <SiExpress />,
    title: "Express.js",
    desc: "Creating REST APIs and backend services."
  },
  {
    icon: <SiMongodb />,
    title: "MongoDB",
    desc: "NoSQL database for scalable applications."
  },
  {
    icon: <SiJavascript />,
    title: "JavaScript",
    desc: "Modern ES6+ JavaScript programming."
  },
  {
    icon: <FaHtml5 />,
    title: "HTML5",
    desc: "Semantic and accessible web structure."
  },
  {
    icon: <FaCss3Alt />,
    title: "CSS3",
    desc: "Responsive layouts and beautiful UI."
  },
  {
    icon: <FaGitAlt />,
    title: "Git",
    desc: "Version control and collaboration."
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    desc: "Hosting repositories and managing projects."
  }
];

function Skills() {
  return (
    <section className="skills" id="skills">

      <div className="container">

        <h2
          className="section-title"
          data-aos="fade-up"
        >
          My <span>Skills</span>
        </h2>

        <p
          className="section-subtitle"
          data-aos="fade-up"
        >
          Technologies and tools I use to build modern web applications.
        </p>

        <div className="skills-grid">

          {skills.map((skill, index) => (

            <div
              className="skill-card"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 70}
            >

              <div className="skill-icon">
                {skill.icon}
              </div>

              <h3>{skill.title}</h3>

              <p>{skill.desc}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;