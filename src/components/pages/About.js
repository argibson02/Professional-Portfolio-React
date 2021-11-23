import React from 'react';
import './About.css';
import './Footer.css';
import Footer from './Footer.js';

export default function About() {
  return (
    <div className="container">
      <div className="row">
        <section className="bisection bisection-1 col-lg-6">
          <h1>about me</h1>
          <img src="./images/alex-gibson-headshot.jpeg" alt="Professional headshot of me, Alex Gibson." />
          <p>
            Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
            Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
            mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
            lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
            imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
            in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
          </p>
        </section>
        <section className="bisection col-lg-6">
          <h1>skills</h1>
          <p>
            Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
            Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
            mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
            lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
            imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
            in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
}
