import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaLaptopCode } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">

        <a href="#hero" className="logo">
          <FaLaptopCode />
          <span>Nidhi.</span>
        </a>

        <nav className={menuOpen ? "nav active" : "nav"}>

          <a
            href="#hero"
            className={activeSection === "hero" ? "active-link" : ""}
            onClick={closeMenu}
          >
            Home
          </a>

          <a
            href="#about"
            className={activeSection === "about" ? "active-link" : ""}
            onClick={closeMenu}
          >
            About
          </a>

          <a
            href="#skills"
            className={activeSection === "skills" ? "active-link" : ""}
            onClick={closeMenu}
          >
            Skills
          </a>

          <a
            href="#projects"
            className={activeSection === "projects" ? "active-link" : ""}
            onClick={closeMenu}
          >
            Projects
          </a>

          <a
            href="#contact"
            className={activeSection === "contact" ? "active-link" : ""}
            onClick={closeMenu}
          >
            Contact
          </a>

        </nav>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;