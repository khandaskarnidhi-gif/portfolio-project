import { useEffect, useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaLaptopCode,
  FaGlobe
} from "react-icons/fa";

import API from "../../services/api";

import "./Projects.css";

function Projects() {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchProjects = async () => {

      try{

        const res = await API.get("/projects");

        setProjects(res.data);

      }
      catch(error){

        console.log(error);

      }
      finally{

        setLoading(false);

      }

    };

    fetchProjects();

  }, []);

  return (

    <section
      className="projects"
      id="projects"
    >

      <div className="container">

        <h2
          className="section-title"
          data-aos="fade-up"
        >
          Featured <span>Work</span>
        </h2>

        <p
          className="section-subtitle"
          data-aos="fade-up"
        >
          Some projects I've built while learning Full Stack Development.
        </p>

        {loading ? (

          <div className="loading">
            Loading Projects...
          </div>

        ) : (

          <div className="projects-grid">

            {projects.map((project,index)=>(

              <div
                className="project-card"
                key={project._id}
                data-aos="fade-up"
                data-aos-delay={index*100}
              >

                <div className="project-banner">

                  <div className="project-type">

                    <FaLaptopCode />

                    <span>
                      {project.category}
                    </span>

                  </div>

                </div>

                <div className="project-content">

                  <h3>
                    {project.title}
                  </h3>

                  <p>

                    {project.description}

                  </p>

                  <div className="tech-list">

                    {project.technologies.map((tech,index)=>(

                      <span key={index}>

                        {tech}

                      </span>

                    ))}

                  </div>

                  <div className="project-buttons">

                    <a

                      href={project.githubLink}

                      target="_blank"

                      rel="noreferrer"

                    >

                      <FaGithub />

                      GitHub

                    </a>

                    <a

                      href={project.liveDemo}

                      target="_blank"

                      rel="noreferrer"

                    >

                      <FaGlobe />

                      Live Demo

                    </a>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </section>

  );

}

export default Projects;