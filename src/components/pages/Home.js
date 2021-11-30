import React, { useEffect } from 'react';
import './Home.css';

export default function Home() {
  useEffect(() => {
    // Add event listener for mouse movements
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");

    // Parallax magic happens here
    function parallax(e) {
      let _w = window.innerWidth / 2;
      let _h = window.innerHeight / 2;
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      let _depth1 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
      let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
      let _depth3 = `${50 - (_mouseX - _w) * 0.03}% ${50 - (_mouseY - _h) * 0.03}%`;
      let x = `${_depth3}, ${_depth2}, ${_depth1}`;
      elem.style.backgroundPosition = x;
    }
  });

  return (
    <div id="parallax" className="page">
      <section id="intro">
        <div className="container-mid text-center row">
          <div className="animation-container animation-fade-down col-12" data-animation-delay="0">
            <h1 className="gibson-placard">Alex Gibson<br />Full-Stack Developer</h1>
          </div>
        </div>
        <div className="container-mid text-center row">
          <div className="animation-container animation-fade-up col-12" data-animation-delay="300">
            <p className="subline">i need a job!<br />seeking new challenges and opportunities.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
