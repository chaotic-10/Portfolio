import React from 'react'
import './skills.css'
import bootstrap from '../images/bootstrap_(1).svg';
import html from '../images/html_(1).svg';
import sass from '../images/sass_(1).svg';
import react from '../images/react_(1).svg';
import mysql from '../images/mysql_(1).svg';
import redux from '../images/redux.svg';
import javascript from '../images/javascript_(1).svg'; // Correct the import to the actual JavaScript image file.


const Skills = () => {
  return (
    <div style={{backgroundColor:" #2e2e1f"}} >
      <h3>Achievements</h3>
      <div className="achievements-container">
      <div className="achievements-grid">
        <div className="achievement">
          <p className='points'>Secured an All India Rank of 8487 in round C, in Google KickStart’21.</p>
        </div>
        <div className="achievement">
          <p className='points'>Secured a college rank of 17 and AIR 5056 in CodeKaze’23.</p>
        </div>
        <div className="achievement">
          <p className='points'>Participated In Flipkart Grid 4.0, and cleared its round 1.</p>
        </div>
        <div className="achievement">
          <p className='points'>Highest Rank on Codechef – 3 star (1601), 120+ solved problems.</p>
        </div>
        <div className="achievement">
          <p className='points'>Solved over 300+ problems on platforms like GFG and Leetcode</p>
        </div>
        
      </div>
    </div>

    <h3>Skills</h3>
    <div class="container "  >
    <img className="icons "src= {bootstrap} alt="bootstrap" />
    <img className="icons "src={html} alt="sass" />
    <img className="icons "src={sass} alt="html" />
    <img className="icons "src={redux} alt="html" />
    <img className="icons "src={react} alt="html" />
    <img className="icons "src={javascript} alt="html" />
    <img className="icons "src={mysql} alt="html" />
</div>
</div>
  )
}

export default Skills