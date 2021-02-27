import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa"
import './header.css';

function Header() {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check"/>
      <div className="nav-header">
        <div className="nav-title">
          <Link to="/">
              Frontend<span className="colorText">Projects</span>
          </Link>
        </div>
      </div>
      <div className="nav-links">
        <Link to="/calculator">Calculator</Link>
        <Link to="/drum-machine">Drum Machine</Link>
        <Link to="/markdown-previewer">Markdown Previewer</Link>
        <Link to="/pomodoro-clock">Pomodoro Clock</Link>
        <Link to="/random-quote-machine">Quote Machine</Link>
        <a href="https://github.com/sourabbanka22/frontend-projects" target="_blank" rel="noreferrer">
          <FaGithub color="#5AFF3D"/>
        </a>
      </div>
    </div>
  );
}
export default Header;