import React from 'react';
import Navbar from './Navbar';
import './home.css';
import pfp from "../images/pfp.jpg"; // Corrected import statement
import resume from "../images/document.png"; // Corrected import statement
const Home = () => {
  return (
    <div style={{ backgroundColor: "#1b1c19" }}>
      <div style={{ display: "flex", justifyContent: "center" }} className="container">
        <img style={{ paddingTop: "3rem", height: "20rem" }} src={pfp}className="rounded-circle mx-auto d-block" alt="..." />
      </div>
      <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }} className="container">
        <h1>Hi 👋, I'm Shreyaskar Srivastava</h1>
        <p>An aspiring software engineer with a passion for learning and creating.</p>
        
      </div>
      <div className="pb-4"style={{display:"flex", justifyContent:"center"}}>
      <a  target="_blank" href="https://drive.google.com/file/d/1v2H7O4_o_7O6akAkoCEHEfMudxIEpX6z/view?usp=sharing"><img style={{height:"3rem"}}src={resume} alt="error" /><p3><b >RESUME</b></p3></a>
      </div>
     
      
    </div>
  );
};

export default Home;
