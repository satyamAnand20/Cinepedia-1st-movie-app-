import "../css/Footer.css"
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

function Footer() {
  return (
    <footer className="cine-footer">
      <div className="footer-content">
        <h3 className="logo">Cinepedia 🎬</h3>

        <p className="footer-text">© {new Date().getFullYear()} Cinepedia. All rights reserved.</p>

        <div className="footer-icons">
          <a href="https://github.com/satyamAnand20" target="_blank" rel="noopener noreferrer">
            <SiGithub />
          </a>
          <a href="https://www.linkedin.com/in/satyam-anand-32a525372/" target="_blank" rel="noopener noreferrer">
            <SiLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

