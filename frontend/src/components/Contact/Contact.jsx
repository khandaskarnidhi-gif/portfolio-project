import "./Contact.css";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaArrowRight
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="container">

        <h2
          className="section-title"
          data-aos="fade-up"
        >
          Let's <span>Connect</span>
        </h2>

        <p
          className="section-subtitle"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Have a project, internship opportunity, or just want to say hello?
          Feel free to reach out.
        </p>

        <div className="contact-wrapper">

          {/* Left */}

          <div
            className="contact-info"
            data-aos="fade-right"
          >

            <a
              href="mailto:khandaskarnidhi@gmail.com"
              className="contact-card"
            >
              <FaEnvelope />

              <div>

                <h3>Email</h3>

                <p>khandaskarnidhi@gmail.com</p>

                <span>
                  Send me an email
                  <FaArrowRight />
                </span>

              </div>

            </a>

            <a
              href="https://github.com/khandaskarnidhi-gif"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <FaGithub />

              <div>

                <h3>GitHub</h3>

                <p>github.com/khandaskarnidhi-gif</p>

                <span>
                  View Profile
                  <FaArrowRight />
                </span>

              </div>

            </a>

            <a
              href="https://www.linkedin.com/in/nidhi-khandaskar-a4418b389"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <FaLinkedin />

              <div>

                <h3>LinkedIn</h3>

                <p>linkedin.com/in/nidhi-khandaskar-a4418b389</p>

                <span>
                  Connect
                  <FaArrowRight />
                </span>

              </div>

            </a>

          </div>

          {/* Right */}

          <form
            className="contact-form"
            data-aos="fade-left"
          >

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">

              <FaPaperPlane />

              Send Message

            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;