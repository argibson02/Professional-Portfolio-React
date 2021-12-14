import React from 'react';
import './About.css';
import './Footer.css';
import Footer from './Footer.js';
import headshot from './images/alex-gibson-headshot.jpeg';
import css from './images/icons/css.png'
import express from './images/icons/express.png'
import handlebars from './images/icons/handlebars.png'
import html from './images/icons/html.png'
import js from './images/icons/js.png'
import mongodb from './images/icons/mongodb.png'
import mysql from './images/icons/mysql.png'
import nodejs from './images/icons/nodejs.png'
import react from './images/icons/react.png'

export default function About() {
  return (
    <div className="page-bg vh-100">
      <div className="container page-bg">
        <div className="row mb-2">
          <section className="h-100 bisection bisection-1 col-lg-6">
            <h1 className="bisection-h1 bisection-1-h1">about me</h1>
            <img className="profile-pic d-flex" src={headshot} alt="Professional headshot of me, Alex Gibson." />
            <p>
              I am a full-stack developer with a strong history of software
              quality assurance success and a desire to build products that work.
              I am certified in full-stack development from UC Berkeley Extension
              and have experience with Javascript, jQuery, HTML, CSS, React.js,
              SQL, MongoDB, Node.js, Express.js, various web APIs, and more. I
              have worn many hats in my previous roles as a software quality
              assurance analyst and have participated in nearly every step of the
              software development process. I bring a panoramic view to every project
              I work on to ensure that the product developed is the product that
              is needed. I am looking for new and exciting challenges as a full-stack
              developer and hope to be a key member of your team!
            </p>
          </section>
          <section className="h-100 bisection bisection-2 col-lg-6">
            <h1 className="bisection-h1 bisection-2-h1">skills</h1>
            <ul className="skills-ul">
              <li className="skills-li" id="skill-1"><img src={css} className="skills-img col-6" type="image" alt="css" /><span className="skills-label col-6"> CSS</span></li>
              <li className="skills-li" id="skill-2"><img src={express} className="skills-img col-6" type="image" alt="express" /><span className="skills-label col-6"> express.js</span></li>
              <li className="skills-li" id="skill-3"><img src={handlebars} className="skills-img col-6" type="image" alt="handlebars" /><span className="skills-label col-6"> Handlebars.js</span></li>
              <li className="skills-li" id="skill-4"><img src={html} className="skills-img col-6" type="image" alt="html" /><span className="skills-label col-6"> HTML</span></li>
              <li className="skills-li" id="skill-5"><img src={js} className="skills-img col-6" type="image" alt="javascript" /><span className="skills-label col-6"> JavaScript</span></li>
              <li className="skills-li" id="skill-6"><img src={mongodb} className="skills-img col-6" type="image" alt="mongodb" /><span className="skills-label col-6"> MongoDB</span></li>
              <li className="skills-li" id="skill-7"><img src={mysql} className="skills-img col-6" type="image" alt="mysql" /><span className="skills-label col-6"> MySQL</span></li>
              <li className="skills-li" id="skill-8"><img src={nodejs} className="skills-img col-6" type="image" alt="nodejs" /><span className="skills-label col-6"> Node.js</span></li>
              <li className="skills-li" id="skill-9"><img src={react} className="skills-img col-6" type="image" alt="react" /><span className="skills-label col-6"> React</span></li>
            </ul>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}
