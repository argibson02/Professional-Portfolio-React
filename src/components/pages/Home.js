import React, { useEffect } from 'react';
import './Home.css';

export default function Home() {
  useEffect(() => {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");

    // Magic happens here
    function parallax(e) {
      let _w = window.innerWidth / 2;
      let _h = window.innerHeight / 2;
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      let _depth1 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
      let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
      let _depth3 = `${50 - (_mouseX - _w) * 0.03}% ${50 - (_mouseY - _h) * 0.03}%`;
      let x = `${_depth3}, ${_depth2}, ${_depth1}`;
      // console.log(x);
      elem.style.backgroundPosition = x;
    }
  });

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
