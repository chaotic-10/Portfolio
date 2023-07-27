import React from 'react';
import './projects.css';
import movie from "../images/movie.png";
import social from "../images/social.png";
import cart from "../images/cart.png";

const Projects = () => {
  return (
    <div className="projects-container">
      <h3>Projects</h3>
      <div className="projects-grid">
        <div className="card">
          <img src={movie} className="card-img-top" alt="Movie-Land" />
          <div className="card-body">
            <h5 className="card-title"><b>Movie-Land</b></h5>
            <p className="card-text">Created a seamless social media web app that runs smoothly on all devices. A clean and fully mobile-responsive design using <b>Material UI</b>.</p>
            <div className="d-grid">
              <a href="https://github.com/chaotic-10/Movie-Land" target="_blank" className="btn btn-primary" role="button">Github</a>
              <a href="https://wonderful-smakager-5be7d5.netlify.app/" target="_blank" className="btn btn-primary" role="button">Live View</a>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={social} className="card-img-top" alt="Social Media WebApp" />
          <div className="card-body">
            <h5 className="card-title"><b>Social Media WebApp</b></h5>
            <p className="card-text">Movie App, created entirely using ReactJS, with the use of third party API integration.</p>
            <div className="d-grid">
              <a href="https://github.com/chaotic-10/Social-Media-Site" target="_blank" className="btn btn-primary" role="button">Github</a>
              <a href="https://socialwebsite2.netlify.app/" target="_blank" className="btn btn-primary" role="button">Live View</a>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={cart} className="card-img-top" alt="React-Cart" />
          <div className="card-body">
            <h5 className="card-title"><b>React-Cart</b></h5>
            <p className="card-text">Developed responsive and user-friendly eCommerce Cart section for seamless shopping experience. Using <b>ReactJs</b>.</p>
            <div className="d-grid">
              <a href="https://github.com/chaotic-10/shoppingCart" target="_blank" className="btn btn-primary" role="button">Github</a>
              <a href="https://techshoppie.netlify.app/" target="_blank" className="btn btn-primary" role="button">Live View</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
