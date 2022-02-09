import React from 'react';
import './About.css';
import './Footer.css';
import Footer from './Footer.js';
import headshot from '../assets/images/alex-gibson-headshot-min.jpeg';


import css from '../assets/black-icons/css3.png';
import express from '../assets/black-icons/express.png';
import handlebars from '../assets/black-icons/handlebars.png';
import html from '../assets/black-icons/html5.png';
import js from '../assets/black-icons/javascript.png';
import mongodb from '../assets/black-icons/mongodb.png';
import mysql from '../assets/black-icons/mysql.png';
import nodejs from '../assets/black-icons/nodejs.png';
import react from '../assets/black-icons/react.png';

import jquery from '../assets/black-icons/jquery.png';
import redux from '../assets/black-icons/redux.png';
import jesti from '../assets/black-icons/jest.png';
import accessibility from '../assets/black-icons/accessibility.png';
import bootstrap from '../assets/black-icons/bootstrap.png';
import sequelize from '../assets/black-icons/sequelize.png';
import graphql from '../assets/black-icons/graphql.png';
import heroku from '../assets/black-icons/heroku.png';
import git from '../assets/black-icons/git.png';


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
            <div className="row skill-box">
              <ul className="skills-ul col-sm-6">
                <li className="skills-li" id="skill-1"><img src={js} className="skills-img col-6" type="image" alt="javascript" /><span className="skills-label col-6"> JavaScript</span></li>
                <li className="skills-li" id="skill-2"><img src={jquery} className="skills-img col-6" type="image" alt="jquery" /><span className="skills-label col-6"> jQuery</span></li>
                <li className="skills-li" id="skill-3"><img src={react} className="skills-img col-6" type="image" alt="react" /><span className="skills-label col-6"> React</span></li>
                <li className="skills-li" id="skill-4"><img src={redux} className="skills-img col-6" type="image" alt="redux" /><span className="skills-label col-6"> Redux</span></li>
                <li className="skills-li" id="skill-5"><img src={handlebars} className="skills-img col-6" type="image" alt="handlebars" /><span className="skills-label col-6"> Handlebars.js</span></li>
                <li className="skills-li" id="skill-6"><img src={nodejs} className="skills-img col-6" type="image" alt="nodejs" /><span className="skills-label col-6"> Node.js</span></li>
                <li className="skills-li" id="skill-7"><img src={express} className="skills-img col-6" type="image" alt="express" /><span className="skills-label col-6"> Express.js</span></li>
                <li className="skills-li" id="skill-8"><img src={jesti} className="skills-img col-6" type="image" alt="jest" /><span className="skills-label col-6"> Jest</span></li>
                <li className="skills-li" id="skill-9"><img src={accessibility} className="skills-img col-6" type="image" alt="accessibility" /><span className="skills-label col-6"> Accessibility</span></li>
              </ul>
              <ul className="skills-ul col-sm-6">
                <li className="skills-li" id="skill-1"><img src={mysql} className="skills-img col-6" type="image" alt="mysql" /><span className="skills-label col-6"> MySQL</span></li>
                <li className="skills-li" id="skill-2"><img src={sequelize} className="skills-img col-6" type="image" alt="sequelize" /><span className="skills-label col-6"> Sequelize</span></li>
                <li className="skills-li" id="skill-3"><img src={mongodb} className="skills-img col-6" type="image" alt="mongodb" /><span className="skills-label col-6"> MongoDB</span></li>
                <li className="skills-li" id="skill-4"><img src={graphql} className="skills-img col-6" type="image" alt="graphql" /><span className="skills-label col-6"> GraphQL</span></li>
                <li className="skills-li" id="skill-5"><img src={html} className="skills-img col-6" type="image" alt="html" /><span className="skills-label col-6"> HTML5</span></li>
                <li className="skills-li" id="skill-6"><img src={css} className="skills-img col-6" type="image" alt="css" /><span className="skills-label col-6"> CSS3</span></li>
                <li className="skills-li" id="skill-7"><img src={bootstrap} className="skills-img col-6" type="image" alt="bootstrap" /><span className="skills-label col-6"> Bootstrap</span></li>
                <li className="skills-li" id="skill-8"><img src={heroku} className="skills-img col-6" type="image" alt="heroku" /><span className="skills-label col-6"> Heroku</span></li>
                <li className="skills-li" id="skill-9"><img src={git} className="skills-img col-6" type="image" alt="git" /><span className="skills-label col-6"> Git</span></li>
              </ul>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}
