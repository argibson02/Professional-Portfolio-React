import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div id="parallax" className="page">
      <section id="intro">
        <div className="container-mid text-center">
          <div className="animation-container animation-fade-down" data-animation-delay="0">
            <h1>Alex Gibson<br />Full-Stack Developer</h1>
          </div>
          <div className="animation-container animation-fade-up" data-animation-delay="300">
            <p className="subline">See my work</p>
            <a href="#about" className="scroll-down smooth-scroll"><i className="fa fa-long-arrow-down"></i></a>
          </div>
        </div>
      </section>
    </div>
  );
}
