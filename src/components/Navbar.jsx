import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div style={{ position: "sticky", top: "0", zIndex: "100" }}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav w-100 justify-content-around">
              <li className="nav-item">
                <Link
                  to="home"
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="active-link"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="projects"
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="active-link"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="skills"
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="active-link"
                >
                  Achievements
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="active-link"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
