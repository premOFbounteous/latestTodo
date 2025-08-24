import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:your@email.com">
          <FaEnvelope />
        </a>
      </div>
      <p>© 2025 Movie Roller. All rights reserved.</p>
    </footer>
  );
}
