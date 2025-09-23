import React from "react";
import "../css/Home.css";

import"../css/App.css";


export default function Home() {
  return (
    
    <div className="home">
      <img src="./assets/home.JPG" alt="John Doe" />
      <div className="intro">
        <h1>Bonjour, je suis John Doe</h1>
        <h2>Développeur Web full stack</h2>
        <button type="button">en savoir plus</button>
      </div>
      
          <section className="about-skills">
      <div className="about">
          <div>
            <h2>A propos</h2>
           <div className="ligne"></div>
        </div>
         <div className="skill-bar"></div>
        <img src="./assets/img.jpg" alt="John Doe" className="profile-pic" />
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>
          Nullam scelerisque leo nec nisi tincidunt, eu tincidunt odio
          tincidunt.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi aliquam
          fugiat minus, cum facilis quo vero ea impedit porro repudiandae!
        </p>
      </div>
      

      <div className="skills">
        <div>
          <h2>Mes compétences</h2>
           <div className="ligne"></div>
        </div>
        <div className="skill-bar">
          <span>HTML5 90%</span>
          <div className="bar html"></div>
        </div>
        <div className="skill-bar">
          <span>CSS3 80%</span>
          <div className="bar css"></div>
        </div>
        <div className="skill-bar">
          <span>JavaScript 70%</span>
          <div className="bar js"></div>
        </div>
        <div className="skill-bar">
          <span>PHP 60%</span>
          <div className="bar php"></div>
        </div>
        <div className="skill-bar">
          <span>React 50%</span>
          <div className="bar react"></div>
        </div>
      </div>


         
    </section>
    </div>
  );
}
